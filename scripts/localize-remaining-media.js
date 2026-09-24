#!/usr/bin/env node
/**
 * JEDNORAZOVÝ SKRIPT – spustiť ručne (potrebuje dočasne "sharp"):
 *   npm install --no-save sharp && node scripts/localize-remaining-media.js
 *
 * Dotiahne médiá, ktoré scripts/migrate-media-local.js nezachytil a stále
 * odkazujú na starý web (qrlink.sk/new/wp-content/uploads/...):
 *  - fotky vložené PRIAMO V TEXTE zastavenia ("![](https://...)") - pôvodný
 *    skript prepisoval len polia, ktorých celá hodnota je URL súboru
 *    (cover/galeria/audio), nie URL schované vnútri dlhšieho textu,
 *  - polia cover/foto/galeria/audio pridané neskoršou migráciou.
 *
 * Kde je to možné, POUŽIJE UŽ STIAHNUTÝ súbor z galérie/coveru toho istého
 * záznamu (fotky z textu sa pri migrácii pridávali aj do galérie, takže sú
 * už stiahnuté a skomprimované) - podľa zhody mena súboru. Inak stiahne,
 * fotku skomprimuje (rovnaké kroky ako compress-migrated-images.js, cieľ
 * max. 400 KB, .png -> .jpg) a uloží pod menom, ktoré na disku ešte nie je
 * (nikdy neprepíše ani "nepožičia" si cudzí existujúci súbor).
 *
 * V TEXTE sa odkaz prepíše na absolútnu cestu "/assets/..." (text sa
 * vykresľuje ako HTML a pri pekných vnorených URL by relatívna cesta
 * ukazovala na zlé miesto); v samostatných poliach ostáva zaužívaný tvar
 * "assets/..." (build-data.js ho aj tak normalizuje).
 */
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const sharp = require("sharp");

const ROOT = path.resolve(__dirname, "..");
const IMG_REL = "assets/images/migrated";
const AUDIO_REL = "assets/audio/migrated";
const TARGET_BYTES = 400 * 1024;
const STEPS = [
  { maxDim: 1920, quality: 85 }, { maxDim: 1920, quality: 78 },
  { maxDim: 1600, quality: 82 }, { maxDim: 1600, quality: 74 },
  { maxDim: 1400, quality: 80 }, { maxDim: 1400, quality: 70 },
  { maxDim: 1200, quality: 78 }, { maxDim: 1200, quality: 66 },
  { maxDim: 1000, quality: 74 }, { maxDim: 1000, quality: 62 },
];

const OLD_MEDIA_RE = /https?:\/\/(?:www\.)?qrlink\.sk\/new\/wp-content\/uploads\/[^\s)"'\\<>]+?\.(?:jpe?g|png|gif|webp|mp3|wav|m4a)/gi;
const isAudio = (u) => /\.(mp3|wav|m4a)$/i.test(u);

function slugName(url) {
  const base = decodeURIComponent(path.basename(url.split("?")[0]));
  const ext = path.extname(base);
  return base.slice(0, base.length - ext.length)
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/[^a-zA-Z0-9-_]+/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "")
    .toLowerCase() || "subor";
}

async function compress(buf) {
  let best = null;
  for (const step of STEPS) {
    const out = await sharp(buf).rotate()
      .resize({ width: step.maxDim, height: step.maxDim, fit: "inside", withoutEnlargement: true })
      .jpeg({ quality: step.quality, mozjpeg: true }).toBuffer();
    if (!best || out.length < best.length) best = out;
    if (out.length <= TARGET_BYTES) return out;
  }
  return best;
}

function uniqueName(dirRel, name, ext) {
  let candidate = `${name}${ext}`;
  for (let i = 2; fs.existsSync(path.join(ROOT, dirRel, candidate)); i++) candidate = `${name}-${i}${ext}`;
  return candidate;
}

const cache = new Map(); // url -> repo-relatívna cesta (pre prípad, že sa to isté URL opakuje)

async function download(url) {
  if (cache.has(url)) return cache.get(url);
  const res = await fetch(url, { headers: { "User-Agent": "qrlink-migration-script" } });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  let buf = Buffer.from(await res.arrayBuffer());
  let rel;
  if (isAudio(url)) {
    const ext = path.extname(url).toLowerCase();
    rel = `${AUDIO_REL}/${uniqueName(AUDIO_REL, slugName(url), ext)}`;
  } else {
    buf = await compress(buf);
    rel = `${IMG_REL}/${uniqueName(IMG_REL, slugName(url), ".jpg")}`;
  }
  fs.writeFileSync(path.join(ROOT, rel), buf);
  cache.set(url, rel);
  return rel;
}

// Už stiahnutý súbor v tom istom zázname s rovnakým menom (prípadne s
// "-N" príponou z riešenia kolízií, alebo .png premenovaným na .jpg).
function reuseFromRecord(record, url) {
  const want = slugName(url);
  const locals = [record.cover, record.foto, ...(record.galeria || []).map((g) => (typeof g === "string" ? g : g?.url))]
    .filter((p) => typeof p === "string" && p.replace(/^\//, "").startsWith(IMG_REL + "/"));
  const hits = [...new Set(locals.map((p) => p.replace(/^\//, "")))].filter((p) => {
    const base = path.basename(p, path.extname(p));
    return base === want || new RegExp(`^${want.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}-\\d+$`).test(base);
  });
  return hits.length === 1 ? hits[0] : null;
}

(async () => {
  const files = ["miesta", "zastavenia"].flatMap((sub) =>
    fs.readdirSync(path.join(ROOT, "content", sub)).filter((f) => f.endsWith(".json")).map((f) => path.join(ROOT, "content", sub, f)));

  let reused = 0, downloaded = 0, changedFiles = 0;
  const failed = [];

  for (const file of files) {
    const record = JSON.parse(fs.readFileSync(file, "utf8"));
    let touched = false;

    const resolve = async (url) => {
      const reuse = !isAudio(url) && reuseFromRecord(record, url);
      if (reuse) { reused++; return reuse; }
      const before = cache.has(url);
      const rel = await download(url);
      if (!before) downloaded++;
      return rel;
    };

    // 1) Samostatné polia (celá hodnota je URL súboru)
    const fixField = async (value) => {
      if (typeof value !== "string" || !new RegExp(`^${OLD_MEDIA_RE.source}$`, "i").test(value)) return value;
      try { const rel = await resolve(value); touched = true; return rel; }
      catch (e) { failed.push(`${path.basename(file)}: ${e.message} ${value}`); return value; }
    };
    for (const key of ["cover", "foto"]) if (record[key]) record[key] = await fixField(record[key]);
    for (const key of ["galeria", "audio"]) {
      if (!Array.isArray(record[key])) continue;
      for (const item of record[key]) {
        if (item && typeof item === "object") item.url = await fixField(item.url);
      }
    }

    // 2) URL vnútri textov (text, popis, i18n.*.text/popis)
    const fixText = async (text) => {
      if (typeof text !== "string") return text;
      const urls = [...new Set(text.match(OLD_MEDIA_RE) || [])];
      for (const url of urls) {
        try {
          const rel = await resolve(url);
          text = text.split(url).join("/" + rel);
          touched = true;
        } catch (e) { failed.push(`${path.basename(file)}: ${e.message} ${url}`); }
      }
      return text;
    };
    record.text = await fixText(record.text);
    record.popis = await fixText(record.popis);
    if (record.i18n && typeof record.i18n === "object") {
      for (const lang of Object.keys(record.i18n)) {
        const v = record.i18n[lang];
        if (v && typeof v === "object") { v.text = await fixText(v.text); v.popis = await fixText(v.popis); }
      }
    }

    if (touched) {
      fs.writeFileSync(file, JSON.stringify(record, null, 2) + "\n", "utf8");
      changedFiles++;
    }
  }

  console.log(`Znovu použitých (už stiahnutých): ${reused}, nových stiahnutých: ${downloaded}, zmenených súborov: ${changedFiles}`);
  if (failed.length) { console.log(`\nNEPODARILO SA (${failed.length}) – ostáva odkaz na starý web:`); failed.forEach((f) => console.log("  " + f)); }
})();

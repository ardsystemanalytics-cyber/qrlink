#!/usr/bin/env node
/**
 * JEDNORAZOVÝ SKRIPT – spustiť ručne: node scripts/migrate-media-local.js
 *
 * Stiahne VŠETKY fotky a audio, ktoré content/{miesta,zastavenia}/*.json
 * a scripts/static-data.json ešte odkazujú priamo na starý web
 * (https://www.qrlink.sk/new/wp-content/uploads/...), uloží ich natrvalo
 * do assets/images/migrated/ resp. assets/audio/migrated/, a všetky
 * odkazy v content/*.json prepíše na tieto nové lokálne cesty.
 *
 * Dôvod: nový web sa doteraz na tieto súbory len "prilepil" (hotlink) na
 * starý web. Keď sa /new/ na doméne zruší (plánovaná zmena), všetky by
 * prestali fungovať. Po tomto skripte je web na starom webe nezávislý.
 *
 * Súbory, ktoré sa nepodarí stiahnuť (404, timeout a pod.), sa NEDOTKNÚ –
 * pôvodný odkaz na starý web ostane, nech sa nič nepokazí; na konci sa
 * vypíše zoznam na dohľadanie.
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const CONTENT = path.join(ROOT, "content");
const IMG_DIR = path.join(ROOT, "assets/images/migrated");
const AUDIO_DIR = path.join(ROOT, "assets/audio/migrated");
const CONCURRENCY = 8;

function isOldMedia(u) {
  return typeof u === "string" && u.includes("qrlink.sk/new") && /\.(jpe?g|png|gif|webp|mp3|wav|m4a)(\?.*)?$/i.test(u);
}

function slugifyFilename(url) {
  const clean = url.split("?")[0];
  const base = decodeURIComponent(path.basename(clean));
  const ext = path.extname(base);
  const name = base
    .slice(0, base.length - ext.length)
    .normalize("NFD").replace(/[̀-ͯ]/g, "") // odstráni diakritiku
    .replace(/[^a-zA-Z0-9-_]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
  return { name: name || "subor", ext: ext.toLowerCase() || (/\.mp3/i.test(clean) ? ".mp3" : "") };
}

function localTargetFor(url) {
  const isAudio = /\.(mp3|wav|m4a)(\?.*)?$/i.test(url);
  const { name, ext } = slugifyFilename(url);
  return { isAudio, name, ext };
}

// --- 1. Nazbieraj všetky unikátne staré URL naprieč content/ + static-data.json ---
function readJSON(p) { return JSON.parse(fs.readFileSync(p, "utf8")); }
function writeJSON(p, data) { fs.writeFileSync(p, JSON.stringify(data, null, 2) + "\n", "utf8"); }

const targetFiles = [];
["miesta", "zastavenia"].forEach(sub => {
  const dir = path.join(CONTENT, sub);
  fs.readdirSync(dir).filter(f => f.endsWith(".json")).forEach(f => targetFiles.push(path.join(dir, f)));
});
const staticDataFile = path.join(ROOT, "scripts/static-data.json");
targetFiles.push(staticDataFile);

const urls = new Set();
for (const file of targetFiles) {
  const data = readJSON(file);
  const walk = (v) => {
    if (typeof v === "string") { if (isOldMedia(v)) urls.add(v); }
    else if (Array.isArray(v)) v.forEach(walk);
    else if (v && typeof v === "object") Object.values(v).forEach(walk);
  };
  walk(data);
}

console.log(`Nájdených ${urls.size} unikátnych súborov na starom webe.`);

// --- 2. Priprav mapovanie url -> lokálna cesta (rieš kolízie mien) ---
const usedNames = new Set();
const urlToLocal = new Map(); // url -> repo-relatívna cesta (napr. "assets/images/migrated/x.jpg")
const urlToDisk = new Map();  // url -> absolútna cesta na disku

for (const url of urls) {
  const { isAudio, name, ext } = localTargetFor(url);
  const dir = isAudio ? AUDIO_DIR : IMG_DIR;
  const relDir = isAudio ? "assets/audio/migrated" : "assets/images/migrated";
  let candidate = `${name}${ext}`;
  let i = 2;
  while (usedNames.has(candidate.toLowerCase())) {
    candidate = `${name}-${i}${ext}`;
    i++;
  }
  usedNames.add(candidate.toLowerCase());
  urlToLocal.set(url, `${relDir}/${candidate}`);
  urlToDisk.set(url, path.join(dir, candidate));
}

fs.mkdirSync(IMG_DIR, { recursive: true });
fs.mkdirSync(AUDIO_DIR, { recursive: true });

// --- 3. Stiahni (s obmedzenou súbežnosťou) ---
async function downloadOne(url) {
  const dest = urlToDisk.get(url);
  if (fs.existsSync(dest) && fs.statSync(dest).size > 0) return { url, ok: true, skipped: true };
  try {
    const res = await fetch(url, { headers: { "User-Agent": "qrlink-migration-script" } });
    if (!res.ok) return { url, ok: false, error: `HTTP ${res.status}` };
    const buf = Buffer.from(await res.arrayBuffer());
    if (!buf.length) return { url, ok: false, error: "prázdna odpoveď" };
    fs.writeFileSync(dest, buf);
    return { url, ok: true };
  } catch (e) {
    return { url, ok: false, error: String(e.message || e) };
  }
}

async function runPool(items, worker, concurrency) {
  const results = [];
  let i = 0;
  async function next() {
    while (i < items.length) {
      const idx = i++;
      results[idx] = await worker(items[idx]);
      if ((idx + 1) % 25 === 0 || idx === items.length - 1) {
        console.log(`  ...${idx + 1}/${items.length}`);
      }
    }
  }
  await Promise.all(Array.from({ length: concurrency }, next));
  return results;
}

(async () => {
  const urlList = [...urls];
  console.log("Sťahujem...");
  const results = await runPool(urlList, downloadOne, CONCURRENCY);

  const failed = results.filter(r => !r.ok);
  const okUrls = new Set(results.filter(r => r.ok).map(r => r.url));

  console.log(`Stiahnutých úspešne: ${okUrls.size}/${urlList.length}`);
  if (failed.length) {
    console.log(`NEPODARILO SA (${failed.length}) – ostávajú odkazovať na starý web:`);
    failed.forEach(f => console.log(`  ${f.error}  ${f.url}`));
  }

  // --- 4. Prepíš odkazy v content/*.json (len tie, čo sa naozaj stiahli) ---
  let filesChanged = 0;
  for (const file of targetFiles) {
    const data = readJSON(file);
    let touched = false;
    const walk = (obj, key, parent) => {
      if (typeof obj === "string") {
        if (okUrls.has(obj) && urlToLocal.has(obj)) {
          parent[key] = urlToLocal.get(obj);
          touched = true;
        }
      } else if (Array.isArray(obj)) {
        obj.forEach((v, i) => walk(v, i, obj));
      } else if (obj && typeof obj === "object") {
        Object.keys(obj).forEach(k => walk(obj[k], k, obj));
      }
    };
    walk(data, null, null); // koreňový "data" je vždy objekt, nie string -> parent sa nepoužije
    if (touched) {
      writeJSON(file, data);
      filesChanged++;
    }
  }
  console.log(`Prepísaných súborov s odkazmi: ${filesChanged}`);
  console.log("Hotovo. Teraz spusti: node scripts/build-data.js");
})();

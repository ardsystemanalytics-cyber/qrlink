#!/usr/bin/env node
/**
 * Prenesie PREKLADY zo starého webu (qTranslate-X) do content/*.json -> "i18n".
 *   node scripts/migrate-translations.js            (EN + HU)
 *   node scripts/migrate-translations.js de         (len vybrané jazyky)
 * Potom: node scripts/localize-remaining-media.js (stiahne preložené audio a
 * napojí fotky v preložených textoch na lokálne súbory) a build-data.js.
 *
 * Berie len jazyky, ktoré má aj nový web a zároveň existovali na starom:
 * EN, HU a DE (starý web mal ešte RU/PL, nový ich nemá; CS starý web nemal).
 *
 * Starý web vracia pre nepreložený obsah namiesto prekladu:
 *  - názov s prefixom "(Slovenčina) ...",
 *  - text = hláška "Sorry, this entry is only available in Slovak." (a jej
 *    ekvivalenty v ďalších jazykoch),
 *  - kategória prázdny názov.
 * Okrem toho tam sú v jazykových poliach aj "smeti" (testovacie názvy
 * "Test 1 podkategoria enviro", neprepísaný slovenský text, surové
 * qTranslate značky "[:sk]...") - viď junkReason(). Takéto polia sa
 * NEPRENESÚ (neprepíšu nič existujúce).
 *
 * Preložené audio sa uloží do i18n.<lang>.audio, len ak je to naozaj INÁ
 * nahrávka - porovnáva sa obsah súboru (md5), nie URL (starý web má pri
 * mnohých zastaveniach ten istý súbor nahratý dvakrát pod iným menom).
 */
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { htmlToMarkdown, decodeEntities } = require("./migrate-from-old-site.js");

const ROOT = path.resolve(__dirname, "..");
const B = "https://www.qrlink.sk/new";
const SUPPORTED = ["en", "hu", "de"];
const PLACEHOLDER = /(only available in|csak .* nyelvű változata van|доступен только|nur auf .* verfügbar|jest dostępny tylko|Vitajte vo WordPress)/i;
const strip = (h) => (h || "").replace(/<[^>]+>/g, " ").replace(/&nbsp;|&#160;/g, " ").replace(/\s+/g, " ").trim();

// Najčastejšie krátke slová - podľa nich sa zistí, či "preklad" nie je
// v skutočnosti slovenský text (starý web ho niekde len skopíroval).
const WORDS = {
  sk: "je sa na v z ktorý ktorá ktoré bol bola bolo ako pre sú aj od do tiež kde ale jeho jej sme boli".split(" "),
  en: "the and of is was in to with which that for by from are it this".split(" "),
  hu: "az és hogy egy volt van nem is meg ez ki mint vagy csak már".split(" "),
  de: "der die das und ist in von mit den zu ein eine sich auf im wurde des dem".split(" "),
};
function wordScore(text, lang) {
  const words = text.toLowerCase().split(/[^\p{L}]+/u).filter(Boolean);
  const set = new Set(WORDS[lang]);
  return words.filter((w) => set.has(w)).length / Math.max(words.length, 1);
}

/**
 * Prečo sa preložené pole NEMÁ prenášať (alebo null, ak je v poriadku).
 * field: "nazov" | "popis" | "text"; sk: slovenská hodnota toho istého poľa.
 */
function junkReason(field, value, sk, lang) {
  if (value == null) return null;
  const plain = strip(String(value));
  if (!plain) return "prázdne";
  if (/\[:[a-z]*\]/i.test(value)) return "surové qTranslate značky [:sk]";
  if (/^test\b.*podkategori/i.test(plain) || /^(\S+)(\s+\1)+$/i.test(plain)) return "testovacia hodnota";
  if (PLACEHOLDER.test(plain)) return "hláška „len po slovensky“";
  const norm = (s) => s.toLowerCase().replace(/[–—]/g, "-").replace(/\s+/g, "");
  if (sk != null && norm(plain) === norm(strip(String(sk)))) return "zhodné so slovenským";
  if (field !== "nazov") {
    if (field === "text" && plain.length < 30) return "príliš krátky text";
    const words = plain.split(/\s+/).length;
    if (words >= 12 && wordScore(plain, "sk") > wordScore(plain, lang)) return "text je v skutočnosti slovenský";
  }
  return null;
}

async function get(url, as = "json") {
  for (let i = 0; i < 4; i++) {
    try {
      const r = await fetch(url, { headers: { "User-Agent": "qrlink-migration-script" } });
      if (r.status === 404) return null;
      if (!r.ok) throw new Error("HTTP " + r.status);
      return as === "json" ? r.json() : as === "text" ? r.text() : Buffer.from(await r.arrayBuffer());
    } catch (e) {
      if (i === 3) throw e;
      await new Promise((res) => setTimeout(res, 800 * (i + 1)));
    }
  }
}
const audioOf = (html) => [...(html || "").matchAll(/<source[^>]+src="([^"]+\.mp3)"/gi)].map((m) => m[1]);

const hashCache = new Map();
function audioHash(url) {
  if (!hashCache.has(url)) {
    hashCache.set(url, get(url, "buffer").then((buf) => (buf ? crypto.createHash("md5").update(buf).digest("hex") : url)));
  }
  return hashCache.get(url);
}
async function sameAudio(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) if ((await audioHash(a[i])) !== (await audioHash(b[i]))) return false;
  return true;
}

// Z URL starého webu určí typ obsahu a slug pre REST API.
function wpRef(url) {
  const rest = url.replace(`${B}/`, "").replace(/\/$/, "");
  if (rest.startsWith("category/")) return { endpoint: "categories", slug: rest.split("/").pop(), rest };
  if (rest.startsWith("castles/")) return { endpoint: "castles", slug: rest.split("/").pop(), rest };
  if (rest.startsWith("environmental-upbringing-and-education/")) return { endpoint: "environmental", slug: rest.split("/").pop(), rest };
  if (!rest.includes("/")) return { endpoint: "posts", slug: rest, rest };
  return null; // napr. staré /turzovka/<slug>/ - to sú len alternatívne adresy, obsah berieme z hlavnej
}

async function oldVersion(ref, lang) {
  const isTerm = ref.endpoint === "categories";
  const list = await get(`${B}/${lang}/wp-json/wp/v2/${ref.endpoint}?slug=${encodeURIComponent(ref.slug)}&_fields=${isTerm ? "name,description" : "title,content"}`);
  const d = Array.isArray(list) ? list[0] : null;
  if (!d) return null;
  if (isTerm) {
    const nazov = decodeEntities((d.name || "").trim());
    const popis = strip(d.description);
    return { nazov: nazov || null, popis: popis || null };
  }
  const title = decodeEntities(d.title?.rendered || "").replace(/\s+/g, " ").trim();
  const nazov = title && !/^\(Slovenčina\)/.test(title) ? title : null;
  const plain = strip(d.content?.rendered);
  const text = plain && !PLACEHOLDER.test(plain) ? htmlToMarkdown(d.content.rendered, nazov || undefined) : null;
  return { nazov, text, audio: audioOf(await get(`${B}/${lang}/${ref.rest}/`, "text")) };
}

async function main() {
  const args = process.argv.slice(2);
  const LANGS = args.length ? args : ["en", "hu"];
  const bad = LANGS.filter((l) => !SUPPORTED.includes(l));
  if (bad.length) throw new Error(`Nepodporovaný jazyk: ${bad.join(", ")} (podporované: ${SUPPORTED.join(", ")})`);

  const report = [];
  const files = ["miesta", "zastavenia"].flatMap((sub) =>
    fs.readdirSync(path.join(ROOT, "content", sub)).filter((x) => x.endsWith(".json")).map((f) => ({ sub, file: path.join(ROOT, "content", sub, f) })));
  const work = async ({ sub, file }) => {
    const r = JSON.parse(fs.readFileSync(file, "utf8"));
    const refs = [r.povodnaUrl?.sk, ...(r.povodneUrlAliasy || [])].filter(Boolean).map(wpRef).filter(Boolean);
    if (!refs.length) return;
    const skAudio = sub === "zastavenia" ? audioOf(await get(`${B}/${refs[0].rest}/`, "text")) : [];
    let touched = false;

    for (const lang of LANGS) {
      let v = null;
      for (const ref of refs) { // hlavná adresa, potom duplikáty/aliasy
        const got = await oldVersion(ref, lang);
        if (got && (got.nazov || got.text || got.popis)) { v = got; break; }
      }
      if (!v) { report.push({ sub, id: r.id, lang, prenesene: [] }); continue; }
      const done = [];
      const skipped = {};
      const t = {};
      for (const field of ["nazov", "popis", "text"]) {
        if (!v[field]) continue;
        const why = junkReason(field, v[field], r[field], lang);
        if (why) skipped[field] = why;
        else { t[field] = v[field]; done.push(field === "nazov" ? "názov" : field); }
      }
      if (v.audio && v.audio.length) {
        if (await sameAudio(v.audio, skAudio)) skipped.audio = "zhodné so slovenským";
        else { t.audio = v.audio.map((url) => ({ url })); done.push("audio"); }
      }
      if (done.length) {
        r.i18n = r.i18n || {};
        r.i18n[lang] = { ...(r.i18n[lang] || {}), ...t };
        touched = true;
      }
      report.push({ sub, id: r.id, lang, prenesene: done, ...(Object.keys(skipped).length ? { vynechane: skipped } : {}) });
    }
    if (touched) fs.writeFileSync(file, JSON.stringify(r, null, 2) + "\n", "utf8");
  };
  const queue = [...files];
  await Promise.all(Array.from({ length: 6 }, async () => { while (queue.length) await work(queue.shift()); }));

  // Report sa zlučuje so staršími behmi (iné jazyky ostanú zachované).
  const reportFile = path.join(ROOT, "scripts", "translations-from-old-site.json");
  const previous = fs.existsSync(reportFile) ? JSON.parse(fs.readFileSync(reportFile, "utf8")).filter((x) => !LANGS.includes(x.lang)) : [];
  const all = [...previous, ...report].sort((a, b) => (a.sub + a.id + a.lang).localeCompare(b.sub + b.id + b.lang));
  fs.writeFileSync(reportFile, JSON.stringify(all, null, 2) + "\n", "utf8");
  for (const lang of LANGS) {
    const x = report.filter((y) => y.lang === lang);
    const count = (what) => x.filter((y) => y.prenesene.includes(what)).length;
    console.log(`${lang}: text ${count("text")}, názov ${count("názov")}, popis ${count("popis")}, audio ${count("audio")}`);
    for (const y of x.filter((y) => y.prenesene.length)) console.log(`  + ${y.sub}/${y.id}: ${y.prenesene.join(", ")}`);
    for (const y of x.filter((y) => y.vynechane)) console.log(`  - ${y.sub}/${y.id}: ${Object.entries(y.vynechane).map(([k, w]) => `${k} (${w})`).join(", ")}`);
  }
}

if (require.main === module) main().catch((e) => { console.error(e); process.exit(1); });
else module.exports = { junkReason, wordScore };

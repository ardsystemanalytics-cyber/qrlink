#!/usr/bin/env node
/**
 * Prenesie PREKLADY zo starého webu (qTranslate-X) do content/*.json -> "i18n".
 *   node scripts/migrate-translations.js
 * Potom: node scripts/localize-remaining-media.js (stiahne preložené audio a
 * napojí fotky v preložených textoch na lokálne súbory) a build-data.js.
 *
 * Berie len jazyky, ktoré má aj nový web a zároveň existovali na starom:
 * EN a HU (starý web mal ešte DE/RU/PL, nový ich nemá; CS starý web nemal).
 *
 * Starý web vracia pre nepreložený obsah namiesto prekladu:
 *  - názov s prefixom "(Slovenčina) ...",
 *  - text = hláška "Sorry, this entry is only available in Slovak." (a jej
 *    ekvivalenty v ďalších jazykoch),
 *  - kategória prázdny názov.
 * Takéto polia sa NEPRENESÚ (neprepíšu nič existujúce).
 *
 * Preložené audio (iné než slovenské) sa uloží do i18n.<lang>.audio - na
 * starom webe má napr. 110 zastavení vlastnú anglickú nahrávku.
 */
const fs = require("fs");
const path = require("path");
const { htmlToMarkdown, decodeEntities } = require("./migrate-from-old-site.js");

const ROOT = path.resolve(__dirname, "..");
const B = "https://www.qrlink.sk/new";
const LANGS = ["en", "hu"];
const PLACEHOLDER = /(only available in|csak .* nyelvű változata van|доступен только|nur auf .* verfügbar|jest dostępny tylko|Vitajte vo WordPress)/i;
const strip = (h) => (h || "").replace(/<[^>]+>/g, " ").replace(/&nbsp;|&#160;/g, " ").replace(/\s+/g, " ").trim();

async function get(url, json = true) {
  for (let i = 0; i < 4; i++) {
    try {
      const r = await fetch(url, { headers: { "User-Agent": "qrlink-migration-script" } });
      if (r.status === 404) return null;
      if (!r.ok) throw new Error("HTTP " + r.status);
      return json ? r.json() : r.text();
    } catch (e) {
      if (i === 3) throw e;
      await new Promise((res) => setTimeout(res, 800 * (i + 1)));
    }
  }
}
const audioOf = (html) => [...(html || "").matchAll(/<source[^>]+src="([^"]+\.mp3)"/gi)].map((m) => m[1]);

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
  const title = decodeEntities(d.title?.rendered || "");
  const nazov = title && !/^\(Slovenčina\)/.test(title) ? title : null;
  const plain = strip(d.content?.rendered);
  const text = plain && !PLACEHOLDER.test(plain) ? htmlToMarkdown(d.content.rendered, nazov || undefined) : null;
  return { nazov, text, audio: audioOf(await get(`${B}/${lang}/${ref.rest}/`, false)) };
}

(async () => {
  const report = [];
  const files = ["miesta", "zastavenia"].flatMap((sub) =>
    fs.readdirSync(path.join(ROOT, "content", sub)).filter((x) => x.endsWith(".json")).map((f) => ({ sub, file: path.join(ROOT, "content", sub, f) })));
  const work = async ({ sub, file }) => {
    {
      const r = JSON.parse(fs.readFileSync(file, "utf8"));
      const refs = [r.povodnaUrl?.sk, ...(r.povodneUrlAliasy || [])].filter(Boolean).map(wpRef).filter(Boolean);
      if (!refs.length) return;
      const skAudio = sub === "zastavenia" ? audioOf(await get(`${B}/${refs[0].rest}/`, false)) : [];
      let touched = false;

      for (const lang of LANGS) {
        let v = null;
        for (const ref of refs) { // hlavná adresa, potom duplikáty/aliasy
          const got = await oldVersion(ref, lang);
          if (got && (got.nazov || got.text || got.popis)) { v = got; break; }
        }
        if (!v) { report.push({ sub, id: r.id, lang, prenesene: [] }); continue; }
        r.i18n = r.i18n || {};
        const t = (r.i18n[lang] = r.i18n[lang] || {});
        const done = [];
        if (v.nazov) { t.nazov = v.nazov; done.push("názov"); }
        if (v.popis) { t.popis = v.popis; done.push("popis"); }
        if (v.text) { t.text = v.text; done.push("text"); }
        if (v.audio && v.audio.length && JSON.stringify(v.audio) !== JSON.stringify(skAudio)) {
          t.audio = v.audio.map((url) => ({ url }));
          done.push("audio");
        }
        if (done.length) touched = true;
        report.push({ sub, id: r.id, lang, prenesene: done });
      }
      if (touched) fs.writeFileSync(file, JSON.stringify(r, null, 2) + "\n", "utf8");
    }
  };
  const queue = [...files];
  await Promise.all(Array.from({ length: 6 }, async () => { while (queue.length) await work(queue.shift()); }));
  report.sort((a, b) => (a.sub + a.id + a.lang).localeCompare(b.sub + b.id + b.lang));
  fs.writeFileSync(path.join(ROOT, "scripts", "translations-from-old-site.json"), JSON.stringify(report, null, 2) + "\n", "utf8");
  for (const lang of LANGS) {
    const x = report.filter((y) => y.lang === lang);
    const count = (what) => x.filter((y) => y.prenesene.includes(what)).length;
    console.log(`${lang}: text ${count("text")}, názov ${count("názov")}, popis ${count("popis")}, audio ${count("audio")}`);
  }
})();

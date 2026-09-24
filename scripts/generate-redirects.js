#!/usr/bin/env node
/**
 * Vygeneruje scripts/old-urls-checklist.txt – zoznam VŠETKÝCH pôvodných URL
 * zo starého webu (všetky jazykové mutácie) na ručné otestovanie
 * presmerovania/peknych URL na novom webe.
 *
 * (Samotná smerovacia mapa pre pekné URL sa generuje automaticky v
 * scripts/build-data.js -> lib/pretty-url-map.mjs, nie tu – tento skript
 * je len pomocný QA výpis, spúšťaj ho ručne podľa potreby.)
 *
 * Zdroj: pole "povodnaUrl" uložené pri migrácii v content/miesta/*.json
 * a content/zastavenia/*.json (pozri scripts/migrate-from-old-site.js
 * a scripts/migrate-miesto-url.js).
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const CONTENT = path.join(ROOT, "content");

function readFolder(p) {
  if (!fs.existsSync(p)) return [];
  return fs.readdirSync(p).filter(f => f.endsWith(".json")).map(f => JSON.parse(fs.readFileSync(path.join(p, f), "utf8")));
}

const miesta = readFolder(path.join(CONTENT, "miesta"));
const zastavenia = readFolder(path.join(CONTENT, "zastavenia"));

const OLD_LANGS = ["sk", "en", "de", "ru", "pl", "hu"];
const OLD_PREFIX = "https://www.qrlink.sk/new/";
const langVariants = (skUrl) => Object.fromEntries(OLD_LANGS.map((l) => [l, l === "sk" ? skUrl : skUrl.replace(OLD_PREFIX, `${OLD_PREFIX}${l}/`)]));

const allOldUrls = [];
for (const [typ, list] of [["miesto", miesta], ["zastavenie", zastavenia]]) {
  for (const r of list) {
    const sets = [r.povodnaUrl, ...(r.povodneUrlAliasy || []).map(langVariants)].filter(Boolean);
    for (const set of sets) for (const [lang, url] of Object.entries(set)) allOldUrls.push({ typ, id: r.id, lang, url });
  }
}

const listPath = path.join(ROOT, "scripts", "old-urls-checklist.txt");
const lines = [
  `# Zoznam pôvodných URL zo starého webu (${allOldUrls.length} riadkov) na otestovanie presmerovania.`,
  `# Formát: <typ> <id> <jazyk> <stará URL>`,
  "",
  ...allOldUrls.map(o => `${o.typ}\t${o.id}\t${o.lang}\t${o.url}`),
];
fs.writeFileSync(listPath, lines.join("\n") + "\n", "utf8");

console.log(`Zoznam starých URL (${allOldUrls.length}) -> scripts/old-urls-checklist.txt`);

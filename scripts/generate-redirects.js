#!/usr/bin/env node
/**
 * Vygeneruje:
 *  1) api/_legacy-url-map.json – mapa "cesta na starom webe (bez /new/ a bez
 *     jazykového prefixu)" -> "nová cieľová cesta", pre 301 presmerovania
 *     zo starého webu (pozri api/new/[...path].js).
 *  2) scratchpad zoznam VŠETKÝCH pôvodných URL (všetky jazykové mutácie)
 *     na ručné otestovanie.
 *
 * Zdroj: pole "povodnaUrl" uložené pri migrácii v content/miesta/*.json
 * a content/zastavenia/*.json (pozri scripts/migrate-from-old-site.js
 * a scripts/migrate-miesto-url.js).
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const CONTENT = path.join(ROOT, "content");
const OLD_PREFIX = "https://www.qrlink.sk/new/";

function readFolder(p) {
  if (!fs.existsSync(p)) return [];
  return fs.readdirSync(p).filter(f => f.endsWith(".json")).map(f => JSON.parse(fs.readFileSync(path.join(p, f), "utf8")));
}

// Z "https://www.qrlink.sk/new/<lang>/<rest>/" (alebo bez <lang>) vytiahne
// samotné <rest> (kľúč do mapy, jazykovo-neutrálny).
function restPathFromSkUrl(skUrl) {
  if (!skUrl || !skUrl.startsWith(OLD_PREFIX)) return null;
  let rest = skUrl.slice(OLD_PREFIX.length);
  rest = rest.replace(/\/$/, "");
  return rest;
}

const miesta = readFolder(path.join(CONTENT, "miesta"));
const zastavenia = readFolder(path.join(CONTENT, "zastavenia"));

const map = {};
// Ručné výnimky – navigačné stránky starého webu bez 1:1 náprotivku.
map[""] = "/";
map["hrady-a-zamky"] = "/";
map["environmentalna-vychova-a-vzdelavanie"] = "/";
map["kontakt"] = "/kontakt.html";

const allOldUrls = [];

for (const m of miesta) {
  if (!m.povodnaUrl) continue;
  const key = restPathFromSkUrl(m.povodnaUrl.sk);
  if (key !== null) map[key] = `/kategoria.html?id=${m.id}`;
  for (const [lang, url] of Object.entries(m.povodnaUrl)) allOldUrls.push({ typ: "miesto", id: m.id, lang, url });
}

for (const z of zastavenia) {
  if (!z.povodnaUrl) continue;
  const key = restPathFromSkUrl(z.povodnaUrl.sk);
  if (key !== null) map[key] = `/zastavenie.html?id=${z.id}`;
  for (const [lang, url] of Object.entries(z.povodnaUrl)) allOldUrls.push({ typ: "zastavenie", id: z.id, lang, url });
}

fs.mkdirSync(path.join(ROOT, "api"), { recursive: true });
fs.writeFileSync(path.join(ROOT, "api", "_legacy-url-map.json"), JSON.stringify(map, null, 2) + "\n", "utf8");

const listPath = path.join(ROOT, "scripts", "old-urls-checklist.txt");
const lines = [
  `# Zoznam pôvodných URL zo starého webu (${allOldUrls.length} riadkov) na otestovanie presmerovania.`,
  `# Formát: <typ> <id> <jazyk> <stará URL>`,
  "",
  ...allOldUrls.map(o => `${o.typ}\t${o.id}\t${o.lang}\t${o.url}`),
];
fs.writeFileSync(listPath, lines.join("\n") + "\n", "utf8");

console.log(`Mapa: ${Object.keys(map).length} ciest -> api/_legacy-url-map.json`);
console.log(`Zoznam starých URL (${allOldUrls.length}) -> scripts/old-urls-checklist.txt`);

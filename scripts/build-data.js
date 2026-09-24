/* =====================================================================
   BUILD SKRIPT – spúšťa sa automaticky pri každom nasadení (Vercel).
   Poskladá obsah z content/*.json (ktoré edituje Decap CMS na /admin)
   naspäť do js/data.js – v presne rovnakom tvare, aký očakáva js/app.js
   a js/i18n.js. Netreba spúšťať ručne, iba pri lokálnom testovaní zmien
   v content/: node scripts/build-data.js
   ===================================================================== */

const fs = require("fs");
const path = require("path");
const { marked } = require("marked");

const ROOT = path.join(__dirname, "..");
const CONTENT = path.join(ROOT, "content");

// Pole "text" na zastaveniach sa v content/ edituje ako Markdown (Decap CMS
// tam ponúka klasický rich-text editor – výber nadpisu, tučné písmo a pod.
// namiesto písania HTML značiek). Tu sa pri buildovaní prevedie na HTML,
// presne v tvare, aký očakáva js/app.js (žiadna zmena v app.js netreba).
function mdToHtml(md) {
  return md ? marked.parse(md).trim() : md;
}

function readJSON(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function readFolder(folderPath) {
  if (!fs.existsSync(folderPath)) return [];
  return fs.readdirSync(folderPath)
    .filter(f => f.endsWith(".json"))
    .map(f => readJSON(path.join(folderPath, f)));
}

// Pekné URL (rovnaké ako mal starý web, len bez "/new/") – odvodené z
// "povodnaUrl.sk" uloženého pri migrácii zo starého webu (pozri
// scripts/migrate-from-old-site.js). Vracia napr. "/category/betliar/"
// alebo "/castles/hlavne-nadvorie/" (vždy s úvodným aj koncovým lomítkom,
// zhodne s "trailingSlash": true vo vercel.json). Nová (nemigrovaná)
// položka bez povodnaUrl nemá starý WP náprotivok – použije sa fallback.
const OLD_SITE_PREFIX = "https://www.qrlink.sk/new/";
function prettyUrl(record, fallback) {
  const sk = record.povodnaUrl?.sk;
  if (sk && sk.startsWith(OLD_SITE_PREFIX)) {
    return "/" + sk.slice(OLD_SITE_PREFIX.length);
  }
  return fallback;
}

// Starý web mal niektorý obsah dostupný na viacerých adresách (napr. staršia
// duplicitná kópia zastavenia ako "castles/svetlonos/" popri platnom
// "svetlonos/", alebo stará samostatná stránka "porabka/" popri kategórii
// "category/porabka/"). Tie ďalšie adresy sú v "povodneUrlAliasy" - vedú
// na ten istý obsah (kanonická URL ostáva hlavná "url").
function prettyAliases(record) {
  return (record.povodneUrlAliasy || [])
    .filter((u) => typeof u === "string" && u.startsWith(OLD_SITE_PREFIX))
    .map((u) => "/" + u.slice(OLD_SITE_PREFIX.length));
}

// Lokálne médiá (nahrané cez CMS aj tie stiahnuté pri migrácii zo starého
// webu) sú v content/*.json uložené ako cesta relatívna k webroot-u bez
// úvodného lomítka (napr. "assets/images/migrated/x.jpg") - to fungovalo,
// kým stránky bežali len na plochých URL ("/kategoria.html"). Teraz vďaka
// pekným (ľubovoľne vnoreným) URL sa taká cesta prehliadaču rozbije, lebo
// ju vyhodnotí relatívne k aktuálnej (vnorenej) URL, nie k webroot-u -
// preto sa tu vždy normalizuje na "/assets/...". Externé (http/https) URL
// necháva bez zmeny.
function abs(p) {
  if (!p) return p;
  if (p.startsWith("/") || /^https?:\/\//.test(p)) return p;
  return "/" + p;
}

const kategorie = readFolder(path.join(CONTENT, "kategorie"))
  .sort((a, b) => (a.poradie ?? 0) - (b.poradie ?? 0))
  .map(({ poradie, ...k }) => k); // "poradie" je len pomocné pre zoradenie, do data.js sa nedáva

const miesta = readFolder(path.join(CONTENT, "miesta"))
  .sort((a, b) => (a.poradie ?? 0) - (b.poradie ?? 0))
  // "poradie"/"hlavnaKategoria"/"korenoveMiesto" sú len pomocné polia
  // (zoradenie + zoskupovanie v Decap CMS), do data.js sa nedávajú
  .map(({ poradie, hlavnaKategoria, korenoveMiesto, povodneUrlAliasy, ...m }) => ({
    ...m,
    cover: abs(m.cover),
    foto: abs(m.foto),
    url: prettyUrl(m, `/kategoria.html?id=${m.id}`),
    urlAliasy: prettyAliases({ povodneUrlAliasy }),
  }));

// "audio"/"galeria" sú v Decap CMS "list" polia s jedným pod-poľom ("url"),
// takže sa v content/*.json vždy ukladajú ako [{url: "..."}, ...] – presne
// tak, ako to CMS/admin uloží pri ručnom vypĺňaní. app.js ale pri prehrávači
// aj galérii očakáva rovno pole reťazcov (URL), preto to tu rozbalíme
// (a rovno aj normalizujeme na "/assets/..." - pozri "abs" vyššie).
const urlListToStrings = (list) => (list || []).map((it) => abs(typeof it === "string" ? it : it?.url)).filter(Boolean);

const zastavenia = readFolder(path.join(CONTENT, "zastavenia"))
  .sort((a, b) => a.miesto.localeCompare(b.miesto) || (a.poradie ?? 0) - (b.poradie ?? 0))
  .map(({ hlavnaKategoria, projekt, miestoNazov, povodneUrlAliasy, ...z }) => {
    // "hlavnaKategoria"/"projekt"/"miestoNazov" sú len pomocné polia na
    // zoskupovanie/popisky v Decap CMS (/admin), do data.js sa nedávajú
    // – app.js ich nepozná/nepotrebuje.
    const out = {
      ...z,
      cover: abs(z.cover),
      text: mdToHtml(z.text),
      audio: urlListToStrings(z.audio),
      galeria: urlListToStrings(z.galeria),
      url: prettyUrl(z, `/zastavenie.html?id=${z.id}`),
      urlAliasy: prettyAliases({ povodneUrlAliasy }),
    };
    if (out.i18n) {
      // Preložené audio (napr. anglická nahrávka zo starého webu) má rovnaký
      // tvar ako hlavné "audio" - rozbaliť na pole URL. Keď preklad audio nemá,
      // pole sa vynechá a app.js prehrá slovenské.
      out.i18n = Object.fromEntries(Object.entries(out.i18n).map(([lang, v]) => {
        if (!v || typeof v !== "object") return [lang, v];
        const t = { ...v };
        if (t.text) t.text = mdToHtml(t.text);
        const audio = urlListToStrings(t.audio);
        if (audio.length) t.audio = audio; else delete t.audio;
        return [lang, t];
      }));
    }
    return out;
  });

const kontakt = readJSON(path.join(CONTENT, "kontakt.json"));

const { PLACE_PHOTOS: RAW_PLACE_PHOTOS, KAT_ICONS } = readJSON(path.join(ROOT, "scripts/static-data.json"));
const PLACE_PHOTOS = Object.fromEntries(Object.entries(RAW_PLACE_PHOTOS).map(([id, url]) => [id, abs(url)]));

const DB = { kategorie, miesta, zastavenia, kontakt };

const output = `/* =====================================================================
   QR LINK – DATOVÝ SÚBOR (AUTOMATICKY VYGENEROVANÝ)
   =====================================================================
   Tento súbor sa negeneruje ručne! Vygeneroval ho scripts/build-data.js
   z obsahu v priečinku content/ (ten istý obsah, ktorý edituje Decap CMS
   na /admin). Ak potrebuješ zmeniť obsah, uprav súbory v content/ –
   ideálne cez /admin rozhranie – a nie priamo tento súbor, zmeny by sa
   pri ďalšom nasadení prepísali.
   ===================================================================== */

// Fotky miest bez vlastnej fotky (systémové dáta, spravuje sa mimo CMS)
const PLACE_PHOTOS = ${JSON.stringify(PLACE_PHOTOS, null, 2)};

// SVG ikonky kategórií (systémové dáta, spravuje sa mimo CMS)
const KAT_ICONS = ${JSON.stringify(KAT_ICONS, null, 2)};

const DB = ${JSON.stringify(DB, null, 2)};
`;

fs.writeFileSync(path.join(ROOT, "js/data.js"), output, "utf8");
console.log(`js/data.js vygenerovaný: ${kategorie.length} kategórií, ${miesta.length} miest, ${zastavenia.length} zastavení.`);

// ---------------------------------------------------------------------
// Pekné URL (2/2): mapa pre middleware.js ("stará cesta bez /new/" ->
// "skutočná stránka") + sitemap.xml. Generuje sa tu (nie ručným
// jednorazovým skriptom), aby nikdy nezaostávala za obsahom – zakaždým,
// keď sa nasadí nová/zmenená stránka z Decap CMS, prebehne aj toto.
//
// Písané ako .mjs (ES modul so "export default"), nie .json - Vercel Edge
// Middleware beží v obmedzenom runtime bez prístupu k "fs" a JSON importy
// bez nastaveného "type":"module" v package.json (ktoré by rozbilo ostatné,
// bežné CommonJS skripty v tomto projekte) nie sú spoľahlivé naprieč
// verziami; obyčajný "export default {...}" funguje vždy.
const SITE_ORIGIN = "https://qrlink.sk";

// Kľúč = pekná cesta (bez /new/, bez jazyka) -> hodnota = SKUTOČNÁ interná
// stránka, ktorú middleware.js má vykresliť (nie "record.url" - to je tá
// istá pekná cesta, ktorá by inak ukazovala sama na seba).
const urlMap = {
  "": "/",
  // Navigačné stránky starého webu - náprotivkom je úvodná stránka (filtre
  // kategórií sú tam priamo na mape/kartách).
  "hrady-a-zamky": "/",
  "environmentalna-vychova-a-vzdelavanie": "/",
  "kontakt": "/kontakt.html",
  // Zoskupujúce kategórie starého webu bez vlastného obsahu (len rozcestník
  // na podkategórie, ktoré tu už sú ako samostatné miesta).
  "category/kategorie-kulturnych-historickych-a-prirodnych-pamiatok": "/",
  "category/environmentalna-vychova-a-vzdelavanie": "/",
  // Prázdne/testovacie kategórie a vzorový obsah WordPressu, ktoré starý web
  // síce verejne zobrazoval, ale bez skutočného obsahu - aby staré odkazy
  // neskončili chybou, ukážu úvodnú stránku.
  "category/nezaradene": "/",
  "category/nezaradene/test-1-kategoria-ako-beskydy": "/",
  "category/kategorie-kulturnych-historickych-a-prirodnych-pamiatok/test-27": "/",
  "category/kategorie-kulturnych-historickych-a-prirodnych-pamiatok/od-roznova-pod-prisahu-vyznal": "/",
  // Starý web obsluhoval vnorené kategórie aj krátkym tvarom (category/<slug>/).
  "category/test-1-kategoria-ako-beskydy": "/",
  "category/test-27": "/",
  "category/od-roznova-pod-prisahu-vyznal": "/",
  "ahoj-svet": "/",
  "ukazka-strany": "/",
};
function addToUrlMap(record, internalPath) {
  for (const pretty of [record.url, ...(record.urlAliasy || [])]) {
    if (!pretty || !pretty.startsWith("/") || pretty.includes(".html")) continue; // fallback "?id=" URL nemá peknú cestu
    urlMap[pretty.replace(/^\/|\/$/g, "")] = internalPath;
  }
}
for (const m of miesta) addToUrlMap(m, `/kategoria.html?id=${m.id}`);
for (const z of zastavenia) addToUrlMap(z, `/zastavenie.html?id=${z.id}`);

// Poistka ako vo WordPresse (redirect_guess_404_permalink): keď cesta
// nesedí presne, ale jej POSLEDNÝ segment je názov zastavenia, zobrazí sa
// to zastavenie. Starý web takto obsluhoval napr. staršie adresy
// "/turzovka/rybniky/" (z pôvodnej štruktúry /mesto/zastavenie/), ktoré
// môžu byť aj na vytlačených QR kódoch. Len jednoznačné názvy.
const guess = {};
const guessCount = {};
for (const z of zastavenia) {
  if (!z.url || z.url.includes(".html")) continue;
  const last = z.url.split("/").filter(Boolean).pop();
  guessCount[last] = (guessCount[last] || 0) + 1;
  guess[last] = `/zastavenie.html?id=${z.id}`;
}
for (const [last, n] of Object.entries(guessCount)) if (n > 1) delete guess[last];

fs.mkdirSync(path.join(ROOT, "lib"), { recursive: true });
fs.writeFileSync(
  path.join(ROOT, "lib", "pretty-url-map.mjs"),
  `// AUTOMATICKY VYGENEROVANÉ - pozri scripts/build-data.js\n` +
    `export default ${JSON.stringify(urlMap, null, 2)};\n` +
    `export const guess = ${JSON.stringify(guess, null, 2)};\n`,
  "utf8"
);

const sitemapUrls = [
  "/",
  "/kontakt/",
  ...miesta.map((m) => m.url),
  ...zastavenia.map((z) => z.url),
];
const sitemapXml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  sitemapUrls.map((u) => `  <url><loc>${SITE_ORIGIN}${u}</loc></url>`).join("\n") +
  `\n</urlset>\n`;
fs.writeFileSync(path.join(ROOT, "sitemap.xml"), sitemapXml, "utf8");

console.log(`lib/pretty-url-map.mjs: ${Object.keys(urlMap).length} ciest. sitemap.xml: ${sitemapUrls.length} URL.`);

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

const kategorie = readFolder(path.join(CONTENT, "kategorie"))
  .sort((a, b) => (a.poradie ?? 0) - (b.poradie ?? 0))
  .map(({ poradie, ...k }) => k); // "poradie" je len pomocné pre zoradenie, do data.js sa nedáva

const miesta = readFolder(path.join(CONTENT, "miesta"))
  .sort((a, b) => (a.poradie ?? 0) - (b.poradie ?? 0))
  .map(({ poradie, ...m }) => m); // "poradie" je len pomocné pre zoradenie, do data.js sa nedáva

const zastavenia = readFolder(path.join(CONTENT, "zastavenia"))
  .sort((a, b) => a.miesto.localeCompare(b.miesto) || (a.poradie ?? 0) - (b.poradie ?? 0))
  .map(z => {
    const out = { ...z, text: mdToHtml(z.text) };
    if (out.i18n) {
      out.i18n = Object.fromEntries(Object.entries(out.i18n).map(([lang, v]) =>
        [lang, v && v.text ? { ...v, text: mdToHtml(v.text) } : v]
      ));
    }
    return out;
  });

const kontakt = readJSON(path.join(CONTENT, "kontakt.json"));

const { PLACE_PHOTOS, KAT_ICONS } = readJSON(path.join(ROOT, "scripts/static-data.json"));

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

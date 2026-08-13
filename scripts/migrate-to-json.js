/* =====================================================================
   JEDNORAZOVÝ MIGRAČNÝ SKRIPT – spustiť len raz, ručne: node scripts/migrate-to-json.js
   Načíta aktuálny js/data.js a rozpíše ho do content/*.json súborov,
   ktoré potom bude editovať Decap CMS. Po úspešnej migrácii a overení
   sa už tento skript nepoužíva (build číta priebežne z scripts/build-data.js).
   ===================================================================== */

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
const dataSrc = fs.readFileSync(path.join(ROOT, "js/data.js"), "utf8");

const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(dataSrc + "\n; this.__PLACE_PHOTOS = PLACE_PHOTOS; this.__KAT_ICONS = KAT_ICONS; this.__DB = DB;", sandbox);

const { __PLACE_PHOTOS: PLACE_PHOTOS, __KAT_ICONS: KAT_ICONS, __DB: DB } = sandbox;

function writeJSON(filePath, data) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + "\n", "utf8");
}

// 1. kategórie – jeden súbor na záznam (rovnaký vzor ako miesta/zastavenia,
//    aby to vedel editovať Decap CMS – ten pracuje po priečinkoch, nie po poliach v jednom súbore)
DB.kategorie.forEach((k, i) => {
  writeJSON(path.join(ROOT, `content/kategorie/${k.id}.json`), { poradie: i, ...k });
});

// 2. miesta – jeden súbor na záznam; "poradie" = pôvodné poradie v poli
//    (skryté systémové pole, aby sa pri prípadnej zmene poradia v CMS
//    dala zachovať pôvodná postupnosť kariet na homepage)
DB.miesta.forEach((m, i) => {
  writeJSON(path.join(ROOT, `content/miesta/${m.id}.json`), { poradie: i, ...m });
});

// 3. zastavenia – jeden súbor na záznam (poradie už existuje ako obsahové pole)
DB.zastavenia.forEach(z => {
  writeJSON(path.join(ROOT, `content/zastavenia/${z.id}.json`), z);
});

// 4. kontakt – jeden súbor
writeJSON(path.join(ROOT, "content/kontakt.json"), DB.kontakt);

// 5. systémové dáta (fotky miest bez vlastnej fotky, SVG ikony kategórií) –
//    nie sú v Decap CMS editovateľné (sú to skôr dizajnové/technické dáta),
//    build skript ich len prevezme a vloží do vygenerovaného data.js
writeJSON(path.join(ROOT, "scripts/static-data.json"), { PLACE_PHOTOS, KAT_ICONS });

console.log("Migrácia hotová:");
console.log(`  content/kategorie/*.json (${DB.kategorie.length} súborov)`);
console.log(`  content/miesta/*.json (${DB.miesta.length} súborov)`);
console.log(`  content/zastavenia/*.json (${DB.zastavenia.length} súborov)`);
console.log(`  content/kontakt.json`);
console.log(`  scripts/static-data.json`);

/* =====================================================================
   JEDNORAZOVÝ SKRIPT – spustiť ručne: node scripts/backfill-zastavenia-helpers.js
   Dopočíta na každom zastavení dve pomocné polia – slúžia LEN na
   organizáciu v Decap CMS (zoskupenie zastavení v /admin):
   - "hlavnaKategoria" – hlavná kategória koreňového miesta (Mestá / Pamiatky / ...)
   - "projekt" – názov CELÉHO projektu (koreňového miesta), nech sa dá
     zoskupiť "všetky zastavenia patriace k tomuto projektu" na jednom
     mieste, bez ohľadu na to, na akej hĺbke podkategórie/trasy sa
     konkrétne zastavenie nachádza.
   - "miestoNazov" – čitateľný názov konkrétneho (najbližšieho) miesta/
     podkategórie (nie jeho id) – zobrazí sa ako poznámka pod fotkou pri
     každom zastavení v zozname (keďže skupiny sa nedajú zoradiť podľa
     webu, aspoň takto je vidno, kam presne zastavenie patrí).
   Do js/data.js sa tieto polia nedostanú (build skript ich odstráni).

   Spusti znova, ak niekedy pribudne nové miesto/zastavenie a tieto
   polia preň v content/zastavenia/*.json nebudú vyplnené alebo budú
   neaktuálne.
   ===================================================================== */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const MIESTA_DIR = path.join(ROOT, "content/miesta");
const ZASTAVENIA_DIR = path.join(ROOT, "content/zastavenia");
const KATEGORIE_DIR = path.join(ROOT, "content/kategorie");

const miesta = {};
fs.readdirSync(MIESTA_DIR).filter(f => f.endsWith(".json")).forEach(f => {
  const d = JSON.parse(fs.readFileSync(path.join(MIESTA_DIR, f), "utf8"));
  miesta[d.id] = d;
});

// Decap zoskupuje priamo podľa uloženej hodnoty poľa (bez pekného popisku),
// preto sem ukladáme rovno slovenský názov kategórie (nie jej "id"),
// nech sa v /admin zobrazí ako "Mestá", "Pamiatky"... a nie "mesta", "pamiatky"...
const kategorieNazvy = {};
fs.readdirSync(KATEGORIE_DIR).filter(f => f.endsWith(".json")).forEach(f => {
  const d = JSON.parse(fs.readFileSync(path.join(KATEGORIE_DIR, f), "utf8"));
  kategorieNazvy[d.id] = d.nazov;
});

function root(id, depth = 0) {
  const m = miesta[id];
  if (!m || depth > 30) return m;
  if (!m.rodic) return m;
  return root(m.rodic, depth + 1);
}

let changed = 0;
fs.readdirSync(ZASTAVENIA_DIR).filter(f => f.endsWith(".json")).forEach(f => {
  const file = path.join(ZASTAVENIA_DIR, f);
  const z = JSON.parse(fs.readFileSync(file, "utf8"));
  const r = root(z.miesto);
  const kat = r && r.primarna && kategorieNazvy[r.primarna];
  let touched = false;

  if (kat && z.hlavnaKategoria !== kat) {
    z.hlavnaKategoria = kat;
    touched = true;
  } else if (!kat) {
    console.log(`POZOR: pre "${f}" (miesto: ${z.miesto}) sa nepodarilo nájsť hlavnú kategóriu.`);
  }

  if (r && z.projekt !== r.nazov) {
    z.projekt = r.nazov;
    touched = true;
  }

  const priameMiesto = miesta[z.miesto];
  const miestoNazov = priameMiesto ? priameMiesto.nazov : z.miesto;
  if (miestoNazov && z.miestoNazov !== miestoNazov) {
    z.miestoNazov = miestoNazov;
    touched = true;
  }

  if (touched) {
    fs.writeFileSync(file, JSON.stringify(z, null, 2) + "\n", "utf8");
    changed++;
  }
});

console.log(`Hotovo: aktualizovaných ${changed} súborov.`);

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
     podkategórie (nie jeho id).
   - "cesta" – celá cesta (projekt › … › podkategória): text na karte
     a skupina "Projekt › podkategória" v /admin.
   - "zoradenie" – triediaci kľúč "Poradie ako na webe" v /admin.
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

const pad = n => String(n ?? 999).padStart(3, "0");
// "003 Betliar › 001 Anglický park … › 002 Architektúra" (od koreňa po dané miesto)
function zoradenieKluc(m) {
  const retaz = [];
  for (let p = m, i = 0; p && i < 30; p = miesta[p.rodic], i++) retaz.unshift(`${pad(p.poradie)} ${p.nazov}`);
  return retaz.join(" › ");
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

  // "cesta" – celá cesta k zastaveniu (projekt › … › podkategória), na karte
  // v /admin pod názvom, nech je hneď jasné, kam zastavenie patrí
  const retaz = [];
  for (let p = priameMiesto, i = 0; p && i < 30; p = miesta[p.rodic], i++) retaz.unshift(p.nazov);
  const cesta = retaz.join(" › ") || z.miesto;
  if (cesta && z.cesta !== cesta) {
    z.cesta = cesta;
    touched = true;
  }

  // "zoradenie" – triediaci kľúč pre /admin ("Poradie ako na webe"): poradie
  // každej úrovne (projekt › podkategória › …) + poradie zastavenia, vždy
  // doplnené nulami, nech sa dá triediť obyčajne ako text. Vďaka nemu idú
  // v CMS projekty, podkategórie aj zastavenia v rovnakom poradí ako na webe.
  const zoradenie = zoradenieKluc(priameMiesto) + ` #${pad(z.poradie)}`;
  if (z.zoradenie !== zoradenie) {
    z.zoradenie = zoradenie;
    touched = true;
  }

  if (touched) {
    fs.writeFileSync(file, JSON.stringify(z, null, 2) + "\n", "utf8");
    changed++;
  }
});

console.log(`Hotovo: aktualizovaných ${changed} súborov.`);

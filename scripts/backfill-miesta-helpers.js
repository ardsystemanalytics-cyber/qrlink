/* =====================================================================
   JEDNORAZOVÝ / OPAKOVANE SPÚŠŤATEĽNÝ SKRIPT:
     node scripts/backfill-miesta-helpers.js
   Dopočíta na každom mieste (content/miesta/*.json) dve pomocné polia,
   ktoré slúžia LEN na zoskupovanie v Decap CMS (/admin → Miesta →
   "Group by"), nech sa v hierarchii hlavné miesto → podkategórie
   nestratíš. V edit formulári sa nezobrazujú (nie sú vo fields:
   v config.yml) a do js/data.js sa nedostanú (build skript ich odstráni):

   - "hlavnaKategoria" – hlavná kategória tohto miesta (ak je to hlavné
     miesto) alebo jeho koreňového predka (ak je to podkategória/trasa).
   - "rodicNazov" – čitateľný názov nadradeného miesta (ak toto miesto
     nejaké má), aby sa dalo v /admin zoskupiť "čo patrí pod čo" bez
     lúštenia id-čiek.

   Spusti znova, keď pribudne/zmení sa nejaké miesto.
   ===================================================================== */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const MIESTA_DIR = path.join(ROOT, "content/miesta");
const KATEGORIE_DIR = path.join(ROOT, "content/kategorie");

const miesta = {};
fs.readdirSync(MIESTA_DIR).filter(f => f.endsWith(".json")).forEach(f => {
  const d = JSON.parse(fs.readFileSync(path.join(MIESTA_DIR, f), "utf8"));
  miesta[d.id] = { ...d, __file: f };
});

const kategorieNazvy = {};
fs.readdirSync(KATEGORIE_DIR).filter(f => f.endsWith(".json")).forEach(f => {
  const d = JSON.parse(fs.readFileSync(path.join(KATEGORIE_DIR, f), "utf8"));
  kategorieNazvy[d.id] = d.nazov;
});

function rootPrimarna(id, depth = 0) {
  const m = miesta[id];
  if (!m || depth > 30) return null;
  if (!m.rodic) return m.primarna || null;
  return rootPrimarna(m.rodic, depth + 1);
}

let changed = 0;
Object.values(miesta).forEach(m => {
  const file = path.join(MIESTA_DIR, m.__file);
  const data = JSON.parse(fs.readFileSync(file, "utf8"));
  let touched = false;

  const katId = rootPrimarna(m.id);
  const kat = katId && kategorieNazvy[katId];
  if (kat && data.hlavnaKategoria !== kat) {
    data.hlavnaKategoria = kat;
    touched = true;
  } else if (!kat) {
    console.log(`POZOR: pre "${m.__file}" sa nepodarilo nájsť hlavnú kategóriu.`);
  }

  if (m.rodic) {
    const rodicNazov = miesta[m.rodic] ? miesta[m.rodic].nazov : m.rodic;
    if (data.rodicNazov !== rodicNazov) {
      data.rodicNazov = rodicNazov;
      touched = true;
    }
  } else if (data.rodicNazov) {
    delete data.rodicNazov;
    touched = true;
  }

  if (touched) {
    fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n", "utf8");
    changed++;
  }
});

console.log(`Hotovo: aktualizovaných ${changed} súborov.`);

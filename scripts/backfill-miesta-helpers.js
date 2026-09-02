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
   - "korenoveMiesto" – názov CELÉHO projektu, teda najvrchnejšieho
     predka v reťazci rodičov (nie najbližšieho rodiča!). Vďaka tomu
     pri zoskupovaní v /admin padnú VŠETKY úrovne podkategórií/trás
     jedného projektu (napr. Ivanka pri Dunaji, úroveň 1-4) do jednej
     spoločnej skupiny, nerozdelia sa na skupinu za každú úroveň.

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

function root(id, depth = 0) {
  const m = miesta[id];
  if (!m || depth > 30) return m;
  if (!m.rodic) return m;
  return root(m.rodic, depth + 1);
}

function rootPrimarna(id) {
  const r = root(id);
  return (r && r.primarna) || null;
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

  const r = root(m.id);
  const korenoveMiesto = r ? r.nazov : null;
  if (korenoveMiesto && data.korenoveMiesto !== korenoveMiesto) {
    data.korenoveMiesto = korenoveMiesto;
    touched = true;
  }
  if (data.rodicNazov) {
    // staré pole z predošlej verzie tohto skriptu – nahradené "korenoveMiesto"
    delete data.rodicNazov;
    touched = true;
  }

  if (touched) {
    fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n", "utf8");
    changed++;
  }
});

console.log(`Hotovo: aktualizovaných ${changed} súborov.`);

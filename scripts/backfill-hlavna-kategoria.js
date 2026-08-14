/* =====================================================================
   JEDNORAZOVÝ SKRIPT – spustiť ručne: node scripts/backfill-hlavna-kategoria.js
   Dopočíta pomocné pole "hlavnaKategoria" na každom zastavení – slúži
   LEN na organizáciu v Decap CMS (zoskupenie zastavení v /admin podľa
   hlavnej kategórie ich koreňového miesta: Mestá / Pamiatky / ...).
   Do js/data.js sa toto pole nedostane (build skript ho odstráni).

   Spusti znova, ak niekedy pribudne nové miesto/zastavenie a pole
   "hlavnaKategoria" preň nebude v content/zastavenia/*.json vyplnené
   alebo bude neaktuálne.
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

function rootPrimarna(id, depth = 0) {
  const m = miesta[id];
  if (!m || depth > 30) return null;
  if (!m.rodic) return m.primarna || null;
  return rootPrimarna(m.rodic, depth + 1);
}

let changed = 0;
fs.readdirSync(ZASTAVENIA_DIR).filter(f => f.endsWith(".json")).forEach(f => {
  const file = path.join(ZASTAVENIA_DIR, f);
  const z = JSON.parse(fs.readFileSync(file, "utf8"));
  const katId = rootPrimarna(z.miesto);
  const kat = katId && kategorieNazvy[katId];
  if (kat && z.hlavnaKategoria !== kat) {
    z.hlavnaKategoria = kat;
    fs.writeFileSync(file, JSON.stringify(z, null, 2) + "\n", "utf8");
    changed++;
  } else if (!kat) {
    console.log(`POZOR: pre "${f}" (miesto: ${z.miesto}) sa nepodarilo nájsť hlavnú kategóriu.`);
  }
});

console.log(`Hotovo: aktualizovaných ${changed} súborov.`);

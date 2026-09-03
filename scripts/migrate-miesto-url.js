#!/usr/bin/env node
// Doplní "povodnaUrl" (stará URL + jazykové mutácie) do content/miesta/<id>.json
// na základe WP kategórie (rovnaká logika ako v migrate-from-old-site.js).
// Použitie: node scripts/migrate-miesto-url.js <wp-category-id> <nas-miesto-id>

const fs = require("fs");
const path = require("path");

const OLD_LANGS = ["sk", "en", "de", "ru", "pl", "hu"];
const ROOT = path.resolve(__dirname, "..");
const MIESTA_DIR = path.join(ROOT, "content", "miesta");

function buildOldUrls(canonicalLink) {
  const m = canonicalLink.match(/^(https:\/\/www\.qrlink\.sk\/new)\/(.*)$/);
  if (!m) return { sk: canonicalLink };
  const [, base, restPath] = m;
  const out = {};
  for (const lang of OLD_LANGS) out[lang] = lang === "sk" ? `${base}/${restPath}` : `${base}/${lang}/${restPath}`;
  return out;
}

async function main() {
  const [, , categoryId, miestoId] = process.argv;
  if (!categoryId || !miestoId) {
    console.error("Použitie: node scripts/migrate-miesto-url.js <wp-category-id> <nas-miesto-id>");
    process.exit(1);
  }
  const res = await fetch(`https://www.qrlink.sk/new/wp-json/wp/v2/categories/${categoryId}?_fields=id,link`);
  const cat = await res.json();
  const miestoPath = path.join(MIESTA_DIR, `${miestoId}.json`);
  const miesto = JSON.parse(fs.readFileSync(miestoPath, "utf8"));
  miesto.povodnaUrl = buildOldUrls(cat.link);
  fs.writeFileSync(miestoPath, JSON.stringify(miesto, null, 2) + "\n", "utf8");
  console.log(`${miestoId}.json <- kategória ${categoryId} (${cat.link})`);
}

main().catch((e) => { console.error(e); process.exit(1); });

#!/usr/bin/env node
/**
 * PRAVIDLO PRE FOTKY WEBU: každá fotka max. 400 KB (pri zmenšovaní
 * max. 1920 px na dlhšej strane, pri čo najvyššej kvalite).
 *
 * Skript prejde všetky obrázky v assets/images/ (aj fotky nahraté cez CMS
 * do assets/images/uploads/) a tie, ktoré pravidlo porušujú, zmenší
 * a skomprimuje NA MIESTE – rovnaký názov aj formát súboru, takže sa
 * nemusia meniť žiadne odkazy v content/*.json.
 *
 * Spúšťa sa AUTOMATICKY cez GitHub Actions (.github/workflows/optimize-images.yml)
 * po každom nahratí fotky (aj z Decap CMS) a zmenšené fotky sa hneď
 * commitnú späť. Ručne:
 *   npm install --no-save sharp && node scripts/optimize-images.js
 *   node scripts/optimize-images.js --check     (len vypíše, nič nemení)
 */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const ROOT = path.resolve(__dirname, "..");
const DIR = path.join(ROOT, "assets", "images");
const MAX_BYTES = 400 * 1024;
const CHECK_ONLY = process.argv.includes("--check");

// Od najkvalitnejšieho po najagresívnejšie – použije sa prvý, ktorý sa zmestí.
const STEPS = [
  { maxDim: 1920, quality: 85 }, { maxDim: 1920, quality: 78 },
  { maxDim: 1600, quality: 82 }, { maxDim: 1600, quality: 74 },
  { maxDim: 1400, quality: 80 }, { maxDim: 1400, quality: 70 },
  { maxDim: 1200, quality: 78 }, { maxDim: 1200, quality: 66 },
  { maxDim: 1000, quality: 74 }, { maxDim: 1000, quality: 62 },
];

function encode(img, ext, quality) {
  if (ext === ".png") return img.png({ quality, palette: true, compressionLevel: 9 });
  if (ext === ".webp") return img.webp({ quality });
  return img.jpeg({ quality, mozjpeg: true });
}

async function optimize(file) {
  const ext = path.extname(file).toLowerCase();
  const input = fs.readFileSync(file);
  // Rozhoduje veľkosť súboru; rozmer 1920 px je len horná hranica pri
  // zmenšovaní (fotka pod 400 KB sa nechá tak, ako je – opätovné uloženie
  // by ju len zhoršilo, prípadne aj zväčšilo).
  if (input.length <= MAX_BYTES) return null;
  if (CHECK_ONLY) return { before: input.length, after: null };

  let best = null;
  for (const step of STEPS) {
    const out = await encode(
      sharp(input).rotate().resize({ width: step.maxDim, height: step.maxDim, fit: "inside", withoutEnlargement: true }),
      ext, step.quality
    ).toBuffer();
    if (!best || out.length < best.length) best = out;
    if (out.length <= MAX_BYTES) { best = out; break; }
  }
  if (best.length >= input.length) return null;
  fs.writeFileSync(file, best);
  return { before: input.length, after: best.length };
}

(async () => {
  const files = [];
  // Len podpriečinky (uploads/, migrated/, places/ ...) – súbory priamo
  // v assets/images/ sú grafika dizajnu webu (napr. qrlink-hero.png),
  // nie fotky obsahu, a tie sa nemajú meniť.
  (function walk(dir) {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) walk(p);
      else if (dir !== DIR && /\.(jpe?g|png|webp)$/i.test(e.name)) files.push(p);
    }
  })(DIR);

  let changed = 0, overLimit = 0;
  for (const f of files) {
    try {
      const r = await optimize(f);
      if (!r) continue;
      const rel = path.relative(ROOT, f).replace(/\\/g, "/");
      if (CHECK_ONLY) { console.log(`  porušuje pravidlo: ${rel} (${Math.round(r.before / 1024)} KB)`); changed++; continue; }
      changed++;
      if (r.after > MAX_BYTES) overLimit++;
      console.log(`  ${rel}: ${Math.round(r.before / 1024)} KB -> ${Math.round(r.after / 1024)} KB${r.after > MAX_BYTES ? "  (stále nad limitom!)" : ""}`);
    } catch (e) {
      console.log(`  CHYBA ${path.relative(ROOT, f)}: ${e.message}`);
    }
  }
  console.log(`${CHECK_ONLY ? "Porušuje pravidlo" : "Upravených"}: ${changed} z ${files.length} obrázkov${overLimit ? `, nad limitom zostalo: ${overLimit}` : ""}.`);
})();

#!/usr/bin/env node
/**
 * JEDNORAZOVÝ SKRIPT – spustiť ručne: node scripts/compress-migrated-images.js
 * Zmenší/skomprimuje fotky stiahnuté zo starého webu (assets/images/migrated/),
 * ktoré sú často zbytočne veľké priame WordPress originály (aj 30+ MB).
 * Cieľ: každá fotka max. TARGET_BYTES, pri čo najvyššej možnej kvalite –
 * skúša postupne menej agresívne aj agresívnejšie nastavenia (najprv
 * vysoká kvalita/veľký rozmer, kroky nadol len kým treba) a zastaví sa
 * pri prvom, ktoré sa zmestí pod limit. Ak sa to nepodarí ani na
 * najagresívnejšom kroku, ponechá najlepší dosiahnutý výsledok a na
 * konci to vypíše na kontrolu.
 *
 * Vyžaduje balík "sharp" – nie je natrvalo v package.json (aby sa
 * netiahol zbytočne pri každom nasadení na Vercel), pred spustením
 * tohto skriptu si ho dočasne nainštaluj:
 *   npm install --no-save sharp
 * Na samotnom webe sa nepoužíva, needituje js/app.js.
 */

const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const DIR = path.join(__dirname, "..", "assets/images/migrated");
const TARGET_BYTES = 400 * 1024;

// Zoradené od "najkvalitnejšie" po "najagresívnejšie". Skúša sa postupne,
// zastaví sa pri prvom výsledku pod TARGET_BYTES.
const STEPS = [
  { maxDim: 1920, quality: 85 },
  { maxDim: 1920, quality: 78 },
  { maxDim: 1600, quality: 82 },
  { maxDim: 1600, quality: 74 },
  { maxDim: 1400, quality: 80 },
  { maxDim: 1400, quality: 70 },
  { maxDim: 1200, quality: 78 },
  { maxDim: 1200, quality: 66 },
  { maxDim: 1000, quality: 74 },
  { maxDim: 1000, quality: 62 },
];

async function encodeStep(inputBuf, step) {
  return sharp(inputBuf)
    .rotate()
    .resize({ width: step.maxDim, height: step.maxDim, fit: "inside", withoutEnlargement: true })
    .jpeg({ quality: step.quality, mozjpeg: true })
    .toBuffer();
}

// V tomto prostredí fs zápis/mazanie občas raz zlyhá (asi krátkodobé
// zamknutie súboru antivírusom a pod.) - pri chybe to po krátkej pauze
// skús ešte 2x, kým sa naozaj vzdáš.
async function retrying(fn, tries = 6, delayMs = 400) {
  for (let i = 1; i <= tries; i++) {
    try { return fn(); }
    catch (e) {
      if (i === tries) throw e;
      await new Promise(r => setTimeout(r, delayMs));
    }
  }
}

(async () => {
  const files = fs.readdirSync(DIR).filter(f => /\.(jpe?g|png)$/i.test(f));
  let before = 0, after = 0, changed = 0;
  const stillOver = [];
  const renamed = new Map(); // stará cesta (repo-relatívna) -> nová cesta, pre .png -> .jpg

  const failed = [];
  for (const f of files) {
    const file = path.join(DIR, f);
    try {
      const inputBuf = await retrying(() => fs.readFileSync(file));
      const sizeBefore = inputBuf.length;
      before += sizeBefore;

      let best = null;
      for (const step of STEPS) {
        let buf;
        try {
          buf = await encodeStep(inputBuf, step);
        } catch (e) {
          console.log(`CHYBA pri ${f} (${step.maxDim}px/q${step.quality}): ${e.message}`);
          continue;
        }
        if (!best || buf.length < best.length) best = buf;
        if (buf.length <= TARGET_BYTES) { best = buf; break; }
      }

      if (best && best.length < sizeBefore) {
        // .png -> .jpg premenuje (JPEG je pre fotky vždy menší pri rovnakej kvalite)
        const newFile = /\.png$/i.test(f) ? file.replace(/\.png$/i, ".jpg") : file;
        await retrying(() => fs.writeFileSync(newFile, best));
        if (newFile !== file) {
          await retrying(() => fs.unlinkSync(file));
          renamed.set(`assets/images/migrated/${f}`, `assets/images/migrated/${path.basename(newFile)}`);
        }
        after += best.length;
        changed++;
        if (best.length > TARGET_BYTES) stillOver.push({ f: path.basename(newFile), kb: Math.round(best.length / 1024) });
      } else {
        after += sizeBefore;
      }
    } catch (e) {
      console.log(`PRESKOČENÉ (${f}): ${e.message}`);
      failed.push(f);
    }
  }

  const mb = n => (n / 1024 / 1024).toFixed(1);
  console.log(`Spracovaných: ${files.length}, zmenšených: ${changed}`);
  console.log(`Veľkosť pred: ${mb(before)} MB -> po: ${mb(after)} MB (ušetrené ${mb(before - after)} MB)`);
  if (stillOver.length) {
    console.log(`\nAj po najagresívnejšom kroku nad 400 KB (${stillOver.length}) – skontroluj kvalitu ručne:`);
    stillOver.forEach(x => console.log(`  ${x.kb} KB  ${x.f}`));
  } else {
    console.log("\nVšetky fotky sú teraz pod 400 KB.");
  }
  if (failed.length) {
    console.log(`\nPreskočené (chyba pri čítaní/zápise) – skús skript spustiť ešte raz, spracuje len tieto znova: ${failed.join(", ")}`);
  }

  // --- oprav odkazy v content/*.json + static-data.json pre premenované .png -> .jpg ---
  if (renamed.size) {
    const ROOT = path.join(__dirname, "..");
    const targetFiles = [];
    ["miesta", "zastavenia"].forEach(sub => {
      const d = path.join(ROOT, "content", sub);
      fs.readdirSync(d).filter(x => x.endsWith(".json")).forEach(x => targetFiles.push(path.join(d, x)));
    });
    targetFiles.push(path.join(ROOT, "scripts/static-data.json"));

    let refsFixed = 0;
    for (const file of targetFiles) {
      const data = JSON.parse(fs.readFileSync(file, "utf8"));
      let touched = false;
      const walk = (obj) => {
        if (Array.isArray(obj)) obj.forEach((v, i) => {
          if (typeof v === "string" && renamed.has(v)) { obj[i] = renamed.get(v); touched = true; }
          else walk(v);
        });
        else if (obj && typeof obj === "object") Object.keys(obj).forEach(k => {
          if (typeof obj[k] === "string" && renamed.has(obj[k])) { obj[k] = renamed.get(obj[k]); touched = true; }
          else walk(obj[k]);
        });
      };
      walk(data);
      if (touched) {
        fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n", "utf8");
        refsFixed++;
      }
    }
    console.log(`\nPremenovaných .png -> .jpg: ${renamed.size}, opravených odkazov v ${refsFixed} súboroch.`);
  }
})();

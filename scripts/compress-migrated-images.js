#!/usr/bin/env node
/**
 * JEDNORAZOVÝ SKRIPT – spustiť ručne: node scripts/compress-migrated-images.js
 * Zmenší/skomprimuje fotky stiahnuté zo starého webu (assets/images/migrated/),
 * ktoré sú často zbytočne veľké priame WordPress originály (aj 30+ MB).
 * Zmenší väčší rozmer na max. 1920 px a prekóduje na kvalitný, ale
 * kompaktný JPEG/PNG. Prepíše len vtedy, keď je výsledok naozaj menší.
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
const MAX_DIM = 1920;
const JPEG_QUALITY = 82;
const PNG_QUALITY = 82;

(async () => {
  const files = fs.readdirSync(DIR).filter(f => /\.(jpe?g|png)$/i.test(f));
  let before = 0, after = 0, changed = 0;

  for (const f of files) {
    const file = path.join(DIR, f);
    const sizeBefore = fs.statSync(file).size;
    before += sizeBefore;

    try {
      const inputBuf = fs.readFileSync(file); // sharp(cesta) v tomto sandboxe zlyháva, buffer funguje
      const img = sharp(inputBuf);
      const meta = await img.metadata();
      let pipeline = img.rotate(); // rešpektuje EXIF orientáciu
      if (meta.width > MAX_DIM || meta.height > MAX_DIM) {
        pipeline = pipeline.resize({ width: MAX_DIM, height: MAX_DIM, fit: "inside", withoutEnlargement: true });
      }
      const isPng = /\.png$/i.test(f);
      const buf = isPng
        ? await pipeline.png({ quality: PNG_QUALITY, compressionLevel: 9 }).toBuffer()
        : await pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toBuffer();

      if (buf.length < sizeBefore) {
        fs.writeFileSync(file, buf);
        after += buf.length;
        changed++;
      } else {
        after += sizeBefore; // ponechané pôvodné (už bolo menšie/rovnaké)
      }
    } catch (e) {
      console.log(`CHYBA pri ${f}: ${e.message}`);
      after += sizeBefore;
    }
  }

  const mb = n => (n / 1024 / 1024).toFixed(1);
  console.log(`Spracovaných: ${files.length}, zmenšených: ${changed}`);
  console.log(`Veľkosť pred: ${mb(before)} MB -> po: ${mb(after)} MB (ušetrené ${mb(before - after)} MB)`);
})();

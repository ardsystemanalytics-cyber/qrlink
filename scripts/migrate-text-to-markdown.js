/* =====================================================================
   JEDNORAZOVÝ MIGRAČNÝ SKRIPT – spustiť len raz, ručne:
     node scripts/migrate-text-to-markdown.js
   Prepíše pole "text" (a jeho preklady v i18n.*.text) na zastaveniach
   z ručne písaného HTML na Markdown, aby sa dalo editovať cez klasický
   rich-text editor v Decap CMS (výber nadpisu, tučné písmo a pod.)
   namiesto písania HTML značiek. V čase migrácie sa v obsahu používajú
   len značky <h2> a <p>, takže prevod je jednoduchý a bezpečný.
   scripts/build-data.js potom pri nasadení spätne prevedie Markdown
   na HTML (cez knižnicu "marked"), takže js/app.js sa meniť nemusí.
   ===================================================================== */

const fs = require("fs");
const path = require("path");

const DIR = path.join(__dirname, "..", "content", "zastavenia");

function htmlToMarkdown(html) {
  if (!html) return html;
  const blocks = [];
  const re = /<h2>([\s\S]*?)<\/h2>|<p>([\s\S]*?)<\/p>/g;
  let m;
  while ((m = re.exec(html))) {
    if (m[1] !== undefined) blocks.push(`## ${m[1].trim()}`);
    else blocks.push(m[2].trim());
  }
  return blocks.join("\n\n");
}

let changed = 0;
fs.readdirSync(DIR)
  .filter(f => f.endsWith(".json"))
  .forEach(f => {
    const file = path.join(DIR, f);
    const data = JSON.parse(fs.readFileSync(file, "utf8"));
    let touched = false;

    if (data.text) {
      data.text = htmlToMarkdown(data.text);
      touched = true;
    }
    if (data.i18n) {
      ["en", "cs", "hu"].forEach(lang => {
        if (data.i18n[lang] && data.i18n[lang].text) {
          data.i18n[lang].text = htmlToMarkdown(data.i18n[lang].text);
          touched = true;
        }
      });
    }

    if (touched) {
      fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n", "utf8");
      changed++;
    }
  });

console.log(`Migrácia hotová: prepísaných ${changed} súborov na Markdown.`);

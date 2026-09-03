#!/usr/bin/env node
/**
 * Migrácia obsahu zo starého webu (https://www.qrlink.sk/new/, WordPress)
 * do nášho content/{miesta,zastavenia}/*.json.
 *
 * Zdroj nemá REST API pre GPS ani audio (audio je ACF pole, nie je vo
 * "meta"), preto:
 *  - text/obrázky/kategórie čítame z WP REST API (wp-json/wp/v2/{posts,castles,environmental})
 *  - audio URL vytiahneme regexom z vyrenderovanej HTML stránky (<source src="...mp3">)
 *  - GPS na starom webe vôbec nie je (žiadna mapa) – nedá sa migrovať, ostáva manuálne.
 *
 * Použitie:
 *   node scripts/migrate-from-old-site.js <wp-category-id> <nas-miesto-id>
 *
 * Pre každú položku danej WP kategórie (zoradené podľa dátumu vytvorenia
 * vzostupne – zodpovedá poradiu prehliadky) vytvorí/aktualizuje
 * content/zastavenia/<slug>.json, kde <slug> = WP slug príspevku.
 */

const fs = require("fs");
const path = require("path");

const OLD_SITE = "https://www.qrlink.sk/new";
const POST_TYPES = ["posts", "castles", "environmental"];
// Jazyky, ktoré mal starý web (qTranslate-X). Naša nová stránka podporuje
// iba sk/en/cs/hu, ale "cs" na starom webe vôbec neexistovalo (žiadna
// stará URL naň teda nevedie) a de/ru/pl u nás nemajú náprotivok - aj tak
// si ale pôvodné URL ukladáme, nech sa dajú neskôr otestovať/presmerovať.
const OLD_LANGS = ["sk", "en", "de", "ru", "pl", "hu"];

// Z kanonickej (sk) URL postavenej WP ("https://www.qrlink.sk/new/<cesta>/")
// odvodí URL pre všetky staré jazykové mutácie vložením /<lang>/ hneď za "/new/".
function buildOldUrls(canonicalLink) {
  const m = canonicalLink.match(/^(https:\/\/www\.qrlink\.sk\/new)\/(.*)$/);
  if (!m) return { sk: canonicalLink };
  const [, base, restPath] = m;
  const out = {};
  for (const lang of OLD_LANGS) {
    out[lang] = lang === "sk" ? `${base}/${restPath}` : `${base}/${lang}/${restPath}`;
  }
  return out;
}
const ROOT = path.resolve(__dirname, "..");
const ZASTAVENIA_DIR = path.join(ROOT, "content", "zastavenia");
const MIESTA_DIR = path.join(ROOT, "content", "miesta");

async function fetchJson(url) {
  const res = await fetch(url, { headers: { "User-Agent": "qrlink-migration-script" } });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return res.json();
}

async function fetchText(url) {
  const res = await fetch(url, { headers: { "User-Agent": "qrlink-migration-script" } });
  if (!res.ok) return "";
  return res.text();
}

// Veľmi jednoduchý HTML→text prevod: dosť na jednotný WP obsah (p/h2-4/img/a).
function htmlToText(html) {
  if (!html) return "";
  let s = html;
  s = s.replace(/<h([2-4])[^>]*>/gi, "\n\n").replace(/<\/h[2-4]>/gi, "\n");
  s = s.replace(/<\/p>/gi, "\n\n");
  s = s.replace(/<br\s*\/?>/gi, "\n");
  s = s.replace(/<[^>]+>/g, ""); // zvyšné tagy (img, a, span...)
  s = s
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#8216;/g, "‘")
    .replace(/&#8217;/g, "’")
    .replace(/&#8211;/g, "–")
    .replace(/&#8220;/g, "“")
    .replace(/&#8221;/g, "”")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'");
  s = s.replace(/[ \t]+\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim();
  return s;
}

function extractImages(html) {
  if (!html) return [];
  const out = [];
  const re = /<img[^>]+src="([^"]+)"/gi;
  let m;
  while ((m = re.exec(html))) {
    const src = m[1];
    // "mapka_*" je generický pôdorys hradu opakovaný na každom zastavení – nie je to
    // fotka konkrétneho zastavenia, preto ho do galérie nedávame.
    if (/\/mapka_\d+/i.test(src)) continue;
    out.push(src);
  }
  return out;
}

// Audio aj GPS sú na starom webe len v ACF poliach vyrenderovaných priamo do
// HTML (nie sú v REST API), preto oboje vyťahujeme z jednej vyrenderovanej
// stránky zastavenia. GPS má formu "<h3>Mapa - GPS (lat, lng)</h3>" +
// Google Maps iframe (ten použijeme ako "mapEmbed" – rovnaký formát, aký
// admin/config.yml očakáva pri ručnom vypĺňaní).
async function extractAudioAndGps(pageUrl) {
  const html = await fetchText(pageUrl);

  const audio = [];
  const audioRe = /<source[^>]+src="([^"]+\.mp3)"/gi;
  let m;
  while ((m = audioRe.exec(html))) audio.push(m[1]);

  let mapEmbed = "";
  const embedMatch = html.match(/<iframe[^>]+src="(https:\/\/www\.google\.com\/maps[^"]+)"/i);
  if (embedMatch) mapEmbed = embedMatch[1].replace(/&amp;/g, "&");

  // GPS je zvyčajne v nadpise "Mapa - GPS (lat, lng)", ale niekedy je ten
  // nadpis prázdny ("Mapa - GPS ()") a súradnice sú len v "q=lat,lng"
  // parametri Google Maps embed iframe – preto skúšame oba zdroje.
  let gps = null;
  const gpsHeadingMatch = html.match(/Mapa\s*-\s*GPS\s*\(\s*(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)\s*\)/i);
  if (gpsHeadingMatch) {
    gps = { lat: parseFloat(gpsHeadingMatch[1]), lng: parseFloat(gpsHeadingMatch[2]) };
  } else if (mapEmbed) {
    const qMatch = mapEmbed.match(/[?&]q=(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)/);
    if (qMatch) gps = { lat: parseFloat(qMatch[1]), lng: parseFloat(qMatch[2]) };
  }

  return { audio, gps, mapEmbed };
}

async function fetchCategoryItems(categoryId) {
  const all = [];
  for (const type of POST_TYPES) {
    const url = `${OLD_SITE}/wp-json/wp/v2/${type}?categories=${categoryId}&per_page=100&orderby=date&order=asc&_fields=id,slug,title,content,link,featured_media,date`;
    let items;
    try {
      items = await fetchJson(url);
    } catch (e) {
      continue;
    }
    if (Array.isArray(items)) all.push(...items.map((it) => ({ ...it, _type: type })));
  }
  all.sort((a, b) => new Date(a.date) - new Date(b.date));
  return all;
}

async function fetchFeaturedImage(mediaId) {
  if (!mediaId) return "";
  try {
    const media = await fetchJson(`${OLD_SITE}/wp-json/wp/v2/media/${mediaId}?_fields=source_url`);
    return media.source_url || "";
  } catch {
    return "";
  }
}

function decodeEntities(s) {
  return s
    .replace(/&#8211;/g, "–")
    .replace(/&#8216;/g, "‘")
    .replace(/&#8217;/g, "’")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"');
}

async function main() {
  const [, , categoryId, miestoId] = process.argv;
  if (!categoryId || !miestoId) {
    console.error("Použitie: node scripts/migrate-from-old-site.js <wp-category-id> <nas-miesto-id>");
    process.exit(1);
  }

  const miestoPath = path.join(MIESTA_DIR, `${miestoId}.json`);
  if (!fs.existsSync(miestoPath)) {
    console.error(`Miesto ${miestoId} neexistuje: ${miestoPath}`);
    process.exit(1);
  }
  const miesto = JSON.parse(fs.readFileSync(miestoPath, "utf8"));

  const items = await fetchCategoryItems(categoryId);
  console.log(`Kategória ${categoryId}: ${items.length} položiek (${POST_TYPES.join("/")})`);

  let poradie = 1;
  for (const item of items) {
    const slug = item.slug;
    const zPath = path.join(ZASTAVENIA_DIR, `${slug}.json`);
    const existing = fs.existsSync(zPath) ? JSON.parse(fs.readFileSync(zPath, "utf8")) : null;

    const nazov = decodeEntities(item.title.rendered);
    const text = htmlToText(item.content.rendered);
    const galeria = extractImages(item.content.rendered).map((url) => ({ url }));
    const cover = await fetchFeaturedImage(item.featured_media);
    const { audio: audioUrls, gps: scrapedGps, mapEmbed: scrapedMapEmbed } = await extractAudioAndGps(item.link);
    const audio = audioUrls.map((url) => ({ url }));

    const out = {
      id: slug,
      miesto: miestoId,
      // poradie/hlavnaKategoria/projekt/miestoNazov sú odvodené od TOHTO behu
      // (poradie v rámci aktuálne sťahovanej WP kategórie, zvyšné z aktuálneho
      // "miesto") – nie z prípadného predošlého záznamu. Keby sa zastavenie
      // medzičasom preradilo pod iné (pod)miesto (napr. Betliar rozdelený na
      // podkategórie), starý záznam by inak zostal s nesprávnymi hodnotami.
      poradie,
      nazov,
      popis: existing?.popis ?? "",
      cover: cover || existing?.cover || "",
      audio: audio.length ? audio : existing?.audio ?? [],
      galeria: galeria.length ? galeria : existing?.galeria ?? [],
      gps: scrapedGps ?? existing?.gps ?? null,
      mapEmbed: scrapedMapEmbed || existing?.mapEmbed || "",
      text: text || existing?.text || "",
      hlavnaKategoria: miesto.hlavnaKategoria ?? "",
      projekt: miesto.korenoveMiesto ?? miesto.nazov,
      miestoNazov: miesto.nazov,
      povodnaUrl: buildOldUrls(item.link),
    };

    fs.writeFileSync(zPath, JSON.stringify(out, null, 2) + "\n", "utf8");
    console.log(`  ${existing ? "update" : "NOVÝ "} ${slug}.json  (audio:${audio.length} galéria:${galeria.length} gps:${scrapedGps ? "áno" : "nie"})`);
    poradie++;
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

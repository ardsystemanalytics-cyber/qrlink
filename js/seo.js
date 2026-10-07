/* =====================================================================
   QR LINK – SEO (titulok, popis, obrázok na zdieľanie, jazykové verzie)
   JEDINÝ zdroj pravidiel pre všetky tri miesta, kde sa SEO používa:
     1) prehliadač (js/app.js)      – SEO.apply() doplní <head> po načítaní,
     2) build (scripts/build-data.js) – pre každú stránku a jazyk vytvorí
        lib/seo-map.mjs (+ lib/seo-lib.mjs = kópia tohto súboru pre Vercel),
     3) middleware.js               – pri každej požiadavke vloží hotové
        meta tagy priamo do HTML, takže ich vidí aj Google bez JavaScriptu
        a Facebook / WhatsApp / Messenger pri zdieľaní (tie JS nespúšťajú).

   Pravidlá (ak CMS polia "SEO" ostanú prázdne):
   - titulok:  "Názov zastavenia – Projekt | QR LINK"
               (pri projekte "Názov | QR LINK", pri podkategórii
               "Názov – Projekt | QR LINK")
   - popis:    krátky popis → inak začiatok textu zastavenia (prvý
               zmysluplný odsek, max. ~155 znakov, na celé slovo / vetu)
               → inak všeobecná veta o QR LINK
   - obrázok:  titulná fotka → prvá z galérie → fotka nadradeného
               projektu → predvolená fotka webu; vždy s celou adresou
   - canonical + hreflang: každý jazyk má vlastnú kanonickú adresu
               (/en/…, /cs/…, /hu/…, /de/…; slovenčina bez prefixu).
   Ručne vyplnené SEO titulok/popis (v CMS) platí len pre slovenskú
   verziu – v ostatných jazykoch by bol v zlom jazyku, tam sa použije
   automatika z prekladu. SEO obrázok platí pre všetky jazyky.
   ===================================================================== */
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.SEO = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  const ORIGIN = "https://qrlink.sk";
  const SITE = "QR LINK";
  const DEFAULT_LANG = "sk";
  const LANGS = ["sk", "en", "cs", "hu", "de"];
  const LOCALES = { sk: "sk_SK", en: "en_US", cs: "cs_CZ", hu: "hu_HU", de: "de_DE" };
  // Predvolený náhľad pre zdieľanie (domovská stránka a záznamy bez fotky).
  const DEFAULT_IMAGE = "/assets/images/migrated/hrad-strecno.jpg";
  const MAX_DESC = 155;

  // Všeobecná veta, keď záznam nemá ani popis, ani text.
  const TAGLINE = {
    sk: "Digitálny sprievodca QR LINK – naskenujte QR kód na mieste a vypočujte si príbeh.",
    en: "QR LINK digital guide – scan the QR code on site and listen to the story.",
    cs: "Digitální průvodce QR LINK – naskenujte QR kód na místě a poslechněte si příběh.",
    hu: "QR LINK digitális útikalauz – olvassa be a QR-kódot a helyszínen, és hallgassa meg a történetet.",
    de: "QR LINK digitaler Reiseführer – scannen Sie vor Ort den QR-Code und hören Sie die Geschichte."
  };

  const PAGES = {
    home: {
      path: "/",
      title: {
        sk: "QR LINK – Sprievodca, ktorý čaká na mieste",
        en: "QR LINK – A guide waiting right where you stand",
        cs: "QR LINK – Průvodce, který na vás čeká přímo na místě",
        hu: "QR LINK – Egy útikalauz, amely a helyszínen vár rád",
        de: "QR LINK – Ein Reiseführer, der direkt vor Ort auf Sie wartet"
      },
      description: {
        sk: "QR LINK – digitálny sprievodca po mestách, pamiatkach a náučných chodníkoch. Naskenujte QR kód priamo na mieste a počúvajte príbeh.",
        en: "QR LINK – a digital guide to towns, monuments and educational trails. Scan the QR code on site and listen to the story.",
        cs: "QR LINK – digitální průvodce městy, památkami a naučnými stezkami. Naskenujte QR kód přímo na místě a poslechněte si příběh.",
        hu: "QR LINK – digitális útikalauz városokhoz, műemlékekhez és tanösvényekhez. Olvassa be a QR-kódot a helyszínen, és hallgassa meg a történetet.",
        de: "QR LINK – digitaler Reiseführer zu Städten, Denkmälern und Lehrpfaden. Scannen Sie vor Ort den QR-Code und hören Sie die Geschichte."
      }
    },
    kontakt: {
      path: "/kontakt/",
      title: {
        sk: "Kontakt – QR LINK", en: "Contact – QR LINK", cs: "Kontakt – QR LINK",
        hu: "Kapcsolat – QR LINK", de: "Kontakt – QR LINK"
      },
      description: {
        sk: "Kontaktujte nás – radi pripravíme QR sprievodcu pre vaše mesto, pamiatku alebo náučný chodník.",
        en: "Contact us – we will gladly prepare a QR guide for your town, monument or educational trail.",
        cs: "Kontaktujte nás – rádi připravíme QR průvodce pro vaše město, památku nebo naučnou stezku.",
        hu: "Lépjen kapcsolatba velünk – szívesen készítünk QR-útikalauzt az Ön városához, műemlékéhez vagy tanösvényéhez.",
        de: "Kontaktieren Sie uns – wir erstellen gerne einen QR-Guide für Ihre Stadt, Ihr Denkmal oder Ihren Lehrpfad."
      }
    }
  };

  /* ------------------------------------------------ text -> popis ---- */
  const NAMED = {
    nbsp: " ", amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", rsquo: "’", lsquo: "‘",
    ldquo: "“", rdquo: "”", bdquo: "„", ndash: "–", mdash: "—", hellip: "…", laquo: "«",
    raquo: "»", deg: "°"
  };
  function decodeEntities(s) {
    return s.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, function (m, e) {
      if (e.charAt(0) === "#") {
        const n = e.charAt(1).toLowerCase() === "x" ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10);
        return isFinite(n) && n > 0 && n < 0x110000 ? String.fromCodePoint(n) : m;
      }
      const v = NAMED[e.toLowerCase()];
      return v !== undefined ? v : m;
    });
  }
  // HTML (alebo obyčajný text) -> text na jednom riadku
  function plainText(html) {
    return decodeEntities(String(html || "")
      .replace(/<(script|style)[\s\S]*?<\/\1>/gi, " ")
      .replace(/<br\s*\/?>/gi, " ")
      .replace(/<\/(p|div|li|h[1-6]|tr)>/gi, " ")
      .replace(/<[^>]+>/g, ""))
      .replace(/\s+/g, " ")
      .trim();
  }
  function paragraphs(html) {
    const out = [];
    const re = /<p\b[^>]*>([\s\S]*?)<\/p>/gi;
    let m;
    while ((m = re.exec(html))) {
      const t = plainText(m[1]);
      if (t) out.push(t);
    }
    if (!out.length) {
      String(html || "").split(/\n{2,}/).forEach(function (b) { const t = plainText(b); if (t) out.push(t); });
    }
    return out;
  }
  // Riadok typu "Nadmorská výška: 697 metrov, rok postavenia: 2015" alebo
  // krátky nadpis bez bodky – nie je to veta, do popisu sa nehodí.
  function isDataLine(t) {
    return t.length < 60 && (/[:：]/.test(t) || !/[.!?…”"»)]$/.test(t));
  }
  // Skráti na max. znakov: radšej na konci vety (ak nie je príliš skoro),
  // inak na celom slove a s "…". Skratky ako "m n. m." za koniec vety nepočíta.
  function clip(text, max) {
    max = max || MAX_DESC;
    const t = String(text || "").replace(/\s+/g, " ").trim();
    if (t.length <= max) return t;
    const cut = t.slice(0, max + 1);
    let best = -1;
    const re = /[.!?…](?=\s)/g;
    let m;
    while ((m = re.exec(cut)) && m.index < max) {
      if (m.index >= 89 && /[\p{L}\d]{3,}$/u.test(cut.slice(0, m.index))) best = m.index;
    }
    if (best >= 0) return cut.slice(0, best + 1).trim();
    let s = cut.slice(0, max);
    const sp = s.lastIndexOf(" ");
    if (sp > max * 0.6) s = s.slice(0, sp);
    return s.replace(/[\s,;:–—\-(\[„"“]+$/, "") + "…";
  }
  function autoDescription(html, max) {
    const ps = paragraphs(html).filter(function (t) { return !/^https?:\/\//i.test(t) && !isDataLine(t); });
    if (!ps.length) return "";
    let t = ps[0];
    for (let i = 1; i < ps.length && t.length < 100; i++) t += " " + ps[i];
    return clip(t, max);
  }

  /* ------------------------------------------- záznamy / pomocné ---- */
  const trName = (o, l) => (l !== DEFAULT_LANG && o.i18n && o.i18n[l] && o.i18n[l].nazov) || o.nazov || "";
  // Text/popis sa NEpreberá zo slovenčiny do iného jazyka (bol by v zlom jazyku).
  const trField = (o, f, l) => l === DEFAULT_LANG ? (o[f] || "") : ((o.i18n && o.i18n[l] && o.i18n[l][f]) || "");
  const firstUrl = (list) => { const x = (list || [])[0]; return typeof x === "string" ? x : (x && x.url) || ""; };

  function rootOf(m, ctx) {
    let p = m;
    for (let i = 0; p && p.rodic && i < 30; i++) {
      const next = ctx.miestoById(p.rodic);
      if (!next) break;
      p = next;
    }
    return p;
  }
  // vlastná fotka → fotka nadradeného miesta (rovnako ako na stránke)
  function photoOf(m, ctx) {
    for (let p = m, i = 0; p && i < 30; p = p.rodic ? ctx.miestoById(p.rodic) : null, i++) {
      if (p.cover || p.foto) return p.cover || p.foto;
      if (ctx.placePhotos && ctx.placePhotos[p.id]) return ctx.placePhotos[p.id];
    }
    return "";
  }
  function absImage(src) {
    if (!src) return ORIGIN + DEFAULT_IMAGE;
    if (/^https?:\/\//i.test(src)) return src;
    if (src.indexOf("//") === 0) return "https:" + src;
    return ORIGIN + (src.charAt(0) === "/" ? "" : "/") + (src.indexOf("%") >= 0 ? src : encodeURI(src));
  }
  // Cesta záznamu v danom jazyku: "/x/" -> "/en/x/"; interná "…html?id=" -> "&lang=en"
  function langPath(path, lang) {
    if (!lang || lang === DEFAULT_LANG) return path;
    if (path.indexOf(".html") >= 0) return path + (path.indexOf("?") >= 0 ? "&" : "?") + "lang=" + lang;
    return "/" + lang + path;
  }
  function oneLine(s) { return String(s || "").replace(/\s+/g, " ").trim(); }

  function makeMeta(o) {
    const lang = o.lang;
    const alternates = LANGS.map(function (l) { return { hreflang: l, href: ORIGIN + langPath(o.path, l) }; });
    alternates.push({ hreflang: "x-default", href: ORIGIN + langPath(o.path, DEFAULT_LANG) });
    return {
      lang: lang,
      path: o.path,
      title: oneLine(o.title),
      description: oneLine(o.description),
      image: absImage(o.image),
      canonical: ORIGIN + langPath(o.path, lang),
      alternates: alternates,
      locale: LOCALES[lang],
      localeAlt: LANGS.filter(function (l) { return l !== lang; }).map(function (l) { return LOCALES[l]; })
    };
  }

  function fallbackDescription(name, proj, lang) {
    return name + (proj && proj !== name ? " – " + proj : "") + ". " + TAGLINE[lang];
  }
  // Titulok: "Názov – Projekt | QR LINK"; ak by bol dlhší než ~65 znakov
  // (vyhľadávače ho skracujú), vynechá sa projekt.
  function composeTitle(name, proj, custom) {
    if (custom) return custom + " | " + SITE;
    const full = (proj && proj !== name ? name + " – " + proj : name) + " | " + SITE;
    return full.length <= 65 ? full : name + " | " + SITE;
  }
  // Veľmi krátky popis (napr. "Mesto na Zemplíne.") sa doplní všeobecnou vetou.
  const padDescription = (d, lang) => d && d.length < 60 ? d + " " + TAGLINE[lang] : d;

  function forZastavenie(z, lang, ctx) {
    const m = ctx.miestoById(z.miesto);
    const r = m ? rootOf(m, ctx) : null;
    const name = trName(z, lang);
    const proj = r ? trName(r, lang) : "";
    const own = lang === DEFAULT_LANG ? (z.seo || {}) : {};
    const description = own.description || padDescription(
      clip(plainText(trField(z, "popis", lang))) || autoDescription(trField(z, "text", lang)), lang
    ) || fallbackDescription(name, proj, lang);
    const image = (z.seo && z.seo.image) || z.cover || firstUrl(z.galeria) || (m && photoOf(m, ctx)) || "";
    return makeMeta({ path: z.url, lang: lang, title: composeTitle(name, proj, own.title), description: description, image: image });
  }

  function forMiesto(m, lang, ctx) {
    const r = rootOf(m, ctx);
    const name = trName(m, lang);
    const proj = r && r !== m ? trName(r, lang) : "";
    const own = lang === DEFAULT_LANG ? (m.seo || {}) : {};
    const description = own.description || padDescription(
      clip(plainText(trField(m, "popis", lang))), lang
    ) || fallbackDescription(name, proj, lang);
    const image = (m.seo && m.seo.image) || photoOf(m, ctx) || "";
    return makeMeta({ path: m.url, lang: lang, title: composeTitle(name, proj, own.title), description: description, image: image });
  }

  function forPage(key, lang) {
    const p = PAGES[key];
    return makeMeta({ path: p.path, lang: lang, title: p.title[lang], description: p.description[lang], image: "" });
  }
  const forHome = (lang) => forPage("home", lang);
  const forContact = (lang) => forPage("kontakt", lang);

  /* ---- záznam v lib/seo-map.mjs (kompaktný: cesta, obrázok, texty) ---- */
  function entryFromMetas(byLang) {
    const first = byLang[DEFAULT_LANG];
    const t = {};
    Object.keys(byLang).forEach(function (l) { t[l] = [byLang[l].title, byLang[l].description]; });
    return { p: first.path, i: first.image, t: t };
  }
  function metaFromEntry(entry, lang) {
    const tt = entry.t[lang] || entry.t[DEFAULT_LANG];
    return makeMeta({ path: entry.p, lang: entry.t[lang] ? lang : DEFAULT_LANG, title: tt[0], description: tt[1], image: entry.i });
  }

  /* ----------------------------------------------- <head> tagy ----- */
  // Zoznam tagov (bez <title>); "sel" nájde existujúci tag pri aktualizácii.
  function tags(meta) {
    const T = [];
    const metaTag = function (attr, val, content) {
      T.push({ tag: "meta", sel: "meta[" + attr + '="' + val + '"]', attrs: Object.fromEntries([[attr, val], ["content", content]]) });
    };
    metaTag("name", "description", meta.description);
    T.push({ tag: "link", sel: 'link[rel="canonical"]', attrs: { rel: "canonical", href: meta.canonical } });
    meta.alternates.forEach(function (a) {
      T.push({ tag: "link", sel: 'link[rel="alternate"][hreflang="' + a.hreflang + '"]', attrs: { rel: "alternate", hreflang: a.hreflang, href: a.href } });
    });
    metaTag("property", "og:type", "website");
    metaTag("property", "og:site_name", SITE);
    metaTag("property", "og:locale", meta.locale);
    meta.localeAlt.forEach(function (l) {
      T.push({ tag: "meta", sel: 'meta[property="og:locale:alternate"][content="' + l + '"]', attrs: { property: "og:locale:alternate", content: l } });
    });
    metaTag("property", "og:title", meta.title);
    metaTag("property", "og:description", meta.description);
    metaTag("property", "og:url", meta.canonical);
    metaTag("property", "og:image", meta.image);
    metaTag("name", "twitter:card", "summary_large_image");
    metaTag("name", "twitter:title", meta.title);
    metaTag("name", "twitter:description", meta.description);
    metaTag("name", "twitter:image", meta.image);
    return T;
  }
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  function toHtml(meta) {
    return ["<title>" + esc(meta.title) + "</title>"].concat(tags(meta).map(function (t) {
      return "<" + t.tag + " " + Object.keys(t.attrs).map(function (k) { return k + '="' + esc(t.attrs[k]) + '"'; }).join(" ") + ">";
    })).join("\n  ");
  }
  // Nahradí vyznačenú časť <head> (<!--SEO--> … <!--/SEO-->) v šablóne stránky.
  // Vráti null, ak šablóna značky nemá (volajúci potom nechá stránku bez zmeny).
  function injectHead(html, meta) {
    const re = /<!--SEO-->[\s\S]*?<!--\/SEO-->/;
    if (!re.test(html)) return null;
    return html
      .replace(re, function () { return "<!--SEO-->\n  " + toHtml(meta) + "\n  <!--/SEO-->"; })
      .replace(/<html lang="[^"]*"/, function () { return '<html lang="' + meta.lang + '"'; });
  }
  // V prehliadači: doplní/aktualizuje tagy v živom dokumente.
  function apply(doc, meta) {
    doc.title = meta.title;
    const head = doc.head;
    head.querySelectorAll('link[rel="alternate"][hreflang], meta[property="og:locale:alternate"]').forEach(function (e) { e.remove(); });
    tags(meta).forEach(function (t) {
      let el = head.querySelector(t.sel);
      if (!el) { el = doc.createElement(t.tag); head.appendChild(el); }
      Object.keys(t.attrs).forEach(function (k) { el.setAttribute(k, t.attrs[k]); });
    });
  }

  return {
    ORIGIN: ORIGIN, LANGS: LANGS, DEFAULT_LANG: DEFAULT_LANG,
    forZastavenie: forZastavenie, forMiesto: forMiesto, forHome: forHome, forContact: forContact,
    entryFromMetas: entryFromMetas, metaFromEntry: metaFromEntry,
    injectHead: injectHead, apply: apply, toHtml: toHtml, tags: tags, makeMeta: makeMeta,
    autoDescription: autoDescription, clip: clip, plainText: plainText, langPath: langPath
  };
});

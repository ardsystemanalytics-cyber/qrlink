// 301 presmerovania zo starého webu (https://www.qrlink.sk/new/...) na nový.
// Vercel sem smeruje všetko z "/new/:path*" (pozri rewrites vo vercel.json).
//
// Stará cesta mala tvar "/new/[<lang>/]<rest>" (<lang> jeden z
// sk|en|de|ru|pl|hu, sk = predvolený, bez prefixu). Mapa
// _legacy-url-map.json (vygenerovaná scripts/generate-redirects.js z
// polí "povodnaUrl" v content/) prevedie jazykovo-neutrálne <rest> na
// novú cieľovú cestu. Jazyk sa premietne do "?lang=" (naša stránka
// nepodporovaný jazyk (de/ru/pl) sama potichu ignoruje a použije sk).
const map = require("../_legacy-url-map.json");

const OLD_LANGS = ["sk", "en", "de", "ru", "pl", "hu"];

module.exports = (req, res) => {
  const segments = Array.isArray(req.query.path) ? req.query.path : [];
  let lang = "sk";
  let rest = segments;
  if (segments.length && OLD_LANGS.includes(segments[0])) {
    lang = segments[0];
    rest = segments.slice(1);
  }
  const key = rest.join("/").replace(/\/$/, "");
  const destination = map[key] ?? map[""] ?? "/";

  let finalUrl = destination;
  if (lang !== "sk") {
    finalUrl += (destination.includes("?") ? "&" : "?") + "lang=" + encodeURIComponent(lang);
  }

  res.writeHead(301, { Location: finalUrl });
  res.end();
};

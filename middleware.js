/* =====================================================================
   Vercel Routing Middleware – pekné URL zhodné so starým webom.

   Prichádzajúca cesta typu "/category/betliar/" alebo
   "/en/castles/hlavne-nadvorie/" sa (po prípadnom odstránení jazykového
   prefixu) vyhľadá v lib/pretty-url-map.mjs a interne PREPÍŠE (rewrite –
   v adresnom riadku zostáva pôvodná pekná URL) na skutočnú stránku, napr.
   "/zastavenie.html?id=hlavne-nadvorie&lang=en".

   Mapa sa generuje automaticky v scripts/build-data.js z poľa
   "povodnaUrl" (uložené pri migrácii zo starého WordPress webu), takže sa
   nikdy nerozíde s obsahom – žiadna ručná údržba.

   Presmerovanie "/new/..." -> "/..." (301) rieši samostatne vercel.json
   (obyčajný "redirects" záznam) – sem sa tie požiadavky vôbec nedostanú,
   Vercel ich presmeruje ešte predtým, než by mal shanci bežať middleware.

   Musí sa volať presne "middleware.js" (Vercel takto automaticky nájde
   Routing Middleware, pozri "proxy" vo vercel.json) a písaná je ako ES
   modul (import/export) - Vercel ju stavia vlastným kompilátorom bez
   ohľadu na "type" v package.json, presne tak ako to robia všetky
   oficiálne príklady, takže na zvyšné (bežné CommonJS) skripty/funkcie
   v tomto projekte to nemá žiadny vplyv.
   ===================================================================== */
import { rewrite, next } from "@vercel/functions";
import urlMap from "./lib/pretty-url-map.mjs";

const OLD_LANGS = ["sk", "en", "cs", "hu", "de", "ru", "pl"];

export const config = {
  // Vynechá /admin, /api, /assets, /css, /js, /img (celý segment - slug ako
  // "apiary" sa teda nevynechá) a čokoľvek s príponou (napr. /favicon.ico,
  // /sitemap.xml, priamo požadované *.html súbory).
  matcher: ["/((?!(?:admin|api|assets|css|js|img)(?:/|$)|.*\\.).*)"],
};

export default function middleware(request) {
  const url = new URL(request.url);
  const segments = url.pathname.split("/").filter(Boolean);

  let lang = "sk";
  let rest = segments;
  if (segments.length && OLD_LANGS.includes(segments[0])) {
    lang = segments[0];
    rest = segments.slice(1);
  }

  const key = rest.join("/");
  const destination = urlMap[key];
  if (!destination) return next();

  const target = new URL(destination, url);
  if (lang !== "sk") {
    // Náš i18n.js nepodporovaný jazyk (de/ru/pl) sám potichu ignoruje a
    // spadne na slovenčinu – žiadne extra ošetrenie tu netreba.
    target.searchParams.set("lang", lang);
  }

  return rewrite(target);
}

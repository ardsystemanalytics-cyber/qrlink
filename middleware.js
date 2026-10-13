/* =====================================================================
   Vercel Routing Middleware – pekné URL zhodné so starým webom,
   presmerovanie "/new/..." a presmerovanie neexistujúcich adries.

   1) Pekná URL typu "/category/betliar/" alebo "/en/castles/hlavne-nadvorie/"
      sa (po prípadnom odstránení jazykového prefixu) vyhľadá v
      lib/pretty-url-map.mjs a interne PREPÍŠE (rewrite – v adresnom riadku
      zostáva pôvodná pekná URL) na skutočnú stránku, napr.
      "/zastavenie.html?id=hlavne-nadvorie&lang=en".

   2) "/new/..." (starý WordPress web) -> 301 na tú istú adresu bez "/new".
      Ak by taká adresa na novom webe neexistovala, vráti sa rovno stránka
      404 (žiadna reťaz /new/x -> /x -> 404, ani presmerovanie na domov).
      Ruské/poľské adresy (/new/ru/..., /ru/..., /pl/...) idú na slovenskú
      verziu bez prefixu - nový web ruštinu ani poľštinu nemá.

   2b) Staré adresy, ktoré starý web už sám presmeroval (301) na iný obsah
      (pole "povodnePresmerovania" v content/), -> 301 rovno na kanonickú
      adresu cieľa (aj z "/new/..." je to jediný skok).

   3) Čokoľvek ostatné, čo na novom webe neexistuje -> pekná chybová stránka
      404.html so stavom HTTP 404 (v jazyku adresy: /en/..., /cs/..., /hu/...,
      /de/...; noindex). Ponúkne podobné zastavenia podľa slov v adrese.
      Adresa v prehliadači ostáva pôvodná, nič sa nepresmerúva.

   Mapa pekných URL aj zoznam existujúcich súborov sa generujú automaticky
   v scripts/build-data.js (z poľa "povodnaUrl" a zo súborov projektu),
   takže sa nikdy nerozídu s obsahom – žiadna ručná údržba.

   /admin, /api, /assets, /css, /js, /img sem vôbec nechodia (matcher) –
   tie obsluhuje Vercel priamo, bez akejkoľvek zmeny.

   Musí sa volať presne "middleware.js" (Vercel takto automaticky nájde
   Routing Middleware) a písaná je ako ES modul (import/export) - Vercel
   ju stavia vlastným kompilátorom bez ohľadu na "type" v package.json,
   takže na zvyšné (bežné CommonJS) skripty/funkcie to nemá vplyv.
   ===================================================================== */
import { rewrite, next } from "@vercel/functions";
import urlMap, { guess, redirects, movedPlaces, staticFiles } from "./lib/pretty-url-map.mjs";
import seoMap from "./lib/seo-map.mjs";
import SEO from "./lib/seo-lib.mjs";

const OLD_LANGS = ["sk", "en", "cs", "hu", "de", "ru", "pl"];
// Jazyky, ktoré nový web naozaj má (js/i18n.js) - len tie majú vlastnú
// jazykovú verziu "/en/..." atď.; ru/pl/sk prefix sa presmeruje bez neho.
const SITE_LANGS = ["en", "cs", "hu", "de"];
// Priečinky, ktoré obsluhuje priamo Vercel (a matcher ich vynecháva).
const PASSTHROUGH_DIRS = ["admin", "api", "assets", "css", "js", "img", "_vercel", ".well-known"];
const STATIC = new Set(staticFiles);

export const config = {
  // Vynechá /admin, /api, /assets, /css, /js, /img (+ interné /_vercel a
  // /.well-known) - celý segment, slug ako "apiary" sa teda nevynechá.
  matcher: ["/((?!(?:admin|api|assets|css|js|img|_vercel|\\.well-known)(?:/|$)).*)"],
};

// Čo je na danej ceste: { rewrite: "/zastavenie.html?id=..&lang=.." },
// { file: true } (existujúci súbor/priečinok), alebo null (neexistuje).
function resolve(pathname) {
  let decoded;
  try { decoded = decodeURIComponent(pathname); } catch { return null; }
  const segments = decoded.split("/").filter(Boolean);

  let lang = "sk";
  let rest = segments;
  if (segments.length && OLD_LANGS.includes(segments[0])) {
    lang = segments[0];
    rest = segments.slice(1);
  }

  const key = rest.join("/");
  // Presná zhoda, inak (len pri viacdielnej ceste) poistka podľa posledného
  // segmentu = názvu zastavenia, rovnako ako to robil starý WordPress.
  const destination = urlMap[key] ?? (rest.length > 1 ? guess[rest[rest.length - 1]] : undefined);
  if (destination) {
    const target = new URL(destination, "https://x");
    if (lang !== "sk") target.searchParams.set("lang", lang);
    return { rewrite: target.pathname + target.search };
  }

  if (segments.length && PASSTHROUGH_DIRS.includes(segments[0])) return { file: true };
  let rel = decoded.replace(/^\/+/, "");
  if (rel === "" || rel.endsWith("/")) rel += "index.html";
  return STATIC.has(rel) ? { file: true } : null;
}

// Neexistujúca adresa: namiesto presmerovania na hlavnú stránku sa vráti
// pekná chybová stránka 404.html (v jazyku adresy, so stavom 404 a bez
// indexovania). Adresa v prehliadači ostáva pôvodná.
const NOT_FOUND_FALLBACK = `<!DOCTYPE html><html lang="sk"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>404 – QR LINK</title></head><body style="font-family:system-ui,sans-serif;text-align:center;padding:80px 20px"><h1>404</h1><p>Stránka sa nenašla. / Page not found.</p><p><a href="/">QR LINK</a></p></body></html>`;

// Titulok chybovej stránky v jazyku adresy (rovnaké texty ako "err404_title" v js/i18n.js).
const NOT_FOUND_TITLE = {
  sk: "Stránka sa nenašla",
  en: "Page not found",
  cs: "Stránka nenalezena",
  hu: "Az oldal nem található",
  de: "Seite nicht gefunden",
};

async function notFound(pathname, request) {
  const first = pathname.split("/").filter(Boolean)[0];
  const lang = SITE_LANGS.includes(first) ? first : "sk";
  let html = null;
  try {
    const res = await fetch(new URL("/404.html", request.url), { headers: { "x-seo-internal": "1" } });
    const text = await res.text();
    if (text.includes('class="err-page"')) {
      html = text
        .replace(/<html lang="[^"]*"/, () => `<html lang="${lang}"`)
        .replace(/<title>[^<]*<\/title>/, () => `<title>${NOT_FOUND_TITLE[lang]} | QR LINK</title>`);
    }
  } catch {
    /* použije sa záložná stránka nižšie */
  }
  return new Response(html || NOT_FOUND_FALLBACK, {
    status: 404,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "public, max-age=0, must-revalidate",
      "x-robots-tag": "noindex",
    },
  });
}

// Jazykový prefix, ktorý nový web nemá ako samostatnú verziu: ru/pl (starý
// web ich mal, nový nie -> zobrazí sa slovenčina) a "sk" (slovenčina je bez
// prefixu). Takáto adresa sa presmeruje na slovenskú, aby jazyk v adrese
// vždy sedel s jazykom textov: /ru/zvonicka/ -> /zvonicka/.
const NON_SITE_PREFIX = /^\/(?:sk|ru|pl)(?=\/|$)/;
const withoutNonSiteLang = (pathname) => pathname.replace(NON_SITE_PREFIX, "") || "/";

// Jedno presmerovanie 301 na cieľ, ak existuje; ak taká stránka neexistuje,
// rovno chybová stránka 404 (žiadne presmerovanie na hlavnú stránku).
function redirectTo(target, url, request) {
  if (!resolve(target)) return notFound(target, request);
  return Response.redirect(new URL(target + url.search, url), 301);
}

// Stará adresa, ktorú už starý web presmeroval (301) na iný obsah
// ("povodnePresmerovania" v content/) -> kanonická adresa cieľa, so
// zachovaním jazyka: /en/sakralne-pamiatky-v-meste/ -> /en/kaplnka-.../.
// Inak cesta bez zmeny.
function applyOldRedirect(pathname) {
  const segments = pathname.split("/").filter(Boolean);
  const lang = SITE_LANGS.includes(segments[0]) ? segments.shift() : null;
  const target = redirects[segments.join("/")];
  if (!target) return pathname;
  return lang ? `/${lang}${target}` : target;
}

/* 4) SEO v HTML: stránky (zastavenie, kategória, domov, kontakt) majú v
   šablóne vyznačené miesto <!--SEO--> … <!--/SEO-->. Tu sa doň pre danú
   stránku a jazyk vložia hotové meta tagy (titulok, popis, obrázok, canonical,
   hreflang, og:, twitter:) z lib/seo-map.mjs - takže ich vidí aj Google bez
   JavaScriptu a Facebook/WhatsApp/Messenger pri zdieľaní. Pravidlá sú v
   js/seo.js. Ak čokoľvek zlyhá (chýba záznam, šablóna, sieť), vráti sa null
   a stránka sa obslúži ako doteraz (prehliadač si SEO doplní sám). */
async function withSeo(target, request) {
  try {
    const id = target.searchParams.get("id");
    const langParam = target.searchParams.get("lang");
    const lang = SITE_LANGS.includes(langParam) ? langParam : "sk";
    let key;
    let template = target.pathname;
    if (target.pathname === "/zastavenie.html" && id) key = `z:${id}`;
    else if (target.pathname === "/kategoria.html" && id) key = `m:${id}`;
    else if (target.pathname === "/kontakt.html") key = "kontakt";
    else if (target.pathname === "/" || target.pathname === "/index.html") { key = "home"; template = "/index.html"; }
    else return null;
    const entry = seoMap[key];
    if (!entry) return null;

    const res = await fetch(new URL(template, request.url), { headers: { "x-seo-internal": "1" } });
    if (!res.ok) return null;
    const html = SEO.injectHead(await res.text(), SEO.metaFromEntry(entry, lang));
    if (html === null) return null;
    return new Response(html, {
      status: 200,
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "public, max-age=0, must-revalidate",
      },
    });
  } catch {
    return null;
  }
}

export default async function middleware(request) {
  // Interné načítanie šablóny z withSeo() - bez ďalšieho spracovania.
  if (request.headers.get("x-seo-internal")) return next();

  const url = new URL(request.url);
  const { pathname } = url;

  // Zrušené interné miesto (napr. /kategoria.html?id=turzovka-mesto) -> 301 na
  // jeho nástupcu (aj s jazykovým prefixom).
  if (pathname === "/kategoria.html") {
    const moved = movedPlaces[url.searchParams.get("id")];
    if (moved) {
      const langParam = url.searchParams.get("lang");
      const prefix = SITE_LANGS.includes(langParam) ? `/${langParam}` : "";
      return Response.redirect(new URL(prefix + moved, url), 301);
    }
  }

  if (pathname === "/new" || pathname.startsWith("/new/")) {
    return redirectTo(applyOldRedirect(withoutNonSiteLang(pathname.slice(4) || "/")), url, request);
  }
  if (NON_SITE_PREFIX.test(pathname)) return redirectTo(applyOldRedirect(withoutNonSiteLang(pathname)), url, request);
  const redirected = applyOldRedirect(pathname);
  if (redirected !== pathname) return redirectTo(redirected, url, request);

  const found = resolve(pathname);
  if (!found) return notFound(pathname, request);
  // Priama interná adresa (napr. /zastavenie.html?id=nove-zastavenie - tak sa
  // zobrazí záznam z CMS, ktorý nemá starú peknú adresu) - tiež dostane SEO.
  if (found.file) return (await withSeo(url, request)) || next();

  const target = new URL(found.rewrite, url);
  // pôvodné query parametre (napr. ?utm_source=qr) zachovať
  for (const [k, v] of url.searchParams) if (!target.searchParams.has(k)) target.searchParams.set(k, v);
  return (await withSeo(target, request)) || rewrite(target);
}

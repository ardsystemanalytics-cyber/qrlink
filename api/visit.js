/* =====================================================================
   Zdieľané počítadlo návštev zastavení (Vercel serverless funkcia).
     POST /api/visit?id=<id zastavenia>  -> zvýši počet o 1, vráti {"count": N}
     GET  /api/visit?id=<id zastavenia>  -> len vráti aktuálny počet
   Počty sú v databáze Upstash Redis pripojenej k projektu vo Verceli
   (Storage -> Upstash for Redis). Vercel pri pripojení sám vytvorí
   premenné prostredia s adresou a tokenom (KV_REST_API_URL / _TOKEN alebo
   s iným predponou, napr. STORAGE_REST_API_URL / _TOKEN, resp.
   UPSTASH_REDIS_REST_URL / _TOKEN) - funkcia si ich nájde podľa koncovky.
   Používa sa priamo REST adresa databázy, žiadna ďalšia knižnica.

   Čo sa ukladá: len číslo pre každé zastavenie (žiadna IP ani iné osobné
   údaje). Roboty (Google, náhľady odkazov...) sa nepočítajú; opakované
   návštevy toho istého zariadenia v ten istý deň rieši prehliadač
   (js/app.js, renderCounter).
   Ak databáza nie je pripojená, funkcia vráti 503 a stránka použije
   pôvodné lokálne počítadlo - nič sa nerozbije.
   ===================================================================== */

const HASH = "qrlink:visits";
// Zoznam platných id zastavení generuje scripts/build-data.js (bránime tomu,
// aby si niekto do databázy zapísal ľubovoľné kľúče).
let VALID_IDS = null;
try { VALID_IDS = new Set(require("./_zastavenia-ids.json")); } catch (e) { /* bez zoznamu: len kontrola tvaru */ }

const BOT_RE = /bot|crawl|spider|slurp|facebookexternalhit|whatsapp|telegram|preview|lighthouse|headless|curl|wget|python-requests|monitor|uptime/i;

function redisConfig() {
  const env = process.env;
  const names = Object.keys(env);
  const urlKey = names.find(k => /_REST_API_URL$/.test(k)) || names.find(k => k === "UPSTASH_REDIS_REST_URL");
  const tokenKey = names.find(k => /_REST_API_TOKEN$/.test(k) && !/READ_ONLY/.test(k)) || names.find(k => k === "UPSTASH_REDIS_REST_TOKEN");
  if (!urlKey || !tokenKey || !env[urlKey] || !env[tokenKey]) return null;
  return { url: env[urlKey].replace(/\/+$/, ""), token: env[tokenKey] };
}

async function redis(cfg, command) {
  const res = await fetch(cfg.url, {
    method: "POST",
    headers: { Authorization: `Bearer ${cfg.token}`, "Content-Type": "application/json" },
    body: JSON.stringify(command),
  });
  if (!res.ok) throw new Error(`Redis HTTP ${res.status}`);
  const json = await res.json();
  if (json.error) throw new Error(json.error);
  return json.result;
}

module.exports = async (req, res) => {
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("Content-Type", "application/json; charset=utf-8");

  const id = String((req.query && req.query.id) || "");
  if (!/^[a-z0-9][a-z0-9-]{0,120}$/i.test(id) || (VALID_IDS && !VALID_IDS.has(id))) {
    res.status(400).send(JSON.stringify({ error: "neplatné id" }));
    return;
  }
  if (req.method !== "GET" && req.method !== "POST") {
    res.setHeader("Allow", "GET, POST");
    res.status(405).send(JSON.stringify({ error: "metóda nie je povolená" }));
    return;
  }

  const cfg = redisConfig();
  if (!cfg) {
    res.status(503).send(JSON.stringify({ error: "databáza nie je pripojená" }));
    return;
  }

  try {
    const ua = String(req.headers["user-agent"] || "");
    const prefetch = /prefetch|prerender/i.test(String(req.headers["purpose"] || req.headers["sec-purpose"] || ""));
    const count = req.method === "POST" && ua && !BOT_RE.test(ua) && !prefetch
      ? await redis(cfg, ["HINCRBY", HASH, id, 1])
      : await redis(cfg, ["HGET", HASH, id]);
    res.status(200).send(JSON.stringify({ count: Number(count) || 0 }));
  } catch (e) {
    res.status(502).send(JSON.stringify({ error: "databáza neodpovedá" }));
  }
};

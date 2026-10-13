/* Spoločné pomocné funkcie pre prácu s databázou Upstash Redis (REST) –
   používa api/visit.js (počítadlo) aj api/stats.js (prehľad v /admin).
   Súbor s "_" na začiatku Vercel nepovažuje za samostatný endpoint.

   Premenné prostredia (KV_REST_API_URL / _TOKEN, resp. s inou predponou,
   napr. STORAGE_REST_API_URL / _TOKEN, alebo UPSTASH_REDIS_REST_URL / _TOKEN)
   vytvorí Vercel sám pri pripojení databázy – hľadajú sa podľa koncovky. */

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

// Kľúč (hash), v ktorom sú počty návštev: pole = id zastavenia, hodnota = počet.
const VISITS_HASH = "qrlink:visits";

module.exports = { redisConfig, redis, VISITS_HASH };

/* =====================================================================
   Prehľad návštevnosti pre /admin (záložka "Počítadlo návštev" v CMS).
     GET /api/stats  -> {"counts": {"<id zastavenia>": počet, ...}}
   NIE JE VEREJNÉ: vyžaduje hlavičku "Authorization: Bearer <GitHub token>"
   prihláseného redaktora CMS (admin/admin-stats.js ju berie z prihlásenia
   Decap CMS). Token sa overí na GitHube - povolený je len ten, kto má právo
   zápisu do repozitára (rovnako ako pri úprave obsahu v CMS).
   Tvar odpovede: 401 = nie je prihlásený / neplatný token, 403 = nemá právo
   zápisu, 503 = databáza nie je pripojená.
   ===================================================================== */

const { redisConfig, redis, VISITS_HASH } = require("./_redis");

// Repozitár, do ktorého musí mať volajúci právo zápisu (rovnaký ako
// "repo" v admin/config.yml); dá sa prepísať premennou prostredia GITHUB_REPO.
const REPO = process.env.GITHUB_REPO || "ardsystemanalytics-cyber/qrlink";

async function hasWriteAccess(token) {
  const res = await fetch(`https://api.github.com/repos/${REPO}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "User-Agent": "qrlink-stats",
    },
  });
  if (res.status === 401 || res.status === 403 || res.status === 404) return res.status === 401 ? "invalid" : "denied";
  if (!res.ok) throw new Error(`GitHub HTTP ${res.status}`);
  const repo = await res.json();
  return repo && repo.permissions && (repo.permissions.push || repo.permissions.admin) ? "ok" : "denied";
}

module.exports = async (req, res) => {
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  const fail = (code, error) => res.status(code).send(JSON.stringify({ error }));

  if (req.method !== "GET") { res.setHeader("Allow", "GET"); return fail(405, "metóda nie je povolená"); }

  const m = /^(?:Bearer|token)\s+(\S+)$/i.exec(String(req.headers.authorization || ""));
  if (!m) return fail(401, "chýba prihlásenie");

  let access;
  try { access = await hasWriteAccess(m[1]); } catch (e) { return fail(502, "GitHub neodpovedá"); }
  if (access === "invalid") return fail(401, "neplatné prihlásenie");
  if (access !== "ok") return fail(403, "nemáš právo zápisu do repozitára");

  const cfg = redisConfig();
  if (!cfg) return fail(503, "databáza nie je pripojená");

  try {
    const flat = (await redis(cfg, ["HGETALL", VISITS_HASH])) || [];
    const counts = {};
    for (let i = 0; i + 1 < flat.length; i += 2) counts[flat[i]] = Number(flat[i + 1]) || 0;
    res.status(200).send(JSON.stringify({ counts }));
  } catch (e) {
    fail(502, "databáza neodpovedá");
  }
};

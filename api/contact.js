/* =====================================================================
   Kontaktný formulár: prijme správu a odošle ju e-mailom (Vercel funkcia).
     GET  /api/contact  -> {"enabled": bool, "turnstileSiteKey": "..."|null}
                           (verejná konfigurácia pre formulár, žiadne tajomstvá)
     POST /api/contact  -> JSON {meno, email, telefon?, sprava, website, elapsed,
                           turnstileToken, lang, page}

   Ochrana pred spamom (vrstvy):
     1) Cloudflare Turnstile (skutočné captcha, zadarmo, bez sledovania) -
        overuje sa na serveri; zapína sa premennými TURNSTILE_*,
     2) honeypot pole "website" (roboty ho vypĺňajú, ľudia ho nevidia),
     3) minimálny čas vyplnenia (formulár odoslaný skôr než za ~3 s = robot),
     4) limit odoslaní na zariadenie (IP sa neukladá, len jej hash na 1 hodinu)
        a celkový denný strop - cez databázu Redis, ak je pripojená,
     5) kontrola obsahu (dĺžky, e-mail, príliš veľa odkazov).

   Nastavenie vo Verceli (Settings -> Environment Variables):
     RESEND_API_KEY        kľúč zo služby Resend (resend.com) - povinné
     CONTACT_TO            kam majú správy chodiť (predvolene info@ard.sk)
     CONTACT_FROM          odosielateľ, napr. "QR LINK <web@qrlink.sk>" (musí byť
                           z overenej domény v Resende; kým nie je, funguje
                           predvolený "QR LINK <onboarding@resend.dev>" len na
                           e-mail majiteľa účtu Resend - na skúšku)
     TURNSTILE_SITE_KEY    verejný kľúč Cloudflare Turnstile (pre formulár)
     TURNSTILE_SECRET_KEY  tajný kľúč Cloudflare Turnstile (overenie na serveri)
   Kým RESEND_API_KEY nie je nastavený, funkcia vráti 503 a formulár
   návštevníkovi povie, že odoslanie nie je dostupné (nepredstiera úspech).
   ===================================================================== */

const crypto = require("crypto");
const { redisConfig, redis } = require("./_redis");

const MAX_PER_HOUR = 5;     // správ z jedného zariadenia za hodinu
const MAX_PER_DAY = 150;    // strop celého formulára za deň (ochrana schránky)
const MIN_FILL_MS = 3000;   // rýchlejšie vyplnený formulár je robot

const send = (res, code, body) => { res.status(code).send(JSON.stringify(body)); };
const clean = (v, max) => String(v == null ? "" : v).replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "").trim().slice(0, max);
const oneLine = (v, max) => clean(v, max).replace(/[\r\n]+/g, " ");
const EMAIL_RE = /^[^\s@<>()[\]\\,;:"]+@[^\s@<>()[\]\\,;:"]+\.[^\s@<>()[\]\\,;:"]{2,}$/;

function clientIp(req) {
  const xf = String(req.headers["x-forwarded-for"] || "").split(",")[0].trim();
  return xf || String(req.headers["x-real-ip"] || "") || "unknown";
}

// Vráti počet pokusov v okne (alebo null, ak databáza nie je k dispozícii).
async function bump(cfg, key, ttlSeconds) {
  if (!cfg) return null;
  try {
    const n = await redis(cfg, ["INCR", key]);
    if (n === 1) await redis(cfg, ["EXPIRE", key, ttlSeconds]);
    return Number(n);
  } catch (e) {
    return null; // databáza zlyhala - nebrániť odoslaniu
  }
}

async function verifyTurnstile(secret, token, ip) {
  const body = new URLSearchParams({ secret, response: token });
  if (ip && ip !== "unknown") body.set("remoteip", ip);
  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", { method: "POST", body });
  const data = await res.json();
  return !!(data && data.success);
}

module.exports = async (req, res) => {
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("Content-Type", "application/json; charset=utf-8");

  if (req.method === "GET") {
    return send(res, 200, {
      enabled: !!process.env.RESEND_API_KEY,
      turnstileSiteKey: process.env.TURNSTILE_SITE_KEY || null,
    });
  }
  if (req.method !== "POST") {
    res.setHeader("Allow", "GET, POST");
    return send(res, 405, { error: "method" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return send(res, 503, { error: "not_configured" });

  let b = req.body;
  if (typeof b === "string") { try { b = JSON.parse(b); } catch (e) { b = null; } }
  if (!b || typeof b !== "object") return send(res, 400, { error: "invalid" });

  // 2) honeypot a 3) čas - robotom odpovieme "úspech" a nič neodošleme
  if (clean(b.website, 200)) return send(res, 200, { ok: true });
  const elapsed = Number(b.elapsed);
  if (!Number.isFinite(elapsed) || elapsed < MIN_FILL_MS) return send(res, 200, { ok: true });

  // 5) obsah
  const meno = oneLine(b.meno, 120);
  const email = oneLine(b.email, 254);
  const telefon = oneLine(b.telefon, 40);
  const sprava = clean(b.sprava, 5000);
  if (meno.length < 2 || !EMAIL_RE.test(email) || sprava.length < 5) return send(res, 400, { error: "invalid" });
  if ((sprava.match(/https?:\/\/|www\./gi) || []).length > 2) return send(res, 400, { error: "links" });

  const ip = clientIp(req);

  // 1) Turnstile (ak je nastavené, je povinné)
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (secret) {
    const token = clean(b.turnstileToken, 4096);
    if (!token) return send(res, 400, { error: "captcha" });
    let ok = false;
    try { ok = await verifyTurnstile(secret, token, ip); } catch (e) { return send(res, 502, { error: "captcha_unavailable" }); }
    if (!ok) return send(res, 400, { error: "captcha" });
  }

  // 4) limity
  const cfg = redisConfig();
  const ipHash = crypto.createHash("sha256").update("qrlink-contact|" + ip).digest("hex").slice(0, 32);
  const hour = await bump(cfg, `qrlink:contact:ip:${ipHash}`, 3600);
  if (hour !== null && hour > MAX_PER_HOUR) return send(res, 429, { error: "rate" });
  const day = await bump(cfg, `qrlink:contact:day:${new Date().toISOString().slice(0, 10)}`, 90000);
  if (day !== null && day > MAX_PER_DAY) return send(res, 429, { error: "rate" });

  // odoslanie e-mailu (Resend)
  const to = process.env.CONTACT_TO || "info@ard.sk";
  const from = process.env.CONTACT_FROM || "QR LINK <onboarding@resend.dev>";
  const page = oneLine(b.page, 300);
  const lang = oneLine(b.lang, 5);
  const text =
    `Nová správa z kontaktného formulára webu QR LINK\n\n` +
    `Meno:     ${meno}\n` +
    `E-mail:   ${email}\n` +
    (telefon ? `Telefón:  ${telefon}\n` : "") +
    `Jazyk:    ${lang || "-"}\n` +
    `Stránka:  ${page || "-"}\n\n` +
    `Správa:\n${sprava}\n`;

  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `QR LINK – správa z webu od ${meno}`.slice(0, 200),
        text,
      }),
    });
    if (!r.ok) return send(res, 502, { error: "send_failed" });
  } catch (e) {
    return send(res, 502, { error: "send_failed" });
  }
  return send(res, 200, { ok: true });
};

/* =====================================================================
   GitHub OAuth "prihlasovací mostík" pre Decap CMS (/admin).
   Krok 2/2: GitHub sem presmeruje redaktora naspäť s jednorazovým "code",
   ten sa tu vymení za prístupový token a pošle sa naspäť do /admin okna.
   ===================================================================== */

module.exports = async (req, res) => {
  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;
  const clientSecret = process.env.OAUTH_GITHUB_CLIENT_SECRET;
  const code = (req.query && req.query.code) || new URL(req.url, "http://x").searchParams.get("code");

  if (!clientId || !clientSecret) {
    res.status(500).send("Chýbajú premenné prostredia OAUTH_GITHUB_CLIENT_ID / OAUTH_GITHUB_CLIENT_SECRET vo Verceli.");
    return;
  }
  if (!code) {
    res.status(400).send("Chýba parameter code – prihlásenie sa nepodarilo.");
    return;
  }

  let token, error;
  try {
    const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code })
    });
    const data = await tokenRes.json();
    token = data.access_token;
    error = data.error_description || data.error;
  } catch (e) {
    error = String(e);
  }

  if (!token) {
    res.status(400).send(`Prihlásenie zlyhalo: ${error || "neznáma chyba"}`);
    return;
  }

  const payload = JSON.stringify({ token, provider: "github" });

  // Decap CMS štandardný "postMessage" handshake medzi popup oknom a /admin.
  // Pozor: payload je JSON (dvojité úvodzovky), preto ho v klientskom skripte
  // obaľujeme jednoduchými úvodzovkami, nie dvojitými.
  res.setHeader("Content-Type", "text/html");
  res.status(200).send(`<!doctype html><html><body>
<script>
(function () {
  function receive(e) {
    window.opener.postMessage('authorization:github:success:${payload}', e.origin);
    window.removeEventListener("message", receive, false);
  }
  window.addEventListener("message", receive, false);
  window.opener.postMessage("authorizing:github", "*");
})();
</script>
</body></html>`);
};

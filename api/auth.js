/* =====================================================================
   GitHub OAuth "prihlasovací mostík" pre Decap CMS (/admin).
   Krok 1/2: presmeruje na GitHub, kde si redaktor povolí prístup k repu.
   Potrebuje premenné prostredia nastavené vo Verceli:
     OAUTH_GITHUB_CLIENT_ID, OAUTH_GITHUB_CLIENT_SECRET
   (vytvoria sa pri založení GitHub OAuth App – pozri README.)
   ===================================================================== */

module.exports = (req, res) => {
  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;
  if (!clientId) {
    res.status(500).send("Chýba premenná prostredia OAUTH_GITHUB_CLIENT_ID vo Verceli.");
    return;
  }

  const host = req.headers["x-forwarded-host"] || req.headers.host;
  const protocol = (req.headers["x-forwarded-proto"] || "https").split(",")[0];
  const redirectUri = `${protocol}://${host}/api/callback`;

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    scope: "repo,user"
  });

  res.writeHead(302, { Location: `https://github.com/login/oauth/authorize?${params.toString()}` });
  res.end();
};

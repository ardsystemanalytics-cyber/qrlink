/* =====================================================================
   Záložka "Počítadlo návštev" v /admin (ľavé menu CMS).
   Decap CMS nemá vlastné záložky, preto je v config.yml pripravená
   kolekcia "pocitadlo" (aby sa v menu objavila) a tento skript – keď je
   otvorená – nahradí jej obsah prehľadom návštevnosti:
     - súhrn (návštev spolu, zastavení s návštevou, najčastejšie),
     - rebríček najnavštevovanejších zastavení (filter podľa projektu),
     - návštevnosť podľa projektov.
   Počty prináša zabezpečený /api/stats (len pre prihlásených redaktorov –
   používa sa GitHub prihlásenie Decap CMS). Názvy, cesty a fotky zastavení
   sa berú z /js/data.js (načíta sa až pri prvom otvorení záložky).
   Ak by Decap zmenil vnútornú štruktúru, skript sa len prestane uplatňovať
   (záložka ostane prázdna) – ostatný CMS sa nepokazí.
   ===================================================================== */
(function () {
  "use strict";
  const COLLECTION_HASH = /^#\/collections\/pocitadlo(\/|$)/;
  const PAGE = 15; // koľko zastavení sa zobrazí naraz v rebríčku
  const nf = new Intl.NumberFormat("sk-SK");
  const esc = s => String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

  let panel = null;
  let state = { counts: null, updated: null, project: "", shown: PAGE, error: null, loading: false };

  /* ------------------------------------------------ údaje --------- */
  function loadSiteData() {
    if (typeof DB !== "undefined") return Promise.resolve();
    return new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = "/js/data.js";
      s.onload = resolve;
      s.onerror = () => reject(new Error("data"));
      document.head.appendChild(s);
    });
  }
  const byId = () => { const m = {}; DB.miesta.forEach(x => { m[x.id] = x; }); return m; };
  function chainOf(m, miesta) {
    const out = [];
    for (let p = m, i = 0; p && i < 30; p = p.rodic ? miesta[p.rodic] : null, i++) out.unshift(p);
    return out;
  }
  function photoOf(z, miesta) {
    if (z.cover) return z.cover;
    if (z.galeria && z.galeria[0]) return z.galeria[0];
    for (let p = miesta[z.miesto], i = 0; p && i < 30; p = p.rodic ? miesta[p.rodic] : null, i++) {
      if (p.cover || p.foto) return p.cover || p.foto;
      if (typeof PLACE_PHOTOS !== "undefined" && PLACE_PHOTOS[p.id]) return PLACE_PHOTOS[p.id];
    }
    return "";
  }
  function authToken() {
    try { return (JSON.parse(localStorage.getItem("decap-cms-user") || "{}") || {}).token || ""; } catch (e) { return ""; }
  }
  async function fetchCounts() {
    const headers = {};
    const token = authToken();
    if (token) headers.Authorization = "Bearer " + token;
    const res = await fetch("/api/stats/", { headers, cache: "no-store" });
    let data = null;
    try { data = await res.json(); } catch (e) { /* nie je JSON */ }
    if (res.ok && data && data.counts) return data.counts;
    const err = new Error((data && data.error) || ("HTTP " + res.status));
    err.status = res.status;
    throw err;
  }
  function errorText(e) {
    if (e.status === 401) return "Nie si prihlásená/ý alebo prihlásenie vypršalo. Odhlás sa a prihlás sa znova cez GitHub.";
    if (e.status === 403) return "Na zobrazenie prehľadu treba právo zápisu do repozitára.";
    if (e.status === 503) return "Databáza počítadla nie je pripojená (Vercel → Storage).";
    if (e.status === 404 || e.status === undefined) return "Prehľad funguje len na ostrom webe (lokálne nie je dostupné serverové počítadlo).";
    return "Počty sa nepodarilo načítať (" + e.message + "). Skús to o chvíľu znova.";
  }

  /* ------------------------------------------------ vykreslenie ---- */
  function compute() {
    const miesta = byId();
    const stops = DB.zastavenia.map(z => {
      const chain = chainOf(miesta[z.miesto], miesta);
      return {
        id: z.id, name: z.nazov, url: z.url, photo: photoOf(z, miesta),
        path: chain.map(c => c.nazov).join(" › "),
        root: chain[0] || null,
        n: (state.counts && state.counts[z.id]) || 0,
      };
    });
    const projects = {};
    stops.forEach(s => {
      if (!s.root) return;
      const p = projects[s.root.id] || (projects[s.root.id] = { id: s.root.id, name: s.root.nazov, n: 0, visited: 0, total: 0 });
      p.n += s.n; p.total++; if (s.n > 0) p.visited++;
    });
    return { stops, projects: Object.values(projects).sort((a, b) => b.n - a.n || a.name.localeCompare(b.name, "sk")) };
  }

  function bar(n, max) { return `<span class="qr-stats-bar"><i style="width:${max ? Math.max(2, Math.round(n / max * 100)) : 0}%"></i></span>`; }

  function render() {
    if (!panel) return;
    const head = `
      <div class="qr-stats-top">
        <div>
          <h2>Počítadlo návštev</h2>
          <p>Ktoré zastavenia si návštevníci pustili najčastejšie. Návšteva sa počíta raz za deň z jedného zariadenia, roboty sa nepočítajú.</p>
        </div>
        <button type="button" class="qr-stats-refresh" ${state.loading ? "disabled" : ""}>${state.loading ? "Načítavam…" : "↻ Obnoviť"}</button>
      </div>`;
    if (state.error) { panel.innerHTML = head + `<div class="qr-stats-msg">${esc(state.error)}</div>`; return bind(); }
    if (!state.counts) { panel.innerHTML = head + `<div class="qr-stats-msg">Načítavam…</div>`; return bind(); }

    const { stops, projects } = compute();
    const total = stops.reduce((a, s) => a + s.n, 0);
    const visited = stops.filter(s => s.n > 0).length;
    const ranked = stops.filter(s => s.n > 0 && (!state.project || (s.root && s.root.id === state.project)))
      .sort((a, b) => b.n - a.n || a.name.localeCompare(b.name, "sk"));
    const top = stops.slice().sort((a, b) => b.n - a.n)[0];
    const max = ranked.length ? ranked[0].n : 0;
    const maxP = projects.length ? projects[0].n : 0;

    const tiles = `
      <div class="qr-stats-tiles">
        <div class="qr-stats-tile"><b>${nf.format(total)}</b><span>návštev spolu</span></div>
        <div class="qr-stats-tile"><b>${nf.format(visited)} <small>z ${nf.format(stops.length)}</small></b><span>zastavení s aspoň jednou návštevou</span></div>
        <div class="qr-stats-tile"><b class="small">${top && top.n ? esc(top.name) : "–"}</b><span>${top && top.n ? "najnavštevovanejšie · " + nf.format(top.n) + "×" : "zatiaľ žiadne návštevy"}</span></div>
      </div>`;

    const options = [`<option value="">Všetky projekty</option>`].concat(
      projects.map(p => `<option value="${esc(p.id)}"${state.project === p.id ? " selected" : ""}>${esc(p.name)}</option>`)).join("");
    const rows = ranked.slice(0, state.shown).map((s, i) => `
      <li class="qr-stats-row">
        <span class="qr-stats-rank">${i + 1}</span>
        ${s.photo ? `<img class="qr-stats-thumb" src="${esc(s.photo)}" alt="" loading="lazy">` : `<span class="qr-stats-thumb"></span>`}
        <span class="qr-stats-info">
          <a class="qr-stats-name" href="#/collections/zastavenia/entries/${encodeURIComponent(s.id)}" title="Upraviť v CMS">${esc(s.name)}</a>
          <span class="qr-stats-path">${esc(s.path)}</span>
        </span>
        ${bar(s.n, max)}
        <span class="qr-stats-num">${nf.format(s.n)}</span>
        ${s.url ? `<a class="qr-stats-web" href="${esc(s.url)}" target="_blank" rel="noopener" title="Otvoriť na webe">↗ Na webe</a>` : ""}
      </li>`).join("");
    const more = ranked.length > state.shown
      ? `<button type="button" class="qr-stats-more">Zobraziť ďalšie (${ranked.length - state.shown})</button>` : "";
    const ranking = `
      <section class="qr-stats-block">
        <div class="qr-stats-blockhead"><h3>Najnavštevovanejšie zastavenia</h3><select class="qr-stats-filter" aria-label="Projekt">${options}</select></div>
        ${ranked.length ? `<ol class="qr-stats-list">${rows}</ol>${more}` : `<div class="qr-stats-msg">${state.project ? "V tomto projekte zatiaľ nie sú žiadne návštevy." : "Zatiaľ nie sú žiadne návštevy. Objavia sa po prvých otvoreniach zastavení."}</div>`}
      </section>`;

    const byProject = `
      <section class="qr-stats-block">
        <div class="qr-stats-blockhead"><h3>Návštevnosť podľa projektov</h3></div>
        <ol class="qr-stats-list">${projects.filter(p => p.n > 0).map((p, i) => `
          <li class="qr-stats-row qr-stats-prow">
            <span class="qr-stats-rank">${i + 1}</span>
            <span class="qr-stats-info"><a class="qr-stats-name" href="#/collections/miesta/entries/${encodeURIComponent(p.id)}" title="Upraviť v CMS">${esc(p.name)}</a>
              <span class="qr-stats-path">${p.visited} z ${p.total} zastavení s návštevou</span></span>
            ${bar(p.n, maxP)}
            <span class="qr-stats-num">${nf.format(p.n)}</span>
          </li>`).join("") || `<li class="qr-stats-msg">Zatiaľ žiadne údaje.</li>`}</ol>
      </section>`;

    const foot = state.updated ? `<p class="qr-stats-foot">Aktualizované ${state.updated.toLocaleTimeString("sk-SK", { hour: "2-digit", minute: "2-digit" })}</p>` : "";
    panel.innerHTML = head + tiles + ranking + byProject + foot;
    bind();
  }

  function bind() {
    const q = s => panel.querySelector(s);
    const refresh = q(".qr-stats-refresh"); if (refresh) refresh.onclick = load;
    const more = q(".qr-stats-more"); if (more) more.onclick = () => { state.shown += PAGE; render(); };
    const filter = q(".qr-stats-filter"); if (filter) filter.onchange = () => { state.project = filter.value; state.shown = PAGE; render(); };
  }

  async function load() {
    if (!panel) return;
    state.loading = true; state.error = null; render();
    try {
      await loadSiteData();
      state.counts = await fetchCounts();
      state.updated = new Date();
    } catch (e) {
      state.counts = null;
      state.error = errorText(e);
    }
    state.loading = false;
    render();
  }

  /* ------------------------------------- pripojenie do CMS -------- */
  function ensure() {
    const main = document.querySelector('main[class*="CollectionMain"]');
    if (COLLECTION_HASH.test(location.hash)) {
      if (!main) return;
      if (!panel || !main.contains(panel)) {
        panel = document.createElement("div");
        panel.className = "qr-stats-panel";
        main.insertBefore(panel, main.firstChild);
        main.classList.add("qr-stats-active");
        state.shown = PAGE;
        load();
      }
    } else if (panel) {
      if (panel.parentElement) panel.parentElement.classList.remove("qr-stats-active");
      panel.remove();
      panel = null;
    }
    // zvyšné stránky zbavíme značky, aj keď main ostane (iná kolekcia)
    if (!COLLECTION_HASH.test(location.hash) && main) main.classList.remove("qr-stats-active");
  }

  new MutationObserver(ensure).observe(document.documentElement, { childList: true, subtree: true });
  window.addEventListener("hashchange", ensure);
})();

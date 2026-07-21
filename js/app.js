/* =====================================================================
   QR LINK – APLIKAČNÁ LOGIKA
   Renderuje obsah z js/data.js do stránok. Bez externých knižníc.
   ===================================================================== */

const Q = (s, el = document) => el.querySelector(s);
const QA = (s, el = document) => [...el.querySelectorAll(s)];
const param = (k) => new URLSearchParams(location.search).get(k);
const katById = (id) => DB.kategorie.find(k => k.id === id);
const miestoById = (id) => DB.miesta.find(m => m.id === id);
const DEFAULT_PHOTO = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80";

/* ------------------------------------------- strom kategórií ------ */
/* projekt = miesto bez "rodic" (top-level); podkategória = miesto s "rodic" */
const jeKoren = (m) => !m.rodic;
const detiOf = (id) => DB.miesta.filter(m => m.rodic === id);
const zastaveniaPriamoOf = (id) => DB.zastavenia.filter(z => z.miesto === id);
const maObsah = (z) => !!z.text && !z.text.includes("[DOPLNIŤ");

/* počet zastavení s obsahom v celom podstrome (aj cez viac úrovní podkategórií) */
function pocetZastaveni(id) {
  let n = zastaveniaPriamoOf(id).filter(maObsah).length;
  detiOf(id).forEach(dieta => { n += pocetZastaveni(dieta.id); });
  return n;
}

function slovoZastavenia(n) {
  if (n === 1) return "zastavenie";
  if (n >= 2 && n <= 4) return "zastavenia";
  return "zastavení";
}

/* koreňový projekt – odtiaľ sa dedí farba/ikona hlavnej kategórie */
function rootProjekt(m) {
  let cur = m;
  while (cur.rodic) {
    const p = miestoById(cur.rodic);
    if (!p) break;
    cur = p;
  }
  return cur;
}

/* reťaz predkov od koreňa po m (vrátane m) – pre breadcrumby */
function retazPredkov(m) {
  const chain = [];
  let cur = m;
  while (cur) { chain.unshift(cur); cur = cur.rodic ? miestoById(cur.rodic) : null; }
  return chain;
}

/* fotka: vlastná (m.foto) → PLACE_PHOTOS → zdedená od rodiča → predvolená */
function fotoPre(m) {
  if (!m) return DEFAULT_PHOTO;
  if (m.foto) return m.foto;
  if (typeof PLACE_PHOTOS !== "undefined" && PLACE_PHOTOS[m.id]) return PLACE_PHOTOS[m.id];
  if (m.rodic) return fotoPre(miestoById(m.rodic));
  return DEFAULT_PHOTO;
}

/* vykreslí breadcrumby do #crumbs; items = [{label, href|null}] */
function renderBreadcrumb(items) {
  const host = Q("#crumbs");
  if (!host) return;
  const parts = [`<a href="index.html">Domov</a>`];
  items.forEach(it => {
    parts.push(`<span class="sep">›</span>`);
    parts.push(it.href
      ? `<a href="${it.href}">${it.label}</a>`
      : `<span class="here">${it.label}</span>`);
  });
  host.innerHTML = parts.join("");
}

/* odstráni diakritiku a zjednotí veľkosť písmen – pre vyhľadávanie */
const DIACRITICS_RE = new RegExp("[̀-ͯ]", "g");
const normalize = (s) => (s || "")
  .toString()
  .normalize("NFD")
  .replace(DIACRITICS_RE, "")
  .toLowerCase()
  .trim();

/* ---------------------------------------------------- hlavička ---- */
function initNav() {
  const t = Q(".nav-toggle");
  if (t) t.addEventListener("click", () => Q(".nav").classList.toggle("open"));
}

/* ------------------------------------------------- mapa (index) --- */
function renderMap() {
  const host = Q("#mapDots");
  if (!host) return;
  DB.miesta.forEach(m => {
    const kat = katById(m.primarna);
    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttribute("class", "map-dot");
    g.setAttribute("tabindex", "0");
    g.setAttribute("role", "link");
    g.setAttribute("aria-label", m.nazov);
    g.dataset.id = m.id;
    g.innerHTML = `
      <circle cx="${m.mapX}" cy="${m.mapY}" fill="${kat ? kat.farba : "#1F5B41"}"></circle>
      <text x="${m.mapX + 14}" y="${m.mapY + 5}">${m.nazov}</text>`;
    const go = () => location.href = `kategoria.html?id=${m.id}`;
    g.addEventListener("click", go);
    g.addEventListener("keydown", e => { if (e.key === "Enter") go(); });
    host.appendChild(g);
  });

  const legend = Q("#mapLegend");
  if (legend) {
    DB.kategorie.forEach(k => {
      const s = document.createElement("span");
      s.innerHTML = `<i style="background:${k.farba}"></i>${k.nazov}`;
      legend.appendChild(s);
    });
  }
}

/* ------------------------------------------- filtre + karty ------- */
/* Filter kariet (#filters) a filter mapy (#mapFilters) sú nezávislé –
   ovplyvňujú len svoju vlastnú sekciu. */
let aktivnyFilterKarty = "vsetko";

function renderFilters() {
  const host = Q("#filters");
  if (!host) return;
  const chips = [{ id: "vsetko", nazov: "Všetko", farba: null }, ...DB.kategorie];
  chips.forEach(k => {
    const b = document.createElement("button");
    b.className = "chip" + (k.id === aktivnyFilterKarty ? " active" : "");
    b.dataset.katId = k.id;

    if (k.id === "vsetko") {
      b.textContent = "Všetko";
    } else {
      const icon = (typeof KAT_ICONS !== "undefined" && KAT_ICONS[k.id]) || "";
      // Farebny kruzok s bielou ikonkou (=rovnaka farba ako bodka na mape)
      b.innerHTML = `
        <span class="chip-icon-circle" style="background:${k.farba}">
          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8"
               stroke-linecap="round" stroke-linejoin="round" width="14" height="14">${icon}</svg>
        </span>${k.nazov}`;
    }
    b.addEventListener("click", () => {
      aktivnyFilterKarty = k.id;
      QA("#filters .chip").forEach(c => c.classList.remove("active"));
      b.classList.add("active");
      renderCards();
    });
    host.appendChild(b);
  });
}

function cardHTML(m) {
  const katObj = katById(m.primarna) || {};
  const farba  = katObj.farba || "#4E7FAE";
  const icon   = (typeof KAT_ICONS !== "undefined" && KAT_ICONS[m.primarna]) || KAT_ICONS["mesta"] || "";
  const photo  = fotoPre(m);
  const pocet  = pocetZastaveni(m.id);

  // Farebne taby – farba z kategorie
  const tags = m.kategorie.map(id => {
    const k = katById(id);
    if (!k) return "";
    return `<span class="card-tag" style="background:${k.farba}18;color:${k.farba};border-color:${k.farba}33">${k.nazov}</span>`;
  }).join("");

  // Farba ikonky = farba primárnej kategórie
  // Pozadie: 15% opacity farby, ikona plnou farbou
  return `<a class="place-card" href="kategoria.html?id=${m.id}">
    <div class="card-photo">
      <img src="${photo}" alt="${m.nazov}" loading="lazy">
      <span class="card-cat-icon" style="background:${farba};border:none">
        <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8"
             stroke-linecap="round" stroke-linejoin="round">${icon}</svg>
      </span>
    </div>
    <div class="card-body">
      <h3>${m.nazov}</h3>
      <span class="card-stops">${pocet} ${slovoZastavenia(pocet)}</span>
      <div class="card-footer">
        <div class="card-tags">${tags}</div>
        <span class="card-arrow">→</span>
      </div>
    </div>
  </a>`;
}

let aktivnyFilterMapa = "vsetko";
let hladanyTextMapa = "";
let hladanyTextKarty = "";

/* každé slovo z hľadaného textu musí byť niekde v názve miesta */
function zhodujeSaSHladanim(nazov, hladanyText) {
  if (!hladanyText) return true;
  const nazovNorm = normalize(nazov);
  const slova = hladanyText.split(/\s+/).filter(Boolean);
  return slova.every(slovo => nazovNorm.includes(slovo));
}

function vyhovujeKartam(m) {
  const vKategorii = aktivnyFilterKarty === "vsetko" || m.kategorie.includes(aktivnyFilterKarty);
  return vKategorii && zhodujeSaSHladanim(m.nazov, hladanyTextKarty);
}

function vyhovujeMape(m) {
  const vKategorii = aktivnyFilterMapa === "vsetko" || m.kategorie.includes(aktivnyFilterMapa);
  return vKategorii && zhodujeSaSHladanim(m.nazov, hladanyTextMapa);
}

/* Leaflet piny – skryj/zobraz podľa filtra a vyhľadávania nad mapou */
function updateMapMarkers() {
  if (!window._mapMarkers || !window._leafletMap) return;
  DB.miesta.forEach(m => {
    const marker = window._mapMarkers[m.id];
    if (!marker) return;
    if (vyhovujeMape(m)) {
      if (!window._leafletMap.hasLayer(marker)) marker.addTo(window._leafletMap);
    } else {
      window._leafletMap.removeLayer(marker);
    }
  });
}


/* ---------------------------------------- filtre na mape (bodky) --- */
function renderMapFilters() {
  const host = Q("#mapFilters");
  if (!host) return;
  const chips = [{ id: "vsetko", nazov: "Všetko", farba: null }, ...DB.kategorie];
  chips.forEach(k => {
    const b = document.createElement("button");
    b.className = "chip" + (k.id === aktivnyFilterMapa ? " active" : "");
    if (k.id === "vsetko") {
      b.textContent = "Všetko";
    } else {
      b.innerHTML = `<i style="width:9px;height:9px;border-radius:50%;background:${k.farba};display:inline-block;margin-right:2px;flex-shrink:0"></i>${k.nazov}`;
    }
    b.addEventListener("click", () => {
      aktivnyFilterMapa = k.id;
      QA("#mapFilters .chip").forEach(c => c.classList.remove("active"));
      b.classList.add("active");
      updateMapMarkers();
    });
    b.dataset.katId = k.id;
    host.appendChild(b);
  });
}

let showAll = false;
const CARDS_PER_PAGE = 12;

function renderCards() {
  const host = Q("#cards");
  const moreBtn = Q("#moreBtn");
  if (!host) return;
  const list = DB.miesta.filter(m => m.mapX !== undefined && vyhovujeKartam(m));
  const visible = showAll ? list : list.slice(0, CARDS_PER_PAGE);
  const emptyMsg = hladanyTextKarty ? "Nenašli sa žiadne miesta." : "Žiadne miesta pre túto kategóriu.";
  host.innerHTML = visible.map(cardHTML).join("") ||
    `<p style="grid-column:1/-1;color:var(--ink-soft)">${emptyMsg}</p>`;
  const cnt = Q("#cardCount");
  if (cnt) cnt.textContent = `${list.length} miest`;
  if (moreBtn) {
    moreBtn.style.display = list.length > CARDS_PER_PAGE && !showAll ? "flex" : "none";
  }
}

function initSearch() {
  const inp = Q("#searchInput");
  if (!inp) return;
  inp.addEventListener("input", () => {
    hladanyTextMapa = normalize(inp.value);
    updateMapMarkers();
  });
}

function initPlacesSearch() {
  const inp = Q("#placesSearchInput");
  if (!inp) return;
  inp.addEventListener("input", () => {
    hladanyTextKarty = normalize(inp.value);
    renderCards();
  });
}

function renderStats() {
  const sm = Q("#statMiesta"), sz = Q("#statZastavenia");
  if (sm) sm.textContent = DB.miesta.length;
  if (sz) sz.textContent = DB.zastavenia.length;
}

/* ---------------------------------------- karta podkategórie ------ */
function subcatCardHTML(m) {
  const pocet = pocetZastaveni(m.id);
  return `<a class="place-card" href="kategoria.html?id=${m.id}">
    <div class="card-photo">
      <img src="${fotoPre(m)}" alt="${m.nazov}" loading="lazy">
    </div>
    <div class="card-body">
      <h3>${m.nazov}</h3>
      <span class="card-stops">${pocet} ${slovoZastavenia(pocet)}</span>
      <div class="card-footer">
        <span class="card-arrow">→</span>
      </div>
    </div>
  </a>`;
}

/* ------------------------------------------ karta zastavenia ------ */
function stopCardHTML(z) {
  return `<a class="stop-card" href="zastavenie.html?id=${z.id}">
    <div class="stop-photo">
      <img src="${z.cover || DEFAULT_PHOTO}" alt="${z.nazov}" loading="lazy">
      <span class="stop-no">${z.poradie}</span>
    </div>
    <div class="stop-body">
      <h3>${z.nazov}</h3>
      <p>${z.popis || ""}</p>
      <div class="stop-footer">
        <span class="stop-qr" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
            <rect x="3" y="14" width="7" height="7"/>
            <path d="M14 14h3v3h-3zM20 14v3M14 20h3M20 20v.01"/>
          </svg>
        </span>
        <span class="stop-arrow">→</span>
      </div>
    </div>
  </a>`;
}

/* ------------------------------------ stránka kategórie (miesta) -- */
function renderKategoria() {
  const titleEl = Q("#catTitle");
  if (!titleEl) return;
  const m = miestoById(param("id"));
  if (!m) { titleEl.textContent = "Miesto sa nenašlo"; return; }

  document.title = `${m.nazov} – QR LINK`;
  titleEl.textContent = m.nazov;
  const descEl = Q("#catDesc");
  if (descEl) descEl.textContent = m.popis || "";

  const chain = retazPredkov(m);
  renderBreadcrumb(chain.map((node, i) => ({
    label: node.nazov,
    href: i < chain.length - 1 ? `kategoria.html?id=${node.id}` : null
  })));

  const photoHost = Q("#catPhoto");
  if (photoHost) photoHost.innerHTML = `<img src="${fotoPre(m)}" alt="${m.nazov}">`;

  const koren = rootProjekt(m);
  const podkategorie = detiOf(m.id);
  const zastaveniaTu = zastaveniaPriamoOf(m.id).filter(maObsah).sort((a, b) => a.poradie - b.poradie);

  const infoHost = Q("#catInfo");
  if (infoHost) {
    if (jeKoren(m)) {
      const primKat = katById(m.primarna);
      const dalsie = m.kategorie.filter(id => id !== m.primarna).map(katById).filter(Boolean);
      infoHost.innerHTML = `
        ${primKat ? `<span class="cat-info-pill"><i class="dot" style="background:${primKat.farba}"></i>Primárna kategória: <strong>${primKat.nazov}</strong></span>` : ""}
        ${dalsie.length ? `<span class="cat-info-pill">Ďalšie kategórie: ${dalsie.map(k => `<i class="dot" style="background:${k.farba}"></i>${k.nazov}`).join(", ")}</span>` : ""}`;
    } else if (!podkategorie.length) {
      const pocet = pocetZastaveni(m.id);
      const maAudio = zastaveniaTu.some(z => z.audio && z.audio.length);
      const maGaleriu = zastaveniaTu.some(z => z.galeria && z.galeria.length);
      infoHost.innerHTML = `
        <span class="cat-info-pill">${pocet} ${slovoZastavenia(pocet)}</span>
        ${maAudio ? `<span class="cat-info-pill">Audio sprievodca</span>` : ""}
        ${maGaleriu ? `<span class="cat-info-pill">Galéria</span>` : ""}`;
    } else {
      infoHost.innerHTML = "";
    }
  }

  const mapBtnHost = Q("#catMapBtn");
  if (mapBtnHost) {
    mapBtnHost.innerHTML = (koren.lat && koren.lon)
      ? `<a class="btn cat-map-btn" href="index.html#mapa">Zobraziť na mape →</a>` : "";
  }

  const gridHost = Q("#catGrid");
  const gridTitle = Q("#catGridTitle");
  if (!gridHost) return;

  if (podkategorie.length) {
    if (gridTitle) gridTitle.textContent = "Vyberte si miesto";
    gridHost.className = "subcat-grid";
    gridHost.innerHTML = podkategorie.map(subcatCardHTML).join("");
  } else {
    if (gridTitle) gridTitle.textContent = m.nadpisZastaveni || "Zastavenia";
    gridHost.className = "stops-grid";
    gridHost.innerHTML = zastaveniaTu.length
      ? zastaveniaTu.map(stopCardHTML).join("")
      : `<p style="grid-column:1/-1;color:var(--ink-soft)">Zastavenia pre toto miesto budú doplnené.</p>`;
  }
}

/* -------------------------------------- detail zastavenia --------- */
function renderZastavenie() {
  const root = Q("#detailRoot");
  if (!root) return;
  const z = DB.zastavenia.find(x => x.id === param("id"));
  if (!z) { root.innerHTML = "<p>Zastavenie sa nenašlo.</p>"; return; }

  const m = miestoById(z.miesto);
  document.title = `${z.nazov} – QR LINK`;

  const chain = m ? retazPredkov(m) : [];
  renderBreadcrumb([
    ...chain.map(node => ({ label: node.nazov, href: `kategoria.html?id=${node.id}` })),
    { label: z.nazov, href: null }
  ]);

  Q("#dTitle").textContent = z.nazov;
  Q("#dSub").textContent = m ? `Zastavenie ${z.poradie} · ${m.nazov}` : "";

  if (z.cover) {
    Q("#dCover").innerHTML = `<img src="${z.cover}" alt="${z.nazov}">`;
  } else { Q("#dCover").remove(); }

  if (z.audio && z.audio.length) renderPlayer(z.audio[0]);
  else Q("#playerHost").remove();

  Q("#dText").innerHTML = z.text || "";

  if (z.galeria && z.galeria.length) renderGallery(z.galeria);
  else Q("#galleryHost").remove();

  if (z.mapEmbed) {
    Q("#gpsLabel").textContent = z.gps
      ? `GPS ${z.gps.lat.toFixed(6)}, ${z.gps.lng.toFixed(6)}`
      : "Kde QR kód nájdete";
    Q("#gpsFrame").src = z.mapEmbed;
  } else Q("#gpsHost").remove();

  renderCounter(z.id);
  Q("#allStops").href = m ? `kategoria.html?id=${m.id}` : "index.html";
}

/* audio prehrávač so skokmi ±10 s */
function renderPlayer(src) {
  const host = Q("#playerHost");
  host.innerHTML = `
    <div class="player">
      <button class="skip" data-skip="-10" aria-label="Späť 10 sekúnd">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 18l-7-6 7-6M20 18l-7-6 7-6"/></svg>
      </button>
      <button id="playBtn" aria-label="Prehrať audio">
        <svg id="iconPlay" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
        <svg id="iconPause" viewBox="0 0 24 24" fill="currentColor" style="display:none"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>
      </button>
      <button class="skip" data-skip="10" aria-label="Vpred 10 sekúnd">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 6l7 6-7 6M4 6l7 6-7 6"/></svg>
      </button>
      <div class="bar" id="pBar"><i id="pFill"></i></div>
      <span class="time" id="pTime">0:00</span>
      <audio id="pAudio" src="${src}" preload="metadata"></audio>
    </div>`;

  const a = Q("#pAudio"), fill = Q("#pFill"), time = Q("#pTime");
  const fmt = s => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

  Q("#playBtn").addEventListener("click", () => a.paused ? a.play() : a.pause());
  a.addEventListener("play", () => { Q("#iconPlay").style.display = "none"; Q("#iconPause").style.display = "block"; });
  a.addEventListener("pause", () => { Q("#iconPlay").style.display = "block"; Q("#iconPause").style.display = "none"; });
  a.addEventListener("timeupdate", () => {
    if (a.duration) fill.style.width = (a.currentTime / a.duration * 100) + "%";
    time.textContent = fmt(a.currentTime);
  });
  Q("#pBar").addEventListener("click", e => {
    const r = e.currentTarget.getBoundingClientRect();
    if (a.duration) a.currentTime = (e.clientX - r.left) / r.width * a.duration;
  });
  QA(".player .skip").forEach(b => b.addEventListener("click", () =>
    a.currentTime = Math.max(0, a.currentTime + Number(b.dataset.skip))));
}

/* fotogaléria so šípkami + lightbox */
function renderGallery(imgs) {
  const host = Q("#galleryHost");
  host.innerHTML = `
    <div class="gallery">
      <button class="g-arrow" data-dir="-1" aria-label="Predchádzajúce fotky">‹</button>
      <div class="g-strip" id="gStrip">
        ${imgs.map((s, i) => `<img src="${s}" alt="Fotografia ${i + 1}" loading="lazy" data-i="${i}">`).join("")}
      </div>
      <button class="g-arrow" data-dir="1" aria-label="Ďalšie fotky">›</button>
    </div>
    <div class="lightbox" id="lb" role="dialog" aria-label="Zväčšená fotografia">
      <button id="lbClose" aria-label="Zavrieť">×</button>
      <img id="lbImg" src="" alt="">
    </div>`;

  QA(".g-arrow", host).forEach(b => b.addEventListener("click", () =>
    Q("#gStrip").scrollBy({ left: 300 * Number(b.dataset.dir) })));

  QA("#gStrip img").forEach(img => img.addEventListener("click", () => {
    Q("#lbImg").src = img.src;
    Q("#lb").classList.add("open");
  }));
  Q("#lbClose").addEventListener("click", () => Q("#lb").classList.remove("open"));
  Q("#lb").addEventListener("click", e => { if (e.target.id === "lb") Q("#lb").classList.remove("open"); });
}

/* počítadlo návštev – zatiaľ lokálne; miesto pre napojenie na API */
function renderCounter(id) {
  const key = "qrlink-visits-" + id;
  const n = Number(localStorage.getItem(key) || 0) + 1;
  localStorage.setItem(key, n);
  const el = Q("#visitCount");
  if (el) el.textContent = n === 1 ? "1 návšteva" : `${n} návštev`;
  /* Neskôr: nahradiť volaním serverového počítadla, viď README. */
}

/* -------------------------------------------------- kontakt ------- */
function renderKontakt() {
  const host = Q("#contactData");
  if (!host) return;
  const c = DB.kontakt;
  host.innerHTML = `
    <p><strong>${c.firma}</strong></p>
    ${c.adresa.map(r => `<p>${r}</p>`).join("")}
    <p class="mono">tel.: <a href="tel:${c.tel.replace(/\s/g, "")}">${c.tel}</a></p>
    <p class="mono">e-mail: <a href="mailto:${c.email}">${c.email}</a></p>
    <p class="mono">web: <a href="${c.web}" target="_blank" rel="noopener">${c.web.replace("https://", "")}</a></p>`;
  const f = Q("#contactFacts");
  if (f) f.innerHTML = `
    <p class="mono">IČO: ${c.ico}</p>
    <p class="mono">DIČ: ${c.dic}</p>
    <p class="mono">IČ-DPH: ${c.icdph}</p>`;
}

/* ------------------------------------------------------- štart ---- */
document.addEventListener("DOMContentLoaded", () => {
  initNav();
  renderMap();
  renderMapFilters();
  initSearch();
  initPlacesSearch();
  renderStats();
  renderFilters();
  renderCards();
  renderKategoria();
  renderZastavenie();
  renderKontakt();
});

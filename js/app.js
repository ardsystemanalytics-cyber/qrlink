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

/* primárna/ďalšie kategórie koreňového projektu – zdieľané aj podkategóriami/zastaveniami pod ním */
function kategorieInfoHTML(koren) {
  const primKat = katById(koren.primarna);
  const dalsie = koren.kategorie.filter(id => id !== koren.primarna).map(katById).filter(Boolean);
  return `
    ${primKat ? `<span class="cat-info-plain"><i class="dot" style="background:${primKat.farba}"></i>${t("primary_category")}<strong>${tc(primKat, "nazov")}</strong></span>` : ""}
    ${dalsie.length ? `<span class="cat-info-plain">${t("other_categories")}${dalsie.map(k => `<i class="dot" style="background:${k.farba}"></i>${tc(k, "nazov")}`).join(", ")}</span>` : ""}`;
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
  const parts = [`<a href="index.html">${t("crumbs_home")}</a>`];
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
      s.innerHTML = `<i style="background:${k.farba}"></i>${tc(k, "nazov")}`;
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
      b.textContent = t("filter_all");
    } else {
      const icon = (typeof KAT_ICONS !== "undefined" && KAT_ICONS[k.id]) || "";
      // Farebny kruzok s bielou ikonkou (=rovnaka farba ako bodka na mape)
      b.innerHTML = `
        <span class="chip-icon-circle" style="background:${k.farba}">
          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8"
               stroke-linecap="round" stroke-linejoin="round" width="14" height="14">${icon}</svg>
        </span>${tc(k, "nazov")}`;
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
    return `<span class="card-tag" style="background:${k.farba}18;color:${k.farba};border-color:${k.farba}33">${tc(k, "nazov")}</span>`;
  }).join("");

  // Farba ikonky = farba primárnej kategórie
  // Pozadie: 15% opacity farby, ikona plnou farbou
  return `<a class="place-card" href="kategoria.html?id=${m.id}">
    <div class="card-photo">
      <img src="${photo}" alt="${tc(m, "nazov")}" loading="lazy">
      <span class="card-cat-icon" style="background:${farba};border:none">
        <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8"
             stroke-linecap="round" stroke-linejoin="round">${icon}</svg>
      </span>
    </div>
    <div class="card-body">
      <h3>${tc(m, "nazov")}</h3>
      <span class="card-stops">${pocet} ${tStops(pocet)}</span>
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
  return vKategorii && zhodujeSaSHladanim(tc(m, "nazov"), hladanyTextKarty);
}

function vyhovujeMape(m) {
  const vKategorii = aktivnyFilterMapa === "vsetko" || m.kategorie.includes(aktivnyFilterMapa);
  return vKategorii && zhodujeSaSHladanim(tc(m, "nazov"), hladanyTextMapa);
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
      b.textContent = t("filter_all");
    } else {
      b.innerHTML = `<i style="width:9px;height:9px;border-radius:50%;background:${k.farba};display:inline-block;margin-right:2px;flex-shrink:0"></i>${tc(k, "nazov")}`;
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
  const emptyMsg = hladanyTextKarty ? t("empty_no_results") : t("empty_no_category");
  host.innerHTML = visible.map(cardHTML).join("") ||
    `<p style="grid-column:1/-1;color:var(--ink-soft)">${emptyMsg}</p>`;
  const cnt = Q("#cardCount");
  if (cnt) cnt.textContent = `${list.length} ${t("stat_places_label")}`;
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
      <img src="${fotoPre(m)}" alt="${tc(m, "nazov")}" loading="lazy">
    </div>
    <div class="card-body">
      <h3>${tc(m, "nazov")}</h3>
      <div class="card-footer">
        <span class="card-stops">${pocet} ${tStops(pocet)}</span>
        <span class="card-arrow">→</span>
      </div>
    </div>
  </a>`;
}

/* počet listových lokalít v podstrome (uzly, ktoré už nemajú ďalšie podkategórie) */
function pocetLokalit(id) {
  const deti = detiOf(id);
  if (!deti.length) return 1;
  return deti.reduce((sum, d) => sum + pocetLokalit(d.id), 0);
}

/* ikonky pre pilulky s informáciami (počet zastavení, audio, galéria) */
const CAT_INFO_ICONS = {
  pin: `<path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>`,
  audio: `<path d="M4 13a8 8 0 0 1 16 0M4 13v4a2 2 0 0 0 2 2h1v-6H6M20 13v4a2 2 0 0 1-2 2h-1v-6h1"/>`,
  galeria: `<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/>`,
  signpost: `<path d="M12 3v18M7 6h10l-2 3 2 3H7"/>`,
  srdce: `<path d="M12 21s-8-5.5-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.5-8 11-8 11z"/>`,
  stit: `<path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3"/>`,
  kniha: `<path d="M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12"/><path d="M19 16h-12a2 2 0 0 0 -2 2"/><path d="M9 8h6"/>`,
  foto: `<path d="M15 8h.01"/><path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12"/><path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5"/><path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3"/>`
};
const CAT_INFO_ICON_SVG = (path) =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;

/* ikonky pre stránku Kontakt */
const CONTACT_ICONS = {
  building: `<path d="M3 21l18 0"/><path d="M9 8l1 0"/><path d="M9 12l1 0"/><path d="M9 16l1 0"/><path d="M14 8l1 0"/><path d="M14 12l1 0"/><path d="M14 16l1 0"/><path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16"/>`,
  message: `<path d="M8 9h8"/><path d="M8 13h6"/><path d="M9 18h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-3l-3 3l-3 -3"/>`,
  phone: `<path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"/>`,
  mail: `<path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10"/><path d="M3 7l9 6l9 -6"/>`,
  world: `<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M3.6 9h16.8"/><path d="M3.6 15h16.8"/><path d="M11.5 3a17 17 0 0 0 0 18"/><path d="M12.5 3a17 17 0 0 1 0 18"/>`,
  send: `<path d="M10 14l11 -11"/><path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"/>`,
  armchair: `<path d="M5 11a2 2 0 0 1 2 2v2h10v-2a2 2 0 1 1 4 0v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2"/><path d="M5 11v-5a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v5"/><path d="M6 19v2"/><path d="M18 19v2"/>`
};
const CONTACT_ICON_SVG = (path) =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;
const SOCIAL_ICONS = {
  facebook: `<svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15"><path d="M8 11v5"/><path d="M8 8v.01"/><path d="M12 16v-5"/><path d="M16 16v-3a2 2 0 1 0 -4 0"/><path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4l0 -10"/></svg>`
};

/* ------------------------------------------ karta zastavenia ------ */
const STOP_QR_ICON = `<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
    <rect x="3" y="14" width="7" height="7"/><path d="M14 14h3v3h-3zM20 14v3M14 20h3M20 20v.01"/>`;

function stopCardHTML(z) {
  return `<a class="stop-card" href="zastavenie.html?id=${z.id}">
    <div class="stop-photo">
      <img src="${z.cover || DEFAULT_PHOTO}" alt="${tc(z, "nazov")}" loading="lazy">
      <span class="stop-no">${z.poradie}</span>
    </div>
    <div class="stop-body">
      <h3>${tc(z, "nazov")}</h3>
      <p>${tc(z, "popis") || ""}</p>
      <div class="stop-footer">
        <span class="stop-qr">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">${STOP_QR_ICON}</svg>
          ${t("scan_qr")}
        </span>
        <span class="stop-arrow">→</span>
      </div>
    </div>
  </a>`;
}

/* riadok zastavenia – zoznamové zobrazenie (prepínač Karty/Zoznam) */
function stopRowHTML(z) {
  return `<a class="stop-row" href="zastavenie.html?id=${z.id}">
    <span class="stop-row-no">${z.poradie}</span>
    <div class="stop-row-body">
      <h3>${tc(z, "nazov")}</h3>
      ${z.popis ? `<p>${tc(z, "popis")}</p>` : ""}
    </div>
    <span class="stop-qr">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">${STOP_QR_ICON}</svg>
      ${t("scan_qr")}
    </span>
    <span class="stop-arrow">→</span>
  </a>`;
}

/* šípky kolotoča pre "Ďalšie zastavenia na trase" – zobrazia sa len ak karty pretekajú */
function setupStopCarousel(scopeEl) {
  const track = Q(".stop-carousel-track", scopeEl);
  const prevBtn = Q(".stop-carousel-arrow.prev", scopeEl);
  const nextBtn = Q(".stop-carousel-arrow.next", scopeEl);
  if (!track || !prevBtn || !nextBtn) return;
  const update = () => {
    const overflow = track.scrollWidth > track.clientWidth + 4;
    prevBtn.hidden = !overflow || track.scrollLeft <= 4;
    nextBtn.hidden = !overflow || track.scrollLeft >= track.scrollWidth - track.clientWidth - 4;
  };
  const step = dir => {
    const card = Q(".stop-card", track);
    const width = card ? card.getBoundingClientRect().width + 16 : track.clientWidth;
    track.scrollBy({ left: dir * width, behavior: "smooth" });
  };
  prevBtn.addEventListener("click", () => step(-1));
  nextBtn.addEventListener("click", () => step(1));
  track.addEventListener("scroll", update);
  window.addEventListener("resize", update);
  QA("img", track).forEach(img => img.addEventListener("load", update));
  if (window.ResizeObserver) new ResizeObserver(update).observe(track);
  update();
}

/* ------------------------------------ stránka kategórie (miesta) -- */
function renderKategoria() {
  const titleEl = Q("#catTitle");
  if (!titleEl) return;
  const m = miestoById(param("id"));
  if (!m) { titleEl.textContent = t("not_found_place"); return; }

  document.title = `${tc(m, "nazov")} – QR LINK`;
  titleEl.textContent = tc(m, "nazov");
  const descEl = Q("#catDesc");
  if (descEl) descEl.textContent = tc(m, "popis") || "";

  const chain = retazPredkov(m);
  renderBreadcrumb(chain.map((node, i) => ({
    label: tc(node, "nazov"),
    href: i < chain.length - 1 ? `kategoria.html?id=${node.id}` : null
  })));

  const photoHost = Q("#catPhoto");
  if (photoHost) {
    photoHost.innerHTML = `<img src="${fotoPre(m)}" alt="${tc(m, "nazov")}">`;
    if (m.heroOverlay) {
      const overlayIcon = CAT_FEATURE_ICONS[m.heroOverlay.icon] || CAT_FEATURE_ICONS.stromy;
      photoHost.innerHTML += `
        <div class="cat-hero-overlay">
          <span class="cat-hero-overlay-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${overlayIcon}</svg>
          </span>
          <div>
            <strong>${tc(m.heroOverlay, "text")}</strong>
            <p>${tc(m.heroOverlay, "popis")}</p>
          </div>
        </div>`;
    }
  }

  const koren = rootProjekt(m);
  const podkategorie = detiOf(m.id);
  const zastaveniaTu = zastaveniaPriamoOf(m.id).filter(maObsah).sort((a, b) => a.poradie - b.poradie);

  const infoHost = Q("#catInfo");
  if (infoHost) {
    if (jeKoren(m) || !podkategorie.length) {
      infoHost.innerHTML = kategorieInfoHTML(jeKoren(m) ? m : koren);
    } else {
      infoHost.innerHTML = "";
    }
  }

  const mapBtnHost = Q("#catMapBtn");
  if (mapBtnHost) {
    if (podkategorie.length) {
      /* Kategória bez zastavení – vetviaci dizajn, rovnaký na každej úrovni */
      const lokalit = pocetLokalit(m.id);
      const celkovyPocet = pocetZastaveni(m.id);
      mapBtnHost.innerHTML = `
        <div class="cat-stats-row">
          <div class="cat-stat-card">
            ${CAT_INFO_ICON_SVG(CAT_INFO_ICONS.pin)}
            <span><strong>${lokalit}</strong>${t("locations_suffix")}</span>
          </div>
          <div class="cat-stat-card">
            ${CAT_INFO_ICON_SVG(CAT_INFO_ICONS.signpost)}
            <span><strong>${t("total_label")} ${celkovyPocet}</strong>${tStops(celkovyPocet)}</span>
          </div>
          <div class="cat-stat-card">
            ${CAT_INFO_ICON_SVG(CAT_INFO_ICONS.srdce)}
            <span><strong>${t("inspiration_title")}</strong>${t("inspiration_text")}</span>
          </div>
        </div>`;
    } else {
      /* Kategória so zastaveniami – listový dizajn, rovnaké 3 karty ako pri vetvení */
      const celkovyPocet = pocetZastaveni(m.id);
      mapBtnHost.innerHTML = `
        <div class="cat-stats-row">
          <div class="cat-stat-card">
            ${CAT_INFO_ICON_SVG(CAT_INFO_ICONS.audio)}
            <span><strong style="text-transform:none">${t("audio_title")}</strong>${t("audio_suffix")}</span>
          </div>
          <div class="cat-stat-card">
            ${CAT_INFO_ICON_SVG(CAT_INFO_ICONS.signpost)}
            <span><strong>${t("total_label")} ${celkovyPocet}</strong>${tStops(celkovyPocet)}</span>
          </div>
          <div class="cat-stat-card">
            ${CAT_INFO_ICON_SVG(CAT_INFO_ICONS.srdce)}
            <span><strong>${t("inspiration_title")}</strong>${t("inspiration_text")}</span>
          </div>
        </div>`;
    }
  }

  const gridHost = Q("#catGrid");
  const gridTitle = Q("#catGridTitle");
  const toggleHost = Q("#catViewToggle");
  if (!gridHost) return;

  if (podkategorie.length) {
    if (gridTitle) gridTitle.textContent = t("discover_places");
    if (toggleHost) toggleHost.innerHTML = "";
    gridHost.className = "subcat-grid";
    gridHost.innerHTML = podkategorie.map(subcatCardHTML).join("");
  } else {
    if (gridTitle) gridTitle.textContent = m.nadpisZastaveni || t("stops_default_title");
    const emptyMsg = `<p style="grid-column:1/-1;color:var(--ink-soft)">${t("stops_coming_soon")}</p>`;
    if (toggleHost) {
      toggleHost.innerHTML = zastaveniaTu.length ? catViewToggleHTML() : "";
      QA(".view-toggle-btn", toggleHost).forEach(b => b.addEventListener("click", () => {
        catView = b.dataset.view;
        renderKategoria();
      }));
    }
    if (catView === "zoznam") {
      gridHost.className = "stops-list";
      gridHost.innerHTML = zastaveniaTu.length ? zastaveniaTu.map(stopRowHTML).join("") : emptyMsg;
    } else {
      gridHost.className = "stops-grid";
      gridHost.innerHTML = zastaveniaTu.length ? zastaveniaTu.map(stopCardHTML).join("") : emptyMsg;
    }
  }

  const featuresHost = Q("#catFeatures");
  if (featuresHost) {
    featuresHost.style.display = podkategorie.length ? "" : "none";
    featuresHost.innerHTML = podkategorie.length ? catFeaturesHTML() : "";
  }

  const siblingHost = Q("#catSiblingNav");
  if (siblingHost) {
    if (jeKoren(m) || podkategorie.length) {
      siblingHost.innerHTML = "";
    } else {
      const rodic = miestoById(m.rodic);
      const surodenci = detiOf(m.rodic);
      const idx = surodenci.findIndex(s => s.id === m.id);
      const dalsi = surodenci[idx + 1];
      siblingHost.innerHTML = `<div class="cat-sibling-nav">
        ${rodic
          ? `<a class="cat-sibling-link" href="kategoria.html?id=${rodic.id}"><span>←</span> ${t("back_to", { name: tc(rodic, "nazov") })}</a>`
          : `<span></span>`}
        ${dalsi
          ? `<a class="cat-sibling-link cat-sibling-next" href="kategoria.html?id=${dalsi.id}">${t("next_place_prefix")}<strong>${tc(dalsi, "nazov")}</strong> <span>→</span></a>`
          : `<span></span>`}
      </div>`;
    }
  }
}

/* prepínač zobrazenia zastavení: mriežka kariet / zoznam */
let catView = "karty";
function catViewToggleHTML() {
  return `
    <button class="view-toggle-btn${catView === "karty" ? " active" : ""}" data-view="karty">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
        <rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
      </svg>
      ${t("view_cards")}
    </button>
    <button class="view-toggle-btn${catView === "zoznam" ? " active" : ""}" data-view="zoznam">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/>
      </svg>
      ${t("view_list")}
    </button>`;
}

/* statický 4-stĺpcový pruh výhod – zobrazuje sa len na stránke projektu (koreňa) */
const CAT_FEATURE_ICONS = {
  hrad: `<path d="M15 19v-2a3 3 0 0 0 -6 0v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-14h4v3h3v-3h4v3h3v-3h4v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1"/><path d="M3 11l18 0"/>`,
  stromy: `<path d="M16 5l3 3l-2 1l4 4l-3 1l4 4h-9"/><path d="M15 21l0 -3"/><path d="M8 13l-2 -2"/><path d="M8 12l2 -2"/><path d="M8 21v-13"/><path d="M5.824 16a3 3 0 0 1 -2.743 -3.69a3 3 0 0 1 .304 -4.833a3 3 0 0 1 4.615 -3.707a3 3 0 0 1 4.614 3.707a3 3 0 0 1 .305 4.833a3 3 0 0 1 -2.919 3.695h-4l-.176 -.005"/>`,
  ludia: `<path d="M5 7a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/><path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/><path d="M21 21v-2a4 4 0 0 0 -3 -3.85"/>`,
  qr: `<path d="M4 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4"/><path d="M7 17l0 .01"/><path d="M14 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4"/><path d="M7 7l0 .01"/><path d="M4 15a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4"/><path d="M17 7l0 .01"/><path d="M14 14l3 0"/><path d="M20 14l0 .01"/><path d="M14 14l0 3"/><path d="M14 20l3 0"/><path d="M17 17l3 0"/><path d="M20 17l0 3"/>`
};

function catFeaturesHTML() {
  const items = [
    { icon: CAT_FEATURE_ICONS.hrad, nadpis: t("history_culture_title"), text: t("history_culture_text") },
    { icon: CAT_FEATURE_ICONS.stromy, nadpis: t("nature_title"), text: t("nature_text") },
    { icon: CAT_FEATURE_ICONS.ludia, nadpis: t("connects_title"), text: t("connects_text") },
    { icon: CAT_FEATURE_ICONS.qr, nadpis: t("qr_guide_title"), text: t("qr_guide_text") }
  ];
  return items.map(it => `
    <div class="cat-feature">
      <span class="cat-feature-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${it.icon}</svg>
      </span>
      <div>
        <strong>${it.nadpis}</strong>
        <p>${it.text}</p>
      </div>
    </div>`).join("");
}

/* -------------------------------------- detail zastavenia --------- */
function renderZastavenie() {
  const root = Q("#detailRoot");
  if (!root) return;
  const z = DB.zastavenia.find(x => x.id === param("id"));
  if (!z) { root.innerHTML = `<p>${t("detail_not_found")}</p>`; return; }

  const m = miestoById(z.miesto);
  document.title = `${tc(z, "nazov")} – QR LINK`;

  const chain = m ? retazPredkov(m) : [];
  const koren = m ? rootProjekt(m) : null;
  const hlavnaKat = koren ? katById(koren.primarna) : null;
  renderBreadcrumb([
    ...(hlavnaKat ? [{ label: tc(hlavnaKat, "nazov"), href: `index.html#miesta` }] : []),
    ...chain.map(node => ({ label: tc(node, "nazov"), href: `kategoria.html?id=${node.id}` })),
    { label: tc(z, "nazov"), href: null }
  ]);

  Q("#dTitle").textContent = tc(z, "nazov");

  const zastaveniaMiesta = m ? zastaveniaPriamoOf(m.id).filter(maObsah).sort((a, b) => a.poradie - b.poradie) : [];
  const poradieTu = zastaveniaMiesta.findIndex(x => x.id === z.id) + 1;
  Q("#dSub").innerHTML = `
    ${m ? `<span class="detail-meta-line">
      ${CAT_INFO_ICON_SVG(CAT_INFO_ICONS.pin)}${tc(m, "nazov")}
      ${z.gps ? `<span class="dot">•</span>${CAT_INFO_ICON_SVG(CAT_INFO_ICONS.pin)}${z.gps.lat.toFixed(6)}, ${z.gps.lng.toFixed(6)}` : ""}
    </span>` : ""}
    ${zastaveniaMiesta.length ? `<span class="detail-meta-count">${t("stop_of", { n: poradieTu, total: zastaveniaMiesta.length })}</span>` : ""}`;

  if (z.cover) {
    const pocetFoto = z.galeria && z.galeria.length ? z.galeria.length : 1;
    Q("#dCover").innerHTML = `
      <img src="${z.cover}" alt="${tc(z, "nazov")}">
      <span class="detail-cover-counter">1 / ${pocetFoto}</span>
      <button class="detail-share-btn" id="shareBtn">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
          <path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>
        </svg>
        ${t("share")}
      </button>`;
    Q("#shareBtn").addEventListener("click", async () => {
      const shareData = { title: tc(z, "nazov"), url: location.href };
      if (navigator.share) { try { await navigator.share(shareData); } catch (e) {} }
      else if (navigator.clipboard) { navigator.clipboard.writeText(location.href); }
    });
  } else { Q("#dCover").remove(); }

  if (z.audio && z.audio.length) renderPlayer(z.audio[0]);
  else Q("#playerHost").remove();

  const dText = Q("#dText");
  dText.innerHTML = tc(z, "text") || "";
  const headIcons = [CAT_FEATURE_ICONS.stromy, CAT_INFO_ICONS.stit];
  QA("h2", dText).forEach((h2, i) => {
    h2.innerHTML = `<span class="text-h2-icon">${CAT_INFO_ICON_SVG(headIcons[i % headIcons.length])}</span>${h2.innerHTML}`;
  });


  if (z.galeria && z.galeria.length) renderGallery(z.galeria);
  else Q("#galleryHost").remove();

  if (z.mapEmbed) {
    Q("#gpsFrame").src = z.mapEmbed;
    const mapLink = z.gps ? `https://www.google.com/maps?q=${z.gps.lat},${z.gps.lng}` : null;
    if (mapLink) {
      Q("#gpsHost").insertAdjacentHTML("afterbegin", `
        <a class="gps-open-btn" href="${mapLink}" target="_blank" rel="noopener">
          ${t("open_in_maps")}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
          </svg>
        </a>`);
    }
  } else {
    const gpsMapCol = Q("#gpsMapCol");
    if (gpsMapCol) gpsMapCol.remove();
  }

  /* Ďalšie zastavenia na trase – karty ostatných zastavení toho istého miesta, s kolotočom pri väčšom počte */
  const nextStopsHost = Q("#nextStopsHost");
  if (nextStopsHost) {
    const dalsie = zastaveniaMiesta.filter(x => x.id !== z.id);
    if (dalsie.length) {
      nextStopsHost.innerHTML = `
        <h2 class="detail-bottom-title">${t("next_stops_title")}</h2>
        <div class="stop-carousel">
          <button type="button" class="stop-carousel-arrow prev" aria-label="${t("prev_stops_aria")}" hidden>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 6l-6 6l6 6"/></svg>
          </button>
          <div class="stop-carousel-track">${dalsie.map(stopCardHTML).join("")}</div>
          <button type="button" class="stop-carousel-arrow next" aria-label="${t("next_stops_aria")}" hidden>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 6l6 6l-6 6"/></svg>
          </button>
        </div>`;
      setupStopCarousel(nextStopsHost);
    } else {
      nextStopsHost.remove();
    }
  }

  const detailBottom = Q("#detailBottom");
  if (detailBottom) {
    if (!detailBottom.children.length) detailBottom.remove();
    else if (detailBottom.children.length === 1) detailBottom.classList.add("detail-bottom-single");
  }

  const metaRow = Q("#metaRow");
  if (metaRow) {
    metaRow.innerHTML = `
      ${m ? `<a class="cat-sibling-link" href="kategoria.html?id=${m.id}"><span>←</span> ${t("back_to", { name: tc(m, "nazov") })}</a>` : `<span></span>`}
      <span class="counter">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M13 4a3 3 0 1 1-2 0M7 21v-5l2-3 1-4h4l1 4 2 3v5"/>
        </svg>
        <span id="visitCount">–</span>
      </span>
      <a class="btn" id="allStops" href="${m ? `kategoria.html?id=${m.id}` : "index.html"}">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M13 4a3 3 0 1 1-2 0M8 21l2-6 3-2 1-4M14 21l-1-5"/>
        </svg>
        ${t("all_stops")}
      </a>`;
    renderCounter(z.id);
  }
}

/* audio prehrávač so skokmi ±10 s */
function renderPlayer(src) {
  const host = Q("#playerHost");
  host.innerHTML = `
    <div class="player-row">
      <div class="player">
        <button class="skip" data-skip="-10" aria-label="${t("skip_back_aria")}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 18l-7-6 7-6M20 18l-7-6 7-6"/></svg>
        </button>
        <button id="playBtn" aria-label="${t("play_aria")}">
          <svg id="iconPlay" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          <svg id="iconPause" viewBox="0 0 24 24" fill="currentColor" style="display:none"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>
        </button>
        <button class="skip" data-skip="10" aria-label="${t("skip_fwd_aria")}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 6l7 6-7 6M4 6l7 6-7 6"/></svg>
        </button>
        <span class="time" id="pTime">0:00</span>
        <div class="bar" id="pBar"><i id="pFill"></i><span class="bar-handle"></span></div>
        <span class="time" id="pTotal">0:00</span>
        <button class="volume-btn" aria-label="${t("volume_aria")}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M11 5 6 9H3v6h3l5 4z"/><path d="M16 8a5 5 0 0 1 0 8"/>
          </svg>
        </button>
        <audio id="pAudio" src="${src}" preload="metadata"></audio>
      </div>
      <a class="player-download" href="${src}" download aria-label="${t("download_audio_aria")}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 3v12M7 10l5 5 5-5M5 21h14"/>
        </svg>
      </a>
    </div>`;

  const a = Q("#pAudio"), fill = Q("#pFill"), time = Q("#pTime"), total = Q("#pTotal");
  const fmt = s => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

  Q("#playBtn").addEventListener("click", () => a.paused ? a.play() : a.pause());
  a.addEventListener("play", () => { Q("#iconPlay").style.display = "none"; Q("#iconPause").style.display = "block"; });
  a.addEventListener("pause", () => { Q("#iconPlay").style.display = "block"; Q("#iconPause").style.display = "none"; });
  a.addEventListener("loadedmetadata", () => { if (a.duration) total.textContent = fmt(a.duration); });
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
    <h2 class="gallery-title">
      <span class="text-h2-icon">${CAT_INFO_ICON_SVG(CAT_INFO_ICONS.galeria)}</span>${t("gallery_title")}
    </h2>
    <div class="gallery">
      <button class="g-arrow" data-dir="-1" aria-label="${t("prev_photos_aria")}">‹</button>
      <div class="g-strip" id="gStrip">
        ${imgs.map((s, i) => `<img src="${s}" alt="${t("photo_alt", { n: i + 1 })}" loading="lazy" data-i="${i}">`).join("")}
      </div>
      <button class="g-arrow" data-dir="1" aria-label="${t("next_photos_aria")}">›</button>
    </div>
    <div class="lightbox" id="lb" role="dialog" aria-label="${t("lightbox_aria")}">
      <button id="lbClose" aria-label="${t("close_aria")}">×</button>
      <button class="lb-arrow lb-prev" aria-label="${t("prev_photo_aria")}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 6l-6 6l6 6"/></svg>
      </button>
      <img id="lbImg" src="" alt="">
      <button class="lb-arrow lb-next" aria-label="${t("next_photo_aria")}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 6l6 6l-6 6"/></svg>
      </button>
    </div>`;

  QA(".g-arrow", host).forEach(b => b.addEventListener("click", () =>
    Q("#gStrip").scrollBy({ left: 300 * Number(b.dataset.dir) })));

  let lbIndex = 0;
  const showLightbox = i => {
    lbIndex = (i + imgs.length) % imgs.length;
    Q("#lbImg").src = imgs[lbIndex];
  };
  QA("#gStrip img").forEach((img, i) => img.addEventListener("click", () => {
    showLightbox(i);
    Q("#lb").classList.add("open");
  }));
  Q("#lbClose").addEventListener("click", () => Q("#lb").classList.remove("open"));
  Q("#lb").addEventListener("click", e => { if (e.target.id === "lb") Q("#lb").classList.remove("open"); });
  Q(".lb-prev", host).addEventListener("click", () => showLightbox(lbIndex - 1));
  Q(".lb-next", host).addEventListener("click", () => showLightbox(lbIndex + 1));
  document.addEventListener("keydown", e => {
    if (!Q("#lb").classList.contains("open")) return;
    if (e.key === "ArrowLeft") showLightbox(lbIndex - 1);
    else if (e.key === "ArrowRight") showLightbox(lbIndex + 1);
    else if (e.key === "Escape") Q("#lb").classList.remove("open");
  });
}

/* počítadlo návštev – zatiaľ lokálne; miesto pre napojenie na API */
function renderCounter(id) {
  const key = "qrlink-visits-" + id;
  const n = Number(localStorage.getItem(key) || 0) + 1;
  localStorage.setItem(key, n);
  const el = Q("#visitCount");
  if (el) el.textContent = tVisits(n);
  /* Neskôr: nahradiť volaním serverového počítadla, viď README. */
}

/* -------------------------------------------------- kontakt ------- */
function renderKontakt() {
  const host = Q("#contactData");
  if (!host) return;
  const c = DB.kontakt;
  host.innerHTML = `
    <p class="contact-firma">${c.firma}</p>
    <div class="contact-field">
      ${CONTACT_ICON_SVG(CAT_INFO_ICONS.pin)}
      <span>${c.adresa.join(", ")}</span>
    </div>
    <div class="contact-field link">
      ${CONTACT_ICON_SVG(CONTACT_ICONS.phone)}
      <a href="tel:${c.tel.replace(/\s/g, "")}">${c.tel}</a>
    </div>
    <div class="contact-field link">
      ${CONTACT_ICON_SVG(CONTACT_ICONS.mail)}
      <a href="mailto:${c.email}">${c.email}</a>
    </div>
    <div class="contact-field link">
      ${CONTACT_ICON_SVG(CONTACT_ICONS.world)}
      <a href="${c.web}" target="_blank" rel="noopener">${c.web.replace("https://", "")}</a>
    </div>`;

  const social = Q("#contactSocial");
  if (social && c.social) {
    social.innerHTML = `
      <a href="${c.social.facebook}" target="_blank" rel="noopener" aria-label="Facebook">${SOCIAL_ICONS.facebook}</a>
      <a href="${c.social.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${SOCIAL_ICONS.instagram}</a>
      <a href="${c.social.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">${SOCIAL_ICONS.linkedin}</a>`;
  }

  const features = Q("#contactFeatures");
  if (features) features.innerHTML = contactFeaturesHTML();

  initContactForm("#contactForm", "#formStatus");
}

/* statický 4-stĺpcový pruh výhod na stránke Kontakt */
function contactFeaturesHTML() {
  const items = [
    { icon: CAT_FEATURE_ICONS.qr, nadpis: t("contact_qr_title"), text: t("contact_qr_text") },
    { icon: CAT_INFO_ICONS.kniha, nadpis: t("contact_trails_title"), text: t("contact_trails_text") },
    { icon: CONTACT_ICONS.armchair, nadpis: t("contact_furniture_title"), text: t("contact_furniture_text") },
    { icon: CAT_INFO_ICONS.audio, nadpis: t("contact_audio_title"), text: t("contact_audio_text") }
  ];
  return items.map(it => `
    <div class="cat-feature">
      <span class="cat-feature-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${it.icon}</svg>
      </span>
      <div>
        <strong>${it.nadpis}</strong>
        <p>${it.text}</p>
      </div>
    </div>`).join("");
}

/* kontaktné formuláre (stránka Kontakt aj homepage) – zatiaľ len klientská
   validácia a potvrdenie, bez servera; miesto pre napojenie na e-mailovú/API službu */
function initContactForm(formId, statusId) {
  const form = Q(formId);
  if (!form || form.dataset.bound) return;
  form.dataset.bound = "1";
  const status = Q(statusId);
  form.addEventListener("submit", e => {
    e.preventDefault();
    form.reset();
    if (status) {
      status.textContent = t("form_success");
      status.className = "form-status ok";
    }
  });
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
  initContactForm("#homeContactForm", "#homeFormStatus");
  renderKategoria();
  renderZastavenie();
  renderKontakt();
});

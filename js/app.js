/* =====================================================================
   QR LINK – APLIKAČNÁ LOGIKA
   Renderuje obsah z js/data.js do stránok. Bez externých knižníc.
   ===================================================================== */

const Q = (s, el = document) => el.querySelector(s);
const QA = (s, el = document) => [...el.querySelectorAll(s)];
const param = (k) => new URLSearchParams(location.search).get(k);
const katById = (id) => DB.kategorie.find(k => k.id === id);
const miestoById = (id) => DB.miesta.find(m => m.id === id);

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
let aktivnyFilter = "vsetko";

function renderFilters() {
  const host = Q("#filters");
  if (!host) return;
  const chips = [{ id: "vsetko", nazov: "Všetko", farba: null, icon: null }, ...DB.kategorie];
  chips.forEach(k => {
    const b = document.createElement("button");
    b.className = "chip" + (k.id === aktivnyFilter ? " active" : "");
    let inner = "";
    if (k.id === "vsetko") {
      inner = "Všetko";
    } else {
      const icon = KAT_ICONS[k.id] || "";
      inner = `<span class="chip-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">${icon}</svg></span>${k.nazov}`;
    }
    b.innerHTML = inner;
    b.addEventListener("click", () => {
      aktivnyFilter = k.id;
      QA(".chip", host).forEach(c => c.classList.remove("active"));
      b.classList.add("active");
      renderCards();
    });
    host.appendChild(b);
  });
}

function cardHTML(m) {
  const tags = m.kategorie.map(id => {
    const k = katById(id);
    return k ? `<span class="tag">${k.nazov}</span>` : "";
  }).join("");
  const img = m.cover
    ? `<img src="${m.cover}" alt="${m.nazov}" loading="lazy">`
    : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
         <path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h3v3h-3zM19 14h2v2h-2zM14 19h2v2h-2zM19 19h2v2h-2z"/>
       </svg>`;
  return `<a class="card" href="kategoria.html?id=${m.id}">
    <div class="thumb">${img}</div>
    <div class="body"><h3>${m.nazov}</h3><div class="tags">${tags}</div></div>
  </a>`;
}

let hladanyText = "";

function vyhovuje(m) {
  const vKategorii = aktivnyFilter === "vsetko" || m.kategorie.includes(aktivnyFilter);
  const vHladani = !hladanyText ||
    m.nazov.toLowerCase().includes(hladanyText) ||
    (m.popis || "").toLowerCase().includes(hladanyText);
  return vKategorii && vHladani;
}

let showAll = false;
const CARDS_PER_PAGE = 12;

function cardHTML(m) {
  const katObj = DB.kategorie.find(k => k.id === m.primarna) || {};
  const icon = KAT_ICONS[m.primarna] || KAT_ICONS["mesta"];
  const photo = PLACE_PHOTOS[m.id] || `https://source.unsplash.com/800x500/?slovakia,landscape`;
  const tags = m.kategorie.map(id => {
    const k = DB.kategorie.find(x => x.id === id);
    return k ? `<span class="card-tag" style="--tc:${k.farba}">${k.nazov}</span>` : "";
  }).join("");
  return `<a class="place-card" href="kategoria.html?id=${m.id}">
    <div class="card-photo">
      <img src="${photo}" alt="${m.nazov}" loading="lazy">
      <span class="card-cat-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">${icon}</svg>
      </span>
    </div>
    <div class="card-body">
      <h3>${m.nazov}</h3>
      <div class="card-footer">
        <div class="card-tags">${tags}</div>
        <span class="card-arrow">→</span>
      </div>
    </div>
  </a>`;
}

function renderCards() {
  const host = Q("#cards");
  const moreBtn = Q("#moreBtn");
  if (!host) return;
  const list = DB.miesta.filter(m =>
    m.mapX !== undefined && (aktivnyFilter === "vsetko" || m.kategorie.includes(aktivnyFilter)));
  const visible = showAll ? list : list.slice(0, CARDS_PER_PAGE);
  host.innerHTML = visible.map(cardHTML).join("") ||
    `<p style="grid-column:1/-1;color:var(--ink-soft)">Žiadne miesta pre túto kategóriu.</p>`;
  const cnt = Q("#cardCount");
  if (cnt) cnt.textContent = `${list.length} miest`;
  if (moreBtn) {
    moreBtn.style.display = list.length > CARDS_PER_PAGE && !showAll ? "flex" : "none";
  }
}

function initSearch() {
  const inp = Q("#searchInput");
  if (!inp) return; // pole bolo odstrânené z UI
  inp.addEventListener("input", () => {
    hladanyText = inp.value.trim().toLowerCase();
    renderCards();
  });
}

function renderStats() {
  const sm = Q("#statMiesta"), sz = Q("#statZastavenia");
  if (sm) sm.textContent = DB.miesta.length;
  if (sz) sz.textContent = DB.zastavenia.length;
}

/* ------------------------------------ stránka kategórie (miesta) -- */
function renderKategoria() {
  const host = Q("#routeList");
  if (!host) return;
  const m = miestoById(param("id"));
  if (!m) { Q("#catTitle").textContent = "Miesto sa nenašlo"; return; }

  const kat = katById(m.primarna);
  document.title = `${m.nazov} – QR LINK`;
  Q("#catTitle").textContent = m.nazov;
  Q("#catDesc").textContent = m.popis || "";
  Q("#crumbHere").textContent = m.nazov;
  const cl = Q("#crumbKat");
  if (kat) { cl.textContent = kat.nazov; cl.href = `index.html#miesta`; }

  const stops = DB.zastavenia
    .filter(z => z.miesto === m.id)
    .sort((a, b) => a.poradie - b.poradie);

  host.innerHTML = stops.length
    ? stops.map(z => `
      <a class="stop" href="zastavenie.html?id=${z.id}">
        <span class="no">${z.poradie}</span>
        <h3>${z.nazov}</h3>
        <span class="go">Detail →</span>
      </a>`).join("")
    : `<p style="color:var(--ink-soft)">Zastavenia pre toto miesto budú doplnené.</p>`;
}

/* -------------------------------------- detail zastavenia --------- */
function renderZastavenie() {
  const root = Q("#detailRoot");
  if (!root) return;
  const z = DB.zastavenia.find(x => x.id === param("id"));
  if (!z) { root.innerHTML = "<p>Zastavenie sa nenašlo.</p>"; return; }

  const m = miestoById(z.miesto);
  const kat = m ? katById(m.primarna) : null;
  document.title = `${z.nazov} – QR LINK`;

  Q("#crumbKat").textContent = kat ? kat.nazov : "";
  Q("#crumbMiesto").textContent = m ? m.nazov : "";
  Q("#crumbMiesto").href = m ? `kategoria.html?id=${m.id}` : "#";
  Q("#crumbHere").textContent = z.nazov;

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
  initSearch();
  renderStats();
  renderFilters();
  renderCards();
  renderKategoria();
  renderZastavenie();
  renderKontakt();
});

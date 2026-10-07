/* =====================================================================
   Sprehľadnenie skupín v /admin → Zastavenia → "Group by".
   Decap CMS vie zoskupovať len do jednej úrovne a hlavička skupiny je
   obyčajný text "<popis skupiny> <hodnota>" (napr. "Projekt › podkategória
   ZŠ a MŠ Bánová › Bludisko"). Tento skript ju pri skupine
   "Projekt › podkategória" prepíše na čitateľnú hlavičku:
     ZŠ a MŠ Bánová › Bludisko      6 zastavení   ✎ Upraviť podkategóriu
   Odkaz otvorí danú podkategóriu/projekt v kolekcii Projekty.

   Pôvodný text hlavičky (ten, ktorý spravuje Decap/React) sa nemení, len
   sa skryje (CSS v admin.css) – keď ho Decap zmení, hlavička sa prepočíta.
   Mapu "cesta → id" generuje scripts/build-data.js do admin/struktura.json.
   Ak by Decap niekedy zmenil vnútornú štruktúru, skript sa jednoducho
   prestane uplatňovať a ostanú pôvodné hlavičky – nič sa nepokazí.
   ===================================================================== */
(function () {
  const SKUPINY = {
    "Projekt › podkategória": "podkategoria",
  };
  let mapa = null;

  fetch("/admin/struktura.json", { cache: "no-cache" })
    .then(r => (r.ok ? r.json() : {}))
    .catch(() => ({}))
    .then(j => { mapa = j || {}; naplanuj(); });

  const el = (tag, cls, text) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  };
  const pocetText = n => `${n} ${n === 1 ? "zastavenie" : n >= 2 && n <= 4 ? "zastavenia" : "zastavení"}`;

  // text, ktorý do hlavičky vložil Decap (bez našich doplnených prvkov)
  const povodnyText = h => [...h.childNodes].filter(n => n.nodeType === 3).map(n => n.nodeValue).join("").trim();

  function vylepsi(h) {
    const raw = povodnyText(h);
    const label = Object.keys(SKUPINY).find(l => raw.startsWith(l + " "));
    if (!label) {
      if (h.classList.contains("qr-group")) {
        h.classList.remove("qr-group");
        delete h.dataset.qrKluc;
        delete h.dataset.qrHodnota;
        h.querySelectorAll(".qr-group-ui").forEach(x => x.remove());
      }
      return;
    }
    const pocet = h.parentElement ? h.parentElement.querySelectorAll('a[href*="/collections/zastavenia/entries/"]').length : 0;
    const kluc = raw + "|" + pocet;
    if (h.dataset.qrKluc === kluc) return;
    h.dataset.qrKluc = kluc;
    h.querySelectorAll(".qr-group-ui").forEach(x => x.remove());

    const typ = SKUPINY[label];
    const hodnota = raw.slice(label.length + 1).trim();
    const casti = hodnota.split(" › ");
    const id = mapa[hodnota];
    h.dataset.qrHodnota = hodnota;

    const ui = el("span", "qr-group-ui");
    const nazov = el("span", "qr-group-title");
    casti.forEach((c, i) => {
      if (i) nazov.appendChild(el("span", "qr-group-sep", " › "));
      nazov.appendChild(el("span", i === casti.length - 1 ? "qr-group-last" : "qr-group-parent", c));
    });
    ui.appendChild(nazov);
    if (typ === "podkategoria" && casti.length === 1) ui.appendChild(el("span", "qr-group-note", "priamo v projekte"));
    ui.appendChild(el("span", "qr-group-count", pocetText(pocet)));
    if (id) {
      const a = el("a", "qr-group-edit", casti.length === 1 ? "✎ Upraviť projekt" : "✎ Upraviť podkategóriu");
      a.href = "#/collections/miesta/entries/" + encodeURIComponent(id);
      a.title = "Otvorí " + (casti.length === 1 ? "projekt" : "podkategóriu") + " „" + casti[casti.length - 1] + "“ v kolekcii Projekty";
      a.addEventListener("click", ev => {
        if (ev.ctrlKey || ev.metaKey || ev.shiftKey || ev.button !== 0) return; // nová karta – nechať tak
        ev.preventDefault();
        otvorCezZoznam(id);
      });
      ui.appendChild(a);
    }
    h.appendChild(ui);
    h.classList.add("qr-group");
  }

  // Chyba Decapu: náhľad v poli "Titulná fotka" sa načíta len raz – ak fotka
  // ešte nie je v pamäti CMS (projekt otvorený priamo, nie zo zoznamu
  // Projektov), ostane prázdny. Preto najprv na chvíľu otvoríme zoznam
  // Projektov (karty fotky načítajú) a až potom daný projekt/podkategóriu.
  function otvorCezZoznam(id) {
    const ciel = "#/collections/miesta/entries/" + encodeURIComponent(id);
    const start = Date.now();
    location.hash = "#/collections/miesta";
    (async function cakaj() {
      let hotovo = Date.now() - start > 6000;
      const karta = document.querySelector(`a[href="${ciel}"]`);
      if (karta && !hotovo) {
        const img = karta.querySelector('[data-testid="entry-card-image"]');
        const url = img && (/url\("?([^")]+)"?\)/.exec(getComputedStyle(img).backgroundImage) || [])[1];
        if (!img) hotovo = true; // bez fotky / zoznamové zobrazenie – nie je na čo čakať
        else if (url) {
          try { hotovo = (await (await fetch(url)).blob()).size > 100; } catch (e) { hotovo = true; }
        }
      }
      if (hotovo) location.hash = ciel;
      else setTimeout(cakaj, 250);
    })();
  }

  // Decap radí skupiny podľa toho, v akom poradí sa záznamy načítali –
  // zoradíme ich ako na webe (poradie kľúčov v struktura.json). Len cez CSS
  // "order" (rodič = flex stĺpec), prvky spravované Reactom sa nepresúvajú.
  function zorad() {
    const poradie = Object.keys(mapa);
    document.querySelectorAll('main[class*="CollectionMain"]').forEach(main => {
      const skupiny = [...main.children].filter(c => c.querySelector(':scope > h2.qr-group'));
      main.classList.toggle("qr-sorted", skupiny.length > 0);
      if (!skupiny.length) {
        [...main.children].forEach(c => { c.style.order = ""; });
        return;
      }
      let zaSkupinami = false;
      [...main.children].forEach(c => {
        const h = c.querySelector(':scope > h2.qr-group');
        if (h) {
          zaSkupinami = true;
          const i = poradie.indexOf(h.dataset.qrHodnota);
          c.style.order = String(i >= 0 ? i + 1 : 5000);
        } else {
          c.style.order = zaSkupinami ? "9999" : "";
        }
      });
    });
  }

  let naplanovane = false;
  function naplanuj() {
    if (naplanovane || !mapa) return;
    naplanovane = true;
    requestAnimationFrame(() => {
      naplanovane = false;
      document.querySelectorAll('h2[class*="GroupHeading"]').forEach(vylepsi);
      zorad();
    });
  }

  new MutationObserver(naplanuj).observe(document.documentElement, { childList: true, subtree: true, characterData: true });
})();

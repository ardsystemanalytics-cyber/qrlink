/* =====================================================================
   QR LINK – DATOVÝ SÚBOR
   =====================================================================
   Všetok obsah webu je tu. Dizajn sa needituje – pridávaš len dáta.

   ŠTRUKTÚRA:
   1. kategorie  – hlavné aj vlastné kategórie (filtre, breadcrumbs)
   2. miesta     – mestá / pamiatky / chodníky (body na mape, karty)
   3. zastavenia – jednotlivé QR podstránky (audio, text, galéria, GPS)

   AKO PRIDAŤ NOVÉ MIESTO:
   - skopíruj ľubovoľný blok v poli "miesta", zmeň id, názov, súradnice
   - mapX / mapY = poloha bodu na mape (0–1000 šírka, 0–520 výška,
     západ = vľavo; orientuj sa podľa existujúcich miest)

   AKO PRIDAŤ ZASTAVENIE:
   - skopíruj blok v poli "zastavenia", zmeň id, miesto, poradie, obsah
   - texty označené [DOPLNIŤ] sú zatiaľ prázdne – čakajú na obsah
   ===================================================================== */

// Fotky miest
const PLACE_PHOTOS = {
  "bratislava-ivanka":    "assets/images/places/bratislava-ivanka.jpg",
  "betliar":              "assets/images/places/betliar.jpg",
  "euroregion-beskydy":   "assets/images/places/euroregion-beskydy.jpg",
  "frydlant":             "assets/images/places/frydlant.jpg",
  "kraj-rusinov":         "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  "knm":                  "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80",
  "porabka":              "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
  "presov":               "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=800&q=80",
  "roznov":               "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80",
  "ruzomberok":           "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  "sokolovce":            "https://images.unsplash.com/photo-1599598425947-5202edd56bdb?w=800&q=80",
  "trebisov":             "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=800&q=80",
  "turzovka":             "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
  "vranov":               "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=800&q=80",
  "hrad-strecno":         "https://www.qrlink.sk/new/wp-content/uploads/2020/06/1-paseka-e1592570206493.jpg",
  "cierne-klacany":       "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80",
  "klenoty-pohranicie":   "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
  "cestovatelsky-dennik": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  "nch-pohranicie":       "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
  "nch-hlinene":          "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
  "nch-zivcakova":        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
  "gabcikovo":            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  "zvonica-hrusove":      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80",
};

// SVG ikonky kategórií – line štýl podľa dizajnu
const KAT_ICONS = {
  "mesta": `<rect x="3" y="10" width="18" height="11" rx="1"/><path d="M7 10V7a5 5 0 0 1 10 0v3"/><line x1="12" y1="14" x2="12" y2="17"/><rect x="9" y="14" width="6" height="7" rx="1"/>`,
  "pamiatky": `<path d="M6 7h12M4 11h16M2 15h20"/><rect x="5" y="15" width="3" height="6"/><rect x="10.5" y="15" width="3" height="6"/><rect x="16" y="15" width="3" height="6"/><path d="M3 21h18"/>`,
  "chodniky": `<path d="M3 20c3-3 6-5 9-5s6 2 9 5"/><circle cx="8" cy="10" r="2"/><path d="M8 8V5M5 11l3-1 3 1"/>`,
  "enviro": `<path d="M12 22V12"/><path d="M12 12C12 7 7 4 3 6c0 4 3 7 9 6"/><path d="M12 12c0-5 5-8 9-6-1 4-4 7-9 6"/>`,
  "pohranicie": `<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>`,
};

const DB = {

  /* ------------------------------------------------ 1. KATEGÓRIE --- */
  kategorie: [
    { id: "mesta",     nazov: "Mestá",                                  farba: "#2E5B41" },
    { id: "pamiatky",  nazov: "Pamiatky",                               farba: "#C34A3A" },
    { id: "chodniky",  nazov: "Náučné chodníky",                        farba: "#D9A441" },
    { id: "enviro",    nazov: "Environmentálna výchova a vzdelávanie",  farba: "#3A6EA5" },
    { id: "pohranicie", nazov: "Česko-slovenské pohraničie",            farba: "#7A5C8C" }
  ],

  /* --------------------------------------------------- 2. MIESTA --- */
  /* primarna = hlavná kategória (breadcrumbs); kategorie = všetky pre filtre */
  miesta: [

    /* ---- MESTÁ ---- */
    { id: "hrad-strecno", nazov: "Hrad Strečno", primarna: "pamiatky", kategorie: ["pamiatky"],
      mapX: 354, mapY: 120,
      cover: "https://www.qrlink.sk/new/wp-content/uploads/2020/06/1-paseka-e1592570206493.jpg",
      popis: "Stredoveký hrad nad Váhom – 14 zastavení s audio sprievodcom." },
    { id: "bratislava-ivanka", nazov: "Ivanka pri Dunaji", primarna: "mesta", kategorie: ["mesta"],
      mapX: 73,  mapY: 393, cover: "", popis: "Obec pri Bratislave s bohatou históriou." },

    { id: "betliar", nazov: "Betliar", primarna: "mesta", kategorie: ["mesta", "pamiatky"],
      mapX: 641, mapY: 252, cover: "", popis: "Obec známa kaštieľom rodu Andrássyovcov." },

    { id: "euroregion-beskydy", nazov: "Euroregión Beskydy", primarna: "mesta", kategorie: ["mesta", "pohranicie"],
      mapX: 330, mapY: 30, cover: "", popis: "Cezhraničný región na pomedzí Slovenska, Česka a Poľska." },

    { id: "frydlant", nazov: "Frýdlant", primarna: "mesta", kategorie: ["mesta", "pohranicie"],
      mapX: 266, mapY: 6, cover: "", popis: "Mesto na česko-slovenskom pohraničí." },

    { id: "kraj-rusinov", nazov: "Kraj Rusínov a Andyho Warhola", primarna: "mesta", kategorie: ["mesta"],
      mapX: 883, mapY: 94, cover: "", popis: "Región Medzilaboriec spätý s rusínskou kultúrou a rodinou Andyho Warhola." },

    { id: "knm", nazov: "Kysucké Nové Mesto", primarna: "mesta", kategorie: ["mesta"],
      mapX: 341, mapY: 86, cover: "", popis: "Mesto na Kysuciach." },

    { id: "porabka", nazov: "Porąbka", primarna: "mesta", kategorie: ["mesta", "pohranicie"],
      mapX: 413, mapY: 8, cover: "", popis: "Poľská obec v Beskydách." },

    { id: "presov", nazov: "Prešov", primarna: "mesta", kategorie: ["mesta"],
      mapX: 768, mapY: 169, cover: "", popis: "Metropola Šariša s historickým centrom." },

    { id: "roznov", nazov: "Rožnov pod Radhoštěm", primarna: "mesta", kategorie: ["mesta", "pohranicie"],
      mapX: 228, mapY: 41, cover: "", popis: "Valašské mesto známe skanzenom." },

    { id: "ruzomberok", nazov: "Ružomberok", primarna: "mesta", kategorie: ["mesta"],
      mapX: 430, mapY: 147, cover: "", popis: "Mesto na Liptove pod Veľkou Fatrou." },

    { id: "sokolovce", nazov: "Sokolovce", primarna: "mesta", kategorie: ["mesta"],
      mapX: 179, mapY: 299, cover: "", popis: "Obec pri Piešťanoch." },

    { id: "trebisov", nazov: "Trebišov", primarna: "mesta", kategorie: ["mesta"],
      mapX: 852, mapY: 271, cover: "", popis: "Mesto na Zemplíne." },

    { id: "turzovka", nazov: "Turzovka", primarna: "mesta", kategorie: ["mesta"],
      mapX: 312, mapY: 58, cover: "", popis: "Mesto na horných Kysuciach." },

    { id: "vranov", nazov: "Vranov nad Topľou", primarna: "mesta", kategorie: ["mesta"],
      mapX: 845, mapY: 199, cover: "", popis: "Mesto na východnom Slovensku." },

    /* ---- PAMIATKY / CHODNÍKY / OSTATNÉ ---- */

    { id: "cierne-klacany", nazov: "Čiernokľačianska Pyxida", primarna: "pamiatky", kategorie: ["pamiatky"],
      mapX: 275, mapY: 346, cover: "", popis: "Vzácna slonovinová schránka z veľkomoravského obdobia." },

    { id: "klenoty-pohranicie", nazov: "Klenoty v česko-slovenskom pohraničí", primarna: "pamiatky", kategorie: ["pamiatky", "pohranicie"],
      mapX: 250, mapY: 70, cover: "", popis: "Kultúrne a prírodné klenoty pohraničia." },

    { id: "cestovatelsky-dennik", nazov: "Cestovateľský denník – Klenoty v česko-slovenskom pohraničí", primarna: "pamiatky", kategorie: ["pamiatky", "pohranicie"],
      mapX: 240, mapY: 95, cover: "", popis: "Putovanie po klenotoch pohraničia." },

    { id: "nch-pohranicie", nazov: "Náučné chodníky v česko-slovenskom pohraničí", primarna: "chodniky", kategorie: ["chodniky", "pohranicie"],
      mapX: 290, mapY: 45, cover: "", popis: "Sieť náučných chodníkov v pohraničí." },

    { id: "nch-hlinene", nazov: "Náučný chodník Hlinené", primarna: "chodniky", kategorie: ["chodniky"],
      mapX: 305, mapY: 65, cover: "", popis: "Náučný chodník v okolí Turzovky." },

    { id: "nch-zivcakova", nazov: "Náučný chodník Živčákova", primarna: "chodniky", kategorie: ["chodniky"],
      mapX: 300, mapY: 50, cover: "", popis: "Chodník k pútnickému miestu Živčákova." },

    { id: "gabcikovo", nazov: "Vodné dielo Gabčíkovo / Čunovo", primarna: "pamiatky", kategorie: ["pamiatky", "enviro"],
      mapX: 68, mapY: 437, cover: "", popis: "Vodné dielo na Dunaji – doc. Ing. Július Binder, Dr. h. c." },

    { id: "zvonica-hrusove", nazov: "Zvonica Hrušové", primarna: "pamiatky", kategorie: ["pamiatky"],
      mapX: 165, mapY: 227, cover: "", popis: "Historická zvonica." }
  ],

  /* ----------------------------------------------- 3. ZASTAVENIA --- */
  zastavenia: [

    /* ============ HRAD STREČNO – 14 zastavení ============ */
    {
      id: "cesticka-na-hrad", miesto: "hrad-strecno", poradie: 1,
      nazov: "Cestička na hrad",
      cover: "https://www.qrlink.sk/new/wp-content/uploads/2020/06/1-paseka-e1592570206493.jpg",
      audio: ["https://www.qrlink.sk/new/wp-content/uploads/2020/06/1-1.mp3"],
      text: `
        <h2>Cestička hradnej pani Žofie</h2>
        <p>Cestička krátka, ale zato strmá a náročná s prekvapením na konci. Tak, ako cesta do neba.
        Po týchto 151 schodoch pani Žofia často chodievala za svojimi poddanými a nosila im svoj
        chlebík útechy. Adamko a Lacko zasa po tejto cestičke bežali tatinovi – hradnému pánovi –
        naproti, aby ho privítali skôr, ako sa otvorí hradná brána. Cestička vás dovedie na paseku,
        kde sa zastavil čas. Stredoveká osada s domčekom bylinkárky, pekára a rybára, kde nesmie
        chýbať ani útulňa pre pútnikov.</p>
        <h2>Cesta hradného pána Františka</h2>
        <p>Hradný pán vracajúc sa z vojenských výprav chodieval touto širokou a pohodlnou pánskou
        cestou. Často unavený, vyčerpaný, ale šťastný, že sa opäť stretne so svojou milovanou Žofiou
        a chlapcami Adamkom a Lackom. Chlapci ho vždy netrpezlivo vyčkávali, kedy sa im ich milovaný
        tatino vráti a ostane aspoň chvíľu doma. Vyzerali ho z hradnej veže, aby ho už z diaľky
        zazreli a po schodoch stihli dobehnúť dole. Vysadli na tatinovho tátoša a so slávou sa
        nechali vítať na hrade.</p>`,
      galeria: ["https://www.qrlink.sk/new/wp-content/uploads/2020/06/1-paseka-e1592570206493.jpg"],
      gps: { lat: 49.177151, lng: 18.862854 },
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d652.0584362093641!2d18.86230682924827!3d49.1771509987075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDEwJzM3LjciTiAxOMKwNTEnNDYuMyJF!5e0!3m2!1ssk!2ssk!4v1594621969012!5m2!1ssk!2ssk"
    },
    { id: "vstup-na-hrad", miesto: "hrad-strecno", poradie: 2, nazov: "Vstup na hrad",
      cover: "", audio: [], text: "<p>[DOPLNIŤ – text zastavenia z pôvodného webu]</p>", galeria: [], gps: null, mapEmbed: "" },
    { id: "expozicia-archeologie", miesto: "hrad-strecno", poradie: 3, nazov: "Expozícia archeológie",
      cover: "", audio: [], text: "<p>[DOPLNIŤ – text zastavenia z pôvodného webu]</p>", galeria: [], gps: null, mapEmbed: "" },
    { id: "prve-podlazie-juzneho-palaca", miesto: "hrad-strecno", poradie: 4, nazov: "Prvé podlažie Južného paláca",
      cover: "", audio: [], text: "<p>[DOPLNIŤ – text zastavenia z pôvodného webu]</p>", galeria: [], gps: null, mapEmbed: "" },
    { id: "prizemie-juzneho-palaca-kuchyna", miesto: "hrad-strecno", poradie: 5, nazov: "Prízemie južného paláca – kuchyňa",
      cover: "", audio: [], text: "<p>[DOPLNIŤ – text zastavenia z pôvodného webu]</p>", galeria: [], gps: null, mapEmbed: "" },
    { id: "juzne-nadvorie", miesto: "hrad-strecno", poradie: 6, nazov: "Južné nádvorie",
      cover: "", audio: [], text: "<p>[DOPLNIŤ – text zastavenia z pôvodného webu]</p>", galeria: [], gps: null, mapEmbed: "" },
    { id: "cisterna", miesto: "hrad-strecno", poradie: 7, nazov: "Cisterna",
      cover: "", audio: [], text: "<p>[DOPLNIŤ – text zastavenia z pôvodného webu]</p>", galeria: [], gps: null, mapEmbed: "" },
    { id: "vstup-do-hlavnej-veze", miesto: "hrad-strecno", poradie: 8, nazov: "Vstup do hlavnej veže",
      cover: "", audio: [], text: "<p>[DOPLNIŤ – text zastavenia z pôvodného webu]</p>", galeria: [], gps: null, mapEmbed: "" },
    { id: "hlavna-veza-vyhlad", miesto: "hrad-strecno", poradie: 9, nazov: "Hlavná veža – výhľad",
      cover: "", audio: [], text: "<p>[DOPLNIŤ – text zastavenia z pôvodného webu]</p>", galeria: [], gps: null, mapEmbed: "" },
    { id: "goticky-a-vychodny-palac", miesto: "hrad-strecno", poradie: 10, nazov: "Gotický a východný palác",
      cover: "", audio: [], text: "<p>[DOPLNIŤ – text zastavenia z pôvodného webu]</p>", galeria: [], gps: null, mapEmbed: "" },
    { id: "severny-palac", miesto: "hrad-strecno", poradie: 11, nazov: "Severný palác",
      cover: "", audio: [], text: "<p>[DOPLNIŤ – text zastavenia z pôvodného webu]</p>", galeria: [], gps: null, mapEmbed: "" },
    { id: "kaplnka", miesto: "hrad-strecno", poradie: 12, nazov: "Kaplnka",
      cover: "", audio: [], text: "<p>[DOPLNIŤ – text zastavenia z pôvodného webu]</p>", galeria: [], gps: null, mapEmbed: "" },
    { id: "severna-veza", miesto: "hrad-strecno", poradie: 13, nazov: "Severná veža",
      cover: "", audio: [], text: "<p>[DOPLNIŤ – text zastavenia z pôvodného webu]</p>", galeria: [], gps: null, mapEmbed: "" },
    { id: "hlavne-nadvorie", miesto: "hrad-strecno", poradie: 14, nazov: "Hlavné nádvorie",
      cover: "", audio: [], text: "<p>[DOPLNIŤ – text zastavenia z pôvodného webu]</p>", galeria: [], gps: null, mapEmbed: "" }
  ],

  /* --------------------------------------------------- KONTAKT ----- */
  kontakt: {
    firma: "ARDSYSTÉM, s.r.o.",
    adresa: ["Pavla Mudroňa 5", "010 01 Žilina"],
    tel: "+421 41 700 25 01",
    email: "ard@ard.sk",
    web: "https://www.ardsystem.sk",
    ico: "36 397 563",
    dic: "2020105989",
    icdph: "SK2020105989"
  }
};

/* =====================================================================
   QR LINK – DATOVÝ SÚBOR
   =====================================================================
   Všetok obsah webu je tu. Dizajn sa needituje – pridávaš len dáta.

   ŠTRUKTÚRA:
   1. kategorie  – hlavné kategórie (filtre, farby/ikony), rozšíriteľné
   2. miesta     – projekty aj podkategórie (pozri nižšie), tvoria strom
   3. zastavenia – jednotlivé QR podstránky (audio, text, galéria, GPS)

   ---------------------------------------------------------------------
   HIERARCHIA: hlavná kategória → projekt → podkategória (0..N úrovní) →
   zastavenie

   - PROJEKT je top-level záznam v "miesta" (bez poľa "rodic") – karta na
     homepage aj bod na mape. Môže patriť do viacerých hlavných kategórií
     (pole "kategorie"), ale vždy má práve jednu primárnu ("primarna") –
     tá určuje farbu/ikonu na karte, mape aj v breadcrumbe.

   - PODKATEGÓRIA je záznam v "miesta" s "rodic" = id rodiča (projektu
     alebo inej podkategórie). Nemá vlastnú hlavnú kategóriu – farbu/ikonu
     aj fotku (ak nemá vlastnú) DEDÍ od koreňového projektu. Podkategórií
     môže byť pod jedným rodičom 0, 1 aj viac, a to do ľubovoľnej hĺbky.
     Podkategória je vždy samostatný záznam – aj keď sa volá rovnako ako
     existujúci top-level projekt, nezdieľa s ním obsah ani zastavenia.

   - Karta projektu/podkategórie vždy zobrazuje počet zastavení = súčet
     VŠETKÝCH zastavení v celom jej podstrome (aj cez viac úrovní), ale
     počítajú sa len tie s vyplneným obsahom (text bez značky [DOPLNIŤ]).

   - Ktorý dizajn kategórie sa použije, sa neurčuje podľa hĺbky (koreň/1./
     2./3. úroveň), ale podľa typu uzla – dva pomenované typy (používajú sa
     aj v komunikácii o dizajne):
       • "Kategória bez zastavení" – má ďalšie podkategórie. Rovnaký
         dizajn na každej úrovni vetvenia, nielen na koreni projektu.
       • "Kategória so zastaveniami" – už nemá ďalšie podkategórie,
         obsahuje priamo zastavenia. Posledná (listová) úroveň, iný
         dizajn (max 5 kartičiek v riadku, zobrazujú sa vždy všetky).
     Vizuál oboch typov sa ešte môže meniť/dolaďovať.

   AKO PRIDAŤ NOVÝ PROJEKT (top-level):
   - skopíruj blok v poli "miesta" BEZ poľa "rodic", zmeň id, názov,
     súradnice (mapX/mapY = poloha bodu na mape 0–1000/0–520) a kategórie

   AKO PRIDAŤ PODKATEGÓRIU:
   - skopíruj blok v poli "miesta", pridaj "rodic": "<id rodiča>",
     mapX/mapY/lon/lat/kategorie/primarna sa nepoužívajú (nie je na mape)
   - fotka sa dedí automaticky; pre vlastnú fotku pridaj pole "foto"

   AKO PRIDAŤ ZASTAVENIE:
   - skopíruj blok v poli "zastavenia", zmeň id, miesto (id projektu ALEBO
     ktorejkoľvek podkategórie), poradie, obsah
   - texty označené [DOPLNIŤ] sú zatiaľ prázdne – čakajú na obsah a
     NEPOČÍTAJÚ sa do zobrazeného počtu zastavení
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
    { id: "mesta",     nazov: "Mestá",                                  farba: "#4E7FAE" },
    { id: "pamiatky",  nazov: "Pamiatky",                               farba: "#C34A3A" },
    { id: "chodniky",  nazov: "Náučné chodníky",                        farba: "#D9A441" },
    { id: "enviro",    nazov: "Environmentálna výchova a vzdelávanie",  farba: "#41a579" },
    { id: "pohranicie", nazov: "Česko-slovenské pohraničie",            farba: "#7A5C8C" }
  ],

  /* --------------------------------------------------- 2. MIESTA --- */
  /* primarna = hlavná kategória (breadcrumbs); kategorie = všetky pre filtre */
  miesta: [

    /* ---- MESTÁ ---- */
    { id: "hrad-strecno", nazov: "Hrad Strečno", primarna: "pamiatky", kategorie: ["pamiatky"],
      lon: 18.864, lat: 49.177, mapX: 354, mapY: 120,
      cover: "https://www.qrlink.sk/new/wp-content/uploads/2020/06/1-paseka-e1592570206493.jpg",
      popis: "Stredoveký hrad nad Váhom – 14 zastavení s audio sprievodcom." },
    { id: "bratislava-ivanka", nazov: "Ivanka pri Dunaji", primarna: "mesta", kategorie: ["mesta"],
      lon: 17.252, lat: 48.175, mapX: 73,  mapY: 393, cover: "", popis: "Obec pri Bratislave s bohatou históriou." },

    /* ---- TESTOVACIE VNORENIE (4 úrovne) – overenie "Kategória bez zastavení" na každej úrovni ---- */
    { id: "ivanka-uroven-1", rodic: "bratislava-ivanka", nazov: "Úroveň 1 – testovacia podkategória",
      popis: "Testovacia podkategória bez zastavení, 1. úroveň vnorenia." },

    { id: "ivanka-uroven-2", rodic: "ivanka-uroven-1", nazov: "Úroveň 2 – testovacia podkategória",
      popis: "Testovacia podkategória bez zastavení, 2. úroveň vnorenia." },

    { id: "ivanka-uroven-3", rodic: "ivanka-uroven-2", nazov: "Úroveň 3 – testovacia podkategória",
      popis: "Testovacia podkategória bez zastavení, 3. úroveň vnorenia." },

    { id: "ivanka-uroven-4", rodic: "ivanka-uroven-3", nazov: "Úroveň 4 – so zastaveniami",
      popis: "Testovacia podkategória, ktorá už obsahuje priamo zastavenia (posledná/listová úroveň)." },

    { id: "betliar", nazov: "Betliar", primarna: "mesta", kategorie: ["mesta", "pamiatky"],
      lon: 20.474, lat: 48.695, mapX: 641, mapY: 252, cover: "", popis: "Obec známa kaštieľom rodu Andrássyovcov." },

    { id: "euroregion-beskydy", nazov: "Euroregión Beskydy", primarna: "mesta", kategorie: ["mesta", "pohranicie"],
      lon: 18.5, lat: 49.38, mapX: 330, mapY: 30, cover: "", popis: "Objavujte výnimočné miesta na slovensko-českom pohraničí – mestá, hrady, prírodné krásy aj kultúrne dedičstvo, ktoré spája dva národy.",
      heroOverlay: { icon: "stromy", text: "Pohraničie plné zážitkov", popis: "Od hradov a historických miest po prírodu a oddych." } },

    /* ---- PODKATEGÓRIE „Euroregión Beskydy" (testovací obsah) ---- */
    { id: "eb-oravsky-hrad", rodic: "euroregion-beskydy", nazov: "Oravský hrad",
      foto: "assets/images/places/oravsky-hrad-hero.jpg",
      popis: "Majestátny hrad týčiaci sa na brale nad riekou Orava patrí k najkrajším hradom Slovenska.",
      heroOverlay: { icon: "hrad", text: "Zaujímavosť", popis: "Hrad stoji na brale vysokom 112 m nad riekou Orava." } },

    { id: "eb-klin", rodic: "euroregion-beskydy", nazov: "Klin",
      popis: "Podhorská obec pod Veľkou Račou, brána do Kysuckých Beskýd." },

    { id: "eb-hrad-strecno", rodic: "euroregion-beskydy", nazov: "Hrad Strečno",
      foto: "https://www.qrlink.sk/new/wp-content/uploads/2020/06/1-paseka-e1592570206493.jpg",
      popis: "Stredoveký hrad nad Váhom – samostatná podkapitola v rámci Euroregiónu Beskydy." },

    { id: "eb-plte-na-vahu", rodic: "euroregion-beskydy", nazov: "Plte na Váhu",
      popis: "Tradičné pltníctvo – plavba na drevených pltiach po rieke Váh." },

    { id: "eb-cadca", rodic: "euroregion-beskydy", nazov: "Čadca",
      foto: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80",
      popis: "Srdce Kysúc a brána do Beskýd." },

    { id: "eb-velka-raca", rodic: "euroregion-beskydy", nazov: "Veľká Rača",
      foto: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&q=80",
      popis: "Najvyšší vrch Kysuckých Beskýd s panoramatickými výhľadmi." },

    { id: "eb-rozhliadka-dedovka", rodic: "euroregion-beskydy", nazov: "Rozhliadňa Dedovka",
      popis: "Vyhliadková veža s výhľadom na Kysuce, Beskydy aj Poľsko." },

    { id: "frydlant", nazov: "Frýdlant", primarna: "mesta", kategorie: ["mesta", "pohranicie"],
      lon: 15.082, lat: 50.921, mapX: 266, mapY: 6, cover: "", popis: "Mesto na česko-slovenskom pohraničí." },

    { id: "kraj-rusinov", nazov: "Kraj Rusínov a Andyho Warhola", primarna: "mesta", kategorie: ["mesta"],
      lon: 21.901, lat: 49.271, mapX: 883, mapY: 94, cover: "", popis: "Región Medzilaboriec spätý s rusínskou kultúrou a rodinou Andyho Warhola." },

    { id: "knm", nazov: "Kysucké Nové Mesto", primarna: "mesta", kategorie: ["mesta"],
      lon: 18.777, lat: 49.3, mapX: 341, mapY: 86, cover: "", popis: "Mesto na Kysuciach." },

    { id: "porabka", nazov: "Porąbka", primarna: "mesta", kategorie: ["mesta", "pohranicie"],
      lon: 19.07, lat: 49.742, mapX: 413, mapY: 8, cover: "", popis: "Poľská obec v Beskydách." },

    { id: "presov", nazov: "Prešov", primarna: "mesta", kategorie: ["mesta"],
      lon: 21.239, lat: 48.999, mapX: 768, mapY: 169, cover: "", popis: "Metropola Šariša s historickým centrom." },

    { id: "roznov", nazov: "Rožnov pod Radhoštěm", primarna: "mesta", kategorie: ["mesta", "pohranicie"],
      lon: 18.143, lat: 49.458, mapX: 228, mapY: 41, cover: "", popis: "Valašské mesto známe skanzenom." },

    { id: "ruzomberok", nazov: "Ružomberok", primarna: "mesta", kategorie: ["mesta"],
      lon: 19.308, lat: 49.083, mapX: 430, mapY: 147, cover: "", popis: "Mesto na Liptove pod Veľkou Fatrou." },

    { id: "sokolovce", nazov: "Sokolovce", primarna: "mesta", kategorie: ["mesta"],
      lon: 17.77, lat: 48.597, mapX: 179, mapY: 299, cover: "", popis: "Obec pri Piešťanoch." },

    { id: "trebisov", nazov: "Trebišov", primarna: "mesta", kategorie: ["mesta"],
      lon: 21.718, lat: 48.629, mapX: 852, mapY: 271, cover: "", popis: "Mesto na Zemplíne." },

    { id: "turzovka", nazov: "Turzovka", primarna: "mesta", kategorie: ["mesta"],
      lon: 18.621, lat: 49.402, mapX: 312, mapY: 58, cover: "", popis: "Mesto na horných Kysuciach." },

    { id: "vranov", nazov: "Vranov nad Topľou", primarna: "mesta", kategorie: ["mesta"],
      lon: 21.676, lat: 48.882, mapX: 845, mapY: 199, cover: "", popis: "Mesto na východnom Slovensku." },

    /* ---- PAMIATKY / CHODNÍKY / OSTATNÉ ---- */

    { id: "cierne-klacany", nazov: "Čiernokľačianska Pyxida", primarna: "pamiatky", kategorie: ["pamiatky"],
      lon: 18.193, lat: 48.471, mapX: 275, mapY: 346, cover: "", popis: "Vzácna slonovinová schránka z veľkomoravského obdobia." },

    { id: "klenoty-pohranicie", nazov: "Klenoty v česko-slovenskom pohraničí", primarna: "pamiatky", kategorie: ["pamiatky", "pohranicie"],
      lon: 18.27, lat: 49.36, mapX: 250, mapY: 70, cover: "", popis: "Kultúrne a prírodné klenoty pohraničia." },

    { id: "cestovatelsky-dennik", nazov: "Cestovateľský denník – Klenoty v česko-slovenskom pohraničí", primarna: "pamiatky", kategorie: ["pamiatky", "pohranicie"],
      lon: 18.21, lat: 49.27, mapX: 240, mapY: 95, cover: "", popis: "Putovanie po klenotoch pohraničia." },

    { id: "nch-pohranicie", nazov: "Náučné chodníky v česko-slovenskom pohraničí", primarna: "chodniky", kategorie: ["chodniky", "pohranicie"],
      lon: 18.49, lat: 49.45, mapX: 290, mapY: 45, cover: "", popis: "Sieť náučných chodníkov v pohraničí." },

    { id: "nch-hlinene", nazov: "Náučný chodník Hlinené", primarna: "chodniky", kategorie: ["chodniky"],
      lon: 18.58, lat: 49.383, mapX: 305, mapY: 65, cover: "", popis: "Náučný chodník v okolí Turzovky." },

    { id: "nch-zivcakova", nazov: "Náučný chodník Živčákova", primarna: "chodniky", kategorie: ["chodniky"],
      lon: 18.553, lat: 49.432, mapX: 300, mapY: 50, cover: "", popis: "Chodník k pútnickému miestu Živčákova." },

    { id: "gabcikovo", nazov: "Vodné dielo Gabčíkovo / Čunovo", primarna: "pamiatky", kategorie: ["pamiatky", "enviro"],
      lon: 17.543, lat: 47.883, mapX: 68, mapY: 437, cover: "", popis: "Vodné dielo na Dunaji – doc. Ing. Július Binder, Dr. h. c." },

    { id: "zvonica-hrusove", nazov: "Zvonica Hrušové", primarna: "pamiatky", kategorie: ["pamiatky"],
      lon: 17.95, lat: 48.75, mapX: 165, mapY: 227, cover: "", popis: "Historická zvonica." }
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
      galeria: [
        "https://www.qrlink.sk/new/wp-content/uploads/2020/06/1-paseka-e1592570206493.jpg",
        "https://www.qrlink.sk/new/wp-content/uploads/2020/06/1-paseka-e1592570206493.jpg",
        "https://www.qrlink.sk/new/wp-content/uploads/2020/06/1-paseka-e1592570206493.jpg",
        "https://www.qrlink.sk/new/wp-content/uploads/2020/06/1-paseka-e1592570206493.jpg"
      ],
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
      cover: "", audio: [], text: "<p>[DOPLNIŤ – text zastavenia z pôvodného webu]</p>", galeria: [], gps: null, mapEmbed: "" },

    /* ============ TESTOVACIE VNORENIE – Úroveň 4 (zastavenia) ============ */
    { id: "ivanka-u4-z1", miesto: "ivanka-uroven-4", poradie: 1, nazov: "Testovacie zastavenie A",
      popis: "Prvé testovacie zastavenie na 4. úrovni vnorenia.",
      cover: "", audio: [], galeria: [], gps: null, mapEmbed: "",
      text: `<p>Toto je testovacie zastavenie, ktoré overuje, že "Kategória so zastaveniami" sa správne
      zobrazí až na poslednej (listovej) úrovni, bez ohľadu na to, koľko úrovní podkategórií je nad ňou.</p>` },
    { id: "ivanka-u4-z2", miesto: "ivanka-uroven-4", poradie: 2, nazov: "Testovacie zastavenie B",
      popis: "Druhé testovacie zastavenie na 4. úrovni vnorenia.",
      cover: "", audio: [], galeria: [], gps: null, mapEmbed: "",
      text: `<p>Druhé testovacie zastavenie – slúži na overenie gridu/zoznamu s viac ako jednou kartičkou.</p>` },

    /* ============ EUROREGIÓN BESKYDY – podkategórie (testovací obsah) ============ */
    /* -- Oravský hrad (eb-oravsky-hrad): 6 zastavení, 4 s obsahom -- */
    { id: "eb-oh-brana-do-hradu", miesto: "eb-oravsky-hrad", poradie: 1, nazov: "Brána do hradu",
      popis: "Hlavný vstup do hradného areálu, ktorý vás vtiahne do histórie.",
      cover: "assets/images/places/oravsky-hrad-brana.jpg", audio: ["https://www.qrlink.sk/new/wp-content/uploads/2020/06/1-1.mp3"], galeria: [],
      gps: { lat: 49.2621250, lng: 19.3589331 },
      mapEmbed: "https://www.google.com/maps?q=49.2621250,19.3589331&z=16&output=embed",
      text: `<p>Jednou z najväčších turistických atrakcií severného Slovenska je Oravský hrad, vybudovaný na skale nad riekou Orava v Oravskom Podzámku ako „orlie hniezdo“.</p>
      <p>Hrad začali budovať na mieste starého dreveného hrádku po tatárskom vpáde v roku 1241. Z pôvodne malej pevnosti z 13. storočia vznikol v priebehu nasledujúcich storočí rozsiahly hradný areál, ktorý má dnes 154 miestností.</p>
      <p>V minulosti bol župným hradom a sídlom Oravského hradného panstva. Patrila mu takmer celá Orava.</p>
      <p>Budovy a interiér hradu nesú črty románskeho slohu, gotiky, renesancie, baroka i moderných slohov. Hrad je totiž stále živý komplex, ktorého vývoj sa dodnes nezastavil.</p>` },
    { id: "eb-oh-kaplnka", miesto: "eb-oravsky-hrad", poradie: 2, nazov: "Kaplnka",
      popis: "Renesančná kaplnka sv. Michala s unikátnou výzdobou.",
      cover: "assets/images/places/oravsky-hrad-kaplnka.jpg", audio: [], galeria: [], gps: null, mapEmbed: "",
      text: `<p>Malá renesančná kaplnka zasvätená sv. Michalovi slúžila hradnej posádke aj panstvu
      na súkromné bohoslužby. Zachovala sa v nej pôvodná výmaľba zo 17. storočia.</p>` },
    { id: "eb-oh-hradna-studna", miesto: "eb-oravsky-hrad", poradie: 3, nazov: "Hradná studňa",
      popis: "Hlboká studňa vytesaná do skaly, ktorá slúžila po stáročia.",
      cover: "assets/images/places/oravsky-hrad-studna.jpg", audio: [], galeria: [], gps: null, mapEmbed: "",
      text: `<p>Studňa vytesaná priamo do skalného brala zásobovala hrad vodou aj počas najdlhších
      obliehaní. Jej hĺbka dodnes vyráža návštevníkom dych.</p>` },
    { id: "eb-oh-vyhliadka", miesto: "eb-oravsky-hrad", poradie: 4, nazov: "Vyhliadka",
      popis: "Nádherný panoramatický výhľad na rieku Oravu a okolitú krajinu.",
      cover: "assets/images/places/oravsky-hrad-vyhliadka.jpg", audio: [], galeria: [], gps: null, mapEmbed: "",
      text: `<p>Z najvyššieho nádvoria sa otvára jeden z najkrajších pohľadov na rieku Oravu a okolité
      hrebene – odmena za výstup po hradných schodoch.</p>` },
    { id: "eb-oh-nadvorie", miesto: "eb-oravsky-hrad", poradie: 5, nazov: "Nádvorie",
      cover: "", audio: [], text: "<p>[DOPLNIŤ – text zastavenia]</p>", galeria: [], gps: null, mapEmbed: "" },
    { id: "eb-oh-veza", miesto: "eb-oravsky-hrad", poradie: 6, nazov: "Veža",
      cover: "", audio: [], text: "<p>[DOPLNIŤ – text zastavenia]</p>", galeria: [], gps: null, mapEmbed: "" },

    /* -- Klin (eb-klin): 2 zastavenia -- */
    { id: "eb-klin-centrum", miesto: "eb-klin", poradie: 1, nazov: "Centrum obce",
      popis: "Srdce obce pod Veľkou Račou.",
      cover: "", audio: [], galeria: [], gps: null, mapEmbed: "",
      text: `<p>Obec Klin leží v malebnom údolí pod najvyšším vrchom Kysuckých Beskýd – Veľkou Račou.</p>` },
    { id: "eb-klin-kostol", miesto: "eb-klin", poradie: 2, nazov: "Drevený kostolík",
      popis: "Ľudová sakrálna architektúra Kysúc.",
      cover: "", audio: [], galeria: [], gps: null, mapEmbed: "",
      text: `<p>Drevený kostolík je ukážkou tradičnej ľudovej architektúry, akú nájdete len na
      niekoľkých miestach Kysúc.</p>` },

    /* -- Hrad Strečno – podkategória (eb-hrad-strecno): 2 zastavenia -- */
    { id: "eb-hs-brana", miesto: "eb-hrad-strecno", poradie: 1, nazov: "Vstupná brána",
      popis: "Prvý pohľad na hrad nad Váhom.",
      cover: "", audio: [], galeria: [], gps: null, mapEmbed: "",
      text: `<p>Hrad Strečno strážil odjakživa dôležitú obchodnú cestu popri Váhu – vstupná brána
      vás víta rovnako, ako vítala pocestných pred stáročiami.</p>` },
    { id: "eb-hs-nadvorie", miesto: "eb-hrad-strecno", poradie: 2, nazov: "Hradné nádvorie",
      popis: "Centrálny priestor hradného areálu.",
      cover: "", audio: [], galeria: [], gps: null, mapEmbed: "",
      text: `<p>Nádvorie bolo srdcom každodenného života na hrade – remeselníci, čeľaď aj panstvo sa
      tu stretávali pri svojich každodenných povinnostiach.</p>` },

    /* -- Plte na Váhu (eb-plte-na-vahu): 1 zastavenie -- */
    { id: "eb-plte-nastupiste", miesto: "eb-plte-na-vahu", poradie: 1, nazov: "Nástupište pltí",
      popis: "Miesto, kde sa nalodíte na tradičnú pltnícku plavbu.",
      cover: "", audio: [], galeria: [], gps: null, mapEmbed: "",
      text: `<p>Tradičné pltníctvo na Váhu ožíva aj dnes – z tohto nástupišťa sa vydávajú drevené
      plte na plavbu, akou kedysi putovalo drevo z hôr až do údolia.</p>` },

    /* -- Čadca (eb-cadca): 1 zastavenie -- */
    { id: "eb-cadca-namestie", miesto: "eb-cadca", poradie: 1, nazov: "Námestie slobody",
      popis: "Centrum mesta Čadca.",
      cover: "", audio: [], galeria: [], gps: null, mapEmbed: "",
      text: `<p>Námestie slobody je prirodzeným centrom Čadce – mesta, ktoré je bránou do Kysuckých
      Beskýd.</p>` },

    /* -- Veľká Rača (eb-velka-raca): 1 zastavenie -- */
    { id: "eb-vr-vrchol", miesto: "eb-velka-raca", poradie: 1, nazov: "Vrchol Veľkej Rače",
      popis: "Najvyšší bod Kysuckých Beskýd (1 236 m n. m.).",
      cover: "", audio: [], galeria: [], gps: null, mapEmbed: "",
      text: `<p>Z vrcholu Veľkej Rače sa za jasného počasia vidí až do Poľska a Českej republiky –
      symbolické miesto, kde sa stretávajú tri krajiny.</p>` },

    /* -- Rozhliadňa Dedovka (eb-rozhliadka-dedovka): 1 zastavenie -- */
    { id: "eb-dedovka-vyhliadka", miesto: "eb-rozhliadka-dedovka", poradie: 1, nazov: "Vyhliadková plošina",
      popis: "360° výhľad na Kysuce, Beskydy aj Poľsko.",
      cover: "", audio: [], galeria: [], gps: null, mapEmbed: "",
      text: `<p>Rozhliadňa Dedovka ponúka výhľad na tri krajiny naraz – ideálny cieľ nenáročnej
      turistiky pre celú rodinu.</p>` }
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
    icdph: "SK2020105989",
    social: {
      facebook: "https://www.facebook.com",
      instagram: "https://www.instagram.com",
      linkedin: "https://www.linkedin.com"
    }
  }
};

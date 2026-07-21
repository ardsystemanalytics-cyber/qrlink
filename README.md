# QR LINK – nový web

Redizajn webu qrlink.sk. Statická stránka bez závislostí – hotová na nasadenie
na Vercel (alebo akýkoľvek statický hosting).

## Štruktúra

```
index.html        domovská stránka (mapa SR + filtre + karty miest)
kategoria.html    projekt/podkategória – grid podkategórií alebo zastavení (?id=hrad-strecno)
zastavenie.html   detail zastavenia (?id=cesticka-na-hrad)
kontakt.html      kontakt
css/style.css     dizajn (needituje sa pri pridávaní obsahu)
js/data.js        ★ VŠETOK OBSAH JE TU ★
js/app.js         logika (needituje sa pri pridávaní obsahu)
```

## Ako nasadiť (GitHub → Vercel)

1. Nahraj VŠETKY súbory (vrátane priečinkov css a js) do GitHub repozitára
   – v prázdnom repozitári klikni "uploading an existing file" a pretiahni ich.
2. Vo Vercel: Add New → Project → vyber repozitár → Deploy.
3. Hotovo – každá ďalšia zmena v repozitári sa nasadí automaticky.

## Ako pridávať obsah

Otvor `js/data.js` – je v ňom návod priamo v komentároch. V skratke:

- **Nové miesto/mesto:** skopíruj blok v poli `miesta`, zmeň `id`, `nazov`,
  `mapX`/`mapY` (poloha bodu na mape) a kategórie.
- **Nové zastavenie:** skopíruj blok v poli `zastavenia`, vyplň `miesto`
  (id miesta alebo podkategórie), `poradie`, audio, text (HTML), galériu a GPS.
- Texty označené `[DOPLNIŤ]` čakajú na obsah z pôvodného webu.

## Hierarchia: hlavná kategória → projekt → podkategória → zastavenie

Obsah má 4 úrovne:

1. **Hlavná kategória** (`DB.kategorie`) – pevný zoznam (Mestá, Pamiatky,
   Náučné chodníky, Environmentálna výchova a vzdelávanie, Česko-slovenské
   pohraničie), rozšíriteľný pridaním ďalšieho záznamu. Slúži len na
   filtrovanie a farebné/ikonové značenie.

2. **Projekt** – top-level záznam v `miesta` (bez poľa `rodic`) – karta na
   homepage aj bod na mape. Môže patriť do viacerých hlavných kategórií
   (`kategorie: [...]`), ale vždy má práve jednu primárnu (`primarna`) –
   tá určuje farbu/ikonu na karte, mape aj v breadcrumbe.

3. **Podkategória** – záznam v `miesta` s `rodic` = id rodiča (projektu
   alebo inej podkategórie). Nemá vlastnú hlavnú kategóriu – farbu/ikonu
   aj fotku (ak nemá vlastnú `foto`) dedí od koreňového projektu.
   Podkategórií môže byť pod jedným rodičom 0, 1 aj viac, do ľubovoľnej
   hĺbky. Je to vždy samostatný záznam – aj keď sa volá rovnako ako iný
   top-level projekt, nezdieľa s ním obsah ani zastavenia.

4. **Zastavenie** – konečná QR podstránka (`zastavenie.html`).

**Zobrazovanie:**
- Karta projektu/podkategórie vždy zobrazuje počet zastavení = súčet
  všetkých *obsahovo hotových* zastavení v celom jej podstrome (zastavenia
  s textom `[DOPLNIŤ...]` sa nepočítajú).
- Klik na kartu: ak má ďalšie podkategórie → grid podkategórií (max 6
  v riadku); ak už nemá → grid konkrétnych zastavení (očíslované kartičky
  s QR ikonou, max 5 v riadku, zobrazujú sa vždy všetky, žiadne skrývanie).
- Breadcrumb rastie o úroveň s každým kliknutím: `Domov > Projekt >
  Podkategória > (zastavenie)`.

Testovací príklad tejto hierarchie je `euroregion-beskydy` v `js/data.js`
(projekt s primárnou kategóriou Mestá, 7 podkategóriami a ich zastaveniami).

## QR kódy a presmerovanie zo starých adries

Nové adresy majú tvar `zastavenie.html?id=cesticka-na-hrad`. Aby staré QR
nosiče fungovali, treba na doméne qrlink.sk nastaviť presmerovania
(redirect) zo starých URL na nové – rieši sa pri prepnutí domény,
na Verceli cez súbor `vercel.json` (pripravím na požiadanie).

## Počítadlo návštev

Zatiaľ počíta návštevy len v prehliadači návštevníka (localStorage).
Skutočné zdieľané počítadlo vyžaduje malý backend – na Verceli sa dá
doplniť serverless funkciou. Miesto na napojenie je v `js/app.js`
vo funkcii `renderCounter`.

## Čo je hotové a čo čaká

HOTOVÉ: dizajn, mapa SR s bodmi, filtre podľa kategórií, breadcrumbs,
karty miest, trasa zastavení s poradím, detail zastavenia (audio prehrávač
so skokmi ±10 s, text, fotogaléria s lightboxom, GPS mapa, tlačidlo
Všetky zastavenia), kontakt, mobilná verzia.

ČAKÁ NA OBSAH: texty/audio/fotky ostatných zastavení z pôvodného webu
(v data.js označené [DOPLNIŤ]), cover fotky miest, viacjazyčnosť (SK/EN/DE/…),
serverové počítadlo návštev, presmerovania starých QR adries.

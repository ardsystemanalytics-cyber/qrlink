# QR LINK – nový web

Redizajn webu qrlink.sk. Statická stránka bez závislostí – hotová na nasadenie
na Vercel (alebo akýkoľvek statický hosting).

## Štruktúra

```
index.html        domovská stránka (mapa SR + filtre + karty miest)
kategoria.html    zoznam zastavení pre miesto (?id=hrad-strecno)
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
  (id miesta), `poradie`, audio, text (HTML), galériu a GPS.
- Texty označené `[DOPLNIŤ]` čakajú na obsah z pôvodného webu.

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

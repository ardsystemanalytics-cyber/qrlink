# QR LINK – nový web

Redizajn webu qrlink.sk. Statická stránka bez závislostí – hotová na nasadenie
na Vercel (alebo akýkoľvek statický hosting). Obsah sa edituje buď priamo
v súboroch, alebo cez webové rozhranie na `/admin` (Decap CMS) – pozri nižšie.

## Štruktúra

```
index.html          domovská stránka (mapa SR + filtre + karty miest)
kategoria.html      projekt/podkategória – grid podkategórií alebo zastavení (?id=hrad-strecno)
zastavenie.html      detail zastavenia (?id=cesticka-na-hrad)
kontakt.html         kontakt
css/style.css        dizajn (needituje sa pri pridávaní obsahu)
js/app.js            logika (needituje sa pri pridávaní obsahu)
js/data.js           ★ AUTOMATICKY VYGENEROVANÝ – needituj ručne ★
content/             ★ TU JE VŠETOK OBSAH – edituje sa buď priamo, alebo cez /admin ★
  kategorie/*.json    hlavné kategórie
  miesta/*.json        mestá, pamiatky, podkategórie/trasy
  zastavenia/*.json    jednotlivé QR zastavenia
  kontakt.json          kontaktné údaje
scripts/build-data.js  poskladá content/*.json späť do js/data.js (spúšťa sa automaticky pri nasadení)
admin/                 Decap CMS – webové rozhranie na /admin
api/                    GitHub prihlasovací mostík pre /admin (serverless funkcie)
```

`js/data.js` sa už needituje ručne – pri každom nasadení na Vercel ho
skript `scripts/build-data.js` nanovo poskladá z `content/*.json`. Lokálne si
ho vieš prepočítať príkazom `node scripts/build-data.js` (needituje ale
nič nasadzuje, iba prepíše `js/data.js` podľa aktuálneho obsahu `content/`).

## Ako nasadiť (GitHub → Vercel)

1. Nahraj VŠETKY súbory (vrátane priečinkov css, js, content, admin, api) do
   GitHub repozitára – v prázdnom repozitári klikni "uploading an existing
   file" a pretiahni ich.
2. Vo Vercel: Add New → Project → vyber repozitár → Deploy. Vercel automaticky
   spustí `node scripts/build-data.js` pred nasadením (nastavené vo
   `vercel.json`).
3. Hotovo – každá ďalšia zmena v repozitári (aj cez `/admin`) sa nasadí
   automaticky.

## Ako pridávať obsah

**A) Cez `/admin` (odporúčané, aj pre netechnického kolegu)** – pozri sekciu
"Redakčný systém (Decap CMS) na /admin" nižšie.

**B) Priamo v súboroch** – uprav príslušný súbor v `content/`:

- **Nová kategória:** nový súbor v `content/kategorie/`, podľa vzoru
  existujúceho (napr. `content/kategorie/mesta.json`).
- **Nové miesto/mesto:** nový súbor v `content/miesta/`, podľa vzoru
  existujúceho záznamu – vyplň `id`, `nazov`, `mapX`/`mapY` (poloha bodu
  na mape) a kategórie.
- **Nové zastavenie:** nový súbor v `content/zastavenia/`, vyplň `miesto`
  (id miesta alebo podkategórie), `poradie`, audio, text (HTML), galériu a GPS.
- Po ručnej úprave spusti `node scripts/build-data.js`, aby sa zmena prejavila
  aj pri lokálnom testovaní (na Verceli sa spustí automaticky pri nasadení).
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
- Ktorý dizajn kategórie sa použije, sa neurčuje podľa hĺbky (koreň/1./2./3.
  úroveň), ale podľa typu uzla. Rozlišujeme dva pomenované typy, ktoré sa
  budú používať aj v ďalšej komunikácii o dizajne:
  - **Kategória bez zastavení** – má ďalšie podkategórie (`detiOf(id)` nie
    je prázdne). Rovnaký dizajn na každej úrovni vetvenia (1., 2., 3. ...
    koľko ich len bude), nielen na koreňovej stránke projektu. Konkrétny
    vizuál tohto dizajnu sa ešte môže meniť/dolaďovať.
  - **Kategória so zastaveniami** – už nemá ďalšie podkategórie a obsahuje
    priamo zastavenia. Je to posledná (listová) úroveň, má samostatný
    dizajn (max 5 kartičiek v riadku, zobrazujú sa vždy všetky). Aj tento
    vizuál sa ešte môže meniť/dolaďovať.
- Breadcrumb rastie o úroveň s každým kliknutím: `Domov > Projekt >
  Podkategória > (zastavenie)`.

Testovací príklad tejto hierarchie je `euroregion-beskydy` v `js/data.js`
(projekt s primárnou kategóriou Mestá, 7 podkategóriami a ich zastaveniami).

## Redakčný systém (Decap CMS) na `/admin`

Webové rozhranie, kde vieš obsah (miesta, zastavenia, kategórie, kontakt,
prípadne aj SEO polia) upravovať bez zásahu do kódu – vhodné aj pre kolegu
bez technického backgroundu. Prihlasuje sa cez GitHub účet a každá uložená
zmena je bežný Git commit priamo do `main` (žiadna databáza, žiadne
schvaľovanie – tak, ako sme sa dohodli). Zmena sa na webe prejaví do minúty
(Vercel ju automaticky nasadí).

**Jednorazové nastavenie (musí urobiť niekto s prístupom ku GitHub aj Vercel
účtu – tento krok neviem urobiť za teba):**

1. **Pridaj kolegu ako spolupracovníka repozitára** na GitHube (repo →
   Settings → Collaborators → Add people) – potrebuje vlastný GitHub účet
   (ak ho nemá, nech si ho zadarmo založí na github.com). Odporúčam mu/jej
   zapnúť dvojfaktorové overenie (2FA) na GitHub účte.
2. **Vytvor GitHub OAuth App:** GitHub → Settings (osobné, nie repo) →
   Developer settings → OAuth Apps → New OAuth App.
   - Application name: napr. `QR LINK CMS`
   - Homepage URL: adresa nasadeného webu (napr. `https://qrlink.vercel.app`)
   - Authorization callback URL: rovnaká adresa + `/api/callback`
     (napr. `https://qrlink.vercel.app/api/callback`)
   - Po vytvorení skopíruj **Client ID** a vygeneruj **Client secret**.
3. **Vo Vercel nastav premenné prostredia** (Project → Settings →
   Environment Variables):
   - `OAUTH_GITHUB_CLIENT_ID` = Client ID z kroku 2
   - `OAUTH_GITHUB_CLIENT_SECRET` = Client secret z kroku 2
   - Po pridaní premenných treba projekt znova nasadiť (Redeploy).
4. **Skontroluj `base_url` v `admin/config.yml`** – musí presne sedieť
   s doménou, na ktorej web beží (bez lomítka na konci). Ak sa doména
   niekedy zmení (napr. na `qrlink.sk`), treba upraviť aj tu, aj v OAuth
   App (krok 2) a znova nasadiť.

**Používanie:** kolega otvorí `https://<doména>/admin`, prihlási sa cez
"Login with GitHub", a uvidí formuláre na editáciu Kategórií, Miest,
Zastavení a Kontaktu. Nahrávanie obrázkov cez CMS ukladá súbory do
`assets/images/uploads/`.

**Bezpečnosť v skratke:** žiadna databáza ani vlastná appka bežiaca na
serveri (mimo dvoch malých funkcií na prihlásenie) = žiadne typické
zraniteľnosti klasického CMS (SQL injection, zraniteľné pluginy a pod.).
Kto môže niečo meniť, určuje výhradne zoznam spolupracovníkov na GitHub
repozitári. Každá zmena je Git commit, teda kedykoľvek vrátiteľná
(`git revert`).

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
Všetky zastavenia), kontakt, mobilná verzia, viacjazyčnosť rozhrania
(SK/EN/CS/HU, prepínač v hlavičke) – obsah zatiaľ preložený len pre
Euroregión Beskydy / Oravský hrad, ostatné miesta majú zatiaľ len slovenský text.
Redakčný systém (Decap CMS) na `/admin`, vrátane voliteľných SEO polí
(titulok/popis/obrázok) na miestach a zastaveniach.

ČAKÁ NA OBSAH: texty/audio/fotky ostatných zastavení z pôvodného webu
(v content/ označené [DOPLNIŤ]), cover fotky miest, preklady ostatných
miest do EN/CS/HU, SEO polia (zatiaľ prázdne – bez nich sa použije bežný
názov/popis/fotka), serverové počítadlo návštev, presmerovania starých
QR adries.

ČAKÁ NA DOKONČENIE (technické, nie na kolegu): jednorazové nastavenie
GitHub OAuth App + premenných prostredia vo Vercel pre `/admin` prihlásenie
– pozri sekciu "Redakčný systém (Decap CMS) na /admin" vyššie.

## Poznámka k vývoju (spolupráca s Claude)

Claude má na všetku prácu na tomto webe (úpravy kódu aj obsahu, testovanie,
inštalácia balíčkov, konfigurácia, ladenie chýb a pod.) trvalé povolenie
konať bez toho, aby sa vopred pýtal – netreba mu nič odsúhlasovať vopred.

Jediné dva kroky, pred ktorými sa musí vždy spýtať a počkať na potvrdenie,
sú:
- `git commit`
- `git push`

/* =====================================================================
   QR LINK – VIACJAZYČNOSŤ (i18n)
   Slovenčina je predvolený/záložný jazyk. Prepínanie jazyka mení
   ?lang= v URL a ukladá voľbu do localStorage; stránka sa po prepnutí
   znova načíta, aby sa prerenderoval celý (statický aj JS) obsah.
   ===================================================================== */

const I18N_LANGS = ["sk", "en", "cs", "hu"];
const I18N_DEFAULT = "sk";
const I18N_STORAGE_KEY = "qrlink-lang";
const I18N_NAMES = { sk: "Slovenčina", en: "English", cs: "Čeština", hu: "Magyar" };

const I18N = {
  sk: {
    nav_map: "Mapa", nav_places: "Miesta", nav_contact: "Kontakt",
    menu_toggle_aria: "Otvoriť menu", logo_home_aria: "ARDSYSTÉM – domov",

    home_hero_line1: "Sprievodca,", home_hero_line2: "ktorý čaká priamo na mieste",
    home_lead: "QR LINK premieňa mestá, hrady a náučné chodníky na príbehy. Naskenujte kód na tabuli a vypočujte si, čo sa tu naozaj stalo – alebo si vyberte miesto na mape a naplánujte výlet vopred.",
    feature1_title: "Audio príbehy", feature1_text: "na každom mieste",
    feature2_title: "Tipy na výlety", feature2_text: "a zaujímavosti",
    feature3_title: "Objavujte Slovensko", feature3_text: "zážitkovou formou",
    map_heading: "Objavujte miesta na mape", search_placeholder: "Hľadať miesto…",
    stat_places_label: "miest na mape", stat_stops_label: "zastavení s príbehmi",
    stat_inspire_title: "Inšpirujte sa", stat_inspire_text: "na váš ďalší výlet",
    places_heading: "Kam sa vyberieme?",
    places_sub: "Objavujte miesta, hrady a náučné chodníky na príbehy po celom Slovensku.",
    show_more: "Zobraziť ďalšie miesta",
    footer_benefit1_title: "Audio príbehy", footer_benefit1_text: "Príbehy rozprávané priamo na mieste, kde sa história stala.",
    footer_benefit2_title: "Tipy na výlety", footer_benefit2_text: "Inšpirácia na výlety a zaujímavé zastávky.",
    footer_benefit3_title: "Objavujte Slovensko", footer_benefit3_text: "Zážitková forma poznávania našich krás.",
    footer_benefit4_title: "QR LINK", footer_benefit4_text: "Digitálny sprievodca - naskenujte, počúvajte, objavujte.",
    footer_copyright: "© ARDSYSTÉM, s.r.o. – Všetky práva vyhradené",
    footer_tagline: "QR LINK – digitálny sprievodca",
    map_popup_close_aria: "Zavrieť", map_popup_view_detail: "Zobraziť detail →",

    crumbs_aria: "Ste tu", crumbs_home: "Domov",
    sibling_nav_aria: "Predchádzajúce a ďalšie miesto",
    not_found_place: "Miesto sa nenašlo",
    primary_category: "Primárna kategória: ", other_categories: "Ďalšie kategórie: ",
    filter_all: "Všetko",
    empty_no_results: "Nenašli sa žiadne miesta.", empty_no_category: "Žiadne miesta pre túto kategóriu.",
    scan_qr: "Naskenujte QR kód",
    discover_places: "Objavte miesta", stops_default_title: "Zastavenia",
    stops_coming_soon: "Zastavenia pre toto miesto budú doplnené.",
    total_label: "spolu", locations_suffix: "lokalít",
    inspiration_title: "inšpirácia", inspiration_text: "na váš výlet",
    audio_title: "Audio", audio_suffix: "sprievodca",
    view_cards: "Karty", view_list: "Zoznam",
    back_to: "Späť na „{name}“", next_place_prefix: "Ďalšie miesto: ",
    history_culture_title: "História a kultúra", history_culture_text: "Hrady, zámky a historické mestá s bohatým príbehom.",
    nature_title: "Príroda", nature_text: "Krásne miesta v srdci Beskýd ideálne na oddych.",
    connects_title: "Spája nás", connects_text: "Objavujte miesta, ktoré spájajú Slovensko a Česko.",
    qr_guide_title: "QR sprievodca", qr_guide_text: "Naskenujte QR kódy a spoznajte miesta ešte lepšie.",

    detail_not_found: "Zastavenie sa nenašlo.", stop_of: "Zastavenie {n} z {total}",
    share: "Zdieľať", open_in_maps: "Otvoriť v Mapách",
    gps_map_title: "Kde sa nachádza toto zastavenie", next_stops_title: "Ďalšie zastavenia na trase",
    prev_stops_aria: "Predchádzajúce zastavenia", next_stops_aria: "Ďalšie zastavenia",
    all_stops: "Všetky zastavenia",
    skip_back_aria: "Späť 10 sekúnd", play_aria: "Prehrať audio", skip_fwd_aria: "Vpred 10 sekúnd",
    volume_aria: "Hlasitosť", download_audio_aria: "Stiahnuť audio",
    gallery_title: "Fotogaléria", prev_photos_aria: "Predchádzajúce fotky", next_photos_aria: "Ďalšie fotky",
    lightbox_aria: "Zväčšená fotografia", close_aria: "Zavrieť", photo_alt: "Fotografia {n}",
    prev_photo_aria: "Predchádzajúca fotografia", next_photo_aria: "Ďalšia fotografia",

    contact_hero_title: "Neváhajte nás kedykoľvek kontaktovať",
    contact_hero_text: "Radi pripravíme QR sprievodcu aj pre vaše mesto, pamiatku alebo náučný chodník.",
    contact_info_title: "Kontaktné údaje", contact_form_title: "Napíšte nám",
    name_placeholder: "Meno a priezvisko *", email_placeholder: "E-mail *", message_placeholder: "Vaša správa *",
    not_robot: "Nie som robot", send_button: "Odoslať správu",
    form_success: "Ďakujeme za správu! Ozveme sa vám čo najskôr.",
    home_contact_title: "Máte otázku alebo záujem o spoluprácu?",
    home_contact_text: "Napíšte nám a radi vám pomôžeme s vaším projektom či sprievodcom.",
    phone_placeholder: "Telefón", consent_label: "Súhlasím so spracovaním údajov *",
    contact_qr_title: "QR sprievodca", contact_qr_text: "Naskenujte QR kód priamo na mieste a spoznajte jeho príbeh.",
    contact_trails_title: "Náučné chodníky", contact_trails_text: "Trasy so zastaveniami pre výlety plné objavovania.",
    contact_furniture_title: "Mestský mobiliár", contact_furniture_text: "Informačné tabule a lavičky s QR kódom v teréne.",
    contact_audio_title: "Audio sprievodca", contact_audio_text: "Vypočujte si príbeh miesta priamo vo vašom telefóne."
  },

  en: {
    nav_map: "Map", nav_places: "Places", nav_contact: "Contact",
    menu_toggle_aria: "Open menu", logo_home_aria: "ARDSYSTÉM – home",

    home_hero_line1: "A guide", home_hero_line2: "waiting right where you stand",
    home_lead: "QR LINK turns towns, castles and nature trails into stories. Scan the code on the sign and listen to what really happened here – or pick a place on the map and plan your trip in advance.",
    feature1_title: "Audio stories", feature1_text: "at every location",
    feature2_title: "Trip tips", feature2_text: "and interesting facts",
    feature3_title: "Discover Slovakia", feature3_text: "through real experiences",
    map_heading: "Discover places on the map", search_placeholder: "Search for a place…",
    stat_places_label: "places on the map", stat_stops_label: "stops with stories",
    stat_inspire_title: "Get inspired", stat_inspire_text: "for your next trip",
    places_heading: "Where shall we go?",
    places_sub: "Discover places, castles and nature trails full of stories across Slovakia.",
    show_more: "Show more places",
    footer_benefit1_title: "Audio stories", footer_benefit1_text: "Stories told right where history happened.",
    footer_benefit2_title: "Trip tips", footer_benefit2_text: "Inspiration for trips and interesting stops.",
    footer_benefit3_title: "Discover Slovakia", footer_benefit3_text: "An experience-based way to explore our beauty.",
    footer_benefit4_title: "QR LINK", footer_benefit4_text: "Digital guide – scan, listen, discover.",
    footer_copyright: "© ARDSYSTÉM, s.r.o. – All rights reserved",
    footer_tagline: "QR LINK – digital guide",
    map_popup_close_aria: "Close", map_popup_view_detail: "View detail →",

    crumbs_aria: "You are here", crumbs_home: "Home",
    sibling_nav_aria: "Previous and next place",
    not_found_place: "Place not found",
    primary_category: "Primary category: ", other_categories: "Other categories: ",
    filter_all: "All",
    empty_no_results: "No places found.", empty_no_category: "No places in this category.",
    scan_qr: "Scan the QR code",
    discover_places: "Discover places", stops_default_title: "Stops",
    stops_coming_soon: "Stops for this place will be added soon.",
    total_label: "total", locations_suffix: "locations",
    inspiration_title: "inspiration", inspiration_text: "for your trip",
    audio_title: "Audio", audio_suffix: "guide",
    view_cards: "Cards", view_list: "List",
    back_to: "Back to “{name}”", next_place_prefix: "Next place: ",
    history_culture_title: "History & culture", history_culture_text: "Castles, chateaux and historic towns full of stories.",
    nature_title: "Nature", nature_text: "Beautiful spots in the heart of the Beskids, perfect for relaxing.",
    connects_title: "What connects us", connects_text: "Discover places that connect Slovakia and Czechia.",
    qr_guide_title: "QR guide", qr_guide_text: "Scan QR codes and get to know the places even better.",

    detail_not_found: "Stop not found.", stop_of: "Stop {n} of {total}",
    share: "Share", open_in_maps: "Open in Maps",
    gps_map_title: "Where this stop is located", next_stops_title: "More stops on the route",
    prev_stops_aria: "Previous stops", next_stops_aria: "Next stops",
    all_stops: "All stops",
    skip_back_aria: "Back 10 seconds", play_aria: "Play audio", skip_fwd_aria: "Forward 10 seconds",
    volume_aria: "Volume", download_audio_aria: "Download audio",
    gallery_title: "Photo gallery", prev_photos_aria: "Previous photos", next_photos_aria: "Next photos",
    lightbox_aria: "Enlarged photo", close_aria: "Close", photo_alt: "Photo {n}",
    prev_photo_aria: "Previous photo", next_photo_aria: "Next photo",

    contact_hero_title: "Feel free to contact us anytime",
    contact_hero_text: "We'll gladly prepare a QR guide for your town, monument or nature trail too.",
    contact_info_title: "Contact details", contact_form_title: "Write to us",
    name_placeholder: "Full name *", email_placeholder: "Email *", message_placeholder: "Your message *",
    not_robot: "I'm not a robot", send_button: "Send message",
    form_success: "Thanks for your message! We'll get back to you as soon as possible.",
    home_contact_title: "Have a question or want to work together?",
    home_contact_text: "Write to us and we'll gladly help with your project or guide.",
    phone_placeholder: "Phone", consent_label: "I agree to the processing of my data *",
    contact_qr_title: "QR guide", contact_qr_text: "Scan the QR code right on site and learn its story.",
    contact_trails_title: "Nature trails", contact_trails_text: "Routes with stops for trips full of discovery.",
    contact_furniture_title: "Urban furniture", contact_furniture_text: "Info boards and benches with QR codes out in the field.",
    contact_audio_title: "Audio guide", contact_audio_text: "Listen to the place's story right on your phone."
  },

  cs: {
    nav_map: "Mapa", nav_places: "Místa", nav_contact: "Kontakt",
    menu_toggle_aria: "Otevřít menu", logo_home_aria: "ARDSYSTÉM – domů",

    home_hero_line1: "Průvodce,", home_hero_line2: "který na vás čeká přímo na místě",
    home_lead: "QR LINK proměňuje města, hrady a naučné stezky v příběhy. Naskenujte kód na tabuli a poslechněte si, co se tu opravdu stalo – nebo si vyberte místo na mapě a naplánujte výlet dopředu.",
    feature1_title: "Audio příběhy", feature1_text: "na každém místě",
    feature2_title: "Tipy na výlety", feature2_text: "a zajímavosti",
    feature3_title: "Objevujte Slovensko", feature3_text: "zážitkovou formou",
    map_heading: "Objevujte místa na mapě", search_placeholder: "Hledat místo…",
    stat_places_label: "míst na mapě", stat_stops_label: "zastavení s příběhy",
    stat_inspire_title: "Inspirujte se", stat_inspire_text: "na váš další výlet",
    places_heading: "Kam se vydáme?",
    places_sub: "Objevujte místa, hrady a naučné stezky s příběhy po celém Slovensku.",
    show_more: "Zobrazit další místa",
    footer_benefit1_title: "Audio příběhy", footer_benefit1_text: "Příběhy vyprávěné přímo na místě, kde se historie odehrála.",
    footer_benefit2_title: "Tipy na výlety", footer_benefit2_text: "Inspirace na výlety a zajímavé zastávky.",
    footer_benefit3_title: "Objevujte Slovensko", footer_benefit3_text: "Zážitková forma poznávání našich krás.",
    footer_benefit4_title: "QR LINK", footer_benefit4_text: "Digitální průvodce – naskenujte, poslouchejte, objevujte.",
    footer_copyright: "© ARDSYSTÉM, s.r.o. – Všechna práva vyhrazena",
    footer_tagline: "QR LINK – digitální průvodce",
    map_popup_close_aria: "Zavřít", map_popup_view_detail: "Zobrazit detail →",

    crumbs_aria: "Jste tady", crumbs_home: "Domů",
    sibling_nav_aria: "Předchozí a další místo",
    not_found_place: "Místo nebylo nalezeno",
    primary_category: "Primární kategorie: ", other_categories: "Další kategorie: ",
    filter_all: "Vše",
    empty_no_results: "Nebyla nalezena žádná místa.", empty_no_category: "Žádná místa pro tuto kategorii.",
    scan_qr: "Naskenujte QR kód",
    discover_places: "Objevte místa", stops_default_title: "Zastavení",
    stops_coming_soon: "Zastavení pro toto místo budou brzy doplněna.",
    total_label: "celkem", locations_suffix: "lokalit",
    inspiration_title: "inspirace", inspiration_text: "na váš výlet",
    audio_title: "Audio", audio_suffix: "průvodce",
    view_cards: "Karty", view_list: "Seznam",
    back_to: "Zpět na „{name}“", next_place_prefix: "Další místo: ",
    history_culture_title: "Historie a kultura", history_culture_text: "Hrady, zámky a historická města s bohatým příběhem.",
    nature_title: "Příroda", nature_text: "Krásná místa v srdci Beskyd ideální na odpočinek.",
    connects_title: "Spojuje nás", connects_text: "Objevujte místa, která spojují Slovensko a Česko.",
    qr_guide_title: "QR průvodce", qr_guide_text: "Naskenujte QR kódy a poznejte místa ještě lépe.",

    detail_not_found: "Zastavení nebylo nalezeno.", stop_of: "Zastavení {n} z {total}",
    share: "Sdílet", open_in_maps: "Otevřít v Mapách",
    gps_map_title: "Kde se nachází toto zastavení", next_stops_title: "Další zastavení na trase",
    prev_stops_aria: "Předchozí zastavení", next_stops_aria: "Další zastavení",
    all_stops: "Všechna zastavení",
    skip_back_aria: "Zpět 10 sekund", play_aria: "Přehrát audio", skip_fwd_aria: "Vpřed 10 sekund",
    volume_aria: "Hlasitost", download_audio_aria: "Stáhnout audio",
    gallery_title: "Fotogalerie", prev_photos_aria: "Předchozí fotky", next_photos_aria: "Další fotky",
    lightbox_aria: "Zvětšená fotografie", close_aria: "Zavřít", photo_alt: "Fotografie {n}",
    prev_photo_aria: "Předchozí fotografie", next_photo_aria: "Další fotografie",

    contact_hero_title: "Neváhejte nás kdykoliv kontaktovat",
    contact_hero_text: "Rádi připravíme QR průvodce i pro vaše město, památku nebo naučnou stezku.",
    contact_info_title: "Kontaktní údaje", contact_form_title: "Napište nám",
    name_placeholder: "Jméno a příjmení *", email_placeholder: "E-mail *", message_placeholder: "Vaše zpráva *",
    not_robot: "Nejsem robot", send_button: "Odeslat zprávu",
    form_success: "Děkujeme za zprávu! Ozveme se vám co nejdříve.",
    home_contact_title: "Máte otázku nebo zájem o spolupráci?",
    home_contact_text: "Napište nám a rádi vám pomůžeme s vaším projektem či průvodcem.",
    phone_placeholder: "Telefon", consent_label: "Souhlasím se zpracováním údajů *",
    contact_qr_title: "QR průvodce", contact_qr_text: "Naskenujte QR kód přímo na místě a poznejte jeho příběh.",
    contact_trails_title: "Naučné stezky", contact_trails_text: "Trasy se zastaveními pro výlety plné objevování.",
    contact_furniture_title: "Městský mobiliář", contact_furniture_text: "Informační tabule a lavičky s QR kódem v terénu.",
    contact_audio_title: "Audio průvodce", contact_audio_text: "Poslechněte si příběh místa přímo ve svém telefonu."
  },

  hu: {
    nav_map: "Térkép", nav_places: "Helyszínek", nav_contact: "Kapcsolat",
    menu_toggle_aria: "Menü megnyitása", logo_home_aria: "ARDSYSTÉM – kezdőlap",

    home_hero_line1: "Egy útikalauz,", home_hero_line2: "amely magán a helyszínen vár rád",
    home_lead: "A QR LINK történetekké varázsolja a városokat, várakat és tanösvényeket. Olvassa be a táblán lévő kódot, és hallgassa meg, mi történt itt valójában – vagy válasszon helyszínt a térképen, és tervezze meg kirándulását előre.",
    feature1_title: "Hangos történetek", feature1_text: "minden helyszínen",
    feature2_title: "Kirándulási tippek", feature2_text: "és érdekességek",
    feature3_title: "Fedezze fel Szlovákiát", feature3_text: "élményszerű formában",
    map_heading: "Fedezze fel a helyszíneket a térképen", search_placeholder: "Helyszín keresése…",
    stat_places_label: "helyszín a térképen", stat_stops_label: "megálló történettel",
    stat_inspire_title: "Merítsen ihletet", stat_inspire_text: "a következő kirándulásához",
    places_heading: "Hová induljunk?",
    places_sub: "Fedezzen fel helyszíneket, várakat és tanösvényeket tele történetekkel Szlovákia-szerte.",
    show_more: "További helyszínek megjelenítése",
    footer_benefit1_title: "Hangos történetek", footer_benefit1_text: "Történetek, amelyeket ott mesélünk el, ahol megtörténtek.",
    footer_benefit2_title: "Kirándulási tippek", footer_benefit2_text: "Ötletek kirándulásokhoz és érdekes megállókhoz.",
    footer_benefit3_title: "Fedezze fel Szlovákiát", footer_benefit3_text: "Élményalapú módja hazánk szépségeinek felfedezésének.",
    footer_benefit4_title: "QR LINK", footer_benefit4_text: "Digitális útikalauz – olvassa be, hallgassa, fedezze fel.",
    footer_copyright: "© ARDSYSTÉM, s.r.o. – Minden jog fenntartva",
    footer_tagline: "QR LINK – digitális útikalauz",
    map_popup_close_aria: "Bezárás", map_popup_view_detail: "Részletek →",

    crumbs_aria: "Ön itt jár", crumbs_home: "Kezdőlap",
    sibling_nav_aria: "Előző és következő helyszín",
    not_found_place: "A helyszín nem található",
    primary_category: "Elsődleges kategória: ", other_categories: "További kategóriák: ",
    filter_all: "Összes",
    empty_no_results: "Nem található helyszín.", empty_no_category: "Nincs helyszín ebben a kategóriában.",
    scan_qr: "Olvassa be a QR-kódot",
    discover_places: "Fedezze fel a helyszíneket", stops_default_title: "Megállók",
    stops_coming_soon: "A helyszín megállói hamarosan érkeznek.",
    total_label: "összesen", locations_suffix: "helyszín",
    inspiration_title: "inspiráció", inspiration_text: "a kirándulásához",
    audio_title: "Hang", audio_suffix: "kalauz",
    view_cards: "Kártyák", view_list: "Lista",
    back_to: "Vissza: „{name}”", next_place_prefix: "Következő helyszín: ",
    history_culture_title: "Történelem és kultúra", history_culture_text: "Várak, kastélyok és történelmi városok gazdag történettel.",
    nature_title: "Természet", nature_text: "Csodálatos helyek a Beszkidek szívében, tökéletes pihenésre.",
    connects_title: "Ami összeköt minket", connects_text: "Fedezze fel a Szlovákiát és Csehországot összekötő helyszíneket.",
    qr_guide_title: "QR-kalauz", qr_guide_text: "Olvassa be a QR-kódokat, és ismerje meg jobban a helyszíneket.",

    detail_not_found: "A megálló nem található.", stop_of: "{n}. / {total} megálló",
    share: "Megosztás", open_in_maps: "Megnyitás térképen",
    gps_map_title: "Hol található ez a megálló", next_stops_title: "További megállók az útvonalon",
    prev_stops_aria: "Előző megállók", next_stops_aria: "Következő megállók",
    all_stops: "Összes megálló",
    skip_back_aria: "Vissza 10 másodpercet", play_aria: "Hanganyag lejátszása", skip_fwd_aria: "Előre 10 másodpercet",
    volume_aria: "Hangerő", download_audio_aria: "Hanganyag letöltése",
    gallery_title: "Fotógaléria", prev_photos_aria: "Előző fotók", next_photos_aria: "Következő fotók",
    lightbox_aria: "Nagyított fotó", close_aria: "Bezárás", photo_alt: "Fotó {n}",
    prev_photo_aria: "Előző fotó", next_photo_aria: "Következő fotó",

    contact_hero_title: "Bátran keressen minket bármikor",
    contact_hero_text: "Szívesen elkészítjük a QR-kalauzt az Ön városához, műemlékéhez vagy tanösvényéhez is.",
    contact_info_title: "Elérhetőségek", contact_form_title: "Írjon nekünk",
    name_placeholder: "Teljes név *", email_placeholder: "E-mail *", message_placeholder: "Az Ön üzenete *",
    not_robot: "Nem vagyok robot", send_button: "Üzenet küldése",
    form_success: "Köszönjük az üzenetét! Hamarosan jelentkezünk.",
    home_contact_title: "Kérdése van, vagy együttműködne velünk?",
    home_contact_text: "Írjon nekünk, szívesen segítünk projektjében vagy kalauzában.",
    phone_placeholder: "Telefon", consent_label: "Hozzájárulok adataim kezeléséhez *",
    contact_qr_title: "QR-kalauz", contact_qr_text: "Olvassa be a QR-kódot a helyszínen, és ismerje meg a történetét.",
    contact_trails_title: "Tanösvények", contact_trails_text: "Megállókkal teli útvonalak a felfedezéssel teli kirándulásokhoz.",
    contact_furniture_title: "Utcabútorok", contact_furniture_text: "Információs táblák és padok QR-kóddal a terepen.",
    contact_audio_title: "Hangos kalauz", contact_audio_text: "Hallgassa meg a helyszín történetét közvetlenül a telefonján."
  }
};

function getLang() {
  const fromQuery = new URLSearchParams(location.search).get("lang");
  if (fromQuery && I18N_LANGS.includes(fromQuery)) {
    localStorage.setItem(I18N_STORAGE_KEY, fromQuery);
    return fromQuery;
  }
  const stored = localStorage.getItem(I18N_STORAGE_KEY);
  if (stored && I18N_LANGS.includes(stored)) return stored;
  return I18N_DEFAULT;
}

function setLang(lang) {
  if (!I18N_LANGS.includes(lang)) return;
  localStorage.setItem(I18N_STORAGE_KEY, lang);
  const url = new URL(location.href);
  if (lang === I18N_DEFAULT) url.searchParams.delete("lang");
  else url.searchParams.set("lang", lang);
  location.href = url.toString();
}

/* preklad UI reťazca podľa kľúča; {vars} sa dosadia do šablóny ako {meno} */
function t(key, vars) {
  const lang = getLang();
  let str = (I18N[lang] && I18N[lang][key]) ?? I18N[I18N_DEFAULT][key] ?? key;
  if (vars) Object.keys(vars).forEach(k => { str = str.split(`{${k}}`).join(vars[k]); });
  return str;
}

/* obsahové polia (nazov/popis/text...) – ak existuje preklad pre aktuálny jazyk, použije sa,
   inak spadne späť na slovenský default priamo v zázname */
function tc(obj, field) {
  if (!obj) return "";
  const lang = getLang();
  if (lang !== I18N_DEFAULT && obj.i18n && obj.i18n[lang] && obj.i18n[lang][field] != null) {
    return obj.i18n[lang][field];
  }
  return obj[field];
}

/* skloňovanie počtu zastavení podľa jazyka (SK/CS majú 3 tvary, HU sa po číslovke neskloňuje) */
function tStops(n) {
  const lang = getLang();
  if (lang === "en") return n === 1 ? "stop" : "stops";
  if (lang === "hu") return "megálló";
  if (lang === "cs") return "zastavení";
  if (n === 1) return "zastavenie";
  if (n >= 2 && n <= 4) return "zastavenia";
  return "zastavení";
}

function tVisits(n) {
  const lang = getLang();
  if (lang === "en") return n === 1 ? "1 visit" : `${n} visits`;
  if (lang === "hu") return `${n} megtekintés`;
  if (lang === "cs") return n === 1 ? "1 návštěva" : `${n} návštěv`;
  return n === 1 ? "1 návšteva" : `${n} návštev`;
}

/* naplní statický HTML text pomocou atribútu data-i18n (+ voliteľne data-i18n-attr) */
function applyStaticI18n(scope) {
  const root = scope || document;
  root.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    const attr = el.dataset.i18nAttr;
    const val = t(key);
    if (attr) el.setAttribute(attr, val);
    else el.textContent = val;
  });
}

function renderLangSwitch() {
  const cur = getLang();
  document.querySelectorAll(".lang-switch").forEach(host => {
    host.innerHTML = `
      <button type="button" class="lang-current" aria-haspopup="true" aria-expanded="false">
        ${cur.toUpperCase()}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6l6 -6"/></svg>
      </button>
      <div class="lang-menu">
        ${I18N_LANGS.map(l =>
          `<button type="button" class="lang-btn${l === cur ? " active" : ""}" data-lang="${l}">
            <span class="lang-badge">${l.toUpperCase()}</span>
            <span class="lang-name">${I18N_NAMES[l]}</span>
          </button>`
        ).join("")}
      </div>`;

    const toggle = host.querySelector(".lang-current");
    const menu = host.querySelector(".lang-menu");
    toggle.addEventListener("click", e => {
      e.stopPropagation();
      const open = host.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    host.querySelectorAll(".lang-btn").forEach(b =>
      b.addEventListener("click", () => setLang(b.dataset.lang)));
  });

  document.addEventListener("click", () => {
    document.querySelectorAll(".lang-switch.open").forEach(host => {
      host.classList.remove("open");
      host.querySelector(".lang-current").setAttribute("aria-expanded", "false");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.lang = getLang();
  applyStaticI18n();
  renderLangSwitch();
});

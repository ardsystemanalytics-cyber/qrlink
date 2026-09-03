/* =====================================================================
   QR LINK – DATOVÝ SÚBOR (AUTOMATICKY VYGENEROVANÝ)
   =====================================================================
   Tento súbor sa negeneruje ručne! Vygeneroval ho scripts/build-data.js
   z obsahu v priečinku content/ (ten istý obsah, ktorý edituje Decap CMS
   na /admin). Ak potrebuješ zmeniť obsah, uprav súbory v content/ –
   ideálne cez /admin rozhranie – a nie priamo tento súbor, zmeny by sa
   pri ďalšom nasadení prepísali.
   ===================================================================== */

// Fotky miest bez vlastnej fotky (systémové dáta, spravuje sa mimo CMS)
const PLACE_PHOTOS = {
  "bratislava-ivanka": "assets/images/places/bratislava-ivanka.jpg",
  "betliar": "assets/images/places/betliar.jpg",
  "euroregion-beskydy": "assets/images/places/euroregion-beskydy.jpg",
  "frydlant": "assets/images/places/frydlant.jpg",
  "kraj-rusinov": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  "knm": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80",
  "porabka": "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
  "presov": "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=800&q=80",
  "roznov": "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80",
  "ruzomberok": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  "sokolovce": "https://images.unsplash.com/photo-1599598425947-5202edd56bdb?w=800&q=80",
  "trebisov": "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=800&q=80",
  "turzovka": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
  "vranov": "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=800&q=80",
  "hrad-strecno": "https://www.qrlink.sk/new/wp-content/uploads/2020/06/1-paseka-e1592570206493.jpg",
  "cierne-klacany": "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80",
  "klenoty-pohranicie": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
  "cestovatelsky-dennik": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  "nch-pohranicie": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
  "nch-hlinene": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
  "nch-zivcakova": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
  "gabcikovo": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  "zvonica-hrusove": "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80"
};

// SVG ikonky kategórií (systémové dáta, spravuje sa mimo CMS)
const KAT_ICONS = {
  "mesta": "<rect x=\"3\" y=\"10\" width=\"18\" height=\"11\" rx=\"1\"/><path d=\"M7 10V7a5 5 0 0 1 10 0v3\"/><line x1=\"12\" y1=\"14\" x2=\"12\" y2=\"17\"/><rect x=\"9\" y=\"14\" width=\"6\" height=\"7\" rx=\"1\"/>",
  "pamiatky": "<path d=\"M6 7h12M4 11h16M2 15h20\"/><rect x=\"5\" y=\"15\" width=\"3\" height=\"6\"/><rect x=\"10.5\" y=\"15\" width=\"3\" height=\"6\"/><rect x=\"16\" y=\"15\" width=\"3\" height=\"6\"/><path d=\"M3 21h18\"/>",
  "chodniky": "<path d=\"M3 20c3-3 6-5 9-5s6 2 9 5\"/><circle cx=\"8\" cy=\"10\" r=\"2\"/><path d=\"M8 8V5M5 11l3-1 3 1\"/>",
  "enviro": "<path d=\"M12 22V12\"/><path d=\"M12 12C12 7 7 4 3 6c0 4 3 7 9 6\"/><path d=\"M12 12c0-5 5-8 9-6-1 4-4 7-9 6\"/>",
  "pohranicie": "<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M3 12h18\"/><path d=\"M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18\"/>"
};

const DB = {
  "kategorie": [
    {
      "id": "mesta",
      "nazov": "Mestá",
      "farba": "#4E7FAE",
      "i18n": {
        "en": {
          "nazov": "Towns"
        },
        "cs": {
          "nazov": "Města"
        },
        "hu": {
          "nazov": "Városok"
        }
      }
    },
    {
      "id": "pamiatky",
      "nazov": "Pamiatky",
      "farba": "#C34A3A",
      "i18n": {
        "en": {
          "nazov": "Monuments"
        },
        "cs": {
          "nazov": "Památky"
        },
        "hu": {
          "nazov": "Műemlékek"
        }
      }
    },
    {
      "id": "chodniky",
      "nazov": "Náučné chodníky",
      "farba": "#D9A441",
      "i18n": {
        "en": {
          "nazov": "Nature trails"
        },
        "cs": {
          "nazov": "Naučné stezky"
        },
        "hu": {
          "nazov": "Tanösvények"
        }
      }
    },
    {
      "id": "enviro",
      "nazov": "Environmentálna výchova a vzdelávanie",
      "farba": "#41a579",
      "i18n": {
        "en": {
          "nazov": "Environmental education"
        },
        "cs": {
          "nazov": "Environmentální výchova a vzdělávání"
        },
        "hu": {
          "nazov": "Környezeti nevelés és oktatás"
        }
      }
    },
    {
      "id": "pohranicie",
      "nazov": "Česko-slovenské pohraničie",
      "farba": "#7A5C8C",
      "i18n": {
        "en": {
          "nazov": "Czech-Slovak borderland"
        },
        "cs": {
          "nazov": "Česko-slovenské pohraničí"
        },
        "hu": {
          "nazov": "Cseh-szlovák határvidék"
        }
      }
    }
  ],
  "miesta": [
    {
      "id": "hrad-strecno",
      "nazov": "Hrad Strečno",
      "primarna": "pamiatky",
      "kategorie": [
        "pamiatky"
      ],
      "lon": 18.864,
      "lat": 49.177,
      "mapX": 354,
      "mapY": 120,
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2020/06/1-paseka-e1592570206493.jpg",
      "popis": "Stredoveký hrad nad Váhom – 14 zastavení s audio sprievodcom.",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/category/kategorie-kulturnych-historickych-a-prirodnych-pamiatok/hrad-strecno/",
        "en": "https://www.qrlink.sk/new/en/category/kategorie-kulturnych-historickych-a-prirodnych-pamiatok/hrad-strecno/",
        "de": "https://www.qrlink.sk/new/de/category/kategorie-kulturnych-historickych-a-prirodnych-pamiatok/hrad-strecno/",
        "ru": "https://www.qrlink.sk/new/ru/category/kategorie-kulturnych-historickych-a-prirodnych-pamiatok/hrad-strecno/",
        "pl": "https://www.qrlink.sk/new/pl/category/kategorie-kulturnych-historickych-a-prirodnych-pamiatok/hrad-strecno/",
        "hu": "https://www.qrlink.sk/new/hu/category/kategorie-kulturnych-historickych-a-prirodnych-pamiatok/hrad-strecno/"
      }
    },
    {
      "id": "turzovka-mesto",
      "rodic": "turzovka",
      "nazov": "Turzovka – mestské pamiatky a zaujímavosti",
      "popis": "Ostatné pamätihodnosti a zaujímavosti priamo v meste Turzovka."
    },
    {
      "id": "betliar-info-pointy",
      "rodic": "betliar",
      "nazov": "Pamätihodnosti obce Betliar",
      "popis": "Prehliadková trasa po pamätihodnostiach priamo v obci Betliar.",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/category/betliar/info-pointy/",
        "en": "https://www.qrlink.sk/new/en/category/betliar/info-pointy/",
        "de": "https://www.qrlink.sk/new/de/category/betliar/info-pointy/",
        "ru": "https://www.qrlink.sk/new/ru/category/betliar/info-pointy/",
        "pl": "https://www.qrlink.sk/new/pl/category/betliar/info-pointy/",
        "hu": "https://www.qrlink.sk/new/hu/category/betliar/info-pointy/"
      }
    },
    {
      "id": "betliar-info-strom-architektura",
      "rodic": "betliar-info-strom",
      "nazov": "Architektúra",
      "popis": "Architektonické prvky anglického parku pri kaštieli Andrássyovcov.",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/category/betliar/info-strom/architektura/",
        "en": "https://www.qrlink.sk/new/en/category/betliar/info-strom/architektura/",
        "de": "https://www.qrlink.sk/new/de/category/betliar/info-strom/architektura/",
        "ru": "https://www.qrlink.sk/new/ru/category/betliar/info-strom/architektura/",
        "pl": "https://www.qrlink.sk/new/pl/category/betliar/info-strom/architektura/",
        "hu": "https://www.qrlink.sk/new/hu/category/betliar/info-strom/architektura/"
      }
    },
    {
      "id": "bratislava-ivanka",
      "nazov": "Ivanka pri Dunaji",
      "primarna": "mesta",
      "kategorie": [
        "mesta"
      ],
      "lon": 17.252,
      "lat": 48.175,
      "mapX": 73,
      "mapY": 393,
      "cover": "",
      "popis": "Obec pri Bratislave s bohatou históriou."
    },
    {
      "id": "turzovka-pamatniky",
      "rodic": "turzovka",
      "nazov": "Pamätníky v Turzovke",
      "popis": "Pamätníky a pamätné miesta v Turzovke.",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/category/turzovka/pamatniky-v-turzovke/",
        "en": "https://www.qrlink.sk/new/en/category/turzovka/pamatniky-v-turzovke/",
        "de": "https://www.qrlink.sk/new/de/category/turzovka/pamatniky-v-turzovke/",
        "ru": "https://www.qrlink.sk/new/ru/category/turzovka/pamatniky-v-turzovke/",
        "pl": "https://www.qrlink.sk/new/pl/category/turzovka/pamatniky-v-turzovke/",
        "hu": "https://www.qrlink.sk/new/hu/category/turzovka/pamatniky-v-turzovke/"
      }
    },
    {
      "id": "betliar-info-strom-fauna-flora",
      "rodic": "betliar-info-strom",
      "nazov": "Fauna a flóra",
      "popis": "Fauna a flóra anglického parku pri kaštieli Andrássyovcov.",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/category/betliar/info-strom/flora/",
        "en": "https://www.qrlink.sk/new/en/category/betliar/info-strom/flora/",
        "de": "https://www.qrlink.sk/new/de/category/betliar/info-strom/flora/",
        "ru": "https://www.qrlink.sk/new/ru/category/betliar/info-strom/flora/",
        "pl": "https://www.qrlink.sk/new/pl/category/betliar/info-strom/flora/",
        "hu": "https://www.qrlink.sk/new/hu/category/betliar/info-strom/flora/"
      }
    },
    {
      "id": "betliar-info-strom",
      "rodic": "betliar",
      "nazov": "Anglický park pri kaštieli Andrássyovcov",
      "popis": "Náučná trasa anglickým parkom – fauna, flóra a architektúra.",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/category/betliar/info-strom/",
        "en": "https://www.qrlink.sk/new/en/category/betliar/info-strom/",
        "de": "https://www.qrlink.sk/new/de/category/betliar/info-strom/",
        "ru": "https://www.qrlink.sk/new/ru/category/betliar/info-strom/",
        "pl": "https://www.qrlink.sk/new/pl/category/betliar/info-strom/",
        "hu": "https://www.qrlink.sk/new/hu/category/betliar/info-strom/"
      }
    },
    {
      "id": "ivanka-uroven-1",
      "rodic": "bratislava-ivanka",
      "nazov": "Úroveň 1 – testovacia podkategória",
      "popis": "Testovacia podkategória bez zastavení, 1. úroveň vnorenia."
    },
    {
      "id": "turzovka-sakralne-pamiatky",
      "rodic": "turzovka",
      "nazov": "Sakrálne pamiatky",
      "popis": "Kostoly a kaplnky v Turzovke a okolí.",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/category/turzovka/sakralne-pamiatky/",
        "en": "https://www.qrlink.sk/new/en/category/turzovka/sakralne-pamiatky/",
        "de": "https://www.qrlink.sk/new/de/category/turzovka/sakralne-pamiatky/",
        "ru": "https://www.qrlink.sk/new/ru/category/turzovka/sakralne-pamiatky/",
        "pl": "https://www.qrlink.sk/new/pl/category/turzovka/sakralne-pamiatky/",
        "hu": "https://www.qrlink.sk/new/hu/category/turzovka/sakralne-pamiatky/"
      }
    },
    {
      "id": "ivanka-uroven-2",
      "rodic": "ivanka-uroven-1",
      "nazov": "Úroveň 2 – testovacia podkategória",
      "popis": "Testovacia podkategória bez zastavení, 2. úroveň vnorenia."
    },
    {
      "id": "ivanka-uroven-3",
      "rodic": "ivanka-uroven-2",
      "nazov": "Úroveň 3 – testovacia podkategória",
      "popis": "Testovacia podkategória bez zastavení, 3. úroveň vnorenia."
    },
    {
      "id": "ivanka-uroven-4",
      "rodic": "ivanka-uroven-3",
      "nazov": "Úroveň 4 – so zastaveniami",
      "popis": "Testovacia podkategória, ktorá už obsahuje priamo zastavenia (posledná/listová úroveň)."
    },
    {
      "id": "betliar",
      "nazov": "Betliar",
      "primarna": "mesta",
      "kategorie": [
        "mesta",
        "pamiatky"
      ],
      "lon": 20.474,
      "lat": 48.695,
      "mapX": 641,
      "mapY": 252,
      "cover": "",
      "popis": "Obec známa kaštieľom rodu Andrássyovcov.",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/category/betliar/",
        "en": "https://www.qrlink.sk/new/en/category/betliar/",
        "de": "https://www.qrlink.sk/new/de/category/betliar/",
        "ru": "https://www.qrlink.sk/new/ru/category/betliar/",
        "pl": "https://www.qrlink.sk/new/pl/category/betliar/",
        "hu": "https://www.qrlink.sk/new/hu/category/betliar/"
      }
    },
    {
      "id": "euroregion-beskydy",
      "nazov": "Euroregión Beskydy",
      "primarna": "mesta",
      "kategorie": [
        "mesta",
        "pohranicie"
      ],
      "lon": 18.5,
      "lat": 49.38,
      "mapX": 330,
      "mapY": 30,
      "cover": "",
      "popis": "Objavujte výnimočné miesta na slovensko-českom pohraničí – mestá, hrady, prírodné krásy aj kultúrne dedičstvo, ktoré spája dva národy.",
      "heroOverlay": {
        "icon": "stromy",
        "text": "Pohraničie plné zážitkov",
        "popis": "Od hradov a historických miest po prírodu a oddych.",
        "i18n": {
          "en": {
            "text": "A borderland full of experiences",
            "popis": "From castles and historic sites to nature and relaxation."
          },
          "cs": {
            "text": "Pohraničí plné zážitků",
            "popis": "Od hradů a historických míst po přírodu a odpočinek."
          },
          "hu": {
            "text": "Élményekkel teli határvidék",
            "popis": "Váraktól és történelmi helyszínektől a természetig és a pihenésig."
          }
        }
      },
      "i18n": {
        "en": {
          "nazov": "Beskydy Euroregion",
          "popis": "Discover exceptional places on the Slovak-Czech border – towns, castles, natural beauty and cultural heritage that connects two nations."
        },
        "cs": {
          "nazov": "Euroregion Beskydy",
          "popis": "Objevujte výjimečná místa na slovensko-českém pohraničí – města, hrady, přírodní krásy i kulturní dědictví, které spojuje dva národy."
        },
        "hu": {
          "nazov": "Beszkidek Eurorégió",
          "popis": "Fedezze fel a szlovák–cseh határvidék kivételes helyszíneit – városokat, várakat, természeti szépségeket és a két nemzetet összekötő kulturális örökséget."
        }
      }
    },
    {
      "id": "eb-oravsky-hrad",
      "rodic": "euroregion-beskydy",
      "nazov": "Oravský hrad",
      "foto": "assets/images/places/oravsky-hrad-hero.jpg",
      "popis": "Majestátny hrad týčiaci sa na brale nad riekou Orava patrí k najkrajším hradom Slovenska.",
      "heroOverlay": {
        "icon": "hrad",
        "text": "Zaujímavosť",
        "popis": "Hrad stoji na brale vysokom 112 m nad riekou Orava.",
        "i18n": {
          "en": {
            "text": "Did you know?",
            "popis": "The castle stands on a cliff 112 m above the Orava river."
          },
          "cs": {
            "text": "Zajímavost",
            "popis": "Hrad stojí na skále vysoké 112 m nad řekou Orava."
          },
          "hu": {
            "text": "Érdekesség",
            "popis": "A vár egy 112 méter magas sziklán áll az Orava folyó felett."
          }
        }
      },
      "i18n": {
        "en": {
          "nazov": "Orava Castle",
          "popis": "A majestic castle towering on a cliff above the Orava river ranks among the most beautiful castles in Slovakia."
        },
        "cs": {
          "nazov": "Oravský hrad",
          "popis": "Majestátní hrad tyčící se na skále nad řekou Orava patří k nejkrásnějším hradům Slovenska."
        },
        "hu": {
          "nazov": "Árva vára",
          "popis": "Az Orava folyó fölötti sziklán magasodó fenséges vár Szlovákia egyik legszebb vára."
        }
      }
    },
    {
      "id": "eb-klin",
      "rodic": "euroregion-beskydy",
      "nazov": "Klin",
      "popis": "Podhorská obec pod Veľkou Račou, brána do Kysuckých Beskýd."
    },
    {
      "id": "eb-hrad-strecno",
      "rodic": "euroregion-beskydy",
      "nazov": "Hrad Strečno",
      "foto": "https://www.qrlink.sk/new/wp-content/uploads/2020/06/1-paseka-e1592570206493.jpg",
      "popis": "Stredoveký hrad nad Váhom – samostatná podkapitola v rámci Euroregiónu Beskydy."
    },
    {
      "id": "eb-plte-na-vahu",
      "rodic": "euroregion-beskydy",
      "nazov": "Plte na Váhu",
      "popis": "Tradičné pltníctvo – plavba na drevených pltiach po rieke Váh."
    },
    {
      "id": "eb-cadca",
      "rodic": "euroregion-beskydy",
      "nazov": "Čadca",
      "foto": "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80",
      "popis": "Srdce Kysúc a brána do Beskýd."
    },
    {
      "id": "eb-velka-raca",
      "rodic": "euroregion-beskydy",
      "nazov": "Veľká Rača",
      "foto": "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&q=80",
      "popis": "Najvyšší vrch Kysuckých Beskýd s panoramatickými výhľadmi."
    },
    {
      "id": "eb-rozhliadka-dedovka",
      "rodic": "euroregion-beskydy",
      "nazov": "Rozhliadňa Dedovka",
      "popis": "Vyhliadková veža s výhľadom na Kysuce, Beskydy aj Poľsko."
    },
    {
      "id": "frydlant",
      "nazov": "Frýdlant",
      "primarna": "mesta",
      "kategorie": [
        "mesta",
        "pohranicie"
      ],
      "lon": 15.082,
      "lat": 50.921,
      "mapX": 266,
      "mapY": 6,
      "cover": "",
      "popis": "Mesto na česko-slovenskom pohraničí.",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/category/frydlant/",
        "en": "https://www.qrlink.sk/new/en/category/frydlant/",
        "de": "https://www.qrlink.sk/new/de/category/frydlant/",
        "ru": "https://www.qrlink.sk/new/ru/category/frydlant/",
        "pl": "https://www.qrlink.sk/new/pl/category/frydlant/",
        "hu": "https://www.qrlink.sk/new/hu/category/frydlant/"
      }
    },
    {
      "id": "kraj-rusinov",
      "nazov": "Kraj Rusínov a Andyho Warhola",
      "primarna": "mesta",
      "kategorie": [
        "mesta"
      ],
      "lon": 21.901,
      "lat": 49.271,
      "mapX": 883,
      "mapY": 94,
      "cover": "",
      "popis": "Región Medzilaboriec spätý s rusínskou kultúrou a rodinou Andyho Warhola.",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/category/kraj-rusinov-a-andyho-warhola/",
        "en": "https://www.qrlink.sk/new/en/category/kraj-rusinov-a-andyho-warhola/",
        "de": "https://www.qrlink.sk/new/de/category/kraj-rusinov-a-andyho-warhola/",
        "ru": "https://www.qrlink.sk/new/ru/category/kraj-rusinov-a-andyho-warhola/",
        "pl": "https://www.qrlink.sk/new/pl/category/kraj-rusinov-a-andyho-warhola/",
        "hu": "https://www.qrlink.sk/new/hu/category/kraj-rusinov-a-andyho-warhola/"
      }
    },
    {
      "id": "knm",
      "nazov": "Kysucké Nové Mesto",
      "primarna": "mesta",
      "kategorie": [
        "mesta"
      ],
      "lon": 18.777,
      "lat": 49.3,
      "mapX": 341,
      "mapY": 86,
      "cover": "",
      "popis": "Mesto na Kysuciach.",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/category/knm/",
        "en": "https://www.qrlink.sk/new/en/category/knm/",
        "de": "https://www.qrlink.sk/new/de/category/knm/",
        "ru": "https://www.qrlink.sk/new/ru/category/knm/",
        "pl": "https://www.qrlink.sk/new/pl/category/knm/",
        "hu": "https://www.qrlink.sk/new/hu/category/knm/"
      }
    },
    {
      "id": "porabka",
      "nazov": "Porąbka",
      "primarna": "mesta",
      "kategorie": [
        "mesta",
        "pohranicie"
      ],
      "lon": 19.07,
      "lat": 49.742,
      "mapX": 413,
      "mapY": 8,
      "cover": "",
      "popis": "Poľská obec v Beskydách.",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/category/porabka/",
        "en": "https://www.qrlink.sk/new/en/category/porabka/",
        "de": "https://www.qrlink.sk/new/de/category/porabka/",
        "ru": "https://www.qrlink.sk/new/ru/category/porabka/",
        "pl": "https://www.qrlink.sk/new/pl/category/porabka/",
        "hu": "https://www.qrlink.sk/new/hu/category/porabka/"
      }
    },
    {
      "id": "presov",
      "nazov": "Prešov",
      "primarna": "mesta",
      "kategorie": [
        "mesta"
      ],
      "lon": 21.239,
      "lat": 48.999,
      "mapX": 768,
      "mapY": 169,
      "cover": "",
      "popis": "Metropola Šariša s historickým centrom.",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/category/presov/",
        "en": "https://www.qrlink.sk/new/en/category/presov/",
        "de": "https://www.qrlink.sk/new/de/category/presov/",
        "ru": "https://www.qrlink.sk/new/ru/category/presov/",
        "pl": "https://www.qrlink.sk/new/pl/category/presov/",
        "hu": "https://www.qrlink.sk/new/hu/category/presov/"
      }
    },
    {
      "id": "roznov",
      "nazov": "Rožnov pod Radhoštěm",
      "primarna": "mesta",
      "kategorie": [
        "mesta",
        "pohranicie"
      ],
      "lon": 18.143,
      "lat": 49.458,
      "mapX": 228,
      "mapY": 41,
      "cover": "",
      "popis": "Valašské mesto známe skanzenom.",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/category/roznov-pod-radhostem/",
        "en": "https://www.qrlink.sk/new/en/category/roznov-pod-radhostem/",
        "de": "https://www.qrlink.sk/new/de/category/roznov-pod-radhostem/",
        "ru": "https://www.qrlink.sk/new/ru/category/roznov-pod-radhostem/",
        "pl": "https://www.qrlink.sk/new/pl/category/roznov-pod-radhostem/",
        "hu": "https://www.qrlink.sk/new/hu/category/roznov-pod-radhostem/"
      }
    },
    {
      "id": "ruzomberok",
      "nazov": "Ružomberok",
      "primarna": "mesta",
      "kategorie": [
        "mesta"
      ],
      "lon": 19.308,
      "lat": 49.083,
      "mapX": 430,
      "mapY": 147,
      "cover": "",
      "popis": "Mesto na Liptove pod Veľkou Fatrou.",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/category/ruzomberok/",
        "en": "https://www.qrlink.sk/new/en/category/ruzomberok/",
        "de": "https://www.qrlink.sk/new/de/category/ruzomberok/",
        "ru": "https://www.qrlink.sk/new/ru/category/ruzomberok/",
        "pl": "https://www.qrlink.sk/new/pl/category/ruzomberok/",
        "hu": "https://www.qrlink.sk/new/hu/category/ruzomberok/"
      }
    },
    {
      "id": "sokolovce",
      "nazov": "Sokolovce",
      "primarna": "mesta",
      "kategorie": [
        "mesta"
      ],
      "lon": 17.77,
      "lat": 48.597,
      "mapX": 179,
      "mapY": 299,
      "cover": "",
      "popis": "Obec pri Piešťanoch.",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/category/sokolovce/",
        "en": "https://www.qrlink.sk/new/en/category/sokolovce/",
        "de": "https://www.qrlink.sk/new/de/category/sokolovce/",
        "ru": "https://www.qrlink.sk/new/ru/category/sokolovce/",
        "pl": "https://www.qrlink.sk/new/pl/category/sokolovce/",
        "hu": "https://www.qrlink.sk/new/hu/category/sokolovce/"
      }
    },
    {
      "id": "trebisov",
      "nazov": "Trebišov",
      "primarna": "mesta",
      "kategorie": [
        "mesta"
      ],
      "lon": 21.718,
      "lat": 48.629,
      "mapX": 852,
      "mapY": 271,
      "cover": "",
      "popis": "Mesto na Zemplíne.",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/category/trebisov/",
        "en": "https://www.qrlink.sk/new/en/category/trebisov/",
        "de": "https://www.qrlink.sk/new/de/category/trebisov/",
        "ru": "https://www.qrlink.sk/new/ru/category/trebisov/",
        "pl": "https://www.qrlink.sk/new/pl/category/trebisov/",
        "hu": "https://www.qrlink.sk/new/hu/category/trebisov/"
      }
    },
    {
      "id": "turzovka",
      "nazov": "Turzovka",
      "primarna": "mesta",
      "kategorie": [
        "mesta"
      ],
      "lon": 18.621,
      "lat": 49.402,
      "mapX": 312,
      "mapY": 58,
      "cover": "",
      "popis": "Mesto na horných Kysuciach.",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/category/turzovka/",
        "en": "https://www.qrlink.sk/new/en/category/turzovka/",
        "de": "https://www.qrlink.sk/new/de/category/turzovka/",
        "ru": "https://www.qrlink.sk/new/ru/category/turzovka/",
        "pl": "https://www.qrlink.sk/new/pl/category/turzovka/",
        "hu": "https://www.qrlink.sk/new/hu/category/turzovka/"
      }
    },
    {
      "id": "vranov",
      "nazov": "Vranov nad Topľou",
      "primarna": "mesta",
      "kategorie": [
        "mesta"
      ],
      "lon": 21.676,
      "lat": 48.882,
      "mapX": 845,
      "mapY": 199,
      "cover": "",
      "popis": "Mesto na východnom Slovensku.",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/category/vranov-nad-toplou/",
        "en": "https://www.qrlink.sk/new/en/category/vranov-nad-toplou/",
        "de": "https://www.qrlink.sk/new/de/category/vranov-nad-toplou/",
        "ru": "https://www.qrlink.sk/new/ru/category/vranov-nad-toplou/",
        "pl": "https://www.qrlink.sk/new/pl/category/vranov-nad-toplou/",
        "hu": "https://www.qrlink.sk/new/hu/category/vranov-nad-toplou/"
      }
    },
    {
      "id": "cierne-klacany",
      "nazov": "Čiernokľačianska Pyxida",
      "primarna": "pamiatky",
      "kategorie": [
        "pamiatky"
      ],
      "lon": 18.193,
      "lat": 48.471,
      "mapX": 275,
      "mapY": 346,
      "cover": "",
      "popis": "Vzácna slonovinová schránka z veľkomoravského obdobia.",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/category/kategorie-kulturnych-historickych-a-prirodnych-pamiatok/cierne-klacany/",
        "en": "https://www.qrlink.sk/new/en/category/kategorie-kulturnych-historickych-a-prirodnych-pamiatok/cierne-klacany/",
        "de": "https://www.qrlink.sk/new/de/category/kategorie-kulturnych-historickych-a-prirodnych-pamiatok/cierne-klacany/",
        "ru": "https://www.qrlink.sk/new/ru/category/kategorie-kulturnych-historickych-a-prirodnych-pamiatok/cierne-klacany/",
        "pl": "https://www.qrlink.sk/new/pl/category/kategorie-kulturnych-historickych-a-prirodnych-pamiatok/cierne-klacany/",
        "hu": "https://www.qrlink.sk/new/hu/category/kategorie-kulturnych-historickych-a-prirodnych-pamiatok/cierne-klacany/"
      }
    },
    {
      "id": "klenoty-pohranicie",
      "nazov": "Klenoty v česko-slovenskom pohraničí",
      "primarna": "pamiatky",
      "kategorie": [
        "pamiatky",
        "pohranicie"
      ],
      "lon": 18.27,
      "lat": 49.36,
      "mapX": 250,
      "mapY": 70,
      "cover": "",
      "popis": "Kultúrne a prírodné klenoty pohraničia.",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/category/kategorie-kulturnych-historickych-a-prirodnych-pamiatok/klenoty-v-cesko-slovenskom-pohranici/",
        "en": "https://www.qrlink.sk/new/en/category/kategorie-kulturnych-historickych-a-prirodnych-pamiatok/klenoty-v-cesko-slovenskom-pohranici/",
        "de": "https://www.qrlink.sk/new/de/category/kategorie-kulturnych-historickych-a-prirodnych-pamiatok/klenoty-v-cesko-slovenskom-pohranici/",
        "ru": "https://www.qrlink.sk/new/ru/category/kategorie-kulturnych-historickych-a-prirodnych-pamiatok/klenoty-v-cesko-slovenskom-pohranici/",
        "pl": "https://www.qrlink.sk/new/pl/category/kategorie-kulturnych-historickych-a-prirodnych-pamiatok/klenoty-v-cesko-slovenskom-pohranici/",
        "hu": "https://www.qrlink.sk/new/hu/category/kategorie-kulturnych-historickych-a-prirodnych-pamiatok/klenoty-v-cesko-slovenskom-pohranici/"
      }
    },
    {
      "id": "cestovatelsky-dennik",
      "nazov": "Cestovateľský denník – Klenoty v česko-slovenskom pohraničí",
      "primarna": "pamiatky",
      "kategorie": [
        "pamiatky",
        "pohranicie"
      ],
      "lon": 18.21,
      "lat": 49.27,
      "mapX": 240,
      "mapY": 95,
      "cover": "",
      "popis": "Putovanie po klenotoch pohraničia.",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/category/kategorie-kulturnych-historickych-a-prirodnych-pamiatok/cestovatelsky-dennik-klenoty-v-cesko-slovenskom-pohranici/",
        "en": "https://www.qrlink.sk/new/en/category/kategorie-kulturnych-historickych-a-prirodnych-pamiatok/cestovatelsky-dennik-klenoty-v-cesko-slovenskom-pohranici/",
        "de": "https://www.qrlink.sk/new/de/category/kategorie-kulturnych-historickych-a-prirodnych-pamiatok/cestovatelsky-dennik-klenoty-v-cesko-slovenskom-pohranici/",
        "ru": "https://www.qrlink.sk/new/ru/category/kategorie-kulturnych-historickych-a-prirodnych-pamiatok/cestovatelsky-dennik-klenoty-v-cesko-slovenskom-pohranici/",
        "pl": "https://www.qrlink.sk/new/pl/category/kategorie-kulturnych-historickych-a-prirodnych-pamiatok/cestovatelsky-dennik-klenoty-v-cesko-slovenskom-pohranici/",
        "hu": "https://www.qrlink.sk/new/hu/category/kategorie-kulturnych-historickych-a-prirodnych-pamiatok/cestovatelsky-dennik-klenoty-v-cesko-slovenskom-pohranici/"
      }
    },
    {
      "id": "nch-pohranicie",
      "nazov": "Náučné chodníky v česko-slovenskom pohraničí",
      "primarna": "chodniky",
      "kategorie": [
        "chodniky",
        "pohranicie"
      ],
      "lon": 18.49,
      "lat": 49.45,
      "mapX": 290,
      "mapY": 45,
      "cover": "",
      "popis": "Sieť náučných chodníkov v pohraničí.",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/category/kategorie-kulturnych-historickych-a-prirodnych-pamiatok/naucne-chodniky-v-cesko-slovenskom-pohranici/",
        "en": "https://www.qrlink.sk/new/en/category/kategorie-kulturnych-historickych-a-prirodnych-pamiatok/naucne-chodniky-v-cesko-slovenskom-pohranici/",
        "de": "https://www.qrlink.sk/new/de/category/kategorie-kulturnych-historickych-a-prirodnych-pamiatok/naucne-chodniky-v-cesko-slovenskom-pohranici/",
        "ru": "https://www.qrlink.sk/new/ru/category/kategorie-kulturnych-historickych-a-prirodnych-pamiatok/naucne-chodniky-v-cesko-slovenskom-pohranici/",
        "pl": "https://www.qrlink.sk/new/pl/category/kategorie-kulturnych-historickych-a-prirodnych-pamiatok/naucne-chodniky-v-cesko-slovenskom-pohranici/",
        "hu": "https://www.qrlink.sk/new/hu/category/kategorie-kulturnych-historickych-a-prirodnych-pamiatok/naucne-chodniky-v-cesko-slovenskom-pohranici/"
      }
    },
    {
      "id": "nch-hlinene",
      "nazov": "Náučný chodník Hlinené",
      "primarna": "chodniky",
      "kategorie": [
        "chodniky"
      ],
      "lon": 18.58,
      "lat": 49.383,
      "mapX": 305,
      "mapY": 65,
      "cover": "",
      "popis": "Náučný chodník v okolí Turzovky.",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/category/kategorie-kulturnych-historickych-a-prirodnych-pamiatok/naucny-chodnik-hlinene/",
        "en": "https://www.qrlink.sk/new/en/category/kategorie-kulturnych-historickych-a-prirodnych-pamiatok/naucny-chodnik-hlinene/",
        "de": "https://www.qrlink.sk/new/de/category/kategorie-kulturnych-historickych-a-prirodnych-pamiatok/naucny-chodnik-hlinene/",
        "ru": "https://www.qrlink.sk/new/ru/category/kategorie-kulturnych-historickych-a-prirodnych-pamiatok/naucny-chodnik-hlinene/",
        "pl": "https://www.qrlink.sk/new/pl/category/kategorie-kulturnych-historickych-a-prirodnych-pamiatok/naucny-chodnik-hlinene/",
        "hu": "https://www.qrlink.sk/new/hu/category/kategorie-kulturnych-historickych-a-prirodnych-pamiatok/naucny-chodnik-hlinene/"
      }
    },
    {
      "id": "nch-zivcakova",
      "nazov": "Náučný chodník Živčákova",
      "primarna": "chodniky",
      "kategorie": [
        "chodniky"
      ],
      "lon": 18.553,
      "lat": 49.432,
      "mapX": 300,
      "mapY": 50,
      "cover": "",
      "popis": "Chodník k pútnickému miestu Živčákova.",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/category/kategorie-kulturnych-historickych-a-prirodnych-pamiatok/naucny-chodnik-zivcakova/",
        "en": "https://www.qrlink.sk/new/en/category/kategorie-kulturnych-historickych-a-prirodnych-pamiatok/naucny-chodnik-zivcakova/",
        "de": "https://www.qrlink.sk/new/de/category/kategorie-kulturnych-historickych-a-prirodnych-pamiatok/naucny-chodnik-zivcakova/",
        "ru": "https://www.qrlink.sk/new/ru/category/kategorie-kulturnych-historickych-a-prirodnych-pamiatok/naucny-chodnik-zivcakova/",
        "pl": "https://www.qrlink.sk/new/pl/category/kategorie-kulturnych-historickych-a-prirodnych-pamiatok/naucny-chodnik-zivcakova/",
        "hu": "https://www.qrlink.sk/new/hu/category/kategorie-kulturnych-historickych-a-prirodnych-pamiatok/naucny-chodnik-zivcakova/"
      }
    },
    {
      "id": "gabcikovo",
      "nazov": "Vodné dielo Gabčíkovo / Čunovo",
      "primarna": "pamiatky",
      "kategorie": [
        "pamiatky",
        "enviro"
      ],
      "lon": 17.543,
      "lat": 47.883,
      "mapX": 68,
      "mapY": 437,
      "cover": "",
      "popis": "Vodné dielo na Dunaji – doc. Ing. Július Binder, Dr. h. c.",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/category/kategorie-kulturnych-historickych-a-prirodnych-pamiatok/doc-ing-julius-binder-dr-h-c/",
        "en": "https://www.qrlink.sk/new/en/category/kategorie-kulturnych-historickych-a-prirodnych-pamiatok/doc-ing-julius-binder-dr-h-c/",
        "de": "https://www.qrlink.sk/new/de/category/kategorie-kulturnych-historickych-a-prirodnych-pamiatok/doc-ing-julius-binder-dr-h-c/",
        "ru": "https://www.qrlink.sk/new/ru/category/kategorie-kulturnych-historickych-a-prirodnych-pamiatok/doc-ing-julius-binder-dr-h-c/",
        "pl": "https://www.qrlink.sk/new/pl/category/kategorie-kulturnych-historickych-a-prirodnych-pamiatok/doc-ing-julius-binder-dr-h-c/",
        "hu": "https://www.qrlink.sk/new/hu/category/kategorie-kulturnych-historickych-a-prirodnych-pamiatok/doc-ing-julius-binder-dr-h-c/"
      }
    },
    {
      "id": "zvonica-hrusove",
      "nazov": "Zvonica Hrušové",
      "primarna": "pamiatky",
      "kategorie": [
        "pamiatky"
      ],
      "lon": 17.95,
      "lat": 48.75,
      "mapX": 165,
      "mapY": 227,
      "cover": "",
      "popis": "Historická zvonica.",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/category/kategorie-kulturnych-historickych-a-prirodnych-pamiatok/zvonica-hrusove/",
        "en": "https://www.qrlink.sk/new/en/category/kategorie-kulturnych-historickych-a-prirodnych-pamiatok/zvonica-hrusove/",
        "de": "https://www.qrlink.sk/new/de/category/kategorie-kulturnych-historickych-a-prirodnych-pamiatok/zvonica-hrusove/",
        "ru": "https://www.qrlink.sk/new/ru/category/kategorie-kulturnych-historickych-a-prirodnych-pamiatok/zvonica-hrusove/",
        "pl": "https://www.qrlink.sk/new/pl/category/kategorie-kulturnych-historickych-a-prirodnych-pamiatok/zvonica-hrusove/",
        "hu": "https://www.qrlink.sk/new/hu/category/kategorie-kulturnych-historickych-a-prirodnych-pamiatok/zvonica-hrusove/"
      }
    }
  ],
  "zastavenia": [
    {
      "id": "betliar-info-pointy-qr1",
      "miesto": "betliar-info-pointy",
      "poradie": 1,
      "nazov": "Kultúrny dom",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2025/08/1-kulturny-dom.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/1.-KULTÚRNY-DOM.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 48.70527,
        "lng": 20.507952
      },
      "mapEmbed": "https://www.google.com/maps?q=48.705270,20.507952&z=15&output=embed",
      "text": "<p>Kultúrny dom bol postavený v 80. rokoch. Vybavený je sálou s javiskom, klubom dôchodcov, knižnicou a zasadačkou. V objekte kultúrneho domu sa uskutočňujú aj verejné kultúrne podujatia a prezentácie súkromných spoločností.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/betliar-info-pointy-qr1/",
        "en": "https://www.qrlink.sk/new/en/betliar-info-pointy-qr1/",
        "de": "https://www.qrlink.sk/new/de/betliar-info-pointy-qr1/",
        "ru": "https://www.qrlink.sk/new/ru/betliar-info-pointy-qr1/",
        "pl": "https://www.qrlink.sk/new/pl/betliar-info-pointy-qr1/",
        "hu": "https://www.qrlink.sk/new/hu/betliar-info-pointy-qr1/"
      }
    },
    {
      "id": "betliar-info-pointy-qr2",
      "miesto": "betliar-info-pointy",
      "poradie": 2,
      "nazov": "Kostol rímskokatolícky sv. Alžbety vdovy",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2025/08/2-rimskokatolicky-kostol.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/2.-KOSTOL-RÍMSKOKATOLÍCKY-SV.-ALŽBETY-VDOVY.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 48.704072,
        "lng": 20.509225
      },
      "mapEmbed": "https://www.google.com/maps?q=48.704072,20.509225&z=18&output=embed",
      "text": "<p>Stredoveká stavba z 1. polovice 14. storočia, v 17. a 19. storočí upravovaná, najstaršia pamiatka obce. Podľa dostupných prameňov na mieste kostola stála už v 14. storočí kaplnka, ktorá sa postupom dejín prestavala do dnešnej podoby. Na gotický pôvod kostola poukazuje jeho pôdorys s pravouhlou svätyňou zaklenutou valenou klenbou a sakristiou, do ktorej vedie lomený portál. Veža bola pristavaná v 17. storočí. Loď kostola je zaklenutá barokovými klenbami. Z barokového zariadenia kostola sa zachovala iba drevená kazateľnica zo začiatku 18. storočia so sochami evanjelistov a drevená socha panny Márie kráľovnej z 2. polovice 18. storočia. Na hlavnom oltári z konca 19. storočia je obraz sv. Alžbety vdovy na bočnom oltári obraz sv. Alžbety Uhorskej.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/betliar-info-pointy-qr2/",
        "en": "https://www.qrlink.sk/new/en/betliar-info-pointy-qr2/",
        "de": "https://www.qrlink.sk/new/de/betliar-info-pointy-qr2/",
        "ru": "https://www.qrlink.sk/new/ru/betliar-info-pointy-qr2/",
        "pl": "https://www.qrlink.sk/new/pl/betliar-info-pointy-qr2/",
        "hu": "https://www.qrlink.sk/new/hu/betliar-info-pointy-qr2/"
      }
    },
    {
      "id": "betliar-info-pointy-qr3",
      "miesto": "betliar-info-pointy",
      "poradie": 3,
      "nazov": "Kostol evanjelický augsburského vyznania",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2025/08/3-evanjelicky-kostol.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/3.-KOSTOL-EVANJELICKÝ-AUGSBURSKÉHO-VYZNANIA.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 48.703489,
        "lng": 20.508859
      },
      "mapEmbed": "https://www.google.com/maps?q=48.703489,20.508859&z=18&output=embed",
      "text": "<p>Evanjelický kostol augsburského vyznania bol postavený v roku 1786 po tolerančnom patente cisára Jozefa II., podľa vtedajších predpisov bez veže a zvonov. Klasicistická veža bola pristavaná až v roku 1826, pod ňou bol otvorený nový vstup do kostola. Pôvodný južný vstup s murovanou predsieňou zostal zachovaný. Pozdĺžny sieňový priestor kostola zaklenutý neskorobarokovými klenbami má zaujímavý uzáver v ostrom uhle. Tu je umiestnený murovaný stĺpový oltár s obrazom Kristus a Samaritánka pri studni z roku 1838, ktorý je jedným z najlepších diel významného levočského maliara Jozefa Czauczika.</p>\n<p>Budovu kostola i veže postihli požiare a v roku 1856 vyhoreli do základov. Vzápätí bol však znovu vybudovaný a neporušený zostal až do roku 1911, kedy bola strecha kostola pokrytá eternitom a veža plechom. V 1937 bol kostol renovovaný. Posledné úpravy interiéru kostola sa konali v 90. rokoch minulého storočia, v roku 2006 získala veža kostola novú medenú krytinu a v roku 2008 sa previedla výmena strešnej krytiny na lodi kostola.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/betliar-info-pointy-qr3/",
        "en": "https://www.qrlink.sk/new/en/betliar-info-pointy-qr3/",
        "de": "https://www.qrlink.sk/new/de/betliar-info-pointy-qr3/",
        "ru": "https://www.qrlink.sk/new/ru/betliar-info-pointy-qr3/",
        "pl": "https://www.qrlink.sk/new/pl/betliar-info-pointy-qr3/",
        "hu": "https://www.qrlink.sk/new/hu/betliar-info-pointy-qr3/"
      }
    },
    {
      "id": "betliar-info-pointy-qr4",
      "miesto": "betliar-info-pointy",
      "poradie": 4,
      "nazov": "Evanjelická fara",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2025/08/4-evanjelicka-fara.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/4.-EVANJELICKÁ-FARA.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 48.703546,
        "lng": 20.508526
      },
      "mapEmbed": "https://www.google.com/maps?q=48.703546,20.508526&z=18&output=embed",
      "text": "<p>Evanjelická fara je postavená v tesnej blízkosti evanjelického kostola. Je v nej byt pre duchovného a sídli v nej aj farský úrad. Fara bola aj sídlom Seniorského úradu Gemerského seniorátu. Na priečelí fary bola v roku 1998 odhalená Pamätná tabuľa pamiatke ThDr. Júliusa Madarása, doktora teológie, ktorý v obci pôsobil.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/betliar-info-pointy-qr4/",
        "en": "https://www.qrlink.sk/new/en/betliar-info-pointy-qr4/",
        "de": "https://www.qrlink.sk/new/de/betliar-info-pointy-qr4/",
        "ru": "https://www.qrlink.sk/new/ru/betliar-info-pointy-qr4/",
        "pl": "https://www.qrlink.sk/new/pl/betliar-info-pointy-qr4/",
        "hu": "https://www.qrlink.sk/new/hu/betliar-info-pointy-qr4/"
      }
    },
    {
      "id": "betliar-info-pointy-qr5",
      "miesto": "betliar-info-pointy",
      "poradie": 5,
      "nazov": "Hasičská zbrojnica",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2025/08/5-hasicska-zbrojnica.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/5.-HASIČSKÁ-ZBROJNICA.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 48.70283,
        "lng": 20.507596
      },
      "mapEmbed": "https://www.google.com/maps?q=48.70283,20.507596&z=19&output=embed",
      "text": "<p>Je postavená v strede obce na mieste bývalého hasičského skladu. Už v roku 1884 bol v obci grófom Manó Andrássym založený dobrovoľný hasičský zbor. Zakladateľ zboru zakúpil aj prvú hasičskú výstroj a výzbroj. V roku 1932 bola postavená nová hasičská zbrojnica, ktorá je zaujímavá tým, že stojí na železobetónových podstavcoch nad šírkou celého potoka. Je v nej zasadačka, garáže a priestory pre hasičskú techniku. Pri príležitosti 50. výročia založenia Dobrovoľného hasičského zboru v obci si obec zadovážila i hasičskú vlajku. Na čelnej strane budovy bola pri príležitosti 120. výročia založenia odhalená Pamätná tabuľa na pamiatku zaslúžilých členov Dobrovoľného hasičského zboru. Vo výklenku z druhej strany budovy je uložená soška patróna hasičov – sv. Floriána.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/betliar-info-pointy-qr5/",
        "en": "https://www.qrlink.sk/new/en/betliar-info-pointy-qr5/",
        "de": "https://www.qrlink.sk/new/de/betliar-info-pointy-qr5/",
        "ru": "https://www.qrlink.sk/new/ru/betliar-info-pointy-qr5/",
        "pl": "https://www.qrlink.sk/new/pl/betliar-info-pointy-qr5/",
        "hu": "https://www.qrlink.sk/new/hu/betliar-info-pointy-qr5/"
      }
    },
    {
      "id": "betliar-info-pointy-qr6",
      "miesto": "betliar-info-pointy",
      "poradie": 6,
      "nazov": "Budova správy lesov",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2025/08/6-budova-spravy-lesov.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/6.-BUDOVA-SPRÁVY-LESOV.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 48.702415,
        "lng": 20.506491
      },
      "mapEmbed": "https://www.google.com/maps?q=48.702415,20.506491&z=18&output=embed",
      "text": "<p>Budova Správy lesov bola pôvodne sídlom správcu majetkov rodiny Andrássyovcov a postavená bola v roku 1900. Neskôr v nej sídlilo i posádkové veliteľstvo delostreleckého oddielu 261 a od októbra 1934 sídli v budove Správa štátnych lesov a statkov, ktorá v tom istom roku prevzala rozsiahlu časť majetku rodiny Andrássyovcov. Dodnes v budove sídli Správa lesov SR.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/betliar-info-pointy-qr6/",
        "en": "https://www.qrlink.sk/new/en/betliar-info-pointy-qr6/",
        "de": "https://www.qrlink.sk/new/de/betliar-info-pointy-qr6/",
        "ru": "https://www.qrlink.sk/new/ru/betliar-info-pointy-qr6/",
        "pl": "https://www.qrlink.sk/new/pl/betliar-info-pointy-qr6/",
        "hu": "https://www.qrlink.sk/new/hu/betliar-info-pointy-qr6/"
      }
    },
    {
      "id": "betliar-info-pointy-qr7",
      "miesto": "betliar-info-pointy",
      "poradie": 7,
      "nazov": "Budova obecného úradu",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2025/08/7-obecny-urad.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/7.-BUDOVA-OBECNÉHO-ÚRADU.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 48.7025556,
        "lng": 20.5063889
      },
      "mapEmbed": "https://www.google.com/maps?q=48.7025556,20.5063889&z=18&output=embed",
      "text": "<p>Budova Obecného úradu je situovaná v centre obce a stojí na pôvodnom mieste niekdajšieho obecného úradu. V 30. rokoch minulého storočia v nej sídlilo notárstvo i matrika. V roku 1943 sa obec rozhodla na tomto mieste postaviť nový obecný dom. Dnešný vzhľad získala budova po rekonštrukcii v roku 1953. Sídli v nej obecné zastupiteľstvo. Na priečelí budovy je umiestnená Pamätná tabuľa k výročiu oslobodenia obce dňa 23.1.1945. Dňa 28. februára 1992 bola na tejto budove odhalená, pri príležitosti 110. výročia narodenia, Pamätná tabuľa husľovému virtuózovi a skladateľovi Jurajovi Kazamekovi.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/betliar-info-pointy-qr7/",
        "en": "https://www.qrlink.sk/new/en/betliar-info-pointy-qr7/",
        "de": "https://www.qrlink.sk/new/de/betliar-info-pointy-qr7/",
        "ru": "https://www.qrlink.sk/new/ru/betliar-info-pointy-qr7/",
        "pl": "https://www.qrlink.sk/new/pl/betliar-info-pointy-qr7/",
        "hu": "https://www.qrlink.sk/new/hu/betliar-info-pointy-qr7/"
      }
    },
    {
      "id": "betliar-info-pointy-qr8",
      "miesto": "betliar-info-pointy",
      "poradie": 8,
      "nazov": "Malý park",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2025/08/8-maly-park.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/8.-MALÝ-PARK.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 48.701483,
        "lng": 20.505685
      },
      "mapEmbed": "https://www.google.com/maps?q=48.701483,20.505685&z=18&output=embed",
      "text": "<p>Malý park bol založený po regulácii Krivého potoka začiatkom 20. storočia. Zaberá priestor po pravej strane potoka a tvorí časť centra obce. Základom parku sa stala lipová aleja doplnená na strane potoka majestátnymi topoľmi. Vedľa aleje je parková výsadba s lipovým stromoradím, ihličnanmi a záhonmi ruží. V centrálnom záhone je umiestnený pamätník 675. výročia založenia obce – balvan z vrchu Volovec (1263 m n.m.), ktorý sa vypína nad obcou, doplnený pamätnou tabuľou.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/betliar-info-pointy-qr8/",
        "en": "https://www.qrlink.sk/new/en/betliar-info-pointy-qr8/",
        "de": "https://www.qrlink.sk/new/de/betliar-info-pointy-qr8/",
        "ru": "https://www.qrlink.sk/new/ru/betliar-info-pointy-qr8/",
        "pl": "https://www.qrlink.sk/new/pl/betliar-info-pointy-qr8/",
        "hu": "https://www.qrlink.sk/new/hu/betliar-info-pointy-qr8/"
      }
    },
    {
      "id": "betliar-info-pointy-qr9",
      "miesto": "betliar-info-pointy",
      "poradie": 9,
      "nazov": "Socha sv. Jána Nepomuckého",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2025/08/9-socha.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/9.-SOCHA-SV.-JÁNA-NEPOMUCKÉHO.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 48.701857,
        "lng": 20.506214
      },
      "mapEmbed": "https://www.google.com/maps?q=48.701857,20.506214&z=18&output=embed",
      "text": "<p>Osadenie sochy sv. Jána Nepomuckého v tejto lokalite sa v materiáloch dejín nespomína. Postavená je v strede lipovej aleje malého parku, pri okraji chodníka. Vyhotovená je z kamenného materiálu -pieskovca zemitej farby a stojí na betónovom stĺpe. Vplyvom počasia a doby bol povrch tejto pamiatky poškodený a Obecné zastupiteľstvo pristúpilo k jeho oprave. Rozhodlo sa zveriť jej reštaurovanie akademickému maliarovi Pavlovi Bradovkovi a magistrovi umenia Jozefovi Kužidlovi v roku 2003. Chýbajúce časti sochy podstavca a hlavne stĺpa boli domodelované. Slávnostné odhalenie sochy bolo 7. júna 2004. Rekonštrukcia bola financovaná z prostriedkov fondu Pro Slovakia a prostriedkov obce.</p>\n<p>Ján Nepomucký – z Wikipédie, slobodnej encyklopédie <a href=\"http://sk.wikipedia.org/wiki/J%C3%A1n_Nepomuck%C3%BD\">http://sk.wikipedia.org/wiki/Ján_Nepomucký</a></p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/betliar-info-pointy-qr9/",
        "en": "https://www.qrlink.sk/new/en/betliar-info-pointy-qr9/",
        "de": "https://www.qrlink.sk/new/de/betliar-info-pointy-qr9/",
        "ru": "https://www.qrlink.sk/new/ru/betliar-info-pointy-qr9/",
        "pl": "https://www.qrlink.sk/new/pl/betliar-info-pointy-qr9/",
        "hu": "https://www.qrlink.sk/new/hu/betliar-info-pointy-qr9/"
      }
    },
    {
      "id": "betliar-info-pointy-qr10",
      "miesto": "betliar-info-pointy",
      "poradie": 10,
      "nazov": "Rodinný dom na Polomskej ulici",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2025/08/10-rodinny-dom-na-polomskej-ulici.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/10.-RODINNÝ-DOM-NA-POLOMSKEJ-ULICI.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 48.70222,
        "lng": 20.501995
      },
      "mapEmbed": "https://www.google.com/maps?q=48.702220,20.501995&z=18&output=embed",
      "text": "<p>Rodinný dom na Polomskej ulici č. 113 bol postavený začiatkom 20. storočia po ľavej strane hlavnej cesty smerom do Dobšinej. Nesie na sebe znaky stavebných úprav domov z doby postavenia. Je zachovalý, majitelia ho udržiavajú na požadovanej úrovni. Dodnes je obývaný a je jedným z mála zachovalých domov z tejto doby.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/betliar-info-pointy-qr10/",
        "en": "https://www.qrlink.sk/new/en/betliar-info-pointy-qr10/",
        "de": "https://www.qrlink.sk/new/de/betliar-info-pointy-qr10/",
        "ru": "https://www.qrlink.sk/new/ru/betliar-info-pointy-qr10/",
        "pl": "https://www.qrlink.sk/new/pl/betliar-info-pointy-qr10/",
        "hu": "https://www.qrlink.sk/new/hu/betliar-info-pointy-qr10/"
      }
    },
    {
      "id": "betliar-info-pointy-qr11",
      "miesto": "betliar-info-pointy",
      "poradie": 11,
      "nazov": "Bytový dom v lokalite „Píla“",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2025/08/11-bytovy-dom-pila.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/11.-BYTOVÝ-DOM-V-LOKALITE-„PÍLA“.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 48.703401,
        "lng": 20.499198
      },
      "mapEmbed": "https://www.google.com/maps?q=48.703401,20.499198&z=18&output=embed",
      "text": "<p>Tento pôvodný bytový dom stojí na mieste už neexistujúcej píly grófa Andrássyho pri štátnej ceste Rožňava – Dobšiná. Je to prízemný bytový dom z červených neomietnutých tehál vmurovaných do drevenej hrazdnej konštrukcie. Je zaujímavým a dnes už jediným úplne zachovaným príkladom zamestnaneckých bytov na bývalom lesnom hospodárstve andrássyovského veľkostatku v obci. Boli v ňom 3 bytovky. Dodnes je z časti obývaný a priebežne udržiavaný v obývateľnom stave.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/betliar-info-pointy-qr11/",
        "en": "https://www.qrlink.sk/new/en/betliar-info-pointy-qr11/",
        "de": "https://www.qrlink.sk/new/de/betliar-info-pointy-qr11/",
        "ru": "https://www.qrlink.sk/new/ru/betliar-info-pointy-qr11/",
        "pl": "https://www.qrlink.sk/new/pl/betliar-info-pointy-qr11/",
        "hu": "https://www.qrlink.sk/new/hu/betliar-info-pointy-qr11/"
      }
    },
    {
      "id": "betliar-info-pointy-qr12",
      "miesto": "betliar-info-pointy",
      "poradie": 12,
      "nazov": "Budova základnej školy",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2025/08/12-zakladna-skola.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/12.-BUDOVA-ZÁKLADNEJ-ŠKOLY.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 48.700434,
        "lng": 20.503074
      },
      "mapEmbed": "https://www.google.com/maps?q=48.700434,20.503074&z=18&output=embed",
      "text": "<p>Budova Základnej školy bola postavená na ulici smerujúcej na železničnú stanicu v roku 1911 ako ľudová škola. Bol v nej byt pre učiteľa a tri veľké učebne. V areáli školy boli hospodárske a sociálne zariadenia a veľká záhrada. V roku 2001 obec oslávila 90. výročie jej vzniku a funkčná je dodnes.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/betliar-info-pointy-qr12/",
        "en": "https://www.qrlink.sk/new/en/betliar-info-pointy-qr12/",
        "de": "https://www.qrlink.sk/new/de/betliar-info-pointy-qr12/",
        "ru": "https://www.qrlink.sk/new/ru/betliar-info-pointy-qr12/",
        "pl": "https://www.qrlink.sk/new/pl/betliar-info-pointy-qr12/",
        "hu": "https://www.qrlink.sk/new/hu/betliar-info-pointy-qr12/"
      }
    },
    {
      "id": "betliar-info-pointy-qr13",
      "miesto": "betliar-info-pointy",
      "poradie": 13,
      "nazov": "Budova železničnej stanice",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2025/08/13-budova-zel-stanice.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/13.-BUDOVA-ŽELEZNIČNEJ-STANICE.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 48.699018,
        "lng": 20.501024
      },
      "mapEmbed": "https://www.google.com/maps?q=48.699018,20.501024&z=18&output=embed",
      "text": "<p>Budova železničnej stanice stojí pri trati Rožňava – Dobšiná. Bola postavená v roku 1874 súčasne s výstavbou tejto trate, ktorá tvorila hlavný ťah Gemera s Bánréve do Dobšinej. V budove stanice bola kancelária dopravnej spoločnosti a byty pre zamestnancov. Svojmu účelu slúžila až do zrušenia premávky osobnej dopravy na tejto trati v roku 2003.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/betliar-info-pointy-qr13/",
        "en": "https://www.qrlink.sk/new/en/betliar-info-pointy-qr13/",
        "de": "https://www.qrlink.sk/new/de/betliar-info-pointy-qr13/",
        "ru": "https://www.qrlink.sk/new/ru/betliar-info-pointy-qr13/",
        "pl": "https://www.qrlink.sk/new/pl/betliar-info-pointy-qr13/",
        "hu": "https://www.qrlink.sk/new/hu/betliar-info-pointy-qr13/"
      }
    },
    {
      "id": "betliar-info-pointy-qr14",
      "miesto": "betliar-info-pointy",
      "poradie": 14,
      "nazov": "Bytové domy na Nižnej Maši",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2025/08/14-bytove-domy-nizna-masa.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/14.-BYTOVÉ-DOMY-NA-NIŽNEJ-MAŠI.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 48.693316,
        "lng": 20.506356
      },
      "mapEmbed": "https://www.google.com/maps?q=48.693316,20.506356&z=18&output=embed",
      "text": "<p>Dva poschodové bytové domy z 19. storočia postavené pre zamestnancov bývalého železiarskeho podniku Andrássyovcov a Nádasdyovcov. Domy neskôr slúžili ako byty pre dôchodcov Rimamuránskej železiarskej spoločnosti. Dnes sú využívané prevažne ako rekreačné obydlia.</p>\n<p>V lokalite pracovali ešte na začiatku 20. storočia vysoké pece na tavbu železnej rudy, z ktorých sa v blízkom teréne zachovali zvyšky kamenných múrov. Voda z rieky Slaná odvedená umelým kanálom, ktorý dodnes existuje, poháňala ešte v 50. rokoch 20. storočia turbínu malej vodnej elektrárne.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/betliar-info-pointy-qr14/",
        "en": "https://www.qrlink.sk/new/en/betliar-info-pointy-qr14/",
        "de": "https://www.qrlink.sk/new/de/betliar-info-pointy-qr14/",
        "ru": "https://www.qrlink.sk/new/ru/betliar-info-pointy-qr14/",
        "pl": "https://www.qrlink.sk/new/pl/betliar-info-pointy-qr14/",
        "hu": "https://www.qrlink.sk/new/hu/betliar-info-pointy-qr14/"
      }
    },
    {
      "id": "betliar-info-pointy-qr15",
      "miesto": "betliar-info-pointy",
      "poradie": 15,
      "nazov": "Dom Aloisa Šébla",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2025/08/15-dom-alojza-sebla.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/15.-DOM-ALOISA-ŠÉBLA.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 48.701199,
        "lng": 20.505906
      },
      "mapEmbed": "https://www.google.com/maps?q=48.701199,20.505906&z=18&output=embed",
      "text": "<p>Dom Aloisa Šébla stál na rohu ulice smerujúcej z hlavnej cesty ku kaštieľu. Bol v ňom obchod a byt majiteľa. Jeho pôvodná podoba sa stratila výstavbou novej poschodovej budovy v roku 1934, v ktorej bol obchod, reštaurácia i spoločenská miestnosť. Objekt slúžil občanom ako obchodné a kultúrne stredisko veľmi dlho. Dnes je táto budova zrenovovaná a je v nej súkromný penzión „Barónka.“</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/betliar-info-pointy-qr15/",
        "en": "https://www.qrlink.sk/new/en/betliar-info-pointy-qr15/",
        "de": "https://www.qrlink.sk/new/de/betliar-info-pointy-qr15/",
        "ru": "https://www.qrlink.sk/new/ru/betliar-info-pointy-qr15/",
        "pl": "https://www.qrlink.sk/new/pl/betliar-info-pointy-qr15/",
        "hu": "https://www.qrlink.sk/new/hu/betliar-info-pointy-qr15/"
      }
    },
    {
      "id": "betliar-info-pointy-qr16",
      "miesto": "betliar-info-pointy",
      "poradie": 16,
      "nazov": "Rodný dom Júliusa Koššutha",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2025/08/16-dom-juliusa-kossutha.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/16.-RODNÝ-DOM-JÚLIUSA-KOŠŠUTHA.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 48.702361,
        "lng": 20.507765
      },
      "mapEmbed": "https://www.google.com/maps?q=48.702361,20.507765&z=18&output=embed",
      "text": "<p>Rodinný dom zakladateľa Pohrebného podporného združenia na Slovensku bol postavený v druhej polovici 19. storočia. Stojí na Okružnej ulici a 28. februára 1882 sa v ňom narodil Július Koššuth, zakladateľ Pohrebného podporného združenia na Slovensku. Mal veľký podiel na rozvoji obce a prežil v nej celý svoj život. Jeho dom bol viackrát stavebne upravovaný a dnešnú podobu udržiavajú jeho dediči, napriek tomu, že je neobývaný.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/betliar-info-pointy-qr16/",
        "en": "https://www.qrlink.sk/new/en/betliar-info-pointy-qr16/",
        "de": "https://www.qrlink.sk/new/de/betliar-info-pointy-qr16/",
        "ru": "https://www.qrlink.sk/new/ru/betliar-info-pointy-qr16/",
        "pl": "https://www.qrlink.sk/new/pl/betliar-info-pointy-qr16/",
        "hu": "https://www.qrlink.sk/new/hu/betliar-info-pointy-qr16/"
      }
    },
    {
      "id": "betliar-info-pointy-qr17",
      "miesto": "betliar-info-pointy",
      "poradie": 17,
      "nazov": "Pomník padlým na miestnom cintoríne",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2025/08/17-pomnik-padlym.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/17.-POMNÍK-PADLÝM-NA-MIESTNOM-CINTORÍNE.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 48.701845,
        "lng": 20.514181
      },
      "mapEmbed": "https://www.google.com/maps?q=48.701845,20.514181&z=18&output=embed",
      "text": "<p>Pomník padlým v 1. a v 2. svetovej vojne sa nachádza na miestnom cintoríne. Nový cintorín bol založený v roku 1931. Boli v ňom vytvorené tzv. ulice, ktoré lemovalo 160 vysadených líp. V strede cintorína bol pri jeho vysvätení odhalený pomník v tvare mohutného kríža s mramorovou tabuľou, do ktorej boli vytesané mená občanov padlých v 1. svetovej vojne. Druhá tabuľa bola na pomníku umiestnená po skončení 2. svetovej vojny a sú na nej vyryté mená padlých v tejto vojne. Pri pomníku sa dodnes konajú pri významných výročiach obecné pietne akty.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/betliar-info-pointy-qr17/",
        "en": "https://www.qrlink.sk/new/en/betliar-info-pointy-qr17/",
        "de": "https://www.qrlink.sk/new/de/betliar-info-pointy-qr17/",
        "ru": "https://www.qrlink.sk/new/ru/betliar-info-pointy-qr17/",
        "pl": "https://www.qrlink.sk/new/pl/betliar-info-pointy-qr17/",
        "hu": "https://www.qrlink.sk/new/hu/betliar-info-pointy-qr17/"
      }
    },
    {
      "id": "betliar-info-pointy-qr18",
      "miesto": "betliar-info-pointy",
      "poradie": 18,
      "nazov": "Hospodárska budova Kaštieľa Betliar",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2025/08/18-hodpodarska-budova-kastiela.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/18.-HOSPODÁRSKA-BUDOVA-KAŠTIEĽA-BETLIAR.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 48.704795,
        "lng": 20.508461
      },
      "mapEmbed": "https://www.google.com/maps?q=48.704795,20.508461&z=18&output=embed",
      "text": "<p>Budova patrí do komplexu budov bývalého majera z 19. storočia, ktoré pozostávali z dvoch stajní pre kone, priľahlého humna, stodoly, domu kočiša a osobitne stojacej budovy kočiarne. Štíty budov sú zdobené reliéfmi konských hláv. Na rovnaké účely slúžili v minulosti aj dva príľahlé objekty, ktoré sú v súčasnosti využívané ako reštaurácie a penzión.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/betliar-info-pointy-qr18/",
        "en": "https://www.qrlink.sk/new/en/betliar-info-pointy-qr18/",
        "de": "https://www.qrlink.sk/new/de/betliar-info-pointy-qr18/",
        "ru": "https://www.qrlink.sk/new/ru/betliar-info-pointy-qr18/",
        "pl": "https://www.qrlink.sk/new/pl/betliar-info-pointy-qr18/",
        "hu": "https://www.qrlink.sk/new/hu/betliar-info-pointy-qr18/"
      }
    },
    {
      "id": "betliar-info-strom-qr1",
      "miesto": "betliar-info-strom-architektura",
      "poradie": 1,
      "nazov": "Anglický park pri kaštieli",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2025/08/kastiel-min.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/1-Park.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 48.704752,
        "lng": 20.509297
      },
      "mapEmbed": "https://www.google.com/maps?q=48.704752,20.509297&z=18&output=embed",
      "text": "<p>Anglický park pri kaštieli Andrássyovcov v Betliari bol vďaka svojej jedinečnosti  v roku 1978 zapísaný do zoznamu umelecky a kultúrne hodnotných parkov sveta, ktoré eviduje UNESCO a v roku 1985 ho vyhlásili za národnú kultúrnu pamiatku, ako vzácne kultúrno-historické dedičstvo niekoľkých storočí.</p>\n<p>Jeho rozloha činí 57 hektárov, čím sa zaraďuje medzi najväčší udržiavaný park svojho druhu na Slovensku s výskytom vzácnych cudzokrajných drevín, medzi inými aj s najväčšou magnóliou v strednej Európe. Cudzokrajné dreviny sú vysadené najmä v okolí kaštieľa a boli zasadené koncom 19. a začiatkom 20. storočia. Dnešné zloženie drevín na území parku je výsledkom dlhodobého pôsobenia klimatických a pôdnych vplyvov, ale hlavne pôsobenia človeka. Najrozšírenejšími drevinami sú listnaté stromy a kry. Ihličnatých stromov, ktoré tu vysádzal človek je menej. Najstaršie stromy v parku majú 250 – 300 rokov.</p>\n<p>Za park môžeme vďačiť grófovi Leopoldovi Andrássymu, ktorý svojho času pozval na svoje panstvo významného záhradného architekta empírovej doby Henricha Nebbiena, ktorý položil jeho základy. (H.N. sa okrem iného podieľal na výstavbe/ výsadbe najväčšieho mestského parku v Budapesti – Városliget)</p>\n<p>Pri hlavnej bráne parku, vedľa bývalého bytu pána riaditeľa Klincka stoja na pilieroch brány dve kamenné sochy zobrazujúce gréckych bohov Apolóna a Venušu. Sú to kópie, originály sú po reštaurovaní uschované v depozite múzea.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/betliar-info-strom-qr1/",
        "en": "https://www.qrlink.sk/new/en/betliar-info-strom-qr1/",
        "de": "https://www.qrlink.sk/new/de/betliar-info-strom-qr1/",
        "ru": "https://www.qrlink.sk/new/ru/betliar-info-strom-qr1/",
        "pl": "https://www.qrlink.sk/new/pl/betliar-info-strom-qr1/",
        "hu": "https://www.qrlink.sk/new/hu/betliar-info-strom-qr1/"
      }
    },
    {
      "id": "betliar-info-strom-qr2",
      "miesto": "betliar-info-strom-architektura",
      "poradie": 2,
      "nazov": "Rotunda",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2025/08/QR-2.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/2.-Rotunda.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 48.704758,
        "lng": 20.509616
      },
      "mapEmbed": "https://www.google.com/maps?q=48.704758,20.509616&z=18&output=embed",
      "text": "<p>Hneď za vstupom do parku nás zaujme skupina stavieb na ľavom brehu potoka. Prvou je rotundovitá budova bývalej bibliotéky, ktorú v roku 1816 dal postaviť Leopold Andrássy pre uloženie rodovej knižnice. Okrem členov rodiny ju využívali aj členovia Učenej spoločnosti malohontskej. Koncom 19. storočia, za grófa Emanuela Andrássyho, presťahovali knihy do kaštieľa, do priestoru bývalej obrazárne. V rotunde ale zostali všetky pôvodné drevené knižničné regály, pavlače so zábradlím a točité schodíky, ktoré, žiaľ, boli v 80. rokoch 20. storočia odstránené a zničené. V súčasnosti nie je tento priestor využívaný.</p>\n<p>Knižnica bola postupne rozširovaná viacerými generáciami Andrássyovcov a dnesv nej môžeme nájsť viac ako 15 000 kníh (tie najvzácnejšie z nich inkunábuly – prvotlače spred roku 1500).</p>\n<p>Druhou, nesporne zaujímavou budovou je dom záhradníka postavený v tirolskom štýle s čiastočne hrazdeným murivom. V suterénnych priestoroch domu bola grófska práčovňa, ku ktorej prislúchala sušiareň pod vysokou strechou. Dnes je dom využívaný na ubytovanie návštev múzea alebo bádateľov.</p>\n<p>Podobné využitie má aj susedný prízemný domček, v ktorom pôvodne býval grófsky kočiš.</p>\n<p>Chodník pod touto trojicou budov ústi pri drevenej lávke ponad potok a prechádza k starému schodisku, ktorá vedie k peknej drevenej rumpálovej studni, zreštaurovanej v pôvodnej farebnosti, a k bývalému domu služobníctva, dlhej budove s drevenou pavlačou, v ktorej bývala skoro štyri roky aj doktorka Güntherová so svojimi príbuznými. Dnes je budova využívaná ako depozit múzea, pokladňa a múzejná predajňa suvenírov.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/betliar-info-strom-qr2/",
        "en": "https://www.qrlink.sk/new/en/betliar-info-strom-qr2/",
        "de": "https://www.qrlink.sk/new/de/betliar-info-strom-qr2/",
        "ru": "https://www.qrlink.sk/new/ru/betliar-info-strom-qr2/",
        "pl": "https://www.qrlink.sk/new/pl/betliar-info-strom-qr2/",
        "hu": "https://www.qrlink.sk/new/hu/betliar-info-strom-qr2/"
      }
    },
    {
      "id": "betliar-info-strom-qr3",
      "miesto": "betliar-info-strom-architektura",
      "poradie": 3,
      "nazov": "Fontána",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2025/08/QR-3.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/3.-Fontána.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 48.705933,
        "lng": 20.510053
      },
      "mapEmbed": "https://www.google.com/maps?q=48.705933,20.510053&z=18&output=embed",
      "text": "<p>Na území parku sa dnes nachádzajú 3 fontány, z ktorých najhonosnejšia sa nachádza priamo pred kaštieľom. Slávnostný dvor kaštieľa (z francúzštiny: „cour ď honneur“) je priestor pred hlavným vstupom, ktorý je v betliarskom parku vyplnený veľkou fontánou s nádržou v tvare štvorlistu s vodometom. Fontána je obrúbená vysadenou ornamentikou zo strihaného krušpánu. Dominuje jej ženská postava s krídelkami,  vyhotovená zo železnej liatiny, ktorá je okrem zimných mesiacov obmývaná vodou z centrálne umiestnenej trysky. Má tvar štvorlístka a jej ústredným motívom je bronzová socha morskej nymfy − néreidky, dcéry morského boha Nérea (predtým označovanej ako „Psyché“), ktorej autorom je francúzsky akademický sochár Mathurin Moreau (1822-1912).</p>\n<p>Slávnostný dvor pred kaštieľom uzatvárajú zo severnej strany tri budovy bývalého majera, z ktorých dve sú dnes využívané ako depozity múzea a jedna bola prestavaná na súkromný penzión. Že v nich Andrássyovci chovali pôvodne ušľachtilé plemená koní dokazujú kamenné sochy konských hláv v umiestnené na štítoch všetkých troch budov.</p>\n<p>Hlavná parková komunikácia, ktorá vedie od vstupnej brány priamo ku kaštieľu, je pri vstupe do priestoru slávnostného dvora vyčlenená dvojicou kanelovaných stĺpov zo železnej liatiny, ktoré sem boli prevezené z bývalého andrássyovského parku vo Vlachove a využívajú sa ako žardiniéry s vysadenými kvetmi. Rovnako z Vlachova bola do Betliara privezená aj krásna kovaná železná brána s renesančnou ornamentikou uzatvárajúca dvor pri budove služobníctva.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/betliar-info-strom-qr3/",
        "en": "https://www.qrlink.sk/new/en/betliar-info-strom-qr3/",
        "de": "https://www.qrlink.sk/new/de/betliar-info-strom-qr3/",
        "ru": "https://www.qrlink.sk/new/ru/betliar-info-strom-qr3/",
        "pl": "https://www.qrlink.sk/new/pl/betliar-info-strom-qr3/",
        "hu": "https://www.qrlink.sk/new/hu/betliar-info-strom-qr3/"
      }
    },
    {
      "id": "betliar-info-strom-qr4",
      "miesto": "betliar-info-strom-architektura",
      "poradie": 4,
      "nazov": "Kaštieľ",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2025/08/QR-4.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/4.-Kaštieľ.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 48.706329,
        "lng": 20.510568
      },
      "mapEmbed": "https://www.google.com/maps?q=48.706329,20.510568&z=18&output=embed",
      "text": "<p>Kaštieľ, sídlo šľachtickej rodiny Andrassyovcov. Do súčasnej podoby bol prestavaný v rokoch 1881 – 1886 a už v tej dobe bol súčasťou komplexu budov:</p>\n<p>pokladňa – v minulosti kuchyňa + ubytovanie pre služobníctvo\nbudova – ubytovanie pre mladého pána grófa + jeho ateliér\noproti pokladni cez most – hospodárske budovy + stajne</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/betliar-info-strom-qr4/",
        "en": "https://www.qrlink.sk/new/en/betliar-info-strom-qr4/",
        "de": "https://www.qrlink.sk/new/de/betliar-info-strom-qr4/",
        "ru": "https://www.qrlink.sk/new/ru/betliar-info-strom-qr4/",
        "pl": "https://www.qrlink.sk/new/pl/betliar-info-strom-qr4/",
        "hu": "https://www.qrlink.sk/new/hu/betliar-info-strom-qr4/"
      }
    },
    {
      "id": "betliar-info-strom-qr5",
      "miesto": "betliar-info-strom-architektura",
      "poradie": 5,
      "nazov": "Hermesova studňa",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2025/08/QR-5.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/5.-Hermesova-studňa.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 48.707988,
        "lng": 20.509918
      },
      "mapEmbed": "https://www.google.com/maps?q=48.707988,20.509918&z=18&output=embed",
      "text": "<p>Táto malá okrúhla kamenná stavba s kupolou bola vybudovaná ako miesto na oddych, relax a osvieženie po dlhých prechádzkach parkom. Je upravená na jaskyňu s osvetlením cez otvor v kupole. Vzhľad studne je inšpirovaný antickým kúpeľom s bazénom a sochami. V strede kompozície dominovala štíhla postava nahého mladíka opretého o kmeň stromu ovinutého viničom, po jeho stranách boli dvaja amoreti sediaci na delfínoch a trúbiaci na mušle. Celý výjav bol osvetlený kruhovým otvorom v kupole vyplneným farebnými sklíčkami. Tie sa už dávno pominuli, spadla aj kamenná kupola, ktorá bola nahradená betónovou. Začiatkom 90. rokov minulého storočia zmizla najprv jedna plastika amoreta na delfínovi a čoskoro nato boli obidve zvyšné plastiky násilne rozbité a v kusoch uschované v depozitári múzea. Táto drobná stavba je známa ako Hermesova studňa; nevedno, kto jej prisúdil tento názov, lebo mladík v jaskyni nebol boh obchodu a posol bohov Hermes, ale Bakchus, boh dobrého vína a nespútaných osláv – bakchanálií. Hermesova studňa predstavuje drobnú parkovú architektúru z 90. rokov 18. storočia.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/betliar-info-strom-qr5/",
        "en": "https://www.qrlink.sk/new/en/betliar-info-strom-qr5/",
        "de": "https://www.qrlink.sk/new/de/betliar-info-strom-qr5/",
        "ru": "https://www.qrlink.sk/new/ru/betliar-info-strom-qr5/",
        "pl": "https://www.qrlink.sk/new/pl/betliar-info-strom-qr5/",
        "hu": "https://www.qrlink.sk/new/hu/betliar-info-strom-qr5/"
      }
    },
    {
      "id": "betliar-info-strom-qr6",
      "miesto": "betliar-info-strom-architektura",
      "poradie": 6,
      "nazov": "Slobodomurársky pavilón",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2025/08/QR-6.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/6.-Slobodomurársky-pavilón.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 48.708569,
        "lng": 20.510668
      },
      "mapEmbed": "https://www.google.com/maps?q=48.708569,20.510668&z=18&output=embed",
      "text": "<p>Povyše, na ostrovčeku obmývanom dvomi odrazenými ramenami potôčika, stojí osemuholníková stavba pavilónu s oknami v tvare geometrických slobodomurárskych symbolov. Objekt bol postavený koncom 18. storočia a bol viackrát prestavaný. Dal ho postaviť gróf Leopold Andrássy, ktorý bol zakladateľom slobodomurárskeho hnutia na Gemeri.</p>\n<p>Slobodomurárske hnutie vzniklo začiatkom 18.storočia v Anglicku a odtiaľ sa rozšírilo do ostatných častí Európy. Pôvodne bolo členstvo v organizácii utajované, neskôr členovia vytvárali uzavretú spoločnosť. Cieľom hnutia bolo mravné zdokonalenie, sloboda myslenia, náboženská tolerancia, povznesenie verejného blaha, mravnosti a ľudskosti, a sčasti aj dobročinnosť.</p>\n<p>Steny interiéru slobodomurárskeho pavilónu sú ozdobené maľbou antického chrámového stĺporadia, ktoré evokujú interiér chrámu. V interiéri kedysi stávala biela mramorová socha – ženské torzo pokryté štylizovanou rybárskou sieťou – dnes je socha kvôli bezpečnosti umiestnená v kaštieli. Namiesto nej sú na podlahe uložené dva poškodené kamenné barokové epitafy (náhrobné kamene), ktoré boli v 70-tych rokoch minulého storočia sňaté z budovy poľovníckeho pavilónu v blízkom lese (Bosniak). Pôvodne ich bolo päť, všetky boli vtedy reštaurované.</p>\n<p>V okolí pavilónu sú pomerne časte 3 a 5 kmenne stromy, ktoré podľa niektorých historikov/odborníkov boli vysadené zámerné, (aby spolu zrástli) aby bola aj v prírode zvýraznená slobodomurárska symbolika.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/betliar-info-strom-qr6/",
        "en": "https://www.qrlink.sk/new/en/betliar-info-strom-qr6/",
        "de": "https://www.qrlink.sk/new/de/betliar-info-strom-qr6/",
        "ru": "https://www.qrlink.sk/new/ru/betliar-info-strom-qr6/",
        "pl": "https://www.qrlink.sk/new/pl/betliar-info-strom-qr6/",
        "hu": "https://www.qrlink.sk/new/hu/betliar-info-strom-qr6/"
      }
    },
    {
      "id": "betliar-info-strom-qr7",
      "miesto": "betliar-info-strom-architektura",
      "poradie": 7,
      "nazov": "Veľký Vodopád",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2025/08/QR-7.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/7.-Veľký-Vodopád.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 48.710302,
        "lng": 20.510427
      },
      "mapEmbed": "https://www.google.com/maps?q=48.710302,20.510427&z=18&output=embed",
      "text": "<p>Rímsky vodopád navrhol Josef Bergmann ako súčasť unikátneho vodného systému počas druhej veľkej úpravy parku v 20. rokoch 19. storočia. Vodopád v podobe zrúcaniny rímskeho antického akvaduktu bol postavený v roku 1823. Je jedinečný aj tým, že ide o najvyšší umelý vodopád na Slovensku, vysoký približne deväť metrov.</p>\n<p>Stavba vodopádu je veľmi zaujímavá – voda sa privádza k prepadu korytom po kamennom klenutom moste (odtiaľ pochádza aj miestne pomenovanie “padací most”) a voda padá z výšky 9 m do jazierka. Pod vodopádom je jaskyňa (grotta), ktorá bola začiatkom 20. storočia prestavaná na zverinec. V rokoch 1908-1914 tu Andrássyovci chovali ľadové medvede. (veľký unikát pre tento región, prvý chov ľadových medveďov v strednej Európe.)</p>\n<p>Jaskyňa bola spolu s menším jazierkom pod vodopádom ohradená silným mrežovým plotom. Rybník pod veľkým vodopádom bol vybudovaný okolo roku 1830 a mal pravdepodobne slúžiť na chov vodného vtáctva, pretože už architekt Bergmann mal vo svojom projekte na rybníku nakreslené labute.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/betliar-info-strom-qr7/",
        "en": "https://www.qrlink.sk/new/en/betliar-info-strom-qr7/",
        "de": "https://www.qrlink.sk/new/de/betliar-info-strom-qr7/",
        "ru": "https://www.qrlink.sk/new/ru/betliar-info-strom-qr7/",
        "pl": "https://www.qrlink.sk/new/pl/betliar-info-strom-qr7/",
        "hu": "https://www.qrlink.sk/new/hu/betliar-info-strom-qr7/"
      }
    },
    {
      "id": "betliar-info-strom-qr8",
      "miesto": "betliar-info-strom-architektura",
      "poradie": 8,
      "nazov": "Zavlažovací systém",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2025/08/QR-8.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/8.-Zavlažovací-systém.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 48.714267,
        "lng": 20.51212
      },
      "mapEmbed": "https://www.google.com/maps?q=48.714267,20.512120&z=18&output=embed",
      "text": "<p>Významným činiteľom v architektúre parku je umelý vodný systém. Umelý vodný systém bol v parku dobudovaný v druhej polovici 19.storočia. Najväčšou stavbou bol rybník, v severnej časti parku. Jeho výstavbou sa zabezpečil stály a rovnomerný prívod vody do veľkého vodopádu, všetkých troch fontán a malého horného račieho rybníka.</p>\n<p>Vo veľkom rybníku sa zaviedol chov kaprov a v minulosti sa tu chovali aj labute. V súčasnosti sú na území parku 3 rybníky. Veľký, račí (v minulosti sa tam chovali raky) a tretí pod veľkým vodopádom.</p>\n<p>Z vodných stavieb sú pozoruhodné aj pomerne dlhé umelé vodné korytá. Sieť umelých korýt bola ešte začiatkom 20.storočia podstatne dlhšia, v dôsledku nedostatočnej údržby, a tiež že stratili svoj význam, niektoré vodné toky úplne zanikli.</p>\n<p>Voda má predovšetkým funkciu estetickú (optickú) ale nemenej dôležitý je aj jej biologický význam. Optimálne množstvo vody vo všetkých častiach parku (v každom ročnom období) vytvára predpoklady pre nerušený rast drevín, a tiež lúky v parku vďačia za svoju zeleň dobrému zásobovaniu vodou.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/betliar-info-strom-qr8/",
        "en": "https://www.qrlink.sk/new/en/betliar-info-strom-qr8/",
        "de": "https://www.qrlink.sk/new/de/betliar-info-strom-qr8/",
        "ru": "https://www.qrlink.sk/new/ru/betliar-info-strom-qr8/",
        "pl": "https://www.qrlink.sk/new/pl/betliar-info-strom-qr8/",
        "hu": "https://www.qrlink.sk/new/hu/betliar-info-strom-qr8/"
      }
    },
    {
      "id": "betliar-info-strom-qr9",
      "miesto": "betliar-info-strom-architektura",
      "poradie": 9,
      "nazov": "Olympijský oheň",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2025/08/QR-9.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/9.-Olympijský-oheň.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 48.70966,
        "lng": 20.511112
      },
      "mapEmbed": "https://www.google.com/maps?q=48.709660,20.511112&z=18&output=embed",
      "text": "<p>Vedľa chodníka môžeme vidieť z vápenatého tufu (penovec) vyhotovený, 3,10 m vysoký stĺp. Jeho dnešné pomenovanie je Olympijský oheň – stĺp mal údajne kedysi na vrchole misovitú nádobu pre oheň a odtiaľ pochádza jeho dnešné pomenovanie. Nevieme však s určitosťou povedať, či bol stĺp skutočne postavený pre takéto účely. Je možné, že architekt nechal stĺp postaviť len kvôli doplneniu a spestreniu (riedkej) skupiny stromov pred vodopádom.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/betliar-info-strom-qr9/",
        "en": "https://www.qrlink.sk/new/en/betliar-info-strom-qr9/",
        "de": "https://www.qrlink.sk/new/de/betliar-info-strom-qr9/",
        "ru": "https://www.qrlink.sk/new/ru/betliar-info-strom-qr9/",
        "pl": "https://www.qrlink.sk/new/pl/betliar-info-strom-qr9/",
        "hu": "https://www.qrlink.sk/new/hu/betliar-info-strom-qr9/"
      }
    },
    {
      "id": "betliar-info-strom-qr10",
      "miesto": "betliar-info-strom-architektura",
      "poradie": 10,
      "nazov": "Japonský most",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2025/08/QR-10.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/10.-Japonský-most.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 48.708112,
        "lng": 20.511672
      },
      "mapEmbed": "https://www.google.com/maps?q=48.708112,20.511672&z=18&output=embed",
      "text": "<p>Tiež miestne zvaný “Kalapový most“ bol zhotovený v čase prenikania východoázijských prvkov do našej kultúry, v druhej polovici 80. rokov 19. storočia. Na drevenej konštrukcii sa nachádza klobúková plechová strecha so zdvihnutými okrajmi, ktoré sú typické pre japonské altánky.</p>\n<p>Pôvodný most strhol vodný príval v roku 1971, verná kópia mostu bola zhotovená v roku 1979. (Podľa niektorých údajov na ľavom brehu potoka bola japonská záhrada).</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/betliar-info-strom-qr10/",
        "en": "https://www.qrlink.sk/new/en/betliar-info-strom-qr10/",
        "de": "https://www.qrlink.sk/new/de/betliar-info-strom-qr10/",
        "ru": "https://www.qrlink.sk/new/ru/betliar-info-strom-qr10/",
        "pl": "https://www.qrlink.sk/new/pl/betliar-info-strom-qr10/",
        "hu": "https://www.qrlink.sk/new/hu/betliar-info-strom-qr10/"
      }
    },
    {
      "id": "betliar-info-strom-qr11",
      "miesto": "betliar-info-strom-architektura",
      "poradie": 11,
      "nazov": "Čínsky pavilón",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2025/08/QR-11.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/11.-Čínsky-pavilón.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 48.70729,
        "lng": 20.51154
      },
      "mapEmbed": "https://www.google.com/maps?q=48.707290,20.511540&z=18&output=embed",
      "text": "<p>Má pôdorys v podobe osemuholníka s kupolovitou strechou, je zhotovený z plechu a slúžil na odkladanie športových potrieb a na odpočinok. Bol postavený v prvej polovici 80-tych rokov 19.storočia.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/betliar-info-strom-qr11/",
        "en": "https://www.qrlink.sk/new/en/betliar-info-strom-qr11/",
        "de": "https://www.qrlink.sk/new/de/betliar-info-strom-qr11/",
        "ru": "https://www.qrlink.sk/new/ru/betliar-info-strom-qr11/",
        "pl": "https://www.qrlink.sk/new/pl/betliar-info-strom-qr11/",
        "hu": "https://www.qrlink.sk/new/hu/betliar-info-strom-qr11/"
      }
    },
    {
      "id": "betliar-info-strom-qr12",
      "miesto": "betliar-info-strom-architektura",
      "poradie": 12,
      "nazov": "Parkové plastiky",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2025/08/QR-12.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/12.-Plastiky.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 48.705933,
        "lng": 20.510053
      },
      "mapEmbed": "https://www.google.com/maps?q=48.705933,20.510053&z=18&output=embed",
      "text": "<p>V minulosti bolo v parku umiestnených niekoľko plastík, z ktorých niektoré boli vyhotovené podľa návrhov francúzskych sochárov 19.storočia. V 2005 boli odcudzené tri vzácne sochy – socha rytiera Arpáda (veľmi pekná), vzácna socha budhu ktorá zmizla spred pokladne (umiestnená blízko fontány) a tiež socha černocha, ktorá bola odliata v železiarňach v Drnave.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/betliar-info-strom-qr12/",
        "en": "https://www.qrlink.sk/new/en/betliar-info-strom-qr12/",
        "de": "https://www.qrlink.sk/new/de/betliar-info-strom-qr12/",
        "ru": "https://www.qrlink.sk/new/ru/betliar-info-strom-qr12/",
        "pl": "https://www.qrlink.sk/new/pl/betliar-info-strom-qr12/",
        "hu": "https://www.qrlink.sk/new/hu/betliar-info-strom-qr12/"
      }
    },
    {
      "id": "betliar-info-strom-qr13",
      "miesto": "betliar-info-strom-architektura",
      "poradie": 13,
      "nazov": "Veľký rybník",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2025/08/QR-13.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/13.-Veľký-rybník.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 48.715222,
        "lng": 20.513051
      },
      "mapEmbed": "https://www.google.com/maps?q=48.715222,20.513051&z=18&output=embed",
      "text": "<p>Bol vybudovaný v 80tych rokoch 19. storočia a má rozlohu 4750m2. Na rybníku je vybudované prístavisko, z brehu vedie drevený mostík do malej besiedky.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/betliar-info-strom-qr13/",
        "en": "https://www.qrlink.sk/new/en/betliar-info-strom-qr13/",
        "de": "https://www.qrlink.sk/new/de/betliar-info-strom-qr13/",
        "ru": "https://www.qrlink.sk/new/ru/betliar-info-strom-qr13/",
        "pl": "https://www.qrlink.sk/new/pl/betliar-info-strom-qr13/",
        "hu": "https://www.qrlink.sk/new/hu/betliar-info-strom-qr13/"
      }
    },
    {
      "id": "betliar-info-strom-qr14",
      "miesto": "betliar-info-strom-architektura",
      "poradie": 14,
      "nazov": "Zverinec",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2025/08/QR-14.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2025/09/zverinec.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 48.716717,
        "lng": 20.513134
      },
      "mapEmbed": "https://www.google.com/maps?q=48.716717,20.513134&z=18&output=embed",
      "text": "<p>Vedľa veľkého rybníka (asi 20m severne) môžete nájsť zvernicu, ktorá bola postavená koncom 19 storočia, pripomínajúci stredoveký hrad. Andrassyovci v ňom chovali medvede hnedé, rysy, vydru, kunu, jazveca a v ohrade tiež muflóny.</p>\n<p>Dnes je zverinec opustený – zvieratá boli z neho vypustené na slobodu. (V období druhej svetovej vojny).</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/betliar-info-strom-qr14/",
        "en": "https://www.qrlink.sk/new/en/betliar-info-strom-qr14/",
        "de": "https://www.qrlink.sk/new/de/betliar-info-strom-qr14/",
        "ru": "https://www.qrlink.sk/new/ru/betliar-info-strom-qr14/",
        "pl": "https://www.qrlink.sk/new/pl/betliar-info-strom-qr14/",
        "hu": "https://www.qrlink.sk/new/hu/betliar-info-strom-qr14/"
      }
    },
    {
      "id": "betliar-info-strom-qr15",
      "miesto": "betliar-info-strom-architektura",
      "poradie": 15,
      "nazov": "Bosniak / Bosnia bar",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2025/08/QR-15.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/15.-Bosniak-Bosnia-bar.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 48.709349,
        "lng": 20.515601
      },
      "mapEmbed": "https://www.google.com/maps?q=48.709349,20.515601&z=18&output=embed",
      "text": "<p>Skladá sa z dvoch veží a prízemnej stavby medzi nimi. Stavba je dnes už v zrúcaninách po požiari.</p>\n<p>Podľa povestí aj podľa mienky odborníkov sú niektoré jej časti veľmi staré, ale v žiadnej staršej mape nie je stavba zakreslená. Výskum naznačuje, že objekt sa budoval vo viacerých stavebných etapách, čo dokazujú odlišné druhy malty, kameňa a odlišné veľkosti tehál. Jednotlivé časti objektu teda vznikali v časovo (a tiež výtvarne) odlišných obdobiach. Podľa odlišného pôdorysu veží možno súdiť, že jedna (juhovychodná) mala funkciu pozorovaciu a druhá (severozapadna) obrannú.</p>\n<p>V 19. storočí služila stavba grófovi Emanuelovi I. Andrássymu ako priestor pre vystavenie jeho exotických trofejí</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/betliar-info-strom-qr15/",
        "en": "https://www.qrlink.sk/new/en/betliar-info-strom-qr15/",
        "de": "https://www.qrlink.sk/new/de/betliar-info-strom-qr15/",
        "ru": "https://www.qrlink.sk/new/ru/betliar-info-strom-qr15/",
        "pl": "https://www.qrlink.sk/new/pl/betliar-info-strom-qr15/",
        "hu": "https://www.qrlink.sk/new/hu/betliar-info-strom-qr15/"
      }
    },
    {
      "id": "betliar-info-strom-qr16",
      "miesto": "betliar-info-strom-fauna-flora",
      "poradie": 1,
      "nazov": "Borovica čierna",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2025/08/QR-16.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/16.-Borovica-čierna.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 48.708339,
        "lng": 20.509412
      },
      "mapEmbed": "https://www.google.com/maps?q=48.708339,20.509412&z=18&output=embed",
      "text": "<p>V parku južne od kaštieľa, asi 7m od hospodárskej budovy, má výšku okolo 25m a predpokladáme, že má viac ako 200 rokov (cca 220). Vysoký a statný strom, veľmi rozšírený v strednej Európe, na Balkáne a v Stredomorí.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/betliar-info-strom-qr16/",
        "en": "https://www.qrlink.sk/new/en/betliar-info-strom-qr16/",
        "de": "https://www.qrlink.sk/new/de/betliar-info-strom-qr16/",
        "ru": "https://www.qrlink.sk/new/ru/betliar-info-strom-qr16/",
        "pl": "https://www.qrlink.sk/new/pl/betliar-info-strom-qr16/",
        "hu": "https://www.qrlink.sk/new/hu/betliar-info-strom-qr16/"
      }
    },
    {
      "id": "betliar-info-strom-qr17",
      "miesto": "betliar-info-strom-fauna-flora",
      "poradie": 2,
      "nazov": "Douglaska tisolistá",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2025/08/QR-17.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/17.-Douglaska-tisolistá.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 48.706683,
        "lng": 20.508922
      },
      "mapEmbed": "https://www.google.com/maps?q=48.706683,20.508922&z=18&output=embed",
      "text": "<p>Pochádza zo západnej časti Severnej Ameriky, kde v niektorých pohoriach vytvára súvislé porasty. Dosahujú výšku až 80m – Rastie rýchlo.</p>\n<p>V parku rastie viacero douglasiek, najkrajším a zrejme aj najstarším expemplarom je douglaska solitér na lesnej polianke zapadne od kastiela. Jej vyska je viac ako 30m. Odhadujeme, že môže mať viac ako 200 rokov. Bol vysadený pravdepodobne v prvých rokoch 19.storočia, je pekne urastený, koruna je široko kúžeľovitá. Pravidlene kvitne a rodí šišky.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/betliar-info-strom-qr17/",
        "en": "https://www.qrlink.sk/new/en/betliar-info-strom-qr17/",
        "de": "https://www.qrlink.sk/new/de/betliar-info-strom-qr17/",
        "ru": "https://www.qrlink.sk/new/ru/betliar-info-strom-qr17/",
        "pl": "https://www.qrlink.sk/new/pl/betliar-info-strom-qr17/",
        "hu": "https://www.qrlink.sk/new/hu/betliar-info-strom-qr17/"
      }
    },
    {
      "id": "betliar-info-strom-qr18",
      "miesto": "betliar-info-strom-fauna-flora",
      "poradie": 3,
      "nazov": "Tsuga kanadská",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2025/08/QR-18.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/18.-Tsuga-kanadská.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 48.705616,
        "lng": 20.510145
      },
      "mapEmbed": "https://www.google.com/maps?q=48.705616,20.510145&z=18&output=embed",
      "text": "<p>Pochádza z chladnejších častí Severnej Ameriky, je to široko kužeľovitý, pekne rozkonárený strom s jemnou textúrou a tmavozelenou farbou. Do Európy sa prvé semená dostali okolo roku 1736 a odvtedy sa pestuje ako dekoratívny, mrazuvzdorný strom. V našom parku rastú v tesnej blízkosti pri Tsuge zmiešané lesné dreviny, ktoré ju značne priestorovo obmedzujú.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/betliar-info-strom-qr18/",
        "en": "https://www.qrlink.sk/new/en/betliar-info-strom-qr18/",
        "de": "https://www.qrlink.sk/new/de/betliar-info-strom-qr18/",
        "ru": "https://www.qrlink.sk/new/ru/betliar-info-strom-qr18/",
        "pl": "https://www.qrlink.sk/new/pl/betliar-info-strom-qr18/",
        "hu": "https://www.qrlink.sk/new/hu/betliar-info-strom-qr18/"
      }
    },
    {
      "id": "betliar-info-strom-qr19",
      "miesto": "betliar-info-strom-fauna-flora",
      "poradie": 4,
      "nazov": "Platan javorolistý",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2025/08/QR-19.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/19.-Platan-javorolistý.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 48.706692,
        "lng": 20.511001
      },
      "mapEmbed": "https://www.google.com/maps?q=48.706692,20.511001&z=18&output=embed",
      "text": "<p>Platany sú rozšírené v juhovýchodnej Európe, Severnej Amerike a tiež v Mexiku. Platany sú mohutné stromy so širokou košatou korunou. V betliarskom parku sa nachádza jeden Platan, v jeho susedstve však rastie gaštan jedlý, smrek pichľavý a z dvoch strán ho obklopuje súvislý les. Pri takýchto podmienkach nie je prekvapením, že Platan rastovo zaostáva a korunou vôbec nepripomína platany.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/betliar-info-strom-qr19/",
        "en": "https://www.qrlink.sk/new/en/betliar-info-strom-qr19/",
        "de": "https://www.qrlink.sk/new/de/betliar-info-strom-qr19/",
        "ru": "https://www.qrlink.sk/new/ru/betliar-info-strom-qr19/",
        "pl": "https://www.qrlink.sk/new/pl/betliar-info-strom-qr19/",
        "hu": "https://www.qrlink.sk/new/hu/betliar-info-strom-qr19/"
      }
    },
    {
      "id": "betliar-info-strom-qr20",
      "miesto": "betliar-info-strom-fauna-flora",
      "poradie": 5,
      "nazov": "Višňa pílkatá (sakura)",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2025/08/QR-20.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/20.-Višňa-pílkatá-sakura.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 48.706692,
        "lng": 20.511001
      },
      "mapEmbed": "https://www.google.com/maps?q=48.706692,20.511001&z=18&output=embed",
      "text": "<p>Je to strom podobný čerešni a pochádza z východnej Ázie (Čína, Japonsko). Dorastá do výšky až 20 metrov.</p>\n<p>V parku rastú 4 stromy tohto druhu, dva ori severovýchodnej veži kaštieľa, v kulise severovýchodného priehľadu a ďalšie dva na polianke severne od kaštieľa.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/betliar-info-strom-qr20/",
        "en": "https://www.qrlink.sk/new/en/betliar-info-strom-qr20/",
        "de": "https://www.qrlink.sk/new/de/betliar-info-strom-qr20/",
        "ru": "https://www.qrlink.sk/new/ru/betliar-info-strom-qr20/",
        "pl": "https://www.qrlink.sk/new/pl/betliar-info-strom-qr20/",
        "hu": "https://www.qrlink.sk/new/hu/betliar-info-strom-qr20/"
      }
    },
    {
      "id": "betliar-info-strom-qr21",
      "miesto": "betliar-info-strom-fauna-flora",
      "poradie": 6,
      "nazov": "Dub letný stĺpovitý",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2025/08/QR-21.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/21.-Dub-letný-stĺpovitý.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 48.71051,
        "lng": 20.511554
      },
      "mapEmbed": "https://www.google.com/maps?q=48.710510,20.511554&z=18&output=embed",
      "text": "<p>Má hustú stĺpovitú až metlovitú korunu. V parku je vysadený na troch miestach: pri slobodomurárskom pavilóne, v severovýchodnom priehľade a na lúčke východne od kaštieľa. Stromy boli vysadené v polovici minulého storočia (okolo 1960).</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/betliar-info-strom-qr21/",
        "en": "https://www.qrlink.sk/new/en/betliar-info-strom-qr21/",
        "de": "https://www.qrlink.sk/new/de/betliar-info-strom-qr21/",
        "ru": "https://www.qrlink.sk/new/ru/betliar-info-strom-qr21/",
        "pl": "https://www.qrlink.sk/new/pl/betliar-info-strom-qr21/",
        "hu": "https://www.qrlink.sk/new/hu/betliar-info-strom-qr21/"
      }
    },
    {
      "id": "betliar-info-strom-qr22",
      "miesto": "betliar-info-strom-fauna-flora",
      "poradie": 7,
      "nazov": "Lipa americká",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2025/08/QR-22.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/22.-Lipa-americká.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 48.709194,
        "lng": 20.511602
      },
      "mapEmbed": "https://www.google.com/maps?q=48.709194,20.511602&z=18&output=embed",
      "text": "<p>Pochádza zo Severnej Ameriky, dorastá do výšky 30-40m. Je to mohutný strom so širokou kuželovitou korunou. V parku môžeme nájsť niekoľko líp amerických. Najkrajšie nájdeme na ľavom brehu Betliarskeho potoka na lúčke s vejmutovkami. Ďalšie sú napravo od druhej fontány a pri veľkom vodopáde.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/betliar-info-strom-qr22/",
        "en": "https://www.qrlink.sk/new/en/betliar-info-strom-qr22/",
        "de": "https://www.qrlink.sk/new/de/betliar-info-strom-qr22/",
        "ru": "https://www.qrlink.sk/new/ru/betliar-info-strom-qr22/",
        "pl": "https://www.qrlink.sk/new/pl/betliar-info-strom-qr22/",
        "hu": "https://www.qrlink.sk/new/hu/betliar-info-strom-qr22/"
      }
    },
    {
      "id": "betliar-info-strom-qr23",
      "miesto": "betliar-info-strom-fauna-flora",
      "poradie": 8,
      "nazov": "Ľaliovník tulipánokvetý",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2025/08/QR-23.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/23.-Ľaliovník-tulipánokvetý.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 48.706038,
        "lng": 20.510848
      },
      "mapEmbed": "https://www.google.com/maps?q=48.706038,20.510848&z=18&output=embed",
      "text": "<p>Pomerne mladé stromy, ľaliovník má veľmi vzácne drevo, z ktorého sa napríklad vyrábajú aj hudobné nástroje. Kvety pripomínajú malé tulipány, preto ten názov.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/betliar-info-strom-qr23/",
        "en": "https://www.qrlink.sk/new/en/betliar-info-strom-qr23/",
        "de": "https://www.qrlink.sk/new/de/betliar-info-strom-qr23/",
        "ru": "https://www.qrlink.sk/new/ru/betliar-info-strom-qr23/",
        "pl": "https://www.qrlink.sk/new/pl/betliar-info-strom-qr23/",
        "hu": "https://www.qrlink.sk/new/hu/betliar-info-strom-qr23/"
      }
    },
    {
      "id": "betliar-info-strom-qr24",
      "miesto": "betliar-info-strom-fauna-flora",
      "poradie": 9,
      "nazov": "Ginko dvojlaločné",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2025/08/QR-24.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/24.-Ginko-dvojlaločné.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 48.706533,
        "lng": 20.511006
      },
      "mapEmbed": "https://www.google.com/maps?q=48.706533,20.511006&z=18&output=embed",
      "text": "<p>Vlasťou tohto stromu je pravdepodobne východná Čína, odpradávna sa pestuje vo východnej Ázii, hlavne okolo budhistických chrámov (bol posvätným stromom starých číňanov), kde možno nájsť stromy staré vyše 1000 rokov. Do Európy bolo Ginko dovezené okolo roku 1730. Dorastá do výšky 30m a dožíva sa veku až 2000 rokov. Jeho listy majú blahodárne a liečivé účinky.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/betliar-info-strom-qr24/",
        "en": "https://www.qrlink.sk/new/en/betliar-info-strom-qr24/",
        "de": "https://www.qrlink.sk/new/de/betliar-info-strom-qr24/",
        "ru": "https://www.qrlink.sk/new/ru/betliar-info-strom-qr24/",
        "pl": "https://www.qrlink.sk/new/pl/betliar-info-strom-qr24/",
        "hu": "https://www.qrlink.sk/new/hu/betliar-info-strom-qr24/"
      }
    },
    {
      "id": "betliar-info-strom-qr25",
      "miesto": "betliar-info-strom-fauna-flora",
      "poradie": 10,
      "nazov": "Smrek (obyčajný) strukovitý",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2025/08/QR-25.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/25.-Smrek-obyčajný-strukovitý.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 48.706446,
        "lng": 20.510877
      },
      "mapEmbed": "https://www.google.com/maps?q=48.706446,20.510877&z=18&output=embed",
      "text": "<p>Je pozoruhodný najmä z toho dôvodu, že do výšky asi 4m sú konáre kuželovito zhrubnuté. V štvormetrovej výške kmeňa sa bradavičnaté zhrubnutia postupne zmenšujú, až úplne miznú.</p>\n<p>(V parku v rastú ďalšie dva exempláre smreka, ktoré majú bradavičnato zhrubnuté základy konárov, no menej ako opísaný smrek)</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/betliar-info-strom-qr25/",
        "en": "https://www.qrlink.sk/new/en/betliar-info-strom-qr25/",
        "de": "https://www.qrlink.sk/new/de/betliar-info-strom-qr25/",
        "ru": "https://www.qrlink.sk/new/ru/betliar-info-strom-qr25/",
        "pl": "https://www.qrlink.sk/new/pl/betliar-info-strom-qr25/",
        "hu": "https://www.qrlink.sk/new/hu/betliar-info-strom-qr25/"
      }
    },
    {
      "id": "betliar-info-strom-qr26",
      "miesto": "betliar-info-strom-fauna-flora",
      "poradie": 11,
      "nazov": "Smrekovec Dahúrsky",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2025/08/QR-26.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/26.-Smrekovec-Dahúrsky.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 48.70669,
        "lng": 20.510739
      },
      "mapEmbed": "https://www.google.com/maps?q=48.706690,20.510739&z=18&output=embed",
      "text": "<p>Jeden z najstarších a najväčších Smrekovcov Dahúrskych na území Slovenska.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/betliar-info-strom-qr26/",
        "en": "https://www.qrlink.sk/new/en/betliar-info-strom-qr26/",
        "de": "https://www.qrlink.sk/new/de/betliar-info-strom-qr26/",
        "ru": "https://www.qrlink.sk/new/ru/betliar-info-strom-qr26/",
        "pl": "https://www.qrlink.sk/new/pl/betliar-info-strom-qr26/",
        "hu": "https://www.qrlink.sk/new/hu/betliar-info-strom-qr26/"
      }
    },
    {
      "id": "betliar-info-strom-qr27",
      "miesto": "betliar-info-strom-fauna-flora",
      "poradie": 12,
      "nazov": "Javor mliečny",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2025/08/QR-27-2.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/27.-Javor-mliečny.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 48.707153,
        "lng": 20.510791
      },
      "mapEmbed": "https://www.google.com/maps?q=48.707153,20.510791&z=18&output=embed",
      "text": "<p>Strom patriaci do čeľade javorovitých, ktorá má asi 120 druhov. Javor mliečny je 20-30 m vysoký strom a jeho listy pri zlomení ronia mlieko. V minulosti sa z javorovej šťavy vyrábal cukor, a dodnes sa z nej vyrábajú sirupy. Často sa vysádza v mestských parkoch.</p>\n<p>Najkrajšie javory stoja na lúke pred kaštieľom a na lúke za kaštieľom.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/betliar-info-strom-qr27/",
        "en": "https://www.qrlink.sk/new/en/betliar-info-strom-qr27/",
        "de": "https://www.qrlink.sk/new/de/betliar-info-strom-qr27/",
        "ru": "https://www.qrlink.sk/new/ru/betliar-info-strom-qr27/",
        "pl": "https://www.qrlink.sk/new/pl/betliar-info-strom-qr27/",
        "hu": "https://www.qrlink.sk/new/hu/betliar-info-strom-qr27/"
      }
    },
    {
      "id": "betliar-info-strom-qr28",
      "miesto": "betliar-info-strom-fauna-flora",
      "poradie": 13,
      "nazov": "Katalpa trubačovitá",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2025/08/QR-28-2.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/28.-Katalpa-trubačovitá.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 48.70623,
        "lng": 20.510967
      },
      "mapEmbed": "https://www.google.com/maps?q=48.706230,20.510967&z=18&output=embed",
      "text": "<p>Dorastá asi do výšky 15m, korunu má kužeľovitú a nepravidelnú. Kvitne v lete (jún-júl). V parku rastie viacero stromov katalpy trubačovitej, najkrajšie nájdeme v ľavej kulise severozápadného priehľadu, v pozadí s mohutnými smrekmi. Počas kvitnutia má veľmi pekné kvety a často sa do parku k tomuto stromu chodia fotiť nevesty.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/betliar-info-strom-qr28/",
        "en": "https://www.qrlink.sk/new/en/betliar-info-strom-qr28/",
        "de": "https://www.qrlink.sk/new/de/betliar-info-strom-qr28/",
        "ru": "https://www.qrlink.sk/new/ru/betliar-info-strom-qr28/",
        "pl": "https://www.qrlink.sk/new/pl/betliar-info-strom-qr28/",
        "hu": "https://www.qrlink.sk/new/hu/betliar-info-strom-qr28/"
      }
    },
    {
      "id": "betliar-info-strom-qr29",
      "miesto": "betliar-info-strom-fauna-flora",
      "poradie": 14,
      "nazov": "Pagaštan konský",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2025/08/QR-29-3.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/29.-Pagaštan-konský.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 48.706648,
        "lng": 20.509593
      },
      "mapEmbed": "https://www.google.com/maps?q=48.706648,20.509593&z=18&output=embed",
      "text": "<p>V betliarskom parku je Pagaštan veľmi rozšíreným stromom, boli vysadené nielen z estetických dôvodov, ale aj preto, že ich plody slúžili ako potrava pre vysokú zver.</p>\n<p>Pagaštanová alej je dlhá asi 1600 m a je v nej vysadených viac ako 600 stromov (cca 650). Stromy boli vysadené pred koncom 19.storočia. (1895)</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/betliar-info-strom-qr29/",
        "en": "https://www.qrlink.sk/new/en/betliar-info-strom-qr29/",
        "de": "https://www.qrlink.sk/new/de/betliar-info-strom-qr29/",
        "ru": "https://www.qrlink.sk/new/ru/betliar-info-strom-qr29/",
        "pl": "https://www.qrlink.sk/new/pl/betliar-info-strom-qr29/",
        "hu": "https://www.qrlink.sk/new/hu/betliar-info-strom-qr29/"
      }
    },
    {
      "id": "betliar-info-strom-qr30",
      "miesto": "betliar-info-strom-fauna-flora",
      "poradie": 15,
      "nazov": "Buk červenolistý",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2025/08/QR-30.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/30.-Buk-červenolistý.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 48.705419,
        "lng": 20.50968
      },
      "mapEmbed": "https://www.google.com/maps?q=48.705419,20.509680&z=18&output=embed",
      "text": "<p>Je kultivarom (odrodou) buka lesného, po vypučaní má červené listy, neskôr stmavnú. V parku rastu buky červenolisté na viacerých miestach, buď samostatne, alebo tiež v skupinách. Krásne exempláre rastú na lúke pred kaštieľom. Všetkým bukom červenolistým odhadujeme 140 až 150 rokov.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/betliar-info-strom-qr30/",
        "en": "https://www.qrlink.sk/new/en/betliar-info-strom-qr30/",
        "de": "https://www.qrlink.sk/new/de/betliar-info-strom-qr30/",
        "ru": "https://www.qrlink.sk/new/ru/betliar-info-strom-qr30/",
        "pl": "https://www.qrlink.sk/new/pl/betliar-info-strom-qr30/",
        "hu": "https://www.qrlink.sk/new/hu/betliar-info-strom-qr30/"
      }
    },
    {
      "id": "betliar-info-strom-qr31",
      "miesto": "betliar-info-strom-fauna-flora",
      "poradie": 16,
      "nazov": "Zelkova ostrolistá",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2025/08/qr31.png",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/31.-Zelkova-ostrolistá.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 48.705493,
        "lng": 20.509575
      },
      "mapEmbed": "https://www.google.com/maps?q=48.705493,20.509575&z=18&output=embed",
      "text": "<p>Pochádza z Japonska, do Európy sa doviezla okolo roku 1860. Dorastá do výšky 30m. Má krátky kmeň, rozložitú korunu s mierne ovysnutými konármi.</p>\n<p>V tunajších parkoch je to zriedkavý strom (ďalšia v botanickej záhrade v Banskej Štiavnici).</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/betliar-info-strom-qr31/",
        "en": "https://www.qrlink.sk/new/en/betliar-info-strom-qr31/",
        "de": "https://www.qrlink.sk/new/de/betliar-info-strom-qr31/",
        "ru": "https://www.qrlink.sk/new/ru/betliar-info-strom-qr31/",
        "pl": "https://www.qrlink.sk/new/pl/betliar-info-strom-qr31/",
        "hu": "https://www.qrlink.sk/new/hu/betliar-info-strom-qr31/"
      }
    },
    {
      "id": "betliar-info-strom-qr32",
      "miesto": "betliar-info-strom-fauna-flora",
      "poradie": 17,
      "nazov": "Magnólia končistolistá",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2025/08/QR-32.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/32.-Magnólia-končistolistá.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 48.706115,
        "lng": 20.509837
      },
      "mapEmbed": "https://www.google.com/maps?q=48.706115,20.509837&z=18&output=embed",
      "text": "<p>Pochádza zo Severnej Ameriky a východnej Ázie, kde ich rastie asi 30 druhov. Strom vysoký 20 až 30 m, s kužeľovitou korunou a podlhovastými listami.</p>\n<p>V parku rastie jeden exemplár, ktorý má pre rast priaznivé podmienky (nie veľké nároky na pôdu, a dostatok vlahy) a preto narástol do pozoruhodných rozmerov – jedna z najväčších magnólií svojho druhu v strednej Európe.</p>\n<p>Magnólia bola u nás v parku zasadená začiatkom 20.storočia (1900s), do Betliara bola sadenica dovezená z Moravy. Vtedajší záhradník sa ju snažil rozmnožiť vegetatívnym spôsobom, preto má konáre, ktoré rastú smerom priamo dohora. V roku 2018 sa strom zúčastnil súťaže strom roka, v ktorej obsadil pekné tretie miesto.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/betliar-info-strom-qr32/",
        "en": "https://www.qrlink.sk/new/en/betliar-info-strom-qr32/",
        "de": "https://www.qrlink.sk/new/de/betliar-info-strom-qr32/",
        "ru": "https://www.qrlink.sk/new/ru/betliar-info-strom-qr32/",
        "pl": "https://www.qrlink.sk/new/pl/betliar-info-strom-qr32/",
        "hu": "https://www.qrlink.sk/new/hu/betliar-info-strom-qr32/"
      }
    },
    {
      "id": "betliar-info-strom-qr33",
      "miesto": "betliar-info-strom-fauna-flora",
      "poradie": 18,
      "nazov": "Tis obyčajný",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2025/08/QR-33.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/33.-Tis-obyčajný.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 48.706519,
        "lng": 20.509787
      },
      "mapEmbed": "https://www.google.com/maps?q=48.706519,20.509787&z=18&output=embed",
      "text": "<p>Tisy patria medzi naše najtmavšie ihličnaté dreviny. Všetky časti plodu okrem dužiny sú jedovaté. Rastú aj na tmavých miestach, sú nenáročné na pôdu.</p>\n<p>Tis je európska drevina, s obľubou sa pestuje v parkoch a záhradách a je vhodný nielen do prírodných, ale aj do architektonických parkov, pretože dobre znáša rez a dá sa tvarovať.</p>\n<p>V našom parku, pri ceste k Hermesovej studni rastie 9 tisov, údajne veľmi starých. Ich presný vek je ťažké určiť, lebo jeho vetvy začínajú po 200 až 250 rokoch zrastať do jedného hrubšieho kmeňa. Hoci sú hrúbky kmeňov rozdielne, všetkých 9 tisov bolo vysadených súčasne a odhadujeme, že majú vyše 300 rokov</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/betliar-info-strom-qr33/",
        "en": "https://www.qrlink.sk/new/en/betliar-info-strom-qr33/",
        "de": "https://www.qrlink.sk/new/de/betliar-info-strom-qr33/",
        "ru": "https://www.qrlink.sk/new/ru/betliar-info-strom-qr33/",
        "pl": "https://www.qrlink.sk/new/pl/betliar-info-strom-qr33/",
        "hu": "https://www.qrlink.sk/new/hu/betliar-info-strom-qr33/"
      }
    },
    {
      "id": "betliar-info-strom-qr34",
      "miesto": "betliar-info-strom-fauna-flora",
      "poradie": 19,
      "nazov": "Borovica vejmutovka",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2025/08/qr34.png",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/34.-Borovica-vejmutovka.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 48.708518,
        "lng": 20.51155
      },
      "mapEmbed": "https://www.google.com/maps?q=48.708518,20.511550&z=18&output=embed",
      "text": "<p>Vysoký strom, pochádzajúci zo Severnej Ameriky, kde dorastá do výšky 50 m, v niektorých prípadoch dokonca do 80 m. V Európe sa pestuje od roku 1705. Dnes je u nás v parkoch veľmi rozšíreným stromom (druhom), lebo rýchlo rastie a dospelé jedince majú krásne koruny. Podľa názorov odborníkov majú vejmutovky v betliarskom parku veľmi dobré podmienky pre rast a vývoj.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/betliar-info-strom-qr34/",
        "en": "https://www.qrlink.sk/new/en/betliar-info-strom-qr34/",
        "de": "https://www.qrlink.sk/new/de/betliar-info-strom-qr34/",
        "ru": "https://www.qrlink.sk/new/ru/betliar-info-strom-qr34/",
        "pl": "https://www.qrlink.sk/new/pl/betliar-info-strom-qr34/",
        "hu": "https://www.qrlink.sk/new/hu/betliar-info-strom-qr34/"
      }
    },
    {
      "id": "betliar-info-strom-qr35",
      "miesto": "betliar-info-strom-fauna-flora",
      "poradie": 20,
      "nazov": "Zvernica",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2025/08/zvernica-min.png",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2025/09/zvernica.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 48.718658,
        "lng": 20.514409
      },
      "mapEmbed": "https://www.google.com/maps?q=48.718658,20.514409&z=18&output=embed",
      "text": "<p>Typ cieľa: Zvieratá</p>\n<p>Krátky popis: Zvernica zameraná na chov jelenej zveri s rozlohou takmer 1700 ha</p>\n<p>Mesto: Betliar</p>\n<p>Okres: Rožňava</p>\n<p>Kraj: Košický</p>\n<p>Obdobie návštevy: Celoročne</p>\n<p>Prístup: Informačná tabuľa sa nachádza pri vstupe do zvernice, neďaleko chaty Kopáň v severnej časti parku kaštieľa. Cez zvernicu nevedie oficiálna turistická trasa. Návštevníci môžu do zvernice vstupovať len cez rebríky pri hlavných vstupoch a pohybovať sa len po hlavných cestách vo zvernici.</p>\n<p>Náročnosť trasy: mierne náročná</p>\n<p>Zaujímavosti v okolí: Kaštieľ Betliar, VLM Hrhovské (ne)spustnuté pôdy (30 km)</p>\n<p>Dátum odhalenia: 14.6.2019</p>\n<p>GPS súradnice: N 48°43’01.1&#8243; E 20°30’52.4&#8243;</p>\n<p>Vhodná pre: turistika</p>\n<p>   </p>\n<p>Podrobnejší popis: Zakladateľom zvernice bol Emanuel Andráši I., nazývaný pre svoje podnikateľské aktivity ,,železným grófom,,. Zvernica s výmerou 575 ha bola vybudovaná v tesnej blízkosti kaštieľa, pričom zasahovala aj do súčastného parku. Jej prvými obyvateľmi bola zver jelenia a danielia, zanedlho pribudli muflóny. Vysokú kvalitu dosahovali najmä muflóny, dovezené z cisárskej zvernice vo Viedni. Zvernica slúžila nielen na poľovačky, ale významne prispela aj k zazvereniu okolitých lesov. V prvej svetovej vojne bola vážne poškodená a v druhej zanikla úplne. V roku 1967 sa lesníci z Východoslovenských štátnych lesov, Lesný závod Rožňava rozhodli oživiť niekdajšiu slávu zvernice. Stalo sa tak na výmere 1466 ha, ktorá sa neskôr rozšírila na súčasných 1696 ha. Zvernica je zameraná najmä na chov jelenej zveri, ktorej kvalita sa dovozmi z Poľany a Východných Karpát výrazne zvýšila a dnes tunajšie trofeje dosahujú špičkovú úroveň. Zvernica v Betliari je na Slovensku jediná, kde vedľa seba žije jeleň, daniel, muflón, diviak, srnec, ale ja medveď, vlk a mačka divá.</p>\n<p>   </p>\n<p>Zdroj: Lesy.sk</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/betliar-info-strom-qr35/",
        "en": "https://www.qrlink.sk/new/en/betliar-info-strom-qr35/",
        "de": "https://www.qrlink.sk/new/de/betliar-info-strom-qr35/",
        "ru": "https://www.qrlink.sk/new/ru/betliar-info-strom-qr35/",
        "pl": "https://www.qrlink.sk/new/pl/betliar-info-strom-qr35/",
        "hu": "https://www.qrlink.sk/new/hu/betliar-info-strom-qr35/"
      }
    },
    {
      "id": "mestske-muzeum-karola-tocika",
      "miesto": "cestovatelsky-dennik",
      "poradie": 1,
      "nazov": "Mestské múzeum Karola Točíka",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2023/12/muzeum-karola-tocika-2.jpg",
      "audio": [],
      "galeria": [],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Mestské múzeum v Turzovke je venované Karolovi Točíkovi, ktorý bol nielen turzovským farárom a dekanom, ale aj regionálnym historikom. V Turzovke pôsobil v rokoch 1917 – 1959.</p>\n<p>Prvá expozícia bola zložená z výberu exponátov, ktoré múzeu darovali miestne inštitúcie ale aj občania Turzovky a blízkych obcí. Výnimočným exponátom múzea je originál zvona, ktorý nechal pre najstarší drevený kostol (dnes už zaniknutý) v Turzovke uliať práve jej zakladateľ Juraj Turzo v roku 1614. Zvon je najstarším a zároveň najcennejším exponátom a jeho štylizovaná podoba sa objavila aj v logu múzea.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/castles/mestske-muzeum-karola-tocika/",
        "en": "https://www.qrlink.sk/new/en/castles/mestske-muzeum-karola-tocika/",
        "de": "https://www.qrlink.sk/new/de/castles/mestske-muzeum-karola-tocika/",
        "ru": "https://www.qrlink.sk/new/ru/castles/mestske-muzeum-karola-tocika/",
        "pl": "https://www.qrlink.sk/new/pl/castles/mestske-muzeum-karola-tocika/",
        "hu": "https://www.qrlink.sk/new/hu/castles/mestske-muzeum-karola-tocika/"
      }
    },
    {
      "id": "historicka-kniznica-bibliotheca-antiqua-taganiana",
      "miesto": "cestovatelsky-dennik",
      "poradie": 2,
      "nazov": "Historická knižnica Bibliotheca antiqua Taganiana",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2023/12/kniž.jpg",
      "audio": [],
      "galeria": [],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Historická knižnica sa nachádza priestoroch kultúrneho domu v meste Turzovka a je pomenovaná po Františkovi Taganínim, ktorý bol dlhoročný buditeľ, kňaz a zaslúžil sa o rozvoj školstva a vzdelávania. Jeho vášňou boli celoživotne knihy, zbieral knihy a dokonca si založil jednu z prvých vlastných knižníc. V knižnici nájdete   2 500 knižných zväzkov v maďarskom, latinskom a nemeckom jazyku. Z obsahového hľadiska ide o liturgické, teologické, homiletické, náboženské diela, ale nájdeme tu aj knihy z oblasti histórie, jazykovedy, či geografia. Knižnicu zdobia 2 obrazy kňažnej Sissy a cisára Františka Jozefa I. Tieto portréty maľoval rodák z Turzovky Dominik Bartolomej Lippay. Nachádzajú sa tu rôzne dobové doplnky dávnych knižníc s možnosťou meditácie, štúdia kníh, či organizovania recitálov v komornom duchu.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/castles/historicka-kniznica-bibliotheca-antiqua-taganiana/",
        "en": "https://www.qrlink.sk/new/en/castles/historicka-kniznica-bibliotheca-antiqua-taganiana/",
        "de": "https://www.qrlink.sk/new/de/castles/historicka-kniznica-bibliotheca-antiqua-taganiana/",
        "ru": "https://www.qrlink.sk/new/ru/castles/historicka-kniznica-bibliotheca-antiqua-taganiana/",
        "pl": "https://www.qrlink.sk/new/pl/castles/historicka-kniznica-bibliotheca-antiqua-taganiana/",
        "hu": "https://www.qrlink.sk/new/hu/castles/historicka-kniznica-bibliotheca-antiqua-taganiana/"
      }
    },
    {
      "id": "vyhliadkova-veza-s-oddychovou-zonou-na-vrchu-bukovina",
      "miesto": "cestovatelsky-dennik",
      "poradie": 3,
      "nazov": "Vyhliadková veža s oddychovou zónou na vrchu Bukovina.",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2023/12/3.jpg",
      "audio": [],
      "galeria": [],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Vyhliadková veža sa nachádza na vrchu Bukovina, z ktorého je krásny výhľad na celé mesto ako aj cezhraničné územie nevynímajúc najvyšší vrch moravsko – sliezskych Beskýd Lysú horu. Na veži je umiestnený ďalekohľad s cieľom vychutnať si krásu prírody z blízka. Súčasťou veže je oddychová zóna, kde nájdete galériu venovanú významným osobnostiam mesta Paskov a Turzovky.  Turistickou atraktivitou sú slnečné hodiny s lavičkami a 4  vyrezávanými sochami významných dejateľov mesta Turzovka a Paskova :  Juraj Thurzo, Adam Bonec, Eduard Reitter, .</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/castles/vyhliadkova-veza-s-oddychovou-zonou-na-vrchu-bukovina/",
        "en": "https://www.qrlink.sk/new/en/castles/vyhliadkova-veza-s-oddychovou-zonou-na-vrchu-bukovina/",
        "de": "https://www.qrlink.sk/new/de/castles/vyhliadkova-veza-s-oddychovou-zonou-na-vrchu-bukovina/",
        "ru": "https://www.qrlink.sk/new/ru/castles/vyhliadkova-veza-s-oddychovou-zonou-na-vrchu-bukovina/",
        "pl": "https://www.qrlink.sk/new/pl/castles/vyhliadkova-veza-s-oddychovou-zonou-na-vrchu-bukovina/",
        "hu": "https://www.qrlink.sk/new/hu/castles/vyhliadkova-veza-s-oddychovou-zonou-na-vrchu-bukovina/"
      }
    },
    {
      "id": "naucny-chodnik-vrchlinenskym-kopcom",
      "miesto": "cestovatelsky-dennik",
      "poradie": 4,
      "nazov": "Náučný chodník Vrchlinenským kopcom",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2023/12/400412770_326151270144609_2430754977789051967_n.jpg",
      "audio": [],
      "galeria": [],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Náučný chodník Vrchlinenským kopcom</p>\n<p>Náučný chodník v Hlinenom má niekoľko zastavení s 7 informačnými tabuľami a s QR kódmi, panoramatickou tabuľou na vrchole, drevenými sochami lesných zvieratiek vhodných pre turistiku s deťmi v krásnom prostredí s výhľadom na Moravskosliezske Beskydy. Vedľa cesty smerom na vrchol sa stretnete s rôznymi zaujímavosťami, ktoré sa  viažu k životu tunajších ľudí, pretože Hlinené je najstaršou osídlenou oblasťou. Smerom na vrchol bude mať trasa jedno odbočenie k drevenému fotorámu v tvare srdca. Táto nenáročná trasa  začína pri kaplnke u Blažkov a končí  pri drevenej zvonici 737 mnm v osade Vrchhlinené</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/castles/naucny-chodnik-vrchlinenskym-kopcom/",
        "en": "https://www.qrlink.sk/new/en/castles/naucny-chodnik-vrchlinenskym-kopcom/",
        "de": "https://www.qrlink.sk/new/de/castles/naucny-chodnik-vrchlinenskym-kopcom/",
        "ru": "https://www.qrlink.sk/new/ru/castles/naucny-chodnik-vrchlinenskym-kopcom/",
        "pl": "https://www.qrlink.sk/new/pl/castles/naucny-chodnik-vrchlinenskym-kopcom/",
        "hu": "https://www.qrlink.sk/new/hu/castles/naucny-chodnik-vrchlinenskym-kopcom/"
      }
    },
    {
      "id": "kornansky-ropny-pramen",
      "miesto": "cestovatelsky-dennik",
      "poradie": 5,
      "nazov": "Korňanský ropný prameň",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2023/12/pramen.jpg",
      "audio": [],
      "galeria": [],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Jednou z najväčších geologických atraktivít v osade u Muchovcov od roku 1984 je prírodná rezervácia ropný prameň. Ide o ojedinelý európsky unikát povrchového prirodzeného výveru ľahkej ropy s občasnými výronmi samo zapaľujúceho sa metánu. Legenda hovorí o pytliakovi, ktorý mal údajne spadnúť do náleziska pri prenasledovaní zveri. I keď sa jedná o veľmi kvalitnú ropu, nepreukázali sa také množstvá, ktoré by sa vyplatili pre priemyselnú ťažbu.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/castles/kornansky-ropny-pramen/",
        "en": "https://www.qrlink.sk/new/en/castles/kornansky-ropny-pramen/",
        "de": "https://www.qrlink.sk/new/de/castles/kornansky-ropny-pramen/",
        "ru": "https://www.qrlink.sk/new/ru/castles/kornansky-ropny-pramen/",
        "pl": "https://www.qrlink.sk/new/pl/castles/kornansky-ropny-pramen/",
        "hu": "https://www.qrlink.sk/new/hu/castles/kornansky-ropny-pramen/"
      }
    },
    {
      "id": "kostol-nanebovzatia-panny-marie-v-turzovke",
      "miesto": "cestovatelsky-dennik",
      "poradie": 6,
      "nazov": "Kostol Nanebovzatia Panny Márie v Turzovke",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2023/12/kostol-nanebovzatia-panny-marie-v-tuzovke.jpg",
      "audio": [],
      "galeria": [],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Najvýznamnejšou sakrálnou stavbou, ktorá bola zapísaná aj do zoznamu národných kultúrnych pamiatok, je rímskokatolícky barokový Kostol Nanebovzatia Panny Márie z roku 1759. Hlavný oltár pochádza z 18. storočia, sú tu pamiatky z neskorého baroka, klasicizmu ako i neskorého novoklasicizmu. Bohato sú tu zastúpené diela maliarov Jozefa Božetecha Klemensa, Jozefa Hübscha, Alexandra Loszinského ako i neznámych tvorcov. Pozoruhodným prvkom kostola je pseudobarokový organ s polychromovanou drevorezbou. Do stredu chórového parapetu je zabudovaná časť pôvodného organu z roku 1799.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/castles/kostol-nanebovzatia-panny-marie-v-turzovke/",
        "en": "https://www.qrlink.sk/new/en/castles/kostol-nanebovzatia-panny-marie-v-turzovke/",
        "de": "https://www.qrlink.sk/new/de/castles/kostol-nanebovzatia-panny-marie-v-turzovke/",
        "ru": "https://www.qrlink.sk/new/ru/castles/kostol-nanebovzatia-panny-marie-v-turzovke/",
        "pl": "https://www.qrlink.sk/new/pl/castles/kostol-nanebovzatia-panny-marie-v-turzovke/",
        "hu": "https://www.qrlink.sk/new/hu/castles/kostol-nanebovzatia-panny-marie-v-turzovke/"
      }
    },
    {
      "id": "rodny-dom-jozefa-kronera",
      "miesto": "cestovatelsky-dennik",
      "poradie": 7,
      "nazov": "Rodný dom Jozefa Kronera",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2023/12/rodny-dom-jozefa-kronera.jpg",
      "audio": [],
      "galeria": [],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Domček, v ktorom sa v roku 1924 narodil významný slovenský herec Jozef Kroner.  Múzeum je prístupné každý deň. V múzeu nájdete v strede stôl, hercovo kreslo a vitrínu, v ktorej je množstvo predmetov zo života umelca, napr. osobné listy, rôzne ocenenia, rybárske čižmy, okuliare, šálka, dokonca aj soška Oscara za film Obchod na Korze, v ktorom Jozef Kroner stvárnil hlavnú postavu.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/castles/rodny-dom-jozefa-kronera/",
        "en": "https://www.qrlink.sk/new/en/castles/rodny-dom-jozefa-kronera/",
        "de": "https://www.qrlink.sk/new/de/castles/rodny-dom-jozefa-kronera/",
        "ru": "https://www.qrlink.sk/new/ru/castles/rodny-dom-jozefa-kronera/",
        "pl": "https://www.qrlink.sk/new/pl/castles/rodny-dom-jozefa-kronera/",
        "hu": "https://www.qrlink.sk/new/hu/castles/rodny-dom-jozefa-kronera/"
      }
    },
    {
      "id": "velka-raca-1236-m-n-m",
      "miesto": "cestovatelsky-dennik",
      "poradie": 8,
      "nazov": "Veľká Rača – (1236 m n. m.)",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2023/12/DSC02296-2.jpg",
      "audio": [],
      "galeria": [],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Najvyšší vrch Kysuckých Beskýd, ktorý ponúka široké  možností ako si vychutnať voľné chvíle v krásnom horskom prostredí, a to v každom ročnom období.</p>\n<p>Veľká Rača je  miestom na skvelú turistiku. Najjednoduchšie je vrch Veľká Rača prístupný z obce Oščadnica z lokality Dedovka.</p>\n<p>Na vrchole vás čaká vyhliadková plošina s osadenou turistickou mapou a tabuľami s panoramatickým výhľadom. Najkrajšie výhľady sú na hrebeň Západných Tatier, hrebeň Malej Fatry, Babiu Horu a Pilsko.</p>\n<p>Skalné diery : – Malá skalná diera (dlhá 9 m) a Veľká skalná diera (dlhá 22 m. Jaskyňa pseudokrasového charakteru, ktorá vznikla rozpadom lavíc pieskovcov. V pieskovcov sa vytvorili rôzne veľké otvory, tzv. jaskyne. Tento úkaz je súčasťou Národnej prírodnej rezervácie Veľká Rača</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/castles/velka-raca-1236-m-n-m/",
        "en": "https://www.qrlink.sk/new/en/castles/velka-raca-1236-m-n-m/",
        "de": "https://www.qrlink.sk/new/de/castles/velka-raca-1236-m-n-m/",
        "ru": "https://www.qrlink.sk/new/ru/castles/velka-raca-1236-m-n-m/",
        "pl": "https://www.qrlink.sk/new/pl/castles/velka-raca-1236-m-n-m/",
        "hu": "https://www.qrlink.sk/new/hu/castles/velka-raca-1236-m-n-m/"
      }
    },
    {
      "id": "putnicke-miesto-zivcakova",
      "miesto": "cestovatelsky-dennik",
      "poradie": 9,
      "nazov": "Pútnické miesto Živčáková",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2023/12/marianske-putnicke-miesto-zivcakova.jpg",
      "audio": [],
      "galeria": [],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>V júni v roku 1958 sa na vrchu Živčáková mala lesnému robotníkovi Matúšovi Lašutovi zjaviť Panna Mária. Správa sa rýchlo rozšírila a miesto údajného zjavenia začali navštevovať veriaci, ktorí putovali na horu. V roku 1992 BÚ v Nitre súhlasil a v nasledujúcom roku bola na hore Živčáková postavená kaplnka Panny Márie, Kráľovnej pokoja. Jej projekt vypracoval Ing. arch. Marián Goč. V areáli zjavenia sa nachádza niekoľko prameňov s liečivou vodou. Žilinský biskup Tomáš Galis dňa 19. októbra 2008 vyhlásil Horu Živčáková za oficiálne mariánske pútnické miesto a vysvätil základný kameň budúceho chrámu Panny Márie Matky Cirkvi. 4. októbra 2015 bol chrám slávnostne vysvätený žilinským diecéznym biskupom Mons. Tomášom Galisom. Vo veži kostola sú umiestnené štyri zvony, ktoré sú dielom Josefa Tkadleca z Halenkova.</p>\n<p>Veža slúži aj ako vyhliadková a je sprístupnená pre pútnikov i turistov, z jej otvorenej terasy je kruhový výhľad na okolitú prírodu. Ak si chcete pozrieť tento výhľad musíte vyšľapať približne 140 schodov. Vstup do veže je zdarma. Vyhliadková veža je sprístupnená len za priaznivého počasia.</p>\n<p>K pútnickému miestu z mestskej časti Turzovka – Vyšný koniec vedie taktiež Náučný chodník – Lašútov chodník . Chodník má cca 2,5 km a pomenovaný je po lesnom robotníkovi Matúšovi Lašútovi, ktorému sa zjavila na tomto mieste Panna Mária. Trasa je doplnená informačnými tabuľami a 14 zastaveniami krížovej cesty.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/castles/putnicke-miesto-zivcakova/",
        "en": "https://www.qrlink.sk/new/en/castles/putnicke-miesto-zivcakova/",
        "de": "https://www.qrlink.sk/new/de/castles/putnicke-miesto-zivcakova/",
        "ru": "https://www.qrlink.sk/new/ru/castles/putnicke-miesto-zivcakova/",
        "pl": "https://www.qrlink.sk/new/pl/castles/putnicke-miesto-zivcakova/",
        "hu": "https://www.qrlink.sk/new/hu/castles/putnicke-miesto-zivcakova/"
      }
    },
    {
      "id": "lysa-hora",
      "miesto": "cestovatelsky-dennik",
      "poradie": 10,
      "nazov": "Lysá hora ",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2023/12/IMG_5946.jpg",
      "audio": [],
      "galeria": [],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Najvyššia hora Moravskosliezskych Beskýd (1323 m n. m.), niekedy je tiež prezývaná kráľovná Moravskosliezskych Beskýd.</p>\n<p>Masív Lysej hory je od ďalších častí Moravskosliezskych Beskýd oddelený hlbokými údoliami Ostravice, Řečice a Mohelnice a je tvorený dominantným vrcholom so štyrmi hlavnými rozsochami a niekoľkými ďalšími bočnými hrebeňmi a hrebienkami. Z vrcholu &#8222;Giguly“ (starý názov Lysej hory) vybiehajú 4 rázsochy:</p>\n<p>&#8222;Lukšinec“, &#8222;Malchor“, &#8222;Zimná Polana“ a &#8222;Veľký Kobylík“.</p>\n<p>Na vrcholku Lysej hory je meteorologická stanica, televízny vysielač, stanica horskej služby a niekoľko turistických chát. Pri jednej z nich stojí malá kaplnka. Ďalej sa tu nachádzajú aj pamätné dosky turistom, ktorí zahynuli za okupácie.</p>\n<p>Medzi geomorfologické zaujímavosti Lysej hory patria jaskynné systémy na rozsoche Lukšince, ktorým sa hovorí Ondrášove diery. Jedná sa o 250 m puklinových chodieb a dómov s výškovým rozsahom cca 30 m. Vzhľadom na reálne nebezpečenstvo úrazu je systém uzavretý a vstupy sú zabezpečené mrežou. V zime tu prezimujú netopiere.</p>\n<p>Lysá hora ponúka za pekného počasia prekrásne výhľady na hrebene a údolia Beskýd a Javorníkov, na slovenské hory od Malej a Veľkej Fatry až po Západné a Vysoké Tatry a na západe na Jeseníky.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/castles/lysa-hora/",
        "en": "https://www.qrlink.sk/new/en/castles/lysa-hora/",
        "de": "https://www.qrlink.sk/new/de/castles/lysa-hora/",
        "ru": "https://www.qrlink.sk/new/ru/castles/lysa-hora/",
        "pl": "https://www.qrlink.sk/new/pl/castles/lysa-hora/",
        "hu": "https://www.qrlink.sk/new/hu/castles/lysa-hora/"
      }
    },
    {
      "id": "zamok-v-paskove",
      "miesto": "cestovatelsky-dennik",
      "poradie": 11,
      "nazov": "Zámok v Paskove",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2023/12/IMG_1288.jpg",
      "audio": [],
      "galeria": [],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Barokový zámok bol postavený v rokoch 1640-1646 za Václava z Vrbna zrejme na mieste pôvodnej pevnosti. Zámok bol postupne majetkom mnohých šľachtických rodov a v roku 1869 ho nechal gróf Moric zo Saint Genois po požiari prestavať do jeho dnešnej podoby štvorkrídlového zámku s manzardovou strechou a novoklasicistickou fasádou. Po druhej svetovej vojne v roku 1945 bol celý majetok posledného majiteľa Otto Stolberga vyvlastnený a zámok adaptovaný na nemocnicu. Tým došlo nielen k zmene jeho poslania, ale do značnej miery aj k negatívnemu ovplyvneniu historickej podstaty budovy.</p>\n<p>Zámok je dnes vďaka rozsiahlym rekonštrukciám prístupný verejnosti. Na prízemí zámku si môžu návštevníci prezrieť Galériu erbov držiteľov Paskova, Výstavu modelov drevených kostolov, kaplniek a zvoníc severnej Moravy a Sliezska, Stálu expozíciu k histórii Paskova a expozíciu venovanú entomológovi Edmundovi Reitterovi. Na poschodí prebiehajú rôzne výstavy</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/castles/zamok-v-paskove/",
        "en": "https://www.qrlink.sk/new/en/castles/zamok-v-paskove/",
        "de": "https://www.qrlink.sk/new/de/castles/zamok-v-paskove/",
        "ru": "https://www.qrlink.sk/new/ru/castles/zamok-v-paskove/",
        "pl": "https://www.qrlink.sk/new/pl/castles/zamok-v-paskove/",
        "hu": "https://www.qrlink.sk/new/hu/castles/zamok-v-paskove/"
      }
    },
    {
      "id": "zamocky-park",
      "miesto": "cestovatelsky-dennik",
      "poradie": 12,
      "nazov": "Zámocký park",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2023/12/paskov4.jpg",
      "audio": [],
      "galeria": [],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Park v okolí zámku bol vybudovaný v 19. storočí, najprv vo francúzskom a neskôr v anglickom štýle. Zeleň o rozlohe 17 hektárov bola vďaka výskytu chráneného chrobáka páchnika hnedého vyhlásená za európsky významnú lokalitu. Romantickú atmosféru ponúka predovšetkým jeho severná časť so vzácnymi drevinami a vodným tokom. Skupina sôch gréckych bohýň Atény, Niké, Tychej a Eris pred zámkom doplnená sochou bájneho hrdinu Herkula je výnimočným umeleckým stvárnením odkazu antickej mytológie. Početné lavičky ponúkajú  príjemné posedenie v jarnom, letnom i jesennom období, v ktorých má park vždy inú a zároveň podmanivú atmosféru.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/castles/zamocky-park/",
        "en": "https://www.qrlink.sk/new/en/castles/zamocky-park/",
        "de": "https://www.qrlink.sk/new/de/castles/zamocky-park/",
        "ru": "https://www.qrlink.sk/new/ru/castles/zamocky-park/",
        "pl": "https://www.qrlink.sk/new/pl/castles/zamocky-park/",
        "hu": "https://www.qrlink.sk/new/hu/castles/zamocky-park/"
      }
    },
    {
      "id": "rozhladna-okrouhla",
      "miesto": "cestovatelsky-dennik",
      "poradie": 13,
      "nazov": "Rozhľadňa Okrouhlá",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2023/12/Staříč_rozhledna_Okruhla_2.jpg",
      "audio": [],
      "galeria": [],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Rozhľadňa v Staríči sa nachádza na kopci Okrouhlá 378 m nad morom. Stožiar je vysoký 55 ma, pričom vyhliadková plošina sa nachádza vo výške 30m, z ktorej je nádherný rozhľad po okolí. V prípade krásneho počasia je výhľad na Jeseníky, Pod kopcom Okrouhlá je pre danú rozhľadňu vybudované parkovisko pre 10 osobných automobilov. Pre záujemcov, ktorí by chceli dôjsť autobusom, je možné parkovať na blízkom parkovisku pri futbalovom ihrisku</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/castles/rozhladna-okrouhla/",
        "en": "https://www.qrlink.sk/new/en/castles/rozhladna-okrouhla/",
        "de": "https://www.qrlink.sk/new/de/castles/rozhladna-okrouhla/",
        "ru": "https://www.qrlink.sk/new/ru/castles/rozhladna-okrouhla/",
        "pl": "https://www.qrlink.sk/new/pl/castles/rozhladna-okrouhla/",
        "hu": "https://www.qrlink.sk/new/hu/castles/rozhladna-okrouhla/"
      }
    },
    {
      "id": "hrad-hukvaldy-s-odborom",
      "miesto": "cestovatelsky-dennik",
      "poradie": 14,
      "nazov": "Hrad Hukvaldy s odborom",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2023/12/hrad-hukvaldy.jpg",
      "audio": [],
      "galeria": [],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Zrúcanina gotického hradu z 13. storočia patrí k najrozsiahlejším hradným komplexom v Českej republike. Popri pevnostnom charaktere mal hrad význam aj ako správne sídlo rozsiahleho panstva, ktoré sa čoskoro po založení stalo súčasťou majetku olomouckých biskupov. Keď boli v roku 1760 byty a kancelárie úradníctva prenesené z hradu do podhradia, hukvaldský hrad sa začal meniť na ruinu, ktorá bola využívaná hlavne ako lacný zdroj stavebného kameňa. Nové využitie hradu začalo v 19. storočí s rozvojom „turistického ruchu“. Veľký záujem ľudí o hrad viedol k snahám túto pamiatku zachovať a využiť ju ako centrum kultúrneho diania. Z hradu sú prekrásne výhľady do okolia.</p>\n<p>Najvýraznejšou osobnosťou, ktorá je spojená s hradom Hukvaldy, bol hudobný skladateľ Leoš Janáček.</p>\n<p>K hradu patrí obora, kde sa nachádza socha líšky Bystrúšky, a v ktorej môžete uvidieť daniely a muflóny. Raritou, ktorú môžete uvidieť v obore cestou na hrad, sú obnažené koreňové systémy siedmich mohutných bukov. Doslova vodopády eróziou obnažených koreňov prýštia zo svahu, niektoré sú dlhé až osem metrov. Súčasťou hradu je aj letný amfiteáter s vynikajúcou akustikou, kde sa koná každoročne Medzinárodný hudobný festival Leoša Janáčka.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/castles/hrad-hukvaldy-s-odborom/",
        "en": "https://www.qrlink.sk/new/en/castles/hrad-hukvaldy-s-odborom/",
        "de": "https://www.qrlink.sk/new/de/castles/hrad-hukvaldy-s-odborom/",
        "ru": "https://www.qrlink.sk/new/ru/castles/hrad-hukvaldy-s-odborom/",
        "pl": "https://www.qrlink.sk/new/pl/castles/hrad-hukvaldy-s-odborom/",
        "hu": "https://www.qrlink.sk/new/hu/castles/hrad-hukvaldy-s-odborom/"
      }
    },
    {
      "id": "cvicna-stolna-dolu-paskov",
      "miesto": "cestovatelsky-dennik",
      "poradie": 15,
      "nazov": "Cvičná štôlňa Dolu Paskov",
      "popis": "",
      "cover": "",
      "audio": [],
      "galeria": [],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Je umelo vybudovaná ukážková štôlňa s funkčným banským zariadením. Na dĺžke 200 m banských chodieb sa nachádzajú bežné banské pracoviská v technologickej nadväznosti ako v skutočnej bani.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/castles/cvicna-stolna-dolu-paskov/",
        "en": "https://www.qrlink.sk/new/en/castles/cvicna-stolna-dolu-paskov/",
        "de": "https://www.qrlink.sk/new/de/castles/cvicna-stolna-dolu-paskov/",
        "ru": "https://www.qrlink.sk/new/ru/castles/cvicna-stolna-dolu-paskov/",
        "pl": "https://www.qrlink.sk/new/pl/castles/cvicna-stolna-dolu-paskov/",
        "hu": "https://www.qrlink.sk/new/hu/castles/cvicna-stolna-dolu-paskov/"
      }
    },
    {
      "id": "bazilika-minor-putnicky-chram-navstivenie-panny-marie",
      "miesto": "cestovatelsky-dennik",
      "poradie": 16,
      "nazov": "Bazilika Minor – pútnický chrám Navštívenie Panny Márie",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2023/12/IMG_4094.jpg",
      "audio": [],
      "galeria": [],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Na miernom návrší oproti zámku a Zámockému námestiu vo Frýdku stojí veľkolepá neskoro baroková katedrála – pútnický chrám Navštívenia Panny Márie. Základný kameň kostola bol položený roku 1740. Roku 1759 bol ešte nie celkom hotový chrám vysvätený. Neboli postavené veže a ani vnútorné vybavenie kostola nebolo úplné. V roku 1777 bol kostol dokončený. Frýdek tak získal dominantu, vďaka ktorej je občas nazývaný „Sliezske Lurdy“. V roku 1999 bol kostol povýšený pápežom Jánom Pavlom II. na baziliku minor. Od roku 2018 je kostol národnou kultúrnou pamiatkou.</p>\n<p>Tento nádherný kostol má cenný hlavný oltár, organ a v podzemí dokonca aj kryptu. V okolitom parku uvidíte novorenesančnú kaplnku Srdce Pána a štrnásť kaplniek krížovej cesty.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/castles/bazilika-minor-putnicky-chram-navstivenie-panny-marie/",
        "en": "https://www.qrlink.sk/new/en/castles/bazilika-minor-putnicky-chram-navstivenie-panny-marie/",
        "de": "https://www.qrlink.sk/new/de/castles/bazilika-minor-putnicky-chram-navstivenie-panny-marie/",
        "ru": "https://www.qrlink.sk/new/ru/castles/bazilika-minor-putnicky-chram-navstivenie-panny-marie/",
        "pl": "https://www.qrlink.sk/new/pl/castles/bazilika-minor-putnicky-chram-navstivenie-panny-marie/",
        "hu": "https://www.qrlink.sk/new/hu/castles/bazilika-minor-putnicky-chram-navstivenie-panny-marie/"
      }
    },
    {
      "id": "muzeum-beskyd-frydek-mistek-frydecky-zamok",
      "miesto": "cestovatelsky-dennik",
      "poradie": 17,
      "nazov": "Múzeum Beskýd Frýdek-Místek (Frýdecký zámok)",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2023/12/IMG_4028.jpg",
      "audio": [],
      "galeria": [],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Hrad s mestečkom založil tešínske knieža Kazimír I. asi medzi rokmi 1327-1339 na strategicky výhodnej vyvýšenine nad riekou Ostravicou. Na prelome 16. a 17. storočia, teda za grófa Bartolomeja Bruntálskeho z Vrbna, bol hrad prestavaný na zámok. Ďalšou významnou osobnosťou, ktorá výrazne zasiahla do podoby zámku, bol Jiří III. gróf z Oppersdorfu. Ten kúpil panstvo v roku 1636. Závažnou udalosťou pre zámok aj mesto Frýdek bol veľký požiar mesta v roku 1688. Majiteľom zámku bol v tom čase gróf František Eusebius, ktorý ihneď po požiari začal opravy zničeného zámku. Sobášom dcéry Františka Eusebia prešlo panstvo do rúk rodu Pražmov z Bielkova. Tento rod bol po celé 18. storočie držiteľom frýdockého panstva, zámok bol v tejto dobe významným kultúrnym a spoločenským centrom. Rod Pražmov z Bielkova pozitívne ovplyvnil aj vznik veľkého pútnického chrámu Navštívenia Panny Márie, ktorého výstavbu od roku 1740 štedro podporoval. V roku 1798 predal rod Pražmov frýdecké panstvo Márii Kristíne Habsburskej, sestre Jozefa II. Rod Habsburgovcov držal zámok až do roku 1918. Po zabraní Habsburgovcom bol zámok v nútenej správe. Bol využívaný ako sídlo rôznych úradov, potom ako riaditeľstvo štátnych lesov, úradovne, byty. Do zámku bolo roku 1960 presťahované múzeum a v súčasnej dobe ponúka päť stálych expozícií s radom krátkodobých výstav. V zámku môžete navštíviť tieto expozície: zámocký okruh, Beskydy – príroda a ľudia, Frýdek a Místek, Frýdek – Mariánske pútnické miesto, Pamätník Óndry Łysohorského.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/castles/muzeum-beskyd-frydek-mistek-frydecky-zamok/",
        "en": "https://www.qrlink.sk/new/en/castles/muzeum-beskyd-frydek-mistek-frydecky-zamok/",
        "de": "https://www.qrlink.sk/new/de/castles/muzeum-beskyd-frydek-mistek-frydecky-zamok/",
        "ru": "https://www.qrlink.sk/new/ru/castles/muzeum-beskyd-frydek-mistek-frydecky-zamok/",
        "pl": "https://www.qrlink.sk/new/pl/castles/muzeum-beskyd-frydek-mistek-frydecky-zamok/",
        "hu": "https://www.qrlink.sk/new/hu/castles/muzeum-beskyd-frydek-mistek-frydecky-zamok/"
      }
    },
    {
      "id": "pustevny",
      "miesto": "cestovatelsky-dennik",
      "poradie": 18,
      "nazov": "Pustevny",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2023/12/IMG_6938.jpg",
      "audio": [],
      "galeria": [],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Pustevny sú veľmi atraktívnym miestom na výlety za každého počasia. Na osadu neďaleko mýtickej hory Radhošť sa dá vyviezť lanovkou, prísť pešo, v zime na bežkách a v lete na bicykli. Pustevny sú najobľúbenejším turistickým centom v Beskydách a socha Radegasta, ktorú nájdete cestou na Radhošť, je najznámejším symbolom celého Moravskosliezskeho kraja. K povšimnutiu stojí architektúra turistických ubytovní LIBUŠÍN a MAMĚNKA od slovenského architekta Dušana Jurkoviča, či drevený kostol sv. Cyrila a Metóda a súsošie oboch vierozvestcov od autora Albína Poláška z roku 1931, ktorý sa nachádza na samotnom vrchole.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/castles/pustevny/",
        "en": "https://www.qrlink.sk/new/en/castles/pustevny/",
        "de": "https://www.qrlink.sk/new/de/castles/pustevny/",
        "ru": "https://www.qrlink.sk/new/ru/castles/pustevny/",
        "pl": "https://www.qrlink.sk/new/pl/castles/pustevny/",
        "hu": "https://www.qrlink.sk/new/hu/castles/pustevny/"
      }
    },
    {
      "id": "javorniky-dominanta-hornych-kysuc",
      "miesto": "cestovatelsky-dennik",
      "poradie": 19,
      "nazov": "Javorníky – dominanta Horných Kysúc",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2023/12/Javorníky-výhlad.jpg",
      "audio": [],
      "galeria": [],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>V blízkosti slovensko-českých hraníc sa rozprestiera obľúbené pohorie Javorníky. Jeho najvyšším vrcholom je Veľký Javorník, ktorý je ako stvorený na turistiku s rodinou a priateľmi. Očarí vás malebnými zákutiami, krásnou prírodou ako aj nenáročnosťou výstupových trás.</p>\n<p>Cestou sa vám naskytujú panoramatické výhľady najmä na Moravskosliezske Beskydy. Na hrebeni okrem prírodných krás nájdete aj diela ľudských rúk, a to v podobe kamenných objektov – jedinečnú kamennú galériu v prírode. Ich autormi sú umelci spätí s regiónmi Kysuce a Horné Považie (medzi nimi Ondrej Zimka, Gustáv Švábik-Macvejda, Milan Greguš, Pavol Muška, Ondrej 4. a ateliér Tri kamene a iní).</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/castles/javorniky-dominanta-hornych-kysuc/",
        "en": "https://www.qrlink.sk/new/en/castles/javorniky-dominanta-hornych-kysuc/",
        "de": "https://www.qrlink.sk/new/de/castles/javorniky-dominanta-hornych-kysuc/",
        "ru": "https://www.qrlink.sk/new/ru/castles/javorniky-dominanta-hornych-kysuc/",
        "pl": "https://www.qrlink.sk/new/pl/castles/javorniky-dominanta-hornych-kysuc/",
        "hu": "https://www.qrlink.sk/new/hu/castles/javorniky-dominanta-hornych-kysuc/"
      }
    },
    {
      "id": "muzeum-kysuckej-dediny",
      "miesto": "cestovatelsky-dennik",
      "poradie": 20,
      "nazov": "Múzeum kysuckej dediny",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2023/12/vychylovka-2.jpg",
      "audio": [],
      "galeria": [],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Je skanzen nachádzajúci sa neďaleko obce Nová Bystrica, časti Vychylovka v doline Chmúra, ktorá je súčasťou CHKO Kysuce. Skanzen vznikol 11. októbra 1974, pričom jeden z hlavných dôvodov pre jeho vznik bola záchrana najcennejších pamiatok ľudovej architektúry z obcí Riečnica a Harvelka, ktoré mali zaniknúť z dôvodu výstavby vodnej nádrže Nová Bystrica.</p>\n<p>Do roku 1981, kedy bola sprístupnená prvá časť expozície, sa vybudovalo 22 z celkove plánovaných 69 objektov expozície múzea v prírode. Národopisná expozícia sa usiluje o rekonštrukciu sídelnej krajiny a životného prostredia, s prezentáciou ľudovej architektúry a spôsobu života i kultúry ľudu na Kysuciach v druhej polovici 19. storočia a prvej polovici 20. storočia. Technické stavby prezentuje vodný mlyn a píla s hrázdenou konštrukciou z obce Klubina. Zo sakrálnych stavieb sa tu nachádza murovaná kaplnka z prvej štvrtiny 19. storočia zo Zborova nad Bystricou a cintorín s kovovými krížmi, predstavujúci cintoríny na Kysuciach začiatkom tohto storočia.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/castles/muzeum-kysuckej-dediny/",
        "en": "https://www.qrlink.sk/new/en/castles/muzeum-kysuckej-dediny/",
        "de": "https://www.qrlink.sk/new/de/castles/muzeum-kysuckej-dediny/",
        "ru": "https://www.qrlink.sk/new/ru/castles/muzeum-kysuckej-dediny/",
        "pl": "https://www.qrlink.sk/new/pl/castles/muzeum-kysuckej-dediny/",
        "hu": "https://www.qrlink.sk/new/hu/castles/muzeum-kysuckej-dediny/"
      }
    },
    {
      "id": "ciernoklacianska-pyxida",
      "miesto": "cierne-klacany",
      "poradie": 1,
      "nazov": "Čiernokľačianska Pyxida",
      "popis": "",
      "cover": "",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2025/10/pyxida.mp3"
      ],
      "galeria": [
        "https://www.qrlink.sk/new/wp-content/uploads/2025/09/2025-10-09_12h27_42.jpg",
        "https://www.qrlink.sk/new/wp-content/uploads/2025/09/2025-09-25_11h43_44.jpg",
        "https://www.qrlink.sk/new/wp-content/uploads/2025/09/foto-030zNew.jpg",
        "https://www.qrlink.sk/new/wp-content/uploads/2025/09/kolnik_fotoz-min.jpg",
        "https://www.qrlink.sk/new/wp-content/uploads/2025/09/foto-054-min.jpg",
        "https://www.qrlink.sk/new/wp-content/uploads/2025/09/Image0011-min.jpg",
        "https://www.qrlink.sk/new/wp-content/uploads/2025/09/foto-036_1993-min.jpg",
        "https://www.qrlink.sk/new/wp-content/uploads/2025/09/2025-09-25_11h40_55-min.png"
      ],
      "gps": {
        "lat": 48.343092,
        "lng": 18.418106
      },
      "mapEmbed": "https://www.google.com/maps?q=48.343092,18.418106&z=18&output=embed",
      "text": "<p>Čiernokľačianska Pyxida je svetový unikát, ktorý naveky bude reprezentovať Čierne Kľačany, Nitru, Slovensko. Objavitelia i propagátori tohto unikátneho archeologického nálezu si zaslúžia našu úctu, pretože skladajú mozaiku odkrývania histórie.</p>\n<p>Čiernokľačianska pyxida bola objavená v roku 1974 v lokalite pri mlyne</p>\n<p>Pri budovaní vodovodu v obci hĺbiaci mechanizmus počas výkopu ryhy na vodovodné potrubie narušil archeologické objekty so zvyškami ľudských kostier, črepmi nádob a zvieracími kosťami. Najvýznamnejším objektom bol porušený kostrový hrob, v ktorom sa našli fragmenty slonovinovej pyxidy.</p>\n<p>Pyxidu zachránila mládež</p>\n<p>Vtedy žiaci ZDŠ – Milan Švec, Stanislav Lukáč, Milan Tonka, Dušan Filipčík našli úlomky a študenti Gymnázia Janka Kráľa – Július Horný ml. a Ivan Lukáč následne hľadali väzbu medzi úlomkami. Nahlásenie nálezu pyxidy a podnet podal Július Horný st. na Archeologický ústav v Nitre. Vďaka všetkým patrí pyxida k raritám a unikátom obce, Slovenska i Európy. Pri obhliadke náleziska sa podarilo zachrániť súbor nálezov z rôznych období praveku a včasnej doby dejinnej, medzi ktorými vzbudili pozornosť najmä fragmenty pyxidy zo slonoviny.</p>\n<p>Miesto nálezu</p>\n<p>Lokalita nálezu sa nachádza asi 500 m južne od obce pri mlyne na vrchole a južnom svahu mierneho návršia. Z južnej a západnej strany pretekajú neďaleko potoky Širočina a Bočovka. Ryha na vodovodné potrubie, vyhĺbená od vodárne po okraj obce na ľavej strane cesty, narušila viaceré, prevažne sídliskové objekty. Ich zvyšky sa zreteľne črtali v dĺžke asi 200 m. Nesporne najvýznamnejším objektom bol porušený kostrový hrob, v ktorom sa našli fragmenty slonovinovej pyxidy.</p>\n<p>Motívy pyxidy</p>\n<p>Pyxida bola poskladaná do tvaru valcovitého plášťa. Jej výzdoba realizovaná v nízkom reliéfe je tvorená výjavom oráča s dobytčím záprahom a kráčajúcej ženy s košom obilia. V bukolickom výjave medzi odpočívajúcim stádom oviec a kôz dominujú postavy sediaceho mladého a prichádzajúceho starého pastiera.</p>\n<p>Z histórie</p>\n<p>Maximálny rozkvet umenia rezby zo slonoviny sa začína v polovici 4. storočia. Zo slonoviny sa vyrábali rôzne predmety, ale aj schránky. Výzdoba samozrejme reprezentovala spôsob použitia či majiteľa. Významné miesto medzi prácami zo slonoviny majú pyxidy – nádobka kruhového alebo oválneho tvaru s dnom a vrchnákom. Na rozvoji produkcie pyxíd sa v nemalej miere podieľala cirkev. Kresťanská liturgia prevzala používanie pyxidy nielen ako schránky na kadidlo, ale predovšetkým na ukladanie relikvií a hostie či eucharistie. Tak to určoval aj koncil v Narbonne z roku 589. V 9. storočí bývali pyxidy umiestnené nad oltárom a slúžili už ako relikviár. Vďaka tomu sa vo významných kresťanských chrámoch západnej Európy zachovali pozoruhodné exempláre.</p>\n<p>Pamätná tabuľa</p>\n<p>V roku 1991 bola odhalená pamätná tabuľa na kultúrnom dome s textom: „Z tejto obce pochádza výnimočné antické dielo, živé aj v časoch Veľkej Moravy, reliéfne zdobená slonovinová pyxida. Z úcty k histórii a k pamiatke sv. Cyrila a Metoda venujú vďační Slováci.” Tabuľu odhaľoval, prof. ThDr. Alojz Martinec, starosta obce Peter Horný, prvý podpredseda Matice slovenskej PhDr. Stanislav Bajaník – náš rodák a čestný občan,  za početnej účasti vzácnych hostí.</p>\n<p>Odhalenie pomníka</p>\n<p>V r. 1993 pri príležitosti celoslovenského stretnutia Kľačian na Slovensku bol pri mlyne, mieste nálezu Čiernokľačianskej pyxidy odhalený pomník s bronzovou tabuľou za účasti významných rodákov, hostí z Matice slovenskej, okolitých obcí a miest. Kameň darovala obec, bronzovú tabuľu Matica slovenská.</p>\n<p>Odhalenie a vysvätenie súsošia sv. Cyrila a Metoda</p>\n<p>V roku 1997 bolo v našej obci odhalenie a vysvätenie súsošia sv. Cyrila a Metoda ako prvého cyrilo-metodského súsošia na Slovensku v druhej SR. Autori: Akad. soch. Ľudmila Cvengrošová, Ing. arch. Viola Bajaníková – ako nezištný dar obci. Realizácia firma Koňuš – Gubáň, Kremnica. Súsošie s čiernokľačianskou pyxidou sa nachádza aj v Nitre, v Devíne, Zalavár (Blatno hrad) – Maďarsko. Iniciátormi a gestormi realizácie diela boli prvý podpredseda Matice slovenskej PhDr. Stanislav Bajaník, starosta obce Peter</p>\n<p>Horný, predseda MO MS Ing. Jozef Švec a poslanci obecného zastupiteľstva. Vysvätil ho náš rodák Mons. Vincent Malý, Dr.h.c.</p>\n<p>Dar pápežovi Jánovi Pavlovi II.</p>\n<p>V roku 2003 bola kópia čiernokľačianskej pyxidy odovzdaná pápežskému nunciovi v Bratislave ako dar pápežovi Jánovi Pavlovi II. a Vatikánu na jeho ostatnej návšteve na Slovensku. Nuncius a Svätá Stolica za dar osobitne písomne poďakovali. Dar odovzdávali: Imrich Dočolomanský, miestny rímsko-katolícky farár, Valéria Kršáková, zástupkyňa starostu obce, Ing. Jozef Švec, predseda MO Matice slovenskej, PhDr. Stanislav Bajaník za Maticu slovenskú.</p>\n<p>Relief Pyxidy</p>\n<p>Stanislav Lukáč, vo výkope vodovodu, r. 1974</p>\n<p>Rozložená rekonštrukcia motívov pyxidy</p>\n<p>Odhalenie pamätnej tabule na budove kultúrneho domu, r. 1991</p>\n<p>Miesto nálezu –  pamätník Pyxidy Prof. ThDr. Alojz Martinec a  Mons. Vincent Malý, Dr.h.c.</p>\n<p>Miesto nálezu – pamätník Pyxidy PhDr. Stanislav Bajaník</p>\n<p>Za mnohé aktivity čo boli organizované v súvislosti  s  Pyxidou bola unikátna výstava vo Vatikáne v dňoch 12. novembra 2013 – 26. januára 2014 „Najstaršie doklady počiatkov kresťanstva na Slovensku – sv. Cyril a Metod, patróni Európy,“ kde Pyxida mala prvé miesto. Nad podujatím, ktoré organizovalo Slovenské národné múzeum,  Archeologický ústav Slovenskej akadémie vied a Veľvyslanectvo SR pri Svätej Stolici, prevzali záštitu predseda vlády SR Robert Fico a nitriansky biskup Mons. prof. Viliam Judák. Foto: archív PhDr. Petra Bednára, CSc.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/ciernoklacianska-pyxida/",
        "en": "https://www.qrlink.sk/new/en/ciernoklacianska-pyxida/",
        "de": "https://www.qrlink.sk/new/de/ciernoklacianska-pyxida/",
        "ru": "https://www.qrlink.sk/new/ru/ciernoklacianska-pyxida/",
        "pl": "https://www.qrlink.sk/new/pl/ciernoklacianska-pyxida/",
        "hu": "https://www.qrlink.sk/new/hu/ciernoklacianska-pyxida/"
      }
    },
    {
      "id": "eb-cadca-namestie",
      "miesto": "eb-cadca",
      "poradie": 1,
      "nazov": "Námestie slobody",
      "popis": "Centrum mesta Čadca.",
      "cover": "",
      "audio": [],
      "galeria": [],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Námestie slobody je prirodzeným centrom Čadce – mesta, ktoré je bránou do Kysuckých\n      Beskýd.</p>"
    },
    {
      "id": "eb-hs-brana",
      "miesto": "eb-hrad-strecno",
      "poradie": 1,
      "nazov": "Vstupná brána",
      "popis": "Prvý pohľad na hrad nad Váhom.",
      "cover": "",
      "audio": [],
      "galeria": [],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Hrad Strečno strážil odjakživa dôležitú obchodnú cestu popri Váhu – vstupná brána\n      vás víta rovnako, ako vítala pocestných pred stáročiami.</p>"
    },
    {
      "id": "eb-hs-nadvorie",
      "miesto": "eb-hrad-strecno",
      "poradie": 2,
      "nazov": "Hradné nádvorie",
      "popis": "Centrálny priestor hradného areálu.",
      "cover": "",
      "audio": [],
      "galeria": [],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Nádvorie bolo srdcom každodenného života na hrade – remeselníci, čeľaď aj panstvo sa\n      tu stretávali pri svojich každodenných povinnostiach.</p>"
    },
    {
      "id": "eb-klin-centrum",
      "miesto": "eb-klin",
      "poradie": 1,
      "nazov": "Centrum obce",
      "popis": "Srdce obce pod Veľkou Račou.",
      "cover": "",
      "audio": [],
      "galeria": [],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Obec Klin leží v malebnom údolí pod najvyšším vrchom Kysuckých Beskýd – Veľkou Račou.</p>"
    },
    {
      "id": "eb-klin-kostol",
      "miesto": "eb-klin",
      "poradie": 2,
      "nazov": "Drevený kostolík",
      "popis": "Ľudová sakrálna architektúra Kysúc.",
      "cover": "",
      "audio": [],
      "galeria": [],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Drevený kostolík je ukážkou tradičnej ľudovej architektúry, akú nájdete len na\n      niekoľkých miestach Kysúc.</p>"
    },
    {
      "id": "eb-oh-brana-do-hradu",
      "miesto": "eb-oravsky-hrad",
      "poradie": 1,
      "nazov": "Brána do hradu",
      "popis": "Hlavný vstup do hradného areálu, ktorý vás vtiahne do histórie.",
      "cover": "assets/images/places/oravsky-hrad-brana.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2020/06/1-1.mp3"
      ],
      "galeria": [
        "assets/images/places/oravsky-hrad-brana.jpg",
        "assets/images/places/oravsky-hrad-kaplnka.jpg",
        "assets/images/places/oravsky-hrad-studna.jpg",
        "assets/images/places/oravsky-hrad-vyhliadka.jpg"
      ],
      "gps": {
        "lat": 49.262125,
        "lng": 19.3589331
      },
      "mapEmbed": "https://www.google.com/maps?q=49.2621250,19.3589331&z=16&output=embed",
      "text": "<p>Jednou z najväčších turistických atrakcií severného Slovenska je Oravský hrad, vybudovaný na skale nad riekou Orava v Oravskom Podzámku ako „orlie hniezdo“.</p>\n<p>Hrad začali budovať na mieste starého dreveného hrádku po tatárskom vpáde v roku 1241. Z pôvodne malej pevnosti z 13. storočia vznikol v priebehu nasledujúcich storočí rozsiahly hradný areál, ktorý má dnes 154 miestností.</p>\n<p>V minulosti bol župným hradom a sídlom Oravského hradného panstva. Patrila mu takmer celá Orava.</p>\n<p>Budovy a interiér hradu nesú črty románskeho slohu, gotiky, renesancie, baroka i moderných slohov. Hrad je totiž stále živý komplex, ktorého vývoj sa dodnes nezastavil.</p>",
      "i18n": {
        "en": {
          "nazov": "The Castle Gate",
          "popis": "The main entrance to the castle grounds that draws you into history.",
          "text": "<p>One of the greatest tourist attractions of northern Slovakia is Orava Castle, built on a rock above the Orava river in Oravský Podzámok as an &quot;eagle&#39;s nest&quot;.</p>\n<p>The castle began as a small wooden fort built after the Tatar invasion of 1241. From a small 13th-century fortress it grew over the following centuries into an extensive castle complex that has 154 rooms today.</p>\n<p>In the past it was a county castle and the seat of the Orava castle estate. Almost all of Orava belonged to it.</p>\n<p>The castle&#39;s buildings and interiors bear the marks of Romanesque, Gothic, Renaissance, Baroque and modern styles. The castle is in fact still a living complex whose development continues to this day.</p>"
        },
        "cs": {
          "nazov": "Brána do hradu",
          "popis": "Hlavní vstup do hradního areálu, který vás vtáhne do historie.",
          "text": "<p>Jednou z největších turistických atrakcí severního Slovenska je Oravský hrad, vybudovaný na skále nad řekou Orava v Oravském Podzámku jako „orlí hnízdo“.</p>\n<p>Hrad začali stavět na místě starého dřevěného hrádku po tatarském vpádu v roce 1241. Z původně malé pevnosti ze 13. století vznikl v průběhu následujících staletí rozsáhlý hradní areál, který má dnes 154 místností.</p>\n<p>V minulosti byl župním hradem a sídlem Oravského hradního panství. Patřila mu téměř celá Orava.</p>\n<p>Budovy a interiér hradu nesou rysy románského slohu, gotiky, renesance, baroka i moderních slohů. Hrad je totiž stále živý komplex, jehož vývoj se dodnes nezastavil.</p>"
        },
        "hu": {
          "nazov": "A vár kapuja",
          "popis": "A várudvar fő bejárata, amely magával ragadja a történelembe.",
          "text": "<p>Észak-Szlovákia egyik legnagyobb turisztikai látványossága az Árva vára, amely az Orava folyó fölötti sziklán, Árvaváralján épült, mint egy „sasfészek&quot;.</p>\n<p>A várat egy régi faerődítmény helyén kezdték építeni az 1241-es tatárjárás után. Az eredetileg kicsi, 13. századi erődítményből a következő évszázadok során kiterjedt váregyüttes lett, amelynek ma 154 helyisége van.</p>\n<p>Egykor megyei vár és az Árvai váruradalom székhelye volt. Szinte egész Árva vidéke hozzá tartozott.</p>\n<p>A vár épületei és belső terei a román, gótikus, reneszánsz, barokk és modern stílusok jegyeit hordozzák. A vár ugyanis ma is élő együttes, amelynek fejlődése a mai napig nem állt meg.</p>"
        }
      }
    },
    {
      "id": "eb-oh-kaplnka",
      "miesto": "eb-oravsky-hrad",
      "poradie": 2,
      "nazov": "Kaplnka",
      "popis": "Renesančná kaplnka sv. Michala s unikátnou výzdobou.",
      "cover": "assets/images/places/oravsky-hrad-kaplnka.jpg",
      "audio": [],
      "galeria": [],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Malá renesančná kaplnka zasvätená sv. Michalovi slúžila hradnej posádke aj panstvu\n      na súkromné bohoslužby. Zachovala sa v nej pôvodná výmaľba zo 17. storočia.</p>",
      "i18n": {
        "en": {
          "nazov": "The Chapel",
          "popis": "A Renaissance chapel of St. Michael with unique decoration.",
          "text": "<p>The small Renaissance chapel dedicated to St. Michael served the castle garrison and the nobility for private worship. It still preserves its original 17th-century wall paintings.</p>"
        },
        "cs": {
          "nazov": "Kaple",
          "popis": "Renesanční kaple sv. Michala s unikátní výzdobou.",
          "text": "<p>Malá renesanční kaple zasvěcená sv. Michalovi sloužila hradní posádce i panstvu k soukromým bohoslužbám. Zachovala se v ní původní malba ze 17. století.</p>"
        },
        "hu": {
          "nazov": "A kápolna",
          "popis": "Szent Mihály-kápolna, reneszánsz stílusban, egyedülálló díszítéssel.",
          "text": "<p>A Szent Mihálynak szentelt kis reneszánsz kápolna a vár őrségének és az uraságnak szolgált magánájtatosságra. Benne máig megmaradt a 17. századi eredeti falfestés.</p>"
        }
      }
    },
    {
      "id": "eb-oh-hradna-studna",
      "miesto": "eb-oravsky-hrad",
      "poradie": 3,
      "nazov": "Hradná studňa",
      "popis": "Hlboká studňa vytesaná do skaly, ktorá slúžila po stáročia.",
      "cover": "assets/images/places/oravsky-hrad-studna.jpg",
      "audio": [],
      "galeria": [],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Studňa vytesaná priamo do skalného brala zásobovala hrad vodou aj počas najdlhších\n      obliehaní. Jej hĺbka dodnes vyráža návštevníkom dych.</p>",
      "i18n": {
        "en": {
          "nazov": "The Castle Well",
          "popis": "A deep well carved into the rock that served for centuries.",
          "text": "<p>The well, carved directly into the rocky cliff, supplied the castle with water even during the longest sieges. Its depth still takes visitors&#39; breath away today.</p>"
        },
        "cs": {
          "nazov": "Hradní studna",
          "popis": "Hluboká studna vytesaná do skály, která sloužila po staletí.",
          "text": "<p>Studna vytesaná přímo do skalního bradla zásobovala hrad vodou i během nejdelších obléhání. Její hloubka dodnes bere návštěvníkům dech.</p>"
        },
        "hu": {
          "nazov": "A vár kútja",
          "popis": "A sziklába vájt mély kút, amely évszázadokon át szolgálta a várat.",
          "text": "<p>A közvetlenül a sziklába vájt kút a leghosszabb ostromok idején is vízzel látta el a várat. Mélysége a mai látogatóknak is eláll a lélegzete.</p>"
        }
      }
    },
    {
      "id": "eb-oh-vyhliadka",
      "miesto": "eb-oravsky-hrad",
      "poradie": 4,
      "nazov": "Vyhliadka",
      "popis": "Nádherný panoramatický výhľad na rieku Oravu a okolitú krajinu.",
      "cover": "assets/images/places/oravsky-hrad-vyhliadka.jpg",
      "audio": [],
      "galeria": [],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Z najvyššieho nádvoria sa otvára jeden z najkrajších pohľadov na rieku Oravu a okolité\n      hrebene – odmena za výstup po hradných schodoch.</p>",
      "i18n": {
        "en": {
          "nazov": "The Lookout",
          "popis": "A magnificent panoramic view of the Orava river and surrounding countryside.",
          "text": "<p>From the highest courtyard opens one of the most beautiful views of the Orava river and the surrounding ridges – a reward for climbing the castle stairs.</p>"
        },
        "cs": {
          "nazov": "Vyhlídka",
          "popis": "Nádherný panoramatický výhled na řeku Oravu a okolní krajinu.",
          "text": "<p>Z nejvyššího nádvoří se otevírá jeden z nejkrásnějších pohledů na řeku Oravu a okolní hřebeny – odměna za výstup po hradních schodech.</p>"
        },
        "hu": {
          "nazov": "A kilátó",
          "popis": "Csodálatos panoráma az Orava folyóra és a környező tájra.",
          "text": "<p>A legfelső várudvarról nyílik az egyik legszebb kilátás az Orava folyóra és a környező hegygerincekre – ez a jutalom a vár lépcsőinek megmászásáért.</p>"
        }
      }
    },
    {
      "id": "eb-oh-nadvorie",
      "miesto": "eb-oravsky-hrad",
      "poradie": 5,
      "nazov": "Nádvorie",
      "cover": "",
      "audio": [],
      "text": "<p>[DOPLNIŤ – text zastavenia]</p>",
      "galeria": [],
      "gps": null,
      "mapEmbed": ""
    },
    {
      "id": "eb-oh-veza",
      "miesto": "eb-oravsky-hrad",
      "poradie": 6,
      "nazov": "Veža",
      "cover": "",
      "audio": [],
      "text": "<p>[DOPLNIŤ – text zastavenia]</p>",
      "galeria": [],
      "gps": null,
      "mapEmbed": ""
    },
    {
      "id": "eb-plte-nastupiste",
      "miesto": "eb-plte-na-vahu",
      "poradie": 1,
      "nazov": "Nástupište pltí",
      "popis": "Miesto, kde sa nalodíte na tradičnú pltnícku plavbu.",
      "cover": "",
      "audio": [],
      "galeria": [],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Tradičné pltníctvo na Váhu ožíva aj dnes – z tohto nástupišťa sa vydávajú drevené\n      plte na plavbu, akou kedysi putovalo drevo z hôr až do údolia.</p>"
    },
    {
      "id": "eb-dedovka-vyhliadka",
      "miesto": "eb-rozhliadka-dedovka",
      "poradie": 1,
      "nazov": "Vyhliadková plošina",
      "popis": "360° výhľad na Kysuce, Beskydy aj Poľsko.",
      "cover": "",
      "audio": [],
      "galeria": [],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Rozhliadňa Dedovka ponúka výhľad na tri krajiny naraz – ideálny cieľ nenáročnej\n      turistiky pre celú rodinu.</p>"
    },
    {
      "id": "eb-vr-vrchol",
      "miesto": "eb-velka-raca",
      "poradie": 1,
      "nazov": "Vrchol Veľkej Rače",
      "popis": "Najvyšší bod Kysuckých Beskýd (1 236 m n. m.).",
      "cover": "",
      "audio": [],
      "galeria": [],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Z vrcholu Veľkej Rače sa za jasného počasia vidí až do Poľska a Českej republiky –\n      symbolické miesto, kde sa stretávajú tri krajiny.</p>"
    },
    {
      "id": "mestsky-urad-frydlant-nad-ostravici",
      "miesto": "frydlant",
      "poradie": 1,
      "nazov": "Mestský úrad Frýdlant nad Ostravicí",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2017/11/01-Městský-úřad-na-Náměstí.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/03/1.-Building-of-the-Municipality-office-Frýdlant-nad-Ostravicí.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 49.592778,
        "lng": 18.359571
      },
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m27!1m12!1m3!1d165783.04510097744!2d18.403776602322836!3d49.51547739682597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m12!3e0!4m4!2s49.403521%2C+18.625441!3m2!1d49.403521!2d18.625441!4m5!1s0x4713f5987824f24d%3A0xb00e1429c70b675f!2zTcSbc3Rza8O9IMO6xZlhZCBGcsO9ZGxhbnQgTmFkIE9zdHJhdmljw60sIE7DoW3Em3N0w60gMywgRnLDvWRsYW50LCBGcsO9ZGxhbnQgbmFkIE9zdHJhdmljw60sIMSMZXNrbw!3m2!1d49.5927784!2d18.3595714!5e0!3m2!1ssk!2ssk!4v1515004198461",
      "text": "<p>Novorenesančná budova mestského úradu dominuje z južnej strany námestia vo Frýdlante nad Ostravicí. Bola postavená v roku 1894 zásluhou Katolíckej besedy ako objekt Národného domu. Staviteľom radnice bol B. Židlický z Ostravy. Národný dom bol slávnostne otvorený v roku 1895. Boli v ňom jednak miestnosti pre Frýdlantskú záložňu z roku 1871, sála pre katolícku besedu, ktorá je dnes premenená na Janáčkovu sieň, v ktorej sa teraz konajú svadobné obrady, koncerty a iné kultúrne a spoločenské podujatia. Prízemie budovy bolo prenajaté ako krčma, na 1. poschodí malo svoje miestnosti mesto. Radnica bola niekoľkokrát prestavovaná a upravovaná. Posledné opravy, ktoré stavbe dali pôvodný novorenesančný vzhľad, prebehli v rokoch 1998 – 99 podľa Ing. arch. Tomáša Šimonovského z Ostravy. V súčasnej dobe budova slúži ako správna budova pre vedenie mesta Frýdlant nad Ostravicí a odbor životného prostredia.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/mestsky-urad-frydlant-nad-ostravici/",
        "en": "https://www.qrlink.sk/new/en/mestsky-urad-frydlant-nad-ostravici/",
        "de": "https://www.qrlink.sk/new/de/mestsky-urad-frydlant-nad-ostravici/",
        "ru": "https://www.qrlink.sk/new/ru/mestsky-urad-frydlant-nad-ostravici/",
        "pl": "https://www.qrlink.sk/new/pl/mestsky-urad-frydlant-nad-ostravici/",
        "hu": "https://www.qrlink.sk/new/hu/mestsky-urad-frydlant-nad-ostravici/"
      }
    },
    {
      "id": "kostol-sv-bartolomeja",
      "miesto": "frydlant",
      "poradie": 2,
      "nazov": "Kostol sv. Bartolomeja",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2017/11/02-Kostel-sv.-Bartoloměje-1.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/03/2.-Church-of-St.-Bartolomej-2.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 49.593281,
        "lng": 18.358821
      },
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m27!1m12!1m3!1d165855.05517885624!2d18.380008743677443!3d49.49422999228604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m12!3e0!4m4!2s49.403521%2C+18.625441!3m2!1d49.403521!2d18.625441!4m5!1s0x4713f5980862144f%3A0xce7821426f313e74!2sKostel+Svaty+Bartolom%C4%9Bje%2C+739+11+Fr%C3%BDdlant+nad+Ostravic%C3%AD%2C+%C4%8Cesko!3m2!1d49.593280799999995!2d18.358821199999998!5e0!3m2!1ssk!2ssk!4v1515004732403",
      "text": "<p>Kostol sv. Bartolomeja bol postavený medzi rokmi 1672 – 1690 a nahradil starší drevený kostolík sv. Matúša (Mateja) stojaci pravdepodobne v miestach dnešnej kaplnky na Kamenci. V prvej polovici 18. storočia bol rozšírený o bočné lode a presbytérium do dnešnej podoby. K najvýznamnejším opravám patria opravy po veľkých požiaroch mesta v rokoch 1886 a 1890. Z tej doby tiež pochádza nová podoba ihlanovej strechy veže, predtým barokového cibuľovitého tvaru. Na stene kostola je náhrobok nájomcov hút Homoláčových, blízko je liatinový kríž z tunajšej zlievarne a socha sv. Floriána.</p>\n<p>Medzi významné dni Kostola sv. Bartolomeja patrí piatok 13. augusta 2010, kedy sa o 20. hodine úplne prvýkrát rozozvučali štyri nové zvony, ktoré boli v ten deň slávnostne zavesené vo veži. Zvony posvätil biskup ostravsko-opavskej diecézy monsignor František Lobkowicz. Všetky štyri zvony boli odliate vo zvonárskej dielni Tomášková-Dytrychová v Brodku u Přerova. Sú vyrobené zo špeciálnej zliatiny určenej na výrobu zvonov, takzvanej zvonoviny. Najväčším zo štvorice je zvon Najsvätejšej Trojice, ktorý má priemer 1 040 milimetrov, váži 850 kilogramov a vydáva tón Fis 1. Druhý najväčší je zvon Panny Márie Karmelskej, ktorý má priemer jeden meter, váži 620 kilogramov a vyladený je do tónu Gis 1. Podľa veľkosti nasleduje zvon Svätý Anton s priemerom 890 milimetrov, ktorý váži 362 kilogramov a zvoní v tóne H 1. Najmenší z tejto štvorice je zvon svätý Bartolomej s priemerom 770 milimetrov, hmotnosťou 282 kilogramov, ktorý vydáva tón Cis 2.</p>\n<p>Pôvodné frýdlantské zvony, ktorými boli svätý Cyril, Bartolomej, Josef, Pavol a Mária, za vojny skonfiškovali a odviezli do Nemecka nacisti. Podľa pamätníkov vraj tieto zvony neboli nakoniec pretavené na zbrane, avšak po vojne, keď do Frýdlantu prišla výzva, aby si ich zástupcovia mesta vyzdvihli v Hamburgu, pre ne nikto nezašiel. Vraj snáď preto, že v tej dobe sa už dostávali k slovu komunisti, pre ktorých zvony rozhodne prioritou neboli.</p>\n<p>Od 3. 5. 1958 je kostol kultúrnou pamiatkou.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/kostol-sv-bartolomeja/",
        "en": "https://www.qrlink.sk/new/en/kostol-sv-bartolomeja/",
        "de": "https://www.qrlink.sk/new/de/kostol-sv-bartolomeja/",
        "ru": "https://www.qrlink.sk/new/ru/kostol-sv-bartolomeja/",
        "pl": "https://www.qrlink.sk/new/pl/kostol-sv-bartolomeja/",
        "hu": "https://www.qrlink.sk/new/hu/kostol-sv-bartolomeja/"
      }
    },
    {
      "id": "centrum-socialnych-sluzieb",
      "miesto": "frydlant",
      "poradie": 3,
      "nazov": "Centrum sociálnych služieb",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2017/11/03-Středisko-sociálních-služeb-kaple.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/03/3.-Social-Service-Centrum-4.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 49.594454,
        "lng": 18.357188
      },
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m27!1m12!1m3!1d165835.97547750236!2d18.3477405548129!3d49.49986033363818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m12!3e0!4m4!2s49.403521%2C+18.625441!3m2!1d49.403521!2d18.625441!4m5!1s0x4713f5bd3363d29d%3A0xec44c73b95af99db!2zU3TFmWVkaXNrbyBzb2Npw6FsbsOtY2ggc2x1xb5lYiBtxJtzdGEgRnLDvWRsYW50IG5hZCBPc3RyYXZpY8OtLCBQYWRsw71jaCBocmRpbsWvIDMxMiwgNzM5IDExIEZyw71kbGFudCBuYWQgT3N0cmF2aWPDrSwgxIxlc2tv!3m2!1d49.5944544!2d18.3571875!5e0!3m2!1ssk!2ssk!4v1515004946204",
      "text": "<p>Budova bývalého kláštora a v súčasnej dobe Strediska sociálnych služieb je jedna z najrozsiahlejších architektonických pamiatok vo Frýdlante nad Ostravicí, ktorú nechal postaviť olomoucký arcibiskup Bedřich z Fürstenbergu. Na čele budovy je umiestnená neorománska rehoľná kaplnka, ktorá je kópiou Baziliky sv. Pavla v Ríme. Je delená na tri lode, má štyri úzke románske okná. Strop nad hlavnou loďou je drevený kazetový a klenby v bočných lodiach znázorňujú hviezdne nebo. Steny a stĺpy sú bohato zdobené maľbami. Na stenách sú obrazy sv. Cyrila a Metoda, sv. Karla a sv. Bedřicha, ktorý mal predstavovať zakladateľa Friedrichovho ústavu Bedřicha z Fürstenbergu, a ktorý v ľavej ruke drží model kaplnky. Bedřich z Fürstenbergu kaplnku osobne vysvätil 5. 11. 1876. V kaplnke sa niekoľkokrát do roka konajú koncerty.</p>\n<p>Základný kameň k stavbe Kláštora Milosrdných sestier sv. Karla Boromejského bol položený 28. augusta 1871. Veľký krásny dom so širokými klenutými chodbami a priestrannými vzdušnými miestnosťami a zvlášť krásna kaplnka svedčili o veľkomyseľnosti zakladateľa olomouckého arcibiskupa Bedřicha z Fürstenbergu.</p>\n<p>Kláštor dlhú dobu fungoval ako škola, keď sa o nej hovorilo, že v zdravom lesnom kraji poskytuje mládeži všetko, čo potrebuje na zosilnenie tela a vzdelávanie ducha. Výsledky vyučovania v ústavnej škole získali dôveru nejedného školského inšpektora. Jeden z nich vyhlásil: „Do tunajšieho domu som vstupoval s predsudkami proti kláštorným školám, ale opúšťam ho s iným zmýšľaním, dokonca s nadšením!“ Dňa 30. októbra 1877 dostala škola povolenie na vyučovanie. Pričinením toho istého zemského inšpektora dostala škola 9. júla 1881 právo verejnosti. V poslednom roku druhej svetovej vojny bola prerušená školská výučba a v kláštore bol zriadený vojenský lazaret. Po oslobodení v roku 1945 bola opäť zriadená bežná prevádzka až do zoštátnenie škôl v roku 1948. V rokoch 1963 až 1983 bola v južnom krídle budovy umiestnená Stredná všeobecnovzdelávacia škola, neskôr gymnázium.</p>\n<p>Dekrétom Krajského národného výboru (KVN) z 19. 4. 1950 bol v kláštore zriadený domov dôchodcov. Ošetrovateľské a niektoré prevádzkové práce ešte vykonávali radové sestry. Postupne sa ich počet znižoval. Boli nahradzované civilnými zamestnancami. Posledné sestry odišli z kláštora po storočnom pôsobení vo Frýdlante koncom júla 1971. Budovy strediska sociálnych služieb prešli v posledných rokoch rozsiahlou rekonštrukciou a tvoria nádhernú dominantu mesta.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/centrum-socialnych-sluzieb/",
        "en": "https://www.qrlink.sk/new/en/centrum-socialnych-sluzieb/",
        "de": "https://www.qrlink.sk/new/de/centrum-socialnych-sluzieb/",
        "ru": "https://www.qrlink.sk/new/ru/centrum-socialnych-sluzieb/",
        "pl": "https://www.qrlink.sk/new/pl/centrum-socialnych-sluzieb/",
        "hu": "https://www.qrlink.sk/new/hu/centrum-socialnych-sluzieb/"
      }
    },
    {
      "id": "kulturne-centrum-frydlant-nad-ostravici",
      "miesto": "frydlant",
      "poradie": 4,
      "nazov": "Kultúrne centrum Frýdlant nad Ostravicí",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2017/11/04-Kulturní-centrum-Frýdlant-nad-Ostravicí.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/03/4.-Culture-Centrum-of-Frýdlant-nad-Ostravicí-4.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 49.592142,
        "lng": 18.357303
      },
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m27!1m12!1m3!1d165835.97547750236!2d18.347736404812917!3d49.49986033363818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m12!3e0!4m4!2s49.403521%2C+18.625441!3m2!1d49.403521!2d18.625441!4m5!1s0x4713f59eed9b6c1d%3A0xd947e2701e53a5db!2sCultural+center+Fr%C3%BDdlant+nad+Ostravic%C3%AD%2C+Hlavn%C3%AD+1755%2C+739+11+Fr%C3%BDdlant+nad+Ostravic%C3%AD%2C+%C4%8Cesko!3m2!1d49.5921418!2d18.3573025!5e0!3m2!1ssk!2ssk!4v1515007017796",
      "text": "<p>Kultúrne centrum Frýdlant nad Ostravicí je príspevkovou organizáciou mesta Frýdlant nad Ostravicí s vlastnou právnou subjektivitou. Bolo zriadené za účelom organizovania kultúrneho a spoločenského života v meste a jeho okolí. Akcie sú organizované v Kultúrnom centre, ktorého priestory ponúkajú záujemcom veľkú spoločenskú sálu s kapacitou 500 miest, kino a konferenčné centrum, spoločenské miestnosti určené miestnym spolkom, krúžkom a klubom, Galériu umeleckého smaltu a liatiny aj Galériu Ferdiša Dušu, mestskú knižnicu a terminál Beskydského informačného centra. Na prízemí Kultúrneho centra sa nachádza stála expozícia liatiny, ktorá zahŕňa obdobie od prvej tretiny 19. storočia až do obdobia secesie. Predstavuje kópie umeleckých diel renesancie, baroka, ukážky zbroje, individuálne výtvarné návrhy a štýlové liatinové kachle. Galéria umeleckého smaltu ukazuje využitie starých technológií na modernú tvorbu umelcov. Od roku 1999 sú tu práce viac ako dvadsiatky umelcov z celej Európy, ktorí sa zúčastňujú medzinárodných sympózií Frýdlantský umelecký smalt. Ide o jedinečnú európsku zbierku smaltu svojho druhu. Galéria Ferdiša Dušu je venovaná frýdlantskému rodákovi, maliari a grafikovi Ferdišovi Dušovi (1888 – 1958). Zbierka v atraktívnom stvárnení ponúka nielen obrazy, ale aj veci menej známe, napríklad keramiku. Súčasťou komplexu Kultúrneho centra je tiež mestská knižnica s cca 38 tisíckami knižničných jednotiek. Knižnica prirodzene dopĺňa Kultúrne centrum, pretože sa v nej každoročne organizuje mnoho náučných a zábavných akcií pre deti i širokú verejnosť.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/kulturne-centrum-frydlant-nad-ostravici/",
        "en": "https://www.qrlink.sk/new/en/kulturne-centrum-frydlant-nad-ostravici/",
        "de": "https://www.qrlink.sk/new/de/kulturne-centrum-frydlant-nad-ostravici/",
        "ru": "https://www.qrlink.sk/new/ru/kulturne-centrum-frydlant-nad-ostravici/",
        "pl": "https://www.qrlink.sk/new/pl/kulturne-centrum-frydlant-nad-ostravici/",
        "hu": "https://www.qrlink.sk/new/hu/kulturne-centrum-frydlant-nad-ostravici/"
      }
    },
    {
      "id": "zakladna-skola-frydlant-nad-ostravici-namestie-t-g-masaryka-1260-prispevkova-organizacia",
      "miesto": "frydlant",
      "poradie": 5,
      "nazov": "Základná škola Frýdlant nad Ostravicí, Námestie T. G. Masaryka 1260, príspevková organizácia",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2017/11/05-Základní-škola-T.G.Masaryka.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/03/5.-Elementary-School-Frýdlant-nad-Ostravicí-4.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 49.593006,
        "lng": 18.354736
      },
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m27!1m12!1m3!1d165834.4642398111!2d18.436146163943786!3d49.50030627346428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m12!3e0!4m4!2s49.403521%2C+18.625441!3m2!1d49.403521!2d18.625441!4m5!1s0x4713f5a31d6fc8fd%3A0x1008bc79d81d4f33!2zWsOha2xhZG7DrSDFoWtvbGEgRnLDvWRsYW50IG5hZCBPc3RyYXZpY8OtLCBuw6FtxJtzdMOtIFQuRy4gTWFzYXJ5a2EgMTI2MCwgcMWZw61zcMSbdmtvdsOhIG9yZ2FuaXphY2UsIE7DoW3Em3N0w60gVG9tw6HFoWUgR2FycmlndWUgTWFzYXJ5a2EgMTI2MCwgRnLDvWRsYW50IG5hZCBPc3RyYXZpY8OtLCDEjGVza28!3m2!1d49.5930061!2d18.3547357!5e0!3m2!1ssk!2ssk!4v1515007244203",
      "text": "<p>Sedemdesiate roky 20. storočia priniesli myšlienku vybudovať nový vzdelávací komplex, a tak bola začatá výstavba nového školského areálu na Janáčkovej ulici. Trvala takmer 10 rokov a stála zo vtedajšieho rozpočtu obce 46 mil. Kčs. V novostavbe našli svoj domov základná deväťročná škola sídliaca pôvodne na Ulici padlých hrdinov, a tiež gymnázium. Námestíčko vzniknuté pred novým urbanistickým celkom bolo pomenované po Gustavovi Klimentovi. Slávnostného otvorenia 1. septembra 1983 sa zúčastnilo mnoho miestnych aj regionálnych straníckych a mestských predstaviteľov. Po novembri 1989 a prvých slobodných voľbách v roku 1990 bola pred školou odhalená socha T. G. Masaryka a dala základnej škole impulz pre nové, dôstojnejšie meno, ktoré nesie dodnes.</p>\n<p>Základnú školu navštevuje viac ako 600 žiakov a poskytuje im tiež služby školskej družiny a jedálne. Zriaďovateľom školy je mesto Frýdlant nad Ostravicí. Celý komplex doplňuje budova gymnázia, ktorá nadväzuje na budovu základnej školy. Gymnázium je šesťročné a navštevuje ho takmer 300 študentov. Zriaďovateľom frýdlantského gymnázia je Moravskoslezský kraj. Neoddeliteľnou súčasťou areálu je tiež úplne novozrekonštruované viacúčelové športové ihrisko, ktoré slúži nielen žiakom a študentom, ale v popoludňajších hodinách tiež širokej verejnosti.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/zakladna-skola-frydlant-nad-ostravici-namestie-t-g-masaryka-1260-prispevkova-organizacia/",
        "en": "https://www.qrlink.sk/new/en/zakladna-skola-frydlant-nad-ostravici-namestie-t-g-masaryka-1260-prispevkova-organizacia/",
        "de": "https://www.qrlink.sk/new/de/zakladna-skola-frydlant-nad-ostravici-namestie-t-g-masaryka-1260-prispevkova-organizacia/",
        "ru": "https://www.qrlink.sk/new/ru/zakladna-skola-frydlant-nad-ostravici-namestie-t-g-masaryka-1260-prispevkova-organizacia/",
        "pl": "https://www.qrlink.sk/new/pl/zakladna-skola-frydlant-nad-ostravici-namestie-t-g-masaryka-1260-prispevkova-organizacia/",
        "hu": "https://www.qrlink.sk/new/hu/zakladna-skola-frydlant-nad-ostravici-namestie-t-g-masaryka-1260-prispevkova-organizacia/"
      }
    },
    {
      "id": "zakladna-skola-frydlant-nad-ostravici-komenskeho-420-prispevkova-organizacia",
      "miesto": "frydlant",
      "poradie": 6,
      "nazov": "Základná škola Frýdlant nad Ostravicí, Komenského 420, príspevková organizácia",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2017/11/6.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/03/6.-Elementary-school-Frýdlant-nad-Ostravicí.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 49.592179,
        "lng": 18.357999
      },
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m27!1m12!1m3!1d165827.00272619413!2d18.353963274557014!3d49.50250799225783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m12!3e0!4m4!2s49.403521%2C+18.625441!3m2!1d49.403521!2d18.625441!4m5!1s0x4713f59877833131%3A0xcb8b6b99834ea021!2zWsOha2xhZG7DrSDFoWtvbGEgRnLDvWRsYW50IG5hZCBPc3RyYXZpY8OtIEtvbWVuc2vDqWhvIDQyMCBva3JlcyBGcsO9ZGVrLU3DrXN0ZWssIHDFmcOtc3DEm3Zrb3bDoSBvcmdhbml6YWNlLCBIbGF2bsOtIDEzOSwgRnLDvWRsYW50IG5hZCBPc3RyYXZpY8OtLCDEjGVza28!3m2!1d49.592178499999996!2d18.3579988!5e0!3m2!1ssk!2ssk!4v1515007861863",
      "text": "<p>História školy sa píše od roku 1925, kedy sa začala stavať budova na Komenského ulici a bola dlho najvyššou budovou v meste. Výučba sa začala v školskom roku 1926/1927. V máji 1994 sa škola rozšírila o nový pavilón pre druhý stupeň vzdelávania. Historická časť budovy bola v roku 2004 po mnohých rokoch rekonštruovaná a areál školy bol rozšírený o časť, kde je teraz školská jedáleň a učebne pre prvý stupeň vzdelávania. Areál školy dopĺňa moderne vybavené športové ihrisko. Základná škola má kapacitu 560 žiakov. Jej zriaďovateľom je mesto Frýdlant nad Ostravicí. Škola má tiež svoje odlúčené pracovisko, ktoré sa nachádza v mestskej časti Nová Ves.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/zakladna-skola-frydlant-nad-ostravici-komenskeho-420-prispevkova-organizacia/",
        "en": "https://www.qrlink.sk/new/en/zakladna-skola-frydlant-nad-ostravici-komenskeho-420-prispevkova-organizacia/",
        "de": "https://www.qrlink.sk/new/de/zakladna-skola-frydlant-nad-ostravici-komenskeho-420-prispevkova-organizacia/",
        "ru": "https://www.qrlink.sk/new/ru/zakladna-skola-frydlant-nad-ostravici-komenskeho-420-prispevkova-organizacia/",
        "pl": "https://www.qrlink.sk/new/pl/zakladna-skola-frydlant-nad-ostravici-komenskeho-420-prispevkova-organizacia/",
        "hu": "https://www.qrlink.sk/new/hu/zakladna-skola-frydlant-nad-ostravici-komenskeho-420-prispevkova-organizacia/"
      }
    },
    {
      "id": "letisko-frydlant-nad-ostravici",
      "miesto": "frydlant",
      "poradie": 7,
      "nazov": "Letisko Frýdlant nad Ostravicí",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2017/11/07-Letiště-Frýdlant-nad-Ostravicí.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/03/7.-Airport-Frýdlant-nad-Ostravicí.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 49.589172,
        "lng": 18.376106
      },
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m27!1m12!1m3!1d165846.86804241038!2d18.387242968969634!3d49.49664604044663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m12!3e0!4m4!2s49.403521%2C+18.625441!3m2!1d49.403521!2d18.625441!4m5!1s0x47140a7b63d93a8f%3A0xe487d1164233bd12!2sAeroklub+Fr%C3%BDdlant+nad+Ostravic%C3%AD%2C+Fr%C3%BDdlant+nad+Ostravic%C3%AD%2C+739+11+Fr%C3%BDdlant+nad+Ostravic%C3%AD%2C+%C4%8Cesko!3m2!1d49.589171699999994!2d18.3761056!5e0!3m2!1ssk!2ssk!4v1515008105929",
      "text": "<p>Športové letisko nad mestom Frýdlant nad Ostravicí a pod Lysou horou slúži pre motorové aj bezmotorové lietanie. Najvyšší vrchol Ondřejníka Skalka umožňuje prevádzkovanie množstva paradisciplín.</p>\n<p>Letisko vo Frýdlante nad Ostravicí je najvýchodnejšie položeným letiskom Českej republiky. Vlastníkom a prevádzkovateľom verejného vnútroštátneho letiska je Aeroklub Frýdlant nad Ostravicí. Je držiteľom licencií na prevádzkovanie leteckých prác, leteckej školy a parašutistickej školy. V súčasnosti združuje okolo 100 členov, ale za celú históriu existencie letiska a pôsobenia frýdlantského aeroklubu vyšlo z jeho radov nespočetné množstvo pilotov, parašutistov a predtým aj modelárov. Členovia sa v rámci aeroklubu nevenujú len vlastnému motorovému alebo bezmotorovému lietaniu a parašutizmu, ale aj organizácii a zabezpečeniu letových prevádzok, základných a zdokonaľovacích výcvikov, údržbe leteckej techniky, opravám a výstavbe areálu letiska, údržbe letiskovej vzletovej a pristávacej dráhy, organizovaniu športových, leteckých a spoločenských akcií, práci s mládežou a poskytovaniu služieb iným organizáciám, návštevníkom, turistom alebo hosťom letiska. Aeroklub vlastní lietadlá, vrtuľníky, klzáky, ultraľahké lietadlá i voľné balóny.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/letisko-frydlant-nad-ostravici/",
        "en": "https://www.qrlink.sk/new/en/letisko-frydlant-nad-ostravici/",
        "de": "https://www.qrlink.sk/new/de/letisko-frydlant-nad-ostravici/",
        "ru": "https://www.qrlink.sk/new/ru/letisko-frydlant-nad-ostravici/",
        "pl": "https://www.qrlink.sk/new/pl/letisko-frydlant-nad-ostravici/",
        "hu": "https://www.qrlink.sk/new/hu/letisko-frydlant-nad-ostravici/"
      }
    },
    {
      "id": "futbalove-ihrisko-a-hala-sport-frydlant-nad-ostravici",
      "miesto": "frydlant",
      "poradie": 8,
      "nazov": "Futbalové ihrisko a hala Sport Frýdlant nad Ostravicí",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2017/11/08-Fotbalové-hřiště-a-hala-Sport.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/03/8.Football-playground-and-Sport-Hall-in-Frýdlant-nad-Ostravicí.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 49.585279,
        "lng": 18.364264
      },
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m27!1m12!1m3!1d164588.38168304492!2d18.40416407705247!3d49.496800374406526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m12!3e0!4m4!2s49.403521%2C+18.625441!3m2!1d49.403521!2d18.625441!4m5!1s0x4713f59c53610893%3A0xe97711584e233f61!2zVSBoxZlpxaF0xJsgMTQyNCwgRnLDvWRsYW50LCA3MzkgMTEgRnLDvWRsYW50IG5hZCBPc3RyYXZpY8OtLCDEjGVza28!3m2!1d49.5852788!2d18.3642642!5e0!3m2!1ssk!2ssk!4v1515009563390",
      "text": "<p>Futbal vo Frýdlante má skutočne hlboké korene. Veď začiatky tohto športu na území nášho mesta siahajú až do roku 1921. Pod hlavičkou SK Frýdlant sa niekoľko športových nadšencov stáva priekopníkmi futbalu v meste. Koncom dvadsiatych rokov 20. storočia nastáva vo Frýdlante veľký rozmach futbalu. Vzniká celý rad amatérskych periférnych klubov ako CZ Vincek Hamer Cukor, SK Odeon Papiereň, Viktoria, Kamenec, Kopec I, Kopec II, Paseky, Nová Dědina, Obecný a Argentína. Tieto kluby medzi sebou zvádzali tuhé boje o majstra Frýdlantu a práve v týchto družstvách začínalo množstvo neskorších vynikajúcich hráčov, ktorí šírili slávu nášho mesta v celom kraji. V roku 1931 je oficiálne založené SSF – Športové združenia Frýdlant (Sportovní sdružení Frýdlant) a súčasne tiež oddiel futbalu. V roku 1932 začal továrnik Postelberg, majiteľ závodu NORMA, s budovaním športového areálu. Ten bol slávnostne otvorený v roku 1933 majstrovským zápasom proti SK Meteor Vratimov, v ktorom domáci hráči rozdrvili svojho súpera v pomere 5:0. Vo Frýdlante tak nastal obrovský rozmach futbalu. V máji 2012 sa 1. Beskydský futbalový klub Frýdlant nad Ostravicí dočkal najväčšieho úspechu v dejinách klubu, keď z majstrovstiev Európy neprofesionálnych tímov v Rakúsku doviezol striebornú medailu a stal sa tak vicemajstrom Európy „Mountain Village European Championship“.</p>\n<p>Futbalový štadión sa skladá z troch hracích plôch, z toho jedna je s umelým trávnikom tretej generácie a s možnosťou osvetlenia. Kapacita štadióna je 2600 miest, z toho je 530 miest na sedenie.</p>\n<p>Súčasťou areálu je aj hala Sport. Ide o viacúčelový športový areál využívaný prevažne na halové športy. Hlavnou súčasťou haly je veľká telocvičňa s rozmermi 15 x 30 m, ktorá je vhodná pre hru bedmintonu (2 kurty), nohejbalu, florbalu, hádzanej, sálového futbalu a volejbalu. Areál športovej haly ďalej disponuje herňou stolného tenisu. V hale Sport sa ďalej nachádza posilňovňa a nefajčiarsky bar s kapacitou 30 miest.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/futbalove-ihrisko-a-hala-sport-frydlant-nad-ostravici/",
        "en": "https://www.qrlink.sk/new/en/futbalove-ihrisko-a-hala-sport-frydlant-nad-ostravici/",
        "de": "https://www.qrlink.sk/new/de/futbalove-ihrisko-a-hala-sport-frydlant-nad-ostravici/",
        "ru": "https://www.qrlink.sk/new/ru/futbalove-ihrisko-a-hala-sport-frydlant-nad-ostravici/",
        "pl": "https://www.qrlink.sk/new/pl/futbalove-ihrisko-a-hala-sport-frydlant-nad-ostravici/",
        "hu": "https://www.qrlink.sk/new/hu/futbalove-ihrisko-a-hala-sport-frydlant-nad-ostravici/"
      }
    },
    {
      "id": "kupalisko-a-tenisove-kurty-edimex",
      "miesto": "frydlant",
      "poradie": 9,
      "nazov": "Kúpalisko a tenisové kurty Edimex",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2017/11/09-koupaliště.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/03/9.-Swimming-pool-and-tennis-courts-Edimex.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 49.581054,
        "lng": 18.36345
      },
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m27!1m12!1m3!1d164269.820478465!2d18.41504250103388!3d49.487301064382784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m12!3e0!4m4!2s49.403521%2C+18.625441!3m2!1d49.403521!2d18.625441!4m5!1s0x4713f577bea679f5%3A0xd85f0d5fb2a78c4f!2zS291cGFsacWhdMSbIEZyw71kbGFudCBuYWQgT3N0cmF2aWPDrSwgU3BvcnRvdm7DrSAxNTMsIEZyw71kbGFudCwgRnLDvWRsYW50IG5hZCBPc3RyYXZpY8OtLCDEjGVza28!3m2!1d49.5810542!2d18.3634496!5e0!3m2!1ssk!2ssk!4v1515012225426",
      "text": "<p>Kúpalisko vo Frýdlante nad Ostravicí ponúka návštevníkom vyhrievaný exteriérový bazén s rozmermi 50 x 22 m. Pre deti je pripravený bazénik s rozmermi 12 x 12 m. Návštevníci kúpaliska môžu využiť tobogán s dĺžkou 60 m a športové ihrisko pre volejbal či nohejbal. V areáli sú k dispozícii prezliekacie kabínky, občerstvenie, antukový kurt, parkovisko.</p>\n<p>Frýdlantské kúpalisko sa nachádza na okraji mesta a vďaka jeho polohe medzi vysokými stromami poskytuje pokoj, zázemie, súkromie a príjemnú relaxáciu bez rušivých vplyvov mestskej premávky.</p>\n<p>V tesnej blízkosti kúpaliska sa nachádza tenisová hala Edimex, ktorá je najväčším zastrešeným tenisovým centrom na Morave. Ponúka na využitie centrálny kurt s hľadiskom pre 300 divákov, 3 ďalšie kurty bez hľadiska, telocvičňu, regeneračné štúdio, obchod s tenisovým tovarom a tenisový bar. Halu si možno prenajať na rôzne športové či kultúrne akcie.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/kupalisko-a-tenisove-kurty-edimex/",
        "en": "https://www.qrlink.sk/new/en/kupalisko-a-tenisove-kurty-edimex/",
        "de": "https://www.qrlink.sk/new/de/kupalisko-a-tenisove-kurty-edimex/",
        "ru": "https://www.qrlink.sk/new/ru/kupalisko-a-tenisove-kurty-edimex/",
        "pl": "https://www.qrlink.sk/new/pl/kupalisko-a-tenisove-kurty-edimex/",
        "hu": "https://www.qrlink.sk/new/hu/kupalisko-a-tenisove-kurty-edimex/"
      }
    },
    {
      "id": "sportove-a-relaxacne-centrum-kotelna",
      "miesto": "frydlant",
      "poradie": 10,
      "nazov": "Športové a relaxačné centrum Kotelna",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2017/11/10-Sportovní-a-relaxační-centrum-Kotelna.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/03/10.-Sport-and-relax-centre-Kotelna.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 49.590088,
        "lng": 18.362385
      },
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m27!1m12!1m3!1d165863.07262868478!2d18.40706828450893!3d49.49186393480038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m12!3e0!4m4!2s49.403521%2C+18.625441!3m2!1d49.403521!2d18.625441!4m5!1s0x4713f5996d7c01e5%3A0x73f05460f9e29695!2zU3BvcnRvdm7DrSBBIFJlbGF4YcSNbsOtIENlbnRydW0gS290ZWxuYSwgSGFtZXJuaWNrw6EgMjMzLCBGcsO9ZGxhbnQgbmFkIE9zdHJhdmljw60sIMSMZXNrbw!3m2!1d49.5900883!2d18.3623854!5e0!3m2!1ssk!2ssk!4v1515012425778",
      "text": "<p>Športové a relaxačné centrum vo Frýdlante nad Ostravicí ponúka prostredie pre aktívny odpočinok i relaxáciu. Ide o areál, ktorý vznikol z priestorov bývalej kotolne a odtiaľ je aj jeho názov. Je otvorený celoročne.</p>\n<p>Kotelna začala prevádzku na konci roka 2002 na ploche 5200 metrov štvorcových, a to ako centrum ponúkajúce celý komplex športových a relaxačných služieb od moderného wellness, cez squash, tenis, beach volejball, spinning, solárium, až napríklad po cvičenie seniorov či mamičiek s deťmi. Centrum si za dobu svojej existencie získalo veľkú obľubu. Okrem obyvateľov Frýdlantu nad Ostravicí sa sem po celý rok schádzajú návštevníci Beskýd, ľudia z celého mikroregiónu, ale aj zo spádovej oblasti Frýdeckomístecka a Ostravska.</p>\n<p>V športovom a relaxačnom centre môžete navštíviť:</p>\n<p>rekondičný bazén 9 x 6 metrov, hĺbka 130 cm, podvodné osvetlenie, 5 vodných atrakcií – dekoratívny vodopád, vodný chrlič, protiprúd, hydromasážne lavice pre 3 osoby a blower (vzduchovač)</p>\n<p>masážnu whirlpool vaňu, ktorá sa nachádza v priestore bazéna (voda 36 °C), tiež masážny box s rôznymi programami</p>\n<p>fitness a kardio zónu – moderná klimatizovaná posilňovňa so 17 posilňovacími stanovišťami</p>\n<p>beach volejbal pod holým nebom (1. 5. – 30. 9.).</p>\n<p>pétanque (celoročne)</p>\n<p>saunu + vnútorný ochladzovací bazénik</p>\n<p>solárium – turbo vertikálna solárna sprcha Sun Shower 8000</p>\n<p>squash – 3 kurty pre 2, možno zväčšiť aj pre viacerých hráčov</p>\n<p>kryté ihrisko na florbal či minifutbal (prispôsobením kurtov na squash)</p>\n<p>tenisový kurt – vonkajší, osvetlený pre večernú hru, v zime nafukovacia krytá hala. Kurt je vhodný aj pre nohejbal alebo minifutbal</p>\n<p>spinning – na všetky spiningové lekcie je potrebné sa vopred objednať</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/sportove-a-relaxacne-centrum-kotelna/",
        "en": "https://www.qrlink.sk/new/en/sportove-a-relaxacne-centrum-kotelna/",
        "de": "https://www.qrlink.sk/new/de/sportove-a-relaxacne-centrum-kotelna/",
        "ru": "https://www.qrlink.sk/new/ru/sportove-a-relaxacne-centrum-kotelna/",
        "pl": "https://www.qrlink.sk/new/pl/sportove-a-relaxacne-centrum-kotelna/",
        "hu": "https://www.qrlink.sk/new/hu/sportove-a-relaxacne-centrum-kotelna/"
      }
    },
    {
      "id": "kaplnka-sv-antonina-paduanskeho-ondrejnik",
      "miesto": "frydlant",
      "poradie": 11,
      "nazov": "Kaplnka sv. Antonína Paduánskeho, Ondřejník",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2017/11/11-Kaple-sv.-Antonína-Paduánského-Ondřejník.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/03/11.-Chapel-of-St.-Antonín-Paduánsky-Ondřejník.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 49.580831,
        "lng": 18.319616
      },
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m27!1m12!1m3!1d165836.98823990137!2d18.329842754776482!3d49.499561483498425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m12!3e0!4m4!2s49.403521%2C+18.625441!3m2!1d49.403521!2d18.625441!4m5!1s0x4713f5029ed1857b%3A0xe3a8a964517bb58f!2zS2FwbGUgc3ZhdMOpaG8gQW50b27DrW5hIFBhZHXDoW5za8OpaG8sIE9uZMWZZWpuw61rLCA3MzkgMTEgRnLDvWRsYW50IG5hZCBPc3RyYXZpY8OtLCDEjGVza28!3m2!1d49.5808313!2d18.3196163!5e0!3m2!1ssk!2ssk!4v1515012727603",
      "text": "<p>Romantická Kaplnka sv. Antonína stojí pred turistickou chatou Klubu českých turistov Ondřejník a zaniknutou chatou Solárkou pod vrchom masívu Ondřejník. Jej umiestnenie poskytuje široký výhľad do okolitej krajiny, na Frýdlant nad Ostravicí v údolí, na celú Ostravskú panvu a masív Lysej hory, najvyššej hory Moravskoslezských Beskýd.</p>\n<p>Kaplnka a pohostenie v blízkej drevenici Ondřejníček sú v lete aj zime častým cieľom turistov zo širokého okolia.</p>\n<p>Na Ondřejník vedie z Frýdlantu niekoľko turistických trás aj pohodlná asfaltová cesta.</p>\n<p>Kaplnka je pomerne mladou stavbou. Bola postavená v rámci výstavby nového a moderného horského hotela Solárka v rokoch 1932 – 1933, ktorý nechali postaviť manželia Oldřich a Františka Látalovi z Moravskej Ostravy. Solárka sa mala stať moderným hotelom v horskom prostredí, ktorý by spĺňal všetky požiadavky na pohodlný, avšak štýlový pobyt na horách. A aby majitelia dodali okoliu svojho hotela romantickejší ráz, postavili v roku 1933 v jeho blízkosti kaplnku pomenovanú na pamiatku najväčších priaznivcov turisticky na Ondřejníku, prof. Antonína Uřídila z Brna.</p>\n<p>Hoci slávny hotel Solárka 28. 9. 2002 vyhorel a jeho trosky boli až ku kamennej podmurovke zbúrané, Kaplnka sv. Antonína ďalej hľadí do údolia a rozpráva o bývalej sláve turistiky na Ondřejníku.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/kaplnka-sv-antonina-paduanskeho-ondrejnik/",
        "en": "https://www.qrlink.sk/new/en/kaplnka-sv-antonina-paduanskeho-ondrejnik/",
        "de": "https://www.qrlink.sk/new/de/kaplnka-sv-antonina-paduanskeho-ondrejnik/",
        "ru": "https://www.qrlink.sk/new/ru/kaplnka-sv-antonina-paduanskeho-ondrejnik/",
        "pl": "https://www.qrlink.sk/new/pl/kaplnka-sv-antonina-paduanskeho-ondrejnik/",
        "hu": "https://www.qrlink.sk/new/hu/kaplnka-sv-antonina-paduanskeho-ondrejnik/"
      }
    },
    {
      "id": "vlakova-stanica-frydlant-nad-ostravici",
      "miesto": "frydlant",
      "poradie": 12,
      "nazov": "Vlaková stanica Frýdlant nad Ostravicí",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2017/11/12-Vlakové-nádraží-Frýdlant-nad-Ostravicí.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/03/12.-Train-station-Frýdlant-nad-Ostravicí-4.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 49.589223,
        "lng": 18.353992
      },
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m27!1m12!1m3!1d165786.5722229345!2d18.378436771598565!3d49.51443683546501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m12!3e0!4m4!2s49.403521%2C+18.625441!3m2!1d49.403521!2d18.625441!4m5!1s0x4713f5a1f5c630b3%3A0xeaeda3a5c439202a!2zRnLDvWRsYW50IG5hZCBPc3RyYXZpY8OtLCA3MzkgMTEgRnLDvWRsYW50IG5hZCBPc3RyYXZpY8OtLCDEjGVza28!3m2!1d49.5892129!2d18.3539943!5e0!3m2!1ssk!2ssk!4v1515012930523",
      "text": "<p>Frýdlant nad Ostravicí je dôležitým železničným uzlom, ktorý je každoročne využívaný turistami na ich ďalšie cesty za krásami Beskýd. Dnešná výpravná budova vo Frýdlante nad Ostravicí pochádza z roku 1888. Z histórie vieme, že cisár František Jozef I. 2. januára 1869 udelil koncesnú listinu na výstavbu trate z Moravskej Ostravy do Frýdlantu v podhorí Beskýd, vtedy už známej obce s hutami a železiarňami. Dňa 3. januára roku 1871 prichádza do Frýdlantu prvý vlak po práve dokončenej trati Frýdlant – Ostrava, ktorej stavba trvala 2 roky. V súčasnej dobe je táto trať významným spojením ako pre cestujúcich, ktorí pravidelne dochádzajú za prácou, tak aj pre študentov mieriacich do škôl. Hojne využívaná je táto trať tiež pri cestách za aktívnym oddychom do blízkych Beskýd. Budova stanice prešla v roku 2013 celkovou rekonštrukciou, ktorej investorom bola Správa železničnej dopravnej cesty, štátna organizácia. Finančné prostriedky poskytol Štátny fond dopravnej infraštruktúry. Spoločne s budovou došlo ku kompletnej rekonštrukcii železničného zvršku a spodku vrátane mostných objektov a prejazdov, vybudovaniu zvýšených zastrešených nástupíšť pre prvú a druhú koľaj vrátane mimoúrovňového prístupu na nástupište podchodom a výťahu pre imobilných cestujúcich.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/vlakova-stanica-frydlant-nad-ostravici/",
        "en": "https://www.qrlink.sk/new/en/vlakova-stanica-frydlant-nad-ostravici/",
        "de": "https://www.qrlink.sk/new/de/vlakova-stanica-frydlant-nad-ostravici/",
        "ru": "https://www.qrlink.sk/new/ru/vlakova-stanica-frydlant-nad-ostravici/",
        "pl": "https://www.qrlink.sk/new/pl/vlakova-stanica-frydlant-nad-ostravici/",
        "hu": "https://www.qrlink.sk/new/hu/vlakova-stanica-frydlant-nad-ostravici/"
      }
    },
    {
      "id": "doc-ing-julius-binder-dr-h-c",
      "miesto": "gabcikovo",
      "poradie": 1,
      "nazov": "Doc. Ing. Július Binder, Dr.h.c.",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2024/06/julius_binder1.jpg",
      "audio": [],
      "galeria": [],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Spomíname s úctou na Dr. h. c. doc. Ing. Júliusa Bindera, CSc.</p>\n<p>Narodil sa v Bernolákove a 12. septembra by sa dožil 90 rokov.</p>\n<p>Po tom, čo vyštudoval odbor hydrotechnické stavby na Fakulte inžinierskeho staviteľstva vtedy Slovenskej vysokej školy technickej (SVŠT), dnes Slovenskej technickej univerzite (STU) v Bratislave, od roku 1955 – 1991 pracoval v Hydroconsulte Bratislava (pôvodne Hydroprojekte) najprv ako projektant, neskôr výrobný námestník, resp. hlavný inžinier podniku. Predmetom jeho odbornej činnosti boli najmä hydraulika otvorených vodných tokov, úpravy vodných tokov, vodohospodárska bilancia v povodí, cestné stavby, vodárenstvo, ochrana podzemných vôd pred znečistením, čistenie odpadových vôd, špeciálne problémy pri rekonštrukcii teplární, vodné cesty, vodná doprava a špeciálne zakladanie. Podieľal sa na projektovaní vodohospodárskych diel a hydrotechnických stavieb. Mal rozhodujúci podiel na vyriešení ochrany podzemných vôd na Žitnom ostrove pred ropnými derivátmi. Bol hlavným inžinierom projektu čistiarne odpadových vôd v bratislavskom Slovnafte, podieľal sa na riešení projektu čistiarne odpadových vôd Chemických závodov Nováky a na sanácii skládky nebezpečných odpadov v Chemku Strážske.</p>\n<p>Popri projekčnej činnosti pôsobil dvadsať rokov na Strednej priemyselnej škole stavebnej v Bratislave a vyučoval na Strednej poľnohospodárskej škole odbor poľnohospodárskej meliorácie. Neskôr externe prednášal na SVŠT. Environmentálne témy prednášal aj na zahraničných univerzitách a vedeckých spoločnostiach takmer vo všetkých štátoch Európy, ale i v USA, Kanade, Mexiku, Venezuele, Juhoafrickej republike, v Číne, Japonsku.  Zároveň svoje prednášky zameriaval na históriu výstavby Sústavy vodných diel Gabčíkovo – Nagymaros (SVD G-N) a objasňoval postup Slovenskej republiky pri realizácii Variantu „C“. Pritom zdôrazňoval, že výstavba Sústavy mala za cieľ rovnocenne nielen ochranu pred povodňami, zlepšenie plavebných podmienok na spoločnom úseku Dunaja a ekologickú výrobu elektriny, ale aj trvale udržateľné zlepšenie environmentálnych podmienok v ramennej sústave Dunaja a podporu rekreačného, športového a kultúrneho využitia v oblasti Zdrže Čunovo.</p>\n<p>Od roku 1986 bol členom tzv. Spoločnej operatívnej skupiny splnomocnencov vlád, ktorá vykonávala rozsiahle aktivity vrátane operatívneho riadenia a koordinácie prác na výstavbe SVDG-N, prípravy podkladových materiálov na rokovanie splnomocnencov vlád a ich Spoločného poradného zboru.  Od roku 1991 pôsobil ako riaditeľ Vodohospodárskej výstavby.</p>\n<p>Vyvrcholenie odbornej kariéry Júliusa Bindera je spojené s návrhom a výstavbou Sústavy vodných diel Gabčíkovo – Nagymaros a od roku 1990 najmä s presadením a realizáciou náhradného Variantu „C“ vodnej stavby. Ten už nerátal s účasťou Maďarska, ktoré v roku 1989 od projektu definitívne odstúpilo. Kľúčovým momentom bolo prehradenie prirodzeného koryta Dunaja na území SR. Začiatok prác 24. 10. 1992 o 9.05 h prakticky uviedol Vodné dielo Gabčíkovo do prevádzky. Neskôr Medzinárodný súdny dvor (MSD) v Haagu v rozsudku z 25. 9. 1997 potvrdil platnosť medzinárodnej zmluvy z roku 1977 a vyhlásil za oprávnené vybudovanie náhradného riešenia (variant C).</p>\n<p>Jeho pôsobenie vo Vodohospodárskej výstavbe, š. p., je spojené nielen s dokončením Sústavy vodných diel Gabčíkovo a jeho financovaním, ale i s vybudovaním Areálu vodných športov „Divoká voda“ a Galérie moderného umenia „Danubiana“. Presadenie a výstavba vodárenských nádrží Málinec (1989 – 1993) a Turček (1993 – 1996) a najmä Vodného diela Žilina (1994 – 1998) je do značnej miery aj jeho dielom. Vo funkcii generálneho riaditeľa Vodohospodárskej výstavby, š. p., pôsobil až do roku 1998.</p>\n<p>Vydal niekoľko odborných knižných publikácií. Je autorom niekoľkých patentov a zlepšovacích návrhov, ako aj nositeľom viacerých ocenení a vyznamenaní, spomeňme najmä Rad Ľudovíta  Štúra I. triedy (1995),  Zlatý dvojkríž za zásluhy o národnú kultúru (1996), Cenu za záchranu kultúrneho dedičstva a rozvoj mesta Banská Štiavnica (1997) a cena Štefana Moyzesa za prínosy k národnému životu od Nadácie Matice slovenskej (1998). V roku 1995 mu Vedecká rada STU v Bratislave udelila titul Doctor honoris causa a v roku 1997 habilitoval na Stavebnej fakulte Žilinskej univerzity a bol menovaný docentom.</p>\n<p>Pápež Ján Pavol II. udelil 26. 10. 2004 Júliusovi Binderovi za jeho svedectvo veriaceho katolíckeho laika, ako aj za celoživotné dielo najvyššie cirkevné vyznamenanie pre laika Rytiersky rád sv. Gregora Veľkého.</p>\n<p>Dr. h. c. doc. Ing. Július Binder, CSc. zomrel 26. 7. 2021. Česť jeho pamiatke.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/castles/doc-ing-julius-binder-dr-h-c/",
        "en": "https://www.qrlink.sk/new/en/castles/doc-ing-julius-binder-dr-h-c/",
        "de": "https://www.qrlink.sk/new/de/castles/doc-ing-julius-binder-dr-h-c/",
        "ru": "https://www.qrlink.sk/new/ru/castles/doc-ing-julius-binder-dr-h-c/",
        "pl": "https://www.qrlink.sk/new/pl/castles/doc-ing-julius-binder-dr-h-c/",
        "hu": "https://www.qrlink.sk/new/hu/castles/doc-ing-julius-binder-dr-h-c/"
      }
    },
    {
      "id": "gabcikov-sad",
      "miesto": "gabcikovo",
      "poradie": 2,
      "nazov": "GABČÍKOV SAD",
      "popis": "",
      "cover": "",
      "audio": [],
      "galeria": [],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Generálmajor Jozef G A B Č Í K  (* 8. apríl 1912, Poluvsie – † 18. jún 1942, Praha)</p>\n<p>Najmladší zo štyroch súrodencov v rodine Ferdinanda a Márie Gabčíkovcov.  Po ukončení obecnej školy v Rajeckých Tepliciach odišiel do Čiech, kde sa vyučil za zámočníka. Na prezenčnú službu v československej armáde nastúpil 1. októbra 1932 v pešom pluku 14 v Košiciach. Počas nej absolvoval poddôstojnícku školu v Prešove. Po skončení pokračoval v dobrovoľnej službe do konca marca 1937, keď mu záväzok uplynul. Na naliehanie otca ho nepredĺžil, do decembra 1938 pracoval vo Vojenskej továrni č. 4 na výrobu bojových plynov v Žiline, kde sa pri havárii nadýchal nebezpečných plynov. Následne bol preložený do skladu bojových chemických látok v Skalke nad Váhom. Keď hrozilo, že sklady padnú do nemeckých rúk, vykonal sabotáž. Vzhľadom na riziko zatknutia prekročil slovensko-poľské hranice a v Krakove sa prihlásil do tvoriaceho sa československého vojska.</p>\n<p>V júli 1940 priplával do Veľkej Británie a bol zaradený k 1. pešiemu práporu 1. československej zmiešanej brigády. Za prejavenú statočnosť v bojoch ho vyznamenali Československým vojnovým krížom 1939. V lete 1941 súhlasil so zaradením do výcviku pre zvláštne úlohy a absolvoval rôzne špeciálne kurzy. Po nich sa ako jeden z prvých československých vojakov dobrovoľne prihlásil na plnenie špeciálnych úloh na území okupovanej vlasti.</p>\n<p>S pomocou českých vlastencov uskutočnili 27. mája 1942 atentát na Heydricha. V tento deň dostal o pol jedenástej v ostrej zákrute v Prahe-Libni znamenie, že sa blíži Heydrichov kabriolet, Gabčík mu skočil do cesty, ale zasekol sa mu samopal, ktorý skrýval pod plášťom. Jeho komplic Ján Kubiš preto vytiahol z tašky granát, trafil auto a úlomky protektora smrteľne ranili. Heydrich svojim zraneniam niekoľko dní po atentáte – 4. júna – v nemocnici podľahol.</p>\n<p>Nemeckou pomstou sa stalo hromadné zatýkanie, popravy, vypálenie a vyvraždenie obcí Ležáky a Lidice za to, že poskytli členom odboja pomoc.</p>\n<p>Počas vlny masových represálií sa ukrývali na rôznych miestach. Posledným útočiskom sa pre nich stal Pravoslávny katedrálny chrám svätého Cyrila a Metoda v Prahe, kde Gabčík v beznádejnej situácii 18. júna 1942 spáchal samovraždu.</p>\n<p>V skutočnosti Slovák Jozef Gabčík spolu s Čechom Janom Kubišom zbavili svet jedného z najväčších zločincov 20. storočia. Tento čin znamenal veľký posun vo vnímaní udalostí svetovej vojny. Anglicko aj Francúzsko na základe preukázateľného odboja proti fašistom v protektoráte odvolalo podpisy pod predvojnovou Mníchovskou zmluvou, čo po vojne umožnilo vzniknúť Československej republike v pôvodných hraniciach. Zároveň tento hrdinský čin ukázal cestu odboja aj iným krajinám okupovanej Európy.</p>\n<p>Jozef Gabčík mal iba 164 centimetrov, sivé oči a často sa usmieval. Bol vojakom, ktorý obliekal vojenské rovnošaty troch armád – prvorepublikovej Československej armády, francúzskej Cudzineckej légie a napokon aj britskej.</p>\n<p>V máji 2015, pri príležitosti 70. výročia ukončenia 2. sv. vojny, bol vtedajším prezidentom povýšený do hodnosti brigádny generál (in memoriam) a 26. mája 2017 do hodnosti generálmajor (in memoriam).</p>\n<p>V súčasnosti je po ňom pomenovaná ulica v Bratislave, Žiline, Rajeckých Tepliciach a  v Prahe neďaleko miesta atentátu. Jeho meno nesie vo svojom čestnom názve aj slovenský 5. pluk špeciálneho určenia v Žiline. Na jeho počesť bežecké preteky nesú meno Memoriál Jozefa Gabčíka.</p>\n<p>Mesto Gabčíkovo bolo premenované na jeho počesť v roku 1948. Jeho meno nesie aj Vodné dielo Gabčíkovo a od roku 2024 aj tento čerešňový sad – Gabčíkov sad.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/castles/gabcikov-sad/",
        "en": "https://www.qrlink.sk/new/en/castles/gabcikov-sad/",
        "de": "https://www.qrlink.sk/new/de/castles/gabcikov-sad/",
        "ru": "https://www.qrlink.sk/new/ru/castles/gabcikov-sad/",
        "pl": "https://www.qrlink.sk/new/pl/castles/gabcikov-sad/",
        "hu": "https://www.qrlink.sk/new/hu/castles/gabcikov-sad/"
      }
    },
    {
      "id": "hmyzi-hotel",
      "miesto": "gabcikovo",
      "poradie": 3,
      "nazov": "Hmyzí hotel",
      "popis": "",
      "cover": "",
      "audio": [],
      "galeria": [],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Hmyzí hotel</p>\n<p>Vodohospodárska Výstavba, štátny podnik považuje ochranu biodiverzity ako dôležitý aspekt svojej činnosti a zároveň ako súčasť záväzku pokračovať v budovaní a prevádzkovaní vodných diel s ohľadom na ochranu prírody a udržateľné využívanie vodných zdrojov. Celoročne vykonáva činnosti na podporu a obnovu biodiverzity, napríklad neustále zásobuje vodou ľavostrannú ramennú sústavu Dunaja. Zároveň realizuje projekty na rehabilitáciu lokálnych mokradí a projekty na rekonštrukciu prehrádzok pre lepšiu distribúciu vody a zlepšenie podmienok živočíchov a rastlín.</p>\n<p>Zodpovedný prístup a podpora biodiverzity</p>\n<p>Unikátny hmyzí hotel v tvare Kaplanovej turbíny vodného diela taktiež prispieva k zlepšeniu životného prostredia a biodiverzity. Poskytuje útočisko pre opeľovače, ktoré majú nenahraditeľný význam pre poľnohospodársku produkciu, keďže väčšina produkovaných plodín je od nich závislá.</p>\n<p>Na území Slovenska ich žije viac ako 600 rôznych druhov a sú dôležitou zložkou ekosystémov. Ich najvýznamnejšou úlohou je opeľovanie rastlín. V miernom pásme Európy sa na tento vzťah rastlín a živočíchov spolieha takmer 78 % flóry. Dokonca viac ako 75 % hospodárskych plodín je odkázaných na opeľovanie hmyzom.</p>\n<p>Tento hmyzí hotel bol vyrobený z brezového a smrekového dreva, ako verná replika Kaplanovej turbíny. Zaujímavosťou je, že vodná elektráreň Gabčíkovo má osadených celkovo osem Kaplanových turbín s jednotlivým výkonom 90 MW, čo spolu produkuje výkon až 720 MW. Vodné dielo Gabčíkovo je producentom elektrickej energie, ktorú vyrába v objeme približne desať percent celkovej ročnej spotreby Slovenska a to z čistého obnoviteľného zdroja.  A to všetko dokáže zabezpečiť bez produkcie skleníkových plynov, bez potreby dovážať fosílne palivá zo zahraničia a bez produkcie popola.</p>\n<p>Cieľom tohto projektu je poukázať na dôležitosť ochrany biodiverzity a zvýšiť úroveň povedomia o nej medzi širokou verejnosťou a cieľom spoločnosti je efektívne využívať potenciál výroby čistej elektrickej energie, vytvárať zásoby pitnej vody, zveľaďovať životné prostredie v okolí vodných tokov a zabezpečiť odolnosť krajiny a udržateľnú budúcnosť pre ďalšie generácie.</p>\n<p>Prínosy vodného diela pre životné prostredie</p>\n<p>Monitorovanie životného prostredia v oblastiach vplyvu sústavy vodných diel vykonáva Vodohospodárska výstavba každoročne. Práve vďaka vodnému dielu sa napríklad zastavila erózia pôdy, zlepšili sa podmienky pre poľnohospodárov či fungovanie viacerých živočíšnych druhov a lesnej zveri. Tiež sa zabránilo vysychaniu lesov a zvýšila sa kapacita zásob podzemnej vody. V neposlednom rade bola výstavbou Vodného diela zabezpečená protipovodňová ochrana Podunajskej nížiny.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/castles/hmyzi-hotel/",
        "en": "https://www.qrlink.sk/new/en/castles/hmyzi-hotel/",
        "de": "https://www.qrlink.sk/new/de/castles/hmyzi-hotel/",
        "ru": "https://www.qrlink.sk/new/ru/castles/hmyzi-hotel/",
        "pl": "https://www.qrlink.sk/new/pl/castles/hmyzi-hotel/",
        "hu": "https://www.qrlink.sk/new/hu/castles/hmyzi-hotel/"
      }
    },
    {
      "id": "cesticka-na-hrad",
      "miesto": "hrad-strecno",
      "poradie": 1,
      "nazov": "Cestička na hrad",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2020/06/1-paseka-e1592570206493.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2020/06/1-1.mp3"
      ],
      "galeria": [
        "https://www.qrlink.sk/new/wp-content/uploads/2020/06/1-paseka-e1592570206493.jpg",
        "https://www.qrlink.sk/new/wp-content/uploads/2020/06/1-paseka-e1592570206493.jpg",
        "https://www.qrlink.sk/new/wp-content/uploads/2020/06/1-paseka-e1592570206493.jpg",
        "https://www.qrlink.sk/new/wp-content/uploads/2020/06/1-paseka-e1592570206493.jpg"
      ],
      "gps": {
        "lat": 49.177151,
        "lng": 18.862854
      },
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d652.0584362093641!2d18.86230682924827!3d49.1771509987075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDEwJzM3LjciTiAxOMKwNTEnNDYuMyJF!5e0!3m2!1ssk!2ssk!4v1594621969012!5m2!1ssk!2ssk",
      "text": "<p>Cestička hradnej pani Žofie</p>\n<p>Cestička krátka, ale zato strmá a náročná s prekvapením na konci. Tak, ako cesta do neba.  Po týchto 151 schodoch pani Žofia často chodievala za svojimi poddanými a nosila im svoj chlebík útechy. Adamko a Lacko zasa po tejto cestičke bežali tatinovi – hradnému pánovi – naproti, aby ho privítali skôr, ako sa otvorí hradná brána. Cestička vás dovedie na paseku, kde sa zastavil čas. Stredoveká osada s domčekom bylinkárky, pekára a rybára, kde nesmie chýbať ani útulňa pre pútnikov.</p>\n<p>Cesta hradného pána Františka</p>\n<p>Hradný pán vracajúc sa z vojenských výprav chodieval touto širokou a pohodlnou pánskou cestou. Často unavený, vyčerpaný, ale šťastný, že sa opäť stretne so svojou milovanou Žofiou a chlapcami Adamkom a Lackom. Chlapci ho vždy netrpezlivo vyčkávali, kedy sa im ich milovaný tatino vráti a ostane aspoň chvíľu doma. Vyzerali ho z hradnej veže, aby ho už z diaľky zazreli a po schodoch stihli dobehnúť dole. Vysadli na tatinovho tátoša a so slávou sa nechali vítať na hrade.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/castles/cesticka-na-hrad/",
        "en": "https://www.qrlink.sk/new/en/castles/cesticka-na-hrad/",
        "de": "https://www.qrlink.sk/new/de/castles/cesticka-na-hrad/",
        "ru": "https://www.qrlink.sk/new/ru/castles/cesticka-na-hrad/",
        "pl": "https://www.qrlink.sk/new/pl/castles/cesticka-na-hrad/",
        "hu": "https://www.qrlink.sk/new/hu/castles/cesticka-na-hrad/"
      }
    },
    {
      "id": "vstup-na-hrad",
      "miesto": "hrad-strecno",
      "poradie": 2,
      "nazov": "Vstup na hrad",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2020/06/IMG_20200624_153200.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2020/07/2_final.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 49.174201,
        "lng": 18.860655
      },
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d652.0972983161395!2d18.86010782924825!3d49.17420099870749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDEwJzI3LjEiTiAxOMKwNTEnMzguNCJF!5e0!3m2!1ssk!2ssk!4v1594622583792!5m2!1ssk!2ssk",
      "text": "<p>Krížne cesty</p>\n<p>Tu sa obidve cesty stretajú tak, ako sa stretá hradný pán František s pani Žofiou a idú vedno ruka v ruke na Strečniansky hrad, kde ich víta služobníctvo.</p>\n<p>História hradov na Slovensku</p>\n<ol start=\"11\">\n<li>a 12. storočie bolo obdobím, kedy bolo dôležité chrániť pohraničné územie pred útokmi nepriateľov. Okrem strážnej služby pomáhal tomuto účelu aj systém hradov pri najdôležitejších komunikáciách. Najväčší rozmach výstavby kamenných hradov na Slovensku však začal až v polovici 13. storočia (bezprostredne po tatárskej invázii). Nové objekty boli postavené buď na miestach pôvodných drevených hradov, alebo v ich blízkosti. V priebehu 14. – 15. storočia prechádzali pôvodne kráľovské majetky do rúk šľachty buď ako záloha za poskytnutú pôžičku, alebo za mimoriadne služby kráľovi. Šľachta niekedy investovala do ich prestavieb a zmenila staré hrady na prepychové paláce. Až turecké nájazdy v 16. storočí si vyžiadali výstavbu nových opevnení. Systém stredovekých hradov však postupne už od poslednej tretiny 17. storočia začína strácať svoj vojenský a strategický význam a v priebehu 18. storočia dochádza k presunu šľachtických rodov z hradných panstiev do kaštieľov. Práve v tomto období boli mnohé hrady zbúrané, vypálené a iné po vysťahovaní obyvateľov začali rýchlo chátrať.</li>\n</ol>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/castles/vstup-na-hrad/",
        "en": "https://www.qrlink.sk/new/en/castles/vstup-na-hrad/",
        "de": "https://www.qrlink.sk/new/de/castles/vstup-na-hrad/",
        "ru": "https://www.qrlink.sk/new/ru/castles/vstup-na-hrad/",
        "pl": "https://www.qrlink.sk/new/pl/castles/vstup-na-hrad/",
        "hu": "https://www.qrlink.sk/new/hu/castles/vstup-na-hrad/"
      }
    },
    {
      "id": "expozicia-archeologie",
      "miesto": "hrad-strecno",
      "poradie": 3,
      "nazov": "Expozícia archeológie",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2020/07/IMG_20200701_150652.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2020/07/3-2.mp3",
        "https://www.qrlink.sk/new/wp-content/uploads/2020/07/3D-1.mp3",
        "https://www.qrlink.sk/new/wp-content/uploads/2020/07/3E-3.mp3"
      ],
      "galeria": [
        "https://www.qrlink.sk/new/wp-content/uploads/2020/07/IMG_20200701_150645.jpg",
        "https://www.qrlink.sk/new/wp-content/uploads/2020/07/strečno-mapka_3.jpg"
      ],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>V tejto miestnosti sa nachádza archeologická expozícia. Vo vitrínach môžete vidieť archeologické nálezy z obdobia od praveku po stredovek, ktoré sa našli počas archeologických výskumov v Strečne a v okolitých obciach (Varín, Rosina, Krasňany, Gbeľany).</p>\n<p>Z obdobia starších štvrtohôr (pleistocén) môžete vidieť zub a kel mamuta, spodnú čeľusť a chrbtový stavec jaskynného medveďa.\nV ďalšej vitríne sú exponáty z mladšej (neolit) a neskorej doby kamennej (eneolit), napr. kamenné čepieľky a sekerky, medený čakan (symbol moci a vysokého sociálneho postavenia jeho nositeľa, nemal pracovnú ani bojovú funkciu).\nĎalšia vitrína obsahuje keramiku z pohrebísk lužickej kultúry (1500 pred n.l. – 400 pred n.l.) z rôznych lokalít horného Považia. Ľud lužickej kultúry pochovával svojich zosnulých žiarovo. Táto keramika slúžila ako popolnice (urny) na uloženie kremačných zvyškov pri pohrebných obradoch. Menšia keramika sa zvykla uložiť do hrobov ako milodar.\nModel tkáčskeho stavu z doby bronzovej – Spôsob tkania sa až do stredoveku príliš nemenil. Archeológovia väčšinou ako pozostatok stavov nachádzajú hlinené závažia, ktoré vidno dole. Tieto naše nie sú originály iba kópia.\nModel pece na železo – zmenšený model zobrazuje pec na tavenie železa z 1. – 2. storočia. Podobné pece sa vyskytovali v okolí Strečna (Železné studničky pri Varíne), keďže sa tu železná ruda aj ťažila. Pec je vyrobená z hliny s otvorom na vyberanie železa (zvrchu), otvorom na dúchanie vzduchu (vpredu) a otvorom na odpich trosky (zboku), ktorá vzniká pri tavení železa. Pec sa plnila striedavo železnou rudou a dreveným uhlím, potom sa zmes zapálila a po čase sa otvorom na odpich dostala von troska. Železo sa muselo z pece vylámať, preto často dochádzalo k jej poškodeniu.\nV ďalšej vitríne je keramika lužickej kultúry. Na druhej poličke je umiestnený poklad (depot) z Rosiny pozostávajúci z bronzovej sekerky, oštepu a náramkov.\nNasledujúca vitrína obsahuje kachlice objavené na hrade Strečno (kachlica s rodovým erbom Deršfiovcov)\nV ďalšej vitríne môžete vidieť hlinenú nádobu (dvojkónickú), ktorá slúžila ako popolnica z lužického pohrebiska vo Varíne.\nVo veľkej vitríne sa nachádzajú stredoveké a novoveké nálezy, napr. kachlice a keramika z hradu, železné zámky, pánty dverí, guľky do hákovnice a kamenná delová guľa z hradu, železný meč z 9. storočia, praslen používaný na pradenie.\nV poslednej vitríne môžete vidieť kachlice z pôvodných pecí nájdených pri prácach na obnove hradu Strečno (17. – 18. storočie).</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/castles/expozicia-archeologie/",
        "en": "https://www.qrlink.sk/new/en/castles/expozicia-archeologie/",
        "de": "https://www.qrlink.sk/new/de/castles/expozicia-archeologie/",
        "ru": "https://www.qrlink.sk/new/ru/castles/expozicia-archeologie/",
        "pl": "https://www.qrlink.sk/new/pl/castles/expozicia-archeologie/",
        "hu": "https://www.qrlink.sk/new/hu/castles/expozicia-archeologie/"
      }
    },
    {
      "id": "prve-podlazie-juzneho-palaca",
      "miesto": "hrad-strecno",
      "poradie": 4,
      "nazov": "Prvé podlažie Južného paláca",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2020/07/4-model-hradu-17.-storočie.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2020/07/4-1.mp3"
      ],
      "galeria": [
        "https://www.qrlink.sk/new/wp-content/uploads/2020/07/4a-model-hradu-20.-storočie.png"
      ],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Prvá písomná zmienka o Strečne, ako o provincii pochádza z roku 1316. V tomto období ovládal celú Žilinskú kotlinu Matúš Čák Trenčiansky a po jeho smrti prevzal jeho majetky uhorský kráľ, Karol Róbert. Ako kamenný hrad, ,,comitatus castri Strychen“, sa Strečno spomína v listine z roku 1384. Hrad bol postavený na vysokom vápencovom brale (cca 100m) nad riekou Váh. Takéto výnimočné umiestnenie umožňovalo prísnu kontrolu každého, kto chcel prejsť dolinou Váhu. Preto bol hrad využívaný na stráženie mýtnej stanice, ktorá sa nachádzala pri brode cez rieku. Do konca 14. storočia bol hrad kráľovským majetkom. V nasledujúcom období viackrát menil majiteľov, medzi ktorými bol prvý poľský šľachtic Sudivoj z Ostrorohu, bývalý husitský kapitán Ján Čapek zo Sán, Pongrác z Liptovského Mikuláša či Pavol Kiniži (ktorý bol aj majiteľom hradu Lietava). Vdova po Pavlovi Kinižim, Benigna, predala hrad Zápoľským. Následne hrad pripadol Mikulášovi Kostkovi, po ktorom ho vlastnili Deršfiovci. Najznámejšími majiteľmi boli František Vešeléni a jeho žena Žofia Bosniaková, ktorí hrad vlastnili v 17. storočí. Spočiatku mal hrad iba malú rozlohu (22x18m). Tvorila ho obytná budova, cisterna a päťposchodová hranolová veža, tzv. bergfrit. Prístup do hradu bol z južnej strany chránený priekopou vysekanou do hradnej skaly, cez ktorú viedol most k hlavnej bráne. V 16. storočí bol hrad značne rozšírený a prestavaný. Bolo potrebné ho opevniť, aby sa stal bezpečným útočiskom a taktiež zútulniť pre potreby šľachty. Hrad sa tak postupne rozrástol o severný palác zakončený kaplnkou a tiež o južný palác s 2 obytnými krídlami. Na západnej strane vzniklo predhradie so severnou vežou a novou hlavnou bránou s predbráním. Na východnej strane vznikol dvojpodlažný palác a múry boli posunuté až na okraj skalnej steny nad riekou. V 17. storočí vznikli tri delové bastióny a z južnej strany pribudli dve nové predhradia s bránami. V tomto období dosiahol hrad svoju najväčšiu rozlohu – 165x61m a stal sa najlepšie opevneným hradom na strednom Považí. Model hradu v jeho najväčšej rozlohe môžete vidieť vo vitríne. V priebehu druhej polovice 17. storočia prežil hrad niekoľko dramatických udalostí. Vtedajší majiteľ, František Vešeléni, zomrel a majetky zdedil jeho syn Ladislav. Avšak ten sa musel svojich majetkov v Uhorsku vzdať, pretože došlo k prezradeniu, že jeho otec pripravoval povstanie proti cisárovi. Po konfiškácii majetku sa na hrade usídlili Tőkőlyho vojaci, ktorí bojovali v rámci protihabsburského povstania. Cisár Leopold I. preto prikázal hrad definitívne zničiť. Opevnenie a strechy hradu boli zbúrané, studňa a hradná cisterna boli zasypané. Od konca 17. storočia hrad chátral. V roku 1970 bol hrad vyhlásený za Národnú kultúrnu pamiatku. Následne bol rekonštruovaný (1978 – 1994) a v roku 1995 bol ako zrekonštruovaná zrúcanina sprístupnený verejnosti. Druhý model hradu zobrazuje stav zrúcaniny pred rekonštrukciou (30 roky 20. storočia).</p>\n<p>V súčasnosti môžete vidieť v tejto miestnosti výstavu dobových pohľadníc hradu Strečno a neďalekého Starého hradu a fotografíí súčasnej podoby Strečna.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/castles/prve-podlazie-juzneho-palaca/",
        "en": "https://www.qrlink.sk/new/en/castles/prve-podlazie-juzneho-palaca/",
        "de": "https://www.qrlink.sk/new/de/castles/prve-podlazie-juzneho-palaca/",
        "ru": "https://www.qrlink.sk/new/ru/castles/prve-podlazie-juzneho-palaca/",
        "pl": "https://www.qrlink.sk/new/pl/castles/prve-podlazie-juzneho-palaca/",
        "hu": "https://www.qrlink.sk/new/hu/castles/prve-podlazie-juzneho-palaca/"
      }
    },
    {
      "id": "prizemie-juzneho-palaca-kuchyna",
      "miesto": "hrad-strecno",
      "poradie": 5,
      "nazov": "Prízemie južného paláca – kuchyňa",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2020/07/5-kuchyňa.png",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2020/07/5-1.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Táto miestnosť predstavuje hradnú kuchyňu. Centrum kuchyne tvorilo otvorené ohnisko, ktoré sa používalo na prípravu jedál. V strede steny sa nachádza dymovod, ktorý slúžil na odvádzanie dymu. Po stranách dymovodu môžete vidieť časť portálu dverí a ostenia okna. Ďalej si tu môžete všimnúť stredoveký žarnov na mletie múky, maselnicu na mútenie masla, nádoby na uskladnenie oleja a vína a ďalšie kuchynské pomôcky a nádoby na prípravu jedál či uskladnenie surovín. Podobné nádoby a pomôcky sa nachádzajú aj vo vitrínach. Hlavnou zložkou stredovekej stravy boli nekvasené chlebíky a rôzne kaše, ale aj mäso s bylinami, ktoré rástli v blízkosti obydlí. Jedlo sa tiež veľa ovocia a zeleniny. Ako inšpiráciu si môžete na paneli prečítať 2 recepty zo stredovekej kuchárky.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/castles/prizemie-juzneho-palaca-kuchyna/",
        "en": "https://www.qrlink.sk/new/en/castles/prizemie-juzneho-palaca-kuchyna/",
        "de": "https://www.qrlink.sk/new/de/castles/prizemie-juzneho-palaca-kuchyna/",
        "ru": "https://www.qrlink.sk/new/ru/castles/prizemie-juzneho-palaca-kuchyna/",
        "pl": "https://www.qrlink.sk/new/pl/castles/prizemie-juzneho-palaca-kuchyna/",
        "hu": "https://www.qrlink.sk/new/hu/castles/prizemie-juzneho-palaca-kuchyna/"
      }
    },
    {
      "id": "juzne-nadvorie",
      "miesto": "hrad-strecno",
      "poradie": 6,
      "nazov": "Južné nádvorie",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2020/07/6-južné-nádvorie.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2020/07/6-1.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Na mieste dnešného južného nádvoria sa pôvodne nachádzala priekopa, ktorá chránila prístup do veže. Neskôr na jej mieste vzniklo nádvorie, ktoré malo ďalšie podlažie a takisto strechu.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/castles/juzne-nadvorie/",
        "en": "https://www.qrlink.sk/new/en/castles/juzne-nadvorie/",
        "de": "https://www.qrlink.sk/new/de/castles/juzne-nadvorie/",
        "ru": "https://www.qrlink.sk/new/ru/castles/juzne-nadvorie/",
        "pl": "https://www.qrlink.sk/new/pl/castles/juzne-nadvorie/",
        "hu": "https://www.qrlink.sk/new/hu/castles/juzne-nadvorie/"
      }
    },
    {
      "id": "cisterna",
      "miesto": "hrad-strecno",
      "poradie": 7,
      "nazov": "Cisterna",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2020/07/7-cisterna-1.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2020/07/7-1.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Cisterna slúžila na zachytávanie dažďovej vody zo striech hradu. Voda sa do nej dostávala pomocou dažďových odkvapov. Cisterna je hlboká  3,5m a priemer má 2,6m. Päť spodných radov obloženia je pôvodných, ostatné 3 rady sú dorekonštruované. Dno a obvod cisterny bol v čase používania vymazaný ílom, čím sa zabránilo presakovaniu vody do vápencového podložia. Voda z cisterny nebola pitná, iba úžitková.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/castles/cisterna/",
        "en": "https://www.qrlink.sk/new/en/castles/cisterna/",
        "de": "https://www.qrlink.sk/new/de/castles/cisterna/",
        "ru": "https://www.qrlink.sk/new/ru/castles/cisterna/",
        "pl": "https://www.qrlink.sk/new/pl/castles/cisterna/",
        "hu": "https://www.qrlink.sk/new/hu/castles/cisterna/"
      }
    },
    {
      "id": "vstup-do-hlavnej-veze",
      "miesto": "hrad-strecno",
      "poradie": 8,
      "nazov": "Vstup do hlavnej veže",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2020/07/IMG_20200703_125543.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2020/07/8.mp3"
      ],
      "galeria": [
        "https://www.qrlink.sk/new/wp-content/uploads/2020/07/8-vstup-do-veže1.jpg"
      ],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Na prízemí, pri vstupe do veže, sa nachádza 8m hlboký otvor. V čase využívania hradu táto miestnosť slúžila, ako chladnička či zásobáreň potravín. Keďže miestnosť nemá žiadny iný prístup okrem vrchného otvoru, v praxi to vyzeralo tak, že sluha sa na lane spustil cez otvor dovnútra a vyzdvihol odtiaľ požadované suroviny. V minulosti sa vo veži nenachádzali schody. Pôvodne tu boli drevené rebríky, ktoré viedli na každé z piatich podlaží veže. Dokonca aj do veže sa najskôr chodilo až z 2. podlažia po pristavenom rebríku, aby sa nepriateľom sťažil jednoduchý prístup dovnútra.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/castles/vstup-do-hlavnej-veze/",
        "en": "https://www.qrlink.sk/new/en/castles/vstup-do-hlavnej-veze/",
        "de": "https://www.qrlink.sk/new/de/castles/vstup-do-hlavnej-veze/",
        "ru": "https://www.qrlink.sk/new/ru/castles/vstup-do-hlavnej-veze/",
        "pl": "https://www.qrlink.sk/new/pl/castles/vstup-do-hlavnej-veze/",
        "hu": "https://www.qrlink.sk/new/hu/castles/vstup-do-hlavnej-veze/"
      }
    },
    {
      "id": "hlavna-veza-vyhlad",
      "miesto": "hrad-strecno",
      "poradie": 9,
      "nazov": "Hlavná veža – výhľad",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2020/07/9-hl.veža.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2020/07/9-1.mp3",
        "https://www.qrlink.sk/new/wp-content/uploads/2020/07/9A-1.mp3"
      ],
      "galeria": [
        "https://www.qrlink.sk/new/wp-content/uploads/2020/07/IMG_20200624_150338.jpg"
      ],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Hlavná hradná veža je najvyšším miesto hradu. Od rieky Váh sme teraz vzdialení 148 metrov. V minulosti mala veža obrannú funkciu a využívala sa na kontrolu okolia. Na západnej strane môžete vidieť vrch Zvonica, na ktorom sa nachádza Pamätník francúzskych partizánov. Francúzski partizáni bojovali v okolí Strečna počas SNP. Veľa z nich tu padlo, a preto bol na ich počesť vybudovaný tento pamätník (v krypte sa nachádzajú telesné pozostatky 24 partizánov). Na severozápade môžete vidieť obec Varín. V miestnom kostole bol pred viac ako 300 rokmi krstený najznámejší slovenský zbojník, Juraj Jánošík, rodák z neďalekej Terchovej (Terchová je od Varína vzdialená zhruba 14 km). Smerom na severovýchod sa nachádza Starý hrad (nie je ho vidieť), pôvodne nazývaný hrad Varín. Postavený bol v 13. storočí na pravom brehu Váhu. Viedla tadiaľ hlavná považská cesta do Turca a Liptova, ktorá prechádzala v blízkosti hradu z pravej strany rieky na ľavú brodom cez Váh. Na prelome 13. a 14. storočia sa začala budovať cesta na ľavom brehu Váhu a hrad Varín sa tak dostal mimo dôležitej obchodnej trasy. Jeho funkciu následne prebral novopostavený hrad Strečno. Význam hradu Varín poklesol, o čom svedčí aj jeho premenovanie na Starý hrad. V súčasnosti je iba ruinou.</p>\n<p>Krásna Marienka (povesť)</p>\n<p>Susedia zo Starého hradu a Strečna zahoreli takmer súčasne láskou ku krásnej Marienke z podhradia Strečna. Hoci k oltáru si nevestu násilím odviedol strečniansky hradný pán, Marienka milovala šľachetného Milka – pána Starého hradu. Strečniansky hradný pán o tom vedel, a tak radšej pre istotu svojho soka zákerne zavraždil. Marienka následne utiekla z prekliateho hradu Strečno a v noci tajne navštevovala Milkov hrob, ktorý bol neďaleko rieky Váh. Strečniansky hradný pán sa o tom dozvedel a na brehu Váhu čakal na Marienku, aby ju odprosil. Prišiel však rytier v brnení a hradný pán domnievajúc sa, že ide pomstiť Mil</p>\n<p>kovu smrť, rytierovi zoťal mečom hlavu. Keď sa hlava dokotúľala až k nemu, zistil, že v skutočnosti zabil svoju ženu Marienku. Na druhý deň pri Milkovom hrobe našli mŕtveho aj strečnianskeho hradného pána. Zabil ho totiž blesk počas búrky, ktorá sa spustila po tomto veľkom nešťastí.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/castles/hlavna-veza-vyhlad/",
        "en": "https://www.qrlink.sk/new/en/castles/hlavna-veza-vyhlad/",
        "de": "https://www.qrlink.sk/new/de/castles/hlavna-veza-vyhlad/",
        "ru": "https://www.qrlink.sk/new/ru/castles/hlavna-veza-vyhlad/",
        "pl": "https://www.qrlink.sk/new/pl/castles/hlavna-veza-vyhlad/",
        "hu": "https://www.qrlink.sk/new/hu/castles/hlavna-veza-vyhlad/"
      }
    },
    {
      "id": "goticky-a-vychodny-palac",
      "miesto": "hrad-strecno",
      "poradie": 10,
      "nazov": "Gotický a východný palác",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2020/07/10-východný-palác-e1593775595595.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2020/07/10.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Z pôvodného gotického paláca objaveného počas archeologického výskumu sa zachovala iba časť suterénu s pôvodným portálom dverí. Dnes môžete vnútri vidieť ukážku mučiarne.</p>\n<p>V minulosti sa mučiareň pravdepodobne nenachádzala na tomto mieste, pretože smerom od veže nahor bol horný hrad určený pre pánov. Smerom od veže nadol bol dolný hrad určený pre služobníctvo. Vonkajší múr východného paláca je jedným z najlepšie zachovaných pôvodných múrov hradu, keďže ostatné múry sú značne spevňované. Múr sa zachoval aj s pôvodnými okennými otvormi.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/castles/goticky-a-vychodny-palac/",
        "en": "https://www.qrlink.sk/new/en/castles/goticky-a-vychodny-palac/",
        "de": "https://www.qrlink.sk/new/de/castles/goticky-a-vychodny-palac/",
        "ru": "https://www.qrlink.sk/new/ru/castles/goticky-a-vychodny-palac/",
        "pl": "https://www.qrlink.sk/new/pl/castles/goticky-a-vychodny-palac/",
        "hu": "https://www.qrlink.sk/new/hu/castles/goticky-a-vychodny-palac/"
      }
    },
    {
      "id": "severny-palac",
      "miesto": "hrad-strecno",
      "poradie": 11,
      "nazov": "Severný palác",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2020/07/11-severný-palác.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2020/07/11.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Severný palác mal pôvodne 2 podlažia – vidno to podľa otvorov v stenách, v ktorých boli trámy a na trámoch bolo umiestnené ďalšie podlažie. Otvor v hornom rohu je vnútorná časť tzv. prevétu – stredovekej toalety. Z vonkajšej strany paláca je čiastočne zrekonštruovaný. Pôvodne sa zachovali iba nosníky (krakorce). Samotná toaleta fungovala ako latrína, kde výkaly padali popri múre dolu pod hrad. Podobný prevét sa nachádzal aj na vonkajšom múre východného palác.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/castles/severny-palac/",
        "en": "https://www.qrlink.sk/new/en/castles/severny-palac/",
        "de": "https://www.qrlink.sk/new/de/castles/severny-palac/",
        "ru": "https://www.qrlink.sk/new/ru/castles/severny-palac/",
        "pl": "https://www.qrlink.sk/new/pl/castles/severny-palac/",
        "hu": "https://www.qrlink.sk/new/hu/castles/severny-palac/"
      }
    },
    {
      "id": "kaplnka",
      "miesto": "hrad-strecno",
      "poradie": 12,
      "nazov": "Kaplnka",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2020/07/12-kaplnka.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2020/07/12.mp3",
        "https://www.qrlink.sk/new/wp-content/uploads/2020/07/12A.mp3",
        "https://www.qrlink.sk/new/wp-content/uploads/2020/07/12B.mp3"
      ],
      "galeria": [
        "https://www.qrlink.sk/new/wp-content/uploads/2020/07/12a-Žofia-Bosniaková.jpg"
      ],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>V kaplnke môžete vidieť gotickú hviezdicovú klenbu, ktorú sa podarilo zrekonštruovať podľa pôvodných rebier – našli sa zrútené v kaplnke a v hradnej studni. Nad emporou, na ktorej stojíme, bola pôvodne ešte jedna empora. Vchádzalo sa na ňu z druhého podlažia severného paláca. V podlahe kaplnky je odkrytá krypta, do ktorej bolo uložené telo Žofie Bosniakovej, ktorá zomrela v roku 1644 ako 34-ročná. V roku 1689 tu jej telo našli cisárske vojská, ktoré na príkaz cisára ničili hrad. Aj 45 rokov po smrti bolo jej telo takmer neporušené. Keďže hrad bol vtedy už ruinou, Žofiino telo bolo po krátkom čase premiestnené do kostola v neďalekej Tepličke nad Váhom, kde bolo uložené v presklenej rakve a ľudia ho tam chodili obdivovať. Avšak v roku 2009 mentálne chorý muž rakvu so Žofiiným telom vyniesol von, podpálil a zničil tak veľmi vzácne kultúrne dedičstvo. V našej krypte sa dnes na Žofiinu počesť nachádza replika jej tela, zhotovená akademickým maliarom Stanom Lajdom. Žofia Bosniaková je najvýraznejšou osobnosťou v dejinách nášho hradu. V minulosti ju mali ľudia veľmi radi, pretože bola milá, skromná, dobrosrdečná a nikdy neodmietla žiadnu prosbu o pomoc. Spolu so svojím manželom založila útulok pre chudobných, chorých, siroty a cudzincov. Práve pre jej dobré skutky a pre neporušené telo, ktoré sa našlo v našej krypte, je Žofia považovaná za svätú, aj je známa pod pomenovaním svätica zo Strečna. Dokonca v roku 1997 sa začal proces jej blahorečenia (pre nedostatok archívnych dôkazov, že sa okolo jej osoby diali zázraky, zatiaľ blahorečená nebola). O Žofii existuje niekoľko povestí a legiend. Jedna z najznámejších hovorí, že Žofia Bosniaková v čase najväčšej biedy rozdávala chudobným zadarmo malé chlebíky, a tie podľa jej mena dostali pomenovanie bosniaky. V okolí Štrečna a Žiliny sú bosniaky známe aj dnes.</p>\n<p>Sakristia</p>\n<p>Vo vitrínach sa nachádzajú kamenné fragmenty, ktoré sa našli v hradnej studni počas čistiacich prác (1988 – 1992). V prvej vitrínke sú zrejme časti portálu dverí, časť výzdoby nad vstupom do hradu alebo náhrobný kameň s menom Vešeléni.</p>\n<p>Legendy o Žofii Bosniakovej</p>\n<p>Žofiino manželstvo s Františkom Vešelénim bolo zo začiatku veľmi šťastné. Postupom času, keď František často odchádzal na Fiľakovský hrad (bol kapitánom hradu), zaľúbil sa do druhej ženy, do tzv. Muránskej Venuše z hradu Muráň, do Márie Séči. Žofia veľmi trpela jeho nevšímavosťou a údajne denne chodila do kaplnky v skalách, aby si tam vymodlila jeho lásku späť. Raz ju tam v modlitbe k Panne Márii našiel František, prosil ju o odpustenie a prisahal jej večnú lásku. Keď však Žofia zomrela, František Vešeléni sa krátko na to opäť oženil a za manželku si zobral práve spomínanú Máriu Séči.</p>\n<p>Reštaurovanie kaplnky</p>\n<p>Pred reštaurovaním boli steny kaplnky preomietnuté cementovou omietkou, v hornej časti boli domurované do pôvodnej výšky a zaklenuté novou rekonštrukčnou železobetónovou klenbou. Steny boli natreté na bielo a rebrá klenby zase na tehlovočerveno. Toto bola zrejme aj pôvodná základná stredoveká farebnosť kaplnky. Keďže z vonkajšej strany omietka chýbala, dážď spôsoboval zvýšenú vlhkosť a plesne v interiéri. Výskumom sa zistilo, že pod cementovou omietkou sú zachované pôvodné stredoveké omietky. Samotné reštaurovanie začalo kompletným odstránením cementových omietok. Výsledkom bolo očistenie stein až na pôvodné kamenné murivo s čiastočne zachovanými pôvodnými stredovekými omietkami v spodnej časti stien. Následne boli murivá a omietky hĺbkovo spevnené. Po celkovom spevnení a konzervácii došlo k doplneniu zachovaných častí omietky. V stenách boli doplnené aj drevené lešenárske guľatiny z výstavby kaplnky, po ktorých ostali už len diery do exteriéru. Takisto došlo k farebnému sceleniu kaplnky, aby výrazná klenba kaplnky z konca 20. storočia nepôsobila rušivo a nepútala väčšiu pozornosť ako pôvodné stredoveké omietky.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/castles/kaplnka/",
        "en": "https://www.qrlink.sk/new/en/castles/kaplnka/",
        "de": "https://www.qrlink.sk/new/de/castles/kaplnka/",
        "ru": "https://www.qrlink.sk/new/ru/castles/kaplnka/",
        "pl": "https://www.qrlink.sk/new/pl/castles/kaplnka/",
        "hu": "https://www.qrlink.sk/new/hu/castles/kaplnka/"
      }
    },
    {
      "id": "severna-veza",
      "miesto": "hrad-strecno",
      "poradie": 13,
      "nazov": "Severná veža",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2020/07/13-severná-veža-e1593776801900.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2020/07/13.mp3",
        "https://www.qrlink.sk/new/wp-content/uploads/2020/07/13A.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Na prízemí severnej veže sú ešte pôvodné strieľne a zrekonštruované otvorené ohnisko. Nad ním sa nachádza imitácia komína. Na rohu kaplnky môžete vidieť dodatočne vylámaný priestor, kde sa nachádzalo točité schodisko a tým sa vstupovalo na ďalšie poschodie veže. Počas rekonštrukčných prác bolo zrekonštruované aj okno – pôvodne to boli dvere, ktorými sa dalo dostať na druhú emporu kaplnky.</p>\n<p>Severná veža – výhľad</p>\n<p>Zo severnej veže je výhľad na samotný hrad a jeho najbližšie okolie. Majestátne týčiaci sa hrad na nedobytnom brale, akoby strážil tajomstvom opradené miesta. Pltníci by vedeli povedať o čom je tu reč, vždy s malou dušičkou plávajú popod hrad a sú vďační za to, keď ich Margita a Besná nechá v pokoji preplávať. Dve skaly so ženskými menami ako náhrobné kamene vyčnievajúce z vody, pripomínajú dávne smutnú minulosť, ktorá sa tam stala.</p>\n<p>Margita a Besná (povesť)</p>\n<p>K týmto dvom skalám sa viaže povesť o bohatom ovdovelom sedliakovi, ktorý sa po druhý raz oženil s mladou ženou. Mal aj krásnu dcéru Margitu, ktorú macocha nenávidela pre jej krásu a lásku k jednému mládencovi, do ktorého sa zaľúbila aj macocha. Keďže mládenec ju odmietol, myslela len na to, ako sa Margite pomstiť. Raz sa za ňou tajne ponáhľala a dostihla ju práve vtedy, keď šla okolo skaly nad Váhom a na tomto mieste ju zhodila do rieky. Vlny zaniesli Margitino telo ku skale, ktorá od tých čias nesie jej meno. Keď pravda vyšla najavo, šialená a besná macocha sa sama vrhla do Váhu práve na tom mieste, kde sa utopila Margita. A preto sa druhá skala volá práve Besná.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/castles/severna-veza/",
        "en": "https://www.qrlink.sk/new/en/castles/severna-veza/",
        "de": "https://www.qrlink.sk/new/de/castles/severna-veza/",
        "ru": "https://www.qrlink.sk/new/ru/castles/severna-veza/",
        "pl": "https://www.qrlink.sk/new/pl/castles/severna-veza/",
        "hu": "https://www.qrlink.sk/new/hu/castles/severna-veza/"
      }
    },
    {
      "id": "hlavne-nadvorie",
      "miesto": "hrad-strecno",
      "poradie": 14,
      "nazov": "Hlavné nádvorie",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2020/07/14-hlavné-nádvorie-e1593777205229.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2020/07/14.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Na hlavnom nádvorí sa nachádza hlboká hradná studňa. Vysekaná je do skalného podložia do hĺbky až 88m, pričom výška vodnej hladiny je asi 1,5m. Počas archeologického výskumu sa našlo najviac zaujímavých pamiatok práve v studni. Tá bola totiž pri ničení hradu zasypaná odpadom a časťami architektonických prvkov úplne povrch a v podstate sa o jej existencii pred výskumom ani nevedelo. Vyčistili ju jaskyniari z Martina (trvalo to 5 rokov).</p>\n<p>História hradu Strečno v 18. – 20. storočí</p>\n<p>Po tom, ako bol hrad zabavený Ladislavovi Vešelénimu, strečnianske panstvo bolo rozdelené na dve časti. Jednu získal Pavol Esterházy (pán Bytče) – vzniklo tak panstvo Bytča-Strečno. Druhú časť dostali bratia Löwenburgovci. V druhej polovici 19. storočia Esterházyovci predali panstvo Bytča-Strečno veľkopodnikateľovi s drevom Leopoldovi Popperovi. Na konci 19. storočia Popperovci kvôli dlhom začali rozpredávať svoje majetky. Strečno tak získal obchodník Samuel Hahn. Löwenburgovská časť majetku sa rozdelila na dve časti – tepličské a gbeľanské panstvo, ktoré viackrát menili svojich majiteľov, poslednou majiteľkou bola grófka Iphigénia D‘ Hartcourt a grófka Šarlota Mayláth. Obchodník Hahn začal hrad rozoberať a kameň predávať ako stavebný materiál. Neskôr začal pod hradom ťažiť vápenec. V ťažbe sa pokračovalo aj počas prvej ČSR (Vápenka Varín). Až keď sa Strečno dostalo do rúk Československého klubu turistov, boli práce vedúce k likvidácii hradu zastavené. Počas 2. svetovej vojny bol hrad značne zničený, hlavne keď tu bojovali francúzske partizánske jednotky. Od roku 1978 sa rekonštruoval. Na rekonštrukciu sa používal kameň získaný zo sutiny priamo z hradu alebo bol dovezený z lomu Polom. Úplne bola zrekonštruovaná hlavná brána, hlavná veža, južný palác, severný palác a kaplnka. Z veľkej časti bola doplnená severná veža a predbránie, čiastočne východný palác, parkánová hradba a delové opevnenie.</p>\n<p>Milí návštevníci, tu sa naše spoločné sprevádzanie hradom končí. Dúfame, že sa vám virtuálna prehliadka páčila a obohatila vás nielen vizuálne, ale aj duchovne. Sprevádzali vás virtuálne ARDSYSTÉM, lektorsky hrad Strečno a hudobne Zbor starej hudby ARCUS.</p>\n<p><a href=\"https://ardsystem.sk/\">https://ardsystem.sk/</a></p>\n<p><a href=\"https://www.pmza.sk/\">https://www.pmza.sk/</a></p>\n<p><a href=\"https://www.zborarcus.sk/\">https://www.zborarcus.sk/</a></p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/castles/hlavne-nadvorie/",
        "en": "https://www.qrlink.sk/new/en/castles/hlavne-nadvorie/",
        "de": "https://www.qrlink.sk/new/de/castles/hlavne-nadvorie/",
        "ru": "https://www.qrlink.sk/new/ru/castles/hlavne-nadvorie/",
        "pl": "https://www.qrlink.sk/new/pl/castles/hlavne-nadvorie/",
        "hu": "https://www.qrlink.sk/new/hu/castles/hlavne-nadvorie/"
      }
    },
    {
      "id": "ivanka-u4-z1",
      "miesto": "ivanka-uroven-4",
      "poradie": 1,
      "nazov": "Testovacie zastavenie A",
      "popis": "Prvé testovacie zastavenie na 4. úrovni vnorenia.",
      "cover": "",
      "audio": [],
      "galeria": [],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Toto je testovacie zastavenie, ktoré overuje, že &quot;Kategória so zastaveniami&quot; sa správne\n      zobrazí až na poslednej (listovej) úrovni, bez ohľadu na to, koľko úrovní podkategórií je nad ňou.</p>"
    },
    {
      "id": "ivanka-u4-z2",
      "miesto": "ivanka-uroven-4",
      "poradie": 2,
      "nazov": "Testovacie zastavenie B",
      "popis": "Druhé testovacie zastavenie na 4. úrovni vnorenia.",
      "cover": "",
      "audio": [],
      "galeria": [],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Druhé testovacie zastavenie – slúži na overenie gridu/zoznamu s viac ako jednou kartičkou.</p>"
    },
    {
      "id": "bytcianski-turzovci-povod-dejiny-rodu-erb",
      "miesto": "klenoty-pohranicie",
      "poradie": 1,
      "nazov": "Bytčianski Turzovci (pôvod, dejiny rodu, erb)",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2023/11/fam.poss-036.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2023/12/Tabula-01.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Rod Turzovcov, ktorý pochádzal zo spišských Betlanoviec, patril od konca 15. do prvej štvrtiny 17. storočia k najvýznamnejším uhorským šľachtickým rodom. Členovia rodu žili v Uhorsku, Poľsku či dnešnom Rakúsku a Nemecku. Na slovenskom území sa rod delil na niekoľko vetiev: spišskú, banskobystrickú, trenčiansku, bytčiansko-oravskú, bojnickú a šintavskú. Príslušníci rodu zastávali v Uhorsku popredné hodnosti v správe krajiny a vlastnili rozsiahle majetky. Viacerí z nich študovali na popredných európskych univerzitách v Taliansku, Poľsku či Nemecku.</p>\n<p>Zakladateľom bytčiansko-oravskej vetvy bol František Turzo, syn Jána (VI.) zvaného Krivý.  Príslušníci tejto vetvy si odvodzovali aj svoj predikát „de Bethlenfalva“ z pôvodného sídla rodu na Spiši. František sa po štúdiách v Padove niekedy začiatkom roka 1543 vrátil do Uhorska. Jeho príbuzný Alexej Turzo mu testamentárne odkázal biskupské majetky s hradom v Nitre. František v apríli 1544 nastúpil do funkcie nitrianskeho biskupa a župana a ujal sa i biskupských majetkov. Postupne získal vysoké dvorské funkcie – stal sa prefektom Uhorskej komory, členom miestodržiteľstva a v októbri 1556 ako jediný uhorský šľachtic dokonca predsedom Dvorskej komory. Na jar v tom istom roku sa zriekol hodnosti biskupa a v záujme zachovania rodu sa oženil s Barborou Kostkovou. V týchto funkciách sa mu podarilo získať oravské panstvo i s hradom. Manželstvo však bolo bezdetné, v roku 1561 mu navyše manželka zomrela. O rok neskôr sa František druhýkrát oženil s Katarínou Zrínskou. V tomto období kúpil lietavské panstvo  a získal aj hrad Hričov, zámok v Bytči spolu s mestom a panstvom. v Bytči nechal František v rokoch 1571 – 1574 postaviť hlavné rodové sídlo – renesančný zámok, na ktorého výstavbu si pozval talianskych majstrov. Z druhého manželstva sa manželom narodilo päť detí, jedným z nich bol pokračovateľ rodu Juraj, ktorý sa narodil na hrade Lietava 2. septembra 1567.</p>\n<p>Najstarším hodnoverným prameňom na erb Turzovcov je pečať Teofila Turza z roku 1493. V nej možno vidieť všeobecne známy delený štít, v jeho hornom poli vyrastá korunovaný lev, v dolnom poli sú umiestnené tri ruže. Pre bytčiansko-oravskú vetvu Turzovcov je podstatnou vývinovou fázou grófsky erb, ktorý v roku 1607 udelil Jurajovi cisár Rudolf II.  Erb pozostáva zo štvrteného štítu v strede s malým zlatým srdcovým štítkom, v ktorom je čierny ríšsky orol. Prvé a štvrté pole štvrteného štítu je delené, v jeho hornej červenej časti sa nachádza vyrastajúci zlatý, korunovaný lev, v dolnej zlatej polovici sú tri červené ruže. V druhom a treťom modrom poli je strieborný jednorožec so zlatou zbrojou. Erb má dva klenoty. Vľavo spod zlatej koruny na otvorenej turnajovej prilbe splývajú tu i tam modro-strieborné prikrývadlá, klenotom je z koruny vyrastajúci strieborný jednorožec so zlatou zbrojou. Vpravo spod zlatej koruny splývajú tu i tam červeno-zlaté prikrývadlá a klenot tvorí zo zlatej koruny vyrastajúci zlatý lev. Figúry v erbe zachovávajú pravidlo heraldickej zdvorilosti, sú k sebe zdvorilo obrátené.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/castles/bytcianski-turzovci-povod-dejiny-rodu-erb/",
        "en": "https://www.qrlink.sk/new/en/castles/bytcianski-turzovci-povod-dejiny-rodu-erb/",
        "de": "https://www.qrlink.sk/new/de/castles/bytcianski-turzovci-povod-dejiny-rodu-erb/",
        "ru": "https://www.qrlink.sk/new/ru/castles/bytcianski-turzovci-povod-dejiny-rodu-erb/",
        "pl": "https://www.qrlink.sk/new/pl/castles/bytcianski-turzovci-povod-dejiny-rodu-erb/",
        "hu": "https://www.qrlink.sk/new/hu/castles/bytcianski-turzovci-povod-dejiny-rodu-erb/"
      }
    },
    {
      "id": "politicka-a-vojenska-kariera-juraja-turza",
      "miesto": "klenoty-pohranicie",
      "poradie": 2,
      "nazov": "Politická a vojenská kariéra Juraja Turza",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2023/11/thurzo-nakoni.png",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2023/12/Tabula-02.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Juraj Turzo sa ako 17-ročný mladík dostal na výchovu  na viedenský dvor rakúskeho arcikniežaťa Ernesta. Tu sa mu dostalo náležitého dvorského vzdelania, najmä v oblasti vojenstva a diplomacie. Doplnil si aj jazykové vedomosti. Okrem maďarčiny a slovenčiny ovládal slovom i písmom i latinu a nemčinu. V roku 1585 sa mladý Juraj vrátil domov do Bytče, aby sa ujal riadenia svojich majetkov.</p>\n<p>Vojensky sa Juraj Turzo angažoval v protitureckých bojoch, najmä v rámci tzv. pätnásťročnej vojny (1590 – 1604). Osobne bol prítomný vo viacerých bitkách, ktoré súviseli s dobývaním hradov Divín, Šomoška, Hájnačka, Modrý Kameň či Fiľakovo. Zúčastnil sa aj v bojoch pri Budíne, Vacove, Ostrihome a Stoličnom Belehrade. Od roku 1597 mala Turzova kariéra stúpajúcu tendenciu. V októbri 1597 rokoval s poľským kráľom o protitureckých akciách v Nových Zámkoch. O rok neskôr ho nachádzame vo funkcii radcu cisára Rudolfa II. a v roku 1599 získal funkciu kráľovského pohárnika. Za jeho zásluhy v protitureckých bojoch ho arciknieža Matej, brat Rudolfa II., navrhol na bratislavskom sneme v roku 1602 do funkcie kapitána preddunajského vojska a veliteľa novozámockej pevnosti. Zaujímavé je, že sa napriek svojmu evanjelickému vyznaniu Turzo nepridal na stranu protihabsburského povstania Štefana Bočkaja, ale ostal verný cisárovi – katolíkovi. Za jeho odmietavý postoj voči povstaniu mu povstalci v priebehu roka 1605 vyplienili majetky v oblasti severozápadného Slovenska, vrátane hlavného sídla v Bytči.</p>\n<p>Začiatkom 17. storočia vypukli spory medzi arcikniežaťom Matejom a jeho bratom, cisárom Rudolfom II.  Juraj Turzo začal podporovať tolerantnejšieho a prezieravejšieho Mateja, ktorý 16. novembra 1608 nastúpil na uhorský trón ako Matej II. Bol to práve on, kto pri voľbe uhorského palatína presadzoval do tejto, po panovníkovi najvyššej hodnosti Juraja Turza. Stalo sa tak 7. decembra 1609. Turzovo sídlo – Bytča sa stala strediskom vysokej uhorskej politiky. Avšak o dianí v okolitých krajinách mu pravidelne podávali správy jeho vyslanci v Prahe, Viedni, Tešíne, Krakove či Sedmohradsku. Medzi jeho prvoradé úlohy patrila starostlivosť o pohraničné hrady, ktoré boli nevyhnutné z hľadiska protitureckej obrany štátu.  Na jeho príkaz boli vykonané vizitácie hradov v Nitrianskej, Zvolenskej, Novohradskej a Malohontskej stolici. Staral sa tiež o pravidelný žold hradných posádok s cieľom zabrániť dezerciám.</p>\n<p>Okrem vojenských záležitostí Turzo z titulu svojich funkcií musel riešiť aj niektoré kriminálne zločiny. Ešte v roku 1600 ho Dvorská kancelária poverila úlohou súvisiacou s trestnou činnosťou lednického zemepána Michal Telekešiho, ktorý prepadol povozy s cennými darmi určenými pre cisára. Tento čin bol hodnotený ako urážka majestátu a velezrada. Turzo na príkaz arcikniežaťa Mateja obsadil hrad Lednicu a skonfiškoval ho pre kráľovskú komoru. Vážny prípad riešil už ako palatín v roku 1610. Kráľ Matej ho poveril vyšetrovaním proti neslávne známej Alžbete Bátoryovej. Jej zločiny však Turzo nepotrestal dostatočne a Bátoryová skončila v doživotnom žalári na svojom Čachtickom hrade.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/castles/politicka-a-vojenska-kariera-juraja-turza/",
        "en": "https://www.qrlink.sk/new/en/castles/politicka-a-vojenska-kariera-juraja-turza/",
        "de": "https://www.qrlink.sk/new/de/castles/politicka-a-vojenska-kariera-juraja-turza/",
        "ru": "https://www.qrlink.sk/new/ru/castles/politicka-a-vojenska-kariera-juraja-turza/",
        "pl": "https://www.qrlink.sk/new/pl/castles/politicka-a-vojenska-kariera-juraja-turza/",
        "hu": "https://www.qrlink.sk/new/hu/castles/politicka-a-vojenska-kariera-juraja-turza/"
      }
    },
    {
      "id": "juraj-turzo-a-turzovka",
      "miesto": "klenoty-pohranicie",
      "poradie": 3,
      "nazov": "Juraj Turzo a Turzovka",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2023/11/3.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2023/12/Tabula-03.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Turzovka je jediným sídlom na Slovensku, ktoré vo svojom názve zachovalo pamiatku na tohto významného uhorského šľachtica, držiteľa úradu palatína, vplyvného politika, hrdinu protitureckých bojov, humanistického vzdelanca a patróna evanjelickej cirkvi. Jeho vzťah k Turzovke sa dá pozorovať v troch rovinách: 1. založenie obce, 2. jej pomenovanie, 3. založenie farnosti. K založeniu obce viedli Turza snahy o ochranu vlastných majetkových záujmov a územia proti prenikajúcim valachom zo susedného Budatínskeho panstva a tiež úsilie o osídlenie dovtedy hospodársky len sporo využívaných oblastí v povodí horného toku Kysuce. Turzovka rozhodne vznikla s jeho vedomím a súhlasom na mieste staršej dlhopoľskej osady Predmier a lokality Markove lúky v roku 1598. O štyri roky neskôr, 21. februára 1602 vydal Turzo novozaloženej obci, jej lokátorovi a zároveň dedičnému richtárovi Adamovi Bonecovi výsadnú listinu, v ktorej určil poddaným základné podmienky usadenia sa a vymedzil im chotár. Išlo o veľké územie, na ktorom sa v súčasnosti nachádza niekoľko obcí – Makov, Vysoká nad Kysucou., Olešná, Klokočov, Korňa a samotná Turzovka.</p>\n<p>Novozaložená obec bola pomenovaná po svojom zakladateľovi – Turzova, v maďarčine a latinčine Turzofalva či Turzowafalva (Turzova dedina). Až do polovice 18. storočia sa pre Turzovku používali paralelne názvy Turzovka, Predmier, niekedy aj Kysuca alebo Nižná Kysuca. Do založenia Turzovky v kysuckej oblasti Bytčianskeho panstva, nejestvovala nijaká samostatná obec. Keď vznikla Turzovka išlo teda o prvú kysuckú lokalitu na Turzovom panstve, preto ju zrejme pomenovali Turzovou dedinou (Turzofalva), skrátene Turzova neskôr Turzovka. Pomenovanie vzniklo celkom spontánne, prirodzene a vyplynulo z celkového vývoja osídlenia na panstve. Bolo spomenuté, že išlo nielen o prvú obec na hornej Kysuci, ale naviac aj hraničnú obec Bytčianskeho panstva. Z tohto dôvodu ju pomenovali Turzovou, aby bolo nespochybniteľné, že ide o Turzov majetok, Turzovu obec. Nový názov Turzova/Turzovka sa presadil na úkor staršieho, pôvodného pomenovania lokality Predmier.</p>\n<p>Juraj Turzo založil v novozriadenej obci v roku 1615 farnosť povolaním evanjelického farára. Kým v procese pomenovania Turzo nezohral aktívnu úlohu, v oblasti náboženského života sa naopak v prospech svojej dediny angažoval azda najviac. Už v privilégiu z roku 1602 výslovne uviedol, aby lokátor a tamojší obyvatelia postavili v dedine kostol a faru. Stalo sa tak v roku 1614, keď postavili prvý drevený kostol a zemepán im doň daroval zvon, odliaty pravdepodobne v zvonolejárskej dielni v Dolnom Kubíne. Zvon sa zachoval do súčasnosti a aktuálne je súčasťou zbierok Mestského múzea v Turzovke. Turzo sa tiež postaral o duchovného správcu a jeho príchodom bola de facto i de iure zriadená nová farnosť – v tom čase evanjelická. Približne do konca apríla 1615 patrila Turzovka ako filiálna obec k farnosti v Hričove. Začiatkom mája Turzo do Turzovky povolal evanjelického kňaza Michala Orlandiho Carbonaria (Uhliara). Na činnosť evanjelickej farnosti od roku 1673 plynulo nadviazala katolícka farnosť.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/castles/juraj-turzo-a-turzovka/",
        "en": "https://www.qrlink.sk/new/en/castles/juraj-turzo-a-turzovka/",
        "de": "https://www.qrlink.sk/new/de/castles/juraj-turzo-a-turzovka/",
        "ru": "https://www.qrlink.sk/new/ru/castles/juraj-turzo-a-turzovka/",
        "pl": "https://www.qrlink.sk/new/pl/castles/juraj-turzo-a-turzovka/",
        "hu": "https://www.qrlink.sk/new/hu/castles/juraj-turzo-a-turzovka/"
      }
    },
    {
      "id": "juraj-turzo-podporovatel-vzdelanosti-a-patron-evanjelickej-cirkvi",
      "miesto": "klenoty-pohranicie",
      "poradie": 4,
      "nazov": "Juraj Turzo – podporovateľ vzdelanosti a patrón evanjelickej cirkvi ",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2023/11/4.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2023/12/Tabula-04.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Turzovci sa stali prívržencami evanjelickej viery augsburského vyznania ešte za čias Františka Turza. V týchto intenciách vystupoval aj jeho syn Juraj, ktorý sa stal veľkou oporou evanjelickej cirkvi v Uhorsku, napriek tomu, že ostal verný katolíckemu cisárskemu dvoru. Na dvor do Bytče priviedol viacerých vzdelancov. Jeho pričinením sa  bytčianske gymnázium stalo školou, ktorej absolventi pokračovali na domácich i zahraničných univerzitách. Sám disponoval hodnotnou knižnicou, obsahujúcou viac ako 800 zväzkov kníh. V jeho listoch sa objavuje termín „natio slavica nostra“ (naša slovenská nácia). Turzo založil niekoľko evanjelických farností na Orave (Lokca, Námestovo, Podvlk, Jablonka, Nižná či Žaškov) i Kysuciach (Turzovka). Pri farách boli zakladané školy. Vďaka Turzovej finančnej podpore mohli viacerí nádejní mladíci študovať na zahraničných univerzitách.</p>\n<p>Jeho najväčšou zásluhou v náboženskej oblasti je nesporne zorganizovanie cirkevnej synody v Žiline, ktorou sa evanjelická cirkev v Uhorsku definitívne odlúčila zo štruktúr katolíckej cirkvi. Okrem uhorského palatína bol ústrednou postavou synody senior žilinského kontubernia, vzdelanec a Turzov dvorný kazateľ Eliáš Láni. Synoda sa mala pôvodne uskutočniť už v roku 1609, ale kvôli určitým nezhodám sa napokon nezišla. V dňoch 28. – 30. marca 1610 však už do Žiliny na Turzovo pozvanie zavítali mnohí šľachtici, stoliční predstavitelia, zástupcovia popredných miest a evanjelickí duchovní. Sám palatín prišiel so sprievodom už o deň skôr. Po duchovných aktivitách v žilinskom farskom kostole (dnes katedrálnom) prítomní  diskutovali o návrhoch na miesta superintendentov a pristúpili k tvorbe zákonných článkov. Komisia spísala 16 článkov a znenie superintendentskej prísahy. Posledný deň synody 30. marca boli vyvolení prví evanjelickí superintendenti: Eliáš Láni pre oblasť Trenčianskej, Liptovej a Oravskej stolice, Samuel Melik pre Turčiansku, Zvolenskú, Novohradskú stolicu a Hont a napokon Izák Abrahamides pre Bratislavskú, Nitriansku a Tekovskú stolicu. Hoci prví dvaja sa zdráhali prijať tieto úrady, palatín Turzo ich presvedčil o správnosti voľby. V organizácii dôležitej náboženskej synody sa palatín preukázal ako vynikajúci organizátor a diplomat.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/castles/juraj-turzo-podporovatel-vzdelanosti-a-patron-evanjelickej-cirkvi/",
        "en": "https://www.qrlink.sk/new/en/castles/juraj-turzo-podporovatel-vzdelanosti-a-patron-evanjelickej-cirkvi/",
        "de": "https://www.qrlink.sk/new/de/castles/juraj-turzo-podporovatel-vzdelanosti-a-patron-evanjelickej-cirkvi/",
        "ru": "https://www.qrlink.sk/new/ru/castles/juraj-turzo-podporovatel-vzdelanosti-a-patron-evanjelickej-cirkvi/",
        "pl": "https://www.qrlink.sk/new/pl/castles/juraj-turzo-podporovatel-vzdelanosti-a-patron-evanjelickej-cirkvi/",
        "hu": "https://www.qrlink.sk/new/hu/castles/juraj-turzo-podporovatel-vzdelanosti-a-patron-evanjelickej-cirkvi/"
      }
    },
    {
      "id": "zaver-zivota-uhorskeho-palatina",
      "miesto": "klenoty-pohranicie",
      "poradie": 5,
      "nazov": "Záver života uhorského palatína",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2023/11/5.png",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2023/12/Tabula-05.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Hodnosť palatína a povinnosti s ňou spojené neboli jednoduché. Vyžadovali si okrem duševnej pripravenosti aj dobrú telesnú kondíciu a zdatnosť. Nemožno pochybovať, že vplyv na jeho neskoršie zdravie uhorského palatína mali dlhšie pobyty vo vojenských táboroch a účasti na bojiskách. Turza neskôr značne vyčerpávali pomerne časté cesty do Bratislavy, Viedne či Košíc, pričom trpel viacerými chorobami. Niektoré z nich nadobúdali chronický charakter. Členovia jeho rodiny radi navštevovali kúpele v Rajeckých Tepliciach, kde v roku 1610 postavili kúpeľný dom. Keďže Juraj Turzo trpel na reumatizmus, skoliózu, artrózu i ľadvinové kamene, najmä po roku 1612 stále častejšie vyhľadával príležitosť zrelaxovať v liečivej vode rajeckých kúpeľov. Napriek tomu sa jeho zdravotný stav zhoršoval a v dôsledku toho sa nemohol zúčastniť ani na svadbách dcéry Stanislava Turza v októbri 1614, ani v októbri o dva roky neskôr na svadbe Anny Sidónie, dcéry tešínskeho kniežaťa Adama Václava. Zhoršený zdravotný stav ho prinútil, aby v roku 1615 z Wittenbergu do Bytče povolal svojho syna Imricha, hoci toho práve zvolili za rektora tamojšej univerzity. V priebehu roka 1616 už Juraj Turzo nikam necestoval. Zomrel na Štedrý deň 24. decembra 1616 vo veku 49 rokov. Pravdepodobnou príčinou smrti bola pľúcna choroba – zápal pľúc alebo tuberkulóza.</p>\n<p>Telo zomrelého uložili 28. decembra do drevenej rakvy, v ktorej mu maliar vyhotovil posmrtný portrét. Drevenú rakvu 9. januára 1617 uzavreli a 7. februára ju vložili do väčšej cínovej. Pozostalá rodina mu následne vystrojila veľkolepý pohreb 19. februára 1617. Palatínov katafalk bol umiestnený v sobášnom paláci, odkiaľ sa potom pohrebný sprievod pohol k farskému kostolu. V sprievode šli okrem rodiny aj významní šľachtici, stoliční a krajinskí hodnostári, kapitáni pohraničných hradov, predstavitelia miest, zahraničné delegácie, ale aj študenti z Bytče, Rajca či Žiliny, členovia miestnych cechov, ozbrojená palatínova stráž, panské služobníctvo či obyvatelia z dedín bytčianskeho a lietavského panstva. Hlavným kazateľom pri pohrebných obradoch bol superintendent Eliáš Láni. Po nich rakvu uložili do krypty chrámu Všetkých svätých v Bytči. O niekoľko rokov neskôr ale Turzove telesné pozostatky previezli do rodinnej hrobky v kaplnke sv. Michala na Oravskom hrade. Tam sa dodnes nachádza jeho mramorový epitaf, zobrazujúci palatína v životnej veľkosti.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/castles/zaver-zivota-uhorskeho-palatina/",
        "en": "https://www.qrlink.sk/new/en/castles/zaver-zivota-uhorskeho-palatina/",
        "de": "https://www.qrlink.sk/new/de/castles/zaver-zivota-uhorskeho-palatina/",
        "ru": "https://www.qrlink.sk/new/ru/castles/zaver-zivota-uhorskeho-palatina/",
        "pl": "https://www.qrlink.sk/new/pl/castles/zaver-zivota-uhorskeho-palatina/",
        "hu": "https://www.qrlink.sk/new/hu/castles/zaver-zivota-uhorskeho-palatina/"
      }
    },
    {
      "id": "edmund-reitter-vedec-novinar-a-cestovatel",
      "miesto": "klenoty-pohranicie",
      "poradie": 6,
      "nazov": "Edmund Reitter – vědec, novinář a cestovatel",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2023/11/9_Titulní-strana-publikace.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2023/12/Reiter02.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Mezi odbornými kruhy se Edmund Reitter proslavil jako vynikající entomolog, především koleopterolog. Do současnosti je tento dlouholetý paskovský občan zařazován mezi nevýznamnější evropské i světové odborníky svého oboru.</p>\n<p>Nesmírně pracovitý Reitter spojoval studium brouků s jejich sběrem přímo v terénu i s neobyčejně rozsáhlou publikační činností. Díky zkoumání sběrů předaných od přátel z velmi vzdálených lokalit (Kavkaz, Arménie, Mongolsko, Sibiř atd.) představuje předního odborníka přes koleopterologii pro celou palearktickou zónu, která se rozkládá na území Evropy, většiny Asie a severní části Afriky. V době své badatelské a publikační činnosti byl dokonce považován za největšího znalce kavkazských brouků.</p>\n<p>Společně s jinými odborníky a přáteli podnikl desítky cest za předmětem svého zájmu. Se síťkou na brouky navštívil střední, východní a jižní Evropu, převážně ve všech případech území tehdejšího Rakousko-Uherska. Materiál pro svou práci si přivážel například z Tater, Podkarpatské Rusi, Sedmihradska, Dalmácie, Bosny, Černé Hory nebo Jižního Tyrolska. Téměř samozřejmé byly i jeho výzkumy věnované sběrům v různých částech Beskyd nebo přímo v okolí Paskova. Poslední velkou cestu uskutečnil v roce 1913, tedy ve svých 68 letech, do Chorvatska.</p>\n<p>Přestože o brouky jevil Reitter zájem již při svém studiu na gymnáziu v Opavě a poté se staly jeho koníčkem i při prvním pobytu v Paskově, plně se jim oddal až po přestěhování do Vídně v roce 1879 a následně po dvou letech do nedalekého Mödlingu. Entomologický obchod, který v té době provozoval, se stal věhlasným centrem příznivců tohoto oboru. Jeho provozování s obdobným úspěchem a popularitou obnovil i po návratu do Paskova v roce 1891.</p>\n<p>Spolu s dalšími odborníky založil Vídeňské entomologické noviny (Wíener Entomologische Zeitung), které po čase sám vydával. Jeho nejrozsáhlejším publikačním počinem je pětisvazková Fauna Germanica. V nákladu 35 tis. kusů ji vydal pro spolek německých učitelů. Reitter je autorem přes 1 000 článků v různých odborných časopisech. Jeho práce sloužily jako východisko pro systémový pohled na studium hmyzu hlavně novým nastupujícím zájemcům o entomologii, především koleopterologii.</p>\n<p>Věhlas výsledků práce Edmunda Reittera se brzy promítnul i do jeho členství v různých prestižních entomologických společnostech, a to nejen v Rakousku-Uhersku, ale také například v Německu, Španělsku, Finsku, Rusku nebo dokonce v Egyptě.</p>\n<p>Za nejrozsáhlejší do současnosti zachovaný odkaz nesmírného nadšení a pracovitosti Reittera můžeme považovat hlavní část jeho sbírky, která se v ucelené podobě nachází od roku 1916 v Maďarském národním muzeu.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/castles/edmund-reitter-vedec-novinar-a-cestovatel/",
        "en": "https://www.qrlink.sk/new/en/castles/edmund-reitter-vedec-novinar-a-cestovatel/",
        "de": "https://www.qrlink.sk/new/de/castles/edmund-reitter-vedec-novinar-a-cestovatel/",
        "ru": "https://www.qrlink.sk/new/ru/castles/edmund-reitter-vedec-novinar-a-cestovatel/",
        "pl": "https://www.qrlink.sk/new/pl/castles/edmund-reitter-vedec-novinar-a-cestovatel/",
        "hu": "https://www.qrlink.sk/new/hu/castles/edmund-reitter-vedec-novinar-a-cestovatel/"
      }
    },
    {
      "id": "edmund-reitter-clovek-a-filantrop",
      "miesto": "klenoty-pohranicie",
      "poradie": 7,
      "nazov": "Edmund Reitter – člověk a filantrop",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2023/11/6_Vitrina-se-sbírek-Edmunda-Reittera.png",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2023/12/Reiter03-1.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Přestože se pro připomenutí Edmunda Reittera nabízí vzpomenout především jeho badatelskou a publikační činnost, nelze opomenout také pozoruhodnou společenskou angažovanost i duchovní zaměření této osobnosti.</p>\n<p>Rodným jazykem Reittera byla němčina, která se používala jako úřední a dorozumívací jazyk také v jeho prvních zaměstnáních u hrabat Larisch-Mönichů a Saint-Genois. V němčině publikoval i své odborné práce. U Reitterů však byla v rodinném prostředí používaná také čeština. Sám se dovedl česky domluvit a v období pobytu v Paskově posílal děti do české školy.</p>\n<p>Nebyly mu lhostejné ani sociální poměry a společenské dění. Známá je jeho podpora spolkové činnosti paskovských hasičů, kterou dokládá i skutečnost, že mu zde bylo přiznáno postavení čestného člena.</p>\n<p>Opomenout nelze ani zřízení vojenského lazaretu pro raněné vojáky z 1. světové války, kdy mezi ošetřovatelky raněných a nemocných zařadil také rodinné příslušníky, nejmladší dceru Theu a neteř Emilii.</p>\n<p>Přirozeně se neváhal postarat o svou mladší neprovdanou sestru Marii a otce Vincenta, kteří strávili poslední léta života právě v kruhu Reitterovy rodiny.</p>\n<p>Známá je rovněž jeho ochota předávat zkušenosti mladým začínajícím entomologům. To platilo pro srozumitelný styl, kterým psal své odborné práce, ale i pro četné osobní konzultace, při nichž neváhal poskytovat pro další studium také exponáty ze svých sbírek. Návratnost přitom zdaleka nebyla zaručena a v mnoha případech se nenaplnila. Tyto ztráty však byly u Reittera vyváženy pocitem radosti z naplnění jednoho z jeho životních poslání – předávat svou zkušenost a poznání následovatelům.</p>\n<p>Věhlas odborných úspěchů vyvolával pro Reittera nabídky k členství v mnoha prestižních entomologických společnostech a on je neodmítal. Jako příklady lze uvést Německý entomologický spolek v Berlíně, Spolek slezských sběratelů hmyzu ve Vratislavi nebo Společnost pro faunu a floru v Helsinkách. Za největší společenské ocenění udělené za jeho vědecké zásluhy je však třeba považovat čestný titul císařského rady.</p>\n<p>Bohatou vrstevnatost osobnosti Edmunda Reittera dokládá i jeho stopa v krásné literatuře. V mládí psal poezii a ve svých dvaceti letech také vydal lyricky pojatou básnickou sbírku. Ke konci života se snad logicky v kontextu jeho životního příběhu a osobnostních vlastností přiklání k spiritistickému vnímání světa. Nikoli náhodou si tak při vědomí blížící se smrti sám velmi pečlivě připravil pohřební obřad a oznámení o úmrtí nechal rozeslat až po něm. To aby ušetřil své přátele nákladů na cestu i nebezpečí onemocnění v chladném počasí.</p>\n<p>Symbolický odkaz vedoucí až k téměř neuvěřitelně rozsáhlému dílu však hledejme v jeho přístupu k práci a životu, který v koncentrované zkratce vyjadřují dva citáty: „Vytrvalost vede k cíli“ a „Musíte mít jen odvahu, to je vše“.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/castles/edmund-reitter-clovek-a-filantrop/",
        "en": "https://www.qrlink.sk/new/en/castles/edmund-reitter-clovek-a-filantrop/",
        "de": "https://www.qrlink.sk/new/de/castles/edmund-reitter-clovek-a-filantrop/",
        "ru": "https://www.qrlink.sk/new/ru/castles/edmund-reitter-clovek-a-filantrop/",
        "pl": "https://www.qrlink.sk/new/pl/castles/edmund-reitter-clovek-a-filantrop/",
        "hu": "https://www.qrlink.sk/new/hu/castles/edmund-reitter-clovek-a-filantrop/"
      }
    },
    {
      "id": "edmund-reitter-odkaz-v-soudobem-paskove",
      "miesto": "klenoty-pohranicie",
      "poradie": 8,
      "nazov": "Edmund Reitter – odkaz v soudobém Paskově",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2023/11/7_Edmund-Reitter-v-kruhu-spolku-paskovských-hasičů.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2023/12/Reiter04.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Přestože byl Edmund Reitter po smrti svého syna a odchodu vnuka do zahraničí ve 40. letech 20. století téměř zapomenut, je současná rehabilitace jeho odkazu zcela na místě.</p>\n<p>Stává se tak po roce 1989, kdy se zásadně mění společenská situace, která je daleko více vstřícná k připomínání a poznávání některých osobností, včetně těch, které byly spojeny s německou národností, nebo jejich rodina odešla na západ.</p>\n<p>Již v 90. letech minulého století byla z iniciativy tehdejšího vedení města instalována na domě č. p. 35 na ulici Nádražní, ve kterém téměř 30 let Reitter žil a také v roce 1920 zemřel, kovová pamětní deska. Jejího výtvarného řešení se ujal akademický sochař Václav Fidrich. Ve stejném období vydává obecní úřad v Paskově drobnou, ale informačně velmi cennou publikaci Vzpomínka na entomologa Edmunda Reittera od autorů Jiřího Janáčka a Radima Šiguta.</p>\n<p>Další období, kdy Paskov připomíná svého slavného občana, přichází po odkupu areálu paskovského zámku a parku. Získáním a následnou revitalizací zámecké budovy získává město prostory pro stálé výstavy. Jedna z nich je vyčleněna pod názvem „Sál Edmunda Reittera“ připomenutí právě této osobnosti. Stylový nábytek z doby, kdy Reitter v Paskově žil, několik dochovaných fotografií, cyklus knih Fauna Germanica a drobné fragmenty z jeho sbírek brouků mají za cíl navodit iluzi vědcova rodinného a pracovního prostředí. Sál Edmunda Reittera byl zpřístupněn veřejnosti spolu s další stálou expozicí věnovanou historii Paskova v přízemí hlavní budovy u příležitosti 750. výročí od první dochované písemné zprávy o Paskovu – tj. v roce 2017. Později byl pro doplnění a zatraktivnění prohlídky této místnosti natočen o Reitterovi krátký hraný film.</p>\n<p>Od roku 2013 je osobnost Edmunda Reittera připomenuta také na jednom z panelů informačního systému Zajímavosti z historie Paskova. Na čtyřkilometrovém okruhu vyznačeném účelovou turistickou značkou pro naučné stezky přibližuje zájemcům v pořadí páté zastavení bývalou rozsáhlou rybniční soustavu, která náležela k paskovskému panství. Informace o Edmundu Reitterovi jako jejímu správci v období 70. let 19. století za majitele hraběte Mořice Saint-Genois na toto jeho postavení a na další aktivity poukazují.</p>\n<p>Posledním hmatatelným připomenutím světoznámého paskovského vědce jsou texty na lavičkách v zámeckém parku. Odkaz Edmunda Reittera je připomenut hned na třech z nich. Město Paskov tímto způsobem přibližuje svou historii od roku 2022.</p>\n<p>Zapomenout však nelze ani na některé společenské akce pro děti i dospělé zájemce, které čerpají inspiraci z historie. I v nich se občas „objevuje“ postava Edmunda Reittera.</p>\n<p>Přes veškeré uvedené aktivity však zůstává v platnosti konstatování českého přírodovědce Jiřího Hudečka, který ve svém textu o Edmundu Reitterovi zveřejněném u příležitosti 150. výročí od jeho narození uvedl, že na důstojné uctění památky tohoto vědce se stále čeká.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/castles/edmund-reitter-odkaz-v-soudobem-paskove/",
        "en": "https://www.qrlink.sk/new/en/castles/edmund-reitter-odkaz-v-soudobem-paskove/",
        "de": "https://www.qrlink.sk/new/de/castles/edmund-reitter-odkaz-v-soudobem-paskove/",
        "ru": "https://www.qrlink.sk/new/ru/castles/edmund-reitter-odkaz-v-soudobem-paskove/",
        "pl": "https://www.qrlink.sk/new/pl/castles/edmund-reitter-odkaz-v-soudobem-paskove/",
        "hu": "https://www.qrlink.sk/new/hu/castles/edmund-reitter-odkaz-v-soudobem-paskove/"
      }
    },
    {
      "id": "potomstvo-juraja-turza-2",
      "miesto": "klenoty-pohranicie",
      "poradie": 9,
      "nazov": "Potomstvo Juraja Turza",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2023/11/6.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2023/12/Tabula-06-2.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Juraj Turzo bol ženatý dvakrát, jeho prvou manželkou sa stala Žofia Forgáčová. Z päť rokov trvajúceho manželstva pochádzali tri deti, ale len dve dcéry Zuzana a Judita sa dožili dospelosti. Turzova prvá manželka náhle skonala v roku 1590. Jeho druhou manželkou sa o necelé dva roky neskôr stala Alžbeta Coborová. Je zaujímavé, že mali katolícky sobáš a aj Coborová pochádzala z katolíckeho rodu. Napriek rozdielnym konfesiám bolo manželstvo harmonické a vzišlo z neho deväť potomkov, z ktorých sa dospelosti dožilo päť dcér a predovšetkým syn, dedič a pokračovateľ rodu Imrich. Narodil sa v Bytči 11. septembra 1598. Na dvore bytčianskeho zámku ho vychovávali učitelia akými boli E. Láni, J. Nozitius či neskôr J. Spiegel  a F. Armpruster. Jeho ďalšie vzdelanie pokračovalo na univerzite vo Wittenbergu, kde  si ho profesorský zbor 8. októbra 1615 zvolil za rektora. Túto hodnosť zastával mladý Imrich len do 1. mája 1616, keď pre otcovu chorobu rezignoval a vrátil sa do Bytče. Po otcovej smrti sa Imrich podľa testamentu stal na základe princípu nedeliteľnosti majetkov ich dedičom. V roku 1618 sa Imrich oženil s Kristínou Ňáriovou. V tom istom roku sa ujal funkcie hlavného župana Oravskej stolice a bol zvolený aj za kráľovského tabulárneho sudcu. Na rozdiel od svojho otca sa stal stúpencom protihabsburského tábora a pôsobil v službách sedmohradského kniežaťa Gabriela Betlena ako jeho popredný hodnostár. Zúčastnil sa ako diplomat pri rôznych rokovaniach medzi cisárom a Betlenom. S podlomeným zdravím prišiel na mierové rokovania do Mikulova, kde 19. októbra 1621 zomrel. Zanechal po sebe dcéru Alžbetu, Kristína sa narodila až po jeho smrti. Ním rod Turzovcov vymrel po meči.</p>\n<p>Po smrti manželky Juraja Turza Alžbety Coborovej v marci 1626 sa ich dcéry Zuzana, Judita, Barbora, Helena, Mária, Katarína a Anna zišli na Lietavskom hrade, kde podpísali dokument, na základe ktorého vznikol Oravský komposesorát. Ten pozostával z celého oravského a štvrtiny lietavského panstva. Turzovské majetky mala spravovať vždy najstaršia dcéra so svojim manželom. Keďže v tom čase boli prvé tri dcéry vdovami, prvým riaditeľom Oravského komposesorátu sa stal Gašpar Ilešházi s manželkou Helenou Turzovou. Najstaršia Zuzana sa stala trikrát vdovou, Judita bola vydatá za Andreja Jakušiča, Barbora za Krištofa Erdödyho, manželom Heleny bol spomínaný Gašpar Ilešházi, Mária sa vydala za Michala Vizkeletyho, Katarína za Štefana Tököliho a najmladšia Anna tvorila manželský pár s Jánom Suňogom.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/castles/potomstvo-juraja-turza-2/",
        "en": "https://www.qrlink.sk/new/en/castles/potomstvo-juraja-turza-2/",
        "de": "https://www.qrlink.sk/new/de/castles/potomstvo-juraja-turza-2/",
        "ru": "https://www.qrlink.sk/new/ru/castles/potomstvo-juraja-turza-2/",
        "pl": "https://www.qrlink.sk/new/pl/castles/potomstvo-juraja-turza-2/",
        "hu": "https://www.qrlink.sk/new/hu/castles/potomstvo-juraja-turza-2/"
      }
    },
    {
      "id": "edmund-reitter-rodinne-zazemi-2",
      "miesto": "klenoty-pohranicie",
      "poradie": 10,
      "nazov": "Edmund Reitter – rodinné zázemí",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2023/11/4_Portrét-Edmunda-Reittera.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2023/12/Reiter01.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Edmund Reitter pocházel z německy mluvící rodiny. Narodil se v moravské Mohelnici 22. 10. 1845. Po smrti matky se jeho otec znovu oženil. Z tohoto manželství vzešli pro Edmunda dva nevlastní sourozenci – bratr Johan a sestra Marie.</p>\n<p>Rodinné prostředí, otec i děd pracovali jako lesníci, bylo od dětství pro malého Edmunda zázemím pro vytváření blízkého vztahu k přírodě.</p>\n<p>Již při studiu na reálném gymnáziu v Opavě začal tíhnout k entomologii, v rámci které se jeho orientace zacílila především na koleopterologii. První z uvedených slov cizího původů označuje vědu zabývající se hmyzem, druhé odbornou specializaci na brouky. K praktickým zájmům mladého Reittera v době mládí patřilo také zemědělství a rybnikaření.</p>\n<p>Svou první práci po dokončení studií nalezl po boku otce na panství hraběte Larisch-Mönnicha v Karviné. V roce 1869 vstoupil jako úředník do služeb majitele paskovského panství hraběte Mořice Saint-Genois. Díky svým přirozeným ambicím však brzy přešel z původního postavení moderně řečeno zaměstnance do daleko samostatnější pozice pachtýře rybníků.</p>\n<p>Jeho první manželství uzavřené v r. 1871 s Annou Kunte, dcerou sládka paskovského panského pivovaru, však nebylo naplněno šťastným příběhem. Nejprve mu brzy po porodu umírá dcera Thea (v roce 1872) a jen o něco později i manželka Anna (v roce 1873).</p>\n<p>Reitter však nezůstává dlouho sám a již necelý rok po smrti své první ženy vstupuje opět do manželství. Druhá manželka Hermína Nováková byla dcerou paskovského obchodníka. Z tohoto manželství vzešlo celkem šest dětí, ze kterých se pět dožilo dospělosti. Nejstarší Martha se narodila v roce 1875. Prvorozený syn Erich, který přišel na svět o rok později, však v šesti měsících zemřel. V roce 1880 se rodina rozrostla o syna Emmericha. Také jeho místem narození byl Paskov, byť to bylo již v době, kdy Reitter, tehdy již ponořen do vědecké práce a podnikatelských aktivit, přesídlil do Vídně a později do nedalekého Mödlingu. Paní Reitterová však následovala svého muže o něco později. Při pobytu v Mödlingu přišly u Reitterů na svět další dvě dcery, v roce 1883 Edith a o čtyři roky později Amanda Felicitas.</p>\n<p>Po smrti tchána a na naléhání manželky se rodina vrací v r. 1891 zpět do Paskova a usídluje se v domě č. p. 35, který se o šest let později stává jejich majetkem. Zde se v roce 1893 narodila poslední dcera Thea. Rodinné sídlo, tehdy po zámku největší obytný dům v Paskově, využíval Reitter nejen jako zázemí pro svou rodinu, ale také jako depozitář rozsáhlých sbírek brouků, knihovnu bohaté odborné literatury i sklad různých entomologických potřeb.</p>\n<p>Již za života Edmunda se entomologii začal věnovat také jeho syn Emmerich. Rodinná tradice se dočkala pokračování i ve třetí generaci, a to konkrétně v reálném zájmu o entomologii Emmerichova syna Evalda. Po smrti Emmericha v roce 1945 (zemřel a byl pohřben v Opavě) a odchodu Evalda v roce 1949 do západoněmeckého Mnichova se však reálné aktivity rodiny Reitterů v tehdejším Československu uzavírají.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/castles/edmund-reitter-rodinne-zazemi-2/",
        "en": "https://www.qrlink.sk/new/en/castles/edmund-reitter-rodinne-zazemi-2/",
        "de": "https://www.qrlink.sk/new/de/castles/edmund-reitter-rodinne-zazemi-2/",
        "ru": "https://www.qrlink.sk/new/ru/castles/edmund-reitter-rodinne-zazemi-2/",
        "pl": "https://www.qrlink.sk/new/pl/castles/edmund-reitter-rodinne-zazemi-2/",
        "hu": "https://www.qrlink.sk/new/hu/castles/edmund-reitter-rodinne-zazemi-2/"
      }
    },
    {
      "id": "rozhladna-tabor",
      "miesto": "knm",
      "poradie": 1,
      "nazov": "Rozhľadňa Tábor",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2022/08/tabor.png",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2022/09/rozhladna-tabor.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2600.5853598694816!2d18.768725688647475!3d49.32213557521233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5e43da6c3837017c!2zNDnCsDE5JzIxLjkiTiAxOMKwNDYnMTUuMSJF!5e0!3m2!1ssk!2ssk!4v1660064468331!5m2!1ssk!2ssk",
      "text": "<p>Nadmorská výška: 697 metrov, rok postavenia: 2015</p>\n<p>Vrchol Tábora s nadmorskou výškou 697 m n. m. je dominantou Kysuckého Nového Mesta. Od roku 2015 je na ňom vystavaná mohutná, štvorposchodová drevená rozhľadňa a 50-timi schodmi. Pri stúpaní do kopca sa nám otvárajú výhľady na Kysucké Nové Mesto, z rozhľadne vidíme ďalej Poľanu, Budatínsku Lehotu, Vreteň, tzv. Kysuckú bránu a samozrejme i Malú Fatru.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/rozhladna-tabor/",
        "en": "https://www.qrlink.sk/new/en/rozhladna-tabor/",
        "de": "https://www.qrlink.sk/new/de/rozhladna-tabor/",
        "ru": "https://www.qrlink.sk/new/ru/rozhladna-tabor/",
        "pl": "https://www.qrlink.sk/new/pl/rozhladna-tabor/",
        "hu": "https://www.qrlink.sk/new/hu/rozhladna-tabor/"
      }
    },
    {
      "id": "kysucka-hvezdaren",
      "miesto": "knm",
      "poradie": 2,
      "nazov": "Kysucká hvezdáreň",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2022/08/krajska-hvezdaren-zilina59999427.png",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2022/09/Kysucka-hvezdaren.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2601.365512497397!2d18.763212815690366!3d49.307361279334096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4714432d1b5b4e9f%3A0x992ac2d9601869cf!2zS3JhanNrw6EgaHZlemTDoXJlxYggdiDFvWlsaW5l!5e0!3m2!1ssk!2ssk!4v1663696484685!5m2!1ssk!2ssk",
      "text": "<p>Kysucká hvezdáreň je regionálna kultúrna inštitúcia, ktorej hlavným poslaním je odborno-pozorovateľská činnosť v oblasti astronómie a popularizácia astronómie a príbuzných prírodných a technických vied rôznymi formami podujatí pre široký okruh obyvateľov. Hvezdáreň organizuje exkurzie, prednášky pre rôzne vekové stupne pre školy a verejnosť, besedy k aktuálnym objavom a úkazom, denné a nočné pozorovanie oblohy pre verejnosť, premietanie vedecko-populárnych filmov a pod. Hvezdáreň sa dlhodobo zúčastňuje na mnohých medzinárodných aktivitách a pozorovaniach. V jej priestoroch nájdete stálu expozíciu Vesmír očami detí.</p>\n<p>Hvezdáreň sa nachádza v miestnej časti Suľkov. Viac informácií na: <a href=\"http://www.astrokysuce.sk\">www.astrokysuce.sk</a> alebo t.č. 041/421 2946</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/kysucka-hvezdaren/",
        "en": "https://www.qrlink.sk/new/en/kysucka-hvezdaren/",
        "de": "https://www.qrlink.sk/new/de/kysucka-hvezdaren/",
        "ru": "https://www.qrlink.sk/new/ru/kysucka-hvezdaren/",
        "pl": "https://www.qrlink.sk/new/pl/kysucka-hvezdaren/",
        "hu": "https://www.qrlink.sk/new/hu/kysucka-hvezdaren/"
      }
    },
    {
      "id": "kastiel-v-radoli",
      "miesto": "knm",
      "poradie": 3,
      "nazov": "Kaštieľ v Radoli",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2022/08/radola.png",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2022/09/Kastiel-v-radoli.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 49.295734,
        "lng": 18.788351
      },
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2601.9793672482356!2d18.786162315630087!3d49.295733979332674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6441ca865d586922!2zNDnCsDE3JzQ0LjYiTiAxOMKwNDcnMTguMSJF!5e0!3m2!1ssk!2ssk!4v1660064857806!5m2!1ssk!2ssk",
      "text": "<p>Kaštieľ v Radoli je renesančná stavba v obci Radoľa, okres Kysucké Nové Mesto.</p>\n<p>Prvá zmienka o kaštieli pochádza z roku 1575. Radoľa s kúriou sa znovu spomína v roku 1580. Kaštieľ vo svojej najstaršej fáze mal podobu vežovitej stavby so štvorcovým pôdorysom, s dvoma podlažiami a pivnicou.</p>\n<p>V roku 1658 bol kaštieľ prestavaný – k pôvodnej vežovitej stavbe bolo pristavaná časť s veľkou sieňou na oboch podlažiach a s niekoľkými obytnými miestnosťami radenými za sebou, bočný trakt s ďalšími miestnosťami, a k najstaršej časti bol pristavaný arkier murovaný z tehál. Niektoré okná boli zväčšené, iné zamurované, maľovanú výzdobu nahradili šambrány a rímsy vymurované z tehál, celú fasádu napokon zjednotili do jedného tónu v okrovej farebnosti.</p>\n<p>V urbári z roku 1710 sa kaštieľ spomína ako poschodový, s komnatami, dvoma pivnicami, kaplnkou, kuchyňou, izbou pre kuchárov, ďalšou izbou pre pekára a bola tu aj pekárenská pec. Kaplnka slúžila pre potreby zemepána, vstupovalo sa do nej zo súkromnej komnaty.</p>\n<p>Koncom 18. storočia boli v kaštieli urobené drobné úpravy (delenie niektorých miestností), ktoré pravdepodobne súviseli s jeho využívaním ako sídla pre úradníkov.</p>\n<p>Na začiatku 20. storočia zhorela strecha kaštieľa, pri obnove boli v miestnostiach horného podlažia urobené nové trámové stropy.</p>\n<p>Objekt bol zapísaný do zoznamu národných kultúrnych pamiatok.</p>\n<p>Od roku 1983 slúži ako miesto pre stále expozície Kysuckého múzea. Slúži aj ako miesto pre výstavy a prednášky.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/kastiel-v-radoli/",
        "en": "https://www.qrlink.sk/new/en/kastiel-v-radoli/",
        "de": "https://www.qrlink.sk/new/de/kastiel-v-radoli/",
        "ru": "https://www.qrlink.sk/new/ru/kastiel-v-radoli/",
        "pl": "https://www.qrlink.sk/new/pl/kastiel-v-radoli/",
        "hu": "https://www.qrlink.sk/new/hu/kastiel-v-radoli/"
      }
    },
    {
      "id": "martakov-kopec-rozhladna-zakopcie",
      "miesto": "knm",
      "poradie": 4,
      "nazov": "Martákov kopec- Rozhľadňa Zákopčie",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2022/08/Marťákov-kopec.png",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2022/09/Martakov-kopec.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2597.704347520183!2d18.72975531563311!3d49.37666697934162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaa597fb96b6f0f77!2zNDnCsDIyJzM2LjAiTiAxOMKwNDMnNTUuMCJF!5e0!3m2!1ssk!2ssk!4v1660065094533!5m2!1ssk!2ssk",
      "text": "<p>Nadmorská výška: 854 metrov, výška rozhľadne: 14 metrov, rok postavenia: 2011</p>\n<p>Nachádza sa na vrchole Marťákovho kopca v Javorníkoch. Z rozhľadne sa naskytá výhľad na takmer celé Kysuce, blízke Zákopčie (sever), na Moravsko-sliezske Beskydy (severozápad) s dominantnou Lysou horou (vysielač), Kysucké Beskydy (severovýchod), Kysuckú vrchovinu, Oravskú Maguru (východ), Malú Fatru (juhovýchod) a pri dobrej viditeľnosti aj na vrcholky Západných Tatier na juhovýchodnom obzore. Blízko rozhľadne sa nachádza drevený kríž a turistický prístrešok na oddych.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/martakov-kopec-rozhladna-zakopcie/",
        "en": "https://www.qrlink.sk/new/en/martakov-kopec-rozhladna-zakopcie/",
        "de": "https://www.qrlink.sk/new/de/martakov-kopec-rozhladna-zakopcie/",
        "ru": "https://www.qrlink.sk/new/ru/martakov-kopec-rozhladna-zakopcie/",
        "pl": "https://www.qrlink.sk/new/pl/martakov-kopec-rozhladna-zakopcie/",
        "hu": "https://www.qrlink.sk/new/hu/martakov-kopec-rozhladna-zakopcie/"
      }
    },
    {
      "id": "rozhladna-luby",
      "miesto": "knm",
      "poradie": 5,
      "nazov": "Rozhľadňa Luby",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2022/08/Rozhladna-Luby.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2022/09/Rozhladna-lubi.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2599.0548195652!2d18.527255315632107!3d49.35111097933872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5bba2c936e469e39!2zNDnCsDIxJzA0LjAiTiAxOMKwMzEnNDYuMCJF!5e0!3m2!1ssk!2ssk!4v1660065196116!5m2!1ssk!2ssk",
      "text": "<p>Nadmorská výška: 908 metrov, výška rozhľadne: 20 metrov, rok postavenia: 2012</p>\n<p>Rozhľadňa sa nachádza hlavnom hrebeni Javorníkov, medzi obcami Veľké Rovné a Vysoká nad Kysucou na vrchu Luby. Je to drevená protipožiarna rozhľadňa a vstup na ňu je zakázaný. Krásne výhľady si však užijete aj spod rozhľadne.</p>\n<p>Vrch Luby má dva vrcholy. Práve na nižšom z nich (908 m n. m.) sa nachádza 20,5 metrová drevená rozhľadňa. Časť vrchu je odlesnená, preto sa výhľady na vrcholy Moravsko-sliezskych Beskýd otvárajú už priamo pod rozhľadňou. Od rozhľadne vedie turistický chodník spájajúci roztrúsené osady obce Veľké Rovné.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/rozhladna-luby/",
        "en": "https://www.qrlink.sk/new/en/rozhladna-luby/",
        "de": "https://www.qrlink.sk/new/de/rozhladna-luby/",
        "ru": "https://www.qrlink.sk/new/ru/rozhladna-luby/",
        "pl": "https://www.qrlink.sk/new/pl/rozhladna-luby/",
        "hu": "https://www.qrlink.sk/new/hu/rozhladna-luby/"
      }
    },
    {
      "id": "chranena-lipa",
      "miesto": "knm",
      "poradie": 6,
      "nazov": "Chránená lipa",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2022/08/lipa1.png",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2022/09/Chranena-lipa.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Jeden z prvých dvoch chránených stromov na Kysuciach je lipa malolistá (Tilia Cordata) rastúca na severnom okraji intravilánu mesta a má viac ako 300 rokov. Lipa malolistá bola pravdepodobne vysadená ako hraničný strom chotára mesta. Poprsný obvod lipy je 582 cm, pri koreňoch 693 cm. Strom má výšku 23 metrov a obvod koruny 22 metrov.</p>\n<p>V roku 1848 pred bojom s maďarským vojskom pod ňou vraj nocovali slovenskí dobrovoľníci. Lipa je živým symbolom histórie Kysúc s vysokou krajinársko-estetickou funkciou. Prechádzka k lipe je výborným relaxom.</p>\n<p>Ďalšími chránenými stromami na území mesta sú dve lipy veľkolisté na Litovelskej ulici.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/chranena-lipa/",
        "en": "https://www.qrlink.sk/new/en/chranena-lipa/",
        "de": "https://www.qrlink.sk/new/de/chranena-lipa/",
        "ru": "https://www.qrlink.sk/new/ru/chranena-lipa/",
        "pl": "https://www.qrlink.sk/new/pl/chranena-lipa/",
        "hu": "https://www.qrlink.sk/new/hu/chranena-lipa/"
      }
    },
    {
      "id": "kraj-rusinov-a-andyho-warhola-vystahovalectvo",
      "miesto": "kraj-rusinov",
      "poradie": 1,
      "nazov": "Vysťahovalectvo",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2026/06/vystahovalectvo-1.jpg",
      "audio": [],
      "galeria": [
        "https://www.qrlink.sk/new/wp-content/uploads/2026/06/europsky-emigranti-habura.jpg",
        "https://www.qrlink.sk/new/wp-content/uploads/2026/06/habura-foto-vystahovalectvo.jpg"
      ],
      "gps": {
        "lat": 49.32246968713569,
        "lng": 21.85219682449781
      },
      "mapEmbed": "https://www.google.com/maps?q=49.32246968713569,21.85219682449781&z=14&output=embed",
      "text": "<p>Na prelome 19. a 20. storočia sa z dedín dnešného okresu Medzilaborce čoraz častejšie odchádzalo za oceán. Amerika nebola symbolom dobrodružstva, ale nádejou na lepší život. Mladí muži aj celé rodiny opúšťali Mikovú, Haburu, Medzilaborce a ďalšie rusínske obce v presvedčení, že si zarobia a vrátia sa domov. Mnohí však zostali v Spojených štátoch natrvalo.</p>\n<p>A práve medzi nimi boli aj rodičia jedného z najvýznamnejších umelcov 20. storočia – Andyho Warhola.</p>\n<p>Prečo sa rozhodli odísť</p>\n<p>Koncom 19. storočia žila väčšina obyvateľov severovýchodného Slovenska z drobného hospodárstva. Pôdy bolo málo, pracovných príležitostí ešte menej a mnohé rodiny žili na hranici chudoby.</p>\n<p>V rovnakom období prudko rástol americký priemysel, ktorý potreboval tisíce robotníkov. Hoci práca v baniach a oceliarňach bola náročná, ponúkala zárobok, aký si doma mnohí nevedeli predstaviť. Amerika sa tak pre mnohé rodiny stala jedinou reálnou šancou na lepší život.</p>\n<p>Vysťahovalectvo zasiahlo prakticky celé územie dnešného okresu Medzilaboriec. Silne ovplyvnilo najmä rusínske obce ako sú Miková, Habura, Čertižné, Ňagov či Radvaň nad Laborcom.</p>\n<p>V niektorých dedinách odišiel do Ameriky minimálne jeden člen takmer z každej rodiny. Historické pramene uvádzajú, že z Mikovej odišla do začiatku prvej svetovej vojny približne tretina obyvateľov. V rokoch 1890 – 1914 sa za oceán vysťahovalo približne 225 000 karpatských Rusínov.</p>\n<p>Cesta za oceán</p>\n<p>Cesta do Ameriky nebola jednoduchá. Väčšina vysťahovalcov z regiónu cestovala vlakom do veľkých európskych prístavov, najmä do Hamburgu a Brém, odkiaľ pokračovala parníkmi cez Atlantik do Spojených štátov. Po príchode do New Yorku absolvovali zdravotné prehliadky a administratívne kontroly na ostrove Ellis Island.</p>\n<p>Mnohí následne smerovali do priemyselných miest, ako Pittsburgh či Cleveland, kde už existovali početné komunity prisťahovalcov z Karpát.</p>\n<p>Európski emigranti po príchode do Spojených štátov začiatkom 20. storočia, zdroj: <a href=\"https://time.com/\">https://time.com/</a>.</p>\n<p>Príbeh rodiny Warholovcov</p>\n<p>Jedným z tisícov vysťahovalcov bol aj Andrej Varchola z Mikovej. Do Spojených štátov odišiel za prácou začiatkom 20. storočia. O niekoľko rokov ho nasledovala jeho manželka Júlia Zavacká, ktorá pochádzala z tej istej obce.</p>\n<p>Usadili sa v Pittsburghu, kde sa im narodili traja synovia. Najmladší z nich, Andrew Warhola, sa narodil v roku 1928 a svet ho neskôr spoznal pod menom Andy Warhol.</p>\n<p>Vízum Júlie Warholovej do Spojených štátov amerických, zdroj: Petra Tóth Atelier.</p>\n<p>Júlia Warholová (rod. Zavacká) so synmi Johnom a Andrewom (neskôr Andym Warholom, vpravo), zdroj: <a href=\"https://www.rusyn.sk/\">https://www.rusyn.sk/</a>.</p>\n<p>Hoci sa Andy narodil v Amerike, vyrastal v rusínskej rodine. Doma sa hovorilo rusínsky, zachovávali sa gréckokatolícke tradície a významný vplyv na jeho vzťah k umeniu mala práve matka Júlia.</p>\n<p>Tému vysťahovalectva z tohto regiónu dnes približuje aj Náučný chodník Kraj Rusínov a Andyho Warhola, ktorý vedie z Habury smerom k hranici katastrálnych území Habury a Mikovej.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/kraj-rusinov-a-andyho-warhola-vystahovalectvo/",
        "en": "https://www.qrlink.sk/new/en/kraj-rusinov-a-andyho-warhola-vystahovalectvo/",
        "de": "https://www.qrlink.sk/new/de/kraj-rusinov-a-andyho-warhola-vystahovalectvo/",
        "ru": "https://www.qrlink.sk/new/ru/kraj-rusinov-a-andyho-warhola-vystahovalectvo/",
        "pl": "https://www.qrlink.sk/new/pl/kraj-rusinov-a-andyho-warhola-vystahovalectvo/",
        "hu": "https://www.qrlink.sk/new/hu/kraj-rusinov-a-andyho-warhola-vystahovalectvo/"
      }
    },
    {
      "id": "kraj-rusinov-a-andyho-warhola-tazba-ropy-v-regione",
      "miesto": "kraj-rusinov",
      "poradie": 2,
      "nazov": "Ťažba ropy v Regióne",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2026/06/Miková.jpg",
      "audio": [],
      "galeria": [
        "https://www.qrlink.sk/new/wp-content/uploads/2026/06/Pohľad-na-bane-v-Mikovej.jpg",
        "https://www.qrlink.sk/new/wp-content/uploads/2026/06/Mikova-zvyšky-studní.jpg"
      ],
      "gps": {
        "lat": 49.322560596913995,
        "lng": 21.848361265647892
      },
      "mapEmbed": "https://www.google.com/maps?q=49.322560596913995,21.848361265647892&z=14&output=embed",
      "text": "<p>Málokto vie, že severovýchod Slovenska patrí k najstarším oblastiam ťažby ropy v strednej Európe. Jedným z najvýznamnejších miest bola obec Miková, kde sa ropa prirodzene objavovala na povrchu zeme už stáročia.</p>\n<p>Miestni obyvatelia si všimli čiernu tekutinu vytekajúcu zo zeme v lokalite Dychtivka a potok, do ktorého vytekala, nazvali Ripné. Spočiatku netušili, že ide o cennú surovinu. Ropu využívali najmä ako liečivo pre dobytok alebo na mazanie vozov.</p>\n<p>Foto: Obec Miková, r. 1936.</p>\n<p>Od prírodných prameňov k priemyselnej ťažbe</p>\n<p>Prvá známa písomná zmienka o výskyte ropy v okolí Mikovej pochádza z roku 1684. Záznamy z roku 1742 hovoria o jej čistení a destilácii. Skutočný rozvoj však nastal až na prelome 19. a 20. storočia, keď geológovia potvrdili perspektívnosť ložísk v okolí Mikovej a Habury.</p>\n<p>V roku 1911 sa začala moderná ťažba z prvých vrtov Alexander a Magdaléna. Po vzniku Československa pokračoval geologický prieskum a francúzska spoločnosť Société Anonyme des Pétroles de Mikova otvorila ďalšie vrty. Spočiatku sa z najúspešnejšieho vrtu denne získavali približne 4 tony ropy.</p>\n<p>Pohľad na bane v Mikovej, zdroj: <a href=\"http://www.mikova.sk/sk/ukazka-strany-2\">www.mikova.sk/sk/ukazka-strany-2</a>.</p>\n<p>Ropa strategickou surovinou</p>\n<p>Najväčší význam mala mikovská ropa počas oboch svetových vojen. V roku 1941 pokračovalo vŕtanie vrtu Matej V, ktorý dosiahol hĺbku 1 368,9 metra a stal sa jedným z najhlbších a najvýkonnejších vrtov na východnom Slovensku. Len z vrtu Matej I sa v rokoch 1941 – 1943 vyťažilo približne 12 900 ton ropy.</p>\n<p>Podľa spomienok obyvateľov a historických záznamov sa v Mikovej počas existencie bane vyťažilo približne 226 600 ton kvalitnej parafínovej ropy, ktorá obsahovala vysoký podiel benzínových zložiek.</p>\n<p>Vplyv ťažby ropy na život v Mikovej</p>\n<p>Objavenie ropy prinieslo do dovtedy poľnohospodárskej obce nové pracovné príležitosti. Miestni obyvatelia našli zamestnanie pri vrtných prácach, obsluhe zariadení aj údržbe bane. Do Mikovej prichádzali odborníci z rôznych krajín a obec sa na niekoľko desaťročí zaradila medzi významné ropné lokality severovýchodného Slovenska.</p>\n<p>Koniec ťažby</p>\n<p>Po druhej svetovej vojne sa ukázalo, že ďalšia ťažba už nie je ekonomicky výhodná. Baňa bola 14. septembra 1951 uzavretá a o dva roky neskôr prešla do likvidácie. Hoci sa v roku 1998 uskutočnil ešte jeden prieskumný vrt Alexander-1, komerčne využiteľné množstvo ropy sa už nepotvrdilo.</p>\n<p>Hoci sa ťažba ropy skončila, jej stopy sa v kraji zachovali dodnes. Pozostatky niekdajších vrtov, lokality Dychtivka a Ripné či ďalšie miesta spojené s históriou ťažby ropy približuje návštevníkom Náučný chodník Kraj Rusínov a Andyho Warhola.</p>\n<p>Mikova-zvyšky studní od 1911 do 1943, zdroj: J. Milicka.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/kraj-rusinov-a-andyho-warhola-tazba-ropy-v-regione/",
        "en": "https://www.qrlink.sk/new/en/kraj-rusinov-a-andyho-warhola-tazba-ropy-v-regione/",
        "de": "https://www.qrlink.sk/new/de/kraj-rusinov-a-andyho-warhola-tazba-ropy-v-regione/",
        "ru": "https://www.qrlink.sk/new/ru/kraj-rusinov-a-andyho-warhola-tazba-ropy-v-regione/",
        "pl": "https://www.qrlink.sk/new/pl/kraj-rusinov-a-andyho-warhola-tazba-ropy-v-regione/",
        "hu": "https://www.qrlink.sk/new/hu/kraj-rusinov-a-andyho-warhola-tazba-ropy-v-regione/"
      }
    },
    {
      "id": "o-hlinenom-v-najstarsich-casoch",
      "miesto": "nch-hlinene",
      "poradie": 1,
      "nazov": "O Hlinenom v najstarších časoch",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2023/08/Hlinené-1..png",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2023/09/01-01-O-hlinenom-v-najstarsich-casoch.mp3"
      ],
      "galeria": [
        "https://www.qrlink.sk/new/wp-content/uploads/2023/09/obalka-03.png"
      ],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Patrí k najstarším mestským častiam Turzovky. Tvorí severnú a väčšiu časť východnej hranice jej katastra. Zo severu susedí s obcou Klokočov, z východu s Olešnou. V písomných prameňoch sa spomína od konca 16. storočia v rôznych podobách. Etymológia názvu je zreteľná, toponymum je odvodené z adjektíva hlinené (miesto) &gt; Hlinené.</p>\n<p>V druhej polovici 16. storočia slúžila táto oblasť ako pastviny pre valašský dobytok. Salaše tu stavali poddaní budatínskeho zemepána, ktorí so stádami prechádzali Javorníky z Nesluše a Diviny. Keďže v tom čase neboli pohraničné oblasti riadne vymedzené, dochádzalo v nich k stretom i ozbrojeným násilnostiam medzi poddanými susediacich panstiev. Hlinené sa v takýchto súvislostiach spomína v roku 1584 a potom aj v roku 1592. V roku 1584 salaše postavené vo Vrch Hlinenom prepadli a vyplienili poddaní tešínskej kňažnej. V roku 1592 zase utrpel salaš Martina Mičeka v Hlinenom, odkiaľ poddaní a drábi Juraja Turza odviedli 12 baranov, vzali šesť hrúd syra vlnu a dve sekery.  Na konci 16. storočia zemepán Juraj Turzo založil Turzovku ako určitú hrádzu proti prenikaniu budatínskych valachov na územia, ktoré považoval za svoje majetky. Ani bezprostredne po jej vzniku nebolo všetkému koniec a spory pokračovali. V máji 1601 bolo vedené vyšetrovanie sporov medzi panstvami Bytča a Budatín, v ktorom vypovedalo viacero svedkov. Niektoré z ich výpovedí uvádzame na dokreslenie situácie: První svedek Jura Drahoš, 60-ročný, od Rožnova &#8230; pod prísahu vyznal, že ty jiste vrchy po Predmyer, Hlynenne, Bahan a Bruhovy užívali k zámku budatinskemu slobodne &#8230;</p>\n<p>Dvanácty svedek Ďuro Bakoš z Krásna, asi 45-ročný &#8230; pod prísahu vyznal, že sluhuval v Nesluši &#8230; a že za mladych časov svých pásal slobodne na Bahenej, na Hlinenej, na Dluhej a žadni jim neprekážal&#8230;   Ešte v tom istom roku uzatvoril Juraj Turzo ako bytčiansky zemepán dohodu so svojim susedom z Budatínom Mojžišom Suňogom dohodu o nových hraniciach, ktoré sa posunuli z potoka Predmier (dn. Predmieranka) na východ a novou hranicou medzi panstvami sa stala riečka Olešnianka. Táto nová hranica je potom potvrdená aj vo výsadnej listine, ktorú Turzo vydal obyvateľom Turzovky vo februári 1602.</p>\n<p>Názov projektu: Po stopách kulturně -přírodního dědictví česko-slovenskeho regionu,</p>\n<p>Kód projektu:NFP304030BMA2</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/o-hlinenom-v-najstarsich-casoch/",
        "en": "https://www.qrlink.sk/new/en/o-hlinenom-v-najstarsich-casoch/",
        "de": "https://www.qrlink.sk/new/de/o-hlinenom-v-najstarsich-casoch/",
        "ru": "https://www.qrlink.sk/new/ru/o-hlinenom-v-najstarsich-casoch/",
        "pl": "https://www.qrlink.sk/new/pl/o-hlinenom-v-najstarsich-casoch/",
        "hu": "https://www.qrlink.sk/new/hu/o-hlinenom-v-najstarsich-casoch/"
      }
    },
    {
      "id": "svetlonos",
      "miesto": "nch-hlinene",
      "poradie": 2,
      "nazov": "Svetlonos",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2023/08/received_1981576642221183.jpeg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2023/09/04-04-svetlonos.mp3"
      ],
      "galeria": [
        "https://www.qrlink.sk/new/wp-content/uploads/2023/09/obalka-03.png"
      ],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Svetlonos bol veľmi rozšírenou démonickou bytosťou. Mal rôzne pomenovania: svetlonos, svetielko, bludička, svetlá noc. Svetlonos patril medzi podzemné a zlé bytosti podobne ako rarach, bes, ďas a pod. Objavoval sa v noci v lesných húštinách, pri mokradiach (trasafkách) a v blízkosti vodných zdrojov. Niekde mal podobu malého chlapca so žeravými očami, ktorý pred pozorovateľom rástol do nadprirodzenej veľkosti. Zvádzal ľudí zo správnej cesty, vábil do močiarov, vodil ich po poliach, cez skálie a tŕnie či po cintorínoch. Lákal nielen svetlom, ale aj plačom či volaním po mene. Svetlonosmi sa údajne stávali po smrti zlí, nežičliví ľudia, takí, ktorí iným odorávali z polí či takí, čo krivo prisahali na Bibliu a za trest im horeli dva prsty. Úmyselne alebo nechtiac ho mohol privolať človek, ktorý po zotmení zahvízdal. Preto sa ľudia stránili pískať v noci. Traduje sa, že zbaviť sa ho človek mohol prežehnaním, oľutovaním svojho previnenia či odrobinami zo štedrovečerného stola. Svetlonos strácal nad človekom moc, keď sa ten ukryl pod strechu, alebo keď sa začalo brieždiť. Vtedy svetlonos stratil svoju moc a povodeného nechal tak. Hoci by sa mohlo zdať, že pomenovanie svetlonosa pochádza z toho, že mu svieti nos, nie je to tak. Slovenské slovo svetlonos je doslovný preklad latinského Lucifer (lat. lux – svetlo, ferre – nosiť, prenášať) – nositeľ svetla, svetlonosič.</p>\n<p>O stretnutí so svetlonosom hovorí aj krátky príbeh z roku 1930: Raz istý muž videl večer pobehovať svetlonosa kdesi blízko domu. I vyšiel von a zapískal, hneď však zas rýchlo vbehol do izby. A tu už dupy, dup – svetlonos začal behať okolo okien a menom volal toho muža: „Jozefe, poď von! Jozefe, poď von!“ Jozef sa však ani nehol z miesta, len sa tak od strachu triasol, čo s ním bude. Hoci vedel, že pod strechou je chránený od moci svetlonosa. Keď sa svetlonos nemohol dočkať, omrzelo ho podaromnici okolo domu naprázdno pobehovať, stratil sa a viac neprišiel. Však ani náš milý Jozef sa už nikdy neopovážil na svetlonosa zapískať.</p>\n<p>Názov projektu: Po stopách kulturně -přírodního dědictví česko-slovenskeho regionu,</p>\n<p>Kód projektu:NFP304030BMA2</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/svetlonos/",
        "en": "https://www.qrlink.sk/new/en/svetlonos/",
        "de": "https://www.qrlink.sk/new/de/svetlonos/",
        "ru": "https://www.qrlink.sk/new/ru/svetlonos/",
        "pl": "https://www.qrlink.sk/new/pl/svetlonos/",
        "hu": "https://www.qrlink.sk/new/hu/svetlonos/"
      }
    },
    {
      "id": "zakopy",
      "miesto": "nch-hlinene",
      "poradie": 3,
      "nazov": "Zákopy",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2023/08/rtzrtzrt.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2023/09/05-05-zakopy.mp3"
      ],
      "galeria": [
        "https://www.qrlink.sk/new/wp-content/uploads/2023/09/obalka-03.png"
      ],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Turzovka sa síce dostala do kontaktu s nemeckým vojskom už na začiatku druhej svetovej vojny, keď tadiaľto prechádzalo v súvislosti s útokom na Poľsko. Bojové akcie sa na území mesta odohrávali až počas rokov 1944 – 45 počas Slovenského národného povstania a neskôr i v priebehu oslobodzovania. V Turzovke a jej okolí vznikli počas vojny rôzne ilegálne a partizánske skupiny. V septembri 1944 z príkazu Nemeckej brannej moci boli nariadené povinné práce pri kopaní zákopov. Každá obec mala vyslať určený počet ľudí, pre Turzovku bolo stanovených, vzhľadom na počet obyvateľov, 800 pracovníkov. Od tejto povinnosti boli oslobodené len osoby, ktoré boli zamestnané v dôležitom podniku, choré a práce neschopné osoby a tie, ktoré viedli domácnosť. V októbri 1944 bolo vydané nariadenie, ktoré nesplnenie povinnosti trestalo odoslaním do najbližšieho tábora ako „asociálny živel.“ Začiatkom októbra bolo z Turzovky nasadených na opevňovacie práce vo Svrčinovci 905 mužov a 260 žien. Asi v tom istom období boli tieto práce vykonávané aj na území mesta a obec bola povinná vyplácať robotníkom mzdu. Pozostatky zákopov možno vidieť i na tomto mieste.</p>\n<p>Prvé bojové stretnutia medzi nemeckými jednotkami a partizánmi sa odohrali na konci októbra 1944 v Kline a na Hlaviciach, ktoré s Hlineným susedia. Obec musela nemecké vojsko zásobovať drevom, uhlím, okrem toho boli obyvatelia povinní vykonávať povoznícke práce, odovzdávať seno a iné naturálie. Partizáni pôsobili aj na Košariskách v Hlinenom, odkiaľ organizovali výpady na Nemcov. V centre vojsko obsadilo pre vlastnú potrebu budovy ľudovej i meštianskej školy  a tiež budovu sociálneho domu sv. Jozefa. Boje prebiehali až do jari 1945. Vojenské jednotky 18. sovietskej armády generál-poručíka A. I. Gastiloviča 30. apríla 1945 dobyli Kysucké Nové Mesto a odtiaľ cez Neslušu a Dlhú nad Kysucou postupovali na Turzovku. Na druhý deň prebiehali boje na Vyšnom Konci a 2. mája 1945 bola obce oslobodená. V tomto celosvetovom konflikte padlo na bojiskách a v zázemí 64 obyvateľov Turzovky (vrátane Klokočova a Korne) a ďalších sedem obetí pochádzalo z Turkova a Dlhej, ktoré boli k Turzovke pripojené v roku 1948. Doposiaľ identifikovaných židovských obetí pochádzajúcich alebo bývajúcich v obci bolo 74.</p>\n<p>Názov projektu: Po stopách kulturně -přírodního dědictví česko-slovenskeho regionu,</p>\n<p>Kód projektu:NFP304030BMA2</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/zakopy/",
        "en": "https://www.qrlink.sk/new/en/zakopy/",
        "de": "https://www.qrlink.sk/new/de/zakopy/",
        "ru": "https://www.qrlink.sk/new/ru/zakopy/",
        "pl": "https://www.qrlink.sk/new/pl/zakopy/",
        "hu": "https://www.qrlink.sk/new/hu/zakopy/"
      }
    },
    {
      "id": "hlinensky-potok",
      "miesto": "nch-hlinene",
      "poradie": 4,
      "nazov": "Hlinenský potok",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2023/08/received_1353598935231418.jpeg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2023/09/06-06-hlinensky-potok.mp3"
      ],
      "galeria": [
        "https://www.qrlink.sk/new/wp-content/uploads/2023/09/obalka-03.png"
      ],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Na tomto mieste (južne od vrchu Hlinené, 875 m n. m.) začína svoju púť Hlinenský potok (č. hydrologického poradia 4-21-06-034), ktorý obojstranne do svojho koryta prijíma ďalšie bezmenné potôčiky a jarčeky. Z ľavej strany doliny priteká desať prítokov, z pravej deväť. Potok tečie mestskou časťou Hlinené v severo-južnej línii. Samotný Hlinenský potok je ľavobrežným prítokom Kysuce. Jeho ústie sa nachádza Pod Kempou pri vyústení doliny Hlinené v Turzovke. Dĺžka toku je takmer 4 km. V písomných prameňoch sa spomína napr.  v roku 1769 ako Hliniana, 1793 – rivus (potok) Hlinena či 1824 – Hlinana. Názov dostal potok od terénneho pomenovania lokality Hlinené &gt; adjektívum hlinenský + apelatívum potok &gt; Hlinenský potok. Pomenovanie Hlinené je odvodené z apelatíva hlina &gt; hlinené (miesto) &gt; Hlinené. Motiváciou bolo hlinené miesto.</p>\n<p>Hoci Hlinenský potok zväčša nemá veľké prietoky, v čase intenzívnych zrážok a jarného topenia snehu v oblasti Turzovskej vrchoviny dochádza k náhlemu zvýšeniu objemu odtoku povrchových vôd, čo spôsobuje výrazné zvyšovanie jeho hladiny. Nadmerné množstvo týchto vôd zo spádovej oblasti, navýšené lokálnymi prítokmi v hornej časti povodia toku, niekedy môžu spôsobovať v zastavanej časti eróziu svahov a pri zvyšovaní prietokov i vyliatie potoka z koryta. Potok má charakter horskej bystriny, v minulosti tu žili raky, pstruhy a iné vodné živočíchy, ktoré sú citlivé na čistotu vody. V Hlinenskom potoku má aktuálne znečistenie a kolísanie hladiny vplyv na faunu typických vodných druhov. Pri vyšších prietokoch migrujú v dolnej časti z rieky Kysuca najmä ryby.</p>\n<p>Názov projektu: Po stopách kulturně -přírodního dědictví česko-slovenskeho regionu,</p>\n<p>Kód projektu:NFP304030BMA2</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/hlinensky-potok/",
        "en": "https://www.qrlink.sk/new/en/hlinensky-potok/",
        "de": "https://www.qrlink.sk/new/de/hlinensky-potok/",
        "ru": "https://www.qrlink.sk/new/ru/hlinensky-potok/",
        "pl": "https://www.qrlink.sk/new/pl/hlinensky-potok/",
        "hu": "https://www.qrlink.sk/new/hu/hlinensky-potok/"
      }
    },
    {
      "id": "najuzsi-bod",
      "miesto": "nch-hlinene",
      "poradie": 5,
      "nazov": "Najužší bod",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2023/08/received_816669920100860.jpeg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2023/09/07-07-najuzsi-bod.mp3"
      ],
      "galeria": [
        "https://www.qrlink.sk/new/wp-content/uploads/2023/09/obalka-03.png"
      ],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Nachádzate sa v lokalite Pri kríži. Jeho zaujímavosťou je, že v tejto oblasti vytvára kataster mesta určité „hrdlo,“ ktoré je jeho najužším miestom. Z východu (od Olešnej) na západ (po Klokočov) meria len niečo viac ako 300 metrov. Je to zároveň miesto krížnych ciest. Takýmto miestam sa v minulosti pripisoval magický význam. Mali byť obľúbeným miestom pôsobenia nadprirodzených síl. Kresťania tieto miesta označovali krížom. Aj na tomto mieste sa nachádzal v minulosti malý krížik. Označoval miesto, kde tragicky zahynul pri práci s drevom istý Jakub, rodák z neďalekej osady. Na jeho pamiatku tu umiestnili kríž jeho príbuzní. O tom, že nejaký kríž tu stojí dlhé roky, svedčí aj skutočnosť, že priľahlý pľac nesie názov „Pod krížom.“ Kríže sa na území Slovenska vo voľnej krajine začali nebývalo rozširovať od druhej polovice 18. storočia. Umiestňovali sa popri komunikáciách, na križovatky, rázcestia, na hranice chotárov, pri žriedle vody či prameňoch. Popri cestičkách a chodníkoch pripomínali miesto tragickej smrti alebo zázračného zjavenia. Slúžili aj ako ukazovateľ cesty či orientačný bod. Vo Vrch Hlinenom sa drevený kríž s plechovým korpusom prvý raz spomína už v roku 1828, ktorý bol obnovený či skôr vymenený v roku 1919.</p>\n<p>Miesto Pri kríži má viacero symbolov. V nedeľu sa tu stretávali ľudia z Potôčkov, Riečok aj Vrch Hlineného a spoločne sa tu modlili za úrodu, dážď, zdravie alebo prednášali Bohu iné prosby. Ľudia si tu po namáhavom a strmom výstupe, unavení s batohom na chrbte oddýchli, pomodlili sa a pokračovali do svojich pľacov (príbytkov) U Kadurov, Na Vŕšok, Na Rovienky, Do Stoligov alebo Do Gajdičiarov. V týchto odľahlých osadách bol život kvôli namáhavej práci a vzdialenostiam náročný, skromný, ale zároveň radostný. Aj keď horské osady boli od seba vzdialené, ľudia mali k sebe blízko.</p>\n<p>Názov projektu: Po stopách kulturně -přírodního dědictví česko-slovenskeho regionu,</p>\n<p>Kód projektu:NFP304030BMA2</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/najuzsi-bod/",
        "en": "https://www.qrlink.sk/new/en/najuzsi-bod/",
        "de": "https://www.qrlink.sk/new/de/najuzsi-bod/",
        "ru": "https://www.qrlink.sk/new/ru/najuzsi-bod/",
        "pl": "https://www.qrlink.sk/new/pl/najuzsi-bod/",
        "hu": "https://www.qrlink.sk/new/hu/najuzsi-bod/"
      }
    },
    {
      "id": "zvonica-2",
      "miesto": "nch-hlinene",
      "poradie": 6,
      "nazov": "Zvonica",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2023/08/18-zvonica-3.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2023/09/08-08-zvonica.mp3"
      ],
      "galeria": [
        "https://www.qrlink.sk/new/wp-content/uploads/2023/09/obalka-03.png"
      ],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Rok postavenia zvonice nie je známy, pravdepodobne pochádza z prvej polovice minulého storočia. Pôvodne išlo o drevenú zvonicu, ku ktorej bola neskôr pristavaná murovaná prístavba, čím vznikla aj malá kaplnka. Zaujímavosťou je, že vo zvonici sa nachádzajú dva zvony, z ktorých jeden má datovanie 1752. Ide teda o najstarší zvon turzovskej farnosti in situ (najstarší z roku 1614 sa nachádza v zbierkach Mestského múzea K. Točíka). Zvony však nie sú pôvodné, podľa zachovanej ústnej tradície boli do zvonice dovezené prvým zvonárom z neznámej lokality z Moravy. V roku 1919 bol v osade postavený kríž, ale z kronikárskeho zápisu nie je jasné, o ktorý z dvoch jestvujúcich išlo. Či o kríž v lokality Pri kríži alebo kríž pri zvonici. Súčasný kríž pri zvonici bol osadený na jeseň 2020.</p>\n<p>Názov projektu: Po stopách kulturně -přírodního dědictví česko-slovenskeho regionu,</p>\n<p>Kód projektu:NFP304030BMA2</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/zvonica-2/",
        "en": "https://www.qrlink.sk/new/en/zvonica-2/",
        "de": "https://www.qrlink.sk/new/de/zvonica-2/",
        "ru": "https://www.qrlink.sk/new/ru/zvonica-2/",
        "pl": "https://www.qrlink.sk/new/pl/zvonica-2/",
        "hu": "https://www.qrlink.sk/new/hu/zvonica-2/"
      }
    },
    {
      "id": "nch-zarubana-kycera",
      "miesto": "nch-pohranicie",
      "poradie": 1,
      "nazov": "NCH Zarúbaná Kýčera",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2023/08/Divinka.jpg",
      "audio": [],
      "galeria": [
        "https://www.qrlink.sk/new/wp-content/uploads/2023/08/Klapy.jpg",
        "https://www.qrlink.sk/new/wp-content/uploads/2023/08/Svederník.jpeg"
      ],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2599.8675225100465!2d18.55861117649205!3d49.33572687140091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDnCsDIwJzA4LjYiTiAxOMKwMzMnNDAuMyJF!5e0!3m2!1ssk!2ssk!4v1693316832386!5m2!1ssk!2ssk",
      "text": "<p>K rozhľadni Zarúbaná Kýčera</p>\n<p>Náučný chodník pozostáva zo 6-tich informačných panelov zaoberajúcich sa históriou obce, architektúrou, geológiou a geomorfológiou pohoria, rastlinstvom a živočíšstvom. Pri niektorých paneloch sú umiestnené prístrešky s lavičkami pre oddych. Na konci náučného chodníka je postavená vyhliadková veža, z ktorej sú nádherné výhľady na Javorníky, Malú Fatru, Súľovské skaly, Moravskosliezske Beskydy.</p>\n<p>Top zajímavost:</p>\n<p>Múzeum drotárie</p>\n<p>Múzeum drotárie  je jeden z najstarších objektov v centre obce Veľké Rovné, ktorý sa podaril zrekonštruovať na základe zachovanej dobovej fotografi. Snahou bolo prinavrátenie pôvodnej dôstojnosti objektu.</p>\n<p>Rozhľadňa Zarúbaná Kýčera</p>\n<p>Vyhliadková veža má tri podlažia vo výške 15 metrov, na ktoré sa vystupuje po rebríkoch. Za dobrého počasia sa vám v plnej svojej kráse predvedie nielen hrebeň Javorníkov, ale aj Malá Fatra, Strážovské vrchy, Súľovské skaly, Biele Karpaty, Beskydy, Vršatské bradlá a z Oravy Roháče, Babia hora či Pilsko.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/castles/nch-zarubana-kycera/",
        "en": "https://www.qrlink.sk/new/en/castles/nch-zarubana-kycera/",
        "de": "https://www.qrlink.sk/new/de/castles/nch-zarubana-kycera/",
        "ru": "https://www.qrlink.sk/new/ru/castles/nch-zarubana-kycera/",
        "pl": "https://www.qrlink.sk/new/pl/castles/nch-zarubana-kycera/",
        "hu": "https://www.qrlink.sk/new/hu/castles/nch-zarubana-kycera/"
      }
    },
    {
      "id": "detsky-naucny-turisticky-chodnik",
      "miesto": "nch-pohranicie",
      "poradie": 2,
      "nazov": "Detský náučný turistický chodník",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2023/08/201631453_515707596139872_3880037117091592767_n.jpg",
      "audio": [],
      "galeria": [
        "https://www.qrlink.sk/new/wp-content/uploads/2023/08/Drevenička-Korňa.jpg",
        "https://www.qrlink.sk/new/wp-content/uploads/2023/08/199505802_1883109211852134_8317344405388699304_n.jpg"
      ],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2595.6958741200174!2d18.548644275425218!3d49.41465676140126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDnCsDI0JzUyLjgiTiAxOMKwMzMnMDQuNCJF!5e0!3m2!1ssk!2ssk!4v1693317305855!5m2!1ssk!2ssk",
      "text": "<p>Na náučný chodník sa vydáme z časti Vyšná Korňa, auto zaparkujeme pri ruine základnej školy pár metrov nad výrobňou syrových korbáčikoch. Vydáme sa do osady Durajčíkovci, ďalej ponad osadu Vyšní Slezákovi až k Panorama Ranču. Po ceste nachádzame 6 informačných tabúľ venovaným zvieratám, ktoré môžeme počas prechádzky stretnúť. Sú to zvieratá: veverica, zajac, srna, diviak, jež, líška. Na konci náučného chodníka sa nachádza drevený rám, z ktorého si môžeme urobiť pekné fotky s krásnymi výhľadmi, zvonička a bufet, kde sa môžeme občerstviť. Ďalej môžeme pokračovať na vrch Bobek, na hranici s Českou republikou, ktorý ponúka krásne výhľady aj na Moravskosliezske Beskydy.</p>\n<p>Top zaujímavosť:</p>\n<p>Lipy na Vigľaši</p>\n<p>Staré stromy sú pamätníkmi rôznych udalostí a ľudských osudov. V Korni stoja tri mohutné lipy na Vígľaši, ktoré má obec aj v erbe. Nepatria k jediným unikátom. Zaujímavosťou je ďalšia lipa na Grúni, ktorej obvod kmeňa je vyše 6 metrov. Raritou je tiež smrek hadovitý v osade U Žilov.</p>\n<p>Korňanský ropný prameň</p>\n<p>Na východnom okraji v blízkosti osady Muchovci v obci Korňa sa nachádza ojedinelý európsky unikát – prirodzený povrchový výver ľahkej ropy s občasnými výronmi samozapaľujúceho sa metánu. Výver, ktorý dokumentujte roponosnosť flyšových vrstiev, obsahuje vysoké percentá olejov. Ropa sa sústreďuje v malom jazierku s priemerom 1,5 – 2 m. Napriek tomu, že sa jedná o veľmi kvalitnú ropu, vrty v okolí – s ktorými sa začalo už na konci 19. storočia, nepreukázali také množstvo ropy, aby sa vyplatila priemyselná ťažba. Miestni obyvatelia ju v minulosti využívali na kúrenie, svietenie i mazanie. Vrty, ktoré sa tu uskutočnili (celkovo ich bolo 5, prvý v roku 1900 a posledný v roku 1929-33 do hĺbky 968 m), však nepotvrdili rentabilnosť ťažby (celkovo sa vyťažilo len 15-16 vagónov ropy). V roku 1973 ropný prameň vyhlásili za chránený prírodný výtvor, v roku 1995 prekategorizovali na prírodnú pamiatku s výmerom 0,171 ha. K prameňu je voľný prístup, cca 150 m od parkoviska pri hlavnej ceste.</p>\n<p>Veterný mlyn</p>\n<p>Veterný mlyn je jedným zo siedmych divov obce Korňa. Tento prvý div je zaujímavým zobrazením veterného mlynu, ktorý je umiestnený v Nižnej Korni. Dáva do povedomia starý veterný mlyn, ktorý stojí v osade u Šulca, je však už v zlom technickom stave. Nachádza sa v ťažko dostupnom teréne, preto je potrebné prejsť približne tri kilometre cez les, aby ste sa k nemu dostali.</p>\n<p>Povráva sa, že zariadenie starého mlynu do Korne doviezol predok Jozefa Gajdičiara, ktorý pracoval v Ostravsku ako baník. Lopatky vrtule boli roztáčané najmä severným vetrom, pri ktorom sa najlepšie mlela múka. Zaujímavosťou je, že na Morave sa zachovalo asi 70 podobných stavieb a podobný mlyn bol na Slovensko prenesený aj z Poľska. Odporúčame zobrať si so sebou aj trošku zrna a vyskúšať si namlieť múku.</p>\n<p>Pútnické miesto Živčáková</p>\n<p>V júni v roku 1958 sa na vrchu Živčáková mala lesnému robotníkovi Matúšovi Lašutovi zjaviť Panna Mária. Správa sa rýchlo rozšírila a miesto údajného zjavenia začali navštevovať veriaci, ktorí putovali na horu, odkiaľ si odnášali vodu z neďalekého prameňa. V roku 1992 BÚ v Nitre súhlasil a v nasledujúcom roku bola na hore Živčáková postavená kaplnka Panny Márie, Kráľovnej pokoja. Jej projekt vypracoval Ing. Arch. Marián Goč. V areáli zjavenia sa nachádza niekoľko prameňov s liečivou vodou, ktoré nezamŕzajú ani v najtuhších zimách.</p>\n<p>Žilinský biskup Tomáš Galis dňa 19. októbra 2008 vyhlásil Horu Živčáková za oficiálne mariánske pútnické miesto a vysvätil základný kameň budúceho chrámu Panny Márie Matky Cirkvi. 4. októbra 2015 bol chrám slávnostne vysvätený žilinským diecéznym biskupom Mons. Tomášom Galisom. Jeho výstavba trvala 7 rokov. Vo veži kostola sú umiestnené štyri zvony, ktoré sú dielom Josefa Tkadleca z Halenkova.</p>\n<p>Veža slúži aj ako vyhliadková a je sprístupnená pre pútnikov i turistov, z jej otvorenej terasy je kruhový výhľad na okolitú prírodu. Ak si chcete pozrieť tento výhľad musíte vyšľapať približne 140 schodov. Vstup do veže je zdarma, vstupné je dobrovoľné. Vyhliadková veža je sprístupnená len za priaznivého počasia.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/castles/detsky-naucny-turisticky-chodnik/",
        "en": "https://www.qrlink.sk/new/en/castles/detsky-naucny-turisticky-chodnik/",
        "de": "https://www.qrlink.sk/new/de/castles/detsky-naucny-turisticky-chodnik/",
        "ru": "https://www.qrlink.sk/new/ru/castles/detsky-naucny-turisticky-chodnik/",
        "pl": "https://www.qrlink.sk/new/pl/castles/detsky-naucny-turisticky-chodnik/",
        "hu": "https://www.qrlink.sk/new/hu/castles/detsky-naucny-turisticky-chodnik/"
      }
    },
    {
      "id": "kysucky-detsky-les",
      "miesto": "nch-pohranicie",
      "poradie": 3,
      "nazov": "Kysucký detský les",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2023/08/historická-lesná-útraťová-železnica-.jpg",
      "audio": [],
      "galeria": [
        "https://www.qrlink.sk/new/wp-content/uploads/2023/08/Brýzgalky-3.jpg"
      ],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2597.338988456459!2d19.096093675422946!3d49.38357926360561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDnCsDIzJzAwLjkiTiAxOcKwMDUnNTUuMiJF!5e0!3m2!1ssk!2ssk!4v1693317671356!5m2!1ssk!2ssk",
      "text": "<p>Chodník vybudovaný v areáli Múzea Kysuckej dediny vo Vychylovke ponúka poučenie i zábavu pre malých aj veľkých návštevníkov. Na jednotlivých 7 stanovištiach, ktoré sú umiestnené na chodníku, si môžete vyskúšať ako sa dá les vnímať nie len zrakom, na ktorý sa človek najmä spolieha, ale aj hmatom, čuchom, sluchom aj chuťou. Na sprevádzanie po chodníku je možnosť objednať si odborných sprievodcov –ktorí zabezpečia odborný výklad a aj zábavu vo forme lesných hier a pohybových aktivít. Okolo náučného chodníka môžeme nájsť kŕmidla pre zver, drevenú detskú rozhľadňu, detské ihrisko s hojdačkami, preliezkami, lavičkami a drevený altánok.</p>\n<p>Top zajímavost:</p>\n<p>Skanzen Vychylovka</p>\n<p>Pamiatky ľudovej architektúry to všetko ponúka Skanzen Vychylovka. Odkaz starých a prastarých rodičov ležiaci v malebnom prostredí Chmúrnej doliny dokáže pre svojich návštevníkov priniesť spomienky na mladosť, spoznávať históriu, ba aj osvetliť kopaničiarsky spôsob osídlenia, ktorý bol charakteristický práve pre Kysuce.</p>\n<p>Jednu z najrozsiahlejších expozícii ľudovej architektúry na Slovensku tvorí 34 stavieb, z ktorých prevažná časť je prenesená z dnes už neexistujúcich obcí Riečnica a Harvelka. Centrum skanzenu tvorí kaplnka Panny Márie Ružencovej zo Zborova nad Bystricou, krčma z obce Korňa a najstarší obytný dom z Oščadnice. Nemožno nepoukázať ani na skvost vodného mlynu a píly s hrazdenou konštrukciou z obce Klubina. Počas sezóny tu návštevníci môžu vidieť ukážky práce remeselníkov, vystúpenia folklórnych skupín, súborov z kysuckého regiónu a prípravu tradičných kysuckých jedál. Výnimočnosť tohto prostredia vyhľadávajú aj filmári. Medzi najznámejšie diela, ktoré sa aspoň čiastočne odohrali v skanzene, patrí film Želary a Lietajúci Cyprián. Sezónna prevádzka v národopisnej expozícii je od 1. mája do 31. októbra.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/castles/kysucky-detsky-les/",
        "en": "https://www.qrlink.sk/new/en/castles/kysucky-detsky-les/",
        "de": "https://www.qrlink.sk/new/de/castles/kysucky-detsky-les/",
        "ru": "https://www.qrlink.sk/new/ru/castles/kysucky-detsky-les/",
        "pl": "https://www.qrlink.sk/new/pl/castles/kysucky-detsky-les/",
        "hu": "https://www.qrlink.sk/new/hu/castles/kysucky-detsky-les/"
      }
    },
    {
      "id": "ku-pramenu-rieky-kysuca-400-rokov-4000-krokov",
      "miesto": "nch-pohranicie",
      "poradie": 4,
      "nazov": "Ku prameňu rieky Kysuca – 400 rokov – 4000 krokov",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2023/08/Prameň-Kysuce.jpg",
      "audio": [],
      "galeria": [
        "https://www.qrlink.sk/new/wp-content/uploads/2023/08/Makov-greguše.jpg",
        "https://www.qrlink.sk/new/wp-content/uploads/2023/08/Makov-Kršlisko.jpg"
      ],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2599.0863723121875!2d18.402335075420527!3d49.350513765949906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDnCsDIxJzAxLjgiTiAxOMKwMjQnMTcuNyJF!5e0!3m2!1ssk!2ssk!4v1693317865170!5m2!1ssk!2ssk",
      "text": "<p>Náučný chodník ku prameňu rieky Kysuca – 400 rokov – 4000 krokov  vznikol pri príležitosti 400-tého výročia prvej písomnej zmienky o obci Makov ležiacej medzi Turzovskou vrchovinou a Javorníkmi v CHKO Kysuce. Náučný chodník je dĺžkou nenáročný cca 2 km avšak s prudším stúpaním, ktoré nám spríjemňujú oddychové lavičky s vyrezávanými zvieratami z dreva.</p>\n<p>Top zajímavost:</p>\n<p>Brest u Papaji</p>\n<p>Najstarší a najmohutnejší brest hrabolistý v strednej Európe, ktorý má takmer 500 rokov, Unikátny exemplár brestu hrabolistého Ulmus carpinifolia sa vyznačuje nielen vekom, ale aj neobvyklou mohutnosťou. Obvod kmeňa vo výške 130 cm je 625 cm a pri koreni viac ako 11 metrov. Výška je asi 30 m. Nachádza sa v časti Makov – Kopanice , z hlavne cesty pri Chate Makov odbočíme vľavo cez most, na prvej križovatke za obchodom odbočíme vľavo a pokračujeme cca 1,5 km.</p>\n<p>Rozhľadňa Stratenec</p>\n<p>Drevená rozhľadňa bola vybudovaná na vrchu Stratenec, v nadmorskej výške 1055 m n.m., ešte v roku 2008. Vyhliadka má výšku 8 metrov a 22 schodov. Nachádza sa tu tiež kamenný pamätník Tri kríže. Venovaný je trom vojakom, ktorí padli počas 2. svetovej vojny, v čase oslobodenia Veľkých Karlovíc. Rozhľadňa na vrchu Stratenec má významné prvenstvo. Je najvyššia v celých Javorníkoch a nachádza sa na najzápadnejšom vrchu tohto pohoria.</p>\n<p>Obec Makov</p>\n<p>Ponúka  množstvo turistických a cyklistických atrakcií.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/castles/ku-pramenu-rieky-kysuca-400-rokov-4000-krokov/",
        "en": "https://www.qrlink.sk/new/en/castles/ku-pramenu-rieky-kysuca-400-rokov-4000-krokov/",
        "de": "https://www.qrlink.sk/new/de/castles/ku-pramenu-rieky-kysuca-400-rokov-4000-krokov/",
        "ru": "https://www.qrlink.sk/new/ru/castles/ku-pramenu-rieky-kysuca-400-rokov-4000-krokov/",
        "pl": "https://www.qrlink.sk/new/pl/castles/ku-pramenu-rieky-kysuca-400-rokov-4000-krokov/",
        "hu": "https://www.qrlink.sk/new/hu/castles/ku-pramenu-rieky-kysuca-400-rokov-4000-krokov/"
      }
    },
    {
      "id": "chodnik-jozefa-kronera",
      "miesto": "nch-pohranicie",
      "poradie": 5,
      "nazov": "Chodník Jozefa Krónera",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2023/08/Dom-Jozefa-Krónera-začiatok-nch.jpg",
      "audio": [],
      "galeria": [
        "https://www.qrlink.sk/new/wp-content/uploads/2023/08/5.-Na-Michalke-2.jpg",
        "https://www.qrlink.sk/new/wp-content/uploads/2023/08/Veľký-Polom.jpg"
      ],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2595.227160405695!2d18.686675875425863!3d49.42351926077234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDnCsDI1JzI0LjciTiAxOMKwNDEnMjEuMyJF!5e0!3m2!1ssk!2ssk!4v1693318141031!5m2!1ssk!2ssk",
      "text": "<p>Jozef Kroner počas svojho života stvárnil niekoľko desiatok postáv, z ktorých si väčšina ľudí vybaví napr. Pacha, Svága Ragana, Kuba, Tóna Brtka, či Martina Pichanku z Tisícročnej včely. Aj tieto postavy, resp. filmy sú stvárnené do podoby 12 umeleckých diel Chodníka Jozefa Kronera.</p>\n<p>Názvy sochárskych diel na chodníku:</p>\n<p>Včelie mapy – na motívy filmu Tisícročná včera\nPacho – na motívy filmu Pacho, hybský zbojník\nOzembuch  – na motívy filmu Sváko Ragan\nBrána do neba – na motívy filmu Obchod na korze\nMať muzikantov – na motívy seriálu My sme malí muzikanti\nMedzi telom a dušou – na motívy filmu Ty, ktorý si na nebesiach\nMatúšova medecína – na motívy filmu Slovácko sa nesúdi\nTradície vs. láska – na motívy hry Fidlikant na streche\nKubo – na motívy filmu Kubo\nNaša cesta – na motívy filmu Biela nemoc\nHodiny – na motívy hry Profesor Poležajev\nCharlesov klaun – na motívy filmu Ľudia z maringotiek</p>\n<p>Top zajímavost:</p>\n<p>Rodný dom Jozefa Kronera</p>\n<p>Domček, v ktorom sa v roku 1924 narodil významný slovenský herec Jozef Kroner.  Múzeum je prístupné každý deň. V múzeu nájdete v strede stôl, hercovo kreslo a vitrínu, v ktorej je množstvo predmetov zo života umelca, napr. osobné listy, rôzne ocenenia, rybárske čižmy, okuliare, šálka, dokonca aj soška Oscara za film Obchod na Korze, v ktorom Jozef Kroner stvárnil hlavnú postavu.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/castles/chodnik-jozefa-kronera/",
        "en": "https://www.qrlink.sk/new/en/castles/chodnik-jozefa-kronera/",
        "de": "https://www.qrlink.sk/new/de/castles/chodnik-jozefa-kronera/",
        "ru": "https://www.qrlink.sk/new/ru/castles/chodnik-jozefa-kronera/",
        "pl": "https://www.qrlink.sk/new/pl/castles/chodnik-jozefa-kronera/",
        "hu": "https://www.qrlink.sk/new/hu/castles/chodnik-jozefa-kronera/"
      }
    },
    {
      "id": "prameny-moravky",
      "miesto": "nch-pohranicie",
      "poradie": 6,
      "nazov": "Prameny Morávky",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2023/08/moravka-1.jpg",
      "audio": [],
      "galeria": [
        "https://www.qrlink.sk/new/wp-content/uploads/2023/08/moravka-2.jpg"
      ],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2586.1742785178662!2d18.521811775438422!3d49.59446284862748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDnCsDM1JzQwLjEiTiAxOMKwMzEnMjcuOCJF!5e0!3m2!1ssk!2ssk!4v1693318475745!5m2!1ssk!2ssk",
      "text": "<p>Naučná stezka vychází od parkoviště v části Lipové a stoupá po silnici údolím řeky Morávky až k jejímu prameni. Cestou potkáte devět naučných tabulí věnovaných povodí Morávky – řece i lesům, výstavbě přehrady, historii obce Morávka a turistice. Dozvíte se například, že voda z řeky Morávky je základní surovinou pro výrobu nošovického piva.</p>\n<p>Top zaujímavosť:</p>\n<p>Přehrada Morávka</p>\n<p>Údolní vodní nádrž byla vybudována v letech 1961 – 1967 hlavně jako zdroj pitné vody a ochrana před povodněmi.</p>\n<p>Památník partyzánského hnutí „Noční přechod“</p>\n<p>Památník partyzánského hnutí Noční přechod je památník obětem Nočního přechodu v obci Morávka v okrese Frýdek-Místek. Památkově chráněn je od roku 1958 a 6. října 1978 byl prohlášen za národní kulturní památku.</p>\n<p>Bílý Kříž</p>\n<p>Původně zde byla osada, která se jmenovala Karlovice. Na Bílý kříž byla přejmenována po roce 1830. Pašerákům tabáku z uherského Slovenska zastoupil cestu financ (tehdejší pohraniční policie). Pašeráci se báli bití a pokut víc než vraždy, a tak pohraničníka ubili a pochovali. Na mohyle nad hrobem byl postaven dřevěný kříž z čerstvě ostrouhaných smrkových žerdí. Celý hřeben byl tehdy odlesněn, a tak kříž svítil bíle dodaleka. Dnešní kříž už je po několikáté obnovený, a aby dostál svému jménu, je na bílo natřený.</p>\n<p>Dřevěný kostelík Panny Marie na Gruni, Lysá hora</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/castles/prameny-moravky/",
        "en": "https://www.qrlink.sk/new/en/castles/prameny-moravky/",
        "de": "https://www.qrlink.sk/new/de/castles/prameny-moravky/",
        "ru": "https://www.qrlink.sk/new/ru/castles/prameny-moravky/",
        "pl": "https://www.qrlink.sk/new/pl/castles/prameny-moravky/",
        "hu": "https://www.qrlink.sk/new/hu/castles/prameny-moravky/"
      }
    },
    {
      "id": "frydecky-les",
      "miesto": "nch-pohranicie",
      "poradie": 7,
      "nazov": "Frýdecký les",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2023/08/fr2.jpg",
      "audio": [],
      "galeria": [
        "https://www.qrlink.sk/new/wp-content/uploads/2023/08/frídecký-1.jpg"
      ],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2580.605452484018!2d18.35841647544615!3d49.69940234115713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDnCsDQxJzU3LjgiTiAxOMKwMjEnMzkuNiJF!5e0!3m2!1ssk!2ssk!4v1693384634344!5m2!1ssk!2ssk",
      "text": "<p>Naučná stezka ukazuje, že les má mnoho funkcí a neslouží jen pro pěstování a těžbu dřeva. Les je také domovem mnoha druhů rostlin a živočichů – od hmyzu až po velkou zvěř. Naučná stezka je vhodná zejména pro školní mládež. Přes zamokřená místa již byly položeny jednoduché lávky a přes rokli s potůčkem byl postaven mostek.</p>\n<p>Top zajímavost:</p>\n<p>Bludné balvany ve Frýdeckém lese</p>\n<p>S bludnými neboli eratickými balvany se na severu Moravy a ve Slezsku můžeme setkat na mnoha místech. Nález balvanů ve Frýdeckém lese byl poprvé zveřejněn v roce 2006. Větší skupina balvanů je v levém přítoku potůčku Podšajarky, v rokli zhruba 200 metrů severně od Zátiší, další leží přímo v řečišti Podšajarky.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/castles/frydecky-les/",
        "en": "https://www.qrlink.sk/new/en/castles/frydecky-les/",
        "de": "https://www.qrlink.sk/new/de/castles/frydecky-les/",
        "ru": "https://www.qrlink.sk/new/ru/castles/frydecky-les/",
        "pl": "https://www.qrlink.sk/new/pl/castles/frydecky-les/",
        "hu": "https://www.qrlink.sk/new/hu/castles/frydecky-les/"
      }
    },
    {
      "id": "grun-bily-kriz",
      "miesto": "nch-pohranicie",
      "poradie": 8,
      "nazov": "Gruň – Bílý Kříž",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2023/08/grun-1.png",
      "audio": [],
      "galeria": [
        "https://www.qrlink.sk/new/wp-content/uploads/2023/08/gr2.jpg"
      ],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2592.659645413536!2d18.4393050754294!3d49.47204535732784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDnCsDI4JzE5LjQiTiAxOMKwMjYnMzAuOCJF!5e0!3m2!1ssk!2ssk!4v1693384789384!5m2!1ssk!2ssk",
      "text": "<p>Místo je ideální zejména pro rodiny s dětmi, seniory a pro všechny, kdo nemají ambice zdolávat vysoké hory, ale spíše si chtějí užít procházku, mají chuť se něco dozvědět a rádi se kochají horskou krajinou. Délku si zvolte sami. Můžete ujít třeba jen 4 km ke Švarné Hance nebo 11 km, pokud se rozhodnete pokračovat až na vyhlášený Bílý Kříž. Zpět se vrátíte po stejné trase. Část hřebenové trasy ke Švarné Hance (2 km) je díky asfaltovému povrchu vhodná pro kočárky.</p>\n<p>Top zajímavost:</p>\n<p>Za hezkého počasí výhled na Slovenské Tatry. Kostel sv. Jindřicha, pomník Maryčky Magdonové a starodávný hřbitov s litinovými kříži ve Starých Hamrech, bývalá Bezručova škola, dřevěný kostel Panny Marie Pomocné na Gruni, ovce Valaška.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/castles/grun-bily-kriz/",
        "en": "https://www.qrlink.sk/new/en/castles/grun-bily-kriz/",
        "de": "https://www.qrlink.sk/new/de/castles/grun-bily-kriz/",
        "ru": "https://www.qrlink.sk/new/ru/castles/grun-bily-kriz/",
        "pl": "https://www.qrlink.sk/new/pl/castles/grun-bily-kriz/",
        "hu": "https://www.qrlink.sk/new/hu/castles/grun-bily-kriz/"
      }
    },
    {
      "id": "certuv-mlyn",
      "miesto": "nch-pohranicie",
      "poradie": 9,
      "nazov": "Čertův mlýn",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2023/08/čert2.jpg",
      "audio": [],
      "galeria": [
        "https://www.qrlink.sk/new/wp-content/uploads/2023/08/cert1.jpg"
      ],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2591.726688868354!2d18.26245507543072!3d49.489669556076244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDnCsDI5JzIyLjgiTiAxOMKwMTUnNTQuMSJF!5e0!3m2!1ssk!2ssk!4v1693385924368!5m2!1ssk!2ssk",
      "text": "<p>Stezka vede z Pusteven kolem jezírka Mořské oko úbočím Čertova mlýna (1205 m) k horskému hotelu na Martiňáku. Na naučné stezce je 9 zastavení s informacemi o místních zajímavých rostlinách a živočiších, dozvíte se, čím jsou vzácné lesy v okolí, kde se ukrývali partyzáni nebo pověst o čertovi. Stezka má ve znaku Čertův stůl – unikátní skalní útvar na hřebeni Čertova mlýna.</p>\n<p>Top zajímavost:</p>\n<p>Pustevny</p>\n<p>Pustevny je sedlo v Moravskoslezských Beskydech nedaleko Radhoště, které patří k obci Prostřední Bečva. Bylo pojmenováno po poustevnících, kteří zde žili do roku 1874. Pro Pustevny jsou typické dřevěné stavby postavené v lidovém slohu koncem 19. století na návrh architekta Dušana Jurkoviče. Nachází se zde lyžařské středisko a vede sem sedačková lanovka.</p>\n<p>Mořské oko</p>\n<p>Jezírko Mořské oko je uměle vytvořené podnikavými turisty na konci 19. století z původního mokřadu. Turistům bylo líto, že na Pustevnách chybí nějaké to pleso jako třeba v Tatrách, a tak si je sami vytvořili a stalo se oblíbenou atrakcí. Nyní je významnou lokalitou pro rozmnožování různých druhů obojživelníků, zejména tří druhů čolků.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/castles/certuv-mlyn/",
        "en": "https://www.qrlink.sk/new/en/castles/certuv-mlyn/",
        "de": "https://www.qrlink.sk/new/de/castles/certuv-mlyn/",
        "ru": "https://www.qrlink.sk/new/ru/castles/certuv-mlyn/",
        "pl": "https://www.qrlink.sk/new/pl/castles/certuv-mlyn/",
        "hu": "https://www.qrlink.sk/new/hu/castles/certuv-mlyn/"
      }
    },
    {
      "id": "vcelarska-naucna-stezka",
      "miesto": "nch-pohranicie",
      "poradie": 10,
      "nazov": "Včelařská naučná stezka",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2023/08/včela-2.jpg",
      "audio": [],
      "galeria": [
        "https://www.qrlink.sk/new/wp-content/uploads/2023/08/včela3.jpg",
        "https://www.qrlink.sk/new/wp-content/uploads/2023/08/včela1.jpg"
      ],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2583.557827388851!2d18.364425075442078!3d49.64378784511767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDnCsDM4JzM3LjYiTiAxOMKwMjInMDEuMiJF!5e0!3m2!1ssk!2ssk!4v1693406215876!5m2!1ssk!2ssk",
      "text": "<p>Naučná stezka se skládá z odpočinkového stanoviště, což je velký dřevěný altán, v jehož okolí jsou umístěny informační panely, na kterých se návštěvníci dočtou řadu zajímavostí z historie včelařství a základní informace o včele medonosné. Včelstvo je v podstatě takový super organismus, který přežívá v nezměněné podobě na naší planetě už milióny let a každá včela v něm hraje svou důležitou roli. Kterými členy je takové včelstvo tvořeno a jak společně fungují – o tom všem se také návštěvníci z informačních cedulí mohou něco dozvědět.</p>\n<p>Top zajímavost:</p>\n<p>Podél stezky protéká řeka Ostravice, ke které je krásný přístup s výhledem na řeku. Vedle stezky je taky výukový včelí úl, kde se návštěvníci můžou podívat na to, jak včelky pracují.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/castles/vcelarska-naucna-stezka/",
        "en": "https://www.qrlink.sk/new/en/castles/vcelarska-naucna-stezka/",
        "de": "https://www.qrlink.sk/new/de/castles/vcelarska-naucna-stezka/",
        "ru": "https://www.qrlink.sk/new/ru/castles/vcelarska-naucna-stezka/",
        "pl": "https://www.qrlink.sk/new/pl/castles/vcelarska-naucna-stezka/",
        "hu": "https://www.qrlink.sk/new/hu/castles/vcelarska-naucna-stezka/"
      }
    },
    {
      "id": "chlebovicka-medova-stopa",
      "miesto": "nch-pohranicie",
      "poradie": 11,
      "nazov": "Chlebovická Medová stopa",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2023/08/mc1.png",
      "audio": [],
      "galeria": [
        "https://www.qrlink.sk/new/wp-content/uploads/2023/08/Bez-názvuc2.jpg"
      ],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2582.8343518192314!2d18.275270075443068!3d49.65742034414708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDnCsDM5JzI2LjciTiAxOMKwMTYnNDAuMiJF!5e0!3m2!1ssk!2ssk!4v1693406767616!5m2!1ssk!2ssk",
      "text": "<p>Stezka navazuje na Včelařský naučný areál Chlebovice a umožňuje návštěvníkům naučného areálu i běžným turistům seznámit se zábavnou formou s včelařstvím i zajímavými místy v Chlebovicích. Medovou stezkou provede včelka Medulinka, která na celkem pěti stanovištích seznámí návštěvníky s 12 včelařskými tématy a 12 zajímavými místy Chlebovic. Díky hrací kartě „Medovka“ si mohou malí i velcí ověřit své nové znalosti v „Medulinčině kvízu“. Stezka vás zavede až k rozhledně Kabátice, ze které je krásný výhled východním směrem na vodní nádrž Olešná a město Frýdek-Místek.</p>\n<p>Top zajímavost:</p>\n<p>Včelařské muzeum</p>\n<p>Ojedinělá sbírka medometů, dýmáků, úlů a včelařských potřeb.</p>\n<p>Rozhledna Kabátice, přehrada Olešná, hrad Hukvaldy, rodný dům Leoše Janáčka, obora Hukvaldy, Štramberk, Štramberská Trúba.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/castles/chlebovicka-medova-stopa/",
        "en": "https://www.qrlink.sk/new/en/castles/chlebovicka-medova-stopa/",
        "de": "https://www.qrlink.sk/new/de/castles/chlebovicka-medova-stopa/",
        "ru": "https://www.qrlink.sk/new/ru/castles/chlebovicka-medova-stopa/",
        "pl": "https://www.qrlink.sk/new/pl/castles/chlebovicka-medova-stopa/",
        "hu": "https://www.qrlink.sk/new/hu/castles/chlebovicka-medova-stopa/"
      }
    },
    {
      "id": "lesni-stezka-vyhlidka",
      "miesto": "nch-pohranicie",
      "poradie": 12,
      "nazov": "Lesní stezka Vyhlídka",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2023/08/vyhliadka1.jpg",
      "audio": [],
      "galeria": [
        "https://www.qrlink.sk/new/wp-content/uploads/2023/08/vyhliadka2.jpg"
      ],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2586.4788239879226!2d18.34265947543805!3d49.588719249036146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDnCsDM1JzE5LjQiTiAxOMKwMjAnNDIuOCJF!5e0!3m2!1ssk!2ssk!4v1693407597189!5m2!1ssk!2ssk",
      "text": "<p>Jde o moderní venkovní hřiště s atrakcemi v dřevěném provedení. Cestičky jsou z jemné šotoliny, které zvládne i městský kočárek. Originální jsou dvě ptačí hnízda zavěšená na stromech, na která se dá vyšplhat po pavoučí síti. V jejich okolí jsou v korunách stromů umístěny dřevěné sochy ptáků, které lze přímo z kukaní pozorovat. Vše je doplněno otočnými naučnými cedulemi s pěknými obrázky. Na dalších zastaveních se děti vyřádí na skluzavce, prolézačkách nebo dřevěných špalcích. Milé jsou dvě houpací sítě, určené k pozorování mraků. Cestu také lemují zastavení se zvětšenými dřevěnými maketami hmyzu a lesních hub. Pro větší děti i dospělé je tu umístěno workoutové hřiště s kruhy, hrazdou, lanem apod.</p>\n<p>Top zajímavost:</p>\n<p>Z této stezky se dá pokračovat na turisty hojně navštěvovaný Ondřejník.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/castles/lesni-stezka-vyhlidka/",
        "en": "https://www.qrlink.sk/new/en/castles/lesni-stezka-vyhlidka/",
        "de": "https://www.qrlink.sk/new/de/castles/lesni-stezka-vyhlidka/",
        "ru": "https://www.qrlink.sk/new/ru/castles/lesni-stezka-vyhlidka/",
        "pl": "https://www.qrlink.sk/new/pl/castles/lesni-stezka-vyhlidka/",
        "hu": "https://www.qrlink.sk/new/hu/castles/lesni-stezka-vyhlidka/"
      }
    },
    {
      "id": "najstarsie-zmienky-o-zivcakovej",
      "miesto": "nch-zivcakova",
      "poradie": 1,
      "nazov": "Najstaršie zmienky o Živčákovej",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2023/08/Zivcakova_mapa.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2023/08/01-Najstarsie-zmienky-o-zivcakovej.mp3"
      ],
      "galeria": [
        "https://www.qrlink.sk/new/wp-content/uploads/2023/09/obalka-03.png"
      ],
      "gps": {
        "lat": 49.397869104654376,
        "lng": 18.569917576091964
      },
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2011.6759220261013!2d18.56734267542398!3d49.39787256259185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDnCsDIzJzUyLjMiTiAxOMKwMzQnMTEuNyJF!5e1!3m2!1ssk!2ssk!4v1692690296474!5m2!1ssk!2ssk",
      "text": "<p>Vrch Živčákova sa nachádza na pomedzí troch kysuckých obcí – Turzovka, Korňa a Vysoká nad Kysucou. Prvýkrát sa písomne spomína v listine, ktorú vydal zakladateľ Turzovky Juraj Turzo 26. mája 1616. Medzi vymenovanými pasienkami a horami, ktoré mali užívať turzovskí valasi sa spomína lokalita na Zivčzakoweg. Ďalší známy dokument spomínajúci túto lokalitu je obhliadka chotára Vysokej a susediacich obcí Turzovka a (Veľké) Rovné z roku 1690. Stoličná komisia začínala obhliadku práve na vrchu Živčákova (ad montem Ziwczakova). Hora nebola v minulosti ničím zvláštna, o jej význame možno hovoriť až od roku 1954, keď bola z Turzovky vyčlenená samostatná obec Korňa a Živčákova sa stala hraničným územím, priamym hraničným bodom oboch katastrov. Ako vyplýva aj zo starších písomných zmienok, vrch sa vždy označoval ako Živčákova. Názov bol motivovaný osobným menom niektorého valacha, ktorý mal v tejto lokalite svoje pastviská. Osobné meno Živčák bolo odvodené z pomenovania obyvateľa Živiecka, podobne Slezák, Polák, Rusnák a pod. Nezodpovedanou otázkou ostane, či išlo v tomto prípade priamo o valacha z poľského územia, alebo už o človeka, ktorý na územie Turzovky prišiel sprostredkovane cez Oravu, kde bolo meno Živčák pomerne rozšírené. Vieme totiž, že Juraj Turzo si na svoje bytčianske majetky pozýval aj valachov z Oravy. Keďže sa Živčákova spomína už v roku 1616 je pravdepodobné, že sa spomínaný valach dostal do tejto oblasti ešte pre samotným založením Turzovky, prípadne v čase jej kreovania. Lokalita sa teda správne nazýva Živčákova, nie Živčák, ako sa to približne od polovice 20. storočia niekedy uvádza. Živčák je osobné meno, Živčákova hora, skrátene Živčákova je označenie vrchu – oronymum.</p>\n<p>Názov projektu: Po stopách kulturně -přírodního dědictví česko-slovenskeho regionu,</p>\n<p>Kód projektu:NFP304030BMA2</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/castles/najstarsie-zmienky-o-zivcakovej/",
        "en": "https://www.qrlink.sk/new/en/castles/najstarsie-zmienky-o-zivcakovej/",
        "de": "https://www.qrlink.sk/new/de/castles/najstarsie-zmienky-o-zivcakovej/",
        "ru": "https://www.qrlink.sk/new/ru/castles/najstarsie-zmienky-o-zivcakovej/",
        "pl": "https://www.qrlink.sk/new/pl/castles/najstarsie-zmienky-o-zivcakovej/",
        "hu": "https://www.qrlink.sk/new/hu/castles/najstarsie-zmienky-o-zivcakovej/"
      }
    },
    {
      "id": "vodna-pila-vincenta-hrtusa",
      "miesto": "nch-zivcakova",
      "poradie": 2,
      "nazov": "Vodná píla Vincenta Hrtúsa",
      "popis": "",
      "cover": "",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2023/08/02-vodna-pila-vincenta-hrtusa.mp3"
      ],
      "galeria": [
        "https://www.qrlink.sk/new/wp-content/uploads/2023/09/obalka-03.png"
      ],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>V mestskej časti Vyšný Koniec vlastnil na prelome 20. a 30. rokov minulého storočia vodnú pílu Ján Cvek. V roku 1932 podal žiadosť o povolenie vodného používania pre mlyn a pílu tesársky majster Vincent Hrtús. O rok neskôr sa konalo v tejto veci pojednávanie, na základe ktorého mu začiatkom roka 1944 vydal Župný úrad v Trenčíne vodoprávne povolenie na používanie pre mlyn a pílu. Píla po predošlom majiteľovi bola zanedbaná, nový vlastník musel veľa renovovať. Píla pracovala na vodný pohon iba pri vyšších vodných stavoch. V. Hrtús pílil drevo súkromníkom, ale najmä pre stáleho obchodíka s drevom a rezivom Kováčika z Turzovky. Ak nebolo možné pre nedostatok vody pracovať, pílu a jej zariadenie prebudovával a všetko zariadenie prispôsoboval na vodný pohon. Činnosť píly i sklady s drevom ohrozovali povodne. Povodne ničili i hať na vodný náhon. Veľká povodeň bola napr. 31. mája 1940, keď voda brala mosty, lávky i pozemky. Vtedy spôsobila veľkú škodu i V. Hrtúsovi, keď odplavila drevo z jeho skladu na Vyšnom Konci. Napriek problémom prevádzkoval pílu do roku 1949, keď mu stroje zaplombovali a zakázali prevádzku píly. Vtedajšiemu vedeniu obce V. Hrtús navrhol, že na tom mieste postaví „valašskú pílu“, ako technickú pamiatku a spomienku na obdobie, keď sa v tunajšej oblasti pracovalo primitívne len s jedinou pílou v gátri. Jeho návrh bol zamietnutý. Vrátil sa k tesárskemu remeslu, dožil sa 94 rokov. Pochovaný je v Lendaku, v mieste, kde pôsobil ako kňaz jeho syn Anton. Z niekdajšej píly zostalo v týchto miestach už len opustené koleso.</p>\n<p>Názov projektu: Po stopách kulturně -přírodního dědictví česko-slovenskeho regionu,</p>\n<p>Kód projektu:NFP304030BMA2</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/castles/vodna-pila-vincenta-hrtusa/",
        "en": "https://www.qrlink.sk/new/en/castles/vodna-pila-vincenta-hrtusa/",
        "de": "https://www.qrlink.sk/new/de/castles/vodna-pila-vincenta-hrtusa/",
        "ru": "https://www.qrlink.sk/new/ru/castles/vodna-pila-vincenta-hrtusa/",
        "pl": "https://www.qrlink.sk/new/pl/castles/vodna-pila-vincenta-hrtusa/",
        "hu": "https://www.qrlink.sk/new/hu/castles/vodna-pila-vincenta-hrtusa/"
      }
    },
    {
      "id": "mimoriadne-udalosti-na-uzemi-turzovky",
      "miesto": "nch-zivcakova",
      "poradie": 3,
      "nazov": "Mimoriadne udalosti na území Turzovky",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2023/08/20230823_134552.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2023/08/03-mimoriadne-udalosti.mp3"
      ],
      "galeria": [
        "https://www.qrlink.sk/new/wp-content/uploads/2023/09/obalka-03.png"
      ],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Z historického hľadiska turzovská farnosť v roku 1958 nezažila úplne novú, dovtedy nepoznanú situáciu, pretože máme zdokumentované dve udalosti podobného charakteru. Prvýkrát sa s údajným zjavením obyvatelia stretli ešte v roku 1764. Pri akejsi studničke na území obce Vysoká (v tom čase ešte filiálka farnosti Turzovka) sa mala akémusi 12-ročnému dievčaťu zjaviť sv. Anna. Udalosť sa riešila na kongregácii Bytčianskeho dekanátu 18. septembra 1764 v Predmieri. V zápisnici sa uvádza, že zvesť o tomto prípade sa rýchlo rozšírila a rozrušila celé okolie. Aj tu začali ľudia masívne navštevovať toto miesto, veľa pútnikov prichádzalo z Moravy. Napokon sa zistilo, že v tomto prípade išlo o podvod a dievča po napomenutí farára svoje tvrdenia odvolalo. Kňazi mali za úlohu vysvetliť veriacim, že išlo o výmysel a zadržať ich, aby nenavštevovali toto miesto. Napriek tomu tradícia v obci pretrvala a v roku 1911 bola na tomto mieste postavená kaplnka, kde sa v modernom období každoročne koná púť.</p>\n<p>Ďalšie mimoriadne úkazy boli zdokumentované v druhej polovice 19. storočia. V dnešnej mestskej časti Turzovky Hlinené bol na stĺpiku pribitý obrázok Panny Márie a toto miesto bolo pre tunajších obyvateľov posvätným. Schádzali sa tu, modlili a konali procesie, navštevovali toto miesto v čase sucha či šíriacich sa nemocí. Tu sa síce priamo nehovorí o zjavení Panny Márie, ale je písomne doložených niekoľko údajne zázračných uzdravení, ktoré boli zapísané v obecnom protokole (nezachoval sa) a poznáme ich len vďaka opisu vtedajšieho turzovského farára Františka Tagániho, ktorým zdôvodňoval nitrianskemu biskupovi žiadosť svojich veriacich, postaviť na tomto mieste kaplnku. Od roku 1872 stojí na tomto mieste kaplnka Najsvätejšieho Srdca Panny Márie. Časom však táto tradícia upadla do zabudnutia.</p>\n<p>Názov projektu: Po stopách kulturně -přírodního dědictví česko-slovenskeho regionu,</p>\n<p>Kód projektu:NFP304030BMA2</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/castles/mimoriadne-udalosti-na-uzemi-turzovky/",
        "en": "https://www.qrlink.sk/new/en/castles/mimoriadne-udalosti-na-uzemi-turzovky/",
        "de": "https://www.qrlink.sk/new/de/castles/mimoriadne-udalosti-na-uzemi-turzovky/",
        "ru": "https://www.qrlink.sk/new/ru/castles/mimoriadne-udalosti-na-uzemi-turzovky/",
        "pl": "https://www.qrlink.sk/new/pl/castles/mimoriadne-udalosti-na-uzemi-turzovky/",
        "hu": "https://www.qrlink.sk/new/hu/castles/mimoriadne-udalosti-na-uzemi-turzovky/"
      }
    },
    {
      "id": "udajne-zjavenia-na-zivcakovej-matusovi-lasutovi",
      "miesto": "nch-zivcakova",
      "poradie": 4,
      "nazov": " Údajné zjavenia na Živčákovej Matúšovi Lašútovi",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2023/08/Zivcakova_II.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2023/08/04-udajne-zjavenia.mp3"
      ],
      "galeria": [
        "https://www.qrlink.sk/new/wp-content/uploads/2023/09/obalka-03.png"
      ],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Prípad z roku 1958 na rozdiel od predošlých nielenže neskončil v zabudnutí ani počas tvrdého odporu minulého režimu, ale po jeho páde sa zo Živčákovej stalo oficiálne uznané mariánske pútnické miesto. Údajné zjavenia Panny Márie lesníkovi Matúšovi Lašútovi vyvolali medzi veriacimi postupne celosvetový ohlas. Vtedajší turzovský farár a dekan K. Točík do farskej kroniky poznamenal: „Na Vyšnom Konci v Turzovke náš farník Matúš Lašút sa chválil, že sa P. Mária zjavila. K tomu primerano začal chodiť horlivo na sv. omšu. Denne od 6 h ráno už bol v kostole a na všetkých omšách bol prítomný. &#8230; Ničím nie je posiaľ potvrdené údajne zjavenie menovaného Lašúta. Toto sa malo stať v mesiaci júni, júli, august, sept., oktob., november 1958.“ Farár o prípade 18. decembra 1958 informoval svojho biskupa v Nitre. Ten jeho postoj odobril s tým, aby dal svojim veriacim na vedomie, že cirkevná hierarchia po preskúmaní prípadu nadobudla presvedčenie, že v danom prípade nešlo o nadprirodzené zjavenie. Biskup Nécsey zároveň vydal zákaz navštevovať Živčákovu. Už na druhý deň po zverejnení zjavení (8. septembra – sviatok Narodenia Panny Márie) sa na horu zišlo asi tisíc ľudí. Prítomný bol aj M. Lašút, ktorý bol vyzvaný, aby sa dostavil na vyšetrovanie do Čadce. Podľa jeho výpovede ho vozili v rámci okresu z miesta na miesto, aby ho zmiatli a vyčerpali. V piatok 12. septembra ho previezli do psychiatrickej liečebne v Bytčici, kde skončil na tzv. ochrannom liečení. Od 18. novembra ho vyšetrovala odborná komisia lekárov na psychiatrickom oddelení Krajského ústavu národného zdravia v Žiline. V júni 1959 bol z ochranného liečenia prepustený, ale v septembri ho opätovne zaistili a odviezli do Bytčice, kde zotrval do novembra 1960. V septembri 1961 bol znova zaistený, v dome mu bola vykonaná domová prehliadka. Odviezli ho do Bytčice a po dvoch týždňoch do psychiatrickej liečebne v Kosmonosoch v Čechách. Stadiaľ ho 12. decembra 1961 prepustili s tým, že je zdravý, ale zaťažený vidinou Matky Božej. Boli proti nemu vedené i súdne vyšetrovania a konania. Po návrate z Kosmonosov ho už lekársky nevyšetrovali. Jeho život bol ale negatívne ovplyvňovaný rôznymi opatreniami. Sociálne vylúčenie výrazne pociťovala aj jeho rodina.</p>\n<p>Názov projektu: Po stopách kulturně -přírodního dědictví česko-slovenskeho regionu,</p>\n<p>Kód projektu:NFP304030BMA2</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/castles/udajne-zjavenia-na-zivcakovej-matusovi-lasutovi/",
        "en": "https://www.qrlink.sk/new/en/castles/udajne-zjavenia-na-zivcakovej-matusovi-lasutovi/",
        "de": "https://www.qrlink.sk/new/de/castles/udajne-zjavenia-na-zivcakovej-matusovi-lasutovi/",
        "ru": "https://www.qrlink.sk/new/ru/castles/udajne-zjavenia-na-zivcakovej-matusovi-lasutovi/",
        "pl": "https://www.qrlink.sk/new/pl/castles/udajne-zjavenia-na-zivcakovej-matusovi-lasutovi/",
        "hu": "https://www.qrlink.sk/new/hu/castles/udajne-zjavenia-na-zivcakovej-matusovi-lasutovi/"
      }
    },
    {
      "id": "vyvoj-do-roku-1989",
      "miesto": "nch-zivcakova",
      "poradie": 5,
      "nazov": "Vývoj do roku 1989",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2023/08/Živčáková-Chrám-matky-Cirkvi-1.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2023/08/05-vyvoj-do-roku-1989.mp3"
      ],
      "galeria": [
        "https://www.qrlink.sk/new/wp-content/uploads/2023/09/obalka-03.png"
      ],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Kým Lašúta vyšetrovali lekári, na Živčákovu chodievali pútnici, postavili tam oltáriky, na stromy povešali kríže, sv. obrázky a konali sa tam rôzne pobožnosti. Zvýšená účasť bývala obyčajne v nedele a na mariánske sviatky. Z tohto dôvodu biskup E. Nécsey vydal 22. augusta 1961 nariadenie, ktorým sprísnil svoj pôvodný zákaz Ale ani tento závažný dokument nepomohol a veriaci ho nerešpektovali. Najmä nie veriaci zo vzdialenejších slovenských lokalít, Moravy, Čiech a zahraničia. Existujú správy, že veriaci tento zákaz spočiatku nerešpektovali, pretože ho považovali za vynútený zo strany štátnej správy. Je otázne nakoľko biskup Nécsey konal z vlastného rozhodnutia a nakoľko jednoducho konať musel. Z mnohých materiálov, ktoré sa zachovali a kde sa prijímajú opatrenia na likvidáciu pútnického miesta Živčákova totiž vyplýva, že štátna moc ho nútila k vydávaniu neustále sa opakujúcich výziev a nariadení. Porada na OV KSS v Čadci 9. septembra 1967 konštatovala, že aktivizácia na Živčákovej dosahuje širokých rozmerov a dovtedy vydané úpravy sa nerešpektujú. Začiatkom roka 1968 rozposlal nitriansky biskup farnostiam obežník, v ktorom ich informoval o zrušení svojich predchádzajúcich zákazov. Pre veriacich bol tiež zrušený zákaz navštevovať toto miesto. Možno len diskutovať o tom, nakoľko sa na tomto rozhodnutí biskupa podpísal aj celospoločenský vývoj, ktorý vyústil do Pražskej jari a obrodného procesu, zastaveného udalosťami 21. augusta 1968. Toho sa však už nitriansky biskup nedožil, zomrel v Nitre 19. júna 1968.</p>\n<p>Zrejme s nastupujúcou normalizáciou sa počty pútnikov začiatkom 70. rokov značne znížili, pretože informatívna správa  ŠtB z roku 1973 konštatuje, že od roku 1971 má účasť na hore klesajúcu tendenciu. Avšak ľudia na Živčákovu neustále navštevovali. Nešlo len o domácich či veriacich z Čiech a Slovenska, ale aj cudzincov, najmä z Rakúska a Nemecka. Miesto bolo zo strany štátnych orgánov i ŠtB neustále monitorované aj v 70. a 80. rokoch.</p>\n<p>Názov projektu: Po stopách kulturně -přírodního dědictví česko-slovenskeho regionu,</p>\n<p>Kód projektu:NFP304030BMA2</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/castles/vyvoj-do-roku-1989/",
        "en": "https://www.qrlink.sk/new/en/castles/vyvoj-do-roku-1989/",
        "de": "https://www.qrlink.sk/new/de/castles/vyvoj-do-roku-1989/",
        "ru": "https://www.qrlink.sk/new/ru/castles/vyvoj-do-roku-1989/",
        "pl": "https://www.qrlink.sk/new/pl/castles/vyvoj-do-roku-1989/",
        "hu": "https://www.qrlink.sk/new/hu/castles/vyvoj-do-roku-1989/"
      }
    },
    {
      "id": "stavba-kaplnky-a-putnicke-miesto",
      "miesto": "nch-zivcakova",
      "poradie": 6,
      "nazov": "Stavba kaplnky a pútnické miesto",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2023/08/Zivcakova_V.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2023/08/06-stavba-kaplnky-a-putnicke-miesto.mp3"
      ],
      "galeria": [
        "https://www.qrlink.sk/new/wp-content/uploads/2023/09/obalka-03.png"
      ],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Už v septembri 1989 sa na jednom oltáriku objavil zošit s textom žiadosti o postavenie kaplnky, ktorý obsahoval asi 600 podpisov. V novembri toho istého roka sa zrútil režim pod vládou KSČ a nasledoval prechod k slobodnej demokratickej spoločnosti. Veriacich povzbudila i návšteva pápeža Jána Pavla II. v apríli 1990, keď zavítal aj do Bratislavy. Keďže na Biskupský úrad v Nitre prichádzalo množstvo listov, v ktorých veriaci žiadali postavenie kaplnky na hore Živčákova, v roku 1992 vydal biskup predbežný súhlas na stavbu. Projekt kaplnky vypracoval Ing. arch. Marián Goč. V priebehu roka 1993 bola kaplnka Panny Márie, Kráľovnej pokoja postavená. Prvú sv. omšu tu na turzovské hody 15. augusta 1993 slúžil vtedajší turzovský farár Ivan Mahrík, ktorý sa veľmi pričinil o stavbu kaplnky i o rozvoj samotného pútnického miesta. V nedeľu 17. 10. 1993 bola kaplnka slávnostne posvätená, sv. omšu celebroval z poverenia kardinála Jána Korca vtedajší čadčiansky dekan Milan Kavor.</p>\n<p>Aj po zmene režimu Cirkev podporovala toto miesto len ako miesto mariánskej úcty a miesto modlitby. V tomto duchu v roku 2008 bola hora Živčákova vyhlásená žilinským diecéznym biskupom oficiálne za Mariánske pútnické miesto a miesto modlitby. O rok neskôr sa začala výstavba pútnického chrámu Panny Márie Matky Cirkvi. Práce na tejto veľkolepej stavbe boli ukončené v roku 2015 a slávnostná konsekrácia sa konala za účasti mnohých hostí a veľkého množstva pútnikov 4. októbra. Vedľa kostola prebieha výstavba exercično-pastoračného domu Marta, kde časť bude vyhradený pre rehoľníkov, ktorí majú v duchovnej správe pútnické miesto a časť bude slúžiť pre potreby veriacich, pre ubytovanie pútnikov a pod.</p>\n<p>Duchovná správa na hore Živčákova bola zriadená v roku 2012 a jej vedením sú poverení členovia rehole Misionárov Najsvätejších sŕdc Pána Ježiša a Panny Márie. Duchovná správa je od roku 2018 súčasťou Turzovského dekanátu Žilinskej diecézy.</p>\n<p>Názov projektu: Po stopách kulturně -přírodního dědictví česko-slovenskeho regionu,</p>\n<p>Kód projektu:NFP304030BMA2</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/castles/stavba-kaplnky-a-putnicke-miesto/",
        "en": "https://www.qrlink.sk/new/en/castles/stavba-kaplnky-a-putnicke-miesto/",
        "de": "https://www.qrlink.sk/new/de/castles/stavba-kaplnky-a-putnicke-miesto/",
        "ru": "https://www.qrlink.sk/new/ru/castles/stavba-kaplnky-a-putnicke-miesto/",
        "pl": "https://www.qrlink.sk/new/pl/castles/stavba-kaplnky-a-putnicke-miesto/",
        "hu": "https://www.qrlink.sk/new/hu/castles/stavba-kaplnky-a-putnicke-miesto/"
      }
    },
    {
      "id": "vodna-nadrz-v-porabke",
      "miesto": "porabka",
      "poradie": 1,
      "nazov": "Vodná nádrž v Porąbke",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2017/11/1.-Zapora-Wodna-w-Porąbce.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/03/1.-THE-WATER-RESERVOIR-IN-PORABKA.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 49.807201,
        "lng": 19.201918
      },
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m27!1m12!1m3!1d327904.5029241407!2d18.779605057085988!3d49.623889390125676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m12!3e0!4m4!2s49.403521%2C+18.625441!3m2!1d49.403521!2d18.625441!4m5!1s0x47169c6c0f601ec9%3A0x6c293935b5dfa916!2sZapora+Por%C4%85bka+w+Mi%C4%99dzybrodziu+Bialskim%2C+%C5%81azki%2C+Mi%C4%99dzybrodzie+Bialskie%2C+Po%C4%BEsko!3m2!1d49.8072015!2d19.201918199999998!5e0!3m2!1ssk!2ssk!4v1515246322097",
      "text": "<p>Vodná nádrž v Porąbke a zachytávač vody, dnes nazývaný Międzybrodzkie jazero, boli postavené v rokoch 1928 až 1937 v úzkej priechode medzi Zasolnicou a Kozubnikom. Toto bola prvá takáto investícia v Poľsku. Autorom projektu priehrady bol Ing. Gabriel Narutowicz (neskôr prezident Poľskej republiky). Priehrada je betónová, má výšku 37,3 m. Spolu s priehradami v Tresne a Czańcu tvorí kaskádu rieky Soła.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/vodna-nadrz-v-porabke/",
        "en": "https://www.qrlink.sk/new/en/vodna-nadrz-v-porabke/",
        "de": "https://www.qrlink.sk/new/de/vodna-nadrz-v-porabke/",
        "ru": "https://www.qrlink.sk/new/ru/vodna-nadrz-v-porabke/",
        "pl": "https://www.qrlink.sk/new/pl/vodna-nadrz-v-porabke/",
        "hu": "https://www.qrlink.sk/new/hu/vodna-nadrz-v-porabke/"
      }
    },
    {
      "id": "osada-kolonia-v-style-witkiewiczovcov",
      "miesto": "porabka",
      "poradie": 2,
      "nazov": "Osada „Kolonia” v štýle Witkiewiczovcov",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2017/11/2.Budynek-na-osiedlu-Kolonia-w-stylu-Witkiewiczowskim.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/03/2.-THE-SETTLEMENT-„KOLONIA“-IN-THE-WITKIEWICZ-STYLE.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 49.814007,
        "lng": 19.215975
      },
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m27!1m12!1m3!1d330746.79511533974!2d18.708142546361046!3d49.636220986069915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m12!3e0!4m5!1s0x47146eade122dcab%3A0x67cf567148392c17!2zTsOhZHJhxb5uw6EgMTEtMTMsIDAyMyA1NCBUdXJ6b3ZrYQ!3m2!1d49.403683!2d18.625353!4m4!2zNDnCujQ4JzUwLjQyOCIgTiAxOcK6MTInNTcuNTEzIiBF!3m2!1d49.8140078!2d19.2159758!5e0!3m2!1ssk!2ssk!4v1518034989352",
      "text": "<p>Kolonia je osada čarokrásnych drevených chát v štýle Witkiewicz postavených v medzivojnovom období pre staviteľov priehrady v Porąbke. Vzhľadom na početné a vzácne exempláre stromov a okrasných kríkov vytvára dojem dobre udržiavaného parku. Je to atraktívna pešia trasa.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/osada-kolonia-v-style-witkiewiczovcov/",
        "en": "https://www.qrlink.sk/new/en/osada-kolonia-v-style-witkiewiczovcov/",
        "de": "https://www.qrlink.sk/new/de/osada-kolonia-v-style-witkiewiczovcov/",
        "ru": "https://www.qrlink.sk/new/ru/osada-kolonia-v-style-witkiewiczovcov/",
        "pl": "https://www.qrlink.sk/new/pl/osada-kolonia-v-style-witkiewiczovcov/",
        "hu": "https://www.qrlink.sk/new/hu/osada-kolonia-v-style-witkiewiczovcov/"
      }
    },
    {
      "id": "obecne-centrum-kultury-v-porabke",
      "miesto": "porabka",
      "poradie": 3,
      "nazov": "Obecné centrum kultúry v Porąbke",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2017/11/Untitled.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/03/3.-THE-MUNICIPAL-CULTURE-CENTRE-IN-PORABKA.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 49.820541,
        "lng": 19.218326
      },
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m27!1m12!1m3!1d323090.6110147516!2d18.89864047528195!3d49.65615072895867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m12!3e0!4m4!2s49.403521%2C+18.625441!3m2!1d49.403521!2d18.625441!4m5!1s0x47169b88228babdb%3A0xb2f80ee62b834497!2zVXJ6xIVkIEdtaW55IFBvcsSFYmthLCBLcmFrb3dza2EsIFBvcsSFYmthLCBQb8S-c2tv!3m2!1d49.8205411!2d19.2183259!5e0!3m2!1ssk!2ssk!4v1515248318486",
      "text": "<p>Obecné centrum kultúry v Porąbke je základnou kultúrnou organizáciou v časti obce ak aj celej obci. Tu prebieha spolupráca so združeniami pôsobiacimi na území obce a organizačnými jednotkami organizujúcimi voľný čas pre deti a mládež. Organizuje súťaže, turnaje, výstavy, konkurzy. Pripravujem  noviny. Je tiež sídlom Mestskej verejnej knižnice a združení pôsobiacich v obci Porąbka.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/obecne-centrum-kultury-v-porabke/",
        "en": "https://www.qrlink.sk/new/en/obecne-centrum-kultury-v-porabke/",
        "de": "https://www.qrlink.sk/new/de/obecne-centrum-kultury-v-porabke/",
        "ru": "https://www.qrlink.sk/new/ru/obecne-centrum-kultury-v-porabke/",
        "pl": "https://www.qrlink.sk/new/pl/obecne-centrum-kultury-v-porabke/",
        "hu": "https://www.qrlink.sk/new/hu/obecne-centrum-kultury-v-porabke/"
      }
    },
    {
      "id": "regionalna-izba-v-porabke",
      "miesto": "porabka",
      "poradie": 4,
      "nazov": "Regionálna izba v Porąbke",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2017/11/4.-Izba-Regionalna-w-Porąbce.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/03/4.-THE-REGIONAL-ROOM-IN-PORABKA.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 49.820154,
        "lng": 19.217641
      },
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m27!1m12!1m3!1d341326.82404964266!2d18.810232123662075!3d49.634834235036905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m12!3e0!4m4!2s49.403521%2C+18.625441!3m2!1d49.403521!2d18.625441!4m5!1s0x47169c77d8aa7b05%3A0xcc8078c2f102c797!2zRG9tIEt1bHR1cnkgdyBQb3LEhWJjZSwgUnluZWssIFBvcsSFYmthLCBQb8S-c2tv!3m2!1d49.820147399999996!2d19.217641399999998!5e0!3m2!1ssk!2ssk!4v1515257318988",
      "text": "<p>Regionálna izba v Porąbke existuje od roku 1998. Iniciátorom jeho založenia bola Spoločnosť milovníkov Žywieckej krajiny. Nachádza sa tu  množstvo exponátov z obce a okolia. Hlavnou súčasťou zbierok Izby sú poľnohospodárske náradie a predmety každodennej potreby a originálne kroje, ktoré sa v tejto oblasti nosili pred niekoľkými desaťročiami. Sú tu aj obrazy a ľudové sochy.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/regionalna-izba-v-porabke/",
        "en": "https://www.qrlink.sk/new/en/regionalna-izba-v-porabke/",
        "de": "https://www.qrlink.sk/new/de/regionalna-izba-v-porabke/",
        "ru": "https://www.qrlink.sk/new/ru/regionalna-izba-v-porabke/",
        "pl": "https://www.qrlink.sk/new/pl/regionalna-izba-v-porabke/",
        "hu": "https://www.qrlink.sk/new/hu/regionalna-izba-v-porabke/"
      }
    },
    {
      "id": "kaplnka-st-urbana-ul-krakowska",
      "miesto": "porabka",
      "poradie": 5,
      "nazov": "Kaplnka st. Urbana; ul. Krakowska",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2017/11/5.-Kaplica-św.-Urbana.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/03/5.-THE-CHAPEL-OF-SAINT-URBAN-KRAKOWSKA-STREET.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 49.821086,
        "lng": 19.218623
      },
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m25!1m12!1m3!1d329484.85454185744!2d18.750619180929668!3d49.61242126866059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m10!3e0!4m4!2s49.403521%2C+18.625441!3m2!1d49.403521!2d18.625441!4m3!3m2!1d49.8208242!2d19.2179443!5e0!3m2!1ssk!2ssk!4v1515251549192",
      "text": "<p>Objekt bol postavený v rokoch 1823 až 1827 v centre obce Porąbka. Kaplnka je murovaná s vonkajším rozmerom 5 x 5 m a výškou muriva 5,20 m. Vnútri je malý kamenný oltár, obraz Matky Božskej Ružencovej a nad ním  obraz sv. Urbana. Na boku oltára sú dve kamenné sochy sv. Františka a st. Jána Nepomuckého. Veža je postavená v barokovo-gotickom štýle a je šindľová. V roku 1913 bola umiestnená  pamätná tabuľa na prednej stene kaplnky venovaná účastníkom januárového povstania.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/kaplnka-st-urbana-ul-krakowska/",
        "en": "https://www.qrlink.sk/new/en/kaplnka-st-urbana-ul-krakowska/",
        "de": "https://www.qrlink.sk/new/de/kaplnka-st-urbana-ul-krakowska/",
        "ru": "https://www.qrlink.sk/new/ru/kaplnka-st-urbana-ul-krakowska/",
        "pl": "https://www.qrlink.sk/new/pl/kaplnka-st-urbana-ul-krakowska/",
        "hu": "https://www.qrlink.sk/new/hu/kaplnka-st-urbana-ul-krakowska/"
      }
    },
    {
      "id": "kaplnka-na-tronce",
      "miesto": "porabka",
      "poradie": 6,
      "nazov": "Kaplnka na Tronce",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2017/11/6.-Kapliczka-na-Trzonce.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/03/6.-THE-CHAPEL-ON-TRONCA.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 49.814098,
        "lng": 19.279333
      },
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m27!1m12!1m3!1d329309.6808910739!2d18.853044728850854!3d49.63832994870063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m12!3e0!4m4!2s49.403521%2C+18.625441!3m2!1d49.403521!2d18.625441!4m5!1s0x47169b575814e7f9%3A0x3ef820685503f3fe!2zVHJ6b25rYSwgUG9yxIVia2EsIFBvxL5za28!3m2!1d49.8140983!2d19.279332699999998!5e0!3m2!1ssk!2ssk!4v1515253102781",
      "text": "<p>Kaplnka na Tronce stojí na turistickom chodníku vedúcom cez Bukowski Groń na prechod Kocierska. Je tu obraz Matky Božskej Snežnej. Každú prvú augustovú nedeľu sa tu konajú odpustkové zhromaždenia, na ktoré prichádzajú davy veriacich.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/kaplnka-na-tronce/",
        "en": "https://www.qrlink.sk/new/en/kaplnka-na-tronce/",
        "de": "https://www.qrlink.sk/new/de/kaplnka-na-tronce/",
        "ru": "https://www.qrlink.sk/new/ru/kaplnka-na-tronce/",
        "pl": "https://www.qrlink.sk/new/pl/kaplnka-na-tronce/",
        "hu": "https://www.qrlink.sk/new/hu/kaplnka-na-tronce/"
      }
    },
    {
      "id": "nadrz-czaniecka",
      "miesto": "porabka",
      "poradie": 7,
      "nazov": "Nádrž Czaniecka",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2017/11/7.-Zbiornik-Czaniecki.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/03/7.-THE-RESERVOIR-CZANIECKA.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 49.828962,
        "lng": 19.220428
      },
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m27!1m12!1m3!1d329383.0410845016!2d18.731005778144247!3d49.62748098024677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m12!3e0!4m4!2s49.403521%2C+18.625441!3m2!1d49.403521!2d18.625441!4m5!1s0x47169b8f3c0aa829%3A0xcc5bb416f293a946!2sJezioro+Czanieckie%2C+43-353%2C+Po%C4%BEsko!3m2!1d49.8289617!2d19.2204284!5e0!3m2!1ssk!2ssk!4v1515255053776",
      "text": "<p>Umelá nádrž Czaniecka bola postavená v roku 1966 s cieľom vytvoriť možnosť zberu vody pre Hornoslezskú priemyselnú oblasť a Bielsko Bialu s reguláciou stavu vody. Nachádza sa v malebnom údolí rieky Sola. Rozkladá sa na ploche 45 hektárov a jeho kapacita je 1,3 milióna m3 Nádrž má priame pásmom sanitárnej ochrany.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/nadrz-czaniecka/",
        "en": "https://www.qrlink.sk/new/en/nadrz-czaniecka/",
        "de": "https://www.qrlink.sk/new/de/nadrz-czaniecka/",
        "ru": "https://www.qrlink.sk/new/ru/nadrz-czaniecka/",
        "pl": "https://www.qrlink.sk/new/pl/nadrz-czaniecka/",
        "hu": "https://www.qrlink.sk/new/hu/nadrz-czaniecka/"
      }
    },
    {
      "id": "lesna-rezervacia-zasolnica",
      "miesto": "porabka",
      "poradie": 8,
      "nazov": "Lesná rezervácia Zasolnica",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2017/11/8.-porabka-zasolnica1.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/03/8.-THE-FOREST-RESERVATION-ZASOLNICA.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 49.817509,
        "lng": 19.202544
      },
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m27!1m12!1m3!1d329428.70636892144!2d18.851848268555383!3d49.62072682767876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m12!3e0!4m4!2s49.403521%2C+18.625441!3m2!1d49.403521!2d18.625441!4m5!1s0x47169c74aabfaf3b%3A0x63e9496d5d4f90e5!2sZasolnica%2C+34-312+Por%C4%85bka%2C+Po%C4%BEsko!3m2!1d49.8175087!2d19.2025445!5e0!3m2!1ssk!2ssk!4v1515255569148",
      "text": "<p>Lesná rezervácia &#8222;Zasolnica“ vznikla v roku 1973 na ochranu starého karpatského bukového lesa. Je to jedna z mála prírodných rezervácií v Malom Beskide. Jeho celková plocha je 16 hektárov. Zahŕňa pásmo Wilkowickej Magury, oblasť Chrobackej Łąky a svahy Zasolnickej Hory.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/lesna-rezervacia-zasolnica/",
        "en": "https://www.qrlink.sk/new/en/lesna-rezervacia-zasolnica/",
        "de": "https://www.qrlink.sk/new/de/lesna-rezervacia-zasolnica/",
        "ru": "https://www.qrlink.sk/new/ru/lesna-rezervacia-zasolnica/",
        "pl": "https://www.qrlink.sk/new/pl/lesna-rezervacia-zasolnica/",
        "hu": "https://www.qrlink.sk/new/hu/lesna-rezervacia-zasolnica/"
      }
    },
    {
      "id": "kostol-v-czancu",
      "miesto": "porabka",
      "poradie": 9,
      "nazov": "Kostol v Czaňcu",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2017/11/9-1.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/03/9.-THE-CHURCH-IN-CZAŃC.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 49.850158,
        "lng": 19.243509
      },
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m27!1m12!1m3!1d329543.79020647507!2d18.76338500749228!3d49.65812494403067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m12!3e0!4m4!2s49.403521%2C+18.625441!3m2!1d49.403521!2d18.625441!4m5!1s0x47169bafb4b41dcd%3A0xa67e87e83de27326!2zS2_Fm2Npw7PFgiBSenltc2tva2F0b2xpY2tpIFB3LiDFmndpxJl0ZWdvIEJhcnTFgm9taWVqYSBBcG9zdG_FgmEgdyBDemHFhGN1LCBLb8WbY2llbG5hIDksIDQzLTM1NCBDemFuaWVjLCBQb8S-c2tv!3m2!1d49.850158099999994!2d19.2435091!5e0!3m2!1ssk!2ssk!4v1515255904259",
      "text": "<p>Farský kostol zasvätený Svätému Bartholomejovi v Czańcu bol postavený v rokoch 1921-1924, na mieste dreveného kostola, ktorý sa datuje do 15. storočia. Po starom kostole ostala murovaná kostolná veža z roku 1764 a zakristia. Nový kostol bol postavený vďaka vtedajším majiteľom panstva Czaneckeho arcivojvodu Karola Štefana Habsburského z Żywca, patróna farnosti Czaniec. Autorom projektu chrámu bol slávny krakovský architekt Franciiszek Mączyński.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/kostol-v-czancu/",
        "en": "https://www.qrlink.sk/new/en/kostol-v-czancu/",
        "de": "https://www.qrlink.sk/new/de/kostol-v-czancu/",
        "ru": "https://www.qrlink.sk/new/ru/kostol-v-czancu/",
        "pl": "https://www.qrlink.sk/new/pl/kostol-v-czancu/",
        "hu": "https://www.qrlink.sk/new/hu/kostol-v-czancu/"
      }
    },
    {
      "id": "kaplnka-v-bujakowskom-lese",
      "miesto": "porabka",
      "poradie": 10,
      "nazov": "Kaplnka v Bujakowskom Lese",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2017/11/10.-Kapliczka-w-Bujakowskim-Lesie.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/03/10.-THE-CHAPEL-IN-THE-BUJAKOW-FOREST.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 49.841205,
        "lng": 19.19673
      },
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m27!1m12!1m3!1d348357.5423566117!2d18.701380685096765!3d49.6353677334239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m12!3e0!4m5!1s0x47146eade122dcab%3A0x67cf567148392c17!2zTsOhZHJhxb5uw6EgMTEtMTMsIDAyMyA1NCBUdXJ6b3ZrYQ!3m2!1d49.403683!2d18.625353!4m4!2zNDnCujUwJzI4LjMzOSIgTiAxOcK6MTEnNDguMjMiIEU!3m2!1d49.8412053!2d19.1967306!5e0!3m2!1ssk!2ssk!4v1518034633120",
      "text": "<p>Veľká kamenná kaplnka sa nachádza pod Bujakovskou Horou, postavená v 90. Rokoch 20-tého storočia. Jej história sa aj tak datuje do obdobia pred druhouj svetovou vojnou a jej poloha nie je náhodná. Kaplnka bola postavená v lese vedľa legendárneho liečivého zdroja &#8222;U dedka“. Vo vnútri kaplnky je socha Matky Božskej z Lurdov vytesaná ľudovým umelcom z Bujakowa.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/kaplnka-v-bujakowskom-lese/",
        "en": "https://www.qrlink.sk/new/en/kaplnka-v-bujakowskom-lese/",
        "de": "https://www.qrlink.sk/new/de/kaplnka-v-bujakowskom-lese/",
        "ru": "https://www.qrlink.sk/new/ru/kaplnka-v-bujakowskom-lese/",
        "pl": "https://www.qrlink.sk/new/pl/kaplnka-v-bujakowskom-lese/",
        "hu": "https://www.qrlink.sk/new/hu/kaplnka-v-bujakowskom-lese/"
      }
    },
    {
      "id": "vila-v-kobiernicach-a-pamiatkovy-park",
      "miesto": "porabka",
      "poradie": 11,
      "nazov": "Vila v Kobiernicach a pamiatkový park",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2017/11/11.Dworek-w-Kobiernicach.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/03/11.-THE-VILLA-IN-KOBIERNICE-AND-THE-REMEMBER-PARK.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 49.855608,
        "lng": 19.217363
      },
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d342937.4142361295!2d18.80230021809637!3d49.65126879764531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x47146eade122dcab%3A0x67cf567148392c17!2zTsOhZHJhxb5uw6EgMTEtMTMsIDAyMyA1NCBUdXJ6b3ZrYQ!3m2!1d49.403683!2d18.625353!4m5!1s0x47169bce5894abc1%3A0xfb7ab4c7291dfca5!2sParkowa+20A%2C+43-356+Kobiernice%2C+Po%C4%BEsko!3m2!1d49.855607899999995!2d19.217363!5e0!3m2!1ssk!2ssk!4v1518034501411",
      "text": "<p>Vila v Kobiernicki bol postavený v prvej polovici 19. storočia v klasicistickom štýle rodinou Tomkowičovcov.  Budova je prízemná, s vysokou strechou v tvare obdĺžnika. V strede budovy sa nachádza predsieň pred štyrmi iónovými stĺpmi a na stenu pilastry s iónovými korunami. Fasáda zo strany záhrady je veľmi zdobená, takmer úplne od podlahy, rozdelená pilastrami. Vo vnútri budovy sa nachádzajú neogotické krby. Vila sa nachádza v centre obce, obklopená historickým parkom, kde prežili mnohé druhy nádherných stromov až do súčasnosti. V rokoch 1886 – 1920 vo vile pôsobila  z rzhodnutia Národného parlamentu z roku 1884, Stredná poľnohospodárska škola. Škola bola založená s podporou vtedajšieho majiteľa panstva Kobiernice, baróna Herman Čeča z Koz. Tieto miesta sú naozaj kreatívne. Dnes tu sídli Dom kultúry, vzdelávacie centrum a sídlo združení pôsobiacich v obci.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/vila-v-kobiernicach-a-pamiatkovy-park/",
        "en": "https://www.qrlink.sk/new/en/vila-v-kobiernicach-a-pamiatkovy-park/",
        "de": "https://www.qrlink.sk/new/de/vila-v-kobiernicach-a-pamiatkovy-park/",
        "ru": "https://www.qrlink.sk/new/ru/vila-v-kobiernicach-a-pamiatkovy-park/",
        "pl": "https://www.qrlink.sk/new/pl/vila-v-kobiernicach-a-pamiatkovy-park/",
        "hu": "https://www.qrlink.sk/new/hu/vila-v-kobiernicach-a-pamiatkovy-park/"
      }
    },
    {
      "id": "zrucanina-hradu-na-wolku-a-historicka-trasa",
      "miesto": "porabka",
      "poradie": 12,
      "nazov": "Zrúcanina hradu na Wolku a historická trasa",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2017/11/12.Ruiny-Zamku-na-Wołku.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/03/12.-THE-RUIN-OF-THE-CASTLE-ON-WOLK-AND-THE-HISTORICAL-ROUTE.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 49.831074,
        "lng": 19.203092
      },
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m27!1m12!1m3!1d287118.2733634677!2d18.83482708665312!3d49.61824218687895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m12!3e0!4m4!2s49.403521%2C+18.625441!3m2!1d49.403521!2d18.625441!4m5!1s0x47169bf19b2dbc45%3A0xb6ab696e8bc1b03f!2sRuiny+zamku+Wo%C5%82ek%2C+43-353+Kobiernice%2C+Po%C4%BEsko!3m2!1d49.8310745!2d19.2030916!5e0!3m2!1ssk!2ssk!4v1515264312711",
      "text": "<p>Ruiny kedysi slávneho hradu sa nachádzajú na kopci s názvom &#8222;Volek“ v obci Kobiernice. Bol postavený na začiatku štrnásteho storočia a pozostával z dvoch budov obklopených dvojitým zemným valom a kamennou stenou, kotré mali plniť obrannú funkciu. Čoskoro sa však stal sídlom rytierských lupičov. Hrad bol nakoniec zničený v roku 1476 Kazimierzom Jagiellońskym. K dnešnému dňu sa zachovali iba pozostatky hradu, valy a priekopy okolo hradu a pozostatky štvoruholníkovej bašty – brány.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/zrucanina-hradu-na-wolku-a-historicka-trasa/",
        "en": "https://www.qrlink.sk/new/en/zrucanina-hradu-na-wolku-a-historicka-trasa/",
        "de": "https://www.qrlink.sk/new/de/zrucanina-hradu-na-wolku-a-historicka-trasa/",
        "ru": "https://www.qrlink.sk/new/ru/zrucanina-hradu-na-wolku-a-historicka-trasa/",
        "pl": "https://www.qrlink.sk/new/pl/zrucanina-hradu-na-wolku-a-historicka-trasa/",
        "hu": "https://www.qrlink.sk/new/hu/zrucanina-hradu-na-wolku-a-historicka-trasa/"
      }
    },
    {
      "id": "sarisska-galeria",
      "miesto": "presov",
      "poradie": 1,
      "nazov": "Šarišská galéria",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2018/04/Šarišská-galéria.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/05/18-Šarišská-galéria.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d654.4368803374607!2d21.2402468292687!3d48.9963619987063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDU5JzQ2LjkiTiAyMcKwMTQnMjYuOSJF!5e0!3m2!1ssk!2ssk!4v1524205053767",
      "text": "<p>Šarišská galéria patrí medzi najstaršie regionálne galérie na Slovensku. Bola založená v roku 1956, v meste bohatom na históriu a kultúrne tradície a sústreďuje sa v nej predovšetkým výtvarné umenie. Pôvodný názov &#8222;Krajská galéria“ sa neskôr zmenil na &#8222;Galéria výtvarného umenia“ a od roku 1991 používa názov &#8222;Šarišská galéria“.</p>\n<p>V roku 1957 bola galéria otvorená pre verejnosť a v tomto čase sídlila v budove bývalého evanjelického kolégia, ktoré je dnes národnou kultúrnou pamiatkou. V roku 1981 začala galéria užívať aj dva bývalé meštianske domy, pôvodne gotické s renesančnými a barokovými prestavbami, ktoré boli účelovo rekonštruované pre jej potreby. Dom na Hlavnej 53 patrí k najzaujímavejším gotickým domom v meste. Jeho priečelie je zakončené trojuholníkovým štítom. Na jeho vrchole sa nachádza plastika muža v kuruckom oblečení, ktorý drží v pravej ruke šabľu a v ľavej odťatú hlavu nepriateľa.</p>\n<p>Celý zbierkový fond, ktorý dnes tvorí okolo 3500 diel maliarstva, sochárstva, grafiky a kresby 15. – 20. storočia, galéria budovala od počiatku vlastným výskumom, zberom, vyhľadávaním a nákupmi. Vo svojej zbierkovej činnosti sa galéria zameriava na mapovanie histórie a súčasnosti výtvarného umenia regiónu Šariš, avšak vyhľadáva, získava a odborne spravuje i diela predstaviteľov umenia Slovenska a osobností umenia východného Slovenska.</p>\n<p>Šarišská galéria v Prešove kvalitou a bohatstvom svojich zbierkových fondov, svojou výstavnou, kultúrno-výchovnou a edičnou činnosťou patrí v súčasnosti k popredným galerijným zariadeniam na Slovensku a reprezentuje vzorový typ zbierkotvornej inštitúcie pôsobiacej v regióne.</p>\n<p>Otváracie hodiny:</p>\n<p>Pondelok:\tzatvorené</p>\n<p>Utorok:\t\t9.00 – 18.00</p>\n<p>Streda:\t\t9.00 – 18.00</p>\n<p>Štvrtok:\t9.00 – 18.00</p>\n<p>Piatok:\t\t9.00 – 18.00</p>\n<p>Sobota:\t\t14.00 – 18.00</p>\n<p>Nedeľa: \t14.00 – 18.00</p>\n<p>Adresa:</p>\n<p>Šarišská galéria</p>\n<p>Hlavná 51</p>\n<p>080 01 Prešov</p>\n<p>Tel.: 051/ 772 54 23</p>\n<p><a href=\"http://www.sgpresov.sk\">www.sgpresov.sk</a></p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/sarisska-galeria/",
        "en": "https://www.qrlink.sk/new/en/sarisska-galeria/",
        "de": "https://www.qrlink.sk/new/de/sarisska-galeria/",
        "ru": "https://www.qrlink.sk/new/ru/sarisska-galeria/",
        "pl": "https://www.qrlink.sk/new/pl/sarisska-galeria/",
        "hu": "https://www.qrlink.sk/new/hu/sarisska-galeria/"
      }
    },
    {
      "id": "frantiskansky-kostol",
      "miesto": "presov",
      "poradie": 2,
      "nazov": "Kostol sv. Jozefa",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2018/04/Františkánsky-kostol.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/05/04-Františkánsky-kostol.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2617.7549846962456!2d21.24166831622513!3d48.99621997930127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDU5JzQ2LjQiTiAyMcKwMTQnMzcuOSJF!5e0!3m2!1ssk!2ssk!4v1524205536953",
      "text": "<p>Barokový jednoloďový rímskokatolícky kostol s dvojvežovým priečelím, spojený na severnej strane s kláštorom. Zasvätený bol sv. Jozefovi. Svojimi rozmermi sa zaraďuje k veľkým chrámom Slovenska.</p>\n<p>Okolo r. 1380 postavila rehoľa karmelitánov nový kostol spolu s neveľkým kláštorom priamo na mieste pôvodného kostola z 11. storočia. Po odchode rehoľníkov z mesta r. 1559 obidve stavby pripadli pod mestskú správu, ktorá kláštor počas reformácie využívala na hospodársko-obranné účely.</p>\n<p>Rozhodnutím panovníka Leopolda I. z r. 1661 kostol s kláštorom pripadli františkánskej reholi z neďalekej Nižnej Šebastovej. Vďaka finančnej pomoci baróna Františka Klobušického z Prešova a barónky Šóšovej zo Solivaru čoskoro začala prestavba pôvodne gotického kostola, a to presbytéria a lode kostola, ku ktorej boli medzi piliermi pribudované bočné kaplnky.</p>\n<p>Podľa vzoru jezuitského kostola v Ríme bolo upravené celé priečelie s dvoma bočnými vežami. V r. 1708-1718 sa realizovala rozsiahlejšia rekonštrukcia kostola a kláštora, ktorú viedol košický staviteľ Ján Tornyossi a ktorú finančne podporovala rodina Klobušickovcov. Chrám má štyri oltáre a kazateľnicu.</p>\n<p>V stavebných prácach sa pokračovalo aj v neskoršom období, keď v r. 1732-1735 bolo priečelie chrámu doplnené štukovou ornamentikou a štyrmi pieskovcovými plastikami. Plastiky predstavovali sv. Róchusa, Floriána, Františka a Antona. Ich autorom bol Šimon Griming.</p>\n<p>Nádherne upravený bol aj interiér kostola. Novovytvorený hlavný oltár sv. Rodiny (1732) získal bohatú sochársku výzdobu. Jeho autor František Strecius na ňom umiestnil vyše 40 rozličných plastík, uprostred ktorých bol 12-ročný Ježiš, Panna Mária a sv. Jozef, ktorému bol kostol zasvätený. Obnovený chrám bol slávnostne vysvätený r. 1735 a stal sa ďalším prejavom sakrálneho umenia v Prešove.</p>\n<p>Nové rozsiahlejšie stavebné práce boli na kostole urobené o poldruha storočia neskôr, po veľkom požiari v decembri 1870, ktorý zničil interiér kostola, vrátane hlavného oltára. Po nákladných rekonštrukčných prácach vypukol 3. decembra 1888 nový požiar, pri ktorom zhoreli obe štíhle kostolné veže a zostalo z nich len torzo, ktoré výraznejšie nezmenilo svoju podobu do súčasnej doby.</p>\n<p>Kostol sv. Jozefa bol v r. 1984-1991 podrobený nevyhnutnej generálnej oprave, počas ktorej boli vymenené oba pieskovcové portály, takmer všetky okná a rímsy, strecha kostola a veží, ba i staré vežové hodiny. Úprava budovy kláštora bola ukončená r. 1993.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/frantiskansky-kostol/",
        "en": "https://www.qrlink.sk/new/en/frantiskansky-kostol/",
        "de": "https://www.qrlink.sk/new/de/frantiskansky-kostol/",
        "ru": "https://www.qrlink.sk/new/ru/frantiskansky-kostol/",
        "pl": "https://www.qrlink.sk/new/pl/frantiskansky-kostol/",
        "hu": "https://www.qrlink.sk/new/hu/frantiskansky-kostol/"
      }
    },
    {
      "id": "evanjelicke-kolegium",
      "miesto": "presov",
      "poradie": 3,
      "nazov": "Evanjelické kolégium",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2018/04/Evanjelické-kolégium.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/05/09-Evanjelické-kolégium.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2617.609886856688!2d21.237173316225192!3d48.998980979301535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDU5JzU2LjMiTiAyMcKwMTQnMjEuNyJF!5e0!3m2!1ssk!2ssk!4v1524230228595",
      "text": "<p>Neďaleko chrámu sv. Trojice stojí budova jedného z najvýznamnejších školských ústavov a rozhodne najvýznamnejšia pamiatka na protestantské školstvo v našich kultúrnych dejinách.</p>\n<p>O založení prešovského evanjelického kolégia rozhodli delegáti hornouhorských protestantských stavov 18. novembra 1665. V nasledujúcom roku bol položený jej základný kameň a o ďalší rok na jeseň sa začala výučba v novej škole. Kolégium nadviazalo na bohaté tradície mestskej humanistickej školy, kde popri viacerých významných osobnostiach krátky čas pôsobil i J. A. Komenský. Podľa vzoru podobných evanjelických škôl v Nemecku bolo zriadené desaťtriedne gymnázium s kurzom teológie a filozofie v najvyšších ročníkoch.</p>\n<p>Náhlym zvratom politického vývinu v krajine po Vešeléniho sprisahaní došlo však r. 1671 k násilnému prerušeniu tohto sľubného vývinu. Budovu obsadilo vojsko, o dva roky nato ju dostali jezuiti a zriadili si v nej svoju rezidenciu. Evanjelické kolégium bolo zrušené a profesori museli opustiť mesto. Tento stav trval do roku 1682, keď Imrich Tököli ako jeho bývalý žiak obnovil činnosť kolégia. Po porážke odboja sa doňho opäť nasťahovali jezuiti. Posledné obdobie rozkvetu prežívalo staré kolégium počas povstania Františka II. Rákociho.</p>\n<p>Po obsadení Prešova cisárskym vojskom v decembri 1710 kapitulačné podmienky garantovali síce zachovanie kolégia, avšak kráľovná Eleonóra v nasledujúcom roku prikázala evanjelikom odísť a odovzdať budovu opäť jezuitom. Počas ďalších šesťdesiatich rokov slúžila kolegiálna budova ako jezuitská rezidencia, až do zrušenia rádu r. 1773, keď sa spolu so susedným kostolom stala majetkom eráru.</p>\n<p>Od roku 1785 prebiehala výučba v pôvodnej budove kolégia. Dôležitým medzníkom vo vývine kolégia bol rok 1804, keď získalo status dištriktuálneho kolégia, s pôsobnosťou pre územie celého Potiského dištriktu evanjelickej a. v. cirkvi.</p>\n<p>Po páde absolutizmu a po rakúsko-maďarskom vyrovnaní (1867) nastal v 70. rokoch dynamický rozvoj školy. Kolégium sa stalo mohutným školským ústavom, združujúcim plnotriedne gymnázium, právnickú a teologickú akadémiu a učiteľský ústav.</p>\n<p>Po vzniku Československa prestalo kolégium v predvojnovej podobe existovať. Ostalo iba osemtriedne gymnázium, ktoré si udržalo tradične vysokú úroveň. Vyučovanie bolo spočiatku dvojjazyčné, od druhej polovice 20. rokov však slovenčina úplne nahradila maďarský vyučovací jazyk.</p>\n<p>Budova starého kolégia sa r. 1950 stala majetkom štátu. Odvtedy ju používali viaceré inštitúcie a pri nedostatočnej starostlivosti mesta a štátu postupne schátrala. V roku 1992 sa stala v zmysle reštitúcií opäť majetkom evanjelickej cirkvi augsburského vyznania.</p>\n<p>Pôvodná budova bola trojkrídlovou renesančnou stavbou s dvorom uprostred, uzavretá na južnej strane múrom so vstupnou bránou. Nad poschodím s radom renesančných okien sa týčil vysoký atikový múr s typickou štítkovou atikou. V roku 1716 spojili jezuiti už skôr nadstavané južné krídlo na poschodí so severnou emporou susedného (evanjelického) kostola. V r. 1724 celú budovu barokovo upravili. Radikálna prestavba kolégia prebiehala v r. 1867-1887 pod vedením architekta K. Benkóa. Počas nej bola zbúraná spojovacia chodba, nadstavané druhé poschodie a celá budova upravená v novorenesančnom duchu. Najkrajšou miestnosťou spomedzi interiérov je aula, kde sú umiestnené historické fondy kolegiálnej knižnice.</p>\n<p>V roku 1908 bol na severozápadnom nároží postavený pomník obetiam Caraffovho krvavého súdu z r. 1687 spolu s pamätnou tabuľou s menami popravených.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/evanjelicke-kolegium/",
        "en": "https://www.qrlink.sk/new/en/evanjelicke-kolegium/",
        "de": "https://www.qrlink.sk/new/de/evanjelicke-kolegium/",
        "ru": "https://www.qrlink.sk/new/ru/evanjelicke-kolegium/",
        "pl": "https://www.qrlink.sk/new/pl/evanjelicke-kolegium/",
        "hu": "https://www.qrlink.sk/new/hu/evanjelicke-kolegium/"
      }
    },
    {
      "id": "chram-sv-jana-krstitela",
      "miesto": "presov",
      "poradie": 4,
      "nazov": "Katedrálny chrám sv. Jána Krstiteľa",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2018/04/Chrám-sv.-Jána-Krstiteľa.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/05/03-Chrám-sv.-Jána-Krstiteľa.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2617.8637646743155!2d21.24080931622513!3d48.994149979301085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDU5JzM4LjkiTiAyMcKwMTQnMzQuOCJF!5e0!3m2!1ssk!2ssk!4v1524657054426",
      "text": "<p>Pôvodne gotický jednoloďový kostol. V 17. storočí bol spojený s minoritským kláštorom a v 18. storočí barokovo prestavaný do súčasnej podoby.</p>\n<p>V 1. polovici 14. storočia bola postavená na južnom okraji Prešova budova mestského špitála, ku ktorej bola ešte v tom istom storočí pristavená menšia kaplnka. Na jej mieste začali stavať r. 1429 nový špitálsky kostol. V tom čase sa tento kostol nachádzal mimo prvých mestských hradieb a až neskôr po ich presunutí sa dostal do vnútorného areálu mesta.</p>\n<p>Po nástupe reformácie sa špitálsky kostol stal kostolom evanjelického slovenského obyvateľstva Prešova.</p>\n<p>Po nariadení panovníka Leopolda I. bol v r. 1673 kostol odovzdaný reholi minoritov, ktorí prišli do Prešova v tom istom roku. Okrem kostola dostali do vlastníctva aj nemocnicu – špitál. Minoritský kostol sa dočkal rozsiahlejšej prestavby až v polovici 18. storočia. Prestavbu viedol prešovský staviteľ Gašpar Urlespacher v r. 1753-1754. Sanktuárium orientovali na západ, hlavný vstupný portál bol premiestnený na východnú stranu do ulice. Novovybudované hlavné priečelie bolo ešte väčšmi zvýraznené bohatou barokovou výzdobou. V priestore chrámovej lode boli vstavané dve bočné kaplnky. Tretia kaplnka vznikla v priestore pod vežou na severnej strane. Nad novovybudovaným chórom bola zachovaná cenná gotická sieťová klenba, pričom z pôvodného špitálskeho kostola sa ešte zachovala časť múru s opornými piliermi a kostolnou vežou.</p>\n<p>Pravdepodobne v závere tejto barokovej prestavby minoritského chrámu bolo postavené dnes už neexistujúce súsošie sv. Jána Nepomuckého, ktoré bolo umiestnené pred kláštorom, na kraji Hlavnej ulice.</p>\n<p>Práce v interiéri kostola pokračovali ďalej a v r. 1757 vznikli štyri väčšie fresky zo života sv. Jána Krstiteľa. Ich autorom bol dnes neznámy košický maliar. Dodnes sú zachované na strope chrámovej lode.</p>\n<p>Ďalšia úprava kostola sa realizovala až v r. 1835, keď už kostol patril od r. 1818 gréckokatolíckemu biskupstvu. V r. 1846 bol chrám upravovaný pre potreby východného rítu. Bol upravený oltár, vytvorený ikonostas, biskupský trón, kazateľnica a kanonické lavice.</p>\n<p>Pod chrámom je rozsiahla krypta. V nej sú pochovaní piati biskupi, kanonici, členovia rádu minoritov a jezuiti.</p>\n<p>V 50. rokoch bol chrám daný do užívania pravoslávnej cirkvi, keď bola v Československu zrušená gréckokatolícka cirkev. Naspäť sa jej vrátil v roku 1968, po znovuobnovení gréckokatolíckej cirkvi. V rokoch 1977-1980 sa pristúpilo k jeho generálnej renovácii, ale k rozsiahlejšej rekonštrukcii celého komplexu došlo až v r. 1994-1995.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/chram-sv-jana-krstitela/",
        "en": "https://www.qrlink.sk/new/en/chram-sv-jana-krstitela/",
        "de": "https://www.qrlink.sk/new/de/chram-sv-jana-krstitela/",
        "ru": "https://www.qrlink.sk/new/ru/chram-sv-jana-krstitela/",
        "pl": "https://www.qrlink.sk/new/pl/chram-sv-jana-krstitela/",
        "hu": "https://www.qrlink.sk/new/hu/chram-sv-jana-krstitela/"
      }
    },
    {
      "id": "susosie-immaculaty",
      "miesto": "presov",
      "poradie": 5,
      "nazov": "Súsošie Immaculaty",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2018/04/Súsošie-Imacculata.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/05/10-Súsošie-Immaculaty.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2617.568039908227!2d21.238498961312196!3d48.99977724413268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDU5JzU3LjgiTiAyMcKwMTQnMjIuMCJF!5e0!3m2!1ssk!2ssk!4v1524657169917",
      "text": "<p>Dominantou severnej časti námestia je obnovené barokové súsošie Immaculaty, obklopené parčíkom, Prešovčanmi nesprávne nazývané Trojica.</p>\n<p>V roku 1751 dali postaviť toto súsošie jezuiti ako pamiatku na mor. Stojí na mieste, kde bolo od marca do septembra 1687 popravisko Prešovského krvavého súdu.</p>\n<p>Pieskovcové súsošie v podobe trojdielneho podstavca so sochami štyroch svätcov – sv. Mikuláša, biskupa sv. Jána Nepomuckého, sv. Štefana a sv. Františka Xaverského – je dielom košického sochára Jozefa Hartmanna, ktorý patril medzi najznámejších sakrálnych umelcov svojej doby na východnom Slovensku. Dominantu diela tvorí pozlátená socha Madony s dieťaťom, korunou a žezlom. Z pôvodných sôch na podstavci sa dodnes zachovali iba plastiky sv. Mikuláša a sv. Jána Nepomuckého.</p>\n<p>Silne poškodené a zvetrané súsošie bolo reštaurované v r. 1967 a najnovšie v rokoch 1995-1997.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/susosie-immaculaty/",
        "en": "https://www.qrlink.sk/new/en/susosie-immaculaty/",
        "de": "https://www.qrlink.sk/new/de/susosie-immaculaty/",
        "ru": "https://www.qrlink.sk/new/ru/susosie-immaculaty/",
        "pl": "https://www.qrlink.sk/new/pl/susosie-immaculaty/",
        "hu": "https://www.qrlink.sk/new/hu/susosie-immaculaty/"
      }
    },
    {
      "id": "mestske-hradby",
      "miesto": "presov",
      "poradie": 6,
      "nazov": "Mestské hradby – Floriánova brána",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2018/04/Mestské-hradby-Floriánova-brána.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/05/16-Mestské-hradby.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2617.7372747821905!2d21.235212316225226!3d48.99655697930139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDU5JzQ3LjYiTiAyMcKwMTQnMTQuNiJF!5e0!3m2!1ssk!2ssk!4v1524657312693",
      "text": "<p>Mestské hradby boli jednou z najdôležitejších mestských výsad v stredoveku. Začiatok ich stavby sa datuje od roku 1374 a právo na ich stavbu dostal Prešov od panovníka Ľudovíta I.</p>\n<p>Hradby mali elipsovitý pôdorys, mali jedenásť veží, boli dvojité a medzi nimi sa nachádzala priekopa, do ktorej sa v čase nebezpečenstva vypúšťala voda z mlynského potoka.</p>\n<p>V 18. storočí sa stala vojenská funkcia mesta neaktuálna, preto cisárovná Mária Terézia vydala v roku 1751 príkaz na zrušenie mestských hradieb.</p>\n<p>Hradobný systém bol zachytený na mape, ktorú zhotovil prešovský geometer Gaspar v r. 1768, tesne pred ich zlikvidovaním.</p>\n<p>Do dnešnej doby sa z hradieb zachovala iba malá časť. Najväčším objektom zo zachovaných častí mestského opevnenia je Floriánova brána na rovnomennej ulici. Slúžila na vstup do mesta pre peších prichodiacich a na vyústenie mestského kanálu. Do dnešnej podoby bola upravená na konci 18. storočia. S priľahlou budovou dnes patrí Hotelovej akadémii v Prešove.</p>\n<p>Jedinou zachovanou delovou baštou je polygonálny bastión, stojaci východne od františkánskeho kostola. V jeho susedstve pod Kmeťovým stromoradím sa tiahne časť zachovanej priekopy s hradobným múrom. Na južnej strane sa v nej rozprestiera Záhrada umenia.</p>\n<p>Na Kováčskej ulici sa zachovala pôvodná bašta zo staršieho obdobia výstavby hradieb, v ktorej sa dnes nachádza kaviareň a reštaurácia.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/mestske-hradby/",
        "en": "https://www.qrlink.sk/new/en/mestske-hradby/",
        "de": "https://www.qrlink.sk/new/de/mestske-hradby/",
        "ru": "https://www.qrlink.sk/new/ru/mestske-hradby/",
        "pl": "https://www.qrlink.sk/new/pl/mestske-hradby/",
        "hu": "https://www.qrlink.sk/new/hu/mestske-hradby/"
      }
    },
    {
      "id": "kostol-sv-mikulasa",
      "miesto": "presov",
      "poradie": 7,
      "nazov": "Konkatedrála sv. Mikuláša",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2018/04/Kostol-sv.-Mikuláša.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/05/01-Kostol-sv.-Mikuláša.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2617.663596363539!2d21.23751631622515!3d48.997958979301515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDU5JzUyLjciTiAyMcKwMTQnMjIuOSJF!5e0!3m2!1ssk!2ssk!4v1524657362805",
      "text": "<p>Najvýznamnejšou historickou dominantou Prešova je nesporne konkatedrála sv. Mikuláša, ktorá je zároveň najstaršou budovou a jedinou dochovanou gotickou sakrálnou stavbou v meste. Chrám je gotickým trojlodím, tzv. sieňovým kostolom, ktoré boli rozšírené predovšetkým v nemeckých oblastiach.</p>\n<p>V minulosti ho považovali za jeden z najdokonalejších sieňových kostolov v bývalom Uhorsku a spomedzi stavieb rovnakého typu na Slovensku sa svojimi rozmermi (dĺžka 54,70 m, šírka 34,45 m a výška vnútorného priestoru 16 m) patrí konkatedrála sv. Mikuláša v Prešove k najkrajším monumentálnym stavbám neskorej gotiky na Slovensku.</p>\n<p>Jeho pôvod siaha ešte do predmestského obdobia a pravdepodobne už od 13. storočia stál na jeho mieste kostol nemeckej osady. Azda v tých časoch má svoj pôvod i patrocínium sv. Mikuláša, ktoré so sebou priniesli nemeckí kolonisti. Vlastný farský kostol si mesto postavilo koncom 40. rokov 14. storočia. Dokladá to listina kráľovnej Alžbety z r. 1347, dovoľujúca Prešovčanom kdekoľvek v Šarišskej stolici lámať kameň, určený na jeho výstavbu. Možno predpokladať, že táto prvá stavba bola vrcholne gotickým trojlodím s pôdorysom v podstate zhodným s dnešným kostolom. Zachovali sa z nej hlavice stĺpov a konzoly v severnej stene a triumfálnom oblúku, ktoré zároveň poukazujú na výšku pôvodného chrámu. Jeho staviteľov pripomína reliéf bradatej hlavy v severnej stene, pravdepodobne podobizeň kamenárskeho majstra. V priebehu 15. storočia boli potom vykonané viaceré stavebné úpravy a prístavby. Najradikálnejším zásahom bola však prestavba v rokoch 1502-1511, ktorú viedol prešovský kamenársky majster Ján Brengyszeyn. V jej priebehu prebudovali celé trojlodie, o niekoľko metrov zvýšili všetky steny a po pristavaní niektorých ďalších častí (južná predsieň) dali celému chrámu dnešnú neskorogotickú podobu. Lode a presbytérium vtedy zaklenuli krásnymi sieťovými a hviezdovými klenbami, predsieň pod vežou u nás pomerne vzácnou kruhovou klenbou. Veža kostola bola dokončená r. 1515. Dnešná podoba jej vrcholu je však z r. 1904.</p>\n<p>Ďalšie storočia priniesli iba niektoré menšie úpravy a prístavby, ako južný barokový portál z 18. storočia a severný empírový portikus z r. 1828. Oveľa väčšie zmeny prekonalo iba vnútorné zariadenie.</p>\n<p>Kostol viackrát vyhorel, a to v r. 1685, 1711, 1780, 1788, 1886 a naposledy r. 1887. Po tomto požiari zastrešili vežu iba provizórnou strieškou a v r. 1903-1904 pseudogotickou strechou podľa projektu  staviteľa F. Schuleka.</p>\n<p>V päťdesiatych rokoch minulého storočia kostol prešiel generálnou opravou, výsledkom ktorej bola nová travertínová dlažba, omietka, maľba, farebné okná, rozhlas, či Krížová cesta. V interiéroch sa nachádzajú plastiky z diela Majstra Pavla z Levoče, ale aj ďalšie hodnotné fragmenty v gotickom slohu. K najpozoruhodnejšími pamiatkami konkatedrály patrí hlavný oltár sv. Mikuláša, ktorý je symbiózou gotického a barokového umenia.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/kostol-sv-mikulasa/",
        "en": "https://www.qrlink.sk/new/en/kostol-sv-mikulasa/",
        "de": "https://www.qrlink.sk/new/de/kostol-sv-mikulasa/",
        "ru": "https://www.qrlink.sk/new/ru/kostol-sv-mikulasa/",
        "pl": "https://www.qrlink.sk/new/pl/kostol-sv-mikulasa/",
        "hu": "https://www.qrlink.sk/new/hu/kostol-sv-mikulasa/"
      }
    },
    {
      "id": "evanjelicky-a-v-chram-sv-trojice",
      "miesto": "presov",
      "poradie": 8,
      "nazov": "Evanjelický a. v. chrám sv. Trojice",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2018/04/Evanjelický-kostol-sv.-Trojice.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/05/02-Evanjelický-chrám-svetej-trojice.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2617.636794267558!2d21.23776931622521!3d48.99846897930142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDU5JzU0LjUiTiAyMcKwMTQnMjMuOSJF!5e0!3m2!1ssk!2ssk!4v1524657402832",
      "text": "<p>Tento u nás pomerne ojedinelý renesančný chrám je jedným z malého počtu protestantských kostolov na Slovensku, postavených v období reformácie. Dĺžka stavby je 36 m, šírka 12 m, vnútorná výška je 13m.</p>\n<p>Evanjelici i kalvíni používali poväčšine staršie gotické, predtým katolícke chrámy a iba výnimočne si budovali nové. V Prešove nastala takáto situácia v prvej polovici 17. storočia, keď natoľko vzrástol počet maďarských mešťanov, že im prestal postačovať kostolík na Slovenskej ulici, slúžiaci dovtedy ako maďarský evanjelický chrám. Nový kostol rozhodla mestská rada postaviť na námestí vedľa nemeckého, na mieste už zaniknutého stredovekého kostola sv. Ladislava. Základný kameň bol slávnostne položený 25. júla 1642.</p>\n<p>Stavba chrámu trvala päť rokov a ukončená bola slávnostným vysvätením 16. júna 1647. Pamiatkou na ňu je kamenná tabuľa s latinským nápisom, umiestnená nad hlavným portálom. Kostol bol riešený ako typické renesančné jednolodie s trojbokým zakončením, speváckymi tribúnami na poschodí po oboch stranách lode a organovou emporou na severnej strane. Samotné architektonické i výtvarné poňatie stavby, jej strohá výzdoba a vnútorné zariadenie prísne zodpovedali potrebám evanjelickej cirkvi.</p>\n<p>Ďalšie osudy chrámu spolu so susedným kolégiom sú potom vlastne kronikou dejín reformácie a protireformácie v meste. Po prvý raz skonfiškovali úrady kostol r. 1670, po potlačení Vešeléniho sprisahania. O tri roky, po krátkom obsadení mesta kurucmi, dostali chrám jezuiti, ktorí sa vtedy usadili v rovnako zhabanej budove kolégia. Vlastnili ho 89 rokov. Ešte dvakrát sa dostal do rúk právoplatných majiteľov: počas povstania Imricha Tököliho a povstania Františka Rákociho.</p>\n<p>Po porážke odboja, napriek podmienkam kapitulácie, prikázala r. 1711 kráľovná Eleonóra evanjelikom opustiť všetky kostoly na území mesta. Do chrámu sa opäť nasťahovali jezuiti a zotrvali v ňom až do zrušenia rádu r. 1773. Počas tohto obdobia došlo k niektorým neskôr odstráneným stavebným úpravám. Najvýznamnejšou z nich bolo prepojenie severnej empory klenutou zastrešenou chodbou, spájajúcou chrám s južným traktom budovy kolégia. R. 1673 postavili jezuiti hlavný oltár Panny Márie a bočné oltáre sv. Ignáca a Františka Xaverského, v r. 1696 ešte oltár Ukrižovaného Krista a Bolestnej Panny Márie. V roku 1731 postavili ešte ďalšie štyri oltáre.</p>\n<p>Po rozpustení Spoločnosti Ježišovej pápežom Klementom XIV. r. 1773 sa dostal kostol do majetku komory a r. 1783 sa spolu s kolégiom stal predmetom verejnej dražby. O kúpu mal záujem magistrát i niektorí obchodníci. Evanjelikom sa ho podarilo získať za 6000 zlatých s pomocou cisára a kráľa Jozefa II., ktorý ich navštívil už r. 1770 a dobre poznal ich problémy. Vtedy získali i budovu kolégia.</p>\n<p>Od roku 1783 sa stal chrám opäť majetkom evanjelickej a. v. cirkvi. Od začiatku, až do roku 1945, ho spoločne používali oba zbory, slovenský a nemecký (neskôr maďarsko – nemecký) a oba sa podieľali na jeho udržiavaní a opravách. Naposledy vyhorel r. 1913. Požiar vtedy úplne zničil oltárny obraz a silne poškodil organ i oltár. Posledná dôkladná obnova kostola prebehla v r. 1980-1981.</p>\n<p>Organ bol viackrát renovovaný, naposledy v roku 1997. Patrí medzi najkrajšie barokové pamiatky Prešova.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/evanjelicky-a-v-chram-sv-trojice/",
        "en": "https://www.qrlink.sk/new/en/evanjelicky-a-v-chram-sv-trojice/",
        "de": "https://www.qrlink.sk/new/de/evanjelicky-a-v-chram-sv-trojice/",
        "ru": "https://www.qrlink.sk/new/ru/evanjelicky-a-v-chram-sv-trojice/",
        "pl": "https://www.qrlink.sk/new/pl/evanjelicky-a-v-chram-sv-trojice/",
        "hu": "https://www.qrlink.sk/new/hu/evanjelicky-a-v-chram-sv-trojice/"
      }
    },
    {
      "id": "neptunova-fontana",
      "miesto": "presov",
      "poradie": 9,
      "nazov": "Neptúnova fontána",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2018/04/Neptúnová-fontána.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/05/14-Neptúnova-fontána.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2617.700961292418!2d21.23841231622518!3d48.99724797930143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDU5JzUwLjEiTiAyMcKwMTQnMjYuMiJF!5e0!3m2!1ssk!2ssk!4v1524657454837",
      "text": "<p>Neptúnova fontána je jedinou zachovanou pôvodnou mestskou cisternou. Pred postavením vodovodu slúžilo občanom ako rezervoár úžitkovej vody desať podobných cisterien.</p>\n<p>Súsošie Neptúna dal postaviť na začiatku 19. storočia židovský obchodník Marek Holländer ako výraz vďaky za to, že mu mestská rada dovolila usadiť sa a podnikať v Prešove. Až do čias Jozefa II. nesmeli okrem času trhov bývať v Prešove žiadni Židia. Ako prvý úspešne porušil tento zákaz v druhej polovici 80. rokov 18. storočia bohatý haličský obchodník M. Holländer. Napriek vtedy už platným zákonom (zvláštny dekrét Jozefa II. dovoľoval židom usádzať sa v kráľovských mestách s výnimkou banských) proti jeho prítomnosti vystúpila tak mestská rada, ako i obchodnícky cech. Vďaka dobrým vzťahom s panovníkom sa mu však podarilo v meste ostať, zakúpiť si dom, obchod, a dokonca získať aj meštianske práva. Z vďačnosti dal potom postaviť v jednej z cisterien túto fontánu.</p>\n<p>Autorom sochy Neptúna s trojzubcom, obklopeného morskými živočíchmi (rybou, žabou, hadom, korytnačkou a krokodílom), je košický kamenár a sochár Vincent Staviarsky, ktorý súsošie ukončil v r. 1826.</p>\n<p>Súsošie Neptúna bolo reštaurované začiatkom 90. rokov 20. storočia.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/neptunova-fontana/",
        "en": "https://www.qrlink.sk/new/en/neptunova-fontana/",
        "de": "https://www.qrlink.sk/new/de/neptunova-fontana/",
        "ru": "https://www.qrlink.sk/new/ru/neptunova-fontana/",
        "pl": "https://www.qrlink.sk/new/pl/neptunova-fontana/",
        "hu": "https://www.qrlink.sk/new/hu/neptunova-fontana/"
      }
    },
    {
      "id": "hlavna-ulica",
      "miesto": "presov",
      "poradie": 10,
      "nazov": "Hlavná ulica",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2018/04/Hlavná-ulica.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/05/15-Hlavná-ulica.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2617.6785213623825!2d21.238496316225312!3d48.99767497930148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDU5JzUxLjYiTiAyMcKwMTQnMjYuNSJF!5e0!3m2!1ssk!2ssk!4v1524657540789",
      "text": "<p>Hlavná ulica s charakteristickým šošovkovitým námestím je jednou z najstarších častí mesta, v pôdoryse existovala už v predmestskom období. Z pôvodnej dediny nemeckých kolonistov z 13. storočia vznikla trhová osada, ktorá sa stala v ďalšom období jadrom mesta. Väčšina domov má pôvod v stredoveku. Hlavným stavebným materiálom bolo drevo, kamenné budovy vznikali v 14. storočí – farský kostol sv. Mikuláša, radnica, fara, špitál, škola a niektoré domy zámožných mešťanov.</p>\n<p>V priebehu 15. – 16. storočia bol už prevládajúcim stavebným materiálom kameň. Z tých čias pochádzajú pôvodne gotické domy priechodového typu. Najväčší stavebný rozvoj mesta a námestia bol v období renesancie v 16. a 17. storočí. Postupne boli zastavané všetky nové parcely a námestie sa predĺžilo smerom na juh. Väčšina domov dostala vtedy nové renesančné priečelia, typické prešovské atiky, schodištia, portály a ostenia. Najvýstavnejšie boli verejné mestské objekty,, najvýznamnejšou renesančnou pamiatkou v meste je Rákociho palác.</p>\n<p>Z barokového obdobia bola najrozsiahlejšou stavbou prestavba kláštora s chrámom sv. Jána Krstiteľa, pôvodnú barokovú fasádu má zachovanú palác Klobušickovcov. Z obdobia klasicizmu je významnou budovou gréckokatolícky biskupský palác, ďalšie stavby predstavujú napr. budova reduty s Čiernym orlom a Neptúnova fontána.</p>\n<p>Jedným z najrozsiahlejších zásahov do architektonického vývinu ulice boli prestavby po veľkom požiari v roku 1887. Niektoré objekty boli zbúrané a postavené nové, staré renesančné a klasicistické priečelia nahradili nové, väčšinou v duchu historizujúcich slohov. Bola ukončená prestavba evanjelického kolégia, prestavaná bola radnica, divadlo, Čierny orol a ďalšie objekty.</p>\n<p>Výrazným zásahom do podoby námestia bolo zriadenie parku južne od kostola sv. Mikuláša.</p>\n<p>Najvýznamnejšie historické a architektonické pamiatky mesta Prešov sú sústredené v jadre jeho námestia. V roku 1955 sa stalo historické jadro Prešova mestskou pamiatkovou rezerváciou a odvtedy bolo postupne reštaurované, najvýraznejšie v 90. rokoch 20. storočia.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/hlavna-ulica/",
        "en": "https://www.qrlink.sk/new/en/hlavna-ulica/",
        "de": "https://www.qrlink.sk/new/de/hlavna-ulica/",
        "ru": "https://www.qrlink.sk/new/ru/hlavna-ulica/",
        "pl": "https://www.qrlink.sk/new/pl/hlavna-ulica/",
        "hu": "https://www.qrlink.sk/new/hu/hlavna-ulica/"
      }
    },
    {
      "id": "ortodoxna-synagoga",
      "miesto": "presov",
      "poradie": 11,
      "nazov": "Ortodoxná synagóga",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2018/04/Ortodoxná-synagóga.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/05/05-Ortodoxná-synagóga.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2617.5566495079597!2d21.235676316225227!3d48.9999939793017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDU5JzYwLjAiTiAyMcKwMTQnMTYuMyJF!5e0!3m2!1ssk!2ssk!4v1524657588771",
      "text": "<p>Komplex objektov prešovskej ortodoxnej židovskej náboženskej obce vznikal postupne od 80. rokov 19. storočia do polovice 30. rokov 20. storočia. Vznikla tak samostatná uzavretá štvrť v priestore za bývalými mestskými hradbami.</p>\n<p>V strede nádvoria medzi rabinátom a školou stojí stará ortodoxná synagóga, dnes jediná funkčná synagóga v meste. Postavená bola v roku 1898 podľa projektu synagógy v meste Tokaj ako výstavná sakrálna dvojpodlažná budova v maurskom štýle s viacerými orientalizujúcimi prvkami.</p>\n<p>Pomerne strohé neorománsko-maurské fasády skrývajú doslova poklad synagogálnej architektúry. Bohato zdobené interiéry s plne zachovaným inventárom patria k najatraktívnejším židovským pamiatkam na Slovensku. Z vnútorného zariadenia je okrem almemoru cenný predovšetkým umelecky zhotovený svätostánok (aron hakodeš) od košického sochára Bacsóa. Celý interiér zdobia nádherné ornamentálne maľby od Andreja Grazla, ktoré si napriek značnému poškodeniu objektu a bez dôkladnejšej rekonštrukcie doteraz uchovali pôvodnú sýtosť, výraznosť a tvar.</p>\n<p>Svojmu účelu synagóga slúžila do roku 1942. Na jar a v lete toho roku sa stala spolu s priľahlým priestranstvom miestom zhromaždenia prešovských židov bezprostredne pred deportáciami. Odtiaľto gardisti odvliekli niekoľko tisíc občanov mesta do transportov, smerujúcich do koncentračných táborov. Počas okupácie Prešova si nemecká armáda zriadila v synagóge maštale a garáže.</p>\n<p>Po oslobodení v nej bola zariadená kuchyňa pre navrátilcov. Po nutných opravách a doplnení vnútorného zariadenia bola v októbri 1948 slávnostne vysvätená. Odvtedy slúži ako jediná synagóga jedinej židovskej náboženskej obce v Prešove.</p>\n<p>Ako najkrajšiu funkčnú synagógu na Slovensku sa ju v r. 1989-90 neúspešne snažili získať a previezť do USA židia z Los Angeles. V auguste 1991 bol na nádvorí pred vchodom do synagógy v prítomnosti najvyšších slovenských štátnych predstaviteľov odhalený pomník viac ako šiestim tisícom obetí holocaustu z Prešova a okolia.</p>\n<p>V novembri 1993 inštalovalo Slovenské národné múzeum na poschodí synagógy (v ženskej galérii) časť nedávno z Prahy navrátených zbierok predvojnového prešovského židovského múzea. Stála expozícia Bárkányovej zbierky judaík (Eugen Bárkány – zakladateľ múzea r. 1928), ktorá takto vznikla, je ojedinelým spojením a zosúladením zbierok múzea s interiérom jednej z najkrajších synagóg u nás.</p>\n<p>Otváracie hodiny:</p>\n<p>Pondelok: \tzatvorené</p>\n<p>Utorok:\t\t11.00 – 15.00</p>\n<p>Streda:\t\t11.00 – 15.00</p>\n<p>Štvrtok:\t09.00 – 13.00</p>\n<p>Piatok:\t\t09.00 – 13.00</p>\n<p>Sobota:\t\tzatvorené</p>\n<p>Nedeľa:\t\t14.00 – 16.00</p>\n<p>Adresa:</p>\n<p>Ortodoxná synagóga</p>\n<p>Okružná 32</p>\n<p>080 01 Prešov</p>\n<p>Tel.: 051/ 773 16 38</p>\n<p><a href=\"http://www.snm.sk\">www.snm.sk</a></p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/ortodoxna-synagoga/",
        "en": "https://www.qrlink.sk/new/en/ortodoxna-synagoga/",
        "de": "https://www.qrlink.sk/new/de/ortodoxna-synagoga/",
        "ru": "https://www.qrlink.sk/new/ru/ortodoxna-synagoga/",
        "pl": "https://www.qrlink.sk/new/pl/ortodoxna-synagoga/",
        "hu": "https://www.qrlink.sk/new/hu/ortodoxna-synagoga/"
      }
    },
    {
      "id": "greckokatolicky-biskupsky-palac",
      "miesto": "presov",
      "poradie": 12,
      "nazov": "Gréckokatolícky biskupský palác",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2018/04/Gréckokatolický-biskupský-palác.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/05/17-Gréckokatolícky-biskupský-palác.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2617.882472384162!2d21.24070831622515!3d48.993793979300996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDU5JzM3LjciTiAyMcKwMTQnMzQuNCJF!5e0!3m2!1ssk!2ssk!4v1524657637421",
      "text": "<p>Organickú súčasť komplexu gréckokatolíckeho kostola a ďalších budov tvorí biskupský palác, ktorý vznikol z bývalého kláštora minoritov.</p>\n<p>Jeho história sa začala písať prestavbou budovy mestského špitálu a chudobinca, ktoré získali minoriti r. 1671, na nový kláštor. R. 1698 prikročili k výstavbe novej budovy svojho kláštora, a to pri Dolnej mestskej bráne, na mieste, kde sa predtým nachádzali štyri menšie remeselnícke domy.</p>\n<p>Pôsobenie minoritov v Prešove ukončilo nariadenie cisára Jozefa II. z 12. júla 1787, ktorým bol kláštor zrušený. Krátko po odchode posledných rehoľníkov (1788) vypukol v Prešove veľký požiar, ktorý zachvátil aj budovu zrušeného kláštora minoritov. Jeho opravu už zabezpečovalo mesto, ktoré v opravenej budove umiestnilo stálu vojenskú posádku.</p>\n<p>R. 1791 bolo z Košíc do Prešova premiestnené sídlo gréckokatolíckeho vikariátu, a to do priestorov bývalého minoritského kláštora. 22. septembra 1818 pápež Pius VII. vydal bulu Relata semper, ktorou zriaďoval gréckokatolícke biskupstvo v Prešove. Celý komplex bývalého kláštora bol potom v r. 1821 pridelený prvému biskupovi novozriadenej prešovskej gréckokatolíckej diecézy Gregorovi Tarkovičovi (1754-1841). Vtedy sa začalo s postupnou renováciou komplexu a úpravou novovzniknutého biskupského sídla.</p>\n<p>Jozef Gaganec, v poradí druhý prešovský biskup, dal v r. 1848 urobiť rozsiahlu prestavbu sídla, pri ktorej vznikla dnešná dvojpodlažná palácová budova s klasicisticky upraveným priečelím. Nad hlavným vchodom bol umiestnený veľký trojuholníkový štít (tympanón), dominantou strednej časti budovy sa stala veľká kupola.</p>\n<p>Biskupský palác bol spolu s chrámom poškodený 20. decembra 1944 pri bombardovaní Prešova sovietskymi lietadlami. Rekonštrukcia oboch stavieb sa začala hneď po skončení vojny.</p>\n<p>V r. 1950, kedy bola rozhodnutím najvyšších štátnych orgánov zrušená gréckokatolícka cirkev v Československu, prešli obe stavby – kostol i biskupský palác do vlastníctva pravoslávnej cirkvi. Biskupský palác sa stal na štyri desaťročia sídlom prešovského pravoslávneho arcibiskupa. Od r. 1990 je sídlom biskupa Gréckokatolíckej cirkvi na Slovensku a v Česku.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/greckokatolicky-biskupsky-palac/",
        "en": "https://www.qrlink.sk/new/en/greckokatolicky-biskupsky-palac/",
        "de": "https://www.qrlink.sk/new/de/greckokatolicky-biskupsky-palac/",
        "ru": "https://www.qrlink.sk/new/ru/greckokatolicky-biskupsky-palac/",
        "pl": "https://www.qrlink.sk/new/pl/greckokatolicky-biskupsky-palac/",
        "hu": "https://www.qrlink.sk/new/hu/greckokatolicky-biskupsky-palac/"
      }
    },
    {
      "id": "kalvaria-2",
      "miesto": "presov",
      "poradie": 13,
      "nazov": "Kalvária",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2018/04/Kalvária.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/05/06-Kalvária.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2618.184461793334!2d21.22368731622495!3d48.988046979300485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDU5JzE3LjAiTiAyMcKwMTMnMzMuMiJF!5e0!3m2!1ssk!2ssk!4v1524657745373",
      "text": "<p>Na nevysokom kopci na západnom okraji Prešova dominuje nad mestom barokový komplex Kalvárie. V minulosti ju považovali za druhú najkrajšiu kalváriu na území Uhorska (po banskoštiavnickej kalvárii).</p>\n<p>Vznik prešovskej Kalvárie, podobne ako v iných mestách, je úzko spätý s rekatolizáciou a pôsobením jezuitov. Iniciatíva na založenie Kalvárie vzišla z radov Spolku umierajúceho Krista, ktorý založili jezuitskí kňazi začiatkom 18. storočia. Stavba prvých sakrálnych objektov sa začala r. 1720 a pokračovala do roku 1769. Niektoré kaplnky krížovej cesty vznikali ešte aj v 19. storočí, a to až do r. 1893. Ako prvé posvätil jezuitský superior kaplnku Krista na Olivovej hore a kríž v jeseni 1721. Stavbu realizovali postupne v priebehu viacerých desaťročí z prostriedkov mesta a darcov spomedzi mešťanov a okolitej šľachty.</p>\n<p>Celý komplex Kalvárie tvorí kostolík sv. Kríža, štrnásť kaplniek krížovej cesty s kaplnkou Svätých schodov, katakomby a cintorín.</p>\n<p>Kaplnky krížovej cesty vznikali postupne od r. 1721 do r. 1893. Všetky majú podobný tvar so štítovým priečelím, zdobeným ornamentmi a erbom donátora a polkruhovo zaklenutým vstupným portálom s bohato zdobenou mrežou. Z popísaného tvaru vybočuje druhá dominanta Kalvárie, kaplnka Svätých schodov. Bola postavená r. 1765 podľa vzoru kaplnky Sancta Scala pri Lateránskom kostole v Ríme. Stavbu financoval knieža Radziwill, ktorý dal kaplnku postaviť z vďačnosti mestu za poskytnutie azylu po nútenom úteku z Poľska. V priečelí nad vchodom je umiestnený jeho erb, vnútrajšok vypĺňa 28 schodov s miestom pre relikvie svätých, oltár s kamennou plastikou Piety a nástenné maľby od O. Trtinu.</p>\n<p>Celý cyklus krížovej cesty pozostáva z nasledujúcich kaplniek: 1. Posledná večera, 2. Ježiš na Olivovej hore, 3. Ježiš udretý pred veľkňazom Annášom, 4. Sväté schody, 5. Bičovanie, 6. Neznámy fundátor, 7. Ježišovo stretnutia s plačúcimi ženami, 8. Ukrižovanie, 9. Kristus na kríži, 10. Sňatie z kríža, 11. Uloženie do hrobu, 12. Zmŕtvychvstanie, 13. Neveriaci Tomáš, 14. Nanebovstúpenie.</p>\n<p>Zároveň s kostolom a kaplnkami bol založený i cintorín, ktorý pôvodne slúžil na pochovávanie donátorov Kalvárie, neskôr aj pre ľudí z blízkych mestských štvrtí (Pod Kalváriou, Za Kalváriou), ako aj iných osôb. Na cintoríne je niekoľko zaujímavých, umelecky cenných šľachtických a meštianskych krýpt v empírovom a historizujúcom slohu. V roku 1836 boli pod kostolom postavené katakomby, slúžiace ako hrobka pre kňazov. Ich múr so vstupným portálom vytvára pri pohľade z mesta ilúziu hradbového múru.</p>\n<p>Celý komplex Kalvárie bol dôkladne reštaurovaný a následne upravený v rokoch 1972 – 1983.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/kalvaria-2/",
        "en": "https://www.qrlink.sk/new/en/kalvaria-2/",
        "de": "https://www.qrlink.sk/new/de/kalvaria-2/",
        "ru": "https://www.qrlink.sk/new/ru/kalvaria-2/",
        "pl": "https://www.qrlink.sk/new/pl/kalvaria-2/",
        "hu": "https://www.qrlink.sk/new/hu/kalvaria-2/"
      }
    },
    {
      "id": "zupny-dom",
      "miesto": "presov",
      "poradie": 14,
      "nazov": "Župný dom",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2018/04/Župný-dom.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/05/13-župný-dom.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2617.645301414838!2d21.240000601031507!3d48.99830710264607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDU5JzUzLjkiTiAyMcKwMTQnMzEuOSJF!5e0!3m2!1ssk!2ssk!4v1524657926453",
      "text": "<p>Je to rokokovo-klasická budova palácového typu určená na administratívne účely bývalej Šarišskej stolice.</p>\n<p>Na konci stredoveku sa Prešov stal definitívne najvýznamnejším politickým, kultúrnym, hospodársko-správnym a tiež náboženským centrom Šarišskej stolice. Túto pozíciu si udržal aj v nasledujúcich storočiach. Význam mesta ešte vzrástol, keď sa v r. 1723 stalo sídlom jednej zo štyroch novozriadených právnych inštitúcii v Uhorsku, a to dištriktuálnej súdnej tabule, určenej na celú oblasť Potisia.</p>\n<p>Otázky týkajúce sa Šarišskej stolice patrili do právomoci šarišského župana, ktorého do funkcie menoval panovník. Župan bol veliteľom všetkých kráľovských vojakov, ktorí boli na území župy (stolice), ale súdil aj obyvateľov, okrem šľachty a duchovných, a staral sa o správu štátnych príjmov. Najstarším známym županom bol Peter, spomínaný r. 1217. Vtedy bolo územie Šariša ešte súčasťou veľkého pohraničného komitátu Novum Castrum, z ktorého sa vyčlenilo až ku koncu prvej polovice 13. storočia. Pôvodným sídlom šarišského župana bol Šarišský hrad, neskôr sa sídlo menilo v závislosti od jeho osoby.</p>\n<p>Po nariadení Márie Terézie, podľa ktorého bola každá stolica povinná postaviť si v mieste svojho sídla novú administratívnu budovu, bola v r. 1769 – 1770 postavená skutočne reprezentatívna budova župného domu. Rozsiahlou prestavbou došlo k spojeniu dvoch poschodových renesančných domov, patriacich v tom čase rodine Medňanských, s nárožným poschodovým domom prešovského kníhtlačiara F. Paracelsa. Vznikla tak monumentálna budova palácového typu s priestrannou sálou na poschodí, spojená sieťou chodieb s ďalšími miestnosťami. Bohato členené priečelie s dvoma vstupnými portálmi bolo na vrchole zakončené trojuholníkovým štítom (tympanónom) s reliéfom súdu kráľa Šalamúna, ktorý je dodnes ozdobou tejto stavby. Zaujímavé je široké schodisko s balustrádou, ktoré vedie do priestrannej sály s korýtkovou klenbou. Ostatné miestnosti sú zaklenuté lunetovými a pruskými klenbami, resp. zakryté rovnými stropmi so štukovými zrkadlami.</p>\n<p>Župný dom slúžil svojmu pôvodnému účelu viac ako poldruha storočia, a to až do konca r. 1944. V období prvej Slovenskej republiky (1939-1945) bol sídlom Šarišsko-zemplínskej župy.</p>\n<p>Počas svojej existencie musela budova župného domu prejsť niekoľkokrát rôznymi adaptačnými prácami. Značne poškodená bola najmä po veľkom požiari 6. mája 1887, keď oheň zničil aj značnú časť mestského jadra. Za krátky čas bola budova obnovená a ďalej slúžila svojmu účelu.</p>\n<p>K vážnejšiemu poškodeniu budovy došlo v decembri 1944 počas náletu sovietskych lietadiel. Po vojne bol župný dom postupne rekonštruovaný, aby poskytol priestor viacerým inštitúciám.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/zupny-dom/",
        "en": "https://www.qrlink.sk/new/en/zupny-dom/",
        "de": "https://www.qrlink.sk/new/de/zupny-dom/",
        "ru": "https://www.qrlink.sk/new/ru/zupny-dom/",
        "pl": "https://www.qrlink.sk/new/pl/zupny-dom/",
        "hu": "https://www.qrlink.sk/new/hu/zupny-dom/"
      }
    },
    {
      "id": "palac-klobusickych",
      "miesto": "presov",
      "poradie": 15,
      "nazov": "Palác Klobušickovcov",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2018/04/Palác-Klobušických.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/05/11-Palác-Klobušických.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2617.8283458681994!2d21.24078031622518!3d48.99482397930123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDU5JzQxLjQiTiAyMcKwMTQnMzQuNyJF!5e0!3m2!1ssk!2ssk!4v1524657972212",
      "text": "<p>Pozoruhodnou, avšak oveľa mladšou palácovou stavbou ako Rákociho palác, je honosné sídlo barónov Klobušickovcov, situované v južnej časti námestia na východnej strane Hlavnej ulice (dom č. 22).</p>\n<p>Palác vznikol v polovici 18. storočia na piatich stredovekých parcelách na námestí a bývalej Maďarskej ulici, ktoré koncom predchádzajúceho storočia kúpil barón František Klobušický.</p>\n<p>Na zakúpených parcelách sa mali ešte okolo r. 1684 nachádzať dva majere a tri malé remeselnícke domy, ktoré boli do konca 17. storočia postupne prebudovávané. Výsledkom rozsiahlej prestavby bol reprezentačný dvojpodlažný palác v neskorobarokovom štýle (tzv. štýl Ľudovíta XVI. ) so štvorkrídlovou dispozíciou a pravouhlým nádvorím v strede. Za hlavného iniciátora prestavby a výstavby paláca je možné s najväčšou pravdepodobnosťou označiť Františka Klobušického,  bývalého kráľovského tabulárneho radcu, neskôr aj stúpenca generála Caraffu. F. Klobušický bol v r. 1701-1708 administrátorom úradu šarišského hlavného župana, r. 1704 sa zasa pridal k stavovskému protihabsburskému povstaniu Františka II. Rákociho. Po skončení povstania r. 1711 bol panovníkom omilostený a majetok mu bol ponechaný.</p>\n<p>Palác Klobušickovcov bol dokončený r. 1756. Cenné je predovšetkým poschodie uličného priečelia, bohato zdobené krásnymi štukovými výjavmi a ornamentami s erbom rodiny Klobušickovcov nad hlavným portálom. Na východnej strane priliehal k palácu rozsiahly park, siahajúci až ku hradbám. Ako samostatnú, vtedy módnu stavbu, doňho zasadili vežičku (letohrádok), pri stavbe ktorej sekundárne použili pôvodné gotické ostenia z františkánskeho kostola. Táto romantická stavba stojí dodnes a v súčasnosti dotvára scenériu evanjelickej farskej záhrady.</p>\n<p>V 19. storočí patril palác viacerým novým majiteľom. Začiatkom 19. storočia sídlilo v budove prvé prešovské (nemecké) divadlo. V priebehu 19. a 20. storočia slúžil palác na viaceré účely. Poskytnutý bol stálej vojenskej posádke v Prešove, takže v priestoroch paláca boli zriadené kasárne. Po ich zrušení bolo na prízemí hlavného krídla zriadených niekoľko pracovísk súkromných podnikateľov, ako aj jedna z najstarších prešovských lekárni &#8222;Salvator“. V budove bolo aj niekoľko tried katolíckeho gymnázia, za prvej Česko-Slovenskej republiky daňový úrad, a po vzniku Univerzity Pavla Jozefa Šafárika (1959) aj jej Filozofická fakulta, ktorá tu sídlila do r. 1986. Po nej budova poskytovala priestory študentskému domovu a strednému odbornému učilišťu služieb. V súčasnosti je budova sídlom Krajského súdu v Prešove.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/palac-klobusickych/",
        "en": "https://www.qrlink.sk/new/en/palac-klobusickych/",
        "de": "https://www.qrlink.sk/new/de/palac-klobusickych/",
        "ru": "https://www.qrlink.sk/new/ru/palac-klobusickych/",
        "pl": "https://www.qrlink.sk/new/pl/palac-klobusickych/",
        "hu": "https://www.qrlink.sk/new/hu/palac-klobusickych/"
      }
    },
    {
      "id": "radnica-2",
      "miesto": "presov",
      "poradie": 16,
      "nazov": "Radnica",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2018/04/Radnica.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/05/07-Radnica.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1308.8497706934093!2d21.239106300656058!3d48.99727499817046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDU5JzUwLjIiTiAyMcKwMTQnMjMuMSJF!5e0!3m2!1ssk!2ssk!4v1524212848807",
      "text": "<p>Na východnej strane námestia, oproti Neptúnovej fontáne, sa nachádza historická budova prešovskej radnice.</p>\n<p>Radnica stredovekého Prešova stála pôvodne na inom mieste. Bola to samostatne stojaca dvojpodlažná kamenná budova, postavená južne od farského kostola, niekde na mieste dnešného parku s pomníkom Červenej armády. V priebehu 17. storočia ju však magistrát z neznámych dôvodov (pravdepodobne poškodenie počas požiarov) opustil a presťahoval sa do objektu, ktorý slúži tomuto účelu dodnes. Presná podoba pôvodnej radnice nie je známa, zachoval sa z nej iba kamenný mestský erb z prvej polovice 16. storočia, sekundárne umiestnený v portále neskoršej radnice.</p>\n<p>Nová budova bola v stredoveku honosným meštianskym domom. Začiatkom 16. storočia ju pod vedením kamenárskeho majstra Jána Brengyszeyna prebudovali na mestskú vináreň a na tento účel slúžila takmer po dve storočia. Z gotického obdobia sa zachovali iba niektoré fragmenty v interiéroch, portál a neskorogotické ostenie na prízemí. V druhej polovici 16. storočia bola vináreň rozšírená o prístavbu nad uličným priechodom, spájajúcu dve štvrte námestia a renesančne upravená. Interiéry vtedy zaklenuli renesančnými klenbami a stavbu ukončili bohatou štítkovou atikou.</p>\n<p>Po neskorších prestavbách sa z tejto podoby dodnes zachovali klenby a viaceré renesančné ostenia. Dôkladná prestavba nasledovala po požiari r. 1768. Ukončená bola r. 1788, keď dostala neskorobarokovú podobu s typickým priečelím s vysokými oknami a balkónom. Posledná prestavba prebehla po veľkom požiari r. 1887. Vtedy nadstavali druhé poschodie a v novobarokovom duchu upravili strechu budovy.</p>\n<p>Do novších slovenských i stredoeurópskych dejín sa radnica zapísala r. 1919. Po obsadení mesta a veľkej časti východného Slovenska maďarskou Červenou armádou bola 16. júna 1919 z jej balkóna vyhlásená Slovenská republika rád. Od r. 1945 sídlil v budove mestský národný výbor, po r. 1990 mestský úrad. V roku 1961 bola radnica zapísaná do zoznamu národných kultúrnych pamiatok.</p>\n<p>Súčasťou radnice je mohutná kamenná stavba, priliehajúca k nej z Jarkovej ulice, nazývaná Caraffova väznica.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/radnica-2/",
        "en": "https://www.qrlink.sk/new/en/radnica-2/",
        "de": "https://www.qrlink.sk/new/de/radnica-2/",
        "ru": "https://www.qrlink.sk/new/ru/radnica-2/",
        "pl": "https://www.qrlink.sk/new/pl/radnica-2/",
        "hu": "https://www.qrlink.sk/new/hu/radnica-2/"
      }
    },
    {
      "id": "rakociho-palac",
      "miesto": "presov",
      "poradie": 17,
      "nazov": "Rákociho palác",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2018/04/Rákocziho-palác.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/05/12-Rákociho-palác.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2617.653611020337!2d21.238780614271658!3d48.99814898449359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDU5JzUzLjMiTiAyMcKwMTQnMjYuNCJF!5e0!3m2!1ssk!2ssk!4v1524214125661",
      "text": "<p>Osudy Prešova v 17. – 18. storočí boli viac ako v ktoromkoľvek inom východoslovenskom meste späté s mocnou rodinou Rákociovcov a jej významnými osobnosťami. Rákociovska rezidencia, ako pamiatka na tieto búrlivé časy, sa dodnes vyníma na východnej strane Hlavnej ulice (dom č. 86) oproti rímskokatolíckemu farskému kostolu.</p>\n<p>Na jej mieste stáli pôvodne dva stredoveké meštianske domy. Na konci 16. storočia zakúpil obidve parcely sedmohradské knieža Žigmund Rákoci, ktorý ich dal prebudovať na honosný mestský palác v renesančnom slohu. Na túto prestavbu nadväzovala ďalšia, neskororenesančná úprava celého objektu na začiatku 17. storočia. Počas nej bola dotvorená charakteristická fasáda s oknami v arkieroch, zakončená krásnou atikou, zloženou z kombinácií štítkov, oblúčikov a slepých arkád.</p>\n<p>Celé priečelie i s atikou je bohato zdobené grafitom. Rákociovcom sa tak podarilo vytvoriť skutočný skvost mestskej renesančnej architektúry, považovaný za najkrajší mestský renesančný palác na území bývalého Horného Uhorska.</p>\n<p>História paláca bola od jeho založenia úzko spätá s dejinami rákociovskeho rodu. V roku 1633 v ňom prebiehali rokovania medzi zástupcami sedmohradského kniežaťa Juraja I. Rákociho a cisára Ferdinanda II., ukončené podpísaním prešovského mieru. V apríli 1701, po vyzradení plánov na nové protihabsburské povstanie, väznili habsburské úrady v paláci Františka II. Rákociho, ktorého predtým zajali v jeho kaštieli vo Veľkom Šariši. Po roku 1711 bol skonfiškovaný a vystriedal viacerých majiteľov.</p>\n<p>V priebehu 18. storočia došlo k prestavbe dvorového krídla v barokovom slohu. V 19. storočí mala budova viacero vlastníkov, či nájomcov, ktorí si ju adaptovali na obchodné a dielenské priestory.</p>\n<p>Dôkladná rekonštrukcia paláca do pôvodnej renesančnej podoby, ukončená obnovou grafitovej výzdoby v priečelí, sa uskutočnila v r. 1950 – 1956. V súčasnosti je v budove umiestnené Krajské múzeum.</p>\n<p>Otváracie hodiny</p>\n<p>LETNÁ SEZÓNA / MÁJ – SEPTEMBER</p>\n<p>Pondelok – Piatok 9:00 – 18:00</p>\n<p>Sobota 14:00 – 18:00</p>\n<p>Nedeľa 14:00 – 18:00</p>\n<p>Otvorené aj počas štátnych sviatkov: 14:00 – 18:00</p>\n<p>(platí len počas letnej sezóny)</p>\n<p>MIMO SEZÓNY / OKTÓBER- APRÍL</p>\n<p>Pondelok – Piatok 9:00 – 17:00</p>\n<p>Sobota zatvorené</p>\n<p>Nedeľa 14:00 – 18:00</p>\n<p>Tel.: +421 51 773 4708</p>\n<p>Adresa:</p>\n<p>Rakociho palác</p>\n<p>Hlavná 86</p>\n<p>080 01 Prešov</p>\n<p><a href=\"http://www.tripolitana.sk\">www.tripolitana.sk</a></p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/rakociho-palac/",
        "en": "https://www.qrlink.sk/new/en/rakociho-palac/",
        "de": "https://www.qrlink.sk/new/de/rakociho-palac/",
        "ru": "https://www.qrlink.sk/new/ru/rakociho-palac/",
        "pl": "https://www.qrlink.sk/new/pl/rakociho-palac/",
        "hu": "https://www.qrlink.sk/new/hu/rakociho-palac/"
      }
    },
    {
      "id": "caraffova-vaznica",
      "miesto": "presov",
      "poradie": 18,
      "nazov": "Caraffova väznica",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2018/04/Carrafova-väznica.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/05/08-Caraffova-väznica.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2617.713100866098!2d21.236728316225136!3d48.9970169793014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDU5JzQ5LjMiTiAyMcKwMTQnMjAuMSJF!5e0!3m2!1ssk!2ssk!4v1524658024541",
      "text": "<p>Caraffova väznica je neskorogotická stavba zo začiatku 16. storočia, zakončujúca budovu dnešnej mestskej radnice. Ide o jednu z mála zachovaných gotických pamiatok v Prešove.</p>\n<p>Budova bola postavená v r. 1504 – 1509 na pozemku člena mestskej rady maliara Petra Molera, ktorého dom na Hlavnej ulici mesto odkúpilo a adaptovalo na mestskú vináreň. Budova slúžila vinárni ako skladisko sudov a iného príslušenstva pravdepodobne až do konca 17. storočia, no v archívnych záznamoch z r. 1530 sa spomína aj ako jedna z prešovských väzníc, a to vďaka svojej blízkosti pri mestskej radnici.</p>\n<p>Budova dostala pomenovanie počas Prešovských krvavých jatiek r. 1687, kedy na základe nespravodlivého súdu cisárskeho generála Antónia Caraffu z Neapola bolo na námestí pri evanjelickom kolégiu potupne popravených 24 uhorských zemanov a mešťanov.</p>\n<p>Jedna z prešovských mučiarní, ktoré dal Caraffa zriadiť kvôli výsluchom obvinených, sa nachádzala aj v podzemných priestoroch dnešnej radnice, ktorá vtedy tvorila s budovou jeden architektonický celok. Obete Caraffovho súdu v nej však nikdy väznené neboli. Svoje meno dostala budova asi až neskôr, azda podľa jej charakteristického tvaru. Podľa niektorých písomných zmienok boli v budove uschovávané kontrolné mestské miery a váhy, ba dokonca sa tu istý čas nachádzala aj mestská zbrojnica. V druhej polovici 19. storočia v nej bola mestská väznica.</p>\n<p>Od začiatku 20. storočia sa budova začala využívať na archivovanie mestských písomností. V r. 1955 – 1956 sa uskutočnili adaptačné práce a celková úprava vnútorných priestorov, aby mohli slúžiť archívnemu uloženiu písomností mesta a pre Mestský archív v Prešove.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/caraffova-vaznica/",
        "en": "https://www.qrlink.sk/new/en/caraffova-vaznica/",
        "de": "https://www.qrlink.sk/new/de/caraffova-vaznica/",
        "ru": "https://www.qrlink.sk/new/ru/caraffova-vaznica/",
        "pl": "https://www.qrlink.sk/new/pl/caraffova-vaznica/",
        "hu": "https://www.qrlink.sk/new/hu/caraffova-vaznica/"
      }
    },
    {
      "id": "the-museum-of-wines",
      "miesto": "presov",
      "poradie": 19,
      "nazov": "Múzeum vín",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2018/04/Múzeum-vín.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/05/19-múzeum-vín.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2617.6949177658466!2d21.23765231622518!3d48.99736297930145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDU5JzUwLjUiTiAyMcKwMTQnMjMuNCJF!5e0!3m2!1ssk!2ssk!4v1524658064030",
      "text": "<p>Múzeum vín sa nachádza v centre mesta Prešov, v podzemných priestoroch, ktoré boli vybudované začiatkom 16. storočia ako mestská vináreň a sklady vína pod mestskou radnicou. V čase stavovských a roľníckych povstaní mesto v podzemných priestoroch zriadilo väzenie. V roku 1993 boli priestory rekonštruované pre potreby Múzea vín.</p>\n<p>Expozícia múzea približuje históriu pestovania viniča na Slovensku, Morave a v Čechách podľa jednotlivých vinohradníckych oblastí. Jedna časť expozície sa venuje histórii a technológii tokajského vína.  V centre pozornosti sú však vína z mnohých krajín sveta, ako aj mnohých svetových odrôd. Nájdete tu temer 2000 druhov vín, ktoré je možné ochutnať alebo kúpiť. Popri vzorkách vín sa tu nachádzajú aj exponáty používané pri výrobe vína a na ošetrovanie viniča – lisy, sudy, ručné čerpadlá, uzatváračky fliaš, staré odmerné nádoby z medi, skla, fľaše na víno najrozmanitejších tvarov, farieb a veľkosti.</p>\n<p>V priestoroch múzea je možnosť degustácie vystavených druhov vína spojená s odborným výkladom o predvádzaných vzorkách, správnom stolovaní, výrobe vína a pod.</p>\n<p>Jednou z prestížnych aktivít múzea je každoročné organizovanie súťažnej prehliadky vín Muvina, ktorá sa stala pre výrobcov vína jednou z najdôveryhodnejších prehliadok. Prichádzajú vína z celého sveta, pozývajú sa odborníci – enológovia z rôznych štátov sveta, aby degustovali vína a ocenili ich medailami.</p>\n<p>Otváracie hodiny:</p>\n<p>pondelok – piatok: 9:00 – 18:00</p>\n<p>sobota: 9:00 – 12:00</p>\n<p>nedeľa: zatvorené</p>\n<p>obedňajšia prestávka: 12:30 – 13:00</p>\n<p>Adresa:</p>\n<p>Múzeum vín</p>\n<p>Floriánova ulica</p>\n<p>080 01 Prešov</p>\n<p>Tel.: 051/ 7733 108</p>\n<p><a href=\"http://www.muzeumvin.sk\">www.muzeumvin.sk</a></p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/the-museum-of-wines/",
        "en": "https://www.qrlink.sk/new/en/the-museum-of-wines/",
        "de": "https://www.qrlink.sk/new/de/the-museum-of-wines/",
        "ru": "https://www.qrlink.sk/new/ru/the-museum-of-wines/",
        "pl": "https://www.qrlink.sk/new/pl/the-museum-of-wines/",
        "hu": "https://www.qrlink.sk/new/hu/the-museum-of-wines/"
      }
    },
    {
      "id": "jurkovicova-rozhladna",
      "miesto": "roznov",
      "poradie": 1,
      "nazov": "JURKOVIČOVA ROZHĽADŇA",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2022/09/jurkovicova-rozhladna.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2022/09/Jurkovicova-rozhladna.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2593.171130572713!2d18.156546615636238!3d49.46238107935133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x94fb5db20fc6038b!2zNDnCsDI3JzQ0LjYiTiAxOMKwMDknMzEuNSJF!5e0!3m2!1ssk!2ssk!4v1662653676799!5m2!1ssk!2ssk",
      "text": "<p>Jméno rozhledna získala podle slovenského architekta Dušana Sámo Jurkoviče, který v této oblasti zanechal výraznou stopu. Ačkoliv původní myšlenka, vybudovat rozhlednu, pochází ze 60. let 20. století, k její realizaci došlo až v letech 2010-11. Otevřena 28. 04. 2012. Stavba je vysoká 31 metrů. Vyhlídková plošina ve výšce 18,8 m, rozhledna má 102 schodů. Základnu rozhledny tvoří kamenná podezdívka a na ní je posazená dřevěná konstrukce zakončená věžovitou osmistěnnou nástavbou. Z vyhlídkového ochozu se vám naskytne výhled nejen na okolní obce, ale jako na dlani na dlani budete mít město Rožnov pod Radhoštěm.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/jurkovicova-rozhladna/",
        "en": "https://www.qrlink.sk/new/en/jurkovicova-rozhladna/",
        "de": "https://www.qrlink.sk/new/de/jurkovicova-rozhladna/",
        "ru": "https://www.qrlink.sk/new/ru/jurkovicova-rozhladna/",
        "pl": "https://www.qrlink.sk/new/pl/jurkovicova-rozhladna/",
        "hu": "https://www.qrlink.sk/new/hu/jurkovicova-rozhladna/"
      }
    },
    {
      "id": "zrucanina-hradu-hradisko",
      "miesto": "roznov",
      "poradie": 2,
      "nazov": "RUINY HRADU HRADISKO",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2022/08/zdrucanina-hradu-hradisko.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2022/09/Hradisko.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2593.649815731038!2d18.11908551563592!3d49.4533352793502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x367111fea396b9fd!2zNDnCsDI3JzEyLjAiTiAxOMKwMDcnMTYuNiJF!5e0!3m2!1ssk!2ssk!4v1662654800821!5m2!1ssk!2ssk",
      "text": "<p>Hrad Rožnov byl postaven v 2. polovině 14. století. Pro jeho stavbu bylo vybráno vhodné místo na vrchu Hradisko (522 m n. m.). Jeho funkcí byla ochrana hranic s Uhry. Hrad byl od 14. do 17. století několikrát rozšiřován. První zmínka o hradu byla objevena v listině Voka z Kravař, později byl v majetku pánů z Cimburka a na konci 15. století pánů z Pezinku. V roce 1505 jej získali Kunštátové a roku 1526 Jaroslav ze Šelenberka. V roce 1535 získal hrad Jan z Pernštejna, ale již v roce 1539 byl z příkazu krále Ferdinanda I. obsazen a pobořen, neboť se na něm usídlila loupeživá tlupa. Později byl hrad provizorně opraven a ještě v roce 1660 sloužil panským úředníkům. Na konci 17. století byl opuštěn úplně. Zkázu hradu dokonali sami obyvatelé Rožnova. Ve druhé polovině 19. století dostali povolení obecního úřadu zbytky hradu rozebrat pro stavby svých obydlí ”aby také nějak té památky oučastní byli“.</p>\n<p>Od roku 1964 jsou chráněny jako kulturní památka. Dochovaly se zbytky zdí, brána, příkop s valem a část podzemí.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/zrucanina-hradu-hradisko/",
        "en": "https://www.qrlink.sk/new/en/zrucanina-hradu-hradisko/",
        "de": "https://www.qrlink.sk/new/de/zrucanina-hradu-hradisko/",
        "ru": "https://www.qrlink.sk/new/ru/zrucanina-hradu-hradisko/",
        "pl": "https://www.qrlink.sk/new/pl/zrucanina-hradu-hradisko/",
        "hu": "https://www.qrlink.sk/new/hu/zrucanina-hradu-hradisko/"
      }
    },
    {
      "id": "valasske-muzeum-v-prirode",
      "miesto": "roznov",
      "poradie": 3,
      "nazov": "VALAŠSKÉ MÚZEUM V PRÍRODE",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2022/09/valasske-muzeum-v-prirode-3.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2022/09/Valasske-muzeum-v-prirode.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2593.2222735600412!2d18.14718161563622!3d49.46141467935108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdf883058aafe0ade!2zNDnCsDI3JzQxLjEiTiAxOMKwMDgnNTcuNyJF!5e0!3m2!1ssk!2ssk!4v1662655042321!5m2!1ssk!2ssk",
      "text": "<p>Valašské muzeum v přírodě je nejstarším a největším skanzenem ve střední Evropě. Skládá se ze tří samostatných areálů – Valašské dědiny, Dřevěného městečka a Mlýnské doliny. Najdete zde původní domy a předměty ze všech koutů Beskyd nebo jejich precizní kopie. V areálu se natáčelo mnoho filmů a pohádek a pravidelně se zde konají různé tématické kulturní akce.</p>\n<p>Od 11. 12. 2018 je areál součástí Národního muzea v přírodě.</p>\n<p>V podhorském městě Rožnově pod Radhoštěm rozprostírajícím se na úpatí Beskyd stojí Valašské muzeum v přírodě, první a až do 70. let 20. století jediné muzeum svého typu v naší zemi. O jeho vznik se zasloužili členové rožnovského muzejního spolku, zejména sourozenci Alois a Bohumír Jaroňkovi. Již před první světovou válkou předložili plány na přenesení několika roubených staveb do městského parku. Uskutečnit své cíle se jim však podařilo až při přípravách národopisné slavnosti v roce 1925. Na mýtinku lázeňského parku byly tehdy přestěhovány dva roubené domy z rožnovského náměstí spolu s dalšími menšími stavbami a v prostorách mezi nimi se odehrála velkolepá folklorní slavnost zvaná Valašský rok. Vznikl tak základ areálu Dřevěné městečko, který byl postupně rozšiřován o další dřevěné stavby a zároveň takto bylo založeno jedinečné nové muzeum – Valašské muzeum v přírodě.</p>\n<p>Již samotní zakladatelé si uvědomovali, že městská část muzea dostatečně nevypovídá o způsobech života na celém Valašsku, a proto usilovali o realizaci vesnického areálu. Záměr na vybudování Valašské dědiny vznikl na počátku 50. let a o desetiletí později byla zahájena na rožnovské pasece zvané Stráň výstavba prvních roubených chalup a hospodářských staveb. Cílem bylo vytvořit co nepravdivější obraz valašské dědiny zasazené do rázovité valašské kulturní krajiny.</p>\n<p>Dřevěné městečko a Valašská dědina byly na počátku 80. let doplněny o třetí, technický, areál zvaný Mlýnská dolina s funkčními historickými stavbami poháněnými vodou.</p>\n<p>Dosud posledním, čtvrtým, areálem muzea se v roce 1995 staly Pustevny se zvoničkou a s objekty Maměnka a Libušín, které byly na konci 19. století vystavěny podle návrhů architekta Dušana Samo Jurkoviče a jež se staly národní kulturní památkou.</p>\n<p>Do dnešních dnů se areály průběžně rozrůstají o další historické stavby, které dokreslují malebný obraz tradičního Valašska. Podoba by však nebyla celistvá bez života v muzeu.  Nejvýraznějším rysem současného dění v  areálech je cílevědomé úsilí o jejich oživení prostřednictvím interiérových i exteriérových expozic, prezentace tradičních technologií řemeslných, zemědělských i podomáckých, lidového umění, obyčejů a folkloru. Valašské muzeum tak plní odkaz svých zakladatelů, kteří usilovali o to, aby bylo živým muzeem.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/valasske-muzeum-v-prirode/",
        "en": "https://www.qrlink.sk/new/en/valasske-muzeum-v-prirode/",
        "de": "https://www.qrlink.sk/new/de/valasske-muzeum-v-prirode/",
        "ru": "https://www.qrlink.sk/new/ru/valasske-muzeum-v-prirode/",
        "pl": "https://www.qrlink.sk/new/pl/valasske-muzeum-v-prirode/",
        "hu": "https://www.qrlink.sk/new/hu/valasske-muzeum-v-prirode/"
      }
    },
    {
      "id": "kaple-sv-cyrila-a-metodeje",
      "miesto": "roznov",
      "poradie": 4,
      "nazov": "KAPLE sv. CYRILA A METODĚJE",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2022/09/kaple-sv-cyrila-a-metodeja.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2022/09/Kaple.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2591.608691457133!2d18.220549615637314!3d49.49189827935453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd46fa24cb003ee73!2zNDnCsDI5JzMwLjgiTiAxOMKwMTMnMjEuOSJF!5e0!3m2!1ssk!2ssk!4v1662655222086!5m2!1ssk!2ssk",
      "text": "<p>Kaple se sousoším věrozvěstů Cyrila a Metoděje postavená v roce 1898 v byzantském slohu, kteří toto místo podle staré pověsti navštívili. Před kaplí stojí bronzové sousoší sv. Cyrila a Metoděje od Albína Poláška z roku 1931. Hlavní pouť se koná 5. 7. Zvonice kaple slouží jako rozhledna.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/kaple-sv-cyrila-a-metodeje/",
        "en": "https://www.qrlink.sk/new/en/kaple-sv-cyrila-a-metodeje/",
        "de": "https://www.qrlink.sk/new/de/kaple-sv-cyrila-a-metodeje/",
        "ru": "https://www.qrlink.sk/new/ru/kaple-sv-cyrila-a-metodeje/",
        "pl": "https://www.qrlink.sk/new/pl/kaple-sv-cyrila-a-metodeje/",
        "hu": "https://www.qrlink.sk/new/hu/kaple-sv-cyrila-a-metodeje/"
      }
    },
    {
      "id": "socha-radegasta",
      "miesto": "roznov",
      "poradie": 5,
      "nazov": "SOCHA RADEGASTA",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2022/09/socha-radegasta.png",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2022/09/Socha.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2592.102187670639!2d18.250703015636972!3d49.48257667935352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa7f8594118c5d672!2zNDnCsDI4JzU3LjMiTiAxOMKwMTUnMTAuNCJF!5e0!3m2!1ssk!2ssk!4v1662655306416!5m2!1ssk!2ssk",
      "text": "<p>Původní sochu Radegasta vytvořil sochař Albín Polášek z betonu a kameninové drti. Na horský hřbet mezi Pustevnami a Radhoštěm byla umístěna v roce 1931. Horské podnebí sochu narušovalo, a proto byla v roce 1996 přesunuta do haly radnice ve Frenštátu pod Radhoštěm a na jejím místě stojí od roku 1998 kopie z odolnější žuly.</p>\n<p>Radegasta uctívali pohané jako boha slunce, hojnosti a úrody. Albín Polášek jej ztvárnil jako postavu s mužským tělem a lví hlavou, na které má nasazenou přilbu s býčími rohy. V pravé ruce svírá roh hojnosti, levou se opírá o sekyru.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/socha-radegasta/",
        "en": "https://www.qrlink.sk/new/en/socha-radegasta/",
        "de": "https://www.qrlink.sk/new/de/socha-radegasta/",
        "ru": "https://www.qrlink.sk/new/ru/socha-radegasta/",
        "pl": "https://www.qrlink.sk/new/pl/socha-radegasta/",
        "hu": "https://www.qrlink.sk/new/hu/socha-radegasta/"
      }
    },
    {
      "id": "chata-mamenka-a-libusin",
      "miesto": "roznov",
      "poradie": 6,
      "nazov": "CHATA MAMĚNKA  A LIBUŠÍN",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2022/09/chata-libusin.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2022/09/Chata.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2591.735799126436!2d18.26362851563728!3d49.48949747935442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xeca8d0d023eb66b5!2zNDnCsDI5JzIyLjIiTiAxOMKwMTUnNTYuOSJF!5e0!3m2!1ssk!2ssk!4v1662655426017!5m2!1ssk!2ssk",
      "text": "<p>Chata Maměnka byla vystavěna, stejně jako sousední chata Libušín, podle návrhů architekta Dušana Jurkoviče v roce 1898. Výrazně zdobená lidově secesní budova s prvky valašské architektury dnes slouží jako hotel. Stavba je národní kulturní památkou.</p>\n<p>Chata Libušín, jedna z dominant horského sedla Pustevny, byla vystavěna podle návrhů architekta Dušana Jurkoviče v roce 1898. Chata je vystavěna ve stylu tzv. lidové secese s prvky valašské architektury. Obzvláště vzácnou byla jídelna zdobená freskami a grafity s motivy moravských a slovenských pověstí, kterou však v roce 2014 velmi poškodil požár celé budovy.</p>\n<p>V roce 1995 byla vyhlášena národní kulturní památkou. V srpnu 2020 byla znovuotevřena.</p>\n<p>Zemepisné súradnice: 49.4894975N, 18.2658172E; nadmorská výška 1 018 m. n. m.</p>\n<p>Zemepisné súradnice: 49.4896744N, 18.2654061E; nadmorská výška 1 018 m. n. m.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/chata-mamenka-a-libusin/",
        "en": "https://www.qrlink.sk/new/en/chata-mamenka-a-libusin/",
        "de": "https://www.qrlink.sk/new/de/chata-mamenka-a-libusin/",
        "ru": "https://www.qrlink.sk/new/ru/chata-mamenka-a-libusin/",
        "pl": "https://www.qrlink.sk/new/pl/chata-mamenka-a-libusin/",
        "hu": "https://www.qrlink.sk/new/hu/chata-mamenka-a-libusin/"
      }
    },
    {
      "id": "zvonica",
      "miesto": "ruzomberok",
      "poradie": 1,
      "nazov": "ZVONICA",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2018/04/24-vlkolinec_-zvonica.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/04/01-Zvonica-4.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924.716369944262!2d19.2784346!3d49.0392517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47150817f0eecd49%3A0xab8088b80787ee0a!2sZvoni%C4%8Dka+na+Vlkol%C3%ADnci!5e0!3m2!1ssk!2ssk!4v1522840498823",
      "text": "<p>Drevená zvonica, postavená v roku 1770, patrí medzi sídelné dominanty obce. Predstavuje jednu z jej najstarších stavieb v obci, pre ktorú je charakteristická zrubová stavba s drevenou šindľovou krytinou strechy a obvodovým plášťom. Jej pôvodná funkcia spočívala v ohlasovaní času modlitieb, požiaru a iných nebezpečenstiev v obci, čomu zodpovedá i jej poloha v rámci sídla. Situovanie zvonice v minulosti tvorilo hranicu medzi horným a dolným koncom Vlkolínca. Zvonica patrí typologicky medzi výnimočné solitérne stavby, slúžiace na zavesenie zvonov.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/zvonica/",
        "en": "https://www.qrlink.sk/new/en/zvonica/",
        "de": "https://www.qrlink.sk/new/de/zvonica/",
        "ru": "https://www.qrlink.sk/new/ru/zvonica/",
        "pl": "https://www.qrlink.sk/new/pl/zvonica/",
        "hu": "https://www.qrlink.sk/new/hu/zvonica/"
      }
    },
    {
      "id": "rimskokatolicky-kostol-navstivenia-panny-marie",
      "miesto": "ruzomberok",
      "poradie": 2,
      "nazov": "RÍMSKOKATOLÍCKY KOSTOL NAVŠTÍVENIA PANNY MÁRIE",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2018/04/23-vlkolinec_-kostol.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/04/03-RÍMSKOKATOLÍCKY-KOSTOL-NAVŠTÍVENIA-PANNY-MÁRIE-1.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924.7121167087856!2d19.279337385495104!3d49.03948046778337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4715083d53f4bc53%3A0x80521eb8e47303e7!2zS29zdG9sw61rIE5hdsWhdMOtdmVuaWEgUGFubnkgTcOhcmll!5e0!3m2!1ssk!2ssk!4v1522842380436",
      "text": "<p>Jednoloďová novoklasicistická stavba s vežou a pristavanou sakristiou, postavená v roku 1875. Pôvodne na tomto mieste stála kaplnka patriaca k cintorínu. Sakrálna stavba, využívaná pre liturgické účely, vyjadruje tradície a príslušnosť ku kresťanskej kultúre Európy. Funkcia kostola vo Vlkolínci, vrchárskej obci s drsnými podmienkami pre život stálych obyvateľov, bola v minulosti jediným miestom spoločenského kontaktu, zdrojom sily a prameňom motivácie. Významnejšie obnovy boli uskutočnené v rokoch 1941, 1950 a 2008.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/rimskokatolicky-kostol-navstivenia-panny-marie/",
        "en": "https://www.qrlink.sk/new/en/rimskokatolicky-kostol-navstivenia-panny-marie/",
        "de": "https://www.qrlink.sk/new/de/rimskokatolicky-kostol-navstivenia-panny-marie/",
        "ru": "https://www.qrlink.sk/new/ru/rimskokatolicky-kostol-navstivenia-panny-marie/",
        "pl": "https://www.qrlink.sk/new/pl/rimskokatolicky-kostol-navstivenia-panny-marie/",
        "hu": "https://www.qrlink.sk/new/hu/rimskokatolicky-kostol-navstivenia-panny-marie/"
      }
    },
    {
      "id": "pamatnik-obetiam-cernovskej-tragedie",
      "miesto": "ruzomberok",
      "poradie": 3,
      "nazov": "POMNÍK OBETIAM ČERNOVSKEJ TRAGÉDIE",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2018/04/22-pomnik-obetiam-_-cernova.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/04/07-PAMÄTNÍK-OBETIAM-ČERNOVSKEJ-TRAGÉDIE.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2612.768306715829!2d19.255600601097512!3d49.09104299268536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDA1JzI3LjgiTiAxOcKwMTUnMjQuOSJF!5e0!3m2!1ssk!2ssk!4v1522994773495",
      "text": "<p>Symbol a trvalý svedok tragického momentu v histórii Slovenska a Černovej. Postavenie pomníka objednala Slovenská liga a finančné prostriedky získala zo zbierok amerických Slovákov pri príležitosti 25. výročia černovskej tragédie. Pripomína pamiatku 15 obetí, ktorých životy vyhasli počas streľby uhorských žandárov pred posviackou novostavby Kostola Ružencovej Panny Márie. Obetovali svoje životy, lebo chceli, aby sa posviacky zúčastnil ich rodák a organizátor stavby Andrej Hlinka. Tragédia v Černovej vyvolala reťazovú reakciu protestov na Slovensku i v zahraničí. Upozornila na národný útlak Slovákov v Uhorsku a politicky zmanipulované súdne procesy, v ktorých bolo neoprávnene odsúdených 59 obyvateľov Černovej. Pomník bol odhalený 28. októbra 1932 za účasti širokej verejnosti (6000 ľudí), ružomberského farára Andreja Hlinku, zástupcov Slovenskej ligy a Matice Slovenskej. Autorom národnej kultúrnej pamiatky je sochár Miroslav (Frico) Motoška a architektonicky ju dotvoril Juraj Sládek. Stavbu realizovala v roku 1932 firma Jaroslava Vindušku z Prahy. Monument je 14 m široký a 6,8 m vysoký. Na jeho stavbu sa spotrebovalo 46,8 t travertínu. Má tvar obráteného písmena T osadeného na nízkej kamennej mohyle a tvorí ho kríž, na ktorom je umiestnený reliéf Kristovej hlavy v staroslovanskom štýle. Pod krížom je vavrínový veniec a znak Slovenska. Na čelnej strane pod krížom je vyrytý nápis Žehnaj Pane náš národ, za ktorý títo zomierali s dátumom tragickej posviacky. Po oboch stranách sú uvedené mená všetkých obetí, zoradené od najstaršieho až po najmladšiu, žiaľ aj s chybami v menách a veku. Materiálna hodnota pomníka v Černovej bola pri odhalení vyčíslena na 65 000 korún československých.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/pamatnik-obetiam-cernovskej-tragedie/",
        "en": "https://www.qrlink.sk/new/en/pamatnik-obetiam-cernovskej-tragedie/",
        "de": "https://www.qrlink.sk/new/de/pamatnik-obetiam-cernovskej-tragedie/",
        "ru": "https://www.qrlink.sk/new/ru/pamatnik-obetiam-cernovskej-tragedie/",
        "pl": "https://www.qrlink.sk/new/pl/pamatnik-obetiam-cernovskej-tragedie/",
        "hu": "https://www.qrlink.sk/new/hu/pamatnik-obetiam-cernovskej-tragedie/"
      }
    },
    {
      "id": "kostol-ruzencovej-panny-marie",
      "miesto": "ruzomberok",
      "poradie": 4,
      "nazov": "KOSTOL RUŽENCOVEJ PANNY MÁRIE",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2018/04/20-kostol-ruzencovej-panny-marie_-cernova.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/04/06-KOSTOL-RUŽENCOVEJ-PANNY-MÁRIE.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d653.1915555993178!2d19.25713762204226!3d49.09108259811127!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4715a860c4f7a459%3A0x3c9b352a9a6de0d4!2sKostol+Panny+M%C3%A1rie+Ru%C5%BEencovej!5e0!3m2!1ssk!2ssk!4v1522844494474",
      "text": "<p>Základný kameň kostola v Černovej bol požehnaný vo Veľkom týždni, na Zelený štvrtok, 20. apríla 1906. Na 27. októbra 1907 bola stanovená posviacka novopostaveného kostola, došlo však k tragickej udalosti, pri ktorej bolo zabitých 15 veriacich a desiatky ďalších boli zranení. Kostol nebol požehnaný a na dlhú dobu zostal zatvorený. Požehnanie kostola sa uskutočnilo až 29. júna 1910, na sviatok apoštolov sv. Petra a Pavla. Kostol slávnostne požehnal,černovský rodák, ružomberský farár Andrej Hlinka, ktorý sa najväčšou mierou zaslúžil o jeho postavenie. V roku 1911 bol do kostola nainštalovaný organ, ktorý zhotovila firma Bratři Paštikové z Prahy. V roku 1941 bol pôvodný organ prestavaný firmou Rieger. V roku 1912 boli do kostola nainštalované oltáre, ktoré zhotovila rakúska firma Ferdinand Stuflesser. V roku 1913 kostol vymaľoval akademický maliar Jozef Hanula. Na sviatok Zjavenia Pána, 6. januára 1925, Andrej Hlinka požehnal dva nové zvony, ktoré sú umiestnené vo veži, pri pôvodnom zvone z roku 1911. V roku 1929 sa kostol stal farským kostolom a z Černovej bola vytvorená samostatná farnosť. V roku 1948, z podnetu Ladislava Hatalu, bola vytvorená do kostola nová krížová cesta. V roku 1957, pri príležitosti 50. výročia černovskej tragédie, boli namontované do veže elektrické hodiny, ktoré zhotovila firma z Vyškova u Brna.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/kostol-ruzencovej-panny-marie/",
        "en": "https://www.qrlink.sk/new/en/kostol-ruzencovej-panny-marie/",
        "de": "https://www.qrlink.sk/new/de/kostol-ruzencovej-panny-marie/",
        "ru": "https://www.qrlink.sk/new/ru/kostol-ruzencovej-panny-marie/",
        "pl": "https://www.qrlink.sk/new/pl/kostol-ruzencovej-panny-marie/",
        "hu": "https://www.qrlink.sk/new/hu/kostol-ruzencovej-panny-marie/"
      }
    },
    {
      "id": "rodny-dom-andreja-hlinku",
      "miesto": "ruzomberok",
      "poradie": 5,
      "nazov": "RODNÝ DOM ANDREJA HLINKU",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2018/04/19-dom.-a.-hlinku_cernova.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/04/05-RODNÝ-DOM-ANDREJA-HLINKU.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d923.733212889786!2d19.256773089400987!3d49.092111471014654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4715a86094b525f7%3A0xf485632b2a61530e!2sRodn%C3%BD+dom+Andreja+Hlinku!5e0!3m2!1ssk!2ssk!4v1522845126231",
      "text": "<ol start=\"27\">\n<li>septembra 1864 sa v tomto dome v Černovej narodil Andrej Hlinka, kňaz,národovec a politik, ktorý sa celý život riadil krédom :“Všetko pre Boha a pre národ“. Expozícia v troch miestnostiach jeho rodného domu zahŕňa nielen nábytok, uprostred ktorého žil, kňazské rúcho, osobné predmety, ale aj infopanely s fotografiami z Hlinkovho života ,listinami a rukopisom. Vosková figurína a posmrtná maska, ktorú vyhotovil sochár Fraňo Štefunko z Martina, sprítomnia osobnosť a veľkú charizmu muža, ktorého meno sa nesmelo spomenúť viac ako štyridsať rokov ani v jeho rodnej obci. Všetky vystavené predmety pomáhajú sa vcítiť do doby, v ktorej žil. Prostredníctvom platne, na ktorej počuť jeho dokonalú slovenčinu a rozhodnosť v hlase dáva tušiť prečo požíval takú dôveru v slovenskom národe,na ktorom mu vždy záležalo. Slováci sa vždy cítili národom a Andrej Hlinka bol ich skutočným vodcom a otcom národa. V svojej dobe bol prirodzenou autoritou pre utláčaný slovenský národ, a jeho túžbou bolo ho stmeliť a zjednotiť.</li>\n</ol>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/rodny-dom-andreja-hlinku/",
        "en": "https://www.qrlink.sk/new/en/rodny-dom-andreja-hlinku/",
        "de": "https://www.qrlink.sk/new/de/rodny-dom-andreja-hlinku/",
        "ru": "https://www.qrlink.sk/new/ru/rodny-dom-andreja-hlinku/",
        "pl": "https://www.qrlink.sk/new/pl/rodny-dom-andreja-hlinku/",
        "hu": "https://www.qrlink.sk/new/hu/rodny-dom-andreja-hlinku/"
      }
    },
    {
      "id": "kalvaria",
      "miesto": "ruzomberok",
      "poradie": 6,
      "nazov": "KALVÁRIA",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2018/04/17-kalvaria.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/04/12-Kalvária.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2690.203613819212!2d19.2862949710302!3d49.07488108017792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4715a7dc9be8516d%3A0xc8bca86aa34bab08!2zS29zdG9sIFBvdsO9xaFlbmlhIHN2w6R0w6lobyBLcsOtxb5h!5e0!3m2!1ssk!2ssk!4v1522845662785",
      "text": "<p>Kalvária s Kostol Povýšenia svätého Kríža a 14 kaplnkami zastavení krížovej cesty bola vybudovaná v období rokov 1858 – 1860. Exteriérová realizácia krížovej cesty je výrazná krajinná dominanta, ktorá vznikla z iniciatívy miestnych rímskokatolíckych kňazov Jána Nepomuka Záhoru, Andreja Kučmu a veriacich ružomberskej farnosti. Klasicistický kostolík bol obnovovaný v rokoch 1902 – 1903 a 1947 – 1948. Vnútorné zariadenie navrhol Valér Aurel Zavarský, reliéfne plastiky sú dielom Františka Gibalu. Interiér v roku 1959 obohatili nástenné maľby Mikuláša Klimčáka. Autentický areál jednoduchých sakrálnych stavieb koncipovaných v klasicistickom duchu je pútnickým miestom a súčasťou duchovnej histórie mesta Ružomberok.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/kalvaria/",
        "en": "https://www.qrlink.sk/new/en/kalvaria/",
        "de": "https://www.qrlink.sk/new/de/kalvaria/",
        "ru": "https://www.qrlink.sk/new/ru/kalvaria/",
        "pl": "https://www.qrlink.sk/new/pl/kalvaria/",
        "hu": "https://www.qrlink.sk/new/hu/kalvaria/"
      }
    },
    {
      "id": "mestsky-cintorin",
      "miesto": "ruzomberok",
      "poradie": 7,
      "nazov": "MESTSKÝ CINTORÍN",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2018/04/16-mestsky-cintorin.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/04/17-MESTSKÝ-CINTORÍN.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4793.05604832705!2d19.288033959838405!3d49.078425067593365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe17e4f8980aea4bf!2zQ2ludG9yw61u!5e0!3m2!1ssk!2ssk!4v1522845979672",
      "text": "<p>Mestský cintorín z roku 1913, osadený vo svažitom teréne, ktorého pietny charakter je umocnený kulisou zelene, je miestom odpočinku významných osobností mesta, regiónu i historických osobností celoslovenského významu. Pôsobivé hrobky a hroby, situované v kompozičnom usporiadaní lemujúcom hlavnú os areálu s ústredným cintorínskym krížom, vytvárajú charakteristický obraz jedného z najkrajších novodobých cintorínov na Slovensku. Na cintoríne sa nachádzajú národné kultúrne pamiatky – hrobka rodiny Makovických, dielo Dušana Jurkoviča, hrobka Ľudovíta Fullu a jeho prvej manželky Juliany Kláry, realizovaná podľa návrhu Martina Kusého st. a Ľudovíta Fullu.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/mestsky-cintorin/",
        "en": "https://www.qrlink.sk/new/en/mestsky-cintorin/",
        "de": "https://www.qrlink.sk/new/de/mestsky-cintorin/",
        "ru": "https://www.qrlink.sk/new/ru/mestsky-cintorin/",
        "pl": "https://www.qrlink.sk/new/pl/mestsky-cintorin/",
        "hu": "https://www.qrlink.sk/new/hu/mestsky-cintorin/"
      }
    },
    {
      "id": "galeria-ludovita-fullu",
      "miesto": "ruzomberok",
      "poradie": 8,
      "nazov": "GALÉRIA ĽUDOVÍTA FULLU",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2018/04/15-fulova-galeria.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/04/24-GALÉRIA-ĽUDOVÍTA-FULLU.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2613.220348592986!2d19.297411545725314!3d49.082452904872625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4715a7ce5400a33f%3A0x5fdcd5cc3b8fa79b!2zU05HIC0gR2Fsw6lyaWEgxL11ZG92w610YSBGdWxsdQ!5e0!3m2!1ssk!2ssk!4v1522846352554",
      "text": "<p>Prvá významná galéria na Slovensku, postavená po roku 1945. Autormi diela, dokončeného v roku 1969, sú architekti Štefan Hatala a Martin Kusý, ktorému prináleží autorstvo koncepcie objektu z roku 1964. Výnimočná stavba reprezentuje nový prúd modernej architektúry a patrí medzi jej najlepšie realizácie na Slovensku. Strohé geometrické formy pravdivo vyjadrujú lineárnu náväznosť vnútorných priestorov. Nachádza sa tu reprezentatívna stála expozícia výtvarných diel majstra Ľudovíta Fullu a byt umelca s pôvodným zariadením.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/galeria-ludovita-fullu/",
        "en": "https://www.qrlink.sk/new/en/galeria-ludovita-fullu/",
        "de": "https://www.qrlink.sk/new/de/galeria-ludovita-fullu/",
        "ru": "https://www.qrlink.sk/new/ru/galeria-ludovita-fullu/",
        "pl": "https://www.qrlink.sk/new/pl/galeria-ludovita-fullu/",
        "hu": "https://www.qrlink.sk/new/hu/galeria-ludovita-fullu/"
      }
    },
    {
      "id": "liptovske-muzeum",
      "miesto": "ruzomberok",
      "poradie": 9,
      "nazov": "LIPTOVSKÉ MÚZEUM",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2018/04/14-lipt.-muzeum.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/04/23-LIPTOVSKÉ-MÚZEUM.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3107.687211617832!2d19.29790436889494!3d49.082021750265724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4715a7cef95a2dcb%3A0xb4e1b9c231300298!2zTGlwdG92c2vDqSBtw7p6ZXVtIHYgUnXFvm9tYmVya3U!5e0!3m2!1ssk!2ssk!4v1522846899592",
      "text": "<p>Liptovské múzeum založili bratia Artúr a Július Kűrtiovci v roku 1912. Z pôvodných priestorov stredovekej fary bola kultúrna inštitúcia premiestnená do terajšej budovy, ktorú dalo mesto Ružomberok postaviť v roku 1934. Autorom projektu je miestny architekt Vojtech Donner, stavbu realizoval v rokoch 1935 – 1937 Július Záchenský. Reprezentatívna stavba, uzatvárajúca námestie Š. N. Hýroša, predstavuje tradicionalisticky koncipovanú budovu s nadčasovým riešením expozičných a prevádzkových priestorov.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/liptovske-muzeum/",
        "en": "https://www.qrlink.sk/new/en/liptovske-muzeum/",
        "de": "https://www.qrlink.sk/new/de/liptovske-muzeum/",
        "ru": "https://www.qrlink.sk/new/ru/liptovske-muzeum/",
        "pl": "https://www.qrlink.sk/new/pl/liptovske-muzeum/",
        "hu": "https://www.qrlink.sk/new/hu/liptovske-muzeum/"
      }
    },
    {
      "id": "evanjelicky-a-v-kostol",
      "miesto": "ruzomberok",
      "poradie": 10,
      "nazov": "EVANJELICKÝ A. V. KOSTOL",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2018/04/12-evanjelicky-kostol.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/04/15-Evanjelický-kostol.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5226.187352661069!2d19.297683552836002!3d49.084859126712765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4715a7cc36bf22d3%3A0xbd133b27c8e6d4a8!2sEvanjelick%C3%BD+kostol!5e0!3m2!1ssk!2ssk!4v1522847265186",
      "text": "<p>Architektonická dominanta mesta. Kostol bol postavený v rokoch 1925 – 1926 v duchu moderny s prvkami rondokubizmu podľa projektu architekta Jána Burjana, ružomberského rodáka, s použitím pôvodného konceptu architekta Dušana Jurkoviča z roku 1914. Objekt má obdĺžnikovú dispozíciu s pseudobazilikálnym priestorom medzi dvomi transeptami a vstavanou hranolovou vežou v osi budovy. Obnova exteriéru bola uskutočnená v rokoch 1997 – 1998, interiér bol renovovaný v roku 2004. K sakrálnej stavbe patrí aj budova evanjelickej fary a ľudovej školy z rokov 1923 – 1924, postavená podľa projektu Dušana Jurkoviča. Spolu s kostolom tvoria ucelený areál.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/evanjelicky-a-v-kostol/",
        "en": "https://www.qrlink.sk/new/en/evanjelicky-a-v-kostol/",
        "de": "https://www.qrlink.sk/new/de/evanjelicky-a-v-kostol/",
        "ru": "https://www.qrlink.sk/new/ru/evanjelicky-a-v-kostol/",
        "pl": "https://www.qrlink.sk/new/pl/evanjelicky-a-v-kostol/",
        "hu": "https://www.qrlink.sk/new/hu/evanjelicky-a-v-kostol/"
      }
    },
    {
      "id": "kulturny-dom-andreja-hlinku",
      "miesto": "ruzomberok",
      "poradie": 11,
      "nazov": "KULTÚRNY DOM ANDREJA HLINKU",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2018/04/11-kult.-dom-A.-hlinku.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/04/16-KULTÚRNY-DOM-ANDREJA-HLINKU.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2613.1657511987582!2d19.301698612800127!3d49.08349047069304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4715a7c940d8edad%3A0x5f322c1bc79331fb!2sKULT%C3%9ARNY+DOM+ANDREJA+HLINKU+a.s.!5e0!3m2!1ssk!2ssk!4v1522847520919",
      "text": "<p>Impozantná, nadčasová stavba, postavená v rokoch 1927 – 1928. Autorom projektu je ružomberský architekt Ján Burjan, stavbu realizovali Ondrej Janček a Jozef Pešek. Jej iniciátorom bol Andrej Hlinka, výstavbu monumentálnej multifunkčnej budovy – centra kultúrneho, spoločenského a športového života – financoval Katolícky kruh, Andrej Hlinka a prostredníctvom verejnej zbierky americkí a miestni Slováci. V roku 1941, v súlade s projektom Vojtecha Donnera (1938), budova dostala konečnú podobu, ktorá vo svojom výraze nesie známky dobového rondokubizmu. Stavebné práce realizovala firma Júliusa Záchenského. Komplexná obnova bola s prestávkami uskutočnená v rokoch 1997 – 2004 podľa projektu Igora Maťaťu.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/kulturny-dom-andreja-hlinku/",
        "en": "https://www.qrlink.sk/new/en/kulturny-dom-andreja-hlinku/",
        "de": "https://www.qrlink.sk/new/de/kulturny-dom-andreja-hlinku/",
        "ru": "https://www.qrlink.sk/new/ru/kulturny-dom-andreja-hlinku/",
        "pl": "https://www.qrlink.sk/new/pl/kulturny-dom-andreja-hlinku/",
        "hu": "https://www.qrlink.sk/new/hu/kulturny-dom-andreja-hlinku/"
      }
    },
    {
      "id": "radnica",
      "miesto": "ruzomberok",
      "poradie": 12,
      "nazov": "RADNICA",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2018/04/8-radnica.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/04/18-Radnica.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1646.250561441237!2d19.30293992072767!3d49.08170314231109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc37a06a0bcd57466!2sTown+Hall!5e0!3m2!1ssk!2ssk!4v1522847921790",
      "text": "<p>Reprezentačná budova v novorenesančnom slohu bola postavená v roku 1897 podľa projektu staviteľa Štefana Michalíka na mieste šustríkovskej kúrie zo 17. storočia. Adaptácia a prestavba interiéru v roku 1937 sa uskutočnila podľa projektu Jozefa Uhlára a Štefana Martoníka. V roku 1968 boli v oknách ústredného schodiska osadené vitráže podľa umeleckého návrhu Róberta Dúbravca. Od svojho vzniku slúži ako radnica  – sídlo mestského úradu. Budova radnice je úzko spätá s osobnosťou Andreja Hlinku, južnom krídle budovy bol v rokoch 1898 – 1985 umiestnený rímskokatolícky farský úrad. Dominantná architektúra objektu bola komplexne obnovená v období rokov 2001 – 2010.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/radnica/",
        "en": "https://www.qrlink.sk/new/en/radnica/",
        "de": "https://www.qrlink.sk/new/de/radnica/",
        "ru": "https://www.qrlink.sk/new/ru/radnica/",
        "pl": "https://www.qrlink.sk/new/pl/radnica/",
        "hu": "https://www.qrlink.sk/new/hu/radnica/"
      }
    },
    {
      "id": "rimskokatolicky-kostol-sv-ondreja",
      "miesto": "ruzomberok",
      "poradie": 13,
      "nazov": "RÍMSKOKATOLÍCKY KOSTOL SV. ONDREJA",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2018/04/6-kostol-sv-Ondreja.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/04/11-RÍMSKOKATOLÍCKY-KOSTOL-SV-ONDREJA-1.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1306.634782589815!2d19.303501864980923!3d49.08151758166057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4715a7c96c8fbcdb%3A0x5561f6883f39adcc!2sKostol+sv.+Ondreja!5e0!3m2!1ssk!2ssk!4v1522848091563",
      "text": "<p>Najstaršia zachovaná sakrálna stavba na území mesta Ružomberok. Pôvodne ranogotický objekt z prelomu 13. a 14. storočia, s renesančnou prestavbou z konca 16. storočia a barokovými úpravami realizovanými v 17. a 18. storočí. Kostol sa od r. 1445 nachádzal v centre opevneného sakrálneho areálu, na ktorého južnej strane stála budova fary a cirkevnej školy, postavenej v 17. storočí. V r. 1903 bola dokončená komplexná prestavba s aplikáciou prvkov historizujúceho novorománskeho slohu. Výrazné dekoratívne úpravy interiéru boli uskutočnené v r. 1939 – 1940. Maliarska výzdoba kostola je dielom Eduarda Massányiho, vrcholným prejavom vitrážovéj tvorby v celoslovenskom meradle sú výplne okien podľa návrhov Ľudovíta Fullu z 30. – 70. rokov 20. storočia.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/rimskokatolicky-kostol-sv-ondreja/",
        "en": "https://www.qrlink.sk/new/en/rimskokatolicky-kostol-sv-ondreja/",
        "de": "https://www.qrlink.sk/new/de/rimskokatolicky-kostol-sv-ondreja/",
        "ru": "https://www.qrlink.sk/new/ru/rimskokatolicky-kostol-sv-ondreja/",
        "pl": "https://www.qrlink.sk/new/pl/rimskokatolicky-kostol-sv-ondreja/",
        "hu": "https://www.qrlink.sk/new/hu/rimskokatolicky-kostol-sv-ondreja/"
      }
    },
    {
      "id": "mauzoleum-andreja-hlinku",
      "miesto": "ruzomberok",
      "poradie": 14,
      "nazov": "MAUZÓLEUM ANDREJA  HLINKU",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2018/04/7-mauzoleum-a..-hlinku.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/04/21-MAUZÓLEUM-ANDREJA-HLINKU.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1098.7473294688261!2d19.304124785920333!3d49.081389902450915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4715a7c912e38e27%3A0x9d74268e61b8848b!2sMauz%C3%B3leum+Andreja+Hlinku!5e0!3m2!1ssk!2ssk!4v1522848397415",
      "text": "<p>Mauzóleum Msgr. Andreja Hlinku bolo postavené v roku 1939 na podnet mesta Ružomberok a v zmysle zákona o zásluhách Andreja Hlinku a rezolúcie Slovenského snemu o postavení jeho pamätníka. Je situované v priestore pod niekdajšími budovami historickej fary a Illesházyovskej školy. Autormi architektonickej koncepcie sú Kazimír Olejník, Jozef Švidroň a Jozef Glončák, ktorí transformovali pôvodnú ideu pamätnej siene padlým z I. svetovej vojny. Na mauzóleum nadväzuje priestor kompozične rozvinutej architektúry slávnostných nástupov s dvojramenným schodiskom Školských schodov, lemovaných balustrádovým zábradlím od Jozefa Uhlára a Štefana Martoníka. Komplexná obnova mauzólea bola uskutočnená v rokoch 1990 – 1991, v súčasnosti je pietnym miestom a expozíciou miesta posledného odpočinku Andreja Hlinku.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/mauzoleum-andreja-hlinku/",
        "en": "https://www.qrlink.sk/new/en/mauzoleum-andreja-hlinku/",
        "de": "https://www.qrlink.sk/new/de/mauzoleum-andreja-hlinku/",
        "ru": "https://www.qrlink.sk/new/ru/mauzoleum-andreja-hlinku/",
        "pl": "https://www.qrlink.sk/new/pl/mauzoleum-andreja-hlinku/",
        "hu": "https://www.qrlink.sk/new/hu/mauzoleum-andreja-hlinku/"
      }
    },
    {
      "id": "piaristicke-gymnazium",
      "miesto": "ruzomberok",
      "poradie": 15,
      "nazov": "PIARISTICKÉ GYMNÁZIUM",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2018/04/5-piaristicke-gymnazium.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/05/22-PIARISTICKÉ-GYMNÁZIUM.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2613.388777634208!2d19.297474938034664!3d49.07925198619092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDA0JzQ1LjMiTiAxOcKwMTcnNTcuNCJF!5e0!3m2!1ssk!2ssk!4v1522995650402",
      "text": "<p>Solitérna stavba z rokov 1888 – 1889 je súčasťou komplexu piaristického kolégia. Nový objekt osemročného gymnázia s klasicistickou architektúrou, postavený na náklady mesta, nahradil staršiu budovu piaristickej školy z roku 1790. Ide o dvojpodlažnú budovu s trojtraktovou dispozíciou, so strednou chodbou a centrálnym dvojramenným schodiskom. V dobe svojho založenia (1729) bolo nižšie piaristické gymnázium v Ružomberku jedinou školou svojho druhu pre Liptov, Oravu, Turiec a hornú časť Trenčianskej stolice. Počas jej existencie školu navštevovali viaceré osobnosti celoslovenského významu Slovenska. Komplexná obnova bola uskutočnená v rokoch 1984 – 1985, obnova fasád a interiéru v roku 2004. Budova je od roku 2005 sídlom Rektorátu Katolíckej univerzity v Ružomberku.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/piaristicke-gymnazium/",
        "en": "https://www.qrlink.sk/new/en/piaristicke-gymnazium/",
        "de": "https://www.qrlink.sk/new/de/piaristicke-gymnazium/",
        "ru": "https://www.qrlink.sk/new/ru/piaristicke-gymnazium/",
        "pl": "https://www.qrlink.sk/new/pl/piaristicke-gymnazium/",
        "hu": "https://www.qrlink.sk/new/hu/piaristicke-gymnazium/"
      }
    },
    {
      "id": "namestie-andreja-hlinku",
      "miesto": "ruzomberok",
      "poradie": 16,
      "nazov": "NÁMESTIE ANDREJA HLINKU",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2018/04/1-2-namestie-a.hlinku.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/04/26-NÁMESTIE-ANDREJA-HLINKU.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2613.2747009625805!2d19.300603316227246!3d49.08141997931013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDA0JzUzLjEiTiAxOcKwMTgnMTAuMSJF!5e0!3m2!1ssk!2ssk!4v1522929486027",
      "text": "<p>Historické námestie s pôvodnou úzkou parceláciou obdobia stredoveku, sformované vo svojej základnej podobe na prelome 13. a 14. storočia, s čiastočne zachovaným charakterom neskorších prestavieb a stavebných úprav 18. a 19. storočia. Tento historický priestor s obdĺžnikovým pôdorysom je sprístupnený sieťou stúpajúcich kľukatých ulíc a typickým systémom schodísk, ktoré ho spájajú s dolným mestom. Na námestí sa nachádzajú národné kultúrne pamiatky, pilier so sochou Immaculaty a významné stavby zaradené medzi pamätihodnosti mesta.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/namestie-andreja-hlinku/",
        "en": "https://www.qrlink.sk/new/en/namestie-andreja-hlinku/",
        "de": "https://www.qrlink.sk/new/de/namestie-andreja-hlinku/",
        "ru": "https://www.qrlink.sk/new/ru/namestie-andreja-hlinku/",
        "pl": "https://www.qrlink.sk/new/pl/namestie-andreja-hlinku/",
        "hu": "https://www.qrlink.sk/new/hu/namestie-andreja-hlinku/"
      }
    },
    {
      "id": "mariansky-stlp-socha-imacculata",
      "miesto": "ruzomberok",
      "poradie": 17,
      "nazov": "MARIÁNSKY STĹP – SOCHA IMACCULATA",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2018/04/1-2-namestie-a.hlinku.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/04/20-MARIÁNSKY-STĹP-SOCHA-IMACCULATA.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2613.2747009625805!2d19.300603316227246!3d49.08141997931013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDA0JzUzLjEiTiAxOcKwMTgnMTAuMSJF!5e0!3m2!1ssk!2ssk!4v1522929569592",
      "text": "<p>Novobarokový mariánsky stĺp z roku 1858 je situovaný na Námestí Andreja Hlinku. Sochu pravdepodobne vytvoril Alexander Belopotocký. Pódium so štyrmi schodíkmi je oplotené železným tyčovým kovaným plotom. Na vrchole piliera je kamenná pozlátená socha Panny Márie Immaculaty z konca 18. storočia, ktorá stojí na zemeguli ovinutej pozláteným hadom. Okolo hlavy má socha gloriolu s dvanástimi hviezdičkami. Mariánsky stĺp s umelecky kvalitnou sochou je jediným monumentálnym exteriérovým sochárskym dielom z 18. a 19. storočia v regióne.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/mariansky-stlp-socha-imacculata/",
        "en": "https://www.qrlink.sk/new/en/mariansky-stlp-socha-imacculata/",
        "de": "https://www.qrlink.sk/new/de/mariansky-stlp-socha-imacculata/",
        "ru": "https://www.qrlink.sk/new/ru/mariansky-stlp-socha-imacculata/",
        "pl": "https://www.qrlink.sk/new/pl/mariansky-stlp-socha-imacculata/",
        "hu": "https://www.qrlink.sk/new/hu/mariansky-stlp-socha-imacculata/"
      }
    },
    {
      "id": "rimskokatolicky-kostol-povysenia-sv-kriza",
      "miesto": "ruzomberok",
      "poradie": 18,
      "nazov": "RÍMSKOKATOLÍCKY KOSTOL POVÝŠENIA SV. KRÍŽA",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2018/04/3-4-kostol-pov.-sv.-kriza_-kolegium-piaristov.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/04/13-RÍMSKOKATOLÍCKY-KOSTOL-POVÝŠENIA-SV-KRÍŽA.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4148.359531601819!2d19.295661363556967!3d49.080888666450626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4715a7cf4710be8d%3A0x43ea9a128da11d9d!2zS29zdG9sIHBvdsO9xaFlbmlhIFN2w6R0w6lobyBrcsOtxb5h!5e0!3m2!1ssk!2ssk!4v1522923064616",
      "text": "<p>Kostol Povýšenia svätého Kríža vznikol v roku 1806 ako prístavba rehoľnej rezidencie piaristov s finančnou podporou Andreja Zvadu – Paračku, ružomberského mešťana a podnikateľa. Sakrálna stavba v empírovom slohu urbanisticky dotvára priestor Námestia Andreja Hlinku. Kostol má zachovanú pôvodnú dispozíciu jednolodia so vstavanou vežou a polkruhovou svätyňou, v nikách čelnej fasády sa nachádzajú kamenné sochy sv. Jána Nepomuckého a sv. Jozefa Kalazanského z dielne Alexandra Belopotockého. Vnútorné zariadenie z 19. a 20. storočia je dielom Alexandra Belopotockého a Valéra Aurela Zavarského, interiérové klenby sú zdobené výmaľbou od Jozefa Hanulu. Aj keď patria k ranným prácam autora, vyznačujú sa jeho charakteristickým výrazom a autorským prejavom.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/rimskokatolicky-kostol-povysenia-sv-kriza/",
        "en": "https://www.qrlink.sk/new/en/rimskokatolicky-kostol-povysenia-sv-kriza/",
        "de": "https://www.qrlink.sk/new/de/rimskokatolicky-kostol-povysenia-sv-kriza/",
        "ru": "https://www.qrlink.sk/new/ru/rimskokatolicky-kostol-povysenia-sv-kriza/",
        "pl": "https://www.qrlink.sk/new/pl/rimskokatolicky-kostol-povysenia-sv-kriza/",
        "hu": "https://www.qrlink.sk/new/hu/rimskokatolicky-kostol-povysenia-sv-kriza/"
      }
    },
    {
      "id": "kolegium-piaristov",
      "miesto": "ruzomberok",
      "poradie": 19,
      "nazov": "KOLÉGIUM PIARISTOV",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2018/04/3-4-kostol-pov.-sv.-kriza_-kolegium-piaristov.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/04/19-KOLÉGIUM-PIARISTOV.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2613.369677720535!2d19.296473316227193!3d49.07961497930974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDA0JzQ2LjYiTiAxOcKwMTcnNTUuMiJF!5e0!3m2!1ssk!2ssk!4v1522929332776",
      "text": "<p>Najstaršou časťou v architektonickej skladbe objektu je neskorobaroková stavba z rokov 1730-1735. Donátorom stavby bol gróf Ján Jakub Löwenburg. Pôvodne dvojpodlažná budova bola stavebne upravená počas dostavieb v 18. a 19. storočí. V 30. rokoch 20. storočia jezuiti dobudovali moderný severozápadný trakt kláštorného komplexu. Rezidencia piaristov predstavuje jednu z hlavných dominánt mesta, je reprezentantom kláštorných budov školského typu. V západnej časti areálu, za budovou rezidencie, sa rozprestiera plocha kláštornej záhrady.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/kolegium-piaristov/",
        "en": "https://www.qrlink.sk/new/en/kolegium-piaristov/",
        "de": "https://www.qrlink.sk/new/de/kolegium-piaristov/",
        "ru": "https://www.qrlink.sk/new/ru/kolegium-piaristov/",
        "pl": "https://www.qrlink.sk/new/pl/kolegium-piaristov/",
        "hu": "https://www.qrlink.sk/new/hu/kolegium-piaristov/"
      }
    },
    {
      "id": "synagoga",
      "miesto": "ruzomberok",
      "poradie": 20,
      "nazov": "SYNAGÓGA",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2018/04/9-synagoga.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/04/14-Sinagóga.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2466.5827710962817!2d19.302772926872493!3d49.08182415981736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4715a7c99cc77e37%3A0x3900a53ec16d86ed!2zU3luYWfDs2dh!5e0!3m2!1ssk!2ssk!4v1522923931575",
      "text": "<p>Novorománska synagóga z rokov 1879 – 1880 predstavuje konvenčný typ židovskej sakrálnej architektúry druhej polovice 19. storočia. Od doby svojho vzniku slúžila ako modlitebňa pre židovskú náboženskú obec. Trojloďová sieň pozdĺžneho pôdorysu s emporami v interiéri má fasády s novorománskym tvaroslovím. Stavbu podľa vzoru synagógy v Miškolci viedol Juraj Lukáč. Objekt bol prvý krát zrekonštruovaný v roku 1929 a jeho dobový architektonický výraz, vrátane detailov tvaroslovia a výplní otvorov bol zachovaný v originálnej podobe. V roku 2014 bola synagóga komplexne zrekonštruovaná z prostriedkov mesta Ružomberok. Architektonická pamiatka nadobudla nový primárny účel svojho spoločenského využitia ako polyfunkčná výstavná a koncertná sieň mesta.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/synagoga/",
        "en": "https://www.qrlink.sk/new/en/synagoga/",
        "de": "https://www.qrlink.sk/new/de/synagoga/",
        "ru": "https://www.qrlink.sk/new/ru/synagoga/",
        "pl": "https://www.qrlink.sk/new/pl/synagoga/",
        "hu": "https://www.qrlink.sk/new/hu/synagoga/"
      }
    },
    {
      "id": "slovenska-banka",
      "miesto": "ruzomberok",
      "poradie": 21,
      "nazov": "SLOVENSKÁ BANKA",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2018/04/10-kniznica.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/04/25-SLOVENSKÁ-BANKA.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d923.9271082262688!2d19.304588987097024!3d49.08168996970218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4715a7c97a679e05%3A0xf2f2cb9f73ec4133!2sPodhora+1297%2F33%2C+034+01+Ru%C5%BEomberok!5e0!3m2!1ssk!2ssk!4v1522924950665",
      "text": "<p>Solitérna dvojpodlažná stavba mestského charakteru sídlo, Ružomberského úverného spolku, účastinnej spoločnosti, neskoršej Úverovej a od r. 1919 Slovenskej banky. Novobaroková budova so secesnými prvkami na čelnej fasáde bola postavená v rokoch 1902 – 1903 podľa projektu Milana Michala Harminca, neskoršie dispozičné úpravy sa realizovali v roku 1936. Dom patril k významným strediskám slovenského bankovníctva a slovenského národného života. Jeho história je spojená s rodinami Makovickovcov, Beniačovcov a Houdekovcov, ktorých príslušníci patrili k významným osobnostiam hospodárskeho, politického a kultúrneho života.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/slovenska-banka/",
        "en": "https://www.qrlink.sk/new/en/slovenska-banka/",
        "de": "https://www.qrlink.sk/new/de/slovenska-banka/",
        "ru": "https://www.qrlink.sk/new/ru/slovenska-banka/",
        "pl": "https://www.qrlink.sk/new/pl/slovenska-banka/",
        "hu": "https://www.qrlink.sk/new/hu/slovenska-banka/"
      }
    },
    {
      "id": "studna",
      "miesto": "ruzomberok",
      "poradie": 22,
      "nazov": "STUDŇA",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2018/04/25-vlkolinec_studna.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/04/02-Studňa.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d653.8731462025606!2d19.27784482928482!3d49.039256998706605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDAyJzIxLjMiTiAxOcKwMTYnNDIuMiJF!5e0!3m2!1ssk!2ssk!4v1522925848331",
      "text": "<p>Drevená rumpáľová studňa, hlboká 12 metrov, slúžila v minulosti ako jediný zdroj pitnej vody. Vrchnú stavbu tvorí drevená konštrukcia na kamennej podmurovke, sedlová strieška je pokrytá drevenou šindľovou krytinou a vnútorná konštrukcia studne je z kameňa. Verejná studňa z roku 1860 reprezentuje jednoduchú ľudovú technickú stavbu s charakteristickými typologickými znakmi a dobovým konštrukčným riešením. Architektonický vzhľad a konštrukčné riešenie s neopakovateľným výrazom sú jedinečným prvkom identity prostredia pamiatkového územia.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/studna/",
        "en": "https://www.qrlink.sk/new/en/studna/",
        "de": "https://www.qrlink.sk/new/de/studna/",
        "ru": "https://www.qrlink.sk/new/ru/studna/",
        "pl": "https://www.qrlink.sk/new/pl/studna/",
        "hu": "https://www.qrlink.sk/new/hu/studna/"
      }
    },
    {
      "id": "rolnicky-dom",
      "miesto": "ruzomberok",
      "poradie": 23,
      "nazov": "ROĽNÍCKY DOM",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2018/04/26-vlkolinec_rolnicky-dom.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/04/04-ROĽNÍCKY-DOM.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d653.8807842626173!2d19.276792829284837!3d49.038675998706616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDAyJzE5LjIiTiAxOcKwMTYnMzguNCJF!5e0!3m2!1ssk!2ssk!4v1522926352359",
      "text": "<p>Zrubový  ľudový dvojdom s dvojpriestorovou stodolou, maštaľou a murovanou sýpkou je charakteristickým urbanistickým zoskupením sídla Vlkolínec. Drevo ako základný stavebný materiál je uplatnený pri obytnej a hospodárskej stavbe, kameň sa používal len na stavbu komôr a sýpok. Súbor stavieb dokumentuje tradičné bývanie a spôsob hospodárenia vo Vlkolínci a v regióne dolného Liptova. Intaktne zachovaná ľudová architektúra je využívaná ako expozícia in situ.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/rolnicky-dom/",
        "en": "https://www.qrlink.sk/new/en/rolnicky-dom/",
        "de": "https://www.qrlink.sk/new/de/rolnicky-dom/",
        "ru": "https://www.qrlink.sk/new/ru/rolnicky-dom/",
        "pl": "https://www.qrlink.sk/new/pl/rolnicky-dom/",
        "hu": "https://www.qrlink.sk/new/hu/rolnicky-dom/"
      }
    },
    {
      "id": "pomnik-sloboda-slovenskeho-naroda",
      "miesto": "ruzomberok",
      "poradie": 24,
      "nazov": "POMNÍK „SLOBODA SLOVENSKÉHO NÁRODA“",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2018/04/13-socha-slobody_-obetiam-ii.-sv.-vojny.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/04/10-Pomník-sloboda-slovenského-národa.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2613.1954552119746!2d19.29623531622733!3d49.082925979310126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDA0JzU4LjUiTiAxOcKwMTcnNTQuMyJF!5e0!3m2!1ssk!2ssk!4v1522927639699",
      "text": "<p>Pomník bol postavený pri príležitosti 10. výročia konca prvej svetovej vojny a vzniku ČSR. Autorom sôch je Ladislav Majerský. Na podstavci sú umiestnené dve pieskovcové súsošia v približne životnej veľkosti – Poroba a Odboj, na najvyššom hranolovom pilieri je solitérna socha Víťazstvo. Porobu slovenského národa charakterizuje sediaca ženská a kľačiaca mužská postava a dvojkríž. Postavy sú v pózach vyčerpania a skľúčenosti, so sklonenými hlavami a ochabnutými telami. Odboj tvorí kompozícia dvoch postáv v talianskej a ruskej legionárskej uniforme podmaňujúcich vlasť, ktorú predstavuje muž s ratolesťou za nimi. Víťazstvo situované na najvyššom štíhlom pilieri symbolizuje mladá žena zahalená do pruhu drapérie s hlavou obrátenou nahor. Pomník Sloboda slovenského národa je ideovým vyjadrením dobového trendu vyzdvihovania dejín národa, s výtvarným výrazom určitého schematizmu a popisného realizmu.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/pomnik-sloboda-slovenskeho-naroda/",
        "en": "https://www.qrlink.sk/new/en/pomnik-sloboda-slovenskeho-naroda/",
        "de": "https://www.qrlink.sk/new/de/pomnik-sloboda-slovenskeho-naroda/",
        "ru": "https://www.qrlink.sk/new/ru/pomnik-sloboda-slovenskeho-naroda/",
        "pl": "https://www.qrlink.sk/new/pl/pomnik-sloboda-slovenskeho-naroda/",
        "hu": "https://www.qrlink.sk/new/hu/pomnik-sloboda-slovenskeho-naroda/"
      }
    },
    {
      "id": "miesto-tragickych-udalosti",
      "miesto": "ruzomberok",
      "poradie": 25,
      "nazov": "MIESTO TRAGICKÝCH UDALOSTÍ",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2018/04/21-miesto-strelby_-cernova.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/04/08-MIESTO-TRAGICKÝCH-UDALOSTÍ.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2612.6643147547416!2d19.256459316227456!3d49.0930189793111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDA1JzM0LjkiTiAxOcKwMTUnMzEuMSJF!5e0!3m2!1ssk!2ssk!4v1522929184981",
      "text": "<p>Na nedeľu 27.októbra 1907 bol stanovený termín požehnania nového kostola, ale bez účasti svojho rodáka Andreja Hlinku, ktorý bol pozbavený kňazského úradu za poburovanie proti maďarskej národnosti. Černovčania si nevedeli predstaviť tento slávnostný akt bez toho, ktorý sa veľkou mierou zaslúžil o postavenie kostola. Boli rozhodnutí požehnanie prekaziť. Veľká časť obyvateľov Černovej očakávala od rána nevítaných hostí na začiatku dediny pri dolnej škole. Dav Černovčanov tvoril v úzkom vstupe do dediny bariéru ľudských tiel v snahe zabrániť posväteniu kostola. Koče s prichádzajúcimi kňazmi sa dostali do obkľúčenia ľudí bojovne naladených, vedomých si svojej spolupatričnosti. Výkriky Černovčanov ako aj snahy žandárov utvoriť koridor pre koče, spôsobili, že kone sa splašili a nastal chaos. Slovné aj fyzické útoky na oboch stranách ukončil strážmajstra vydaním rozkazu k streľbe. Už po prvých výstreloch boli zranení aj umierajúci. Streľba však pokračovala ďalej. Zásah žandárov si vyžiadal 15 mŕtvych, 12 ťažko a 40 ľahko zranených. V januári 1908 čakal 59 obžalovaných černovský proces, v ktorom obvinení dostali v súhrne 37 rokov odňatia slobody. Tragédia v Černovej bola jednou z najkrvavejších udalostí posledných rokov Rakúsko-Uhorska ako dôsledok národnostného útlaku. Vyvolala veľké protesty na Slovensku aj po celej monarchii. Protestovali viaceré významné zahraničné osobnosti. Černovská tragédia aj vďaka nim prešla do politických dejín slovenského národa. Národ slovenský je stvorený k životu aj cez černovských mučeníkov.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/miesto-tragickych-udalosti/",
        "en": "https://www.qrlink.sk/new/en/miesto-tragickych-udalosti/",
        "de": "https://www.qrlink.sk/new/de/miesto-tragickych-udalosti/",
        "ru": "https://www.qrlink.sk/new/ru/miesto-tragickych-udalosti/",
        "pl": "https://www.qrlink.sk/new/pl/miesto-tragickych-udalosti/",
        "hu": "https://www.qrlink.sk/new/hu/miesto-tragickych-udalosti/"
      }
    },
    {
      "id": "vlacik-korytko-na-zeleznicnej-stanici",
      "miesto": "ruzomberok",
      "poradie": 26,
      "nazov": "VLÁČIK KORYTKO NA ŽELEZNIČNEJ STANICI",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2018/04/18-vlacik-korytko-na-ZS.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/04/09-ŽELEZNIČNÁ-STANICA.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d653.3019813139591!2d19.308157829284912!3d49.082688998706864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDA0JzU3LjciTiAxOcKwMTgnMzEuMyJF!5e0!3m2!1ssk!2ssk!4v1522930009791",
      "text": "<p>Výrazná stavba ružomberskej stanice je postavená podľa vzoru kúpeľných domov s hrazdeným murivom. Postavená bola v roku 1871, keď cez Liptov prešiel po novej trati prvý vlak. Neskôr, v roku 1912, bola zväčšená a prestavaná, upravené tiež boli nástupiská a odbavovacia hala. Parné rušne radu U37 premávali na trase úzkorozchodnej železnice Ružomberok – Korytnica od jej vzniku v roku 1905 do roku 1959, kedy boli nahradené dieselelektrickými rušňami . Slúžili na prepravu drevnej hmoty do papierenských tovární, spoločne s prepravou osôb a pacientov do kúpeľov v Korytnici. Parný rušeň U37.006 bol v roku 1969 slávnostne umiestnený na podstavec, ako pamätník pred hlavnú budovu železničnej stanice Ružomberok. Stal sa ikonou trate a miestni ľudia mu nehovorili inak ako „Korýtko“.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/vlacik-korytko-na-zeleznicnej-stanici/",
        "en": "https://www.qrlink.sk/new/en/vlacik-korytko-na-zeleznicnej-stanici/",
        "de": "https://www.qrlink.sk/new/de/vlacik-korytko-na-zeleznicnej-stanici/",
        "ru": "https://www.qrlink.sk/new/ru/vlacik-korytko-na-zeleznicnej-stanici/",
        "pl": "https://www.qrlink.sk/new/pl/vlacik-korytko-na-zeleznicnej-stanici/",
        "hu": "https://www.qrlink.sk/new/hu/vlacik-korytko-na-zeleznicnej-stanici/"
      }
    },
    {
      "id": "kastiel-sokolovce",
      "miesto": "sokolovce",
      "poradie": 1,
      "nazov": "Kaštieľ Sokolovce",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2025/05/kastiel-sokolovce.png",
      "audio": [],
      "galeria": [],
      "gps": {
        "lat": 48.5358319,
        "lng": 17.8419151
      },
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2641.864317069215!2d17.841915077458665!3d48.53583192335052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476b51fd8917a3db%3A0x297d00e36b08e444!2zS2HFoXRpZcS-IFNva29sb3ZjZQ!5e0!3m2!1ssk!2ssk!4v1748244673675!5m2!1ssk!2ssk",
      "text": "<p>Národná kultúrna pamiatka SR č. 1019/</p>\n<p>Kaštieľ a park v Sokolovciach</p>\n<p>Kaštieľ a park v Sokolovciach sú najvýznamnejšou historickou pamiatkou na ľavom brehu Váhu medzi Piešťanmi a Hlohovcom. Výnimočné sú charakterom uceleného historického vidieckeho sídla s priľahlým parkom so vzácnymi drevinami a vodnou plochou.</p>\n<p>Obdobie od skončenia 2. svetovej vojny prinieslo kaštieľu a parku – dnes národným kultúrnym pamiatkam – najťažšiu kapitolu dejín, poznačenú častými zmenami ich využívania. Zo známeho štátneho zdravotníckeho zariadenia sa areál postupne dostal do úpadku. Na Vianoce 2022 však jeho záchranu prevzala obec, ktorá kúpou kaštieľa začala písať jeho novodobú históriu. Cieľom je komplexná rekonštrukcia a obnovenie funkčnosti pamiatok – od domu seniorov cez reprezentačné priestory pre kultúru a komunitný život až po ekologicky hodnotný park.</p>\n<p>Podľa výsledkov historického výskumu si šľachtické sídlo v Sokolovciach založili v 17. storočí príslušníci rodu Nyáryovcov, jedného z najstarších šľachtických rodov Uhorska (prvý známy predok – János Nyáry, kráľovský agent – sa spomína už v roku 1329; prvá písomná zmienka o obci pochádza z roku 1293 „Zokol“).</p>\n<p>Za prvého známeho majiteľa sokolovského sídla sa považuje gróf Zsigmund Nyáry. Jeho manželka Klára Eva Angelika Maláth de Székely a syn József Lajos Miklós Nyáry pokračovali v správe majetku. Pravdepodobne kúpou od miestnej rodiny Skarbalovcov získali Nyáryovci aj samotnú obec. Samotný kaštieľ dal postaviť gróf Zsigmund Nyáry po roku 1703, no najneskôr pred rokom 1746; následne dal vybudovať aj kostol Povýšenia sv. Kríža.</p>\n<p>Barokovo-klasicistický kaštieľ s priľahlým parkom (2. polovica 18. stor.) vystriedal viacerých majiteľov: Amadéovci, Windisch-Grätzovci, Degenfeldovci, Hirschwerkovci. V druhej polovici 19. stor. vlastnil kaštieľ Dávid Horn – pribudla vyhliadková veža a park obohatilo jazierko s výsadbou vzácnych drevín.  Počas vlastníctva grófa Adolfa Degenfelda-Schomburga vznikla vzorová farma s liehovarom. Poslednými majiteľmi boli Gyulayovci, ktorí sídlo roku 1945 dobrovoľne opustili a odišli do Viedne pred príchodom východného frontu</p>\n<p>Roky 1945 – 2021 boli pre kaštieľ a park najťažšie: od dočasného ubytovania oslobodzovacích vojsk, cez sklady a zásobovacie podniky, až po školu a liečebňu tuberkulózy (do 1976). Vnútorne prestavaný v rokoch 1963 a 1980 slúžil ako ústav pre liečbu TBC a následne pre závislých pacientov. Roku 1998 síce získal štatút národnej kultúrnej pamiatky, no po rozpade štátneho zdravotníctva (2005) a odpredaji „nadbytočného“ majetku (2008) zostal napospas súkromnému vlastníkovi; po vykradnutí medenej strechy v roku 2012 chátral a stal sa ruinou.</p>\n<p>Úsilie samosprávy vyvrcholilo 24. decembra 2022 odkúpením areálu do obecného vlastníctva. Odvtedy obec – so zapojením bývalých i súčasných občanov, rodákov, partnerov a štátnych inštitúcií – pracuje na komplexnej rekonštrukcii oboch národných pamiatok a na ich modernom využití v prospech kvality života obyvateľov i návštevníkov regiónu.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/kastiel-sokolovce/",
        "en": "https://www.qrlink.sk/new/en/kastiel-sokolovce/",
        "de": "https://www.qrlink.sk/new/de/kastiel-sokolovce/",
        "ru": "https://www.qrlink.sk/new/ru/kastiel-sokolovce/",
        "pl": "https://www.qrlink.sk/new/pl/kastiel-sokolovce/",
        "hu": "https://www.qrlink.sk/new/hu/kastiel-sokolovce/"
      }
    },
    {
      "id": "mestsky-park",
      "miesto": "trebisov",
      "poradie": 1,
      "nazov": "Mestský park",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2018/06/009.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/09/09-mestský-park.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7459.473524814148!2d21.722607129581974!3d48.622816980895905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47392ac65b16dfa9%3A0x90b571ca34957336!2sMestsk%C3%BD+park+Trebi%C5%A1ov!5e0!3m2!1ssk!2ssk!4v1528872271380",
      "text": "<p>Historický park v Trebišove je jedným z najvýznamnejších stavieb spoločenskej a kultúrnej atmosféry minulých storočí. Súčasne je dokumentom etického vzťahu generácií minulých, súčasných i budúcich. Park vznikol z pôvodného zátopového lužného lesa a rozšíril sa na plochu 62 ha. Nachádza sa v ňom historická i náletová zeleň, ktorú tvoria ihličnaté, listnaté stromy, kroviny a rastliny. Veľmi cenný je najmä tis obyčajný, rozšírené sú tuja východná, tuja západná, borovica čierna, borovica sosna, smrek obyčajný, smrek pichľavý a iné. Z listnatých stromov je najvýznamnejší platan javorolistý, pagaštan konsky, čremcha strapcovitá, jaseň štíhly, dub letný, dub zimný, buk lesný, hrab obyčajný, brest hrabolistý, lipa malolistá, jelša lepkavá, agát biely, rôzne druhy javorov, topoľov a iné.</p>\n<p>Počiatky parkových úprav siahajú do poslednej tretiny 18. storočia a súvisia s výstavbou trebišovského kaštieľa. V areáli historického parku a v jeho bezprostrednom okolí sa nachádzajú aj ďalšie kultúrne pamiatky: hrad Parič, základy stredovekého kostola sv. Ducha, rímskokatolícky kostol Návštevy Panny Márie, gréckokatolícky chrám Zosnutia presvätej Bohorodičky, Pavlínsky kláštor, kaštieľ s hospodárskymi budovami, mauzóleum grófa Júliusa Andrássyho, súsošie Immaculaty a archeologické lokality z praveku a stredoveku. Trebišovský park prospel mestu najmä tým, že v ostatných dvoch storočiach priestorovo izoloval a chránil historicky hodnotné objekty a časti mesta pred živelnou zástavbou, ale tiež vytvoril hodnotné životné prostredie v strede mesta so vzácnym stromovým porastom. V strede historického parku rozprestiera sa nížinný vodný hrad Parič (Arx Paris, Castrum Paris).</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/mestsky-park/",
        "en": "https://www.qrlink.sk/new/en/mestsky-park/",
        "de": "https://www.qrlink.sk/new/de/mestsky-park/",
        "ru": "https://www.qrlink.sk/new/ru/mestsky-park/",
        "pl": "https://www.qrlink.sk/new/pl/mestsky-park/",
        "hu": "https://www.qrlink.sk/new/hu/mestsky-park/"
      }
    },
    {
      "id": "mauzoleum-grofa-juliusa-andrassyho",
      "miesto": "trebisov",
      "poradie": 2,
      "nazov": "Mauzóleum grófa Júliusa Andrássyho",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2018/06/003.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/09/08-Mauzóleum-grófa-Júliusa-Andrássyho.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4978.60491320314!2d21.722810662353595!3d48.622779760038576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47392ac66d639cc7%3A0x69c48216952b413f!2zTWF1esOzbGV1bSByb2RpbnkgZ3LDs2ZhIErDumxpdXNhIEFuZHLDoXNzeWhv!5e0!3m2!1ssk!2ssk!4v1528872419269",
      "text": "<p>Medzi najcennejšie chránené kultúrne pamiatky v Trebišove patrí Mauzóleum Grófa Júliusa Andrássyho. Bolo postavené v roku 1893, podľa projektu nemeckého architekta Arthura Meininga v neogotickom slohu.</p>\n<p>V mauzóleu sa nachádza mramorový sarkofág Júliusa Andrássyho, Katalin Kendeffy a smútiacej dcéry Heleny, ktorý je dielom budapeštianskeho sochára Juraja Zalu z rokov 1893 – 1895. Štyri rohy sarkofágu držia levice. Na jeho poklope je bronzova socha anjela s roztiahnutými krídlami, ktorý drží v rukách stuhu s latinským nápisom: Beati mortui qui in Domino moriuntur. Opera enim illorum sequuntur. Illos – „Blaženi mŕtvi, ktorí zomierajú v Pánovi. Lebo ich skutky ich nasledujú“.</p>\n<p>Bronzové kartuše umiestnené pred anjelom zdobia rodové erby Júliusa Andrássyho a jeho manželky grófky Katalin Kendeffy (1830-1896). Na schodoch vedúcich k sarkofágu kľačí na poduške bronzova postava ich dcéry Ilony (1858-1952). V mauzóleu je pochovaný aj gróf Július Andrássy (zomrel 1890 a bol pochovaný v krypte rímskokatolického kostola).</p>\n<p>Jeho rakva bola premiestnená v roku 1894 z krypty rímskokatolického kostola do mauzólea. Podľa legendy v roku 1895 navštívila jeho hrob v Trebišove aj samotná cisárovná Alžbeta (Sissi), ktorá mu tu nechala krásnu striebornú kyticu. Súčasťou interiéru je tiež cínová rakva syna Tivadara a drevený neogoticky obetný stôl. Na výtvarnej realizácii sa podieľal aj spomínaný Tivadar Andrassy. Stavbu zrealizovali so štvorcovým pôdorysom, v rohoch s opornými piliermi, ktoré sú ukončene fialami a štítovými helmicami. Hlavná rímsa, ktorú zdobí atikové zábradlie, je doplnená o okrídlene anjelské hlavičky, takže väčšina ľudí si ich spája skôr s barokom. Nechýbajú však ani kamenne chŕliče spodobujúce bájne zvieratá typické pre gotiku. Tieto odvádzajú vodu zo strešnej kupoly, ktorej dominuje kovaný latinsky kríž. Na severnej strane mauzólea bola pôvodne maľba s názvom „Tri plačky pod krížom“, ktorej autorom je Mihaly Munkacsy. Maľbu neskôr Katalin Kendeffy darovala Maďarskej národnej galérii v Budapešti. V súčasnosti sa v mauzóleu nachádza replika tohto originálu. Mauzóleum je jedno z najkrajších neogotických stavieb na Slovensku.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/mauzoleum-grofa-juliusa-andrassyho/",
        "en": "https://www.qrlink.sk/new/en/mauzoleum-grofa-juliusa-andrassyho/",
        "de": "https://www.qrlink.sk/new/de/mauzoleum-grofa-juliusa-andrassyho/",
        "ru": "https://www.qrlink.sk/new/ru/mauzoleum-grofa-juliusa-andrassyho/",
        "pl": "https://www.qrlink.sk/new/pl/mauzoleum-grofa-juliusa-andrassyho/",
        "hu": "https://www.qrlink.sk/new/hu/mauzoleum-grofa-juliusa-andrassyho/"
      }
    },
    {
      "id": "pavlinsky-klastor",
      "miesto": "trebisov",
      "poradie": 3,
      "nazov": "Pavlínsky kláštor",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2018/06/001.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/09/07-Paulínsky-kláštor.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2637.350605879921!2d21.71876131572889!3d48.6222725252566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDM3JzIwLjIiTiAyMcKwNDMnMTUuNCJF!5e0!3m2!1ssk!2ssk!4v1528874561240",
      "text": "<p>Keď kanonik ostrihomskej kapituly Eusébius na základe príkladu svätého Pavla Pustovníka zjednotil v roku 1225 jednotlivo žijúcich pustovníkov, ešte netušil, že položil základy jediného pôvodne uhorského mužského rádu – pavlínov. Rád sa konštituoval v ostrihomskej arcidiecéze v roku 1256 a jeho existenciu potvrdil pápež Klement V. keď roku 1308 schválil jeho rehoľné pravidlá. Tak vznikal jediná pôvodne uhorská rehoľa pavlínov, ktorá malá svoj kláštor aj v Trebišove. Trebišov však vstúpil do dejín pavlínskeho rádu až po uplynutí takmer dvoch storočí od jeho vzniku. Jeden z najvplyvnejších Peréniyovcov Palatín Imrich dal roku 1502 postaviť v Trebišove dvojpodlažný kláštor. V roku 1504 doň pozval pavlínov, ktorým daroval so súhlasom panovníka aj dediny Sáros, Olaszi a vodný mlyn na Bodrogu.</p>\n<p>Objekt renesančného kláštora v tvare písmena I bol južným krídlom priamo pričlenený ku kostolu. V niektorých jeho miestnostiach sa zachovali hrebienkové klenby. Mária Spoločníková objavila pod omietkami zaujímavé fragmenty. Pozoruhodné sú aj kamenné ostenia spojovacích dverí. Prostredie kláštora dotváral dvor so studňou a záhradou, ktorý bol súčasťou jeho života.</p>\n<p>Kláštor bol v minulosti niekoľko krát obnovovaný. Priečelie obnovovali v rokoch 1678, 1720 pričom jeho členenie sa realizovalo roku 1876. Pôvodný kláštor mal na vonkajších múroch renesančné sgrafitá. Zrušením pavlínskeho rádu Jozefom II. Roku 1786 kláštor stratil svoje pôvodné určenie a bol využívaný na rôzne účely. V čase zániku kláštora predstavoval majetok siedmich mníchov žijúcich v kláštore 94 261 zlatých.</p>\n<p>V súčasnosti sa v objekte kláštora nachádza základná umelecká škola a rímskokatolícky farský úrad. Objekt nie je pamiatkovo označený.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/pavlinsky-klastor/",
        "en": "https://www.qrlink.sk/new/en/pavlinsky-klastor/",
        "de": "https://www.qrlink.sk/new/de/pavlinsky-klastor/",
        "ru": "https://www.qrlink.sk/new/ru/pavlinsky-klastor/",
        "pl": "https://www.qrlink.sk/new/pl/pavlinsky-klastor/",
        "hu": "https://www.qrlink.sk/new/hu/pavlinsky-klastor/"
      }
    },
    {
      "id": "barokovo-klasicisticky-kastiel",
      "miesto": "trebisov",
      "poradie": 4,
      "nazov": "Barokovo-klasicistický kaštieľ",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2018/06/003-1.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/09/06-Barokovo-klasicistický-kaštieľ-1.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1864.9911956602461!2d21.720026678587917!3d48.619492934243134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDM3JzEwLjYiTiAyMcKwNDMnMTYuMCJF!5e0!3m2!1ssk!2ssk!4v1528875321061",
      "text": "<p>Neskorobarokový, neskôr klasicisticky upravený kaštieľ dal postaviť v roku 1786 gróf Imrich Csáky. Je dvojpodlažnou stavbou, ktorá bola postavená 100 rokov po zničení hradu Parič. Časť materiálu z tohto hradu bola použitá pri jeho výstavbe.</p>\n<p>Kaštieľ má na priečelí dve postranné barokové veže, ktoré boli pristavené v poslednej tretine 19. storočia. Fasáda objektu je členená lizenami, pričom jej dominantné prvky tvoria barokový štít a reprezentačný balkón, ktorý podopiera osem klasicistických stĺpov. V Barokovom štíte stredného rizalitu je plastický erb rodiny Csákyovcov. Paralelne s ním sa nachádza plastický znak, ktorý je symbolom lovu. Z tohto hľadiska sa pravdepodobne jednalo o lovecký kaštieľ. Túto skutočnosť potvrdzuje K. Károlyiová-Andrássyová v knihe Červená grófka spomína. Z jej spomienok vplýva, že každoročne 3. novembra na Huberta, sa začínali v Trebišove a jeho okolí veľkolepé hony na líšku.</p>\n<p>Zadná časť kaštieľa, ktorú tvoria dve bočné krídla so štítovými fasádami, má charakter čestného dvora. V interiéroch kaštieľa boli pôvodne mozaikové parkety, intarzovaný dobový nábytok, cenné umelecké diela, plastiky, drahé umelecké výrobky, tkané závesy, cenné koberce, porcelán, striebro, cín a iné luxusné výrobky. Nechýbali ani umelecky kované mreže, plot okolo kaštieľa, balustráda, fontány a iné architektonické v exteriéroch.</p>\n<p>Najcennejšie časti interiéru boli v roku 1914 odvezené do Budapešti a časť do Tiszadobu v Sabolčskej župe. O areál s kaštieľom dbal do rozpadu Rakúsko – Uhorska a aj po vzniku medzivojnovej ČSR správca andrássyovského majetku František Malonay.</p>\n<p>V rokoch 1949 – 1978 slúžil kaštieľ s areálom Nemocnici s poliklinikou v Trebišove. Jeho pôvodný interiér bol značne narušený a prispôsobený potrebám zdravotníctva. Po vysťahovaní nemocnice s poliklinikou kaštieľ niekoľko rokov chátral.</p>\n<p>V roku 1982 začal Pamiatkostav š.p. Žilina rekonštrukciu objektu na základe projektovej dokumentácie spracovanej Projektovým ústavom kultúry v Prešove. Projektovú dokumentáciu schválil a rekonštrukciu financoval Krajský ústav štátnej pamiatkovej starostlivosti a ochrany prírody v Prešove. Prvá etapa rekonštrukcie bola ukončená k 1. 12. 1987, keď bola v kaštieli slávnostne otvorená expozícia Cestami práce a bojov za chlieb, korá dokumentovala dejiny poľnohospodárstva na Východnom Slovensku od Neolitu po súčasnosť.</p>\n<p>V súčasnosti je kaštieľ sídlom Vlastivedného múzea, ktoré má v ňom a v priľahlých pamiatkovo – chránených objektoch svoje expozície.</p>\n<p>Súčasťou areálu kaštieľa sú aj prízemné pôvodne barokové budovy so štítovými fasádami, ktoré boli neskôr upravované. Patrí medzi ne jazdiareň, maštaľ ( koniareň ), čeľadinec, hospodárska budova, kuchyňa, ktoré si až na maštaľ ( koniareň ) zachovali svoje barokové slohové prvky a sú prirodzenou súčasťou tohto šľachtického sídla.</p>\n<p>Koncom 18. storočia sa súčasne s výstavbou kaštieľa začal z lužného lesa vytvárať historický park. Postupne vznikol anglický prírodno – krajinársky park, ktorého vývoj vyvrcholil v rokoch 1890 – 1905, keď došlo k úprave čestného dvora a francúzskej záhrady. V niektorých častiach parku boli postavené altánky, fontány, akváriá, koncertné terasy, antické plastiky, ktoré mu dodávali kultivovanejší charakter.</p>\n<p>Súčasne s rekonštrukciou a prestavbou kaštieľa na muzeálne účely zabezpečoval Krajský ústav štátnej pamiatkovej starostlivosti a ochrany prírody v Prešove biologickú rekonštrukciu muzeálnej časti mestského parku. Park vznikol z pôvodného zátopového lužného lesa a rozšíril sa na ploche 62 ha. Nachádza sa v ňom historická i náletová zeleň, ktorú tvoria ihličnaté, listnaté stromy, kroviny a rastliny. Veľmi cenný je najmä tis obyčajný, rozšírené sú tuja východná, tuja západná, borovica čierna, borovica sosna, smrek obyčajný, smrek pichľavý a iné. Z listnatých stromov je najvýznamnejší platan javorolistý, pagaštan konsky, čremcha strapcovitá, jaseň štíhly, dub letný, dub zimný, buk lesný, hrab obyčajný, brest hrabolistý, lipa malolistá, jelša lepkavá, agát biely, rôzne druhy javorov, topoľov a iné.</p>\n<p>V súčasnosti má kultivovaný charakter muzeálna časť parku a jeho časti, ktoré udržiavajú Technické služby mesta Trebišov. Ostatné časti mestského parku majú charakter lesoparku. Súčasťou lesoparku je aj areál zdravia Bučov les, ktorý slúži občanom i návštevníkom Trebišova v rámci cykloturistiky.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/barokovo-klasicisticky-kastiel/",
        "en": "https://www.qrlink.sk/new/en/barokovo-klasicisticky-kastiel/",
        "de": "https://www.qrlink.sk/new/de/barokovo-klasicisticky-kastiel/",
        "ru": "https://www.qrlink.sk/new/ru/barokovo-klasicisticky-kastiel/",
        "pl": "https://www.qrlink.sk/new/pl/barokovo-klasicisticky-kastiel/",
        "hu": "https://www.qrlink.sk/new/hu/barokovo-klasicisticky-kastiel/"
      }
    },
    {
      "id": "marianske-susosie",
      "miesto": "trebisov",
      "poradie": 5,
      "nazov": "Mariánske súsošie",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2018/06/002.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/09/05-Mariánske-Súsošie.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1318.6608332841422!2d21.719223882297673!3d48.62282636167004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47392ac9232a0a09%3A0xbcd6287459f481c2!2zTWFyacOhbnNrZSBzw7pzb8WhaWU!5e0!3m2!1ssk!2ssk!4v1528875920057",
      "text": "<p>Mariánske súsošie je dielom neznámeho kameno-sochára datovaným okolo roku 1800. Slohovo ho možno zaradiť k dielam doznievajúceho rokoka s niektorými znakmi klasicistického slohu. Dominantné miesto na súsoší má plastika Madony šliapajúcej na hada. Po jej pravici je kamenná plastika sv. Jána Nepomuckého a po ľavici socha patróna a ochrancu pred požiarmi sv. Floriána. Súsošie je v súčasnosti umiestnené už na treťom mieste. Pôvodne stálo pred kaštieľom. Neskôr roku 1907 bolo prenesené do priestoru južne od kostola na okraj parku smerom k hlavnej ulici. V tom čase bolo obklopené dekoratívnou reťazou umiestnenou na ôsmich stĺpoch. Bol to dar mestu od vdovy po grófovi Teodorovi Andrássym.</p>\n<p>Poškodené a značne narušené súsošie bolo v polovici 80-tych rokov komplexne obnovené v ŠRA vysekaním kópií pôvodných plastík a reštaurovaním menej narušených častí. Bolo tiež prenesené na vhodnejšie miesto, do priestoru medzi rímskokatolíckym a gréckokatolíckym kostolom. Súsošie nie je pamiatkovo označené.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/marianske-susosie/",
        "en": "https://www.qrlink.sk/new/en/marianske-susosie/",
        "de": "https://www.qrlink.sk/new/de/marianske-susosie/",
        "ru": "https://www.qrlink.sk/new/ru/marianske-susosie/",
        "pl": "https://www.qrlink.sk/new/pl/marianske-susosie/",
        "hu": "https://www.qrlink.sk/new/hu/marianske-susosie/"
      }
    },
    {
      "id": "nizinny-vodny-hrad-paric",
      "miesto": "trebisov",
      "poradie": 6,
      "nazov": "Nížinný vodný hrad Parič",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2018/06/HIR_2186-HDR.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/09/04-Nížinný-vodný-hrad-Parič.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1438.0550752730958!2d21.72638311986476!3d48.62123743481565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47392ac65d69fbe3%3A0x9e2c7cf3135f0062!2sHrad+Pari%C4%8D!5e0!3m2!1ssk!2ssk!4v1528876104940",
      "text": "<p>Výstavbu prvej etapy ranogotického nížinného vodného hradu (pravdepodobne obytná veža s opevnením) možno podľa výsledkov archeologických výskumov M. Slivku datovať do 12 . až 13. stor. Potvrdzujú to preskúmané zlomky úžitkovej keramiky, malá lampa s výlevkou a štyri ohniská vyvýšené asi 30 cm, nad úroveň podlahy. Plášťová polygonálna konštrukcia z kamenného základového muriva bola postavená v druhej etape výstavby hradu, začiatkom 14. storočia. Archeologický výskum potvrdil, že súčasne s opevnením bol na západnej strane vybudovaný aj ranogotický palác. Podľa úrovne podlahy hornej klenby možno predpokladať, že objekt mal tri podlažia. Na východnej strane hradného areálu bola vystavaná štvoruholníková vstupná veža a na nádvorí studňa obmurovaná kameňom s vnútorným priemerom 160 cm. Hrad mal vysoké a hrubé opevnenie ukončené cimburím s hradobnou ochodzou. Táto druhá etapa výstavby hradu bola realizovaná Filipom a Viliamom Drugethom v prvej polovici 14. storočia.</p>\n<p>Ďalšou výstavbou nových predsunutých opevnení, vodných priekop a iných obranných prvkov hrad nadobudol za Peréniyovcov v 15. storočí podobu rozsiahlejšieho panského sídla.</p>\n<p>Hrad Parič mal zložitú históriu, plnú násilných zmien vlastníckych vzťahov. Hektická doba protihabsburských povstaní vniesla do architektonického vývoja hradu podstatne zmeny, zakončene jeho úmyselným vyhodením do vzduchu Imrichom Tӧkӧlim v roku 1686. V poslednej štvrtine 18. storočia bol stavebný materiál z hradu použitý pri výstavbe neďalekého kaštieľa, jeho pozostatky sa v neskoršom období stali dokonca terčom aj armádnych cvičení. Všetky uvedené skutočnosti sa v minulosti podpísali na jeho stave, kedy z hradu – okrem archeologicky zistených objektov pod úrovňou terénu – ostalo len neveľké torzo tehlovej hradby.</p>\n<p>Torzo hradu Parič sa nachádza v krásnom mestskom parku, ktorý je najväčším mestským parkom v strednej Európe, v jeho blízkosti stojí barokovo-klasicisticky kaštieľ aj neogotické Mauzóleum grófa Júliusa Andrássyho.</p>\n<p>Lokalizácia pamiatky v autentickom kultúrno-historickom prostredí s pomerne intímnou atmosférou pokoja v urbanizovanej oblasti okresného mesta je benefitom, ktorým pravdepodobne nedisponuje žiadna iná pamiatka podobného druhu.</p>\n<p>Z archeologických pamiatok získaných výskumom je cenný najmä súbor kachliarskej keramiky, ktorý tvoria komorové, miskovité, nárožné, korýtkové a cibuľovité kachlice z 15. a 16. storočia. Sú to svojrázne umelecké diela s rastlinnými zvieracími, heraldickými, architektonickými a svetskými motívmi. Časť z týchto kachlíc je v zbierkovom fonde Vlastivedného múzea v Trebišove.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/nizinny-vodny-hrad-paric/",
        "en": "https://www.qrlink.sk/new/en/nizinny-vodny-hrad-paric/",
        "de": "https://www.qrlink.sk/new/de/nizinny-vodny-hrad-paric/",
        "ru": "https://www.qrlink.sk/new/ru/nizinny-vodny-hrad-paric/",
        "pl": "https://www.qrlink.sk/new/pl/nizinny-vodny-hrad-paric/",
        "hu": "https://www.qrlink.sk/new/hu/nizinny-vodny-hrad-paric/"
      }
    },
    {
      "id": "greckokatolicky-chram-zosnutia-presvatej-bohorodicky",
      "miesto": "trebisov",
      "poradie": 7,
      "nazov": "Gréckokatolícky chrám Zosnutia presvätej Bohorodičky",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2018/06/003-2.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/09/03-Gréckokatolícky-chrám-Zosnutia-presvätej-Bohorodičky.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2637.3041533320074!2d21.71836131572896!3d48.6231615251944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDM3JzIzLjQiTiAyMcKwNDMnMTQuMCJF!5e0!3m2!1ssk!2ssk!4v1528876438833",
      "text": "<p>Výstavba gréckokatolíckej cerkvi v Trebišove bezprostredne súvisela s vrcholiacou migráciou obyvateľstva zo severovýchodu horného Uhorska do úrodnejších častí Zemplína počas ruthénskej kolonizácie v 18. a prvej tretine 19. storočia. V roku 1720 tvorilo Trebišov iba 36 meštianskych domácností. Neobývané domy chátrali a polia zarastali burinou.</p>\n<p>V matrike gréckokatolíckej cirkvi, vedenej od roku 1776, je správa o starej fare, ktorá naznačuje existenciu staršej cerkvi tejto východnej cirkvi v Trebišove. Môžeme len predpokladať, že pôvodná cerkev bola drevená so slamenou strechou a nepostačovala vzrastajúcemu počtu veriacich po jednotlivých migračných vlnách.</p>\n<p>Preto bol v čase vrcholiacej migrácie 28. augusta 1817 položený základný kameň nového kamenného chrámu pre veriacich východného obradu. Projektantom novej gréckokatolíckej cerkvi bol staviteľ Jozef Turčáni. Navrhol chrám, ktorého interiér postačoval potrebám duchovného života vzrastajúceho počtu veriacich gréckokatolíckej cirkvi. Výstavba chrámu bola realizovaná v rokoch 1818 – 1825. Jeho slávnostná vysviacka sa uskutočnila 28. augusta 1825 na sviatok nanebovzatia Presvätej Bohorodičky. Bol to dôkaz toho, že v meste bolo veľmi silné patrocínium Panny Márie.</p>\n<p>Tragické udalosti neobišli ani tento chrám. Živelná pohroma 3. júla 1844 spôsobila zrútenie kostolnej veže, ktorú znovu postavili v roku 1855. Po silnom požiari v roku 1876 boli zničené zvony vo veži, na ktoré prispel kráľ i ministerstvo kultúry. Obnova interiéru chrámu bola ukončená v roku 1886, keď bol rezbárom Petrom Kovaliczkým postavený ikonostas a kazateľnica.</p>\n<p>Dominantnou ikonou na ikonostase je Smrť Panny Márie. Spolu s ňou sú tam umiestnené aj ikony Ježiša Krista, Matky Božej, Sv. Mikuláša. V ďalšom rade menších ikon je v centre Posledná večera a po jej obidvoch stranách je dvanásť hlavných cirkevných sviatkov kresťanského roka. Ikony dvanástich apoštolov, prorokov a patriarchov, nad nimi dominujúca Golgota s Bolestnou Matkou a Sv. Jánom Krstiteľom, dotvárajú kompozíciu celého ikonostasu. Prístavbou sachristie roku 1901, zakúpením umelecky hodnotného lustra, vydláždením interiéru keramickou dlažbou a osadením okenných vitráží (1907) bola dostavba chrámu prakticky ukončená. Namiesto troch zrekvírovaných zvonov z rokov prvej svetovej vojny bol v 20-tych rokoch 20. storočia zakúpený veľký zvon pomenovaný menom Georgij. Oplotenie s vykovanou ozdobnou vežou bolo ukončené a osadené roku 1903.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/greckokatolicky-chram-zosnutia-presvatej-bohorodicky/",
        "en": "https://www.qrlink.sk/new/en/greckokatolicky-chram-zosnutia-presvatej-bohorodicky/",
        "de": "https://www.qrlink.sk/new/de/greckokatolicky-chram-zosnutia-presvatej-bohorodicky/",
        "ru": "https://www.qrlink.sk/new/ru/greckokatolicky-chram-zosnutia-presvatej-bohorodicky/",
        "pl": "https://www.qrlink.sk/new/pl/greckokatolicky-chram-zosnutia-presvatej-bohorodicky/",
        "hu": "https://www.qrlink.sk/new/hu/greckokatolicky-chram-zosnutia-presvatej-bohorodicky/"
      }
    },
    {
      "id": "rimskokatolicky-kostol-navstevy-panny-marie",
      "miesto": "trebisov",
      "poradie": 8,
      "nazov": "Rímskokatolícky kostol Návštevy Panny Márie",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2018/06/002-1.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/09/02-Rímskokatolícky-kostol-Návštevy-Panny-Márie.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1318.6788048289857!2d21.719758772011975!3d48.62213848724366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDM3JzE5LjciTiAyMcKwNDMnMTQuNCJF!5e0!3m2!1ssk!2ssk!4v1528876606436",
      "text": "<p>Pôvodný kostol je datovaný ešte pred rokom 1404. Napriek tomu, že súčasný rímskokatolícky chrám čiastočne ovplyvnili neskoršie umelecké a filozofické prúdy, patrí medzi skvostné pamiatky gotickej architektúry. Kostol má hlavnú loď a neskôr pristavené bočné kaplnky. Sieťovú rebrovú klenbu tvorí 63 polí v tvare kosoštvorcov rôznych veľkostí, s figurálnymi a dekoratívnymi motívmi. Interiér chrámu dotvárajú viaceré oltáre, nástenné maľby a triumfálny oblúk, pri ktorom sú plastické maskarony a konzoly. Na strope svätyne zobrazené scény zo života Panny Márie. Keďže správa o pôsobení kňaza Petra v Trebišove je z roku 1326, možno predpokladať, že na mieste staršieho kostola postavili pred rokom 1404 v gotickom slohu nový kostol. Tento bol do roku 1504 farským kostolom. Keď však Imrich Perényi pozval do Trebišova pavlínov (1504) začal kostol patriť v rokoch 1504 – 1530 a 1650 – 1786 mníchom z tohto rádu. Počas ich pôsobenia v Trebišove bol roku 1696 kláštorný kostol obnovený a neskôr (1770) interiérovo dotvorený.</p>\n<p>Na pôvodných neskoro gotických klenbách interiéru je kvalitne stvárnený nebeský priestor s dekoráciami iluzívnej maľby z poslednej štvrtiny 18. storočia. Strop svätyne tvorí osem kompozícií zo života Panny Márie, ktorej je kostol zasvätený. Dvanásť obrazov z legendárneho života sv. Pavla Pustovníka tvorí strop lode. Bočné steny lode skrášľujú dva monumentálne obrazy: Videnie Sobieskeho pri obliehaní Viedne a Hold pred Máriou Teréziou, ktoré sú z roku 1777 a patria do obdobia rokoka. Povrchná, hrubá obnova malieb po požiari kostola a časti obce v roku 1876, reštaurátorské práce z donácie grófa Teodora (Tivadara) Andrássyho, obnova fresiek na vnútornej klenbe kostola v roku 1933 maliarom Júliusom Kernom, miestne premaľby poškodených častí v kartušiach, ornamentoch a kamenných článkoch spôsobili, že figurálne kompozície na viacerých miestach stratili svoj pôvodný kolorit spráškovatením horných vrstiev a hrubými nánosmi tmelov a miestnych premalieb v neskoršom období.</p>\n<p>Podľa správy reštaurátorky Márie Spoločníkovej opravy uskutočnené v roku 1968 Umeleckými remeslami z Bratislavy a Chrámovým družstvom z Červeného Kostelca spôsobili, že ťažko rozpustné dvojzložkové spevňovacie látky môžu pri ďalšom reštaurovaní spôsobiť porušenie pôvodných omietkových vrstiev. Reštaurátorka usudzuje, že pod vyrovnávacími omietkami z roku 1777 existuje spodná vrstva neznámej nástennej maľby, ktorá bola realizovaná na pôvodný gotický strop.</p>\n<p>Po prvej svetovej vojne bolo nutné nahradiť zrekvírované zvony a poškodené vežové krytiny. V rímskokatolíckom kostole zostal len najväčší zvon, ku ktorému v roku 1924 umiestnili dva menšie zvony zvonolejára E. Ferencza z Kisgejocso. V roku 1926 bol opravený aj posun oporného piliera na južnej strane gotického kostola. V tom čase bola nanovo pokrytá strecha veže a osadený nový kríž na jej vrcholci.</p>\n<p>Pri vchode do sakristie sú umiestnené dva mramorové epitafy Jána a Imricha Perényiovcov. Ján Perényi má epitaf z hnedo-ružového mramoru so symbolikou, ktorú tvoria dve orlie krídla, hlava muža, rytierske brnenie, kukla s korunou a latinský nápis na stuhe náhrobku. Náhrobný kameň Imricha Perényiho, ktorý zomrel roku 1519, zobrazuje zakladateľa Trebišovského kláštora stojaceho v brnení na chrbte leva, opierajúc sa o meč a podporu štyroch anjelov. V ďalších kryptách pod podlahou kostola sú okrem Perényiovcov pochovaní aj Peter Szapáry, Etela Szapáryová a Júlia Csákyová.</p>\n<p>V interiéri kostola sú aj ďalšie cenné umelecko-historické pamiatky: Závesné obrazy Navštívenie Panny Márie (1780), Svätý Pavol Pustovník (Koniec 18. storočia), Svätý Justín Mučeník (1835), Kamenná krstiteľnica (koniec 18. storočia) a pseudo-rokokové kreslo. Podľa zápisu v kronike mesta boli v okolí Trebišova v roku 1887 veľké manévre, na ktorých sa zúčastnil cisár František Jozef I. Gróf Július Andrássy dal na počesť cisára bývajúceho v trebišovskom kaštieli vyrobiť vyrezávané drevené kreslo s bohatou mušľovou i rozviliovou výzdobou a postavami anjelov. Tento „cisársky trón“ je skutočne pozlátený plátkovým zlatom a čalúnený purpurovým plyšom v štýle pseudorokoka (druhého rokoka) druhej polovice 19. storočia. Gróf Teodor Andrássy ho neskôr daroval rímskokatolíckemu kostolu.</p>\n<p>Stiahnutím stropu a múrov kostola železnými tiahlami, osadením malého zvona namiesto prasknutého do veže kostola majstrom zo Sopronu, položením vzorovanej keramickej dlažby (1901 – 1903), chrámových okien zo sklomaľbami Waltera Gidu a výstavbou kazateľnice Sopronským sochárom Leopoldom Hildom (1907) bol kostol staticky zabezpečený a interiérovo ukončený.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/rimskokatolicky-kostol-navstevy-panny-marie/",
        "en": "https://www.qrlink.sk/new/en/rimskokatolicky-kostol-navstevy-panny-marie/",
        "de": "https://www.qrlink.sk/new/de/rimskokatolicky-kostol-navstevy-panny-marie/",
        "ru": "https://www.qrlink.sk/new/ru/rimskokatolicky-kostol-navstevy-panny-marie/",
        "pl": "https://www.qrlink.sk/new/pl/rimskokatolicky-kostol-navstevy-panny-marie/",
        "hu": "https://www.qrlink.sk/new/hu/rimskokatolicky-kostol-navstevy-panny-marie/"
      }
    },
    {
      "id": "romansky-kostol-sv-ducha",
      "miesto": "trebisov",
      "poradie": 9,
      "nazov": "Románsky kostol sv. Ducha",
      "popis": "",
      "cover": "",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/09/01-Románsky-kostol-svätého-ducha.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2637.603995289739!2d21.72848764295546!3d48.617422993468786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDM3JzAyLjciTiAyMcKwNDMnNDcuMCJF!5e0!3m2!1ssk!2ssk!4v1528877206599",
      "text": "<p>K najstarším sakrálnym pamiatkam Trebišova patrí románsky kostol Sv. Ducha, ktorého základy s cintorínom boli náhodne objavené v areáli Stanice mladých prírodovedcov v Trebišove. Jeho existenciu potvrdzovali záznamy v pápežských desiatkoch vyhotovené v rokoch 1332-1337. Archeologický výskum ukázal, že kostol Sv. Ducha mal obdľžnikovú loď s polooblúkovou apsidou-svätyňou. V 65-tich kostrových hroboch boli mŕtvi pochovaný na chrbte bez rakvy a väčšinou aj bez milodarov. Na základe nálezov možno kostol Sv. Ducha datovať pravdepodobne do 1.polovice 13. stor. a jeho zánik okolo roku 1400.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/romansky-kostol-sv-ducha/",
        "en": "https://www.qrlink.sk/new/en/romansky-kostol-sv-ducha/",
        "de": "https://www.qrlink.sk/new/de/romansky-kostol-sv-ducha/",
        "ru": "https://www.qrlink.sk/new/ru/romansky-kostol-sv-ducha/",
        "pl": "https://www.qrlink.sk/new/pl/romansky-kostol-sv-ducha/",
        "hu": "https://www.qrlink.sk/new/hu/romansky-kostol-sv-ducha/"
      }
    },
    {
      "id": "kostol-nanebovzatia-panny-marie-pomnik-padlym-v-1-sv-vojne",
      "miesto": "turzovka-mesto",
      "poradie": 1,
      "nazov": "Kostol Nanebovzatia Panny Márie – Pomník padlým v 1. sv. vojne",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2017/11/1-1.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/03/1.-The-church-of-the-assumption-of-the-Virgin-Mary-–-The-memorial-of-the-Fallen-in-the-1st-World-War-12.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 49.405817,
        "lng": 18.626376
      },
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m27!1m12!1m3!1d1298.1092421760184!2d18.624242608378655!3d49.40477379483618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m12!3e6!4m4!2s49.403521%2C+18.625441!3m2!1d49.403521!2d18.625441!4m5!1s0x47146eae9c80cdb5%3A0xc3ae6d6d1a9bebff!2sFarsk%C3%BD+kostol+Nanebovzatia+Panny+M%C3%A1rie%2C+R.+Ja%C5%A1%C3%ADka%2C+023+54+Turzovka!3m2!1d49.405817199999994!2d18.626376!5e0!3m2!1ssk!2ssk!4v1514392426450",
      "text": "<p>Farský kostol Nanebovzatia Panny Márie v Turzovke mal svojich troch predchodcov. Boli to drevené kostoly zasvätené sv. Alžbete, rovnako ako prvý murovaný kostol, ktorý bol postavený v roku 1728. Súčasný barokový kostol bol postavený v rokoch 1757 – 1759. Kostol sa nachádza v centre mesta Turzovka vo vnútri turzovskej usadlosti. Pôvodné patrocínium sa zmenilo zásahom Pavla Antona Esterháziho na Nanebovzatie Panny Márie. Kostol pôvodne nebol konsekrovaný, len požehnaný, čo sa zmenilo v roku 1834 10. augusta, kedy sa uskutočnila slávnostná konsekrácia za účasti diecézneho biskupa Jozefa Wuruma. Renovačné práce na kostole majú niekoľko významných medzníkov. Prvým medzníkom bola I. štvrtina 19. storočia, potom roky 1849 – 1883 počas duchovnej správy dekana Františka Tagányiho. Ďalším významným obdobím renovácie kostola boli roky 1910 – 1911 počas pôsobenia p. farára Júliusa Lonského. V roku 1932 bola pristavená nová sakristia a zo starej sa stala bočná kaplnka Sedembolestnej Panny Márie. Interiér Kostola Nanebovzatia Panny Márie zdobia obrazy akademického maliara Jozefa Božetecha Klemensa, Alexandra Loszinského, ako i Bohu známych tvorcov. Pozoruhodnosťou kostola je pseudobarokový organ s polychromovanou drevorezbou. Do stredu chórového parapetu je zabudovaná časť pôvodného organa z roku 1799. 28. augusta 1964 vyhlásilo Krajské stredisko štátnej pamiatkovej starostlivosti a ochrany prírody v Banskej Bystrici kostol za kultúrnu pamiatku. V nasledujúcom roku bolo celé okolie kostola vyhlásené za ochranné pásmo kultúrnej pamiatky.</p>\n<p>V blízkosti kostola sa nachádza Pamätník padlým vojakom počas 1. svetovej vojny. Pamätník bol v roku 1922 vyhotovený sochárom a kamenárskym majstrom Vojtěchom Semerákom z Olomouca. Náklady na jeho vyhotovenie činili 14 000 korún. V tom istom roku bol pamätník posvätený v priebehu renovácií sv. misií miestnym farárom Karolom Točíkom. Je vyhotovený z pieskovca a predstavuje kamenný hrob. V jeho vrchnej časti je umiestnený reliéf umierajúceho vojaka, ktorého drží anjel. Nad hrobom je vztýčený kríž s korpusom ukrižovaného Krista. Vľavo od hrobu je na podstavci smútiaca žena so sklonenou hlavou s kyticou kvetov v ruke, druhou sa jemne dotýka hrobu. Do „vchodu do hrobu“ bola umiestnená žulová tabuľa s menami turzovských vojakov, ktorí padli na vojnových frontoch. Na pravú stranu bola inštalovaná ďalšia, pôvodne žulová tabuľa s menami vojakov dodatočne vyhlásenými za mŕtvych. Keďže bola neskôr poškodená (prasknutá), bola nahradená novou tabuľou z menej vhodného kamenného materiálu. Pri príležitosti 20. výročia SNP bola v roku 1964 na zadnú stranu pamätníka inštalovaná ďalšia pamätná tabuľa s menami padlých a obetí druhej svetovej vojny pochádzajúcich z turzovskej farnosti. Pamätník bol vyhlásený za národnú kultúrnu pamiatku.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/kostol-nanebovzatia-panny-marie-pomnik-padlym-v-1-sv-vojne/",
        "en": "https://www.qrlink.sk/new/en/kostol-nanebovzatia-panny-marie-pomnik-padlym-v-1-sv-vojne/",
        "de": "https://www.qrlink.sk/new/de/kostol-nanebovzatia-panny-marie-pomnik-padlym-v-1-sv-vojne/",
        "ru": "https://www.qrlink.sk/new/ru/kostol-nanebovzatia-panny-marie-pomnik-padlym-v-1-sv-vojne/",
        "pl": "https://www.qrlink.sk/new/pl/kostol-nanebovzatia-panny-marie-pomnik-padlym-v-1-sv-vojne/",
        "hu": "https://www.qrlink.sk/new/hu/kostol-nanebovzatia-panny-marie-pomnik-padlym-v-1-sv-vojne/"
      }
    },
    {
      "id": "muzeum-karola-tocika",
      "miesto": "turzovka-mesto",
      "poradie": 2,
      "nazov": "Múzeum Karola Točíka",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2017/11/2.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/03/2.-The-town-museum-of-Karol-Tocik.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 49.404162,
        "lng": 18.62477
      },
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m27!1m12!1m3!1d1298.13434355074!2d18.624007108346465!3d49.40382434483615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m12!3e6!4m4!2s49.403521%2C+18.625441!3m2!1d49.403521!2d18.625441!4m5!1s0x47146eae7270a3ed%3A0x7de92ebc736fcb9e!2zTWVzdHNrw6kgbcO6emV1bSBLYXJvbGEgVG_EjcOta2EsIFIuIEphxaHDrWthIDE3OSwgMDIzIDU0IFR1cnpvdmth!3m2!1d49.404162299999996!2d18.6247702!5e0!3m2!1ssk!2ssk!4v1514393996502",
      "text": "<p>Mestské múzeum sa nachádza na prízemí budovy Mestského úradu Turzovka a bolo pomenované po Karolovi Točíkovi, ktorý bol nielen turzovským farárom a dekanom, ale tiež regionálnym historikom. Iniciátorom zrodu múzea bol Spolok priateľov Turzovky v zastúpení p. Ivanom Gajdičiarom a p. Drahomírom Veličkom (predseda združenia Terra Kisucensis). Mestské múzeum bolo slávnostne otvorené 12. augusta 2016. Prvou expozíciou v novootvorenom múzeu bola výstava pod názvom Dedičstvo otcov. Výstava obsahovala výber z bohatého depozitu exponátov darovaných múzeu občanmi Turzovky a okolia.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/muzeum-karola-tocika/",
        "en": "https://www.qrlink.sk/new/en/muzeum-karola-tocika/",
        "de": "https://www.qrlink.sk/new/de/muzeum-karola-tocika/",
        "ru": "https://www.qrlink.sk/new/ru/muzeum-karola-tocika/",
        "pl": "https://www.qrlink.sk/new/pl/muzeum-karola-tocika/",
        "hu": "https://www.qrlink.sk/new/hu/muzeum-karola-tocika/"
      }
    },
    {
      "id": "rybniky",
      "miesto": "turzovka-mesto",
      "poradie": 3,
      "nazov": "Rybníky",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2017/11/12.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/03/12.-Ponds.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 49.419162,
        "lng": 18.59347
      },
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m25!1m12!1m3!1d10601.225427162688!2d18.603647203180532!3d49.41196450564725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m10!3e2!4m4!2s49.403521%2C+18.625441!3m2!1d49.403521!2d18.625441!4m3!3m2!1d49.4194515!2d18.594634799999998!5e0!3m2!1ssk!2ssk!4v1514465966220",
      "text": "<p>Nachádzajú sa v mestskej časti Predmier. Je to vodná plocha dvoch štrkovísk pri sútoku riek Predmieranka a Korňanka. História lovných rybníkoch siaha až do roku 1975. Pôvodne sa členovia rybárskeho spolku stretávali len pri bežných rybačkách. Kysucký región je chudobný na stojace vody, a preto vznikla potreba vybudovať vlastné lovné rybníky. Spolok dokončil stavbu svojho prvého rybníka – v Turzovke a spravil zarybnenie. Nasadený bol kapor (600 kg, 1- až 2-kilové) a pstruh dúhový (200 kg, dvojročný). Na výstavbe rybníka bolo odpracované veľké množstvo brigádnických hodín. Pre zaujímavosť: pán Zemaník 840 hodín a pán Drvár 620 hodín.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/rybniky/",
        "en": "https://www.qrlink.sk/new/en/rybniky/",
        "de": "https://www.qrlink.sk/new/de/rybniky/",
        "ru": "https://www.qrlink.sk/new/ru/rybniky/",
        "pl": "https://www.qrlink.sk/new/pl/rybniky/",
        "hu": "https://www.qrlink.sk/new/hu/rybniky/"
      }
    },
    {
      "id": "prirodny-amfiteater-historia-beskydskych-slavnosti",
      "miesto": "turzovka-mesto",
      "poradie": 4,
      "nazov": "Prírodný amfiteáter – história beskydských slávností",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2017/11/11.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/03/11.-Natural-amphitheater-history-of-Beskydy-Festival-2.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 49.401528,
        "lng": 18.627594
      },
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m27!1m12!1m3!1d1299.7536165600745!2d18.62546851039342!3d49.402309135009915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m12!3e2!4m4!2s49.403521%2C+18.625441!3m2!1d49.403521!2d18.625441!4m5!1s0x47146eb27d2d8d5d%3A0x4821c6e1de4683c6!2zQW1maXRlw6F0ZXIsIMWga29sc2vDoSwgVHVyem92a2E!3m2!1d49.401528!2d18.6275944!5e0!3m2!1ssk!2ssk!4v1514465362099",
      "text": "<p>Mesto Turzovka je a bolo od nepamäti studnicou kultúry a spoločenského diania. Každoročne pripravuje mesto Turzovka pre svojich obyvateľov a návštevníkov maratón podujatí pod názvom Turzovské leto, ktoré štartuje koncom júna a končí a vrcholí turzovskými hodmi v auguste. Svoje pevné a nezastupiteľné miesto v kalendári má už niekoľko desaťročí i medzinárodný folklórny festival Beskydské slávnosti. Pôvodný názov dnešných Beskydských slávností mal rozšírené znenie. Od svojho vzniku až do roku 1993 to boli Beskydské slávností československej vzájomnosti. Ich vznik sa datuje do roku 1968 s cieľom ukázať ľuďom svoju odlišnosť, identitu, bohatstvo tradičnej ľudovej kultúry zachovanej v piesňach, krojoch, tancoch a zvykoch na obidvoch stranách hranice. Z toho vznikol projekt Beskydských slávností, ktoré mali byť spoločným dielom troch susediacich okresov. V okrese Frýdek-Místek bola miestom konania obec Janovice, v okrese Vsetín Rožnov pod Radhošťem a v okrese Čadca mesto Turzovka. Prvý spoločný program na základe vytvoreného štatútu slávností sa uskutočnil v meste Turzovka v roku 1968. Konal sa v novovybudovanom amfiteátri na Bukovine, na výstavbe ktorého sa veľkým podielom pričinil vtedajší vedúci KaSS František Krištiak a riaditeľ závodu Drevoindustria Turzovka Ján Gerek. Závod nielenže poskytol na výstavbu materiál, hranoly a dosky zadarmo, ale do výroby pódia a sedadiel zapojil skúsených pracovníkov závodu, vďaka čomu sa stavba dokončila včas a hlavne v dobrej kvalite. O niekoľko týždňov nato vstúpili do Československa vojská Varšavskej zmluvy, čo zapríčinilo nielen federatívne usporiadanie štátoprávnych vzťahov, ale aj výmenu osôb na zodpovedných funkciách v kultúrnych ustanovizniach, kde s novými osobami prišli nové priority, a tak na pokračovanie programov vo vybratých miestach nebolo ani pomyslenia. Napriek tomu sa Beskydské slávnosti v Turzovke udržali a na pódiu turzovského amfiteátra sa v priebehu rokov vystriedali desiatky súborov z Kysúc, ostatných slovenských regiónov a prihraničných susedov. Počas svojej histórie priniesli Beskydské slávnosti do života mesta bohatú ponuku kultúrnych zážitkov nielen zo slovenskej, ale aj medzinárodnej folklórnej scény. Účinkovali tu mnohé známe hosťujúce súbory zo zahraničia – z Francúzka, krajín bývalej Juhoslávie (Chorvátska, Srbska a Slovinska) či Maďarska.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/prirodny-amfiteater-historia-beskydskych-slavnosti/",
        "en": "https://www.qrlink.sk/new/en/prirodny-amfiteater-historia-beskydskych-slavnosti/",
        "de": "https://www.qrlink.sk/new/de/prirodny-amfiteater-historia-beskydskych-slavnosti/",
        "ru": "https://www.qrlink.sk/new/ru/prirodny-amfiteater-historia-beskydskych-slavnosti/",
        "pl": "https://www.qrlink.sk/new/pl/prirodny-amfiteater-historia-beskydskych-slavnosti/",
        "hu": "https://www.qrlink.sk/new/hu/prirodny-amfiteater-historia-beskydskych-slavnosti/"
      }
    },
    {
      "id": "lyziarske-stredisko-bukovina-javornicko-beskydska-magistrala",
      "miesto": "turzovka-mesto",
      "poradie": 5,
      "nazov": "Lyžiarske stredisko Bukovina, Javornícko – beskydská magistrála",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2017/11/bukovina.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/03/10.-The-Ski-areal-Bukovina.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 49.398615,
        "lng": 18.639535
      },
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m27!1m12!1m3!1d5192.752350868868!2d18.6308630034943!3d49.40179144673554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m12!3e2!4m4!2s49.403521%2C+18.625441!3m2!1d49.403521!2d18.625441!4m5!1s0x4714694d828f4a4f%3A0xfeb5bfbc603ea00d!2sRekrea%C4%8Dn%C3%A9+Stredisko+Bukovina%2C+Pod+Bukovinou%2C+Turzovka!3m2!1d49.398615299999996!2d18.6395351!5e0!3m2!1ssk!2ssk!4v1514464868078",
      "text": "<p>Rekreačné stredisko Bukovina sa nachádza 2 km od centra Turzovky v regióne Kysuce. Stredisko ponúka priamo v areáli možnosť ubytovacích a stravovacích služieb. K dispozícii sú dva lyžiarske vleky s dĺžkou 500 m a 600 m s prepravnou kapacitou 1250 osôb za hodinu. Svahy sú vhodné pre začiatočníkov, ale aj pokročilých lyžiarov. Sú denne upravované snežnými pásovými vozidlami. Je tu aj možnosť večerného lyžovania, nakoľko je svah osvetlený umelým osvetlením. Ubytovacia kapacita rekreačného strediska je 45 lôžok. 18 lôžok je v hlavnej chate v dvoj-, troj- a štvorposteľových izbách so sociálnym zariadením. V blízkosti sa nachádza bežecká trasa Beskydsko-javornícka lyžiarska magistrála. Základná dĺžka magistrály je 54 km, vinie sa od hraníc Českej republiky z Makova – Veľkého Javorníka, Makova – Bumbálky a pokračuje pohorím Vysokých Javorníkov až po lokalitu Čadca – Husárik. Ďalšie trasy tvoria alternatívy, možnosti nástupu alebo zostupu z hlavnej trasy a majú celkovú dĺžku cca 42 km. Turisti z Českej republiky sa môžu napojiť v Makove – Bumbálke, v Makovskom priesmyku (U Tabuli) a v Klokočove – Konečnej. Na hrebeni Javorníkov okrem nezameniteľnej atmosféry osád sprevádza turistov aj jedinečná galéria v prírode, ktorú vytvorili umelci z regiónu Kysúc a Považia.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/lyziarske-stredisko-bukovina-javornicko-beskydska-magistrala/",
        "en": "https://www.qrlink.sk/new/en/lyziarske-stredisko-bukovina-javornicko-beskydska-magistrala/",
        "de": "https://www.qrlink.sk/new/de/lyziarske-stredisko-bukovina-javornicko-beskydska-magistrala/",
        "ru": "https://www.qrlink.sk/new/ru/lyziarske-stredisko-bukovina-javornicko-beskydska-magistrala/",
        "pl": "https://www.qrlink.sk/new/pl/lyziarske-stredisko-bukovina-javornicko-beskydska-magistrala/",
        "hu": "https://www.qrlink.sk/new/hu/lyziarske-stredisko-bukovina-javornicko-beskydska-magistrala/"
      }
    },
    {
      "id": "kamenna-gula-pred-mestskym-uradom",
      "miesto": "turzovka-mesto",
      "poradie": 6,
      "nazov": "Kamenná guľa pred Mestským úradom",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2017/11/9.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/03/9.-The-stone-sphere-in-front-of-the-Town-hall-on-the-occasion-of-the-1st-world-meeting-of-Turzovka-people-2.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 49.403882,
        "lng": 18.624877
      },
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m27!1m12!1m3!1d649.0689776674035!2d18.62456570646308!3d49.403687729361216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m12!3e2!4m4!2s49.403521%2C+18.625441!3m2!1d49.403521!2d18.625441!4m5!1s0x47146eae0d2a8743%3A0x3b433e1d0fc71a5!2zTWVzdHNrw70gw7pyYWQgVHVyem92a2EsIFIuIEphxaHDrWthLCBUdXJ6b3ZrYQ!3m2!1d49.4038848!2d18.6247913!5e0!3m2!1ssk!2ssk!4v1514464360327",
      "text": "<p>Kamenná guľa sa nachádza pred budovou Mestského úradu v Turzovke. Každé 4 roky sa v Turzovke koná Svetové stretnutie Turzovčanov. Pamiatkou na prvé stretnutie je pamätník s plastikou od akademického maliara Ondreja Zimku ml. Prvé svetové stretnutie sa uskutočnilo v roku 1998 pri príležitosti 400. výročia vzniku Turzovky. Iniciátorom myšlienky stretnutia Turzovčanov, rodákov Turzovky a ich potomkov bol Spolok priateľov Turzovky na čele s predsedom Ivanom Gajdičiarom st. Svetové stretnutie Turzovčanov a ich potomkov sa koná v auguste každé štyri roky v rámci Turzovského kultúrneho leta a Beskydských slávností, ktoré majú už svoju tradíciu. Je to vhodná príležitosť pre všetkých, aby svoj rodný kraj – Kysuce prišli navštíviť práve v tomto čase, keď na tradičných turzovských hodoch vrcholia spoločenské a kultúrne aktivity jeho občanov. Stretnutia sú charakteristické účasťou rodákov a mnohých významných osobností, prominentov spoločenského a politického života, známych umelcov a športovcov. Názov svetové má svoje opodstatnenie v tom, že sa na ňom zúčastnia vždy rodáci zo zámoria alebo iných vzdialených končín sveta. Návštevníkmi svetového stretnutia boli osobnosti a rodáci ako Rudolf Zigmund – generálny tajomník Svetového kongresu Slovákov v USA, Jozef Okuliar či mnohí pravidelní účastníci stretnutia rodákov Helena Záhradníkova, Ondrej Zimka st., Ondrej Zimka ml., sochár Gustáv Švábik či Štefan Šimák.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/kamenna-gula-pred-mestskym-uradom/",
        "en": "https://www.qrlink.sk/new/en/kamenna-gula-pred-mestskym-uradom/",
        "de": "https://www.qrlink.sk/new/de/kamenna-gula-pred-mestskym-uradom/",
        "ru": "https://www.qrlink.sk/new/ru/kamenna-gula-pred-mestskym-uradom/",
        "pl": "https://www.qrlink.sk/new/pl/kamenna-gula-pred-mestskym-uradom/",
        "hu": "https://www.qrlink.sk/new/hu/kamenna-gula-pred-mestskym-uradom/"
      }
    },
    {
      "id": "namestie-juraja-thurzu",
      "miesto": "turzovka-mesto",
      "poradie": 7,
      "nazov": "Námestie Juraja Thurzu",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2017/11/7.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/03/7.-The-Square-of-Juraj-Thurza.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 49.403598,
        "lng": 18.62358
      },
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m25!1m12!1m3!1d1333.5962569436483!2d18.624453631398385!3d49.40376214936572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m10!3e2!4m4!2s49.403521%2C+18.625441!3m2!1d49.403521!2d18.625441!4m3!3m2!1d49.403267799999995!2d18.6239868!5e0!3m2!1ssk!2ssk!4v1514451878671",
      "text": "<p>Prvá písomná zmienka o trvalom osídlení územia mesta Turzovka sa viaže s Jurajom Thurzom a pochádza z obdobia valašskej kolonizácie, z roku 1580 ako „locum Predmér“. Thurzovci ako majitelia bytčianskeho panstva potrebovali zaistiť svoje majetky na vlastnom území proti prenikaniu valachov z okolitých panstiev. S pomenovaním Turzovky sa stretávame prvýkrát v Urbári bytčianskeho panstva, v ktorom je urobený dodatočný zápis, že Turzovka bola založená roku 1598. Obec získala lokačnú listinu 21. februára 1602. Juraj Thurzo v nej nariaďuje prvým osadníkom, aby v novom území vystavali čo najskôr kostol a faru. V roku 1968 je Turzovka povýšená na mesto a do používania sa uvádza erb mesta, ktorý neskôr heraldická komisia upravila do dnešnej podoby.</p>\n<p>Na počesť uhorského palatína a zakladateľa Turzovky Juraja Thurzu dalo mesto Turzovka v roku 2009 vybudovať Námestie Juraja Thurzu. Námestie sa nachádza na Obchodnej ulici pri Šarkparku a súčasťou je Pamätná tabuľa Juraja Thurzu, ktorá bola slávnostne odhalená pri príležitosti IV. svetového stretnutia Turzovčanov. Iniciátorom bol Spolok priateľov Turzovky za pomoci viacerých sponzorov a prispievateľov. Autorom bronzovej tabule je sochár Ondrej Zimka ml. Tabuľa je osadená do opracovanej žuly, ukotvenej do nerezového rámu, ktorý je upevnený v betónovom podstavci. Na bronzovej plastike je vyobrazenie Juraja III. Thurzu s opisom všetkých hodností, ktoré zakladateľ Turzovky počas svojho života získal.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/namestie-juraja-thurzu/",
        "en": "https://www.qrlink.sk/new/en/namestie-juraja-thurzu/",
        "de": "https://www.qrlink.sk/new/de/namestie-juraja-thurzu/",
        "ru": "https://www.qrlink.sk/new/ru/namestie-juraja-thurzu/",
        "pl": "https://www.qrlink.sk/new/pl/namestie-juraja-thurzu/",
        "hu": "https://www.qrlink.sk/new/hu/namestie-juraja-thurzu/"
      }
    },
    {
      "id": "areal-sportu-a-oddychu-skatepark",
      "miesto": "turzovka-mesto",
      "poradie": 8,
      "nazov": "Areál športu a oddychu, Skatepark",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2017/11/5.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/03/5.-The-Sport-and-Recreation-centre-the-skatepark.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 49.401766,
        "lng": 18.619574
      },
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d5191.748366758842!2d18.622272999999993!3d49.403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e2!4m3!3m2!1d49.403521!2d18.625441!4m5!1s0x47146eb04eeba0a5%3A0x1e28ecd103261601!2sAre%C3%A1l+%C5%A1portu+a+oddychu%2C+17%2C+Slovansk%C3%A1+62%2F7%2C+023+54+Turzovka!3m2!1d49.4017659!2d18.619573799999998!5e0!3m2!1ssk!2ssk!4v1514628550626",
      "text": "<p>Športovým nadšencom mesto ponúka návštevu Areálu športu a oddychu v Turzovke-Závodí. K dispozícii je viacúčelové ihrisko s hracou plochou s rozmermi 42 m x 22 m určené na hádzanú, volejbal, nohejbal a vonkajšie hokejbalové ihrisko v štandardných medzinárodných rozmeroch 46 m x 22 m. V letných mesiacoch si môžete zahrať petang, tenis na dvoch antukových dvorcoch či previesť sa po dopravnom ihrisku na kolobežke, kárach alebo štvorkolke. Samozrejmosťou je vonkajšie a vnútorné spoločenské zázemie – oddychová terasa, lavičky, budova správcu so šatňami, hygienickým a športovým servisom a spoločenskou miestnosťou. Súčasťou areálu je vonkajší altánok s možnosťou opekačky a detské atrakcie pre najmenších. V blízkosti sa nachádza skatepark pre nadšencov adrenalínového športu so siedmimi prekážkami.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/areal-sportu-a-oddychu-skatepark/",
        "en": "https://www.qrlink.sk/new/en/areal-sportu-a-oddychu-skatepark/",
        "de": "https://www.qrlink.sk/new/de/areal-sportu-a-oddychu-skatepark/",
        "ru": "https://www.qrlink.sk/new/ru/areal-sportu-a-oddychu-skatepark/",
        "pl": "https://www.qrlink.sk/new/pl/areal-sportu-a-oddychu-skatepark/",
        "hu": "https://www.qrlink.sk/new/hu/areal-sportu-a-oddychu-skatepark/"
      }
    },
    {
      "id": "park-drotara-a-dzarka-pricestny-stlp-jana-nepomuckeho-susosie-drotara-a-dzarka",
      "miesto": "turzovka-mesto",
      "poradie": 9,
      "nazov": "Park Drotára a Džarka, Prícestný stĺp Jána Nepomuckého, Súsošie Drotára a Džarka",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2017/11/4.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/03/4.-The-park-of-tinker-and-young-tinker-Drotár-and-Džrek-the-pillar-of-Jan-Nepomuk-the-sculpture-of-tinker-and-young-tinker.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 49.403284,
        "lng": 18.624934
      },
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d5191.505634864872!2d18.625179999999986!3d49.403393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e2!4m3!3m2!1d49.403521!2d18.625441!4m5!1s0x47146eae07cfeb71%3A0x9db29709e102773f!2sMilana+Rastislava+%C5%A0tef%C3%A1nika+1%2C+023+54+Turzovka!3m2!1d49.4032841!2d18.6249339!5e0!3m2!1ssk!2ssk!4v1514628623753",
      "text": "<p>Mesto Turzovka bolo v minulosti jedným z centier drotárstva. Park Drotára a džarka bol vybudovaný v roku 1998 a nachádza sa v blízkosti železničného priecestia a križovatky ulíc Nádražná, Štefániková a Obchodná. Dominantou parku je bronzové súsošie drotára a džarka, ktorého autorom je akademický maliar a čestný občan mesta Turzovka Miroslav Cipár. Pamätník bol slávnostne odhalený v roku 1998 pri príležitosti 400. výročia založenia mesta. Súčasťou parku je taktiež rustikálny prícestný stĺp Sv. Jána Nepomuckého, mučeníka katolíckej cirkvi, ktorý je umiestnený medzi dvoma vyše dvestoročnými lipami. Prícestný stĺp pochádza z 19. storočia, je dielom neznámeho autora a patrí k národným kultúrnym pamiatkam.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/park-drotara-a-dzarka-pricestny-stlp-jana-nepomuckeho-susosie-drotara-a-dzarka/",
        "en": "https://www.qrlink.sk/new/en/park-drotara-a-dzarka-pricestny-stlp-jana-nepomuckeho-susosie-drotara-a-dzarka/",
        "de": "https://www.qrlink.sk/new/de/park-drotara-a-dzarka-pricestny-stlp-jana-nepomuckeho-susosie-drotara-a-dzarka/",
        "ru": "https://www.qrlink.sk/new/ru/park-drotara-a-dzarka-pricestny-stlp-jana-nepomuckeho-susosie-drotara-a-dzarka/",
        "pl": "https://www.qrlink.sk/new/pl/park-drotara-a-dzarka-pricestny-stlp-jana-nepomuckeho-susosie-drotara-a-dzarka/",
        "hu": "https://www.qrlink.sk/new/hu/park-drotara-a-dzarka-pricestny-stlp-jana-nepomuckeho-susosie-drotara-a-dzarka/"
      }
    },
    {
      "id": "hasicske-hobby-muzeum",
      "miesto": "turzovka-mesto",
      "poradie": 10,
      "nazov": "Hasičské Hobby múzeum",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2017/11/Hasicske-hobby-muzeum.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/03/3.-The-Firemen´s-hobby-museum.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 49.39586,
        "lng": 18.62414
      },
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d10386.160342452975!2d18.61735000500718!3d49.39989277808212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e2!4m3!3m2!1d49.403521!2d18.625441!4m5!1s0x47146eb4f5d461c5%3A0x89de3a05c61ee1f!2sVy%C5%A1n%C3%BD+Koniec%2C+023+54+Turzovka!3m2!1d49.39586!2d18.624140099999998!5e0!3m2!1ssk!2ssk!4v1514628859524",
      "text": "<p>Je súkromné múzeum vášnivého zberateľa a veterána Ladislava Dlhopolčeka, ktoré bolo oficiálne otvorené pre verejnosť dňa 21.júla 2015. Predseda Turzovského veterán clubu Ladislav Dlhopolček už v mladosti mal ako každý chlapec rôzne záujmy a jeho vášeň ho neopustila ani s pribúdajúcimi rokmi. Predmety sa hromadili a boli medzi nimi vzácne kúsky, a otázka čo s nimi. Pri svojich cestách dostal nápad, čo tak založiť vlastné múzeum, v ktorom by expozíciu tvorili jednotlivé cenné exponáty, či sú to už váhy, hasičské prilby alebo fotoaparáty. Vo svojom rodinnom dome vyčlenil dve miestnosti a začala sa samotná realizácia jeho myšlienky.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/hasicske-hobby-muzeum/",
        "en": "https://www.qrlink.sk/new/en/hasicske-hobby-muzeum/",
        "de": "https://www.qrlink.sk/new/de/hasicske-hobby-muzeum/",
        "ru": "https://www.qrlink.sk/new/ru/hasicske-hobby-muzeum/",
        "pl": "https://www.qrlink.sk/new/pl/hasicske-hobby-muzeum/",
        "hu": "https://www.qrlink.sk/new/hu/hasicske-hobby-muzeum/"
      }
    },
    {
      "id": "pamatniky",
      "miesto": "turzovka-pamatniky",
      "poradie": 1,
      "nazov": "Pamätná tabuľa a izba Rudolfa Jašíka",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2017/11/jasik.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/03/8-1-The-memorial-table-and-the-Room-of-Rudolf-Jasik.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 49.404348,
        "lng": 18.624741
      },
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m27!1m12!1m3!1d1300.0127405761261!2d18.624490529697756!3d49.40396883660779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m12!3e2!4m4!2s49.403521%2C+18.625441!3m2!1d49.403521!2d18.625441!4m5!1s0x47146eae9e1d371b%3A0xbec5b8893b39ed08!2zUGFtw6R0bsOhIGl6YmEgUnVkb2xmYSBKYcWhw61rYSwgUi4gSmHFocOta2EgNTMvOCwgMDIzIDU0IFR1cnpvdmth!3m2!1d49.4043479!2d18.6247413!5e0!3m2!1ssk!2ssk!4v1514453182292",
      "text": "<p>Pamätná tabuľa sa nachádza pri vstupe do budovy Kultúrneho a spoločenského strediska v Turzovke. Rudolf Jašík bol významným a uznávaným spisovateľom, rodákom z Turzovky, ktorý sa narodil 2. decembra 1919 a zomrel 30. júna 1960 v Bratislave. Jeho diela zachytávajú a sú odrazom toho, čo v živote prežil. Jeho literárna tvorba sa viaže na rok 1940 a od poézie a poviedok prešiel postupne k známym románom – Na brehu priezračnej rieky, Námestie sv. Alžbety či Mŕtvi nespievajú. Každoročne sa v mesiacoch november – december konajú pri príležitosti jeho pôsobenia Jašíkove Kysuce – literárna súťaž spojená s fotografickou súťažou „Na brehu priezračnej rieky“, ktorej súčasťou je pietna spomienka pri pamätnej tabuli. V priestoroch Kultúrneho a spoločenského strediska v Turzovke sa taktiež nachádza stála expozícia osobných predmetov a dokumentov, ktorá približuje jeho život.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/pamatniky/",
        "en": "https://www.qrlink.sk/new/en/pamatniky/",
        "de": "https://www.qrlink.sk/new/de/pamatniky/",
        "ru": "https://www.qrlink.sk/new/ru/pamatniky/",
        "pl": "https://www.qrlink.sk/new/pl/pamatniky/",
        "hu": "https://www.qrlink.sk/new/hu/pamatniky/"
      }
    },
    {
      "id": "pamatnik-m-r-stefanika",
      "miesto": "turzovka-pamatniky",
      "poradie": 2,
      "nazov": "Pamätník M. R. Štefánika",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2017/12/8.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/03/8-2-The-monument-of-M.R.Stefanika-4.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 49.402188,
        "lng": 18.623988
      },
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m25!1m12!1m3!1d1298.3234556256045!2d18.62429020194064!3d49.40302842381582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m10!3e2!4m4!2s49.403521%2C+18.625441!3m2!1d49.403521!2d18.625441!4m3!3m2!1d49.402159!2d18.6240682!5e0!3m2!1ssk!2ssk!4v1514453879439",
      "text": "<p>Milan Rastislav Štefánik sa narodil v Košariskách v rodine evanjelického farára Pavla Štefánika a jeho manželky Albertiny rodenej Jurenkovej. Narodil sa ako šieste dieťa. Po ňom ešte prišli na svet ďalší šiesti súrodenci. Bol to slovenský astronóm, fotograf, vojenský letec, brigádny generál ozbrojených síl Francúzska, diplomat a politik. Mal najväčšiu zásluhu na formovaní česko-slovenského zahraničného odboja počas prvej svetovej vojny. Zohral dôležitú úlohu pri organizovaní česko-slovenských légií a pri sprostredkovaní kontaktov na</p>\n<p>francúzskych štátnych funkcionárov. Spolu s Tomášom Garriguom Masarykom a Edvardom Benešom bol kľúčovou osobou pri založení ČSR. Štefánik bol podpredsedom Československej národnej rady, ministrom vojny v Dočasnej vláde československej a následne aj v novovzniknutej ČSR. Dňa 4. mája 1919 nastúpil Štefánik na letisku Campoformido pri Udine do lietadla typu Caproni 450 (č. 11 495) sprevádzaný dvoma talianskymi letcami, poručíkom Giottom Mancinelliom Scottim a seržantom Umbertom Merlinom a mechanikom-rádiotelegrafistom Gabrielom Aggiustom. Cieľom jeho cesty bolo letisko vo Vajnoroch pri Bratislave. Lietadlo však nepristálo, pretože keď sa už blížilo k miestu pristátia, náhle sa zrútilo neďaleko Ivanky pri Dunaji. Leteckú katastrofu z posádky lietadla nikto neprežil.</p>\n<p>Milan Rastislav Štefánik je pochovaný v mohyle na Bradle, vrcholnom diele architekta Dušana Jurkoviča.</p>\n<p>Na znak jeho zásluh bol postavený v roku 1924 Pamätník oslobodenia s bustou Milana Rastislava Štefánika, ktorý sa nachádza v centre mesta Turzovka v malom parčíku. Po slovenskom dejateľovi je pomenovaná taktiež Ulica M. R. Štefánika.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/pamatnik-m-r-stefanika/",
        "en": "https://www.qrlink.sk/new/en/pamatnik-m-r-stefanika/",
        "de": "https://www.qrlink.sk/new/de/pamatnik-m-r-stefanika/",
        "ru": "https://www.qrlink.sk/new/ru/pamatnik-m-r-stefanika/",
        "pl": "https://www.qrlink.sk/new/pl/pamatnik-m-r-stefanika/",
        "hu": "https://www.qrlink.sk/new/hu/pamatnik-m-r-stefanika/"
      }
    },
    {
      "id": "pamatnik-tomasa-uhorcika",
      "miesto": "turzovka-pamatniky",
      "poradie": 3,
      "nazov": "Pamätník Tomáša Uhorčíka",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2017/12/uhorcik.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/03/8-3-The-Monument-of-Tomas-Uhorcik.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 49.404743,
        "lng": 18.624902
      },
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m25!1m12!1m3!1d1300.0144827131567!2d18.624818233662154!3d49.40423801279178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m10!3e2!4m4!2s49.403521%2C+18.625441!3m2!1d49.403521!2d18.625441!4m3!3m2!1d49.404611599999996!2d18.624860899999998!5e0!3m2!1ssk!2ssk!4v1514462048950",
      "text": "<p>Tomáš Uhorčík bol druhom Juraja Jánošíka a vodcom zbojníckej družiny na Kysuciach. Narodil sa v Turzovke-Predmieri v roku 1680. Zbojníkom bol celkom 9 rokov a do svojej družiny prijal v roku 1711 Juraja Jánošíka, s ktorým sa zoznámil ako väzeň na Bytčianskom zámku, z ktorého mu pravdepodobne Jánošík pomohol k úteku v neskorú jeseň roku 1710, po ktorom sa ukryl na lazoch vo Veľkom Rovnom. S Jánošíkom sa stretol na jarmoku v Liptovskom Mikuláši, neskôr s ním pašoval kone z Poľska. Taktiež sa spolu zúčastnili viacerých zbojníckych akcií na Morave. Uhorčík sa však skoro na to oženil s dcérou Jablunkovského baču Stoligu a vedenie svojej zbojníckej družiny prenechal Jánošíkovi.</p>\n<p>Uhorčík prijal meno Martin Mravec a odsťahoval sa do Klenovca, kde sa stal tiež miestnym hajdúchom. Po Jánošíkovej smrti v roku 1713 bola odhalená jeho pravá identita a Uhorčík sa pri mučení priznal aj ku zbojníctvu. Bol popravený mesiac po poprave Jánošíka lámaním na kolese. Pamätník turzovského rodáka Tomáša Uhorčíka od akademického sochára Ondreja Zimku ml. bol slávnostne odhalený počas Beskydských slávností v roku 2013, kedy sme si pripomenuli 300 rokov od popravy tohto turzovského rodáka. Pri tejto príležitosti sa v roku 2013 konal počas Beskydských slávností pokus o zápis do knihy rekordov pod názvom „Poklad Tomáša Uhorčíka“, kedy si verejnosť mohla ručne vyraziť dukát pre šťastie. Dukát si môžete vyraziť i dnes, a to v Medzinárodnom informačnom centre v Turzovke.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/pamatnik-tomasa-uhorcika/",
        "en": "https://www.qrlink.sk/new/en/pamatnik-tomasa-uhorcika/",
        "de": "https://www.qrlink.sk/new/de/pamatnik-tomasa-uhorcika/",
        "ru": "https://www.qrlink.sk/new/ru/pamatnik-tomasa-uhorcika/",
        "pl": "https://www.qrlink.sk/new/pl/pamatnik-tomasa-uhorcika/",
        "hu": "https://www.qrlink.sk/new/hu/pamatnik-tomasa-uhorcika/"
      }
    },
    {
      "id": "pamatna-tabula-v-parku-rodakov",
      "miesto": "turzovka-pamatniky",
      "poradie": 4,
      "nazov": "Pamätná tabuľa v Parku rodákov",
      "popis": "",
      "cover": "",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/03/8-4-The-Memorial-table-in-the-Park-of-Natives.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 49.404637,
        "lng": 18.624237
      },
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m25!1m12!1m3!1d1303.1248982545123!2d18.624441277545866!3d49.40424694938155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m10!3e2!4m4!2s49.403521%2C+18.625441!3m2!1d49.403521!2d18.625441!4m3!3m2!1d49.4046431!2d18.624315199999998!5e0!3m2!1ssk!2ssk!4v1514462450336",
      "text": "<p>Tabuľa je umiestená na mieste, kde stál vodný obilný mlyn s turbínou na výrobu elektriny z roku 1924 a lipa pre tretie tisícročie.</p>\n<p>V roku 1998 boli na nainštalované ďalšie pamätné tabule venované básnikovi P. H. Jurinovi a spisovateľovi J. Harantovi, ktoré sa nachádzajú na budove Gymnázia v Turzovke, a kňazovi F. Tagányimu, ktorá je umiestnená na budove farského úradu v Turzovke.</p>\n<p>Pamätná tabuľa – prvá murovaná škola v Turzovke – pochádza z roku 1873 a dodnes stojí pri kostole, i keď slúži už na iný účel. Od roku 1879 do roku 1924 v tejto škole vyučoval organista a učiteľ Alexander Pritz. Jeho odchodom zo školskej služby v roku 1924 zanikla aj cirkevná škola.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/pamatna-tabula-v-parku-rodakov/",
        "en": "https://www.qrlink.sk/new/en/pamatna-tabula-v-parku-rodakov/",
        "de": "https://www.qrlink.sk/new/de/pamatna-tabula-v-parku-rodakov/",
        "ru": "https://www.qrlink.sk/new/ru/pamatna-tabula-v-parku-rodakov/",
        "pl": "https://www.qrlink.sk/new/pl/pamatna-tabula-v-parku-rodakov/",
        "hu": "https://www.qrlink.sk/new/hu/pamatna-tabula-v-parku-rodakov/"
      }
    },
    {
      "id": "kaplnka-panny-marie-ustavicnej-pomoci-u-okuliarov",
      "miesto": "turzovka-sakralne-pamiatky",
      "poradie": 1,
      "nazov": "Kaplnka Panny Márie ustavičnej pomoci U Okuliarov",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2017/11/u-koliarov.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/03/6-1-The-chapel-of-Virgin-Mary’s-perpetual-help-in-settlement-U-Okruhliakov.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 49.406749,
        "lng": 18.628815
      },
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d5191.151182397404!2d18.625863202219136!3d49.40655402896331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e2!4m3!3m2!1d49.403521!2d18.625441!4m5!1s0x47146eac1b258d37%3A0x52043d7bc83c5197!2sR.+Ja%C5%A1%C3%ADka+318%2F38%2C+023+54+Turzovka!3m2!1d49.406646699999996!2d18.6280857!5e0!3m2!1ssk!2ssk!4v1514628309169",
      "text": "<p>Pôvodná drevená kaplnka Blahoslavenej Panny Márie bola postavená v roku 1810 Jozefom Okuliarom, ktorý na ňu zložil fundáciu 10 zlatých. Zaujímavé je, že kaplnka sa nachádzala v obvode cintorína. Obnovy, resp. opravy kaplnky sa spomínajú v rokoch 1822, 1856 či 1860. V roku 1856 namaľoval do kaplnky obraz Panny Márie známy tešínsky maliar Eduard Świerkiewicz. Stará drevená kaplnka bola v roku 1924 asanovaná a na jej mieste bola postavená súčasná kaplnka Panny Márie ustavičnej pomoci. Rok 1924 sa nachádza aj na jej priečelí. Fasáda kaplnky je vyzdobená upraveným erbovým znamením z národného erbu – z modrého trojvršia vyrastajúci zlatý dvojkríž. Nad ním sa vznáša osemcípa zlatá hviezda. Kovový dvojkríž je umiestnený aj na špici malej vežičky.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/kaplnka-panny-marie-ustavicnej-pomoci-u-okuliarov/",
        "en": "https://www.qrlink.sk/new/en/kaplnka-panny-marie-ustavicnej-pomoci-u-okuliarov/",
        "de": "https://www.qrlink.sk/new/de/kaplnka-panny-marie-ustavicnej-pomoci-u-okuliarov/",
        "ru": "https://www.qrlink.sk/new/ru/kaplnka-panny-marie-ustavicnej-pomoci-u-okuliarov/",
        "pl": "https://www.qrlink.sk/new/pl/kaplnka-panny-marie-ustavicnej-pomoci-u-okuliarov/",
        "hu": "https://www.qrlink.sk/new/hu/kaplnka-panny-marie-ustavicnej-pomoci-u-okuliarov/"
      }
    },
    {
      "id": "kaplnka-panny-marie-lurdskej-pri-motoreste",
      "miesto": "turzovka-sakralne-pamiatky",
      "poradie": 2,
      "nazov": "Kaplnka Panny Márie Lurdskej pri motoreste",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2017/12/u-mravca.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/03/6-2-The-chapel-of-the-Virgin-Mary-Lourdes.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 49.405104,
        "lng": 18.63602
      },
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m25!1m12!1m3!1d2670.678757354229!2d18.629607358429322!3d49.40485652972632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m10!3e2!4m4!2s49.403521%2C+18.625441!3m2!1d49.403521!2d18.625441!4m3!3m2!1d49.4050253!2d18.6360416!5e0!3m2!1ssk!2ssk!4v1514624151031",
      "text": "<p>V rokoch 2002 – 2003 ju dala postaviť rodina Rudolfa Mravca, k čomu ju inšpirovala návšteva Sv. Otca na Slovensku a pripravované sv. misie vo farnosti. Kaplnka bola posvätená 18. októbra 2003 počas prebiehajúcich sv. misií turzovským farárom a dekanom Jozefom Petrášom a misionárom pátrom Ivanom Flimelom.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/kaplnka-panny-marie-lurdskej-pri-motoreste/",
        "en": "https://www.qrlink.sk/new/en/kaplnka-panny-marie-lurdskej-pri-motoreste/",
        "de": "https://www.qrlink.sk/new/de/kaplnka-panny-marie-lurdskej-pri-motoreste/",
        "ru": "https://www.qrlink.sk/new/ru/kaplnka-panny-marie-lurdskej-pri-motoreste/",
        "pl": "https://www.qrlink.sk/new/pl/kaplnka-panny-marie-lurdskej-pri-motoreste/",
        "hu": "https://www.qrlink.sk/new/hu/kaplnka-panny-marie-lurdskej-pri-motoreste/"
      }
    },
    {
      "id": "kaplnka-na-javorovej-ulici",
      "miesto": "turzovka-sakralne-pamiatky",
      "poradie": 3,
      "nazov": "Kaplnka na Javorovej ulici",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2017/12/javorova.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/03/6-3-The-chapel-on-the-“Javorova”-street.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Ide o menšiu sakrálnu stavbu, ktorá stojí na Javorovej ulici. Jej iniciátorom bol Jakub Štefanka, ktorý pri kopaní základov pre hospodársku budovu našiel v zemi sochu Panny Márie Hostýnskej. To bol impulz pre postavenie malej kaplnky, v ktorej sa aj v súčasnosti nachádza socha Panny Márie Hostýnskej (už nie pôvodná). Na dverách kaplnky je umiestnený Máriin monogram.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/kaplnka-na-javorovej-ulici/",
        "en": "https://www.qrlink.sk/new/en/kaplnka-na-javorovej-ulici/",
        "de": "https://www.qrlink.sk/new/de/kaplnka-na-javorovej-ulici/",
        "ru": "https://www.qrlink.sk/new/ru/kaplnka-na-javorovej-ulici/",
        "pl": "https://www.qrlink.sk/new/pl/kaplnka-na-javorovej-ulici/",
        "hu": "https://www.qrlink.sk/new/hu/kaplnka-na-javorovej-ulici/"
      }
    },
    {
      "id": "kaplnka-panny-marie-skapuliarskej",
      "miesto": "turzovka-sakralne-pamiatky",
      "poradie": 4,
      "nazov": "Kaplnka Panny Márie Škapuliarskej",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2017/12/skapuliarska.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/03/6-4-The-chapel-of-the-Virgin-Mary-“Škapuliarskej”.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Kaplnku v roku 1820 postavil panský hájnik Valentín Vanko spolu s manželkou. V roku 1937 zložil turzovský farník Jozef Zimka na kaplnku v Predmieri fundáciu vo výške 50 zlatých. V rokoch 1849, 1852 či 1863 sa konali menšie renovačné práce. Generálna oprava kaplnky bola vykonaná v roku 1934, kedy na ňu zložil J. Planetzer fundáciu 200 korún. Posviacka vynovenej kaplnky sa konala 12. augusta 1934. Vo vežičke kaplnky sa nachádza malý zvon s nápisom „Venované Heinrich Pirnetorz roku 1934“.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/kaplnka-panny-marie-skapuliarskej/",
        "en": "https://www.qrlink.sk/new/en/kaplnka-panny-marie-skapuliarskej/",
        "de": "https://www.qrlink.sk/new/de/kaplnka-panny-marie-skapuliarskej/",
        "ru": "https://www.qrlink.sk/new/ru/kaplnka-panny-marie-skapuliarskej/",
        "pl": "https://www.qrlink.sk/new/pl/kaplnka-panny-marie-skapuliarskej/",
        "hu": "https://www.qrlink.sk/new/hu/kaplnka-panny-marie-skapuliarskej/"
      }
    },
    {
      "id": "kaplnka-sedembolestnej-panny-marie-u-blazkov",
      "miesto": "turzovka-sakralne-pamiatky",
      "poradie": 5,
      "nazov": "Kaplnka Sedembolestnej Panny Márie U Blažkov",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2017/12/u-blazkov.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/03/6-5-The-chapel-of-Senven-sorrows-Viring-Mary-in-“U-Blazkov”.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Stavba kaplnky sa začala v roku 1845, iniciátorom jej výstavby bol Jozef Bobek. Dodnes sa zachovala jeho žiadosť nitrianskemu biskupovi z 25. júla 1845, v ktorej J. Bobek prosí biskupa o povolenie postaviť kaplnku a informuje ho o tom, že už má vykopané základy a vymurovanú časť múrov. V roku 1849 zložil na túto kaplnku fundáciu Martin Gajdoš z Olešnej. V roku 1949 bola kaplnka prebudovaná a zrekonštruovaná. Takto obnovená bola 24. septembra 1950 posvätená. Vo vežičke je umiestnený zvon na jednej strane s krížom a nápisom: „Mich hat gestiftet Ortschaft Ruhstein im Jahre Heiles 1922“ a na druhej strane zvona je text: „Oktav Winter, Braunau, guss mich 1922, nr. 1206“ (nem. V roku spásy 1922 ma darovala obec Ruštejn; v roku 1922 ma ulial Oktav Winter z Broumova, č. 1206).</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/kaplnka-sedembolestnej-panny-marie-u-blazkov/",
        "en": "https://www.qrlink.sk/new/en/kaplnka-sedembolestnej-panny-marie-u-blazkov/",
        "de": "https://www.qrlink.sk/new/de/kaplnka-sedembolestnej-panny-marie-u-blazkov/",
        "ru": "https://www.qrlink.sk/new/ru/kaplnka-sedembolestnej-panny-marie-u-blazkov/",
        "pl": "https://www.qrlink.sk/new/pl/kaplnka-sedembolestnej-panny-marie-u-blazkov/",
        "hu": "https://www.qrlink.sk/new/hu/kaplnka-sedembolestnej-panny-marie-u-blazkov/"
      }
    },
    {
      "id": "kaplnka-najsvatejsieho-srdca-panny-marie",
      "miesto": "turzovka-sakralne-pamiatky",
      "poradie": 6,
      "nazov": "Kaplnka Najsvätejšieho Srdca Panny Márie",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2017/12/Kaplnka-Hlinené-Najsv-Srdca-P-Marie.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/03/6-6-The-chapel-of-the-most-holy-heart-of-Virgin-Mary-8.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>V Hlinenom sa ešte pred postavením tejto kaplnky nachádzal drevený stĺpik, na ktorom bol pribitý obrázok Panny Márie. Ľudia sa tam často schádzali a konali rôzne pobožnosti. Do pokladničky vkladali milodary a neskôr sa obrátili na svojho farára Františka Tagániho so žiadosťou postaviť na tomto mieste kaplnku zasvätenú Panne Márii. Tagáni sa so žiadosťou o povolenie obrátil na diecézneho biskupa a požiadal ho, aby sa v kaplnke mohli niekoľkokrát za rok slúžiť sv. omše.</p>\n<p>Turzovský ľud považoval toto miesto za zázračné. Veriaci sa tam utiekali v čase sucha, šíriacich sa nemocí a konali tam procesie. Miesto bolo tradíciou označované ako nezvyčajné, kde sa mali udiať aj zázračné uzdravenia. F. Tagáni v liste biskupovi opísali prípad 50-ročného Jána Muroňa, ktorý mal problémy so zrakom a nerozoznával postavy ľudí ani na blízku vzdialenosť. Sused ho zaviedol na toto miesto, kde sa modlil, namočil si oči v prameni a po návrate domov sa cítil lepšie. Zopakoval to druhý i tretí raz a uzdravenie pripisoval tomuto miestu. Adam Učník trpel bolestivými kŕčmi a bolesťou zubov, modlil sa, umyl sa v prameni a necítil viac nijakú bolesť, čo potvrdil aj prísahou.</p>\n<p>Biskup udelil súhlas na výstavbu kaplnky 30. októbra 1870. Približne o rok a pol bola stavba hotová. Kaplnka má rozmery 9,48 m dĺžky a 6,6 m šírky. Manuálnu prácu a prácu so záprahom poskytli farníci zdarma v hodnote viac ako 900 zlatých. Okrem finančného zabezpečenia sa farár postaral aj o dôstojné umelecké vybavenie kaplnky. Obraz Prečistého Srdca Panny Márie do kaplnky v roku 1871 namaľoval Jozef Božetech Klemens a do vežičky na kaplnke bol umiestnený zvon uliaty u zvonolejára Cyrila Krausa v Banskej Bystrici v roku 1873. Kaplnka bola farárom Tagánim slávnostne posvätená 9. júna 1872. V priebehu roka 1878 bolo k novopostavenej kaplnke vybudované schodisko, ako o tom svedčí nápis priamo na schodiskovom múre: „Za duchovnej správy Fra. Tagányi Roku Pána 1878“.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/kaplnka-najsvatejsieho-srdca-panny-marie/",
        "en": "https://www.qrlink.sk/new/en/kaplnka-najsvatejsieho-srdca-panny-marie/",
        "de": "https://www.qrlink.sk/new/de/kaplnka-najsvatejsieho-srdca-panny-marie/",
        "ru": "https://www.qrlink.sk/new/ru/kaplnka-najsvatejsieho-srdca-panny-marie/",
        "pl": "https://www.qrlink.sk/new/pl/kaplnka-najsvatejsieho-srdca-panny-marie/",
        "hu": "https://www.qrlink.sk/new/hu/kaplnka-najsvatejsieho-srdca-panny-marie/"
      }
    },
    {
      "id": "kostol-fatimskej-panny-marie",
      "miesto": "turzovka-sakralne-pamiatky",
      "poradie": 7,
      "nazov": "Kostol Fatimskej Panny Márie",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2017/12/kostol-turkov.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/03/6-7-The-church-of-the-Virgin-Mary-of-Fatima.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 49.371677,
        "lng": 18.609308
      },
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m25!1m12!1m3!1d20891.305260460653!2d18.605053346126716!3d49.38966164171695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m10!3e2!4m4!2s49.403521%2C+18.625441!3m2!1d49.403521!2d18.625441!4m3!3m2!1d49.3716353!2d18.6091525!5e0!3m2!1ssk!2ssk!4v1514623171735",
      "text": "<p>V júli 2000 bola z farnosti Turzovka vyčlenená nová farnosť Korňa. K novej farnosti boli ako filiálky prifarené aj Živčáková a Turkov. Prvým farárom sa stal dovtedajší turzovský farár a dekan Ivan Mahrík. Jeho zásluhou bol postavený aj kostolík v Turkove. Iniciátorkou stavby bola Veronika Krišťáková, ktorá pod kostol darovala pozemok. Stavba nového kostola sa začala v novembri 2000. Stavebné práce vykonávali svojpomocne veriaci z Turkova, Podvysokej, Korne i Turzovky a v priebehu dvoch rokov sa podarilo stavbu kostola dokončiť. Slávnostnú konsekráciu vykonal 12. mája 2002 nitriansky sídelný biskup Ján Chryzostom kardinál Korec. Mesto Turzovka zaobstaralo pre kostol zvon od firmy Tkadlec z Halenkova. Zaujímavosťou je, že socha Panny Márie Fatimskej pochádza priamo z portugalského pútnického miesta. Od 28. júna 2002 sa stal Turkov opätovne filiálkou turzovskej farnosti.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/kostol-fatimskej-panny-marie/",
        "en": "https://www.qrlink.sk/new/en/kostol-fatimskej-panny-marie/",
        "de": "https://www.qrlink.sk/new/de/kostol-fatimskej-panny-marie/",
        "ru": "https://www.qrlink.sk/new/ru/kostol-fatimskej-panny-marie/",
        "pl": "https://www.qrlink.sk/new/pl/kostol-fatimskej-panny-marie/",
        "hu": "https://www.qrlink.sk/new/hu/kostol-fatimskej-panny-marie/"
      }
    },
    {
      "id": "kaplnka-sedembolestnej-panny-marie",
      "miesto": "turzovka-sakralne-pamiatky",
      "poradie": 8,
      "nazov": "Kaplnka Sedembolestnej Panny Márie",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2017/12/Kaplnka-Sedembolestnej-Panny.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/03/6-8-The-chapel-of-the-Seven-sorrow-Virgin-Mary.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "",
      "text": "<p>Kaplnka bola postavená v roku 1944 nad cestou vedúcou z Turzovky cez horské sedlo Semeteš na Považie. Vo vežičke je umiestnený zvon s nápisom: „Ulil R. Manoušek a spol. v Brne 1943.“</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/kaplnka-sedembolestnej-panny-marie/",
        "en": "https://www.qrlink.sk/new/en/kaplnka-sedembolestnej-panny-marie/",
        "de": "https://www.qrlink.sk/new/de/kaplnka-sedembolestnej-panny-marie/",
        "ru": "https://www.qrlink.sk/new/ru/kaplnka-sedembolestnej-panny-marie/",
        "pl": "https://www.qrlink.sk/new/pl/kaplnka-sedembolestnej-panny-marie/",
        "hu": "https://www.qrlink.sk/new/hu/kaplnka-sedembolestnej-panny-marie/"
      }
    },
    {
      "id": "zivcakova-marianske-putnicke-miesto",
      "miesto": "turzovka-sakralne-pamiatky",
      "poradie": 9,
      "nazov": "Živčáková – mariánske pútnické miesto",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2017/12/zivcakova.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/03/6-9-Zivcakova-–-Marian-pilgrimage-place-3.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 49.394379,
        "lng": 18.576926
      },
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m25!1m12!1m3!1d10454.704666227619!2d18.59056905840188!3d49.393959260426485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m10!3e2!4m4!2s49.403521%2C+18.625441!3m2!1d49.403521!2d18.625441!4m3!3m2!1d49.3943691!2d18.5767922!5e0!3m2!1ssk!2ssk!4v1514626090760",
      "text": "<p>Podobne ako v Lurdách, Medžugorí či Fatime, tak aj na Kysuciach na vrchu Živčáková sa udialo mnoho zjavení. Vrch Živčáková sa nachádza asi 3 km západne od mesta Turzovka. Z Turzovky vedie krížová cesta cez les s nástupom v Turzovke – Vyšný koniec a z mestskej časti Závodie.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/zivcakova-marianske-putnicke-miesto/",
        "en": "https://www.qrlink.sk/new/en/zivcakova-marianske-putnicke-miesto/",
        "de": "https://www.qrlink.sk/new/de/zivcakova-marianske-putnicke-miesto/",
        "ru": "https://www.qrlink.sk/new/ru/zivcakova-marianske-putnicke-miesto/",
        "pl": "https://www.qrlink.sk/new/pl/zivcakova-marianske-putnicke-miesto/",
        "hu": "https://www.qrlink.sk/new/hu/zivcakova-marianske-putnicke-miesto/"
      }
    },
    {
      "id": "kaplnka-panny-marie-kralovnej-pokoja-zivcakova",
      "miesto": "turzovka-sakralne-pamiatky",
      "poradie": 10,
      "nazov": "Kaplnka Panny Márie Kráľovnej pokoja, Živčáková",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2017/12/zivcakova-kaplnka.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/03/6-10-The-chapel-of-the-Virgin-Mary-Queen-of-peace.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 49.394385,
        "lng": 18.576529
      },
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m25!1m12!1m3!1d10033.645329038583!2d18.592067428984787!3d49.3938929730942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m10!3e2!4m4!2s49.403521%2C+18.625441!3m2!1d49.403521!2d18.625441!4m3!3m2!1d49.394444799999995!2d18.5765107!5e0!3m2!1ssk!2ssk!4v1514626895749",
      "text": "<p>Živčáková ešte ako lokalita, kde sa pásol valašský dobytok, sa prvý raz písomne spomína v roku 1616. Pomenovanie je odvodené z osobného mena Živčák, t. j. obyvateľ Žyvca. Dňa 1. júna 1958 sa na tomto vrchu mala lesníkovi Matúšovi Lašutovi údajne zjaviť Panna Mária. Zjavenia mali pokračovať aj v mesiacoch júl a august. Udalosti okamžite rozvírili spoločenskú atmosféru a veriaci začali miesto údajných zjavení navštevovať. Miesto i prichádzajúcich pútnikov ihneď začala sledovať Štátna bezpečnosť. Jej členovia viackrát zhabali rôzne predmety a obrázky s náboženskou tematikou, ničili a pálili ľuďmi budované jednoduché oltáriky či prístrešky s cieľom prinútiť ľudí, aby na horu Živčáková neprichádzali. Represiou však vyvolali presne opačný efekt. M. Lašút bol niekoľkokrát vyšetrovaný a vypočúvaný. Zomrel v roku 2010 a je pochovaný pri turzovskom farskom kostole.</p>\n<p>Živčáková bola v roku 1994 Biskupským úradom v Nitre (do februára 2008 patrila táto oblasť do Nitrianskej diecézy) vyhlásená za pútnické miesto, hoci zjavenia nie sú dodnes katolíckou cirkvou uznané ako pravé. Žilinský diecézny biskup vyhlásil Živčákovu v roku 2008 za mariánske pútnické miesto a miesto modlitby.</p>\n<p>Z dôvodu množstva žiadostí, ktoré prichádzali na Biskupský úrad v Nitre ohľadom postavenia kaplnky na Živčákovej, vydal úrad v roku 1992 predbežný súhlas s jej výstavbou. Projekt kaplnky vypracoval Ing. arch. Marián Goč. Kaplnka bola postavená v priebehu roka 1993 a 17. októbra toho istého roka bola slávnostne posvätená. Od roku 2000 kaplnka patrí do farnosti Korňa.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/kaplnka-panny-marie-kralovnej-pokoja-zivcakova/",
        "en": "https://www.qrlink.sk/new/en/kaplnka-panny-marie-kralovnej-pokoja-zivcakova/",
        "de": "https://www.qrlink.sk/new/de/kaplnka-panny-marie-kralovnej-pokoja-zivcakova/",
        "ru": "https://www.qrlink.sk/new/ru/kaplnka-panny-marie-kralovnej-pokoja-zivcakova/",
        "pl": "https://www.qrlink.sk/new/pl/kaplnka-panny-marie-kralovnej-pokoja-zivcakova/",
        "hu": "https://www.qrlink.sk/new/hu/kaplnka-panny-marie-kralovnej-pokoja-zivcakova/"
      }
    },
    {
      "id": "kostol-panny-marie-matky-cirkvi-zivcakova",
      "miesto": "turzovka-sakralne-pamiatky",
      "poradie": 11,
      "nazov": "Kostol Panny Márie Matky Cirkvi, Živčáková",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2017/12/kostol-zivcakova.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/03/6-11-The-church-of-the-Virgin-Mary-Mother-of-the-Church-in-Zivcakova.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 49.397869,
        "lng": 18.56986
      },
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m27!1m12!1m3!1d10382.426433960283!2d18.588895647826213!3d49.3982073695037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m12!3e2!4m4!2s49.403521%2C+18.625441!3m2!1d49.403521!2d18.625441!4m5!1s0x47146e8488957e71%3A0xf6669f47887b7219!2zxb1pdsSNw6Frb3ZhIC0gcMO6dG5lIG1pZXN0bywgMDIzIDIxIEtvcsWIYQ!3m2!1d49.3978687!2d18.5698598!5e0!3m2!1ssk!2ssk!4v1514627233188",
      "text": "<p>Základný kameň pre stavbu chrámu Panny Márie Matky Cirkvi požehnal v roku 2008 žilinský diecézny biskup Tomáš Galis. V júni nasledujúceho roka sa začalo s jeho stavbou. Slávnostná konsekrácia sa konala 4. októbra 2015. Do oltára boli vložené relikvie sv. Andreja-Svorada a Benedikta, sv. Jána Pavla II., sv. Márie Goretti a blahoslavenej sestry Zdenky Schelingovej. Novému chrámu dominuje veža s pozlátenou korunou a krížom. Na 43 m vysokej veži sa nachádza vyhliadková terasa, ku ktorej treba vystúpiť po 138 schodoch. Vo veži bol v roku 2011 umiestnený 830 kg vážiaci zvon Mária uliaty v moravskom Halenkove. V máji 2015 boli požehnané ďalšie tri zvony Najsvätejšie Srdce Ježišovo (355 kg), sv. Andrej-Svorad a Benedikt (220 kg) a sv. Jozef (150 kg). Všetky boli, podobne ako zvon Mária, uliate Josefom Tkadlecom v Halenkove. Na začiatku schodiska vedúceho do kostola sú sochy sv. Cyrila a Metoda. V interiéri kostola na čelnej stene za oltárom je impozantná mozaika s dvoma výjavmi zo Starého zákona – Stvorenie Evy z Adamovho boku a Noemova archa. Mozaika je tvorená kamienkami, sklom, keramikou a plátkovým zlatom. Jej autorom je uznávaný odborník páter Marko Ivan Rupnik pochádzajúci zo Slovinska, ktorého diela sa nachádzajú po celom svete. V hlavnej lodi chrámu je nainštalovaný píšťalový organ, ktorý po zakúpení v Nemecku kompletne zreštaurovala a uviedla do prevádzky firma Vojtek a syn zo Žiliny.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/kostol-panny-marie-matky-cirkvi-zivcakova/",
        "en": "https://www.qrlink.sk/new/en/kostol-panny-marie-matky-cirkvi-zivcakova/",
        "de": "https://www.qrlink.sk/new/de/kostol-panny-marie-matky-cirkvi-zivcakova/",
        "ru": "https://www.qrlink.sk/new/ru/kostol-panny-marie-matky-cirkvi-zivcakova/",
        "pl": "https://www.qrlink.sk/new/pl/kostol-panny-marie-matky-cirkvi-zivcakova/",
        "hu": "https://www.qrlink.sk/new/hu/kostol-panny-marie-matky-cirkvi-zivcakova/"
      }
    },
    {
      "id": "kaplnka-na-bukovine",
      "miesto": "turzovka-sakralne-pamiatky",
      "poradie": 12,
      "nazov": "Kaplnka na Bukovine",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2017/12/bukovina.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2018/03/6-12-The-chapel-in-Bukovina.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 49.395664,
        "lng": 18.639454
      },
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m25!1m12!1m3!1d4979.78968524438!2d18.63256740479572!3d49.39980168254017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m10!3e2!4m4!2s49.403521%2C+18.625441!3m2!1d49.403521!2d18.625441!4m3!3m2!1d49.3957088!2d18.6394342!5e0!3m2!1ssk!2ssk!4v1514627639075",
      "text": "<p>Malú sakrálnu stavbu na Bukovine stojacu pri turistickom chodníku nechala v roku 1945 postaviť rodina Štefankova ako poďakovanie Panne Márii za ochranu rodiny počas druhej svetovej vojny. Počas komunizmu bola niektorými aktívnymi členmi strany zámerne poškodená. Ide o jednoduchú stavbu ľudového charakteru s výklenkom bez konkrétneho zasvätenia. V roku 2017 prešla kaplnka komplexnou rekonštrukciou, ktorej iniciátorom bola rodina Kontríková, pokračovatelia rodiny Štefankovej.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/kaplnka-na-bukovine/",
        "en": "https://www.qrlink.sk/new/en/kaplnka-na-bukovine/",
        "de": "https://www.qrlink.sk/new/de/kaplnka-na-bukovine/",
        "ru": "https://www.qrlink.sk/new/ru/kaplnka-na-bukovine/",
        "pl": "https://www.qrlink.sk/new/pl/kaplnka-na-bukovine/",
        "hu": "https://www.qrlink.sk/new/hu/kaplnka-na-bukovine/"
      }
    },
    {
      "id": "kaplnka-a-vojensky-cintorin-z-1-sv-vojny",
      "miesto": "vranov",
      "poradie": 1,
      "nazov": "Kaplnka a Vojenský cintorín z 1. sv. vojny",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2021/08/Webp.net-resizeimage9.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2021/08/01-Kaplnka-a-vojensky-cintorin-1.mp3"
      ],
      "galeria": [
        "https://www.qrlink.sk/new/wp-content/uploads/2021/08/Webp.net-resizeimage10.jpg"
      ],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.0284020819972!2d21.673188115964297!3d48.8957958792911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDUzJzQ0LjkiTiAyMcKwNDAnMzEuNCJF!5e0!3m2!1ssk!2ssk!4v1629985649847!5m2!1ssk!2ssk",
      "text": "<p>Po udalostiach, ku ktorým došlo v lete 1914 v Sarajeve, kedy bol spáchaný atentát na následníka trónu Františka Ferdinanda d’Este, sa spustili v monarchii vážne vnútorné aj medzinárodné politické pohyby, ktoré vyústili do vyhlásenia I. svetovej vojny.</p>\n<p>Obyvatelia Vranova vnímali prípravy na vojnový konflikt ako „oživenie“ stereotypne prebiehajúcich dní, týždňov, mesiacov a nie ako hrozivú katastrofu. Keď bola 31. júla 1914 vyhlásená všeobecná mobilizácia, to už nebolo len „hranie sa na vojnu“, ale reálny vojenský konflikt so všetkými hrôzami a obeťami. Cintoríny pre padlých v bojoch medzi Rakúsko -Uhorskými a Ruskými armádami vznikali na frontovej línii aj v zázemí pri poľných lazaretoch. V lesoch Východných Karpát sa nachádzajú desiatky cintorínov, na ktorých sú pochované tisíce padlých.</p>\n<p>Vo Vranove bol v tej dobe zriadený vojenský lazaret a zhromaždisko vojnových ruských zajatcov. Cintorín, ktorý tu vznikol, slúžil pre potreby tohto lazaretu. Je na ňom pochovaných 250 obetí vojny. V období prvej Československej republiky bol cintorín upravený a v roku 1935 zorganizoval Okresný výbor brannosti vo Vranove pietnu oslavu, pri príležitosti ktorej bol odhalený pamätník Padlým spoluobčanom vranovským v rokoch 1914 – 1918. Ich mená sú zvečnené na mramorovej tabuli.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/kaplnka-a-vojensky-cintorin-z-1-sv-vojny/",
        "en": "https://www.qrlink.sk/new/en/kaplnka-a-vojensky-cintorin-z-1-sv-vojny/",
        "de": "https://www.qrlink.sk/new/de/kaplnka-a-vojensky-cintorin-z-1-sv-vojny/",
        "ru": "https://www.qrlink.sk/new/ru/kaplnka-a-vojensky-cintorin-z-1-sv-vojny/",
        "pl": "https://www.qrlink.sk/new/pl/kaplnka-a-vojensky-cintorin-z-1-sv-vojny/",
        "hu": "https://www.qrlink.sk/new/hu/kaplnka-a-vojensky-cintorin-z-1-sv-vojny/"
      }
    },
    {
      "id": "pieskovcovy-kriz",
      "miesto": "vranov",
      "poradie": 2,
      "nazov": "Pieskovcový kríž",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2021/08/Webp.net-resizeimage6.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2021/09/02-Pieskovcovy-kriz-1.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.0284020819972!2d21.673188115964297!3d48.8957958792911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDUzJzQ0LjkiTiAyMcKwNDAnMzEuNCJF!5e0!3m2!1ssk!2ssk!4v1629985649847!5m2!1ssk!2ssk",
      "text": "<p>Pieskovcový kríž z  roku 1864 bol pôvodne umiestnený pri zaniknutom kostole sv. Štefana, ktorý sa nachádzal pravdepodobne v centre mesta. Kríž je zachovaný v pomerne pôvodnej podobe. V okolí kostolov sa v minulosti nachádzali cintoríny a aj pri spomínanom kostole sv. Štefana sa pri archeologickom prieskume našli hrobové miesta. Historici predpokladajú, že kríž bol súčasťou cintorína. Druhou možnosťou je, že to bol prícestný kríž, pretože popri kostole viedla obchodná cesta.</p>\n<p>Umiestnenie objektu teda nebolo náhodné.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/pieskovcovy-kriz/",
        "en": "https://www.qrlink.sk/new/en/pieskovcovy-kriz/",
        "de": "https://www.qrlink.sk/new/de/pieskovcovy-kriz/",
        "ru": "https://www.qrlink.sk/new/ru/pieskovcovy-kriz/",
        "pl": "https://www.qrlink.sk/new/pl/pieskovcovy-kriz/",
        "hu": "https://www.qrlink.sk/new/hu/pieskovcovy-kriz/"
      }
    },
    {
      "id": "bazilika-minor-narodenia-panny-marie-a-klastor-paulinov",
      "miesto": "vranov",
      "poradie": 3,
      "nazov": "Bazilika minor Narodenia Panny Márie a kláštor paulínov",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2021/08/Bazilika-minor-Narodenia-Panny-Márie-a-kláštor-paulínov.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2021/11/03-Bazilika-Minor-Narodenia-Panny-Marie.mp3"
      ],
      "galeria": [
        "https://www.qrlink.sk/new/wp-content/uploads/2021/08/5-bazilika-minor-1024x773.jpg",
        "https://www.qrlink.sk/new/wp-content/uploads/2021/08/6-klaštor-paulinov.jpg",
        "https://www.qrlink.sk/new/wp-content/uploads/2021/08/Webp.net-resizeimage1-1024x768.jpg"
      ],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.222210164304!2d21.6782549159643!3d48.89210217929072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDUzJzMxLjYiTiAyMcKwNDAnNDkuNiJF!5e0!3m2!1ssk!2ssk!4v1629985933748!5m2!1ssk!2ssk",
      "text": "<p>K najvýznamnejším pamiatkam na území mesta patrí neskorogotická Bazilika minor Narodenia Panny Márie a k nej prislúchajúci kláštor pavlínov z obdobia baroka. (Tento titul získal kostol v roku 2008) Obe stavby sú zapísané do registra národných kultúrnych pamiatok od roku 1963.</p>\n<p>Kostol nechala v roku 1580 postaviť svatka Alžbety Bátoriovej – Eufrozína Drugeth pre potreby kalvínskych veriacich. Počas povstania Imricha Tököliho nastal útlm ich činnosti. Toto obdobie naopak znamenalo rozkvet protestantizmu. Následné obdobie rekatolizácie posilnilo postavenie rehole, čo znamenalo intenzívny vývoj kláštora a kostola. Požiar na začiatku 17. storočia poznačil obidva objekty. V priebehu 18. storočia realizovali pavlíni mohutnú barokovú prestavbu kostola.</p>\n<p>Výzdoba v interiéroch pochádza od viedenského maliara Johanna Lucasa Krackera, ktorý vytvoril sériu barokových iluzívnych malieb. Z freskových malieb, ktoré sa zachovali, je najvýznamnejšia tá, ktorá sa nachádza medzi hlavným oltárom a kazateľnicou. Znázorňuje narodenie Panny Márie. V priestoroch kláštora prezentuje majstra jedno dielo. Nachádza sa na klenbe kláštorného schodišťa.</p>\n<p>Autorom drevenej výzdoby hlavného oltára, ale aj bočných oltárov a kazateľnice, je košický sochársky majster Jozef Hartman. Výzdoba vranovskej baziliky patrí k jeho vrcholným dielam. Do rannej fázy jeho tvorby patrí aj Oltár sv. Jána Nepomuckého. Z jeho dielne pochádza zrejme aj kazateľnica, bočné oltáre a snáď aj výzdoba portálov. Hartmann sa tu prezentuje už ako vyzretý neskorobarokový umelec s charakteristickými postavami štíhlych foriem s malou hlavou, veľkými nosmi a výraznými očami, s takmer až plocho modelovanými viečkami. Celý mobiliár vznikol v roku 1745. Výzdoba baziliky aj kláštora, v ktorej je kombinovaná maľba Johanna Lucasa Krackera a sochárska a rezbárska výzdoba Jozefa Hartmana vytvorili jedinečné dielo. Národnou kultúrnou pamiatkou je aj chrámový poklad od levočského zlatníckeho majstra Jána Szilassyho, ktorý je kľúčovou postavou hornouhroského barokového zlatníctva. Szilassy pre vranovskú baziliku vytvoril kolekciu pozostávajúcu z monštrancie, pacifikálneho kríža, cibória a kalicha.</p>\n<p>Pôvodný kláštor postavili františkáni v prvej polovici 15. storočia. Počas reformácie však mesto opustili. Františkánsky kláštor počas protihabsburských povstaní zanikol. V roku 1672 prišli na pozvanie Márie Esterháziovej do Vranova pavlíni. Vybudovali si kláštor na základoch starého františkánskeho kláštora a obnovili jeho činnosť. Dnes je kláštor využívaný pre potreby cirkvi.</p>\n<p>Náhrobné kamene</p>\n<p>Vedľa Baziliky pri bočnom vchode sa nachádzajú dva pôvodné náhrobné kamene. Romantizujúci kamenný náhrobok patrí Ferencné Almássy (1783-1848). Na druhom náhrobku je erb patriaci rodine Forgáčovcov.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/bazilika-minor-narodenia-panny-marie-a-klastor-paulinov/",
        "en": "https://www.qrlink.sk/new/en/bazilika-minor-narodenia-panny-marie-a-klastor-paulinov/",
        "de": "https://www.qrlink.sk/new/de/bazilika-minor-narodenia-panny-marie-a-klastor-paulinov/",
        "ru": "https://www.qrlink.sk/new/ru/bazilika-minor-narodenia-panny-marie-a-klastor-paulinov/",
        "pl": "https://www.qrlink.sk/new/pl/bazilika-minor-narodenia-panny-marie-a-klastor-paulinov/",
        "hu": "https://www.qrlink.sk/new/hu/bazilika-minor-narodenia-panny-marie-a-klastor-paulinov/"
      }
    },
    {
      "id": "schwartzov-dom",
      "miesto": "vranov",
      "poradie": 4,
      "nazov": "Schwartzov dom",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2021/08/Schwartzov-dom.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2021/09/04-Schwartsov-dom.mp3"
      ],
      "galeria": [
        "https://www.qrlink.sk/new/wp-content/uploads/2021/08/Schwartzov-dom-1.jpg"
      ],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.324815893478!2d21.679354615964247!3d48.89014657929066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDUzJzI0LjUiTiAyMcKwNDAnNTMuNiJF!5e0!3m2!1ssk!2ssk!4v1629986095509!5m2!1ssk!2ssk",
      "text": "<p>Schwartzov dom je jedna z najreprezentatívnejších zachovaných profánnych budov vo Vranove nad Topľou. Jej staviteľom bol významný vranovský obchodník Hugo Schwartz v roku 1911. Hugo Schwartz s manželkou Lujzou rodenou Bergerovou, s bratmi Ignácom a Izidorom boli aj vlastníkmi najväčšieho vranovského podniku – obchodu s priemyselným tovarom, ktorý sa nachádzal v budove. Bohato zdobené neskorosecesné priečelie budovy dopĺňa bohatá štuková výzdoba interiéru. Nad vchodom je korunná rímsa podopretá ozdobnými prvkami na fasáde. Tieto prvky sú zachované na budove dodnes. V medzivojnovom období stála pred obchodom benzínová pumpa. Majitelia obchodu zabezpečili tiež elektrické osvetlenie priľahlej križovatky. Rodina bola známa svojimi filantropickými darmi, najznámejší bol „amerikanec“ Mikulaš Schwartz, ktorý zo Spojených štátov amerických svojimi finančnými darmi podporil nielen židovskú obec, ale aj katolícke zbory. Daroval rímskokatolíckej cirkvi 50 tisíc korún na zakúpenie zvona a 10 tisíc dolárov na výstavbu vranovskej synagógy. Keď Izidor Schwartz – brat Ignáca a Huga zomrel (pôsobil ako obchodný splnomocnenec Slovenskej všeobecnej úverovej banky), ich rodina darovala rímskokatolíckej cirkvi na opravy kostola 100 tisíc korún. Členovia tejto, pre Vranov významnej židovskej rodiny, sú pochovaní na miestnom židovskom cintoríne.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/schwartzov-dom/",
        "en": "https://www.qrlink.sk/new/en/schwartzov-dom/",
        "de": "https://www.qrlink.sk/new/de/schwartzov-dom/",
        "ru": "https://www.qrlink.sk/new/ru/schwartzov-dom/",
        "pl": "https://www.qrlink.sk/new/pl/schwartzov-dom/",
        "hu": "https://www.qrlink.sk/new/hu/schwartzov-dom/"
      }
    },
    {
      "id": "socha-bretislav-benda-mladosti-a-krase-patri-buducnost",
      "miesto": "vranov",
      "poradie": 5,
      "nazov": "Socha Břetislav Benda – Mladosti a kráse patrí budúcnosť.",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2021/08/Webp.net-resizeimage4.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2021/09/05-Socha.mp3"
      ],
      "galeria": [
        "https://www.qrlink.sk/new/wp-content/uploads/2021/08/Webp.net-resizeimage5.jpg"
      ],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.3604879302734!2d21.68146001596417!3d48.88946667929064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDUzJzIyLjEiTiAyMcKwNDEnMDEuMSJF!5e0!3m2!1ssk!2ssk!4v1629986212712!5m2!1ssk!2ssk",
      "text": "<p>Sochu ženskej postavy z názvom „Mladosti a kráse patrí budúcnosť“ vytvoril významný český sochár národný umelec Břetislav Benda v roku 1955, ako dar vedúcemu výstavby závodu Drevospracujúceho podniku v Hencovciach, ktorý sa neskôr premenoval na Bukózu. Prvotne bola umiestnená priamo v areáli závodu pred výrobným objektom  celulózky. Okrem nej Benda vytvoril aj plastiku zobrazujúcu technológiu spracovania dreva v závode, ktorá bola umiestnená na priečelí vstupnej budovy. Keďže podľa  vlastných slov umelec „nepozná motív vzácnejší, ako je ľudské telo a predovšetkým ženské“, bola predmetom sochy ženská postava vo svojej prirodzenej forme. Po inštalácii sochy sa začali problémy. Výpary a lúh, ktorý sa používal vo varni začali poškodzovať a znečisťovať sochu. Chlapi zamestnaní v závode preto sochu obliekali do ženskej bielizne. To vzbudilo pozornosť politických predstaviteľov a zaslúžili sa o jej odstránenie z areálu závodu. Sochu kúpilo mesto Vranov nad Topľou za 70 tisíc korún a umiestnilo ju do parkovej fontány  v centrálnom parku. Traduje sa, že sochu z mesta chcel odstrániť aj tajomník ÚV KSČ Vasiľ Biľak. V 90-tych rokoch ju poškodili nekultúrni občania. Po opravách a reštaurovaní bola umiestnená v depozitári mesta a v roku 2012 po revitalizácii mestského parku sa znova vrátila na námestie.</p>\n<p>Bretislav Benda sa narodil 28.marca 1897 v Milevsku. Študoval na Akadémii výtvarných umení, kde bol žiakom  Josefa Václava Myslbeka. Jeho štúdiá prerušila prvá  svetová vojna a v roku 1916 musel narukovať.  Na talianskom fronte utrpel pri guľometnej paľbe vážny priestrel obidvoch dlaní. Po návrate z frontu dokončil štúdia v ateliéri ďalšieho významného sochára Jána Štursu. Významným krokom v jeho kariére bolo členstvo v prestížnom spolku Mánes kam vstúpil v roku 1923. V jeho sochárskych výtvoroch sa objavujú politici ako T.G Masaryk či E.Beneš,  aj vojaci či motívy ženskej postavy. Na medzinárodnej výstave dekoratívneho umenia v Paríži v roku 1925 získal za nádhernú plastiku Démétér a Božena zlatú medailu. Benda zomiera v roku 1983 v Prahe a je pochovaný na vyšehradskom cintoríne.   Patrí medzi najvýznamnejších sochárov 20. storočia.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/socha-bretislav-benda-mladosti-a-krase-patri-buducnost/",
        "en": "https://www.qrlink.sk/new/en/socha-bretislav-benda-mladosti-a-krase-patri-buducnost/",
        "de": "https://www.qrlink.sk/new/de/socha-bretislav-benda-mladosti-a-krase-patri-buducnost/",
        "ru": "https://www.qrlink.sk/new/ru/socha-bretislav-benda-mladosti-a-krase-patri-buducnost/",
        "pl": "https://www.qrlink.sk/new/pl/socha-bretislav-benda-mladosti-a-krase-patri-buducnost/",
        "hu": "https://www.qrlink.sk/new/hu/socha-bretislav-benda-mladosti-a-krase-patri-buducnost/"
      }
    },
    {
      "id": "kostol-sv-stefana",
      "miesto": "vranov",
      "poradie": 6,
      "nazov": "Kostol sv. Štefana",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2021/08/Kostol-sv.-Štefana.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2021/09/06-Kostol-sv-Stefana.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.448451841999!2d21.68342771596407!3d48.88779007929042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDUzJzE2LjAiTiAyMcKwNDEnMDguMiJF!5e0!3m2!1ssk!2ssk!4v1629986389082!5m2!1ssk!2ssk",
      "text": "<p>Zaniknutý stredoveký kostol sa nachádzal v centrálnej časti mestečka Vranov, juhozápadne od areálu vodného hradu. Tento farský kostol bol zasvätený sv. Štefanovi, kráľovi, ktorý bol svätorečený v roku 1803, preto výstavbu kostola možno predpokladať v rozmedzí od konca 11. do začiatku 13. storočia. Na základe registrov pápežského desiatku z rokov 1332 a 1337 vieme, že v tom čase vo vranovskom rímskokatolíckom kostole pôsobil farár Štefan. Do kostola bol okolo roku 1490 umiestnený bočný oltár zasvätený Sv. Anne. Od polovice 16. storočia v kostole vysluhovali bohoslužby súčasne kalvínski i luteránski kazatelia. Evanjelickí kazatelia pôsobili vo Vranove ešte v poslednej tretine 17. storočia. Počas rekatolizácie evanjelikom kostoly odobrali a zemepáni pozvali do Vranova mníchov pavlínov, takže koncom 17. storočia oba vranovské kostoly patrili rímskokatolíckej cirkvi. V kanonickej vizitácii z 3. júna 1773 je kostol zaznamenaný ako opustený bez strechy. Uvádza sa v nej tiež neohradený cintorín a rumy farskej budovy. Nadzemné stropy kostola boli viditeľné ešte začiatkom 20. storočia. V Pamätnej knihe storočnice košického biskupstva z roku 1904 sa píše, že „časť oltárnej menzy ešte vyčnieva zo zeme a označuje, kde slovenský kostol stál“.</p>\n<p>Na základe archeologického výskumu realizovaného pracovníkmi Vlastivedného múzea v Hanušovciach nad Topľou v roku 2008 môžeme konštatovať, že kostol bol orientovaný v smere východ – západ, so vstupom na západnej a pravdepodobne aj na južnej strane, so svätyňou na východnej strane. Stavba mala neskororománske, resp. ranogotické slohové prvky. Pri neskoršej prestavbe, pravdepodobne koncom 15. storočia, bola opatrená opornými múrmi. Vnútorná šírka svätyne pri jej základe bola 6,5 m, šírka lode 13,5 m a jej dĺžka bola odhadovaná približne na 33 m. V priebehu archeologického výskumu bolo odhalených viacero hrobov s kostrovými pozostatkami v interiéri kostola, a aj vedľa neho, čo dokladá existenciu cintorína v areáli kostola. Kvôli prezentácii objektu zaniknutého kostola mesto Vranov nad Topľou v roku 2019 pristúpilo k rekonštrukcii jeho pôdorysu formou nadzemnej kamennej výmurovky.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/kostol-sv-stefana/",
        "en": "https://www.qrlink.sk/new/en/kostol-sv-stefana/",
        "de": "https://www.qrlink.sk/new/de/kostol-sv-stefana/",
        "ru": "https://www.qrlink.sk/new/ru/kostol-sv-stefana/",
        "pl": "https://www.qrlink.sk/new/pl/kostol-sv-stefana/",
        "hu": "https://www.qrlink.sk/new/hu/kostol-sv-stefana/"
      }
    },
    {
      "id": "lipa-slobody",
      "miesto": "vranov",
      "poradie": 7,
      "nazov": "Lipa slobody",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2021/08/65a5690.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2021/09/07-Lipa-slobody.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.448451841999!2d21.68342771596407!3d48.88779007929042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDUzJzE2LjAiTiAyMcKwNDEnMDguMiJF!5e0!3m2!1ssk!2ssk!4v1629986591571!5m2!1ssk!2ssk",
      "text": "<p>Lipa bola vysadená v roku 1918 a dnes stojí pred strednou odbornou školou v centre mesta. Vysadili ju vranovskí lokalpatrioti a zástancovia samostatnosti nášho národa na počesť vzniku samostatného Československa 28. októbra 1918 po skončení prvej svetovej vojny a rozpade Rakúsko-Uhorska. Nadšenie bolo spoločné, lebo v tom čase žilo vo Vranove aj viac českých rodín. Keď to bol ešte malý strom, tak ho polievali a starali sa o neho aby zostal pre budúce generácie ako symbol prvého spoločného štátu Čechov a Slovákov.</p>\n<p>O pôvode stromu sa traduje aj iný príbeh. Hovorí sa v ňom, že tento strom vysadili francúzski vojaci, ktorí sa zo zranení počas prvej svetovej vojny liečili v nemocnici vo Vranove, ktorá bola zriadená v budove školy. Aj keď frontová línia nikdy nedorazila do nášho mesta a prechádzala cez svidnický, stropkovský a humenský okres, ranení vojaci boli z frontovej línie prevážaní do Vranova, kde sa liečili. Mnohí z nich tu aj zraneniam podľahli, a boli pochovaní na miestnom cintoríne. Spomínaní vojaci zranenia prežili a lipu zasadili na pamiatku pred poľnou nemocnicou.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/lipa-slobody/",
        "en": "https://www.qrlink.sk/new/en/lipa-slobody/",
        "de": "https://www.qrlink.sk/new/de/lipa-slobody/",
        "ru": "https://www.qrlink.sk/new/ru/lipa-slobody/",
        "pl": "https://www.qrlink.sk/new/pl/lipa-slobody/",
        "hu": "https://www.qrlink.sk/new/hu/lipa-slobody/"
      }
    },
    {
      "id": "rolnicke-povstanie-na-vychodnom-slovensku-1831",
      "miesto": "vranov",
      "poradie": 8,
      "nazov": "Roľnícke povstanie na Východnom Slovensku 1831",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2021/08/Webp.net-resizeimage2.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2021/09/08-Rolnicke-povstanie.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.4946417022916!2d21.684697415964084!3d48.8869096792903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDUzJzEyLjkiTiAyMcKwNDEnMTIuOCJF!5e0!3m2!1ssk!2ssk!4v1629986771802!5m2!1ssk!2ssk",
      "text": "<p>V roku 1831 na východnom Slovensku vypuklo veľké povstanie, ktoré sa do histórie zapísalo ako roľnícke. Jeho príčinou bola nespokojnosť obyvateľstva, hlavne pre ich ekonomické pomery a postavenie poddaných na jednotlivých panstvách. Miestni mocipáni zneužívali na konci 18. storočia pozemkové úpravy na vlastné obohacovanie. Sú zdokumentované prípady, keď miestne šľachtické rody v rámci komasácie oberali o pôdu miestnych sedliakov. Postupným zaberaním polí, lúk aj kopaničiarskych pozemkov zhoršovali sociálno-ekonomické postavenie poddaných. Spúšťačom nepokojov bola epidémia cholery a karanténne opatrenia na potlačenie šírenia choroby. Podobne ako v súčasnosti významnú úlohu zohrali konšpirácie, ktoré sa šírili medzi pospolitým ľudom o tom, že príčinou cholery je otrava studní. Zachoval sa napríklad priznanie získané pri výsluchu istého Jána Škvorelu, ktorý pri mučení priznal, že otravoval studne vo Vranove Hlinnom, Zámutove aj Soli.</p>\n<p>Nepokoje sa začali v okolí Trebišova a rýchlo sa rozšírili aj do obcí pri Vranove. O pravých príčinách ozbrojeného povstania svedčia výroky vodcov vzbury ktorí hlásali pri rabovačkách zemianskych usadlosti: „ Obrátil sa svet, dosť ste už panovali, teraz my budeme pánmi.“</p>\n<p>Vodcovia vzbury zo Zámutova mali snahu koordinovať ohniská nepokojov v susedných obciach, a to v Rudľove, Hlinnom, Soli, Komáranoch, Vechci, Čaklove, Jastrabom, či vo Vranove. 5. augusta sa stretli richtári spomínaných usadlostí a dohodli sa na spoločnom postupe pri ničení pánov a ich majetkov. Svoj hnev namierili aj proti Židom , ktorých pozatvárali. Po úspešných rabovačkách na miestnych panstvách povstalci pod vedením Adama a Michala Ostruhu zo Zámutova chceli pochodovať na Nové mesto pod Šiatorom. Druhá skupina povstalcov smerovala na kúrie v Čaklove, Čemernom či Majerovciach a hlavné sily smerovali na Vranov. Vzbura mala známky koordinovaného postupu, no bola zastavená príchodom vládnych vojsk z Košíc a Prešova. Ani pokusy povstalcov o spojenie sa so vzbúrencami na území Šariša neboli úspešné. Vojská boli v presile a postupne zlikvidovali jednotlivé ohniská povstania. Pred súdy bolo postavených 73 obžalovaných a 41 vodcov bolo odsúdených na smrť obesením.</p>\n<p>Roľnícke povstanie v roku 1831 dokazuje, že konšpirácie nie sú výmyslom modernej doby, ale boli aj v histórii príčinou nejedného ozbrojeného konfliktu.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/rolnicke-povstanie-na-vychodnom-slovensku-1831/",
        "en": "https://www.qrlink.sk/new/en/rolnicke-povstanie-na-vychodnom-slovensku-1831/",
        "de": "https://www.qrlink.sk/new/de/rolnicke-povstanie-na-vychodnom-slovensku-1831/",
        "ru": "https://www.qrlink.sk/new/ru/rolnicke-povstanie-na-vychodnom-slovensku-1831/",
        "pl": "https://www.qrlink.sk/new/pl/rolnicke-povstanie-na-vychodnom-slovensku-1831/",
        "hu": "https://www.qrlink.sk/new/hu/rolnicke-povstanie-na-vychodnom-slovensku-1831/"
      }
    },
    {
      "id": "slnecne-hodiny-kalvinsky-kostol-na-hviezdoslavovej-ulici",
      "miesto": "vranov",
      "poradie": 9,
      "nazov": "Slnečné hodiny – Kalvínsky kostol na Hviezdoslavovej ulici",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2021/08/Webp.net-resizeimage3.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2021/09/09-Slnecne-hodiny-kalvinsky-kostol-3.mp3"
      ],
      "galeria": [
        "https://www.qrlink.sk/new/wp-content/uploads/2021/08/Webp.net-resizeimage8.jpg",
        "https://www.qrlink.sk/new/wp-content/uploads/2021/08/Webp.net-resizeimage7.jpg"
      ],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.5260361833125!2d21.687261515964014!3d48.88631127929029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDUzJzEwLjciTiAyMcKwNDEnMjIuMCJF!5e0!3m2!1ssk!2ssk!4v1629986980289!5m2!1ssk!2ssk",
      "text": "<p>Sándor Böszörményi – kalvínsky kňaz z Humenného opisuje vo svojej práci z roku 1938 s názvom „Kostoly reformovaných cirkví v Topľanskej kotline “ Vranov v 16. storočí a začiatkom 17. storočia ako mesto so silnými reformačnými koreňmi. Rekatolizáciou sa situácia zmenila.</p>\n<p>Medzi vranovskými protestantmi vyvrcholila túžba po vlastnom kostole koncom 19. storočia. Príkladom im boli humenskí kalvíni a evanjelici, ktorí sa s týmto problémom už vysporiadali a postavili si spoločný kostol.</p>\n<p>To bol zámer veriacich aj vo Vranove. Pri absencii odvahy a organizačných schopností neexistovala záruka, že sa tak stane. Našťastie v roku 1892 sa do  Vranova prisťahoval čerstvý absolvent Banskej a lesníckej akadémie v Banskej Štiavnici, rodák zo Sedmohradska Gábor Bodor (*1867, Gelence – †1936, Vranov). Popri lesníckej práci sa zaujímal aj o veci verejné. Myšlienka postavenia kostola ho zaujala. Rozhodol sa pomôcť. Organizoval zbierky, kultúrne a náboženské akcie. A nebol sám, pridávali sa ochotní spolupracovníci oddaní myšlienke postavenia bohostánku.</p>\n<p>Do roku 1910 sa na výstavbu spoločného protestantského kostola vyzbieralo 20 000 korún, čo bolo dosť na jeho postavenie. Lenže veriaci sa nevedeli dohodnúť na symboloch v interiéri a na veži kostola. Vypukla 1. svetová vojna. Dovtedy vyzbierané peniaze boli povinní odovzdať maďarskej vláde na vojenské účely. Po rozpade Rakúsko-Uhorska a vzniku ČSR sa luteráni a reformovaní rozhodli postaviť každý svoj vlastný kostol. Po slovensky hovoriaci luteráni si postavili svoj kostol na Rázusovej ulici.</p>\n<p>Veriacim hovoriacim po maďarsky Gábor Bodor postavil kalvínsky kostol na svojich pozemkoch na Hviezdoslavovej ulici. Spolu s manželkou Etelkou rod.Keler potomkom holandských a nemeckých predkov, a deťmi, prevzali všetku zodpovednosť za stavbu kostola vrátane materiálu a dopravy. Nemalou mierou výstavbu kostola podporili aj veriaci svojimi darmi.</p>\n<p>Kostol projektoval a realizoval vranovský staviteľ Pavol Nagy. Malý kostol so 40 sedadlami vysvätil v roku 1931 reformovaný biskup Péter Mihály. Bohoslužby reformovanej cirkvi sa konali v menšinovom maďarskom jazyku. To bol dôvod, prečo kostol navštevovali aj maďari iných náboženstiev.</p>\n<p>Zaujímavosťou kostola sú slnečné hodiny. Vo vlasti Gábora Bodora a v rodisku predkov manželky Etelky rod.Keler boli takéto hodiny bežné a to bol asi dôvod, prečo sú na kostole slnečné hodiny. Kostol je zapísaný ako kultúrna národná pamiatka.</p>\n<p>Aj keď po druhej svetovej vojne, v období socializmu, došlo ku konfiškácii kostola a k nemu patriacich parciel, bohoslužby pokračovali v maďarčine až do smrti Juraja Gazdoviča (†1985) farára Michalovského seniorátu. Odvtedy sú bohoslužby konané v slovenčine.</p>\n<p>Po páde komunistickej vlády požiadali potomkovia vlastníkov Gábora Bodora a Etelky o vrátenie kostola a k nemu patriacich nehnuteľností. Kostol spadajúci pod správu mesta bol vrátený v roku 1994. Okolité parcely, tiež patriace ku kostolu, spravoval OÚNZ-Nemocnica Vranov nad Topľou. Tie boli vrátené po súdnych ťahaniciach v roku 2013.</p>\n<p>V roku 2020 bola z Fondu opráv MK SR opravená strecha a veža kostola. Bol to dôležitý krok pre jeho záchranu. Bohužiaľ, dnes je vstup do kostola kvôli okolitým stavebným úpravám 70 cm pod úrovňou priľahlých komunikácii. To spôsobuje nedostatočný odvod povrchovej vody, ktorá nepriaznivo pôsobí na stavbu. Každú druhú nedeľu je v kostole bohoslužba v slovenčine.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/slnecne-hodiny-kalvinsky-kostol-na-hviezdoslavovej-ulici/",
        "en": "https://www.qrlink.sk/new/en/slnecne-hodiny-kalvinsky-kostol-na-hviezdoslavovej-ulici/",
        "de": "https://www.qrlink.sk/new/de/slnecne-hodiny-kalvinsky-kostol-na-hviezdoslavovej-ulici/",
        "ru": "https://www.qrlink.sk/new/ru/slnecne-hodiny-kalvinsky-kostol-na-hviezdoslavovej-ulici/",
        "pl": "https://www.qrlink.sk/new/pl/slnecne-hodiny-kalvinsky-kostol-na-hviezdoslavovej-ulici/",
        "hu": "https://www.qrlink.sk/new/hu/slnecne-hodiny-kalvinsky-kostol-na-hviezdoslavovej-ulici/"
      }
    },
    {
      "id": "povest-o-vzniku-vranova",
      "miesto": "vranov",
      "poradie": 10,
      "nazov": "Povesť o vzniku Vranova",
      "popis": "",
      "cover": "",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2022/04/O-vranach-pri-Topli.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.286472215598!2d21.68200806696587!3d48.89087739224284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x11b9075e9bf662c!2zNDjCsDUzJzI3LjIiTiAyMcKwNDEnMDAuMSJF!5e0!3m2!1ssk!2ssk!4v1649265892698!5m2!1ssk!2ssk",
      "text": "<p>Povesť o vzniku Vranova – Z knihy A. Hraboštiak: Skamenená dievka, 1977</p>\n<p>O vranách pri Topli</p>\n<p>Hore Topľou odpradávna viedla stará cesta. Kupci po nej chodievali z uhorskej krajiny do Poľska. Na chrbte aj na vozoch prenášali tovar z jedného konca krajiny na druhý. A kde boli kupci, tovar i peniaze, nikdy nechýbali ani zlodeji a zbojníci, ktorí radšej z hotového brali, ako by boli bývali sami statočnou cestou k dačomu prišli.Nuž veru aj kupcov okolo Tople neraz tak ozbíjali, že sa potom  ďalej poberali s holými rukami. Zbojníčiská sa v tých časoch ľahko kdekoľvek skryli, lebo všade pri riekach i potokoch rástli husté kroviny. A v nich bolo vtáctva, dakde aj celé mrákavy.</p>\n<p>Jedného dňa sa viezol na voze mladší kupec. Vraj bol na trhu v Bardejove a chcel čo najskôr dôjsť do Trebišova, lebo tam ho už iní priatelia- kupci očakávali. Ale nedošiel. Keď bol už ani nie hodinu vzdialený od mesta, zastali mu cestu neznámi chlapi a skričali na neho:</p>\n<p>,,Stoj, človeče, sem dušu alebo dukáty!“ Kupec sa ohradil: ,,A či sa takto patrí, iba tak pre nič za nič pobrať, čo ste si nezarobili?“ Zbojníkov strašne napálila táto reč a jeden z nich, iste ten najhlavnejší , pleskol ho po ústach a ešte zreval: ,,Vidím, že máš veľký jazyk, teraz nebudeš, že si sa staval proti našej vôli.“ Kupec už od tej chvíle ani nevedel, čo sa s ním robí. Zbojníci ho tak omráčili,  že naskutku sa mu zahmlilo v očiach. Tak sa mu potom zazdalo, ako keby padal do velikánskej priepasti. Ktovie, kedy prišiel k sebe kupec, čo ho títo lotri tak doriadili. Keď otvoril oči, nevidel okolo seba nič iba šašinu a husté lesy. Najviac sa však zľakol, keď zvôkol-vôkol krákali veľké vrany. Lenže nie tak zvyčajne ako iné vrany, ale strašne, že mu prechodili po celom tele zimomriavky od hrôzy. Ešte nikde inde tieto vtáky tak neškriekali. No kupcovi iba vtedy studený pot vystúpil na čelo, keď zbadal, že je celý od hlavy po päty zviazaný. Nuž si len pomyslel:</p>\n<p>,,Ak sa teraz nepostavím na nohy, čierne vraniská ma ubodajú i rozvláčia po okolí.“ Kupec sa chcel aj pohnúť, ale mohol iba toľko, čo nohy troška nadvihol. Potom tam znova ležal ako dajaký kus klady. A vrany jednostaj krúžili a škriekali , až mu zalíhalo v ušiach. O chvíľu ho už také myšlienky nadchádzali, že naisto odbíja jeho ostatná hodina. Veď ak mu dakto nepomôže, zahynie hladom. I zadusiť sa môže v takom položení. A darmo bude volať. Pre tie vtáky jeho hlas ďaleko nedôjde. Nuž znova zatvoril oči nevedno, či spal, alebo ležal v bezvedomí.</p>\n<p>Ale predsa sa ešte raz zobudil, lebo zrazu pocítil , že už nie je spútaný a že nielen ruky, ale aj nohy ani čo by mu povolili. Nebol si pritom istý, či sa mu iba sníva, alebo či je ozaj tak, ako cíti. Bál sa otvoriť oči, ale napokon sa predsa len osmelil. A čo videl? Okolo seba svetlo a nad ním usmiaty človek, čo mu vraví: ,,Už som si myslel, že sa ani neprebudíš. Spal si tak tvrdo, ani čo by si už bol nebohý.“</p>\n<p>,,Veď aj mne sa už zdalo, že som skôr taký ako živý,“ zašepkal kupec a díval sa na človeka, čo sa nad neho nakláňal a neprestajne sa mu díval do očí. Tu mu prišlo na um, či sa nebodaj nevrátil dajeden z tých zbojníkov a či ho nechce celkom dobiť, aby nemohol nič rozchýriť‘ medzi ľuďmi, čo s ním porobili. A predsa sa opovážil spýtať: ,,A ty ktože si?“ Či ťa dakto ku mne poslal, alebo si na mňa naďabil iba tak nevoľky?“ A chlap na to:</p>\n<p>,,Bývam v tomto kraji a chytal som ryby. Lenže vrany tak škriekali a krúžili ponad šašiny pri rieke, že som nevydržal, aby som sa nepozrel, či tam dakto neleží. A veru nešiel som nadarmo. Len to neviem odkedy tu ležíš.“ To však nevedel ani kupec. Iba v tom si bol istý, že tento človek mu zratoval život. A potom aj tie vtáky… Keby neboli tak vrieskali, sotva by bol dakto naň naďabil. Aj tie mu veľmi preveľmi pomohli.</p>\n<p>Ale ten človek, čo našiel kupca ležať poviazaného, nepustil ho z rúk ani vtedy, keď už stál na nohách a chcel odísť. Aj mu jednostaj radil, aby nikde nešiel, lebo ďaleko nedôjde, keď je slabý. A dodal: ,,Tento kraj je bohatý. Všetko sa v ňom nájde, čo treba, aby ľudia dobre žili. Tu ostaň, kým prídeš k sebe.“ Kupec poslúchol. Nepobral sa ďalej, ale začal sa zaoberať, či sa dakde nepotulujú zbojníci. No tí sa všetci stratili. Nikde nebolo nič počuť. Iba vtáky švitorili i všelijako nôtili v kroví.</p>\n<p>,,A či ti nebudem na ťarchu, kým si sám dačo zhlobím, žeby som nespal pod holým nebom?“ spýtal sa znova. ,,Oj toho sa ty neboj, čím nás tu bude viac, tým sa budeme lepšie cítiť. Veselšie nám bude aj s planými ľuďmi si skôr dáme rady.“</p>\n<p>Kupec z toho kraja viac neodišiel. Len keď nadol spolu tiahli kupci na vozoch, pristavil jedného a povedal mu: ,,Povedz mojim známym, že domov neprídem. A že možno aj tu ostanem, lebo sa mi vidí tento kraj. Časom nech ma prídu pozrieť. Ľahko ma nájdu, lebo nikde niet toľko vrán ako v tomto kraji.“ Kupec potom naozaj ostal navždy bývať tam, kde ho raz zbojníci ozbíjali. Hneď neďaleko Tople si postavil domček. A ešte aj iní v tento rok k nemu prišli. Tak sa im pri ňom zvidelo, že sa im nechcelo odísť. Nuž si tam postavili aj oni domy. Po rokoch tam vyrástla osada, neskôr aj veľká dedina a potom mesto. A ako domov pribúdalo, menilo sa aj jeho meno. Najprv sa tá osada volala Vrania i Vranie, lebo vraj nikde nebolo toľko vrán ako na okolí tej osady. A keď sa z dediny stalo mesto s murovanými domami, dali mu meno Vranov.</p>\n<p>O tých vranách však ľudia vždy vravievali, ako škriekali a krúžili na tom mieste, kde zbojníci toho kupca orabovali a zviazali.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/povest-o-vzniku-vranova/",
        "en": "https://www.qrlink.sk/new/en/povest-o-vzniku-vranova/",
        "de": "https://www.qrlink.sk/new/de/povest-o-vzniku-vranova/",
        "ru": "https://www.qrlink.sk/new/ru/povest-o-vzniku-vranova/",
        "pl": "https://www.qrlink.sk/new/pl/povest-o-vzniku-vranova/",
        "hu": "https://www.qrlink.sk/new/hu/povest-o-vzniku-vranova/"
      }
    },
    {
      "id": "historia-vranovskej-synagogy",
      "miesto": "vranov",
      "poradie": 11,
      "nazov": "História vranovskej synagógy",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2022/04/Ortodoxn_zidovsk-synag-ga-patrila-k-dominant-m_Vranov-Enhanced-Colorized@2x.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2022/04/Historia-Vranovskej-Sinagogiy.mp3"
      ],
      "galeria": [],
      "gps": null,
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d347.4053338536094!2d21.68392637320189!3d48.89146608114608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4025a83ad902c860!2zNDjCsDUzJzI5LjciTiAyMcKwNDEnMDIuNSJF!5e0!3m2!1ssk!2ssk!4v1649056365899!5m2!1ssk!2ssk",
      "text": "<p>Židovskú synagógu vo Vranove začali stavať v roku 1921. Pozemok síce vranovská ortodoxná židovská náboženská obec zakúpila ešte v roku 1897, no s jej výstavbou začali až podstatne neskôr, z dôvodu nedostatku peňazí na výstavbu dôstojného objektu. Ten sa začal stavať za finančnej pomoci vranovského rodáka a neskôr amerického štátneho občana Mikuláša Schwartza, ktorý naše mesto navštívil po prvej svetovej vojne. Keď videl v akom stave sa nachádzala pôvodná synagóga, rozhodol sa darovať na výstavbu novej 10 tisíc dolárov. Bol to tak veľký obnos peňazí, že okrem novej synagógy postavila vranovská židovská obec aj novú mikvu. V tom čase žilo v našom meste podľa sčítania obyvateľstva 649 židov, ktorí tvorili 28,3 % z celkového počtu 2 282 Vranovčanov.</p>\n<p>Projekt stavby vypracoval architekt Vojtech Šípoš a samotnou realizáciou stavby bola poverená stavebná spoločnosť Huga Kaboša. Na dokončovacích prácach samotnej synagógy a aj pri stavbe kúpeľov v roku 1924 sa podieľala firma Bratia Barkányiovci. K synagóge, ktorá stála na miernom vyvýšení viedli široké schody a celý areál bol oplotený betónovým plotom. Do predsiene synagógy viedli z vonku tri vchody. Z predsiene vpravo aj vľavo viedli schodištia na balkón, kde bolo miesto pre ženy. Archa úmluvy bola umiestnená na východnej strane stavby s vnútornými rozmermi 16 x 16 metrov.</p>\n<p>Z odborného architektonického hľadiska sa táto stavba nedala zaradiť k žiadnemu štýlu tohto obdobia, no svojou majestátnosťou sa vynímala spomedzi okolitých nízkych stavieb. Svojimi vežami, prevyšujúcimi strechu kopuly sa budova majestátne týčila na svahu a bola dobre viditeľná z pohľadu prichádzajúcich od Čemerného do Vranova. Stavba vizuálne priťahovala aj svojimi orientálnymi architektonickými prvkami, ktoré zdobili fasádu stien zvonku aj v interiéri. Konštrukčne pôsobivú kopulu staticky držali štyri zväzkovité stĺpy. Členený priestor pôsobil ako trojlodie so strednou loďou ukončenou veľkým kruhovým oknom so šesťcípou hviezdou. Taký istý motív bol aj na priečelí budovy, ktorej vonkajšie rozmery boli atypické. Vonkajšia šírka stavby v zadnej časti bol 19 metrov, v prednej časti 21 metrov, dĺžka objektu bola 24 metrov a maximálna výška 11 metrov. K synagóge patril aj obradný židovský kúpeľ – mikva a byt kúpeľníka, ktorým v roku 1941 bol Eizig Bornstein. Neďaleko stavby synagógy bola aj židovská škola ortodoxnej náboženskej obce vo Vranove. V spomínanom roku 1941 v nej vyučovali náboženstvo Herman a Sálomon Sternovci. Za školou bol byt rabína a židovské jatky. Po dokončení sa synagóga stala centrom náboženského a kultúrneho života vranovských židov. Posledným rabínom ortodoxných židov bol Lazár Ehrengruber a chasidských Eduard Halberstam. Kostolníkom bol Mór Rosenwasser. Bohoslužby sa konali každý deň večer a v sobotu ráno. Muselo však na nich byť prítomných minimálne desať dospelých mužov. Objekt slúžil svojmu účelu ešte krátko po druhej svetovej vojne, no neskôr sa využíval iba ako sklad tovaru a nakoniec nebol žiaden záujemca, ktorý by využíval tieto priestory, preto stavba začala chátrať. Poškodzovali ju aj hrajúce sa deti a mládež. Keď sa v roku 1975 začalo projektovať na tomto mieste nové Sídlisko Okulka, naplánovalo sa aj zbúranie synagógy, čo z dnešného pohľadu vidíme ako veľkú chybu. Objekt, ktorý sa ešte dal zrekonštruovať, mohol slúžiť dnešnej aj budúcim generáciám ako multifunkčné kultúrne zariadenie s vynikajúcou akustikou. Žiaľ riadeným odstrelom bola stavba zbúraná v septembri 1982.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/historia-vranovskej-synagogy/",
        "en": "https://www.qrlink.sk/new/en/historia-vranovskej-synagogy/",
        "de": "https://www.qrlink.sk/new/de/historia-vranovskej-synagogy/",
        "ru": "https://www.qrlink.sk/new/ru/historia-vranovskej-synagogy/",
        "pl": "https://www.qrlink.sk/new/pl/historia-vranovskej-synagogy/",
        "hu": "https://www.qrlink.sk/new/hu/historia-vranovskej-synagogy/"
      }
    },
    {
      "id": "susosie-sv-jana-nepomuckeho-panny-marie-s-jeziskom",
      "miesto": "vranov",
      "poradie": 12,
      "nazov": "Súsošie sv. Jána Nepomuckého, Panny Márie s Ježiškom",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2024/11/socha-nepomuckého.jpeg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2024/11/01-susosie.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 49.02074150738056,
        "lng": 21.2813050192186
      },
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2616.466150150564!2d21.278702275530243!3d49.02074057135459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473e935661e314c7%3A0xc25794fcd92c7ec3!2sSocha%20sv.%20J%C3%A1na%20Nepomuck%C3%A9ho!5e0!3m2!1ssk!2ssk!4v1731923325421!5m2!1ssk!2ssk",
      "text": "<p>Kamenné barokové súsošie pochádza z roku 1770 a zobrazuje Pannu Máriu s Ježiškom. Pred ňou je kľačiaca postava sv. Jána Nepomuckého. Umiestnené je na vysokom kamennom podstavci a je ohradené kamennou balustrádou. Časovo i slohovo korešponduje s barokovými úpravami  kostola aj kláštora pavlínov. Keďže výzdoba v kostole je dielom majstra Hartmana je pravdepodobné, že aj toto súsošie je z jeho dielne. Samotné súsošie je svojim prevedením unikátne, pretože sv. Ján Nepomucký  býva zobrazovaný obyčajne ako samostatná postava. Súsošie je vysoké 220 cm. Plastika bola v roku 1986 zaradená do zoznamu kultúrnych pamiatok.</p>\n<p>Z dôvodu jeho poškodenia, ktoré spôsobili poveternostné vplyvy, bolo súsošie v roku 2001 akademickým sochárom Ondrejom Dzúrikom zrekonštruované a po skončení prác bolo  umiestnené v Kostole sv. Františka z Assisi. Na pôvodné miesto bola umiestnená jeho kópia, ktorej autorom je vranovský rodák akademický sochár Michal Czupil.</p>\n<p>Na území mesta a okresu sa nachádzajú aj sólové sochy tohto svätca. Jedna z nich je umiestnená na Ulici duklianskych hrdinov, ďalšia v obci Sedliská pod hradom Čičva pri rieke Ondava.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/susosie-sv-jana-nepomuckeho-panny-marie-s-jeziskom/",
        "en": "https://www.qrlink.sk/new/en/susosie-sv-jana-nepomuckeho-panny-marie-s-jeziskom/",
        "de": "https://www.qrlink.sk/new/de/susosie-sv-jana-nepomuckeho-panny-marie-s-jeziskom/",
        "ru": "https://www.qrlink.sk/new/ru/susosie-sv-jana-nepomuckeho-panny-marie-s-jeziskom/",
        "pl": "https://www.qrlink.sk/new/pl/susosie-sv-jana-nepomuckeho-panny-marie-s-jeziskom/",
        "hu": "https://www.qrlink.sk/new/hu/susosie-sv-jana-nepomuckeho-panny-marie-s-jeziskom/"
      }
    },
    {
      "id": "cyril-daxner-daxnerov-dom",
      "miesto": "vranov",
      "poradie": 13,
      "nazov": "Cyril Daxner – Daxnerov dom",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2024/11/daxner1.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2024/11/02-daxner.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 48.88860140720319,
        "lng": 21.685508182597058
      },
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2623.4088462168356!2d21.682901075520157!3d48.88854497133621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDjCsDUzJzE4LjgiTiAyMcKwNDEnMDcuNyJF!5e0!3m2!1ssk!2ssk!4v1731931482681!5m2!1ssk!2ssk",
      "text": "<p>Cyril Daxner bol slovenský právnik, dôstojník, novinár, národný a kresťanský aktivista, účastník v Malej vojne, organizátor Slovenského národného povstania na východnom Slovensku. Starý otec Štefan Marko Daxner de Tótzabar (1822 – 1891) bol spoluzakladateľ Matice slovenskej, jeden z predstaviteľov Slovenského povstania 1848 – 1849 a tvorca politického  programu aktuálneho až do roku 1918. Zapísal sa do dejín ako obranca Evanjelickej cirkvi a. v. pred maďarizáciou na Gemeri a Honte. Otec bol Ivan Daxner (1860 – 1935), ktorý má priamu spoluúčasť na vytvorení Československej republiky a bol tajomníkom Slovenskej ligy. Podpisoval Clevelandskú a Pittsburskú dohodu, teda dokumenty vedúce k vzniku Československej republiky. Prastarý otec bol Karol Kuzmány, 1. historický podpredseda Matice slovenskej a superintendent Evanjelickej cirkvi augsburského vyznania. Medzi blízkych príbuzných napr. patrí Janko Jesenský (1874 – 1945) spisovateľ, politik a prvý slovenský nositeľ titulu národný umelec a taktiež Juraj Janoška (1882 – 1945) zast. župan, určitý čas predseda Slovenskej národnej strany, účastník Slovenského národného povstania, ktorý zomrel tragicky v roku 1945.</p>\n<p>Cyril Svetozár Daxner sa narodil 20. júla 1904 v Tisovci. Už v detstve prejavoval záujem o národné veci. Maturoval na Gymnáziu v Turčianskom sv. Martine a pokračoval v štúdiu práva na Univerzite Komenského v Bratislave, ktoré ukončil roku 1931 Po získaní doktorátu z práva pracoval aj ako redaktor Národných novín v Martine.</p>\n<p>Dejinný význam Cyrila Daxnera je v troch oblastiach: v aktívnej účasti v bojoch počas Malej vojny (1939), v organizácií SNP na východnom Slovensku a v kultúrnej i cirkevnej stope, ktorú zanechal v hornozemplínskej oblasti. Vojenskú prezenčnú službu totiž vykonával ako dôstojník delostrelectva v meste Vranov nad Topľou. Po zložení advokátskej skúšky si tu v roku 1934 otvoril kanceláriu.</p>\n<p>Cyril Daxner bol známy originálnymi názormi, spoločenským, cirkevným životom, advokátskou praxou a pomocou obyčajným ľuďom. Všímal si aj európske politické dianie, čomu mu napomáhali jazykové znalosti. Ovládal ruštinu, maďarčinu a nemčinu. Cyril Daxner nepatril k žiadnemu politickému zoskupeniu a jeho jedinou prioritou bola obrana národných práv Slovákov. Bol jednoznačne proti nacizmu a pangermanizmu. V marci 1939 po maďarskom obsadení Podkarpatskej Rusi sa dobrovoľne hlási na veliteľstve v Prešove u Augustína Malára, ktorý prevzal velenie nad VI. zborom zabezpečujúcim obranu východného Slovenska. Keď 23. marca 1939 vpadli maďarské jednotky z východu na územie Slovenska prevzal Daxner, ako nadporučík delostrelectva velenie nad útočnou skupinou zloženou z niekoľkých obrnených automobilov OA vz. 30 a vyrazil proti postupujúcim maďarským jednotkám. Počas bojov osobne obsluhoval jedno obrnené vozidlo a po zásahu granátom len o vlások unikol smrti. Jeho počiny ho zaradili k hrdinom Malej vojny (1939). K jeho skupine sa pridávajú aj mladí dobrovoľníci z prešovského telegrafného práporu. Daxner a jeho jednotka je nasadená do prudkých bojov v okolí Nižnej Rybnice. Po vojne pôsobil ako advokát v meste Vranov nad Topľou.</p>\n<p>V nasledujúcom období sa Cyril Daxner zapojil do organizovania protinemeckého odboja a bol kľúčovou postavou občianskej rezistencie na východnom Slovensku so spojením na Bratislavu. Organizoval spojenia s občianskymi skupinami v Humennom, Bardejove, Stropkove. Osobne spolupracoval s Viliamom Žingorom a Ľudovítom Kukorellim. Bol spoluorganizátorom vranovskej partizánskej skupiny známej pod názvom Pučkov. Počas represívnej akcie na východnom Slovensku bol 19. apríla 1944 na základe udania konfidenta Ústredne štátnej bezpečnosti zatknutý spolu s manželkou. Od 15. mája 1944 bol väznený v Ilave a neskôr v Bratislave. Gestapo ho vo februári 1945 odvlieklo do koncentračného tábora Mauthausen-Gusen.</p>\n<p>Po oslobodení chorý a podvyživený opúšťa loďou Rakúsko a vracia sa do Bratislavy 24. mája 1945. Pokúša sa dostať k rodinnému príbuznému Jankovi Jesenskému, no od únavy zaspal na ulici a z chladného počasia dostal zápal pľúc. Lekár prof. Sumbol sa ho snažil do poslednej chvíle zachrániť. Cyril Svetozár Daxner zomiera v nemocnici v Bratislave na Hlbokej ceste 7. júna 1945 a je pochovaný na cintoríne pri Kozej bráne. Roku 1945 in memoriam vyznamenaný Československým vojnovým krížom 1939; roku 1946 in memoriam Radom SNP I.tr.; Roku 1939 vyznamenaný Medailou za hrdinstvo a Pamätnou medailou za obranu Slovenska v marci 1939 počas Malej vojny. Pamiatku na jeho nevšedný život udržiava v súčasnosti Miestny odbor Matice slovenskej vo Vranove nad Topľou.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/cyril-daxner-daxnerov-dom/",
        "en": "https://www.qrlink.sk/new/en/cyril-daxner-daxnerov-dom/",
        "de": "https://www.qrlink.sk/new/de/cyril-daxner-daxnerov-dom/",
        "ru": "https://www.qrlink.sk/new/ru/cyril-daxner-daxnerov-dom/",
        "pl": "https://www.qrlink.sk/new/pl/cyril-daxner-daxnerov-dom/",
        "hu": "https://www.qrlink.sk/new/hu/cyril-daxner-daxnerov-dom/"
      }
    },
    {
      "id": "pamatnik-hrdinom-a-bojovnikom-proti-fasizmu-a-pamatnik-oslobodenia-mesta",
      "miesto": "vranov",
      "poradie": 14,
      "nazov": "Pamätník hrdinom a bojovníkom proti fašizmu a Pamätník oslobodenia mesta",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2024/11/pamatník.jpg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2024/11/03-pamatnik.mp3"
      ],
      "galeria": [],
      "gps": {
        "lat": 49.02071946389593,
        "lng": 21.281277196100014
      },
      "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.420241723069!2d21.682443875520082!3d48.88832777133617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ec900353b3e53%3A0x41cf653912560f55!2sPam%C3%A4tn%C3%ADk%20%22oslobodenia%22%20mesta%20Vranov%20nad%20Top%C4%BEou!5e0!3m2!1ssk!2ssk!4v1731923710877!5m2!1ssk!2ssk",
      "text": "<p>V centre Vranova nad Topľou sú symbolicky vedľa seba umiestnené dva pamätníky venované oslobodeniu nášho mesta, ktoré sa odohrali v rôznych historických obdobiach, ale zhodou okolností v takmer rovnaký deň. Ide o Pamätník hrdinom a bojovníkom proti fašizmu, ktorý je umeleckým stvárnením oslobodenia Vranova nad Topľou 18. januára 1945 od fašistickej okupácie. Druhým je pamätná tabuľa pripomínajúca ešte staršiu dejinnú udalosť a to oslobodenie mesta 19. januára 1919 od maďarskej nadvlády a pričlenenie Vranova nad Topľou do nového Československého štátu. Tento pamätník osadila Matica slovenská roku 2019 a pripomína prelomovú udalosť, ktorá sa  odohrala pred vyše stopiatimi rokmi. Text na pamätnej tabuli je venovaný príslušníkom 4. stotiny 1. práporu 1. pluku Slovenskej Slobody, ktorí zo smeru od Prešova vstúpili do mesta 19. januára 1919 a tým oslobodili Vranov nad Topľou i zaviedli československú štátnu správu. Ukončila sa tým tisícročná dejinná kapitola spojená s Uhorskom a nastúpili sme novú cestu ku slobodnej slovenskej a demokratickej štátnosti.</p>\n<p>Nesmie sa zabúdať, že za obrodu slovenského národa po desaťročiach tvrdej maďarizácie, bojovali na frontoch 1. svetovej vojny aj viacerí Vranovčania v radoch česko-slovenských légií. Výsledkom rozpadu Rakúsko-Uhorska bolo celkové oslobodenie slovenského národa a s tým spojený návrat slovenčiny do škôl, úradov, ale aj celkového života našich predkov. Vďaka tejto kultúrnej i politickej obrode sa z okolitých obcí prisťahovalo mnoho Slovákov do Vranova a uplatnili sa vo vedení verejnej správy mladej Československej republiky. Pred tým to bolo kvôli polofeudálnym uhorským pomerom veľmi ťažké.</p>\n<p>Druhé oslobodenie medzi verejnosťou viac známe sa odohralo roku 1945. Vojská sovietskej Červenej armády – 4. ukrajinského frontu, pod vedením armádneho generála Ivana Jefimoviča Petrova, ktorého súčasťou bola 1. gardová armáda generálplukovníka Grečka a 18. armáda generálmajora Gastiloviča, priniesli do Vranova mier. Ako prvý vstúpil do Vranova ráno o deviatej hodine sovietsky tank č. 27 a vojaci tankovej roty pod vedením podplukovníka Ivana Nikolajeviča Fedana, ktorá bola súčasť 107. streleckého zboru generálporučíka Gordejeva  patriaceho do spomínanej 1. gardovej armády. Stalo sa tak v priestore terajšieho Sídliska 1. mája. V priebehu nasledujúcich dvoch dní 18. až 19. januára postupovali sovietske jednotky bez väčšieho odporu nemeckých jednotiek smerom k Prešovu a oslobodzovali jednu obec za druhou.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/pamatnik-hrdinom-a-bojovnikom-proti-fasizmu-a-pamatnik-oslobodenia-mesta/",
        "en": "https://www.qrlink.sk/new/en/pamatnik-hrdinom-a-bojovnikom-proti-fasizmu-a-pamatnik-oslobodenia-mesta/",
        "de": "https://www.qrlink.sk/new/de/pamatnik-hrdinom-a-bojovnikom-proti-fasizmu-a-pamatnik-oslobodenia-mesta/",
        "ru": "https://www.qrlink.sk/new/ru/pamatnik-hrdinom-a-bojovnikom-proti-fasizmu-a-pamatnik-oslobodenia-mesta/",
        "pl": "https://www.qrlink.sk/new/pl/pamatnik-hrdinom-a-bojovnikom-proti-fasizmu-a-pamatnik-oslobodenia-mesta/",
        "hu": "https://www.qrlink.sk/new/hu/pamatnik-hrdinom-a-bojovnikom-proti-fasizmu-a-pamatnik-oslobodenia-mesta/"
      }
    },
    {
      "id": "qr-sprievodca-zvonica-hrusove",
      "miesto": "zvonica-hrusove",
      "poradie": 1,
      "nazov": "Zvonica v Hrušovom",
      "popis": "",
      "cover": "https://www.qrlink.sk/new/wp-content/uploads/2025/08/zvonica-hrusove.jpeg",
      "audio": [
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/zvonica-hrusove.mp3"
      ],
      "galeria": [
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/2025-08-18_13h09_48.png",
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/Hrušovská-zvonica_hodiny-min.jpg",
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/Hrušovská-zvonica_rekonštrukčné-práce_2025-2-min.jpg",
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/Hrušovská-zvonica_rekonštrukčné-práce_2025-3-min.jpg",
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/Hrušovská-zvonica_rekonštrukčné-práce_2025-4-min.jpg",
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/Hrušovská-zvonica_rekonštrukčné-práce_2025-5-min.jpg",
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/Hrušovská-zvonica_rekonštrukčné-práce_2025-6-min.jpg",
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/Hrušovská-zvonica_rekonštrukčné-práce_2025-7-min.jpg",
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/Hrušovská-zvonica_strecha-1-min.jpg",
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/Hrušovská-zvonica_strecha-2-min.jpg",
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/2_Hrušovská-zvonica-hodiny-s-24-hodinovým-ciferníkom_3-min.jpg",
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/3_Hrušovská-zvonica-hodiny-s-24-hodinovým-ciferníkom-min.jpg",
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/Hrušovská-zvonica_nápis-min.jpg",
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/Hrušovská-zvonica_rekonštrukcia-2025-1-min.jpg",
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/Hrušovská-zvonica_rekonštrukcia-2025-2-min.jpg",
        "https://www.qrlink.sk/new/wp-content/uploads/2025/08/Hrušovská-zvonica_rekonštrukčné-práce_2025-1-min.jpg"
      ],
      "gps": {
        "lat": 48.775257658652436,
        "lng": 17.753408298101814
      },
      "mapEmbed": "https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1s48.775257658652436,17.753408298101814!6i16!3m1!1ssk!5m1!1ssk",
      "text": "<p>Zvonica v Hrušovom\nPríbeh historickej dominanty a slovenského unikátu</p>\n<p>História hrušovského kostolíka a zvonice\nKostolík v Hrušovom, ktorý sa podľa Jozefa Ľudovíta Holubyho mohol stavať v rovnakom období ako haluzický kostolík (okolo roku 1240), bol v skutočnosti podľa archeologického prieskumu z roku 1997 postavený v gotickom štýle až v 14. storočí. Odmietnutý bol aj husitský pôvod stavby: v listine z roku 1436 sa hrušovský kostol nespomína, rovnako ani v zápise z cirkevnej vizitácie z roku 1560. Prvá konkrétna zmienka pochádza až z roku 1692, keď evanjelický farár Peták pokrstil dieťa práve v tomto kostolíku. V roku 1705 bol kostol používaný evanjelikmi a ponechaný im, no podľa Ladislava Vargu ho v roku 1708 zničili Rákócziho povstalci a už nebol nikdy opravený.</p>\n<p>Napriek tomu sa kostolík ešte objavuje ako funkčný v neskoršom období — pod ním sa nachádzala krypta šľachtickej rodiny Beňovských. Od roku 1733 už patril katolíckej cirkvi. V roku 1788 sa tu konali katolícke omše každú tretiu nedeľu. Kostolík bol skromne zariadený, mal dva drevené chóry. Okolo roku 1790 bohoslužby zanikli a budova chátrala až do úplných ruín. V roku 1859 sa už podľa Jozefa Beneša nachádzal 70 rokov v ruinách. V roku 1879 bol rozobraný, jeho materiál poslúžil na výstavbu katolíckej školy v Dolných Bzinciach. Z kostolíka bol zvon prenesený na novú obecnú zvonicu.</p>\n<p>Zvonica v Hrušovom tak existuje od roku 1879.</p>\n<p>Zvonárstvo a modernizácia zvonenia\nZvony majú v každej farnosti a cirkevnom zbore dôležitú úlohu: zvolávajú ľudí na bohoslužby, oznamujú významné udalosti i smútok. Zvonári v minulosti zvonili ručne každé ráno, na obed, večer a počas sviatkov či pohrebov. Zvonárstvo bolo zodpovedné a platené remeslo, no novú generáciu už nelákalo a vyžadovalo modernizáciu.</p>\n<p>Bzinský evanjelický farár ThDr. Igor Kišš sa rozhodol posunúť zvonenie na vyššiu úroveň a obrátil sa na Pavla Mrázika, strojného zámočníka. Spolu navštívili cirkevný zbor vo Vrútkach, kde už mali zvonenie elektrifikované. Inšpirovaný tamojším systémom, Mrázik navrhol a zrealizoval ešte vylepšenú konštrukciu elektrického pohonu zvonov.</p>\n<p>Otec Pavla Mrázika, Martin Mrázik, po prvej svetovej vojne zorganizoval nadstavbu zvonice o jedno poschodie. Vďaka spoločnému úsiliu obce a finančným príspevkom od obyvateľov sa podarilo zakúpiť nový veľký zvon, keďže pôvodný bol za vojny skonfiškovaný a pretavený na náboje.</p>\n<p>Po štyridsiatich rokoch kurátor Pavel Mrázik so svojimi pomocníkmi zhotovil na všetkých poschodiach zvonice nové drevené podlahy a schody. Práve v tomto období začal pripravovať elektrifikované ovládanie zvonov. V roku 1990 sa v jeho dielni začali montovať prvé elektrické pohony. Na projekte sa finančne podieľala celá obec.</p>\n<p>Prvé elektrické zvonenie bolo úspešne inštalované na veži evanjelického kostola v Bzinciach, nasledovala Lubina a ďalšie obce – Miškech Dedinka, Cetuna, Bošáca a ďalšie. Majster Mrázik elektrifikoval v regióne až 39 zvoníc, pričom mu pomáhal syn Ivan a ďalší odborníci.</p>\n<p>Unikátne zvonicové hodiny\nS rodinou Mrázikovcov je zvonica v Hrušovom spätá už viac než sto rokov – nadstavba z roku 1918, zakúpený zvon a neskôr unikátne hodiny s 24-hodinovým ciferníkom, ktoré sú slovenskou raritou. Pavel Mrázik, vyučený strojár, zostrojil mnoho zaujímavých prístrojov, medzi nimi aj „stolný vesmír“. Hodiny s netradičným ciferníkom začal konštruovať po tom, ako ho zmiatlo hlásenie času v rádiu. Chcel, aby ciferník zobrazoval 24 hodín – tak ako má deň.</p>\n<p>V roku 1992 sa rozbehli dve veľké hodinové ručičky na zvonici, pričom ciferník má priemer jeden meter a čísla od 1 po 24. Hodinový mechanizmus konštruoval viac než desať rokov a všetko dôsledne vypočítal a navrhol. Hodiny fungovali bez väčších problémov až do smrti majstra Mrázika v roku 2007. Potom sa na dlhých osemnásť rokov zastavili. Po opravách u niekoľkých hodinárov a dôkladnom premazaní sa však opäť vrátili na svoje miesto a dnes zdobia zvonicu v Hrušovom.</p>\n<p>Najvýznamnejšie medzníky zvonice v Hrušovom</p>\n<p>1918: Nadstavba zvonice o jedno podlažie, kúpa veľkého zvona\n1990: Zavedenie elektrického zvonenia\n1992: Inštalácia unikátnych hodín s 24-hodinovým ciferníkom\n2025: Rekonštrukcia zvonice v rámci projektu Interreg Slovensko-Česko</p>\n<p>Posolstvo a význam\nZvonica v Hrušovom je pamätníkom tvorivej remeselnej práce, občianskej solidarity a technickej inovácie. Je zároveň symbolom premeny – od ručne ovládanej zvonice až po unikát s elektrickým pohonom a netradičnými hodinami. Svojou históriou, príbehmi a nezameniteľnou siluetou zostáva dôležitou dominantou krajiny a svedkom premien doby.</p>\n<p>Mapa – GPS (48.775257658652436, 17.753408298101814)</p>\n<p>Pre spustenie navigácie otvorte mapu v samostatnom okne.</p>",
      "povodnaUrl": {
        "sk": "https://www.qrlink.sk/new/castles/qr-sprievodca-zvonica-hrusove/",
        "en": "https://www.qrlink.sk/new/en/castles/qr-sprievodca-zvonica-hrusove/",
        "de": "https://www.qrlink.sk/new/de/castles/qr-sprievodca-zvonica-hrusove/",
        "ru": "https://www.qrlink.sk/new/ru/castles/qr-sprievodca-zvonica-hrusove/",
        "pl": "https://www.qrlink.sk/new/pl/castles/qr-sprievodca-zvonica-hrusove/",
        "hu": "https://www.qrlink.sk/new/hu/castles/qr-sprievodca-zvonica-hrusove/"
      }
    }
  ],
  "kontakt": {
    "firma": "ARDSYSTÉM, s.r.o.",
    "adresa": [
      "Pavla Mudroňa 5",
      "010 01 Žilina"
    ],
    "tel": "+421 41 700 25 01",
    "email": "ard@ard.sk",
    "web": "https://www.ardsystem.sk",
    "ico": "36 397 563",
    "dic": "2020105989",
    "icdph": "SK2020105989",
    "social": {
      "facebook": "https://www.facebook.com",
      "instagram": "https://www.instagram.com",
      "linkedin": "https://www.linkedin.com"
    }
  }
};

const destinations = [
  {
    city: "Kotor",
    country: "Montenegro",
    region: "Bucht von Kotor",
    searchQuery: "Kotor Bucht Montenegro",
    airport: "Tivat oder Podgorica",
    vibes: ["strand", "stadt", "berge", "natur", "kultur"],
    hidden: 92,
    comfort: 72,
    daily: 48, living: { groceries: 24, restaurants: 34, localTransport: 7, activities: 14 },
    lodging: { airbnb: 78, hotel: 96, pension: 62 },
    flightBase: 210,
    season: 1.24,
    shoulderMonths: [5, 6, 9, 10],
    touristLoad: 68,
    kitchenSavings: 14,
    localSavings: 12,
    nearbyAirport: true,
    unusual: {
      label: "Segel- oder Bootstag in der Bucht",
      search: "Kotor Montenegro Segelboot Bootsausflug Unterkunft",
      fit: 88,
      note: "spannend, wenn der Urlaub mehr nach kleiner Expedition als nach Standard-Strandhotel wirken soll",
    },
    why: "Dramatische Bucht, alte Stadtmauern, Wandern direkt über dem Wasser und oft günstiger als kroatische Klassiker.",
  },
  {
    city: "Petrovac & Budva Riviera",
    country: "Montenegro",
    region: "Zentrale Adriaküste",
    searchQuery: "Petrovac Budva Riviera Montenegro",
    airport: "Tivat oder Podgorica",
    vibes: ["strand", "stadt", "natur", "essen"],
    hidden: 76,
    comfort: 70,
    daily: 46, living: { groceries: 23, restaurants: 33, localTransport: 7, activities: 13 },
    lodging: { airbnb: 72, hotel: 92, pension: 58 },
    flightBase: 205,
    season: 1.28,
    shoulderMonths: [5, 6, 9, 10],
    touristLoad: 74,
    kitchenSavings: 13,
    localSavings: 11,
    nearbyAirport: true,
    why: "Mehr klassischer Strandurlaub als Kotor: Petrovac ist ruhiger, Budva lebendiger. Gut, wenn Wasser und einfache Infrastruktur wichtiger sind als Geheimtipp pur.",
  },
  {
    city: "Ulcinj & Ada Bojana",
    country: "Montenegro",
    region: "Südküste",
    searchQuery: "Ulcinj Ada Bojana Montenegro",
    airport: "Podgorica oder Tivat",
    vibes: ["strand", "natur", "essen"],
    hidden: 88,
    comfort: 62,
    daily: 40, living: { groceries: 20, restaurants: 28, localTransport: 6, activities: 11 },
    lodging: { airbnb: 58, hotel: 78, pension: 48 },
    flightBase: 205,
    season: 1.22,
    shoulderMonths: [5, 6, 9, 10],
    touristLoad: 50,
    kitchenSavings: 12,
    localSavings: 12,
    nearbyAirport: false,
    unusual: {
      label: "Flusshuette oder Kite-Camp bei Ada Bojana",
      search: "Ada Bojana Montenegro river house kite camp Unterkunft",
      fit: 92,
      note: "ungewöhnlicher als klassischer Badeort, oft mit einfachen Unterkünften direkt am Wasser",
    },
    why: "Langer Sandstrand, Kite-/Naturgefühl und oft niedrigere Unterkunftspreise. Spannend, wenn Montenegro nicht wie Postkarten-Kotor aussehen soll.",
  },
  {
    city: "Durmitor & Žabljak",
    country: "Montenegro",
    region: "Berge und Nationalpark",
    searchQuery: "Žabljak Durmitor Montenegro",
    airport: "Podgorica",
    vibes: ["berge", "natur", "aktiv"],
    hidden: 86,
    comfort: 64,
    daily: 38, living: { groceries: 19, restaurants: 27, localTransport: 5, activities: 12 },
    lodging: { airbnb: 54, hotel: 76, pension: 46 },
    flightBase: 205,
    season: 1.08,
    shoulderMonths: [5, 6, 9],
    touristLoad: 42,
    kitchenSavings: 11,
    localSavings: 10,
    nearbyAirport: false,
    ski: { resort: "Savin Kuk / Durmitor", pass: 24, rental: 18, transfer: 22, snow: 58, terrain: 48, beginner: 62 },
    unusual: {
      label: "Berghuette und Schluchten-Abenteuer",
      search: "Žabljak Durmitor mountain cabin rafting Montenegro",
      fit: 85,
      note: "fuer Wildnis, Seen und einfache Huetten statt Strandroute",
    },
    why: "Ganz anderes Montenegro: Schluchten, Seen und Berge statt Küste. Sehr guter Gegenwert für Aktivurlaub, aber ohne klassische Strandlogik.",
  },
  {
    city: "Bar & Stari Bar",
    country: "Montenegro",
    region: "Südliche Küste mit Bahnanschluss",
    searchQuery: "Bar Stari Bar Montenegro",
    airport: "Podgorica oder Tivat",
    vibes: ["strand", "stadt", "kultur", "essen"],
    hidden: 82,
    comfort: 66,
    daily: 42, living: { groceries: 21, restaurants: 30, localTransport: 6, activities: 12 },
    lodging: { airbnb: 62, hotel: 84, pension: 52 },
    flightBase: 205,
    season: 1.18,
    shoulderMonths: [5, 6, 9, 10],
    touristLoad: 48,
    kitchenSavings: 12,
    localSavings: 11,
    nearbyAirport: false,
    why: "Praktischer, weniger glamourös und oft günstiger als die bekannten Küstenorte. Interessant, wenn Preis, Alltag und Ausflüge wichtiger sind als Instagram-Lage.",
  },
  {
    city: "Ohrid",
    country: "Nordmazedonien",
    airport: "Ohrid oder Skopje",
    vibes: ["strand", "stadt", "natur", "kultur"],
    hidden: 94,
    comfort: 66,
    daily: 34, living: { groceries: 16, restaurants: 22, localTransport: 4, activities: 9 },
    lodging: { airbnb: 48, hotel: 68, pension: 42 },
    flightBase: 190,
    season: 1.1,
    shoulderMonths: [5, 6, 9],
    touristLoad: 42,
    kitchenSavings: 10,
    localSavings: 9,
    nearbyAirport: true,
    why: "See statt Meer, UNESCO-Altstadt, sehr gute Preise und ein Gefühl von Südeuropa ohne Massenroute.",
  },
  {
    city: "Gjirokaster & Himara",
    country: "Albanien",
    airport: "Tirana",
    vibes: ["strand", "berge", "natur", "kultur", "essen"],
    hidden: 90,
    comfort: 58,
    daily: 38, living: { groceries: 17, restaurants: 24, localTransport: 5, activities: 10 },
    lodging: { airbnb: 55, hotel: 72, pension: 44 },
    flightBase: 175,
    season: 1.32,
    shoulderMonths: [5, 6, 9, 10],
    touristLoad: 52,
    kitchenSavings: 12,
    localSavings: 11,
    nearbyAirport: false,
    why: "Berge, osmanische Steinstadt und Riviera in einer Reise. Sehr stark, wenn du Strand und Kultur mischen willst.",
  },
  {
    city: "Ponta Delgada",
    country: "Portugal",
    airport: "Ponta Delgada",
    vibes: ["strand", "berge", "natur", "essen"],
    hidden: 78,
    comfort: 76,
    daily: 56, living: { groceries: 32, restaurants: 42, localTransport: 8, activities: 18 },
    lodging: { airbnb: 86, hotel: 112, pension: 74 },
    flightBase: 285,
    season: 1.18,
    shoulderMonths: [4, 5, 9, 10],
    touristLoad: 55,
    kitchenSavings: 16,
    localSavings: 14,
    nearbyAirport: false,
    why: "Azoren-Gruen, Kraterseen, heiße Quellen und Atlantik. Weniger klassisch als Madeira, aber sehr belohnend.",
  },
  {
    city: "Tbilisi",
    country: "Georgien",
    airport: "Tbilisi",
    vibes: ["stadt", "berge", "kultur", "essen"],
    hidden: 88,
    comfort: 70,
    daily: 36, living: { groceries: 15, restaurants: 23, localTransport: 4, activities: 12 },
    lodging: { airbnb: 52, hotel: 78, pension: 45 },
    flightBase: 260,
    season: 1.05,
    shoulderMonths: [4, 5, 6, 9, 10],
    touristLoad: 38,
    kitchenSavings: 9,
    localSavings: 10,
    nearbyAirport: false,
    ski: { resort: "Gudauri", pass: 32, rental: 22, transfer: 28, snow: 76, terrain: 74, beginner: 58 },
    why: "Fantastisches Essen, alte Viertel, Schwefelbaeder und Tagestrips in den Kaukasus. Preis-Leistung ist stark.",
  },
  {
    city: "Lucca",
    country: "Italien",
    airport: "Pisa oder Florenz",
    vibes: ["stadt", "kultur", "essen"],
    hidden: 70,
    comfort: 82,
    daily: 72, living: { groceries: 38, restaurants: 55, localTransport: 9, activities: 22 },
    lodging: { airbnb: 98, hotel: 126, pension: 86 },
    flightBase: 155,
    season: 1.22,
    shoulderMonths: [4, 5, 9, 10],
    touristLoad: 66,
    kitchenSavings: 18,
    localSavings: 15,
    nearbyAirport: true,
    why: "Toskana ohne Florenz-Tempo: Stadtmauer, gutes Essen, Zugnaehe zu Pisa und Meer.",
  },
  {
    city: "Leipzig",
    country: "Deutschland",
    airport: "Leipzig/Halle oder Berlin",
    vibes: ["stadt", "kultur", "essen"],
    hidden: 68,
    comfort: 82,
    daily: 58, living: { groceries: 31, restaurants: 44, localTransport: 8, activities: 18 },
    lodging: { airbnb: 88, hotel: 118, pension: 78 },
    flightBase: 95,
    season: 1.12,
    shoulderMonths: [3, 4, 5, 9, 10, 11],
    touristLoad: 52,
    kitchenSavings: 12,
    localSavings: 13,
    nearbyAirport: true,
    why: "Stark für kurze Städtereisen: gute Bahnoptionen, Musik, Cafés, Seen im Umland und oft fairere Preise als die ganz großen Klassiker.",
  },
  {
    city: "Dresden",
    country: "Deutschland",
    airport: "Dresden oder Berlin",
    vibes: ["stadt", "kultur", "essen", "natur"],
    hidden: 62,
    comfort: 82,
    daily: 60, living: { groceries: 32, restaurants: 46, localTransport: 8, activities: 20 },
    lodging: { airbnb: 92, hotel: 122, pension: 82 },
    flightBase: 98,
    season: 1.16,
    shoulderMonths: [3, 4, 5, 9, 10, 11],
    touristLoad: 60,
    kitchenSavings: 12,
    localSavings: 12,
    nearbyAirport: true,
    why: "Kultur pro Euro ist hier ziemlich stark: Altstadt, Elbe, Museen und Sächsische Schweiz als Aktiv-Option, ohne lange Anreise.",
  },
  {
    city: "Hamburg & Lübeck",
    country: "Deutschland",
    airport: "Hamburg",
    vibes: ["stadt", "kultur", "essen", "strand"],
    hidden: 52,
    comfort: 86,
    daily: 76, living: { groceries: 39, restaurants: 58, localTransport: 10, activities: 24 },
    lodging: { airbnb: 125, hotel: 158, pension: 108 },
    flightBase: 110,
    season: 1.22,
    shoulderMonths: [3, 4, 5, 9, 10, 11],
    touristLoad: 74,
    kitchenSavings: 15,
    localSavings: 10,
    nearbyAirport: true,
    why: "Teurer, aber sehr rund für ein Wochenende: Hafen, Essen, Kultur und mit Lübeck oder Ostsee schnell ein zweiter Charakter in derselben Reise.",
  },
  {
    city: "Nürnberg & Bamberg",
    country: "Deutschland",
    airport: "Nürnberg",
    vibes: ["stadt", "kultur", "essen"],
    hidden: 66,
    comfort: 82,
    daily: 64, living: { groceries: 34, restaurants: 48, localTransport: 8, activities: 20 },
    lodging: { airbnb: 96, hotel: 128, pension: 84 },
    flightBase: 105,
    season: 1.12,
    shoulderMonths: [3, 4, 5, 9, 10, 11],
    touristLoad: 56,
    kitchenSavings: 13,
    localSavings: 12,
    nearbyAirport: true,
    why: "Guter Städtereise-Mix: mittelalterliche Altstadt, sehr gutes Essen und Bamberg als einfacher Tagesausflug mit viel Gegenwert.",
  },
  {
    city: "Münster",
    country: "Deutschland",
    airport: "Münster/Osnabrück oder Dortmund",
    vibes: ["stadt", "kultur", "essen", "natur"],
    hidden: 70,
    comfort: 84,
    daily: 62, living: { groceries: 33, restaurants: 47, localTransport: 8, activities: 18 },
    lodging: { airbnb: 94, hotel: 124, pension: 82 },
    flightBase: 108,
    season: 1.08,
    shoulderMonths: [3, 4, 5, 9, 10, 11],
    touristLoad: 48,
    kitchenSavings: 12,
    localSavings: 13,
    nearbyAirport: true,
    why: "Unaufgeregte, schöne Städtereise: Altstadt, Radwege, Cafés, See und meist weniger Stress als in den großen Metropolen.",
  },
  {
    city: "Ostsee Schleswig-Holstein",
    country: "Deutschland",
    airport: "Hamburg oder Lübeck",
    vibes: ["strand", "natur", "essen"],
    hidden: 58,
    comfort: 84,
    daily: 66, living: { groceries: 35, restaurants: 50, localTransport: 8, activities: 18 },
    lodging: { airbnb: 112, hotel: 148, pension: 96 },
    flightBase: 105,
    season: 1.42,
    shoulderMonths: [5, 6, 9, 10],
    touristLoad: 76,
    kitchenSavings: 16,
    localSavings: 10,
    nearbyAirport: true,
    unusual: {
      label: "Segeltoern oder einfaches Boot-Wochenende",
      search: "Ostsee Schleswig-Holstein Segeltoern Mitsegeln Boot Wochenende Unterkunft",
      fit: 76,
      note: "gut fuer kurze, spontane Wasser-Abenteuer ohne Flug",
    },
    why: "Klassischer Nah-Strand ohne Flugpflicht: gute Bahn- und Autooptionen, Ferienwohnungen mit Küche und außerhalb der Hotspots oft deutlich besserer Gegenwert.",
  },
  {
    city: "Nordsee Schleswig-Holstein",
    country: "Deutschland",
    airport: "Hamburg",
    vibes: ["strand", "natur", "essen"],
    hidden: 62,
    comfort: 82,
    daily: 68, living: { groceries: 36, restaurants: 52, localTransport: 8, activities: 18 },
    lodging: { airbnb: 118, hotel: 154, pension: 98 },
    flightBase: 108,
    season: 1.44,
    shoulderMonths: [5, 6, 9, 10],
    touristLoad: 72,
    kitchenSavings: 17,
    localSavings: 11,
    nearbyAirport: true,
    why: "Stark, wenn Meer, Wind, Watt und kurze Anreise wichtiger sind als Badewetter-Garantie. Selbstversorgung kann hier viel retten.",
  },
  {
    city: "Mecklenburgische Ostsee",
    country: "Deutschland",
    airport: "Rostock oder Berlin",
    vibes: ["strand", "natur", "essen"],
    hidden: 70,
    comfort: 78,
    daily: 60, living: { groceries: 32, restaurants: 46, localTransport: 7, activities: 16 },
    lodging: { airbnb: 96, hotel: 132, pension: 84 },
    flightBase: 98,
    season: 1.34,
    shoulderMonths: [5, 6, 9, 10],
    touristLoad: 62,
    kitchenSavings: 15,
    localSavings: 12,
    nearbyAirport: true,
    unusual: {
      label: "Floß, Hausboot oder Naturcamp an der Ostsee",
      search: "Mecklenburgische Ostsee Hausboot Floß Naturcamp Unterkunft",
      fit: 82,
      note: "spannend fuer Wasser, Natur und unkomplizierte Anreise",
    },
    why: "Ostseegefühl oft günstiger als die ganz bekannten Schleswig-Holstein-Orte: viel Natur, breite Strände und gute Ferienwohnungs-Chancen.",
  },
  {
    city: "Usedom & Stettiner Haff",
    country: "Deutschland",
    airport: "Berlin",
    vibes: ["strand", "natur", "essen"],
    hidden: 72,
    comfort: 78,
    daily: 58, living: { groceries: 31, restaurants: 44, localTransport: 7, activities: 16 },
    lodging: { airbnb: 92, hotel: 128, pension: 82 },
    flightBase: 96,
    season: 1.32,
    shoulderMonths: [5, 6, 9, 10],
    touristLoad: 58,
    kitchenSavings: 15,
    localSavings: 13,
    nearbyAirport: true,
    why: "Viel Strand fürs Geld, besonders wenn man nicht direkt in den teuersten Kaiserbädern wohnt. Haff-Orte können gute Geheimtipp-Optionen sein.",
  },
  {
    city: "Dänische Nordsee",
    country: "Dänemark",
    airport: "Billund oder Hamburg",
    vibes: ["strand", "natur", "essen"],
    hidden: 64,
    comfort: 88,
    daily: 88, living: { groceries: 48, restaurants: 72, localTransport: 11, activities: 22 },
    lodging: { airbnb: 130, hotel: 172, pension: 112 },
    flightBase: 130,
    season: 1.38,
    shoulderMonths: [5, 6, 9],
    touristLoad: 64,
    kitchenSavings: 24,
    localSavings: 10,
    nearbyAirport: true,
    why: "Nicht billig im Alltag, aber Ferienhäuser und Selbstversorgung können gut funktionieren. Sehr stark für Natur, Ruhe und breite Strände.",
  },
  {
    city: "Südschwedische Schären & Skåne",
    country: "Schweden",
    region: "Malmö, Ystad, Blekinge oder Karlskrona",
    searchQuery: "Skåne Schären Südschweden Ferienhaus am Meer",
    airport: "Kopenhagen, Malmö oder Hamburg plus Bahn/Fähre",
    vibes: ["strand", "natur", "stadt", "essen"],
    hidden: 78,
    comfort: 82,
    daily: 74, living: { groceries: 42, restaurants: 62, localTransport: 10, activities: 18 },
    lodging: { airbnb: 112, hotel: 146, pension: 96 },
    flightBase: 150,
    season: 1.28,
    shoulderMonths: [5, 6, 9],
    touristLoad: 52,
    kitchenSavings: 24,
    localSavings: 12,
    nearbyAirport: true,
    unusual: {
      label: "Stuga oder kleines Bootshaus am Wasser",
      search: "Südschweden Stuga Bootshaus am Wasser Unterkunft",
      fit: 86,
      note: "passt sehr gut zu direkt am Wasser, Natur und Selbstversorgung ohne klassischen Hotelurlaub",
    },
    why: "Schweden ist im Alltag teuer, aber Ferienhäuser mit Küche, Natur und Wasser können sich lohnen. Ab Hamburg ist Bahn/Fähre/Auto oft realistischer als ein unnötiger Flug.",
  },
  {
    city: "Cornwall & Devon Küste",
    country: "England",
    region: "Südwestengland",
    searchQuery: "Cornwall Devon coast budget cottage seaside",
    airport: "Bristol, Exeter oder London plus Bahn",
    vibes: ["strand", "natur", "stadt", "essen"],
    hidden: 70,
    comfort: 80,
    daily: 82, living: { groceries: 45, restaurants: 68, localTransport: 13, activities: 22 },
    lodging: { airbnb: 124, hotel: 158, pension: 104 },
    flightBase: 170,
    season: 1.38,
    shoulderMonths: [5, 6, 9, 10],
    touristLoad: 70,
    kitchenSavings: 24,
    localSavings: 13,
    nearbyAirport: true,
    unusual: {
      label: "Küstencottage oder Surf-Ort außerhalb der Hotspots",
      search: "Cornwall Devon budget cottage seaside surf town accommodation",
      fit: 74,
      note: "ungewöhnlich für Deutschland-Start, aber nur gut, wenn die Unterkunft außerhalb der teuren Hotspots liegt",
    },
    why: "Sehr schöne Küste, aber kein klassisches Billigziel. Es wird interessant, wenn Schulterseason, Selbstversorgung und kleine Orte statt St Ives direkt funktionieren.",
  },
  {
    city: "Schottische Westküste & Inseln",
    country: "Schottland",
    region: "Glasgow, Oban, Skye oder Hebriden",
    searchQuery: "Scottish west coast islands budget cottage ferry",
    airport: "Edinburgh oder Glasgow",
    vibes: ["berge", "natur", "strand", "kultur"],
    hidden: 84,
    comfort: 72,
    daily: 76, living: { groceries: 43, restaurants: 64, localTransport: 12, activities: 20 },
    lodging: { airbnb: 118, hotel: 152, pension: 98 },
    flightBase: 185,
    season: 1.32,
    shoulderMonths: [5, 6, 9],
    touristLoad: 58,
    kitchenSavings: 23,
    localSavings: 12,
    nearbyAirport: true,
    unusual: {
      label: "Fähre, Inselhopping oder einfaches Cottage",
      search: "Scottish islands ferry hopping cottage budget accommodation",
      fit: 90,
      note: "stark für ungewöhnlich, Wasser, Natur und ein bisschen Abenteuer statt Standardurlaub",
    },
    why: "Nicht billig, aber extrem stark für ungewöhnliche Naturreisen. Budget kippt über Mietwagen/Fähren, deshalb muss die konkrete Route kurz und klug bleiben.",
  },
  {
    city: "Ostsee-Kreuzfahrt ab Kiel",
    country: "Kreuzfahrt",
    region: "Kiel, Kopenhagen, Stockholm oder Baltikum je Route",
    searchQuery: "Kreuzfahrt ab Kiel Ostsee 7 Nächte Angebot",
    airport: "Kiel/Hamburg Hafen",
    vibes: ["strand", "stadt", "kultur", "essen"],
    hidden: 52,
    comfort: 82,
    daily: 46, living: { groceries: 0, restaurants: 18, localTransport: 8, activities: 38 },
    lodging: { hotel: 126, pension: 112 },
    flightBase: 95,
    season: 1.26,
    shoulderMonths: [5, 6, 9, 10],
    touristLoad: 72,
    kitchenSavings: 0,
    localSavings: 4,
    nearbyAirport: true,
    cruise: {
      label: "Ostsee-Kreuzfahrt ab deutschem Hafen",
      search: "Kreuzfahrt ab Kiel Ostsee 7 Nächte Angebot",
      fit: 86,
      dailyExtras: 46,
      type: "Stressarm ab deutschem Hafen",
      bestFor: "Eltern, die ohne Flugstress mehrere Städte sehen möchten",
      bookFirst: "AIDA oder Mein Schiff zuerst prüfen, weil Abfahrt ab Kiel/Hamburg und deutschsprachige Abläufe meist unkompliziert sind",
      compare: "MSC/Costa nur vergleichen, wenn Preis deutlich niedriger ist oder Route/Termin besser passt",
      avoidIf: "eher nicht, wenn ein sehr ruhiger Urlaub ohne feste Essenszeiten und große Schiffe gewünscht ist",
      dealWatch: "auf Wochenendangebote, Bordguthaben, Getränkepaket und Innenkabinen-Aktionen achten",
      included: "Kabine und Vollpension meist enthalten",
      caution: "Getränke, Trinkgelder, Ausflüge, Internet und Parken/Anreise zum Hafen extra prüfen",
    },
    why: "Sehr elternfreundlich: Start ab Deutschland, wenig Flugstress, viele Städte in einer Reise und planbarer Ablauf.",
  },
  {
    city: "Norwegen-Fjorde ab Hamburg/Kiel",
    country: "Kreuzfahrt",
    region: "Nordsee und Fjorde",
    searchQuery: "Norwegen Fjorde Kreuzfahrt ab Hamburg Kiel Angebot",
    airport: "Hamburg oder Kiel Hafen",
    vibes: ["strand", "berge", "natur", "kultur"],
    hidden: 58,
    comfort: 84,
    daily: 54, living: { groceries: 0, restaurants: 20, localTransport: 10, activities: 48 },
    lodging: { hotel: 148, pension: 132 },
    flightBase: 105,
    season: 1.34,
    shoulderMonths: [5, 6, 9],
    touristLoad: 70,
    kitchenSavings: 0,
    localSavings: 3,
    nearbyAirport: true,
    cruise: {
      label: "Fjordroute ohne Langstreckenflug",
      search: "Norwegen Fjorde Kreuzfahrt ab Hamburg Kiel 7 Nächte Angebot",
      fit: 82,
      dailyExtras: 54,
      type: "Naturroute mit Komfort",
      bestFor: "Eltern, die Landschaft, Balkon/Aussicht und wenig Umziehen wichtiger finden als Badewetter",
      bookFirst: "Mein Schiff und AIDA zuerst prüfen; bei Norwegen sind Service, Route und Hafenliegezeiten wichtiger als der niedrigste Grundpreis",
      compare: "Costa/MSC nur nehmen, wenn Route ähnlich gut ist und Ausflugskosten realistisch bleiben",
      avoidIf: "eher nicht, wenn das Budget knapp ist: Norwegen-Ausflüge, Getränke und Balkonwunsch können stark verteuern",
      dealWatch: "Schultermonate Mai/Juni/September, Innen- oder Außenkabine statt Balkon und inkludierte Getränkepakete prüfen",
      included: "Kabine und Bordverpflegung, oft sehr entspannter Tagesrhythmus",
      caution: "Norwegen-Ausflüge und Getränke können stark ins Budget gehen",
    },
    why: "Viel Landschaft ohne tägliches Umziehen. Nicht immer billig, aber für Komfort, Aussicht und kurze Anreise oft sehr gutes Gesamtpaket.",
  },
  {
    city: "Mittelmeer-Kreuzfahrt ab Genua/Savona",
    country: "Kreuzfahrt",
    region: "Italien, Südfrankreich, Spanien je Route",
    searchQuery: "Mittelmeer Kreuzfahrt ab Genua Savona Angebot 7 Nächte",
    airport: "Genua, Mailand oder Nizza",
    vibes: ["strand", "stadt", "kultur", "essen"],
    hidden: 50,
    comfort: 80,
    daily: 50, living: { groceries: 0, restaurants: 18, localTransport: 9, activities: 42 },
    lodging: { hotel: 118, pension: 106 },
    flightBase: 155,
    season: 1.22,
    shoulderMonths: [4, 5, 9, 10],
    touristLoad: 78,
    kitchenSavings: 0,
    localSavings: 4,
    nearbyAirport: true,
    cruise: {
      label: "Mittelmeerroute mit Aktionspreisen",
      search: "Mittelmeer Kreuzfahrt ab Genua Savona Last Minute Angebot",
      fit: 78,
      dailyExtras: 50,
      type: "Sparpreis mit Hafenanreise",
      bestFor: "Preisbewusste Reisende, wenn Flug oder Bahn zum Hafen günstig klappt",
      bookFirst: "MSC und Costa zuerst prüfen; im Mittelmeer sind dort oft starke Aktionspreise zu finden",
      compare: "AIDA/Mein Schiff gegenhalten, wenn deutschsprachiger Komfort oder Getränkepaket wichtiger ist",
      avoidIf: "eher nicht, wenn die Anreise nach Genua/Savona teuer, lang oder mit vielen Umstiegen wird",
      dealWatch: "Last-Minute, Innenkabine, Transferpaket und Gepäckkosten beim Flug hart gegenrechnen",
      included: "Kabine und Vollpension, mehrere Städte ohne Hotelwechsel",
      caution: "Flug/Zug zum Hafen, Transfers und Landausflüge separat gegenrechnen",
    },
    why: "Kann preislich stark sein, wenn Kabinen-Aktionen laufen. Besonders interessant, wenn mehrere Städte ohne Planungsstress gewünscht sind.",
  },
  {
    city: "Donau-Flusskreuzfahrt",
    country: "Kreuzfahrt",
    region: "Passau, Wien, Budapest oder Wachau je Route",
    searchQuery: "Donau Flusskreuzfahrt Passau Wien Budapest Angebot",
    airport: "Passau, München oder Wien",
    vibes: ["stadt", "natur", "kultur", "essen"],
    hidden: 46,
    comfort: 86,
    daily: 44, living: { groceries: 0, restaurants: 16, localTransport: 6, activities: 38 },
    lodging: { hotel: 142, pension: 128 },
    flightBase: 115,
    season: 1.18,
    shoulderMonths: [4, 5, 9, 10],
    touristLoad: 66,
    kitchenSavings: 0,
    localSavings: 3,
    nearbyAirport: true,
    cruise: {
      label: "Flusskreuzfahrt mit kurzer Anreise",
      search: "Donau Flusskreuzfahrt Passau Wien Budapest Angebot",
      fit: 80,
      dailyExtras: 44,
      type: "Ruhiger Kultururlaub auf dem Fluss",
      bestFor: "Eltern, die kleine Schiffe, kurze Wege, Städte und planbaren Ablauf mögen",
      bookFirst: "nicko cruises und A-ROSA zuerst prüfen; das ist ein anderer Markt als Hochseekreuzfahrten",
      compare: "Hochsee-Reedereien hier ignorieren; wichtiger sind Kabinenlage, Route und inkludierte Ausflüge",
      avoidIf: "eher nicht, wenn viel Show, Pooldeck und großes Schiff gewünscht sind",
      dealWatch: "Schnupperreisen, Adventsfahrten, Nebensaison und Bahn-/Buszubringer nach Passau prüfen",
      included: "Kabine, Mahlzeiten und ruhige Route mit vielen Städten",
      caution: "Kabinenlage, Ausflugspakete und Getränkepreise genau vergleichen",
    },
    why: "Sehr angenehm, wenn Komfort, kurze Wege und Kultur wichtiger sind als Strand. Gute Option für Eltern, die nicht dauernd Koffer packen möchten.",
  },
  {
    city: "Amsterdam",
    country: "Niederlande",
    airport: "Amsterdam Schiphol",
    searchQuery: "Amsterdam Niederlande",
    vibes: ["stadt", "kultur", "essen", "natur"],
    hidden: 45,
    comfort: 86,
    daily: 82, living: { groceries: 41, restaurants: 62, localTransport: 11, activities: 24 },
    lodging: { airbnb: 92, "budget-room": 58, hotel: 138, pension: 84 },
    flightBase: 120,
    season: 1.28,
    shoulderMonths: [3, 4, 5, 9, 10, 11],
    touristLoad: 84,
    kitchenSavings: 20,
    localSavings: 18,
    nearbyAirport: true,
    directStays: [
      {
        platform: "airbnb",
        stayTypes: ["budget-room", "airbnb", "pension"],
        label: "Airbnb Studio Bos en Lommer",
        url: "https://www.airbnb.de/rooms/13721713",
        verified: {
          checked: "2026-07-20",
          checkin: "2026-07-24",
          checkout: "2026-07-26",
          adults: 2,
          total: 408,
          note: "Airbnb zeigte am 20.07.2026 fuer 2 Naechte / 2 Gaeste 408 EUR Gesamtpreis.",
        },
      },
      {
        platform: "booking",
        stayTypes: ["hotel"],
        label: "citizenM Amsterdam City",
        url: "https://www.booking.com/hotel/nl/citizenm-amsterdam-city.de.html?nflt=mealplan%3D1",
        note: "Verpflegung ist tarifabhängig; im Zimmer-/Tarifschritt prüfen.",
        verified: {
          checked: "2026-07-20",
          checkin: "2026-07-24",
          checkout: "2026-07-26",
          adults: 2,
          total: 329,
          note: "Booking zeigte am 20.07.2026 329 EUR fuer 2 Naechte inkl. Fruehstueck, Steuern und Gebuehren.",
        },
      },
    ],
    unusual: {
      label: "Hostelboot, Kanalboot oder Randlage am Wasser",
      search: "Amsterdam hostel boat houseboat budget room",
      fit: 72,
      note: "ungewoehnlicher als Standard-Hotel, aber Bewertungen und Lage sehr genau pruefen",
    },
    why: "Wenn Amsterdam gewünscht ist, wird Amsterdam gesucht: teuer im Zentrum, aber mit Randlagen, Zimmern oder Orten an guter Bahn-/Metro-Achse oft deutlich günstiger.",
  },
  {
    city: "Zeeland & Südholland Küste",
    country: "Niederlande",
    airport: "Amsterdam oder Rotterdam",
    vibes: ["strand", "stadt", "natur", "essen"],
    hidden: 60,
    comfort: 86,
    daily: 78, living: { groceries: 40, restaurants: 60, localTransport: 10, activities: 21 },
    lodging: { airbnb: 120, hotel: 158, pension: 104 },
    flightBase: 125,
    season: 1.3,
    shoulderMonths: [5, 6, 9, 10],
    touristLoad: 66,
    kitchenSavings: 18,
    localSavings: 11,
    nearbyAirport: true,
    unusual: {
      label: "Hausboot, Kanalzimmer oder Rad-und-Wasser-Trip",
      search: "Zeeland Südholland Hausboot Kanal Unterkunft Radurlaub",
      fit: 86,
      note: "ungewoehnlich, aber mit guter Infrastruktur und Bahn-/Auto-Anreise",
    },
    why: "Gute Mischung aus Meer, Radwegen und Städten. Für Nordwestdeutschland oft eine echte Bahn-/Auto-Alternative zur Flugreise.",
  },
  {
    city: "Polnische Ostsee",
    country: "Polen",
    airport: "Danzig oder Stettin",
    vibes: ["strand", "stadt", "natur", "essen"],
    hidden: 74,
    comfort: 70,
    daily: 44, living: { groceries: 20, restaurants: 32, localTransport: 5, activities: 12 },
    lodging: { airbnb: 64, hotel: 88, pension: 54 },
    flightBase: 145,
    season: 1.24,
    shoulderMonths: [5, 6, 9],
    touristLoad: 56,
    kitchenSavings: 11,
    localSavings: 12,
    nearbyAirport: true,
    unusual: {
      label: "Danzig plus Küstenbahn und einfache Pension",
      search: "Danzig polnische Ostsee Küstenbahn Pension ungewöhnlicher Urlaub",
      fit: 74,
      note: "kein Boot, aber sehr gutes Abenteuer-pro-Euro-Verhaeltnis",
    },
    why: "Ostsee mit deutlich niedrigeren Alltagskosten: Danzig plus Küste oder ruhigere Orte Richtung Stettin können preislich sehr attraktiv sein.",
  },
  {
    city: "Sarajevo",
    country: "Bosnien und Herzegowina",
    airport: "Sarajevo",
    vibes: ["stadt", "berge", "kultur", "essen"],
    hidden: 87,
    comfort: 64,
    daily: 34, living: { groceries: 16, restaurants: 22, localTransport: 4, activities: 9 },
    lodging: { airbnb: 46, hotel: 66, pension: 38 },
    flightBase: 185,
    season: 1.02,
    shoulderMonths: [4, 5, 6, 9, 10],
    touristLoad: 34,
    kitchenSavings: 8,
    localSavings: 9,
    nearbyAirport: false,
    ski: { resort: "Jahorina/Bjelasnica", pass: 34, rental: 18, transfer: 16, snow: 68, terrain: 62, beginner: 70 },
    why: "Kaffee, Geschichte, Berge und sehr faire Kosten. Ideal, wenn Stadt und Natur nah beieinander liegen sollen.",
  },
  {
    city: "Naxos",
    country: "Griechenland",
    airport: "Athen plus Fähre",
    vibes: ["strand", "natur", "essen", "kultur"],
    hidden: 74,
    comfort: 76,
    daily: 62, living: { groceries: 34, restaurants: 48, localTransport: 7, activities: 18 },
    lodging: { airbnb: 92, hotel: 118, pension: 76 },
    flightBase: 240,
    season: 1.38,
    shoulderMonths: [5, 6, 9, 10],
    touristLoad: 72,
    kitchenSavings: 17,
    localSavings: 16,
    nearbyAirport: true,
    unusual: {
      label: "Inselhopping mit Faehre statt Pauschalstrand",
      search: "Naxos Inselhopping Fähre Pension Griechenland",
      fit: 80,
      note: "fuehlt sich spontaner an, braucht aber Faehren- und Transferpuffer",
    },
    why: "Kykladen-Gefühl, aber bodenständiger als Santorini oder Mykonos. Gute Strände und Dörfer.",
  },
  {
    city: "Rijeka & Cres",
    country: "Kroatien",
    airport: "Rijeka oder Zagreb",
    vibes: ["strand", "stadt", "natur", "essen"],
    hidden: 69,
    comfort: 75,
    daily: 64, living: { groceries: 34, restaurants: 49, localTransport: 8, activities: 19 },
    lodging: { airbnb: 88, hotel: 112, pension: 72 },
    flightBase: 170,
    season: 1.35,
    shoulderMonths: [5, 6, 9],
    touristLoad: 64,
    kitchenSavings: 15,
    localSavings: 13,
    nearbyAirport: true,
    unusual: {
      label: "Faehre nach Cres oder kleines Boot in der Kvarner Bucht",
      search: "Cres Kroatien Fähre Boot Unterkunft Kvarner",
      fit: 78,
      note: "Inselgefuehl ohne ganz so prominente Kroatien-Route",
    },
    why: "Mehr Alltag als Dubrovnik, Inseloptionen direkt vor der Tür und gute Chancen auf bessere Unterkunftspreise.",
  },
  {
    city: "Bansko",
    country: "Bulgarien",
    airport: "Sofia",
    vibes: ["berge", "natur", "essen"],
    hidden: 83,
    comfort: 63,
    daily: 32, living: { groceries: 14, restaurants: 21, localTransport: 4, activities: 9 },
    lodging: { airbnb: 42, hotel: 58, pension: 35 },
    flightBase: 150,
    season: 0.94,
    shoulderMonths: [5, 6, 9, 10],
    touristLoad: 28,
    kitchenSavings: 7,
    localSavings: 8,
    nearbyAirport: false,
    ski: { resort: "Bansko", pass: 48, rental: 20, transfer: 10, snow: 70, terrain: 68, beginner: 78 },
    why: "Sehr gutes Preis-Leistungs-Verhältnis für Skiurlaub, Thermalbäder und niedrige Alltagskosten im Ort.",
  },
  {
    city: "Essaouira",
    country: "Marokko",
    airport: "Marrakesch oder Essaouira",
    vibes: ["strand", "stadt", "kultur", "essen"],
    hidden: 79,
    comfort: 68,
    daily: 42, living: { groceries: 18, restaurants: 28, localTransport: 5, activities: 13 },
    lodging: { airbnb: 54, hotel: 80, pension: 48 },
    flightBase: 230,
    season: 1.08,
    shoulderMonths: [2, 3, 4, 10, 11],
    touristLoad: 48,
    kitchenSavings: 8,
    localSavings: 12,
    nearbyAirport: true,
    why: "Atlantik, Medina, Fisch, Wind und deutlich entspannter als Marrakesch. Gute Wahl fuer milde Temperaturen.",
  },
  {
    city: "Zakopane",
    country: "Polen",
    airport: "Krakau",
    vibes: ["berge", "natur", "essen"],
    hidden: 76,
    comfort: 68,
    daily: 42, living: { groceries: 19, restaurants: 30, localTransport: 5, activities: 14 },
    lodging: { airbnb: 62, hotel: 88, pension: 54 },
    flightBase: 145,
    season: 1.18,
    shoulderMonths: [1, 2, 3, 12],
    touristLoad: 62,
    kitchenSavings: 10,
    localSavings: 9,
    nearbyAirport: true,
    ski: { resort: "Zakopane/Kasprowy Wierch", pass: 42, rental: 18, transfer: 14, snow: 64, terrain: 54, beginner: 82 },
    why: "Günstiger Winterort mit viel Pension-Auswahl, gutem Essen und mehreren kleinen Skigebieten statt einem teuren Mega-Resort.",
  },
  {
    city: "Bohinj & Vogel",
    country: "Slowenien",
    airport: "Ljubljana",
    vibes: ["berge", "natur", "essen"],
    hidden: 82,
    comfort: 74,
    daily: 54, living: { groceries: 28, restaurants: 40, localTransport: 7, activities: 18 },
    lodging: { airbnb: 82, hotel: 112, pension: 76 },
    flightBase: 165,
    season: 1.2,
    shoulderMonths: [1, 2, 3, 12],
    touristLoad: 46,
    kitchenSavings: 13,
    localSavings: 11,
    nearbyAirport: true,
    ski: { resort: "Vogel", pass: 44, rental: 22, transfer: 18, snow: 72, terrain: 66, beginner: 64 },
    why: "Alpengefühl ohne Österreich-Preisniveau, schöner See-Kontext und ein überschaubares Skigebiet mit Naturfokus.",
  },
  {
    city: "Schladming Umgebung",
    country: "Österreich",
    airport: "Salzburg oder Graz",
    vibes: ["berge", "natur", "essen"],
    hidden: 55,
    comfort: 86,
    daily: 82, living: { groceries: 42, restaurants: 62, localTransport: 10, activities: 24 },
    lodging: { airbnb: 135, hotel: 178, pension: 118 },
    flightBase: 175,
    season: 1.45,
    shoulderMonths: [1, 3, 12],
    touristLoad: 84,
    kitchenSavings: 17,
    localSavings: 10,
    nearbyAirport: true,
    ski: { resort: "Schladming-Dachstein", pass: 79, rental: 34, transfer: 18, snow: 86, terrain: 88, beginner: 76 },
    why: "Teurer, aber qualitativ stark: großes Skigebiet, hohe Zuverlässigkeit und gute Pensionen mit Frühstück oder Halbpension.",
  },
  {
    city: "Zillertal",
    country: "Österreich",
    airport: "Innsbruck oder München",
    vibes: ["berge", "natur", "essen"],
    hidden: 48,
    comfort: 88,
    daily: 86, living: { groceries: 43, restaurants: 66, localTransport: 11, activities: 25 },
    lodging: { airbnb: 142, hotel: 184, pension: 122 },
    flightBase: 180,
    season: 1.5,
    shoulderMonths: [1, 3, 12],
    touristLoad: 86,
    kitchenSavings: 17,
    localSavings: 9,
    nearbyAirport: true,
    ski: { resort: "Zillertal Arena / Mayrhofen", pass: 76, rental: 35, transfer: 18, snow: 88, terrain: 92, beginner: 74 },
    why: "Sehr großes Skigebiet mit vielen Orten. Nicht billig, aber stark, wenn Pistenqualität und Bahn-/Flughafen-Optionen wichtig sind.",
  },
  {
    city: "Saalbach-Hinterglemm",
    country: "Österreich",
    airport: "Salzburg oder München",
    vibes: ["berge", "natur", "essen"],
    hidden: 44,
    comfort: 86,
    daily: 88, living: { groceries: 44, restaurants: 68, localTransport: 11, activities: 26 },
    lodging: { airbnb: 150, hotel: 195, pension: 132 },
    flightBase: 178,
    season: 1.52,
    shoulderMonths: [1, 3, 12],
    touristLoad: 88,
    kitchenSavings: 17,
    localSavings: 8,
    nearbyAirport: true,
    ski: { resort: "Skicircus Saalbach", pass: 74, rental: 34, transfer: 20, snow: 82, terrain: 88, beginner: 78 },
    why: "Viel Skigebiet fürs Geld, gute Infrastruktur und viele Pensionen. Preislich sensibel bei Ferien und Wochenenden.",
  },
  {
    city: "Gasteinertal",
    country: "Österreich",
    airport: "Salzburg",
    vibes: ["berge", "natur", "essen"],
    hidden: 63,
    comfort: 82,
    daily: 76, living: { groceries: 39, restaurants: 58, localTransport: 9, activities: 23 },
    lodging: { airbnb: 118, hotel: 158, pension: 102 },
    flightBase: 170,
    season: 1.34,
    shoulderMonths: [1, 3, 12],
    touristLoad: 70,
    kitchenSavings: 15,
    localSavings: 10,
    nearbyAirport: true,
    ski: { resort: "Ski amadé Gastein", pass: 79, rental: 32, transfer: 16, snow: 80, terrain: 80, beginner: 72 },
    why: "Oft etwas weniger überlaufen als die ganz lauten Namen, mit Thermen-Option und guter Pension-Auswahl.",
  },
  {
    city: "Garmisch-Partenkirchen & Zugspitze",
    country: "Deutschland",
    airport: "München",
    vibes: ["berge", "natur", "essen"],
    hidden: 50,
    comfort: 82,
    daily: 74, living: { groceries: 38, restaurants: 56, localTransport: 9, activities: 22 },
    lodging: { airbnb: 128, hotel: 168, pension: 108 },
    flightBase: 135,
    season: 1.35,
    shoulderMonths: [1, 2, 3, 12],
    touristLoad: 78,
    kitchenSavings: 15,
    localSavings: 9,
    nearbyAirport: true,
    ski: { resort: "Garmisch-Classic / Zugspitze", pass: 68, rental: 32, transfer: 16, snow: 82, terrain: 76, beginner: 64 },
    why: "Kurze Anreise aus Deutschland, starke Zugspitz-Schneesicherheit und mehrere Unterkunftsorte außerhalb der teuersten Lage.",
  },
  {
    city: "Oberstdorf & Kleinwalsertal",
    country: "Deutschland",
    airport: "Memmingen oder München",
    vibes: ["berge", "natur", "essen"],
    hidden: 58,
    comfort: 80,
    daily: 72, living: { groceries: 37, restaurants: 55, localTransport: 9, activities: 21 },
    lodging: { airbnb: 118, hotel: 156, pension: 99 },
    flightBase: 132,
    season: 1.3,
    shoulderMonths: [1, 2, 3, 12],
    touristLoad: 72,
    kitchenSavings: 14,
    localSavings: 10,
    nearbyAirport: true,
    ski: { resort: "Oberstdorf-Kleinwalsertal", pass: 63, rental: 30, transfer: 14, snow: 78, terrain: 72, beginner: 76 },
    why: "Gute Wahl, wenn Anreisezeit wirklich Geld ist. Für gemischte Gruppen oft angenehmer als reine Hochleistungs-Skigebiete.",
  },
  {
    city: "Berchtesgaden & Jenner",
    country: "Deutschland",
    airport: "Salzburg oder München",
    vibes: ["berge", "natur", "essen"],
    hidden: 67,
    comfort: 78,
    daily: 68, living: { groceries: 35, restaurants: 52, localTransport: 8, activities: 21 },
    lodging: { airbnb: 105, hotel: 145, pension: 92 },
    flightBase: 128,
    season: 1.22,
    shoulderMonths: [1, 2, 3, 12],
    touristLoad: 62,
    kitchenSavings: 13,
    localSavings: 11,
    nearbyAirport: true,
    ski: { resort: "Jenner / Götschen / Rossfeld", pass: 49, rental: 28, transfer: 12, snow: 70, terrain: 58, beginner: 78 },
    why: "Kein Mega-Skigebiet, aber oft besserer Gegenwert: schöne Region, kürzere Wege und günstigere Skipässe.",
  },
  {
    city: "Davos Klosters",
    country: "Schweiz",
    airport: "Zürich",
    vibes: ["berge", "natur", "essen"],
    hidden: 42,
    comfort: 90,
    daily: 110, living: { groceries: 58, restaurants: 82, localTransport: 14, activities: 34 },
    lodging: { airbnb: 190, hotel: 245, pension: 160 },
    flightBase: 190,
    season: 1.55,
    shoulderMonths: [1, 3, 12],
    touristLoad: 86,
    kitchenSavings: 24,
    localSavings: 12,
    nearbyAirport: true,
    ski: { resort: "Davos Klosters Mountains", pass: 88, rental: 42, transfer: 28, snow: 90, terrain: 92, beginner: 74 },
    why: "Sehr hochwertig, aber die Lebenshaltung ist klar teuer. Lohnt nur, wenn Qualität und Schneesicherheit den Aufpreis tragen.",
  },
  {
    city: "Arosa Lenzerheide",
    country: "Schweiz",
    airport: "Zürich",
    vibes: ["berge", "natur", "essen"],
    hidden: 46,
    comfort: 89,
    daily: 106, living: { groceries: 56, restaurants: 80, localTransport: 13, activities: 32 },
    lodging: { airbnb: 176, hotel: 230, pension: 150 },
    flightBase: 188,
    season: 1.5,
    shoulderMonths: [1, 3, 12],
    touristLoad: 80,
    kitchenSavings: 23,
    localSavings: 12,
    nearbyAirport: true,
    ski: { resort: "Arosa Lenzerheide", pass: 84, rental: 40, transfer: 26, snow: 86, terrain: 86, beginner: 80 },
    why: "Familien- und Genuss-Ski mit hoher Qualität. Beim Budget unbedingt Selbstversorgung und Randorte prüfen.",
  },
  {
    city: "Engelberg Titlis",
    country: "Schweiz",
    airport: "Zürich",
    vibes: ["berge", "natur", "essen"],
    hidden: 54,
    comfort: 86,
    daily: 102, living: { groceries: 54, restaurants: 78, localTransport: 12, activities: 31 },
    lodging: { airbnb: 165, hotel: 218, pension: 142 },
    flightBase: 184,
    season: 1.44,
    shoulderMonths: [1, 3, 12],
    touristLoad: 72,
    kitchenSavings: 22,
    localSavings: 13,
    nearbyAirport: true,
    ski: { resort: "Titlis Engelberg", pass: 84, rental: 40, transfer: 24, snow: 91, terrain: 84, beginner: 62 },
    why: "Sehr starke Schneesicherheit und kurze Wege ab Zürich. Für Anfänger weniger ideal, für Schneesicherheit aber ein Kandidat.",
  },
  {
    city: "Mallorca Nebenorte",
    country: "Spanien",
    region: "Balearen · Alcúdia, Cala Ratjada, Sóller oder Inland",
    searchQuery: "Mallorca Nebenorte Ferienwohnung Küche Budget",
    airport: "Palma de Mallorca",
    vibes: ["strand", "natur", "stadt", "essen"],
    hidden: 42,
    comfort: 78,
    daily: 68, living: { groceries: 36, restaurants: 54, localTransport: 9, activities: 20 },
    lodging: { airbnb: 118, hotel: 156, pension: 92 },
    flightBase: 150,
    season: 1.55,
    shoulderMonths: [4, 5, 9, 10],
    touristLoad: 90,
    kitchenSavings: 20,
    localSavings: 16,
    nearbyAirport: true,
    why: "Extrem beliebt und oft teuer, aber mit Nebensaison, Küche und Orten außerhalb Palma/Hotspots kann Mallorca trotzdem ein starker Preis-Leistungs-Kandidat sein.",
  },
  {
    city: "Valencia & Costa Blanca",
    country: "Spanien",
    region: "Valencia, Alicante oder Denia",
    searchQuery: "Valencia Alicante Denia Ferienwohnung Budget",
    airport: "Valencia oder Alicante",
    vibes: ["strand", "stadt", "essen", "kultur"],
    hidden: 62,
    comfort: 80,
    daily: 58, living: { groceries: 31, restaurants: 45, localTransport: 8, activities: 17 },
    lodging: { airbnb: 88, hotel: 118, pension: 74 },
    flightBase: 150,
    season: 1.28,
    shoulderMonths: [4, 5, 9, 10, 11],
    touristLoad: 66,
    kitchenSavings: 17,
    localSavings: 14,
    nearbyAirport: true,
    why: "Beliebt, aber oft besserer Gegenwert als Insel-Hotspots: Stadt, Strand, Essen und gute ÖPNV-/Bahnoptionen vor Ort.",
  },
  {
    city: "Andalusien ohne Hotspot",
    country: "Spanien",
    region: "Málaga, Cádiz, Granada oder Córdoba",
    searchQuery: "Andalusien Cádiz Granada Málaga Budget Unterkunft",
    airport: "Málaga oder Sevilla",
    vibes: ["strand", "stadt", "kultur", "essen"],
    hidden: 66,
    comfort: 76,
    daily: 56, living: { groceries: 29, restaurants: 43, localTransport: 8, activities: 18 },
    lodging: { airbnb: 82, hotel: 112, pension: 68 },
    flightBase: 165,
    season: 1.32,
    shoulderMonths: [3, 4, 5, 9, 10, 11],
    touristLoad: 70,
    kitchenSavings: 16,
    localSavings: 15,
    nearbyAirport: true,
    why: "Sehr beliebter Spanien-Mix aus Sonne, Kultur und Essen. Budget wird gut, wenn man Málaga-Zentrum und Hochsommer vermeidet.",
  },
  {
    city: "Antalya & Lykische Küste",
    country: "Türkei",
    region: "Antalya, Kaş, Fethiye oder Side",
    searchQuery: "Antalya Lykische Küste Ferienwohnung Hotel Angebot",
    airport: "Antalya oder Dalaman",
    vibes: ["strand", "natur", "kultur", "essen"],
    hidden: 58,
    comfort: 76,
    daily: 42, living: { groceries: 20, restaurants: 30, localTransport: 6, activities: 13 },
    lodging: { airbnb: 62, hotel: 86, pension: 52 },
    flightBase: 220,
    season: 1.34,
    shoulderMonths: [4, 5, 9, 10, 11],
    touristLoad: 78,
    kitchenSavings: 12,
    localSavings: 13,
    nearbyAirport: true,
    why: "Eines der beliebtesten Nicht-EU-Ziele: oft starke Flug-/Hotelpreise, warmes Wasser und niedrige Alltagskosten. Qualität und Lage genau prüfen.",
  },
  {
    city: "Istanbul & Prinzeninseln",
    country: "Türkei",
    region: "Istanbul mit Wasser, Kultur und Essen",
    searchQuery: "Istanbul Prinzeninseln Unterkunft Budget",
    airport: "Istanbul",
    vibes: ["stadt", "kultur", "essen", "wasser"],
    hidden: 64,
    comfort: 76,
    daily: 44, living: { groceries: 21, restaurants: 31, localTransport: 5, activities: 15 },
    lodging: { airbnb: 68, hotel: 92, pension: 58 },
    flightBase: 205,
    season: 1.14,
    shoulderMonths: [3, 4, 5, 9, 10, 11],
    touristLoad: 74,
    kitchenSavings: 10,
    localSavings: 14,
    nearbyAirport: true,
    why: "Sehr gutes Preis-Erlebnis-Verhältnis für Stadt, Wasser und Essen. Für Strandurlaub nicht ideal, aber als Kurz- oder Kulturreise stark.",
  },
  {
    city: "Kreta Nebenorte",
    country: "Griechenland",
    region: "Chania, Rethymno, Südküste oder Lassithi",
    searchQuery: "Kreta Nebenorte Ferienwohnung Budget",
    airport: "Heraklion oder Chania",
    vibes: ["strand", "natur", "kultur", "essen"],
    hidden: 56,
    comfort: 76,
    daily: 58, living: { groceries: 30, restaurants: 45, localTransport: 8, activities: 17 },
    lodging: { airbnb: 82, hotel: 116, pension: 68 },
    flightBase: 215,
    season: 1.38,
    shoulderMonths: [5, 6, 9, 10],
    touristLoad: 78,
    kitchenSavings: 16,
    localSavings: 13,
    nearbyAirport: true,
    why: "Griechenland-Klassiker mit viel Auswahl. Budget wird gut über Nebensaison, Ferienwohnungen und Orte außerhalb der bekanntesten Buchten.",
  },
  {
    city: "Korfu & Epirus",
    country: "Griechenland",
    region: "Korfu, Parga oder Ioannina",
    searchQuery: "Korfu Epirus Parga Unterkunft Budget",
    airport: "Korfu oder Preveza",
    vibes: ["strand", "natur", "stadt", "essen"],
    hidden: 68,
    comfort: 74,
    daily: 54, living: { groceries: 28, restaurants: 42, localTransport: 8, activities: 16 },
    lodging: { airbnb: 78, hotel: 106, pension: 64 },
    flightBase: 210,
    season: 1.32,
    shoulderMonths: [5, 6, 9, 10],
    touristLoad: 66,
    kitchenSavings: 15,
    localSavings: 12,
    nearbyAirport: true,
    why: "Beliebt, grün und wasserreich. Oft spannender als reine Insel-Pauschale, wenn man Epirus oder ruhigere Orte mitdenkt.",
  },
  {
    city: "Istrien & Kvarner",
    country: "Kroatien",
    region: "Pula, Rijeka, Krk oder Opatija",
    searchQuery: "Istrien Kvarner Ferienwohnung Budget",
    airport: "Rijeka, Pula, Triest oder Zagreb",
    vibes: ["strand", "stadt", "essen", "natur"],
    hidden: 58,
    comfort: 76,
    daily: 62, living: { groceries: 34, restaurants: 48, localTransport: 8, activities: 18 },
    lodging: { airbnb: 94, hotel: 128, pension: 78 },
    flightBase: 175,
    season: 1.4,
    shoulderMonths: [5, 6, 9],
    touristLoad: 82,
    kitchenSavings: 18,
    localSavings: 14,
    nearbyAirport: true,
    why: "Sehr beliebt und im Sommer teuer, aber für Auto/Bahn-Kombination, Ferienwohnung und Nebensaison immer noch relevant.",
  },
  {
    city: "Elsass & Vogesen",
    country: "Frankreich",
    region: "Straßburg, Colmar, Vogesen oder kleine Weindörfer",
    searchQuery: "Elsass Vogesen Ferienwohnung Budget",
    airport: "Straßburg, Basel oder Karlsruhe/Baden-Baden",
    vibes: ["stadt", "natur", "essen", "kultur"],
    hidden: 60,
    comfort: 82,
    daily: 72, living: { groceries: 38, restaurants: 56, localTransport: 9, activities: 20 },
    lodging: { airbnb: 102, hotel: 136, pension: 86 },
    flightBase: 135,
    season: 1.18,
    shoulderMonths: [4, 5, 9, 10, 11],
    touristLoad: 64,
    kitchenSavings: 18,
    localSavings: 12,
    nearbyAirport: true,
    why: "Nah, beliebt und ohne Flug gut erreichbar. Nicht billig, aber für kurze Reisen mit Bahn/Auto und kleinen Orten sehr gut planbar.",
  },
  {
    city: "Bretagne & Normandie",
    country: "Frankreich",
    region: "Saint-Malo, Cotentin, Finistère oder Honfleur",
    searchQuery: "Bretagne Normandie Ferienhaus Meer Budget",
    airport: "Paris, Rennes oder Nantes",
    vibes: ["strand", "natur", "essen", "kultur"],
    hidden: 70,
    comfort: 78,
    daily: 70, living: { groceries: 37, restaurants: 55, localTransport: 10, activities: 19 },
    lodging: { airbnb: 98, hotel: 132, pension: 84 },
    flightBase: 160,
    season: 1.26,
    shoulderMonths: [5, 6, 9],
    touristLoad: 60,
    kitchenSavings: 19,
    localSavings: 12,
    nearbyAirport: true,
    why: "Beliebte Frankreich-Küste ohne Mittelmeerpreise. Besonders gut, wenn Meer, Natur und Selbstversorgung wichtiger sind als Badewettergarantie.",
  },
  {
    city: "Djerba & Tunesische Küste",
    country: "Tunesien",
    region: "Djerba, Hammamet oder Sousse",
    searchQuery: "Djerba Hammamet Tunesien Hotel Ferienwohnung Angebot",
    airport: "Djerba, Tunis oder Monastir",
    vibes: ["strand", "kultur", "essen"],
    hidden: 54,
    comfort: 68,
    daily: 36, living: { groceries: 16, restaurants: 24, localTransport: 5, activities: 12 },
    lodging: { airbnb: 48, hotel: 72, pension: 40 },
    flightBase: 235,
    season: 1.22,
    shoulderMonths: [4, 5, 9, 10, 11],
    touristLoad: 66,
    kitchenSavings: 9,
    localSavings: 10,
    nearbyAirport: true,
    why: "Nahes Nicht-EU-Ziel mit oft günstigen Pauschal- und Hotelpreisen. Unterkunftsqualität und Lage bewusst gegenprüfen.",
  },
  {
    city: "Rotes Meer & Luxor-Kombi",
    country: "Ägypten",
    region: "Hurghada, Marsa Alam, Luxor oder El Gouna",
    searchQuery: "Ägypten Hurghada Marsa Alam Luxor Angebot Unterkunft",
    airport: "Hurghada, Marsa Alam oder Kairo",
    vibes: ["strand", "kultur", "essen"],
    hidden: 50,
    comfort: 70,
    daily: 38, living: { groceries: 17, restaurants: 26, localTransport: 6, activities: 16 },
    lodging: { airbnb: 52, hotel: 82, pension: 46 },
    flightBase: 285,
    season: 1.2,
    shoulderMonths: [3, 4, 5, 10, 11],
    touristLoad: 76,
    kitchenSavings: 8,
    localSavings: 10,
    nearbyAirport: true,
    why: "Sehr beliebtes warmes Nicht-EU-Ziel. Preis-Leistung kann stark sein, aber Extras, Transfer und Hotelbewertungen sind entscheidend.",
  },
  {
    city: "Albanische Riviera & Tirana",
    country: "Albanien",
    region: "Tirana, Vlora, Himara oder Ksamil außerhalb Peak",
    searchQuery: "Albanische Riviera Tirana Himara Ksamil Unterkunft Budget",
    airport: "Tirana oder Korfu plus Fähre",
    vibes: ["strand", "natur", "stadt", "essen"],
    hidden: 84,
    comfort: 60,
    daily: 38, living: { groceries: 17, restaurants: 24, localTransport: 5, activities: 10 },
    lodging: { airbnb: 56, hotel: 74, pension: 45 },
    flightBase: 175,
    season: 1.34,
    shoulderMonths: [5, 6, 9, 10],
    touristLoad: 62,
    kitchenSavings: 12,
    localSavings: 12,
    nearbyAirport: true,
    why: "Nahes Nicht-EU-Budgetziel mit starkem Wasser-/Berge-Mix. Im Hochsommer teurer und voller, in der Schulterseason sehr spannend.",
  },
  {
    city: "Mostar & Herzegowina",
    country: "Bosnien und Herzegowina",
    region: "Mostar, Blagaj, Trebinje oder Sarajevo-Kombi",
    searchQuery: "Mostar Herzegowina Blagaj Trebinje Unterkunft Budget",
    airport: "Sarajevo, Dubrovnik oder Split",
    vibes: ["stadt", "natur", "kultur", "essen"],
    hidden: 86,
    comfort: 60,
    daily: 34, living: { groceries: 15, restaurants: 22, localTransport: 4, activities: 9 },
    lodging: { airbnb: 48, hotel: 68, pension: 40 },
    flightBase: 190,
    season: 1.16,
    shoulderMonths: [4, 5, 9, 10],
    touristLoad: 46,
    kitchenSavings: 9,
    localSavings: 10,
    nearbyAirport: true,
    why: "Sehr gutes Preis-Erlebnis-Verhältnis: Kultur, Berge, Flüsse und Essen. Oft über Nachbarflughäfen am besten erreichbar.",
  },
  {
    city: "Belgrad & Tara-Nationalpark",
    country: "Serbien",
    region: "Belgrad, Novi Sad, Tara oder Niš",
    searchQuery: "Belgrad Tara Nationalpark Serbien Unterkunft Budget",
    airport: "Belgrad oder Niš",
    vibes: ["stadt", "natur", "essen", "kultur"],
    hidden: 78,
    comfort: 64,
    daily: 38, living: { groceries: 17, restaurants: 25, localTransport: 5, activities: 10 },
    lodging: { airbnb: 52, hotel: 76, pension: 44 },
    flightBase: 185,
    season: 1.08,
    shoulderMonths: [4, 5, 9, 10],
    touristLoad: 42,
    kitchenSavings: 10,
    localSavings: 11,
    nearbyAirport: true,
    why: "Nahes Nicht-EU-Ziel mit Stadt, Essen und Natur. Budget stark, aber als klassische Urlaubsregion weniger offensichtlich.",
  },
  {
    city: "Prizren & Rugova",
    country: "Kosovo",
    region: "Prizren, Peja und Rugova-Schlucht",
    searchQuery: "Prizren Peja Rugova Kosovo Unterkunft Budget",
    airport: "Pristina",
    vibes: ["berge", "stadt", "natur", "essen"],
    hidden: 88,
    comfort: 56,
    daily: 32, living: { groceries: 14, restaurants: 21, localTransport: 4, activities: 8 },
    lodging: { airbnb: 44, hotel: 64, pension: 36 },
    flightBase: 205,
    season: 1.06,
    shoulderMonths: [4, 5, 9, 10],
    touristLoad: 32,
    kitchenSavings: 8,
    localSavings: 9,
    nearbyAirport: false,
    why: "Sehr günstig und ungewöhnlich: Berge, Altstadt, Essen. Eher für neugierige Reisende als für klassische Pauschalferien.",
  },
  {
    city: "Madeira Nordküste",
    country: "Portugal",
    airport: "Funchal",
    vibes: ["berge", "natur", "strand", "essen"],
    hidden: 72,
    comfort: 78,
    daily: 58, living: { groceries: 33, restaurants: 44, localTransport: 8, activities: 19 },
    lodging: { airbnb: 90, hotel: 122, pension: 78 },
    flightBase: 270,
    season: 1.16,
    shoulderMonths: [4, 5, 9, 10, 11],
    touristLoad: 58,
    kitchenSavings: 16,
    localSavings: 14,
    nearbyAirport: false,
    why: "Levadas, Klippen, Naturpools und weniger Pauschalgefühl, wenn du nicht direkt in Funchal wohnst.",
  },
];

const today = new Date("2026-07-20T00:00:00");
const form = document.querySelector("#trip-form");
const results = document.querySelector("#results");
const storageKey = "urlaubskompass-form-v11";

const regionIncludeAliases = {
  balkan: ["Montenegro", "Albanien", "Bosnien und Herzegowina", "Kroatien", "Serbien", "Kosovo", "Nordmazedonien", "Bulgarien", "Rumänien", "Slowenien"],
  balkans: ["Montenegro", "Albanien", "Bosnien und Herzegowina", "Kroatien", "Serbien", "Kosovo", "Nordmazedonien", "Bulgarien", "Rumänien", "Slowenien"],
  osteuropa: ["Polen", "Tschechien", "Slowakei", "Ungarn", "Rumänien", "Bulgarien", "Serbien", "Ukraine", "Moldau", "Litauen", "Lettland", "Estland"],
  "osteuropa": ["Polen", "Tschechien", "Slowakei", "Ungarn", "Rumänien", "Bulgarien", "Serbien", "Ukraine", "Moldau", "Litauen", "Lettland", "Estland"],
  "ost-europa": ["Polen", "Tschechien", "Slowakei", "Ungarn", "Rumänien", "Bulgarien", "Serbien", "Ukraine", "Moldau", "Litauen", "Lettland", "Estland"],
  nordafrika: ["Marokko", "Tunesien", "Ägypten", "Algerien"],
  "nord-afrika": ["Marokko", "Tunesien", "Ägypten", "Algerien"],
  skandinavien: ["Dänemark", "Schweden", "Norwegen", "Finnland"],
  nordeuropa: ["Dänemark", "Schweden", "Norwegen", "Finnland", "Island", "Estland", "Lettland", "Litauen"],
  baltikum: ["Estland", "Lettland", "Litauen"],
  benelux: ["Niederlande", "Belgien", "Luxemburg"],
  alpen: ["Österreich", "Schweiz", "Deutschland", "Italien", "Slowenien", "Frankreich"],
  uk: ["England", "Schottland", "Wales", "Irland"],
  grossbritannien: ["England", "Schottland", "Wales"],
  großbritannien: ["England", "Schottland", "Wales"],
  "vereinigtes königreich": ["England", "Schottland", "Wales"],
  "vereinigtes konigreich": ["England", "Schottland", "Wales"],
  kaukasus: ["Georgien", "Armenien", "Aserbaidschan"],
  "nahes nicht eu ausland": ["Türkei", "Albanien", "Montenegro", "Bosnien und Herzegowina", "Serbien", "Kosovo", "Nordmazedonien", "Marokko", "Tunesien", "Ägypten", "Schweiz", "England", "Schottland"],
  "nahes nicht-eu-ausland": ["Türkei", "Albanien", "Montenegro", "Bosnien und Herzegowina", "Serbien", "Kosovo", "Nordmazedonien", "Marokko", "Tunesien", "Ägypten", "Schweiz", "England", "Schottland"],
  "nicht eu": ["Türkei", "Albanien", "Montenegro", "Bosnien und Herzegowina", "Serbien", "Kosovo", "Nordmazedonien", "Marokko", "Tunesien", "Ägypten", "Schweiz", "England", "Schottland"],
  "nicht-eu": ["Türkei", "Albanien", "Montenegro", "Bosnien und Herzegowina", "Serbien", "Kosovo", "Nordmazedonien", "Marokko", "Tunesien", "Ägypten", "Schweiz", "England", "Schottland"],
  "non eu": ["Türkei", "Albanien", "Montenegro", "Bosnien und Herzegowina", "Serbien", "Kosovo", "Nordmazedonien", "Marokko", "Tunesien", "Ägypten", "Schweiz", "England", "Schottland"],
  klassiker: ["Deutschland", "Spanien", "Italien", "Türkei", "Griechenland", "Ägypten", "Portugal", "Tunesien", "Bulgarien", "Österreich", "Frankreich", "Kroatien", "Niederlande", "Schweiz"],
  "beliebte ziele": ["Deutschland", "Spanien", "Italien", "Türkei", "Griechenland", "Ägypten", "Portugal", "Tunesien", "Bulgarien", "Österreich", "Frankreich", "Kroatien", "Niederlande", "Schweiz"],
  "beliebteste ziele": ["Deutschland", "Spanien", "Italien", "Türkei", "Griechenland", "Ägypten", "Portugal", "Tunesien", "Bulgarien", "Österreich", "Frankreich", "Kroatien", "Niederlande", "Schweiz"],
};

const fallbackRegionDefaults = {
  "Nordafrika": { daily: 42, lodging: { airbnb: 58, hotel: 82, pension: 48 }, flightBase: 230, season: 1.28, route: { flightHours: 7, train: null, trainHours: null, bus: null, busHours: null, car: null, carHours: null, railComfort: 0, busComfort: 0, carComfort: 0 } },
  "Balkan": { daily: 38, lodging: { airbnb: 54, hotel: 74, pension: 44 }, flightBase: 190, season: 1.22, route: { flightHours: 6.2, train: 155, trainHours: 18, nightTrain: 140, nightTrainHours: 20, bus: 82, busHours: 24, car: 260, carHours: 16, railComfort: 50, nightComfort: 60, busComfort: 42, carComfort: 54 } },
  "Osteuropa": { daily: 44, lodging: { airbnb: 62, hotel: 86, pension: 52 }, flightBase: 155, season: 1.16, route: { flightHours: 5, train: 125, trainHours: 12, nightTrain: 115, nightTrainHours: 13.5, bus: 70, busHours: 15, car: 165, carHours: 9, railComfort: 68, nightComfort: 70, busComfort: 50, carComfort: 62 } },
  "Nordeuropa": { daily: 78, lodging: { airbnb: 118, hotel: 155, pension: 102 }, flightBase: 185, season: 1.3, route: { flightHours: 5, train: 165, trainHours: 13, nightTrain: 150, nightTrainHours: 15, bus: 95, busHours: 18, car: 230, carHours: 13, railComfort: 68, nightComfort: 68, busComfort: 44, carComfort: 58 } },
  "Westeuropa": { daily: 76, lodging: { airbnb: 112, hotel: 148, pension: 94 }, flightBase: 165, season: 1.24, route: { flightHours: 5, train: 145, trainHours: 10, nightTrain: 130, nightTrainHours: 12, bus: 82, busHours: 15, car: 210, carHours: 10, railComfort: 72, nightComfort: 70, busComfort: 48, carComfort: 60 } },
  "Südeuropa": { daily: 58, lodging: { airbnb: 84, hotel: 112, pension: 70 }, flightBase: 185, season: 1.3, route: { flightHours: 5.5, train: 165, trainHours: 13, nightTrain: 140, nightTrainHours: 15, bus: 92, busHours: 20, car: 245, carHours: 14, railComfort: 62, nightComfort: 66, busComfort: 44, carComfort: 56 } },
  "Fernziel": { daily: 52, lodging: { airbnb: 74, hotel: 104, pension: 62 }, flightBase: 520, season: 1.18, route: { flightHours: 13, train: null, trainHours: null, bus: null, busHours: null, car: null, carHours: null, railComfort: 0, busComfort: 0, carComfort: 0 } },
};

const fallbackCountryCatalog = [
  ["Belgien", "Westeuropa", "Brüssel, Antwerpen, Gent oder Küste", "Brüssel oder Antwerpen", ["stadt", "kultur", "essen"], ["belgium", "flandern", "brügge", "bruegge"]],
  ["Luxemburg", "Westeuropa", "Luxemburg Stadt oder Müllerthal", "Luxemburg", ["stadt", "natur", "kultur"], ["luxembourg", "mullerthal", "müllerthal"]],
  ["Frankreich", "Westeuropa", "Elsass, Bretagne, Normandie oder Okzitanien", "Paris, Basel, Nizza oder regional", ["strand", "stadt", "natur", "essen"], ["france", "elsass", "bretagne", "normandie"]],
  ["Spanien", "Südeuropa", "Nordspanien, Andalusien, Valencia oder Kanaren", "Madrid, Barcelona, Málaga oder Valencia", ["strand", "stadt", "natur", "essen"], ["spain", "andalusien", "valencia", "kanaren", "mallorca"]],
  ["Malta", "Südeuropa", "Malta und Gozo", "Malta", ["strand", "stadt", "kultur", "essen"], ["gozo"]],
  ["Zypern", "Südeuropa", "Larnaka, Paphos oder Polis", "Larnaka oder Paphos", ["strand", "natur", "kultur"], ["cyprus", "paphos", "larnaka"]],
  ["Türkei", "Südeuropa", "Lykische Küste, Izmir oder Kappadokien", "Antalya, Izmir oder Istanbul", ["strand", "stadt", "natur", "essen"], ["turkei", "türkei", "turkey", "lykien", "kappadokien"]],
  ["Tschechien", "Osteuropa", "Prag, Brünn, Böhmisches Paradies oder Südböhmen", "Prag", ["stadt", "natur", "kultur", "essen"], ["tschechei", "czech", "prag", "brno", "brünn"]],
  ["Slowakei", "Osteuropa", "Bratislava, Hohe Tatra oder Košice", "Bratislava oder Wien", ["berge", "natur", "stadt"], ["slovakia", "tatra", "bratislava"]],
  ["Ungarn", "Osteuropa", "Budapest, Balaton oder Pécs", "Budapest", ["stadt", "wasser", "essen", "kultur"], ["hungary", "budapest", "balaton"]],
  ["Rumänien", "Osteuropa", "Transsilvanien, Bukarest oder Donaudelta", "Bukarest, Cluj oder Sibiu", ["berge", "natur", "stadt", "kultur"], ["romania", "siebenbürgen", "transsilvanien"]],
  ["Serbien", "Balkan", "Belgrad, Novi Sad oder Tara-Nationalpark", "Belgrad", ["stadt", "natur", "essen"], ["serbia", "belgrad", "novi sad"]],
  ["Kosovo", "Balkan", "Prizren, Peja oder Rugova", "Pristina", ["berge", "stadt", "kultur"], ["prizren", "pristina"]],
  ["Moldau", "Osteuropa", "Chișinău und Weinregionen", "Chișinău", ["stadt", "essen", "kultur"], ["moldova", "moldawien"]],
  ["Ukraine", "Osteuropa", "Lwiw, Karpaten oder Kyjiw", "Krakau/Rzeszów plus Bahn oder Kyjiw", ["stadt", "kultur", "natur"], ["ukraine", "lwiw", "lviv", "kiew", "kyiv"]],
  ["Litauen", "Osteuropa", "Vilnius, Kaunas oder Kurische Nehrung", "Vilnius oder Kaunas", ["stadt", "natur", "wasser"], ["lithuania", "vilnius", "kurische nehrung"]],
  ["Lettland", "Osteuropa", "Riga, Gauja oder Ostseeküste", "Riga", ["stadt", "natur", "wasser"], ["latvia", "riga"]],
  ["Estland", "Osteuropa", "Tallinn, Inseln oder Lahemaa", "Tallinn", ["stadt", "natur", "wasser"], ["estonia", "tallinn", "saaremaa"]],
  ["Norwegen", "Nordeuropa", "Bergen, Fjorde, Lofoten oder Südnorwegen", "Oslo, Bergen oder Stavanger", ["berge", "natur", "wasser"], ["norway", "fjorde", "lofoten"]],
  ["Finnland", "Nordeuropa", "Helsinki, Seenplatte oder Lappland", "Helsinki", ["natur", "wasser", "stadt"], ["finland", "seenplatte", "lappland"]],
  ["Island", "Nordeuropa", "Reykjavík, Südküste oder Westfjorde", "Keflavík", ["natur", "berge", "wasser"], ["iceland", "reykjavik", "westfjorde"]],
  ["Wales", "Westeuropa", "Snowdonia, Pembrokeshire oder Cardiff", "Manchester, Bristol oder Cardiff", ["berge", "natur", "strand"], ["cymru", "snowdonia", "pembrokeshire"]],
  ["Irland", "Westeuropa", "Galway, Kerry, Cork oder Dublin", "Dublin, Cork oder Shannon", ["natur", "stadt", "kultur"], ["ireland", "galway", "kerry"]],
  ["Tunesien", "Nordafrika", "Tunis, Hammamet, Djerba oder Sousse", "Tunis, Monastir oder Djerba", ["strand", "stadt", "kultur"], ["tunisia", "djerba", "sousse"]],
  ["Ägypten", "Nordafrika", "Alexandria, Luxor, Rotes Meer oder Kairo", "Kairo, Hurghada oder Luxor", ["strand", "kultur", "stadt"], ["aegypten", "egypt", "rotes meer", "luxor"]],
  ["Algerien", "Nordafrika", "Algier, Oran oder Mittelmeerküste", "Algier oder Oran", ["stadt", "strand", "kultur"], ["algeria", "algier", "oran"]],
  ["Armenien", "Fernziel", "Jerewan, Dilidschan oder Sewansee", "Jerewan", ["berge", "natur", "kultur"], ["armenia", "yerevan", "jerewan"]],
  ["Aserbaidschan", "Fernziel", "Baku, Kaukasus oder Kaspisches Meer", "Baku", ["stadt", "kultur", "wasser"], ["azerbaijan", "baku"]],
  ["Japan", "Fernziel", "Kyushu, Kansai, Hokkaido oder Setouchi", "Tokio, Osaka oder Fukuoka", ["stadt", "natur", "essen"], ["kyushu", "hokkaido", "kansai"]],
  ["Thailand", "Fernziel", "Chiang Mai, Krabi, Koh Lanta oder Bangkok", "Bangkok, Phuket oder Krabi", ["strand", "stadt", "essen", "natur"], ["thai", "krabi", "koh lanta"]],
  ["Vietnam", "Fernziel", "Da Nang, Hoi An, Hanoi oder Mekongdelta", "Hanoi, Da Nang oder Ho-Chi-Minh-Stadt", ["strand", "stadt", "essen", "natur"], ["hoi an", "danang", "mekong"]],
].map(([country, region, focus, airport, vibes, aliases]) => ({ country, region, focus, airport, vibes, aliases }));
const holidayPresets = {
  SH: {
    label: "Schleswig-Holstein",
    2026: {
      summer: ["2026-07-04", "2026-08-15"],
      autumn: ["2026-10-12", "2026-10-24"],
      christmas: ["2026-12-21", "2027-01-06"],
    },
    2027: {
      spring: ["2027-03-30", "2027-04-10"],
      summer: ["2027-07-03", "2027-08-14"],
      autumn: ["2027-10-11", "2027-10-23"],
      christmas: ["2027-12-23", "2028-01-08"],
    },
    2028: {
      spring: ["2028-04-03", "2028-04-15"],
      summer: ["2028-07-03", "2028-08-14"],
      autumn: ["2028-10-16", "2028-10-30"],
      christmas: ["2028-12-21", "2029-01-05"],
    },
    2029: {
      spring: ["2029-03-23", "2029-04-06"],
      summer: ["2029-06-24", "2029-08-04"],
      autumn: ["2029-10-08", "2029-10-19"],
      christmas: ["2029-12-21", "2030-01-08"],
    },
    2030: {
      spring: ["2030-04-08", "2030-04-20"],
      summer: ["2030-06-23", "2030-08-03"],
      autumn: ["2030-10-14", "2030-10-25"],
      christmas: ["2030-12-20", "2031-01-06"],
    },
  },
  HH: {
    label: "Hamburg",
    2026: { autumn: ["2026-10-19", "2026-10-30"], christmas: ["2026-12-21", "2027-01-01"] },
  },
  NI: {
    label: "Niedersachsen",
    2026: { autumn: ["2026-10-12", "2026-10-24"] },
  },
  MV: {
    label: "Mecklenburg-Vorpommern",
    2026: { autumn: ["2026-10-19", "2026-10-24"] },
  },
};

const holidayNames = {
  autumn: "Herbstferien",
  summer: "Sommerferien",
  christmas: "Weihnachtsferien",
  spring: "Frühjahr/Ostern",
};

const profileLabels = {
  "budget-anywhere": "Budget egal wo",
  "budget-hunter": "Sparfuchs",
  "short-trip": "Kurzurlaub",
  "city-trip": "Stadt & Kultur",
  unusual: "Ungewöhnlich & spontan",
  cruise: "Kreuzfahrt",
  ski: "Skiferien",
  "beach-summer": "Strand & Wasser",
  "city-summer": "Sommerurlaub in der Stadt",
  active: "Natur & Aktiv",
  custom: "Individuell",
};

const profileNotes = {
  "budget-anywhere": "Für „ich habe Urlaub, Budget und keine feste Idee“: sucht breit nach dem besten Gegenwert. Kurzurlaub steuerst du über Wunschnächte und Datumsfenster.",
  "budget-hunter": "Priorisiert den niedrigsten Gesamtpreis: FlixBus, lange Anreise und einfachere Unterkünfte dürfen gewinnen, solange aktuelle Warnsignale nicht kippen.",
  "short-trip": "Optimiert auf 1 bis 3 Nächte, kurze Anreise und wenig verlorene Zeit.",
  "city-trip": "Für Städte, Kultur, Essen, ÖPNV und gute Wochenendpreise. Funktioniert auch innerhalb Deutschlands.",
  unusual: "Sucht nach Reisen, die man selten selbst auf dem Schirm hat: Hausboot, Mitsegeln, Inselhopping, Hütte, Nachtzug oder einfache Abenteuer mit gutem Gegenwert.",
  cruise: "Für organisierte Reisen mit Kabine, Route und Verpflegung an Bord. Rechnet Hafenanreise, Bordextras, Ausflüge, Trinkgelder und Getränkepakete bewusst mit.",
  ski: "Optimiert auf Skikosten, Schneesicherheit, passende Verpflegung und kurze Anreise.",
  "beach-summer": "Für Meer, See, Küste oder warme Wasserziele. Bewertet Selbstversorgung, Alltagskosten und Anreise mit.",
  "city-summer": "Bevorzugt Stadt, Kultur, Essen, ÖPNV und kurze Wege vor Ort.",
  active: "Für Berge, Natur, Wandern, Rad, Seen und günstige Aktivitäten statt klassischem Stadt- oder Strandfokus.",
  custom: "Du steuerst die einzelnen Optionen selbst.",
};

const allTransportModes = ["flight", "train", "bus", "car", "flex-dates", "flex-nights"];

const keywordMap = {
  günstig: ["cheap", "value"],
  guenstig: ["cheap", "value"],
  billig: ["cheap"],
  preiswert: ["cheap", "value"],
  sicher: ["safe"],
  wasser: ["water"],
  ostsee: ["water", "beach", "quiet"],
  nordsee: ["water", "beach", "quiet"],
  meer: ["water", "beach"],
  see: ["water", "lake"],
  strand: ["beach", "water"],
  warm: ["warm"],
  sonne: ["warm"],
  ruhig: ["quiet"],
  entspannt: ["quiet"],
  natur: ["nature"],
  ungewöhnlich: ["unusual", "hidden"],
  ungewoehnlich: ["unusual", "hidden"],
  spontan: ["unusual", "hidden"],
  abenteuer: ["unusual", "nature"],
  boot: ["boat", "water", "unusual"],
  hausboot: ["boat", "water", "unusual"],
  segeln: ["boat", "water", "unusual"],
  mitsegeln: ["boat", "water", "unusual"],
  kreuzfahrt: ["cruise", "water", "comfort"],
  cruise: ["cruise", "water", "comfort"],
  schiff: ["cruise", "boat", "water"],
  fjord: ["cruise", "nature", "water"],
  fjorde: ["cruise", "nature", "water"],
  flusskreuzfahrt: ["cruise", "city", "culture"],
  faehre: ["ferry", "water", "unusual"],
  fähre: ["ferry", "water", "unusual"],
  inselhopping: ["ferry", "water", "unusual"],
  hütte: ["cabin", "nature", "unusual"],
  huette: ["cabin", "nature", "unusual"],
  bauernhof: ["farm", "nature", "unusual"],
  retreat: ["retreat", "quiet", "unusual"],
  kloster: ["retreat", "quiet", "unusual"],
  wandern: ["hiking", "nature"],
  aktiv: ["active", "hiking"],
  berge: ["mountains", "hiking"],
  stadt: ["city"],
  kultur: ["culture"],
  essen: ["food"],
  foodie: ["food"],
  kurzflug: ["short-travel"],
  nah: ["short-travel"],
  geheimtipp: ["hidden"],
  authentisch: ["local", "hidden"],
};

function initDates() {
  const start = document.querySelector("#start-date");
  const end = document.querySelector("#end-date");
  const startDate = new Date(today);
  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + 14);
  start.min = toInputDate(today);
  start.value = toInputDate(startDate);
  end.value = toInputDate(endDate);
  end.min = start.value;
}

function toInputDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function localDate(value) {
  return new Date(`${value}T00:00:00`);
}

function getChecked(selector) {
  return [...document.querySelectorAll(`${selector} input:checked`)].map((input) => input.value);
}

function setCheckedValues(selector, values) {
  document.querySelectorAll(`${selector} input[type="checkbox"]`).forEach((input) => {
    input.checked = values.includes(input.value) || values.includes(input.id);
  });
}

function setRadioValue(name, value) {
  document.querySelectorAll(`input[name="${name}"]`).forEach((input) => {
    input.checked = input.value === value;
  });
}

function checkedRadioValue(name) {
  return document.querySelector(`input[name="${name}"]:checked`)?.value || "";
}

function saveFormState() {
  if (document.querySelector("#traveler-details")) writeTravelerDetailsState(collectTravelerDetails());
  const state = {
    fields: {},
    groups: {
      transports: getChecked("#transport-options"),
      levers: getChecked("#budget-levers"),
      vibes: getChecked("#vibe-options"),
      stays: getChecked("#stay-options"),
      board: checkedRadioValue("board"),
      rail: {
        nightTrain: document.querySelector("#night-train")?.checked ?? true,
      },
    },
  };
  [
    "holiday-state",
    "holiday-type",
    "holiday-year",
    "travel-profile",
    "keyword-input",
    "trip-mode",
    "origin",
    "budget",
    "travelers",
    "min-beds",
    "min-bedrooms",
    "traveler-details-state",
    "child-ages",
    "nights",
    "start-date",
    "end-date",
    "max-travel-hours",
    "time-value",
    "bahncard-count",
    "deutschlandticket-count",
    "include-countries",
    "exclude-countries",
    "ski-days",
    "ski-rental",
    "ski-level",
    "snow-weight",
    "hidden-factor",
    "comfort-factor",
    "min-rating",
    "min-trust",
    "max-stay-risk",
    "quality-weight",
  ].forEach((id) => {
    const element = document.getElementById(id);
    if (element) state.fields[id] = element.value;
  });
  try {
    localStorage.setItem(storageKey, JSON.stringify(state));
  } catch (error) {
    console.warn("Formularzustand konnte nicht gespeichert werden.", error);
  }
}

function restoreFormState() {
  try {
    const raw = localStorage.getItem(storageKey);
    if (!raw) return false;
    const state = JSON.parse(raw);
    Object.entries(state.fields || {}).forEach(([id, value]) => {
      const element = document.getElementById(id);
      if (!element) return;
      if (id === "travel-profile") {
        const visibleValues = [...element.options].map((option) => option.value);
        const legacyMap = {
          "city-summer": "city-trip",
          "short-trip": "budget-anywhere",
        };
        element.value = visibleValues.includes(value) ? value : legacyMap[value] || "budget-anywhere";
        return;
      }
      element.value = value;
    });
    setCheckedValues("#transport-options", state.groups?.transports || []);
    setCheckedValues("#budget-levers", state.groups?.levers || []);
    setCheckedValues("#vibe-options", state.groups?.vibes || []);
    setCheckedValues("#stay-options", state.groups?.stays || []);
    if (state.groups?.board) setRadioValue("board", state.groups.board);
    if (state.groups?.rail) document.querySelector("#night-train").checked = state.groups.rail.nightTrain;
    normalizeVisibleTravelProfile();
    const start = document.querySelector("#start-date");
    const end = document.querySelector("#end-date");
    end.min = start.value;
    return true;
  } catch (error) {
    console.warn("Gespeicherter Formularzustand konnte nicht geladen werden.", error);
    return false;
  }
}

function normalizeVisibleTravelProfile() {
  const select = document.querySelector("#travel-profile");
  if ([...select.options].some((option) => option.value === select.value)) return;
  select.value = "budget-anywhere";
}

function resetConflictingPlaceFilterForProfile(profile) {
  const includeInput = document.querySelector("#include-countries");
  const current = includeInput.value.trim();
  if (!current) return;
  const cruiseTerms = /kreuzfahrt|cruise|fjord|fjorde|flusskreuzfahrt|mittelmeer|donau|ab kiel|ab hamburg|genua|savona|passau|wien|budapest/i;
  if (profile === "cruise" && !cruiseTerms.test(current)) includeInput.value = "";
  if (profile !== "cruise" && cruiseTerms.test(current)) includeInput.value = "";
}

function resetProfileKeywordForProfile(profile) {
  const keywordInput = document.querySelector("#keyword-input");
  const current = keywordInput.value.trim().toLowerCase();
  const autoKeywords = {
    cruise: "kreuzfahrt komfort wasser kultur",
    unusual: "ungewöhnlich wasser boot spontan",
  };
  Object.entries(autoKeywords).forEach(([autoProfile, value]) => {
    if (profile !== autoProfile && current === value) keywordInput.value = "";
  });
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function listFromInput(id) {
  return document
    .querySelector(id)
    .value.split(",")
    .map((item) => item.trim().toLowerCase())
    .filter(Boolean);
}

function expandPlaceIncludes(includes) {
  const expanded = new Set(includes);
  includes.forEach((item) => {
    (regionIncludeAliases[item] || []).forEach((country) => expanded.add(country.toLowerCase()));
  });
  return [...expanded];
}

function fallbackCountriesForIncludes(includes) {
  if (!includes.length) return [];
  const requested = new Set(expandPlaceIncludes(includes));
  const requestedList = [...requested];
  return fallbackCountryCatalog.filter((entry) => {
    const terms = [entry.country, entry.region, entry.focus, ...(entry.aliases || [])].map((item) => item.toLowerCase());
    return terms.some((term) => requested.has(term) || requestedList.some((item) => term.includes(item) || item.includes(term)));
  });
}

function destinationsForSearch(includes) {
  const existingCountries = new Set(destinations.map((destination) => destination.country.toLowerCase()));
  const generated = fallbackCountriesForIncludes(includes)
    .filter((entry) => !existingCountries.has(entry.country.toLowerCase()))
    .map((entry) => fallbackDestination(entry));
  return [...destinations, ...generated];
}

function fallbackDestination(entry) {
  const defaults = fallbackRegionDefaults[entry.region] || fallbackRegionDefaults.Fernziel;
  const lowerCost = ["Balkan", "Osteuropa", "Nordafrika"].includes(entry.region);
  const highCost = ["Nordeuropa", "Westeuropa"].includes(entry.region);
  return {
    city: `${entry.country}: ${entry.focus}`,
    country: entry.country,
    region: `${entry.region} · automatisch ergänzt`,
    searchQuery: `${entry.focus} ${entry.country} Budget Unterkunft`,
    airport: entry.airport,
    vibes: entry.vibes,
    hidden: lowerCost ? 76 : highCost ? 62 : 68,
    comfort: highCost ? 78 : lowerCost ? 64 : 70,
    daily: defaults.daily,
    living: {
      groceries: Math.round(defaults.daily * 0.52),
      restaurants: Math.round(defaults.daily * 0.78),
      localTransport: Math.max(5, Math.round(defaults.daily * 0.14)),
      activities: Math.max(10, Math.round(defaults.daily * 0.28)),
    },
    lodging: defaults.lodging,
    flightBase: defaults.flightBase,
    season: defaults.season,
    shoulderMonths: [4, 5, 6, 9, 10],
    touristLoad: highCost ? 64 : 48,
    kitchenSavings: highCost ? 24 : 14,
    localSavings: lowerCost ? 12 : 10,
    nearbyAirport: true,
    route: defaults.route,
    fallback: true,
    unusual: {
      label: `${entry.country} als Suchraum öffnen`,
      search: `${entry.focus} ${entry.country} ungewöhnliche Unterkunft Budget`,
      fit: lowerCost ? 78 : 66,
      note: "automatischer Länder-Vorschlag: gute Kandidaten müssen über Unterkunftsreviews und konkrete Anreise gegengeprüft werden",
    },
    why: `Noch keine kuratierte Geheimtipp-Region im Katalog. Die App öffnet ${entry.country} trotzdem als Suchraum und schätzt Unterkunft, Alltag und Anreise grob für ${entry.focus}.`,
  };
}

function keywordTagsFromInput(value) {
  return value
    .toLowerCase()
    .split(/[,\s]+/)
    .map((item) => item.trim())
    .filter(Boolean)
    .flatMap((word) => keywordMap[word] || [word]);
}

function destinationKeywordTraits(destination, planContext = {}) {
  const traits = new Set(destination.vibes);
  if (destination.cruise) {
    traits.add("cruise");
    traits.add("water");
    traits.add("comfort");
  }
  if (destination.daily <= 42) traits.add("cheap");
  if (destination.daily <= 56) traits.add("value");
  if (destination.hidden >= 80) traits.add("hidden");
  if (destination.touristLoad <= 45) traits.add("quiet");
  if (destination.comfort >= 68) traits.add("safe");
  if (destination.living?.restaurants <= 30) traits.add("food");
  if (destination.vibes.includes("strand")) {
    traits.add("beach");
    traits.add("water");
  }
  if (destination.vibes.includes("berge")) traits.add("mountains");
  if (destination.vibes.includes("natur")) traits.add("nature");
  if (destination.vibes.includes("stadt")) traits.add("city");
  if (destination.vibes.includes("kultur")) traits.add("culture");
  if (destination.vibes.includes("essen")) traits.add("food");
  if (destination.unusual) {
    traits.add("unusual");
    if (/boot|segel/i.test(destination.unusual.label)) traits.add("boat");
    if (/faehre|fähre|insel/i.test(destination.unusual.label)) traits.add("ferry");
    if (/huette|hütte/i.test(destination.unusual.label)) traits.add("cabin");
    if (/bauernhof/i.test(destination.unusual.label)) traits.add("farm");
    if (/retreat|kloster/i.test(destination.unusual.label)) traits.add("retreat");
  }
  if (["Kotor", "Ohrid", "Naxos", "Rijeka & Cres", "Ponta Delgada", "Madeira Nordküste", "Essaouira", "Gjirokaster & Himara", "Ostsee Schleswig-Holstein", "Nordsee Schleswig-Holstein", "Mecklenburgische Ostsee", "Usedom & Stettiner Haff", "Dänische Nordsee", "Zeeland & Südholland Küste", "Polnische Ostsee"].includes(destination.city)) traits.add("water");
  if (["Ohrid"].includes(destination.city)) traits.add("lake");
  if (["Montenegro", "Albanien", "Griechenland", "Kroatien", "Portugal", "Marokko", "Italien"].includes(destination.country)) traits.add("warm");
  if (planContext.transportHours && planContext.transportHours <= 6) traits.add("short-travel");
  return traits;
}

function keywordMatch(destination, keywordTags, planContext = {}) {
  if (!keywordTags.length) return { score: 0, matches: [] };
  const traits = destinationKeywordTraits(destination, planContext);
  const matches = [...new Set(keywordTags.filter((tag) => traits.has(tag)))];
  const score = Math.round((matches.length / Math.max(1, new Set(keywordTags).size)) * 18);
  return { score, matches };
}

function parseChildAges(value, travelers) {
  return value
    .split(/[,;\s]+/)
    .map((item) => item.trim())
    .filter(Boolean)
    .map((item) => Number(item))
    .filter((age) => Number.isFinite(age) && age >= 0 && age < 18)
    .slice(0, Math.max(0, travelers - 1));
}

function readTravelerDetailsState() {
  try {
    const raw = document.querySelector("#traveler-details-state")?.value;
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    return [];
  }
}

function collectTravelerDetails() {
  const rows = [...document.querySelectorAll("#traveler-details .traveler-row")];
  return rows.map((row) => {
    const ageValue = row.querySelector('[data-field="age"]').value;
    return {
      age: ageValue === "" ? null : Number(ageValue),
      bahncard: row.querySelector('[data-field="bahncard"]').value,
      deutschlandticket: row.querySelector('[data-field="deutschlandticket"]').checked,
    };
  });
}

function writeTravelerDetailsState(details) {
  const hidden = document.querySelector("#traveler-details-state");
  if (hidden) hidden.value = JSON.stringify(details);
}

function renderTravelerDetails() {
  const container = document.querySelector("#traveler-details");
  if (!container) return;
  const travelers = clamp(Number(document.querySelector("#travelers").value) || 1, 1, 8);
  const current = collectTravelerDetails().length ? collectTravelerDetails() : readTravelerDetailsState();
  const legacyChildAges = parseChildAges(document.querySelector("#child-ages")?.value || "", travelers);
  const details = Array.from({ length: travelers }, (_, index) => {
    const existing = current[index] || {};
    const inferredChildAge = legacyChildAges[index - Math.max(0, travelers - legacyChildAges.length)];
    return {
      age: Number.isFinite(existing.age) ? existing.age : Number.isFinite(inferredChildAge) ? inferredChildAge : null,
      bahncard: existing.bahncard || "none",
      deutschlandticket: Boolean(existing.deutschlandticket),
    };
  });

  container.innerHTML = details
    .map((person, index) => `
      <div class="traveler-row" data-index="${index}">
        <div class="traveler-row__name">Person ${index + 1}</div>
        <label>
          Alter
          <input data-field="age" type="number" min="0" max="99" value="${person.age ?? ""}" placeholder="z. B. 34" />
        </label>
        <label>
          BahnCard
          <select data-field="bahncard">
            <option value="none"${person.bahncard === "none" ? " selected" : ""}>keine</option>
            <option value="bc25"${person.bahncard === "bc25" ? " selected" : ""}>BahnCard 25</option>
            <option value="bc50"${person.bahncard === "bc50" ? " selected" : ""}>BahnCard 50</option>
            <option value="bc100"${person.bahncard === "bc100" ? " selected" : ""}>BahnCard 100</option>
          </select>
        </label>
        <label class="traveler-ticket">
          <input data-field="deutschlandticket" type="checkbox"${person.deutschlandticket ? " checked" : ""} />
          Deutschlandticket
        </label>
      </div>
    `)
    .join("");
  writeTravelerDetailsState(details);
}

function travelerConfigFromForm(travelers) {
  const details = collectTravelerDetails().slice(0, travelers);
  writeTravelerDetailsState(details);
  const ages = details.map((person) => person.age).filter((age) => Number.isFinite(age));
  const childAges = ages.filter((age) => age >= 0 && age < 18);
  const legacyChildAges = parseChildAges(document.querySelector("#child-ages")?.value || "", travelers);
  const resolvedChildAges = childAges.length ? childAges : legacyChildAges;
  const bahncardCounts = details.reduce((counts, person) => {
    if (person.bahncard && person.bahncard !== "none") counts[person.bahncard] = (counts[person.bahncard] || 0) + 1;
    return counts;
  }, {});
  const deutschlandticket = details.filter((person) => person.deutschlandticket).length;
  document.querySelector("#bahncard-count").value = String(Object.values(bahncardCounts).reduce((sum, count) => sum + count, 0));
  document.querySelector("#deutschlandticket-count").value = String(deutschlandticket);
  return {
    details,
    childAges: resolvedChildAges,
    railPrefs: {
      bahncardCounts,
      deutschlandticket,
      nightTrain: document.querySelector("#night-train").checked,
    },
  };
}

function familyPricing(travelers, childAges) {
  const children = childAges.length;
  const adults = Math.max(1, travelers - children);
  const transportUnits = adults + childAges.reduce((sum, age) => sum + (age < 2 ? 0.1 : age < 6 ? 0.35 : age < 12 ? 0.55 : age < 16 ? 0.75 : 0.9), 0);
  const livingUnits = adults + childAges.reduce((sum, age) => sum + (age < 2 ? 0.15 : age < 6 ? 0.45 : age < 12 ? 0.65 : age < 16 ? 0.85 : 0.95), 0);
  const skiPassUnits = adults + childAges.reduce((sum, age) => sum + (age < 6 ? 0.2 : age < 12 ? 0.55 : age < 16 ? 0.75 : 0.9), 0);
  const skiRentalUnits = adults + childAges.reduce((sum, age) => sum + (age < 6 ? 0.3 : age < 12 ? 0.65 : age < 16 ? 0.85 : 0.95), 0);
  const extraAdults = Math.max(0, adults - 2);
  const childRoomLoad = childAges.reduce((sum, age) => sum + (age < 6 ? 0.08 : age < 12 ? 0.18 : age < 16 ? 0.3 : 0.38), 0);
  const lodgingFactor = Math.max(0.92, 1 + extraAdults * 0.42 + childRoomLoad - (children && travelers <= 2 ? 0.05 : 0));
  return {
    adults,
    children,
    childAges,
    transportUnits,
    livingUnits,
    timeUnits: transportUnits,
    skiPassUnits,
    skiRentalUnits,
    lodgingFactor,
    label: children ? `${adults} Erw., ${children} Kind${children > 1 ? "er" : ""} (${childAges.join(", ")})` : `${travelers} Erw.`,
  };
}

function travelTimePreference(value, targetNights, travelProfile) {
  const labels = {
    cheap: "als Sparfuchs bewertet",
    relaxed: "entspannt bewertet",
    balanced: "ausgewogen bewertet",
    strict: "streng bewertet",
  };
  const resolved = value === "auto"
    ? travelProfile === "budget-hunter"
      ? "cheap"
      : travelProfile === "short-trip" || targetNights <= 2
      ? "strict"
      : targetNights <= 5
        ? "balanced"
        : "relaxed"
    : value;
  const hourlyValues = { cheap: 3, relaxed: 8, balanced: 18, strict: 32 };
  const toleranceHours = { cheap: 18, relaxed: 10, balanced: 7, strict: 4 };
  const penaltyWeights = { cheap: 0.35, relaxed: 1.2, balanced: 2.6, strict: 5.2 };
  return {
    mode: resolved,
    label: labels[resolved] || labels.balanced,
    hourlyValue: hourlyValues[resolved] || hourlyValues.balanced,
    toleranceHours: toleranceHours[resolved] || toleranceHours.balanced,
    penaltyWeight: penaltyWeights[resolved] || penaltyWeights.balanced,
  };
}

function euro(value) {
  return new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(value);
}

function dateIsFarFuture(startDate) {
  const diffDays = (localDate(startDate) - today) / 86400000;
  return diffDays > 330;
}

function dateNeedsLiveLodgingPrice(startDate) {
  const diffDays = (localDate(startDate) - today) / 86400000;
  return diffDays >= 0 && diffDays <= 120;
}

function addDays(dateString, days) {
  const date = localDate(dateString);
  date.setDate(date.getDate() + days);
  return toInputDate(date);
}

function daysBetween(startDate, endDate) {
  return Math.max(0, Math.round((localDate(endDate) - localDate(startDate)) / 86400000));
}

function seasonalFlight(destination, startDate) {
  const month = localDate(startDate).getMonth() + 1;
  const highSeason = [6, 7, 8, 12].includes(month);
  const shoulder = [4, 5, 9, 10].includes(month);
  const multiplier = dateIsFarFuture(startDate) ? 1 : highSeason ? destination.season : shoulder ? 1.04 : 0.92;
  return Math.round(destination.flightBase * multiplier);
}

function routeProfile(destination) {
  if (destination.cruise) {
    return { flightHours: 4, train: 95, trainHours: 6.5, nightTrain: 120, nightTrainHours: 10, bus: 62, busHours: 9, car: 115, carHours: 5.5, railComfort: 78, nightComfort: 72, busComfort: 52, carComfort: 70 };
  }
  if (destination.route) return destination.route;
  const country = destination.country.toLowerCase();
  const profiles = {
    "italien": { flightHours: 5, train: 170, trainHours: 10, nightTrain: 135, nightTrainHours: 13, bus: 95, busHours: 17, car: 230, carHours: 13, railComfort: 74, nightComfort: 76, busComfort: 48, carComfort: 62 },
    "kroatien": { flightHours: 5.5, train: 145, trainHours: 13, nightTrain: 125, nightTrainHours: 15, bus: 88, busHours: 18, car: 245, carHours: 14, railComfort: 63, nightComfort: 70, busComfort: 46, carComfort: 58 },
    "bosnien und herzegowina": { flightHours: 6, train: 155, trainHours: 16, nightTrain: 145, nightTrainHours: 18, bus: 82, busHours: 21, car: 260, carHours: 17, railComfort: 50, nightComfort: 62, busComfort: 44, carComfort: 52 },
    "montenegro": { flightHours: 6.5, train: 185, trainHours: 24, nightTrain: 165, nightTrainHours: 25, bus: 92, busHours: 30, car: 320, carHours: 22, railComfort: 42, nightComfort: 58, busComfort: 40, carComfort: 46 },
    "albanien": { flightHours: 6, train: null, trainHours: null, bus: 105, busHours: 30, railComfort: 0, busComfort: 38 },
    "bulgarien": { flightHours: 5.5, train: 145, trainHours: 21, nightTrain: 130, nightTrainHours: 23, bus: 78, busHours: 24, railComfort: 52, nightComfort: 60, busComfort: 42 },
    "griechenland": { flightHours: 6.5, train: null, trainHours: null, bus: 125, busHours: 34, railComfort: 0, busComfort: 35 },
    "spanien": { flightHours: 5.5, train: 190, trainHours: 15, nightTrain: 155, nightTrainHours: 17, bus: 110, busHours: 24, car: 285, carHours: 18, railComfort: 58, nightComfort: 65, busComfort: 38, carComfort: 48 },
    "türkei": { flightHours: 6.5, train: null, trainHours: null, bus: null, busHours: null, car: null, carHours: null, railComfort: 0, busComfort: 0, carComfort: 0 },
    "frankreich": { flightHours: 5, train: 155, trainHours: 10, nightTrain: 135, nightTrainHours: 12, bus: 82, busHours: 15, car: 220, carHours: 11, railComfort: 72, nightComfort: 70, busComfort: 48, carComfort: 62 },
    "ägypten": { flightHours: 7, train: null, trainHours: null, bus: null, busHours: null, car: null, carHours: null, railComfort: 0, busComfort: 0, carComfort: 0 },
    "tunesien": { flightHours: 6.5, train: null, trainHours: null, bus: null, busHours: null, car: null, carHours: null, railComfort: 0, busComfort: 0, carComfort: 0 },
    "serbien": { flightHours: 5.5, train: 145, trainHours: 17, nightTrain: 132, nightTrainHours: 19, bus: 76, busHours: 20, car: 245, carHours: 14, railComfort: 52, nightComfort: 62, busComfort: 44, carComfort: 56 },
    "kosovo": { flightHours: 6, train: null, trainHours: null, bus: 90, busHours: 27, car: 290, carHours: 18, railComfort: 0, busComfort: 38, carComfort: 48 },
    "portugal": { flightHours: 8, train: null, trainHours: null, bus: null, busHours: null, railComfort: 0, busComfort: 0 },
    "marokko": { flightHours: 8, train: null, trainHours: null, bus: null, busHours: null, railComfort: 0, busComfort: 0 },
    "georgien": { flightHours: 9, train: null, trainHours: null, bus: null, busHours: null, railComfort: 0, busComfort: 0 },
    "nordmazedonien": { flightHours: 6.5, train: null, trainHours: null, bus: 98, busHours: 28, railComfort: 0, busComfort: 40 },
    "polen": { flightHours: 5, train: 125, trainHours: 11, nightTrain: 112, nightTrainHours: 12, bus: 72, busHours: 14, car: 145, carHours: 7.5, railComfort: 68, nightComfort: 72, busComfort: 48, carComfort: 66 },
    "slowenien": { flightHours: 5.5, train: 150, trainHours: 13, nightTrain: 128, nightTrainHours: 14, bus: 84, busHours: 16, car: 230, carHours: 12.5, railComfort: 66, nightComfort: 72, busComfort: 46, carComfort: 60 },
    "österreich": { flightHours: 4.5, train: 135, trainHours: 9, nightTrain: 118, nightTrainHours: 10.5, bus: 78, busHours: 12, car: 180, carHours: 9.5, railComfort: 78, nightComfort: 76, busComfort: 52, carComfort: 66 },
    "deutschland": { flightHours: 4, train: 95, trainHours: 7, bus: 55, busHours: 10, car: 95, carHours: 5.5, railComfort: 82, busComfort: 58, carComfort: 74 },
    "dänemark": { flightHours: 4.5, train: 125, trainHours: 8, bus: 72, busHours: 11, car: 150, carHours: 7.5, railComfort: 78, busComfort: 54, carComfort: 70 },
    "niederlande": { flightHours: 4, train: 115, trainHours: 7, bus: 68, busHours: 10, car: 145, carHours: 7, railComfort: 80, busComfort: 55, carComfort: 70 },
    "schweiz": { flightHours: 5, train: 160, trainHours: 9.5, nightTrain: 142, nightTrainHours: 11, bus: 90, busHours: 13, car: 210, carHours: 10, railComfort: 84, nightComfort: 78, busComfort: 50, carComfort: 64 },
    "schweden": { flightHours: 4.5, train: 135, trainHours: 9, nightTrain: 150, nightTrainHours: 12, bus: 82, busHours: 13, car: 190, carHours: 10, railComfort: 78, nightComfort: 72, busComfort: 50, carComfort: 68 },
    "england": { flightHours: 5, train: 190, trainHours: 13, nightTrain: null, nightTrainHours: null, bus: 95, busHours: 20, car: 260, carHours: 15, railComfort: 62, nightComfort: 0, busComfort: 42, carComfort: 48 },
    "schottland": { flightHours: 5.5, train: 210, trainHours: 16, nightTrain: null, nightTrainHours: null, bus: 105, busHours: 24, car: 300, carHours: 18, railComfort: 56, nightComfort: 0, busComfort: 38, carComfort: 44 },
  };
  return profiles[country] || { flightHours: 7, train: null, trainHours: null, bus: null, busHours: null, railComfort: 0, busComfort: 0 };
}

function railPreferencesFromForm() {
  const travelers = Number(document.querySelector("#travelers").value) || 1;
  return {
    bahncard: clamp(Number(document.querySelector("#bahncard-count").value) || 0, 0, travelers),
    bahncardCounts: {},
    deutschlandticket: clamp(Number(document.querySelector("#deutschlandticket-count").value) || 0, 0, travelers),
    nightTrain: document.querySelector("#night-train").checked,
  };
}

function railPricingUnits(destination, family, railPrefs, mode) {
  const travelers = Math.max(1, family.adults + family.children);
  let units = family.transportUnits;
  const notes = [];

  if (mode === "train" && destination.country === "Deutschland" && railPrefs.deutschlandticket > 0) {
    const coveredShare = Math.min(1, railPrefs.deutschlandticket / travelers);
    units *= 1 - coveredShare * 0.72;
    notes.push("Deutschlandticket berücksichtigt");
  }

  const bahncardCounts = railPrefs.bahncardCounts || (railPrefs.bahncard ? { bc25: railPrefs.bahncard } : {});
  const bahncardDiscountUnits =
    (bahncardCounts.bc25 || 0) * 0.25 +
    (bahncardCounts.bc50 || 0) * 0.42 +
    (bahncardCounts.bc100 || 0) * 0.85;
  if (bahncardDiscountUnits > 0) {
    const discountShare = Math.min(0.85, bahncardDiscountUnits / travelers);
    units *= 1 - discountShare;
    notes.push("BahnCard berücksichtigt");
  }

  if (mode === "night-train") notes.push("Nachtzug prüfen");
  return { units: Math.max(0.2, units), notes };
}

function weekdayDealFactor(startDate, nights, mode) {
  const weekday = localDate(startDate).getDay();
  const midweekStart = [2, 3, 4].includes(weekday);
  const longStaySweetSpot = nights === 8 || nights === 9;
  const weekendPenalty = [5, 6, 0].includes(weekday);

  if (mode === "flight") {
    return (midweekStart ? 0.88 : weekendPenalty ? 1.12 : 1) * (longStaySweetSpot ? 0.93 : 1);
  }
  if (mode === "train") {
    return (midweekStart ? 0.92 : weekendPenalty ? 1.06 : 1) * (nights >= 8 ? 0.96 : 1);
  }
  return (midweekStart ? 0.9 : weekendPenalty ? 1.04 : 1) * (nights >= 8 ? 0.94 : 1);
}

function bookingWindowFactor(startDate, mode) {
  const daysOut = daysBetween(toInputDate(today), startDate);
  if (mode !== "flight") {
    if (daysOut >= 21 && daysOut <= 90) return 0.94;
    if (daysOut < 7) return 1.12;
    return 1;
  }
  if (daysOut >= 45 && daysOut <= 180) return 0.92;
  if (daysOut >= 21 && daysOut < 45) return 0.98;
  if (daysOut < 14) return 1.18;
  if (daysOut > 300) return 1.08;
  return 1;
}

function airportAccessOptions(origin) {
  const normalized = normalizePlaceName(origin);
  const known = [
    {
      match: ["lubeck", "lübeck"],
      airports: [
        { code: "HAM", label: "Hamburg", accessMode: "Bahn/Auto", accessHours: 1.2, accessCost: 18, nearbyRank: 1 },
        { code: "BER", label: "Berlin", accessMode: "Bahn", accessHours: 3.2, accessCost: 34, nearbyRank: 2 },
        { code: "BRE", label: "Bremen", accessMode: "Bahn/Auto", accessHours: 2.3, accessCost: 26, nearbyRank: 3 },
        { code: "HAJ", label: "Hannover", accessMode: "Bahn", accessHours: 2.6, accessCost: 30, nearbyRank: 4 },
      ],
    },
    {
      match: ["hamburg"],
      airports: [
        { code: "HAM", label: "Hamburg", accessMode: "ÖPNV/Taxi", accessHours: 0.8, accessCost: 8, nearbyRank: 1 },
        { code: "BER", label: "Berlin", accessMode: "Bahn", accessHours: 2.3, accessCost: 32, nearbyRank: 2 },
        { code: "BRE", label: "Bremen", accessMode: "Bahn", accessHours: 1.8, accessCost: 24, nearbyRank: 3 },
        { code: "HAJ", label: "Hannover", accessMode: "Bahn", accessHours: 2.1, accessCost: 28, nearbyRank: 4 },
      ],
    },
    {
      match: ["berlin"],
      airports: [
        { code: "BER", label: "Berlin", accessMode: "ÖPNV/Taxi", accessHours: 0.8, accessCost: 8, nearbyRank: 1 },
        { code: "LEJ", label: "Leipzig/Halle", accessMode: "Bahn", accessHours: 1.8, accessCost: 24, nearbyRank: 2 },
        { code: "DRS", label: "Dresden", accessMode: "Bahn", accessHours: 2.2, accessCost: 28, nearbyRank: 3 },
        { code: "HAM", label: "Hamburg", accessMode: "Bahn", accessHours: 2.4, accessCost: 32, nearbyRank: 4 },
      ],
    },
    {
      match: ["kiel"],
      airports: [
        { code: "HAM", label: "Hamburg", accessMode: "Bahn/Auto", accessHours: 1.3, accessCost: 18, nearbyRank: 1 },
        { code: "BER", label: "Berlin", accessMode: "Bahn", accessHours: 3.5, accessCost: 38, nearbyRank: 2 },
        { code: "BLL", label: "Billund", accessMode: "Auto/Bus", accessHours: 3.1, accessCost: 36, nearbyRank: 3 },
      ],
    },
    {
      match: ["munchen", "muenchen"],
      airports: [
        { code: "MUC", label: "München", accessMode: "S-Bahn/Auto", accessHours: 0.9, accessCost: 10, nearbyRank: 1 },
        { code: "NUE", label: "Nürnberg", accessMode: "Bahn", accessHours: 1.7, accessCost: 24, nearbyRank: 2 },
        { code: "SZG", label: "Salzburg", accessMode: "Bahn/Auto", accessHours: 1.9, accessCost: 28, nearbyRank: 3 },
      ],
    },
  ];
  return known.find((entry) => entry.match.some((name) => normalized.includes(name)))?.airports || [
    { code: originAirportCode(origin), label: origin || "nächster Flughafen", accessMode: "lokale Anreise", accessHours: 0.9, accessCost: 10, nearbyRank: 1 },
  ].filter((airport) => airport.code);
}

function flightAirportAdjustment(airportCode, destination) {
  const country = destination.country.toLowerCase();
  const southEast = ["montenegro", "albanien", "nordmazedonien", "bosnien und herzegowina", "bulgarien", "griechenland", "georgien"];
  const domesticNear = ["deutschland", "dänemark", "niederlande", "polen", "österreich", "schweiz"];
  let priceFactor = 1;
  let extraHours = 0;
  let stops = 1;

  if (southEast.includes(country)) {
    if (airportCode === "BER") {
      priceFactor = 0.78;
      extraHours = -0.7;
      stops = 0;
    } else if (["MUC", "VIE"].includes(airportCode)) {
      priceFactor = 0.88;
      extraHours = -0.3;
      stops = 0;
    } else if (airportCode === "HAM") {
      priceFactor = 1.28;
      extraHours = 1.2;
      stops = 1;
    } else {
      priceFactor = 1.08;
      extraHours = 0.7;
      stops = 1;
    }
  } else if (domesticNear.includes(country)) {
    if (airportCode === "HAM" || airportCode === "BER" || airportCode === "MUC") {
      priceFactor = 0.95;
      extraHours = -0.2;
      stops = 0;
    }
  } else if (["portugal", "marokko"].includes(country)) {
    if (["BER", "MUC", "HAM"].includes(airportCode)) {
      priceFactor = airportCode === "BER" ? 0.9 : 0.98;
      stops = airportCode === "BER" ? 0 : 1;
      extraHours = airportCode === "BER" ? -0.3 : 0.5;
    }
  }

  return { priceFactor, extraHours, stops };
}

function flightAirportRole(flight, nearest) {
  if (flight.originAirport.nearbyRank === 1) {
    return {
      type: "nearby",
      label: "Flughafen in der Nähe",
      reason: `${flight.originAirport.label} ist vom Startort am schnellsten erreichbar.`,
    };
  }
  const savings = nearest ? nearest.price - flight.price : 0;
  const extraTime = nearest ? Math.max(0, flight.hours - nearest.hours) : flight.originAirport.accessHours;
  const isDeal = savings >= 70 || (savings >= 45 && extraTime <= 1.8);
  return {
    type: isDeal ? "deal" : "alternative",
    label: isDeal ? "Günstige Flughafen-Alternative" : "Weitere Flughafen-Alternative",
    reason: isDeal
      ? `${euro(savings)} günstiger als ${nearest.originAirport.label}, plus ca. ${formatHours(Number(extraTime.toFixed(1)))} mehr Aufwand.`
      : "kommt in Frage, wenn Verbindung oder Flugzeiten besser passen.",
    savings,
    extraTime,
  };
}

function monthOf(dateString) {
  return localDate(dateString).getMonth() + 1;
}

function isSkiSeason(startDate) {
  return [12, 1, 2, 3].includes(monthOf(startDate));
}

function isShoulderMonth(destination, startDate) {
  return destination.shoulderMonths.includes(monthOf(startDate));
}

function weatherScore(destination, startDate) {
  const month = monthOf(startDate);
  const warmDestinations = ["Montenegro", "Albanien", "Griechenland", "Kroatien", "Portugal", "Marokko", "Italien"];
  const mountainDestinations = ["Bulgarien", "Georgien", "Bosnien und Herzegowina"];
  if (warmDestinations.includes(destination.country) && [11, 12, 1, 2].includes(month)) return 48;
  if (mountainDestinations.includes(destination.country) && [7, 8, 9].includes(month)) return 82;
  if (isShoulderMonth(destination, startDate)) return 88;
  if ([6, 7, 8].includes(month)) return 78;
  return 68;
}

function hasLever(levers, value) {
  return levers.includes(value);
}

function stayQuality(destination, type) {
  const baseByType = {
    airbnb: { rating: 4.55, reviews: 44, risk: 18, ageMonths: 5, recentBad: 1, recentGood: 8 },
    "budget-room": { rating: 4.02, reviews: 90, risk: 24, ageMonths: 4, recentBad: 1, recentGood: 12 },
    hotel: { rating: 4.35, reviews: 160, risk: 16, ageMonths: 3, recentBad: 2, recentGood: 18 },
    pension: { rating: 4.28, reviews: 36, risk: 22, ageMonths: 7, recentBad: 1, recentGood: 6 },
  };
  const base = baseByType[type] || baseByType.hotel;
  const qualityLift = (destination.comfort - 65) / 100;
  const hiddenPenalty = destination.hidden > 88 && type !== "hotel" ? 0.04 : 0;
  const touristReviewBoost = Math.round(destination.touristLoad * (type === "hotel" ? 2.1 : type === "budget-room" ? 1.6 : 1.1));
  const reviews = Math.max(12, base.reviews + touristReviewBoost - Math.round(destination.hidden * 0.55));
  const rating = clamp(base.rating + qualityLift - hiddenPenalty, 3.7, 4.9);
  const ageMonths = clamp(base.ageMonths + Math.round((destination.hidden - 75) / 10), 1, 30);
  const recentBad = Math.max(0, base.recentBad + (destination.touristLoad > 70 && type !== "budget-room" ? 1 : 0) + (rating < (type === "budget-room" ? 3.95 : 4.25) ? 1 : 0));
  const recentGood = Math.max(0, base.recentGood + Math.round(destination.comfort / 12) - recentBad);
  const recencyWeight = ageMonths <= 6 ? 1 : ageMonths <= 12 ? 0.72 : 0.42;
  const trend = recentGood - recentBad * 2.4;
  const trust = clamp(
    rating * 12 +
      Math.min(22, Math.sqrt(reviews) * 3.1) +
      trend * recencyWeight +
      (ageMonths <= 6 ? 8 : ageMonths <= 12 ? 3 : -8) -
      recentBad * 5,
    0,
    100
  );
  const risk = clamp(
    base.risk +
      Math.max(0, 4.45 - rating) * 35 +
      recentBad * (ageMonths <= 6 ? 9 : 5) +
      Math.max(0, 45 - trust) * 0.35 -
      qualityLift * 20,
    6,
    65
  );
  return { rating: Number(rating.toFixed(2)), reviews, risk: Math.round(risk), trust: Math.round(trust), ageMonths, recentBad, recentGood };
}

function passesQuality(quality, thresholds) {
  const enoughSignal = quality.reviews >= 18 || (quality.reviews >= 8 && quality.ageMonths <= 6 && quality.recentBad === 0);
  const noFreshAlarm = !(quality.recentBad >= 3 && quality.ageMonths <= 6);
  const budgetFallback = thresholds.budgetFlexible &&
    quality.rating >= thresholds.budgetMinRating &&
    quality.reviews >= 30 &&
    quality.trust >= thresholds.budgetMinTrust &&
    quality.risk <= thresholds.budgetMaxRisk &&
    quality.recentBad <= 2 &&
    noFreshAlarm;
  if (budgetFallback) return true;
  return quality.rating >= thresholds.minRating && quality.trust >= thresholds.minTrust && quality.risk <= thresholds.maxRisk && enoughSignal && noFreshAlarm;
}

function budgetAwareQualityThresholds(options) {
  const shortestNights = Math.max(1, Math.min(...options.candidateNights));
  const perPersonNight = options.budget / Math.max(1, options.familyPricing.adults + options.familyPricing.children) / shortestNights;
  const tightBudget = options.budgetRescue || options.travelProfile === "budget-hunter" || perPersonNight < 95;
  if (!tightBudget) return options.qualityThresholds;
  return {
    ...options.qualityThresholds,
    budgetFlexible: true,
    budgetMinRating: Math.min(options.qualityThresholds.budgetMinRating || 4.2, perPersonNight < 70 ? 3.55 : 3.75),
    budgetMinTrust: Math.min(options.qualityThresholds.budgetMinTrust || 50, perPersonNight < 70 ? 32 : 38),
    budgetMaxRisk: Math.max(options.qualityThresholds.budgetMaxRisk || 35, perPersonNight < 70 ? 60 : 52),
  };
}

function dealProfile(startDate, nights, levers) {
  const daysOut = daysBetween(toInputDate(today), startDate);
  const weekday = localDate(startDate).getDay();
  const midweek = [1, 2, 3, 4].includes(weekday);
  const lastMinute = hasLever(levers, "last-minute") && daysOut >= 1 && daysOut <= 21;
  const flashSale = hasLever(levers, "flash-sale") && (midweek || nights >= 8);
  let lodgingDiscount = 1;
  let transportDiscount = 1;
  const notes = [];

  if (lastMinute) {
    lodgingDiscount *= 0.88;
    transportDiscount *= daysOut <= 7 ? 1.08 : 0.96;
    notes.push("Last-Minute-Deal geprüft");
  }
  if (flashSale) {
    lodgingDiscount *= 0.93;
    transportDiscount *= 0.95;
    notes.push("Aktionspreis möglich");
  }

  return { lodgingDiscount, transportDiscount, notes, lastMinute, flashSale };
}

function dailyCostBreakdown(destination, stay, levers) {
  const living = destination.living || {
    groceries: Math.round(destination.daily * 0.45),
    restaurants: Math.round(destination.daily * 0.75),
    localTransport: Math.round(destination.daily * 0.12),
    activities: Math.round(destination.daily * 0.28),
  };
  const kitchen = hasLever(levers, "kitchen") && stay.type === "airbnb";
  const pensionBreakfast = stay.type === "pension";
  const hotelBreakfast = stay.type === "hotel";
  const local = hasLever(levers, "local");

  const food = kitchen
    ? living.groceries * 0.85 + living.restaurants * 0.2
    : pensionBreakfast
      ? living.groceries * 0.15 + living.restaurants * 0.58
      : hotelBreakfast
        ? living.groceries * 0.1 + living.restaurants * 0.68
        : living.restaurants * 0.8;
  const localTransport = living.localTransport * (local ? 0.88 : 1);
  const activities = living.activities * (local ? 0.9 : 1);
  const dailyTotal = Math.round(food + localTransport + activities);
  const groceryPressure = living.groceries >= 30 ? "hohe Supermarktpreise" : living.groceries <= 18 ? "günstige Supermärkte" : "mittlere Supermarktpreise";

  return {
    dailyTotal,
    food: Math.round(food),
    localTransport: Math.round(localTransport),
    activities: Math.round(activities),
    groceries: living.groceries,
    restaurants: living.restaurants,
    groceryPressure,
    kitchen,
  };
}

function boardCostBreakdown(destination, stay, boardPreference, levers) {
  if (destination.cruise) {
    const extras = destination.cruise.dailyExtras || destination.daily || 45;
    return {
      board: "cruise",
      label: "Vollpension an Bord",
      boardNightCost: 0,
      dailyTotal: extras,
      food: Math.round(extras * 0.34),
      localTransport: Math.round(extras * 0.16),
      activities: Math.round(extras * 0.5),
      groceries: 0,
      restaurants: extras,
      kitchen: false,
      groceryPressure: "Bordextras statt Supermarkt",
      totalDailyEquivalent: extras,
      convenience: 10,
    };
  }
  const choices = boardPreference === "auto" ? ["self", "breakfast", "half-board"] : [boardPreference];
  const ranked = choices.map((board) => {
    const boardLabel = {
      self: "Selbstversorgung",
      breakfast: "Frühstück",
      "half-board": "Halbpension",
    }[board];
    const boardNightCost = board === "breakfast" ? 11 : board === "half-board" ? 34 : 0;
    const stayWithBoard = { ...stay, type: board === "self" ? "airbnb" : stay.type };
    const daily = dailyCostBreakdown(destination, stayWithBoard, board === "self" ? [...levers, "kitchen"] : levers);
    const adjustedFood = board === "breakfast"
      ? Math.round(daily.food * 0.78)
      : board === "half-board"
        ? Math.round(daily.food * 0.38)
        : daily.food;
    const dailyTotal = Math.max(12, adjustedFood + daily.localTransport + daily.activities);
    const totalDailyEquivalent = dailyTotal + boardNightCost;
    const convenience = board === "half-board" ? 8 : board === "breakfast" ? 4 : daily.groceries <= 24 ? 5 : -2;
    return {
      board,
      label: boardLabel,
      boardNightCost,
      dailyTotal,
      food: adjustedFood,
      localTransport: daily.localTransport,
      activities: daily.activities,
      groceries: daily.groceries,
      restaurants: daily.restaurants,
      kitchen: board === "self",
      groceryPressure: daily.groceryPressure,
      totalDailyEquivalent,
      convenience,
    };
  });
  return ranked.sort((a, b) => (a.totalDailyEquivalent - a.convenience) - (b.totalDailyEquivalent - b.convenience))[0];
}

function skiCostBreakdown(destination, options, nights) {
  if (options.tripMode !== "ski") return null;
  if (!destination.ski) return null;
  const skiDays = Math.min(options.ski.days, nights);
  const rentalPerDay = options.ski.rental === "needed" ? destination.ski.rental : 0;
  const family = options.familyPricing;
  const adultPassEstimate = destination.ski.pass * skiDays;
  const rentalPerPersonEstimate = rentalPerDay * skiDays;
  const passTotal = destination.ski.pass * skiDays * family.skiPassUnits;
  const rentalTotal = rentalPerDay * skiDays * family.skiRentalUnits;
  const transferTotal = destination.ski.transfer * family.transportUnits;
  const total = passTotal + rentalTotal + transferTotal;
  const levelScore = options.ski.level === "beginner" ? destination.ski.beginner : options.ski.level === "advanced" ? destination.ski.terrain : (destination.ski.beginner + destination.ski.terrain) / 2;
  const snowScore = destination.ski.snow * options.ski.snowWeight;
  const score = levelScore * 0.18 + snowScore * 0.16 - Math.max(0, total / Math.max(family.skiPassUnits, 1) - 420) * 0.035;
  const notes = [`Skipass-Schätzung ca. ${euro(adultPassEstimate)} p. Erw. für ${skiDays} Skitage`, `${destination.ski.resort}`, `${destination.ski.snow}/100 Schnee`];
  if (rentalPerDay) notes.push(`Leihe ca. ${euro(rentalPerPersonEstimate)} p. Person`);
  return {
    total: Math.round(total),
    passTotal: Math.round(passTotal),
    rentalTotal: Math.round(rentalTotal),
    transferTotal: Math.round(transferTotal),
    adultPassEstimate: Math.round(adultPassEstimate),
    rentalPerPersonEstimate: Math.round(rentalPerPersonEstimate),
    dailyEquivalent: Math.round(total / Math.max(nights * family.skiPassUnits, 1)),
    notes,
    score,
    skiDays,
  };
}

function normalizeDisplayPlace(value) {
  const trimmed = String(value || "").trim();
  if (!trimmed) return "";
  const aliases = {
    lubeck: "Lübeck",
    lübeck: "Lübeck",
    hamburg: "Hamburg",
    berlin: "Berlin",
    kiel: "Kiel",
    rostock: "Rostock",
    bremen: "Bremen",
    hannover: "Hannover",
    munchen: "München",
    muenchen: "München",
    koln: "Köln",
    koeln: "Köln",
  };
  const normalized = normalizePlaceName(trimmed);
  return aliases[normalized] || trimmed.replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function busOriginGateway(origin) {
  const normalized = normalizePlaceName(origin);
  const gateways = [
    { match: ["lubeck", "lübeck"], city: "Hamburg", accessLabel: "Zubringer Bahn Lübeck → Hamburg ZOB", accessCost: 14, accessHours: 1.1 },
    { match: ["kiel"], city: "Hamburg", accessLabel: "Zubringer Bahn Kiel → Hamburg ZOB", accessCost: 18, accessHours: 1.4 },
    { match: ["rostock"], city: "Berlin", accessLabel: "Zubringer Bahn Rostock → Berlin ZOB", accessCost: 22, accessHours: 2.5 },
    { match: ["schwerin"], city: "Hamburg", accessLabel: "Zubringer Bahn Schwerin → Hamburg ZOB", accessCost: 16, accessHours: 1.5 },
    { match: ["potsdam"], city: "Berlin", accessLabel: "Zubringer Bahn Potsdam → Berlin ZOB", accessCost: 5, accessHours: 0.8 },
  ];
  const gateway = gateways.find((entry) => entry.match.some((term) => normalized.includes(term)));
  if (gateway) return gateway;
  return { city: normalizeDisplayPlace(origin) || "Hamburg", accessLabel: "", accessCost: 0, accessHours: 0 };
}

function busDestinationGateway(destination) {
  const cityMap = {
    Bansko: { city: "Sofia", accessLabel: "Transfer Sofia → Bansko", accessCost: 14, accessHours: 3 },
    Plovdiv: { city: "Sofia", accessLabel: "Bahn/Bus Sofia → Plovdiv", accessCost: 8, accessHours: 2 },
    Sarajevo: { city: "Sarajevo", accessLabel: "", accessCost: 0, accessHours: 0 },
    Amsterdam: { city: "Amsterdam", accessLabel: "", accessCost: 0, accessHours: 0 },
    "Zeeland & Südholland Küste": { city: "Rotterdam", accessLabel: "Regionalzug Rotterdam → Küste/Zeeland", accessCost: 12, accessHours: 1.3 },
    "Polnische Ostsee": { city: "Danzig", accessLabel: "Regionalzug/Bus Danzig → Küstenort", accessCost: 8, accessHours: 1 },
    Zakopane: { city: "Krakau", accessLabel: "Bus/Bahn Krakau → Zakopane", accessCost: 9, accessHours: 2.4 },
  };
  if (cityMap[destination.city]) return cityMap[destination.city];
  const countryMap = {
    Bulgarien: { city: "Sofia", accessLabel: `Transfer Sofia → ${destination.city}`, accessCost: 14, accessHours: 3 },
    Kroatien: { city: "Zagreb", accessLabel: `Weiterfahrt Zagreb → ${destination.city}`, accessCost: 16, accessHours: 2.5 },
    Montenegro: { city: "Podgorica", accessLabel: `Weiterfahrt Podgorica → ${destination.city}`, accessCost: 14, accessHours: 2.5 },
    Albanien: { city: "Tirana", accessLabel: `Weiterfahrt Tirana → ${destination.city}`, accessCost: 14, accessHours: 2.5 },
    Serbien: { city: "Belgrad", accessLabel: `Weiterfahrt Belgrad → ${destination.city}`, accessCost: 10, accessHours: 1.5 },
    Polen: { city: "Danzig", accessLabel: `Weiterfahrt Danzig → ${destination.city}`, accessCost: 9, accessHours: 1.5 },
    Österreich: { city: "Wien", accessLabel: `Bahn/Bus Wien → ${destination.city}`, accessCost: 18, accessHours: 2.5 },
    Schweiz: { city: "Zürich", accessLabel: `Bahn Zürich → ${destination.city}`, accessCost: 28, accessHours: 2.5 },
  };
  return countryMap[destination.country] || { city: destination.city, accessLabel: "", accessCost: 0, accessHours: 0 };
}

function transportOptions(destination, startDate, nights, allowedModes, maxTravelHours, railPrefs, familyPricing, origin, preferredModes = allowedModes, travelPolicy = {}) {
  const profile = routeProfile(destination);
  const options = [];
  const budgetTravelMode = travelPolicy.budgetRescue || travelPolicy.travelProfile === "budget-hunter" || travelPolicy.timePreference?.mode === "cheap";
  const busHourLimit = budgetTravelMode
    ? Math.max(maxTravelHours, travelPolicy.timePreference?.toleranceHours || 18, 36)
    : maxTravelHours;
  const surfaceReach = Math.min(
    profile.trainHours || Infinity,
    profile.busHours || Infinity,
    profile.carHours || Infinity
  );
  const nearSurfaceBeatsFlight = ["Deutschland", "Niederlande", "Dänemark", "Polen"].includes(destination.country) && surfaceReach <= maxTravelHours + 3;
  if (allowedModes.includes("flight") && profile.flightHours <= maxTravelHours) {
    const baseFlightPrice = seasonalFlight(destination, startDate) * weekdayDealFactor(startDate, nights, "flight") * bookingWindowFactor(startDate, "flight");
    const airportOptions = airportAccessOptions(origin);
    const rawFlights = airportOptions.map((airport) => {
      const adjustment = flightAirportAdjustment(airport.code, destination);
      const flightOnlyHours = Math.max(1.4, profile.flightHours - 1.2 + adjustment.extraHours);
      const hours = Number((flightOnlyHours + airport.accessHours).toFixed(1));
      const price = Math.round(baseFlightPrice * adjustment.priceFactor + airport.accessCost);
      const directness = adjustment.stops === 0 ? "Direktflug wahrscheinlich" : adjustment.stops === 1 ? "Umstieg möglich" : "mehrere Umstiege prüfen";
      return {
        mode: "flight",
        label: preferredModes.includes("flight") ? `Flug ab ${airport.label}` : `Flug-Alternative ab ${airport.label}`,
        price,
        hours,
        comfort: clamp(74 - adjustment.stops * 9 - airport.accessHours * 1.3 + (airport.nearbyRank === 1 ? 2 : 0), 42, 82),
        originAirport: airport,
        flightOnlyHours,
        stops: adjustment.stops,
        advisory: !preferredModes.includes("flight"),
        notes: [
          `Abflug ${airport.code}`,
          `Zubringer ${airport.accessMode}`,
          directness,
          ...(!preferredModes.includes("flight") ? ["Flug als Alternative geprüft"] : []),
        ],
      };
    }).filter((flight) => flight.hours <= maxTravelHours && (!nearSurfaceBeatsFlight || flight.price < (profile.train || profile.car || 999) * 0.55));
    const nearest = rawFlights.find((flight) => flight.originAirport.nearbyRank === 1);
    rawFlights.forEach((flight) => {
      const role = flightAirportRole(flight, nearest);
      flight.airportRole = role;
      flight.notes.unshift(role.label);
      if (role.type === "deal") {
        flight.notes.push(role.reason);
        flight.comfort += Math.min(4, role.savings / 80);
      }
    });
    options.push(...rawFlights.sort((a, b) => (a.price + a.hours * 8) - (b.price + b.hours * 8)).slice(0, 3));
  }
  if (allowedModes.includes("train") && profile.train && profile.trainHours <= maxTravelHours) {
    const railPricing = railPricingUnits(destination, familyPricing, railPrefs, "train");
    options.push({
      mode: "train",
      label: "Bahn",
      price: Math.round(profile.train * weekdayDealFactor(startDate, nights, "train") * bookingWindowFactor(startDate, "train")),
      hours: profile.trainHours,
      comfort: profile.railComfort,
      pricingUnits: railPricing.units,
      notes: railPricing.notes,
    });
  }
  if (allowedModes.includes("train") && railPrefs.nightTrain && profile.nightTrain && profile.nightTrainHours <= Math.max(maxTravelHours, 14)) {
    const railPricing = railPricingUnits(destination, familyPricing, railPrefs, "night-train");
    options.push({
      mode: "night-train",
      label: "Nachtzug",
      price: Math.round(profile.nightTrain * weekdayDealFactor(startDate, nights, "train") * bookingWindowFactor(startDate, "train")),
      hours: profile.nightTrainHours,
      comfort: profile.nightComfort || profile.railComfort,
      pricingUnits: railPricing.units,
      notes: railPricing.notes,
    });
  }
  if (allowedModes.includes("bus") && profile.bus) {
    const busOrigin = busOriginGateway(origin);
    const busDestination = busDestinationGateway(destination);
    const busHours = Number((profile.busHours + busOrigin.accessHours + busDestination.accessHours).toFixed(1));
    const busPrice = Math.round(profile.bus * weekdayDealFactor(startDate, nights, "bus") * bookingWindowFactor(startDate, "bus") + busOrigin.accessCost + busDestination.accessCost);
    if (busHours > busHourLimit) {
      // Too long even for the current time policy.
    } else {
    const busLabel = busOrigin.accessLabel && busDestination.accessLabel
      ? "Bahn + FlixBus + Transfer"
      : busOrigin.accessLabel
        ? "Bahn + FlixBus/Bus"
        : busDestination.accessLabel
          ? "FlixBus + Transfer"
          : "FlixBus/Bus";
    options.push({
      mode: "bus",
      label: busLabel,
      price: busPrice,
      hours: busHours,
      comfort: profile.busComfort,
      originHub: busOrigin,
      destinationHub: busDestination,
      notes: [
        `FlixBus ${busOrigin.city} → ${busDestination.city}`,
        ...(busOrigin.accessLabel ? [busOrigin.accessLabel] : []),
        ...(busDestination.accessLabel ? [busDestination.accessLabel] : []),
        ...(busHours > maxTravelHours ? ["über Zeitlimit, aber Budget-Rettung"] : []),
      ],
    });
    }
  }
  if (allowedModes.includes("car") && profile.car && profile.carHours <= maxTravelHours) {
    options.push({
      mode: "car",
      label: "Auto",
      price: Math.round(profile.car * weekdayDealFactor(startDate, nights, "bus")),
      hours: profile.carHours,
      comfort: profile.carComfort,
      perVehicle: true,
    });
  }
  return options;
}

function bestStayCost(destination, allowedStayTypes, comfortFactor, qualityThresholds) {
  return stayOptionsForDestination(destination, allowedStayTypes, comfortFactor, qualityThresholds)[0] || null;
}

function stayOptionsForDestination(destination, allowedStayTypes, comfortFactor, qualityThresholds) {
  const available = allowedStayTypes.length ? allowedStayTypes : ["airbnb", "budget-room", "hotel", "pension"];
  return available
    .filter((type) => destination.lodging[type])
    .map((type) => {
      const price = destination.lodging[type];
      const quality = stayQuality(destination, type);
      const comfortBias = type === "hotel" ? comfortFactor * 0.22 : type === "airbnb" ? comfortFactor * 0.08 : type === "budget-room" ? -comfortFactor * 0.08 : 0;
      return { type, price, quality, value: price - comfortBias - quality.rating * 3 + quality.risk * 0.18 };
    })
    .filter((stay) => passesQuality(stay.quality, qualityThresholds))
    .sort((a, b) => a.value - b.value);
}

function placeSearchText(destination) {
  const catalogAliases = fallbackCountryCatalog
    .filter((entry) => entry.country === destination.country)
    .flatMap((entry) => [entry.region, ...(entry.aliases || [])])
    .join(" ");
  const aliases = {
    England: "Großbritannien Grossbritannien UK United Kingdom Vereinigtes Königreich",
    Schottland: "Großbritannien Grossbritannien UK United Kingdom Vereinigtes Königreich Scotland",
    Schweden: "Sweden Sverige Skandinavien",
  };
  return [
    destination.city,
    destination.country,
    aliases[destination.country],
    catalogAliases,
    destination.region,
    destination.searchQuery,
    destination.airport,
    destination.ski?.resort,
    ...(destination.vibes || []),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

function primaryPlaceText(destination) {
  return `${destination.city} ${destination.country}`.toLowerCase();
}

function placeMatchStrength(destination, includes) {
  if (!includes.length) return 0;
  const primary = primaryPlaceText(destination);
  const full = placeSearchText(destination);
  if (includes.some((item) => primary === item || destination.city.toLowerCase() === item)) return 3;
  if (includes.some((item) => primary.includes(item) || item.includes(destination.city.toLowerCase()))) return 2;
  if (includes.some((item) => full.includes(item))) return 1;
  return 0;
}

function matchesPlaceFilters(destination, includes, excludes) {
  const text = placeSearchText(destination);
  if (excludes.some((item) => text.includes(item))) return false;
  if (!includes.length) return true;
  return placeMatchStrength(destination, includes) > 0;
}

function updateFeedbackLinks() {
  const links = [document.querySelector("#feedback-link"), document.querySelector("#feedback-link-footer")].filter(Boolean);
  if (!links.length) return;
  const profile = profileLabels[document.querySelector("#travel-profile")?.value] || "Individuell";
  const origin = document.querySelector("#origin")?.value || "";
  const budget = document.querySelector("#budget")?.value || "";
  const travelers = document.querySelector("#travelers")?.value || "";
  const start = document.querySelector("#start-date")?.value || "";
  const end = document.querySelector("#end-date")?.value || "";
  const includes = document.querySelector("#include-countries")?.value || "(leer, beliebte Ziele)";
  const excludes = document.querySelector("#exclude-countries")?.value || "-";
  const title = "Feedback Urlaubskompass";
  const body = [
    "Was ist dir aufgefallen?",
    "",
    "- ",
    "",
    "Aktuelle Suche:",
    `Profil: ${profile}`,
    `Startort: ${origin}`,
    `Budget: ${budget} EUR`,
    `Reisende: ${travelers}`,
    `Zeitraum: ${start} bis ${end}`,
    `Gewuenscht: ${includes}`,
    `Ausgeschlossen: ${excludes}`,
    "",
    "Link zur Seite:",
    window.location.href,
  ].join("\n");
  const href = `https://github.com/holeydiver/urlaubskompass/issues/new?title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`;
  links.forEach((link) => {
    link.href = href;
  });
}

function updateLocalVisitCount() {
  const counter = document.querySelector("#local-visit-count");
  if (!counter) return;
  const key = "urlaubskompass-local-visit-count";
  const visits = Math.max(0, Number(localStorage.getItem(key)) || 0) + 1;
  localStorage.setItem(key, String(visits));
  counter.textContent = String(visits);
}

function planTrip(event) {
  if (event) event.preventDefault();
  updateFeedbackLinks();
  const budget = Number(document.querySelector("#budget").value);
  const travelers = Number(document.querySelector("#travelers").value);
  const minBedsInput = document.querySelector("#min-beds");
  const plannedBeds = Math.max(travelers, Number(minBedsInput.value) || 1);
  if (Number(minBedsInput.value) < plannedBeds) minBedsInput.value = String(plannedBeds);
  const lodgingNeeds = {
    beds: plannedBeds,
    bedrooms: Math.max(1, Number(document.querySelector("#min-bedrooms").value) || 1),
  };
  const travelerConfig = travelerConfigFromForm(travelers);
  const childAges = travelerConfig.childAges;
  const pricing = familyPricing(travelers, childAges);
  const targetNights = Number(document.querySelector("#nights").value);
  const origin = document.querySelector("#origin").value.trim() || "Berlin";
  const startDate = document.querySelector("#start-date").value;
  const latestEndDate = document.querySelector("#end-date").value || addDays(startDate, 14);
  const vibes = getChecked("#vibe-options");
  const stayTypes = getChecked("#stay-options");
  const selectedTransportTypes = getChecked("#transport-options").filter((value) => ["flight", "train", "bus", "car"].includes(value));
  const transportTypes = selectedTransportTypes.length ? selectedTransportTypes : ["flight", "train", "bus", "car"];
  const smartTransportTypes = transportTypes.includes("flight") ? transportTypes : [...transportTypes, "flight"];
  const budgetLevers = getChecked("#budget-levers");
  const boardPreference = document.querySelector('input[name="board"]:checked')?.value || "auto";
  const tripMode = document.querySelector("#trip-mode").value;
  const travelProfile = document.querySelector("#travel-profile").value;
  const keywordTags = keywordTagsFromInput(document.querySelector("#keyword-input").value);
  const rawIncludes = listFromInput("#include-countries");
  const searchIncludes = rawIncludes.length ? rawIncludes : ["beliebte ziele"];
  const includes = expandPlaceIncludes(searchIncludes);
  const excludes = listFromInput("#exclude-countries");
  const hiddenFactor = Number(document.querySelector("#hidden-factor").value) / 100;
  const comfortFactor = Number(document.querySelector("#comfort-factor").value) / 100;
  const maxTravelHours = Number(document.querySelector("#max-travel-hours").value) || 12;
  const timePreference = travelTimePreference(document.querySelector("#time-value").value, targetNights, travelProfile);
  const railPrefs = travelerConfig.railPrefs || railPreferencesFromForm();
  const budgetFlexibleQuality = travelProfile === "budget-hunter";
  const qualityThresholds = {
    minRating: Number(document.querySelector("#min-rating").value) || 4.3,
    minTrust: Number(document.querySelector("#min-trust").value) || 50,
    maxRisk: Number(document.querySelector("#max-stay-risk").value) || 35,
    weight: (Number(document.querySelector("#quality-weight").value) || 80) / 100,
    budgetFlexible: budgetFlexibleQuality,
    budgetMinRating: budgetFlexibleQuality ? 3.8 : 4.2,
    budgetMinTrust: budgetFlexibleQuality ? 38 : 50,
    budgetMaxRisk: budgetFlexibleQuality ? 55 : 35,
  };
  const optimizeDates = document.querySelector("#flex-dates").checked;
  const optimizeNights = document.querySelector("#flex-nights").checked;
  const ski = {
    days: Number(document.querySelector("#ski-days").value) || 0,
    rental: document.querySelector("#ski-rental").value,
    level: document.querySelector("#ski-level").value,
    snowWeight: (Number(document.querySelector("#snow-weight").value) || 75) / 100,
  };
  const maxWindowNights = daysBetween(startDate, latestEndDate);
  const candidateStarts = makeCandidateStarts(startDate, latestEndDate, optimizeDates);
  const candidateNights = makeCandidateNights(targetNights, optimizeNights, travelProfile, maxWindowNights);
  const displayNights = candidateNights.includes(targetNights) ? targetNights : candidateNights[candidateNights.length - 1] || targetNights;

  document.querySelector("#per-person").textContent = euro(budget / travelers);
  document.querySelector("#per-night").textContent = euro(budget / travelers / Math.max(1, displayNights));
  document.querySelector("#search-mode").textContent = profileLabels[travelProfile] || "Individuell";
  const travelLogicNote = timePreference.mode === "cheap"
    ? "Sparfuchs-Modus: niedriger Gesamtpreis zählt stärker; FlixBus darf trotz langer Fahrt gewinnen, wenn die Ersparnis groß genug ist."
    : "Bahn wird vor Auto bevorzugt, wenn sie sinnvoll mithält.";
  const nightsWindowNote = displayNights < targetNights
    ? ` Dein Datumsfenster lässt maximal ${displayNights} Nächte zu; die App sucht deshalb passende Kurzvarianten.`
    : "";
  const defaultPlaceNote = rawIncludes.length ? "" : "Ohne Wunschort nutzt die App beliebte Budgetziele als Startpunkt. ";
  document.querySelector("#summary-note").textContent = dateIsFarFuture(startDate)
    ? `${defaultPlaceNote}Der Zeitraum liegt mehr als ca. 330 Tage in der Zukunft. Preise werden deshalb als historische Durchschnittswerte behandelt.`
    : `${defaultPlaceNote}Die App testet Starttage, Reisedauer und Anreisearten. Reisezeit wird ${timePreference.label}; ${travelLogicNote} Reisende: ${pricing.label}.${nightsWindowNote}`;

  try {
    const baseOptions = {
      budget,
      travelers,
      familyPricing: pricing,
      lodgingNeeds,
      candidateStarts,
      candidateNights,
      latestEndDate,
      origin,
      vibes,
      stayTypes,
      transportTypes: smartTransportTypes,
      preferredTransportTypes: transportTypes,
      hiddenFactor,
      comfortFactor,
      maxTravelHours,
      timePreference,
      railPrefs,
      budgetLevers,
      qualityThresholds,
      boardPreference,
      tripMode,
      ski,
      keywordTags,
      travelProfile,
    };
    const scored = scoreDestinations(destinationsForSearch(searchIncludes), includes, excludes, baseOptions);

    const bestDuration = scored[0] ? `${scored[0].nights} Nächte` : "-";
    document.querySelector("#best-duration").textContent = bestDuration;
    renderResults(scored, { origin, travelers, budget });
  } catch (error) {
    results.innerHTML = `<p class="warning">Berechnung konnte nicht abgeschlossen werden: ${error.message}</p>`;
    console.error(error);
  }
}

function scoreDestinations(allDestinations, includes, excludes, options) {
  const attempts = [options];
  if (includes.length) {
    attempts.push({ ...options, maxTravelHours: Math.max(options.maxTravelHours, options.maxTravelHours + 6) });
  }
  attempts.push({
    ...options,
    maxTravelHours: Math.min(36, Math.max(options.maxTravelHours + 6, options.maxTravelHours * 1.7)),
    budgetRescue: true,
  });
  if (options.tripMode === "ski") {
    attempts.push({ ...options, maxTravelHours: Math.max(options.maxTravelHours, 16) });
    attempts.push({
      ...options,
      maxTravelHours: Math.max(options.maxTravelHours, 18),
      qualityThresholds: { ...options.qualityThresholds, minTrust: Math.max(42, options.qualityThresholds.minTrust - 8), maxRisk: Math.min(45, options.qualityThresholds.maxRisk + 8) },
    });
  }

  for (const attempt of attempts) {
    const scored = allDestinations
      .filter((destination) => matchesPlaceFilters(destination, includes, excludes))
      .map((destination) => {
        const plan = bestPlanForDestination(destination, attempt);
        const strength = placeMatchStrength(destination, includes);
        return plan ? { ...plan, score: plan.score + strength * 28, placeMatchStrength: strength } : null;
      })
      .filter(Boolean)
      .sort((a, b) => (b.placeMatchStrength || 0) - (a.placeMatchStrength || 0) || b.score - a.score || a.total - b.total)
      .slice(0, 12);
    const targetCount = includes.length ? Math.min(12, includes.length) : 3;
    const budgetFits = scored.filter((item) => item.total <= options.budget);
    if (budgetFits.length >= Math.min(targetCount, 3)) return scored;
    if (scored.length >= targetCount && attempt.budgetRescue) return scored;
    if (scored.length >= targetCount && scored.some((item) => item.total <= options.budget * 1.12)) return scored;
    if (attempt === attempts[attempts.length - 1]) return scored;
  }
  return [];
}

function makeCandidateStarts(startDate, endDate, optimizeDates) {
  if (!optimizeDates) return [startDate];
  const span = Math.min(daysBetween(startDate, endDate), 21);
  return Array.from({ length: span + 1 }, (_, index) => addDays(startDate, index));
}

function makeCandidateNights(targetNights, optimizeNights, travelProfile = "custom", maxWindowNights = 60) {
  const windowMax = Math.max(0, Math.min(60, maxWindowNights || 0));
  if (windowMax < 1) return [];
  if (!optimizeNights) return [Math.min(Math.max(1, targetNights), windowMax)];
  const min = travelProfile === "short-trip" ? 1 : Math.max(1, targetNights - 2);
  const max = travelProfile === "short-trip" ? Math.min(3, Math.max(1, targetNights + 1), windowMax) : Math.min(60, targetNights + 2, windowMax);
  if (min > max) return Array.from({ length: windowMax }, (_, index) => index + 1);
  return Array.from({ length: max - min + 1 }, (_, index) => min + index);
}

function bestPlanForDestination(destination, options) {
  if (options.tripMode === "ski" && !destination.ski) return null;
  if (options.travelProfile === "cruise" && !destination.cruise) return null;
  const qualityThresholds = budgetAwareQualityThresholds(options);
  const stays = stayOptionsForDestination(destination, options.stayTypes, options.comfortFactor, qualityThresholds).slice(0, 4);
  if (!stays.length) return null;
  const vibeMatches = options.vibes.filter((vibe) => destination.vibes.includes(vibe)).length;
  const vibeScore = options.vibes.length ? (vibeMatches / options.vibes.length) * 100 : 70;
  const candidates = [];

  for (const stay of stays) {
    for (const startDate of options.candidateStarts) {
      for (const nights of options.candidateNights) {
        const checkout = addDays(startDate, nights);
        if (localDate(checkout) > localDate(options.latestEndDate)) continue;
        const transports = transportOptions(destination, startDate, nights, options.transportTypes, options.maxTravelHours, options.railPrefs, options.familyPricing, options.origin, options.preferredTransportTypes, {
          budgetRescue: options.budgetRescue,
          travelProfile: options.travelProfile,
          timePreference: options.timePreference,
        });
        for (const transport of transports) {
          if (options.tripMode === "ski" && !isSkiSeason(startDate)) continue;
          const deal = dealProfile(startDate, nights, options.budgetLevers);
          const averagePriceEstimate = dateIsFarFuture(startDate);
          const shoulder = isShoulderMonth(destination, startDate);
          const shoulderMultiplier = hasLever(options.budgetLevers, "shoulder") && shoulder ? 0.86 : 1;
          const localMultiplier = hasLever(options.budgetLevers, "local") ? 0.92 : 1;
          const nearbyAirportMultiplier = hasLever(options.budgetLevers, "nearby-airports") && destination.nearbyAirport && transport.mode === "flight" ? 0.94 : 1;
          const board = boardCostBreakdown(destination, stay, options.boardPreference, options.budgetLevers);
          const effectiveDaily = board.dailyTotal;
          const skiCosts = skiCostBreakdown(destination, options, nights);
          if (options.tripMode === "ski" && !skiCosts) continue;
          const lodgingDiscount = nights >= 9 ? 0.92 : nights >= 7 ? 0.96 : 1;
          const qualityDealGuard = stay.quality.rating >= 4.55 && stay.quality.reviews >= 120 ? 1 : 0.98;
          const sparfuchsLodgingMultiplier = options.travelProfile === "budget-hunter" && ["airbnb", "budget-room", "pension"].includes(stay.type)
            ? destination.touristLoad >= 75 ? 0.82 : 0.88
            : 1;
          const estimatedLodgingTotal = Math.round((stay.price + board.boardNightCost) * options.familyPricing.lodgingFactor * lodgingDiscount * localMultiplier * shoulderMultiplier * deal.lodgingDiscount * qualityDealGuard * sparfuchsLodgingMultiplier * nights);
          const verifiedLodging = verifiedDirectStayPrice(destination, stay.type, startDate, checkout, options.familyPricing);
          const liveLodgingRequired = dateNeedsLiveLodgingPrice(startDate);
          const lodgingTotal = verifiedLodging ? verifiedLodging.total : estimatedLodgingTotal;
          const livingTotal = Math.round(effectiveDaily * nights * options.familyPricing.livingUnits);
          const transportUnits = transport.pricingUnits || options.familyPricing.transportUnits;
          const transportTotal = transport.perVehicle
            ? Math.round(transport.price * deal.transportDiscount)
            : Math.round(transport.price * nearbyAirportMultiplier * deal.transportDiscount * transportUnits);
          const skiTotal = skiCosts?.total || 0;
          const total = lodgingTotal + livingTotal + transportTotal + skiTotal;
          const timeCost = Math.round(transport.hours * 2 * options.familyPricing.timeUnits * options.timePreference.hourlyValue);
          const effectiveTotal = total + timeCost;
          const weather = weatherScore(destination, startDate);
          if (hasLever(options.budgetLevers, "weather") && weather < 55) continue;
          const overBudgetAmount = Math.max(0, total - options.budget);
          const overBudgetRatio = overBudgetAmount / Math.max(options.budget, 1);
          const budgetScore = Math.max(0, 100 - Math.max(0, effectiveTotal - options.budget) / Math.max(options.budget, 1) * 180);
          const valueScore = Math.max(0, 100 - effectiveTotal / Math.max(options.budget, 1) * 45);
          const durationBonus = options.travelProfile === "short-trip" ? (nights <= 2 ? 5 : 2) : nights === 8 || nights === 9 ? 4 : 0;
          const travelTimePenalty = Math.max(0, transport.hours - options.timePreference.toleranceHours) * options.timePreference.penaltyWeight;
          const sparfuchsMode = options.timePreference.mode === "cheap" || options.travelProfile === "budget-hunter";
          const busFatigueBase = transport.mode === "bus" ? Math.max(0, transport.hours - 8) * 1.6 + Math.max(0, transport.hours - 14) * 2.4 : 0;
          const busFatiguePenalty = sparfuchsMode ? busFatigueBase * 0.25 : busFatigueBase;
          const cheapTransportBonus = sparfuchsMode && transport.mode === "bus"
            ? Math.min(10, Math.max(0, (options.budget * 0.14 - transportTotal) / Math.max(options.budget, 1) * 70) + Math.max(0, 16 - transport.price) * 0.05)
            : 0;
          const profile = routeProfile(destination);
          const railCanCompete = options.transportTypes.includes("train") && profile.train && profile.trainHours <= options.maxTravelHours && profile.trainHours <= transport.hours + 3.5;
          const railPreferenceBonus = transport.mode === "train" || transport.mode === "night-train"
            ? (sparfuchsMode ? 1.5 : 5) + Math.max(0, transport.comfort - 70) * 0.05
            : transport.mode === "car" && railCanCompete
              ? sparfuchsMode ? -2 : -7
              : 0;
          const qualityScore = (stay.quality.rating - 4) * 34 + stay.quality.trust * 0.28 - stay.quality.risk * 0.9;
          const shoulderBonus = hasLever(options.budgetLevers, "shoulder") && shoulder ? 7 : 0;
          const crowdBonus = hasLever(options.budgetLevers, "local") ? Math.max(0, 80 - destination.touristLoad) * 0.08 : 0;
          const weatherBonus = hasLever(options.budgetLevers, "weather") ? (weather - 65) * 0.08 : 0;
          const dealBonus = deal.lastMinute || deal.flashSale ? Math.min(8, (1 - deal.lodgingDiscount * deal.transportDiscount) * 40) : 0;
          const livingCostPenalty = Math.max(0, effectiveDaily - 55) * 0.35;
          const selfCateringBonus = board.kitchen && board.groceries <= 24 ? 4 : 0;
          const skiBonus = skiCosts?.score || 0;
          const boardBonus = board.convenience * 0.55;
          const advisoryModePenalty = transport.advisory ? 5 : 0;
          const unverifiedLiveLodgingPenalty = liveLodgingRequired && !verifiedLodging ? 28 : 0;
          const keyword = keywordMatch(destination, options.keywordTags || [], { transportHours: transport.hours });
          const unusualBonus = options.travelProfile === "unusual" && destination.unusual
            ? Math.min(18, destination.unusual.fit * 0.16 + Math.max(0, destination.hidden - 60) * 0.08)
            : 0;
          const cruiseBonus = options.travelProfile === "cruise" && destination.cruise
            ? Math.min(20, destination.cruise.fit * 0.18 + board.convenience * 0.35)
            : 0;
          const hardBudgetPenalty = overBudgetRatio <= 0
            ? 0
            : overBudgetRatio * 145 + (overBudgetRatio > 0.12 ? 18 : 0) + (overBudgetRatio > 0.35 ? 42 : 0) + (overBudgetRatio > 0.7 ? 60 : 0);
          const budgetRescueBonus = options.budgetRescue && total <= options.budget * 1.08 ? 10 : 0;
          const score = Math.round(
            budgetScore * 0.34 +
              valueScore * 0.12 +
              vibeScore * 0.2 +
              qualityScore * qualityThresholds.weight * 0.14 +
              destination.hidden * options.hiddenFactor * 0.24 +
              (destination.comfort + transport.comfort) / 2 * options.comfortFactor * 0.1 +
              durationBonus -
              travelTimePenalty -
              busFatiguePenalty +
              shoulderBonus +
              crowdBonus +
              weatherBonus +
              dealBonus +
              selfCateringBonus -
              livingCostPenalty +
              skiBonus +
              boardBonus +
              railPreferenceBonus +
              cheapTransportBonus +
              keyword.score -
              advisoryModePenalty +
              unusualBonus +
              cruiseBonus +
              budgetRescueBonus -
              unverifiedLiveLodgingPenalty -
              hardBudgetPenalty
          );
          const leverNotes = makeLeverNotes(destination, {
            shoulder,
            kitchen: hasLever(options.budgetLevers, "kitchen"),
            local: hasLever(options.budgetLevers, "local"),
            nearbyAirport: hasLever(options.budgetLevers, "nearby-airports") && destination.nearbyAirport && transport.mode === "flight",
            weather,
            dealNotes: deal.notes,
            stayQuality: stay.quality,
            budgetFlexibleQuality: qualityThresholds.budgetFlexible,
            dailyBreakdown: board,
            skiCosts,
            board,
            keywordMatches: keyword.matches,
            transportNotes: transport.notes || [],
            averagePriceEstimate,
            liveLodgingRequired,
            verifiedLodging,
            unusual: options.travelProfile === "unusual" ? destination.unusual : null,
            cruise: options.travelProfile === "cruise" ? destination.cruise : null,
          });
          candidates.push({
            destination,
            stay,
            transport,
            startDate,
            checkout,
            nights,
            lodgingTotal,
            estimatedLodgingTotal,
            verifiedLodging,
            liveLodgingRequired,
            livingTotal,
            transportTotal,
            skiTotal,
            total,
            timeCost,
            effectiveTotal,
            effectiveDaily,
            dailyBreakdown: board,
            board,
            skiCosts,
            keywordMatches: keyword.matches,
            weather,
            deal,
            leverNotes,
            familyPricing: options.familyPricing,
            lodgingNeeds: options.lodgingNeeds,
            timePreference: options.timePreference,
            travelProfile: options.travelProfile,
            averagePriceEstimate,
            score,
            overBudget: total > options.budget,
            overBudgetAmount,
            overBudgetRatio,
            budgetRescue: Boolean(options.budgetRescue),
          });
        }
      }
    }
  }
  const candidateKey = (item) => {
    const airportCode = item.transport.mode === "flight" ? item.transport.originAirport?.code || "flight" : item.transport.mode;
    return `${item.stay.type}-${item.transport.mode}-${airportCode}-${item.startDate}-${item.nights}`;
  };
  const rankedCandidates = candidates
    .sort((a, b) => {
      const bucket = (item) => item.total <= options.budget ? 0 : item.total <= options.budget * 1.08 ? 1 : item.total <= options.budget * 1.25 ? 2 : 3;
      const bucketDiff = bucket(a) - bucket(b);
      if (bucketDiff) return bucketDiff;
      const budgetFirst = options.budgetRescue || options.travelProfile === "budget-hunter" || options.timePreference?.mode === "cheap";
      if (budgetFirst && bucket(a) <= 1) return a.total - b.total || b.score - a.score;
      if (bucket(a) >= 2) return a.total - b.total || b.score - a.score;
      return b.score - a.score || a.effectiveTotal - b.effectiveTotal;
    })
    .filter((item, index, all) => all.findIndex((other) => candidateKey(other) === candidateKey(item)) === index);
  const bestByMode = ["train", "bus", "flight", "night-train", "car"]
    .map((mode) => rankedCandidates.find((item) => item.transport.mode === mode))
    .filter(Boolean);
  const variants = [...rankedCandidates.slice(0, 2), ...bestByMode, ...rankedCandidates]
    .filter((item, index, all) => all.findIndex((other) => candidateKey(other) === candidateKey(item)) === index)
    .slice(0, 5);
  return variants.length ? { ...variants[0], variants } : null;
}

function makeLeverNotes(destination, state) {
  const notes = [];
  if (state.shoulder) notes.push("Shoulder Season");
  if (state.kitchen && destination.kitchenSavings >= 10) notes.push("Küche spart Alltag");
  if (state.local) notes.push(destination.touristLoad < 45 ? "wenig Touri-Druck" : "lokale Viertel suchen");
  if (state.nearbyAirport) notes.push("alternative Flughäfen prüfen");
  if (state.weather >= 82) notes.push("gutes Wetterfenster");
  if (state.stayQuality) notes.push(`${state.stayQuality.rating.toFixed(1)}★ Unterkunft`);
  if (state.budgetFlexibleQuality && state.stayQuality?.rating < 4.3) notes.push("Budget-Unterkunft bewusst geprüft");
  if (state.stayQuality && state.stayQuality.risk <= 15) notes.push("niedriges Unterkunftsrisiko");
  if (state.stayQuality && state.stayQuality.ageMonths <= 6) notes.push("aktuelle Reviews");
  if (state.stayQuality && state.stayQuality.recentBad > 1) notes.push("aktuelle Kritik prüfen");
  if (state.dailyBreakdown?.kitchen && state.dailyBreakdown.groceries <= 24) notes.push("Selbstversorgung lohnt");
  if (state.dailyBreakdown?.groceries >= 30) notes.push("Lebenshaltung teuer");
  if (state.board) notes.push(state.board.label);
  if (state.skiCosts) notes.push(...state.skiCosts.notes.slice(0, 2));
  if (state.unusual) notes.push(state.unusual.label);
  if (state.cruise) notes.push(state.cruise.label, "Bordextras prüfen");
  if (state.keywordMatches?.length) notes.push(...state.keywordMatches.slice(0, 3).map((tag) => `passt: ${keywordLabel(tag)}`));
  if (state.dealNotes) notes.push(...state.dealNotes);
  if (state.transportNotes) notes.push(...state.transportNotes);
  if (state.averagePriceEstimate) notes.push("Durchschnittspreise");
  if (state.verifiedLodging) notes.push("Unterkunft live geprüft");
  if (state.liveLodgingRequired && !state.verifiedLodging) notes.push("Unterkunftspreis offen");
  return notes;
}

function keywordLabel(tag) {
  const labels = {
    cheap: "günstig",
    value: "guter Gegenwert",
    safe: "sicher",
    water: "Wasser",
    beach: "Strand",
    lake: "See",
    warm: "warm",
    quiet: "ruhig",
    nature: "Natur",
    hiking: "Wandern",
    active: "aktiv",
    mountains: "Berge",
    city: "Stadt",
    culture: "Kultur",
    food: "Essen",
    unusual: "ungewöhnlich",
    boat: "Boot",
    ferry: "Fähre/Inselhopping",
    cabin: "Hütte",
    farm: "Bauernhof",
    retreat: "Retreat",
    cruise: "Kreuzfahrt",
    comfort: "komfortabel",
    "short-travel": "kurze Anreise",
    hidden: "Geheimtipp",
    local: "authentisch",
  };
  return labels[tag] || tag;
}

function searchUrl(base, params) {
  const url = new URL(base);
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== "") url.searchParams.set(key, value);
  });
  return url.toString();
}

function routeSearchText(item, context) {
  const family = item.familyPricing || { adults: context.travelers || 1, children: 0 };
  const travelers = family.adults + family.children;
  return `${context.origin} nach ${item.destination.city} am ${formatDate(item.startDate)} ${travelers} Person${travelers > 1 ? "en" : ""}`;
}

function bahnSearchUrl(item, context) {
  const params = new URLSearchParams({
    sts: "true",
    so: context.origin,
    zo: item.destination.city,
    hd: `${item.startDate}T08:00:00`,
    hza: "D",
    ar: "false",
    s: "true",
    d: "false",
  });
  return `https://www.bahn.de/buchung/fahrplan/suche#${params.toString()}`;
}

function flixbusSearchUrl(item, context) {
  const routeSlug = (value) => normalizePlaceName(value)
    .split(/\s+(?:und|oder|and|or)\s+|&|,|:|\//)[0]
    .trim()
    .replace(/\s+/g, "-");
  const originSlug = routeSlug(item.transport.originHub?.city || context.origin);
  const destinationSlug = routeSlug(item.transport.destinationHub?.city || item.destination.city);
  if (originSlug && destinationSlug) {
    return `https://www.flixbus.de/busverbindung/fernbus-${originSlug}-${destinationSlug}`;
  }
  return searchUrl("https://www.flixbus.de/fernbus", {
    q: `${context.origin} ${item.destination.city}`,
  });
}

function normalizePlaceName(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z\s/-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function originAirportCode(origin) {
  const normalized = normalizePlaceName(origin);
  const entries = [
    ["lubeck", "HAM"],
    ["lübeck", "HAM"],
    ["hamburg", "HAM"],
    ["berlin", "BER"],
    ["munchen", "MUC"],
    ["muenchen", "MUC"],
    ["wien", "VIE"],
    ["vienna", "VIE"],
    ["frankfurt", "FRA"],
    ["koln", "CGN"],
    ["koeln", "CGN"],
    ["cologne", "CGN"],
    ["dusseldorf", "DUS"],
    ["duesseldorf", "DUS"],
    ["stuttgart", "STR"],
    ["hannover", "HAJ"],
    ["bremen", "BRE"],
    ["dortmund", "DTM"],
    ["nurnberg", "NUE"],
    ["nuernberg", "NUE"],
  ];
  return entries.find(([name]) => normalized.includes(name))?.[1] || "";
}

function destinationAirportCodes(destination) {
  const byCity = {
    Kotor: ["TIV", "TGD"],
    "Petrovac & Budva Riviera": ["TIV", "TGD"],
    "Ulcinj & Ada Bojana": ["TGD", "TIV"],
    "Durmitor & Žabljak": ["TGD"],
    "Bar & Stari Bar": ["TGD", "TIV"],
    Ohrid: ["OHD", "SKP"],
    "Gjirokaster & Himara": ["TIA"],
    "Ponta Delgada": ["PDL"],
    Tbilisi: ["TBS"],
    Lucca: ["PSA", "FLR"],
    Leipzig: ["LEJ", "BER"],
    Dresden: ["DRS", "BER"],
    "Hamburg & Lübeck": ["HAM"],
    Nürnberg: ["NUE"],
    "Nürnberg & Bamberg": ["NUE"],
    Münster: ["FMO", "DTM"],
    Münsterland: ["FMO", "DTM"],
    "Ostsee Schleswig-Holstein": ["HAM", "LBC"],
    "Nordsee Schleswig-Holstein": ["HAM"],
    "Mecklenburgische Ostsee": ["BER", "RLG"],
    "Usedom & Stettiner Haff": ["BER", "SZZ"],
    "Dänische Nordsee": ["BLL", "HAM"],
    "Südschwedische Schären & Skåne": ["CPH", "MMX"],
    "Cornwall & Devon Küste": ["BRS", "EXT", "LHR"],
    "Schottische Westküste & Inseln": ["GLA", "EDI"],
    "Mallorca Nebenorte": ["PMI"],
    "Valencia & Costa Blanca": ["VLC", "ALC"],
    "Andalusien ohne Hotspot": ["AGP", "SVQ"],
    "Antalya & Lykische Küste": ["AYT", "DLM"],
    "Istanbul & Prinzeninseln": ["IST", "SAW"],
    "Kreta Nebenorte": ["HER", "CHQ"],
    "Korfu & Epirus": ["CFU", "PVK"],
    "Istrien & Kvarner": ["RJK", "PUY", "TRS", "ZAG"],
    "Elsass & Vogesen": ["SXB", "BSL", "FKB"],
    "Bretagne & Normandie": ["RNS", "NTE", "CDG"],
    "Djerba & Tunesische Küste": ["DJE", "TUN", "MIR"],
    "Rotes Meer & Luxor-Kombi": ["HRG", "RMF", "LXR", "CAI"],
    "Albanische Riviera & Tirana": ["TIA", "CFU"],
    "Mostar & Herzegowina": ["SJJ", "DBV", "SPU"],
    "Belgrad & Tara-Nationalpark": ["BEG", "INI"],
    "Prizren & Rugova": ["PRN"],
    "Ostsee-Kreuzfahrt ab Kiel": ["HAM"],
    "Norwegen-Fjorde ab Hamburg/Kiel": ["HAM"],
    "Mittelmeer-Kreuzfahrt ab Genua/Savona": ["GOA", "MXP", "NCE"],
    "Donau-Flusskreuzfahrt": ["MUC", "VIE"],
    Amsterdam: ["AMS"],
    "Zeeland & Südholland Küste": ["AMS", "RTM"],
    "Polnische Ostsee": ["GDN", "SZZ"],
    Sarajevo: ["SJJ"],
    Naxos: ["JNX", "ATH"],
    "Rijeka & Cres": ["RJK", "ZAG"],
    Plovdiv: ["SOF"],
    Essaouira: ["RAK", "ESU"],
    Zakopane: ["KRK"],
    "Bohinj & Vogel": ["LJU"],
    "Schladming Umgebung": ["SZG", "GRZ"],
    Zillertal: ["INN", "MUC"],
    "Saalbach-Hinterglemm": ["SZG", "MUC"],
    Gasteinertal: ["SZG"],
    "Garmisch-Partenkirchen & Zugspitze": ["MUC"],
    "Oberstdorf & Kleinwalsertal": ["FMM", "MUC"],
    "Berchtesgaden & Jenner": ["SZG", "MUC"],
    "Davos Klosters": ["ZRH"],
    "Arosa Lenzerheide": ["ZRH"],
    "Engadin & St. Moritz": ["ZRH"],
    "Madeira Nordküste": ["FNC"],
  };
  return byCity[destination.city] || [];
}

function flightSearchUrl(item, context) {
  const originCode = item.transport.originAirport?.code || originAirportCode(context.origin);
  const destinationCode = destinationAirportCodes(item.destination)[0];
  const family = item.familyPricing || { adults: context.travelers || 1, children: 0 };
  if (originCode && destinationCode) {
    const adults = Math.max(1, family.adults || context.travelers || 1);
    const base = `https://www.kayak.de/flights/${originCode}-${destinationCode}/${item.startDate}/${item.checkout}/${adults}adults`;
    return searchUrl(base, { sort: "bestflight_a" });
  }
  return searchUrl("https://www.google.com/search", {
    q: `Flüge ${routeSearchText(item, context)} ${item.destination.airport}`,
  });
}

function airbnbSearchUrl(query, item) {
  const family = item.familyPricing || { adults: 1, childAges: [], children: 0 };
  const lodgingNeeds = item.lodgingNeeds || { beds: 1, bedrooms: 1 };
  const placeSlug = encodeURIComponent(query.trim().replace(/[,\s]+/g, "-"));
  return searchUrl(`https://www.airbnb.de/s/${placeSlug}/homes`, {
    checkin: item.startDate,
    checkout: item.checkout,
    adults: family.adults,
    children: family.childAges.filter((age) => age >= 2).length,
    infants: family.childAges.filter((age) => age < 2).length,
    min_beds: lodgingNeeds.beds,
    min_bedrooms: lodgingNeeds.bedrooms,
    source: "structured_search_input_header",
    search_mode: "regular_search",
    tab_id: "home_tab",
    "refinement_paths[]": "/homes",
  });
}

function basePlaceQuery(item) {
  return item.destination.searchQuery || `${item.destination.city} ${item.destination.country}`;
}

function specialSearchQuery(item) {
  return item.travelProfile === "unusual" && item.destination.unusual?.search
    ? item.destination.unusual.search
    : "";
}

function directStayUrl(item) {
  const direct = directStayFor(item.destination, item.stay.type);
  if (!direct?.url) return "";
  const url = new URL(direct.url);
  const family = item.familyPricing || { adults: 1 };
  const lodgingNeeds = item.lodgingNeeds || { bedrooms: 1 };
  if (direct.platform === "airbnb") {
    url.searchParams.set("adults", String(Math.max(1, family.adults || 1)));
    url.searchParams.set("check_in", item.startDate);
    url.searchParams.set("check_out", item.checkout);
  }
  if (direct.platform === "booking") {
    url.searchParams.set("checkin", item.startDate);
    url.searchParams.set("checkout", item.checkout);
    url.searchParams.set("group_adults", String(Math.max(1, family.adults || 1)));
    url.searchParams.set("group_children", String(family.children || 0));
    url.searchParams.set("no_rooms", String(Math.max(1, lodgingNeeds.bedrooms || 1)));
    url.searchParams.set("req_adults", String(Math.max(1, family.adults || 1)));
    url.searchParams.set("req_children", String(family.children || 0));
    url.searchParams.set("room1", Array.from({ length: Math.max(1, family.adults || 1) }, () => "A").join(","));
  }
  return url.toString();
}

function directStayNote(item) {
  const direct = directStayFor(item.destination, item.stay.type);
  return item.verifiedLodging?.note || direct?.note || "";
}

function directStayFor(destination, stayType) {
  return destination.directStays?.find((stay) => !stay.stayTypes || stay.stayTypes.includes(stayType)) || null;
}

function verifiedDirectStayPrice(destination, stayType, startDate, checkout, family) {
  const direct = directStayFor(destination, stayType);
  const verified = direct?.verified;
  if (!verified) return null;
  const adults = Math.max(1, family?.adults || 1);
  const matchesDates = verified.checkin === startDate && verified.checkout === checkout;
  const matchesAdults = Number(verified.adults || adults) === adults;
  if (!matchesDates || !matchesAdults) return null;
  return {
    total: verified.total,
    checked: verified.checked,
    label: direct.label,
    platform: direct.platform,
    note: verified.note,
  };
}

function lodgingSearchLabel(item, type) {
  const prefix = type === "booking"
    ? item.stay.type === "pension"
      ? "Pensionen"
      : "Hotels/Pensionen"
    : item.stay.type === "budget-room"
      ? "Budgetzimmer"
      : "Airbnb/Fewo";
  return prefix;
}

function favoriteStayQuery(item) {
  const plan = concreteStayPlan(item);
  const place = `${item.destination.city} ${item.destination.country}`;
  const stayTerms = {
    airbnb: "Ferienwohnung Küche",
    "budget-room": "Budgetzimmer Privatzimmer",
    hotel: "Hotel",
    pension: "Pension Gästehaus",
  };
  const area = plan.area.replace(/\boder\b/gi, " ").replace(/[·,]/g, " ");
  return `${place} ${area} ${stayTerms[item.stay.type] || "Unterkunft"}`.replace(/\s+/g, " ").trim();
}

function bookingSearchUrl(query, item, context) {
  const family = item.familyPricing || { adults: context.travelers, children: 0 };
  const lodgingNeeds = item.lodgingNeeds || { bedrooms: 1 };
  return searchUrl("https://www.booking.com/searchresults.html", {
    ss: query,
    group_adults: family.adults,
    group_children: family.children,
    no_rooms: lodgingNeeds.bedrooms,
    checkin: item.startDate,
    checkout: item.checkout,
  });
}

function bookingLinks(item, context) {
  const placeQuery = basePlaceQuery(item);
  const favoriteQuery = favoriteStayQuery(item);
  const specialQuery = specialSearchQuery(item);
  const query = item.travelProfile === "cruise" && item.destination.cruise?.search
    ? item.destination.cruise.search
    : placeQuery;
  return {
    flights: flightSearchUrl(item, context),
    train: bahnSearchUrl(item, context),
    nightTrain: bahnSearchUrl(item, context),
    bus: flixbusSearchUrl(item, context),
    flixbus: flixbusSearchUrl(item, context),
    car: searchUrl("https://www.google.com/maps/dir/", {
      api: 1,
      origin: context.origin,
      destination: placeQuery,
      travelmode: "driving",
    }),
    airbnb: airbnbSearchUrl(placeQuery, item),
    booking: bookingSearchUrl(placeQuery, item, context),
    directStay: directStayUrl(item),
    favoriteStay: ["airbnb", "budget-room"].includes(item.stay.type)
      ? airbnbSearchUrl(favoriteQuery, item)
      : bookingSearchUrl(favoriteQuery, item, context),
    special: specialQuery ? searchUrl("https://www.google.com/search", { q: specialQuery }) : "",
    cruise: cruiseLineLinks(item),
    maps: searchUrl("https://www.google.com/maps/search/", {
      api: 1,
      query: placeQuery,
    }),
  };
}

function cruiseLineLinks(item) {
  const route = [
    item.destination.city,
    item.destination.region,
    item.destination.cruise?.label,
    item.destination.cruise?.search,
  ].filter(Boolean).join(" ");
  const routeLower = route.toLowerCase();
  const baseLinks = {
    aida: "https://www.aida.de/buchung/angebote",
    meinSchiff: "https://www.meinschiff.com/de/kreuzfahrten-angebote",
    msc: "https://www.msccruises.de/",
    costa: "https://www.costakreuzfahrten.de/angebote.html",
    nicko: "https://www.nicko-cruises.de/flussreisen/donau",
    arosaDonau: "https://www.a-rosa.de/flusskreuzfahrten/donau/kreuzfahrten.html",
  };
  if (routeLower.includes("donau")) {
    return {
      primary: baseLinks.nicko,
      primaryLabel: "nicko Donau öffnen",
      compare: [
        { label: "A-ROSA Donau", href: baseLinks.arosaDonau },
      ],
      all: baseLinks,
    };
  }
  if (routeLower.includes("mittelmeer")) {
    return {
      primary: baseLinks.msc,
      primaryLabel: "MSC Mittelmeer öffnen",
      compare: [
        { label: "Costa Angebote", href: baseLinks.costa },
        { label: "AIDA gegenprüfen", href: baseLinks.aida },
      ],
      all: baseLinks,
    };
  }
  if (routeLower.includes("fjord") || routeLower.includes("norwegen")) {
    return {
      primary: baseLinks.meinSchiff,
      primaryLabel: "Mein Schiff Nordland öffnen",
      compare: [
        { label: "AIDA Nordland/Ostsee", href: baseLinks.aida },
        { label: "Costa nur Preischeck", href: baseLinks.costa },
      ],
      all: baseLinks,
    };
  }
  return {
    primary: baseLinks.aida,
    primaryLabel: "AIDA ab Deutschland öffnen",
    compare: [
      { label: "Mein Schiff vergleichen", href: baseLinks.meinSchiff },
      { label: "MSC Preischeck", href: baseLinks.msc },
    ],
    all: baseLinks,
  };
}

function countryPitch(country, items) {
  const top = items[0];
  const vibes = [...new Set(items.flatMap((item) => item.destination.vibes || []))].slice(0, 4).join(", ");
  const pitches = {
    Montenegro: "Nicht nur Kotor: Bucht, Riviera, Südküste und Durmitor sind sehr unterschiedliche Reisen mit anderem Preis-/Erlebnisprofil.",
    Deutschland: "Gut für kurze Anreise, Bahn/Deutschlandticket und Kurzurlaub. Die besten Treffer hängen stark von Stadt, Küste oder Bergen ab.",
    Österreich: "Stark für Ski, Berge und planbare Qualität. Oft lohnt der Blick auf Nachbarorte statt bekannte Hotspots.",
    Niederlande: "Gut für Stadt, Küste und kurze Wege aus Norddeutschland. Randlagen an Bahn-/Metroachsen drücken Unterkunftskosten.",
    Polen: "Sehr stark bei Budget und Ostsee-/Städtemix. Besonders interessant, wenn Alltagspreise wichtiger sind als klassische Pauschalziele.",
    Kreuzfahrt: "Kreuzfahrten bündeln Kabine, Route und Verpflegung. Entscheidend sind Hafenanreise, Bordextras, Ausflüge und echte Aktionspreise.",
  };
  return pitches[country] || `${country} passt hier vor allem wegen ${vibes || "Preis, Anreise und Gesamtpaket"}. Top-Treffer: ${top.destination.city}.`;
}

function groupResultsByCountry(items) {
  const groups = [];
  items.forEach((item) => {
    let group = groups.find((entry) => entry.country === item.destination.country);
    if (!group) {
      group = { country: item.destination.country, items: [] };
      groups.push(group);
    }
    group.items.push(item);
  });
  return groups
    .map((group) => {
      const minItem = group.items.reduce((best, item) => item.total < best.total ? item : best, group.items[0]);
      return {
        ...group,
        best: group.items[0],
        score: Math.max(...group.items.map((item) => item.score)),
        minTotal: minItem.total,
        minHasOpenLiveLodging: minItem.liveLodgingRequired && !minItem.verifiedLodging,
        hasBudgetFit: group.items.some((item) => !item.overBudget),
      };
    })
    .sort((a, b) => Number(b.hasBudgetFit) - Number(a.hasBudgetFit) || b.score - a.score || a.minTotal - b.minTotal);
}

function regionSpecialIdeas(group) {
  const catalog = {
    Montenegro: ["Bootstag in der Bucht statt nur Altstadt", "Durmitor als Berg-Kontrast zur Küste", "Küstenorte südlich von Budva gegenprüfen"],
    Deutschland: ["Kurzurlaub per Bahn mit Deutschlandticket-Anteil", "zweite Reihe an Ostsee/Nordsee statt Promenade", "kleine Städte mit gutem Essen und kurzer Anreise"],
    Österreich: ["Nachbarort zum Skigebiet statt Tal-Hotspot", "Sommer-Bergbahn plus See statt klassischem Hotelurlaub", "Frühstückspension mit Supermarkt/Bus in Laufnähe"],
    Schweiz: ["Grenznahe Orte mit Bahnanschluss", "Selbstversorgung statt Restaurantbudget", "kleinere Täler statt bekannter Luxusorte"],
    Niederlande: ["Kanalzimmer oder kleines Studio an guter Metroachse", "Rad-und-Wasser-Route ab Randlage", "Küste plus Stadt statt Zentrumshotel"],
    Polen: ["Ostsee-Orte außerhalb der Promenade", "Danzig plus ruhiger Küstenort", "Milchbars, Märkte und Bahn/Tram für niedrige Alltagskosten"],
    Dänemark: ["Ferienhausgebiet mit Küche statt Hotel", "Nordseeort plus Tagesausflug", "Bahn/Auto-Kombi mit kurzer Fähr- oder Brückenroute"],
    Schweden: ["Stuga oder einfache Hütte am Wasser", "Schären mit Selbstversorgung", "Nachtzug/Fähre als Teil der Reise prüfen"],
    England: ["Küste mit Bus-/Bahnpass statt London-Fokus", "Pubzimmer/B&B außerhalb der Hotspots", "Direktflug plus Regionalzug vergleichen"],
    Schottland: ["Insel- oder Küstenroute mit Fähre", "Hostel/B&B als Basis für Tagesausflüge", "Zugstrecke als Erlebnis statt Mietwagenpflicht"],
    Kroatien: ["Fähre zu kleineren Inseln", "Kvarner/Istrien statt Dubrovnik", "Apartment mit Küche nahe Markt"],
    Griechenland: ["Inselhopping nur bei guten Fährzeiten", "Nebenorte statt Hauptstrand", "Studio mit Balkon und Supermarkt in Laufnähe"],
    Spanien: ["zweite Reihe an der Küste", "Markthallen und Tapasviertel statt Hotelhalbpension", "Bahnfähige Städte-Kombi"],
    Türkei: ["Pension/Apartment statt All-inclusive, wenn Alltag günstig ist", "Altstadtviertel mit ÖPNV statt Strandresort", "Fähre/Bootsausflug als Tageshighlight"],
    Frankreich: ["Bahnfähige Nebenstädte statt Paris/Hotspots", "Markt + Apartmentküche", "Küste oder Berge mit regionaler Bahn"],
    Italien: ["kleine Bahnorte statt Altstadtzentrum", "Agriturismo oder Pension mit Frühstück", "Markt, Aperitivo und Küche statt Restaurantpflicht"],
    Kreuzfahrt: ["Bordextras vor Buchung einpreisen", "Abfahrtshafen mit Bahn statt Flug bevorzugen", "Innenkabine gegen Balkonpreis bewusst abwägen"],
  };
  const ideas = [];
  group.items.forEach((item) => {
    if (item.destination.unusual?.label) ideas.push(item.destination.unusual.label);
    if (item.destination.cruise?.dealWatch) ideas.push(item.destination.cruise.dealWatch);
  });
  ideas.push(...(catalog[group.country] || []));
  group.items.forEach((item) => {
    if (item.destination.vibes.includes("strand")) ideas.push("Wasserlage außerhalb der teuersten ersten Reihe prüfen");
    if (item.destination.vibes.includes("stadt")) ideas.push("Randlage mit schneller Bahn-/Metroachse suchen");
    if (item.destination.vibes.includes("berge")) ideas.push("Talort statt direkt am Lift oder Hotspot prüfen");
    if (item.destination.vibes.includes("natur")) ideas.push("einfache Unterkunft mit guter Anbindung an Naturziele");
  });
  const unique = [...new Set(ideas.filter(Boolean))].slice(0, 4);
  if (!unique.length) return "";
  return `
    <div class="region-ideas" aria-label="Besondere Ideen für ${group.country}">
      <strong>Besonders vor Ort</strong>
      <div>
        ${unique.map((idea) => `<span>${idea}</span>`).join("")}
      </div>
    </div>
  `;
}

function renderResults(items, context) {
  if (!items.length) {
    results.innerHTML = `<p class="warning">Keine Treffer mit diesen Filtern. Lockere den Ort, die Anreisezeit oder Qualitätsgrenzen etwas. Du kannst Mindeststerne bewusst senken, solltest dann aber aktuelle Reviews genauer prüfen.</p>`;
    return;
  }

  const initiallyVisible = 3;
  const groups = groupResultsByCountry(items);
  const cheapest = items.reduce((best, item) => item.total < best.total ? item : best, items[0]);
  const budgetAlert = cheapest.total > context.budget
    ? `<p class="warning warning--budget">Mit den aktuellen Vorgaben liegt selbst der günstigste Treffer bei ${euro(cheapest.total)} und damit ${euro(cheapest.total - context.budget)} über deinem Budget. Die App zeigt deshalb nur Prüfideen. Mehr Budget, weniger Nächte, mehr Anreisezeit oder einfachere Unterkunft könnten es passend machen.</p>`
    : "";
  const cards = groups
    .map((group, groupIndex) => {
      const extraClass = groupIndex >= initiallyVisible ? " extra-result is-hidden" : "";
      const places = group.items.map((item) => item.destination.city).join(" · ");
      return `
        <section class="result-group${extraClass}">
          <div class="result-group__top">
            <div>
              <span class="eyebrow">Land / Großregion ${groupIndex + 1}</span>
              <h3>${group.country}</h3>
              <p>${countryPitch(group.country, group.items)}</p>
            </div>
            <div class="result-group__facts">
              <span>ab ${group.minHasOpenLiveLodging ? `${euro(group.minTotal)} Planwert` : `${euro(group.minTotal)} gesamt`}</span>
              <span>${group.items.length} konkrete Ort${group.items.length > 1 ? "e" : ""}</span>
              <span>Top: ${group.best.destination.city}</span>
            </div>
          </div>
          <p class="place-strip">${places}</p>
          ${regionSpecialIdeas(group)}
          <div class="result-group__cards">
            ${group.items.slice(0, 4).map((item, itemIndex) => renderDestinationCard(item, groupIndex + 1, itemIndex, context)).join("")}
          </div>
        </section>
      `;
    })
    .join("");
  const showMore = groups.length > initiallyVisible
    ? `<button type="button" class="secondary-button show-more-results">Weitere ${groups.length - initiallyVisible} Länder/Regionen anzeigen</button>`
    : "";
  results.innerHTML = `${budgetAlert}${cards}${showMore}`;
}

function renderDestinationCard(item, groupRank, itemIndex, context) {
  const tags = item.destination.vibes.map((tag) => `<span class="tag">${tag}</span>`).join("");
  const leverTags = item.leverNotes.slice(0, 8).map((tag) => `<span class="tag tag--lever">${tag}</span>`).join("");
  const variants = item.variants || [item];
  const totalText = item.liveLodgingRequired && !item.verifiedLodging ? `${euro(item.total)} Planwert` : `${euro(item.total)} gesamt`;
  const budgetIsOpen = item.liveLodgingRequired && !item.verifiedLodging;
  const budgetStatus = budgetIsOpen
    ? `<div class="budget-status budget-status--over"><strong>Budget offen</strong><span>${totalText}, Unterkunft noch nicht live belegt</span></div>`
    : item.overBudget
    ? `<div class="budget-status budget-status--over"><strong>${euro(item.overBudgetAmount)} über Budget</strong><span>${Math.round(item.overBudgetRatio * 100)}% drüber, nur als Prüfidee</span></div>`
    : `<div class="budget-status budget-status--fit"><strong>Im Budget</strong><span>${totalText}</span></div>`;
  return `
    <article class="destination-card destination-card--preview${item.overBudget ? " destination-card--over-budget" : ""}">
      <div class="card-top">
        <div>
          <span class="rank">${groupRank}.${itemIndex + 1}</span>
          <h3>${item.destination.city}</h3>
          <p class="country">${item.destination.region || item.destination.country} · ${item.destination.airport}</p>
        </div>
        <div class="score${item.overBudget ? " score--warn" : ""}">${item.score}<br><span>Score</span></div>
      </div>
      <div class="tags">${tags}</div>
      <p class="why">${item.destination.why}</p>
      ${budgetStatus}
      ${renderBestTripPreview(item, context)}
      <details class="decision-details">
        <summary>Warum / Kosten kurz prüfen</summary>
        <div class="tags">${leverTags}</div>
        <div class="region-glance">
          <span>ab ${totalText}</span>
          <span>${formatDate(item.startDate)} · ${item.nights} Nächte</span>
          <span>${item.transport.label}, ca. ${formatHours(item.transport.hours)} pro Strecke</span>
          <span>Alltag ${euro(item.effectiveDaily)} p. P./Tag</span>
          ${item.familyPricing?.children ? `<span>${item.familyPricing.label}</span>` : ""}
        </div>
      </details>
      <button type="button" class="region-toggle" aria-expanded="false">Reisevarianten und Links anzeigen</button>
      <div class="trip-options is-hidden">
        ${variants.map((variant, variantIndex) => renderTripOption(variant, variantIndex, context)).join("")}
      </div>
    </article>
  `;
}

function stayTypeLabel(type) {
  return {
    airbnb: "Airbnb/Fewo",
    "budget-room": "Budgetzimmer",
    hotel: "Hotel",
    pension: "Pension",
  }[type] || "Unterkunft";
}

function averagePriceNote(item) {
  return item.averagePriceEstimate
    ? "Preise sind Durchschnitts-/Saisonwerte, weil der Zeitraum zu weit in der Zukunft liegt. Aktuelle Verfügbarkeit und Aktionen bitte über die Buchungslinks prüfen."
    : "";
}

function lodgingBudgetText(item) {
  if (item.verifiedLodging) {
    return `Livepreis geprüft: ${euro(item.verifiedLodging.total)} gesamt (${item.verifiedLodging.label}, geprüft ${formatDate(item.verifiedLodging.checked)})`;
  }
  if (item.liveLodgingRequired) {
    return "Livepreis offen - nicht als echter Unterkunftspreis bestätigt";
  }
  const nightly = Math.round(item.lodgingTotal / Math.max(1, item.nights));
  if (nightly <= 65) return "sehr günstige Unterkunft nötig";
  if (nightly <= 95) return "günstige Unterkunft nötig";
  if (nightly <= 135) return "mittleres Unterkunftsbudget";
  return "hohes Unterkunftsbudget";
}

function specialExperience(item) {
  if (item.travelProfile !== "unusual" || !item.destination.unusual) return "";
  const special = item.destination.unusual;
  return `
    <div class="special-experience">
      <span>Besondere Idee</span>
      <strong>${special.label}</strong>
      <p>${special.note}. Suchbegriff: ${special.search}</p>
    </div>
  `;
}

function cruiseExperience(item) {
  if (item.travelProfile !== "cruise" || !item.destination.cruise) return "";
  const cruise = item.destination.cruise;
  return `
    <div class="cruise-advisor">
      <div class="cruise-advisor__head">
        <span>${cruise.type}</span>
        <strong>${cruise.label}</strong>
      </div>
      <div class="cruise-advisor__grid">
        <div><span>Passt für</span><p>${cruise.bestFor}</p></div>
        <div><span>Zuerst prüfen</span><p>${cruise.bookFirst}</p></div>
        <div><span>Gegencheck</span><p>${cruise.compare}</p></div>
        <div><span>Nicht ideal wenn</span><p>${cruise.avoidIf}</p></div>
      </div>
      <p class="cruise-advisor__note">${cruise.included}. Extra prüfen: ${cruise.caution}. Deal-Fokus: ${cruise.dealWatch}.</p>
    </div>
  `;
}

function bookingReadiness(item) {
  if (item.verifiedLodging && !item.overBudget) {
    return {
      tone: "ready",
      label: "Buchungsnaher Top-Treffer",
      text: "Konkrete Unterkunft ist mit Datum, Personen und Livepreis hinterlegt. Anreise, Gepäck, Storno und finale Verfügbarkeit direkt beim Anbieter gegenprüfen.",
    };
  }
  if (item.verifiedLodging) {
    return {
      tone: "check",
      label: "Konkretes Angebot, aber Budget prüfen",
      text: "Die Unterkunft ist live bepreist, das Gesamtpaket liegt aber über Budget oder hängt stark von der Anreise ab.",
    };
  }
  if (item.liveLodgingRequired) {
    return {
      tone: "search",
      label: "Suchvorschlag statt Angebot",
      text: "Für diesen nahen Zeitraum fehlt noch ein echtes Unterkunftsangebot. Erst buchen, wenn Airbnb/Booking einen passenden Livepreis zeigt.",
    };
  }
  return {
    tone: "estimate",
    label: "Kuratiertes Reiseziel",
    text: "Der Zeitraum ist eher planbar über Durchschnittswerte. Vor der Buchung Livepreise und Bewertungen beim Anbieter prüfen.",
  };
}

function unitNumber(value) {
  return Number.isInteger(value) ? String(value) : value.toFixed(1).replace(".", ",");
}

function costBreakdownRows(item) {
  const family = item.familyPricing || { livingUnits: 1 };
  const rows = [
    {
      label: item.destination.cruise ? "Kabine/Route" : "Unterkunft",
      amount: item.lodgingTotal,
      formula: item.verifiedLodging
        ? `${item.verifiedLodging.label}, live geprüft`
        : item.liveLodgingRequired
          ? "Planwert, Livepreis offen"
          : "Saison-/Durchschnittswert",
    },
    {
      label: "Anreise",
      amount: item.transportTotal,
      formula: `${item.transport.label}, Gesamtansatz für Hin/Rück bzw. Reisegruppe`,
    },
    {
      label: item.destination.cruise ? "Bordextras" : "Alltag vor Ort",
      amount: item.livingTotal,
      formula: `${euro(item.effectiveDaily)} p. P./Tag × ${unitNumber(family.livingUnits || 1)} Kosten-Einheiten × ${item.nights} Tag${item.nights === 1 ? "" : "e"}`,
    },
  ];
  if (item.skiTotal) {
    rows.push({
      label: "Ski/Winter",
      amount: item.skiTotal,
      formula: "Skipass, Ausrüstung und lokale Skikosten",
    });
  }
  return rows;
}

function renderCostBreakdown(item) {
  const rows = costBreakdownRows(item);
  return `
    <div class="cost-breakdown" aria-label="Kostenrechnung">
      <strong>So rechnet die App</strong>
      ${rows.map((row) => `
        <div>
          <span>${row.label}</span>
          <em>${row.formula}</em>
          <b>${euro(row.amount)}</b>
        </div>
      `).join("")}
      <div class="cost-breakdown__total">
        <span>Gesamt</span>
        <b>${euro(item.total)}</b>
      </div>
    </div>
  `;
}

function tripVerdict(item) {
  const strengths = [];
  const cautions = [];
  const timeMode = item.timePreference?.mode || "balanced";
  const tolerance = item.timePreference?.toleranceHours || 10;
  const risk = item.stay.quality.risk;
  const rating = item.stay.quality.rating;
  const budgetIsOpen = item.liveLodgingRequired && !item.verifiedLodging;

  if (!item.overBudget && !budgetIsOpen) strengths.push("passt ins Budget");
  if (budgetIsOpen) {
    cautions.push("Budget erst nach Livepreis belastbar");
  } else if (item.overBudget) {
    const percent = Math.round(item.overBudgetRatio * 100);
    cautions.push(`${euro(item.overBudgetAmount)} über Budget${percent >= 8 ? ` (${percent}%)` : ""}`);
  }

  if (item.transport.mode === "bus" && item.transport.hours > 14 && timeMode !== "cheap") {
    cautions.push("sehr lange Busfahrt");
  } else if (item.transport.mode === "bus" && timeMode === "cheap") {
    strengths.push("Sparfuchs-Anreise");
  } else if (item.transport.hours <= tolerance) {
    strengths.push("Reisezeit passt");
  } else if (item.transport.hours > tolerance + 4) {
    cautions.push("lange Anreise");
  }

  if (item.transport.mode === "flight" && item.transport.advisory) {
    strengths.push("Flug-Alternative lohnt Prüfung");
  }

  if (risk <= 35 && rating >= 4.3) strengths.push("Unterkunft wirkt solide");
  if (risk > 50 || rating < 3.6) cautions.push("Unterkunft genauer prüfen");
  if (item.effectiveDaily <= 45) strengths.push("Alltag günstig");
  if (item.effectiveDaily >= 75) cautions.push("Alltag teuer");
  if (item.averagePriceEstimate) cautions.push("Durchschnittspreis statt Livepreis");
  if (item.liveLodgingRequired && !item.verifiedLodging) cautions.push("Unterkunftspreis live offen");

  const seriousCaution = item.overBudget || budgetIsOpen || risk > 55 || (item.transport.mode === "bus" && item.transport.hours > 18 && timeMode !== "cheap");
  const label = budgetIsOpen
    ? "Budget offen"
    : item.overBudget
    ? "Über Budget"
    : seriousCaution
    ? "Eher prüfen"
    : item.score >= 110 && cautions.length <= 1
      ? "Top-Kandidat"
      : "Guter Kandidat";
  const tone = seriousCaution ? "warn" : label === "Top-Kandidat" ? "good" : "check";
  const reason = [...strengths.slice(0, 2), ...cautions.slice(0, 2)].slice(0, 3).join(" · ");
  return { label, tone, reason: reason || "gutes Preis-Leistungs-Verhältnis, Details bitte gegenprüfen" };
}

function transportAlternativeStrip(item) {
  const variants = item.variants || [];
  const alternatives = variants
    .filter((variant, index, all) => all.findIndex((other) => other.transport.mode === variant.transport.mode) === index)
    .slice(0, 4);
  if (alternatives.length <= 1) return "";
  return `
    <div class="transport-strip" aria-label="Anreisevergleich">
      ${alternatives.map((variant) => `
        <span${variant.transport.mode === item.transport.mode ? " class=\"is-best\"" : ""}>
          ${variant.transport.airportRole ? `${variant.transport.airportRole.label}: ` : ""}${variant.transport.label}: ${euro(variant.transportTotal)}, ${formatHours(variant.transport.hours)}
        </span>
      `).join("")}
    </div>
  `;
}

function flightAirportComparison(item) {
  const variants = item.variants?.length ? item.variants : [item];
  const flights = variants
    .filter((variant) => variant.transport.mode === "flight" && variant.transport.originAirport)
    .filter((variant, index, all) => all.findIndex((other) => other.transport.originAirport?.code === variant.transport.originAirport?.code) === index)
    .slice(0, 3);
  if (!flights.length) return "";
  const nearby = flights.find((variant) => variant.transport.airportRole?.type === "nearby");
  const deals = flights.filter((variant) => variant.transport.airportRole?.type === "deal");
  const others = flights.filter((variant) => !["nearby", "deal"].includes(variant.transport.airportRole?.type));
  return `
    <div class="airport-strip" aria-label="Flughafenvergleich">
      ${nearby ? `
        <span class="airport-strip__nearby">Nah: ${nearby.transport.originAirport.label} · ${euro(nearby.transportTotal)} · ${formatHours(nearby.transport.hours)}</span>
      ` : ""}
      ${deals.map((variant) => `
        <span class="airport-strip__deal">Günstig: ${variant.transport.originAirport.label} · ${euro(variant.transportTotal)} · ${formatHours(variant.transport.hours)}</span>
      `).join("")}
      ${others.map((variant) => `
        <span>Alternative: ${variant.transport.originAirport.label} · ${euro(variant.transportTotal)} · ${formatHours(variant.transport.hours)}</span>
      `).join("")}
    </div>
  `;
}

function renderBestTripPreview(item, context) {
  const stayPlan = concreteStayPlan(item);
  const transportPlan = concreteTransportPlan(item, context);
  const priceNote = averagePriceNote(item);
  const verdict = tripVerdict(item);
  const readiness = bookingReadiness(item);
  const directStay = directStayFor(item.destination, item.stay.type);
  const stayTitle = item.destination.cruise ? stayPlan.title : item.verifiedLodging ? item.verifiedLodging.label : directStay?.label || stayTypeLabel(item.stay.type);
  const totalLabel = item.liveLodgingRequired && !item.verifiedLodging ? `${euro(item.total)} Planwert` : `${euro(item.total)} gesamt`;
  const budgetIsOpen = item.liveLodgingRequired && !item.verifiedLodging;
  const headline = budgetIsOpen ? "Suchvorschlag mit offenem Budget" : item.overBudget ? "Günstigste Prüfidee" : "Beste konkrete Reise";
  const budgetNote = !budgetIsOpen && item.overBudget
    ? `<p class="mini-note mini-note--budget">${euro(item.overBudgetAmount)} über Budget. Diese Variante nur buchen, wenn Budget, Nächte, Anreisezeit oder Unterkunft bewusst gelockert werden.</p>`
    : "";
  const liveLodgingNote = item.liveLodgingRequired && !item.verifiedLodging
    ? `<p class="mini-note mini-note--budget">Unterkunftspreis ist für diesen nahen Zeitraum nicht live bestätigt. Der Betrag ist nur ein Planwert, bis Airbnb/Booking ein echtes Angebot zeigt.</p>`
    : "";
  const transportNotes = item.transport.notes?.length
    ? `<p class="mini-note">${item.transport.notes.slice(0, 3).join(" · ")}</p>`
    : "";
  return `
    <div class="best-trip">
      <div class="best-trip__head">
        <span>${headline}</span>
        <strong>${formatDate(item.startDate)} bis ${formatDate(item.checkout)} · ${totalLabel}</strong>
      </div>
      <div class="booking-readiness booking-readiness--${readiness.tone}">
        <strong>${readiness.label}</strong>
        <span>${readiness.text}</span>
      </div>
      ${budgetNote}
      ${liveLodgingNote}
      <div class="best-trip__grid">
        <div>
          <span>${item.destination.cruise ? "Kabine / Route" : "Unterkunft"}</span>
          <strong>${stayTitle} · ${stayPlan.area}</strong>
          <p>${stayPlan.bedsLabel}, ${lodgingBudgetText(item)}.</p>
        </div>
        <div>
          <span>Anreise</span>
          <strong>${transportPlan.title}</strong>
          <p>${euro(item.transportTotal)} gesamt, ca. ${formatHours(item.transport.hours)} pro Strecke.</p>
          ${transportNotes}
        </div>
      </div>
      ${renderCostBreakdown(item)}
      ${specialExperience(item)}
      ${cruiseExperience(item)}
      <div class="trip-verdict trip-verdict--${verdict.tone}">
        <strong>${verdict.label}</strong>
        <span>${verdict.reason}</span>
      </div>
      ${transportAlternativeStrip(item)}
      ${flightAirportComparison(item)}
      ${priceNote ? `<p class="price-note">${priceNote}</p>` : ""}
    </div>
  `;
}

function concreteStayPlan(item) {
  const city = item.destination.city;
  const lodgingNeeds = item.lodgingNeeds || { beds: 1, bedrooms: 1 };
  if (item.destination.cruise) {
    return {
      title: "Kabine auf Kreuzfahrtschiff",
      focus: "Innen-/Außenkabine oder Aktionskabine mit klarer Route",
      area: item.destination.region || item.destination.city,
      note: `${item.destination.cruise.included}; ${item.destination.cruise.caution}`,
      bedsLabel: `Kabine für ${item.familyPricing?.adults || 2} Erw.${item.familyPricing?.children ? ` und ${item.familyPricing.children} Kind${item.familyPricing.children > 1 ? "er" : ""}` : ""}`,
    };
  }
  const byType = {
    airbnb: {
      title: "Ferienwohnung mit Küche",
      focus: "ganze Unterkunft oder Studio mit Küche",
      note: "passt, wenn Selbstversorgung die Alltagskosten drücken soll",
    },
    "budget-room": {
      title: "Privatzimmer / Budgetzimmer",
      focus: "einfaches Zimmer mit guten aktuellen Reviews",
      note: "passt, wenn Preis wichtiger ist als viel Platz oder Hotelkomfort",
    },
    hotel: {
      title: "einfaches Hotelzimmer",
      focus: "Hotel mit solider Bewertung und klaren Storno-/Check-in-Regeln",
      note: "passt, wenn Komfort und planbarer Ablauf wichtiger sind",
    },
    pension: {
      title: "Pension oder Gästehaus",
      focus: "kleine Unterkunft mit Frühstück oder guter ÖPNV-Lage",
      note: "passt, wenn Preis und Grundkomfort balanciert sein sollen",
    },
  };
  const cityHints = {
    Amsterdam: {
      "budget-room": "Amsterdam Noord, Sloterdijk, Zaandam, Amstelveen oder Diemen",
      airbnb: "Noord, Oost, Sloterdijk oder Amstelveen mit Küche",
      hotel: "Sloterdijk, Arena, Noord oder Schiphol-Achse",
      pension: "Noord, Zaandam oder Amstelveen mit schneller ÖPNV-Anbindung",
    },
    "Hamburg & Lübeck": {
      "budget-room": "Altona, Wandsbek, Harburg oder Lübeck außerhalb der Altstadt",
      airbnb: "Barmbek, Eimsbüttel, Wandsbek oder Lübeck mit Küche",
      hotel: "Nähe S-/U-Bahn statt direkt HafenCity",
      pension: "Lübeck, Bergedorf oder Wandsbek",
    },
  };
  const fallbackArea = item.destination.vibes.includes("stadt")
    ? "nicht direkt im Zentrum, aber an guter ÖPNV-Achse"
    : item.destination.vibes.includes("strand")
      ? "zweite Reihe oder Nachbarort statt direkt am Hotspot"
      : "ruhiger Nachbarort mit guter Verbindung";
  const typePlan = byType[item.stay.type] || byType.hotel;
  const area = cityHints[city]?.[item.stay.type] || fallbackArea;
  return {
    title: typePlan.title,
    focus: typePlan.focus,
    area,
    note: typePlan.note,
    bedsLabel: `mind. ${lodgingNeeds.beds} Bett${lodgingNeeds.beds > 1 ? "en" : ""}, ${lodgingNeeds.bedrooms} Zimmer/Schlafzimmer`,
  };
}

function concreteTransportPlan(item, context) {
  const destination = item.destination.city;
  const airport = item.destination.airport;
  const flightAirport = item.transport.originAirport;
  const airportRole = item.transport.airportRole;
  const plans = {
    flight: {
      title: flightAirport ? `Flug ab ${flightAirport.label} (${flightAirport.code}) → ${airport}` : `Flug ${context.origin} → ${airport}`,
      detail: flightAirport
        ? `${airportRole ? `${airportRole.label}: ${airportRole.reason} ` : ""}Zubringer ab ${context.origin} per ${flightAirport.accessMode} ca. ${formatHours(flightAirport.accessHours)} plus Flugzeit; ${item.transport.notes?.find((note) => note.includes("Direktflug") || note.includes("Umstieg")) || "Verbindung prüfen"}`
        : "Direktflug oder Umstieg prüfen, danach ÖPNV/Transfer zur Unterkunft einplanen",
    },
    train: {
      title: `Bahn ${context.origin} → ${destination}`,
      detail: "Verbindung mit wenig Umstiegen bevorzugen; Sitzplatz/Deutschlandticket/BahnCard gegenprüfen",
    },
    "night-train": {
      title: `Nachtzug ${context.origin} → ${destination}`,
      detail: "Liege-/Schlafwagen und Ankunftszeit prüfen; spart ggf. eine Hotelnacht, kostet aber Komfort",
    },
    bus: {
      title: item.transport.originHub || item.transport.destinationHub
        ? `${item.transport.originHub?.city || context.origin} → ${item.transport.destinationHub?.city || destination} per FlixBus`
        : `FlixBus ${context.origin} → ${destination}`,
      detail: [
        item.transport.originHub?.accessLabel,
        `Fernbus ${item.transport.originHub?.city || context.origin} → ${item.transport.destinationHub?.city || destination}`,
        item.transport.destinationHub?.accessLabel,
        "Abfahrts-/Ankunftszeit, Pausen und Lage des Busbahnhofs prüfen",
      ].filter(Boolean).join("; "),
    },
    car: {
      title: `Auto ${context.origin} → ${destination}`,
      detail: "Parkkosten, Umweltzonen/Maut und Unterkunft mit Parkplatz prüfen",
    },
  };
  return plans[item.transport.mode] || plans.train;
}

function renderTripOption(item, index, context) {
  const links = bookingLinks(item, context);
  const stayName = stayTypeLabel(item.stay.type);
  const stayPlan = concreteStayPlan(item);
  const transportPlan = concreteTransportPlan(item, context);
  const verdict = tripVerdict(item);
  const hasFlightCodes = item.transport.mode === "flight" && (item.transport.originAirport?.code || originAirportCode(context.origin)) && destinationAirportCodes(item.destination).length;
  const transportLink = item.transport.mode === "flight"
    ? links.flights
    : item.transport.mode === "train"
      ? links.train
      : item.transport.mode === "night-train"
        ? links.nightTrain
        : item.transport.mode === "car"
          ? links.car
          : links.bus;
  const busPerPerson = item.transport.mode === "bus"
    ? euro(Math.round(item.transport.price))
    : "";
  const transportLinkLabel = item.transport.mode === "bus"
    ? `FlixBus-Strecke ab ca. ${busPerPerson} p. P.`
    : item.transport.mode === "flight"
      ? "Konkrete Flüge suchen"
      : `${item.transport.label} prüfen`;
  const hasDirectStay = Boolean(links.directStay);
  const primaryStayLink = item.destination.cruise ? links.cruise.primary : hasDirectStay ? links.directStay : links.favoriteStay;
  const primaryStayLabel = item.destination.cruise
    ? links.cruise.primaryLabel
    : item.verifiedLodging
      ? "Geprüfte Unterkunft öffnen"
      : hasDirectStay
        ? "Konkretes Angebot prüfen"
        : "Favorisierte Suche öffnen";
  const stayCostLabel = item.destination.cruise ? "Kabine" : stayName;
  const transportPriceLabel = `${euro(item.transportTotal)} gesamt`;
  const totalLabel = item.liveLodgingRequired && !item.verifiedLodging ? `${euro(item.total)} Planwert` : `${euro(item.total)} gesamt`;
  const lodgingPriceLabel = item.verifiedLodging
    ? `${stayCostLabel}: ${euro(item.lodgingTotal)} live geprüft`
    : item.liveLodgingRequired
      ? `${stayCostLabel}: Livepreis offen`
      : `${stayCostLabel}: Schätzwert`;
  const busLinkNote = item.transport.mode === "bus"
    ? `<p class="link-note">Bus-Schätzung: ${item.transport.notes.join(" · ")}. Der Link öffnet die stabile FlixBus-Streckenseite; Datum, Rückfahrt und verfügbare Plätze dort final wählen.</p>`
    : "";
  const flightLinkNote = item.transport.mode === "flight"
    ? `<p class="link-note">${item.transport.advisory ? "Flug war nicht als Hauptanreise ausgewählt, wird hier aber als prüfenswerte Alternative gezeigt, weil Preis/Reisezeit mithalten können. " : ""}${hasFlightCodes ? "Der Fluglink nutzt erkannte Flughafen-Codes und öffnet eine konkrete Hin-/Rückflug-Suche. Kinderpreise, Gepäck und alternative Flughäfen bitte in der Buchungsseite final prüfen." : "Für diese Start-/Zielkombination fehlt noch ein sicherer Flughafen-Code; der Link öffnet deshalb eine gezielte Websuche statt einer leeren Flugseite."}</p>`
    : "";
  const priceNote = averagePriceNote(item);
  const directNote = hasDirectStay ? directStayNote(item) : "";
  const directStay = directStayFor(item.destination, item.stay.type);
  const stayTitle = item.verifiedLodging ? item.verifiedLodging.label : directStay?.label || stayPlan.title;
  return `
    <section class="trip-option">
      <div class="trip-option__top">
        <strong>Reise ${index + 1}: ${formatDate(item.startDate)} bis ${formatDate(item.checkout)}</strong>
        <span>${totalLabel}</span>
      </div>
      <div class="concrete-plan">
        <div>
          <span>${hasDirectStay ? "Konkretes Unterkunftsangebot" : "Favorisierte Unterkunftssuche"}</span>
          <strong>${stayTitle} · ${stayPlan.area}</strong>
          <p>${stayPlan.focus}, ${stayPlan.bedsLabel}, ${lodgingBudgetText(item)}. ${hasDirectStay ? `Direktangebot hinterlegt.${directNote ? ` ${directNote}` : ""}` : `${stayPlan.note}. Den echten Preis immer im Buchungsportal prüfen.`}</p>
        </div>
        <div>
          <span>Konkrete Anreise</span>
          <strong>${transportPlan.title}</strong>
          <p>${transportPlan.detail}. Geschätzt: ${euro(item.transportTotal)} gesamt, ca. ${formatHours(item.transport.hours)} pro Strecke.</p>
        </div>
      </div>
      ${specialExperience(item)}
      ${cruiseExperience(item)}
      <div class="trip-verdict trip-verdict--${verdict.tone}">
        <strong>${verdict.label}</strong>
        <span>${verdict.reason}</span>
      </div>
      <div class="costs costs--compact">
        <div><span>Anreise</span><strong>${item.transport.label} ${transportPriceLabel}</strong></div>
        <div><span>${item.destination.cruise ? "Kabine" : "Unterkunft"}</span><strong>${lodgingPriceLabel}</strong></div>
        <div><span>${item.destination.cruise ? "Bordextras" : "Alltag"}</span><strong>${euro(item.effectiveDaily)} p. P./Tag</strong></div>
      </div>
      ${renderCostBreakdown(item)}
      <div class="quality-line">
        <span>${item.stay.quality.rating.toFixed(1)}★</span>
        <span>${item.stay.quality.reviews} Reviews</span>
        <span>zuletzt ~${item.stay.quality.ageMonths} Mon.</span>
        <span>Risiko ${item.stay.quality.risk}/100</span>
      </div>
      <div class="living-line">
        ${item.familyPricing?.children ? `<span>${item.familyPricing.label}</span>` : ""}
        <span>${item.board.label}</span>
        <span>Essen ${euro(item.dailyBreakdown.food)}</span>
        <span>ÖPNV ${euro(item.dailyBreakdown.localTransport)}</span>
        <span>Aktivitäten ${euro(item.dailyBreakdown.activities)}</span>
      </div>
      ${item.skiCosts ? `
      <div class="ski-line">
        <span>${item.destination.ski.resort}</span>
        <span>${item.skiCosts.skiDays} Skitage</span>
        <span>Ski ${euro(item.skiTotal)}</span>
        <span>Skipass ca. ${euro(item.skiCosts.adultPassEstimate)} p. Erw.</span>
      </div>
      ` : ""}
      <p class="trip-combo">${item.nights} Nächte · ${item.transport.label}, ca. ${formatHours(item.transport.hours)} pro Strecke · Reisezeit ${item.timePreference?.label || "bewertet"}${item.liveLodgingRequired && !item.verifiedLodging ? " · Budget offen, Unterkunft live prüfen" : item.overBudget ? " · über Budget, aber als Vergleich nützlich" : ""}${priceNote ? " · Durchschnittspreise" : ""}</p>
      ${priceNote ? `<p class="price-note">${priceNote}</p>` : ""}
      <nav class="links" aria-label="Buchungslinks für ${item.destination.city}, Reise ${index + 1}">
        <a href="${transportLink}" target="_blank" rel="noreferrer">${transportLinkLabel}</a>
        <a href="${primaryStayLink}" target="_blank" rel="noreferrer">${primaryStayLabel}</a>
        ${item.transport.mode === "bus" && links.flixbus !== transportLink ? `<a href="${links.flixbus}" target="_blank" rel="noreferrer">FlixBus direkt öffnen</a>` : ""}
        ${item.destination.cruise ? links.cruise.compare.map((link) => `<a href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>`).join("") : `<a href="${links.booking}" target="_blank" rel="noreferrer">Booking-Alternativen</a><a href="${links.airbnb}" target="_blank" rel="noreferrer">Airbnb-Alternativen</a>`}
        ${links.special ? `<a href="${links.special}" target="_blank" rel="noreferrer">Besondere Idee suchen</a>` : ""}
        <a href="${links.maps}" target="_blank" rel="noreferrer">Karte öffnen</a>
      </nav>
      ${flightLinkNote}
      ${busLinkNote}
    </section>
  `;
}

function formatDate(value) {
  return new Intl.DateTimeFormat("de-DE", { day: "2-digit", month: "2-digit", year: "numeric" }).format(localDate(value));
}

function formatHours(value) {
  return Number.isInteger(value) ? `${value} Std.` : `${String(value).replace(".", ",")} Std.`;
}

function syncEndDate() {
  const start = document.querySelector("#start-date");
  const end = document.querySelector("#end-date");
  end.min = start.value;
  end.value = addDays(start.value, 14);
}

function applyHolidayPreset() {
  const state = document.querySelector("#holiday-state").value;
  const type = document.querySelector("#holiday-type").value;
  const year = document.querySelector("#holiday-year").value;
  const note = document.querySelector("#holiday-note");
  const preset = holidayPresets[state]?.[year]?.[type];
  const label = holidayPresets[state]?.label || state;
  const holidayLabel = holidayNames[type] || type;

  if (!preset) {
    note.textContent = `${holidayLabel} ${year} für ${label} sind noch nicht hinterlegt. Die manuellen Datumsfelder bleiben aktiv.`;
    return;
  }

  const [startDate, endDate] = preset;
  const start = document.querySelector("#start-date");
  const end = document.querySelector("#end-date");
  start.value = startDate;
  end.min = startDate;
  end.value = endDate;
  note.textContent = `${label} ${holidayLabel} ${year}: ${formatDate(startDate)} bis ${formatDate(endDate)}. Optimierung läuft innerhalb dieses Ferienfensters.`;
  saveFormState();
  planTrip();
}

function updateHolidayNote() {
  const state = document.querySelector("#holiday-state").value;
  const type = document.querySelector("#holiday-type").value;
  const year = document.querySelector("#holiday-year").value;
  const note = document.querySelector("#holiday-note");
  const preset = holidayPresets[state]?.[year]?.[type];
  const label = holidayPresets[state]?.label || state;
  const holidayLabel = holidayNames[type] || type;
  note.textContent = preset
    ? `${label} ${holidayLabel} ${year}: ${formatDate(preset[0])} bis ${formatDate(preset[1])}.`
    : `${holidayLabel} ${year} für ${label} sind noch nicht hinterlegt.`;
}

function updateTripMode() {
  const mode = document.querySelector("#trip-mode").value;
  document.querySelector("#ski-options").classList.toggle("is-hidden", mode !== "ski");
  const start = document.querySelector("#start-date");
  const end = document.querySelector("#end-date");
  if (mode === "ski" && !isSkiSeason(start.value)) {
    start.value = "2026-12-21";
    end.min = start.value;
    end.value = "2027-03-15";
  }
  saveFormState();
  planTrip();
}

function applyTravelProfile() {
  const profile = document.querySelector("#travel-profile").value;
  document.querySelector("#profile-note").textContent = profileNotes[profile] || profileNotes.custom;
  resetConflictingPlaceFilterForProfile(profile);
  resetProfileKeywordForProfile(profile);

  if (profile === "custom") {
    saveFormState();
    planTrip();
    return;
  }

  document.querySelector("#flex-dates").checked = true;
  document.querySelector("#flex-nights").checked = true;
  setCheckedValues("#stay-options", ["airbnb", "budget-room", "hotel", "pension"]);
  setCheckedValues("#budget-levers", ["shoulder", "kitchen", "local", "nearby-airports", "weather", "last-minute", "flash-sale"]);
  document.querySelector("#min-rating").value = "4.3";
  document.querySelector("#min-trust").value = "50";
  document.querySelector("#max-stay-risk").value = "35";
  document.querySelector("#quality-weight").value = "80";

  if (profile === "budget-anywhere") {
    document.querySelector("#trip-mode").value = "general";
    setCheckedValues("#transport-options", allTransportModes);
    setCheckedValues("#vibe-options", ["strand", "stadt", "berge", "natur", "essen", "kultur"]);
    setRadioValue("board", "auto");
    document.querySelector("#hidden-factor").value = "90";
    document.querySelector("#comfort-factor").value = "45";
    document.querySelector("#max-travel-hours").value = "12";
    document.querySelector("#time-value").value = "auto";
  }

  if (profile === "budget-hunter") {
    document.querySelector("#trip-mode").value = "general";
    setCheckedValues("#transport-options", allTransportModes);
    setCheckedValues("#vibe-options", ["strand", "stadt", "berge", "natur", "essen", "kultur"]);
    setRadioValue("board", "auto");
    document.querySelector("#hidden-factor").value = "85";
    document.querySelector("#comfort-factor").value = "35";
    document.querySelector("#max-travel-hours").value = "24";
    document.querySelector("#time-value").value = "cheap";
    document.querySelector("#min-rating").value = "4.0";
    document.querySelector("#min-trust").value = "40";
    document.querySelector("#max-stay-risk").value = "45";
  }

  if (profile === "short-trip") {
    document.querySelector("#trip-mode").value = "general";
    setCheckedValues("#transport-options", allTransportModes);
    setCheckedValues("#vibe-options", ["stadt", "berge", "natur", "essen", "kultur"]);
    setRadioValue("board", "breakfast");
    document.querySelector("#nights").value = "1";
    document.querySelector("#hidden-factor").value = "60";
    document.querySelector("#comfort-factor").value = "70";
    document.querySelector("#max-travel-hours").value = "5";
    document.querySelector("#time-value").value = "strict";
  }

  if (profile === "city-trip") {
    document.querySelector("#trip-mode").value = "general";
    setCheckedValues("#transport-options", allTransportModes);
    setCheckedValues("#vibe-options", ["stadt", "kultur", "essen"]);
    setRadioValue("board", "breakfast");
    document.querySelector("#nights").value = "2";
    document.querySelector("#hidden-factor").value = "65";
    document.querySelector("#comfort-factor").value = "70";
    document.querySelector("#max-travel-hours").value = "7";
    document.querySelector("#time-value").value = "strict";
  }

  if (profile === "unusual") {
    document.querySelector("#trip-mode").value = "general";
    setCheckedValues("#transport-options", allTransportModes);
    setCheckedValues("#vibe-options", ["strand", "natur", "berge", "kultur"]);
    setRadioValue("board", "auto");
    document.querySelector("#hidden-factor").value = "95";
    document.querySelector("#comfort-factor").value = "45";
    document.querySelector("#max-travel-hours").value = "14";
    document.querySelector("#time-value").value = "balanced";
    if (!document.querySelector("#keyword-input").value.trim()) {
      document.querySelector("#keyword-input").value = "ungewöhnlich wasser boot spontan";
    }
  }

  if (profile === "cruise") {
    document.querySelector("#trip-mode").value = "general";
    setCheckedValues("#transport-options", allTransportModes);
    setCheckedValues("#vibe-options", ["strand", "stadt", "natur", "kultur", "essen"]);
    setCheckedValues("#stay-options", ["hotel", "pension"]);
    setRadioValue("board", "auto");
    document.querySelector("#hidden-factor").value = "45";
    document.querySelector("#comfort-factor").value = "82";
    document.querySelector("#max-travel-hours").value = "10";
    document.querySelector("#time-value").value = "relaxed";
    document.querySelector("#min-rating").value = "4.2";
    document.querySelector("#min-trust").value = "45";
    document.querySelector("#max-stay-risk").value = "40";
    if (!document.querySelector("#keyword-input").value.trim()) {
      document.querySelector("#keyword-input").value = "kreuzfahrt komfort wasser kultur";
    }
  }

  if (profile === "ski") {
    document.querySelector("#trip-mode").value = "ski";
    setCheckedValues("#transport-options", allTransportModes);
    setCheckedValues("#vibe-options", ["berge", "natur", "essen"]);
    setRadioValue("board", "auto");
    document.querySelector("#ski-days").value = "5";
    document.querySelector("#ski-rental").value = "needed";
    document.querySelector("#ski-level").value = "mixed";
    document.querySelector("#snow-weight").value = "82";
    document.querySelector("#hidden-factor").value = "65";
    document.querySelector("#comfort-factor").value = "70";
    document.querySelector("#max-travel-hours").value = "12";
    document.querySelector("#time-value").value = "balanced";
    updateTripMode();
    saveFormState();
    return;
  }

  if (profile === "beach-summer") {
    document.querySelector("#trip-mode").value = "general";
    setCheckedValues("#transport-options", allTransportModes);
    setCheckedValues("#vibe-options", ["strand", "natur", "essen"]);
    setRadioValue("board", "auto");
    document.querySelector("#hidden-factor").value = "75";
    document.querySelector("#comfort-factor").value = "55";
    document.querySelector("#max-travel-hours").value = "10";
    document.querySelector("#time-value").value = "balanced";
  }

  if (profile === "city-summer") {
    document.querySelector("#trip-mode").value = "general";
    setCheckedValues("#transport-options", ["flight", "train", "car", "flex-dates", "flex-nights"]);
    setCheckedValues("#vibe-options", ["stadt", "kultur", "essen"]);
    setRadioValue("board", "breakfast");
    document.querySelector("#hidden-factor").value = "55";
    document.querySelector("#comfort-factor").value = "65";
    document.querySelector("#max-travel-hours").value = "8";
    document.querySelector("#time-value").value = "strict";
  }

  if (profile === "active") {
    document.querySelector("#trip-mode").value = "general";
    setCheckedValues("#transport-options", allTransportModes);
    setCheckedValues("#vibe-options", ["berge", "natur", "kultur"]);
    setRadioValue("board", "auto");
    document.querySelector("#hidden-factor").value = "85";
    document.querySelector("#comfort-factor").value = "50";
    document.querySelector("#max-travel-hours").value = "11";
    document.querySelector("#time-value").value = "balanced";
  }

  updateTripMode();
  saveFormState();
  planTrip();
}

function schedulePlan() {
  saveFormState();
  window.clearTimeout(schedulePlan.timer);
  schedulePlan.timer = window.setTimeout(() => planTrip(), 80);
}

initDates();
const restoredState = restoreFormState();
renderTravelerDetails();
updateLocalVisitCount();
form.addEventListener("submit", planTrip);
form.addEventListener("input", schedulePlan);
form.addEventListener("change", schedulePlan);
document.querySelector("#apply-holiday").addEventListener("click", applyHolidayPreset);
document.querySelector("#holiday-state").addEventListener("change", updateHolidayNote);
document.querySelector("#holiday-type").addEventListener("change", updateHolidayNote);
document.querySelector("#holiday-year").addEventListener("change", updateHolidayNote);
document.querySelector("#trip-mode").addEventListener("change", updateTripMode);
document.querySelector("#travel-profile").addEventListener("change", applyTravelProfile);
document.querySelector("#travelers").addEventListener("input", () => {
  const travelers = Number(document.querySelector("#travelers").value) || 1;
  const beds = document.querySelector("#min-beds");
  if (beds && Number(beds.value) < travelers) beds.value = String(travelers);
  renderTravelerDetails();
  saveFormState();
  planTrip();
});
document.querySelector("#start-date").addEventListener("change", () => {
  syncEndDate();
  saveFormState();
  planTrip();
});
results.addEventListener("click", (event) => {
  const showMoreButton = event.target.closest(".show-more-results");
  if (showMoreButton) {
    results.querySelectorAll(".extra-result").forEach((card) => card.classList.remove("is-hidden"));
    showMoreButton.remove();
    return;
  }

  const toggle = event.target.closest(".region-toggle");
  if (!toggle) return;
  const card = toggle.closest(".destination-card");
  const options = card.querySelector(".trip-options");
  const isOpening = options.classList.contains("is-hidden");
  options.classList.toggle("is-hidden", !isOpening);
  toggle.setAttribute("aria-expanded", String(isOpening));
  toggle.textContent = isOpening ? "Reisen ausblenden" : "Reisevarianten und Links anzeigen";
});
updateHolidayNote();
if (restoredState) {
  const restoredProfile = document.querySelector("#travel-profile").value;
  resetConflictingPlaceFilterForProfile(restoredProfile);
  resetProfileKeywordForProfile(restoredProfile);
  document.querySelector("#profile-note").textContent = profileNotes[restoredProfile] || profileNotes.custom;
  document.querySelector("#ski-options").classList.toggle("is-hidden", document.querySelector("#trip-mode").value !== "ski");
  planTrip();
} else {
  applyTravelProfile();
}
form.dispatchEvent(new Event("submit", { cancelable: true }));

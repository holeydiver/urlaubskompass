const destinations = [
  {
    city: "Kotor",
    country: "Montenegro",
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
    why: "Dramatische Bucht, alte Stadtmauern, Wandern direkt über dem Wasser und oft günstiger als kroatische Klassiker.",
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
    ski: { resort: "Schladming-Dachstein", pass: 73, rental: 34, transfer: 18, snow: 86, terrain: 88, beginner: 76 },
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
    ski: { resort: "Ski amadé Gastein", pass: 70, rental: 32, transfer: 16, snow: 80, terrain: 80, beginner: 72 },
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
  "city-trip": "Städtereise",
  ski: "Skiferien",
  "beach-summer": "Sommerurlaub am Strand",
  "city-summer": "Sommerurlaub in der Stadt",
  active: "Aktivurlaub",
  custom: "Individuell",
};

const profileNotes = {
  "budget-anywhere": "Für „ich habe Urlaub, Budget und keine feste Idee“: sucht breit nach dem besten Gegenwert über Länder, Reisearten und Anreisewege.",
  "budget-hunter": "Priorisiert den niedrigsten Gesamtpreis: FlixBus, lange Anreise und einfachere Unterkünfte dürfen gewinnen, solange aktuelle Warnsignale nicht kippen.",
  "short-trip": "Optimiert auf 1 bis 3 Nächte, kurze Anreise und wenig verlorene Zeit.",
  "city-trip": "Optimiert auf Kultur, Essen, ÖPNV, kurze Anreise und gute Wochenendpreise.",
  ski: "Optimiert auf Skikosten, Schneesicherheit, passende Verpflegung und kurze Anreise.",
  "beach-summer": "Bevorzugt Strand, Wasser, Selbstversorgung und faire Alltagskosten - warm oder nah.",
  "city-summer": "Bevorzugt Stadt, Kultur, Essen, ÖPNV und kurze Wege vor Ort.",
  active: "Bevorzugt Berge, Natur, moderate Reisezeit und günstige Aktivitäten.",
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
      if (element) element.value = value;
    });
    setCheckedValues("#transport-options", state.groups?.transports || []);
    setCheckedValues("#budget-levers", state.groups?.levers || []);
    setCheckedValues("#vibe-options", state.groups?.vibes || []);
    setCheckedValues("#stay-options", state.groups?.stays || []);
    if (state.groups?.board) setRadioValue("board", state.groups.board);
    if (state.groups?.rail) document.querySelector("#night-train").checked = state.groups.rail.nightTrain;
    const start = document.querySelector("#start-date");
    const end = document.querySelector("#end-date");
    end.min = start.value;
    return true;
  } catch (error) {
    console.warn("Gespeicherter Formularzustand konnte nicht geladen werden.", error);
    return false;
  }
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
  const country = destination.country.toLowerCase();
  const profiles = {
    "italien": { flightHours: 5, train: 170, trainHours: 10, nightTrain: 135, nightTrainHours: 13, bus: 95, busHours: 17, car: 230, carHours: 13, railComfort: 74, nightComfort: 76, busComfort: 48, carComfort: 62 },
    "kroatien": { flightHours: 5.5, train: 145, trainHours: 13, nightTrain: 125, nightTrainHours: 15, bus: 88, busHours: 18, car: 245, carHours: 14, railComfort: 63, nightComfort: 70, busComfort: 46, carComfort: 58 },
    "bosnien und herzegowina": { flightHours: 6, train: 155, trainHours: 16, nightTrain: 145, nightTrainHours: 18, bus: 82, busHours: 21, car: 260, carHours: 17, railComfort: 50, nightComfort: 62, busComfort: 44, carComfort: 52 },
    "montenegro": { flightHours: 6.5, train: 185, trainHours: 24, nightTrain: 165, nightTrainHours: 25, bus: 92, busHours: 30, car: 320, carHours: 22, railComfort: 42, nightComfort: 58, busComfort: 40, carComfort: 46 },
    "albanien": { flightHours: 6, train: null, trainHours: null, bus: 105, busHours: 30, railComfort: 0, busComfort: 38 },
    "bulgarien": { flightHours: 5.5, train: 145, trainHours: 21, nightTrain: 130, nightTrainHours: 23, bus: 78, busHours: 24, railComfort: 52, nightComfort: 60, busComfort: 42 },
    "griechenland": { flightHours: 6.5, train: null, trainHours: null, bus: 125, busHours: 34, railComfort: 0, busComfort: 35 },
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
  const passTotal = destination.ski.pass * skiDays * family.skiPassUnits;
  const rentalTotal = rentalPerDay * skiDays * family.skiRentalUnits;
  const transferTotal = destination.ski.transfer * family.transportUnits;
  const total = passTotal + rentalTotal + transferTotal;
  const levelScore = options.ski.level === "beginner" ? destination.ski.beginner : options.ski.level === "advanced" ? destination.ski.terrain : (destination.ski.beginner + destination.ski.terrain) / 2;
  const snowScore = destination.ski.snow * options.ski.snowWeight;
  const score = levelScore * 0.18 + snowScore * 0.16 - Math.max(0, total / Math.max(family.skiPassUnits, 1) - 420) * 0.035;
  const notes = [`Skipass ${euro(destination.ski.pass)}/Tag`, `${destination.ski.resort}`, `${destination.ski.snow}/100 Schnee`];
  if (rentalPerDay) notes.push(`Leihe ${euro(rentalPerDay)}/Tag`);
  return { total: Math.round(total), passTotal: Math.round(passTotal), rentalTotal: Math.round(rentalTotal), transferTotal: Math.round(transferTotal), dailyEquivalent: Math.round(total / Math.max(nights * family.skiPassUnits, 1)), notes, score, skiDays };
}

function transportOptions(destination, startDate, nights, allowedModes, maxTravelHours, railPrefs, familyPricing) {
  const profile = routeProfile(destination);
  const options = [];
  if (allowedModes.includes("flight") && profile.flightHours <= maxTravelHours) {
    options.push({
      mode: "flight",
      label: "Flug",
      price: Math.round(seasonalFlight(destination, startDate) * weekdayDealFactor(startDate, nights, "flight") * bookingWindowFactor(startDate, "flight")),
      hours: profile.flightHours,
      comfort: 70,
    });
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
  if (allowedModes.includes("bus") && profile.bus && profile.busHours <= maxTravelHours) {
    options.push({
      mode: "bus",
      label: "FlixBus/Bus",
      price: Math.round(profile.bus * weekdayDealFactor(startDate, nights, "bus") * bookingWindowFactor(startDate, "bus")),
      hours: profile.busHours,
      comfort: profile.busComfort,
      notes: ["FlixBus prüfen"],
    });
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
  return [
    destination.city,
    destination.country,
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

function planTrip(event) {
  if (event) event.preventDefault();
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
  const transportTypes = getChecked("#transport-options").filter((value) => ["flight", "train", "bus", "car"].includes(value));
  const budgetLevers = getChecked("#budget-levers");
  const boardPreference = document.querySelector('input[name="board"]:checked')?.value || "auto";
  const tripMode = document.querySelector("#trip-mode").value;
  const travelProfile = document.querySelector("#travel-profile").value;
  const keywordTags = keywordTagsFromInput(document.querySelector("#keyword-input").value);
  const includes = listFromInput("#include-countries");
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
  document.querySelector("#summary-note").textContent = dateIsFarFuture(startDate)
    ? "Der Zeitraum liegt mehr als ca. 330 Tage in der Zukunft. Preise werden deshalb als historische Durchschnittswerte behandelt."
    : `Die App testet Starttage, Reisedauer und Anreisearten. Reisezeit wird ${timePreference.label}; ${travelLogicNote} Reisende: ${pricing.label}.${nightsWindowNote}`;

  try {
    const baseOptions = {
      budget,
      travelers,
      familyPricing: pricing,
      lodgingNeeds,
      candidateStarts,
      candidateNights,
      latestEndDate,
      vibes,
      stayTypes,
      transportTypes: transportTypes.length ? transportTypes : ["flight", "train", "bus", "car"],
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
    const scored = scoreDestinations(destinations, includes, excludes, baseOptions);

    const bestDuration = scored[0] ? `${scored[0].nights} Nächte` : "-";
    document.querySelector("#best-duration").textContent = bestDuration;
    renderResults(scored, { origin, travelers });
  } catch (error) {
    results.innerHTML = `<p class="warning">Berechnung konnte nicht abgeschlossen werden: ${error.message}</p>`;
    console.error(error);
  }
}

function scoreDestinations(allDestinations, includes, excludes, options) {
  const attempts = [options];
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
    if (attempt.tripMode !== "ski" || scored.length >= 3 || attempt === attempts[attempts.length - 1]) return scored;
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
  const stays = stayOptionsForDestination(destination, options.stayTypes, options.comfortFactor, options.qualityThresholds).slice(0, 3);
  if (!stays.length) return null;
  const vibeMatches = options.vibes.filter((vibe) => destination.vibes.includes(vibe)).length;
  const vibeScore = options.vibes.length ? (vibeMatches / options.vibes.length) * 100 : 70;
  const candidates = [];

  for (const stay of stays) {
    for (const startDate of options.candidateStarts) {
      for (const nights of options.candidateNights) {
        const checkout = addDays(startDate, nights);
        if (localDate(checkout) > localDate(options.latestEndDate)) continue;
        const transports = transportOptions(destination, startDate, nights, options.transportTypes, options.maxTravelHours, options.railPrefs, options.familyPricing);
        for (const transport of transports) {
          if (options.tripMode === "ski" && !isSkiSeason(startDate)) continue;
          const deal = dealProfile(startDate, nights, options.budgetLevers);
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
          const lodgingTotal = Math.round((stay.price + board.boardNightCost) * options.familyPricing.lodgingFactor * lodgingDiscount * localMultiplier * shoulderMultiplier * deal.lodgingDiscount * qualityDealGuard * sparfuchsLodgingMultiplier * nights);
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
          const budgetScore = Math.max(0, 100 - Math.max(0, effectiveTotal - options.budget) / Math.max(options.budget, 1) * 140);
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
          const keyword = keywordMatch(destination, options.keywordTags || [], { transportHours: transport.hours });
          const score = Math.round(
            budgetScore * 0.34 +
              valueScore * 0.12 +
              vibeScore * 0.2 +
              qualityScore * options.qualityThresholds.weight * 0.14 +
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
              keyword.score
          );
          const leverNotes = makeLeverNotes(destination, {
            shoulder,
            kitchen: hasLever(options.budgetLevers, "kitchen"),
            local: hasLever(options.budgetLevers, "local"),
            nearbyAirport: hasLever(options.budgetLevers, "nearby-airports") && destination.nearbyAirport && transport.mode === "flight",
            weather,
            dealNotes: deal.notes,
            stayQuality: stay.quality,
            budgetFlexibleQuality: options.qualityThresholds.budgetFlexible,
            dailyBreakdown: board,
            skiCosts,
            board,
            keywordMatches: keyword.matches,
            transportNotes: transport.notes || [],
          });
          candidates.push({
            destination,
            stay,
            transport,
            startDate,
            checkout,
            nights,
            lodgingTotal,
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
            score,
            overBudget: total > options.budget,
          });
        }
      }
    }
  }
  const variants = candidates
    .sort((a, b) => b.score - a.score || a.effectiveTotal - b.effectiveTotal)
    .filter((item, index, all) => all.findIndex((other) => `${other.stay.type}-${other.transport.mode}-${other.startDate}-${other.nights}` === `${item.stay.type}-${item.transport.mode}-${item.startDate}-${item.nights}`) === index)
    .slice(0, 3);
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
  if (state.keywordMatches?.length) notes.push(...state.keywordMatches.slice(0, 3).map((tag) => `passt: ${keywordLabel(tag)}`));
  if (state.dealNotes) notes.push(...state.dealNotes);
  if (state.transportNotes) notes.push(...state.transportNotes);
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
  return searchUrl("https://www.flixbus.de/", {
    departureCity: context.origin,
    arrivalCity: item.destination.city,
    rideDate: formatDate(item.startDate),
    adult: item.familyPricing?.adults || context.travelers || 1,
    children: item.familyPricing?.children || 0,
  });
}

function airbnbSearchUrl(query, item) {
  const family = item.familyPricing || { adults: 1, childAges: [], children: 0 };
  const lodgingNeeds = item.lodgingNeeds || { beds: 1, bedrooms: 1 };
  return searchUrl("https://www.airbnb.de/s/homes", {
    query,
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

function bookingLinks(item, context) {
  const query = item.destination.searchQuery || `${item.destination.city} ${item.destination.country}`;
  const routeQuery = routeSearchText(item, context);
  const family = item.familyPricing || { adults: context.travelers, children: 0 };
  const lodgingNeeds = item.lodgingNeeds || { bedrooms: 1 };
  return {
    flights: searchUrl("https://www.google.com/travel/flights", {
      q: `${context.origin} to ${item.destination.airport} ${item.startDate}`,
    }),
    train: bahnSearchUrl(item, context),
    nightTrain: searchUrl("https://www.google.com/search", {
      q: `Nachtzug ${routeQuery}`,
    }),
    bus: searchUrl("https://www.omio.de/suchen", {
      q: `Bus ${routeQuery}`,
    }),
    flixbus: flixbusSearchUrl(item, context),
    car: searchUrl("https://www.google.com/maps/dir/", {
      api: 1,
      origin: context.origin,
      destination: query,
      travelmode: "driving",
    }),
    airbnb: airbnbSearchUrl(query, item),
    booking: searchUrl("https://www.booking.com/searchresults.html", {
      ss: query,
      group_adults: family.adults,
      group_children: family.children,
      no_rooms: lodgingNeeds.bedrooms,
      checkin: item.startDate,
      checkout: item.checkout,
    }),
    maps: searchUrl("https://www.google.com/maps/search/", {
      api: 1,
      query,
    }),
  };
}

function renderResults(items, context) {
  if (!items.length) {
    results.innerHTML = `<p class="warning">Keine Treffer mit diesen Filtern. Lockere den Ort, die Anreisezeit oder Qualitätsgrenzen etwas. Du kannst Mindeststerne bewusst senken, solltest dann aber aktuelle Reviews genauer prüfen.</p>`;
    return;
  }

  const initiallyVisible = 3;
  const cards = items
    .map((item, index) => {
      const tags = item.destination.vibes.map((tag) => `<span class="tag">${tag}</span>`).join("");
      const leverTags = item.leverNotes.map((tag) => `<span class="tag tag--lever">${tag}</span>`).join("");
      const extraClass = index >= initiallyVisible ? " extra-result is-hidden" : "";
      const variants = item.variants || [item];
      return `
        <article class="destination-card${extraClass}">
          <div class="card-top">
            <div>
              <span class="rank">${index + 1}</span>
              <h3>${item.destination.city}</h3>
              <p class="country">${item.destination.country} · ${item.destination.airport}</p>
            </div>
            <div class="score">${item.score}<br><span>Score</span></div>
          </div>
          <div class="tags">${tags}</div>
          <div class="tags">${leverTags}</div>
          <p class="why">${item.destination.why}</p>
          ${renderBestTripPreview(variants[0], context)}
          <div class="region-glance">
            <span>ab ${euro(item.total)} gesamt</span>
            <span>${formatDate(item.startDate)} · ${item.nights} Nächte</span>
            <span>${item.transport.label}, ca. ${formatHours(item.transport.hours)} pro Strecke</span>
            <span>Alltag ${euro(item.effectiveDaily)} p. P./Tag</span>
            ${item.familyPricing?.children ? `<span>${item.familyPricing.label}</span>` : ""}
          </div>
          <button type="button" class="region-toggle" aria-expanded="false">Weitere Reisevarianten anzeigen</button>
          <div class="trip-options is-hidden">
            ${variants.map((variant, variantIndex) => renderTripOption(variant, variantIndex, context)).join("")}
          </div>
        </article>
      `;
    })
    .join("");
  const showMore = items.length > initiallyVisible
    ? `<button type="button" class="secondary-button show-more-results">Weitere ${items.length - initiallyVisible} Vorschläge anzeigen</button>`
    : "";
  results.innerHTML = `${cards}${showMore}`;
}

function stayTypeLabel(type) {
  return {
    airbnb: "Airbnb/Fewo",
    "budget-room": "Budgetzimmer",
    hotel: "Hotel",
    pension: "Pension",
  }[type] || "Unterkunft";
}

function renderBestTripPreview(item, context) {
  const stayPlan = concreteStayPlan(item);
  const transportPlan = concreteTransportPlan(item, context);
  const nightlyPrice = euro(Math.round(item.lodgingTotal / Math.max(1, item.nights)));
  return `
    <div class="best-trip">
      <div class="best-trip__head">
        <span>Beste konkrete Reise</span>
        <strong>${formatDate(item.startDate)} bis ${formatDate(item.checkout)} · ${euro(item.total)} gesamt</strong>
      </div>
      <div class="best-trip__grid">
        <div>
          <span>Unterkunft</span>
          <strong>${stayTypeLabel(item.stay.type)} · ${stayPlan.area}</strong>
          <p>${stayPlan.bedsLabel}, Zielpreis ca. ${nightlyPrice}/Nacht.</p>
        </div>
        <div>
          <span>Anreise</span>
          <strong>${transportPlan.title}</strong>
          <p>${euro(item.transportTotal)} gesamt, ca. ${formatHours(item.transport.hours)} pro Strecke.</p>
        </div>
      </div>
    </div>
  `;
}

function concreteStayPlan(item) {
  const city = item.destination.city;
  const lodgingNeeds = item.lodgingNeeds || { beds: 1, bedrooms: 1 };
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
    price: euro(Math.round(item.lodgingTotal / Math.max(1, item.nights))),
    bedsLabel: `mind. ${lodgingNeeds.beds} Bett${lodgingNeeds.beds > 1 ? "en" : ""}, ${lodgingNeeds.bedrooms} Zimmer/Schlafzimmer`,
  };
}

function concreteTransportPlan(item, context) {
  const destination = item.destination.city;
  const airport = item.destination.airport;
  const plans = {
    flight: {
      title: `Flug ${context.origin} → ${airport}`,
      detail: "Direktflug oder Umstieg prüfen, danach ÖPNV/Transfer zur Unterkunft einplanen",
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
      title: `FlixBus ${context.origin} → ${destination}`,
      detail: "Abfahrts-/Ankunftszeit, Pausen und Lage des Busbahnhofs prüfen",
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
  const transportLink = item.transport.mode === "flight"
    ? links.flights
    : item.transport.mode === "train"
      ? links.train
      : item.transport.mode === "night-train"
        ? links.nightTrain
        : item.transport.mode === "car"
          ? links.car
          : links.bus;
  const transportLinkLabel = item.transport.mode === "bus" ? "Bus bei Omio suchen" : `${item.transport.label} prüfen`;
  const primaryStayLink = ["airbnb", "budget-room"].includes(item.stay.type) ? links.airbnb : links.booking;
  const transportPriceLabel = `${euro(item.transportTotal)} gesamt`;
  const busLinkNote = item.transport.mode === "bus"
    ? `<p class="link-note">FlixBus zeigt konkrete Plätze/Sitzplatzreservierung erst nach gewählter Verbindung im Buchungsprozess. Deshalb zuerst Busvergleich öffnen und FlixBus danach dort oder direkt gegenprüfen.</p>`
    : "";
  return `
    <section class="trip-option">
      <div class="trip-option__top">
        <strong>Reise ${index + 1}: ${formatDate(item.startDate)} bis ${formatDate(item.checkout)}</strong>
        <span>${euro(item.total)} gesamt</span>
      </div>
      <div class="concrete-plan">
        <div>
          <span>Konkrete Unterkunft</span>
          <strong>${stayPlan.title} · ${stayPlan.area}</strong>
          <p>${stayPlan.focus}, ${stayPlan.bedsLabel}, Zielpreis ca. ${stayPlan.price}/Nacht. ${stayPlan.note}.</p>
        </div>
        <div>
          <span>Konkrete Anreise</span>
          <strong>${transportPlan.title}</strong>
          <p>${transportPlan.detail}. Geschätzt: ${euro(item.transportTotal)} gesamt, ca. ${formatHours(item.transport.hours)} pro Strecke.</p>
        </div>
      </div>
      <div class="costs costs--compact">
        <div><span>Anreise</span><strong>${item.transport.label} ${transportPriceLabel}</strong></div>
        <div><span>Unterkunft</span><strong>${stayName} ${euro(Math.round(item.lodgingTotal / item.nights))}/Nacht</strong></div>
        <div><span>Alltag</span><strong>${euro(item.effectiveDaily)} p. P./Tag</strong></div>
      </div>
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
        <span>Skipass ${euro(item.destination.ski.pass)}/Tag</span>
      </div>
      ` : ""}
      <p class="trip-combo">${item.nights} Nächte · ${item.transport.label}, ca. ${formatHours(item.transport.hours)} pro Strecke · Reisezeit ${item.timePreference?.label || "bewertet"}${item.overBudget ? " · über Budget, aber als Vergleich nützlich" : ""}</p>
      <nav class="links" aria-label="Buchungslinks für ${item.destination.city}, Reise ${index + 1}">
        <a href="${transportLink}" target="_blank" rel="noreferrer">${transportLinkLabel}</a>
        <a href="${primaryStayLink}" target="_blank" rel="noreferrer">Diese Unterkunft suchen</a>
        ${item.transport.mode === "bus" ? `<a href="${links.flixbus}" target="_blank" rel="noreferrer">FlixBus direkt öffnen</a>` : ""}
        <a href="${links.booking}" target="_blank" rel="noreferrer">Hotels/Pensionen</a>
        <a href="${links.airbnb}" target="_blank" rel="noreferrer">Airbnb/Fewo</a>
        <a href="${links.maps}" target="_blank" rel="noreferrer">Karte öffnen</a>
      </nav>
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
  toggle.textContent = isOpening ? "Reisen ausblenden" : "Weitere Reisevarianten anzeigen";
});
updateHolidayNote();
if (restoredState) {
  document.querySelector("#profile-note").textContent = profileNotes[document.querySelector("#travel-profile").value] || profileNotes.custom;
  document.querySelector("#ski-options").classList.toggle("is-hidden", document.querySelector("#trip-mode").value !== "ski");
  planTrip();
} else {
  applyTravelProfile();
}
form.dispatchEvent(new Event("submit", { cancelable: true }));

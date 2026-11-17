// Taartaanval: persoonlijke landingspagina per zaak op groeimaten.com/<slug>.
// De QR-code op het kaartje bij de taart linkt naar
// https://groeimaten.com/<slug>?utm_source=taart&utm_medium=qr
//
// Video toevoegen: zet het mp4-bestand in public/taart/<slug>.mp4 en vul `video`
// in met "/taart/<slug>.mp4". Een YouTube-link (unlisted) mag ook.
// Zonder video toont de pagina een nette placeholder.

export type TaartBedrijf = {
  slug: string
  naam: string
  /** Korte naam voor in de aanhef */
  kort: string
  plaats: string
  /** Persoonlijke regel, gebaseerd op hun Google-reviews */
  haakje: string
  video?: string
}

export const TAART_BEDRIJVEN: TaartBedrijf[] = [
  {
    slug: "db-anovi-keukens",
    naam: "DB Anovi Keukens",
    kort: "DB Anovi",
    plaats: "Berkel en Rodenrijs",
    haakje: "In jullie reviews noemen klanten Christiaan en Iris gewoon bij naam. Dat zegt alles over hoe jullie werken.",
  },
  {
    slug: "kitchenstudio-den-haag",
    naam: "Kitchenstudio Den Haag",
    kort: "Kitchenstudio Den Haag",
    plaats: "Den Haag",
    haakje: "Klanten die bij jullie terugkomen voor hun tweede keuken. Beter bewijs van kwaliteit bestaat niet.",
  },
  {
    slug: "badkamerhuis-rotterdam",
    naam: "Badkamerhuis Rotterdam",
    kort: "Badkamerhuis Rotterdam",
    plaats: "Rotterdam",
    haakje: "Oscar die zelf meehelpt en een speelkamer voor de kinderen. Dat soort details onthouden klanten.",
  },
  {
    slug: "keukenstudio-rijnmond",
    naam: "Keukenstudio Rijnmond",
    kort: "Keukenstudio Rijnmond",
    plaats: "Hoogvliet",
    haakje: "Meteen een eerlijke prijs, geen spelletjes, geen onderhandelen. Dat lezen we keer op keer terug in jullie reviews.",
  },
  {
    slug: "smartdesign-keukenstudio",
    naam: "SmartDesign Keukenstudio",
    kort: "SmartDesign",
    plaats: "Maassluis",
    haakje: "231 reviews en personeel dat al jaren blijft. Dat bouw je niet zomaar op.",
  },
  {
    slug: "van-den-berg-keukens",
    naam: "Van den Berg Keukens",
    kort: "Van den Berg Keukens",
    plaats: "Hellevoetsluis",
    haakje: "Klanten betalen pas na de montage. Dat durven maar weinig zaken.",
  },
  {
    slug: "rob-woud-keukens",
    naam: "Rob Woud Keukens",
    kort: "Rob Woud Keukens",
    plaats: "Haarlem",
    haakje: "Een echt familiebedrijf, en dat merken klanten in elk gesprek.",
  },
  {
    slug: "dicks-badkamers",
    naam: "Dicks Badkamers",
    kort: "Dicks Badkamers",
    plaats: "Haarlem",
    haakje: "Oplossingen voor kleine badkamers die klanten nergens anders zagen. Dat is precies waar mensen voor komen.",
  },
  {
    slug: "badkamer-boutique",
    naam: "Badkamer Boutique",
    kort: "Badkamer Boutique",
    plaats: "Wateringen",
    haakje: "Een bad in een hele kleine badkamer. Daar moet je creatief en vakkundig voor zijn.",
  },
  {
    slug: "van-dijk-tegel",
    naam: "Van Dijk Tegel",
    kort: "Van Dijk Tegel",
    plaats: "Dordrecht",
    haakje: "Lastige badkamers oplossen waar andere zaken niet uitkwamen. Dat lezen we vaker in jullie reviews.",
  },
  {
    slug: "bouwton",
    naam: "Bouwton",
    kort: "Bouwton",
    plaats: "Katwijk",
    haakje: "Klanten die van begin tot eind ontzorgd worden. Precies wat mensen zoeken bij een badkamer.",
  },
  {
    slug: "aswa-keukens",
    naam: "ASWA Keukens",
    kort: "ASWA Keukens",
    plaats: "Hilversum",
    haakje: "Paul, die elk detail uit zijn hoofd kent. Klanten noemen hem keer op keer.",
  },
  {
    slug: "keukenstudio-voorschoten",
    naam: "Keukenstudio Voorschoten",
    kort: "Keukenstudio Voorschoten",
    plaats: "Voorschoten",
    haakje: "Niet de goedkoopste, wel de beste kwaliteit. En 112 reviews die dat bevestigen.",
  },
  {
    slug: "tegelhal-zuid",
    naam: "Tegelhal Zuid",
    kort: "Tegelhal Zuid",
    plaats: "Ridderkerk",
    haakje: "Meedenken binnen het budget van de klant, met eigen tegelzetters. Dat waarderen klanten zichtbaar.",
  },
  {
    slug: "zania-keukens",
    naam: "Zania Keukens en Badkamers",
    kort: "Zania",
    plaats: "Sneek",
    haakje: "“Wat een verschil met de grote keukenketens.” Dat schrijven jullie klanten zelf.",
  },
]

export const getTaartBedrijf = (slug: string) => TAART_BEDRIJVEN.find((b) => b.slug === slug)

/** Nummer waarop Thomas bereikbaar is (in de video: "bel me op het nummer hieronder") */
export const THOMAS_TEL = { href: "tel:+31629193444", label: "06 29 19 34 44" }

/** Video per zaak: public/taart/<slug>.mp4 met poster public/taart/<slug>.jpg */
export const taartVideo = (b: TaartBedrijf) => b.video ?? `/taart/${b.slug}.mp4`
export const taartPoster = (b: TaartBedrijf) => `/taart/${b.slug}.jpg`

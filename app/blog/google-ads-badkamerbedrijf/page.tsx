import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Google Ads voor je badkamerbedrijf: zo wordt elk euro goed besteed",
  description:
    "Google Ads is voor een badkamerbedrijf een van de meest directe manieren om koopklare klanten te bereiken. Maar een slechte campagne kost meer dan hij oplevert.",
  alternates: {
    canonical: "https://groeimaten.com/blog/google-ads-badkamerbedrijf",
  },
  openGraph: {
    title: "Google Ads voor je badkamerbedrijf: zo wordt elk euro goed besteed",
    description:
      "Google Ads voor een badkamerbedrijf: hoe het werkt, welke fouten je vermijdt en wat realistische resultaten zijn.",
    url: "https://groeimaten.com/blog/google-ads-badkamerbedrijf",
  },
}

const arrowIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://groeimaten.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://groeimaten.com/blog" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Google Ads voor badkamerbedrijf",
      item: "https://groeimaten.com/blog/google-ads-badkamerbedrijf",
    },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Google Ads voor je badkamerbedrijf: zo wordt elk euro goed besteed",
  description:
    "Google Ads is voor een badkamerbedrijf een van de meest directe manieren om koopklare klanten te bereiken.",
  author: { "@type": "Person", name: "Thomas Ghobadi", sameAs: "https://www.linkedin.com/in/thomasghobadi/" },
  publisher: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  datePublished: "2026-06-16",
  dateModified: "2026-11-06",
  url: "https://groeimaten.com/blog/google-ads-badkamerbedrijf",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Wat kost Google Ads voor een badkamerbedrijf per maand?",
      acceptedAnswer: { "@type": "Answer", text: "Voor lokale vaklieden ligt de prijs per klik volgens Blurr Marketing (gecontroleerd 13 augustus 2026) tussen 2,50 en 6,00 euro. Het beheer kost bij een bureau 300 tot 1.200 euro per maand, of 10 tot 20 procent van het advertentiebudget boven 2.000 euro. Het klikbudget komt daar bovenop." },
    },
    {
      "@type": "Question",
      name: "Hoeveel advertentiebudget heeft een badkamerbedrijf nodig om te starten?",
      acceptedAnswer: { "@type": "Answer", text: "Reken op een klikbudget waarmee je in de eerste weken genoeg bezoekers krijgt om te leren welke zoekopdrachten aanvragen opleveren. Bij 2,50 tot 6,00 euro per klik (Blurr Marketing, 13 augustus 2026) is elke 100 euro goed voor ruwweg 17 tot 40 klikken. Begin smal, in je eigen regio." },
    },
    {
      "@type": "Question",
      name: "Welke zoekwoorden werken het best voor een badkamerbedrijf?",
      acceptedAnswer: { "@type": "Answer", text: "Zoekwoorden met koopintentie en een plaatsnaam werken het best, zoals badkamer laten renoveren in je eigen stad of badkamer installateur offerte. Zoekopdrachten als badkamer zelf renoveren of badkamer tegels zelf leggen sluit je uit met negatieve zoekwoorden, want die bezoekers zoeken geen aannemer." },
    },
    {
      "@type": "Question",
      name: "Moet ik mijn badkamerbedrijf adverteren op de homepage of op een aparte pagina?",
      acceptedAnswer: { "@type": "Answer", text: "Stuur het verkeer naar een aparte landingspagina per dienst, met een duidelijk contactformulier en telefoonnummer. Iemand die zoekt op badkamer renoveren offerte wil direct kunnen aanvragen, niet eerst je hele site doorzoeken. Een homepage moet te veel bezoekerstypen tegelijk bedienen." },
    },
    {
      "@type": "Question",
      name: "Hoe weet ik of mijn Google Ads-campagne aanvragen oplevert?",
      acceptedAnswer: { "@type": "Answer", text: "Meet aanvragen als conversie: een verstuurd formulier, een klik op het telefoonnummer of een ingeplande afspraak. Kijk niet alleen naar klikken, maar naar wat een aanvraag kost en hoeveel daarvan een afspraak in de showroom worden. Zonder deze meting stuur je blind." },
    },
    {
      "@type": "Question",
      name: "Wanneer is Google Ads beter dan SEO voor een badkamerbedrijf?",
      acceptedAnswer: { "@type": "Answer", text: "Google Ads levert binnen enkele dagen verkeer op, SEO bouwt langzamer op, maar blijft bezoekers opleveren ook als je geen budget uitgeeft. Voor een badkamerbedrijf zonder zichtbaarheid is adverteren de snelste start. Voor blijvende zichtbaarheid is een combinatie met lokale vindbaarheid verstandig." },
    },
  ],
}

export default function BlogGoogleAdsBadkamerbedrijfPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="page-hero page-hero--split" style={{ paddingBottom: "48px" }}>
        <div className="page-hero__glow page-hero__glow--1" aria-hidden="true" />
        <div className="page-hero__glow page-hero__glow--2" aria-hidden="true" />
        <div className="container">
          <div style={{ maxWidth: "780px", paddingTop: "120px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
              <Link href="/blog" style={{ color: "oklch(65% 0.09 75)", textDecoration: "none", fontSize: "0.85rem" }}>
                Blog
              </Link>
              <span style={{ color: "oklch(45% 0 0)", fontSize: "0.85rem" }}>›</span>
              <span style={{ color: "oklch(55% 0 0)", fontSize: "0.85rem" }}>Google Ads badkamerbedrijf</span>
            </div>
            <span className="section-label">Google Ads</span>
            <h1
              className="page-hero__title"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", lineHeight: "1.2", marginTop: "12px" }}
            >
              Google Ads voor je badkamerbedrijf: zo wordt elk euro goed besteed
            </h1>
            <p className="page-hero__subtitle" style={{ marginTop: "20px" }}>
              Iemand die zoekt op &ldquo;badkamerrenovatie offerte&rdquo; wil geen inspiratie, die wil een aannemer
              bellen. Google Ads voor een badkamerbedrijf plaatst jou bovenaan op dat moment. Maar een slecht
              ingestelde campagne kost in korte tijd veel geld zonder een enkele kwalitatieve aanvraag op te leveren.
            </p>
            <p style={{ color: "oklch(55% 0 0)", fontSize: "0.88rem", marginTop: "12px" }}>
              Thomas Ghobadi · 16 juni 2026 · bijgewerkt 6 november 2026 · 7 min lezen
            </p>
          </div>
        </div>
      </section>

      <section className="service-detail" style={{ paddingTop: "20px", paddingBottom: "80px" }}>
        <div className="container">
          <article
            style={{
              maxWidth: "760px",
              color: "oklch(78% 0 0)",
              lineHeight: "1.85",
              fontSize: "1.05rem",
            }}
          >
            <p style={{ color: "oklch(92% 0 0)", fontWeight: 600 }}>
              Google Ads voor een badkamerbedrijf werkt als je adverteert op zoekopdrachten met koopintentie in je
              eigen regio, het verkeer naar een aparte landingspagina stuurt en aanvragen meet. Een klik kost bij
              lokale vaklieden 2,50 tot 6,00 euro (Blurr Marketing, 13 augustus 2026).
            </p>
            <p>
              Google Ads werkt op basis van zoekwoorden. Jij bepaalt op welke zoekopdrachten jouw advertentie
              verschijnt. Je betaalt per klik. Hoe relevanter jouw advertentie en landingspagina voor die
              zoekopdracht zijn, hoe goedkoper je klikken worden. In theorie simpel. In de praktijk zit er
              een flink verschil tussen een campagne die geld kost en een campagne die geld oplevert.
            </p>

            <h2
              style={{
                color: "oklch(95% 0 0)",
                fontSize: "clamp(1.3rem, 3vw, 1.75rem)",
                fontWeight: 700,
                marginTop: "52px",
                marginBottom: "20px",
                lineHeight: "1.3",
              }}
            >
              Hoe Google Ads werkt voor een badkamerbedrijf
            </h2>
            <p>
              Voor badkamerbedrijven zijn er drie soorten zoekopdrachten relevant. Koopgerichte zoekopdrachten,
              zoals &ldquo;badkamer laten renoveren [stad]&rdquo; of &ldquo;badkamer installateur offerte&rdquo;.
              Vergelijkende zoekopdrachten, zoals &ldquo;badkamerbedrijf vergelijken&rdquo; of &ldquo;beste
              badkamer showroom [regio]&rdquo;. En productgerichte zoekopdrachten, zoals namen van merken die
              je verkoopt.
            </p>
            <p>
              Elk type vraagt om een andere advertentietekst en een andere landingspagina. Iemand die vergelijkt
              is nog niet klaar om te kopen. Iemand die een offerte aanvraagt, is dat wel. Wie die twee in
              dezelfde campagne gooit, betaalt voor klikken die niets opleveren.
            </p>

            <h2
              style={{
                color: "oklch(95% 0 0)",
                fontSize: "clamp(1.3rem, 3vw, 1.75rem)",
                fontWeight: 700,
                marginTop: "52px",
                marginBottom: "20px",
                lineHeight: "1.3",
              }}
            >
              De meest gemaakte fouten
            </h2>
            <p>
              De meeste badkamerbedrijven die Google Ads zelf proberen, maken dezelfde fouten.
            </p>
            <p>
              Ze gebruiken breed matchende zoekwoorden. Hierdoor verschijnt hun advertentie bij zoekopdrachten
              die helemaal niet relevant zijn. Iemand zoekt &ldquo;badkamer tegels zelf leggen&rdquo; en ziet
              jouw advertentie voor badkamerrenovatie. Geld verspild.
            </p>
            <p>
              Ze sturen al het verkeer naar de homepage. De homepage is niet de beste bestemming voor iemand
              die zoekt naar &ldquo;badkamer renoveren offerte aanvragen&rdquo;. Een specifieke landingspagina
              met een helder contactformulier converteert gemiddeld twee tot drie keer beter dan een homepage.
            </p>
            <p>
              Ze stellen geen negatieve zoekwoorden in. Zonder negatieve zoekwoorden betaal je voor klikken van
              mensen die nooit klant worden. &ldquo;Badkamer zelf renoveren&rdquo; is een voorbeeld van een
              zoekwoord dat je wil uitsluiten.
            </p>

            <h2
              style={{
                color: "oklch(95% 0 0)",
                fontSize: "clamp(1.3rem, 3vw, 1.75rem)",
                fontWeight: 700,
                marginTop: "52px",
                marginBottom: "20px",
                lineHeight: "1.3",
              }}
            >
              Wat een effectieve campagne onderscheidt
            </h2>
            <p>
              Een effectieve Google Ads-campagne voor een badkamerbedrijf heeft een aantal vaste onderdelen.
              Exacte en zinsdeel matchende zoekwoorden die aansluiten bij koopintentie. Een specifieke
              landingspagina per dienst. Geografische targeting op het gebied waar je actief bent. En een
              heldere opvolging van de aanvragen die binnenkomen.
            </p>
            <p>
              De combinatie van goed gekozen zoekwoorden en een sterke landingspagina bepaalt meer dan negentig
              procent van het resultaat. De rest is optimalisatie op basis van data uit de eerste weken.
            </p>

            <h2
              style={{
                color: "oklch(95% 0 0)",
                fontSize: "clamp(1.3rem, 3vw, 1.75rem)",
                fontWeight: 700,
                marginTop: "52px",
                marginBottom: "20px",
                lineHeight: "1.3",
              }}
            >
              Wat je mag verwachten
            </h2>
            <p>
              Bij een maandelijks advertentiebudget van 500 tot 1.000 euro zijn tien tot vijftien kwalitatieve
              aanvragen per maand realistisch, afhankelijk van jouw regio en de concurrentie daarin. Met een
              gemiddeld projectbedrag van 8.000 tot 20.000 euro is het rendement positief vanaf de eerste
              opdracht.
            </p>
            <p>
              Google Ads voor een badkamerbedrijf werkt. Maar alleen als de fundamenten kloppen: de juiste
              zoekwoorden, de juiste pagina en de juiste opvolging van aanvragen.
            </p>

            <h2
              style={{
                color: "oklch(95% 0 0)",
                fontSize: "clamp(1.3rem, 3vw, 1.75rem)",
                fontWeight: 700,
                marginTop: "52px",
                marginBottom: "20px",
                lineHeight: "1.3",
              }}
            >
              Wat kost Google Ads voor een badkamerbedrijf?
            </h2>
            <p>
              De kosten bestaan uit twee delen: het budget dat naar Google gaat en het beheer van de campagne.
              Volgens Blurr Marketing (gecontroleerd 13 augustus 2026) kost een klik voor lokale vaklieden
              2,50 tot 6,00 euro. Beheer door een bureau kost 300 tot 1.200 euro per maand, of 10 tot 20 procent
              van het advertentiebudget zodra dat boven 2.000 euro ligt. Dat zijn marktbrede bedragen, geen
              garantie voor jouw regio. In een stad met veel badkamershowrooms ligt de klikprijs hoger dan in
              een dunbevolkt gebied.
            </p>
            <div style={{ overflowX: "auto", marginTop: "24px", marginBottom: "8px" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.98rem" }}>
                <thead>
                  <tr>
                    <th style={{ textAlign: "left", padding: "10px 12px", borderBottom: "1px solid oklch(30% 0 0)", color: "oklch(92% 0 0)" }}>Kostenpost</th>
                    <th style={{ textAlign: "left", padding: "10px 12px", borderBottom: "1px solid oklch(30% 0 0)", color: "oklch(92% 0 0)" }}>Bedrag</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: "10px 12px", borderBottom: "1px solid oklch(20% 0 0)" }}>Prijs per klik, lokale vaklieden</td>
                    <td style={{ padding: "10px 12px", borderBottom: "1px solid oklch(20% 0 0)" }}>2,50 tot 6,00 euro</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px 12px", borderBottom: "1px solid oklch(20% 0 0)" }}>Beheer door een bureau</td>
                    <td style={{ padding: "10px 12px", borderBottom: "1px solid oklch(20% 0 0)" }}>300 tot 1.200 euro per maand</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px 12px", borderBottom: "1px solid oklch(20% 0 0)" }}>Beheer bij budget boven 2.000 euro</td>
                    <td style={{ padding: "10px 12px", borderBottom: "1px solid oklch(20% 0 0)" }}>10 tot 20 procent van het budget</td>
                  </tr>
                </tbody>
              </table>
              <p style={{ fontSize: "0.85rem", color: "oklch(55% 0 0)", marginTop: "8px" }}>
                Bron: Blurr Marketing, gecontroleerd op 13 augustus 2026.
              </p>
            </div>
            <h2
              style={{
                color: "oklch(95% 0 0)",
                fontSize: "clamp(1.3rem, 3vw, 1.75rem)",
                fontWeight: 700,
                marginTop: "52px",
                marginBottom: "20px",
                lineHeight: "1.3",
              }}
            >
              Welke instellingen bepalen of je geld verspilt?
            </h2>
            <p>
              Drie instellingen in Google Ads bepalen vooral of een badkamerbedrijf voor de verkeerde klikken
              betaalt. De eerste is het zoektype per zoekwoord: bij exact en zinsdeel matchende zoekwoorden
              verschijnt je advertentie alleen bij zoekopdrachten die erg lijken op jouw zoekwoord, bij breed
              matchen ook bij losse verwanten. De tweede is de lijst met negatieve zoekwoorden, waarmee je
              zoekopdrachten als &ldquo;badkamer zelf renoveren&rdquo; of &ldquo;badkamer tegels zelf
              leggen&rdquo; uitsluit. De derde is de locatie: stel in dat je alleen mensen bereikt die in je
              werkgebied zijn of daar interesse in hebben, anders klikken mensen uit een regio waar je niet
              werkt.
            </p>
            <p>
              Controleer daarnaast elke week het zoektermenrapport in Google Ads. Daar zie je de exacte
              woorden waarop mensen hebben geklikt. Staat er een zoekopdracht tussen die geen aannemer zoekt,
              dan voeg je die toe aan de negatieve zoekwoorden. Zo wordt de campagne elke week een stukje
              scherper, zonder dat het budget omhoog hoeft.
            </p>
            <h2
              style={{
                color: "oklch(95% 0 0)",
                fontSize: "clamp(1.3rem, 3vw, 1.75rem)",
                fontWeight: 700,
                marginTop: "52px",
                marginBottom: "20px",
                lineHeight: "1.3",
              }}
            >
              Hoe meet je of Google Ads aanvragen oplevert?
            </h2>
            <p>
              Een klik is geen aanvraag. Stel daarom meting in op drie momenten: een verstuurd
              offerteformulier, een klik op het telefoonnummer en een ingeplande afspraak voor je showroom.
              Deel het advertentiebudget door het aantal aanvragen en je weet wat een aanvraag kost. Deel dat
              bedrag door het aandeel aanvragen dat een afspraak wordt, en je weet wat een bezoeker in de
              showroom kost. Dat getal vergelijk je met de marge op een gemiddelde badkamer.
            </p>
            <p>
              Neem aanvragen uit advertenties direct op in je opvolging. Een aanvraag die dagen blijft liggen
              heeft de advertentiekosten al gekost zonder dat er een afspraak uit komt.
            </p>
            <h2
              style={{
                color: "oklch(95% 0 0)",
                fontSize: "clamp(1.3rem, 3vw, 1.75rem)",
                fontWeight: 700,
                marginTop: "52px",
                marginBottom: "20px",
                lineHeight: "1.3",
              }}
            >
              Wanneer past Google Ads beter dan SEO?
            </h2>
            <p>
              Google Ads levert binnen enkele dagen bezoekers op, maar die stoppen zodra je het budget stopt.
              SEO duurt langer om op te bouwen, maar blijft werken zolang je pagina&apos;s goed zijn. Voor een
              badkamerbedrijf dat nog nergens zichtbaar is, is adverteren de snelste manier om aanvragen te
              krijgen. Voor blijvende zichtbaarheid is lokale vindbaarheid de aanvulling, zie ons artikel over{" "}
              <Link href="/badkamerbedrijf-seo" style={{ color: "oklch(65% 0.09 75)" }}>
                SEO voor badkamerbedrijven
              </Link>
              , en de aanpak voor{" "}
              <Link href="/blog/badkamer-leads-genereren" style={{ color: "oklch(65% 0.09 75)" }}>
                badkamer leads genereren
              </Link>
              . Een tweede kanaal naast Google is{" "}
              <Link href="/meta-ads-badkamerbedrijven" style={{ color: "oklch(65% 0.09 75)" }}>
                Meta Ads voor badkamerbedrijven
              </Link>
              .
            </p>
            <h2
              style={{
                color: "oklch(95% 0 0)",
                fontSize: "clamp(1.3rem, 3vw, 1.75rem)",
                fontWeight: 700,
                marginTop: "52px",
                marginBottom: "20px",
                lineHeight: "1.3",
              }}
            >
              Veelgestelde vragen over Google Ads voor badkamerbedrijven
            </h2>
            <h3 style={{ color: "oklch(92% 0 0)", fontSize: "1.1rem", fontWeight: 600, marginTop: "28px", marginBottom: "8px" }}>
              Wat kost Google Ads voor een badkamerbedrijf per maand?
            </h3>
            <p>
              Voor lokale vaklieden ligt de prijs per klik volgens Blurr Marketing (gecontroleerd 13 augustus 2026) tussen 2,50 en 6,00 euro. Het beheer kost bij een bureau 300 tot 1.200 euro per maand, of 10 tot 20 procent van het advertentiebudget boven 2.000 euro. Het klikbudget komt daar bovenop.
            </p>
            <h3 style={{ color: "oklch(92% 0 0)", fontSize: "1.1rem", fontWeight: 600, marginTop: "28px", marginBottom: "8px" }}>
              Hoeveel advertentiebudget heeft een badkamerbedrijf nodig om te starten?
            </h3>
            <p>
              Reken op een klikbudget waarmee je in de eerste weken genoeg bezoekers krijgt om te leren welke zoekopdrachten aanvragen opleveren. Bij 2,50 tot 6,00 euro per klik (Blurr Marketing, 13 augustus 2026) is elke 100 euro goed voor ruwweg 17 tot 40 klikken. Begin smal, in je eigen regio.
            </p>
            <h3 style={{ color: "oklch(92% 0 0)", fontSize: "1.1rem", fontWeight: 600, marginTop: "28px", marginBottom: "8px" }}>
              Welke zoekwoorden werken het best voor een badkamerbedrijf?
            </h3>
            <p>
              Zoekwoorden met koopintentie en een plaatsnaam werken het best, zoals badkamer laten renoveren in je eigen stad of badkamer installateur offerte. Zoekopdrachten als badkamer zelf renoveren of badkamer tegels zelf leggen sluit je uit met negatieve zoekwoorden, want die bezoekers zoeken geen aannemer.
            </p>
            <h3 style={{ color: "oklch(92% 0 0)", fontSize: "1.1rem", fontWeight: 600, marginTop: "28px", marginBottom: "8px" }}>
              Moet ik mijn badkamerbedrijf adverteren op de homepage of op een aparte pagina?
            </h3>
            <p>
              Stuur het verkeer naar een aparte landingspagina per dienst, met een duidelijk contactformulier en telefoonnummer. Iemand die zoekt op badkamer renoveren offerte wil direct kunnen aanvragen, niet eerst je hele site doorzoeken. Een homepage moet te veel bezoekerstypen tegelijk bedienen.
            </p>
            <h3 style={{ color: "oklch(92% 0 0)", fontSize: "1.1rem", fontWeight: 600, marginTop: "28px", marginBottom: "8px" }}>
              Hoe weet ik of mijn Google Ads-campagne aanvragen oplevert?
            </h3>
            <p>
              Meet aanvragen als conversie: een verstuurd formulier, een klik op het telefoonnummer of een ingeplande afspraak. Kijk niet alleen naar klikken, maar naar wat een aanvraag kost en hoeveel daarvan een afspraak in de showroom worden. Zonder deze meting stuur je blind.
            </p>
            <h3 style={{ color: "oklch(92% 0 0)", fontSize: "1.1rem", fontWeight: 600, marginTop: "28px", marginBottom: "8px" }}>
              Wanneer is Google Ads beter dan SEO voor een badkamerbedrijf?
            </h3>
            <p>
              Google Ads levert binnen enkele dagen verkeer op, SEO bouwt langzamer op, maar blijft bezoekers opleveren ook als je geen budget uitgeeft. Voor een badkamerbedrijf zonder zichtbaarheid is adverteren de snelste start. Voor blijvende zichtbaarheid is een combinatie met lokale vindbaarheid verstandig.
            </p>

            <div
              style={{
                backgroundColor: "oklch(12% 0 0)",
                borderRadius: "12px",
                padding: "32px",
                border: "1px solid oklch(20% 0 0)",
                marginTop: "52px",
              }}
            >
              <p style={{ color: "oklch(90% 0 0)", fontWeight: 600, marginBottom: "12px", fontSize: "1.1rem" }}>
                Google Ads voor jouw badkamerbedrijf opzetten?
              </p>
              <p style={{ marginBottom: "20px", color: "oklch(70% 0 0)" }}>
                Plan een gratis strategiegesprek. We bekijken jouw regio, concurrentie en budget en vertellen
                je eerlijk wat er haalbaar is.
              </p>
              <Link href="/afspraak" className="btn btn--blue btn--lg">
                Plan een gratis gesprek {arrowIcon}
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}

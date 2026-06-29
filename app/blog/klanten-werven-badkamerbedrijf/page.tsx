import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Klanten werven voor een badkamerbedrijf: zo pak je het structureel aan",
  description:
    "Een badkamerrenovatie is een grote beslissing met een lang beslisproces. Hoe zorg je als badkamerbedrijf voor een constante stroom nieuwe klanten? Wat werkt en wat niet?",
  alternates: {
    canonical: "https://groeimaten.com/blog/klanten-werven-badkamerbedrijf",
  },
  openGraph: {
    title: "Klanten werven voor een badkamerbedrijf: zo pak je het structureel aan",
    description:
      "Hoe zorg je als badkamerbedrijf voor een constante stroom nieuwe klanten? Een overzicht van wat werkt.",
    url: "https://groeimaten.com/blog/klanten-werven-badkamerbedrijf",
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
      name: "Klanten werven badkamerbedrijf",
      item: "https://groeimaten.com/blog/klanten-werven-badkamerbedrijf",
    },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Klanten werven voor een badkamerbedrijf: zo pak je het structureel aan",
  description:
    "Hoe zorg je als badkamerbedrijf voor een constante stroom nieuwe klanten?",
  author: { "@type": "Organization", name: "Groeimaten" },
  publisher: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  datePublished: "2026-06-29",
  url: "https://groeimaten.com/blog/klanten-werven-badkamerbedrijf",
}

export default function BlogKlantenWervenBadkamerbedrijfPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

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
              <span style={{ color: "oklch(55% 0 0)", fontSize: "0.85rem" }}>Klanten werven badkamerbedrijf</span>
            </div>
            <span className="section-label">Klanten werven</span>
            <h1
              className="page-hero__title"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", lineHeight: "1.2", marginTop: "12px" }}
            >
              Klanten werven voor een badkamerbedrijf: zo pak je het structureel aan
            </h1>
            <p className="page-hero__subtitle" style={{ marginTop: "20px" }}>
              Een badkamer wordt niet elke dag vervangen. Mensen doen het eens in de tien tot twintig jaar, als
              ze het al zelf laten doen. Dat lange beslisproces vraagt om een andere benadering van
              klantenwerving dan bij een product met een korte aankoopbeslissing.
            </p>
            <p style={{ color: "oklch(55% 0 0)", fontSize: "0.88rem", marginTop: "12px" }}>
              Groeimaten · 29 juni 2026 · 7 min lezen
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
            <p>
              De gemiddelde badkamerrenovatie kost 8.000 tot 25.000 euro. Bij volledige verbouwingen met nieuwe
              installaties loopt het op tot meer dan 40.000 euro. Dat zijn beslissingen waar mensen maanden over
              nadenken. Ze vergelijken meerdere aanbieders, verzamelen offertes en praten erover met hun partner.
              Klantenwerving voor een badkamerbedrijf moet op dat beslisproces aansluiten, niet ertegenin gaan.
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
              Het moment waarop mensen beginnen te zoeken
            </h2>
            <p>
              Mensen die een badkamer willen laten renoveren, beginnen hun zoektocht doorgaans niet op Google. Ze
              beginnen op Pinterest, Instagram of Houzz. Ze kijken naar badkamerstijlen, verzamelen inspiratie en
              vormen een beeld van wat ze willen. Pas daarna zoeken ze op leveranciers en installateurs.
            </p>
            <p>
              Dit heeft gevolgen voor hoe je als badkamerbedrijf aan klantenwerving doet. Je wilt aanwezig zijn
              in die vroege oriëntatiefase, niet alleen op het moment dat iemand al weet wat ze willen en actief
              zoekt naar een aannemer. Meta Ads op Facebook en Instagram zijn daarvoor bij uitstek geschikt.
              Ze bereiken mensen die met badkamers bezig zijn, ook al hebben ze nog niet actief een zoekopdracht
              ingevoerd.
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
              Reviews zijn de sterkste conversiefactor
            </h2>
            <p>
              Voor een badkamerbedrijf zijn reviews kritisch. Iemand die tienduizenden euro&apos;s uitgeeft aan
              een badkamerrenovatie, wil zeker weten dat de vakman zijn werk goed levert en betrouwbaar is.
              Reviews op Google, maar ook op platforms als Houzz of Werkspot, zijn de eerste plek waar mensen
              naar kijken bij het vergelijken van aanbieders.
            </p>
            <p>
              Een badkamerbedrijf met 5 sterren en 40 reviews trekt meer aanvragen aan dan een bedrijf met
              dezelfde prijs en kwaliteit maar weinig of geen reviews. Het actief verzamelen van reviews na
              elk afgerond project is daardoor geen bijzaak maar een kernonderdeel van klantenwerving. Stuur
              tevreden klanten een directe link naar jouw Google-reviewpagina. De meeste tevreden klanten
              schrijven graag een review, maar doen het niet uit zichzelf.
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
              Referentieprojecten als verkooptool
            </h2>
            <p>
              Foto&apos;s van afgeronde badkamers zijn het sterkste verkoopmateriaal dat een badkamerbedrijf
              heeft. Mensen kopen met hun ogen. Een portfolio met scherpe foto&apos;s van tien tot vijftien
              afgeronde projecten, inclusief een korte beschrijving van het werk, het budget en de duur van
              de renovatie, biedt potentiële klanten exact de informatie die ze nodig hebben om een keuze
              te maken.
            </p>
            <p>
              Diezelfde foto&apos;s zijn ook inzetbaar als advertentiemateriaal. Een foto van een stijlvolle
              inloopdouche in een Instagram Ad bereikt mensen in de oriëntatiefase en maakt een concrete
              eerste indruk van jouw vakmanschap. Dat werkt beter dan een advertentie met alleen tekst
              en een generieke afbeelding.
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
              Snelle opvolging maakt het verschil bij offerte-aanvragen
            </h2>
            <p>
              Een klant die een offerte aanvraagt, heeft tegelijkertijd ook bij twee of drie concurrenten
              gevraagd. Hoe sneller jij reageert, hoe groter de kans dat je het gesprek voert en de opdracht
              krijgt. Badkamerbedrijven die binnen een uur reageren op aanvragen, zien structureel meer
              conversies dan bedrijven die er een dag of langer op wachten.
            </p>
            <p>
              Klantenwerving voor een badkamerbedrijf stopt niet bij het binnenhalen van de lead. De opvolging
              bepaalt of die lead ook klant wordt. Een helder, snel en professioneel reactieproces is daarmee
              net zo belangrijk als het advertentiekanaal dat de aanvraag heeft gegenereerd.
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
                Wil je een structurele aanpak voor klantenwerving in jouw badkamerbedrijf?
              </p>
              <p style={{ marginBottom: "20px", color: "oklch(70% 0 0)" }}>
                Groeimaten werkt uitsluitend voor keuken en sanitairbedrijven. Plan een gesprek en we bekijken
                samen wat voor jouw bedrijf het meest oplevert.
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

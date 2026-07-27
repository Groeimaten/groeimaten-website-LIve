import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Marketingstrategie voor een renovatiebedrijf: wat werkt en wat kost geld",
  description:
    "Een marketingstrategie voor een renovatiebedrijf moet rekening houden met een lange beslistijd en hoge opdrachtwaarden. Welke kanalen werken en welke verspillen budget?",
  alternates: {
    canonical: "https://groeimaten.com/blog/marketingstrategie-renovatiebedrijf",
  },
  openGraph: {
    title: "Marketingstrategie voor een renovatiebedrijf: wat werkt en wat kost geld",
    description:
      "Welke marketingstrategie past bij een renovatiebedrijf? Hoe houd je rekening met de lange beslistijd en hoge opdrachtwaarden?",
    url: "https://groeimaten.com/blog/marketingstrategie-renovatiebedrijf",
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
      name: "Marketingstrategie voor renovatiebedrijf",
      item: "https://groeimaten.com/blog/marketingstrategie-renovatiebedrijf",
    },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Marketingstrategie voor een renovatiebedrijf: wat werkt en wat kost geld",
  description:
    "Welke marketingstrategie past bij een renovatiebedrijf met lange beslistijden en hoge opdrachtwaarden?",
  author: { "@type": "Organization", name: "Groeimaten" },
  publisher: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  datePublished: "2026-07-20",
  url: "https://groeimaten.com/blog/marketingstrategie-renovatiebedrijf",
}

export default function BlogMarketingStrategieRenovatiebedrijfPage() {
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
              <span style={{ color: "oklch(55% 0 0)", fontSize: "0.85rem" }}>Marketingstrategie renovatiebedrijf</span>
            </div>
            <span className="section-label">Strategie</span>
            <h1
              className="page-hero__title"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", lineHeight: "1.2", marginTop: "12px" }}
            >
              Marketingstrategie voor een renovatiebedrijf: wat werkt en wat kost geld
            </h1>
            <p className="page-hero__subtitle" style={{ marginTop: "20px" }}>
              Renovatieopdrachten hebben een lange aanlooptijd. Iemand denkt weken of maanden na voor ze een
              offerte aanvragen. Een goede marketingstrategie voor een renovatiebedrijf houdt daar rekening mee
              en richt zich niet alleen op de mensen die nu klaar zijn, maar ook op de mensen die dat binnenkort zijn.
            </p>
            <p style={{ color: "oklch(55% 0 0)", fontSize: "0.88rem", marginTop: "12px" }}>
              Groeimaten · 20 juli 2026 · 6 min lezen
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
              Een renovatieopdracht van 40.000 euro komt niet tot stand via één advertentie die iemand ziet op
              een dinsdag en waarbij ze een dag later bellen. Het beslisproces duurt gemiddeld drie tot zes maanden.
              Mensen kijken voorbeeldprojecten, vragen offertes aan meerdere partijen, raadplegen hun partner,
              wachten tot het budget klaar is. De marketingstrategie die het beste werkt voor een renovatiebedrijf,
              is aanwezig in elke fase van dat proces.
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
              SEO als fundament voor lange termijn
            </h2>
            <p>
              Organische vindbaarheid via SEO is voor renovatiebedrijven bijzonder waardevol. Iemand die zoekt
              naar &ldquo;badkamer renoveren [stad]&rdquo; of &ldquo;verbouwing aanbouw kosten&rdquo; is in de
              oriëntatiefase. Als jij op dat moment bovenaan staat in Google, bouw je al vertrouwen op bij mensen
              die maanden later een offerte aanvragen.
            </p>
            <p>
              SEO heeft een aanlooptijd van drie tot zes maanden voor er resultaten zichtbaar zijn. Dat maakt het
              minder geschikt als enige kanaal, maar onmisbaar als onderdeel van een bredere strategie. Eén goed
              gerankte pagina kan jarenlang aanvragen genereren zonder doorlopende advertentiekosten.
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
              Google Ads voor directe aanvragen
            </h2>
            <p>
              Google Ads plaatst het renovatiebedrijf bovenaan op het moment dat iemand actief zoekt. Dat maakt
              het geschikt voor het bereiken van mensen die al weten wat ze willen en een offerte aan het inwinnen
              zijn. De kosten per klik zijn hoger dan voor minder commerciële zoektermen, maar de intentie achter
              de zoekopdracht is ook hoger.
            </p>
            <p>
              Een valkuil bij Google Ads voor renovatiebedrijven is het inzetten op te brede zoektermen. Het
              woord &ldquo;renovatie&rdquo; is zo breed dat de meeste klikken niet leiden tot een relevante
              aanvraag. Specifieke combinaties van dienst en regio werken beter: &ldquo;badkamerrenovatie Utrecht
              aanvragen&rdquo; heeft hogere intentie en lagere concurrentie dan een generiek zoekwoord.
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
              Social media voor inspiratie en retargeting
            </h2>
            <p>
              Facebook en Instagram zijn minder geschikt voor het direct genereren van aanvragen bij renovatiebedrijven.
              Ze zijn wel zeer geschikt voor twee andere doelen: het bereiken van mensen in de oriëntatiefase die nog
              niet actief zoeken, en retargeting van mensen die al op de website geweest zijn.
            </p>
            <p>
              Projectfoto&apos;s op Instagram bereiken mensen die nadenken over een verbouwing maar nog niet klaar
              zijn. Retargetingcampagnes op Facebook bereiken mensen die je website al bezocht hebben. Die combinatie
              zorgt dat het renovatiebedrijf zichtbaar blijft gedurende het hele oriëntatieproces.
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
              Wat je kunt weglaten
            </h2>
            <p>
              Niet elk kanaal past bij een renovatiebedrijf. Flyer-campagnes leveren zelden meetbaar resultaat op.
              Koude acquisitie via telefoon kost veel tijd voor weinig rendement. En generieke social media content
              zonder duidelijke focus op de doelgroep bouwt weinig op.
            </p>
            <p>
              De marketingstrategie die voor een renovatiebedrijf werkt, is gericht op vindbaarheid bij mensen
              die echt zoeken, vertrouwen bij mensen die oriënteren en herinnering bij mensen die al contact hebben
              gehad. Dat vraagt een samenspel van kanalen, geen inzet op alles tegelijk.
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
                Wil je een marketingstrategie voor jouw renovatiebedrijf?
              </p>
              <p style={{ marginBottom: "20px", color: "oklch(70% 0 0)" }}>
                Groeimaten werkt uitsluitend voor bedrijven in de bouw en renovatiesector. We stellen een
                strategie op die aansluit op jouw diensten, regio en budget. Plan een gratis gesprek.
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

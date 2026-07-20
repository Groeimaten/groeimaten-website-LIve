import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Google reviews verzamelen als keukenstudio | Groeimaten",
  description:
    "Google reviews verzamelen als keukenstudio verhoogt je lokale vindbaarheid en bouwt vertrouwen op bij nieuwe bezoekers. Hoe doe je dat structureel en automatisch?",
  alternates: {
    canonical: "https://groeimaten.com/google-reviews-keukenstudio",
  },
  openGraph: {
    title: "Google reviews verzamelen als keukenstudio | Groeimaten",
    description:
      "Groeimaten helpt keukenstudio's met het structureel verzamelen van Google-reviews die vindbaarheid en vertrouwen vergroten.",
    url: "https://groeimaten.com/google-reviews-keukenstudio",
  },
}

const arrowIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const checkIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Google reviews verzamelen keukenstudio",
  provider: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  description:
    "Groeimaten helpt keukenstudio's met het opzetten van een geautomatiseerd systeem voor het verzamelen van Google-reviews na elk afgesloten project.",
  areaServed: { "@type": "Country", name: "Nederland" },
  url: "https://groeimaten.com/google-reviews-keukenstudio",
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://groeimaten.com" },
    { "@type": "ListItem", position: 2, name: "Google reviews keukenstudio", item: "https://groeimaten.com/google-reviews-keukenstudio" },
  ],
}

export default function GoogleReviewsKeukenstudioPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="page-hero page-hero--split">
        <div className="page-hero__glow page-hero__glow--1" aria-hidden="true" />
        <div className="page-hero__glow page-hero__glow--2" aria-hidden="true" />
        <div className="container">
          <div className="page-hero__inner">
            <ScrollReveal>
              <div className="page-hero__content">
                <span className="section-label">Reputatie voor keukenstudio&apos;s</span>
                <h1 className="page-hero__title">
                  Google reviews verzamelen
                  <br />
                  <em>als keukenstudio.</em>
                </h1>
                <p className="page-hero__subtitle">
                  Een keukenstudio met 60 vijfsterrenreviews trekt andere bezoekers dan een studio met 8.
                  Tevreden klanten laten niet vanzelf een review achter. Groeimaten zet het systeem op dat
                  dat wel structureel laat gebeuren.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "28px" }}>
                  <Link href="/afspraak" className="btn btn--blue btn--lg">
                    Gratis strategiegesprek {arrowIcon}
                  </Link>
                  <Link href="/cases" className="btn btn--ghost btn--lg">
                    Bekijk cases
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="service-detail">
        <div className="container">
          <div className="service-detail__inner">
            <ScrollReveal>
              <div className="service-detail__content">
                <span className="section-label">Hoe het werkt</span>
                <h2 className="section-title section-title--white">
                  Structureel reviews verzamelen zonder handwerk
                </h2>
                <p>
                  De meeste keukenstudio&apos;s vragen af en toe om een review, maar niet structureel. Dat betekent
                  dat veel tevreden klanten geen review achterlaten terwijl ze dat zeker zouden doen als ze
                  er op het juiste moment om gevraagd werden.
                </p>
                <p>
                  Groeimaten zet een geautomatiseerde opvolgstroom op die na oplevering van elke keuken
                  automatisch een reviewverzoek verstuurt. Directe link naar Google, vriendelijke toon,
                  op het moment dat de klant het meest tevreden is.
                </p>

                <div className="service-features">
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Automatisch na oplevering</h4>
                      <p>
                        Geen handmatig nadenken. Na elke geplaatste keuken volgt automatisch een
                        reviewverzoek op het juiste moment.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Directe Google-link</h4>
                      <p>
                        Geen omweg. De klant klikt op een link en komt direct op de reviewpagina van
                        jouw Google-profiel terecht.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Betere lokale ranking</h4>
                      <p>
                        Meer recente reviews verbeteren de positie in Google Maps en de lokale
                        zoekresultaten direct.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Meer vertrouwen bij nieuwe bezoekers</h4>
                      <p>
                        Een hoog aantal recente reviews overtuigt nieuwe bezoekers sneller dan
                        tekst of foto&apos;s alleen.
                      </p>
                    </div>
                  </div>
                </div>

                <Link href="/afspraak" className="btn btn--blue btn--lg">
                  Plan een gratis strategiegesprek {arrowIcon}
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <div className="service-detail__visual">
                <div className="service-visual-card">
                  <div className="service-visual-card__glow" />
                  <div className="service-visual-card__stat">
                    <span className="service-visual-card__number">5,0</span>
                    <span className="service-visual-card__label">eigen Google score Groeimaten</span>
                  </div>
                  <div className="service-visual-card__bar">
                    <div className="bar" style={{ width: "100%" }} />
                  </div>
                  <div className="service-visual-card__stat">
                    <span className="service-visual-card__number">17+</span>
                    <span className="service-visual-card__label">klanten in keuken, badkamer en bouw</span>
                  </div>
                  <div className="service-visual-card__bar bar--green">
                    <div className="bar" style={{ width: "85%" }} />
                  </div>
                  <div className="service-visual-card__stat">
                    <span className="service-visual-card__number">100%</span>
                    <span className="service-visual-card__label">sectorspecifieke aanpak</span>
                  </div>
                  <div className="service-visual-card__bar">
                    <div className="bar" style={{ width: "100%" }} />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="service-detail service-detail--alt">
        <div className="container">
          <ScrollReveal>
            <div style={{ maxWidth: "680px", margin: "0 auto", textAlign: "center" }}>
              <span className="section-label">Begin hier</span>
              <h2 className="section-title section-title--white">
                Plan een gratis gesprek
              </h2>
              <p style={{ color: "oklch(68% 0 0)", lineHeight: "1.75", marginBottom: "24px" }}>
                We kijken naar je huidige reputatie op Google en bespreken hoe je structureel meer reviews
                kunt verzamelen. Groeimaten werkt uitsluitend voor keukenstudio&apos;s, badkamerbedrijven en
                bouwbedrijven.
              </p>
              <Link href="/afspraak" className="btn btn--blue btn--lg">
                Plan een gratis gesprek {arrowIcon}
              </Link>
              <p style={{ color: "oklch(50% 0 0)", fontSize: "0.85rem", marginTop: "12px" }}>
                Geen verplichtingen. Wel eerlijk advies.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

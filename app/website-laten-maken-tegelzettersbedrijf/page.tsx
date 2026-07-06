import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Website laten maken voor je tegelzettersbedrijf | Groeimaten",
  description:
    "Een website laten maken voor een tegelzettersbedrijf die aanvragen genereert. Groeimaten bouwt websites voor tegelzetters die gevonden worden en klanten overtuigen.",
  alternates: {
    canonical: "https://groeimaten.com/website-laten-maken-tegelzettersbedrijf",
  },
  openGraph: {
    title: "Website laten maken voor je tegelzettersbedrijf | Groeimaten",
    description:
      "Groeimaten bouwt websites voor tegelzetters die gevonden worden en klanten overtuigen contact op te nemen.",
    url: "https://groeimaten.com/website-laten-maken-tegelzettersbedrijf",
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
  name: "Website laten maken tegelzettersbedrijf",
  provider: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  description:
    "Groeimaten bouwt websites voor tegelzettersbedrijven die gevonden worden via SEO en aanvragen genereren.",
  areaServed: { "@type": "Country", name: "Nederland" },
  url: "https://groeimaten.com/website-laten-maken-tegelzettersbedrijf",
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://groeimaten.com" },
    { "@type": "ListItem", position: 2, name: "Website laten maken tegelzettersbedrijf", item: "https://groeimaten.com/website-laten-maken-tegelzettersbedrijf" },
  ],
}

export default function WebsiteLateMakenTegelzettersbedrijfPage() {
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
                <span className="section-label">Website voor tegelzettersbedrijf</span>
                <h1 className="page-hero__title">
                  Website laten maken voor je
                  <br />
                  <em>tegelzettersbedrijf.</em>
                </h1>
                <p className="page-hero__subtitle">
                  Tegelzetters worden gevonden op basis van werk dat ze hebben afgeleverd. Een website die
                  jouw projecten laat zien, jouw werkgebied duidelijk maakt en gevonden wordt door mensen
                  die actief zoeken, is het sterkste acquisitie-instrument dat je hebt.
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
                <span className="section-label">Wat wij bouwen</span>
                <h2 className="section-title section-title--white">
                  Een tegelzettersite die aanvragen genereert
                </h2>
                <p>
                  De meeste tegelzettersbedrijven hebben geen website of een verouderde site die nauwelijks
                  bezoekers trekt. Dat betekent dat potentiële klanten die zoeken naar een tegelzetter in
                  hun regio, bij de concurrent terechtkomen. Een goede website verandert dat.
                </p>
                <p>
                  Groeimaten bouwt websites voor tegelzettersbedrijven die op twee fronten werken: gevonden
                  worden via Google en bezoekers overtuigen contact op te nemen. Foto&apos;s van afgerond
                  werk, duidelijk werkgebied, reviews en een directe contactmogelijkheid zijn daarvoor de
                  essentiële onderdelen.
                </p>

                <div className="service-features">
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Lokale SEO-structuur</h4>
                      <p>
                        De website is ingericht om gevonden te worden voor zoekopdrachten als
                        &ldquo;tegelzetter [stad]&rdquo; of &ldquo;tegels leggen [regio]&rdquo;.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Portfolio van afgerond werk</h4>
                      <p>
                        Foto&apos;s van badkamers, keukens en vloeren die je hebt betegeld. Werk dat
                        spreekt overtuigt beter dan tekst.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Mobielvriendelijk en snel</h4>
                      <p>
                        De meeste bezoekers komen via de telefoon. De site laadt snel en werkt perfect
                        op elk schermformaat.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Google Mijn Bedrijf koppeling</h4>
                      <p>
                        Afstemming van de website met het Google-bedrijfsprofiel voor maximale lokale
                        zichtbaarheid in de kaartresultaten.
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
                    <span className="service-visual-card__number">35+</span>
                    <span className="service-visual-card__label">websites voor keuken, badkamer en bouw</span>
                  </div>
                  <div className="service-visual-card__bar">
                    <div className="bar" style={{ width: "88%" }} />
                  </div>
                  <div className="service-visual-card__stat">
                    <span className="service-visual-card__number">100%</span>
                    <span className="service-visual-card__label">focus op bouw en renovatiesector</span>
                  </div>
                  <div className="service-visual-card__bar bar--green">
                    <div className="bar" style={{ width: "100%" }} />
                  </div>
                  <div className="service-visual-card__stat">
                    <span className="service-visual-card__number">5,0</span>
                    <span className="service-visual-card__label">Google score Groeimaten</span>
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
                We kijken naar jouw huidige situatie, jouw werkgebied en jouw doelgroep. Op basis
                daarvan krijg je een concreet voorstel. Groeimaten werkt uitsluitend voor bedrijven
                in de bouw en renovatiesector.
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

import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Website laten maken voor je loodgietersbedrijf | Groeimaten",
  description:
    "Een website laten maken als loodgieter die aanvragen genereert. Groeimaten bouwt websites voor loodgieters die gevonden worden op Google en klanten overtuigen contact op te nemen.",
  alternates: {
    canonical: "https://groeimaten.com/loodgieter-website",
  },
  openGraph: {
    title: "Website laten maken voor je loodgietersbedrijf | Groeimaten",
    description:
      "Groeimaten bouwt websites voor loodgieters die gevonden worden en aanvragen genereren.",
    url: "https://groeimaten.com/loodgieter-website",
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
  name: "Website laten maken loodgieter",
  provider: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  description:
    "Groeimaten bouwt websites voor loodgieters die gevonden worden via Google en aanvragen genereren.",
  areaServed: { "@type": "Country", name: "Nederland" },
  url: "https://groeimaten.com/loodgieter-website",
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://groeimaten.com" },
    { "@type": "ListItem", position: 2, name: "Website laten maken loodgieter", item: "https://groeimaten.com/loodgieter-website" },
  ],
}

export default function LoodgieterWebsitePage() {
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
                <span className="section-label">Website voor loodgieters</span>
                <h1 className="page-hero__title">
                  Website laten maken voor je
                  <br />
                  <em>loodgietersbedrijf.</em>
                </h1>
                <p className="page-hero__subtitle">
                  Mensen die een loodgieter zoeken, wachten niet. Ze zoeken op de telefoon, ze bellen
                  de eerste die ze vertrouwen. Een goede website zorgt dat jij die eerste bent.
                  Groeimaten bouwt websites voor loodgieters die gevonden worden en direct contact
                  uitlokken.
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
                  Een loodgieterssite die aanvragen oplevert
                </h2>
                <p>
                  Veel loodgieters hebben geen website of een verouderde site die amper bezoekers
                  trekt. Dat betekent dat mensen die zoeken naar een loodgieter in hun regio, uitkomen
                  bij de concurrent. Een goede website verandert dat.
                </p>
                <p>
                  Groeimaten bouwt websites voor loodgieters die op twee fronten werken: gevonden worden
                  via Google en bezoekers direct aanzetten tot contact. Een prominent telefoonnummer,
                  duidelijk werkgebied, diensten per type klus en reviews van eerdere klanten zijn
                  daarvoor de essentiële onderdelen.
                </p>

                <div className="service-features">
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Gevonden worden op spoedklussen</h4>
                      <p>
                        De site is ingericht voor zoekopdrachten als &ldquo;loodgieter spoed [stad]&rdquo;
                        of &ldquo;lekkage repareren [regio]&rdquo;.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Direct contact, ook op mobiel</h4>
                      <p>
                        Een groot telefoonnummer bovenaan, mobielvriendelijk ontwerp en een laadtijd
                        onder de twee seconden. Iemand die belt, belt snel.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Alle diensten overzichtelijk</h4>
                      <p>
                        Verstoppingen, lekkages, CV-onderhoud, badkamerinstallatie: elke dienst
                        op een eigen pagina zodat je voor elke zoekopdracht vindbaar bent.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Reviews en vertrouwen</h4>
                      <p>
                        Mensen bellen een loodgieter die ze vertrouwen. Reviews van tevreden klanten,
                        duidelijk op de site, bouwen dat vertrouwen snel op.
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
                    <div className="bar" style={{ width: "90%" }} />
                  </div>
                  <div className="service-visual-card__stat">
                    <span className="service-visual-card__number">100%</span>
                    <span className="service-visual-card__label">focus op bouw en installatiesector</span>
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
                in de bouw, installatie en renovatiesector.
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

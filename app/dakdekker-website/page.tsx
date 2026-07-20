import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Website laten maken voor je dakdekkersbedrijf | Groeimaten",
  description:
    "Een website laten maken als dakdekker die aanvragen genereert bij spoed en geplande werkzaamheden. Groeimaten bouwt dakdekkerssites die gevonden worden en direct contact uitlokken.",
  alternates: {
    canonical: "https://groeimaten.com/dakdekker-website",
  },
  openGraph: {
    title: "Website laten maken voor je dakdekkersbedrijf | Groeimaten",
    description:
      "Groeimaten bouwt websites voor dakdekkers die gevonden worden op spoedreparaties en geplande dakopdrachten.",
    url: "https://groeimaten.com/dakdekker-website",
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
  name: "Website laten maken dakdekker",
  provider: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  description:
    "Groeimaten bouwt websites voor dakdekkers die gevonden worden via Google bij spoedklusjes en geplande dakopdrachten, en die bezoekers direct aanzetten tot contact.",
  areaServed: { "@type": "Country", name: "Nederland" },
  url: "https://groeimaten.com/dakdekker-website",
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://groeimaten.com" },
    { "@type": "ListItem", position: 2, name: "Website laten maken dakdekker", item: "https://groeimaten.com/dakdekker-website" },
  ],
}

export default function DakdekkerWebsitePage() {
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
                <span className="section-label">Website voor dakdekkers</span>
                <h1 className="page-hero__title">
                  Website laten maken voor je
                  <br />
                  <em>dakdekkersbedrijf.</em>
                </h1>
                <p className="page-hero__subtitle">
                  Iemand met een lekkend dak belt de eerste dakdekker die ze vinden. Een goede website zorgt
                  dat jij die bent. Groeimaten bouwt websites voor dakdekkers die snel gevonden worden en
                  direct aanvragen genereren.
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
                  Een dakdekkersite die aanvragen trekt
                </h2>
                <p>
                  Dakdekkers werken in twee markten tegelijk: spoedreparaties waarbij iemand vandaag nog geholpen
                  wil worden, en geplande werkzaamheden zoals nieuwe dakbedekking of dakisolatie. Een goede
                  website is voor beide markten vindbaar en overtuigend.
                </p>
                <p>
                  Groeimaten bouwt websites voor dakdekkers die op mobiel razendsnel laden, duidelijk het werkgebied
                  en de diensten communiceren en bezoekers direct aanzetten tot bellen of een formulier invullen.
                </p>

                <div className="service-features">
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Vindbaar bij spoedreparaties</h4>
                      <p>
                        Ingericht voor zoekopdrachten als &ldquo;dakdekker spoed [stad]&rdquo; en
                        &ldquo;daklekkage repareren [regio]&rdquo;.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Snel contact, ook op mobiel</h4>
                      <p>
                        Een klikbaar telefoonnummer bovenaan, laadtijd onder de twee seconden en een formulier
                        dat werkt op elk apparaat.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Alle diensten per pagina</h4>
                      <p>
                        Dakisolatie, dakbedekking, dakreparatie, dakkapellen: elke dienst op een eigen pagina
                        zodat je voor elke zoekopdracht vindbaar bent.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Projectfoto&apos;s en reviews</h4>
                      <p>
                        Foto&apos;s van afgerond dakwerk en reviews van tevreden klanten bouwen het vertrouwen
                        op dat nodig is om contact op te nemen.
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
                    <span className="service-visual-card__label">websites voor de bouw en installatiesector</span>
                  </div>
                  <div className="service-visual-card__bar">
                    <div className="bar" style={{ width: "90%" }} />
                  </div>
                  <div className="service-visual-card__stat">
                    <span className="service-visual-card__number">100%</span>
                    <span className="service-visual-card__label">focus op bouw, installatie en keuken/bad</span>
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
                We kijken naar jouw dakdekkersbedrijf, werkgebied en diensten. Op basis daarvan krijg je een
                concreet voorstel. Groeimaten werkt uitsluitend voor bedrijven in de bouw, installatie en
                renovatiesector.
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

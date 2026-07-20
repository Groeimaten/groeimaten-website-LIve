import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Landingspagina laten maken voor installateurs | Groeimaten",
  description:
    "Een landingspagina laten maken als installateur die aanvragen genereert bij spoed en geplande klussen. Groeimaten bouwt conversiegerichte landingspagina's voor de installatiesector.",
  alternates: {
    canonical: "https://groeimaten.com/landingspagina-installateur",
  },
  openGraph: {
    title: "Landingspagina laten maken voor installateurs | Groeimaten",
    description:
      "Groeimaten bouwt landingspagina's voor installateurs die bezoekers omzetten in aanvragen.",
    url: "https://groeimaten.com/landingspagina-installateur",
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
  name: "Landingspagina laten maken installateur",
  provider: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  description:
    "Groeimaten bouwt conversiegerichte landingspagina's voor installateurs die gericht zijn op het genereren van aanvragen bij specifieke diensten en regio's.",
  areaServed: { "@type": "Country", name: "Nederland" },
  url: "https://groeimaten.com/landingspagina-installateur",
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://groeimaten.com" },
    { "@type": "ListItem", position: 2, name: "Landingspagina installateur", item: "https://groeimaten.com/landingspagina-installateur" },
  ],
}

export default function LandingspaginaInstallateurPage() {
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
                <span className="section-label">Landingspagina voor installateurs</span>
                <h1 className="page-hero__title">
                  Landingspagina laten maken
                  <br />
                  <em>voor installateurs.</em>
                </h1>
                <p className="page-hero__subtitle">
                  Een gerichte landingspagina trekt aanvragen voor een specifieke dienst of regio. Voor
                  installateurs is dat het verschil tussen een algemene website die weinig doet en een pagina
                  die structureel klanten oplevert. Groeimaten bouwt die pagina&apos;s.
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
                  Een landingspagina die aanvragen genereert
                </h2>
                <p>
                  Een landingspagina voor een installateur is anders dan een algemene websitepagina. Het is
                  gericht op één dienst of werkgebied, geoptimaliseerd voor de zoekwoorden die daarbij horen
                  en ingericht om bezoekers zo snel mogelijk naar een contactmoment te leiden.
                </p>
                <p>
                  Dat werkt voor loodgieters die meer aanvragen willen voor CV-ketel onderhoud, voor elektriciëns
                  die nieuwe klanten in een specifieke gemeente zoeken en voor airco-installateurs die zich
                  willen onderscheiden van de generieke concurrentie.
                </p>

                <div className="service-features">
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Gericht op één dienst of regio</h4>
                      <p>
                        Geen algemene pagina maar een gerichte landingspagina die precies beantwoordt
                        wat iemand zoekt.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>SEO-geoptimaliseerd</h4>
                      <p>
                        De pagina is technisch en inhoudelijk ingericht voor de zoekwoorden die jouw
                        doelgroep gebruikt.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Hoog conversiepercentage</h4>
                      <p>
                        Duidelijke CTA, zichtbaar contactformulier, klikbaar telefoonnummer en
                        vertrouwenssignalen boven de vouw.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Meetbaar resultaat</h4>
                      <p>
                        Analytics ingesteld zodat je ziet hoeveel bezoekers er binnenkomen en hoeveel
                        er een aanvraag indienen.
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
                    <span className="service-visual-card__label">websites en landingspagina&apos;s voor de sector</span>
                  </div>
                  <div className="service-visual-card__bar">
                    <div className="bar" style={{ width: "90%" }} />
                  </div>
                  <div className="service-visual-card__stat">
                    <span className="service-visual-card__number">€69</span>
                    <span className="service-visual-card__label">laagste kosten per aanvraag bij klanten</span>
                  </div>
                  <div className="service-visual-card__bar bar--green">
                    <div className="bar" style={{ width: "85%" }} />
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
              <span className="section-label">Volgende stap</span>
              <h2 className="section-title section-title--white">
                Plan een gratis gesprek
              </h2>
              <p style={{ color: "oklch(68% 0 0)", lineHeight: "1.75", marginBottom: "24px" }}>
                We bespreken welke dienst of regio het meeste potentieel heeft voor een gerichte landingspagina
                en wat dat realistisch kan opleveren. Groeimaten werkt uitsluitend voor de installatie-,
                bouw- en renovatiesector.
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

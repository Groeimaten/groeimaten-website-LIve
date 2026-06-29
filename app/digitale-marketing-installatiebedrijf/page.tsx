import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Digitale Marketing voor Installatiebedrijven | Groeimaten",
  description:
    "Digitale marketing voor installatiebedrijven die structureel meer klanten willen. Groeimaten verzorgt Google Ads, SEO en website development voor installateurs in heel Nederland.",
  alternates: {
    canonical: "https://groeimaten.com/digitale-marketing-installatiebedrijf",
  },
  openGraph: {
    title: "Digitale Marketing voor Installatiebedrijven | Groeimaten",
    description:
      "Groeimaten verzorgt digitale marketing voor installatiebedrijven: Google Ads, SEO en website development.",
    url: "https://groeimaten.com/digitale-marketing-installatiebedrijf",
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
  name: "Digitale marketing voor installatiebedrijven",
  provider: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  description:
    "Groeimaten levert digitale marketing voor installatiebedrijven: Google Ads, SEO en website development specifiek voor de installatiesector.",
  areaServed: { "@type": "Country", name: "Nederland" },
  url: "https://groeimaten.com/digitale-marketing-installatiebedrijf",
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://groeimaten.com" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Digitale marketing installatiebedrijf",
      item: "https://groeimaten.com/digitale-marketing-installatiebedrijf",
    },
  ],
}

export default function DigitaleMarketingInstallatiebedrijfPage() {
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
                <span className="section-label">Digitale marketing installatiebedrijf</span>
                <h1 className="page-hero__title">
                  Digitale marketing voor
                  <br />
                  <em>installatiebedrijven.</em>
                </h1>
                <p className="page-hero__subtitle">
                  Groeimaten helpt installatiebedrijven structureel meer klanten te bereiken via gerichte
                  online marketing. We kennen de sector en weten welke aanpak daadwerkelijk aanvragen genereert.
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
                <span className="section-label">Diensten</span>
                <h2 className="section-title section-title--white">
                  Wat we voor installatiebedrijven doen
                </h2>
                <p>
                  Installatiebedrijven worden gevonden via lokale zoekopdrachten. Iemand met een kapotte
                  cv-ketel of een nieuwe badkamer wil een betrouwbare installateur in de buurt. Digitale
                  marketing voor installatiebedrijven richt zich precies op dat zoekmoment.
                </p>
                <p>
                  Groeimaten richt zich op de kanalen die voor installateurs het meeste rendement geven.
                  We beginnen altijd met een analyse van jouw huidige positie en de concurrentie in jouw
                  werkgebied.
                </p>

                <div className="service-features">
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Google Ads voor installateurs</h4>
                      <p>
                        Bovenaan staan wanneer iemand in jouw regio zoekt naar een installateur. Lokaal
                        en gericht, zodat elk euro budget naar de juiste zoekopdrachten gaat.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Lokale SEO</h4>
                      <p>
                        Organisch gevonden worden voor lokale zoekopdrachten via Google Mijn Bedrijf
                        optimalisatie en een sterke dienstpagina per specialisatie.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Website development</h4>
                      <p>
                        Een snelle, mobielvriendelijke website die aanvragen genereert. Met duidelijke
                        contactmogelijkheden en een portfolio van afgeronde projecten.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Review strategie</h4>
                      <p>
                        Een systeem om structureel reviews te verzamelen na elk afgerond project, zodat
                        jouw Google-score sterk en actueel blijft.
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
                    <span className="service-visual-card__label">bouw en sanitair merken geholpen</span>
                  </div>
                  <div className="service-visual-card__bar">
                    <div className="bar" style={{ width: "90%" }} />
                  </div>
                  <div className="service-visual-card__stat">
                    <span className="service-visual-card__number">€25</span>
                    <span className="service-visual-card__label">gemiddelde kosten per lead</span>
                  </div>
                  <div className="service-visual-card__bar bar--green">
                    <div className="bar" style={{ width: "70%" }} />
                  </div>
                  <div className="service-visual-card__stat">
                    <span className="service-visual-card__number">5,0 ★</span>
                    <span className="service-visual-card__label">Google review score</span>
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
              <span className="section-label">Sectorkennis</span>
              <h2 className="section-title section-title--white">
                Installatiebedrijven groeien niet via koude acquisitie
              </h2>
              <p style={{ color: "oklch(68% 0 0)", lineHeight: "1.75", marginBottom: "24px" }}>
                Klanten van installatiebedrijven zoeken lokaal, via Google of via aanbevelingen. Digitale
                marketing voor installatiebedrijven richt zich op precies die momenten. Groeimaten bouwt
                systemen die werken voor jouw sector, niet standaard templates voor iedereen.
              </p>
              <Link href="/afspraak" className="btn btn--blue btn--lg">
                Plan een gratis strategiegesprek {arrowIcon}
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

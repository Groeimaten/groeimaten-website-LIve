import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Groeistrategie voor Keuken en Sanitair | Groeimaten",
  description:
    "Een groeistrategie voor keuken en sanitair begint bij de juiste kanalen en de juiste klant. Groeimaten bouwt systemen die structureel meer omzet genereren voor keuken en sanitairbedrijven.",
  alternates: {
    canonical: "https://groeimaten.com/groeistrategie-keuken-sanitair",
  },
  openGraph: {
    title: "Groeistrategie voor Keuken en Sanitair | Groeimaten",
    description:
      "Groeimaten bouwt systemen die structureel meer omzet genereren voor keuken en sanitairbedrijven.",
    url: "https://groeimaten.com/groeistrategie-keuken-sanitair",
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
  name: "Groeistrategie voor keuken en sanitair",
  provider: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  description:
    "Groeimaten ontwikkelt groeistrategie voor keuken en sanitairbedrijven via Meta Ads, Google Ads, SEO en website development.",
  areaServed: { "@type": "Country", name: "Nederland" },
  url: "https://groeimaten.com/groeistrategie-keuken-sanitair",
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://groeimaten.com" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Groeistrategie keuken sanitair",
      item: "https://groeimaten.com/groeistrategie-keuken-sanitair",
    },
  ],
}

export default function GroeistrategieKeukensanitairPage() {
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
                <span className="section-label">Groeistrategie keuken en sanitair</span>
                <h1 className="page-hero__title">
                  Een groeistrategie
                  <br />
                  <em>die echt werkt.</em>
                </h1>
                <p className="page-hero__subtitle">
                  Groeimaten werkt uitsluitend voor keuken- en sanitairbedrijven. We bouwen systemen die
                  structureel nieuwe klanten genereren, niet losse campagnes die stoppen als het budget op is.
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
                <span className="section-label">Aanpak</span>
                <h2 className="section-title section-title--white">
                  Groeien vraagt om een systeem, geen losse acties
                </h2>
                <p>
                  Veel keuken en sanitairbedrijven proberen van alles: een nieuwe website, wat advertenties
                  hier en daar, een tijdelijke actie. Dat leidt zelden tot structurele groei. Een groeistrategie
                  voor de keuken en sanitair sector werkt alleen als de onderdelen op elkaar aansluiten.
                </p>
                <p>
                  Groeimaten bouwt een systeem dat bestaat uit de kanalen die voor jouw bedrijf en jouw
                  doelgroep het meeste rendement geven. Dat kan een combinatie zijn van Meta Ads, Google Ads,
                  SEO en website optimalisatie. De mix hangt af van jouw situatie, jouw markt en jouw doelen.
                </p>

                <div className="service-features">
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Analyse van jouw huidige positie</h4>
                      <p>
                        We beginnen met een eerlijk beeld van waar jij staat: online zichtbaarheid,
                        leadinstroom, conversieratio en vergelijking met concurrenten in jouw markt.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Strategie op maat</h4>
                      <p>
                        Geen standaardpakket. We kiezen de kanalen en aanpak die passen bij jouw bedrijf,
                        jouw doelgroep en jouw budget.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Uitvoering door specialisten</h4>
                      <p>
                        Groeimaten voert zelf uit. Geen uitbesteding naar derde partijen die jouw sector
                        niet kennen. We doen alles intern.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Transparante resultaten</h4>
                      <p>
                        Maandelijkse rapportage met concrete cijfers: leads, afspraken, kosten en omzet.
                        Geen vage statistieken.
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
                    <span className="service-visual-card__label">keuken en sanitair merken geholpen groeien</span>
                  </div>
                  <div className="service-visual-card__bar">
                    <div className="bar" style={{ width: "90%" }} />
                  </div>
                  <div className="service-visual-card__stat">
                    <span className="service-visual-card__number">€110.000</span>
                    <span className="service-visual-card__label">extra omzet voor één klant in 10 maanden</span>
                  </div>
                  <div className="service-visual-card__bar bar--green">
                    <div className="bar" style={{ width: "100%" }} />
                  </div>
                  <div className="service-visual-card__stat">
                    <span className="service-visual-card__number">100%</span>
                    <span className="service-visual-card__label">sector specialist keuken en sanitair</span>
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
              <span className="section-label">Sector kennis</span>
              <h2 className="section-title section-title--white">
                We kennen jouw klant beter dan de meeste bureaus
              </h2>
              <p style={{ color: "oklch(68% 0 0)", lineHeight: "1.75", marginBottom: "24px" }}>
                De gemiddelde keukenaankoop kost 15.000 tot 50.000 euro. Een badkamerrenovatie kost 8.000 tot
                25.000 euro. We weten hoe lang het beslisproces duurt, welke bezwaren kopers hebben en hoe
                je hen overtuigt een afspraak te maken. Die kennis zit in elke strategie die we bouwen.
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

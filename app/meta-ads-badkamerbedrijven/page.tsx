import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Meta Ads voor Badkamerbedrijven | Groeimaten",
  description:
    "Meta Ads voor badkamerbedrijven die structureel nieuwe klanten willen bereiken. Groeimaten bouwt Facebook en Instagram campagnes die passen bij het aankoopproces van jouw klant.",
  alternates: {
    canonical: "https://groeimaten.com/meta-ads-badkamerbedrijven",
  },
  openGraph: {
    title: "Meta Ads voor Badkamerbedrijven | Groeimaten",
    description:
      "Meta Ads voor badkamerbedrijven die structureel nieuwe klanten willen bereiken.",
    url: "https://groeimaten.com/meta-ads-badkamerbedrijven",
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
  name: "Meta Ads voor badkamerbedrijven",
  provider: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  description:
    "Groeimaten bouwt en beheert Meta Ads campagnes op Facebook en Instagram voor badkamerbedrijven en sanitairzaken.",
  areaServed: { "@type": "Country", name: "Nederland" },
  url: "https://groeimaten.com/meta-ads-badkamerbedrijven",
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://groeimaten.com" },
    { "@type": "ListItem", position: 2, name: "Meta Ads badkamerbedrijven", item: "https://groeimaten.com/meta-ads-badkamerbedrijven" },
  ],
}

export default function MetaAdsBadkamerbedrijvenPage() {
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
                <span className="section-label">Meta Ads badkamer</span>
                <h1 className="page-hero__title">
                  Meta Ads voor badkamerbedrijven
                  <br />
                  <em>die de juiste klant bereiken.</em>
                </h1>
                <p className="page-hero__subtitle">
                  Facebook en Instagram bereiken mensen voordat ze actief zoeken op Google. Voor een badkamerbedrijf is dat de orientatiefase die je niet wilt missen. Groeimaten bouwt campagnes die dat moment pakken.
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
                  Meta Ads die passen bij het badkamerkoopproces
                </h2>
                <p>
                  Een badkamerrenovatie kost gemiddeld 8.000 tot 25.000 euro. Jouw klant neemt weken of maanden de tijd voor hij een beslissing neemt. Meta Ads werken het best als onderdeel van een funnelstrategie die aansluit bij die verschillende fases: bewustwording, orientatie en conversie.
                </p>
                <p>
                  Groeimaten bouwt campagnes die in elke fase de juiste boodschap brengen. Inspirerende beelden van badkamerprojecten voor mensen die nog aan het orienteren zijn, gerichte retargeting voor mensen die jouw showroom of website al hebben gezien.
                </p>

                <div className="service-features">
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Doelgroeptargeting op levensfase</h4>
                      <p>
                        Mensen bereiken die in de markt zijn voor een badkamerrenovatie op basis van levensfase, gedrag en interesses.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Campagnebeelden die converteren</h4>
                      <p>
                        Beeldmateriaal dat de kwaliteit van jouw showroom laat zien en aanzet tot een afspraak.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Retargeting funnel</h4>
                      <p>
                        Mensen die jouw website of advertentie al hebben gezien opnieuw bereiken op het moment dat ze klaar zijn om een stap te zetten.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>A/B-testing en optimalisatie</h4>
                      <p>
                        Doorlopende tests op beelden, teksten en doelgroepen voor structureel betere resultaten.
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
                    <span className="service-visual-card__label">keuken en sanitair bedrijven geholpen</span>
                  </div>
                  <div className="service-visual-card__bar">
                    <div className="bar" style={{ width: "90%" }} />
                  </div>
                  <div className="service-visual-card__stat">
                    <span className="service-visual-card__number">100+</span>
                    <span className="service-visual-card__label">afspraken gegenereerd</span>
                  </div>
                  <div className="service-visual-card__bar bar--green">
                    <div className="bar" style={{ width: "88%" }} />
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
              <span className="section-label">Specialisme</span>
              <h2 className="section-title section-title--white">
                Geen generieke Ads, maar badkamermarketing
              </h2>
              <p style={{ color: "oklch(68% 0 0)", lineHeight: "1.75", marginBottom: "24px" }}>
                Groeimaten werkt uitsluitend voor keuken en sanitairbedrijven. We weten welke advertentiebeelden werken voor badkamer campagnes, welke doelgroepen het meest rendement geven en hoe je de opvolging inricht zodat aanvragen ook daadwerkelijk showroomafspraken worden.
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

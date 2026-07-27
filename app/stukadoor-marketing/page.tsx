import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Online Marketing voor Stukadoorsbedrijven | Groeimaten",
  description:
    "Meer opdrachten als stukadoor via gerichte online marketing. Groeimaten helpt stukadoorsbedrijven met SEO, Google Ads en een website die aanvragen genereert.",
  alternates: {
    canonical: "https://groeimaten.com/stukadoor-marketing",
  },
  openGraph: {
    title: "Online Marketing voor Stukadoorsbedrijven | Groeimaten",
    description:
      "Groeimaten helpt stukadoorsbedrijven met SEO, Google Ads en een website die aanvragen genereert.",
    url: "https://groeimaten.com/stukadoor-marketing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Marketing voor Stukadoorsbedrijven | Groeimaten",
    description: "Groeimaten helpt stukadoorsbedrijven met SEO, Google Ads en een website die aanvragen genereert.",
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
  name: "Online marketing voor stukadoorsbedrijven",
  provider: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  description:
    "Groeimaten helpt stukadoorsbedrijven met gerichte online marketing: SEO, Google Ads, website development en leadgeneratie specifiek voor de bouwsector.",
  areaServed: { "@type": "Country", name: "Nederland" },
  url: "https://groeimaten.com/stukadoor-marketing",
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://groeimaten.com" },
    { "@type": "ListItem", position: 2, name: "Marketing voor stukadoorsbedrijven", item: "https://groeimaten.com/stukadoor-marketing" },
  ],
}

export default function StukadoorMarketingPage() {
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
                <span className="section-label">Marketing stukadoors</span>
                <h1 className="page-hero__title">
                  Online marketing voor
                  <br />
                  <em>stukadoorsbedrijven.</em>
                </h1>
                <p className="page-hero__subtitle">
                  Stukadoorsbedrijven die structureel vol zitten, vertrouwen niet alleen op
                  doorverwijzingen. Groeimaten helpt je met een marketingaanpak die maand na
                  maand aanvragen oplevert, ook in de rustigere periodes.
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
                <span className="section-label">Onze aanpak</span>
                <h2 className="section-title section-title--white">
                  Meer opdrachten via gerichte marketing
                </h2>
                <p>
                  Stukadoorswerk is lokaal en mond-tot-mondreclame speelt een grote rol. Maar
                  opdrachtgevers zoeken ook online, zeker voor renovatieprojecten waarbij meerdere
                  partijen worden vergeleken. Groeimaten zorgt dat jij bij die vergelijking zit.
                </p>
                <p>
                  We werken uitsluitend voor bedrijven in de bouw, installatie en renovatiesector.
                  We begrijpen jouw type klant, het beslisproces en de zoektermen die ertoe doen.
                  Dat scheelt een inleertijd van maanden.
                </p>

                <div className="service-features">
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Lokale SEO per werkgebied</h4>
                      <p>
                        Gevonden worden op termen als &ldquo;stukadoor [stad]&rdquo; en
                        &ldquo;stucwerk laten aanbrengen [regio]&rdquo; in jouw eigen werkgebied.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Google Ads voor directe aanvragen</h4>
                      <p>
                        Campagnes gericht op mensen die actief zoeken naar stukadoorswerk
                        in jouw regio, met bellen als primaire actie.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Website die aanvragen uitlokt</h4>
                      <p>
                        Een overzichtelijke site met foto&apos;s van afgerond werk, reviews en
                        een contactformulier dat bezoekers aanzet tot actie.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Google Mijn Bedrijf</h4>
                      <p>
                        Een actief profiel dat in het kaartblok verschijnt bij lokale zoekopdrachten,
                        met projectfoto&apos;s en een hoge reviewscore.
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
                    <span className="service-visual-card__label">bedrijven in bouw en installatiesector</span>
                  </div>
                  <div className="service-visual-card__bar">
                    <div className="bar" style={{ width: "90%" }} />
                  </div>
                  <div className="service-visual-card__stat">
                    <span className="service-visual-card__number">100%</span>
                    <span className="service-visual-card__label">sectorspecialist bouw en renovatie</span>
                  </div>
                  <div className="service-visual-card__bar bar--green">
                    <div className="bar" style={{ width: "100%" }} />
                  </div>
                  <div className="service-visual-card__stat">
                    <span className="service-visual-card__number">5,0 ★</span>
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
              <span className="section-label">Gratis gesprek</span>
              <h2 className="section-title section-title--white">
                Plan een gratis gesprek
              </h2>
              <p style={{ color: "oklch(68% 0 0)", lineHeight: "1.75", marginBottom: "24px" }}>
                We kijken naar jouw stukadoorsbedrijf, werkgebied en huidige situatie. Op basis
                daarvan krijg je een concrete aanpak, geen vage strategie.
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

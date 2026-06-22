import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Marketingbureau voor de Bouwsector | Groeimaten",
  description:
    "Groeimaten is het marketingbureau voor de bouwsector. Aannemers, installateurs en bouwbedrijven groeien met gerichte advertenties, SEO en een conversiegerichte website.",
  alternates: {
    canonical: "https://groeimaten.com/marketingbureau-bouwsector",
  },
  openGraph: {
    title: "Marketingbureau voor de Bouwsector | Groeimaten",
    description:
      "Groeimaten is het marketingbureau voor de bouwsector. Aannemers en bouwbedrijven groeien met gerichte marketing.",
    url: "https://groeimaten.com/marketingbureau-bouwsector",
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
  name: "Marketingbureau voor de bouwsector",
  provider: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  description:
    "Groeimaten levert marketing voor de bouwsector: aannemers, installateurs en bouwbedrijven groeien met gerichte advertenties, SEO en conversiegerichte websites.",
  areaServed: { "@type": "Country", name: "Nederland" },
  url: "https://groeimaten.com/marketingbureau-bouwsector",
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://groeimaten.com" },
    { "@type": "ListItem", position: 2, name: "Marketingbureau bouwsector", item: "https://groeimaten.com/marketingbureau-bouwsector" },
  ],
}

export default function MarketingbureauBouwsectorPage() {
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
                <span className="section-label">Bouwsector marketing</span>
                <h1 className="page-hero__title">
                  Marketingbureau voor de bouwsector
                  <br />
                  <em>dat de sector kent.</em>
                </h1>
                <p className="page-hero__subtitle">
                  Aannemers, installateurs en bouwbedrijven werken in een sector met hoge projectwaarden en lange aankoopprocessen. Marketing die dat begrijpt werkt fundamenteel anders dan generieke bureaus.
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
                  Marketing voor de bouwsector vraagt sectorkennis
                </h2>
                <p>
                  Bouwbedrijven en aannemers werken met hoge projectwaarden, lange beslissingstijden en klanten die op zoek zijn naar vertrouwen en vakmanschap. Een generiek marketingbureau richt campagnes in zoals voor een webshop. Dat werkt niet. Groeimaten werkt uitsluitend voor bedrijven in keuken, badkamer en bouw. We kennen het aankoopproces van jouw klant.
                </p>
                <p>
                  We genereren aanvragen die aansluiten bij de projecten die jij wilt uitvoeren. Niet massaal, maar gericht. Kwaliteit boven kwantiteit.
                </p>

                <div className="service-features">
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Google Ads voor aannemers</h4>
                      <p>
                        Bovenaan verschijnen wanneer iemand zoekt naar een aannemer in jouw regio voor jouw type project.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>SEO voor bouwbedrijven</h4>
                      <p>
                        Structurele vindbaarheid op de zoekopdrachten die jouw opdrachtgevers gebruiken.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Conversiegerichte website</h4>
                      <p>
                        Een website die jouw vakmanschap laat zien en bezoekers omzet in serieuze aanvragen.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Meta Ads voor bouw</h4>
                      <p>
                        Potentiële opdrachtgevers bereiken nog voor ze actief zoeken, via gerichte campagnes op Facebook en Instagram.
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
                    <span className="service-visual-card__label">bedrijven in bouw en sanitair geholpen</span>
                  </div>
                  <div className="service-visual-card__bar">
                    <div className="bar" style={{ width: "90%" }} />
                  </div>
                  <div className="service-visual-card__stat">
                    <span className="service-visual-card__number">100%</span>
                    <span className="service-visual-card__label">sectorspecialist keuken, bad en bouw</span>
                  </div>
                  <div className="service-visual-card__bar bar--green">
                    <div className="bar" style={{ width: "100%" }} />
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
              <span className="section-label">Geen generieke aanpak</span>
              <h2 className="section-title section-title--white">
                Een marketingbureau dat bouw begrijpt
              </h2>
              <p style={{ color: "oklch(68% 0 0)", lineHeight: "1.75", marginBottom: "24px" }}>
                Groeimaten werkt uitsluitend voor bedrijven in keuken, badkamer en bouw. We weten wat een opdrachtgever in de bouwsector zoekt, hoe het beslissingsproces loopt en hoe je als bouwbedrijf het vertrouwen opbouwt dat nodig is om die opdracht te winnen. Die kennis zit in elke campagne die we voor je bouwen.
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

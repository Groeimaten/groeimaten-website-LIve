import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Google Ads voor Aannemers | Groeimaten",
  description:
    "Groeimaten zet Google Ads in voor aannemers en bouwbedrijven. Bovenaan staan wanneer iemand zoekt naar een aannemer in jouw regio. Meer opdrachten via Google.",
  alternates: {
    canonical: "https://groeimaten.com/aannemer-google-ads",
  },
  openGraph: {
    title: "Google Ads voor Aannemers | Groeimaten",
    description:
      "Google Ads voor aannemers: bovenaan staan wanneer iemand zoekt naar een aannemer in jouw regio.",
    url: "https://groeimaten.com/aannemer-google-ads",
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
  name: "Google Ads voor Aannemers",
  provider: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  description:
    "Groeimaten beheert Google Ads-campagnes voor aannemers en bouwbedrijven in Nederland. Koopklare aanvragen via Google Search.",
  areaServed: { "@type": "Country", name: "Nederland" },
  url: "https://groeimaten.com/aannemer-google-ads",
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://groeimaten.com" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Google Ads voor aannemers",
      item: "https://groeimaten.com/aannemer-google-ads",
    },
  ],
}

export default function AannemerGoogleAdsPage() {
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
                <span className="section-label">Google Ads voor de bouwsector</span>
                <h1 className="page-hero__title">
                  Google Ads voor aannemers:
                  <br />
                  <em>meer opdrachten via Google.</em>
                </h1>
                <p className="page-hero__subtitle">
                  Iemand die zoekt naar &ldquo;aannemer [jouw stad]&rdquo; of &ldquo;verbouwing offerte
                  aanvragen&rdquo; is klaar om te handelen. Groeimaten zorgt dat jij er staat.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "28px" }}>
                  <Link href="/afspraak" className="btn btn--blue btn--lg">
                    Gratis strategiegesprek {arrowIcon}
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
                  Google Ads voor aannemers die concrete opdrachten willen
                </h2>
                <p>
                  Google Ads voor aannemers werkt fundamenteel anders dan voor webshops of dienstverleners
                  met lage orderwaarden. Een verbouwingsopdracht heeft een hoge waarde, wat betekent dat je
                  hogere klikkosten kunt rechtvaardigen als de campagne goed is opgezet.
                </p>
                <p>
                  Wij bouwen campagnes die aansluiten bij de zoekintentie van jouw klant. Van iemand die
                  vergelijkt tot iemand die klaar is om een offerte aan te vragen. Per fase een andere
                  advertentie, per fase een andere landingspagina.
                </p>

                <div className="service-features">
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Zoekwoorden met koopintentie</h4>
                      <p>
                        We richten ons op termen die aangevers dat iemand klaar is om te handelen, niet
                        op generieke termen die alleen verkeer opleveren.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Regionale targeting</h4>
                      <p>
                        Je advertentie verschijnt alleen in de steden en regio&apos;s waar jij actief bent.
                        Geen verspild budget aan gebieden buiten je werkgebied.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Conversiegerichte landingspagina&apos;s</h4>
                      <p>
                        Specifieke pagina&apos;s per dienst die bezoekers omzetten in concrete aanvragen.
                        Niet de homepage, maar de juiste pagina.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Maandelijkse rapportage</h4>
                      <p>
                        Je weet altijd hoeveel je uitgeeft, hoeveel aanvragen je krijgt en wat de
                        kosten per lead zijn.
                      </p>
                    </div>
                  </div>
                </div>

                <Link href="/afspraak" className="btn btn--blue btn--lg">
                  Plan een gratis gesprek {arrowIcon}
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <div className="service-detail__visual">
                <div className="service-visual-card">
                  <div className="service-visual-card__glow" />
                  <div className="service-visual-card__stat">
                    <span className="service-visual-card__number">100+</span>
                    <span className="service-visual-card__label">Aanvragen gegenereerd via Google Ads</span>
                  </div>
                  <div className="service-visual-card__bar">
                    <div className="bar" style={{ width: "88%" }} />
                  </div>
                  <div className="service-visual-card__stat">
                    <span className="service-visual-card__number">€69</span>
                    <span className="service-visual-card__label">Laagste kosten per aanvraag</span>
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

      <section className="cta-section">
        <div className="cta-section__glow cta-section__glow--1" aria-hidden="true" />
        <div className="cta-section__glow cta-section__glow--2" aria-hidden="true" />
        <div className="container">
          <ScrollReveal>
            <div className="cta-inner">
              <span className="section-label section-label--blue">Aan de slag</span>
              <h2 className="cta-title">Google Ads voor jouw aannemersbedrijf</h2>
              <p className="cta-subtitle">
                Plan een gratis strategiegesprek. We bekijken jouw regio, concurrentie en budget en
                vertellen je eerlijk wat er haalbaar is.
              </p>
              <Link href="/afspraak" className="btn btn--blue btn--xl">
                Plan een gratis gesprek {arrowIcon}
              </Link>
              <p className="cta-disclaimer">Geen verplichtingen. Wel eerlijk advies.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

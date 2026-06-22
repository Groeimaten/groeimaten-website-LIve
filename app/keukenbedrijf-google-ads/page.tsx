import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Google Ads voor Keukenbedrijven | Groeimaten",
  description:
    "Google Ads voor keukenbedrijven die bovenaan willen staan wanneer iemand actief zoekt. Groeimaten beheert campagnes die kwalitatieve aanvragen genereren.",
  alternates: {
    canonical: "https://groeimaten.com/keukenbedrijf-google-ads",
  },
  openGraph: {
    title: "Google Ads voor Keukenbedrijven | Groeimaten",
    description:
      "Google Ads voor keukenbedrijven die structureel kwalitatieve aanvragen willen. Groeimaten is specialist.",
    url: "https://groeimaten.com/keukenbedrijf-google-ads",
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
  name: "Google Ads voor keukenbedrijven",
  provider: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  description:
    "Groeimaten beheert Google Ads campagnes voor keukenbedrijven. Bovenaan staan wanneer iemand zoekt op jouw type keuken in jouw regio.",
  areaServed: { "@type": "Country", name: "Nederland" },
  url: "https://groeimaten.com/keukenbedrijf-google-ads",
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://groeimaten.com" },
    { "@type": "ListItem", position: 2, name: "Google Ads keukenbedrijf", item: "https://groeimaten.com/keukenbedrijf-google-ads" },
  ],
}

export default function KeukenbedrijfGoogleAdsPage() {
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
                <span className="section-label">Google Ads keukenbedrijf</span>
                <h1 className="page-hero__title">
                  Google Ads voor keukenbedrijven
                  <br />
                  <em>die willen groeien.</em>
                </h1>
                <p className="page-hero__subtitle">
                  Iemand die zoekt op &ldquo;keukenbedrijf [jouw stad]&rdquo; heeft al een behoefte. Jij moet er zijn op dat moment. Groeimaten bouwt en beheert Google Ads campagnes die precies dat doen.
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
                  Google Ads die aanvragen genereert, geen klikken
                </h2>
                <p>
                  Veel keukenbedrijven hebben al een keer geprobeerd met Google Ads maar zagen weinig resultaat. Het probleem zit zelden in het budget. Het zit in de opzet: te brede zoekwoorden, een landingspagina die niet converteert of een campagnestructuur die niet is ingericht voor de keukenbranche.
                </p>
                <p>
                  Groeimaten werkt uitsluitend voor keuken en sanitairbedrijven. We weten welke zoekwoorden koopklare klanten gebruiken, welke landingspagina teksten converteren en hoe je negatieve zoekwoorden inricht zodat je geen geld verspilt aan irrelevant verkeer.
                </p>

                <div className="service-features">
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Zoekwoordstrategie op maat</h4>
                      <p>
                        Alleen de zoekwoorden die koopklare klanten in jouw regio gebruiken. Geen verspild budget.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Conversiegerichte landingspagina</h4>
                      <p>
                        Een pagina die aansluit bij de zoekintentie en bezoekers omzet in concrete aanvragen.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Doorlopend campagnebeheer</h4>
                      <p>
                        Wekelijkse optimalisatie, A/B-tests en rapportage. Elke maand betere resultaten.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Lokale en regionale targeting</h4>
                      <p>
                        Zichtbaar in jouw verzorgingsgebied op het moment dat iemand actief zoekt naar jouw type keuken.
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
                  <div className="seo-ranking">
                    <div className="seo-ranking__item seo-ranking__item--1">
                      <span className="seo-rank">#1</span>
                      <span className="seo-term">keukenbedrijf amsterdam</span>
                      <span className="seo-trend seo-trend--up">↑ Ads</span>
                    </div>
                    <div className="seo-ranking__item seo-ranking__item--2">
                      <span className="seo-rank">#1</span>
                      <span className="seo-term">maatwerk keuken laten maken</span>
                      <span className="seo-trend seo-trend--up">↑ Ads</span>
                    </div>
                    <div className="seo-ranking__item seo-ranking__item--3">
                      <span className="seo-rank">#1</span>
                      <span className="seo-term">keukenstudio rotterdam</span>
                      <span className="seo-trend seo-trend--up">↑ Ads</span>
                    </div>
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
                Geen bureau dat ook bakkerijen bedient
              </h2>
              <p style={{ color: "oklch(68% 0 0)", lineHeight: "1.75", marginBottom: "24px" }}>
                Groeimaten werkt uitsluitend voor keuken en sanitairbedrijven. We kennen de zoekintentie van jouw klant, het seizoensritme in de keukenbranche en de advertentieteksten die aanzetten tot een afspraak. Dag één direct aan de slag, zonder leercurve.
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

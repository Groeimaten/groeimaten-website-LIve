import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Marketing voor Tegelzettersbedrijven | Groeimaten",
  description:
    "Groeimaten verzorgt marketing voor tegelzettersbedrijven: meer aanvragen, betere online zichtbaarheid en een website die jouw vakmanschap laat zien. Specialist in de sanitaire sector.",
  alternates: {
    canonical: "https://groeimaten.com/tegelzettersbedrijf-marketing",
  },
  openGraph: {
    title: "Marketing voor Tegelzettersbedrijven | Groeimaten",
    description:
      "Groeimaten verzorgt marketing voor tegelzettersbedrijven: meer aanvragen en betere online zichtbaarheid.",
    url: "https://groeimaten.com/tegelzettersbedrijf-marketing",
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
  name: "Marketing voor tegelzettersbedrijven",
  provider: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  description:
    "Groeimaten levert marketing voor tegelzettersbedrijven: SEO, Google Ads, website development en advertenties specifiek voor de tegelsector.",
  areaServed: { "@type": "Country", name: "Nederland" },
  url: "https://groeimaten.com/tegelzettersbedrijf-marketing",
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://groeimaten.com" },
    { "@type": "ListItem", position: 2, name: "Marketing tegelzettersbedrijf", item: "https://groeimaten.com/tegelzettersbedrijf-marketing" },
  ],
}

export default function TegelzettersbedrijfMarketingPage() {
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
                <span className="section-label">Tegelzettersbedrijf marketing</span>
                <h1 className="page-hero__title">
                  Marketing voor tegelzettersbedrijven
                  <br />
                  <em>die meer werk willen.</em>
                </h1>
                <p className="page-hero__subtitle">
                  Tegelzettersbedrijven werken met visueel overtuigende resultaten maar zijn online vaak moeilijk te vinden. Groeimaten maakt jouw vakmanschap zichtbaar voor de mensen die actief zoeken naar een tegelzetter in jouw regio.
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
                  Online zichtbaarheid voor tegelzettersbedrijven
                </h2>
                <p>
                  Iemand die een tegelzetter zoekt typt dat in Google. &ldquo;Tegelzetter [stad]&rdquo;, &ldquo;badkamer betegelen laten&rdquo; of &ldquo;tegels leggen keuken.&rdquo; Als jij daar niet verschijnt, bestaat je niet voor die persoon. Groeimaten zorgt dat jij er wel bent op die cruciale momenten.
                </p>
                <p>
                  We combineren lokale SEO met Google Ads en een conversiegerichte website die jouw projectfoto&apos;s optimaal laat zien. Want tegelen is visueel vakmanschap. Die visuele kracht moet ook online werken.
                </p>

                <div className="service-features">
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Lokale SEO voor tegelzetters</h4>
                      <p>
                        Google Mijn Bedrijf en lokale zoektermen zodat je gevonden wordt in jouw werkgebied.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Google Ads voor directe aanvragen</h4>
                      <p>
                        Bovenaan verschijnen wanneer iemand actief zoekt naar een tegelzetter in jouw regio.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Website met projectgalerij</h4>
                      <p>
                        Een conversiegerichte website die jouw tegelprojecten laat zien en bezoekers omzet in aanvragen.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Reviews en reputatiemanagement</h4>
                      <p>
                        Tevreden klanten omzetten in Google-reviews die jouw positie en geloofwaardigheid versterken.
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
                    <span className="service-visual-card__label">bedrijven in keuken, bad en tegel geholpen</span>
                  </div>
                  <div className="service-visual-card__bar">
                    <div className="bar" style={{ width: "90%" }} />
                  </div>
                  <div className="service-visual-card__stat">
                    <span className="service-visual-card__number">100%</span>
                    <span className="service-visual-card__label">sectorspecialist, geen andere branches</span>
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
              <span className="section-label">Sectorkennis</span>
              <h2 className="section-title section-title--white">
                Marketing voor tegelbedrijven die werkt
              </h2>
              <p style={{ color: "oklch(68% 0 0)", lineHeight: "1.75", marginBottom: "24px" }}>
                Groeimaten heeft klanten zoals Tile Stones en Ter Haar Tegeltechniek geholpen groeien met een moderne website en gerichte marketing. We kennen de uitdagingen van tegelbedrijven en weten welke aanpak resultaat oplevert.
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

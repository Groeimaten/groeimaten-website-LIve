import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Lokale SEO voor aannemers: gevonden worden in jouw werkgebied",
  description:
    "Aannemers werken regionaal. Lokale SEO voor aannemers zorgt dat je gevonden wordt in jouw werkgebied, op de momenten dat potentiële opdrachtgevers actief zoeken.",
  alternates: {
    canonical: "https://groeimaten.com/lokale-seo-aannemers",
  },
  openGraph: {
    title: "Lokale SEO voor aannemers: gevonden worden in jouw werkgebied",
    description:
      "Lokale SEO voor aannemers zorgt dat je gevonden wordt in jouw regio, op het moment dat opdrachtgevers actief zoeken.",
    url: "https://groeimaten.com/lokale-seo-aannemers",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lokale SEO voor aannemers: gevonden worden in jouw werkgebied",
    description: "Lokale SEO voor aannemers zorgt dat je gevonden wordt in jouw regio, op het moment dat opdrachtgevers actief zoeken.",
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
  name: "Lokale SEO voor aannemers",
  provider: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  description:
    "Groeimaten verzorgt lokale SEO voor aannemers: technische optimalisatie, lokale zoekwoordenstrategie, Google Mijn Bedrijf en conversiegerichte pagina-opbouw per werkgebied.",
  areaServed: { "@type": "Country", name: "Nederland" },
  url: "https://groeimaten.com/lokale-seo-aannemers",
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://groeimaten.com" },
    { "@type": "ListItem", position: 2, name: "Lokale SEO voor aannemers", item: "https://groeimaten.com/lokale-seo-aannemers" },
  ],
}

export default function LokaleSeoAannemersPage() {
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
                <span className="section-label">Lokale SEO aannemers</span>
                <h1 className="page-hero__title">
                  Lokale SEO voor aannemers
                  <br />
                  <em>die regionaal willen groeien.</em>
                </h1>
                <p className="page-hero__subtitle">
                  De meeste aannemers werken in een bepaalde regio. Groeimaten zorgt dat je gevonden
                  wordt op de zoektermen die tellen in jouw werkgebied, zodat potentiële opdrachtgevers
                  jou vinden voordat ze bij een concurrent belanden.
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
                <span className="section-label">Wat wij doen</span>
                <h2 className="section-title section-title--white">
                  SEO die aannemers begrijpt
                </h2>
                <p>
                  Lokale SEO voor aannemers werkt anders dan generieke SEO. Iemand in Arnhem zoekt
                  geen aannemer in Groningen. Hij zoekt iemand die in zijn regio werkt, die zijn type
                  opdrachten uitvoert en die betrouwbaar oogt. Groeimaten richt SEO in op dat specifieke
                  zoekgedrag.
                </p>
                <p>
                  Dat betekent: aparte pagina&apos;s per dienst en per werkgebied, een sterk Google
                  Mijn Bedrijf-profiel, technisch correcte website-opbouw en inhoud die aansluit op
                  wat potentiële opdrachtgevers daadwerkelijk intikken. Geen generieke teksten maar
                  specifieke, relevante informatie die Google en de bezoeker begrijpen.
                </p>

                <div className="service-features">
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Zoekwoordenonderzoek per regio</h4>
                      <p>
                        We brengen in kaart op welke termen jouw potentiële opdrachtgevers zoeken
                        in jouw specifieke werkgebied.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Google Mijn Bedrijf optimalisatie</h4>
                      <p>
                        Een volledig en actief Google Mijn Bedrijf-profiel zorgt voor zichtbaarheid
                        in het lokale kaartblok, boven de organische resultaten.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Pagina&apos;s per dienst en locatie</h4>
                      <p>
                        Voor elke dienst en elk werkgebied een eigen pagina, zodat Google weet
                        waarvoor je relevant bent en je voor meerdere termen gevonden wordt.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Technische SEO en snelheid</h4>
                      <p>
                        Een technisch correcte website die snel laadt op mobiel is de basis van
                        elke SEO-aanpak die structureel werkt.
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
                    <span className="service-visual-card__label">bedrijven in bouw en installatie geholpen</span>
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
                    <span className="service-visual-card__label">Google review score Groeimaten</span>
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
                Hoe goed word jij nu gevonden?
              </h2>
              <p style={{ color: "oklch(68% 0 0)", lineHeight: "1.75", marginBottom: "24px" }}>
                Plan een gratis gesprek en we analyseren jouw huidige vindbaarheid in jouw werkgebied.
                Je ziet concreet waar je staat en wat er beter kan. Groeimaten werkt uitsluitend voor
                bedrijven in bouw, installatie, keuken en sanitair.
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

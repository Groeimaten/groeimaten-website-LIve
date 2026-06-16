import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "SEO voor Badkamerbedrijven | Groeimaten",
  description:
    "Groeimaten verzorgt SEO voor badkamerbedrijven in Nederland. Gevonden worden door koopklare klanten die zoeken naar badkamerrenovatie of een nieuwe badkamer.",
  alternates: {
    canonical: "https://groeimaten.com/badkamerbedrijf-seo",
  },
  openGraph: {
    title: "SEO voor Badkamerbedrijven | Groeimaten",
    description:
      "Groeimaten verzorgt SEO voor badkamerbedrijven. Gevonden worden door koopklare klanten die zoeken naar badkamerrenovatie.",
    url: "https://groeimaten.com/badkamerbedrijf-seo",
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
  name: "SEO voor Badkamerbedrijven",
  provider: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  description:
    "SEO voor badkamerbedrijven: lokale en nationale zichtbaarheid voor keuken- en sanitairbedrijven in Nederland.",
  areaServed: { "@type": "Country", name: "Nederland" },
  url: "https://groeimaten.com/badkamerbedrijf-seo",
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://groeimaten.com" },
    {
      "@type": "ListItem",
      position: 2,
      name: "SEO voor badkamerbedrijven",
      item: "https://groeimaten.com/badkamerbedrijf-seo",
    },
  ],
}

export default function BadkamerbedrijfSeoPage() {
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
                <span className="section-label">SEO voor de sanitairbranche</span>
                <h1 className="page-hero__title">
                  SEO voor badkamerbedrijven:
                  <br />
                  <em>gevonden door koopklare klanten.</em>
                </h1>
                <p className="page-hero__subtitle">
                  Mensen die zoeken op &ldquo;badkamerrenovatie [stad]&rdquo; zijn klaar om te investeren.
                  Groeimaten zorgt dat jij er staat op het moment dat ze zoeken.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "28px" }}>
                  <Link href="/afspraak" className="btn btn--blue btn--lg">
                    Gratis SEO-check {arrowIcon}
                  </Link>
                  <Link href="/diensten#seo" className="btn btn--ghost btn--lg">
                    Meer over SEO
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
                  SEO voor badkamerbedrijven die structureel willen groeien
                </h2>
                <p>
                  SEO voor badkamerbedrijven is anders dan generieke SEO. Klanten oriënteren lokaal en
                  regionaal, het koopproces duurt weken tot maanden, en vertrouwen is cruciaal voordat
                  iemand een afspraak maakt. Wij kennen die dynamiek en passen onze aanpak daar op aan.
                </p>
                <p>
                  Onze SEO voor badkamerbedrijven richt zich op de zoekwoorden die ertoe doen: lokale
                  zoekopdrachten per stad en regio, service-specifieke termen en merknamen. Geen generieke
                  teksten, maar content die aansluit bij wat jouw klant typt in de zoekbalk.
                </p>

                <div className="service-features">
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Lokale SEO per stad en regio</h4>
                      <p>
                        Zichtbaar in Google voor &ldquo;badkamerbedrijf [jouw stad]&rdquo; en alle
                        omliggende plaatsen in jouw werkgebied.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Google Mijn Bedrijf optimalisatie</h4>
                      <p>
                        Een volledig en actief GMB-profiel dat bovenaan staat in de lokale zoekresultaten
                        en Maps.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Technische SEO en snelheid</h4>
                      <p>
                        Een snelle, technisch correcte website is de basis. We zorgen dat Google jouw
                        website goed kan lezen en indexeren.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>AI-zoekoptimalisatie</h4>
                      <p>
                        Zichtbaar in ChatGPT, Gemini en Copilot. De toekomst van zoeken is nu, wij
                        bereiden jouw badkamerbedrijf voor.
                      </p>
                    </div>
                  </div>
                </div>

                <Link href="/afspraak" className="btn btn--blue btn--lg">
                  Plan een gratis SEO-gesprek {arrowIcon}
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
                      <span className="seo-term">badkamerbedrijf amsterdam</span>
                      <span className="seo-trend seo-trend--up">↑ 18</span>
                    </div>
                    <div className="seo-ranking__item seo-ranking__item--2">
                      <span className="seo-rank">#2</span>
                      <span className="seo-term">badkamerrenovatie offerte</span>
                      <span className="seo-trend seo-trend--up">↑ 11</span>
                    </div>
                    <div className="seo-ranking__item seo-ranking__item--3">
                      <span className="seo-rank">#1</span>
                      <span className="seo-term">nieuwe badkamer laten plaatsen</span>
                      <span className="seo-trend seo-trend--up">↑ 14</span>
                    </div>
                    <div className="seo-ranking__item">
                      <span className="seo-rank">#3</span>
                      <span className="seo-term">badkamer showroom den haag</span>
                      <span className="seo-trend seo-trend--up">↑ 9</span>
                    </div>
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
              <span className="section-label section-label--blue">Klaar om te starten?</span>
              <h2 className="cta-title">Gratis SEO-analyse voor jouw badkamerbedrijf</h2>
              <p className="cta-subtitle">
                We bekijken je huidige vindbaarheid en vertellen je eerlijk wat er beter kan. Geen
                verplichtingen.
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

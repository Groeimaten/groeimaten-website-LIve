import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "SEO voor interieurontwerpers: gevonden worden door de juiste klanten | Groeimaten",
  description:
    "SEO voor interieurontwerpers die structureel aanvragen willen van serieuze klanten. Groeimaten helpt interieurontwerpers hoger ranken op Google en meer opdrachten binnenhalen.",
  alternates: {
    canonical: "https://groeimaten.com/seo-interieurontwerpers",
  },
  openGraph: {
    title: "SEO voor interieurontwerpers | Groeimaten",
    description:
      "Groeimaten helpt interieurontwerpers hoger ranken op Google en aanvragen ophalen van serieuze klanten.",
    url: "https://groeimaten.com/seo-interieurontwerpers",
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
  name: "SEO voor interieurontwerpers",
  provider: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  description:
    "Groeimaten helpt interieurontwerpers hoger ranken op Google en structureel aanvragen genereren van serieuze klanten.",
  areaServed: { "@type": "Country", name: "Nederland" },
  url: "https://groeimaten.com/seo-interieurontwerpers",
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://groeimaten.com" },
    { "@type": "ListItem", position: 2, name: "SEO voor interieurontwerpers", item: "https://groeimaten.com/seo-interieurontwerpers" },
  ],
}

export default function SeoInterieurontwerpersPage() {
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
                <span className="section-label">SEO voor interieurontwerpers</span>
                <h1 className="page-hero__title">
                  SEO voor interieurontwerpers:
                  <br />
                  <em>gevonden worden op Google.</em>
                </h1>
                <p className="page-hero__subtitle">
                  Interieurontwerpers worden grotendeels gevonden via aanbevelingen en portfolio&apos;s.
                  SEO voegt daar een structurele instroom aan toe: mensen die actief zoeken naar een
                  interieurontwerper in hun regio en jou vinden voordat ze bij de concurrent aankomen.
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
                <span className="section-label">Wat SEO doet</span>
                <h2 className="section-title section-title--white">
                  Organische aanvragen van klanten die al zoeken
                </h2>
                <p>
                  Mensen die een interieurontwerper zoeken via Google, hebben doorgaans een serieuze
                  behoefte. Ze zijn bezig met een verbouwing, een nieuwbouwproject of een volledige
                  herinrichting van de woning. Dat zijn aanvragen met een hoge waarde.
                </p>
                <p>
                  SEO zorgt dat jij zichtbaar bent op het moment dat die persoon zoekt. Niet via
                  betaalde advertenties, maar via organische vindbaarheid die ook blijft werken als
                  het advertentiebudget stopt. Een goede positie bouw je één keer op en profiteer je
                  jarenlang van.
                </p>

                <div className="service-features">
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Lokale SEO per regio en stad</h4>
                      <p>
                        Gevonden worden voor &ldquo;interieurontwerper [stad]&rdquo; of &ldquo;interieuradvies
                        [regio]&rdquo;. Aanvragen uit het werkgebied dat jij bedient.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Portfolio-pagina&apos;s die scoren</h4>
                      <p>
                        Projectpagina&apos;s die zowel bezoekers overtuigen als goed scoren op
                        Google. Jouw werk als basis voor organische vindbaarheid.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Google Mijn Bedrijf optimalisatie</h4>
                      <p>
                        Volledig ingericht profiel zodat je zichtbaar bent in het lokale
                        kaartresultaat bij mensen die zoeken in jouw stad of regio.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Technische SEO-basis</h4>
                      <p>
                        Snelle website, correcte structuur en meta-informatie die Google vertelt
                        waar jouw bureau over gaat en wie jouw klant is.
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
                    <span className="service-visual-card__label">websites voor keuken, badkamer en interieur</span>
                  </div>
                  <div className="service-visual-card__bar">
                    <div className="bar" style={{ width: "88%" }} />
                  </div>
                  <div className="service-visual-card__stat">
                    <span className="service-visual-card__number">100%</span>
                    <span className="service-visual-card__label">focus op woning- en interieurbranche</span>
                  </div>
                  <div className="service-visual-card__bar bar--green">
                    <div className="bar" style={{ width: "100%" }} />
                  </div>
                  <div className="service-visual-card__stat">
                    <span className="service-visual-card__number">5,0</span>
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
              <span className="section-label">Begin hier</span>
              <h2 className="section-title section-title--white">
                Plan een gratis gesprek
              </h2>
              <p style={{ color: "oklch(68% 0 0)", lineHeight: "1.75", marginBottom: "24px" }}>
                We kijken naar jouw huidige online aanwezigheid en geven een eerlijk beeld van
                wat SEO voor jouw interieurbureau kan opleveren.
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

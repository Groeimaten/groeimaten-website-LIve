import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Marketing voor CV-installateurs | Groeimaten",
  description:
    "Meer aanvragen voor jouw cv-installatiebedrijf via gerichte online marketing. Groeimaten helpt cv-installateurs met SEO, Google Ads en een website die klanten aantrekt.",
  alternates: {
    canonical: "https://groeimaten.com/cv-installateur-marketing",
  },
  openGraph: {
    title: "Marketing voor CV-installateurs | Groeimaten",
    description:
      "Groeimaten helpt cv-installateurs met gerichte online marketing die structureel aanvragen oplevert.",
    url: "https://groeimaten.com/cv-installateur-marketing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketing voor CV-installateurs | Groeimaten",
    description: "Groeimaten helpt cv-installateurs met gerichte online marketing die structureel aanvragen oplevert.",
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
  name: "Marketing voor cv-installateurs",
  provider: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  description:
    "Groeimaten helpt cv-installatiebedrijven met gerichte online marketing: SEO voor geplande projecten, Google Ads voor spoedopdrachten en een website die aanvragen genereert.",
  areaServed: { "@type": "Country", name: "Nederland" },
  url: "https://groeimaten.com/cv-installateur-marketing",
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://groeimaten.com" },
    { "@type": "ListItem", position: 2, name: "Marketing voor cv-installateurs", item: "https://groeimaten.com/cv-installateur-marketing" },
  ],
}

export default function CvInstallateurMarketingPage() {
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
                <span className="section-label">CV-installateur marketing</span>
                <h1 className="page-hero__title">
                  Marketing voor
                  <br />
                  <em>cv-installateurs.</em>
                </h1>
                <p className="page-hero__subtitle">
                  CV-installateurs werken voor spoedgevallen en geplande vervangingen. Beide
                  vragen een andere marketingaanpak. Groeimaten zorgt dat je voor beide gevonden
                  wordt en je agenda structureel gevuld blijft.
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
                  Meer klanten voor jouw cv-bedrijf
                </h2>
                <p>
                  Een cv-ketelstoring in januari levert andere zoekopdrachten op dan een klant
                  die zijn ketel wil vervangen na tien jaar trouwe dienst. Groeimaten richt
                  marketing in die voor beide situaties werkt: directe bereikbaarheid bij spoed,
                  structurele vindbaarheid voor geplande vervangingen.
                </p>
                <p>
                  We werken uitsluitend voor bedrijven in de installatie, bouw en renovatiesector.
                  We kennen de werkwijze, het beslisproces van de klant en de zoektermen die
                  ertoe doen.
                </p>

                <div className="service-features">
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Google Ads voor spoedopdrachten</h4>
                      <p>
                        Bovenaan staan bij zoekopdrachten als &ldquo;cv-ketel storing [stad]&rdquo;
                        en &ldquo;cv-installateur spoed [regio]&rdquo; op het moment dat het nodig is.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>SEO voor geplande vervanging</h4>
                      <p>
                        Organische positie op termen als &ldquo;cv-ketel vervangen [stad]&rdquo;
                        en &ldquo;nieuwe cv-installatie offerte aanvragen&rdquo;.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Website die klanten overtuigt</h4>
                      <p>
                        Een professionele site met reviews, werkgebied en klikbaar telefoonnummer.
                        Snel laden op mobiel, want cv-storingen worden op de telefoon gegoogeld.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Google Mijn Bedrijf actief houden</h4>
                      <p>
                        Een volledig profiel met actuele informatie, foto&apos;s en een actieve
                        reviewscore zorgt voor extra zichtbaarheid in het lokale kaartblok.
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
                    <span className="service-visual-card__label">installatiebedrijven geholpen met marketing</span>
                  </div>
                  <div className="service-visual-card__bar">
                    <div className="bar" style={{ width: "90%" }} />
                  </div>
                  <div className="service-visual-card__stat">
                    <span className="service-visual-card__number">100%</span>
                    <span className="service-visual-card__label">sectorspecialist installatie en bouw</span>
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
              <span className="section-label">Begin hier</span>
              <h2 className="section-title section-title--white">
                Plan een gratis gesprek
              </h2>
              <p style={{ color: "oklch(68% 0 0)", lineHeight: "1.75", marginBottom: "24px" }}>
                We kijken naar jouw cv-installatiebedrijf, jouw werkgebied en de huidige
                marketingsituatie. Op basis daarvan krijg je een concreet voorstel.
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

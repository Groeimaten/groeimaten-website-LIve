import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Marketing voor schildersbedrijf: meer aanvragen via Google en advertenties | Groeimaten",
  description:
    "Marketing voor een schildersbedrijf die écht aanvragen oplevert. Groeimaten helpt schildersbedrijven groeien via SEO, Google Ads en een website die converteert.",
  alternates: {
    canonical: "https://groeimaten.com/schildersbedrijf-marketing",
  },
  openGraph: {
    title: "Marketing voor schildersbedrijf | Groeimaten",
    description:
      "Groeimaten helpt schildersbedrijven meer aanvragen genereren via Google en advertenties.",
    url: "https://groeimaten.com/schildersbedrijf-marketing",
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
  name: "Marketing voor schildersbedrijf",
  provider: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  description:
    "Groeimaten helpt schildersbedrijven groeien via SEO, Google Ads en websites die aanvragen genereren.",
  areaServed: { "@type": "Country", name: "Nederland" },
  url: "https://groeimaten.com/schildersbedrijf-marketing",
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://groeimaten.com" },
    { "@type": "ListItem", position: 2, name: "Marketing schildersbedrijf", item: "https://groeimaten.com/schildersbedrijf-marketing" },
  ],
}

export default function SchildersbedrijfMarketingPage() {
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
                <span className="section-label">Marketing voor schildersbedrijf</span>
                <h1 className="page-hero__title">
                  Marketing voor een schildersbedrijf
                  <br />
                  <em>die aanvragen oplevert.</em>
                </h1>
                <p className="page-hero__subtitle">
                  Schildersbedrijven werken veel via mond-tot-mondreclame. Dat werkt goed zolang
                  het netwerk actief is. Marketing via Google en advertenties geeft een tweede
                  instroom die dat netwerk aanvult, ook in rustiger periodes.
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
                  Online marketing voor schildersbedrijven die structureel groeit
                </h2>
                <p>
                  Een schildersbedrijf dat gevonden wordt op Google trekt aanvragen van mensen die
                  actief op zoek zijn naar een schilder. Die aanvragen zijn warm: de persoon heeft
                  al een behoefte en zoekt iemand die hij kan vertrouwen. Een goede online aanwezigheid
                  zorgt dat jij die vertrouwde keuze bent.
                </p>
                <p>
                  Groeimaten combineert SEO, Google Ads en een professionele website voor schildersbedrijven
                  die willen groeien. Elke aanpak staat op zichzelf maar versterkt de andere.
                </p>

                <div className="service-features">
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Lokale SEO voor schilders</h4>
                      <p>
                        Gevonden worden voor &ldquo;schilder [stad]&rdquo; of &ldquo;schildersbedrijf
                        [regio]&rdquo;. Aanvragen uit jouw werkgebied, van mensen die zoeken.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Google Ads voor directe aanvragen</h4>
                      <p>
                        Campagnes die direct starten en aanvragen opleveren. Zichtbaar bovenaan
                        Google op het moment dat iemand zoekt naar een schilder.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Website die vertrouwen opbouwt</h4>
                      <p>
                        Foto&apos;s van afgerond werk, duidelijk werkgebied en klantreviews. Alles
                        wat iemand nodig heeft om de knoop door te hakken en te bellen.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Meta Ads voor meer bereik</h4>
                      <p>
                        Facebook en Instagram-advertenties die huiseigenaren in jouw regio bereiken
                        die nog niet actief zoeken maar wél interesse hebben.
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
                    <span className="service-visual-card__label">websites voor keuken, badkamer en bouw</span>
                  </div>
                  <div className="service-visual-card__bar">
                    <div className="bar" style={{ width: "88%" }} />
                  </div>
                  <div className="service-visual-card__stat">
                    <span className="service-visual-card__number">100%</span>
                    <span className="service-visual-card__label">focus op de bouwsector</span>
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
                We kijken naar jouw huidige situatie en jouw werkgebied. Daarna krijg je een concreet
                beeld van welke aanpak het meeste oplevert voor jouw schildersbedrijf.
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

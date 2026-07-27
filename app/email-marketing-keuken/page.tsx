import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Email marketing voor de keukenbranche | Groeimaten",
  description:
    "Email marketing voor keukenstudio's en keukenbedrijven houdt warme leads warm totdat ze klaar zijn voor een afspraak. Hoe richt je een effectieve emailstrategie in?",
  alternates: {
    canonical: "https://groeimaten.com/email-marketing-keuken",
  },
  openGraph: {
    title: "Email marketing voor de keukenbranche | Groeimaten",
    description:
      "Groeimaten helpt keukenstudio's met email marketing die warme leads begeleidt naar een showroomafspraak.",
    url: "https://groeimaten.com/email-marketing-keuken",
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
  name: "Email marketing keukenbranche",
  provider: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  description:
    "Groeimaten helpt keukenstudio's en keukenbedrijven met email marketing die warme leads begeleidt naar een showroomafspraak.",
  areaServed: { "@type": "Country", name: "Nederland" },
  url: "https://groeimaten.com/email-marketing-keuken",
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://groeimaten.com" },
    { "@type": "ListItem", position: 2, name: "Email marketing keuken", item: "https://groeimaten.com/email-marketing-keuken" },
  ],
}

export default function EmailMarketingKeukenPage() {
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
                <span className="section-label">Email marketing keukenbranche</span>
                <h1 className="page-hero__title">
                  Email marketing voor
                  <br />
                  <em>keukenstudio&apos;s.</em>
                </h1>
                <p className="page-hero__subtitle">
                  Een keukenaankoop duurt maanden. Iemand die vandaag interesse toont, is pas over drie maanden
                  klaar voor een afspraak. Email marketing houdt die lead warm en zorgt dat jij top-of-mind
                  bent op het moment dat ze beslissen.
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
                <span className="section-label">Wat wij opzetten</span>
                <h2 className="section-title section-title--white">
                  Van interesse naar showroomafspraak
                </h2>
                <p>
                  Veel keukenstudio&apos;s verliezen leads die ze al hadden. Iemand vraagt informatie aan, ontvangt
                  een e-mail terug en hoort daarna niets meer. Twee maanden later koopt die persoon een keuken
                  bij de concurrent die wel contact hield. Email marketing voorkomt dat.
                </p>
                <p>
                  Groeimaten zet emailflows op die geautomatiseerd warme leads begeleiden. Van eerste interesse
                  tot herinnering, tot concrete uitnodiging voor een showroombezoek. Relevante content, op het
                  juiste moment, zonder dat het handwerk kost.
                </p>

                <div className="service-features">
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Geautomatiseerde opvolgflows</h4>
                      <p>
                        Na een eerste contactmoment volgt een reeks geautomatiseerde e-mails die de
                        interesse warm houden.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Relevante content per fase</h4>
                      <p>
                        Inspiratie, keuzehulp, praktische tips: de inhoud sluit aan bij waar de lead
                        zich in het beslisproces bevindt.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Uitnodiging voor showroombezoek</h4>
                      <p>
                        Op het juiste moment in de flow een concrete uitnodiging voor een persoonlijk
                        gesprek of showroombezoek.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Meetbaar in resultaten</h4>
                      <p>
                        Open rates, klikraten en conversies bijgehouden, zodat de flows doorlopend
                        verbeterd kunnen worden.
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
                    <span className="service-visual-card__number">100%</span>
                    <span className="service-visual-card__label">focus op keuken, badkamer en bouw</span>
                  </div>
                  <div className="service-visual-card__bar">
                    <div className="bar" style={{ width: "100%" }} />
                  </div>
                  <div className="service-visual-card__stat">
                    <span className="service-visual-card__number">17+</span>
                    <span className="service-visual-card__label">actieve klanten in de sector</span>
                  </div>
                  <div className="service-visual-card__bar bar--green">
                    <div className="bar" style={{ width: "85%" }} />
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
              <span className="section-label">Volgende stap</span>
              <h2 className="section-title section-title--white">
                Plan een gratis gesprek
              </h2>
              <p style={{ color: "oklch(68% 0 0)", lineHeight: "1.75", marginBottom: "24px" }}>
                We bespreken hoe email marketing past in jouw huidige marketingmix en wat een emailflow
                realistisch kan opleveren voor jouw keukenstudio. Groeimaten werkt uitsluitend voor
                keukenstudio&apos;s, badkamerbedrijven en bouwbedrijven.
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

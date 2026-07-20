import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Lead nurturing voor keuken en sanitair | Groeimaten",
  description:
    "Lead nurturing voor keuken en sanitair begeleidt potentiële klanten van eerste interesse naar een concrete afspraak. Hoe zet je een systeem op dat dat automatisch doet?",
  alternates: {
    canonical: "https://groeimaten.com/lead-nurturing-keuken-sanitair",
  },
  openGraph: {
    title: "Lead nurturing voor keuken en sanitair | Groeimaten",
    description:
      "Groeimaten helpt keuken en sanitairbedrijven met lead nurturing die warme contacten omzet in afspraken.",
    url: "https://groeimaten.com/lead-nurturing-keuken-sanitair",
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
  name: "Lead nurturing keuken sanitair",
  provider: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  description:
    "Groeimaten zet lead nurturing systemen op voor keuken- en sanitairbedrijven die warme contacten automatisch begeleiden naar een concrete showroomafspraak.",
  areaServed: { "@type": "Country", name: "Nederland" },
  url: "https://groeimaten.com/lead-nurturing-keuken-sanitair",
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://groeimaten.com" },
    { "@type": "ListItem", position: 2, name: "Lead nurturing keuken sanitair", item: "https://groeimaten.com/lead-nurturing-keuken-sanitair" },
  ],
}

export default function LeadNurturingKeukenSanitairPage() {
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
                <span className="section-label">Lead nurturing keuken en sanitair</span>
                <h1 className="page-hero__title">
                  Van eerste interesse naar
                  <br />
                  <em>showroomafspraak.</em>
                </h1>
                <p className="page-hero__subtitle">
                  In keuken en sanitair duurt het beslisproces maanden. Iemand die vandaag interesse toont
                  koopt pas over vier maanden. Lead nurturing zorgt dat jij op dat moment nog in beeld bent.
                  Groeimaten zet die systemen op.
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
                <span className="section-label">De aanpak</span>
                <h2 className="section-title section-title--white">
                  Leads die je al hebt, beter benutten
                </h2>
                <p>
                  Veel keuken- en sanitairbedrijven focussen op het genereren van nieuwe leads terwijl ze
                  de leads die ze al hebben niet goed opvolgen. Iemand vraagt informatie aan, krijgt
                  misschien één telefoontje en hoort daarna niets meer. Drie maanden later koopt die persoon
                  elders.
                </p>
                <p>
                  Lead nurturing lost dat op. Een geautomatiseerde reeks contactmomenten via e-mail, SMS of
                  WhatsApp houdt de relatie levend gedurende de hele oriëntatiefase. Groeimaten bouwt die
                  flows in GoHighLevel en koppelt ze aan het bestaande leadgeneratiesysteem.
                </p>

                <div className="service-features">
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Geautomatiseerde opvolgflows</h4>
                      <p>
                        Elke nieuwe lead ontvangt automatisch een reeks contactmomenten afgestemd op
                        het aankoopproces in keuken en sanitair.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Meerdere kanalen</h4>
                      <p>
                        E-mail, SMS en WhatsApp gecombineerd voor maximale bereikbaarheid op het moment
                        dat de lead klaar is voor een afspraak.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Inspelend op het beslisproces</h4>
                      <p>
                        De content in de flows sluit aan bij de fase van het beslisproces: inspiratie
                        vroeg, keuzehulp later, actie-uitnodiging op het juiste moment.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Hogere show-up bij afspraken</h4>
                      <p>
                        Automatische herinneringen verhogen de show-up bij showroomafspraken, zodat
                        minder afspraken op het laatste moment afgezegd worden.
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
                    <span className="service-visual-card__number">€69</span>
                    <span className="service-visual-card__label">laagste kosten per showroomafspraak bij klanten</span>
                  </div>
                  <div className="service-visual-card__bar">
                    <div className="bar" style={{ width: "88%" }} />
                  </div>
                  <div className="service-visual-card__stat">
                    <span className="service-visual-card__number">100+</span>
                    <span className="service-visual-card__label">afspraken gegenereerd via geautomatiseerde flows</span>
                  </div>
                  <div className="service-visual-card__bar bar--green">
                    <div className="bar" style={{ width: "94%" }} />
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
                We bespreken hoe lead nurturing in jouw huidige situatie kan werken, welke tools en flows
                daarvoor geschikt zijn en wat een realistisch resultaat is. Groeimaten werkt uitsluitend
                voor keuken-, badkamer- en bouwbedrijven.
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

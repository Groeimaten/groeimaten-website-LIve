import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Meer Showroomafspraken voor Keukenstudio's | Groeimaten",
  description:
    "Meer kwalitatieve showroomafspraken per maand voor keukenstudio's. Groeimaten genereert afspraken die ook echt opdagen, via gerichte advertenties en slimme kwalificatie.",
  alternates: {
    canonical: "https://groeimaten.com/meer-showroomafspraken",
  },
  openGraph: {
    title: "Meer Showroomafspraken voor Keukenstudio's | Groeimaten",
    description:
      "Meer kwalitatieve showroomafspraken per maand. Groeimaten is specialist voor keukenstudio's.",
    url: "https://groeimaten.com/meer-showroomafspraken",
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
  name: "Meer showroomafspraken voor keukenstudio's",
  provider: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  description:
    "Groeimaten helpt keukenstudio's meer kwalitatieve showroomafspraken te genereren via Meta Ads, Google Ads en slimme kwalificatiefunnels.",
  areaServed: { "@type": "Country", name: "Nederland" },
  url: "https://groeimaten.com/meer-showroomafspraken",
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://groeimaten.com" },
    { "@type": "ListItem", position: 2, name: "Meer showroomafspraken", item: "https://groeimaten.com/meer-showroomafspraken" },
  ],
}

export default function MeerShowroomafsprakenPage() {
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
                <span className="section-label">Meer afspraken</span>
                <h1 className="page-hero__title">
                  Meer showroomafspraken.
                  <br />
                  <em>Die ook echt opdagen.</em>
                </h1>
                <p className="page-hero__subtitle">
                  Het gaat niet om het aantal aanvragen. Het gaat om het aantal kwalitatieve showroomafspraken per maand. Groeimaten bouwt systemen die dat onderscheid maken.
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
                  Van aanvraag naar showroomafspraak die opdaagt
                </h2>
                <p>
                  Veel keukenstudio&apos;s hebben hetzelfde probleem: er komen aanvragen binnen maar een groot deel verschijnt niet in de showroom. Of de mensen die komen zijn nog lang niet klaar om te kopen. Dat kost tijd, geld en energie.
                </p>
                <p>
                  Groeimaten lost dit op met een combinatie van gerichte advertenties, kwalificatie voor de afspraak en geautomatiseerde opvolging. Alleen aanvragers die voldoen aan jouw criteria komen in jouw agenda. En die weten ook waarom ze komen.
                </p>

                <div className="service-features">
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Kwalificerende funnel</h4>
                      <p>
                        Aanvragers beantwoorden kwalificatievragen voor de afspraak. Slechte leads haken af, goede leads staan in jouw agenda.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Geautomatiseerde opvolging</h4>
                      <p>
                        Bevestigingen, herinneringen en follow-ups via SMS en e-mail die no-shows drastisch verlagen.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Meta en Google Ads</h4>
                      <p>
                        Gerichte advertenties op het juiste moment voor mensen met de juiste koopintentie in jouw regio.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Maandelijkse rapportage</h4>
                      <p>
                        Inzicht in het aantal afspraken, het opkomstpercentage en de kosten per kwalitatieve afspraak.
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
                    <span className="service-visual-card__label">Laagste kosten per showroomafspraak</span>
                  </div>
                  <div className="service-visual-card__bar">
                    <div className="bar" style={{ width: "90%" }} />
                  </div>
                  <div className="service-visual-card__stat">
                    <span className="service-visual-card__number">90%+</span>
                    <span className="service-visual-card__label">Opkomstpercentage bij afspraken</span>
                  </div>
                  <div className="service-visual-card__bar bar--green">
                    <div className="bar" style={{ width: "92%" }} />
                  </div>
                  <div className="service-visual-card__stat">
                    <span className="service-visual-card__number">100+</span>
                    <span className="service-visual-card__label">Afspraken gegenereerd</span>
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
              <span className="section-label">Resultaat</span>
              <h2 className="section-title section-title--white">
                Voorspelbare groei in plaats van toevallig druk zijn
              </h2>
              <p style={{ color: "oklch(68% 0 0)", lineHeight: "1.75", marginBottom: "24px" }}>
                Een keukenstudio die structureel twaalf kwalitatieve showroomafspraken per maand heeft, groeit anders dan een studio die afhankelijk is van mond-tot-mondreclame. Groeimaten bouwt het systeem dat die voorspelbaarheid geeft.
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

import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Lead generatie voor keukenstudio's | Groeimaten",
  description:
    "Structurele lead generatie voor keukenstudio's via Meta Ads en Google Ads. Groeimaten genereert showroomafspraken van serieuze kopers voor keukenstudio's in Nederland.",
  alternates: {
    canonical: "https://groeimaten.com/lead-generatie-keukenstudio",
  },
  openGraph: {
    title: "Lead generatie voor keukenstudio's | Groeimaten",
    description:
      "Structurele lead generatie voor keukenstudio's via Meta Ads en Google Ads. Showroomafspraken van serieuze kopers.",
    url: "https://groeimaten.com/lead-generatie-keukenstudio",
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
  name: "Lead generatie voor keukenstudio's",
  provider: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  description:
    "Groeimaten verzorgt lead generatie voor keukenstudio's via Meta Ads en Google Ads. Structurele instroom van showroomafspraken van serieuze kopers.",
  areaServed: { "@type": "Country", name: "Nederland" },
  url: "https://groeimaten.com/lead-generatie-keukenstudio",
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://groeimaten.com" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Lead generatie keukenstudio",
      item: "https://groeimaten.com/lead-generatie-keukenstudio",
    },
  ],
}

export default function LeadGeneratieKeukenstudioPage() {
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
                <span className="section-label">Lead generatie keukenstudio</span>
                <h1 className="page-hero__title">
                  Lead generatie voor
                  <br />
                  <em>keukenstudio&apos;s.</em>
                </h1>
                <p className="page-hero__subtitle">
                  Structurele showroomafspraken van kopers die een nieuwe keuken willen. Geen losse campagnes,
                  maar een systeem dat maand na maand kwalitatieve leads genereert.
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
                  Van advertentie tot showroomafspraak
                </h2>
                <p>
                  Een keukenaankoop van 15.000 tot 50.000 euro vraagt om een zorgvuldig ingericht
                  leadgeneratiesysteem. Niet elke klik levert een serieuze koper op. Groeimaten richt
                  campagnes in die gericht zijn op kwaliteit boven kwantiteit.
                </p>
                <p>
                  We combineren Meta Ads voor de oriënterende klant en Google Ads voor wie actief
                  zoekt. Automatische leadopvolging zorgt dat aanvragen snel worden opgevolgd, zodat
                  de klant niet naar een concurrent gaat terwijl jij nog reageert.
                </p>

                <div className="service-features">
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Meta Ads campagnes</h4>
                      <p>
                        Gerichte campagnes op Facebook en Instagram die keukenstudio bezoekers bereiken
                        in de oriëntatiefase, op het juiste moment in het aankoopproces.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Google Ads voor koopklare zoekers</h4>
                      <p>
                        Bovenaan verschijnen wanneer iemand actief zoekt op &ldquo;keukenstudio [stad]&rdquo;
                        of &ldquo;nieuwe keuken laten plaatsen.&rdquo;
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Leadopvolging en kwalificatie</h4>
                      <p>
                        Automatische opvolging van nieuwe aanvragen zodat geen lead verloren gaat en
                        de afspraakratio hoog blijft.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Maandelijkse rapportage</h4>
                      <p>
                        Inzicht in kosten per lead, kosten per afspraak en het totale rendement van
                        de campagnes per maand.
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
                    <span className="service-visual-card__number">49</span>
                    <span className="service-visual-card__label">afspraken in 10 maanden (Stoop Keukens)</span>
                  </div>
                  <div className="service-visual-card__bar">
                    <div className="bar" style={{ width: "90%" }} />
                  </div>
                  <div className="service-visual-card__stat">
                    <span className="service-visual-card__number">€69</span>
                    <span className="service-visual-card__label">gemiddelde kosten per showroomafspraak</span>
                  </div>
                  <div className="service-visual-card__bar bar--green">
                    <div className="bar" style={{ width: "75%" }} />
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
              <span className="section-label">Uitsluitend keukensector</span>
              <h2 className="section-title section-title--white">
                Geen generiek bureau. Een specialist.
              </h2>
              <p style={{ color: "oklch(68% 0 0)", lineHeight: "1.75", marginBottom: "24px" }}>
                Groeimaten werkt uitsluitend voor keuken en sanitairbedrijven. We weten wat jouw klant
                beweegt, hoe lang het beslisproces duurt en welke advertentie-aanpak leidt tot een
                kwalitatieve showroomafspraak. Geen leercurve. Dag één aan de slag.
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

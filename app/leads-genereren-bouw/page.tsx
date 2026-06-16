import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Leads Genereren Bouwsector | Groeimaten",
  description:
    "Groeimaten helpt bouwbedrijven structureel kwalitatieve leads te genereren. Van advertenties tot geautomatiseerde opvolging. Minder afhankelijkheid, meer grip.",
  alternates: {
    canonical: "https://groeimaten.com/leads-genereren-bouw",
  },
  openGraph: {
    title: "Leads Genereren Bouwsector | Groeimaten",
    description:
      "Groeimaten helpt bouwbedrijven structureel kwalitatieve leads genereren. Minder afhankelijkheid van mond-tot-mond, meer grip op groei.",
    url: "https://groeimaten.com/leads-genereren-bouw",
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
  name: "Leads genereren voor bouwbedrijven",
  provider: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  description:
    "Groeimaten verzorgt leadgeneratie voor bouwbedrijven, aannemers en installateurs in Nederland via Meta Ads, Google Ads en geautomatiseerde opvolging.",
  areaServed: { "@type": "Country", name: "Nederland" },
  url: "https://groeimaten.com/leads-genereren-bouw",
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://groeimaten.com" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Leads genereren bouwsector",
      item: "https://groeimaten.com/leads-genereren-bouw",
    },
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Hoe snel genereert Groeimaten leads voor mijn bouwbedrijf?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bij Meta Ads zijn de eerste leads er vaak al binnen de eerste week. Google Ads volgt binnen twee weken. SEO vergt 3 tot 6 maanden voor structurele groei.",
      },
    },
    {
      "@type": "Question",
      name: "Werken jullie ook met kleine aannemersbedrijven?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Groeimaten werkt met bedrijven van uiteenlopende grootte, zolang er ambitie is om te groeien. Grootte maakt niet uit, focus wel.",
      },
    },
    {
      "@type": "Question",
      name: "Hoeveel leads kan ik verwachten per maand?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Afhankelijk van budget, regio en sector zijn 10 tot 30 kwalitatieve leads per maand realistisch. We zijn altijd eerlijk over de verwachtingen.",
      },
    },
  ],
}

export default function LeadsGenerenBouwPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="page-hero page-hero--split">
        <div className="page-hero__glow page-hero__glow--1" aria-hidden="true" />
        <div className="page-hero__glow page-hero__glow--2" aria-hidden="true" />
        <div className="container">
          <div className="page-hero__inner">
            <ScrollReveal>
              <div className="page-hero__content">
                <span className="section-label">Leadgeneratie bouwsector</span>
                <h1 className="page-hero__title">
                  Leads genereren in de bouwsector:
                  <br />
                  <em>structureel en voorspelbaar.</em>
                </h1>
                <p className="page-hero__subtitle">
                  Bouwbedrijven die afhankelijk zijn van mond-tot-mondreclame hebben geen grip op hun
                  instroom. Groeimaten bouwt systemen die elke maand kwalitatieve aanvragen genereren.
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
                <span className="section-label">Ons systeem</span>
                <h2 className="section-title section-title--white">
                  Van onbekend naar aanvraag in drie stappen
                </h2>
                <p>
                  Leads genereren in de bouwsector werkt anders dan in de consumentenmarkt. De orderwaarden
                  zijn hoog, het beslissingsproces duurt langer en de klant vergelijkt meerdere partijen.
                  Ons systeem houdt daar rekening mee.
                </p>
                <p>
                  We bereiken mensen die actief oriënteren of al klaar zijn om een aanvraag te doen. We
                  filteren op kwaliteit voordat iemand contact opneemt. En we zorgen dat de opvolging
                  snel en professioneel verloopt, zodat een goede lead niet verloren gaat.
                </p>

                <div className="service-features">
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Bereik via Meta Ads en Google Ads</h4>
                      <p>
                        We bereiken jouw doelgroep op het moment dat ze oriënteren of actief zoeken
                        naar een bouwbedrijf.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Kwalificatie van leads</h4>
                      <p>
                        Kwalificatievragen in het aanvraagformulier filteren mensen die niet serieus
                        zijn, zodat jij je tijd steekt in de goede aanvragen.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Geautomatiseerde opvolging</h4>
                      <p>
                        Automatische SMS en e-mail herinneren de lead aan de afspraak. Minder
                        no-shows, meer gesprekken die daadwerkelijk plaatsvinden.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Doorlopende optimalisatie</h4>
                      <p>
                        We analyseren maandelijks welke campagnes de beste resultaten geven en
                        passen de strategie aan op basis van data.
                      </p>
                    </div>
                  </div>
                </div>

                <Link href="/afspraak" className="btn btn--blue btn--lg">
                  Plan een gratis gesprek {arrowIcon}
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <div className="service-detail__visual">
                <div className="service-visual-card">
                  <div className="service-visual-card__glow" />
                  <div className="service-visual-card__stat">
                    <span className="service-visual-card__number">10 tot 30</span>
                    <span className="service-visual-card__label">Kwalitatieve leads per maand</span>
                  </div>
                  <div className="service-visual-card__bar">
                    <div className="bar" style={{ width: "82%" }} />
                  </div>
                  <div className="service-visual-card__stat">
                    <span className="service-visual-card__number">Week 1</span>
                    <span className="service-visual-card__label">Eerste leads bij Meta Ads</span>
                  </div>
                  <div className="service-visual-card__bar bar--green">
                    <div className="bar" style={{ width: "95%" }} />
                  </div>
                  <div className="service-visual-card__stat">
                    <span className="service-visual-card__number">35+</span>
                    <span className="service-visual-card__label">Bedrijven geholpen groeien</span>
                  </div>
                  <div className="service-visual-card__bar">
                    <div className="bar" style={{ width: "90%" }} />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="faq-section" id="faq">
        <div className="container">
          <ScrollReveal className="section-header">
            <span className="section-label">Veelgestelde vragen</span>
            <h2 className="section-title section-title--white">Vragen over leadgeneratie voor bouwbedrijven</h2>
          </ScrollReveal>
          <div style={{ maxWidth: "680px", margin: "0 auto" }}>
            <ScrollReveal>
              <div style={{ borderBottom: "1px solid oklch(20% 0 0)", paddingBottom: "28px", marginBottom: "28px" }}>
                <h3 style={{ color: "oklch(92% 0 0)", fontSize: "1.05rem", marginBottom: "12px", fontWeight: 600 }}>
                  Hoe snel genereert Groeimaten leads voor mijn bouwbedrijf?
                </h3>
                <p style={{ color: "oklch(68% 0 0)", lineHeight: "1.75" }}>
                  Bij Meta Ads zijn de eerste leads er vaak al binnen de eerste week. Google Ads volgt
                  binnen twee weken. SEO vergt 3 tot 6 maanden voor structurele groei. We zijn altijd
                  eerlijk over de verwachtingen.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <div style={{ borderBottom: "1px solid oklch(20% 0 0)", paddingBottom: "28px", marginBottom: "28px" }}>
                <h3 style={{ color: "oklch(92% 0 0)", fontSize: "1.05rem", marginBottom: "12px", fontWeight: 600 }}>
                  Werken jullie ook met kleine aannemersbedrijven?
                </h3>
                <p style={{ color: "oklch(68% 0 0)", lineHeight: "1.75" }}>
                  Ja. Groeimaten werkt met bedrijven van uiteenlopende grootte, zolang er ambitie is om
                  te groeien. Grootte maakt niet uit, focus en motivatie wel.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <div>
                <h3 style={{ color: "oklch(92% 0 0)", fontSize: "1.05rem", marginBottom: "12px", fontWeight: 600 }}>
                  Hoeveel leads kan ik verwachten per maand?
                </h3>
                <p style={{ color: "oklch(68% 0 0)", lineHeight: "1.75" }}>
                  Afhankelijk van budget, regio en sector zijn 10 tot 30 kwalitatieve leads per maand
                  realistisch. We geven altijd een eerlijk verwachtingsmanagement op basis van jouw
                  specifieke situatie.
                </p>
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
              <span className="section-label section-label--blue">Grip op groei</span>
              <h2 className="cta-title">Start met structurele leadgeneratie</h2>
              <p className="cta-subtitle">
                Plan een gratis strategiegesprek. We kijken samen naar jouw situatie en vertellen je
                eerlijk wat er mogelijk is.
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

import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Klanten werven keukenstudio | Meer showroomafspraken via online marketing",
  description:
    "Klanten werven voor een keukenstudio via gerichte advertenties, SEO en geautomatiseerde opvolging. Groeimaten is specialist in marketing voor keukenstudio's.",
  alternates: {
    canonical: "https://groeimaten.com/klanten-werven-keukenstudio",
  },
  openGraph: {
    title: "Klanten werven keukenstudio | Meer showroomafspraken via online marketing",
    description:
      "Groeimaten helpt keukenstudio's meer klanten werven via Meta Ads, Google Ads en SEO. Meer showroomafspraken, hogere bezetting.",
    url: "https://groeimaten.com/klanten-werven-keukenstudio",
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
  name: "Klanten werven keukenstudio",
  provider: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  description:
    "Groeimaten helpt keukenstudio's meer klanten werven via Meta Ads, Google Ads en SEO. Meer showroomafspraken van gekwalificeerde kopers in het midden- en hoogsegment.",
  areaServed: { "@type": "Country", name: "Nederland" },
  url: "https://groeimaten.com/klanten-werven-keukenstudio",
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://groeimaten.com" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Klanten werven keukenstudio",
      item: "https://groeimaten.com/klanten-werven-keukenstudio",
    },
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Hoe werft Groeimaten klanten voor een keukenstudio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Groeimaten gebruikt Meta Ads, Google Ads en SEO gecombineerd met een geautomatiseerd opvolgsysteem. Mensen die zich oriënteren op een nieuwe keuken worden bereikt, gekwalificeerd en uitgenodigd voor een showroomafspraak.",
      },
    },
    {
      "@type": "Question",
      name: "Werkt Groeimaten alleen met grote keukenstudio's?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nee. Groeimaten werkt met keukenstudio's van uiteenlopende omvang, van één showroom tot meerdere vestigingen. De aanpak schaalt mee met de ambities en het budget van de studio.",
      },
    },
    {
      "@type": "Question",
      name: "Welk budget is nodig om structureel klanten te werven als keukenstudio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Een realistisch startbudget voor een keukenstudio is 750 tot 1500 euro per maand aan advertentiekosten, naast de beheerskosten. Bij een gemiddelde keukenwaarde boven 15.000 euro is dat budget snel terugverdiend.",
      },
    },
  ],
}

export default function KlantenWervenKeukenstudioPage() {
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
                <span className="section-label">Keukenstudio marketing</span>
                <h1 className="page-hero__title">
                  Klanten werven voor jouw keukenstudio:
                  <br />
                  <em>structurele showroomafspraken.</em>
                </h1>
                <p className="page-hero__subtitle">
                  Een volle agenda met gekwalificeerde showroomafspraken begint met de juiste mensen
                  bereiken op het moment dat ze dromen van een nieuwe keuken. Groeimaten bouwt de
                  systemen die dat voor jouw studio doen.
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
                <span className="section-label">Onze aanpak</span>
                <h2 className="section-title section-title--white">
                  Van oriënterende consument naar betalende klant
                </h2>
                <p>
                  Mensen die een nieuwe keuken overwegen, doen dat maandenlang voor ze een afspraak maken.
                  Ze kijken Instagram en Pinterest, vergelijken merken, lezen reviews en bezoeken showrooms.
                  Groeimaten bereikt die mensen tijdens hun oriëntatiefase en begeleidt ze via een slimme
                  funnel naar een afspraak in jouw showroom.
                </p>
                <p>
                  De aanpak combineert betaalde advertenties voor directe zichtbaarheid, SEO voor
                  organisch bereik en geautomatiseerde opvolging om warme leads om te zetten in afspraken.
                  Elke schakel is afgestemd op het aankoopgedrag van keukenkopers in het midden- en
                  hoogsegment.
                </p>

                <div className="service-features">
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Meta Ads gericht op oriënterende kopers</h4>
                      <p>
                        Facebook en Instagram advertenties die mensen bereiken die actief bezig zijn
                        met het vernieuwen van hun keuken, op basis van gedrag en interesses.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Google Ads voor actieve zoekers</h4>
                      <p>
                        Wie googelt op "keuken laten plaatsen Rotterdam" of "keukenstudio showroom",
                        ziet jouw advertentie bovenaan. Hoge koopintentie, directe aanvragen.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Geautomatiseerde opvolging via SMS en e-mail</h4>
                      <p>
                        Leads die een formulier invullen ontvangen automatisch een bevestiging en
                        herinnering. Minder no-shows, meer afspraken die daadwerkelijk plaatsvinden.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>SEO voor langdurige organische zichtbaarheid</h4>
                      <p>
                        Organische posities op termen als "keukenstudio [stad]" bouwen een kanaal op
                        dat aanvragen oplevert zonder doorlopende advertentiekosten.
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
                    <span className="service-visual-card__number">15 tot 40</span>
                    <span className="service-visual-card__label">Showroomafspraken per maand</span>
                  </div>
                  <div className="service-visual-card__bar">
                    <div className="bar" style={{ width: "88%" }} />
                  </div>
                  <div className="service-visual-card__stat">
                    <span className="service-visual-card__number">100k+</span>
                    <span className="service-visual-card__label">Extra omzet gegenereerd</span>
                  </div>
                  <div className="service-visual-card__bar bar--green">
                    <div className="bar" style={{ width: "95%" }} />
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

      <section className="faq-section" id="faq">
        <div className="container">
          <ScrollReveal className="section-header">
            <span className="section-label">Veelgestelde vragen</span>
            <h2 className="section-title section-title--white">Vragen over klanten werven voor een keukenstudio</h2>
          </ScrollReveal>
          <div style={{ maxWidth: "680px", margin: "0 auto" }}>
            <ScrollReveal>
              <div style={{ borderBottom: "1px solid oklch(20% 0 0)", paddingBottom: "28px", marginBottom: "28px" }}>
                <h3 style={{ color: "oklch(92% 0 0)", fontSize: "1.05rem", marginBottom: "12px", fontWeight: 600 }}>
                  Hoe werft Groeimaten klanten voor een keukenstudio?
                </h3>
                <p style={{ color: "oklch(68% 0 0)", lineHeight: "1.75" }}>
                  Groeimaten gebruikt Meta Ads, Google Ads en SEO gecombineerd met een geautomatiseerd
                  opvolgsysteem. Mensen die zich oriënteren op een nieuwe keuken worden bereikt, gekwalificeerd
                  en uitgenodigd voor een showroomafspraak.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <div style={{ borderBottom: "1px solid oklch(20% 0 0)", paddingBottom: "28px", marginBottom: "28px" }}>
                <h3 style={{ color: "oklch(92% 0 0)", fontSize: "1.05rem", marginBottom: "12px", fontWeight: 600 }}>
                  Werkt Groeimaten alleen met grote keukenstudio&apos;s?
                </h3>
                <p style={{ color: "oklch(68% 0 0)", lineHeight: "1.75" }}>
                  Nee. Groeimaten werkt met keukenstudio&apos;s van uiteenlopende omvang, van één showroom
                  tot meerdere vestigingen. De aanpak schaalt mee met de ambities en het budget van de studio.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <div>
                <h3 style={{ color: "oklch(92% 0 0)", fontSize: "1.05rem", marginBottom: "12px", fontWeight: 600 }}>
                  Welk budget is nodig om structureel klanten te werven als keukenstudio?
                </h3>
                <p style={{ color: "oklch(68% 0 0)", lineHeight: "1.75" }}>
                  Een realistisch startbudget voor een keukenstudio is 750 tot 1500 euro per maand aan
                  advertentiekosten, naast de beheerskosten. Bij een gemiddelde keukenwaarde boven 15.000
                  euro is dat budget snel terugverdiend.
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
              <span className="section-label section-label--blue">Meer showroomafspraken</span>
              <h2 className="cta-title">Start met structureel klanten werven voor jouw keukenstudio</h2>
              <p className="cta-subtitle">
                Plan een gratis strategiegesprek. We kijken samen naar jouw showroom, jouw doelklant
                en wat er nodig is om de agenda structureel te vullen.
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

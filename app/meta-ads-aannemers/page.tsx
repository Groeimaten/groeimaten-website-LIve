import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Meta Ads voor aannemers | Meer aanvragen via Facebook en Instagram",
  description:
    "Meta Ads voor aannemers die structureel meer aanvragen willen genereren. Groeimaten richt campagnes in die de juiste particulieren en zakelijke opdrachtgevers bereiken.",
  alternates: {
    canonical: "https://groeimaten.com/meta-ads-aannemers",
  },
  openGraph: {
    title: "Meta Ads voor aannemers | Meer aanvragen via Facebook en Instagram",
    description:
      "Groeimaten richt Meta Ads campagnes in voor aannemers. Meer aanvragen van particulieren en zakelijke opdrachtgevers via Facebook en Instagram.",
    url: "https://groeimaten.com/meta-ads-aannemers",
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
  name: "Meta Ads voor aannemers",
  provider: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  description:
    "Groeimaten verzorgt Meta Ads campagnes voor aannemers en bouwbedrijven in Nederland. Meer aanvragen via Facebook en Instagram, gericht op particulieren en zakelijke opdrachtgevers.",
  areaServed: { "@type": "Country", name: "Nederland" },
  url: "https://groeimaten.com/meta-ads-aannemers",
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://groeimaten.com" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Meta Ads voor aannemers",
      item: "https://groeimaten.com/meta-ads-aannemers",
    },
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Zijn Meta Ads geschikt voor aannemers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Meta Ads zijn voor aannemers effectief om particulieren te bereiken die een verbouwing of uitbouw overwegen. De targeting op geografisch gebied, leeftijd en gedrag zorgt dat de advertentie de juiste mensen bereikt op het moment dat ze zich oriënteren.",
      },
    },
    {
      "@type": "Question",
      name: "Hoe snel lever Meta Ads aanvragen op voor een aannemersbedrijf?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bij goed ingerichte campagnes zijn de eerste aanvragen er binnen 7 tot 14 dagen na livegang. De kwaliteit neemt toe naarmate de campagne geoptimaliseerd wordt op basis van de binnengekomen aanvragen.",
      },
    },
    {
      "@type": "Question",
      name: "Wat is een realistisch budget voor Meta Ads als aannemer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Voor aannemers die particuliere klanten willen bereiken is een startbudget van 500 tot 1000 euro per maand realistisch. Bij een gemiddelde opdrachtswaarde van 20.000 euro of meer is dat budget snel terugverdiend met één goede aanvraag.",
      },
    },
  ],
}

export default function MetaAdsAannemersPage() {
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
                <span className="section-label">Meta Ads voor de bouwsector</span>
                <h1 className="page-hero__title">
                  Meta Ads voor aannemers:
                  <br />
                  <em>meer aanvragen, minder afhankelijkheid.</em>
                </h1>
                <p className="page-hero__subtitle">
                  Aannemers die afhankelijk zijn van mond-tot-mondreclame hebben geen grip op hun
                  instroom. Groeimaten bouwt Meta Ads campagnes die elke maand kwalitatieve aanvragen
                  genereren van particulieren en zakelijke opdrachtgevers.
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
                  Gericht bereik op mensen die een verbouwing overwegen
                </h2>
                <p>
                  Meta Ads bereiken mensen niet op het moment dat ze actief zoeken, maar op het moment
                  dat ze zich oriënteren. Iemand die zijn woning wil uitbrouwen, kijkt Pinterest-borden,
                  volgt verbouwingsaccounts en toont dat gedrag aan het algoritme van Facebook en Instagram.
                  Precies die mensen bereikt Groeimaten met jouw advertentie.
                </p>
                <p>
                  De campagne richt zich op jouw werkgebied, de juiste leeftijdsgroep en gedragssignalen
                  die wijzen op verbouwingsintentie. Dat levert aanvragen op van mensen die serieus
                  zijn, niet van mensen die per ongeluk op een advertentie klikken.
                </p>

                <div className="service-features">
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Geografische targeting op jouw werkgebied</h4>
                      <p>
                        De campagne bereikt mensen in de postcodes of steden waar jij actief bent.
                        Geen klikken van buiten jouw regio.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Kwalificerende vragen in het aanvraagformulier</h4>
                      <p>
                        Een korte vragenlijst voor serieuze aanvragen filtert mensen die alleen
                        prijsoriëntatie doen zonder intentie om te bouwen.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Creatieve advertenties die converteren</h4>
                      <p>
                        Groeimaten weet welke beelden en teksten werken voor bouwprojecten. Geen
                        generieke stockfoto&apos;s, maar advertenties die aandacht trekken en vertrouwen
                        wekken.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Maandelijkse rapportage en optimalisatie</h4>
                      <p>
                        Elke maand analyseren we welke campagnes het beste presteren en passen we de
                        strategie aan. Zodat de kosten per aanvraag dalen naarmate de campagne rijpt.
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
                    <span className="service-visual-card__number">7 tot 14</span>
                    <span className="service-visual-card__label">Dagen tot eerste aanvragen</span>
                  </div>
                  <div className="service-visual-card__bar">
                    <div className="bar" style={{ width: "85%" }} />
                  </div>
                  <div className="service-visual-card__stat">
                    <span className="service-visual-card__number">500+</span>
                    <span className="service-visual-card__label">Aanvragen voor bouwbedrijven</span>
                  </div>
                  <div className="service-visual-card__bar bar--green">
                    <div className="bar" style={{ width: "90%" }} />
                  </div>
                  <div className="service-visual-card__stat">
                    <span className="service-visual-card__number">35+</span>
                    <span className="service-visual-card__label">Bouw- en installatiebedrijven geholpen</span>
                  </div>
                  <div className="service-visual-card__bar">
                    <div className="bar" style={{ width: "88%" }} />
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
            <h2 className="section-title section-title--white">Vragen over Meta Ads voor aannemers</h2>
          </ScrollReveal>
          <div style={{ maxWidth: "680px", margin: "0 auto" }}>
            <ScrollReveal>
              <div style={{ borderBottom: "1px solid oklch(20% 0 0)", paddingBottom: "28px", marginBottom: "28px" }}>
                <h3 style={{ color: "oklch(92% 0 0)", fontSize: "1.05rem", marginBottom: "12px", fontWeight: 600 }}>
                  Zijn Meta Ads geschikt voor aannemers?
                </h3>
                <p style={{ color: "oklch(68% 0 0)", lineHeight: "1.75" }}>
                  Ja. Meta Ads zijn voor aannemers effectief om particulieren te bereiken die een verbouwing
                  of uitbouw overwegen. De targeting op geografisch gebied, leeftijd en gedrag zorgt dat de
                  advertentie de juiste mensen bereikt op het moment dat ze zich oriënteren.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <div style={{ borderBottom: "1px solid oklch(20% 0 0)", paddingBottom: "28px", marginBottom: "28px" }}>
                <h3 style={{ color: "oklch(92% 0 0)", fontSize: "1.05rem", marginBottom: "12px", fontWeight: 600 }}>
                  Hoe snel lever Meta Ads aanvragen op voor een aannemersbedrijf?
                </h3>
                <p style={{ color: "oklch(68% 0 0)", lineHeight: "1.75" }}>
                  Bij goed ingerichte campagnes zijn de eerste aanvragen er binnen 7 tot 14 dagen na
                  livegang. De kwaliteit neemt toe naarmate de campagne geoptimaliseerd wordt op basis
                  van de binnengekomen aanvragen.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <div>
                <h3 style={{ color: "oklch(92% 0 0)", fontSize: "1.05rem", marginBottom: "12px", fontWeight: 600 }}>
                  Wat is een realistisch budget voor Meta Ads als aannemer?
                </h3>
                <p style={{ color: "oklch(68% 0 0)", lineHeight: "1.75" }}>
                  Voor aannemers die particuliere klanten willen bereiken is een startbudget van 500 tot
                  1000 euro per maand realistisch. Bij een gemiddelde opdrachtswaarde van 20.000 euro of
                  meer is dat budget snel terugverdiend met één goede aanvraag.
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
              <span className="section-label section-label--blue">Meer aanvragen</span>
              <h2 className="cta-title">Start met Meta Ads voor jouw aannemersbedrijf</h2>
              <p className="cta-subtitle">
                Plan een gratis strategiegesprek. We kijken samen naar jouw situatie en vertellen je
                eerlijk wat er mogelijk is met Meta Ads voor aannemers.
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

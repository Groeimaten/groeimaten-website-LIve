import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Digitale marketing dakkapelbedrijf | Meer aanvragen voor dakkapellen",
  description:
    "Digitale marketing voor een dakkapelbedrijf dat structureel meer aanvragen wil. Groeimaten bereikt mensen die een dakkapel willen plaatsen via gerichte advertenties en SEO.",
  alternates: {
    canonical: "https://groeimaten.com/dakkapelbedrijf-marketing",
  },
  openGraph: {
    title: "Digitale marketing dakkapelbedrijf | Meer aanvragen voor dakkapellen",
    description:
      "Groeimaten helpt dakkapelbedrijven meer aanvragen genereren via Google Ads, Meta Ads en SEO.",
    url: "https://groeimaten.com/dakkapelbedrijf-marketing",
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
  name: "Digitale marketing voor dakkapelbedrijven",
  provider: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  description:
    "Groeimaten verzorgt digitale marketing voor dakkapelbedrijven in Nederland. Meer aanvragen voor dakkapellen via Google Ads, Meta Ads en SEO.",
  areaServed: { "@type": "Country", name: "Nederland" },
  url: "https://groeimaten.com/dakkapelbedrijf-marketing",
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://groeimaten.com" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Digitale marketing dakkapelbedrijf",
      item: "https://groeimaten.com/dakkapelbedrijf-marketing",
    },
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Welk marketingkanaal werkt het best voor een dakkapelbedrijf?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Google Ads werkt uitstekend voor dakkapelbedrijven omdat mensen actief zoeken op termen als 'dakkapel plaatsen offerte'. Meta Ads werken goed in het voorjaar als mensen nadenken over een verbouwing. Beide kanalen combineren geeft het beste resultaat.",
      },
    },
    {
      "@type": "Question",
      name: "Is digitale marketing winstgevend voor een dakkapelbedrijf?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bij een gemiddelde opdrachtswaarde van 10.000 tot 25.000 euro voor een dakkapel is online marketing zeer winstgevend. Een aanvraagkosten van 100 tot 300 euro is daarbij realistisch met goed ingerichte campagnes.",
      },
    },
    {
      "@type": "Question",
      name: "Hoe snel genereert digitale marketing aanvragen voor een dakkapelbedrijf?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Google Ads campagnes leveren de eerste aanvragen doorgaans binnen 1 tot 2 weken na livegang. Meta Ads kunnen al op de eerste dag aanvragen opleveren als de targeting en creatieve uitingen goed zijn.",
      },
    },
  ],
}

export default function DakkapelbedrijfMarketingPage() {
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
                <span className="section-label">Marketing voor dakkapelbedrijven</span>
                <h1 className="page-hero__title">
                  Digitale marketing voor dakkapelbedrijven:
                  <br />
                  <em>meer aanvragen, minder leegloop.</em>
                </h1>
                <p className="page-hero__subtitle">
                  Mensen die een dakkapel willen plaatsen, oriënteren online. Ze vergelijken prijzen,
                  bekijken referentieprojecten en vragen offertes op. Als jouw dakkapelbedrijf dan
                  niet gevonden wordt, gaat de opdracht naar een concurrent.
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
                <span className="section-label">Aanpak</span>
                <h2 className="section-title section-title--white">
                  Hoe Groeimaten aanvragen genereert voor dakkapelbedrijven
                </h2>
                <p>
                  De zoekintentie bij een dakkapel is sterk. Iemand die googelt op "dakkapel plaatsen
                  offerte Utrecht" is klaar om te kopen. Groeimaten richt campagnes in die jouw bedrijf
                  op dat moment zichtbaar maakt en bezoekers omzet in concrete aanvragen.
                </p>
                <p>
                  Naast directe aanvragen via zoekopdrachten bereiken we ook mensen in de oriëntatiefase
                  via Meta Ads. Die mensen denken na over een dakkapel maar hebben nog geen offerte
                  aangevraagd. Een goede advertentie met een referentieproject en een duidelijke call
                  to action zet hen over de streep.
                </p>

                <div className="service-features">
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Google Ads op zoektermen met hoge koopintentie</h4>
                      <p>
                        Campagnes op termen als "dakkapel plaatsen kosten" en "dakkapel offerte aanvragen"
                        bereiken mensen die nu beslissen.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Meta Ads met visuele referentieprojecten</h4>
                      <p>
                        Advertenties op Facebook en Instagram met foto&apos;s van afgeronde dakkapelprojecten
                        genereren interesse bij mensen die hun woning willen uitbreiden.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Landingspagina&apos;s die converteren</h4>
                      <p>
                        Elke campagne stuurt bezoekers naar een pagina die specifiek gaat over jouw
                        aanbod in jouw regio, met een duidelijk offerteformulier.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Doorlopende optimalisatie op basis van data</h4>
                      <p>
                        Maandelijkse analyse van welke advertenties en zoektermen de beste aanvragen
                        leveren, met bijsturing zodat de kosten per aanvraag dalen.
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
                    <span className="service-visual-card__number">1 tot 2</span>
                    <span className="service-visual-card__label">Weken tot eerste aanvragen</span>
                  </div>
                  <div className="service-visual-card__bar">
                    <div className="bar" style={{ width: "90%" }} />
                  </div>
                  <div className="service-visual-card__stat">
                    <span className="service-visual-card__number">10k tot 25k</span>
                    <span className="service-visual-card__label">Gemiddelde opdrachtswaarde dakkapel</span>
                  </div>
                  <div className="service-visual-card__bar bar--green">
                    <div className="bar" style={{ width: "85%" }} />
                  </div>
                  <div className="service-visual-card__stat">
                    <span className="service-visual-card__number">35+</span>
                    <span className="service-visual-card__label">Bouwbedrijven geholpen groeien</span>
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
            <h2 className="section-title section-title--white">Vragen over marketing voor dakkapelbedrijven</h2>
          </ScrollReveal>
          <div style={{ maxWidth: "680px", margin: "0 auto" }}>
            <ScrollReveal>
              <div style={{ borderBottom: "1px solid oklch(20% 0 0)", paddingBottom: "28px", marginBottom: "28px" }}>
                <h3 style={{ color: "oklch(92% 0 0)", fontSize: "1.05rem", marginBottom: "12px", fontWeight: 600 }}>
                  Welk marketingkanaal werkt het best voor een dakkapelbedrijf?
                </h3>
                <p style={{ color: "oklch(68% 0 0)", lineHeight: "1.75" }}>
                  Google Ads werkt uitstekend voor dakkapelbedrijven omdat mensen actief zoeken op termen
                  als "dakkapel plaatsen offerte". Meta Ads werken goed in het voorjaar als mensen nadenken
                  over een verbouwing. Beide kanalen combineren geeft het beste resultaat.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <div style={{ borderBottom: "1px solid oklch(20% 0 0)", paddingBottom: "28px", marginBottom: "28px" }}>
                <h3 style={{ color: "oklch(92% 0 0)", fontSize: "1.05rem", marginBottom: "12px", fontWeight: 600 }}>
                  Is digitale marketing winstgevend voor een dakkapelbedrijf?
                </h3>
                <p style={{ color: "oklch(68% 0 0)", lineHeight: "1.75" }}>
                  Bij een gemiddelde opdrachtswaarde van 10.000 tot 25.000 euro voor een dakkapel is
                  online marketing zeer winstgevend. Aanvraagkosten van 100 tot 300 euro zijn daarbij
                  realistisch met goed ingerichte campagnes.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <div>
                <h3 style={{ color: "oklch(92% 0 0)", fontSize: "1.05rem", marginBottom: "12px", fontWeight: 600 }}>
                  Hoe snel genereert digitale marketing aanvragen voor een dakkapelbedrijf?
                </h3>
                <p style={{ color: "oklch(68% 0 0)", lineHeight: "1.75" }}>
                  Google Ads campagnes leveren de eerste aanvragen doorgaans binnen 1 tot 2 weken na
                  livegang. Meta Ads kunnen al op de eerste dag aanvragen opleveren als de targeting en
                  creatieve uitingen goed zijn.
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
              <span className="section-label section-label--blue">Meer aanvragen voor dakkapellen</span>
              <h2 className="cta-title">Start met digitale marketing voor jouw dakkapelbedrijf</h2>
              <p className="cta-subtitle">
                Plan een gratis strategiegesprek. We kijken samen naar jouw bedrijf, jouw werkgebied
                en wat er concreet mogelijk is om de aanvraagstroom te vergroten.
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

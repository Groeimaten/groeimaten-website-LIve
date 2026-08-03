import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Online marketing kozijnenbedrijf | Meer aanvragen voor kozijnen en ramen",
  description:
    "Online marketing voor een kozijnenbedrijf dat structureel meer aanvragen wil. Groeimaten richt gerichte campagnes in voor kozijnen, ramen, deuren en gevelbekleding.",
  alternates: {
    canonical: "https://groeimaten.com/online-marketing-kozijnenbedrijf",
  },
  openGraph: {
    title: "Online marketing kozijnenbedrijf | Meer aanvragen voor kozijnen en ramen",
    description:
      "Groeimaten helpt kozijnenbedrijven meer aanvragen genereren via Google Ads, Meta Ads en SEO.",
    url: "https://groeimaten.com/online-marketing-kozijnenbedrijf",
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
  name: "Online marketing voor kozijnenbedrijven",
  provider: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  description:
    "Groeimaten verzorgt online marketing voor kozijnenbedrijven in Nederland. Meer aanvragen voor kozijnen, ramen, deuren en gevelbekleding via gerichte advertenties en SEO.",
  areaServed: { "@type": "Country", name: "Nederland" },
  url: "https://groeimaten.com/online-marketing-kozijnenbedrijf",
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://groeimaten.com" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Online marketing kozijnenbedrijf",
      item: "https://groeimaten.com/online-marketing-kozijnenbedrijf",
    },
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Welke marketingkanalen werken het best voor een kozijnenbedrijf?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Google Ads werkt goed voor kozijnenbedrijven omdat mensen actief zoeken op termen als 'kunststof kozijnen vervangen offerte'. Meta Ads werkt goed om mensen in de oriëntatiefase te bereiken. Combineer beide kanalen voor het beste resultaat.",
      },
    },
    {
      "@type": "Question",
      name: "Hoe snel genereert online marketing aanvragen voor een kozijnenbedrijf?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Google Ads levert bij een goed ingerichte campagne de eerste aanvragen binnen twee weken. Meta Ads volgt snel daarna. SEO vergt 3 tot 6 maanden om structurele organische posities op te bouwen.",
      },
    },
    {
      "@type": "Question",
      name: "Werkt Groeimaten ook met kozijnenbedrijven buiten de Randstad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Groeimaten werkt landelijk en richt campagnes in op het specifieke werkgebied van het kozijnenbedrijf, of dat nu een gemeente is of een hele provincie.",
      },
    },
  ],
}

export default function OnlineMarketingKozijnenbedrijfPage() {
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
                <span className="section-label">Marketing voor kozijnenbedrijven</span>
                <h1 className="page-hero__title">
                  Online marketing voor een kozijnenbedrijf:
                  <br />
                  <em>meer aanvragen, minder acquisitie.</em>
                </h1>
                <p className="page-hero__subtitle">
                  Kozijnenbedrijven die afhankelijk zijn van doorverwijzingen en aanbevelingen missen een
                  grote stroom mensen die online actief op zoek zijn naar nieuwe kozijnen, ramen of deuren.
                  Groeimaten zorgt dat jij gevonden wordt.
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
                  Zo bereiken wij mensen die nu nieuwe kozijnen willen
                </h2>
                <p>
                  Iemand die nieuwe kozijnen wil, zoekt actief naar offertes. Dat is een ideale situatie
                  voor online marketing: de vraag is er al, de klant is alleen op zoek naar het juiste
                  bedrijf. Groeimaten zorgt dat jouw kozijnenbedrijf op dat moment zichtbaar is.
                </p>
                <p>
                  We combineren Google Ads voor directe aanvragen van mensen die nu zoeken, Meta Ads voor
                  mensen die zich oriënteren op een renovatie en SEO voor structurele organische posities
                  op relevante zoektermen. Elke campagne is gericht op jouw werkgebied en afgestemd op
                  de diensten die jij levert.
                </p>

                <div className="service-features">
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Google Ads op zoektermen met koopintentie</h4>
                      <p>
                        Campagnes op termen als "kunststof kozijnen vervangen offerte" en "houten ramen
                        isoleren kosten" bereiken mensen die klaar zijn om te kopen.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Meta Ads op oriënterende woningbezitters</h4>
                      <p>
                        Facebook en Instagram advertenties met beelden van afgeronde kozijnprojecten
                        bereiken woningbezitters die nadenken over renovatie.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>SEO voor organische posities</h4>
                      <p>
                        Optimalisatie van de website en dienstpagina&apos;s per regio zorgt voor
                        structureel organisch verkeer zonder doorlopende advertentiekosten.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Maandelijkse analyse en bijsturing</h4>
                      <p>
                        We analyseren elke maand welke campagnes de beste aanvragen opleveren en passen
                        de strategie aan op basis van data, niet op aannames.
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
                    <span className="service-visual-card__number">10 tot 25</span>
                    <span className="service-visual-card__label">Aanvragen per maand</span>
                  </div>
                  <div className="service-visual-card__bar">
                    <div className="bar" style={{ width: "80%" }} />
                  </div>
                  <div className="service-visual-card__stat">
                    <span className="service-visual-card__number">2 weken</span>
                    <span className="service-visual-card__label">Eerste aanvragen via Google Ads</span>
                  </div>
                  <div className="service-visual-card__bar bar--green">
                    <div className="bar" style={{ width: "90%" }} />
                  </div>
                  <div className="service-visual-card__stat">
                    <span className="service-visual-card__number">35+</span>
                    <span className="service-visual-card__label">Bouwbedrijven geholpen groeien</span>
                  </div>
                  <div className="service-visual-card__bar">
                    <div className="bar" style={{ width: "85%" }} />
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
            <h2 className="section-title section-title--white">Vragen over online marketing voor kozijnenbedrijven</h2>
          </ScrollReveal>
          <div style={{ maxWidth: "680px", margin: "0 auto" }}>
            <ScrollReveal>
              <div style={{ borderBottom: "1px solid oklch(20% 0 0)", paddingBottom: "28px", marginBottom: "28px" }}>
                <h3 style={{ color: "oklch(92% 0 0)", fontSize: "1.05rem", marginBottom: "12px", fontWeight: 600 }}>
                  Welke marketingkanalen werken het best voor een kozijnenbedrijf?
                </h3>
                <p style={{ color: "oklch(68% 0 0)", lineHeight: "1.75" }}>
                  Google Ads werkt goed voor kozijnenbedrijven omdat mensen actief zoeken op termen als
                  "kunststof kozijnen vervangen offerte". Meta Ads werkt goed om mensen in de oriëntatiefase
                  te bereiken. Combineer beide kanalen voor het beste resultaat.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <div style={{ borderBottom: "1px solid oklch(20% 0 0)", paddingBottom: "28px", marginBottom: "28px" }}>
                <h3 style={{ color: "oklch(92% 0 0)", fontSize: "1.05rem", marginBottom: "12px", fontWeight: 600 }}>
                  Hoe snel genereert online marketing aanvragen voor een kozijnenbedrijf?
                </h3>
                <p style={{ color: "oklch(68% 0 0)", lineHeight: "1.75" }}>
                  Google Ads levert bij een goed ingerichte campagne de eerste aanvragen binnen twee
                  weken. Meta Ads volgt snel daarna. SEO vergt 3 tot 6 maanden om structurele organische
                  posities op te bouwen.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <div>
                <h3 style={{ color: "oklch(92% 0 0)", fontSize: "1.05rem", marginBottom: "12px", fontWeight: 600 }}>
                  Werkt Groeimaten ook met kozijnenbedrijven buiten de Randstad?
                </h3>
                <p style={{ color: "oklch(68% 0 0)", lineHeight: "1.75" }}>
                  Ja. Groeimaten werkt landelijk en richt campagnes in op het specifieke werkgebied van
                  het kozijnenbedrijf, of dat nu een gemeente is of een hele provincie.
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
              <h2 className="cta-title">Start met online marketing voor jouw kozijnenbedrijf</h2>
              <p className="cta-subtitle">
                Plan een gratis strategiegesprek. We kijken samen naar jouw bedrijf en vertellen je
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

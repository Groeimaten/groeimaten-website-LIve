import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Website laten maken ventilatiebedrijf | Professionele website voor ventilatie",
  description:
    "Een website laten maken als ventilatiebedrijf die aanvragen genereert. Groeimaten bouwt websites voor ventilatiebedrijven die snel laden, goed ranken en converteren.",
  alternates: {
    canonical: "https://groeimaten.com/ventilatiebedrijf-website",
  },
  openGraph: {
    title: "Website laten maken ventilatiebedrijf | Professionele website voor ventilatie",
    description:
      "Groeimaten bouwt websites voor ventilatiebedrijven die gevonden worden en aanvragen genereren.",
    url: "https://groeimaten.com/ventilatiebedrijf-website",
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
  name: "Website laten maken ventilatiebedrijf",
  provider: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  description:
    "Groeimaten bouwt professionele websites voor ventilatiebedrijven in Nederland. Snel, technisch correct en geoptimaliseerd voor lokale zoekopdrachten.",
  areaServed: { "@type": "Country", name: "Nederland" },
  url: "https://groeimaten.com/ventilatiebedrijf-website",
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://groeimaten.com" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Website laten maken ventilatiebedrijf",
      item: "https://groeimaten.com/ventilatiebedrijf-website",
    },
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Wat kost een website voor een ventilatiebedrijf?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "De kosten voor een professionele website voor een ventilatiebedrijf zijn afhankelijk van de omvang en de functionaliteiten. Groeimaten bespreekt dit transparant in een gratis gesprek op basis van jouw specifieke wensen en doelen.",
      },
    },
    {
      "@type": "Question",
      name: "Hoe lang duurt het om een website te laten maken voor een ventilatiebedrijf?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Een standaard website voor een ventilatiebedrijf is doorgaans binnen 4 tot 6 weken live. Dat hangt af van hoe snel de aanlevering van teksten, foto's en gegevens verloopt.",
      },
    },
    {
      "@type": "Question",
      name: "Zorgt Groeimaten ook voor SEO van de website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Alle websites die Groeimaten bouwt zijn technisch geoptimaliseerd voor zoekmachines. Daarnaast kan Groeimaten na oplevering doorlopend aan de SEO van de website werken om rankings te verbeteren.",
      },
    },
  ],
}

export default function VentilatiebedrijfWebsitePage() {
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
                <span className="section-label">Website voor ventilatiebedrijven</span>
                <h1 className="page-hero__title">
                  Website laten maken als ventilatiebedrijf:
                  <br />
                  <em>snel, professioneel en vindbaar.</em>
                </h1>
                <p className="page-hero__subtitle">
                  Een website die aanvragen genereert voor ventilatieonderhoud, installaties en
                  woningventilatie. Groeimaten bouwt websites voor installatiebedrijven die presteren
                  op zoekmachines en bezoekers omzetten in klanten.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "28px" }}>
                  <Link href="/afspraak" className="btn btn--blue btn--lg">
                    Gratis gesprek aanvragen {arrowIcon}
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
                <span className="section-label">Wat je krijgt</span>
                <h2 className="section-title section-title--white">
                  Een website die werkt als een 24 uur per dag vertegenwoordiger
                </h2>
                <p>
                  De website van een ventilatiebedrijf moet twee dingen goed doen: gevonden worden door
                  mensen die zoeken naar ventilatieoplossingen en bezoekers overtuigen om contact op te
                  nemen. Veel websites van installatiebedrijven scoren op geen van beide.
                </p>
                <p>
                  Groeimaten bouwt websites die technisch zijn geoptimaliseerd voor Google, snel laden
                  op mobiele apparaten en duidelijk communiceren welke diensten het bedrijf levert en
                  waarom een bezoeker contact moet opnemen. Geen generieke templates, maar een website
                  die aansluit op de werkwijze en het werkgebied van jouw ventilatiebedrijf.
                </p>

                <div className="service-features">
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Technische SEO ingebouwd vanaf dag één</h4>
                      <p>
                        Correcte metatitels, H1-koppen, alt-teksten en laadsnelheid zijn geen
                        afterthought maar onderdeel van elke pagina die Groeimaten bouwt.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Dienstpagina&apos;s per specialisatie</h4>
                      <p>
                        Aparte pagina&apos;s voor WTW-units, mechanische ventilatie, ventilatieonderhoud
                        en woningventilatie ranken elk op hun eigen zoektermen.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Contactformulier dat bezoekers omzet</h4>
                      <p>
                        Een eenvoudig, snel formulier met de juiste vragen genereert meer aanvragen dan
                        een pagina met alleen een telefoonnummer onderaan.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Snelle oplevering</h4>
                      <p>
                        Ventilatiebedrijven zijn binnen 4 tot 6 weken live. Geen eindeloze trajecten,
                        geen verrassingen achteraf.
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
                    <span className="service-visual-card__number">4 tot 6</span>
                    <span className="service-visual-card__label">Weken tot oplevering</span>
                  </div>
                  <div className="service-visual-card__bar">
                    <div className="bar" style={{ width: "75%" }} />
                  </div>
                  <div className="service-visual-card__stat">
                    <span className="service-visual-card__number">SEO-klaar</span>
                    <span className="service-visual-card__label">Vanaf dag één gevonden worden</span>
                  </div>
                  <div className="service-visual-card__bar bar--green">
                    <div className="bar" style={{ width: "90%" }} />
                  </div>
                  <div className="service-visual-card__stat">
                    <span className="service-visual-card__number">35+</span>
                    <span className="service-visual-card__label">Installatiebedrijven geholpen</span>
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
            <h2 className="section-title section-title--white">Vragen over een website voor een ventilatiebedrijf</h2>
          </ScrollReveal>
          <div style={{ maxWidth: "680px", margin: "0 auto" }}>
            <ScrollReveal>
              <div style={{ borderBottom: "1px solid oklch(20% 0 0)", paddingBottom: "28px", marginBottom: "28px" }}>
                <h3 style={{ color: "oklch(92% 0 0)", fontSize: "1.05rem", marginBottom: "12px", fontWeight: 600 }}>
                  Wat kost een website voor een ventilatiebedrijf?
                </h3>
                <p style={{ color: "oklch(68% 0 0)", lineHeight: "1.75" }}>
                  De kosten zijn afhankelijk van de omvang en de functionaliteiten. Groeimaten bespreekt
                  dit transparant in een gratis gesprek op basis van jouw specifieke wensen en doelen.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <div style={{ borderBottom: "1px solid oklch(20% 0 0)", paddingBottom: "28px", marginBottom: "28px" }}>
                <h3 style={{ color: "oklch(92% 0 0)", fontSize: "1.05rem", marginBottom: "12px", fontWeight: 600 }}>
                  Hoe lang duurt het om een website te laten maken voor een ventilatiebedrijf?
                </h3>
                <p style={{ color: "oklch(68% 0 0)", lineHeight: "1.75" }}>
                  Een standaard website voor een ventilatiebedrijf is doorgaans binnen 4 tot 6 weken live.
                  Dat hangt af van hoe snel de aanlevering van teksten, foto&apos;s en gegevens verloopt.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <div>
                <h3 style={{ color: "oklch(92% 0 0)", fontSize: "1.05rem", marginBottom: "12px", fontWeight: 600 }}>
                  Zorgt Groeimaten ook voor SEO van de website?
                </h3>
                <p style={{ color: "oklch(68% 0 0)", lineHeight: "1.75" }}>
                  Ja. Alle websites die Groeimaten bouwt zijn technisch geoptimaliseerd voor zoekmachines.
                  Daarnaast kan Groeimaten na oplevering doorlopend aan de SEO van de website werken om
                  rankings te verbeteren.
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
              <span className="section-label section-label--blue">Website laten maken</span>
              <h2 className="cta-title">Een professionele website voor jouw ventilatiebedrijf</h2>
              <p className="cta-subtitle">
                Plan een gratis gesprek. We kijken samen naar jouw situatie en vertellen je eerlijk
                wat een nieuwe website voor jouw ventilatiebedrijf kan opleveren.
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

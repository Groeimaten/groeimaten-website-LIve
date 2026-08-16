import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Google Ads voor schildersbedrijven | Groeimaten",
  description:
    "Schildersbedrijven die Google Ads goed inrichten, betalen alleen voor aanvragen van mensen die nu willen laten schilderen. Groeimaten regelt het campagnebeheer.",
  alternates: {
    canonical: "https://groeimaten.com/google-ads-schildersbedrijven",
  },
  openGraph: {
    title: "Google Ads voor schildersbedrijven | Groeimaten",
    description:
      "Groeimaten beheert Google Ads-campagnes voor schildersbedrijven die meer aanvragen willen in hun regio.",
    url: "https://groeimaten.com/google-ads-schildersbedrijven",
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
  name: "Google Ads voor schildersbedrijven",
  provider: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  description:
    "Groeimaten beheert Google Ads-campagnes voor schildersbedrijven. Meer aanvragen in jouw regio, alleen betalen voor relevante klikken.",
  areaServed: { "@type": "Country", name: "Nederland" },
  url: "https://groeimaten.com/google-ads-schildersbedrijven",
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://groeimaten.com" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Google Ads schildersbedrijven",
      item: "https://groeimaten.com/google-ads-schildersbedrijven",
    },
  ],
}

const voordelen = [
  "Betaal alleen als iemand op jouw advertentie klikt",
  "Alleen zichtbaar voor mensen in jouw werkgebied die nu willen laten schilderen",
  "Campagne aan en uit te zetten wanneer jij het wilt",
  "Maandelijkse rapportage: kosten per aanvraag, conversies en resultaat",
  "Geen langdurige contracten zonder prestatiemeting",
]

export default function GoogleAdsSchildersbedrijvenPage() {
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
                <span className="section-label">Google Ads schildersbedrijven</span>
                <h1 className="page-hero__title">
                  Google Ads voor schildersbedrijven:
                  <br />
                  <em>meer aanvragen in jouw regio.</em>
                </h1>
                <p className="page-hero__subtitle">
                  Iemand die zoekt naar &ldquo;schilder aan huis Amsterdam&rdquo; heeft al besloten dat hij wil laten schilderen. Hij googelt niet om zich te oriënteren. Hij zoekt iemand om te bellen. Groeimaten zorgt dat jij degene bent die hij te zien krijgt.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "28px" }}>
                  <Link href="/afspraak" className="btn btn--primary" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                    Bespreek jouw situatie {arrowIcon}
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 0" }}>
        <div className="container">
          <ScrollReveal>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 700, marginBottom: "24px", maxWidth: "600px" }}>
              Hoe Google Ads werkt voor een schildersbedrijf
            </h2>
            <p style={{ lineHeight: "1.8", maxWidth: "680px", marginBottom: "20px" }}>
              Google Ads toont jouw advertentie bovenaan de zoekresultaten als iemand in jouw regio zoekt op relevante zoektermen. Je betaalt per klik, alleen als iemand daadwerkelijk doorklikt naar jouw website of jou belt via de belbijlage in de advertentie.
            </p>
            <p style={{ lineHeight: "1.8", maxWidth: "680px", marginBottom: "20px" }}>
              Voor schildersbedrijven werkt dit goed omdat de intentie bij Google-zoekopdrachten hoog is. Mensen zoeken niet &ldquo;schilder&rdquo; als ze niet binnenkort willen laten schilderen. Het zijn vrijwel altijd koopklare zoekopdrachten.
            </p>
            <p style={{ lineHeight: "1.8", maxWidth: "680px", marginBottom: "40px" }}>
              Het verschil tussen een winstgevende campagne en een dure teleurstelling zit in de inrichting. Goede zoekwoordenselectie, strakke geografische afbakening en een landingspagina die bezoekers omzet naar aanvragen zijn geen bijzaak. Ze bepalen alles.
            </p>
            <div style={{ display: "grid", gap: "16px", maxWidth: "600px" }}>
              {voordelen.map((v, i) => (
                <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <span style={{ color: "oklch(65% 0.18 145)", marginTop: "2px", flexShrink: 0 }}>{checkIcon}</span>
                  <span style={{ lineHeight: "1.6" }}>{v}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section style={{ padding: "80px 0", background: "oklch(14% 0.01 260 / 0.4)" }}>
        <div className="container">
          <ScrollReveal>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, marginBottom: "24px", maxWidth: "600px" }}>
              Wat Groeimaten doet voor schildersbedrijven
            </h2>
            <p style={{ lineHeight: "1.8", maxWidth: "680px", marginBottom: "20px" }}>
              Groeimaten richt de campagne in, beheert die maandelijks en rapporteert transparant over de resultaten. Je weet altijd hoeveel je betaalt per aanvraag en of de campagne rendabel is.
            </p>
            <p style={{ lineHeight: "1.8", maxWidth: "680px", marginBottom: "20px" }}>
              We werken alleen met bedrijven in de bouw, installatie en afbouw. We kennen de markt, de seizoensinvloeden en de zoekpatronen. Dat scheelt een leercurve en levert direct een effectievere campagne op.
            </p>
            <p style={{ lineHeight: "1.8", maxWidth: "680px", marginBottom: "32px" }}>
              Een schildersbedrijf dat wil weten wat Google Ads voor zijn situatie kan doen, plant een gratis gesprek in. Dat duurt een halfuur en levert altijd een concreet beeld op van het potentieel.
            </p>
            <Link href="/afspraak" className="btn btn--primary" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
              Plan een gratis gesprek {arrowIcon}
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

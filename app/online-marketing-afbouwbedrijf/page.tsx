import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Online marketing voor afbouwbedrijven | Groeimaten",
  description:
    "Afbouwbedrijven die groeien via mond-tot-mondreclame lopen kansen mis. Online marketing brengt aanvragen van klanten die jou nog niet kennen maar wel nodig hebben.",
  alternates: {
    canonical: "https://groeimaten.com/online-marketing-afbouwbedrijf",
  },
  openGraph: {
    title: "Online marketing voor afbouwbedrijven | Groeimaten",
    description:
      "Groeimaten helpt afbouwbedrijven bij het structureel genereren van aanvragen via online marketing.",
    url: "https://groeimaten.com/online-marketing-afbouwbedrijf",
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
  name: "Online marketing voor afbouwbedrijven",
  provider: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  description:
    "Groeimaten helpt afbouwbedrijven bij online marketing: SEO, Google Ads en website waarmee ze structureel aanvragen genereren.",
  areaServed: { "@type": "Country", name: "Nederland" },
  url: "https://groeimaten.com/online-marketing-afbouwbedrijf",
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://groeimaten.com" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Online marketing afbouwbedrijf",
      item: "https://groeimaten.com/online-marketing-afbouwbedrijf",
    },
  ],
}

const aanpak = [
  "SEO voor zoektermen als 'stucadoor [stad]', 'tegelzetter offerte' of 'vloerlegger [regio]'",
  "Google Ads die aanvragen opleveren van koopklare zoekers",
  "Een website die referentiewerk toont en aanzet tot contact",
  "Google Bedrijfsprofiel optimalisatie voor lokale zichtbaarheid",
  "Maandelijkse rapportage over kosten en resultaat per kanaal",
]

export default function OnlineMarketingAfbouwbedrijfPage() {
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
                <span className="section-label">Afbouwbedrijf marketing</span>
                <h1 className="page-hero__title">
                  Online marketing voor afbouwbedrijven:
                  <br />
                  <em>structurele aanvragen.</em>
                </h1>
                <p className="page-hero__subtitle">
                  Stucadoors, vloerleggers, tegelzetters en andere afbouwbedrijven werken veel via doorverwijzingen. Dat werkt totdat je wilt groeien of een rustiger periode opvangen. Online marketing vult het gat.
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
              Waarom afbouwbedrijven online te weinig halen
            </h2>
            <p style={{ lineHeight: "1.8", maxWidth: "680px", marginBottom: "20px" }}>
              De meeste afbouwbedrijven hebben een website die al jaren hetzelfde is, een Google Bedrijfsprofiel dat niet actief bijgehouden wordt en geen advertentiebudget. Ze groeien puur via via.
            </p>
            <p style={{ lineHeight: "1.8", maxWidth: "680px", marginBottom: "20px" }}>
              Ondertussen zoeken mensen elke dag online naar stucadoors, vloerleggers en tegelzetters in hun regio. Die zoekopdrachten gaan naar bedrijven die wél vindbaar zijn. Bedrijven die niet vindbaar zijn, krijgen die aanvragen simpelweg niet.
            </p>
            <p style={{ lineHeight: "1.8", maxWidth: "680px", marginBottom: "40px" }}>
              Het goede nieuws: de concurrentie in de afbouwsector online is laag. Wie nu investeert in vindbaarheid, bouwt een positie op die maanden en jaren blijft staan.
            </p>
            <div style={{ display: "grid", gap: "16px", maxWidth: "600px" }}>
              {aanpak.map((v, i) => (
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
              Wat we voor afbouwbedrijven doen
            </h2>
            <p style={{ lineHeight: "1.8", maxWidth: "680px", marginBottom: "20px" }}>
              Groeimaten werkt voor bedrijven in de bouw, installatie en afbouwsector. We weten welke zoektermen relevant zijn voor stucadoors, tegelzetters, vloerleggers en aanverwante vakken. We weten welke budgetten realistisch zijn en welke resultaten je mag verwachten.
            </p>
            <p style={{ lineHeight: "1.8", maxWidth: "680px", marginBottom: "32px" }}>
              In een gratis gesprek bespreken we jouw bedrijf, jouw regio en jouw ambities. Je krijgt altijd een eerlijk beeld van wat er mogelijk is, zonder verkooppraatjes.
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

import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Marketing voor zonweringsbedrijven | Groeimaten",
  description:
    "Zonweringsbedrijven die willen groeien zonder afhankelijk te zijn van het seizoen. Groeimaten verzorgt marketing die het hele jaar aanvragen oplevert.",
  alternates: {
    canonical: "https://groeimaten.com/marketing-zonweringsbedrijf",
  },
  openGraph: {
    title: "Marketing voor zonweringsbedrijven | Groeimaten",
    description:
      "Marketing voor zonweringsbedrijven die structureel aanvragen willen genereren, ook buiten het seizoen.",
    url: "https://groeimaten.com/marketing-zonweringsbedrijf",
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
  name: "Marketing voor zonweringsbedrijven",
  provider: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  description:
    "Groeimaten verzorgt marketing voor zonweringsbedrijven. SEO, Google Ads en Meta Ads die het hele jaar aanvragen opleveren.",
  areaServed: { "@type": "Country", name: "Nederland" },
  url: "https://groeimaten.com/marketing-zonweringsbedrijf",
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://groeimaten.com" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Marketing zonweringsbedrijf",
      item: "https://groeimaten.com/marketing-zonweringsbedrijf",
    },
  ],
}

const aanpak = [
  "SEO zodat je gevonden wordt door mensen die nu zoeken naar zonwering",
  "Google Ads die direct aanvragen opleveren in jouw werkgebied",
  "Meta Ads voor zonnige periodes én als verlengseizoen-aanpak",
  "Een website die bezoekers omzet naar concrete aanvragen",
  "Transparante rapportage per kanaal en per maand",
]

export default function MarketingZonweringsbedrijfPage() {
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
                <span className="section-label">Zonweringsbedrijf marketing</span>
                <h1 className="page-hero__title">
                  Marketing voor zonweringsbedrijven
                  <br />
                  <em>die willen groeien.</em>
                </h1>
                <p className="page-hero__subtitle">
                  Zonwering is een seizoensproduct, maar aanvragen hoeven dat niet te zijn. Wie het hele jaar investeert in vindbaarheid en zichtbaarheid, heeft een volle agenda voor de zomer lang voordat de zon schijnt.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "28px" }}>
                  <Link href="/afspraak" className="btn btn--primary" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                    Plan een gratis gesprek {arrowIcon}
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
              Seizoensbedrijf, maar niet seizoensgebonden
            </h2>
            <p style={{ lineHeight: "1.8", maxWidth: "680px", marginBottom: "20px" }}>
              Veel zonweringsbedrijven merken dat hun aanvragen sterk stijgen zodra het warm wordt en wegzakken in de herfst en winter. Dat is logisch, maar het hoeft niet het hele verhaal te zijn.
            </p>
            <p style={{ lineHeight: "1.8", maxWidth: "680px", marginBottom: "20px" }}>
              Mensen die in mei of juni pas beginnen met zoeken, hebben hun beslissing vaak al eerder genomen. Ze hebben in de winter al nagedacht over wat ze willen doen met hun terras of balkon. Wie dan al vindbaar is, staat als eerste op het lijstje.
            </p>
            <p style={{ lineHeight: "1.8", maxWidth: "680px", marginBottom: "40px" }}>
              SEO en een goed bijgehouden Google Bedrijfsprofiel bouwen die positie het hele jaar op. Advertenties kun je intensiveren als het seizoen begint. Zo kom je de drukste weken in met een volle pijplijn in plaats van een lege agenda.
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
              Hoe Groeimaten werkt voor zonweringsbedrijven
            </h2>
            <p style={{ lineHeight: "1.8", maxWidth: "680px", marginBottom: "20px" }}>
              Groeimaten werkt voor bedrijven in de bouw, installatie en afbouw. Zonweringsbedrijven vallen in die categorie: ze leveren en plaatsen een product, hun klanten oriënteren zich online en de aankoopbeslissing is gepland, niet impulsief. Dat vraagt om een andere aanpak dan voor een winkel of webshop.
            </p>
            <p style={{ lineHeight: "1.8", maxWidth: "680px", marginBottom: "32px" }}>
              In een gratis gesprek bespreken we jouw situatie, jouw werkgebied en jouw doelen. Daarna maken we een plan dat past bij jouw bedrijfsgrootte en jouw budget. Geen standaardpakket, geen verplichting na het gesprek.
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

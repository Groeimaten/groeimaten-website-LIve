import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Website laten maken als glazenwasserij | Groeimaten",
  description:
    "Een website voor je glazenwasserij die gevonden wordt op Google en aanvragen oplevert van particulieren en bedrijven in jouw regio.",
  alternates: {
    canonical: "https://groeimaten.com/glazenwasserij-website",
  },
  openGraph: {
    title: "Website laten maken als glazenwasserij | Groeimaten",
    description:
      "Groeimaten bouwt websites voor glazenwasserijen die structureel nieuwe klanten aantrekken via Google.",
    url: "https://groeimaten.com/glazenwasserij-website",
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
  name: "Website laten maken glazenwasserij",
  provider: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  description:
    "Groeimaten bouwt websites voor glazenwasserijen die gevonden worden op Google en nieuwe klanten aantrekken in jouw regio.",
  areaServed: { "@type": "Country", name: "Nederland" },
  url: "https://groeimaten.com/glazenwasserij-website",
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://groeimaten.com" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Website glazenwasserij",
      item: "https://groeimaten.com/glazenwasserij-website",
    },
  ],
}

const voordelen = [
  "Gevonden worden op zoektermen als 'glazenwasser [stad]' en 'raammaatwassen particulier'",
  "Duidelijk onderscheid tussen particuliere en zakelijke dienstverlening",
  "Contactformulier met offerte-aanvraag direct zichtbaar",
  "Snel ladend op mobiel voor bezoekers die even snel bellen",
  "Google Bedrijfsprofiel koppeling voor lokale kaartresultaten",
]

export default function GlazenwasserijWebsitePage() {
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
                <span className="section-label">Website glazenwasserij</span>
                <h1 className="page-hero__title">
                  Website voor glazenwasserijen
                  <br />
                  <em>die werkt als leadmachine.</em>
                </h1>
                <p className="page-hero__subtitle">
                  Wie zoekt naar een glazenwasser in zijn stad, zoekt iemand die snel beschikbaar is en betrouwbaar werkt. Zorg dat jij degene bent die hij vindt. Groeimaten bouwt websites die precies dat doen.
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
              Wat een website voor een glazenwasserij moet kunnen
            </h2>
            <p style={{ lineHeight: "1.8", maxWidth: "680px", marginBottom: "20px" }}>
              Een glazenwasserij bedient twee doelgroepen: particulieren die hun ramen thuis schoon willen hebben, en bedrijven die een terugkerende service zoeken voor kantoor of winkel. Een goede website maakt dat onderscheid duidelijk en stuurt beide groepen naar de juiste informatie.
            </p>
            <p style={{ lineHeight: "1.8", maxWidth: "680px", marginBottom: "20px" }}>
              Lokale vindbaarheid is het allerbelangrijkste. Mensen die zoeken naar een glazenwasser doen dat altijd locatiegebonden. Een website zonder lokale SEO-structuur wordt simpelweg niet gevonden door mensen in jouw werkgebied.
            </p>
            <p style={{ lineHeight: "1.8", maxWidth: "680px", marginBottom: "40px" }}>
              Groeimaten bouwt websites die op beide punten sterk zijn: een heldere structuur voor zowel particulier als zakelijk, en een technische opbouw die Google vertelt voor welke locaties en zoektermen de site relevant is.
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
              Plan een gratis gesprek
            </h2>
            <p style={{ lineHeight: "1.8", maxWidth: "680px", marginBottom: "20px" }}>
              Groeimaten werkt voor bedrijven in de bouw, installatie en aanverwante sectoren. We weten hoe lokale dienstverleners online het beste gevonden worden en wat werkt om bezoekers om te zetten naar echte aanvragen.
            </p>
            <p style={{ lineHeight: "1.8", maxWidth: "680px", marginBottom: "32px" }}>
              Een gesprek is vrijblijvend en duurt een halfuur. Je krijgt altijd een eerlijk beeld van wat er voor jou mogelijk is, wat het kost en wanneer je resultaat kunt verwachten.
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

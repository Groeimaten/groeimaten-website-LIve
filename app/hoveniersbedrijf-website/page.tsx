import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Website laten maken hoveniersbedrijf | Groeimaten",
  description:
    "Een website voor je hoveniersbedrijf die structureel aanvragen oplevert. Groeimaten bouwt websites voor groen- en tuinbedrijven die gevonden worden op Google.",
  alternates: {
    canonical: "https://groeimaten.com/hoveniersbedrijf-website",
  },
  openGraph: {
    title: "Website laten maken hoveniersbedrijf | Groeimaten",
    description:
      "Groeimaten bouwt websites voor hoveniersbedrijven die structureel aanvragen genereren via Google.",
    url: "https://groeimaten.com/hoveniersbedrijf-website",
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
  name: "Website laten maken hoveniersbedrijf",
  provider: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  description:
    "Groeimaten bouwt websites voor hoveniersbedrijven die gevonden worden op Google en aanvragen genereren.",
  areaServed: { "@type": "Country", name: "Nederland" },
  url: "https://groeimaten.com/hoveniersbedrijf-website",
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://groeimaten.com" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Website hoveniersbedrijf",
      item: "https://groeimaten.com/hoveniersbedrijf-website",
    },
  ],
}

const voordelen = [
  "Gevonden worden op zoektermen als 'hovenier [stad]' en 'tuin aanleggen offerte'",
  "Snel ladend op mobiel, want de meeste zoekopdrachten komen via telefoon",
  "Contactformulier en telefoonnummer prominent zichtbaar",
  "Referentieprojecten met foto's die vertrouwen wekken",
  "Lokale SEO-structuur zodat je in jouw werkgebied vindbaar bent",
]

export default function HoveniersbedrijfWebsitePage() {
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
                <span className="section-label">Website hoveniersbedrijf</span>
                <h1 className="page-hero__title">
                  Website laten maken als hoveniersbedrijf
                  <br />
                  <em>die aanvragen oplevert.</em>
                </h1>
                <p className="page-hero__subtitle">
                  Een hoveniersbedrijf dat bovenaan staat in Google voor &ldquo;hovenier [jouw stad]&rdquo; heeft geen tekort aan aanvragen. Groeimaten bouwt websites die precies dat doen: gevonden worden door mensen die klaar zijn om te bestellen.
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
              Wat een goede website voor een hoveniersbedrijf doet
            </h2>
            <p style={{ lineHeight: "1.8", maxWidth: "680px", marginBottom: "40px" }}>
              De meeste mensen die een hovenier zoeken, zoeken iemand in hun eigen stad of regio. Ze typen &ldquo;hovenier Utrecht&rdquo; of &ldquo;tuin aanleggen Haarlem offerte&rdquo; en bellen wie er bovenaan staat. Een website die niet op die zoektermen vindbaar is, bestaat niet voor die klant.
            </p>
            <p style={{ lineHeight: "1.8", maxWidth: "680px", marginBottom: "40px" }}>
              Groeimaten bouwt websites voor hoveniersbedrijven die aan drie criteria voldoen. Ze laden snel op mobiel, want meer dan de helft van alle zoekopdrachten naar een hovenier komt via een telefoon. Ze hebben een duidelijke structuur per dienst en locatie, zodat Google precies begrijpt voor welke zoekopdrachten de site relevant is. En ze hebben een aantrekkelijke presentatie van eerder werk, zodat een bezoeker direct ziet met wat voor bedrijf hij te maken heeft.
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
              Van eerste gesprek tot online aanvragen
            </h2>
            <p style={{ lineHeight: "1.8", maxWidth: "680px", marginBottom: "20px" }}>
              Groeimaten werkt niet met standaardtemplates. Elke website die we bouwen is afgestemd op het type hoveniersbedrijf, het werkgebied en de diensten. Een bedrijf dat zich richt op villabewoners vraagt om een andere aanpak dan een bedrijf dat tuinonderhoud aanbiedt voor particulieren met een gemiddeld budget.
            </p>
            <p style={{ lineHeight: "1.8", maxWidth: "680px", marginBottom: "32px" }}>
              Na oplevering zorgen we ook voor de technische SEO: zodat Google de website correct indexeert en de pagina&apos;s voor de juiste zoektermen gaan ranken. Dat is niet iets wat vanzelf gaat, maar iets wat we structureel inbouwen in elke website die we opleveren.
            </p>
            <Link href="/afspraak" className="btn btn--primary" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
              Plan een gratis gesprek {arrowIcon}
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <section style={{ padding: "80px 0" }}>
        <div className="container" style={{ maxWidth: "680px" }}>
          <ScrollReveal>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, marginBottom: "24px" }}>
              Wat kost een website voor een hoveniersbedrijf?
            </h2>
            <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
              De kosten hangen af van het aantal pagina&apos;s, de complexiteit van de functionaliteiten en de gewenste doorlooptijd. In een gratis gesprek maken we een inschatting op basis van jouw situatie. We werken nooit met verborgen kosten of langdurige contracten zonder resultaatverplichting.
            </p>
            <p style={{ lineHeight: "1.8", marginBottom: "32px" }}>
              Een gesprek is altijd vrijblijvend en levert in elk geval een concreet beeld op van wat er voor jouw bedrijf mogelijk is.
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

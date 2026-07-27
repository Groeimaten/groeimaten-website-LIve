import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Naamsbekendheid vergroten als bouwbedrijf: wat werkt in de praktijk",
  description:
    "Naamsbekendheid bouwbedrijf vergroten vraagt een andere aanpak dan directe leadgeneratie. Welke kanalen en tactieken werken voor bouwbedrijven die meer bekendheid willen opbouwen?",
  alternates: {
    canonical: "https://groeimaten.com/blog/naamsbekendheid-bouwbedrijf",
  },
  openGraph: {
    title: "Naamsbekendheid vergroten als bouwbedrijf: wat werkt in de praktijk",
    description:
      "Hoe vergroot je als bouwbedrijf je naamsbekendheid bij de juiste doelgroep? Welke kanalen leveren de meeste herkenning op?",
    url: "https://groeimaten.com/blog/naamsbekendheid-bouwbedrijf",
  },
}

const arrowIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://groeimaten.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://groeimaten.com/blog" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Naamsbekendheid bouwbedrijf vergroten",
      item: "https://groeimaten.com/blog/naamsbekendheid-bouwbedrijf",
    },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Naamsbekendheid vergroten als bouwbedrijf: wat werkt in de praktijk",
  description:
    "Welke kanalen en tactieken werken voor bouwbedrijven die hun naamsbekendheid willen vergroten bij de juiste doelgroep?",
  author: { "@type": "Organization", name: "Groeimaten" },
  publisher: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  datePublished: "2026-07-20",
  url: "https://groeimaten.com/blog/naamsbekendheid-bouwbedrijf",
}

export default function BlogNaamsbekendheidBouwbedrijfPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <section className="page-hero page-hero--split" style={{ paddingBottom: "48px" }}>
        <div className="page-hero__glow page-hero__glow--1" aria-hidden="true" />
        <div className="page-hero__glow page-hero__glow--2" aria-hidden="true" />
        <div className="container">
          <div style={{ maxWidth: "780px", paddingTop: "120px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
              <Link href="/blog" style={{ color: "oklch(65% 0.09 75)", textDecoration: "none", fontSize: "0.85rem" }}>
                Blog
              </Link>
              <span style={{ color: "oklch(45% 0 0)", fontSize: "0.85rem" }}>›</span>
              <span style={{ color: "oklch(55% 0 0)", fontSize: "0.85rem" }}>Naamsbekendheid bouwbedrijf vergroten</span>
            </div>
            <span className="section-label">Merkstrategie</span>
            <h1
              className="page-hero__title"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", lineHeight: "1.2", marginTop: "12px" }}
            >
              Naamsbekendheid vergroten als bouwbedrijf: wat werkt in de praktijk
            </h1>
            <p className="page-hero__subtitle" style={{ marginTop: "20px" }}>
              De meeste bouwbedrijven zijn druk met het binnenhalen van de volgende opdracht. Naamsbekendheid
              opbouwen lijkt dan een luxe. Toch maakt het op de lange termijn het verschil tussen afhankelijk
              zijn van mond-tot-mondreclame en een herkenbaar merk zijn in de regio.
            </p>
            <p style={{ color: "oklch(55% 0 0)", fontSize: "0.88rem", marginTop: "12px" }}>
              Groeimaten · 20 juli 2026 · 5 min lezen
            </p>
          </div>
        </div>
      </section>

      <section className="service-detail" style={{ paddingTop: "20px", paddingBottom: "80px" }}>
        <div className="container">
          <article
            style={{
              maxWidth: "760px",
              color: "oklch(78% 0 0)",
              lineHeight: "1.85",
              fontSize: "1.05rem",
            }}
          >
            <p>
              Naamsbekendheid en leadgeneratie zijn niet hetzelfde, al hangen ze nauw samen. Leadgeneratie richt
              zich op mensen die nu actief zoeken naar een aannemer. Naamsbekendheid richt zich op de grotere groep
              mensen die dat in de toekomst zullen doen maar nog niet klaar zijn. Het is het verschil tussen iemand
              overtuigen die al koopklaar is en zorgen dat jouw naam als eerste opkomt als ze dat moment bereiken.
            </p>

            <h2
              style={{
                color: "oklch(95% 0 0)",
                fontSize: "clamp(1.3rem, 3vw, 1.75rem)",
                fontWeight: 700,
                marginTop: "52px",
                marginBottom: "20px",
                lineHeight: "1.3",
              }}
            >
              Sociale media als etalage voor je werk
            </h2>
            <p>
              Instagram en Facebook werken goed voor bouwbedrijven die visueel werk doen. Renovaties, nieuwbouw en
              verbouwingen zijn fotogeniek. Een gestructureerde aanwezigheid op Instagram met foto&apos;s van projecten
              in uitvoering en na oplevering bouwt gedurende maanden een publiek op dat je werk kent zonder ooit
              actief naar je gezocht te hebben.
            </p>
            <p>
              Het gaat er niet om hoeveel volgers je hebt. Het gaat erom of de mensen die jou volgen ook de mensen
              zijn die verbouwingen plannen. Een lokale Instagram-aanwezigheid die consequent projecten deelt
              uit de eigen regio bereikt over tijd de juiste mensen. Een retargetingcampagne op die betrokken
              doelgroep zorgt dat je zichtbaar blijft wanneer ze actief gaan zoeken.
            </p>

            <h2
              style={{
                color: "oklch(95% 0 0)",
                fontSize: "clamp(1.3rem, 3vw, 1.75rem)",
                fontWeight: 700,
                marginTop: "52px",
                marginBottom: "20px",
                lineHeight: "1.3",
              }}
            >
              Google Mijn Bedrijf als lokaal ankerpunt
            </h2>
            <p>
              Voor bouwbedrijven is lokale naamsbekendheid belangrijker dan nationale. De meeste opdrachtgevers
              werken liever met een aannemer uit de regio. Google Mijn Bedrijf is het platform dat lokale
              zichtbaarheid het meest direct beïnvloedt.
            </p>
            <p>
              Een volledig ingevuld profiel met foto&apos;s van projecten, een accurate beschrijving van diensten en
              regio en actieve verzameling van Google-reviews bouwt vertrouwen op bij mensen die je naam zien in
              de zoekresultaten. Reviews zijn ook een directe vorm van naamsbekendheid: een aannemer met 60
              reviews van 4,9 sterren wordt herkend als speler die er toe doet in de regio.
            </p>

            <h2
              style={{
                color: "oklch(95% 0 0)",
                fontSize: "clamp(1.3rem, 3vw, 1.75rem)",
                fontWeight: 700,
                marginTop: "52px",
                marginBottom: "20px",
                lineHeight: "1.3",
              }}
            >
              Sponsoring en lokale zichtbaarheid
            </h2>
            <p>
              Naamsbekendheid hoeft niet uitsluitend via digitale kanalen te gaan. Sponsoring van een lokale
              sportvereniging, deelname aan beurzen voor wonen en verbouwen of presentatie in lokale media zijn
              aanvullende manieren om het merk zichtbaar te maken bij de doelgroep.
            </p>
            <p>
              Die offline naamsbekendheid versterkt de online activiteiten. Iemand die jouw naam al kent van een
              evenement, klikt sneller op een advertentie of neemt eerder contact op na het zien van een project
              op social media. Herkenning verlaagt de drempel.
            </p>

            <h2
              style={{
                color: "oklch(95% 0 0)",
                fontSize: "clamp(1.3rem, 3vw, 1.75rem)",
                fontWeight: 700,
                marginTop: "52px",
                marginBottom: "20px",
                lineHeight: "1.3",
              }}
            >
              Naamsbekendheid meten
            </h2>
            <p>
              Naamsbekendheid is moeilijker te meten dan directe leads, maar niet onmogelijk. Directe zoekopdrachten
              op je bedrijfsnaam in Google Search Console geven aan of mensen actief naar je zoeken. Een stijging
              van die zoekopdrachten over tijd duidt op groeiende bekendheid.
            </p>
            <p>
              Andere indicatoren zijn het bereik op social media, het aantal reviews per periode en het percentage
              nieuwe bezoekers op de website dat via directe zoekopdracht of merkzoekwoorden binnenkomt. Samen
              schetsen die cijfers een beeld van hoe bekend het bedrijf is bij de doelgroep.
            </p>

            <div
              style={{
                backgroundColor: "oklch(12% 0 0)",
                borderRadius: "12px",
                padding: "32px",
                border: "1px solid oklch(20% 0 0)",
                marginTop: "52px",
              }}
            >
              <p style={{ color: "oklch(90% 0 0)", fontWeight: 600, marginBottom: "12px", fontSize: "1.1rem" }}>
                Meer weten over naamsbekendheid opbouwen voor jouw bouwbedrijf?
              </p>
              <p style={{ marginBottom: "20px", color: "oklch(70% 0 0)" }}>
                Groeimaten helpt bouwbedrijven met een strategie die zowel op korte termijn leads oplevert als
                op lange termijn merkbekendheid opbouwt. Plan een gratis gesprek.
              </p>
              <Link href="/afspraak" className="btn btn--blue btn--lg">
                Plan een gratis gesprek {arrowIcon}
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}

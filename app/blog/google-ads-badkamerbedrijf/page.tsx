import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Google Ads voor je badkamerbedrijf: zo wordt elk euro goed besteed",
  description:
    "Google Ads is voor een badkamerbedrijf een van de meest directe manieren om koopklare klanten te bereiken. Maar een slechte campagne kost meer dan hij oplevert.",
  alternates: {
    canonical: "https://groeimaten.com/blog/google-ads-badkamerbedrijf",
  },
  openGraph: {
    title: "Google Ads voor je badkamerbedrijf: zo wordt elk euro goed besteed",
    description:
      "Google Ads voor een badkamerbedrijf: hoe het werkt, welke fouten je vermijdt en wat realistische resultaten zijn.",
    url: "https://groeimaten.com/blog/google-ads-badkamerbedrijf",
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
      name: "Google Ads voor badkamerbedrijf",
      item: "https://groeimaten.com/blog/google-ads-badkamerbedrijf",
    },
  ],
}

export default function BlogGoogleAdsBadkamerbedrijfPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

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
              <span style={{ color: "oklch(55% 0 0)", fontSize: "0.85rem" }}>Google Ads badkamerbedrijf</span>
            </div>
            <span className="section-label">Google Ads</span>
            <h1
              className="page-hero__title"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", lineHeight: "1.2", marginTop: "12px" }}
            >
              Google Ads voor je badkamerbedrijf: zo wordt elk euro goed besteed
            </h1>
            <p className="page-hero__subtitle" style={{ marginTop: "20px" }}>
              Iemand die zoekt op &ldquo;badkamerrenovatie offerte&rdquo; wil geen inspiratie, die wil een aannemer
              bellen. Google Ads voor een badkamerbedrijf plaatst jou bovenaan op dat moment. Maar een slecht
              ingestelde campagne kost in korte tijd veel geld zonder een enkele kwalitatieve aanvraag op te leveren.
            </p>
            <p style={{ color: "oklch(55% 0 0)", fontSize: "0.88rem", marginTop: "12px" }}>
              Groeimaten · 16 juni 2026 · 5 min lezen
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
              Google Ads werkt op basis van zoekwoorden. Jij bepaalt op welke zoekopdrachten jouw advertentie
              verschijnt. Je betaalt per klik. Hoe relevanter jouw advertentie en landingspagina voor die
              zoekopdracht zijn, hoe goedkoper je klikken worden. In theorie simpel. In de praktijk zit er
              een flink verschil tussen een campagne die geld kost en een campagne die geld oplevert.
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
              Hoe Google Ads werkt voor een badkamerbedrijf
            </h2>
            <p>
              Voor badkamerbedrijven zijn er drie soorten zoekopdrachten relevant. Koopgerichte zoekopdrachten,
              zoals &ldquo;badkamer laten renoveren [stad]&rdquo; of &ldquo;badkamer installateur offerte&rdquo;.
              Vergelijkende zoekopdrachten, zoals &ldquo;badkamerbedrijf vergelijken&rdquo; of &ldquo;beste
              badkamer showroom [regio]&rdquo;. En productgerichte zoekopdrachten, zoals namen van merken die
              je verkoopt.
            </p>
            <p>
              Elk type vraagt om een andere advertentietekst en een andere landingspagina. Iemand die vergelijkt
              is nog niet klaar om te kopen. Iemand die een offerte aanvraagt, is dat wel. Wie die twee in
              dezelfde campagne gooit, betaalt voor klikken die niets opleveren.
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
              De meest gemaakte fouten
            </h2>
            <p>
              De meeste badkamerbedrijven die Google Ads zelf proberen, maken dezelfde fouten.
            </p>
            <p>
              Ze gebruiken breed matchende zoekwoorden. Hierdoor verschijnt hun advertentie bij zoekopdrachten
              die helemaal niet relevant zijn. Iemand zoekt &ldquo;badkamer tegels zelf leggen&rdquo; en ziet
              jouw advertentie voor badkamerrenovatie. Geld verspild.
            </p>
            <p>
              Ze sturen al het verkeer naar de homepage. De homepage is niet de beste bestemming voor iemand
              die zoekt naar &ldquo;badkamer renoveren offerte aanvragen&rdquo;. Een specifieke landingspagina
              met een helder contactformulier converteert gemiddeld twee tot drie keer beter dan een homepage.
            </p>
            <p>
              Ze stellen geen negatieve zoekwoorden in. Zonder negatieve zoekwoorden betaal je voor klikken van
              mensen die nooit klant worden. &ldquo;Badkamer zelf renoveren&rdquo; is een voorbeeld van een
              zoekwoord dat je wil uitsluiten.
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
              Wat een effectieve campagne onderscheidt
            </h2>
            <p>
              Een effectieve Google Ads-campagne voor een badkamerbedrijf heeft een aantal vaste onderdelen.
              Exacte en zinsdeel matchende zoekwoorden die aansluiten bij koopintentie. Een specifieke
              landingspagina per dienst. Geografische targeting op het gebied waar je actief bent. En een
              heldere opvolging van de aanvragen die binnenkomen.
            </p>
            <p>
              De combinatie van goed gekozen zoekwoorden en een sterke landingspagina bepaalt meer dan negentig
              procent van het resultaat. De rest is optimalisatie op basis van data uit de eerste weken.
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
              Wat je mag verwachten
            </h2>
            <p>
              Bij een maandelijks advertentiebudget van 500 tot 1.000 euro zijn tien tot vijftien kwalitatieve
              aanvragen per maand realistisch, afhankelijk van jouw regio en de concurrentie daarin. Met een
              gemiddeld projectbedrag van 8.000 tot 20.000 euro is het rendement positief vanaf de eerste
              opdracht.
            </p>
            <p>
              Google Ads voor een badkamerbedrijf werkt. Maar alleen als de fundamenten kloppen: de juiste
              zoekwoorden, de juiste pagina en de juiste opvolging van aanvragen.
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
                Google Ads voor jouw badkamerbedrijf opzetten?
              </p>
              <p style={{ marginBottom: "20px", color: "oklch(70% 0 0)" }}>
                Plan een gratis strategiegesprek. We bekijken jouw regio, concurrentie en budget en vertellen
                je eerlijk wat er haalbaar is.
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

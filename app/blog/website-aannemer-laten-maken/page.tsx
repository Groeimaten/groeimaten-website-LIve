import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Website laten maken als aannemer: dit zijn de vereisten",
  description:
    "Een website laten maken als aannemer vraagt om andere keuzes dan bij een webshop of informatiesite. Wat heeft een aannemersbedrijf echt nodig om online aanvragen te genereren?",
  alternates: {
    canonical: "https://groeimaten.com/blog/website-aannemer-laten-maken",
  },
  openGraph: {
    title: "Website laten maken als aannemer: dit zijn de vereisten",
    description:
      "Wat heeft een aannemersbedrijf echt nodig om online aanvragen te genereren? De vereisten voor een goede aannemerswebsite.",
    url: "https://groeimaten.com/blog/website-aannemer-laten-maken",
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
      name: "Website aannemer laten maken",
      item: "https://groeimaten.com/blog/website-aannemer-laten-maken",
    },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Website laten maken als aannemer: dit zijn de vereisten",
  description:
    "Wat heeft een aannemersbedrijf echt nodig om online aanvragen te genereren?",
  author: { "@type": "Organization", name: "Groeimaten" },
  publisher: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  datePublished: "2026-06-29",
  url: "https://groeimaten.com/blog/website-aannemer-laten-maken",
}

export default function BlogWebsiteAannemerPage() {
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
              <span style={{ color: "oklch(55% 0 0)", fontSize: "0.85rem" }}>Website aannemer laten maken</span>
            </div>
            <span className="section-label">Website</span>
            <h1
              className="page-hero__title"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", lineHeight: "1.2", marginTop: "12px" }}
            >
              Website laten maken als aannemer: dit zijn de vereisten
            </h1>
            <p className="page-hero__subtitle" style={{ marginTop: "20px" }}>
              Veel aannemers hebben een website die er goed uitziet maar weinig aanvragen oplevert. Het probleem
              zit zelden in het design. Een aannemerswebsite stelt andere eisen dan een gemiddelde bedrijfssite.
            </p>
            <p style={{ color: "oklch(55% 0 0)", fontSize: "0.88rem", marginTop: "12px" }}>
              Groeimaten · 29 juni 2026 · 6 min lezen
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
              Een aannemer die een nieuwe website laat maken, wil één ding: meer aanvragen. Niet meer bezoekers,
              niet een hogere positie in Google als doel op zich, maar concrete offerte-aanvragen van mensen die
              serieus een klus willen uitvoeren. Die focus moet de leidraad zijn bij elke beslissing in het
              bouwproces van de website.
            </p>
            <p>
              De meeste webbureau&apos;s denken in templates, kleuren en structuren. Dat is niet per se verkeerd,
              maar het is onvoldoende als je een website wilt die voor een aannemersbedrijf werkt. De sector heeft
              specifieke kenmerken die de website moet adresseren.
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
              Vertrouwen is de drempel die elke aannemerswebsite moet slechten
            </h2>
            <p>
              Een nieuwe keuken of badkamer laten plaatsen is al een grote stap. Een verbouwing of uitbouw laten
              uitvoeren is een nóg grotere stap. Mensen zetten er tienduizenden euro&apos;s op, en ze leven weken
              of maanden met de aannemer in huis. De drempel om contact op te nemen is daardoor hoog.
            </p>
            <p>
              Een goede aannemerswebsite verlaagt die drempel actief. Dat doe je met foto&apos;s van afgeronde
              projecten, bij voorkeur van begin tot eind, met een korte uitleg van wat er is gedaan. Reviews van
              tevreden opdrachtgevers werken sterk, zeker als ze herkenbaar zijn: naam, soort werk, locatie. Een
              bedrijfsvideo of foto&apos;s van het team maken het menselijker. Mensen werken liever met een
              aannemer die ze &ldquo;kennen&rdquo; dan met een anoniem bedrijf.
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
              Aparte pagina&apos;s per dienst en regio
            </h2>
            <p>
              Een aannemerswebsite met één pagina &ldquo;onze diensten&rdquo; scoort slecht in Google en converteert
              matig. Google wil specifieke, relevante pagina&apos;s voor specifieke zoekopdrachten. Een aannemer die
              uitbouwen, badkamerrenovaties en dakkapellen plaatst, heeft drie aparte dienstpagina&apos;s nodig.
              Elk geoptimaliseerd voor de zoekterm die daarbij hoort.
            </p>
            <p>
              Hetzelfde geldt voor werkgebied. Een aannemer actief in de regio Utrecht kan per stad of gemeente
              een aparte pagina aanmaken. Die pagina beantwoordt een lokale zoekopdracht en geeft Google het signaal
              dat jij relevant bent voor die specifieke locatie. Dit kost tijd om op te zetten, maar het is een van
              de meest effectieve SEO-tactieken voor aannemers.
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
              Snelheid en mobielvriendelijkheid zijn geen extra&apos;s
            </h2>
            <p>
              Meer dan 60 procent van het zoekverkeer voor lokale dienstverleners komt van mobiele apparaten.
              Iemand die op zijn telefoon zoekt naar een aannemer in zijn stad, wacht niet op een trage website.
              Als een pagina langer dan drie seconden nodig heeft om te laden, verlaat een groot deel van de
              bezoekers de site al voordat ze iets gezien hebben.
            </p>
            <p>
              Snelheid is ook een rankingfactor voor Google. Een snelle website scoort beter dan een trage website
              met exact dezelfde inhoud. Voor een aannemerswebsite betekent dit: geen zware afbeeldingen zonder
              compressie, geen onnodige scripts en een hosting die de laadtijd niet vertraagt.
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
              Het contactformulier bepaalt hoeveel aanvragen je krijgt
            </h2>
            <p>
              Een contactformulier met twintig verplichte velden ontmoedigt. Mensen die een offerte aanvragen,
              willen snel hun vraag stellen en wachten op een reactie. Een formulier met drie velden, naam, e-mail
              of telefoonnummer en een korte beschrijving van het werk, werkt beter dan een uitgebreide intake.
              De details volgen later in het gesprek.
            </p>
            <p>
              Zorg ook dat het telefoonnummer altijd zichtbaar is. Veel mensen bellen liever dan dat ze een
              formulier invullen. Een klikbaar telefoonnummer in de mobiele weergave maakt dat laagdrempeliger.
              Elke extra drempel die je wegneemt, verhoogt het aantal contactmomenten.
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
                Wil je een website die daadwerkelijk aanvragen genereert?
              </p>
              <p style={{ marginBottom: "20px", color: "oklch(70% 0 0)" }}>
                Groeimaten bouwt websites specifiek voor keuken, badkamer en bouwbedrijven. Plan een gesprek en
                we vertellen je wat jouw website mist.
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

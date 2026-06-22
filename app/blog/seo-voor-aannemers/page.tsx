import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "SEO voor aannemers: gevonden worden door de juiste opdrachtgevers",
  description:
    "Aannemers die structureel gevonden worden via Google hebben een grote voorsprong. Hoe werkt SEO voor aannemers en wat zijn de drie gebieden die direct resultaat geven?",
  alternates: {
    canonical: "https://groeimaten.com/blog/seo-voor-aannemers",
  },
  openGraph: {
    title: "SEO voor aannemers: gevonden worden door de juiste opdrachtgevers",
    description:
      "Hoe werkt SEO voor aannemers en wat zijn de drie gebieden die direct resultaat geven? Groeimaten legt het uit.",
    url: "https://groeimaten.com/blog/seo-voor-aannemers",
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
    { "@type": "ListItem", position: 3, name: "SEO voor aannemers", item: "https://groeimaten.com/blog/seo-voor-aannemers" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "SEO voor aannemers: gevonden worden door de juiste opdrachtgevers",
  description:
    "Hoe werkt SEO voor aannemers en wat zijn de drie gebieden die direct resultaat geven?",
  author: { "@type": "Organization", name: "Groeimaten" },
  publisher: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  datePublished: "2026-06-22",
  url: "https://groeimaten.com/blog/seo-voor-aannemers",
}

export default function BlogSeoAannemerPage() {
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
              <span style={{ color: "oklch(55% 0 0)", fontSize: "0.85rem" }}>SEO voor aannemers</span>
            </div>
            <span className="section-label">SEO</span>
            <h1
              className="page-hero__title"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", lineHeight: "1.2", marginTop: "12px" }}
            >
              SEO voor aannemers: gevonden worden door de juiste opdrachtgevers
            </h1>
            <p className="page-hero__subtitle" style={{ marginTop: "20px" }}>
              Mond-tot-mondreclame heeft zijn grenzen. Aannemers die structureel groeien bouwen ook online een positie op. SEO is daarvoor het meest duurzame kanaal.
            </p>
            <p style={{ color: "oklch(55% 0 0)", fontSize: "0.88rem", marginTop: "12px" }}>
              Groeimaten · 22 juni 2026 · 6 min lezen
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
              De meeste aannemers groeien in eerste instantie op aanbevelingen. Een tevreden klant vertelt het door, een architect stuurt werk toe, een oud-opdrachtgever vraagt opnieuw aan. Dat werkt, maar het is onvoorspelbaar. Je kunt niet plannen hoeveel werk er volgende maand binnenkomt. SEO voor aannemers biedt een structurele aanvulling: potentiële opdrachtgevers die actief zoeken naar jouw type werk.
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
              Hoe aannemers gezocht worden op Google
            </h2>
            <p>
              Iemand die een aannemer zoekt typt geen vage termen. Hij zoekt specifiek: &ldquo;aannemer renovatie Amsterdam&rdquo;, &ldquo;aannemer uitbouw woning Utrecht&rdquo; of &ldquo;verbouwing badkamer aannemer Den Haag.&rdquo; De zoekintentie is concreet. De persoon is al bezig met zijn project en wil een partij vinden.
            </p>
            <p>
              Dit onderscheidt aannemers-SEO van veel andere sectoren. Je hoeft geen brede massa te bereiken. Je wilt aanwezig zijn op het moment dat iemand in jouw regio, voor jouw type werk, op zoek is naar een vakman. Dat maakt lokale SEO voor aannemers bijzonder waardevol: de concurrentie om die specifieke zoekopdrachten is beheersbaar, en de klanten die erop klikken zijn serieus.
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
              Google Mijn Bedrijf: het startpunt voor elke aannemer
            </h2>
            <p>
              Veel aannemers hebben wel een Google Mijn Bedrijf-profiel maar besteden er weinig aandacht aan. Dat is een gemiste kans. Voor lokale zoekopdrachten op mobiel is het profiel vaak zichtbaarder dan de website zelf. Iemand die op zijn telefoon zoekt naar een aannemer in zijn stad ziet eerst de kaart met bedrijven, pas daarna de organische zoekresultaten.
            </p>
            <p>
              Een goed ingericht Google Mijn Bedrijf-profiel bevat actuele openingstijden, specifieke diensten, goede foto&apos;s van afgeronde projecten en regelmatige updates. Reviews van tevreden opdrachtgevers zijn misschien wel het belangrijkste onderdeel: ze wegen zwaar mee in hoe prominent je verschijnt en ze bepalen direct of iemand contact opneemt.
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
              Dienstpagina&apos;s per specialisatie
            </h2>
            <p>
              Een website met één algemene pagina &ldquo;over onze aannemersdiensten&rdquo; scoort slecht. Google wil relevante pagina&apos;s zien voor specifieke zoekopdrachten. Een aannemer die uitbouwen, renovaties en nieuwbouw doet heeft drie aparte pagina&apos;s nodig, elk geoptimaliseerd voor de zoekterm die bij die dienst hoort.
            </p>
            <p>
              Ditzelfde geldt voor werkgebied. Een aannemer die actief is in meerdere steden of regio&apos;s kan per locatie een pagina maken met relevante informatie over zijn werk in die regio. Dat klinkt als veel werk, maar het is precies het type content dat lokale zoekopdrachten beantwoordt en jou zichtbaar maakt op het moment dat het telt.
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
              Projectpagina&apos;s als SEO en verkooptool tegelijk
            </h2>
            <p>
              Aannemers hebben iets wat de meeste bedrijven niet hebben: zichtbare, tastbare resultaten. Een renovatie die je hebt afgerond, een uitbouw die je hebt gebouwd, een badkamer die je volledig hebt verbouwd. Die projecten zijn uitstekend geschikt als SEO-content.
            </p>
            <p>
              Een projectpagina met goede foto&apos;s, een korte omschrijving van het werk en de locatie doet twee dingen tegelijk. Het geeft Google relevante content om te indexeren voor lokale en projectspecifieke zoekopdrachten. En het geeft potentiële opdrachtgevers het bewijs dat jij het werk kunt leveren dat ze zoeken. Twee vliegen in één klap.
            </p>
            <p>
              SEO voor aannemers is geen sprint maar een investering die na drie tot zes maanden resultaat begint te tonen. Aannemers die vroeg beginnen bouwen een organische positie op die concurrenten moeilijk kunnen bijbenen, zonder dat er elke maand advertentiebudget tegenaan moet.
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
                Wil je weten hoe jouw aannemersbedrijf beter gevonden kan worden?
              </p>
              <p style={{ marginBottom: "20px", color: "oklch(70% 0 0)" }}>
                Plan een gratis strategiegesprek. We bekijken jouw huidige online zichtbaarheid en vertellen je wat er beter kan.
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

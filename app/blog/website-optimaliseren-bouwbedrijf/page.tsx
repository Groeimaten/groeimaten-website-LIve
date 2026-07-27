import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Website optimaliseren als bouwbedrijf: meer aanvragen uit hetzelfde verkeer",
  description:
    "Een bouwbedrijf met 500 websitebezoekers per maand en 3 aanvragen doet iets fundamenteel anders dan een concurrent met dezelfde traffic maar 12 aanvragen. Wat maakt het verschil?",
  alternates: {
    canonical: "https://groeimaten.com/blog/website-optimaliseren-bouwbedrijf",
  },
  openGraph: {
    title: "Website optimaliseren als bouwbedrijf: meer aanvragen uit hetzelfde verkeer",
    description:
      "Wat maakt het verschil tussen een bouwsite met 3 aanvragen per maand en één met 12, bij dezelfde hoeveelheid bezoekers?",
    url: "https://groeimaten.com/blog/website-optimaliseren-bouwbedrijf",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website optimaliseren als bouwbedrijf: meer aanvragen uit hetzelfde verkeer",
    description: "Wat maakt het verschil tussen een bouwsite met 3 aanvragen per maand en één met 12, bij dezelfde bezoekers?",
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
      name: "Website optimaliseren bouwbedrijf",
      item: "https://groeimaten.com/blog/website-optimaliseren-bouwbedrijf",
    },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Website optimaliseren als bouwbedrijf: meer aanvragen uit hetzelfde verkeer",
  description:
    "Wat maakt het verschil tussen een bouwsite met 3 aanvragen per maand en één met 12, bij dezelfde hoeveelheid bezoekers?",
  author: { "@type": "Organization", name: "Groeimaten" },
  publisher: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  datePublished: "2026-07-27",
  url: "https://groeimaten.com/blog/website-optimaliseren-bouwbedrijf",
}

export default function BlogWebsiteOptimaliserenBouwbedrijfPage() {
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
              <span style={{ color: "oklch(55% 0 0)", fontSize: "0.85rem" }}>Website optimaliseren bouwbedrijf</span>
            </div>
            <span className="section-label">Website</span>
            <h1
              className="page-hero__title"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", lineHeight: "1.2", marginTop: "12px" }}
            >
              Website optimaliseren als bouwbedrijf: meer aanvragen uit hetzelfde verkeer
            </h1>
            <p className="page-hero__subtitle" style={{ marginTop: "20px" }}>
              Meer bezoekers via advertenties of SEO is één manier om meer aanvragen te krijgen.
              Maar een bouwbedrijf dat zijn conversiepercentage verdubbelt van 0,6 naar 1,2 procent
              krijgt precies evenveel aanvragen extra, zonder één extra euro aan marketing uit te geven.
            </p>
            <p style={{ color: "oklch(55% 0 0)", fontSize: "0.88rem", marginTop: "12px" }}>
              Groeimaten · 27 juli 2026 · 7 min lezen
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
              Het conversiepercentage van een bouwwebsite, het percentage bezoekers dat contact opneemt,
              ligt gemiddeld tussen de 0,5 en 2 procent. Binnen die bandbreedte zijn grote verschillen.
              Een bouwbedrijf met een slecht converterende website verliest potentiële opdrachtgevers
              die al op zijn pagina stonden maar geen actie ondernamen.
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
              Het contactformulier: minder velden, meer aanvragen
            </h2>
            <p>
              Een contactformulier met tien verplichte velden heeft een lagere invulratio dan een
              formulier met drie velden. Dat klinkt logisch, maar de meeste bouwwebsites vragen nog
              steeds naar het type opdracht, de gewenste startdatum, het budget, het adres en de naam
              van de opdrachtgever, voordat er ook maar contact is geweest.
            </p>
            <p>
              Vraag minimale informatie om het gesprek te starten: naam, telefoonnummer en een korte
              omschrijving van de opdracht. Meer heeft het contactmoment niet nodig. De rest vraag je
              in het gesprek.
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
              Vertrouwen opbouwen voor de klik
            </h2>
            <p>
              Een verbouwing van 40.000 euro vraagt vertrouwen. Dat vertrouwen bouwt een website
              niet op met slogans maar met bewijs. Foto&apos;s van afgerond werk zijn het krachtigste
              middel. Foto&apos;s die je herkent als echt, gemaakt op locatie in de regio van de
              bezoeker, werken beter dan stockfoto&apos;s of te gelikte projectfoto&apos;s.
            </p>
            <p>
              Reviews van echte klanten, bij voorkeur met naam en woonplaats, zijn het tweede
              krachtigste vertrouwensignaal. Een bouwbedrijf met 35 reviews op Google of op de
              website wekt meer vertrouwen dan een bedrijf zonder reviews, ook als de website van
              dat laatste bedrijf er mooier uitziet.
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
              Snelheid en mobiel gebruik
            </h2>
            <p>
              Meer dan de helft van de bezoekers van een bouwwebsite komt via mobiel. Een pagina die
              op mobiel traag laadt of onoverzichtelijk is, verliest die bezoekers voordat ze ook maar
              een pagina hebben gezien. Google straft trage websites ook in de zoekresultaten.
            </p>
            <p>
              Streef naar een laadtijd onder de twee seconden op mobiel. Dat is haalbaar door afbeeldingen
              te comprimeren, onnodige scripts te verwijderen en een moderne hosting te gebruiken.
              Een laadtijd van vier seconden staat gelijk aan een conversieverlies van 25 procent
              ten opzichte van een pagina die in twee seconden laadt.
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
              Één duidelijke actie per pagina
            </h2>
            <p>
              Een bouwwebsite met vijf verschillende call-to-actions, een chatvenster, een pop-up
              voor een nieuwsbrief en een video die vanzelf start, vraagt te veel van de bezoeker.
              Elke pagina heeft één primaire actie: een offerte aanvragen, bellen of een afspraak
              inplannen. Meer keuzes leiden tot minder actie.
            </p>
            <p>
              Zet die ene actie prominent neer, herhaal hem halverwege de pagina en onderaan.
              Geef de CTA een kleur die opvalt zonder de rest van de pagina te verstoren.
              Dat klinkt simpel, maar de meeste bouwwebsites doen het omgekeerde.
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
                Wil je weten wat jouw website laat liggen?
              </p>
              <p style={{ marginBottom: "20px", color: "oklch(70% 0 0)" }}>
                Plan een gratis gesprek en we analyseren jouw website op de punten die het meeste
                effect hebben op conversie. Je krijgt concrete feedback, geen algemene tips.
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

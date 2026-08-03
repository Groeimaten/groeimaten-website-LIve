import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Google Ads voor renovatiebedrijven: wat werkt en wat niet",
  description:
    "Google Ads voor renovatiebedrijven levert directe aanvragen op als campagnes goed zijn ingericht. Wat zijn de valkuilen en hoe zet je het effectief in?",
  alternates: {
    canonical: "https://groeimaten.com/blog/google-ads-renovatiebedrijven",
  },
  openGraph: {
    title: "Google Ads voor renovatiebedrijven: wat werkt en wat niet",
    description:
      "Hoe renovatiebedrijven Google Ads effectief inzetten voor directe aanvragen en meer opdrachten.",
    url: "https://groeimaten.com/blog/google-ads-renovatiebedrijven",
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
      name: "Google Ads voor renovatiebedrijven",
      item: "https://groeimaten.com/blog/google-ads-renovatiebedrijven",
    },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Google Ads voor renovatiebedrijven: wat werkt en wat niet",
  description:
    "Hoe renovatiebedrijven Google Ads effectief inzetten voor directe aanvragen en meer opdrachten.",
  author: { "@type": "Organization", name: "Groeimaten" },
  publisher: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  datePublished: "2026-08-03",
  url: "https://groeimaten.com/blog/google-ads-renovatiebedrijven",
}

export default function BlogGoogleAdsRenovatiebedrijvenPage() {
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
              <span style={{ color: "oklch(55% 0 0)", fontSize: "0.85rem" }}>Google Ads voor renovatiebedrijven</span>
            </div>
            <span className="section-label">Google Ads</span>
            <h1
              className="page-hero__title"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", lineHeight: "1.2", marginTop: "12px" }}
            >
              Google Ads voor renovatiebedrijven: wat werkt en wat niet
            </h1>
            <p className="page-hero__subtitle" style={{ marginTop: "20px" }}>
              Veel renovatiebedrijven proberen Google Ads maar stoppen er na een paar maanden mee omdat
              het te duur lijkt. Bijna altijd zit het probleem niet in het kanaal zelf, maar in de manier
              waarop campagnes zijn ingericht.
            </p>
            <p style={{ color: "oklch(55% 0 0)", fontSize: "0.88rem", marginTop: "12px" }}>
              Groeimaten · 3 augustus 2026 · 6 min lezen
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
              Google Ads is voor renovatiebedrijven een van de snelste manieren om directe aanvragen te
              genereren. Zodra een campagne live gaat, verschijnt het bedrijf bovenaan de zoekresultaten
              voor termen die mensen gebruiken als ze actief een renovatiebedrijf zoeken. Dat levert
              aanvragen op terwijl SEO nog opgebouwd moet worden.
            </p>
            <p>
              Toch zijn de ervaringen verdeeld. Bedrijven die succesvol adverteren zien een lage kosten
              per aanvraag en een constante stroom nieuwe klanten. Bedrijven die worstelen, geven maandelijks
              honderden euro&apos;s uit zonder dat er concrete opdrachten uitkomen. Het verschil zit
              volledig in de inrichting.
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
              De meest gemaakte fout: te brede zoekwoorden
            </h2>
            <p>
              Het meestgemaakte probleem bij renovatiebedrijven op Google Ads is het targeten op te
              brede zoekwoorden. Een campagne die draait op het woord "renovatie" bereikt mensen die
              zoeken naar renovatiefoto&apos;s voor hun Pinterest-board, studenten die scripties schrijven
              over historische renovaties en mensen die een aannemer zoeken voor een verbouwing van
              vijf miljoen euro.
            </p>
            <p>
              Een goed ingericht campagne draait op precieze zoekintenties: "badkamer renoveren offerte",
              "slaapkamer verbouwen kosten" of "keuken renovatie aannemer Rotterdam". Die termen trekken
              mensen aan die klaar zijn om actie te ondernemen. De klikprijs is hoger, maar de conversie
              ook.
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
              Landingspagina&apos;s die aansluiten op de advertentie
            </h2>
            <p>
              Een advertentie op "keukenrenovatie offerte Amsterdam" die leidt naar de homepage van een
              renovatiebedrijf, levert nauwelijks aanvragen op. De bezoeker ziet een generiek overzicht
              en weet niet direct of dit bedrijf ook keukens renoveert in Amsterdam. Hij haakt af.
            </p>
            <p>
              Een advertentie die leidt naar een pagina die expliciet gaat over keukenrenovatie in
              Amsterdam, met een duidelijke prijsindicatie, referenties van vergelijkbare projecten en
              een contactformulier bovenaan, converteert meerdere keren beter. Elke advertentiegroep
              verdient zijn eigen landingspagina.
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
              Budget en seizoen
            </h2>
            <p>
              Renovatiebedrijven hebben een uitgesproken seizoenspiek. In het voorjaar, rond maart tot
              mei, stijgt de vraag sterk. Mensen willen hun woning opknappen voor de zomer of na de
              winter. Het najaar, september en oktober, is de tweede piek.
            </p>
            <p>
              Een slimme campagnestrategie verhoogt het budget in die periodes en verlaagt het buiten
              het seizoen. Dat voorkomt verspilling in maanden dat de vraag laag is en maximaliseert
              het rendement in de drukste periodes. De meeste renovatiebedrijven die zelf adverteren,
              houden een vast budget het hele jaar aan en missen daarmee de beste momenten.
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
              Meten wat telt
            </h2>
            <p>
              Google Ads werkt alleen als je meet wat werkt. Dat klinkt voor de hand liggend maar veel
              renovatiebedrijven meten klikken en impressies in plaats van daadwerkelijke aanvragen.
              Klikken zeggen niets over het resultaat. Aanvragen, telefoontjes en offerteaanvragen
              zijn de cijfers die tellen.
            </p>
            <p>
              Google Ads heeft conversietracking waarmee je precies kunt zien welke zoekwoorden leiden
              tot aanvragen en welke geld kosten zonder resultaat. Op basis van die data kun je campagnes
              aanscherpen totdat de kosten per aanvraag acceptabel zijn voor jouw bedrijf.
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
              Wanneer Google Ads rendabel is voor een renovatiebedrijf
            </h2>
            <p>
              Google Ads werkt het best voor renovatiebedrijven met een gemiddelde opdrachtswaarde van
              meer dan 10.000 euro. Bij een gemiddelde opdracht van 20.000 euro en een winstmarge van
              20 procent, mag een aanvraag 800 euro kosten voordat de campagne verlieslatend is. Dat
              geeft veel ruimte om te adverteren, ook bij hogere klikprijzen.
            </p>
            <p>
              Voor renovatiebedrijven met kleine opdrachten, onder de 3.000 euro gemiddeld, is de
              marge te krap voor Google Ads. Meta Ads zijn dan een betere keuze, omdat de klikprijzen
              lager zijn en de doelgroep op basis van gedrag en interesse bereikt wordt in plaats van
              op zoekintenties.
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
                Groeimaten richt Google Ads campagnes in voor renovatiebedrijven en aannemers
              </p>
              <p style={{ marginBottom: "20px", color: "oklch(70% 0 0)" }}>
                Geen brede campagnes die geld verbranden. Gericht op de termen die aanvragen opleveren,
                met landingspagina&apos;s die converteren. Plan een gratis gesprek.
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

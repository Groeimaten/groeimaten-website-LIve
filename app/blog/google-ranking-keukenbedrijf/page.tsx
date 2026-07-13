import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Google ranking keukenbedrijf verbeteren: de aanpak die structureel werkt",
  description:
    "Een betere Google ranking als keukenbedrijf levert aanvragen op van mensen die actief zoeken. Welke factoren bepalen jouw positie en hoe verbeter je die stap voor stap?",
  alternates: {
    canonical: "https://groeimaten.com/blog/google-ranking-keukenbedrijf",
  },
  openGraph: {
    title: "Google ranking keukenbedrijf verbeteren: de aanpak die structureel werkt",
    description:
      "Welke factoren bepalen de Google ranking van een keukenbedrijf en hoe verbeter je die systematisch?",
    url: "https://groeimaten.com/blog/google-ranking-keukenbedrijf",
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
      name: "Google ranking keukenbedrijf",
      item: "https://groeimaten.com/blog/google-ranking-keukenbedrijf",
    },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Google ranking keukenbedrijf verbeteren: de aanpak die structureel werkt",
  description:
    "Welke factoren bepalen de Google ranking van een keukenbedrijf en hoe verbeter je die systematisch.",
  author: { "@type": "Organization", name: "Groeimaten" },
  publisher: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  datePublished: "2026-07-13",
  url: "https://groeimaten.com/blog/google-ranking-keukenbedrijf",
}

export default function BlogGoogleRankingKeukenbedrijfPage() {
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
              <span style={{ color: "oklch(55% 0 0)", fontSize: "0.85rem" }}>Google ranking keukenbedrijf</span>
            </div>
            <span className="section-label">SEO</span>
            <h1
              className="page-hero__title"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", lineHeight: "1.2", marginTop: "12px" }}
            >
              Google ranking keukenbedrijf verbeteren: de aanpak die structureel werkt
            </h1>
            <p className="page-hero__subtitle" style={{ marginTop: "20px" }}>
              Keukenbedrijven die op de eerste pagina van Google staan voor relevante zoektermen,
              ontvangen aanvragen van mensen die bewust naar een nieuwe keuken zoeken. Die aanvragen
              zijn kwalitatief goed: de persoon heeft al een koopintentie. Maar een goede Google ranking
              opbouwen vraagt meer dan een mooie website.
            </p>
            <p style={{ color: "oklch(55% 0 0)", fontSize: "0.88rem", marginTop: "12px" }}>
              Groeimaten · 13 juli 2026 · 7 min lezen
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
              Een keukenaankoop begint bijna altijd online. Iemand die nadenkt over een nieuwe keuken
              start met zoeken: inspiratie, prijzen, merken, showrooms in de buurt. Die oriëntatiefase
              kan weken of maanden duren. Wie in die fase zichtbaar is, heeft een enorme kans de
              persoon naar de showroom te leiden.
            </p>
            <p>
              Google ranking is voor keukenbedrijven daarom geen bijzaak. Het bepaalt grotendeels of
              iemand die in jouw regio naar een nieuwe keuken zoekt, jouw bedrijf vindt of dat van de
              concurrent. De vraag is wat de ranking bepaalt en hoe je die systematisch verbetert.
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
              Technische kwaliteit als basis
            </h2>
            <p>
              Google beoordeelt websites op technische kwaliteit voordat het naar de inhoud kijkt.
              Een trage website, een site die slecht werkt op mobiel of een site met veel technische
              fouten, scoort lager dan een site die snel is en foutloos werkt. Dat is de basis waarop
              alles rust.
            </p>
            <p>
              Voor een keukenbedrijf betekent technische kwaliteit concreet: een laadtijd onder de
              twee seconden op mobiel, een veilige verbinding via HTTPS, een correcte sitestructuur
              en geen gebroken links. Google Search Console geeft inzicht in technische problemen die
              Google heeft gedetecteerd. Die problemen oplossen is de eerste stap.
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
              Inhoud die aansluit bij wat mensen zoeken
            </h2>
            <p>
              Google wil de meest relevante pagina tonen bij een zoekopdracht. Relevantie wordt bepaald
              door de inhoud van de pagina. Een keukenbedrijf dat alleen een homepage heeft met
              algemene tekst, scoort minder goed dan een bedrijf dat aparte pagina&apos;s heeft per
              type keuken, per stijl of per werkgebied.
            </p>
            <p>
              Concrete pagina&apos;s die mensen zoekopdrachten beantwoorden, scoren beter. Een pagina
              over &ldquo;moderne keukens Rotterdam&rdquo; scoort voor de relevante zoekopdracht in
              die stad. Een pagina over &ldquo;landelijke keukens op maat&rdquo; scoort voor mensen
              die specifiek dat zoeken. Elke pagina die een specifieke zoekvraag beantwoordt, is een
              extra kans om gevonden te worden.
            </p>
            <p>
              De inhoud moet oprecht informatief zijn. Google herkent pagina&apos;s die alleen zijn
              aangemaakt voor zoekmachines en niet voor mensen, en straft die af. Pagina&apos;s die
              echte informatie bevatten, foto&apos;s van afgerond werk en concrete details over het
              aanbod, worden beloond.
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
              Google Mijn Bedrijf voor keukenstudio&apos;s
            </h2>
            <p>
              Lokale zoekopdrachten tonen een kaartresultaat boven de organische resultaten. Een
              volledig ingericht Google Mijn Bedrijf-profiel is het ticket naar dat kaartresultaat.
              Naam, adres, openingstijden, foto&apos;s van de showroom en producten, en actieve reviews.
            </p>
            <p>
              Reviews zijn voor keukenstudio&apos;s extra belangrijk. Een keukenaankoop is een grote
              beslissing en mensen zoeken bevestiging dat het bedrijf betrouwbaar is. Een hoge
              reviewscore, met veel positieve ervaringen van eerdere klanten, is een sterk signaal
              voor nieuwe bezoekers én voor Google. Bedrijven met veel reviews ranken doorgaans
              hoger in het lokale kaartresultaat.
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
              Autoriteit opbouwen via externe links
            </h2>
            <p>
              Google beschouwt een website als gezaghebbender als andere websites ernaar linken.
              Links van betrouwbare, relevante websites zijn een positief signaal. Voor een
              keukenbedrijf kan dat links zijn van lokale leveranciers, brancheorganisaties of
              vakbladen die het bedrijf vermelden.
            </p>
            <p>
              Het actief opbouwen van zulke links vraagt tijd en inzet. Een eenvoudige start is
              zorgen dat het bedrijf vermeld is in relevante directories, dat leveranciers en
              partners naar de website linken en dat eventuele persberichten of mediaoptredens
              een link opleveren. Die links bouwen de autoriteit van de website langzaam op.
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
              Tijdlijn voor resultaten
            </h2>
            <p>
              SEO voor een keukenbedrijf is een investering op de lange termijn. De eerste meetbare
              verbeteringen zijn er na drie tot zes maanden. Een stabiele positie op competitieve
              zoektermen duurt twaalf maanden of langer. Wie vroeg begint, heeft een voorsprong die
              concurrenten moeilijk kunnen inlopen.
            </p>
            <p>
              Een keukenbedrijf dat drie jaar geleden met serieuze SEO is begonnen, heeft nu
              organische aanvragen die nauwelijks iets kosten per stuk. Dat is de kracht van SEO
              als langetermijninvestering: het rendement groeit naarmate de positie sterker wordt.
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
                Wil je weten hoe jouw keukenbedrijf nu scoort op Google?
              </p>
              <p style={{ marginBottom: "20px", color: "oklch(70% 0 0)" }}>
                Groeimaten analyseert jouw huidige positie en legt uit wat er nodig is om structureel
                beter te scoren. Plan een gratis gesprek.
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

import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Online marketing voor een renovatiebedrijf: wat echt werkt",
  description:
    "Online marketing voor renovatiebedrijven vraagt een andere aanpak dan standaard reclame. Welke kanalen leveren kwalitatieve aanvragen op voor renovatieprojecten?",
  alternates: {
    canonical: "https://groeimaten.com/blog/online-marketing-renovatiebedrijf",
  },
  openGraph: {
    title: "Online marketing voor een renovatiebedrijf: wat echt werkt",
    description:
      "Welke kanalen leveren kwalitatieve aanvragen op voor renovatieprojecten? Groeimaten legt het uit.",
    url: "https://groeimaten.com/blog/online-marketing-renovatiebedrijf",
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
      name: "Online marketing renovatiebedrijf",
      item: "https://groeimaten.com/blog/online-marketing-renovatiebedrijf",
    },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Online marketing voor een renovatiebedrijf: wat echt werkt",
  description:
    "Online marketing voor renovatiebedrijven vraagt een andere aanpak dan standaard reclame. Welke kanalen leveren kwalitatieve aanvragen op?",
  author: { "@type": "Organization", name: "Groeimaten" },
  publisher: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  datePublished: "2026-07-06",
  url: "https://groeimaten.com/blog/online-marketing-renovatiebedrijf",
}

export default function BlogOnlineMarketingRenovatiebedrijfPage() {
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
              <span style={{ color: "oklch(55% 0 0)", fontSize: "0.85rem" }}>Online marketing renovatiebedrijf</span>
            </div>
            <span className="section-label">Online marketing</span>
            <h1
              className="page-hero__title"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", lineHeight: "1.2", marginTop: "12px" }}
            >
              Online marketing voor een renovatiebedrijf: wat echt werkt
            </h1>
            <p className="page-hero__subtitle" style={{ marginTop: "20px" }}>
              Renovatieopdrachten komen niet vanzelf. Wie alleen vertrouwt op doorverwijzingen zit afhankelijk
              van de grillen van zijn netwerk. Online marketing voor renovatiebedrijven is het antwoord, maar
              dan wel de aanpak die past bij hoe iemand een renovatie overweegt.
            </p>
            <p style={{ color: "oklch(55% 0 0)", fontSize: "0.88rem", marginTop: "12px" }}>
              Groeimaten · 6 juli 2026 · 6 min lezen
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
              Iemand die zijn badkamer, keuken of complete woning wil renoveren, zoekt daar weken tot maanden
              op. Het is geen impulsaankoop. Het beslisproces begint online, met vergelijken, lezen en
              bekijken. Renovatiebedrijven die niet zichtbaar zijn in dat proces, bestaan niet voor die klant.
            </p>
            <p>
              Goede online marketing voor een renovatiebedrijf is daarom geen kwestie van zoveel mogelijk
              mensen bereiken. Het gaat om de juiste mensen bereiken op het moment dat ze serieus overwegen
              een verbouwing te starten.
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
              Google Ads voor directe aanvragen
            </h2>
            <p>
              Google Ads is het meest directe kanaal voor renovatiebedrijven. Wanneer iemand zoekt naar
              &ldquo;badkamer renoveren Amsterdam&rdquo; of &ldquo;keuken verbouwen Rotterdam&rdquo;, kun
              jij bovenaan staan. Die zoekopdrachten komen van mensen met een concrete behoefte, geen
              algemene nieuwsgierigheid.
            </p>
            <p>
              Het nadeel van Google Ads is dat het budget doorloopt zodra de campagne actief is. Een goed
              ingestelde campagne geeft hoge kwaliteit aanvragen, maar een slecht ingestelde campagne vreet
              budget zonder resultaat. De kwaliteit van de landingspagina en de keuze van zoekwoorden
              bepalen in grote mate hoe efficiënt het budget werkt.
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
              Meta Ads voor visuele projecten
            </h2>
            <p>
              Renovaties zijn visueel. Mensen willen zien wat je hebt gemaakt voordat ze contact opnemen.
              Meta Ads, via Facebook en Instagram, zijn daarvoor bij uitstek geschikt. Een voor en na foto
              van een badkamerrenovatie, een korte video van een keukenverbouwing, of een compilatie van
              afgeronde projecten trekt aandacht van mensen die nog niet actief zoeken maar wel in de
              overwegingsfase zitten.
            </p>
            <p>
              Het voordeel van Meta Ads ten opzichte van Google Ads is dat je een doelgroep kunt opbouwen
              op basis van kenmerken als woningbezit, leeftijd en interesses. Je bereikt mensen die op termijn
              renovatieplannen hebben, ook al zoeken ze er vandaag nog niet op. Dat maakt het kanaal
              complementair aan Google Ads, niet concurrerend.
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
              SEO als langetermijninvestering
            </h2>
            <p>
              Organische vindbaarheid via SEO is het kanaal met het hoogste langetermijnrendement. Een
              renovatiebedrijf dat op pagina 1 staat voor &ldquo;aannemer renovatie [stad]&rdquo; of
              &ldquo;badkamer renoveren [regio]&rdquo; trekt aanvragen aan zonder doorlopende advertentiekosten.
            </p>
            <p>
              SEO voor renovatiebedrijven vraagt om content die aansluit bij de vragen van potentiële
              klanten. Wat kost een badkamerrenovatie gemiddeld? Hoe lang duurt een keukenverbouwing? Welke
              vergunning heb ik nodig voor een uitbouw? Bedrijven die die vragen beantwoorden op hun website,
              worden gevonden door mensen die actief oriënteren. Dat zijn de beste aanvragen.
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
              De website als conversiemachine
            </h2>
            <p>
              Alle online marketing brengt mensen naar de website. Wat er daarna gebeurt, bepaalt of het
              bezoek iets oplevert. Een renovatiebedrijfswebsite moet snel laden, op mobiel goed werken en
              duidelijk maken welk werk je doet, in welk werkgebied en waarom klanten voor jou kiezen.
            </p>
            <p>
              Referentieprojecten spelen een sleutelrol. Foto&apos;s van afgerond werk, bij voorkeur met een
              korte beschrijving van de opdracht en het resultaat, geven vertrouwen. Wie geen portfolio toont,
              vraagt van de klant een blinde sprong. Dat werkt niet voor een opdracht van 30.000 euro.
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
              Welk kanaal is het startpunt?
            </h2>
            <p>
              Voor de meeste renovatiebedrijven is Google Ads het snelste startpunt. Het levert op korte
              termijn aanvragen op terwijl de SEO-positie nog opgebouwd wordt. Na zes tot twaalf maanden
              neemt de organische positie het over als primaire bron van aanvragen. Meta Ads is zinvol als
              aanvulling, zeker voor bedrijven die visueel sterk werk afleveren en dat willen laten zien.
            </p>
            <p>
              De exacte combinatie hangt af van het werkgebied, het type renovaties dat je uitvoert en het
              budget. Renovatiebedrijven in grote steden met veel concurrentie hebben een andere aanpak nodig
              dan een gespecialiseerd bedrijf in een kleinere regio.
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
                Wat is de beste marketingstrategie voor jouw renovatiebedrijf?
              </p>
              <p style={{ marginBottom: "20px", color: "oklch(70% 0 0)" }}>
                Plan een gratis gesprek. We kijken naar jouw werkgebied, je concurrenten en je huidige
                situatie. Je krijgt een concreet advies, geen verkooppraatje.
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

import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Google Ads voor installateurs: zo trek je klanten die vandaag zoeken",
  description:
    "Google Ads voor installateurs werkt anders dan voor andere sectoren. Hoe stel je campagnes in die concrete aanvragen opleveren voor loodgieters, elektriciens en cv-monteurs?",
  alternates: {
    canonical: "https://groeimaten.com/blog/google-ads-voor-installateurs",
  },
  openGraph: {
    title: "Google Ads voor installateurs: zo trek je klanten die vandaag zoeken",
    description:
      "Hoe stel je Google Ads campagnes in die concrete aanvragen opleveren voor installatiebedrijven?",
    url: "https://groeimaten.com/blog/google-ads-voor-installateurs",
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
      name: "Google Ads voor installateurs",
      item: "https://groeimaten.com/blog/google-ads-voor-installateurs",
    },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Google Ads voor installateurs: zo trek je klanten die vandaag zoeken",
  description:
    "Google Ads voor installateurs werkt anders dan voor andere sectoren. Hoe stel je campagnes in die concrete aanvragen opleveren?",
  author: { "@type": "Organization", name: "Groeimaten" },
  publisher: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  datePublished: "2026-07-06",
  url: "https://groeimaten.com/blog/google-ads-voor-installateurs",
}

export default function BlogGoogleAdsVoorInstallateurPage() {
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
              <span style={{ color: "oklch(55% 0 0)", fontSize: "0.85rem" }}>Google Ads voor installateurs</span>
            </div>
            <span className="section-label">Google Ads</span>
            <h1
              className="page-hero__title"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", lineHeight: "1.2", marginTop: "12px" }}
            >
              Google Ads voor installateurs: zo trek je klanten die vandaag zoeken
            </h1>
            <p className="page-hero__subtitle" style={{ marginTop: "20px" }}>
              Wie een loodgieter, elektricien of cv-monteur zoekt, wacht niet. Die persoon zoekt op Google,
              vergelijkt twee of drie resultaten en belt degene die het meest betrouwbaar overkomt. Google Ads
              voor installateurs zet jou op dat moment bovenaan.
            </p>
            <p style={{ color: "oklch(55% 0 0)", fontSize: "0.88rem", marginTop: "12px" }}>
              Groeimaten · 6 juli 2026 · 5 min lezen
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
              Installatiebedrijven hebben een bijzonder voordeel als het gaat om Google Ads. De meeste
              zoekacties zijn urgent. Een lekkende kraan, een kapotte cv-ketel of geen stroom in een deel
              van het huis zijn geen problemen die mensen een week laten staan. Ze zoeken direct.
            </p>
            <p>
              Dat urgentie maakt Google Ads voor installateurs bijzonder effectief. De vraag is niet of er
              gezocht wordt, maar of jij gevonden wordt op het moment dat de klant klaar is om te bellen.
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
              Zoekwoorden die werken voor installatiebedrijven
            </h2>
            <p>
              De sterkste zoekwoorden voor een installatiebedrijf zijn specifiek en lokaal. Niet
              &ldquo;loodgieter&rdquo; maar &ldquo;loodgieter [stad]&rdquo;. Niet &ldquo;cv-ketel
              installeren&rdquo; maar &ldquo;cv-ketel vervangen [regio]&rdquo;. Hoe specifieker het zoekwoord,
              hoe groter de kans dat de zoeker een concrete behoefte heeft en bereid is direct te bellen.
            </p>
            <p>
              Brede zoekwoorden als &ldquo;installateur&rdquo; of &ldquo;loodgieter&rdquo; hebben hoge
              zoekvolumes maar lage conversieratio&apos;s. Ze kosten veel en leveren weinig op. Het budget
              wordt beter ingezet op drie tot vijf specifieke zoektermen met duidelijke koopintentie dan
              op twintig generieke termen.
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
              De landingspagina bepaalt het resultaat
            </h2>
            <p>
              Een goede Google Ads campagne brengt mensen naar de website. Wat er daarna gebeurt, bepaalt
              of de klik een aanvraag wordt. Een landingspagina voor een installatiebedrijf moet snel laden
              (zeker op mobiel, want de meeste zoekopdrachten komen van telefoons), het telefoonnummer
              direct zichtbaar hebben en duidelijk zijn over het werkgebied en het type werk.
            </p>
            <p>
              Reviews spelen een grote rol. Vijf Google-reviews van tevreden klanten werken beter dan de
              mooiste tekst. Mensen die urgent zoeken, hebben geen tijd voor een uitgebreide vergelijking.
              Ze kiezen voor het bedrijf dat betrouwbaar overkomt. Reviews zijn daarvoor het sterkste bewijs.
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
              Budget en verwachtingen
            </h2>
            <p>
              Voor een installatiebedrijf dat actief is in één stad of regio is een Google Ads-budget van
              300 tot 600 euro per maand een realistisch startpunt. Dat levert, bij een goed ingestelde
              campagne, gemiddeld 15 tot 30 extra aanvragen per maand op. De exacte cijfers hangen af van
              de concurrentie in het werkgebied en de diensten waarvoor geadverteerd wordt.
            </p>
            <p>
              Grotere installatiebedrijven die actief zijn in meerdere steden of gespecialiseerd zijn in
              grotere projecten zoals installatiewerk voor nieuwbouw of renovatie, kunnen met een hoger
              budget evenredig meer bereiken. De kostenstructuur van Google Ads schaalt mee.
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
              Hoe Google Ads en SEO samenwerken
            </h2>
            <p>
              Google Ads is het snelle kanaal. SEO is het duurzame kanaal. Een installatiebedrijf dat beide
              inzet, heeft een stabiele aanvragenstroom. Ads zorgt voor directe aanvragen terwijl de
              organische positie opgebouwd wordt. Naarmate de SEO-positie sterker wordt, kan het
              advertentiebudget efficiënter worden ingezet op de meest winstgevende diensten.
            </p>
            <p>
              Installatiebedrijven die uitsluitend op mond-tot-mondreclame en sporadisch adverteren leunen,
              lopen aanvragen mis die direct naar concurrenten gaan die wél bovenaan staan. De
              klant kiest wie hij te zien krijgt, niet wie de beste vakman is. Online zichtbaarheid is de
              poort naar de opdracht.
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
                Wil je weten wat Google Ads voor jouw installatiebedrijf kan opleveren?
              </p>
              <p style={{ marginBottom: "20px", color: "oklch(70% 0 0)" }}>
                Plan een gratis gesprek. We analyseren jouw werkgebied, de concurrentie en de kansen.
                Geen verplichtingen, wel concrete inzichten.
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

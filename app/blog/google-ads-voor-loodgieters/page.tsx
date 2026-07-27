import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Google Ads voor loodgieters: bovenaan op het moment dat het telt",
  description:
    "Loodgieters hebben het voordeel van urgentie. Iemand met een waterlekkage belt meteen. Google Ads voor loodgieters helpt je precies op dat moment gevonden te worden.",
  alternates: {
    canonical: "https://groeimaten.com/blog/google-ads-voor-loodgieters",
  },
  openGraph: {
    title: "Google Ads voor loodgieters: bovenaan op het moment dat het telt",
    description:
      "Loodgieters hebben het voordeel van urgentie. Google Ads helpt je precies op dat moment gevonden te worden.",
    url: "https://groeimaten.com/blog/google-ads-voor-loodgieters",
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Ads voor loodgieters: bovenaan op het moment dat het telt",
    description: "Loodgieters hebben het voordeel van urgentie. Google Ads helpt je precies op dat moment gevonden te worden.",
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
      name: "Google Ads voor loodgieters",
      item: "https://groeimaten.com/blog/google-ads-voor-loodgieters",
    },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Google Ads voor loodgieters: bovenaan op het moment dat het telt",
  description:
    "Loodgieters hebben het voordeel van urgentie. Iemand met een waterlekkage belt meteen. Google Ads helpt je precies op dat moment gevonden te worden.",
  author: { "@type": "Organization", name: "Groeimaten" },
  publisher: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  datePublished: "2026-07-27",
  url: "https://groeimaten.com/blog/google-ads-voor-loodgieters",
}

export default function BlogGoogleAdsLoodgietersPage() {
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
              <span style={{ color: "oklch(55% 0 0)", fontSize: "0.85rem" }}>Google Ads loodgieters</span>
            </div>
            <span className="section-label">Google Ads</span>
            <h1
              className="page-hero__title"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", lineHeight: "1.2", marginTop: "12px" }}
            >
              Google Ads voor loodgieters: bovenaan op het moment dat het telt
            </h1>
            <p className="page-hero__subtitle" style={{ marginTop: "20px" }}>
              Weinig sectoren hebben zo&apos;n direct verband tussen zoekgedrag en koopintentie als
              loodgieterswerk. Iemand met een gesprongen leiding googelt niet om zich te oriënteren.
              Hij googelt om zo snel mogelijk iemand te bereiken.
            </p>
            <p style={{ color: "oklch(55% 0 0)", fontSize: "0.88rem", marginTop: "12px" }}>
              Groeimaten · 27 juli 2026 · 5 min lezen
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
              Google Ads werkt voor loodgieters anders dan voor de meeste andere sectoren. Er is geen
              lange overweegperiode. De zoekintentie is direct en de concurrentie om die positie is
              navenant. Wie bovenaan staat op het moment van de zoekopdracht, krijgt de oproep.
              Wie dat niet doet, wordt niet gebeld.
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
              Twee typen zoekopdrachten, twee campagnes
            </h2>
            <p>
              Loodgieters bedienen twee markten: spoedopdrachten en geplande klussen zoals een nieuwe
              badkamer, verwarmingsketel of rioolreparatie. Beide rechtvaardigen een andere campagne
              en andere advertentieteksten.
            </p>
            <p>
              Voor spoed wil je aanwezig zijn op termen als &ldquo;loodgieter spoed [stad]&rdquo;,
              &ldquo;waterlekkage repareren vandaag&rdquo; en &ldquo;verstopt riool spoedservice&rdquo;.
              Voor gepland werk zijn relevante termen &ldquo;cv-ketel laten installeren [regio]&rdquo;
              en &ldquo;badkamer verbouwen loodgieter offerte&rdquo;. De biedstrategie voor spoed
              kan agressiever zijn omdat de conversiesnelheid hoger is.
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
              Telefoonextensies zijn geen extra, ze zijn verplicht
            </h2>
            <p>
              Een beller converteert drie keer zo snel als iemand die een formulier invult. Voor
              loodgieters is bellen het primaire contactkanaal. Zorg dat elke advertentie een
              telefoonnummer toont dat direct klikbaar is op mobiel. Google Ads biedt hiervoor
              oproepextensies die het telefoonnummer naast de advertentietekst tonen.
            </p>
            <p>
              Zet ook advertentieplanningen in zodat je campagnes alleen draaien op momenten dat je
              daadwerkelijk bereikbaar bent. Adverteren buiten je werkuren en dan niet opnemen kost
              geld en beschadigt je kwaliteitsscore.
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
              De kosten per klik voor loodgieterszoektermen liggen in Nederland gemiddeld tussen €2
              en €8, afhankelijk van de stad en de concurrentie. In steden als Amsterdam, Rotterdam
              en Utrecht zijn ze hoger. Een realistisch startbudget voor Google Ads is €500 tot
              €1.000 per maand om voldoende data te verzamelen en campagnes te optimaliseren.
            </p>
            <p>
              Bij een goed ingestelde campagne en een conversiegerichte website liggen de kosten
              per kwalitatieve aanvraag voor loodgieters gemiddeld tussen €25 en €70. Spoedklussen
              hebben een hogere conversieratio dan geplande opdrachten.
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
              Wat Google Ads niet doet
            </h2>
            <p>
              Google Ads levert directe aanvragen maar stopt zodra het budget op is. Het bouwt geen
              positie op die blijft staan als je niet betaalt. Dat is het fundamentele verschil met
              SEO. Voor loodgieters is de meest stabiele aanpak Google Ads voor directe spoedomzet,
              gecombineerd met SEO voor structurele organische vindbaarheid op geplande opdrachten.
            </p>
            <p>
              Loodgieters die alleen op Ads draaien zijn kwetsbaar als het budget wegvalt of de
              concurrentie de biedprijzen opdrijft. Een organische positie op relevante lokale
              zoektermen biedt een buffer.
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
                Meer aanvragen via Google Ads?
              </p>
              <p style={{ marginBottom: "20px", color: "oklch(70% 0 0)" }}>
                Plan een gratis gesprek en we kijken of en hoe Google Ads voor jouw loodgietersbedrijf
                kan werken. Geen verkooppraatje, een eerlijke analyse.
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

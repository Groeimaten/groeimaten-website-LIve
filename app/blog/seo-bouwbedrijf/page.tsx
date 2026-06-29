import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "SEO voor bouwbedrijven: gevonden worden zonder te adverteren",
  description:
    "SEO voor bouwbedrijven levert structureel organisch verkeer op, zonder doorlopend advertentiebudget. Hoe werkt het, wat kost het en wanneer zie je de eerste resultaten?",
  alternates: {
    canonical: "https://groeimaten.com/blog/seo-bouwbedrijf",
  },
  openGraph: {
    title: "SEO voor bouwbedrijven: gevonden worden zonder te adverteren",
    description:
      "SEO voor bouwbedrijven levert structureel organisch verkeer op. Hoe werkt het en wanneer zie je de eerste resultaten?",
    url: "https://groeimaten.com/blog/seo-bouwbedrijf",
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
      name: "SEO bouwbedrijf",
      item: "https://groeimaten.com/blog/seo-bouwbedrijf",
    },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "SEO voor bouwbedrijven: gevonden worden zonder te adverteren",
  description:
    "SEO voor bouwbedrijven levert structureel organisch verkeer op, zonder doorlopend advertentiebudget.",
  author: { "@type": "Organization", name: "Groeimaten" },
  publisher: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  datePublished: "2026-06-29",
  url: "https://groeimaten.com/blog/seo-bouwbedrijf",
}

export default function BlogSeoBouwbedrijfPage() {
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
              <span style={{ color: "oklch(55% 0 0)", fontSize: "0.85rem" }}>SEO bouwbedrijf</span>
            </div>
            <span className="section-label">SEO</span>
            <h1
              className="page-hero__title"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", lineHeight: "1.2", marginTop: "12px" }}
            >
              SEO voor bouwbedrijven: gevonden worden zonder te adverteren
            </h1>
            <p className="page-hero__subtitle" style={{ marginTop: "20px" }}>
              Google Ads geeft directe resultaten maar stopt zodra het budget op is. SEO is anders. Een
              bouwbedrijf dat organisch goed scoort, trekt maand na maand aanvragen aan zonder extra kosten
              per klik. De investering zit aan het begin, het rendement loopt door.
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
              Bouwbedrijven worden nog altijd primair gevonden via mond-tot-mondreclame. Dat is niet
              veranderd. Wat wél veranderd is, is dat potentiële opdrachtgevers ook online zoeken voordat
              ze iemand bellen. Ze vergelijken, kijken naar reviews en beoordelen de website. Een bouwbedrijf
              zonder sterke online aanwezigheid verliest opdrachten die het nooit te weten komt.
            </p>
            <p>
              SEO voor bouwbedrijven richt zich op precies die zoekmomente. Het doel is dat jouw bedrijf
              verschijnt wanneer iemand in jouw werkgebied zoekt naar het type werk dat jij uitvoert.
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
              Lokale SEO is het startpunt voor elk bouwbedrijf
            </h2>
            <p>
              De meeste bouwbedrijven werken in een bepaalde regio. Ze rijden niet door heel Nederland voor
              een verbouwing. Lokale SEO speelt daarop in. Het doel is gevonden worden voor zoekopdrachten
              als &ldquo;aannemer renovatie Eindhoven&rdquo; of &ldquo;dakkapel plaatsen Den Haag&rdquo;,
              niet voor generieke termen als &ldquo;aannemer Nederland&rdquo;.
            </p>
            <p>
              Google Mijn Bedrijf is daarvoor het vertrekpunt. Een volledig ingericht profiel, met actuele
              informatie, foto&apos;s van afgeronde projecten en een actieve reviewscore, maakt dat een
              bouwbedrijf zichtbaar is in het lokale kaartresultaat. Dat kaartresultaat verschijnt prominent
              bij mobiele zoekopdrachten, boven de organische zoekresultaten. Wie daar staat, wordt gebeld.
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
              De website als SEO-fundament
            </h2>
            <p>
              Een Google Mijn Bedrijf-profiel zonder bijbehorende website mist kracht. Google combineert
              signalen van het bedrijfsprofiel en de website bij het bepalen van de rangschikking. Een
              website met duidelijke, relevante inhoud per dienst en per werkgebied versterkt de lokale
              SEO-positie aanzienlijk.
            </p>
            <p>
              Concreet betekent dit: een aparte pagina per dienst, zoals uitbouwen, badkamerrenovaties of
              dakkapellen, en een aparte pagina per regio of stad als je actief bent in meerdere
              locaties. Die pagina&apos;s hoeven niet uitgebreid te zijn, maar ze moeten relevante en
              specifieke informatie bevatten. Een pagina die alleen &ldquo;aannemer renovatie Amsterdam&rdquo;
              herhaalt zonder inhoudelijke informatie helpt niet. Een pagina met concrete voorbeelden van
              afgeronde renovaties in Amsterdam, inclusief foto&apos;s en een beschrijving van het werk,
              wél.
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
              Hoe lang duurt het voordat SEO werkt?
            </h2>
            <p>
              Dit is de vraag die elke ondernemer stelt, en het eerlijke antwoord is: drie tot zes maanden
              voordat je de eerste merkbare resultaten ziet, en twaalf maanden voor een stabiele positie op
              concurrerende zoektermen. SEO is geen snelle win. Het is een investering met een groeiend
              rendement dat na verloop van tijd zijn eigen momentum krijgt.
            </p>
            <p>
              Bouwbedrijven die vroeg beginnen met SEO bouwen een voorsprong op die moeilijk te doorbreken
              is. Concurrenten die later instappen, moeten een positie veroveren die jij al jarenlang
              bezit. Die voorsprong groeit elk jaar dat je consistent blijft investeren in goede inhoud
              en technische kwaliteit van de website.
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
              SEO en Google Ads samen
            </h2>
            <p>
              De sterkste aanpak voor bouwbedrijven is SEO en Google Ads naast elkaar. Google Ads levert
              directe aanvragen terwijl de SEO-positie nog opgebouwd wordt. Naarmate de organische positie
              sterker wordt, kan het advertentiebudget afgebouwd worden of gericht worden ingezet op de
              meest waardevolle zoektermen. De combinatie geeft continuïteit: korte termijn resultaten via
              Ads, lange termijn stabiliteit via SEO.
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
                Wil je weten hoe goed jouw bouwbedrijf nu gevonden wordt?
              </p>
              <p style={{ marginBottom: "20px", color: "oklch(70% 0 0)" }}>
                Plan een gratis gesprek en we analyseren jouw huidige SEO-positie. Geen vage rapporten,
                maar een concreet beeld van waar je staat en wat er beter kan.
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

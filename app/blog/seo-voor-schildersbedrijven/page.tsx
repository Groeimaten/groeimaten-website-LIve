import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "SEO voor schildersbedrijven: gevonden worden in jouw regio",
  description:
    "SEO voor schildersbedrijven is vrijwel altijd lokaal. Hoe bouw je een positie op die structureel aanvragen oplevert, zonder elke maand advertentiebudget uit te geven?",
  alternates: {
    canonical: "https://groeimaten.com/blog/seo-voor-schildersbedrijven",
  },
  openGraph: {
    title: "SEO voor schildersbedrijven: gevonden worden in jouw regio",
    description:
      "SEO voor schildersbedrijven is vrijwel altijd lokaal. Hoe bouw je een positie op die structureel aanvragen oplevert?",
    url: "https://groeimaten.com/blog/seo-voor-schildersbedrijven",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO voor schildersbedrijven: gevonden worden in jouw regio",
    description: "SEO voor schildersbedrijven is vrijwel altijd lokaal. Hoe bouw je een positie op die structureel aanvragen oplevert?",
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
      name: "SEO voor schildersbedrijven",
      item: "https://groeimaten.com/blog/seo-voor-schildersbedrijven",
    },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "SEO voor schildersbedrijven: gevonden worden in jouw regio",
  description:
    "SEO voor schildersbedrijven is vrijwel altijd lokaal. Hoe bouw je een positie op die structureel aanvragen oplevert?",
  author: { "@type": "Organization", name: "Groeimaten" },
  publisher: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  datePublished: "2026-07-27",
  url: "https://groeimaten.com/blog/seo-voor-schildersbedrijven",
}

export default function BlogSeoSchildersbedrijvenPage() {
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
              <span style={{ color: "oklch(55% 0 0)", fontSize: "0.85rem" }}>SEO schildersbedrijven</span>
            </div>
            <span className="section-label">SEO</span>
            <h1
              className="page-hero__title"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", lineHeight: "1.2", marginTop: "12px" }}
            >
              SEO voor schildersbedrijven: gevonden worden in jouw regio
            </h1>
            <p className="page-hero__subtitle" style={{ marginTop: "20px" }}>
              Schildersbedrijven vinden hun klanten op twee manieren. Via via, iemand vertelt zijn buurman
              dat jij goed werk levert. En via Google. Mond-tot-mondreclame is fijn maar oncontroleerbaar.
              SEO werkt vanzelf, zodra je het goed hebt opgezet.
            </p>
            <p style={{ color: "oklch(55% 0 0)", fontSize: "0.88rem", marginTop: "12px" }}>
              Groeimaten · 27 juli 2026 · 6 min lezen
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
              SEO voor schildersbedrijven onderscheidt zich van andere sectoren op één punt: het is
              vrijwel altijd lokaal. Iemand in Haarlem zoekt geen schilder in Tilburg. Hij zoekt iemand
              die binnen zijn regio werkt. Dat maakt de strategie overzichtelijk maar ook specifiek.
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
              Lokale zoekopdrachten zijn jouw markt
            </h2>
            <p>
              De meeste schildersopdrachten starten met een zoekopdracht in de eigen omgeving.
              &ldquo;Buitenschilderwerk [stad]&rdquo;, &ldquo;interieur laten schilderen [gemeente]&rdquo;,
              &ldquo;schilder voor kozijnen [regio]&rdquo;. Wie op die termen bovenaan staat, heeft een
              structurele voorsprong die maand na maand aanvragen oplevert.
            </p>
            <p>
              Google toont bij lokale zoekopdrachten drie typen resultaten: het kaartblok bovenaan, de
              betaalde advertenties en de organische zoekresultaten. Lokale SEO richt zich op alle drie,
              maar zeker op het kaartblok. Dat is wat de meeste bellers oplevert, vooral op mobiel.
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
              Google Mijn Bedrijf als fundament
            </h2>
            <p>
              Een volledig ingericht Google Mijn Bedrijf-profiel is voor schildersbedrijven het
              vertrekpunt. Het profiel verschijnt in het kaartblok, toont contactgegevens, reviews en
              foto&apos;s van afgerond werk.
            </p>
            <p>
              Concreet wil je: een profiel met alle diensten ingevuld, foto&apos;s van echte projecten,
              een actieve reviewscore boven de 4,5 en een reactie op elke review. Schildersbedrijven
              met meer dan 20 Google-reviews presteren structureel beter in het kaartblok dan collega&apos;s
              met 5 reviews, zelfs als hun website vergelijkbaar is.
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
              Een website die per dienst en regio wordt gevonden
            </h2>
            <p>
              Het Google-profiel trekt contact aan, de website bouwt vertrouwen op en vangt bezoekers
              op die zich verder oriënteren. Een website voor een schildersbedrijf werkt het best als
              die per dienst en per werkgebied is opgebouwd.
            </p>
            <p>
              Dat betekent: een aparte pagina voor binnenschilderwerk, een aparte voor buitenschilderwerk,
              een voor vloercoatings of behangwerk als je dat aanbiedt. En een losse pagina per stad of
              regio als je meerdere plaatsen bedient. Die pagina&apos;s hoeven niet lang te zijn. Ze moeten
              specifiek zijn: met voorbeeldprojecten, eerlijke prijsinformatie en een duidelijke
              beschrijving van je werkwijze. Een schildersbedrijf dat werkt in Amersfoort, Soest en Baarn
              presteert beter met drie aparte locatiepagina&apos;s dan met één generieke contactpagina voor
              het hele werkgebied.
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
              Hoe lang duurt het?
            </h2>
            <p>
              Het eerlijke antwoord is: drie tot zes maanden voordat posities zichtbaar verbeteren.
              Twaalf maanden voor een stabiele positie op de meeste relevante zoektermen in jouw regio.
              Het gaat langzamer als concurrenten al langer bezig zijn, sneller als de concurrentie
              in jouw werkgebied online zwak is.
            </p>
            <p>
              Die aanlooptijd is ook de reden waarom vroeg beginnen loont. Wie nu start, heeft over een
              jaar een positie die een concurrent die volgend jaar begint niet snel inhaalt.
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
              SEO naast Google Ads
            </h2>
            <p>
              SEO en Google Ads sluiten elkaar niet uit. Google Ads zorgt voor directe aanvragen terwijl
              de organische positie opgebouwd wordt. Naarmate de SEO-positie sterker wordt, kan het
              advertentiebudget afgebouwd worden of gericht ingezet worden op seizoensgebonden campagnes,
              zoals buitenschilderwerk in het voorjaar of renovatiewerk vóór de winter.
            </p>
            <p>
              Schildersbedrijven die structureel vol gepland zijn, combineren beide kanalen en schalen
              afhankelijk van het seizoen.
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
                Hoe goed wordt jouw schildersbedrijf nu gevonden?
              </p>
              <p style={{ marginBottom: "20px", color: "oklch(70% 0 0)" }}>
                Plan een gratis gesprek en we analyseren jouw huidige positie. Je krijgt een concreet
                beeld van waar je staat en wat er beter kan, zonder verplichtingen.
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

import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "SEO voor loodgieters: zo word je gevonden door mensen die nu zoeken",
  description:
    "SEO voor loodgieters werkt anders dan voor grotere bedrijven. Lokale vindbaarheid, de juiste zoekwoorden en een technisch correcte website bepalen het resultaat.",
  alternates: {
    canonical: "https://groeimaten.com/blog/seo-voor-loodgieters",
  },
  openGraph: {
    title: "SEO voor loodgieters: zo word je gevonden door mensen die nu zoeken",
    description:
      "Hoe loodgieters structureel bovenaan Google komen op lokale zoekopdrachten met hoge koopintentie.",
    url: "https://groeimaten.com/blog/seo-voor-loodgieters",
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
      name: "SEO voor loodgieters",
      item: "https://groeimaten.com/blog/seo-voor-loodgieters",
    },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "SEO voor loodgieters: zo word je gevonden door mensen die nu zoeken",
  description:
    "Hoe loodgieters structureel bovenaan Google komen op lokale zoekopdrachten met hoge koopintentie.",
  author: { "@type": "Organization", name: "Groeimaten" },
  publisher: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  datePublished: "2026-08-03",
  url: "https://groeimaten.com/blog/seo-voor-loodgieters",
}

export default function BlogSeoVoorLoodgietersPage() {
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
              <span style={{ color: "oklch(55% 0 0)", fontSize: "0.85rem" }}>SEO voor loodgieters</span>
            </div>
            <span className="section-label">SEO</span>
            <h1
              className="page-hero__title"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", lineHeight: "1.2", marginTop: "12px" }}
            >
              SEO voor loodgieters: zo word je gevonden door mensen die nu zoeken
            </h1>
            <p className="page-hero__subtitle" style={{ marginTop: "20px" }}>
              Een lekkage, een verstopte afvoer of een kapotte boiler: mensen die een loodgieter nodig
              hebben, wachten niet. Ze zoeken direct op Google en bellen het eerste bedrijf dat
              betrouwbaar overkomt. Als jij er dan niet bij staat, gaat de telefoon bij een concurrent.
            </p>
            <p style={{ color: "oklch(55% 0 0)", fontSize: "0.88rem", marginTop: "12px" }}>
              Groeimaten · 3 augustus 2026 · 7 min lezen
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
              SEO voor loodgieters draait om één kernbegrip: lokale zichtbaarheid op het moment van
              urgentie. De meeste zoekopdrachten naar een loodgieter zijn geen uitgebreide vergelijkingen.
              Het is een acute behoefte en de beslissing wordt gemaakt binnen minuten. Wie dan prominent
              aanwezig is, wint de klant.
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
              Lokale SEO als kern van de strategie
            </h2>
            <p>
              Voor een loodgieter is de regio allesbepalend. Je rijdt niet van Utrecht naar Maastricht
              voor een lekkende kraan. Dat betekent dat SEO gericht moet zijn op plaatsnamen die je
              werkgebied bepalen.
            </p>
            <p>
              De eerste stap is Google Mijn Bedrijf. Een volledig ingevuld profiel met het juiste
              adres, openingstijden, servicecategorieën en recente foto&apos;s van werkzaamheden zorgt
              voor zichtbaarheid in de kaartweergave. Die kaartweergave staat bovenaan de zoekresultaten
              en trekt een groot deel van de klikken.
            </p>
            <p>
              Google Mijn Bedrijf draagt ook bij aan organische rankings op locatiezoekopdrachten.
              Een bedrijf dat consistent goede reviews krijgt en waarvan het profiel actief wordt
              bijgehouden, scoort beter dan een onbeheerd profiel. Reviews zijn daarmee niet alleen
              een vertrouwenssignaal voor de bezoeker, maar ook een rankingfactor voor Google.
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
              De website als basis voor organische groei
            </h2>
            <p>
              Een loodgieterswebsite die organisch scoort, heeft pagina&apos;s per dienst en per regio.
              Niet alles op één pagina, maar aparte pagina&apos;s voor "lekkage repareren Amsterdam",
              "cv-ketel onderhoud Haarlem" en "verstopte afvoer Rotterdam". Die pagina&apos;s scoren
              elk op hun eigen zoekterm en samen bouwen ze een breed organisch bereik op.
            </p>
            <p>
              Technische kwaliteit telt ook mee. Een trage website, slechte mobiele weergave of pagina&apos;s
              zonder duidelijke H1-koppen scoren slechter, ongeacht hoe relevant de inhoud is. Google
              weegt gebruikservaring zwaar mee in zijn ranking. Een website die snel laadt op een
              smartphone, is voor een loodgieter niet optioneel.
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
              Welke zoekwoorden echt verkeer opleveren
            </h2>
            <p>
              Veel loodgieters richten zich op het woord "loodgieter" plus de plaatsnaam. Dat is nuttig
              maar ook zeer competitief. Sterker is het om te richten op diensten plus locatie. Denk
              aan "lekkage opsporen Utrecht", "toilet verstopt Amsterdam", "waterdruk te laag oplossing".
              Die termen hebben minder concurrentie en de zoeker heeft een concrete behoefte die jij
              kunt oplossen.
            </p>
            <p>
              Long-tail zoekopdrachten, termen van meer dan twee woorden, zijn voor loodgieters bijzonder
              waardevol. De persoon die zoekt op "cv-ketel lekt water onderkant" zit verder in zijn
              beslissingsproces dan iemand die zoekt op "cv-ketel". De eerste zoeker wil een oplossing
              en belt sneller.
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
              SEO en Google Ads als aanvulling op elkaar
            </h2>
            <p>
              SEO bouwt over maanden een organische positie op. Google Ads levert directe aanvragen
              maar kost per klik geld. De meest effectieve aanpak voor loodgieters combineert beide:
              Google Ads voor snelle resultaten en zichtbaarheid bij urgente zoekopdrachten, SEO voor
              langdurige organische vindbaarheid zonder doorlopende advertentiekosten.
            </p>
            <p>
              Een loodgieter die alleen op Google Ads vertrouwt, betaalt altijd per aanvraag. Een
              loodgieter die investeert in SEO, bouwt een kanaal op dat na verloop van tijd aanvragen
              oplevert zonder variabele kosten per klik. Dat maakt de combinatie waardevol: begin met
              Google Ads voor directe resultaten, bouw ondertussen aan SEO voor structureel lagere
              kosten per aanvraag.
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
                Groeimaten werkt met installateurs en loodgieters aan structurele online groei
              </p>
              <p style={{ marginBottom: "20px", color: "oklch(70% 0 0)" }}>
                Lokale SEO, technische website-optimalisatie en Google Ads campagnes gericht op jouw
                werkgebied. Plan een gratis gesprek en ontdek wat er mogelijk is.
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

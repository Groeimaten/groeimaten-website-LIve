import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Conversie optimalisatie website bouwbedrijf: meer aanvragen uit hetzelfde verkeer",
  description:
    "Conversie optimalisatie voor de website van een bouwbedrijf verhoogt het aantal aanvragen zonder meer verkeer te kopen. Welke aanpassingen maken het grootste verschil?",
  alternates: {
    canonical: "https://groeimaten.com/blog/conversie-optimalisatie-bouwbedrijf",
  },
  openGraph: {
    title: "Conversie optimalisatie website bouwbedrijf: meer aanvragen uit hetzelfde verkeer",
    description:
      "Hoe haal je meer aanvragen uit je bestaande websiteverkeer als bouwbedrijf? Welke aanpassingen werken en welke niet?",
    url: "https://groeimaten.com/blog/conversie-optimalisatie-bouwbedrijf",
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
      name: "Conversie optimalisatie website bouwbedrijf",
      item: "https://groeimaten.com/blog/conversie-optimalisatie-bouwbedrijf",
    },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Conversie optimalisatie website bouwbedrijf: meer aanvragen uit hetzelfde verkeer",
  description:
    "Hoe verhoog je het aantal aanvragen van je bouwbedrijf website zonder meer verkeer te kopen?",
  author: { "@type": "Organization", name: "Groeimaten" },
  publisher: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  datePublished: "2026-07-20",
  url: "https://groeimaten.com/blog/conversie-optimalisatie-bouwbedrijf",
}

export default function BlogConversieOptimalisatieBouwbedrijfPage() {
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
              <span style={{ color: "oklch(55% 0 0)", fontSize: "0.85rem" }}>Conversie optimalisatie bouwbedrijf</span>
            </div>
            <span className="section-label">Website optimalisatie</span>
            <h1
              className="page-hero__title"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", lineHeight: "1.2", marginTop: "12px" }}
            >
              Conversie optimalisatie website bouwbedrijf: meer aanvragen uit hetzelfde verkeer
            </h1>
            <p className="page-hero__subtitle" style={{ marginTop: "20px" }}>
              Veel bouwbedrijven kopen meer verkeer als de agenda leeg is. Dat is niet altijd de slimste eerste stap.
              Conversie optimalisatie voor de website van een bouwbedrijf verhoogt het rendement van wat er al is,
              zonder extra advertentiekosten.
            </p>
            <p style={{ color: "oklch(55% 0 0)", fontSize: "0.88rem", marginTop: "12px" }}>
              Groeimaten · 20 juli 2026 · 6 min lezen
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
              Stel dat je website maandelijks 500 bezoekers trekt en daarvan 3 aanvragen ontvangt. Dat is een
              conversiepercentage van 0,6 procent. Met gerichte conversie optimalisatie kun je dat verdubbelen naar
              1,2 procent, wat 6 aanvragen per maand oplevert. Zonder meer te betalen voor verkeer.
            </p>
            <p>
              Bij de meeste bouwbedrijven zit het probleem zelden in de hoeveelheid bezoekers. Het zit in wat er
              op de website gebeurt nadat iemand geklikt heeft. Een bezoeker die wegklikt zonder contact op te nemen
              is een gemiste kans, en die kans heb je al betaald via advertenties of SEO.
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
              Waar de meeste bouwsites de fout ingaan
            </h2>
            <p>
              De meest voorkomende oorzaak van een lage conversie op een bouwsite is een onduidelijke eerste indruk.
              Een bezoeker die op de homepage landt, wil binnen drie seconden begrijpen wat je doet, voor wie je werkt
              en hoe ze contact kunnen opnemen. Als die informatie niet direct zichtbaar is, wordt er weggeklikt.
            </p>
            <p>
              Een tweede veelvoorkomend probleem is de afwezigheid van bewijs. Een bezoeker die overweegt jou een
              verbouwing van 30.000 euro toe te vertrouwen, wil weten dat anderen dat ook gedaan hebben en tevreden
              zijn. Referenties, foto&apos;s van afgerond werk en reviewscores zijn geen luxe toevoeging. Ze zijn het
              verschil tussen contact opnemen en de concurrent googelen.
            </p>
            <p>
              Een derde punt is de contactdrempel. Veel bouwbedrijven bieden alleen een contactformulier aan.
              Maar een formulier vraagt meer vertrouwen van de bezoeker dan een telefoonnummer. Een zichtbaar
              telefoonnummer, bij voorkeur ook klikbaar op mobiel, verlaagt de drempel aanzienlijk.
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
              Aanpassingen die het meeste opleveren
            </h2>
            <p>
              De eerste aanpassing die altijd resultaat geeft: een duidelijke hero sectie. Bovenaan de homepage
              staat wie je bent, voor wie je werkt en een concrete call-to-action. Niet &ldquo;welkom bij ons
              bedrijf&rdquo;, maar iets als &ldquo;Renovaties in de regio Utrecht, van badkamer tot complete
              verbouwing. Vraag een offerte aan.&rdquo; Specifiek, lokaal en met een directe volgende stap.
            </p>
            <p>
              De tweede aanpassing: sociale bewijskracht boven de vouw plaatsen. Niet alleen onderaan de pagina,
              maar direct zichtbaar bij de hero. Een Google-score van 4,8 met 47 recensies vertelt een nieuwe
              bezoeker in één oogopslag meer dan drie alinea&apos;s tekst over je vakmanschap.
            </p>
            <p>
              De derde aanpassing betreft de snelheid van de site. Een website die meer dan drie seconden laadt
              verliest op mobiel gemiddeld de helft van zijn bezoekers voordat ze iets gezien hebben. Google Core
              Web Vitals meten dit, en een slechte score schaadt ook de organische vindbaarheid. Snelheid is
              zowel een conversie als een SEO-factor.
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
              Mobiel is de norm, niet de uitzondering
            </h2>
            <p>
              Meer dan 60 procent van de zoekopdrachten naar bouwbedrijven en aannemers gebeurt via de telefoon.
              Dat betekent dat een website die op desktop prima werkt maar op mobiel traag of onhandig is, het
              grootste deel van zijn potentiële aanvragen verliest.
            </p>
            <p>
              Mobiele optimalisatie gaat verder dan &ldquo;het werkt ook op de telefoon&rdquo;. Het gaat om laadtijd,
              leesbaarheid, klikbare telefoonnummers, formulieren die werken met een klein toetsenbord en buttons
              die groot genoeg zijn om met een duim op te klikken. Elk knelpunt in de mobiele ervaring kost aanvragen.
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
              Hoe meet je of het werkt?
            </h2>
            <p>
              Conversie optimalisatie is geen eenmalige actie maar een doorlopend proces. Je meet het conversiepercentage
              via Google Analytics door events in te stellen op formulierverzendingen, telefoonklikken en andere
              gewenste acties. Vervolgens test je varianten en kijk je welke variant meer conversies oplevert.
            </p>
            <p>
              Een simpele manier om te beginnen: vergelijk het aantal maandelijkse bezoekers met het aantal
              ontvangen aanvragen. Als de verhouding al jaren gelijk blijft, is er vrijwel zeker ruimte voor
              verbetering. Bouwbedrijven die serieus aan conversie optimalisatie doen, halen structureel meer
              aanvragen uit hetzelfde budget.
            </p>
            <p>
              Het resultaat van betere conversie is ook beter rendement op bestaande SEO en advertentie-investeringen.
              Meer aanvragen uit dezelfde klikken betekent een lagere kosten per lead. Dat maakt de hele marketingmix
              winstgevender.
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
                Wil je weten wat jouw bouwbedrijf website beter kan?
              </p>
              <p style={{ marginBottom: "20px", color: "oklch(70% 0 0)" }}>
                Groeimaten kijkt naar je huidige website, identificeert de grootste knelpunten en geeft concrete
                aanbevelingen. Geen verplichtingen, wel nuttige inzichten.
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

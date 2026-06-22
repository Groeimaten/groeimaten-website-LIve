import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Online marketing voor je badkamerbedrijf: van zichtbaarheid naar boekingen",
  description:
    "Een badkamerbedrijf dat online groeit combineert meerdere kanalen slim. Welke aanpak werkt echt en waar kun je beter niet op inzetten? Praktisch overzicht van Groeimaten.",
  alternates: {
    canonical: "https://groeimaten.com/blog/online-marketing-badkamerbedrijf",
  },
  openGraph: {
    title: "Online marketing voor je badkamerbedrijf: van zichtbaarheid naar boekingen",
    description:
      "Welke online marketing aanpak werkt echt voor een badkamerbedrijf? Praktisch overzicht van Groeimaten.",
    url: "https://groeimaten.com/blog/online-marketing-badkamerbedrijf",
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
    { "@type": "ListItem", position: 3, name: "Online marketing badkamerbedrijf", item: "https://groeimaten.com/blog/online-marketing-badkamerbedrijf" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Online marketing voor je badkamerbedrijf: van zichtbaarheid naar boekingen",
  description:
    "Welke online marketing aanpak werkt echt voor een badkamerbedrijf?",
  author: { "@type": "Organization", name: "Groeimaten" },
  publisher: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  datePublished: "2026-06-22",
  url: "https://groeimaten.com/blog/online-marketing-badkamerbedrijf",
}

export default function BlogOnlineMarketingBadkamerbedrijfPage() {
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
              <span style={{ color: "oklch(55% 0 0)", fontSize: "0.85rem" }}>Online marketing badkamerbedrijf</span>
            </div>
            <span className="section-label">Marketing</span>
            <h1
              className="page-hero__title"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", lineHeight: "1.2", marginTop: "12px" }}
            >
              Online marketing voor je badkamerbedrijf: van zichtbaarheid naar boekingen
            </h1>
            <p className="page-hero__subtitle" style={{ marginTop: "20px" }}>
              Een badkamer is geen impulsaankoop. Je klant oriënteert zich weken lang en vergelijkt meerdere showrooms. Online marketing die aansluit bij dat proces levert betere leads op dan een campagne die gewoon bereik maximaliseert.
            </p>
            <p style={{ color: "oklch(55% 0 0)", fontSize: "0.88rem", marginTop: "12px" }}>
              Groeimaten · 22 juni 2026 · 6 min lezen
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
              Online marketing voor badkamerbedrijven werkt anders dan voor webshops of dienstverleners met een kort aankoopproces. De gemiddelde badkamerrenovatie kost 8.000 tot 25.000 euro. Klanten nemen de tijd, bezoeken meerdere showrooms en vragen meerdere offertes op. Marketing die dat aankoopproces begrijpt presteert structureel beter dan marketing die op kortetermijnconversie is gericht.
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
              Google Ads: aanwezig op het moment van zoeken
            </h2>
            <p>
              Google Ads is voor badkamerbedrijven een van de meest directe marketingkanalen. Iemand die zoekt op &ldquo;badkamer verbouwen Den Haag&rdquo; of &ldquo;nieuwe badkamer laten plaatsen Utrecht&rdquo; is bezig met een concreet project. Die persoon heeft een behoefte en zoekt actief naar een oplossing. Op dat moment bovenaan staan met een goed advertentie levert kwalitatieve aanvragen op.
            </p>
            <p>
              Het verschil tussen een goed en een slecht ingericht Google Ads-account zit in de details: welke zoekwoorden je wel en niet target, hoe je negatieve zoekwoorden inricht om verkeer te filteren, welke advertentieteksten aansluiten bij de koopintentie en hoe je de landingspagina optimaliseert voor conversie. Dat is werk dat doorlopend aandacht nodig heeft, niet een campagne die je eenmalig opzet en vergeet.
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
              Meta Ads: de klant bereiken voor hij zoekt
            </h2>
            <p>
              Facebook en Instagram bereiken mensen die nog niet actief zoeken maar wel in de doelgroep zitten. Iemand die recent verhuisd is, een oudere woning heeft of in de leeftijdsgroep valt die badkamers renoveert. Meta-targeting maakt het mogelijk die persoon te bereiken met inspirerende beelden voor hij ooit een Google-zoekopdracht doet.
            </p>
            <p>
              Voor badkamerbedrijven werkt dit het beste met een funnelstrategie: brede bekendheidsadvertenties om het merk te introduceren, gevolgd door retargeting op mensen die je website al hebben bezocht. Wie jouw showroomfoto&apos;s heeft gezien en jouw website heeft bekeken maar nog geen contact heeft opgenomen, krijgt een herinnering op het moment dat hij klaar is om een stap te zetten.
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
              Betaalde advertenties stoppen met werken zodra je het budget stopzet. SEO bouwt een organische positie op die ook maanden later nog aanvragen genereert. Voor badkamerbedrijven die structureel willen groeien is SEO een aanvulling die op termijn het rendement van marketing verhoogt zonder de kosten per aanvraag te laten stijgen.
            </p>
            <p>
              De kern van SEO voor een badkamerbedrijf zijn goed opgezette dienstpagina&apos;s, lokale content voor de steden en regio&apos;s waar je actief bent, en een technisch gezonde website die Google snel en correct kan indexeren. Dat kost tijd om op te bouwen maar betaalt zich terug over jaren, niet over kwartalen.
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
              Wat je kunt overslaan
            </h2>
            <p>
              Aanwezigheid op vergelijkingssites en leadplatforms lijkt aantrekkelijk maar levert voor badkamerbedrijven zelden kwalitatieve aanvragen op. Je concurreert er direct op prijs met vijf andere bedrijven tegelijk. De leads die eruit komen zijn mensen die de laagste prijs willen, niet de beste kwaliteit. Als jij je onderscheidt op vakmanschap en kwaliteit is dat het verkeerde publiek.
            </p>
            <p>
              Hetzelfde geldt voor generieke sociale media aanwezigheid zonder strategie. Een Instagram-profiel bijhouden kost tijd maar levert weinig op als er geen doordachte campagnestrategie achter zit. Beter focussen op de kanalen die aantoonbaar aanvragen genereren en die goed inrichten dan overal een beetje aanwezig zijn.
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
                Wil je een marketingstrategie die echt werkt voor jouw badkamerbedrijf?
              </p>
              <p style={{ marginBottom: "20px", color: "oklch(70% 0 0)" }}>
                Plan een gratis strategiegesprek en ontdek welke kanalen het beste passen bij jouw situatie.
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

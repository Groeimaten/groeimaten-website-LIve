import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Leadgeneratie voor bouwbedrijven: minder afhankelijk van wie je kent",
  description:
    "De meeste bouwbedrijven groeien via mond-tot-mondreclame. Dat werkt totdat het niet meer werkt. Hoe bouw je een eigen aanvragenstroom op die niet afhankelijk is van je netwerk?",
  alternates: {
    canonical: "https://groeimaten.com/blog/leadgeneratie-bouwbedrijf",
  },
  openGraph: {
    title: "Leadgeneratie voor bouwbedrijven: minder afhankelijk van wie je kent",
    description:
      "Hoe bouwbedrijven structureel eigen aanvragen genereren via digitale marketing, los van referrals en doorverwijzingen.",
    url: "https://groeimaten.com/blog/leadgeneratie-bouwbedrijf",
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
      name: "Leadgeneratie bouwbedrijf",
      item: "https://groeimaten.com/blog/leadgeneratie-bouwbedrijf",
    },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Leadgeneratie voor bouwbedrijven: minder afhankelijk van wie je kent",
  description:
    "Hoe bouwbedrijven structureel eigen aanvragen genereren via digitale marketing, los van referrals en doorverwijzingen.",
  author: { "@type": "Organization", name: "Groeimaten" },
  publisher: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  datePublished: "2026-08-10",
  url: "https://groeimaten.com/blog/leadgeneratie-bouwbedrijf",
}

export default function BlogLeadgeneratieBouwbedrijfPage() {
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
              <span style={{ color: "oklch(55% 0 0)", fontSize: "0.85rem" }}>Leadgeneratie bouwbedrijf</span>
            </div>
            <span className="section-label">Leadgeneratie</span>
            <h1
              className="page-hero__title"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", lineHeight: "1.2", marginTop: "12px" }}
            >
              Leadgeneratie voor bouwbedrijven: minder afhankelijk van wie je kent
            </h1>
            <p className="page-hero__subtitle" style={{ marginTop: "20px" }}>
              Veel bouwbedrijven groeien de eerste jaren via bekenden, via aanbevelingen van tevreden klanten en via projecten die in elkaars verlengde liggen. Dat is een prima fundering, maar het is geen strategie om op te schalen. Wie wil groeien moet ook zelf klanten kunnen aantrekken.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "0 0 80px" }}>
        <div className="container">
          <div style={{ maxWidth: "720px" }}>

            <ScrollReveal>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "16px", marginTop: "48px" }}>
                Wat bedoel je eigenlijk met leadgeneratie?
              </h2>
              <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                Een lead is een potentiële klant die interesse heeft getoond. Voor een bouwbedrijf betekent dat concreet: iemand heeft een formulier ingevuld, een telefoonnummer achtergelaten of om een offerte gevraagd. Leadgeneratie is het proces waarmee je zoveel mogelijk van dit soort contactmomenten creëert via je online kanalen.
              </p>
              <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                Het verschil met mond-tot-mondreclame is timing. Een doorverwijzing komt wanneer iemand in jouw netwerk iemand anders kent die toevallig op dat moment iets laat bouwen. Leadgeneratie creëert contactmomenten op het moment dat een potentiële klant actief zoekt, ook als hij jou nog niet kent.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "16px", marginTop: "48px" }}>
                Welke kanalen werken voor bouwbedrijven?
              </h2>
              <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                Google is veruit het meest effectieve kanaal voor bouwbedrijven die kwalitatieve aanvragen willen genereren. Mensen die zoeken op &ldquo;aannemer opbouw Amsterdam&rdquo; of &ldquo;aannemer uitbouw Utrecht kosten&rdquo; zijn niet aan het oriënteren. Ze zijn klaar om offertes op te vragen.
              </p>
              <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                Google Ads geeft onmiddellijke zichtbaarheid. Je betaalt per klik, maar de mensen die klikken zijn al ver in hun zoekproces. Een goed ingericht Google Ads-account voor een bouwbedrijf levert doorgaans aanvragen op die waardevol genoeg zijn om de advertentiekosten ruimschoots terug te verdienen.
              </p>
              <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                SEO werkt anders. Het kost meer tijd om te bouwen, maar levert op termijn aanvragen op zonder dat je er per klik voor betaalt. Een bouwbedrijf dat structureel bovenaan staat voor zoektermen in zijn regio heeft een stille verkoopmedewerker die dag en nacht werkt.
              </p>
              <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                Meta Ads (Facebook en Instagram) werken ook, maar anders. Mensen zoeken niet actief naar een aannemer op social media. Wat Meta wel goed kan, is mensen bereiken die al hebben nagedacht over een verbouwing en die je nog niet kennen. Door retargeting of lookalike-doelgroepen kom je in beeld bij precies de groep die het meest waarschijnlijk klant wordt.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "16px", marginTop: "48px" }}>
                Kwaliteit versus kwantiteit
              </h2>
              <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                Meer leads is niet altijd beter. Een bouwbedrijf dat twintig aanvragen per maand ontvangt van mensen die helemaal geen budget hebben, verspilt uren aan telefoontjes en offertes die nergens toe leiden. Tien aanvragen van mensen die écht klaar zijn om te bouwen, zijn veel meer waard.
              </p>
              <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                Kwaliteitsfiltering begint al op je website. Een pagina die eerlijk is over je werkgebied, over het type projecten dat je doet en over de orde van grootte van je budgetten, trekt automatisch serieuzere aanvragen aan en filtert mensen eruit die op zoek zijn naar iets anders.
              </p>
              <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                In advertentiecampagnes doe je hetzelfde via de targeting. Wie je bereikt en met welke boodschap bepaalt in hoge mate wie er contact opneemt.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "16px", marginTop: "48px" }}>
                Een aanvragenstroom die elke maand betrouwbaar is
              </h2>
              <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                Het doel van leadgeneratie voor een bouwbedrijf is niet een piek van aanvragen in één maand. Het is een gestage stroom die maand na maand binnenkomt, zodat je capaciteit en agenda kunt plannen en je niet afhankelijk bent van toevallige doorverwijzingen.
              </p>
              <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                Groeimaten helpt bouwbedrijven bij het opzetten van dat systeem. Van website tot advertentie tot opvolgproces. We werken uitsluitend voor bedrijven in de bouw, keuken en badkamersector. Dat betekent dat we weten wat in jouw markt werkt en wat niet.
              </p>
              <div style={{ marginTop: "32px" }}>
                <Link
                  href="/afspraak"
                  className="btn btn--primary"
                  style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
                >
                  Plan een gratis gesprek {arrowIcon}
                </Link>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>
    </>
  )
}

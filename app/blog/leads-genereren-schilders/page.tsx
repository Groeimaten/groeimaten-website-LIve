import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Leads genereren voor schilders: meer aanvragen zonder koude acquisitie",
  description:
    "Schildersbedrijven die willen groeien zonder afhankelijk te zijn van mond-tot-mondreclame. Hoe genereer je structureel meer kwalitatieve aanvragen?",
  alternates: {
    canonical: "https://groeimaten.com/blog/leads-genereren-schilders",
  },
  openGraph: {
    title: "Leads genereren voor schilders: meer aanvragen zonder koude acquisitie",
    description:
      "Hoe schildersbedrijven structureel meer leads genereren via online marketing en gerichte advertenties.",
    url: "https://groeimaten.com/blog/leads-genereren-schilders",
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
      name: "Leads genereren voor schilders",
      item: "https://groeimaten.com/blog/leads-genereren-schilders",
    },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Leads genereren voor schilders: meer aanvragen zonder koude acquisitie",
  description:
    "Hoe schildersbedrijven structureel meer leads genereren via online marketing en gerichte advertenties.",
  author: { "@type": "Organization", name: "Groeimaten" },
  publisher: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  datePublished: "2026-08-03",
  url: "https://groeimaten.com/blog/leads-genereren-schilders",
}

export default function BlogLeadsGenerenSchildersPage() {
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
              <span style={{ color: "oklch(55% 0 0)", fontSize: "0.85rem" }}>Leads genereren voor schilders</span>
            </div>
            <span className="section-label">Leadgeneratie</span>
            <h1
              className="page-hero__title"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", lineHeight: "1.2", marginTop: "12px" }}
            >
              Leads genereren voor schilders: meer aanvragen zonder koude acquisitie
            </h1>
            <p className="page-hero__subtitle" style={{ marginTop: "20px" }}>
              Schildersbedrijven die afhankelijk zijn van doorverwijzingen groeien langzaam en
              onvoorspelbaar. Online leadgeneratie geeft grip op de instroom van nieuwe klanten,
              zonder dat je koud hoeft te bellen of te flyeren.
            </p>
            <p style={{ color: "oklch(55% 0 0)", fontSize: "0.88rem", marginTop: "12px" }}>
              Groeimaten · 3 augustus 2026 · 6 min lezen
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
              De meeste schildersbedrijven werken met een hoge bezettingsgraad en een redelijk klantenbestand,
              maar als er één grote klant wegvalt of het seizoen tegenvalt, ontstaat er snel een gat in de
              agenda. Dat gat is precies waar online leadgeneratie voor is gemaakt.
            </p>
            <p>
              Leads genereren voor schilders werkt anders dan voor een keukenstudio of een bouwbedrijf.
              De projecten zijn kleiner, de beslissingstijd korter en de klant maakt zijn keuze vaker op
              basis van prijs en reviews dan op basis van een langdurig oriëntatieproces. Dat heeft gevolgen
              voor welke marketingkanalen het meest effectief zijn.
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
              Lokale zichtbaarheid als startpunt
            </h2>
            <p>
              Mensen die een schilder zoeken, zoeken lokaal. Ze typen "schildersbedrijf Utrecht" of
              "schilder gevelbekleding Eindhoven" en willen iemand die snel kan en in de buurt werkt.
              Google Mijn Bedrijf is voor schildersbedrijven een van de meest waardevolle marketinginstrumenten.
            </p>
            <p>
              Een volledig ingevuld profiel met recente foto&apos;s van afgeronde projecten, een goede
              gemiddelde beoordeling en regelmatige reacties op reviews, scoort aanzienlijk beter in de
              lokale kaartweergave dan een profiel dat al jaren niet is bijgewerkt. Google Mijn Bedrijf
              is gratis en levert directe aanvragen op.
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
              Meta Ads voor schildersbedrijven
            </h2>
            <p>
              Facebook en Instagram advertenties werken goed voor schildersbedrijven omdat je heel
              precies kunt targeten op geografisch gebied, leeftijd en huiseigenaarschap. Een advertentie
              die mensen in een straal van 30 kilometer rond jouw werkgebied bereikt, met een
              before-and-after foto van een gevelschilderwerk, spreekt precies de juiste mensen aan.
            </p>
            <p>
              De kracht van Meta Ads voor schilders zit in het visuele. Schilderwerk is een product dat
              mensen kunnen zien. Een sterk beeld van een wit geschilderd herenhuis of een vers gelakte
              voordeur trekt aandacht in een druk tijdlijn en wekt interesse bij mensen die zelf ook
              aan een opfrisbeurt denken.
            </p>
            <p>
              Het nadeel van Meta Ads is dat mensen nog niet actief zoeken op het moment dat ze de
              advertentie zien. Ze staan meer open voor inspiratie dan voor directe actie. Dat betekent
              dat de advertentie lager in de beslissingsfunnel moet worden ingezet: ze zien het, raken
              geïnteresseerd en nemen later contact op. Snelle conversies zijn er ook, maar dat vereist
              een aanbieding die mensen direct aanzet tot actie.
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
              Voor schildersbedrijven die direct aanvragen willen, is Google Ads de snelste weg. Iemand
              die googelt op "schilder voor binnenmuren offerte" is klaar om een afspraak te maken. Als
              jouw advertentie dan verschijnt met een duidelijke boodschap en een eenvoudig contactformulier,
              is de kans op een aanvraag groot.
            </p>
            <p>
              De kunst is de juiste zoekwoorden kiezen en de campagne beperken tot het werkgebied.
              Een schildersbedrijf in Haarlem heeft niets aan klikken vanuit Groningen. Geografische
              targeting is daarin essentieel.
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
              Reviews als grootste conversiefactor
            </h2>
            <p>
              Bij schildersbedrijven kiezen veel klanten op basis van reviews. Een schilder met 60
              positieve Google-reviews wint het van een concurrent met twee reviews, zelfs als de
              concurrent goedkoper is. Reviews bouwen vertrouwen op bij mensen die je nog nooit eerder
              hebben gezien.
            </p>
            <p>
              Actief reviews verzamelen na elk afgerond project is daarmee een van de meest rendabele
              marketingactiviteiten voor een schildersbedrijf. Een eenvoudig berichtje met een directe
              link naar de reviewpagina, verstuurd na afronding van een klus, levert over het jaar een
              aanzienlijk grotere online reputatie op.
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
                Groeimaten helpt schildersbedrijven en bouwpartners aan meer kwalitatieve aanvragen
              </p>
              <p style={{ marginBottom: "20px", color: "oklch(70% 0 0)" }}>
                Van Google Mijn Bedrijf optimalisatie tot gerichte advertenties. Plan een gratis gesprek
                en hoor wat er mogelijk is voor jouw schildersbedrijf.
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

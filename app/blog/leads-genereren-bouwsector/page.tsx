import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Leads genereren in de bouwsector: wat werkt en wat niet",
  description:
    "Mond-tot-mondreclame is onvoorspelbaar. Hoe genereer je als bouwbedrijf structureel kwalitatieve aanvragen? Groeimaten legt uit welke kanalen werken.",
  alternates: {
    canonical: "https://groeimaten.com/blog/leads-genereren-bouwsector",
  },
  openGraph: {
    title: "Leads genereren in de bouwsector: wat werkt en wat niet",
    description:
      "Hoe genereer je als bouwbedrijf structureel kwalitatieve aanvragen? Groeimaten legt uit welke kanalen werken.",
    url: "https://groeimaten.com/blog/leads-genereren-bouwsector",
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
      name: "Leads genereren bouwsector",
      item: "https://groeimaten.com/blog/leads-genereren-bouwsector",
    },
  ],
}

export default function BlogLeadsGenerenBouwsectorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

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
              <span style={{ color: "oklch(55% 0 0)", fontSize: "0.85rem" }}>Leads genereren bouwsector</span>
            </div>
            <span className="section-label">Leadgeneratie</span>
            <h1
              className="page-hero__title"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", lineHeight: "1.2", marginTop: "12px" }}
            >
              Leads genereren in de bouwsector: wat werkt en wat niet
            </h1>
            <p className="page-hero__subtitle" style={{ marginTop: "20px" }}>
              Aannemers en bouwbedrijven die vijf jaar geleden nog voldoende werk hadden via mond-tot-mondreclame
              merken dat het steeds harder gaat. De markt is veranderd. Leads genereren in de bouwsector is daarmee
              niet meer optioneel voor bedrijven die willen groeien.
            </p>
            <p style={{ color: "oklch(55% 0 0)", fontSize: "0.88rem", marginTop: "12px" }}>
              Groeimaten · 16 juni 2026 · 6 min lezen
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
              Klanten oriënteren zich online, vergelijken meerdere partijen en kiezen op basis van wat ze zien
              voordat ze iemand bellen. Leads genereren in de bouwsector is daarmee een structureel onderdeel
              geworden van hoe succesvolle bouwbedrijven opereren.
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
              Waarom mond-tot-mondreclame niet genoeg is
            </h2>
            <p>
              Mond-tot-mondreclame werkt. Dat ontkennen we niet. Maar het is onvoorspelbaar, niet schaalbaar en
              afhankelijk van geluk en timing. De ene maand heb je drie projecten, de andere maand niets. Als je
              afhankelijk bent van doorverwijzingen, heb je geen grip op je omzet.
            </p>
            <p>
              Leads genereren via online kanalen geeft je iets wat mond-tot-mondreclame nooit geeft: controle.
              Je kunt bepalen hoeveel aanvragen je wilt, wanneer je die aanvragen wilt en wat voor type klant je
              wilt aantrekken. Dat is het fundamentele verschil tussen reactief en proactief ondernemen.
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
              De twee kanalen die werken in de bouwsector
            </h2>
            <p>
              Niet elk online kanaal werkt even goed voor bouwbedrijven. Twee kanalen springen eruit.
            </p>
            <p>
              <strong style={{ color: "oklch(90% 0 0)" }}>Meta Ads via Facebook en Instagram.</strong> Met de
              juiste doelgroepinstelling bereik je mensen die actief verbouwen of aan het plannen zijn. Een
              campagne op Meta toont jouw bedrijf aan mensen die demografisch en qua gedrag overeenkomen met jouw
              beste klanten. Het voordeel is snelheid: eerste leads kunnen er al zijn binnen een week na lancering.
            </p>
            <p>
              <strong style={{ color: "oklch(90% 0 0)" }}>Google Ads en SEO.</strong> Mensen die actief zoeken
              naar &ldquo;aannemer voor badkamerrenovatie&rdquo; of &ldquo;verbouwing keuken offerte aanvragen&rdquo;
              zijn al verder in hun beslissingsproces. Ze willen iets concreets. Google Ads plaatst jou bovenaan
              wanneer ze zoeken. SEO doet hetzelfde op de langere termijn, zonder het continue advertentiebudget.
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
              Het verschil tussen een aanvraag en een kwalitatieve lead
            </h2>
            <p>
              Een probleem dat veel bouwbedrijven herkennen: je krijgt aanvragen, maar ze zijn niet serieus.
              Mensen die een offerte aanvragen maar nooit terugbellen. Uren verspild aan telefoontjes die nergens
              toe leiden.
            </p>
            <p>
              Het verschil zit in hoe je die aanvragen filtert. Een goed opgezet leadgeneratiesysteem stelt
              kwalificatievragen voordat iemand een aanvraag indient. Wat is het project? Wat is het budget? Wanneer
              wil men starten? Wie die vragen serieus beantwoordt, meent het. Wie dat niet doet, filtert zichzelf
              eruit.
            </p>
            <p>
              Bij Groeimaten gebruiken we dit principe structureel. We helpen bouwbedrijven niet alleen om
              aanvragen te genereren, maar om kwalitatieve aanvragen te genereren die ook daadwerkelijk leiden
              tot opdrachten.
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
              Wat het oplevert
            </h2>
            <p>
              Een realistisch beeld: een goed opgezet systeem genereert gemiddeld 10 tot 30 kwalitatieve leads
              per maand, afhankelijk van het budget en de sector. Bij een gemiddelde orderwaarde van 25.000 euro
              is het rendement snel berekend. Één gewonnen opdracht dekt de kosten van meerdere maanden marketing.
            </p>
            <p>
              Leads genereren in de bouwsector kost tijd om goed op te zetten. Een paar weken voor de technische
              basis, een paar maanden om te optimaliseren op basis van data. Maar de investering verdient zichzelf
              terug, en daarna werkt het systeem voor jou.
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
                Meer weten over leads genereren voor jouw bouwbedrijf?
              </p>
              <p style={{ marginBottom: "20px", color: "oklch(70% 0 0)" }}>
                Plan een gratis strategiegesprek. We bekijken jouw situatie en vertellen je eerlijk wat er
                mogelijk is.
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

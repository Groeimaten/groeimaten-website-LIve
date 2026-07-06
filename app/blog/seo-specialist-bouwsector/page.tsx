import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "SEO specialist voor de bouwsector: wat je moet weten voor je kiest",
  description:
    "Een SEO specialist voor de bouwsector kent de zoekwoorden, concurrenten en het aankoopproces in bouw. Wat onderscheidt een echte specialist van een generalist?",
  alternates: {
    canonical: "https://groeimaten.com/blog/seo-specialist-bouwsector",
  },
  openGraph: {
    title: "SEO specialist voor de bouwsector: wat je moet weten voor je kiest",
    description:
      "Wat onderscheidt een echte SEO specialist voor bouw van een generalist? Groeimaten legt het uit.",
    url: "https://groeimaten.com/blog/seo-specialist-bouwsector",
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
      name: "SEO specialist bouwsector",
      item: "https://groeimaten.com/blog/seo-specialist-bouwsector",
    },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "SEO specialist voor de bouwsector: wat je moet weten voor je kiest",
  description:
    "Een SEO specialist voor de bouwsector kent de zoekwoorden, concurrenten en het aankoopproces in bouw.",
  author: { "@type": "Organization", name: "Groeimaten" },
  publisher: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  datePublished: "2026-07-06",
  url: "https://groeimaten.com/blog/seo-specialist-bouwsector",
}

export default function BlogSeoSpecialistBouwsectorPage() {
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
              <span style={{ color: "oklch(55% 0 0)", fontSize: "0.85rem" }}>SEO specialist bouwsector</span>
            </div>
            <span className="section-label">SEO</span>
            <h1
              className="page-hero__title"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", lineHeight: "1.2", marginTop: "12px" }}
            >
              SEO specialist voor de bouwsector: wat je moet weten voor je kiest
            </h1>
            <p className="page-hero__subtitle" style={{ marginTop: "20px" }}>
              Elke SEO specialist beweert dat hij voor iedereen werkt. Dat klopt technisch gezien, maar
              resultaten hangen sterk af van sectorkennis. Een specialist die de bouwsector kent, heeft
              een voorsprong die je niet inhaalt met extra uren.
            </p>
            <p style={{ color: "oklch(55% 0 0)", fontSize: "0.88rem", marginTop: "12px" }}>
              Groeimaten · 6 juli 2026 · 6 min lezen
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
              SEO is geen exacte wetenschap. Dezelfde technische aanpak levert in de ene sector andere
              resultaten op dan in de andere. De bouwsector heeft specifieke kenmerken die een grote impact
              hebben op hoe SEO werkt. Wie die kenmerken begrijpt, maakt andere keuzes dan een generalist
              die een standaard stappenplan uitvoert.
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
              Lokale SEO domineert in de bouwsector
            </h2>
            <p>
              Aannemers, installatiebedrijven en bouwspecialisten werken regionaal. Ze rijden niet door
              heel Nederland voor een opdracht. Dat maakt lokale SEO verreweg het belangrijkste onderdeel
              van hun digitale strategie. Een SEO specialist die dit begrijpt, richt zich op zoekwoorden
              als &ldquo;aannemer [stad]&rdquo;, &ldquo;loodgieter [regio]&rdquo; en
              &ldquo;dakdekker [gemeente]&rdquo;.
            </p>
            <p>
              Een generalist die gewend is aan nationale campagnes of e-commerce, denkt in andere
              zoekvolumes en concurrentiestructuren. Voor een bouwbedrijf dat in een straal van 50 kilometer
              werkt, is een zoekterm met 200 maandelijkse zoekopdrachten in die regio waardevoller dan een
              nationale term met 10.000 zoekopdrachten. Die afweging vraagt sectorkennis.
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
              Contentkennis maakt het verschil
            </h2>
            <p>
              SEO in de bouwsector vraagt om inhoud die aansluit bij de vragen die potentiële opdrachtgevers
              stellen. Wat kost een uitbouw gemiddeld? Welke vergunning is nodig voor een dakkapel? Hoe
              lang duurt een complete badkamerrenovatie? Bedrijven die die vragen beantwoorden op hun
              website, trekken bezoekers in de oriëntatiefase.
            </p>
            <p>
              Een SEO specialist die de bouwsector niet kent, schrijft generieke teksten over SEO of
              gebruik van zoekwoorden. Iemand met sectorkennis weet welke vragen een koper van een keuken
              stelt, wat een opdrachtgever voor een renovatie wil weten en hoe het beslisproces eruitziet
              voordat er contact opgenomen wordt. Die kennis zit in de teksten en trekt de juiste bezoekers.
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
              Wat je aan een SEO specialist moet vragen
            </h2>
            <p>
              Een goede toets bij het selecteren van een SEO specialist voor de bouwsector: vraag om
              concrete voorbeelden van klanten in keuken, badkamer of bouw. Vraag naar de zoektermen
              waarop die klanten nu staan en hoeveel aanvragen ze via organisch verkeer ontvangen.
            </p>
            <p>
              Pas op voor garanties op posities. Niemand kan garanderen dat een website op positie 1 staat
              voor een bepaalde zoekterm. Google bepaalt dat. Wat een specialist wél kan beloven, zijn
              aantoonbare verbeteringen in organisch verkeer en aanvragen over een periode van zes tot
              twaalf maanden. Wie dat niet kan aantonen met bestaande klanten, heeft de ervaring nog niet.
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
              Hoelang duurt het voordat SEO in de bouwsector werkt?
            </h2>
            <p>
              Voor de bouwsector geldt hetzelfde als voor andere sectoren: drie tot zes maanden voor
              eerste merkbare resultaten, twaalf maanden voor een stabiele positie op concurrerende
              zoektermen. In minder concurrerende regio&apos;s gaat het soms sneller. In grote steden
              met veel aanbieders is geduld vereist.
            </p>
            <p>
              Bouwbedrijven die vroeg beginnen met SEO bouwen een positie op die moeilijk te evenaren is
              voor latere instappers. Elk jaar extra organische aanwezigheid versterkt de autoriteit van
              de website. Die autoriteit is niet te kopen, alleen op te bouwen.
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
                Groeimaten is een sectorspecialist in keuken, badkamer en bouw
              </p>
              <p style={{ marginBottom: "20px", color: "oklch(70% 0 0)" }}>
                Plan een gratis gesprek en ontdek wat jouw huidige organische positie is en wat er
                concreet beter kan. Geen rapport van twintig pagina&apos;s, maar een helder gesprek.
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

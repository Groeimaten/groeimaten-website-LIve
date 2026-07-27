import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Leads genereren als elektricien: eigen aanvragen versus leadplatforms",
  description:
    "Elektriciens kunnen leads kopen via platforms, maar eigen aanvragen kosten structureel minder en leveren kwalitatievere klanten op. Hoe bouw je die stroom zelf op?",
  alternates: {
    canonical: "https://groeimaten.com/blog/leads-genereren-elektricien",
  },
  openGraph: {
    title: "Leads genereren als elektricien: eigen aanvragen versus leadplatforms",
    description:
      "Eigen leads kosten minder en leveren betere klanten op dan gekochte leads van platforms. Hoe bouw je die stroom als elektricien op?",
    url: "https://groeimaten.com/blog/leads-genereren-elektricien",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leads genereren als elektricien: eigen aanvragen versus leadplatforms",
    description: "Eigen leads kosten minder en leveren betere klanten op dan gekochte leads van platforms.",
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
      name: "Leads genereren elektricien",
      item: "https://groeimaten.com/blog/leads-genereren-elektricien",
    },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Leads genereren als elektricien: eigen aanvragen versus leadplatforms",
  description:
    "Eigen leads kosten minder en leveren betere klanten op dan gekochte leads van platforms. Hoe bouw je die stroom als elektricien op?",
  author: { "@type": "Organization", name: "Groeimaten" },
  publisher: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  datePublished: "2026-07-27",
  url: "https://groeimaten.com/blog/leads-genereren-elektricien",
}

export default function BlogLeadsGenererenElectricienPage() {
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
              <span style={{ color: "oklch(55% 0 0)", fontSize: "0.85rem" }}>Leads genereren elektricien</span>
            </div>
            <span className="section-label">Leadgeneratie</span>
            <h1
              className="page-hero__title"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", lineHeight: "1.2", marginTop: "12px" }}
            >
              Leads genereren als elektricien: eigen aanvragen versus leadplatforms
            </h1>
            <p className="page-hero__subtitle" style={{ marginTop: "20px" }}>
              Platforms als Werkspot en Klusid verkopen leads aan meerdere elektriciens tegelijk.
              Jij betaalt voor een lead die ook naar twee of drie concurrenten gaat. Eigen aanvragen
              via je eigen website of advertenties komen alleen bij jou binnen.
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
              Een gedeelde lead kost gemiddeld tussen €10 en €30 per stuk, maar er zijn meerdere
              elektriciens die op diezelfde aanvraag reageren. De kans dat jij de opdracht krijgt
              is kleiner dan 50 procent. Eigen leads via Google Ads of SEO kosten per aanvraag
              soms meer, maar die aanvraag is uitsluitend van jou.
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
              Twee typen elektrisch werk, twee kanalen
            </h2>
            <p>
              Elektriciens werken voor spoedsituaties en voor geplande projecten. Spoed, denk aan
              een kapotte meterkast of stroomstoring, vraagt om directe bereikbaarheid. Gepland werk,
              zoals een verbouwing, extra groepen of laadpaalinstallatie, heeft een langere aanlooptijd.
            </p>
            <p>
              Voor spoedopdrachten is Google Ads het meest direct. Je betaalt alleen als iemand
              klikt, en die persoon zoekt op dat moment actief naar een elektricien. Voor gepland werk
              werkt SEO beter op de langere termijn: iemand die een laadpaal wil installeren zoekt
              zich door meerdere websites heen voordat hij contact opneemt, en een goede organische
              positie zorgt dat jij erbij zit.
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
              Kwaliteit boven kwantiteit
            </h2>
            <p>
              Een elektricien die 20 leads per maand ontvangt waarvan er 4 worden, doet het slechter
              dan een elektricien met 10 leads per maand waarvan er 6 worden. De kwaliteit van de
              aanvraag bepaalt het rendement, niet het aantal.
            </p>
            <p>
              Kwaliteit stuur je aan via de selectiviteit van je campagne. Gebruik specifieke
              zoekwoorden die de type opdrachten aantrekken die jij wil. Sluit termen uit die
              aanvragen aantrekken die je niet wil uitvoeren. En zorg dat je website duidelijk
              beschrijft wat je doet, in welke regio je werkt en wat je prijsniveau is.
              Dat filtert op de beste aanvragen.
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
              Reviews als conversiemiddel
            </h2>
            <p>
              Een elektricien met 40 Google-reviews wekt meer vertrouwen dan een elektricien met
              8, ook als het werk vergelijkbaar is. Reviews zijn voor installatiesectoren een van
              de krachtigste middelen om twijfelaars over de streep te trekken.
            </p>
            <p>
              Vraag na elke afgeronde klus actief om een review. Maak het gemakkelijk door een
              directe link naar jouw Google-reviewpagina te sturen via SMS of e-mail. Elektriciens
              die dit systematisch doen, bouwen in één jaar een reviewscore op die vertrouwen
              uitstraalt en de conversieratio van hun website structureel verhoogt.
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
              Leads van platforms als aanvulling, niet als basis
            </h2>
            <p>
              Leadplatforms zijn niet per se slecht, maar ze zijn kwetsbaar. Als een platform de
              prijzen verhoogt of de regels verandert, heb jij geen alternatief. Een elektricien
              die zijn eigen aanvraagsysteem heeft opgebouwd via Google, SEO en een sterke
              reputatie, is niet afhankelijk van derden voor zijn omzetstroom.
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
                Eigen aanvragen opbouwen als elektricien?
              </p>
              <p style={{ marginBottom: "20px", color: "oklch(70% 0 0)" }}>
                Plan een gratis gesprek en we bekijken samen hoe jij minder afhankelijk wordt van
                leadplatforms en een eigen, structurele instroom opbouwt.
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

import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Meer klanten als loodgieter: structureel eigen aanvragen genereren",
  description:
    "Loodgieters die afhankelijk zijn van mond-tot-mondreclame groeien niet voorspelbaar. Hoe bouw je een constante stroom eigen aanvragen op via je website en Google?",
  alternates: {
    canonical: "https://groeimaten.com/blog/meer-klanten-loodgieter",
  },
  openGraph: {
    title: "Meer klanten als loodgieter: structureel eigen aanvragen genereren",
    description:
      "Hoe loodgieters een constante stroom klanten opbouwen via hun eigen website en Google, zonder afhankelijk te zijn van doorverwijzingen.",
    url: "https://groeimaten.com/blog/meer-klanten-loodgieter",
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
      name: "Meer klanten loodgieter",
      item: "https://groeimaten.com/blog/meer-klanten-loodgieter",
    },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Meer klanten als loodgieter: structureel eigen aanvragen genereren",
  description:
    "Hoe loodgieters een constante stroom klanten opbouwen via hun eigen website en Google, zonder afhankelijk te zijn van doorverwijzingen.",
  author: { "@type": "Organization", name: "Groeimaten" },
  publisher: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  datePublished: "2026-08-10",
  url: "https://groeimaten.com/blog/meer-klanten-loodgieter",
}

export default function BlogMeerKlantenLoodgieterPage() {
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
              <span style={{ color: "oklch(55% 0 0)", fontSize: "0.85rem" }}>Meer klanten loodgieter</span>
            </div>
            <span className="section-label">Loodgietersbedrijf</span>
            <h1
              className="page-hero__title"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", lineHeight: "1.2", marginTop: "12px" }}
            >
              Meer klanten als loodgieter: structureel eigen aanvragen genereren
            </h1>
            <p className="page-hero__subtitle" style={{ marginTop: "20px" }}>
              Iemand met een gesprongen leiding belt wie bovenaan Google staat. Iemand die een badkamer wil renoveren vergelijkt drie offertes. Beide zijn klanten, maar ze zoeken je op een andere manier. Als loodgieter moet je voor beide vindbaar zijn.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "0 0 80px" }}>
        <div className="container">
          <div style={{ maxWidth: "720px" }}>

            <ScrollReveal>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "16px", marginTop: "48px" }}>
                Twee soorten klanten, twee manieren van zoeken
              </h2>
              <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                De spoedklant heeft nu een probleem en wil nu een oplossing. Hij typt &ldquo;loodgieter spoed Amsterdam&rdquo; en belt de eerste die hij ziet. De oriënterende klant plant een badkamerrenovatie over drie maanden en vraagt meerdere offertes op. Hij leest beoordelingen, bekijkt referentieprojecten en vergelijkt.
              </p>
              <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                Veel loodgieters richten hun online aanwezigheid alleen op één van beide. Ze hebben een Google Ads-campagne voor spoedklanten maar geen SEO voor planklanten, of andersom. Het resultaat is een grillige instroom: soms te druk, soms te rustig. Een voorspelbare maandelijkse omzet krijg je pas als je voor beide zichtbaar bent.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "16px", marginTop: "48px" }}>
                Waarom eigen aanvragen meer waard zijn dan platforms
              </h2>
              <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                Platforms zoals Werkspot en Klusadvies verkopen dezelfde aanvraag aan meerdere loodgieters tegelijk. Je betaalt voor elke lead, ook als die naar een concurrent gaat. Bij twee of drie loodgieters die allemaal betalen voor dezelfde aanvraag daalt de winstmarge per opdracht snel.
              </p>
              <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                Een aanvraag via jouw eigen website of Google Ads-campagne komt alleen bij jou binnen. Je hebt geen concurrentie op het moment van contact. De klant heeft jou al gekozen voordat hij zijn naam invult. Dat is een fundamenteel andere startpositie voor het gesprek.
              </p>
              <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                De kosten per opdracht via eigen kanalen zijn bij een goed ingericht systeem lager dan via platforms, zeker na het eerste jaar. Platforms zijn handig om een gat op te vullen, maar ze bouwen niets op. Elke euro die je erin steekt is weg zodra je stopt met betalen. SEO en een converterende website blijven werken.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "16px", marginTop: "48px" }}>
                Wat jouw website moet doen om aanvragen te genereren
              </h2>
              <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                Een website voor een loodgietersbedrijf heeft één taak: de bezoeker zo snel mogelijk laten bellen of een formulier laten invullen. Dat klinkt eenvoudig, maar de meeste loodgieterswebsites mislukken op drie punten.
              </p>
              <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                Ten eerste: het telefoonnummer staat niet direct zichtbaar op mobiel. Iemand met een lekkage scrolt niet op zoek naar een contactpagina. Als je nummer niet in de eerste seconde zichtbaar is, zijn ze al weg.
              </p>
              <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                Ten tweede: de teksten gaan over het bedrijf in plaats van over de klant. &ldquo;Al 15 jaar actief in de regio&rdquo; triggert niemand om te bellen. &ldquo;Vandaag beschikbaar voor spoedreparaties in Utrecht en omgeving&rdquo; wel.
              </p>
              <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                Ten derde: er is geen bewijs van kwaliteit. Klanten die je niet kennen, nemen een risico door jou in hun huis toe te laten. Echte Google-recensies, voor-en-na-foto&apos;s van eerdere projecten en een herkenbaar logo van een vakorganisatie verlagen die drempel aanzienlijk.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "16px", marginTop: "48px" }}>
                Google Ads voor spoedsituaties
              </h2>
              <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                Voor de spoedklant werkt Google Ads het best. Je betaalt alleen wanneer iemand op je advertentie klikt, en die persoon heeft zojuist actief gezocht naar een loodgieter. De intentie is maximaal.
              </p>
              <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                Het verschil tussen een winstgevende en een verlieslatende campagne zit in de details. Zoekwoorden goed afbakenen zodat je niet betaalt voor irrelevante zoekopdrachten. Een advertentietekst die direct het telefoonnummer toont via een belbijlage. Een landingspagina die raak is en snel laadt. Een campagne die zichzelf uitschakelt buiten je beschikbare uren.
              </p>
              <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                Loodgieters met een goed ingericht Google Ads-account betalen gemiddeld tussen de 15 en 35 euro per telefoontje, afhankelijk van de regio. In stedelijke gebieden zijn de kosten hoger. Een opdracht levert doorgaans een veelvoud op.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "16px", marginTop: "48px" }}>
                Lokale SEO voor planmatige aanvragen
              </h2>
              <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                Voor de oriënterende klant is SEO de meest kostenefficiënte aanpak op de lange termijn. Iemand die &ldquo;loodgieter badkamerrenovatie Rotterdam&rdquo; googelt, is niet in haast maar wil weten met wie hij in zee gaat.
              </p>
              <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                Lokale SEO voor een loodgieter begint bij drie dingen. Een volledig ingevuld en actief Google Bedrijfsprofiel met recente foto&apos;s en beoordelingen. Een website met pagina&apos;s gericht op specifieke diensten en gebieden, zoals een aparte pagina voor &ldquo;loodgieter Amsterdam-Noord&rdquo; of &ldquo;CV-ketel installatie Haarlem&rdquo;. En externe verwijzingen van lokale directories en vakorganisaties die Google laten zien dat jij een gevestigde naam bent in de regio.
              </p>
              <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                SEO duurt langer dan advertenties, maar de aanvragen die eruit komen, kosten je op termijn niets extra. Dat maakt het verschil als je denkt in jaren in plaats van maanden.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "16px", marginTop: "48px" }}>
                Waar je als loodgieter mee begint
              </h2>
              <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                De meest praktische volgorde: eerst je website op orde, dan Google Ads voor directe aanvragen, dan SEO voor structurele groei. Een kapotte website maakt elke advertentiecampagne duurder omdat bezoekers afhaken voordat ze contact opnemen.
              </p>
              <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                Groeimaten werkt met loodgieters en installateurs in de hele keuken, badkamer en bouwsector. We kennen de cijfers van wat werkt en wat niet in jouw markt. Een gesprek kost niets en levert in elk geval een eerlijk beeld op van wat er voor jou mogelijk is.
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

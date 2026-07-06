import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Badkamer leads genereren: de aanpak die ook kwalitatieve aanvragen oplevert",
  description:
    "Badkamer leads genereren is meer dan adverteren. Hoe zorg je als badkamerbedrijf voor een constante stroom aanvragen van klanten met een serieus renovatieplan?",
  alternates: {
    canonical: "https://groeimaten.com/blog/badkamer-leads-genereren",
  },
  openGraph: {
    title: "Badkamer leads genereren: de aanpak die ook kwalitatieve aanvragen oplevert",
    description:
      "Hoe zorg je als badkamerbedrijf voor een constante stroom aanvragen van klanten met een serieus renovatieplan?",
    url: "https://groeimaten.com/blog/badkamer-leads-genereren",
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
      name: "Badkamer leads genereren",
      item: "https://groeimaten.com/blog/badkamer-leads-genereren",
    },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Badkamer leads genereren: de aanpak die ook kwalitatieve aanvragen oplevert",
  description:
    "Hoe zorg je als badkamerbedrijf voor een constante stroom aanvragen van klanten met een serieus renovatieplan?",
  author: { "@type": "Organization", name: "Groeimaten" },
  publisher: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  datePublished: "2026-07-06",
  url: "https://groeimaten.com/blog/badkamer-leads-genereren",
}

export default function BlogBadkamerLeadsGenerenPage() {
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
              <span style={{ color: "oklch(55% 0 0)", fontSize: "0.85rem" }}>Badkamer leads genereren</span>
            </div>
            <span className="section-label">Leadgeneratie</span>
            <h1
              className="page-hero__title"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", lineHeight: "1.2", marginTop: "12px" }}
            >
              Badkamer leads genereren: de aanpak die ook kwalitatieve aanvragen oplevert
            </h1>
            <p className="page-hero__subtitle" style={{ marginTop: "20px" }}>
              Veel badkamerbedrijven hebben wel aanvragen, maar te weinig afspraken die ook daadwerkelijk
              opdrachten worden. Het probleem zit zelden in het aantal leads, maar in de kwaliteit ervan.
              Een goede strategie voor badkamer leads genereren gaat over beide.
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
              Een badkamerrenovatie kost gemiddeld 8.000 tot 25.000 euro. Dat is een beslissing die mensen
              niet lichtzinnig nemen. Het oriëntatieproces begint vaak maanden voordat iemand contact opneemt.
              Ze kijken op Pinterest, bezoeken showrooms, lezen blogs en vergelijken offertes van meerdere
              bedrijven. Wie pas zichtbaar is op het moment dat iemand contact zoekt, heeft al een groot deel
              van het beslisproces gemist.
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
              Vroeg zichtbaar zijn in de oriëntatiefase
            </h2>
            <p>
              De sterkste strategie voor badkamer leads genereren begint al in de overwegingsfase van de
              potentiële klant. Meta Ads zijn daarvoor het meest effectieve kanaal. Door advertenties te
              tonen aan mensen in de doelgroep, voordat ze actief zoeken op Google, wordt naamsbekendheid
              opgebouwd bij mensen die op termijn een badkamer willen renoveren.
            </p>
            <p>
              Foto&apos;s en video&apos;s van afgerond werk zijn daarvoor het sterkste materiaal. Een
              voor en na video van een complete badkamerrenovatie trekt meer aandacht dan een tekst over
              de voordelen van jouw bedrijf. Mensen herkennen hun eigen badkamer in die voor-foto en
              projecteren zichzelf in de na-foto. Dat emotionele effect zet het oriëntatieproces in gang.
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
              Google Ads voor koopklare zoekers
            </h2>
            <p>
              Parallel aan Meta Ads zorgt Google Ads voor aanvragen van mensen die al in de aankoopfase
              zitten. Iemand die zoekt naar &ldquo;badkamer renoveren [stad]&rdquo; of
              &ldquo;badkamerbedrijf offerte [regio]&rdquo; heeft al besloten dat hij wil renoveren.
              Die persoon vergelijkt nu aanbieders.
            </p>
            <p>
              Voor Google Ads bij badkamerbedrijven is de keuze van zoekwoorden cruciaal. Brede termen als
              &ldquo;badkamer&rdquo; of &ldquo;tegels leggen&rdquo; kosten veel budget voor aanvragen van
              laag niveau. Specifieke termen als &ldquo;complete badkamerrenovatie&rdquo; of
              &ldquo;badkamer plaatsen inclusief installatie&rdquo; trekken aanvragen van mensen met een
              groter project en een hoger budget.
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
              Kwalificatie via het aanvraagproces
            </h2>
            <p>
              Badkamerbedrijven die te maken hebben met veel aanvragen van slechte kwaliteit, lossen dat op
              door het aanvraagproces te verbeteren. Een formulier dat vraagt naar de gewenste budgetrange,
              het type badkamer en de beoogde startdatum, filtert mensen zonder serieuze plannen eruit.
            </p>
            <p>
              Dat filtert ook de eigenaren die op zoek zijn naar de goedkoopste optie. Een badkamerbedrijf
              dat zich richt op het middel en hoogsegment, heeft geen baat bij aanvragen van mensen met
              een budget van 2.000 euro voor een complete renovatie. Betere kwalificatie betekent minder
              verspilde tijd aan offertes die nooit opdrachten worden.
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
              Retargeting sluit de cirkel
            </h2>
            <p>
              Niet iedereen die de website bezoekt, vraagt meteen een offerte aan. Het merendeel oriënteert
              en verlaat de site zonder contact op te nemen. Retargeting brengt die mensen terug. Via Meta
              Ads worden bezoekers gevolgd en opnieuw bereikt met advertenties die aansluiten bij wat ze
              hebben bekeken.
            </p>
            <p>
              Iemand die de badkamerpagina heeft bezocht, ziet een retargetingadvertentie met een recent
              afgerond badkamerproject. Dat herinnert hen aan het bedrijf op het moment dat ze verder
              oriënteren. Het verhoogt de kans dat ze contact opnemen merkbaar.
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
                Meer badkamer leads van hogere kwaliteit?
              </p>
              <p style={{ marginBottom: "20px", color: "oklch(70% 0 0)" }}>
                Plan een gratis gesprek en ontdek welke aanpak past bij jouw bedrijf en werkgebied.
                Groeimaten werkt uitsluitend voor bedrijven in de keuken, badkamer en bouwsector.
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

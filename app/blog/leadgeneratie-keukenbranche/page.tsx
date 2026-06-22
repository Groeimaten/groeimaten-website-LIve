import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Leadgeneratie in de keukenbranche: waarom standaard marketing hier niet werkt",
  description:
    "Leads genereren in de keukenbranche vraagt een andere aanpak dan in andere sectoren. Het aankoopproces is lang, de orderwaarde hoog. Hoe genereer je de juiste aanvragen?",
  alternates: {
    canonical: "https://groeimaten.com/blog/leadgeneratie-keukenbranche",
  },
  openGraph: {
    title: "Leadgeneratie in de keukenbranche: waarom standaard marketing hier niet werkt",
    description:
      "Hoe genereer je de juiste leads in de keukenbranche? Groeimaten legt uit waarom een sectorspecifieke aanpak noodzakelijk is.",
    url: "https://groeimaten.com/blog/leadgeneratie-keukenbranche",
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
    { "@type": "ListItem", position: 3, name: "Leadgeneratie keukenbranche", item: "https://groeimaten.com/blog/leadgeneratie-keukenbranche" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Leadgeneratie in de keukenbranche: waarom standaard marketing hier niet werkt",
  description:
    "Hoe genereer je de juiste leads in de keukenbranche en waarom is een sectorspecifieke aanpak noodzakelijk?",
  author: { "@type": "Organization", name: "Groeimaten" },
  publisher: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  datePublished: "2026-06-22",
  url: "https://groeimaten.com/blog/leadgeneratie-keukenbranche",
}

export default function BlogLeadgeneratieKeukenbranchePage() {
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
              <span style={{ color: "oklch(55% 0 0)", fontSize: "0.85rem" }}>Leadgeneratie keukenbranche</span>
            </div>
            <span className="section-label">Leadgeneratie</span>
            <h1
              className="page-hero__title"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", lineHeight: "1.2", marginTop: "12px" }}
            >
              Leadgeneratie in de keukenbranche: waarom standaard marketing hier niet werkt
            </h1>
            <p className="page-hero__subtitle" style={{ marginTop: "20px" }}>
              Veel aanvragen, weinig kwalitatieve showroomafspraken. Dat is het probleem dat keukenstudio&apos;s beschrijven als ze voor het eerst over leadgeneratie praten. Het ligt zelden aan het advertentiebudget.
            </p>
            <p style={{ color: "oklch(55% 0 0)", fontSize: "0.88rem", marginTop: "12px" }}>
              Groeimaten · 22 juni 2026 · 7 min lezen
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
              Leadgeneratie in de keukenbranche heeft een fundamenteel probleem dat standaard marketingmethoden niet oplossen: de orderwaarde is hoog, het aankoopproces duurt lang en de klant vergelijkt intensief. Een campagne die veel aanvragen genereert maar geen kwalitatieve showroomafspraken oplevert is duurder dan geen campagne voeren. Je betaalt voor leads die nooit klant worden.
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
              Het probleem met standaard leadgeneratie
            </h2>
            <p>
              Standaard leadgeneratietools zijn ontworpen voor sectoren met korte aankoopprocessen. Een contactformulier dat vraagt naar naam, e-mailadres en telefoonnummer geeft je geen informatie over de koopmotivatie, het budget of de tijdshorizon van de aanvrager. Je belt iemand op die misschien pas over twee jaar een keuken wil, of die al vier andere keukenstudio&apos;s heeft bezocht en alleen de laagste prijs zoekt.
            </p>
            <p>
              Dat kost je tijd, energie en geld. De medewerker die die leads nabelt verliest uren per week aan gesprekken zonder resultaat. En als die leads via een advertentieplatform binnenkomen, betaal je per contact, ongeacht de kwaliteit.
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
              Kwalificatie als onderdeel van het proces
            </h2>
            <p>
              Effectieve leadgeneratie in de keukenbranche vraagt kwalificatie voor de afspraak. Niet erna. In de aanvraagstroom zelf stel je vragen die relevante informatie onthullen: wat is de stijlvoorkeur, wat is de gewenste opleverdatum, wat is het globale budget? Mensen die niet serieus zijn of de verkeerde verwachting hebben, haken af. Mensen die doorgaan zijn warmer en beter geschikt voor een showroomgesprek.
            </p>
            <p>
              Dit verlaagt het totaal aantal aanvragen, maar verhoogt de kwaliteit. Een keukenstudio die tien kwalitatieve afspraken per maand heeft is beter af dan een studio met dertig afspraken waarvan twintig niet verschijnen of nooit een offerte aanvragen. Het aantal aanvragen is niet de metric die telt. Het opkomstpercentage en de offerteconversie zijn dat wel.
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
              De rol van opvolging na de aanvraag
            </h2>
            <p>
              Zelfs een goed gekwalificeerde lead verschijnt niet vanzelf in de showroom. De periode tussen aanvraag en afspraak is cruciaal. Iemand die op dinsdag een aanvraag doet en op vrijdag nog niets heeft gehoord, heeft ondertussen al twee andere keukenstudio&apos;s gebeld. Snelle opvolging, bij voorkeur binnen een uur, is geen service maar een salesvereiste.
            </p>
            <p>
              Automatische bevestigingsberichten en herinneringen vlak voor de afspraak verhogen het opkomstpercentage significant. Keukenstudio&apos;s die dit goed inrichten zien hun no-show percentage dalen van dertig tot veertig procent naar minder dan tien procent. Dat zijn afspraken die anders verloren gingen, zonder dat er extra advertentiebudget aan te pas komt.
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
              Wat Groeimaten anders aanpakt
            </h2>
            <p>
              Groeimaten werkt uitsluitend voor keuken en sanitairbedrijven en heeft een systeem ontwikkeld dat leadgeneratie combineert met kwalificatie en geautomatiseerde opvolging. We bouwen funnels die niet alleen aanvragen genereren maar die de kwaliteit van die aanvragen bewaken voordat ze bij jou in de agenda staan. Dat systeem is niet generiek overgenomen van een andere sector maar ontwikkeld op basis van wat werkt voor keukenstudio&apos;s.
            </p>
            <p>
              Het resultaat is een voorspelbare stroom kwalitatieve showroomafspraken per maand, in plaats van wisselende aantallen aanvragen waarvan je niet weet wat ze opleveren.
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
                Wil je kwalitatieve showroomafspraken in plaats van ongefiltreerde aanvragen?
              </p>
              <p style={{ marginBottom: "20px", color: "oklch(70% 0 0)" }}>
                Plan een gratis strategiegesprek en ontdek hoe Groeimaten leadgeneratie voor keukenstudio&apos;s aanpakt.
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

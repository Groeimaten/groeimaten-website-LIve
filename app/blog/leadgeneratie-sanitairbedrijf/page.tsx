import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Leadgeneratie voor sanitairbedrijven: van aanvraag tot afspraak",
  description:
    "Leadgeneratie voor sanitairbedrijven werkt anders dan voor producten. Hoe genereer je structureel kwalitatieve aanvragen voor sanitairinstallatie en badkamerrenovatie?",
  alternates: {
    canonical: "https://groeimaten.com/blog/leadgeneratie-sanitairbedrijf",
  },
  openGraph: {
    title: "Leadgeneratie voor sanitairbedrijven: van aanvraag tot afspraak",
    description:
      "Hoe genereer je structureel kwalitatieve aanvragen voor sanitairinstallatie en badkamerrenovatie?",
    url: "https://groeimaten.com/blog/leadgeneratie-sanitairbedrijf",
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
      name: "Leadgeneratie sanitairbedrijf",
      item: "https://groeimaten.com/blog/leadgeneratie-sanitairbedrijf",
    },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Leadgeneratie voor sanitairbedrijven: van aanvraag tot afspraak",
  description:
    "Hoe genereer je als sanitairbedrijf structureel kwalitatieve aanvragen voor sanitairinstallatie en badkamerrenovatie?",
  author: { "@type": "Organization", name: "Groeimaten" },
  publisher: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  datePublished: "2026-07-06",
  url: "https://groeimaten.com/blog/leadgeneratie-sanitairbedrijf",
}

export default function BlogLeadgeneratieSanitairbedrijfPage() {
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
              <span style={{ color: "oklch(55% 0 0)", fontSize: "0.85rem" }}>Leadgeneratie sanitairbedrijf</span>
            </div>
            <span className="section-label">Leadgeneratie</span>
            <h1
              className="page-hero__title"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", lineHeight: "1.2", marginTop: "12px" }}
            >
              Leadgeneratie voor sanitairbedrijven: van aanvraag tot afspraak
            </h1>
            <p className="page-hero__subtitle" style={{ marginTop: "20px" }}>
              Een sanitairbedrijf heeft twee soorten klanten: mensen met een urgente storing en mensen
              die plannen te renoveren. Die twee groepen vereisen een andere aanpak. Effectieve
              leadgeneratie voor sanitairbedrijven houdt daar rekening mee.
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
              Sanitairbedrijven opereren in een markt met twee heel verschillende klanttypen. De spoedeisende
              klant heeft een lekkage, een kapotte kraan of een verstopt riool. Die belt direct en heeft
              geen vergelijkingstijd. De renovatieklant overweegt al maanden een nieuwe badkamer, vergelijkt
              meerdere aanbieders en neemt pas na weken contact op. Leadgeneratie voor sanitairbedrijven
              werkt alleen als je beide groepen bereikt.
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
              Urgente aanvragen via Google Ads
            </h2>
            <p>
              Spoedreparaties worden gevonden via Google Ads. Iemand met een lekkende waterleiding zoekt
              niet rustig op sociale media. Die persoon googelt direct, klikt op het eerste resultaat dat
              betrouwbaar lijkt en belt. Google Ads geeft een sanitairbedrijf de mogelijkheid om precies
              op dat moment bovenaan te staan.
            </p>
            <p>
              Sleutels voor spoed-leadgeneratie via Google Ads zijn snelheid en vertrouwen. Het
              telefoonnummer moet direct zichtbaar zijn. De advertentie moet duidelijk maken dat je snel
              ter plekke bent. Reviews bevestigen dat anderen je al hebben gebeld en tevreden waren. Die
              combinatie converteert.
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
              Renovatieaanvragen via Meta Ads en SEO
            </h2>
            <p>
              Badkamerrenovaties worden niet impulsief gepland. Het beslisproces duurt gemiddeld drie tot
              zes maanden. Mensen oriënteren, vergelijken, kijken naar foto&apos;s van afgerond werk en
              vragen meerdere offertes aan. Meta Ads zijn hiervoor een krachtig instrument.
            </p>
            <p>
              Een sanitairbedrijf dat voor en na foto&apos;s van badkamerrenovaties toont via Facebook en
              Instagram, bereikt huiseigenaren in de overwegingsfase. Die mensen zijn nog niet klaar om
              te bellen, maar ze onthouden het bedrijf dat hun aandacht trok. Retargeting, waarbij mensen
              die al op de website zijn geweest opnieuw worden bereikt met advertenties, verhoogt de kans
              dat ze uiteindelijk contact opnemen aanzienlijk.
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
              Kwalificatie: niet elke lead is een goede lead
            </h2>
            <p>
              Sanitairbedrijven die gericht zijn op renovaties, worden soms overladen met aanvragen voor
              kleine reparaties die niet passen bij hun bedrijfsmodel. Goede leadgeneratie filtert dat
              van tevoren. Een contactformulier dat vraagt naar het type project, de omvang en het gewenste
              budget, kwalificeert leads voordat ze in de agenda belanden.
            </p>
            <p>
              Dat lijkt misschien leads te kosten, maar het tegenovergestelde is waar. Een sanitairbedrijf
              dat zijn agenda vult met kwalitatieve renovatieopdrachten van 10.000 euro en meer, groeit
              sneller dan een bedrijf dat elke aanvraag aanpakt ongeacht de omvang. Leadkwalificatie is
              een onderdeel van de strategie, niet een bijzaak.
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
              Opvolging bepaalt het eindresultaat
            </h2>
            <p>
              Sanitairbedrijven die snel reageren op aanvragen, winnen meer opdrachten. Iemand die een
              aanvraagformulier invult voor een badkamerrenovatie, heeft dat waarschijnlijk ook bij twee
              andere bedrijven gedaan. Het eerste bedrijf dat terugbelt met een concreet voorstel, heeft
              een streepje voor.
            </p>
            <p>
              Een geautomatiseerd opvolgsysteem waarbij nieuwe aanvragen direct een bevestiging krijgen
              en binnen 24 uur worden teruggebeld, verhoogt de conversie van aanvraag naar opdracht
              aanzienlijk. Die automatisering is geen luxe voor grote bedrijven, maar een praktisch hulpmiddel
              voor elk sanitairbedrijf dat structureel wil groeien.
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
                Structureel meer aanvragen voor jouw sanitairbedrijf?
              </p>
              <p style={{ marginBottom: "20px", color: "oklch(70% 0 0)" }}>
                Plan een gratis gesprek. We kijken samen naar jouw huidige aanvragenstroom en wat er
                beter kan. Concreet advies, geen standaard presentatie.
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

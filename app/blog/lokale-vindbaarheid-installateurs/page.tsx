import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Lokale vindbaarheid voor installateurs: van onzichtbaar naar pagina 1",
  description:
    "Als iemand een installateur zoekt in jouw regio en jij staat er niet bij, belt hij iemand anders. Hoe verbeter je lokale vindbaarheid als installateur?",
  alternates: {
    canonical: "https://groeimaten.com/blog/lokale-vindbaarheid-installateurs",
  },
  openGraph: {
    title: "Lokale vindbaarheid voor installateurs: van onzichtbaar naar pagina 1",
    description:
      "Hoe verbeter je lokale vindbaarheid als installateur? Van Google Mijn Bedrijf tot lokale SEO op je website.",
    url: "https://groeimaten.com/blog/lokale-vindbaarheid-installateurs",
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
      name: "Lokale vindbaarheid voor installateurs",
      item: "https://groeimaten.com/blog/lokale-vindbaarheid-installateurs",
    },
  ],
}

export default function BlogLokaleVindbaarheidsPage() {
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
              <span style={{ color: "oklch(55% 0 0)", fontSize: "0.85rem" }}>Lokale vindbaarheid installateurs</span>
            </div>
            <span className="section-label">Lokale SEO</span>
            <h1
              className="page-hero__title"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", lineHeight: "1.2", marginTop: "12px" }}
            >
              Lokale vindbaarheid voor installateurs: van onzichtbaar naar pagina 1
            </h1>
            <p className="page-hero__subtitle" style={{ marginTop: "20px" }}>
              Stel: iemand zoekt een installateur in jouw stad. Hij pakt zijn telefoon, typt de zoekopdracht en
              belt de eerste drie resultaten. Jij bent de beste in de buurt, maar je staat er niet bij. Dit
              scenario speelt zich elke dag af voor installateurs die onzichtbaar zijn op het moment dat iemand
              hen het hardst nodig heeft.
            </p>
            <p style={{ color: "oklch(55% 0 0)", fontSize: "0.88rem", marginTop: "12px" }}>
              Groeimaten · 16 juni 2026 · 5 min lezen
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
              Lokale vindbaarheid voor installateurs is een van de meest directe manieren om meer opdrachten
              te krijgen. Geen grote advertentiecampagnes nodig. Gewoon gevonden worden door mensen die in
              jouw werkgebied op zoek zijn naar jouw dienst.
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
              Hoe Google bepaalt wie er bovenaan staat
            </h2>
            <p>
              Google wil de meest relevante en betrouwbare resultaten tonen voor een lokale zoekopdracht.
              Daarvoor kijkt Google naar drie factoren.
            </p>
            <p>
              <strong style={{ color: "oklch(90% 0 0)" }}>Nabijheid.</strong> Hoe dicht staat het bedrijf bij
              de zoeker? Dit kun je niet beïnvloeden, maar je kunt je werkgebied wel duidelijk communiceren
              op je website en in je Google Mijn Bedrijf-profiel.
            </p>
            <p>
              <strong style={{ color: "oklch(90% 0 0)" }}>Relevantie.</strong> Sluit jouw bedrijfsprofiel en
              website aan bij wat iemand zoekt? Als jij &ldquo;installatietechniek&rdquo; als activiteit hebt
              maar de klant zoekt naar &ldquo;loodgieter spoedklus&rdquo;, kan er een mismatch zijn. De juiste
              categorieën en omschrijvingen maken hier het verschil.
            </p>
            <p>
              <strong style={{ color: "oklch(90% 0 0)" }}>Bekendheid.</strong> Hoeveel signalen zijn er
              online over jouw bedrijf? Reviews, links van andere websites, vermeldingen in lokale directories
              en een actief Google Mijn Bedrijf-profiel zijn allemaal signalen die Google meeweegt.
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
              Google Mijn Bedrijf: het fundament van lokale vindbaarheid
            </h2>
            <p>
              Je Google Mijn Bedrijf-profiel is voor lokale zoekopdrachten minstens zo belangrijk als je
              website. Een volledig ingevuld profiel met de juiste categorieën, actuele openingstijden,
              foto&apos;s van je werk en regelmatig nieuwe reviews scoort beter dan een profiel dat al jaren
              niet is aangeraakt.
            </p>
            <p>
              Reviews zijn daarin het meest onderscheidend. Een installateur met dertig recente reviews staat
              structureel hoger dan een concurrent met vijf reviews van drie jaar geleden. Het actief verzamelen
              van reviews van tevreden klanten is een van de meest onderschatte en goedkoopste
              SEO-activiteiten die er zijn.
            </p>
            <p>
              Een praktische aanpak: stuur tevreden klanten na een succesvol project een persoonlijk berichtje
              met een directe link naar jouw Google-recensiepagina. De meeste mensen doen het graag als het
              makkelijk is gemaakt.
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
              Wat je website moet doen voor lokale rankings
            </h2>
            <p>
              Je website moet lokale relevantie uitstralen. Dat betekent concrete vermelding van de plaatsen
              en regio&apos;s waar je werkt. Niet alleen in de footer, maar op specifieke pagina&apos;s per
              dienst en werkgebied.
            </p>
            <p>
              &ldquo;Installateur Rotterdam&rdquo; als paginatitel is beter dan een generieke dienstpagina
              zonder locatiespecifieke inhoud. Zoekmachines lezen dat jij actief bent in Rotterdam en koppelen
              jou aan zoekopdrachten uit die regio.
            </p>
            <p>
              Snelheid speelt ook mee. Een website die meer dan drie seconden laadt, verliest bezoekers en
              rankings. Mobiele snelheid is extra belangrijk: de meeste lokale zoekopdrachten worden op een
              telefoon gedaan, vaak op het moment dat iemand een probleem heeft en snel een oplossing zoekt.
            </p>
            <p>
              Lokale vindbaarheid voor installateurs is niet ingewikkeld als je weet waar je op moet letten.
              Maar het kost wel consistente aandacht: je profiel bijhouden, reviews verzamelen en je website
              actueel houden. Bedrijven die dat systematisch aanpakken, staan boven de concurrent die het
              laat versloffen.
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
                Jouw installatiebedrijf beter vindbaar maken?
              </p>
              <p style={{ marginBottom: "20px", color: "oklch(70% 0 0)" }}>
                Plan een gratis gesprek. We bekijken jouw huidige lokale zichtbaarheid en geven je concrete
                stappen om hoger te scoren.
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

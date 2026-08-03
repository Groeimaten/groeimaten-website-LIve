import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Meer klanten elektricien: online zichtbaarheid die aanvragen oplevert",
  description:
    "Elektriciens die meer klanten willen aantrekken zonder afhankelijk te zijn van doorverwijzingen. Wat werkt online en wat kost te veel voor te weinig resultaat?",
  alternates: {
    canonical: "https://groeimaten.com/blog/meer-klanten-elektricien",
  },
  openGraph: {
    title: "Meer klanten elektricien: online zichtbaarheid die aanvragen oplevert",
    description:
      "Hoe elektriciens meer klanten aantrekken via lokale SEO, Google Ads en een converterende website.",
    url: "https://groeimaten.com/blog/meer-klanten-elektricien",
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
      name: "Meer klanten elektricien",
      item: "https://groeimaten.com/blog/meer-klanten-elektricien",
    },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Meer klanten elektricien: online zichtbaarheid die aanvragen oplevert",
  description:
    "Hoe elektriciens meer klanten aantrekken via lokale SEO, Google Ads en een converterende website.",
  author: { "@type": "Organization", name: "Groeimaten" },
  publisher: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  datePublished: "2026-08-03",
  url: "https://groeimaten.com/blog/meer-klanten-elektricien",
}

export default function BlogMeerKlantenElectricienPage() {
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
              <span style={{ color: "oklch(55% 0 0)", fontSize: "0.85rem" }}>Meer klanten elektricien</span>
            </div>
            <span className="section-label">Online marketing</span>
            <h1
              className="page-hero__title"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", lineHeight: "1.2", marginTop: "12px" }}
            >
              Meer klanten elektricien: online zichtbaarheid die aanvragen oplevert
            </h1>
            <p className="page-hero__subtitle" style={{ marginTop: "20px" }}>
              Elektriciens hebben volop werk, maar de verdeling is ongelijk. Wie bovenaan Google staat,
              krijgt meer aanvragen dan zijn capaciteit aankan. Wie online nauwelijks zichtbaar is,
              werkt met lege weken en drukke weken zonder grip op de instroom.
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
              Voor een elektricien zijn twee klanttypen relevant. Ten eerste de particulier die een
              klus heeft: stopcontacten bijplaatsen, groepenkast vernieuwen of laadpaal installeren.
              Ten tweede de zakelijke klant: aannemer, vastgoedbeheerder of bedrijfspand dat periodiek
              onderhoud nodig heeft. Beide klanttypen zoeken online, maar via andere kanalen en andere
              zoekopdrachten.
            </p>
            <p>
              Meer klanten als elektricien begint met begrijpen welk type klant je wilt aantrekken
              en welk kanaal daarvoor het meest effectief is. Een brede aanpak zonder focus leidt tot
              veel werk zonder het juiste werk.
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
              Google Mijn Bedrijf: de basis die veel elektriciens missen
            </h2>
            <p>
              Particulieren die een elektricien zoeken, gebruiken bijna altijd Google. Ze zoeken op
              "elektricien [stad]" of "groepenkast vernieuwen kosten" en kijken naar de kaartweergave
              bovenaan de resultaten. Dat zijn de drie bedrijven die Google toont op basis van relevantie,
              afstand en reputatie.
            </p>
            <p>
              Een slecht of onvolledig Google Mijn Bedrijf profiel mist die positie. Een profiel met
              recente foto&apos;s van afgeronde projecten, een duidelijke omschrijving van de diensten,
              correcte openingstijden en tientallen recente reviews, scoort structureel beter. Voor
              elektriciens die lokaal werken is dit de meest directe manier om meer klanten te krijgen.
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
              Website die vertrouwen wekt en aanvragen genereert
            </h2>
            <p>
              Veel elektriciensbedrijven hebben een website die niet meer bijgewerkt is en er gedateerd
              uitziet. Dat is een probleem omdat een potentiële klant in minder dan tien seconden
              besluit of hij contact opneemt of verder zoekt. Een professionele uitstraling, duidelijke
              diensten en een zichtbare telefoonnummer bovenaan de pagina zijn het minimum.
            </p>
            <p>
              Wat het verschil maakt boven het minimum: dienstpagina&apos;s per specialisatie. Een
              aparte pagina over laadpaalinstallatie, een pagina over groepenkastvervanging en een
              pagina over noodgevallen elektra trekt per dienst apart organisch verkeer aan. Die
              pagina&apos;s ranken op specifieke zoekopdrachten en brengen bezoekers binnen die al
              weten wat ze willen.
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
              Google Ads voor spoedsituaties en laadpalen
            </h2>
            <p>
              Google Ads werkt voor elektriciens goed bij diensten met urgentie. Iemand met een
              elektraprobleem wil vandaag geholpen worden. Als jouw advertentie bovenaan staat op
              "elektricien spoed Utrecht", is de kans op een telefoontje groot.
            </p>
            <p>
              Voor minder urgente diensten zoals laadpaalinstallatie werkt Google Ads ook goed, omdat
              mensen daarvoor actief offertes opvragen en vergelijken. De klikprijzen zijn aanvaardbaar
              en de concurrentie in dat segment groeit snel door de toenemende adoptie van elektrische
              auto&apos;s. Vroeg beginnen met adverteren in een groeiende markt heeft voordeel.
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
              Zakelijke klanten bereiken via LinkedIn en gerichte campagnes
            </h2>
            <p>
              Elektriciens die zakelijke klanten willen aantrekken, hebben aan Google Ads en lokale
              SEO alleen niet genoeg. Vastgoedbeheerders, aannemers en installatiebedrijven die een
              elektricien zoeken voor grotere projecten, zijn beter te bereiken via LinkedIn of via
              gerichte outreach.
            </p>
            <p>
              Een LinkedIn-profiel dat de specialisaties van het bedrijf duidelijk communiceert, gecombineerd
              met gerichte LinkedIn-advertenties op functietitels als "projectmanager", "facility manager"
              of "aannemer" in een bepaalde regio, genereert een ander type klant dan particulier
              verkeer. Dat vereist een andere boodschap en een andere aanpak, maar de orderwaarden
              zijn doorgaans ook hoger.
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
                Groeimaten helpt installatiebedrijven en technici aan meer klanten
              </p>
              <p style={{ marginBottom: "20px", color: "oklch(70% 0 0)" }}>
                Van lokale SEO tot gerichte Google Ads campagnes voor elektriciens en andere installateurs.
                Plan een gratis gesprek en hoor wat er concreet mogelijk is.
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

import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Marketing voor verwarmingsbedrijf: zo word je structureel gevonden",
  description:
    "Marketing voor een verwarmingsbedrijf vraagt een andere aanpak dan generieke reclame. Hoe bereik je mensen die nu een cv-ketel of warmtepomp laten installeren?",
  alternates: {
    canonical: "https://groeimaten.com/blog/marketing-verwarmingsbedrijf",
  },
  openGraph: {
    title: "Marketing voor verwarmingsbedrijf: zo word je structureel gevonden",
    description:
      "Hoe verwarmingsbedrijven structureel meer aanvragen genereren via zoekmachines en advertenties.",
    url: "https://groeimaten.com/blog/marketing-verwarmingsbedrijf",
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
      name: "Marketing voor verwarmingsbedrijf",
      item: "https://groeimaten.com/blog/marketing-verwarmingsbedrijf",
    },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Marketing voor verwarmingsbedrijf: zo word je structureel gevonden",
  description:
    "Hoe verwarmingsbedrijven structureel meer aanvragen genereren via zoekmachines en advertenties.",
  author: { "@type": "Organization", name: "Groeimaten" },
  publisher: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  datePublished: "2026-08-03",
  url: "https://groeimaten.com/blog/marketing-verwarmingsbedrijf",
}

export default function BlogMarketingVerwarmingsbedrijfPage() {
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
              <span style={{ color: "oklch(55% 0 0)", fontSize: "0.85rem" }}>Marketing voor verwarmingsbedrijf</span>
            </div>
            <span className="section-label">Online marketing</span>
            <h1
              className="page-hero__title"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", lineHeight: "1.2", marginTop: "12px" }}
            >
              Marketing voor verwarmingsbedrijf: zo word je structureel gevonden
            </h1>
            <p className="page-hero__subtitle" style={{ marginTop: "20px" }}>
              Een verwarmingsbedrijf krijgt zijn opdrachten traditioneel via mond-tot-mondreclame en vaste
              onderhoudscontracten. Maar wie online niet zichtbaar is, mist een groeiende stroom mensen die
              actief zoeken naar een cv-monteur, warmtepompinstallateur of onderhoudsbedrijf in hun regio.
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
              De verwarmingsmarkt verandert. De overgang naar warmtepompen, hybride installaties en
              slimme thermostaten trekt een nieuw type klant aan: iemand die eerst online vergelijkt
              voordat hij belt. Die klant googelt op installateur in zijn gemeente, vraagt offertes op
              via formulieren en bekijkt reviews. Als jouw bedrijf dan niet bovenaan staat, kiest hij
              een concurrent.
            </p>
            <p>
              Marketing voor een verwarmingsbedrijf gaat dus over meer dan een visitekaartje en een
              sticker op de cv-ketel. Het gaat over structurele vindbaarheid op het moment dat iemand
              een installateur nodig heeft.
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
              Zoekopdrachten die verwarmingsbedrijven raken
            </h2>
            <p>
              De meeste opdrachten voor een verwarmingsbedrijf beginnen met een concrete zoekopdracht.
              Denk aan "cv-ketel laten vervangen Utrecht", "warmtepomp installeren offerte" of
              "verwarmingsinstallateur [plaatsnaam]". Dat zijn zoekopdrachten met hoge koopintentie:
              iemand wil nu actie ondernemen.
            </p>
            <p>
              Wie voor zulke termen gevonden wordt via Google, zit op precies het juiste moment in het
              oog van de klant. Dat geldt zowel voor organische posities via SEO als voor betaalde
              advertenties via Google Ads. Beide kanalen vullen elkaar aan: SEO bouwt langetermijn
              vindbaarheid op, Google Ads genereert direct aanvragen.
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
              Lokale SEO als fundering
            </h2>
            <p>
              Een verwarmingsbedrijf werkt doorgaans in een bepaalde regio. Dat maakt lokale SEO
              extra relevant. Google Mijn Bedrijf is daarin de eerste stap: een volledig ingevuld profiel
              met reviews, foto&apos;s en correcte openingstijden zorgt dat je zichtbaar bent in de
              kaartweergave bovenaan de zoekresultaten.
            </p>
            <p>
              Daarnaast helpen dienstpagina&apos;s per werkgebied. Een pagina over cv-ketel vervanging
              in Amsterdam trekt andere zoekopdrachten aan dan een pagina over warmtepompinstallatie in
              Almere. Hoe specifieker de pagina, hoe relevanter voor Google en hoe hoger de kans dat
              iemand die pagina ook daadwerkelijk belt.
            </p>
            <p>
              Reviews spelen ook een grote rol. Een verwarmingsbedrijf met 50 recente Google-reviews
              wint het vertrouwen van een potentiële klant sneller dan een concurrent met vijf reviews
              van drie jaar geleden. Actief reviews verzamelen is geen bijzaak maar een kerntaak van
              marketing.
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
              Google Ads is voor verwarmingsbedrijven een van de meest directe manieren om aan nieuwe
              klanten te komen. Je betaalt alleen wanneer iemand klikt, en je verschijnt precies op het
              moment dat iemand zoekt naar jouw dienst. Het nadeel is dat het budget snel oploopt als
              campagnes niet goed zijn ingericht.
            </p>
            <p>
              De valkuil die de meeste verwarmingsbedrijven maken met Google Ads is te breed targeten.
              Een campagne die op "verwarming" of "installateur" draait, trekt veel irrelevante klikken
              aan. Een goed ingericht campagne draait op specifieke termen als "cv-ketel plaatsen" of
              "warmtepomp offerte aanvragen" en stuurt bezoekers naar een landingspagina die direct
              aansluit op die zoekterm.
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
              De website als conversiemachine
            </h2>
            <p>
              Marketing voor een verwarmingsbedrijf werkt alleen als de website aansluit op de verwachting
              van de bezoeker. Iemand die zoekt naar "cv-ketel vervangen Amsterdam" en op jouw website
              belandt, wil direct weten: werken jullie in Amsterdam, wat kost het globaal en hoe snel
              kan ik een afspraak maken?
            </p>
            <p>
              Een website die die vragen snel beantwoordt en een duidelijke contactknop heeft, converteert
              goed. Een website die die vragen niet beantwoordt of te veel vraagt voordat iemand contact
              kan opnemen, verliest de bezoeker. De gemiddelde bezoeksduur op een website van een
              installateur is minder dan 90 seconden. In die tijd moet de boodschap overkomen.
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
              Marketing uitbesteden of zelf doen?
            </h2>
            <p>
              Veel verwarmingsbedrijven proberen marketing zelf op te pakken naast het eigenlijke werk.
              Dat lukt voor de meest basale zaken, maar SEO en Google Ads kosten structureel tijd om
              goed bij te houden. Algoritme-updates, seizoensgebonden vraag en wijzigingen in het
              zoekgedrag vereisen doorlopende aandacht.
            </p>
            <p>
              Uitbesteden aan een bureau dat de installatiesector kent, scheelt die leercurve. Een bureau
              dat gewend is te werken met verwarmingsbedrijven en vergelijkbare installateurs weet welke
              termen converteren, welke boodschappen resoneren en welke seizoenen het meest actief zijn.
              Die kennis is moeilijk te repliceren zonder jarenlange sectorervaring.
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
                Groeimaten helpt verwarmingsbedrijven en installateurs groeien
              </p>
              <p style={{ marginBottom: "20px", color: "oklch(70% 0 0)" }}>
                Van lokale SEO tot Google Ads campagnes gericht op warmtepomp-installaties en cv-vervanging.
                Plan een gratis gesprek en hoor wat er mogelijk is voor jouw bedrijf.
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

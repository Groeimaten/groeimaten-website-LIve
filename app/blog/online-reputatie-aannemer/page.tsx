import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Online reputatie als aannemer: hoe reviews je agenda vullen",
  description:
    "De online reputatie van een aannemer bepaalt mede hoeveel aanvragen er binnenkomen. Hoe bouw je een sterke reputatie op en wat doe je als er een negatieve review verschijnt?",
  alternates: {
    canonical: "https://groeimaten.com/blog/online-reputatie-aannemer",
  },
  openGraph: {
    title: "Online reputatie als aannemer: hoe reviews je agenda vullen",
    description:
      "Hoe beïnvloedt je online reputatie het aantal aanvragen als aannemer? En hoe bouw je die reputatie structureel op?",
    url: "https://groeimaten.com/blog/online-reputatie-aannemer",
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
      name: "Online reputatie aannemer",
      item: "https://groeimaten.com/blog/online-reputatie-aannemer",
    },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Online reputatie als aannemer: hoe reviews je agenda vullen",
  description:
    "Hoe bouw je als aannemer een sterke online reputatie op en hoe beïnvloedt die reputatie je aanvragen?",
  author: { "@type": "Organization", name: "Groeimaten" },
  publisher: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  datePublished: "2026-07-20",
  url: "https://groeimaten.com/blog/online-reputatie-aannemer",
}

export default function BlogOnlineReputatieAannemerPage() {
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
              <span style={{ color: "oklch(55% 0 0)", fontSize: "0.85rem" }}>Online reputatie aannemer</span>
            </div>
            <span className="section-label">Reputatiemanagement</span>
            <h1
              className="page-hero__title"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", lineHeight: "1.2", marginTop: "12px" }}
            >
              Online reputatie als aannemer: hoe reviews je agenda vullen
            </h1>
            <p className="page-hero__subtitle" style={{ marginTop: "20px" }}>
              Voordat iemand contact opneemt met een aannemer, zoekt die persoon online naar bevestiging dat de
              keuze goed is. De online reputatie van een aannemer, met name de Google-reviews, is op dat moment
              bepalend voor wie gebeld wordt en wie niet.
            </p>
            <p style={{ color: "oklch(55% 0 0)", fontSize: "0.88rem", marginTop: "12px" }}>
              Groeimaten · 20 juli 2026 · 5 min lezen
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
              Twee aannemers staan naast elkaar in de lokale zoekresultaten. De eerste heeft 12 Google-reviews met
              een gemiddelde van 4,2 sterren. De tweede heeft 54 reviews met een gemiddelde van 4,8. De tweede
              aannemer krijgt structureel meer klikken, meer telefoontjes en meer aanvragen, ook als zijn website
              of advertentie minder goed is. Online reputatie is een van de sterkste concurrentievoordelen voor
              een aannemer.
            </p>
            <p>
              Dat is geen geval van geluk. Aannemers met veel positieve reviews hebben die doorgaans opgebouwd
              door er actief om te vragen. De meeste tevreden klanten laten van zichzelf geen review achter.
              Ze moeten het gevraagd worden, bij voorkeur kort na oplevering wanneer de tevredenheid nog vers is.
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
              Hoe verzamel je reviews structureel?
            </h2>
            <p>
              De meest effectieve manier is het sturen van een directe link naar de Google-reviewpagina via
              WhatsApp of e-mail, kort na oplevering van een project. Niet vragen &ldquo;of ze misschien een keer
              een review willen schrijven&rdquo;, maar een directe link met een vriendelijk berichtje zoals:
              &ldquo;Fijn dat alles naar wens is. Als je een moment hebt, stellen we het erg op prijs als je een
              review wilt achterlaten. Het helpt andere mensen om ons te vinden.&rdquo;
            </p>
            <p>
              Het aantal reviews telt, maar de recente reviews tellen het meest. Google weegt recente reviews
              zwaarder dan oude. Een aannemer die maandelijks drie tot vijf nieuwe reviews ontvangt, scoort beter
              in de lokale zoekresultaten dan een aannemer die vijf jaar geleden twintig reviews verzamelde en
              sindsdien niets meer.
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
              Wat te doen met een negatieve review?
            </h2>
            <p>
              Een negatieve review komt voor, ook bij de beste aannemers. Het gaat er niet om of je hem ontvangt,
              maar hoe je reageert. Een professionele, feitelijke reactie op een negatieve review laat zien dat
              je serieus bent en dat je klanttevredenheid serieus neemt. Dat is zichtbaar voor iedereen die
              jouw Google-profiel bekijkt.
            </p>
            <p>
              Een aannemer met 48 positieve en 2 negatieve reviews, waarbij op de negatieve reviews professioneel
              gereageerd is, wekt meer vertrouwen dan een aannemer met 48 positieve reviews en geen negatieve.
              Een perfect profiel zonder enkele negatieve review oogt voor veel mensen onrealistisch.
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
              Online reputatie buiten Google
            </h2>
            <p>
              Google is het belangrijkste platform, maar niet het enige. Trustpilot, Facebook en branchespecifieke
              platforms zoals Verbouwingsofferte hebben elk hun eigen doelgroep. Voor aannemers die specifieke
              markten bedienen, kan aanwezigheid op die platforms de reputatie verder verbreden.
            </p>
            <p>
              De eigen website is ook onderdeel van de online reputatie. Projectfoto&apos;s, klantreacties en
              een professionele uitstraling bevestigen wat een potentiële klant in de reviews heeft gelezen. Een
              goede reputatie opgebouwd via reviews versterkt het conversie-effect van de website.
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
                Wil je weten hoe je jouw online reputatie als aannemer structureel verbetert?
              </p>
              <p style={{ marginBottom: "20px", color: "oklch(70% 0 0)" }}>
                Groeimaten begeleidt bouw- en renovatiebedrijven bij het opbouwen van een sterke lokale reputatie.
                Plan een gratis gesprek om te bespreken wat er voor jouw bedrijf mogelijk is.
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

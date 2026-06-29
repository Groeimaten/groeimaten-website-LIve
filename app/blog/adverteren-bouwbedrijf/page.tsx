import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Adverteren als bouwbedrijf: welke kanalen leveren echt op",
  description:
    "Veel bouwbedrijven weten niet welk advertentiekanaal het beste bij hen past. Dit zijn de opties die werken voor aannemers, renovatiebedrijven en specialisten in de bouw.",
  alternates: {
    canonical: "https://groeimaten.com/blog/adverteren-bouwbedrijf",
  },
  openGraph: {
    title: "Adverteren als bouwbedrijf: welke kanalen leveren echt op",
    description:
      "Welk advertentiekanaal past het beste bij een bouwbedrijf? De opties die werken voor aannemers en renovatiebedrijven.",
    url: "https://groeimaten.com/blog/adverteren-bouwbedrijf",
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
      name: "Adverteren bouwbedrijf",
      item: "https://groeimaten.com/blog/adverteren-bouwbedrijf",
    },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Adverteren als bouwbedrijf: welke kanalen leveren echt op",
  description:
    "Veel bouwbedrijven weten niet welk advertentiekanaal het beste bij hen past. Dit zijn de opties die werken.",
  author: { "@type": "Organization", name: "Groeimaten" },
  publisher: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  datePublished: "2026-06-29",
  url: "https://groeimaten.com/blog/adverteren-bouwbedrijf",
}

export default function BlogAdverterenBouwbedrijfPage() {
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
              <span style={{ color: "oklch(55% 0 0)", fontSize: "0.85rem" }}>Adverteren bouwbedrijf</span>
            </div>
            <span className="section-label">Adverteren</span>
            <h1
              className="page-hero__title"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", lineHeight: "1.2", marginTop: "12px" }}
            >
              Adverteren als bouwbedrijf: welke kanalen leveren echt op
            </h1>
            <p className="page-hero__subtitle" style={{ marginTop: "20px" }}>
              Bouwbedrijven groeien lang op aanbevelingen en vaste opdrachtgevers. Op het moment dat die stroom
              stagneert, is adverteren de snelste manier om nieuwe klanten te bereiken. Maar niet elk kanaal past
              evengoed bij de bouwsector.
            </p>
            <p style={{ color: "oklch(55% 0 0)", fontSize: "0.88rem", marginTop: "12px" }}>
              Groeimaten · 29 juni 2026 · 6 min lezen
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
              De meeste bouwbedrijven adverteren pas wanneer de agenda leeg dreigt te raken. Dat is begrijpelijk, maar
              ook precies het moment waarop adverteren het langst duurt voordat het rendement oplevert. Campagnes hebben
              tijd nodig om te optimaliseren. Het is beter om een structureel systeem op te bouwen dan te adverteren
              in paniek.
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
              Google Ads: bereik mensen op het moment van zoeken
            </h2>
            <p>
              Voor bouwbedrijven is Google Ads het meest directe kanaal. Iemand die zoekt op &ldquo;aannemer
              uitbouw woning Haarlem&rdquo; of &ldquo;renovatie badkamer aannemer Amsterdam&rdquo; is al bezig met
              zijn project. Die persoon vergelijkt aanbieders actief. Als jij op dat moment bovenaan staat, maak je
              kans op het gesprek.
            </p>
            <p>
              Het werkt alleen als de campagne goed is ingericht. Veel bouwbedrijven starten een Google Ads campagne
              op brede zoektermen en betalen voor klikken van mensen die helemaal niet op zoek zijn naar wat zij
              aanbieden. Lokale targeting is daarbij onmisbaar. Een aannemer in Rotterdam heeft geen belang bij
              aanvragen uit Groningen. Door zoektermen te combineren met een specifiek werkgebied en irrelevante
              zoekopdrachten te uitsluiten, wordt elk euro budget effectiever besteed.
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
              Meta Ads: werkt het ook voor bouwbedrijven?
            </h2>
            <p>
              Facebook en Instagram worden minder voor de hand liggend gevonden voor bouwbedrijven dan voor
              keukenstudio&apos;s of badkamerbedrijven. Toch heeft Meta ook hier waarde, vooral voor bepaalde typen
              werk. Verbouwingen, uitbouwen en renovaties zijn projecten waar mensen lang over nadenken. Ze orientëren
              zich op platforms als Houzz, Pinterest en Instagram op stijlen en mogelijkheden, ook al zoeken ze niet
              actief op Google.
            </p>
            <p>
              Meta Ads kunnen bouwbedrijven bereiken in die oriëntatiefase. Goed visueel materiaal van afgeronde
              projecten is daarvoor de sleutel. Wie foto&apos;s heeft van een mooie uitbouw of een geslaagde
              renovatie, heeft het materiaal om op Meta Ads te adverteren bij mensen in het juiste demografische
              profiel en de juiste regio. De conversie is in de regel lager dan bij Google Ads, maar de leadkosten
              kunnen gunstig zijn.
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
              Wat je kunt overslaan
            </h2>
            <p>
              Er zijn ook kanalen die voor de meeste bouwbedrijven weinig opleveren. Display advertenties op websites
              genereren impressies maar zelden kwalitatieve aanvragen. Prijsvergelijkingssites als Werkspot of
              Klusidee leveren soms leads op, maar de concurrentie op prijs is er hevig en de kwaliteit van de
              aanvragen loopt sterk uiteen.
            </p>
            <p>
              Hetzelfde geldt voor social media zonder advertentiebudget. Een Facebook-pagina bijhouden kost tijd
              maar bereikt zonder betaalde versterking steeds minder mensen. De organische dekking op social media is
              de afgelopen jaren fors gedaald voor bedrijfspagina&apos;s. Wie structureel nieuwe klanten wil
              bereiken, ontkomt niet aan een betaalde aanpak.
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
              De combinatie die bouwbedrijven het meeste oplevert
            </h2>
            <p>
              De sterkste aanpak voor adverteren als bouwbedrijf combineert Google Ads voor de actieve zoeker met
              SEO voor de lange termijn. Google Ads geeft directe aanvragen, SEO bouwt de positie op die je ook
              zonder campagnebudget zichtbaar houdt. Wie beide combineert, is minder afhankelijk van één kanaal en
              heeft een stabieler instroom van nieuwe klanten.
            </p>
            <p>
              Meta Ads voeg je er aan toe als je visueel sterk materiaal hebt van afgeronde projecten en je
              werkgebied specifiek genoeg is om de doelgroep te bereiken zonder budget te verspillen. Voor
              grotere bouwbedrijven die actief zijn in meerdere steden of regio&apos;s kan Meta Ads een
              waardevolle aanvulling zijn. Voor kleinere bedrijven is de focus op Google Ads en lokale SEO
              doorgaans effectiever.
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
                Welk kanaal past het beste bij jouw bouwbedrijf?
              </p>
              <p style={{ marginBottom: "20px", color: "oklch(70% 0 0)" }}>
                Plan een gratis gesprek en we bekijken samen wat voor jouw situatie het meest oplevert.
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

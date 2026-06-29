import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Online marketing voor de keukenbranche: wat echt werkt",
  description:
    "De keukenbranche heeft een lang aankoopproces en hoge orderwaarden. Welke online marketing kanalen passen daarbij en wat kun je het beste vermijden?",
  alternates: {
    canonical: "https://groeimaten.com/blog/online-marketing-keukenbranche",
  },
  openGraph: {
    title: "Online marketing voor de keukenbranche: wat echt werkt",
    description:
      "De keukenbranche heeft een lang aankoopproces en hoge orderwaarden. Welke online marketing kanalen passen daarbij?",
    url: "https://groeimaten.com/blog/online-marketing-keukenbranche",
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
      name: "Online marketing keukenbranche",
      item: "https://groeimaten.com/blog/online-marketing-keukenbranche",
    },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Online marketing voor de keukenbranche: wat echt werkt",
  description:
    "De keukenbranche heeft een lang aankoopproces en hoge orderwaarden. Welke online marketing kanalen passen daarbij en wat kun je het beste vermijden?",
  author: { "@type": "Organization", name: "Groeimaten" },
  publisher: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  datePublished: "2026-06-29",
  url: "https://groeimaten.com/blog/online-marketing-keukenbranche",
}

export default function BlogOnlineMarketingKeukenbranchePage() {
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
              <span style={{ color: "oklch(55% 0 0)", fontSize: "0.85rem" }}>Online marketing keukenbranche</span>
            </div>
            <span className="section-label">Online marketing</span>
            <h1
              className="page-hero__title"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", lineHeight: "1.2", marginTop: "12px" }}
            >
              Online marketing voor de keukenbranche: wat echt werkt
            </h1>
            <p className="page-hero__subtitle" style={{ marginTop: "20px" }}>
              Een keuken koop je niet op een woensdagmiddag. Het aankoopproces duurt maanden, de gemiddelde orderwaarde
              ligt hoog en de klant vergelijkt actief. Dat vraagt om een andere aanpak dan standaard online marketing.
            </p>
            <p style={{ color: "oklch(55% 0 0)", fontSize: "0.88rem", marginTop: "12px" }}>
              Groeimaten · 29 juni 2026 · 7 min lezen
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
              De gemiddelde keukenaankoop kost tussen de 15.000 en 50.000 euro. Soms meer. Dat betekent dat een klant
              niet klikt op een advertentie en diezelfde dag een offerte aanvraagt. Er zitten weken, soms maanden tussen
              de eerste oriëntatie en het daadwerkelijke showroombezoek. Online marketing voor de keukenbranche moet
              daarmee rekening houden.
            </p>
            <p>
              Bureaus die dit niet begrijpen, sturen op de verkeerde doelen. Ze optimaliseren campagnes op klikken of
              paginabezoeken, terwijl de enige metric die telt het aantal showroomafspraken is. Het verschil is groot.
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
              Waarom Meta Ads zo goed werkt voor keukenstudio&apos;s
            </h2>
            <p>
              Facebook en Instagram zijn bij uitstek geschikt voor de keukenbranche, en dat heeft alles te maken met
              het oriëntatiegedrag van jouw klant. Iemand die een keuken overweegt, scrolt door inspiratiefoto&apos;s,
              sla items op in collecties en vergelijkt stijlen. Meta is precies het platform waar die oriëntatie
              plaatsvindt.
            </p>
            <p>
              Een goed opgezette Meta Ads campagne voor een keukenstudio bereikt mensen op het moment dat ze bewust of
              onbewust met keukens bezig zijn. Niet pas wanneer ze al zo ver zijn dat ze actief zoeken op Google, maar
              al eerder in het proces. Dat geeft jou de kans om de eerste te zijn die ze zien. En de eerste indruk
              telt, zeker bij een aankoop van deze omvang.
            </p>
            <p>
              In de praktijk zien we dat een goed opgezette Meta Ads campagne voor een keukenstudio showroomafspraken
              genereert bij een kostprijs van 30 tot 70 euro per afspraak. Dat is bij een gemiddelde orderwaarde van
              tienduizenden euro&apos;s een uitstekende verhouding.
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
              Google Ads: voor wie al klaar is om te kopen
            </h2>
            <p>
              Google Ads bereikt een ander deel van het aankoopproces. Iemand die zoekt op &ldquo;keukenstudio
              Rotterdam&rdquo; of &ldquo;maatwerk keuken laten plaatsen Utrecht&rdquo; is niet meer aan het
              oriënteren. Die persoon is klaar om contact op te nemen. Google Ads plaatst jou bovenaan op precies dat
              moment.
            </p>
            <p>
              Het nadeel van Google Ads is dat de concurrentie op populaire zoektermen hoog is, en dat de kosten per
              klik daardoor oplopen. Voor keukenstudio&apos;s zijn zoektermen als &ldquo;nieuwe keuken&rdquo; soms duur
              per klik. De oplossing is scherper targeten: combineer de dienst met de stad, focus op kwaliteitsindica
              toren in de advertentietekst en sluit irrelevante zoekopdrachten actief uit.
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
              SEO als fundament voor langetermijn zichtbaarheid
            </h2>
            <p>
              Advertenties stoppen wanneer het budget op is. SEO niet. Een keukenstudio die goed scoort op relevante
              zoektermen trekt maand na maand bezoekers aan zonder extra kosten per klik. Dat maakt SEO een van de
              meest rendabele kanalen op de lange termijn, ook al duurt het langer voordat je de eerste resultaten ziet.
            </p>
            <p>
              Voor de keukenbranche betekent goede SEO: aparte dienstpagina&apos;s per keukentype of stijl,
              geoptimaliseerde lokale zichtbaarheid via Google Mijn Bedrijf, en regelmatig nieuwe content die
              antwoord geeft op vragen die jouw klant stelt. Vragen als &ldquo;wat kost een maatwerk keuken&rdquo; of
              &ldquo;hoe lang duurt de plaatsing van een nieuwe keuken&rdquo; zijn ideale startpunten voor
              blogartikelen die zowel bezoekers als vertrouwen genereren.
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
              Online marketing voor de keukenbranche begint en eindigt bij de website. Alle kanalen, of het nu Meta
              Ads, Google Ads of SEO is, sturen verkeer naar jouw website. Als die website geen showroomafspraken
              genereert, verspil je advertentiebudget.
            </p>
            <p>
              Een goede keukenstudio website is meer dan een portfolio. Het is een verkooptool die bezoeker na bezoeker
              omzet in een concrete aanvraag. Dat betekent duidelijke calls-to-action, een laagdrempelig formulier of
              directe belmogelijkheid, sterke foto&apos;s van afgeronde projecten en bij voorkeur reviews van tevreden
              klanten. Vertrouwen opbouwen gaat bij een keukenaankoop van tienduizenden euro&apos;s vanzelf trager dan
              bij een impulsaankoop. De website moet dat proces ondersteunen.
            </p>
            <p>
              Online marketing voor de keukenbranche is geen trucje. Het is een systeem van kanalen die samenwerken om
              de juiste klant op het juiste moment te bereiken. Meta Ads voor de oriënterende klant, Google Ads voor
              wie klaar is om te bellen, SEO voor de lange termijn en een website die dat verkeer omzet in afspraken.
              Wie dat systeem goed inricht, heeft een voorsprong die je niet zomaar bijbeent.
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
                Wil je weten welke kanalen het beste passen bij jouw keukenstudio?
              </p>
              <p style={{ marginBottom: "20px", color: "oklch(70% 0 0)" }}>
                Plan een gratis strategiegesprek. We analyseren jouw situatie en geven een eerlijk advies over wat voor
                jou de meeste opbrengst geeft.
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

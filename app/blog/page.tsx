import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Blog | Groeimaten",
  description:
    "Praktische marketing kennis voor keuken-, badkamer- en bouwbedrijven. Artikelen over SEO, Google Ads, leadgeneratie en online groeistrategie.",
  alternates: {
    canonical: "https://groeimaten.com/blog",
  },
  openGraph: {
    title: "Blog | Groeimaten",
    description:
      "Praktische marketing kennis voor keuken-, badkamer- en bouwbedrijven.",
    url: "https://groeimaten.com/blog",
  },
}

const blogPosts = [
  {
    slug: "conversie-optimalisatie-keukenstudio",
    titel: "Conversie optimalisatie voor een keukenstudio: van bezoeker naar showroomafspraak",
    samenvatting:
      "Negen van de tien bezoekers verlaten een keukenstudiowebsite zonder contact op te nemen. Maar er is een groot verschil tussen een studio die 8 procent converteert en een studio die 1 procent converteert. Waar zit die kloof?",
    datum: "10 augustus 2026",
    keyphrase: "Conversie optimalisatie keukenstudio",
  },
  {
    slug: "meer-aanvragen-keukenstudio",
    titel: "Meer aanvragen voor je keukenstudio: drie plekken waar je winst pakt",
    samenvatting:
      "Een keukenstudio die zijn conversiepercentage van 0,8 naar 1,6 procent brengt, verdubbelt zijn showroomafspraken zonder extra bezoekers. Waar zit die winst precies?",
    datum: "10 augustus 2026",
    keyphrase: "Meer aanvragen keukenstudio",
  },
  {
    slug: "leadgeneratie-bouwbedrijf",
    titel: "Leadgeneratie voor bouwbedrijven: minder afhankelijk van wie je kent",
    samenvatting:
      "De meeste bouwbedrijven groeien via mond-tot-mondreclame. Dat werkt totdat het niet meer werkt. Hoe bouw je een eigen aanvragenstroom op die niet afhankelijk is van je netwerk?",
    datum: "10 augustus 2026",
    keyphrase: "Leadgeneratie bouwbedrijf",
  },
  {
    slug: "seo-voor-elektriciens",
    titel: "SEO voor elektriciens: gevonden worden terwijl je aan het werk bent",
    samenvatting:
      "Als iemand zoekt naar een elektricien in jouw stad, heeft hij al besloten dat hij er een nodig heeft. De vraag is alleen nog welke. Wie bovenaan staat, krijgt het telefoontje.",
    datum: "10 augustus 2026",
    keyphrase: "SEO voor elektriciens",
  },
  {
    slug: "meer-klanten-loodgieter",
    titel: "Meer klanten als loodgieter: structureel eigen aanvragen genereren",
    samenvatting:
      "Loodgieters die afhankelijk zijn van mond-tot-mondreclame groeien niet voorspelbaar. Hoe bouw je een constante stroom eigen aanvragen op via je website en Google?",
    datum: "10 augustus 2026",
    keyphrase: "Meer klanten loodgieter",
  },
  {
    slug: "leads-genereren-elektricien",
    titel: "Leads genereren als elektricien: eigen aanvragen versus leadplatforms",
    samenvatting:
      "Platforms verkopen leads aan meerdere elektriciens tegelijk. Eigen aanvragen via je website of advertenties komen alleen bij jou binnen. Wat is structureel goedkoper en effectiever?",
    datum: "27 juli 2026",
    keyphrase: "Leads genereren elektricien",
  },
  {
    slug: "website-optimaliseren-bouwbedrijf",
    titel: "Website optimaliseren als bouwbedrijf: meer aanvragen uit hetzelfde verkeer",
    samenvatting:
      "Een bouwbedrijf dat zijn conversiepercentage verdubbelt van 0,6 naar 1,2 procent krijgt dubbel zoveel aanvragen zonder extra advertentiebudget. Welke aanpassingen leveren het meeste op?",
    datum: "27 juli 2026",
    keyphrase: "Website optimaliseren bouwbedrijf",
  },
  {
    slug: "google-ads-voor-loodgieters",
    titel: "Google Ads voor loodgieters: bovenaan op het moment dat het telt",
    samenvatting:
      "Iemand met een gesprongen leiding googelt niet om zich te oriënteren. Hij googelt om zo snel mogelijk iemand te bereiken. Hoe richt je een Google Ads-campagne in die winstgevend is?",
    datum: "27 juli 2026",
    keyphrase: "Google Ads voor loodgieters",
  },
  {
    slug: "meer-aanvragen-dakdekker",
    titel: "Meer aanvragen als dakdekker: twee soorten klanten, twee aanpakken",
    samenvatting:
      "De spoedklant belt vandaag. De planklant vraagt drie offertes aan. Beide zijn waardevol maar vinden je op een andere manier. Hoe richt je marketing in die voor beide werkt?",
    datum: "27 juli 2026",
    keyphrase: "Meer aanvragen dakdekker",
  },
  {
    slug: "seo-voor-schildersbedrijven",
    titel: "SEO voor schildersbedrijven: gevonden worden in jouw regio",
    samenvatting:
      "SEO voor schildersbedrijven is vrijwel altijd lokaal. Hoe bouw je een positie op die maand na maand aanvragen oplevert, zonder elke maand advertentiebudget uit te geven?",
    datum: "27 juli 2026",
    keyphrase: "SEO voor schildersbedrijven",
  },
  {
    slug: "marketingstrategie-renovatiebedrijf",
    titel: "Marketingstrategie voor een renovatiebedrijf: wat werkt en wat kost geld",
    samenvatting:
      "Renovatieopdrachten hebben een lange aanlooptijd. Een goede marketingstrategie houdt rekening met het beslisproces en is aanwezig in elke fase. Welke kanalen werken en welke verspillen budget?",
    datum: "20 juli 2026",
    keyphrase: "Marketingstrategie voor renovatiebedrijf",
  },
  {
    slug: "online-reputatie-aannemer",
    titel: "Online reputatie als aannemer: hoe reviews je agenda vullen",
    samenvatting:
      "Een aannemer met 54 reviews trekt structureel meer aanvragen dan een aannemer met 12, ook als de website minder goed is. Hoe bouw je een sterke online reputatie op?",
    datum: "20 juli 2026",
    keyphrase: "Online reputatie aannemer",
  },
  {
    slug: "naamsbekendheid-bouwbedrijf",
    titel: "Naamsbekendheid vergroten als bouwbedrijf: wat werkt in de praktijk",
    samenvatting:
      "Naamsbekendheid en leadgeneratie zijn niet hetzelfde. Welke kanalen zorgen dat jouw bouwbedrijf herkend wordt op het moment dat iemand klaar is om te verbouwen?",
    datum: "20 juli 2026",
    keyphrase: "Naamsbekendheid bouwbedrijf vergroten",
  },
  {
    slug: "content-marketing-aannemers",
    titel: "Content marketing voor aannemers: vertrouwen opbouwen voor de eerste afspraak",
    samenvatting:
      "Iemand die een verbouwing van 50.000 euro plant, beslist niet op basis van één advertentie. Content marketing zorgt dat jij zichtbaar bent tijdens de maanden die daaraan voorafgaan.",
    datum: "20 juli 2026",
    keyphrase: "Content marketing voor aannemers",
  },
  {
    slug: "conversie-optimalisatie-bouwbedrijf",
    titel: "Conversie optimalisatie website bouwbedrijf: meer aanvragen uit hetzelfde verkeer",
    samenvatting:
      "Een bouwbedrijf dat zijn conversiepercentage verdubbelt van 0,6 naar 1,2 procent, krijgt dubbel zoveel aanvragen zonder extra advertentiebudget. Wat zijn de aanpassingen die het meeste opleveren?",
    datum: "20 juli 2026",
    keyphrase: "Conversie optimalisatie website bouwbedrijf",
  },
  {
    slug: "online-zichtbaarheid-renovatiebedrijf",
    titel: "Online zichtbaarheid renovatiebedrijf: zo bouw je een constante instroom op",
    samenvatting:
      "Renovatiebedrijven die uitsluitend op aanbevelingen draaien zijn kwetsbaar. Hoe bouw je een online fundament dat maand na maand aanvragen oplevert, ongeacht het netwerk?",
    datum: "13 juli 2026",
    keyphrase: "Online zichtbaarheid renovatiebedrijf",
  },
  {
    slug: "google-ads-dakdekkers",
    titel: "Google Ads voor dakdekkers: aanvragen op het moment dat het er toe doet",
    samenvatting:
      "Iemand met een daklekkage googelt direct. Google Ads voor dakdekkers zorgt dat jij op dat moment bovenaan staat. Hoe richt je een campagne in die winstgevend is?",
    datum: "13 juli 2026",
    keyphrase: "Google Ads voor dakdekkers",
  },
  {
    slug: "meer-opdrachten-aannemer-online",
    titel: "Meer opdrachten als aannemer via online kanalen: wat werkt en wat niet",
    samenvatting:
      "Aannemers die uitsluitend op aanbevelingen vertrouwen, zijn afhankelijk van hun netwerk. Welke online kanalen leveren structureel meer opdrachten op?",
    datum: "13 juli 2026",
    keyphrase: "Meer opdrachten aannemer online",
  },
  {
    slug: "advertentiebureau-keuken-badkamer",
    titel: "Advertentiebureau keuken badkamer bouw: wat je echt zoekt in een partner",
    samenvatting:
      "Er zijn duizenden advertentiebureaus. De meeste werken voor iedereen. Wat maakt een bureau met specifieke sectorkennis zo bepalend voor het resultaat van advertenties?",
    datum: "13 juli 2026",
    keyphrase: "Advertentiebureau keuken badkamer bouw",
  },
  {
    slug: "google-ranking-keukenbedrijf",
    titel: "Google ranking keukenbedrijf verbeteren: de aanpak die structureel werkt",
    samenvatting:
      "Een betere Google ranking als keukenbedrijf levert aanvragen op van mensen die actief zoeken. Welke factoren bepalen jouw positie en hoe verbeter je die stap voor stap?",
    datum: "13 juli 2026",
    keyphrase: "Google ranking keukenbedrijf",
  },
  {
    slug: "online-marketing-renovatiebedrijf",
    titel: "Online marketing voor een renovatiebedrijf: wat echt werkt",
    samenvatting:
      "Renovatieopdrachten komen niet vanzelf. Wie alleen vertrouwt op doorverwijzingen zit afhankelijk van zijn netwerk. Welke kanalen werken echt voor renovatiebedrijven?",
    datum: "6 juli 2026",
    keyphrase: "Online marketing renovatiebedrijf",
  },
  {
    slug: "google-ads-voor-installateurs",
    titel: "Google Ads voor installateurs: zo trek je klanten die vandaag zoeken",
    samenvatting:
      "Wie een loodgieter of elektricien zoekt, wacht niet. Die persoon googelt direct. Google Ads voor installateurs zorgt dat jij op dat moment bovenaan staat.",
    datum: "6 juli 2026",
    keyphrase: "Google Ads voor installateurs",
  },
  {
    slug: "seo-specialist-bouwsector",
    titel: "SEO specialist voor de bouwsector: wat je moet weten voor je kiest",
    samenvatting:
      "Elke SEO specialist beweert dat hij voor iedereen werkt. Maar resultaten hangen sterk af van sectorkennis. Wat onderscheidt een echte bouwspecialist?",
    datum: "6 juli 2026",
    keyphrase: "SEO specialist bouwsector",
  },
  {
    slug: "leadgeneratie-sanitairbedrijf",
    titel: "Leadgeneratie voor sanitairbedrijven: van aanvraag tot afspraak",
    samenvatting:
      "Sanitairbedrijven hebben twee soorten klanten: spoedgevallen en renovatieklanten. Effectieve leadgeneratie bereikt beide groepen op het juiste moment.",
    datum: "6 juli 2026",
    keyphrase: "Leadgeneratie sanitairbedrijf",
  },
  {
    slug: "badkamer-leads-genereren",
    titel: "Badkamer leads genereren: de aanpak die ook kwalitatieve aanvragen oplevert",
    samenvatting:
      "Veel badkamerbedrijven hebben aanvragen, maar te weinig afspraken die ook opdrachten worden. Het probleem zit in de kwaliteit, niet het aantal.",
    datum: "6 juli 2026",
    keyphrase: "Badkamer leads genereren",
  },
  {
    slug: "online-marketing-keukenbranche",
    titel: "Online marketing voor de keukenbranche: wat echt werkt",
    samenvatting:
      "Een keukenaankoop van 15.000 tot 50.000 euro vraagt om een andere marketingaanpak dan een standaard product. Welke kanalen passen bij het lange aankoopproces in de keukenbranche?",
    datum: "29 juni 2026",
    keyphrase: "Online marketing keukenbranche",
  },
  {
    slug: "adverteren-bouwbedrijf",
    titel: "Adverteren als bouwbedrijf: welke kanalen leveren echt op",
    samenvatting:
      "Veel bouwbedrijven adverteren pas wanneer de agenda leegloopt. Welke kanalen werken voor aannemers en renovatiebedrijven, en wat kun je veilig overslaan?",
    datum: "29 juni 2026",
    keyphrase: "Adverteren bouwbedrijf",
  },
  {
    slug: "website-aannemer-laten-maken",
    titel: "Website laten maken als aannemer: dit zijn de vereisten",
    samenvatting:
      "Veel aannemers hebben een website die er goed uitziet maar weinig aanvragen oplevert. Het probleem zit zelden in het design. Wat telt echt bij een aannemerswebsite?",
    datum: "29 juni 2026",
    keyphrase: "Website aannemer laten maken",
  },
  {
    slug: "klanten-werven-badkamerbedrijf",
    titel: "Klanten werven voor een badkamerbedrijf: zo pak je het structureel aan",
    samenvatting:
      "Een badkamerrenovatie kost 8.000 tot 25.000 euro en vraagt maanden voorbereiding. Hoe zorg je als badkamerbedrijf voor een constante stroom nieuwe klanten?",
    datum: "29 juni 2026",
    keyphrase: "Klanten werven badkamerbedrijf",
  },
  {
    slug: "seo-bouwbedrijf",
    titel: "SEO voor bouwbedrijven: gevonden worden zonder te adverteren",
    samenvatting:
      "Google Ads stopt zodra het budget op is. SEO niet. Een bouwbedrijf met een sterke organische positie trekt maand na maand aanvragen aan. Hoe bouw je die positie op?",
    datum: "29 juni 2026",
    keyphrase: "SEO bouwbedrijf",
  },
  {
    slug: "digital-marketing-bureau-keuken-badkamer",
    titel: "Digital marketing bureau voor keuken en badkamer: wat je echt nodig hebt",
    samenvatting:
      "De meeste bureaus zeggen dat ze voor iedereen werken. Dat is precies het probleem als jij een keukenstudio of badkamerbedrijf bent. Wat maakt een specialist anders?",
    datum: "22 juni 2026",
    keyphrase: "Digital marketing bureau keuken badkamer",
  },
  {
    slug: "website-laten-maken-keukenbedrijf",
    titel: "Website laten maken als keukenbedrijf: wat werkt en wat je kunt overslaan",
    samenvatting:
      "Veel keukenbedrijven betalen voor een mooie website die toch geen afspraken genereert. Het verschil zit zelden in het design. Wat telt wel?",
    datum: "22 juni 2026",
    keyphrase: "Website laten maken keukenbedrijf",
  },
  {
    slug: "seo-voor-aannemers",
    titel: "SEO voor aannemers: gevonden worden door de juiste opdrachtgevers",
    samenvatting:
      "Mond-tot-mondreclame heeft zijn grenzen. Aannemers die structureel groeien bouwen ook online een positie op. Hoe werkt SEO specifiek voor aannemers?",
    datum: "22 juni 2026",
    keyphrase: "SEO voor aannemers",
  },
  {
    slug: "online-marketing-badkamerbedrijf",
    titel: "Online marketing voor je badkamerbedrijf: van zichtbaarheid naar boekingen",
    samenvatting:
      "Een badkamer is geen impulsaankoop. Welke marketingkanalen werken echt voor badkamerbedrijven en wat kun je veilig overslaan?",
    datum: "22 juni 2026",
    keyphrase: "Online marketing badkamerbedrijf",
  },
  {
    slug: "leadgeneratie-keukenbranche",
    titel: "Leadgeneratie in de keukenbranche: waarom standaard marketing hier niet werkt",
    samenvatting:
      "Veel aanvragen, weinig kwalitatieve showroomafspraken. Dat is het probleem dat keukenstudio's beschrijven. Het ligt zelden aan het advertentiebudget.",
    datum: "22 juni 2026",
    keyphrase: "Leadgeneratie keukenbranche",
  },
  {
    slug: "seo-voor-keukenstudio",
    titel: "SEO voor keukenstudio's: zo word je gevonden door koopklare klanten",
    samenvatting:
      "Keukenstudio's die bovenaan Google staan trekken andere klanten aan dan studio's die op advertenties leunen. Hoe werkt dat precies en wat kun je eraan doen?",
    datum: "16 juni 2026",
    keyphrase: "SEO voor keukenstudio",
  },
  {
    slug: "leads-genereren-bouwsector",
    titel: "Leads genereren in de bouwsector: wat werkt en wat niet",
    samenvatting:
      "Mond-tot-mondreclame werkt, maar het is onvoorspelbaar. Hoe genereer je als bouwbedrijf structureel kwalitatieve aanvragen?",
    datum: "16 juni 2026",
    keyphrase: "Leads genereren bouwsector",
  },
  {
    slug: "meer-klanten-aannemer",
    titel: "Meer klanten als aannemer zonder cold calling",
    samenvatting:
      "Druk zijn is niet hetzelfde als groeien. Aannemers die de juiste klanten aantrekken, doen een paar dingen structureel anders.",
    datum: "16 juni 2026",
    keyphrase: "Meer klanten aannemer",
  },
  {
    slug: "google-ads-badkamerbedrijf",
    titel: "Google Ads voor je badkamerbedrijf: zo wordt elk euro goed besteed",
    samenvatting:
      "Google Ads is een van de meest directe manieren om klanten te bereiken die actief zoeken. Maar een slecht ingestelde campagne kost meer dan hij oplevert.",
    datum: "16 juni 2026",
    keyphrase: "Google Ads badkamerbedrijf",
  },
  {
    slug: "lokale-vindbaarheid-installateurs",
    titel: "Lokale vindbaarheid voor installateurs: van onzichtbaar naar pagina 1",
    samenvatting:
      "Als iemand een installateur zoekt in jouw regio en jij staat er niet bij, belt hij iemand anders. Hoe verbeter je je lokale zichtbaarheid?",
    datum: "16 juni 2026",
    keyphrase: "Lokale vindbaarheid installateurs",
  },
]

const arrowIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function BlogIndexPage() {
  return (
    <>
      <section className="page-hero page-hero--split">
        <div className="page-hero__glow page-hero__glow--1" aria-hidden="true" />
        <div className="page-hero__glow page-hero__glow--2" aria-hidden="true" />
        <div className="container">
          <div className="page-hero__inner">
            <ScrollReveal>
              <div className="page-hero__content">
                <span className="section-label">Kennisbank</span>
                <h1 className="page-hero__title">
                  Marketing inzichten voor
                  <br />
                  <em>keuken en sanitair.</em>
                </h1>
                <p className="page-hero__subtitle">
                  Praktische artikelen over SEO, Google Ads, leadgeneratie en online strategie, geschreven voor keuken-,
                  badkamer- en bouwbedrijven.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="service-detail" style={{ paddingTop: "60px", paddingBottom: "80px" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              gap: "32px",
              marginTop: "8px",
            }}
          >
            {blogPosts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={((i % 3) + 1) as 1 | 2 | 3 | 4}>
                <article
                  style={{
                    backgroundColor: "oklch(12% 0 0)",
                    borderRadius: "12px",
                    padding: "32px",
                    border: "1px solid oklch(20% 0 0)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    height: "100%",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.78rem",
                      color: "oklch(65% 0.09 75)",
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    {post.datum}
                  </span>
                  <h2
                    style={{
                      fontSize: "clamp(1.1rem, 2.5vw, 1.3rem)",
                      fontWeight: 700,
                      color: "oklch(95% 0 0)",
                      lineHeight: "1.35",
                      margin: 0,
                    }}
                  >
                    {post.titel}
                  </h2>
                  <p
                    style={{
                      color: "oklch(68% 0 0)",
                      fontSize: "0.95rem",
                      lineHeight: "1.65",
                      margin: 0,
                      flex: 1,
                    }}
                  >
                    {post.samenvatting}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      color: "oklch(65% 0.09 75)",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      textDecoration: "none",
                      marginTop: "auto",
                    }}
                  >
                    Lees meer {arrowIcon}
                  </Link>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-section__glow cta-section__glow--1" aria-hidden="true" />
        <div className="cta-section__glow cta-section__glow--2" aria-hidden="true" />
        <div className="container">
          <ScrollReveal>
            <div className="cta-inner">
              <span className="section-label section-label--blue">Klaar om te starten?</span>
              <h2 className="cta-title">Laten we kennismaken</h2>
              <p className="cta-subtitle">
                Plan een gratis strategiegesprek en ontdek wat Groeimaten voor jouw bedrijf kan betekenen.
              </p>
              <Link href="/afspraak" className="btn btn--blue btn--xl">
                Plan je gratis gesprek
                {arrowIcon}
              </Link>
              <p className="cta-disclaimer">Geen verplichtingen. Wel eerlijk advies.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

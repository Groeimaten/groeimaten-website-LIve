import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Google Ads voor dakdekkers: aanvragen op het moment dat het er toe doet",
  description:
    "Google Ads voor dakdekkers leveren aanvragen op van mensen die nu een probleem hebben. Hoe richt je een campagne in die winstgevend is en niet wegloopt op klikfraude?",
  alternates: {
    canonical: "https://groeimaten.com/blog/google-ads-dakdekkers",
  },
  openGraph: {
    title: "Google Ads voor dakdekkers: aanvragen op het moment dat het er toe doet",
    description:
      "Hoe richt je als dakdekker een Google Ads campagne in die structureel winstgevende aanvragen oplevert?",
    url: "https://groeimaten.com/blog/google-ads-dakdekkers",
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
      name: "Google Ads voor dakdekkers",
      item: "https://groeimaten.com/blog/google-ads-dakdekkers",
    },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Google Ads voor dakdekkers: aanvragen op het moment dat het er toe doet",
  description:
    "Hoe richt je als dakdekker een Google Ads campagne in die structureel winstgevende aanvragen oplevert.",
  author: { "@type": "Organization", name: "Groeimaten" },
  publisher: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  datePublished: "2026-07-13",
  url: "https://groeimaten.com/blog/google-ads-dakdekkers",
}

export default function BlogGoogleAdsDakdekkerPage() {
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
              <span style={{ color: "oklch(55% 0 0)", fontSize: "0.85rem" }}>Google Ads voor dakdekkers</span>
            </div>
            <span className="section-label">Google Ads</span>
            <h1
              className="page-hero__title"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", lineHeight: "1.2", marginTop: "12px" }}
            >
              Google Ads voor dakdekkers: aanvragen op het moment dat het er toe doet
            </h1>
            <p className="page-hero__subtitle" style={{ marginTop: "20px" }}>
              Dakdekkers hebben één groot voordeel als het gaat om Google Ads: de zoekvraag is urgent.
              Iemand die zoekt naar een dakdekker heeft een probleem dat opgelost moet worden. Dat maakt
              Google Ads voor dakdekkers bijzonder effectief, mits de campagne goed is ingericht.
            </p>
            <p style={{ color: "oklch(55% 0 0)", fontSize: "0.88rem", marginTop: "12px" }}>
              Groeimaten · 13 juli 2026 · 5 min lezen
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
              Een daklekkage wacht niet. Een beschadigd dak na een storm moet zo snel mogelijk gerepareerd
              worden. De huiseigenaar die in die situatie zit, googelt direct en belt degene die bovenaan
              staat. Google Ads plaatst jouw dakdekkersbedrijf op dat moment bovenaan, nog voor de
              organische zoekresultaten.
            </p>
            <p>
              Dat maakt Google Ads voor dakdekkers anders dan voor veel andere sectoren. De intentie
              achter de zoekopdracht is hoog. De persoon die zoekt heeft een concrete behoefte en een
              korte beslistijd. Een goed ingerichte campagne converteert dat zoekgedrag in aanvragen.
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
              De basis: zoekwoorden met de juiste intentie
            </h2>
            <p>
              Niet elk zoekwoord is even waardevol voor een dakdekker. &ldquo;Daklekkage repareren
              Rotterdam&rdquo; is een zoekwoord met hoge intentie: iemand heeft een probleem en zoekt
              een oplossing. &ldquo;Dakdekker tarieven&rdquo; heeft lagere intentie: de persoon vergelijkt
              nog en is nog niet klaar om te bellen.
            </p>
            <p>
              Een goede Google Ads campagne voor dakdekkers focust op zoekwoorden met hoge intentie en
              een duidelijk lokale context. &ldquo;Dakdekker spoed [stad]&rdquo;, &ldquo;daklekkage
              reparatie [regio]&rdquo;, &ldquo;dakdekker nieuwe dakbedekking [stad]&rdquo;. Die
              specificiteit maakt de klik duurder maar de aanvraag waarschijnlijker.
            </p>
            <p>
              Negatieve zoekwoorden zijn even belangrijk als de zoekwoorden zelf. &ldquo;Dakdekker
              vacature&rdquo;, &ldquo;dakdekker opleiding&rdquo;, &ldquo;dakdekker zelfstandige worden&rdquo;
              zijn zoekwoorden waarbij klikken vrijwel nooit leiden tot een aanvraag. Die zoekwoorden
              uitsluitend voorkomen dat het advertentiebudget aan de verkeerde klikken opgaat.
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
              De landingspagina bepaalt of de klik wat oplevert
            </h2>
            <p>
              Google Ads betaalt per klik. Of die klik een aanvraag wordt, hangt af van wat iemand ziet
              nadat ze geklikt hebben. Een landingspagina die onduidelijk is, te langzaam laadt of geen
              directe contactmogelijkheid biedt, verliest de bezoeker. Het geld is dan wel uitgegeven,
              maar de aanvraag komt niet.
            </p>
            <p>
              Voor dakdekkers werkt een landingspagina het best als die snel de kernvraag beantwoordt:
              in welke regio werk je, welke werkzaamheden doe je en hoe kan iemand direct contact opnemen?
              Een prominent telefoonnummer of een eenvoudig contactformulier boven de vouw. Foto&apos;s
              van afgerond werk. Reviews van eerdere klanten die het vertrouwen onderbouwen.
            </p>
            <p>
              De laadsnelheid op mobiel is kritisch. De meeste mensen die urgent zoeken naar een dakdekker
              doen dat via de telefoon. Een pagina die drie seconden of langer laadt, verliest een
              significant deel van zijn bezoekers voordat ze iets gezien hebben.
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
              Budget en opbrengst: hoe reken je dat door?
            </h2>
            <p>
              Google Ads voor dakdekkers is niet goedkoop per klik. Afhankelijk van de regio en de
              zoekterm liggen de kosten per klik tussen de drie en tien euro. Met een gemiddeld
              conversiepercentage van vijf tot tien procent betekent dat een kosten per aanvraag van
              dertig tot tweehonderd euro.
            </p>
            <p>
              Of dat winstgevend is, hangt af van de gemiddelde opdrachtwaarde. Een dakdekker met een
              gemiddelde opdracht van 2.000 euro en een sluiteringspercentage van dertig procent verdient
              600 euro per aanvraag die klant wordt. Zelfs bij een kosten per aanvraag van 100 euro is
              de marge dan aanzienlijk. Bij duurder werk zoals nieuwe dakbedekking of dakkapellen stijgt
              die marge verder.
            </p>
            <p>
              De berekening vooraf maakt duidelijk of adverteren rendabel is en hoeveel budget er maximaal
              in kan zonder verlies te draaien. Die berekening is de basis voor een verantwoorde campagne.
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
              Seizoensgebondenheid en pieken
            </h2>
            <p>
              Dakreparaties worden meer aangevraagd na storm of hevige regen. Een goede Google Ads
              campagne speelt op die pieken in. Door het budget tijdelijk te verhogen op dagen na slecht
              weer en te verlagen in rustige periodes, wordt het totale budget effectiever besteed.
            </p>
            <p>
              Grotere werkzaamheden zoals volledige dakvervanging of dakisolatie zijn minder seizoensgebonden
              maar hebben een langere beslistijd. Campagnes voor die diensten kunnen het hele jaar door
              lopen op een rustiger budget, met verhogingen in periodes dat mensen meer geneigd zijn om
              te investeren in hun woning.
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
                Wil je weten wat Google Ads voor jouw dakdekkersbedrijf kan opleveren?
              </p>
              <p style={{ marginBottom: "20px", color: "oklch(70% 0 0)" }}>
                Plan een gratis gesprek. Groeimaten rekent vooraf door wat een campagne kost en wat
                het realistisch oplevert, zodat je een weloverwogen beslissing kunt nemen.
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

import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Meer aanvragen als dakdekker: twee soorten klanten, twee aanpakken",
  description:
    "Een dakdekker werkt voor spoedklanten en planklanten. Beide vinden je op een andere manier. Hoe richt je marketing in die voor beide werkt en je agenda structureel vult?",
  alternates: {
    canonical: "https://groeimaten.com/blog/meer-aanvragen-dakdekker",
  },
  openGraph: {
    title: "Meer aanvragen als dakdekker: twee soorten klanten, twee aanpakken",
    description:
      "Een dakdekker werkt voor spoedklanten en planklanten. Hoe richt je marketing in die voor beide werkt?",
    url: "https://groeimaten.com/blog/meer-aanvragen-dakdekker",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meer aanvragen als dakdekker: twee soorten klanten, twee aanpakken",
    description: "Een dakdekker werkt voor spoedklanten en planklanten. Hoe richt je marketing in die voor beide werkt?",
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
      name: "Meer aanvragen dakdekker",
      item: "https://groeimaten.com/blog/meer-aanvragen-dakdekker",
    },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Meer aanvragen als dakdekker: twee soorten klanten, twee aanpakken",
  description:
    "Een dakdekker werkt voor spoedklanten en planklanten. Hoe richt je marketing in die voor beide werkt en je agenda structureel vult?",
  author: { "@type": "Organization", name: "Groeimaten" },
  publisher: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  datePublished: "2026-07-27",
  url: "https://groeimaten.com/blog/meer-aanvragen-dakdekker",
}

export default function BlogMeerAanvragenDakdekkerPage() {
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
              <span style={{ color: "oklch(55% 0 0)", fontSize: "0.85rem" }}>Meer aanvragen dakdekker</span>
            </div>
            <span className="section-label">Leadgeneratie</span>
            <h1
              className="page-hero__title"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", lineHeight: "1.2", marginTop: "12px" }}
            >
              Meer aanvragen als dakdekker: twee soorten klanten, twee aanpakken
            </h1>
            <p className="page-hero__subtitle" style={{ marginTop: "20px" }}>
              Een dakdekker werkt voor spoedklanten die vandaag geholpen willen worden, en planklanten
              die in alle rust offertes vergelijken. Beide zijn waardevol. Maar ze vinden je op een
              andere manier en beslissen op een ander tempo.
            </p>
            <p style={{ color: "oklch(55% 0 0)", fontSize: "0.88rem", marginTop: "12px" }}>
              Groeimaten · 27 juli 2026 · 6 min lezen
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
              Wie een lekke dakgoot heeft, belt vandaag nog. Wie overweegt zijn plat dak te vernieuwen,
              vraagt eerst drie offertes aan en neemt twee weken later een beslissing. Dezelfde
              dakdekker bedient beide klanten, maar de weg waarlangs ze hem vinden is fundamenteel
              anders.
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
              De spoedklant treft je via Google Ads
            </h2>
            <p>
              Bij een spoedcasus is er geen tijd om te vergelijken. De spoedklant googelt, belt de
              eerste betrouwbaar ogende uitkomst en wil dezelfde dag geholpen worden. Google Ads is
              voor dit segment het sterkste kanaal. Je betaalt per klik, maar je bereikt precies
              iemand die op dat moment een dakdekker nodig heeft.
            </p>
            <p>
              Een campagne voor spoedopdrachten werkt het best op zoekopdrachten met &ldquo;spoed&rdquo;,
              &ldquo;lekkage&rdquo;, &ldquo;vandaag&rdquo; en &ldquo;dringend&rdquo;. Zet een telefoonverwijzing
              als primaire CTA, niet een formulier. En zorg dat de website op mobiel in minder dan twee
              seconden laadt, want de spoedklant zoekt op zijn telefoon terwijl het dak lekt.
            </p>
            <p>
              De kosten per aanvraag via Google Ads liggen voor dakdekkers gemiddeld tussen €30 en €80,
              afhankelijk van de regio en concurrentie. In dichte stedelijke gebieden zijn die kosten
              hoger dan in kleinere gemeenten.
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
              De planklant vindt je via SEO
            </h2>
            <p>
              De klant die over twee maanden een nieuw dak wil, oriënteert zich rustig. Hij vergelijkt
              websites, leest reviews en vraagt bij meerdere dakdekkers een offerte aan. Bij die klant
              begint het contact vaak via een organische zoekopdracht, niet via een betaalde advertentie.
            </p>
            <p>
              SEO voor dakdekkers richt zich op termen als &ldquo;nieuwe dakbedekking laten leggen [stad]&rdquo;
              of &ldquo;dakrenovatie [regio] offerte aanvragen&rdquo;. Die zoekopdrachten hebben minder urgentie
              maar een hogere opdrachtswaarde dan spoedklussen. Een dakdekker die goed scoort op dit
              type termen, trekt aanvragen aan met een gemiddeld hogere marktwaarde.
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
              Wat de website moet doen
            </h2>
            <p>
              Of iemand nu via een advertentie of via organische zoekresultaten op je website belandt,
              de website moet direct vertrouwen opbouwen. Dat doe je niet met verkoopteksten maar met
              bewijs: foto&apos;s van afgerond dakwerk in jouw regio, reviews van klanten bij naam en
              woonplaats, een duidelijk werkgebied en een klikbaar telefoonnummer bovenaan de pagina.
            </p>
            <p>
              Meer dan 60 procent van de spoedklanten zoekt op mobiel. Een website die op desktop goed
              werkt maar op mobiel traag of onoverzichtelijk is, verliest die aanvragen aan een concurrent
              die wél goed mobiel geoptimaliseerd is.
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
              Seizoenspatronen als kans
            </h2>
            <p>
              Dakwerk is seizoensgebonden. Voorjaar en nazomer zijn drukke periodes voor gepland
              onderhoud en renovatie. Herfst en winter leveren meer spoedopdrachten op door storm en
              neerslag. Een dakdekker die zijn marketing op die patronen afstemt, heeft in de rustigere
              maanden al aanvragen gebuild die de drukke periodes opvangen.
            </p>
            <p>
              Concreet: Google Ads het hele jaar actief voor spoedopdrachten, en SEO en informatieve
              content gericht op geplande werkzaamheden in de aanloopmaanden richting het voorjaar.
              De dakdekkers die dit slim toepassen, plannen maanden vooruit en draaien ook in de
              relatief rustige wintermaanden op volle agenda.
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
                Wil je meer aanvragen voor jouw dakdekkersbedrijf?
              </p>
              <p style={{ marginBottom: "20px", color: "oklch(70% 0 0)" }}>
                Plan een gratis gesprek. We bekijken jouw huidige situatie en vertellen je concreet
                welke kanalen voor jou het meest opleveren.
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

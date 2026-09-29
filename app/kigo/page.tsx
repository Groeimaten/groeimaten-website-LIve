import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Kigo | AI-tool voor keuken- en badkamerbedrijven",
  description:
    "Kigo is de AI-tool van Groeimaten voor keuken- en badkamerbedrijven. Je klant beleeft zijn nieuwe keuken of badkamer al voordat hij in je showroom staat. Benieuwd? Plan een gesprek.",
  alternates: {
    canonical: "https://groeimaten.com/kigo",
  },
  openGraph: {
    title: "Kigo | AI-tool voor keuken- en badkamerbedrijven",
    description:
      "De AI-tool van Groeimaten die advertentieklikken omzet in warme aanvragen voor keuken- en badkamerbedrijven.",
    url: "https://groeimaten.com/kigo",
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://groeimaten.com" },
    { "@type": "ListItem", position: 2, name: "Kigo", item: "https://groeimaten.com/kigo" },
  ],
}

const arrowIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const lockIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="4" y="11" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.8" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
)

const voordelen = [
  {
    n: "01",
    title: "Beleven in plaats van bladeren",
    body: "Een folder of een fotoalbum zegt je klant weinig. Met Kigo ziet hij iets dat over zíjn keuken of badkamer gaat. Dat blijft hangen.",
  },
  {
    n: "02",
    title: "Warmere aanvragen",
    body: "Wie Kigo gebruikt, heeft al nagedacht over wat hij wil. Jij krijgt die wensen mee bij de aanvraag, dus het eerste gesprek gaat meteen over de inhoud.",
  },
  {
    n: "03",
    title: "Meer rendement uit je ads",
    body: "Kigo draait mee in de campagnes die wij voor je beheren. Een klik wordt een ervaring, en een ervaring wordt vaker een afspraak.",
  },
  {
    n: "04",
    title: "Keuken én badkamer",
    body: "Er is een versie voor keukenbedrijven en een voor badkamerbedrijven. Elk afgestemd op hoe jouw klant kiest en koopt.",
  },
]

export default function KigoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* PAGE HERO */}
      <section className="page-hero page-hero--split">
        <div className="page-hero__glow page-hero__glow--1" aria-hidden="true"></div>
        <div className="page-hero__glow page-hero__glow--2" aria-hidden="true"></div>
        <div className="container">
          <div className="page-hero__inner">
            <ScrollReveal>
              <div className="page-hero__content">
                <span className="section-label">Nieuw · Alleen bij Groeimaten</span>
                <h1 className="page-hero__title">
                  Je klant ziet het al
                  <br />
                  <em>voordat hij binnenstapt.</em>
                </h1>
                <p className="page-hero__subtitle">
                  Kigo is onze eigen AI-tool voor keuken- en badkamerbedrijven. We zetten hem in onze advertenties in,
                  zodat een klik geen losse aanvraag wordt, maar een klant die al enthousiast is over zijn nieuwe
                  ruimte.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "8px" }}>
                  <Link href="/afspraak" className="btn btn--blue btn--lg">
                    Plan een gesprek over Kigo {arrowIcon}
                  </Link>
                </div>
                <p className="kigo-press">
                  Bekend uit K&amp;D Magazine:{" "}
                  <a
                    href="https://keukenendesign.nl/het-verhaal-achter-groeimaten-met-ai-en-marketing-naar-meer-afspraken/"
                    target="_blank"
                    rel="noopener"
                    className="media-mention__link"
                  >
                    &quot;Met AI en marketing naar meer afspraken&quot; →
                  </a>
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <div className="page-hero__visual">
                <div className="kigo-card" aria-hidden="true">
                  <div className="kigo-card__glow" />
                  <div className="kigo-card__head">
                    <span className="kigo-card__logo">Kigo<span>.</span></span>
                    <span className="kigo-card__tag">AI</span>
                  </div>
                  <div className="kigo-card__variants">
                    <span className="kigo-card__variant">Kigo Keuken</span>
                    <span className="kigo-card__variant">Kigo Badkamer</span>
                  </div>
                  <div className="kigo-card__preview">
                    <div className="kigo-card__blur">
                      <span /><span /><span /><span />
                    </div>
                    <div className="kigo-card__lock">
                      {lockIcon}
                      <span>Hoe het werkt, laten we je graag live zien</span>
                    </div>
                  </div>
                  <div className="kigo-card__foot">
                    <span>Al live bij klanten van Groeimaten</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* VOORDELEN */}
      <section className="values-section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-label">Wat Kigo voor je doet</span>
              <h2 className="section-title section-title--white">Minder twijfel, meer afspraken</h2>
            </div>
          </ScrollReveal>
          <div className="values-grid">
            {voordelen.map((v, i) => (
              <ScrollReveal key={v.n} delay={(i + 1) as 1 | 2 | 3 | 4}>
                <div className="value-card">
                  <div className="value-card__number" aria-hidden="true">{v.n}</div>
                  <h3>{v.title}</h3>
                  <p>{v.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-section__glow cta-section__glow--1" aria-hidden="true"></div>
        <div className="cta-section__glow cta-section__glow--2" aria-hidden="true"></div>
        <div className="container">
          <ScrollReveal>
            <div className="cta-inner">
              <span className="section-label section-label--blue">Benieuwd?</span>
              <h2 className="cta-title">Het werkt beter als we het je laten zien</h2>
              <p className="cta-subtitle">
                Hoe Kigo precies werkt, houden we liever even voor ons. In een kort gesprek laten we je zien wat het
                voor jouw showroom kan doen, en of het past bij jouw bedrijf.
              </p>
              <Link href="/afspraak" className="btn btn--blue btn--xl">
                Plan een gesprek over Kigo
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <p className="cta-disclaimer">Geen verplichtingen. Wel een goed gesprek.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

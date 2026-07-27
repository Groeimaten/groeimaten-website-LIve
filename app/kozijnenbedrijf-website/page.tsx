import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Website laten maken voor een Kozijnenbedrijf | Groeimaten",
  description:
    "Een website laten maken als kozijnenbedrijf die aanvragen genereert op zowel nieuwbouw als renovatieprojecten. Groeimaten bouwt sites die gevonden worden en converteren.",
  alternates: {
    canonical: "https://groeimaten.com/kozijnenbedrijf-website",
  },
  openGraph: {
    title: "Website laten maken voor een Kozijnenbedrijf | Groeimaten",
    description:
      "Groeimaten bouwt websites voor kozijnenbedrijven die gevonden worden op nieuwbouw en renovatiezoekopdrachten.",
    url: "https://groeimaten.com/kozijnenbedrijf-website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website laten maken voor een Kozijnenbedrijf | Groeimaten",
    description: "Groeimaten bouwt websites voor kozijnenbedrijven die gevonden worden op nieuwbouw en renovatiezoekopdrachten.",
  },
}

const arrowIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const checkIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Website laten maken kozijnenbedrijf",
  provider: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  description:
    "Groeimaten bouwt websites voor kozijnenbedrijven die gevonden worden bij zoekopdrachten voor kozijnvervanging, schuifpuien en renovatieramen, en die bezoekers omzetten in aanvragen.",
  areaServed: { "@type": "Country", name: "Nederland" },
  url: "https://groeimaten.com/kozijnenbedrijf-website",
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://groeimaten.com" },
    { "@type": "ListItem", position: 2, name: "Website laten maken kozijnenbedrijf", item: "https://groeimaten.com/kozijnenbedrijf-website" },
  ],
}

export default function KozijnenbedrijfWebsitePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="page-hero page-hero--split">
        <div className="page-hero__glow page-hero__glow--1" aria-hidden="true" />
        <div className="page-hero__glow page-hero__glow--2" aria-hidden="true" />
        <div className="container">
          <div className="page-hero__inner">
            <ScrollReveal>
              <div className="page-hero__content">
                <span className="section-label">Website kozijnenbedrijf</span>
                <h1 className="page-hero__title">
                  Website laten maken voor je
                  <br />
                  <em>kozijnenbedrijf.</em>
                </h1>
                <p className="page-hero__subtitle">
                  Iemand die nieuwe kozijnen wil, vergelijkt meerdere bedrijven online voordat hij
                  belt. Groeimaten bouwt een website die bij die vergelijking goed voor de dag komt
                  en bezoekers aanzet tot contact.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "28px" }}>
                  <Link href="/afspraak" className="btn btn--blue btn--lg">
                    Gratis strategiegesprek {arrowIcon}
                  </Link>
                  <Link href="/cases" className="btn btn--ghost btn--lg">
                    Bekijk cases
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="service-detail">
        <div className="container">
          <div className="service-detail__inner">
            <ScrollReveal>
              <div className="service-detail__content">
                <span className="section-label">Wat wij bouwen</span>
                <h2 className="section-title section-title--white">
                  Een kozijnensite die aanvragen trekt
                </h2>
                <p>
                  Kozijnenprojecten hebben een gemiddelde orderwaarde van €3.000 tot €15.000 of meer.
                  Klanten vergelijken zorgvuldig. Een website die er professioneel uitziet, de
                  producten goed toont en het aanvraagproces eenvoudig maakt, heeft een structureel
                  hogere conversie.
                </p>
                <p>
                  Groeimaten bouwt websites voor kozijnenbedrijven die snel laden, per producttype
                  en per regio worden gevonden en bezoekers overtuigen met foto&apos;s van
                  afgerond werk, reviews en duidelijke informatie over materialen en garanties.
                </p>

                <div className="service-features">
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Per kozijntype vindbaar</h4>
                      <p>
                        Aparte pagina&apos;s voor houten kozijnen, kunststof kozijnen, schuifpuien
                        en renovatieramen zodat je voor elk type zoekopdracht relevant bent.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Productfoto&apos;s en projectgalerij</h4>
                      <p>
                        Foto&apos;s van afgeronde projecten in jouw regio zijn het sterkste
                        overtuigingsmiddel voor een klant die oriënteert.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Offerteaanvraag laagdrempelig</h4>
                      <p>
                        Een eenvoudig aanvraagformulier met minimale stappen verhoogt het
                        aantal offerteaanvragen significant ten opzichte van lange formulieren.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Lokale SEO per regio</h4>
                      <p>
                        Gevonden worden op termen als &ldquo;kozijnen [stad]&rdquo; en
                        &ldquo;kunststof kozijnen vervangen [regio]&rdquo; in jouw werkgebied.
                      </p>
                    </div>
                  </div>
                </div>

                <Link href="/afspraak" className="btn btn--blue btn--lg">
                  Plan een gratis strategiegesprek {arrowIcon}
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <div className="service-detail__visual">
                <div className="service-visual-card">
                  <div className="service-visual-card__glow" />
                  <div className="service-visual-card__stat">
                    <span className="service-visual-card__number">35+</span>
                    <span className="service-visual-card__label">websites voor de bouwsector gebouwd</span>
                  </div>
                  <div className="service-visual-card__bar">
                    <div className="bar" style={{ width: "90%" }} />
                  </div>
                  <div className="service-visual-card__stat">
                    <span className="service-visual-card__number">100%</span>
                    <span className="service-visual-card__label">focus op bouw, installatie en keuken/bad</span>
                  </div>
                  <div className="service-visual-card__bar bar--green">
                    <div className="bar" style={{ width: "100%" }} />
                  </div>
                  <div className="service-visual-card__stat">
                    <span className="service-visual-card__number">5,0 ★</span>
                    <span className="service-visual-card__label">Google score Groeimaten</span>
                  </div>
                  <div className="service-visual-card__bar">
                    <div className="bar" style={{ width: "100%" }} />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="service-detail service-detail--alt">
        <div className="container">
          <ScrollReveal>
            <div style={{ maxWidth: "680px", margin: "0 auto", textAlign: "center" }}>
              <span className="section-label">Begin hier</span>
              <h2 className="section-title section-title--white">
                Plan een gratis gesprek
              </h2>
              <p style={{ color: "oklch(68% 0 0)", lineHeight: "1.75", marginBottom: "24px" }}>
                We bekijken jouw kozijnenbedrijf, werkgebied en doelstellingen. Op basis daarvan
                krijg je een concreet voorstel voor een website die aanvragen genereert.
              </p>
              <Link href="/afspraak" className="btn btn--blue btn--lg">
                Plan een gratis gesprek {arrowIcon}
              </Link>
              <p style={{ color: "oklch(50% 0 0)", fontSize: "0.85rem", marginTop: "12px" }}>
                Geen verplichtingen. Wel eerlijk advies.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Google Mijn Bedrijf voor Keukenstudio's | Groeimaten",
  description:
    "Een sterk Google Mijn Bedrijf profiel is voor keukenstudio's de basis van lokale vindbaarheid. Groeimaten optimaliseert en beheert jouw profiel voor meer zichtbaarheid en aanvragen.",
  alternates: {
    canonical: "https://groeimaten.com/google-mijn-bedrijf-keukenstudio",
  },
  openGraph: {
    title: "Google Mijn Bedrijf voor Keukenstudio's | Groeimaten",
    description:
      "Groeimaten optimaliseert Google Mijn Bedrijf voor keukenstudio's voor meer lokale zichtbaarheid en aanvragen.",
    url: "https://groeimaten.com/google-mijn-bedrijf-keukenstudio",
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
  name: "Google Mijn Bedrijf optimalisatie voor keukenstudio's",
  provider: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  description:
    "Groeimaten optimaliseert en beheert Google Mijn Bedrijf voor keukenstudio's voor betere lokale zichtbaarheid en meer aanvragen uit de omgeving.",
  areaServed: { "@type": "Country", name: "Nederland" },
  url: "https://groeimaten.com/google-mijn-bedrijf-keukenstudio",
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://groeimaten.com" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Google Mijn Bedrijf keukenstudio",
      item: "https://groeimaten.com/google-mijn-bedrijf-keukenstudio",
    },
  ],
}

export default function GoogleMijnBedrijfKeukenstudioPage() {
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
                <span className="section-label">Google Mijn Bedrijf keukenstudio</span>
                <h1 className="page-hero__title">
                  Google Mijn Bedrijf
                  <br />
                  <em>voor keukenstudio&apos;s.</em>
                </h1>
                <p className="page-hero__subtitle">
                  Het Google Mijn Bedrijf profiel van een keukenstudio bepaalt hoe jij verschijnt in de
                  lokale kaartresultaten. Een sterk profiel leidt direct tot meer aanvragen uit jouw regio.
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
                <span className="section-label">Lokale zichtbaarheid</span>
                <h2 className="section-title section-title--white">
                  Meer klanten uit jouw regio via lokale zoekopdrachten
                </h2>
                <p>
                  Wanneer iemand zoekt op &ldquo;keukenstudio [stad]&rdquo; of &ldquo;keuken laten
                  plaatsen [regio],&rdquo; verschijnt er een kaart met lokale bedrijven boven de
                  organische zoekresultaten. Die kaart is op mobiel het eerste wat iemand ziet. Keukenstudio&apos;s
                  die daarin staan, worden gebeld. Studio&apos;s die er niet instaan, worden overgeslagen.
                </p>
                <p>
                  Groeimaten optimaliseert jouw Google Mijn Bedrijf profiel volledig en zorgt dat het
                  actueel en relevant blijft. Van profielbeschrijving en diensten tot foto&apos;s van afgeronde
                  projecten en een actieve reviewstrategie.
                </p>

                <div className="service-features">
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Volledig profiel optimalisatie</h4>
                      <p>
                        Alle velden ingevuld met relevante zoektermen, accurate openingstijden,
                        contactgegevens en een sterke beschrijving van jouw diensten.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Foto strategie</h4>
                      <p>
                        Profielen met actuele en kwalitatieve foto&apos;s van afgeronde keukens worden
                        vaker bekeken en genereren meer kliks naar de website.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Review strategie</h4>
                      <p>
                        Een systeem om na elk afgerond project een review te verzamelen. Een hoge
                        reviewscore vergroot de zichtbaarheid en het vertrouwen van nieuwe klanten.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Q en A en berichten</h4>
                      <p>
                        Actief bijhouden van de vraag en antwoord sectie en regelmatige berichten voor
                        betere zichtbaarheid in de lokale zoekresultaten.
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
                    <span className="service-visual-card__label">keuken en sanitair merken geholpen</span>
                  </div>
                  <div className="service-visual-card__bar">
                    <div className="bar" style={{ width: "90%" }} />
                  </div>
                  <div className="service-visual-card__stat">
                    <span className="service-visual-card__number">Meer</span>
                    <span className="service-visual-card__label">lokale zichtbaarheid voor jouw studio</span>
                  </div>
                  <div className="service-visual-card__bar bar--green">
                    <div className="bar" style={{ width: "100%" }} />
                  </div>
                  <div className="service-visual-card__stat">
                    <span className="service-visual-card__number">5,0 ★</span>
                    <span className="service-visual-card__label">Google review score Groeimaten</span>
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
              <span className="section-label">Lokale SEO</span>
              <h2 className="section-title section-title--white">
                Lokaal gevonden worden begint bij Google Mijn Bedrijf
              </h2>
              <p style={{ color: "oklch(68% 0 0)", lineHeight: "1.75", marginBottom: "24px" }}>
                Voor keukenstudio&apos;s is lokale vindbaarheid alles. Klanten rijden niet tachtig kilometer
                voor een keukenstudio als er genoeg aanbod is in de buurt. Groeimaten zorgt dat jij die
                eerste keuze bent voor mensen in jouw regio.
              </p>
              <Link href="/afspraak" className="btn btn--blue btn--lg">
                Plan een gratis strategiegesprek {arrowIcon}
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

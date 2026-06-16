import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Marketing voor Keukenstudio's | Groeimaten",
  description:
    "Groeimaten specialiseert in marketing voor keukenstudio's. Van Meta Ads en Google Ads tot website en SEO. Meer kwalitatieve showroomafspraken per maand.",
  alternates: {
    canonical: "https://groeimaten.com/keukenstudio-marketing",
  },
  openGraph: {
    title: "Marketing voor Keukenstudio's | Groeimaten",
    description:
      "Groeimaten specialiseert in marketing voor keukenstudio's. Meer kwalitatieve showroomafspraken per maand.",
    url: "https://groeimaten.com/keukenstudio-marketing",
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
  name: "Marketing voor Keukenstudio's",
  provider: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  description:
    "Groeimaten levert marketing voor keukenstudio's: Meta Ads, Google Ads, website development en SEO specifiek voor de keukenbranche.",
  areaServed: { "@type": "Country", name: "Nederland" },
  url: "https://groeimaten.com/keukenstudio-marketing",
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://groeimaten.com" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Marketing voor keukenstudio's",
      item: "https://groeimaten.com/keukenstudio-marketing",
    },
  ],
}

export default function KeukenstudioMarketingPage() {
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
                <span className="section-label">Keukenstudio marketing</span>
                <h1 className="page-hero__title">
                  Marketing voor keukenstudio&apos;s
                  <br />
                  <em>die willen groeien.</em>
                </h1>
                <p className="page-hero__subtitle">
                  Groeimaten werkt uitsluitend voor keuken- en sanitairbedrijven. We kennen jouw klant, jouw
                  concurrentie en jouw sector. Geen leercurve, dag één aan de slag.
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
                <span className="section-label">Waarom het werkt</span>
                <h2 className="section-title section-title--white">
                  Marketing die keukenstudio&apos;s begrijpt
                </h2>
                <p>
                  De gemiddelde keukenaankoop kost 15.000 tot meer dan 50.000 euro. Jouw klant vergelijkt
                  meerdere studio&apos;s, bezoekt showrooms en neemt de tijd. Marketing voor keukenstudio&apos;s
                  werkt alleen als je de intentie en het gedrag van die klant begrijpt.
                </p>
                <p>
                  Groeimaten werkt al meer dan twee jaar uitsluitend voor keuken- en sanitairbedrijven. We
                  weten welke advertentiebeelden werken, welke teksten aansluiten bij de koopintentie en hoe
                  je een showroomafspraak genereert die ook daadwerkelijk opdaagt.
                </p>

                <div className="service-features">
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Meta Ads voor keukenstudio&apos;s</h4>
                      <p>
                        Gerichte campagnes op Facebook en Instagram die jouw doelgroep bereiken op het
                        moment dat ze oriënteren.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Google Ads voor keukens</h4>
                      <p>
                        Bovenaan staan wanneer iemand zoekt op &ldquo;keukenstudio [jouw stad]&rdquo; of
                        &ldquo;maatwerk keuken laten plaatsen&rdquo;.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>SEO voor keukenstudio</h4>
                      <p>
                        Structurele organische zichtbaarheid op de zoekwoorden die jouw klant gebruikt
                        tijdens zijn oriëntatie.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Website development</h4>
                      <p>
                        Een conversiegerichte website die de kwaliteit van jouw showroom weerspiegelt en
                        bezoekers omzet in afspraken.
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
                    <span className="service-visual-card__number">100%</span>
                    <span className="service-visual-card__label">sector specialist</span>
                  </div>
                  <div className="service-visual-card__bar bar--green">
                    <div className="bar" style={{ width: "100%" }} />
                  </div>
                  <div className="service-visual-card__stat">
                    <span className="service-visual-card__number">5,0 ★</span>
                    <span className="service-visual-card__label">Google review score</span>
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
              <span className="section-label">Geen generieke aanpak</span>
              <h2 className="section-title section-title--white">
                Jouw klant woont in een huis, niet in een statistiek
              </h2>
              <p style={{ color: "oklch(68% 0 0)", lineHeight: "1.75", marginBottom: "24px" }}>
                Een marketingbureau dat ook bakkerijen en kappers bedient, kent jouw klant niet. Groeimaten
                werkt uitsluitend voor keuken- en sanitairbedrijven. We weten hoe lang het beslissingsproces
                duurt, wat de gemiddelde orderwaarde is en welke bezwaren je kopers hebben. Die kennis zit
                in elke advertentie die we voor je maken.
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

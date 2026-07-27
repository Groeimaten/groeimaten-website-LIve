import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Adverteren voor Badkamerinstallateurs | Groeimaten",
  description:
    "Gerichte advertenties voor badkamerinstallateurs via Google Ads en Meta Ads. Groeimaten helpt je de juiste klanten te bereiken op het moment dat ze een badkamerrenovatie overwegen.",
  alternates: {
    canonical: "https://groeimaten.com/badkamerinstallateur-adverteren",
  },
  openGraph: {
    title: "Adverteren voor Badkamerinstallateurs | Groeimaten",
    description:
      "Groeimaten helpt badkamerinstallateurs met gerichte advertenties die kwalitatieve aanvragen opleveren.",
    url: "https://groeimaten.com/badkamerinstallateur-adverteren",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adverteren voor Badkamerinstallateurs | Groeimaten",
    description: "Groeimaten helpt badkamerinstallateurs met gerichte advertenties die kwalitatieve aanvragen opleveren.",
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
  name: "Adverteren voor badkamerinstallateurs",
  provider: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  description:
    "Groeimaten verzorgt Google Ads en Meta Ads voor badkamerinstallateurs: gerichte campagnes die potentiële klanten bereiken die actief oriënteren op badkamerrenovatie.",
  areaServed: { "@type": "Country", name: "Nederland" },
  url: "https://groeimaten.com/badkamerinstallateur-adverteren",
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://groeimaten.com" },
    { "@type": "ListItem", position: 2, name: "Adverteren voor badkamerinstallateurs", item: "https://groeimaten.com/badkamerinstallateur-adverteren" },
  ],
}

export default function BadkamerinstellateurAdverterenPage() {
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
                <span className="section-label">Adverteren badkamerinstallateurs</span>
                <h1 className="page-hero__title">
                  Adverteren voor
                  <br />
                  <em>badkamerinstallateurs.</em>
                </h1>
                <p className="page-hero__subtitle">
                  Een badkamerrenovatie van 10.000 euro begint met oriëntatie. Groeimaten zorgt
                  dat jij zichtbaar bent tijdens die oriëntatiefase, op Google en op social media,
                  zodat de aanvraag bij jou terechtkomt.
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
                <span className="section-label">Onze aanpak</span>
                <h2 className="section-title section-title--white">
                  Advertenties die badkamerklanten aantrekken
                </h2>
                <p>
                  Groeimaten werkt al meer dan twee jaar met badkamer- en sanitairbedrijven. We
                  weten hoe het aankoopproces eruitziet, welke advertentiebeelden werken en hoe
                  je een aanvraag genereert die ook daadwerkelijk een opdracht wordt.
                </p>
                <p>
                  Het gemiddelde badkamerrenovatietraject duurt twee tot vier maanden van eerste
                  oriëntatie tot opdrachtverstrekking. Effectieve advertenties voor
                  badkamerinstallateurs spelen op dat tempo in, zowel voor spoedklusjes als
                  voor volledige renovaties.
                </p>

                <div className="service-features">
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Google Ads op zoekintentie</h4>
                      <p>
                        Campagnes gericht op actieve zoekopdrachten zoals &ldquo;badkamer
                        verbouwen [stad]&rdquo; en &ldquo;badkamerinstallateur offerte aanvragen&rdquo;.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Meta Ads voor oriëntatiefase</h4>
                      <p>
                        Inspirerende advertenties op Facebook en Instagram bereiken mensen
                        die nog in de vroege oriëntatiefase zitten voor een badkamerrenovatie.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Retargeting voor twijfelaars</h4>
                      <p>
                        Bezoekers die jouw website hebben bezocht maar nog geen contact opnamen,
                        worden opnieuw bereikt met gerichte advertenties.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Kwalitatieve leads, niet bulk</h4>
                      <p>
                        We richten campagnes in op kwaliteit. Minder aanvragen van twijfelaars,
                        meer aanvragen van mensen die serieus een badkamer willen laten renoveren.
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
                    <span className="service-visual-card__number">€25</span>
                    <span className="service-visual-card__label">gem. kosten per kwalitatieve lead</span>
                  </div>
                  <div className="service-visual-card__bar">
                    <div className="bar" style={{ width: "85%" }} />
                  </div>
                  <div className="service-visual-card__stat">
                    <span className="service-visual-card__number">100%</span>
                    <span className="service-visual-card__label">sectorspecialist keuken, bad en bouw</span>
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
              <span className="section-label">Gratis gesprek</span>
              <h2 className="section-title section-title--white">
                Meer aanvragen voor jouw badkamerbedrijf
              </h2>
              <p style={{ color: "oklch(68% 0 0)", lineHeight: "1.75", marginBottom: "24px" }}>
                Plan een gratis gesprek. We kijken naar jouw bedrijf, werkgebied en doelgroep. Op
                basis daarvan krijg je een concreet voorstel. Groeimaten werkt uitsluitend voor
                bedrijven in de badkamer, keuken en bouwsector.
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

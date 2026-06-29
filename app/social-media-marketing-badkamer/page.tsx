import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Social Media Marketing voor Badkamerbedrijven | Groeimaten",
  description:
    "Social media marketing voor badkamerbedrijven via Meta Ads op Facebook en Instagram. Groeimaten bereikt potentiële klanten in de oriëntatiefase en genereert kwalitatieve badkamer leads.",
  alternates: {
    canonical: "https://groeimaten.com/social-media-marketing-badkamer",
  },
  openGraph: {
    title: "Social Media Marketing voor Badkamerbedrijven | Groeimaten",
    description:
      "Groeimaten bereikt potentiële badkamerklanten via Meta Ads en genereert kwalitatieve leads voor badkamerbedrijven.",
    url: "https://groeimaten.com/social-media-marketing-badkamer",
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
  name: "Social media marketing voor badkamerbedrijven",
  provider: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  description:
    "Groeimaten verzorgt social media marketing voor badkamerbedrijven via Meta Ads op Facebook en Instagram. Gericht op de oriënterende klant in de badkamersector.",
  areaServed: { "@type": "Country", name: "Nederland" },
  url: "https://groeimaten.com/social-media-marketing-badkamer",
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://groeimaten.com" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Social media marketing badkamer",
      item: "https://groeimaten.com/social-media-marketing-badkamer",
    },
  ],
}

export default function SocialMediaMarketingBadkamerPage() {
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
                <span className="section-label">Social media marketing badkamer</span>
                <h1 className="page-hero__title">
                  Social media marketing
                  <br />
                  <em>voor badkamerbedrijven.</em>
                </h1>
                <p className="page-hero__subtitle">
                  Potentiële badkamerklanten oriënteren zich op Instagram en Facebook voordat ze actief
                  gaan zoeken. Meta Ads bereikt hen op dat moment en zet orientatie om in een aanvraag.
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
                <span className="section-label">Waarom Meta Ads</span>
                <h2 className="section-title section-title--white">
                  Badkamers worden gekocht op gevoel, niet op prijs
                </h2>
                <p>
                  Een badkamerrenovatie kost 8.000 tot 25.000 euro en duurt weken tot maanden in voorbereiding.
                  Mensen kopen niet de goedkoopste badkamer, ze kopen de badkamer die het beste bij hen past.
                  Social media is het platform waar die oriëntatie begint.
                </p>
                <p>
                  Facebook en Instagram geven je de kans om in beeld te komen bij mensen die in de
                  oriëntatiefase zitten. Een stijlvolle foto van een door jou gerealiseerde badkamer,
                  gericht gepromoot bij de juiste doelgroep in jouw regio, zet oriëntatie om in een
                  concrete aanvraag. Groeimaten bouwt en beheert die campagnes.
                </p>

                <div className="service-features">
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Meta Ads campagnebeheer</h4>
                      <p>
                        We bouwen en beheren campagnes op Facebook en Instagram gericht op jouw ideale
                        klantprofiel in jouw werkgebied.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Creatieve uitingen</h4>
                      <p>
                        We adviseren over de beste foto&apos;s en teksten voor jouw advertenties op
                        basis van wat aantoonbaar werkt in de badkamersector.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Doelgroep en regio targeting</h4>
                      <p>
                        Nauwkeurig ingestelde doelgroepen op basis van demografische kenmerken, interesses
                        en locatie zodat jij de juiste mensen bereikt.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Lead formulieren en opvolging</h4>
                      <p>
                        Geïntegreerde leadformulieren in de advertentie voor een lage drempel en snelle
                        opvolging van nieuwe aanvragen.
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
                    <span className="service-visual-card__number">21</span>
                    <span className="service-visual-card__label">afspraken in 150 dagen (Marquardt Küchen)</span>
                  </div>
                  <div className="service-visual-card__bar">
                    <div className="bar" style={{ width: "85%" }} />
                  </div>
                  <div className="service-visual-card__stat">
                    <span className="service-visual-card__number">€31</span>
                    <span className="service-visual-card__label">kosten per lead</span>
                  </div>
                  <div className="service-visual-card__bar bar--green">
                    <div className="bar" style={{ width: "65%" }} />
                  </div>
                  <div className="service-visual-card__stat">
                    <span className="service-visual-card__number">18+</span>
                    <span className="service-visual-card__label">maanden samenwerking</span>
                  </div>
                  <div className="service-visual-card__bar">
                    <div className="bar" style={{ width: "90%" }} />
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
              <span className="section-label">Sector specialist</span>
              <h2 className="section-title section-title--white">
                Social media voor badkamers vraagt om sectorkennis
              </h2>
              <p style={{ color: "oklch(68% 0 0)", lineHeight: "1.75", marginBottom: "24px" }}>
                Groeimaten werkt uitsluitend voor keuken en sanitairbedrijven. We weten welke beelden werken,
                welke doelgroep converteert en hoe je een badkamerlead omzet in een daadwerkelijke opdracht.
                Dat maakt ons anders dan een generiek social media bureau.
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

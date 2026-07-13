import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Leads genereren voor badkamerbedrijf: eigen aanvragen zonder tussenpersoon | Groeimaten",
  description:
    "Leads voor badkamerbedrijven genereren via eigen kanalen. Groeimaten helpt badkamerbedrijven structureel aanvragen ophalen via Google Ads, SEO en Meta Ads.",
  alternates: {
    canonical: "https://groeimaten.com/leads-badkamerbedrijf",
  },
  openGraph: {
    title: "Leads genereren voor badkamerbedrijf | Groeimaten",
    description:
      "Groeimaten helpt badkamerbedrijven structureel eigen leads genereren via Google en advertenties.",
    url: "https://groeimaten.com/leads-badkamerbedrijf",
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
  name: "Leads genereren badkamerbedrijf",
  provider: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  description:
    "Groeimaten helpt badkamerbedrijven structureel eigen leads genereren via Google Ads, SEO en Meta Ads.",
  areaServed: { "@type": "Country", name: "Nederland" },
  url: "https://groeimaten.com/leads-badkamerbedrijf",
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://groeimaten.com" },
    { "@type": "ListItem", position: 2, name: "Leads badkamerbedrijf", item: "https://groeimaten.com/leads-badkamerbedrijf" },
  ],
}

export default function LeadsBadkamerbedrijfPage() {
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
                <span className="section-label">Leads voor badkamerbedrijven</span>
                <h1 className="page-hero__title">
                  Eigen leads genereren voor je
                  <br />
                  <em>badkamerbedrijf.</em>
                </h1>
                <p className="page-hero__subtitle">
                  Leads kopen via een platform betekent concurreren op prijs met drie andere bedrijven.
                  Eigen leads via Google en advertenties betekent dat iemand jou heeft gevonden en
                  voor jou kiest. Groeimaten bouwt die eigen aanvraagstroom voor badkamerbedrijven.
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
                  Geen platforms. Eigen kanalen die blijven werken.
                </h2>
                <p>
                  Platforms die leads verkopen, verdienen geld door dezelfde aanvraag aan meerdere
                  bedrijven te verkopen. Jij betaalt voor een aanvraag die twee concurrenten ook hebben
                  ontvangen. De winnaar is de goedkoopste of de snelste, niet noodzakelijk de beste.
                </p>
                <p>
                  Groeimaten bouwt een eigen aanvraagstroom voor badkamerbedrijven via kanalen die jij
                  bezit. Aanvragen die via Google Ads, SEO of Meta Ads binnenkomen, zijn exclusief
                  voor jou. Die eigenaardigheid is het fundament van rendabele leadgeneratie.
                </p>

                <div className="service-features">
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Google Ads met koopintentie</h4>
                      <p>
                        Campagnes gericht op mensen die nu zoeken naar een badkamerrenovatie in
                        jouw regio. Hoge intentie, directe aanvragen.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>SEO die blijft werken</h4>
                      <p>
                        Organische positie op &ldquo;badkamer verbouwen [stad]&rdquo; en vergelijkbare
                        zoektermen. Aanvragen zonder doorlopend advertentiebudget.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Meta Ads voor latente vraag</h4>
                      <p>
                        Huiseigenaren bereiken die nog niet zoeken maar wél open staan voor
                        een nieuwe badkamer. Aanvragen van mensen die jij anders niet bereikt.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Inzicht in kosten per aanvraag</h4>
                      <p>
                        Geen vage rapporten. Jij ziet hoeveel elke aanvraag kost en hoeveel
                        aanvragen er per maand binnenkomen via welk kanaal.
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
                    <span className="service-visual-card__number">17+</span>
                    <span className="service-visual-card__label">klanten in keuken, badkamer en bouw</span>
                  </div>
                  <div className="service-visual-card__bar">
                    <div className="bar" style={{ width: "85%" }} />
                  </div>
                  <div className="service-visual-card__stat">
                    <span className="service-visual-card__number">100%</span>
                    <span className="service-visual-card__label">eigen leads, geen gedeelde platforms</span>
                  </div>
                  <div className="service-visual-card__bar bar--green">
                    <div className="bar" style={{ width: "100%" }} />
                  </div>
                  <div className="service-visual-card__stat">
                    <span className="service-visual-card__number">5,0</span>
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
                We berekenen vooraf wat een eigen aanvraagstroom jou kost en wat het oplevert.
                Transparant, zonder verplichtingen.
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

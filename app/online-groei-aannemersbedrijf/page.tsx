import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Online groei voor jouw aannemersbedrijf | Groeimaten",
  description:
    "Online groei voor een aannemersbedrijf vraagt een strategie die past bij de bouwsector. Groeimaten helpt aannemers structureel meer opdrachten te genereren via SEO, Google Ads en een sterke website.",
  alternates: {
    canonical: "https://groeimaten.com/online-groei-aannemersbedrijf",
  },
  openGraph: {
    title: "Online groei voor jouw aannemersbedrijf | Groeimaten",
    description:
      "Groeimaten helpt aannemers structureel meer opdrachten genereren via SEO, Google Ads en een sterke website.",
    url: "https://groeimaten.com/online-groei-aannemersbedrijf",
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
  name: "Online groei voor aannemersbedrijf",
  provider: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  description:
    "Groeimaten ontwikkelt online groeistrategie voor aannemersbedrijven via SEO, Google Ads en website development.",
  areaServed: { "@type": "Country", name: "Nederland" },
  url: "https://groeimaten.com/online-groei-aannemersbedrijf",
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://groeimaten.com" },
    { "@type": "ListItem", position: 2, name: "Online groei aannemersbedrijf", item: "https://groeimaten.com/online-groei-aannemersbedrijf" },
  ],
}

export default function OnlineGroeiAannemersbedrijfPage() {
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
                <span className="section-label">Online groei voor aannemers</span>
                <h1 className="page-hero__title">
                  Online groei voor jouw
                  <br />
                  <em>aannemersbedrijf.</em>
                </h1>
                <p className="page-hero__subtitle">
                  Mond-tot-mondreclame heeft zijn grenzen. Aannemers die structureel willen groeien, bouwen
                  ook online een positie op. Groeimaten zorgt voor de aanvragen die jouw agenda vullen,
                  ook als het netwerk even stilstaat.
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
                <span className="section-label">Aanpak</span>
                <h2 className="section-title section-title--white">
                  Van onzichtbaar naar structurele aanvragenstroom
                </h2>
                <p>
                  Veel aannemers hebben een prima website maar worden er nauwelijks op gevonden. Het probleem
                  is niet de website zelf, maar de zichtbaarheid. Wie niet op de eerste pagina staat bij
                  relevante zoekopdrachten in jouw werkgebied, bestaat niet voor die potentiële opdrachtgever.
                </p>
                <p>
                  Groeimaten werkt vanuit een combinatie van kanalen die op elkaar aansluiten. Google Ads
                  zorgt voor directe aanvragen. SEO bouwt een duurzame positie op. De website zorgt dat
                  bezoekers ook daadwerkelijk contact opnemen. Die drie samen vormen een systeem dat
                  consistent werkt.
                </p>

                <div className="service-features">
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Lokale SEO voor jouw werkgebied</h4>
                      <p>
                        Gevonden worden in de steden en regio&apos;s waar jij werkt. We optimaliseren
                        voor de zoektermen die jouw opdrachtgevers gebruiken.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Google Ads campagnes</h4>
                      <p>
                        Directe aanvragen via gerichte Google Ads campagnes. Geen verspild budget op
                        irrelevante zoektermen, alleen aanvragen die passen bij jouw bedrijf.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Website die converteert</h4>
                      <p>
                        Een aannemerswebsite die vertrouwen wekt, jouw projecten laat zien en bezoekers
                        aanzet tot contact. Niet alleen mooi, maar effectief.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Maandelijkse rapportage</h4>
                      <p>
                        Transparantie over resultaten. Maandelijks inzicht in aanvragen, kosten en
                        rendement. Geen vage statistieken.
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
                    <span className="service-visual-card__number">100+</span>
                    <span className="service-visual-card__label">afspraken gegenereerd voor bouwbedrijven</span>
                  </div>
                  <div className="service-visual-card__bar">
                    <div className="bar" style={{ width: "85%" }} />
                  </div>
                  <div className="service-visual-card__stat">
                    <span className="service-visual-card__number">17+</span>
                    <span className="service-visual-card__label">actieve klanten in keuken, badkamer en bouw</span>
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
              <span className="section-label">Bouwsector specialist</span>
              <h2 className="section-title section-title--white">
                We kennen de bouwsector van binnen
              </h2>
              <p style={{ color: "oklch(68% 0 0)", lineHeight: "1.75", marginBottom: "24px" }}>
                Groeimaten werkt uitsluitend voor bedrijven in keuken, badkamer en bouw. We kennen de
                seizoenspatronen, de concurrentiestructuur en de manier waarop opdrachtgevers een aannemer
                kiezen. Die kennis zit in elke campagne die we bouwen.
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

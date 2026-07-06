import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Facebook advertenties voor installateurs | Groeimaten",
  description:
    "Facebook advertenties voor installateurs via Meta Ads bereiken huiseigenaren die nog niet actief zoeken maar wel plannen hebben. Groeimaten beheert Meta campagnes voor installatiebedrijven.",
  alternates: {
    canonical: "https://groeimaten.com/facebook-advertenties-installateur",
  },
  openGraph: {
    title: "Facebook advertenties voor installateurs | Groeimaten",
    description:
      "Groeimaten beheert Meta Ads campagnes voor installatiebedrijven die structureel meer aanvragen willen.",
    url: "https://groeimaten.com/facebook-advertenties-installateur",
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
  name: "Facebook advertenties voor installateurs",
  provider: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  description:
    "Groeimaten beheert Meta Ads campagnes voor installatiebedrijven die structureel meer aanvragen willen genereren.",
  areaServed: { "@type": "Country", name: "Nederland" },
  url: "https://groeimaten.com/facebook-advertenties-installateur",
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://groeimaten.com" },
    { "@type": "ListItem", position: 2, name: "Facebook advertenties installateur", item: "https://groeimaten.com/facebook-advertenties-installateur" },
  ],
}

export default function FacebookAdvertentiesInstallateurPage() {
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
                <span className="section-label">Meta Ads voor installateurs</span>
                <h1 className="page-hero__title">
                  Facebook advertenties
                  <br />
                  <em>voor installateurs.</em>
                </h1>
                <p className="page-hero__subtitle">
                  Niet iedereen die een installateur nodig heeft, zoekt op dat moment op Google. Facebook en
                  Instagram bereiken huiseigenaren die plannen hebben maar nog niet actief zoeken. Meta Ads
                  zetten jouw installatiebedrijf op hun radar voordat de concurrentie dat doet.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "28px" }}>
                  <Link href="/afspraak" className="btn btn--blue btn--lg">
                    Gratis strategiegesprek {arrowIcon}
                  </Link>
                  <Link href="/diensten" className="btn btn--ghost btn--lg">
                    Bekijk diensten
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
                <span className="section-label">Hoe het werkt</span>
                <h2 className="section-title section-title--white">
                  Bereik klanten in de overwegingsfase
                </h2>
                <p>
                  Google Ads bereikt mensen die vandaag zoeken. Meta Ads bereiken mensen die op termijn iets
                  willen. Voor installatiebedrijven die grotere projecten willen, zoals nieuwbouwinstallaties
                  of complete renovaties, is die vroege zichtbaarheid cruciaal. Mensen die een verbouwing
                  plannen, oriënteren zich maanden van tevoren.
                </p>
                <p>
                  Groeimaten bouwt Meta Ads campagnes voor installatiebedrijven die aansluiten bij de
                  projecten die jij het liefst uitvoert. We richten op woningbezitters in jouw werkgebied
                  en tonen advertenties die aansluiten bij hun situatie. Geen verspild budget op mensen
                  buiten jouw regio of doelgroep.
                </p>

                <div className="service-features">
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Doelgroepgerichte campagnes</h4>
                      <p>
                        Woningbezitters in jouw werkgebied, gericht op leeftijd, interesses en
                        woningkenmerken. Zo bereik je de mensen met de grootste kans op een aanvraag.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Visuele advertenties</h4>
                      <p>
                        Projectfoto&apos;s en korte video&apos;s die laten zien wat je hebt geplaatst.
                        Afgerond installatiewerk spreekt voor zich.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Retargeting</h4>
                      <p>
                        Bezoekers die de website al hebben bezocht opnieuw bereiken. Zo blijf je top of
                        mind totdat ze klaar zijn om contact op te nemen.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Combinatie met Google Ads</h4>
                      <p>
                        Meta Ads en Google Ads vullen elkaar aan. Samen zorgen ze voor aanvragen in
                        zowel de korte als de lange termijn.
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
                    <span className="service-visual-card__label">bedrijven geholpen in keuken, badkamer en bouw</span>
                  </div>
                  <div className="service-visual-card__bar">
                    <div className="bar" style={{ width: "88%" }} />
                  </div>
                  <div className="service-visual-card__stat">
                    <span className="service-visual-card__number">100+</span>
                    <span className="service-visual-card__label">afspraken gegenereerd via Meta en Google Ads</span>
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
              <span className="section-label">Vraag een gratis gesprek aan</span>
              <h2 className="section-title section-title--white">
                Klaar om meer aanvragen te ontvangen?
              </h2>
              <p style={{ color: "oklch(68% 0 0)", lineHeight: "1.75", marginBottom: "24px" }}>
                Plan een gratis gesprek en we kijken samen naar jouw situatie, werkgebied en de kansen
                die Meta Ads voor jouw installatiebedrijf bieden. Concreet advies, geen verkooppraatje.
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

import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Social media voor bouwbedrijven: bereik dat verder gaat dan Google | Groeimaten",
  description:
    "Social media voor bouwbedrijven via Facebook en Instagram. Groeimaten zet social media in als leadgeneratiemiddel voor aannemers, renovatiebedrijven en installateurs.",
  alternates: {
    canonical: "https://groeimaten.com/social-media-bouwbedrijven",
  },
  openGraph: {
    title: "Social media voor bouwbedrijven | Groeimaten",
    description:
      "Groeimaten zet social media in als serieus leadgeneratiemiddel voor bouwbedrijven.",
    url: "https://groeimaten.com/social-media-bouwbedrijven",
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
  name: "Social media voor bouwbedrijven",
  provider: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  description:
    "Groeimaten beheert social media en Meta Ads voor bouwbedrijven, aannemers en renovatiebedrijven.",
  areaServed: { "@type": "Country", name: "Nederland" },
  url: "https://groeimaten.com/social-media-bouwbedrijven",
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://groeimaten.com" },
    { "@type": "ListItem", position: 2, name: "Social media bouwbedrijven", item: "https://groeimaten.com/social-media-bouwbedrijven" },
  ],
}

export default function SocialMediaBouwbedrijvenPage() {
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
                <span className="section-label">Social media voor bouwbedrijven</span>
                <h1 className="page-hero__title">
                  Social media voor bouwbedrijven
                  <br />
                  <em>als serieus marketingkanaal.</em>
                </h1>
                <p className="page-hero__subtitle">
                  Facebook en Instagram zijn voor bouwbedrijven geen kanalen voor likes verzamelen.
                  Ze zijn een directe lijn naar huiseigenaren die overwegen te verbouwen. Groeimaten
                  zet social media in als leadgeneratiemiddel dat meetbare aanvragen oplevert.
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
                  Meta Ads die aanvragen opleveren voor bouwbedrijven
                </h2>
                <p>
                  Social media voor bouwbedrijven werkt anders dan voor webshops of dienstverleners.
                  Mensen zoeken niet actief op Facebook naar een aannemer. Maar ze zien wel advertenties,
                  en als de timing goed is, reageren ze. Meta Ads richten zich op huiseigenaren in
                  jouw werkgebied op het moment dat ze open staan voor een verbouwing.
                </p>
                <p>
                  Groeimaten beheert Meta Ads-campagnes die gericht zijn op aanvragen, niet op
                  naamsbekendheid. Het verschil zit in de advertentieopzet, de doelgroepkeuze en
                  de opvolging van leads. Een aanvraag die niet snel wordt opgevolgd, is verloren.
                </p>

                <div className="service-features">
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Gerichte doelgroepen per regio</h4>
                      <p>
                        Advertenties gericht op huiseigenaren in jouw werkgebied, gefilterd op
                        leeftijd, gedrag en interesses die passen bij renovatieplannen.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Leadformulieren die werken</h4>
                      <p>
                        Eenvoudige formulieren binnen Facebook en Instagram zodat mensen reageren
                        zonder de app te verlaten. Lagere drempel, meer reacties.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Foto- en videocontent van jouw werk</h4>
                      <p>
                        Afgeronde projecten zijn het sterkste verkoopargument. Wij gebruiken
                        jouw projectfoto&apos;s als advertentiemateriaal dat mensen overtuigt.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Retargeting voor warme leads</h4>
                      <p>
                        Mensen die jouw website hebben bezocht maar nog geen contact hebben
                        opgenomen, bereik je opnieuw via social media.
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
                    <span className="service-visual-card__label">sectorfocus keuken, badkamer en bouw</span>
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
                We kijken naar jouw huidige situatie en leggen uit welke social media-aanpak het
                meest rendabel is voor jouw type bouwbedrijf.
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

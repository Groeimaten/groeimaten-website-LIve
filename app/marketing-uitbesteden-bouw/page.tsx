import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Marketing uitbesteden als bouwbedrijf | Groeimaten",
  description:
    "Marketing uitbesteden als bouwbedrijf: wanneer is het zinvol, wat kost het en wat mag je verwachten? Groeimaten legt uit hoe het werkt voor aannemers en bouwbedrijven.",
  alternates: {
    canonical: "https://groeimaten.com/marketing-uitbesteden-bouw",
  },
  openGraph: {
    title: "Marketing uitbesteden als bouwbedrijf | Groeimaten",
    description:
      "Wanneer is marketing uitbesteden zinvol voor een bouwbedrijf en wat mag je verwachten? Groeimaten legt het uit.",
    url: "https://groeimaten.com/marketing-uitbesteden-bouw",
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
  name: "Marketing uitbesteden bouwbedrijf",
  provider: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  description:
    "Groeimaten neemt de volledige marketing uit handen van bouwbedrijven, aannemers en installatiebedrijven.",
  areaServed: { "@type": "Country", name: "Nederland" },
  url: "https://groeimaten.com/marketing-uitbesteden-bouw",
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://groeimaten.com" },
    { "@type": "ListItem", position: 2, name: "Marketing uitbesteden bouw", item: "https://groeimaten.com/marketing-uitbesteden-bouw" },
  ],
}

export default function MarketingUitbestedenBouwPage() {
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
                <span className="section-label">Marketing uitbesteden bouw</span>
                <h1 className="page-hero__title">
                  Marketing uitbesteden
                  <br />
                  <em>als bouwbedrijf.</em>
                </h1>
                <p className="page-hero__subtitle">
                  Je bouwt liever dan dat je aan marketing doet. Dat begrijpen we. Groeimaten neemt jouw
                  digitale marketing volledig uit handen, zodat jij je kunt richten op het werk.
                  De aanvragen komen vanzelf.
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
                <span className="section-label">Wat wij overnemen</span>
                <h2 className="section-title section-title--white">
                  Volledige ontzorging van jouw marketing
                </h2>
                <p>
                  Marketing uitbesteden voor een bouwbedrijf werkt anders dan het inhuren van een algemeen
                  bureau. Een generalist moet jouw sector eerst leren kennen. Groeimaten werkt uitsluitend
                  voor bedrijven in keuken, badkamer en bouw. Die sectorkennis zit ingebakken in alles
                  wat we doen.
                </p>
                <p>
                  We nemen de complete digitale marketing uit handen. Van het opzetten en beheren van
                  Google Ads-campagnes tot het verbeteren van jouw organische vindbaarheid en het optimaliseren
                  van de website. Alles intern, geen externe partijen die jouw sector niet kennen.
                </p>

                <div className="service-features">
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Google Ads beheer</h4>
                      <p>
                        Complete opzet en beheer van campagnes. We optimaliseren wekelijks op basis van
                        resultaten, zodat het budget maximaal rendeert.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>SEO en organische vindbaarheid</h4>
                      <p>
                        Structurele verbetering van jouw positie in Google voor de zoektermen die
                        opdrachtgevers in jouw werkgebied gebruiken.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Website optimalisatie</h4>
                      <p>
                        Verbetering van conversie, snelheid en content. De website doet zijn werk
                        zonder dat jij er naar hoeft om te kijken.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Maandelijkse rapportage</h4>
                      <p>
                        Helder overzicht van wat er gedaan is, wat het heeft opgeleverd en wat er
                        volgende maand staat te gebeuren. Altijd transparant.
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
                    <span className="service-visual-card__number">€110k</span>
                    <span className="service-visual-card__label">extra omzet voor één klant in 10 maanden</span>
                  </div>
                  <div className="service-visual-card__bar">
                    <div className="bar" style={{ width: "100%" }} />
                  </div>
                  <div className="service-visual-card__stat">
                    <span className="service-visual-card__number">17+</span>
                    <span className="service-visual-card__label">actieve klanten in keuken, badkamer en bouw</span>
                  </div>
                  <div className="service-visual-card__bar bar--green">
                    <div className="bar" style={{ width: "100%" }} />
                  </div>
                  <div className="service-visual-card__stat">
                    <span className="service-visual-card__number">100%</span>
                    <span className="service-visual-card__label">intern uitgevoerd, geen uitbesteding</span>
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
              <span className="section-label">Geen risico</span>
              <h2 className="section-title section-title--white">
                Start met een gratis gesprek
              </h2>
              <p style={{ color: "oklch(68% 0 0)", lineHeight: "1.75", marginBottom: "24px" }}>
                We kijken samen naar jouw huidige situatie, jouw werkgebied en jouw doelen. Op basis daarvan
                krijg je een concreet advies over welke aanpak het beste past. Geen verplichtingen.
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

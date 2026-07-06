import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Keuken website bouwen die klanten aantrekt | Groeimaten",
  description:
    "Een keuken website bouwen die echt werkt, vraagt om meer dan een mooi design. Groeimaten bouwt keukensites die gevonden worden en bezoekers omzetten naar showroomafspraken.",
  alternates: {
    canonical: "https://groeimaten.com/keuken-website-bouwen",
  },
  openGraph: {
    title: "Keuken website bouwen die klanten aantrekt | Groeimaten",
    description:
      "Groeimaten bouwt keukensites die gevonden worden en bezoekers omzetten naar showroomafspraken.",
    url: "https://groeimaten.com/keuken-website-bouwen",
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
  name: "Keuken website bouwen",
  provider: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  description:
    "Groeimaten bouwt websites voor keukenstudio's die gevonden worden via SEO en bezoekers omzetten naar showroomafspraken.",
  areaServed: { "@type": "Country", name: "Nederland" },
  url: "https://groeimaten.com/keuken-website-bouwen",
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://groeimaten.com" },
    { "@type": "ListItem", position: 2, name: "Keuken website bouwen", item: "https://groeimaten.com/keuken-website-bouwen" },
  ],
}

export default function KeukenstudioWebsiteBouwenPage() {
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
                <span className="section-label">Website voor keukenstudio</span>
                <h1 className="page-hero__title">
                  Keuken website bouwen
                  <br />
                  <em>die leads oplevert.</em>
                </h1>
                <p className="page-hero__subtitle">
                  Een mooie keukenfoto is niet genoeg. Klanten vergelijken online en beslissen wie ze bellen.
                  Groeimaten bouwt websites voor keukenstudio&apos;s die zowel gevonden worden als bezoekers
                  overtuigen een afspraak te plannen.
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
                  Een website die de keukenkoper overtuigt
                </h2>
                <p>
                  Iemand die een nieuwe keuken overweegt, oriënteert zich maanden voordat hij contact opneemt.
                  Hij bezoekt meerdere websites, vergelijkt portfolio&apos;s en beslist op basis van gevoel en
                  vertrouwen. Een keukenstudio website die dat moment goed invult, wint meer afspraken.
                </p>
                <p>
                  Groeimaten bouwt websites voor keukenstudio&apos;s vanuit die klantperspectief. Dat betekent
                  een snel ladende site, een sterk portfolio, duidelijke contactmogelijkheden en pagina&apos;s
                  die geoptimaliseerd zijn voor de zoektermen die jouw klanten gebruiken.
                </p>

                <div className="service-features">
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>SEO-geoptimaliseerde structuur</h4>
                      <p>
                        De website is gebouwd om gevonden te worden. Elke pagina heeft een duidelijke focus
                        op zoekwoorden die jouw potentiële klanten gebruiken.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Portfolio dat overtuigt</h4>
                      <p>
                        Projectfoto&apos;s zijn de kern van een keukenstudio website. We zorgen dat jouw
                        afgeronde projecten prominent en professioneel worden gepresenteerd.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Conversie-optimalisatie</h4>
                      <p>
                        Elk element op de pagina stuurt naar één doel: een afspraak of aanvraag. Van de
                        header tot de footer, de site is gebouwd om te converteren.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Snel en mobielvriendelijk</h4>
                      <p>
                        Meer dan de helft van het verkeer naar keukensites komt van mobiel. De website
                        laadt snel en werkt perfect op elk apparaat.
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
                    <span className="service-visual-card__label">websites gebouwd voor keuken en sanitair</span>
                  </div>
                  <div className="service-visual-card__bar">
                    <div className="bar" style={{ width: "90%" }} />
                  </div>
                  <div className="service-visual-card__stat">
                    <span className="service-visual-card__number">100%</span>
                    <span className="service-visual-card__label">focus op keuken, badkamer en bouw</span>
                  </div>
                  <div className="service-visual-card__bar bar--green">
                    <div className="bar" style={{ width: "100%" }} />
                  </div>
                  <div className="service-visual-card__stat">
                    <span className="service-visual-card__number">5,0</span>
                    <span className="service-visual-card__label">gemiddelde Google score van Groeimaten</span>
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
              <span className="section-label">Sectorkennis</span>
              <h2 className="section-title section-title--white">
                Wij kennen de keukenkoper
              </h2>
              <p style={{ color: "oklch(68% 0 0)", lineHeight: "1.75", marginBottom: "24px" }}>
                Een keukenaankoop kost gemiddeld 15.000 tot 50.000 euro. We weten welke informatie iemand
                nodig heeft om een afspraak te plannen, welke bezwaren er leven en hoe je die wegneemt. Die
                kennis bouwt Groeimaten rechtstreeks in de website.
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

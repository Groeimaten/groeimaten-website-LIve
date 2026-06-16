import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Website Laten Maken Installateur | Groeimaten",
  description:
    "Groeimaten bouwt professionele websites voor installatiebedrijven. Snel, conversiegerecht en SEO-klaar. Meer aanvragen via je eigen website.",
  alternates: {
    canonical: "https://groeimaten.com/installateur-website",
  },
  openGraph: {
    title: "Website Laten Maken Installateur | Groeimaten",
    description:
      "Groeimaten bouwt professionele websites voor installatiebedrijven. Snel, conversiegerecht en SEO-klaar.",
    url: "https://groeimaten.com/installateur-website",
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
  name: "Website laten maken voor installateurs",
  provider: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  description:
    "Groeimaten bouwt professionele websites voor installatiebedrijven: snel, SEO-klaar en gericht op het genereren van aanvragen.",
  areaServed: { "@type": "Country", name: "Nederland" },
  url: "https://groeimaten.com/installateur-website",
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://groeimaten.com" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Website laten maken installateur",
      item: "https://groeimaten.com/installateur-website",
    },
  ],
}

export default function InstallateurWebsitePage() {
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
                <span className="section-label">Website voor installatiebedrijven</span>
                <h1 className="page-hero__title">
                  Een professionele website
                  <br />
                  <em>voor je installatiebedrijf.</em>
                </h1>
                <p className="page-hero__subtitle">
                  Jouw werk is vakkundig. Je website moet dat ook uitstralen. Groeimaten bouwt
                  conversiegerichte websites voor installateurs die online gevonden willen worden en
                  aanvragen willen ontvangen.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "28px" }}>
                  <Link href="/afspraak" className="btn btn--blue btn--lg">
                    Gratis adviesgesprek {arrowIcon}
                  </Link>
                  <Link href="/cases" className="btn btn--ghost btn--lg">
                    Bekijk ons werk
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
                <span className="section-label">Wat je krijgt</span>
                <h2 className="section-title section-title--white">
                  Meer dan een mooie website
                </h2>
                <p>
                  Een website voor een installatiebedrijf moet twee dingen doen: gevonden worden en
                  aanvragen genereren. Een mooie website die niemand vindt, heeft geen waarde. Een website
                  die gevonden wordt maar bezoekers niet omzet in aanvragen, ook niet.
                </p>
                <p>
                  Groeimaten bouwt websites die beide doen. We combineren een professioneel design met
                  technische SEO, snelle laadtijden en een duidelijke structuur die bezoekers naar een
                  contactformulier leidt.
                </p>

                <div className="service-features">
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Design op maat</h4>
                      <p>
                        Geen templates. Een website die past bij jouw bedrijf en die vertrouwen wekt
                        bij nieuwe klanten.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Razendsnel en mobiel geoptimaliseerd</h4>
                      <p>
                        De meeste mensen zoeken een installateur op hun telefoon. Je website laadt
                        in minder dan twee seconden, op elk apparaat.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>SEO ingebakken</h4>
                      <p>
                        Lokale SEO zit standaard in elk websitetraject. Zodat je gevonden wordt door
                        mensen in jouw werkgebied.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Aanvraagformulier en opvolging</h4>
                      <p>
                        Een helder contactformulier dat kwalificatievragen stelt, zodat jij alleen
                        serieuze aanvragen ontvangt.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="service-included-badge">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>
                    <strong>Google en AI Ranking inbegrepen:</strong> SEO, lokale vindbaarheid en
                    zichtbaarheid in AI-zoekmachines zitten standaard in elk websitetraject.
                  </span>
                </div>

                <Link href="/afspraak" className="btn btn--blue btn--lg" style={{ marginTop: "8px" }}>
                  Plan een gratis gesprek {arrowIcon}
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <div className="service-detail__visual">
                <img
                  src="/images/websites-devices.png"
                  alt="Klantwebsites van Groeimaten op laptop, tablet en telefoon"
                  style={{ width: "100%", borderRadius: "12px", display: "block" }}
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-section__glow cta-section__glow--1" aria-hidden="true" />
        <div className="cta-section__glow cta-section__glow--2" aria-hidden="true" />
        <div className="container">
          <ScrollReveal>
            <div className="cta-inner">
              <span className="section-label section-label--blue">Klaar om te starten?</span>
              <h2 className="cta-title">Laten we jouw website bespreken</h2>
              <p className="cta-subtitle">
                Plan een gratis adviesgesprek. We bekijken je huidige website en vertellen je eerlijk
                wat er beter kan.
              </p>
              <Link href="/afspraak" className="btn btn--blue btn--xl">
                Plan een gratis gesprek {arrowIcon}
              </Link>
              <p className="cta-disclaimer">Geen verplichtingen. Wel eerlijk advies.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

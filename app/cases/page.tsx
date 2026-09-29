import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"
import BeforeAfterSlider from "@/components/BeforeAfterSlider"
import ReviewsMarquee from "@/components/ReviewsMarquee"

export const metadata: Metadata = {
  title: "Cases: Resultaten voor Keuken, Badkamer en Bouw | Groeimaten",
  description:
    "Concrete resultaten van keuken- en badkamerbedrijven die met Groeimaten adverteren. €390.000+ omzet uit Meta Ads, tot 35x ROAS. Echte cijfers, echte cases.",
  alternates: {
    canonical: "https://groeimaten.com/cases",
  },
  openGraph: {
    title: "Cases: Resultaten voor Keuken, Badkamer en Bouw | Groeimaten",
    description:
      "€390.000+ omzet uit Meta Ads, tot 35x ROAS. Concrete resultaten van keuken- en badkamerbedrijven die met Groeimaten adverteren.",
    url: "https://groeimaten.com/cases",
    images: [
      {
        url: "/images/founders-light.webp",
        width: 1200,
        height: 630,
        alt: "Cases van Groeimaten: resultaten voor keuken, badkamer en bouwbedrijven",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cases: Resultaten voor Keuken, Badkamer en Bouw | Groeimaten",
    description:
      "€390.000+ omzet uit Meta Ads, tot 35x ROAS. Concrete resultaten van keuken- en badkamerbedrijven.",
    images: ["/images/founders-light.webp"],
  },
}

type FunnelCase = {
  num: string
  name: string
  logo: string
  logoOnDark?: boolean
  desc: string
  results: { num: string; label: string }[]
  funnel: { num: string; label: string }[]
  challenge: string
  approach: string
  outcome: string
}

const funnelCases: FunnelCase[] = [
  {
    num: "Case 03 · Meta Ads",
    name: "Bakker Tegels en Badkamers",
    logo: "/logos/bakker-slider.webp",
    desc: "Tegel- en badkamerspecialist in Vlaardingen. Doel: een vaste stroom badkameraanvragen van mensen die echt gaan verbouwen.",
    results: [
      { num: "€42.149", label: "Omzet excl. btw" },
      { num: "9,8x", label: "ROAS" },
      { num: "€21", label: "Per aanvraag" },
    ],
    funnel: [
      { num: "202", label: "Aanvragen" },
      { num: "12", label: "Afspraken" },
      { num: "2", label: "Nieuwe klanten" },
      { num: "€42.149", label: "Omzet excl. btw" },
    ],
    challenge: "Bakker had een mooie showroom, maar geen voorspelbare manier om nieuwe badkamerklanten binnen te halen. Nieuwe aanvragen kwamen vooral uit mond-tot-mondreclame.",
    approach: "Meta Ads-campagnes gericht op huiseigenaren in de regio die een nieuwe badkamer overwegen, met een aanvraagfunnel en snelle opvolging zodat afspraken ook echt doorgaan.",
    outcome: "Sinds april 2026: 202 aanvragen voor €21,25 per stuk, 12 afspraken en 2 nieuwe klanten. Samen goed voor €42.149 omzet excl. btw bij €4.292 adspend.",
  },
  {
    num: "Case 04 · Meta Ads",
    name: "Grando Keukens Hazerswoude",
    logo: "/logos/grando-slider.svg",
    logoOnDark: true,
    desc: "Keukenzaak in Hazerswoude-Dorp. Doel: meer showroomafspraken in een regio met veel concurrentie.",
    results: [
      { num: "€27.273+", label: "Omzet excl. btw" },
      { num: "6,3x+", label: "ROAS" },
      { num: "<€15", label: "Per aanvraag" },
    ],
    funnel: [
      { num: "293", label: "Aanvragen" },
      { num: "14", label: "Afspraken" },
      { num: "2", label: "Nieuwe klanten" },
      { num: "€27.273+", label: "Omzet excl. btw" },
    ],
    challenge: "In de regio zitten veel keukenzaken dicht op elkaar. Grando wilde opvallen bij mensen die serieus een nieuwe keuken zoeken, zonder te concurreren op prijs.",
    approach: "Meta Ads op het juiste kopersprofiel in de regio, met creatives die de showroom en het vakmanschap laten zien in plaats van kortingen.",
    outcome: "Sinds maart 2026: 293 aanvragen voor maximaal €14,65 per stuk, 14 afspraken en 2 nieuwe klanten. Goed voor minimaal €27.273 omzet excl. btw. Nog niet elke afspraak heeft een uitkomst, dus dit cijfer kan alleen nog stijgen.",
  },
]

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://groeimaten.com" },
    { "@type": "ListItem", position: 2, name: "Cases", item: "https://groeimaten.com/cases" },
  ],
}

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Cases: Resultaten voor Keuken en Sanitair",
  description:
    "Concrete resultaten van keuken-, badkamer- en bouwbedrijven die samenwerken met Groeimaten voor Meta Ads, Google Ads, SEO en website development.",
  url: "https://groeimaten.com/cases",
  publisher: {
    "@type": "Organization",
    name: "Groeimaten",
    url: "https://groeimaten.com",
  },
}

export default function CasesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      {/* PAGE HERO */}
      <section className="page-hero page-hero--split">
        <div className="page-hero__mobile-bg" aria-hidden="true">
          <img src="/images/founders-light.webp" alt="" />
        </div>
        <div className="page-hero__glow page-hero__glow--1" aria-hidden="true"></div>
        <div className="page-hero__glow page-hero__glow--2" aria-hidden="true"></div>
        <div className="container">
          <div className="page-hero__inner">
            <ScrollReveal>
              <div className="page-hero__content">
                <span className="section-label">Ons werk</span>
                <h1 className="page-hero__title">Resultaten voor keuken,<br /><em>badkamer en bouw.</em></h1>
                <p className="page-hero__subtitle">Geen vage verhalen. Concrete resultaten van keuken-, badkamer- en bouwbedrijven die met Groeimaten samenwerken. Van Meta Ads tot volledige website development.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <div className="page-hero__visual" aria-hidden="true">
                <img src="/images/founders-light.webp" alt="Jelle en Thomas van Groeimaten" loading="eager" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* HIGHLIGHT STATS */}
      <section className="cases-stats">
        <div className="container">
          <ScrollReveal>
            <div className="cases-stats__grid">
              <div className="cases-stats__item">
                <span className="cases-stats__number">€390.000+</span>
                <span className="cases-stats__label">Omzet uit Meta Ads (4 cases)</span>
              </div>
              <div className="cases-stats__divider" aria-hidden="true"></div>
              <div className="cases-stats__item">
                <span className="cases-stats__number">1.100+</span>
                <span className="cases-stats__label">Aanvragen (4 cases)</span>
              </div>
              <div className="cases-stats__divider" aria-hidden="true"></div>
              <div className="cases-stats__item">
                <span className="cases-stats__number">35x</span>
                <span className="cases-stats__label">ROAS bij Stoop Keukens</span>
              </div>
              <div className="cases-stats__divider" aria-hidden="true"></div>
              <div className="cases-stats__item">
                <span className="cases-stats__number">5,0 ★</span>
                <span className="cases-stats__label">Google review score</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CASES */}
      <section className="cases-full-section">
        <div className="container">
          <p className="cases-source-note">Stand 27 september 2026, opgeteld vanaf de start van de campagnes. Omzet is exclusief btw.</p>

          {/* Case 1: Stoop Keukens — tekst links, foto rechts */}
          <ScrollReveal>
            <article className="case-full">
              <div className="case-full__split">
                <div className="case-full__text">
                  <span className="case-full__num">Case 01 · Meta Ads</span>
                  <img src="/logos/stoop-keukens.png" alt="Stoop Keukens" className="case-full__logo" style={{ filter: "brightness(0) invert(1)", opacity: 0.9 }} />
                  <h2>Stoop Keukens</h2>
                  <p className="case-full__desc">Gevestigd keukenbedrijf met de ambitie om meer kwalitatieve showroomafspraken te krijgen. Sinds augustus 2025 onze sterkste case: bijna €280.000 omzet, ruim 35 keer de advertentie-investering.</p>
                  <div className="case-full__results">
                    <div className="case-full__result">
                      <span className="case-full__result-number">€279.875</span>
                      <span className="case-full__result-label">Omzet excl. btw</span>
                    </div>
                    <div className="case-full__result">
                      <span className="case-full__result-number">35x</span>
                      <span className="case-full__result-label">ROAS</span>
                    </div>
                    <div className="case-full__result">
                      <span className="case-full__result-number">13</span>
                      <span className="case-full__result-label">Nieuwe klanten</span>
                    </div>
                  </div>
                </div>
                <div className="case-full__visual">
                  <img src="/images/cases/stoop-erika.jpg" alt="Erika Stoop" className="case-full__img" loading="lazy" />
                </div>
              </div>
              <div className="case-full__details">
                <div className="case-full__challenge">
                  <h4>De uitdaging</h4>
                  <p>Stoop Keukens had een sterke merknaam maar miste een structureel systeem voor nieuwe showroomafspraken. De instroom was onvoorspelbaar en afhankelijk van mond-tot-mondreclame.</p>
                </div>
                <div className="case-full__solution">
                  <h4>Onze aanpak</h4>
                  <p>We bouwden een gerichte Meta Ads funnel op het juiste klantsegment. Automatische lead-opvolging zorgde voor snelle reactietijd en hogere opkomst bij afspraken.</p>
                </div>
                <div className="case-full__outcome">
                  <h4>Het resultaat</h4>
                  <p>In ruim 13 maanden: 312 aanvragen voor €25,52 per stuk, 45 showroombezoeken voor €177 per bezoek en 13 nieuwe klanten. Samen €279.875 omzet exclusief btw bij €7.963 adspend.</p>
                </div>
              </div>
            </article>
          </ScrollReveal>

          {/* Case 2: Marquardt — foto links, tekst rechts */}
          <ScrollReveal>
            <article className="case-full case-full--reversed">
              <div className="case-full__split">
                <div className="case-full__text">
                  <span className="case-full__num">Case 02 · Meta Ads</span>
                  <img src="/logos/marquardt.webp" alt="Marquardt Küchen" className="case-full__logo" />
                  <h2>Marquardt Küchen Amersfoort</h2>
                  <p className="case-full__desc">Premium keukenmerk in het hoogsegment met showroom in Amersfoort. Doel: structureel meer kwalitatieve leads van serieuze kopers aantrekken.</p>
                  <div className="case-full__results">
                    <div className="case-full__result">
                      <span className="case-full__result-number">€41.859+</span>
                      <span className="case-full__result-label">Omzet excl. btw</span>
                    </div>
                    <div className="case-full__result">
                      <span className="case-full__result-number">30</span>
                      <span className="case-full__result-label">Showroomafspraken</span>
                    </div>
                    <div className="case-full__result">
                      <span className="case-full__result-number">&lt;€27</span>
                      <span className="case-full__result-label">Per aanvraag</span>
                    </div>
                  </div>
                </div>
                <div className="case-full__visual">
                  <img src="/images/cases/marquardt-adviesgesprek.jpg" alt="Marquardt Amersfoort adviesgesprek" className="case-full__img" loading="lazy" />
                </div>
              </div>
              <div className="case-full__details">
                <div className="case-full__challenge">
                  <h4>De uitdaging</h4>
                  <p>Marquardt Küchen had online te weinig bereik in hun doelgebied. Er was geen structureel systeem om kwalitatieve leads aan te trekken voor het premium segment.</p>
                </div>
                <div className="case-full__solution">
                  <h4>Onze aanpak</h4>
                  <p>Gerichte Meta Ads campagnes op het premium kopersprofiel in de regio Amersfoort. Focus op kwaliteit boven kwantiteit, met scherpe doelgroepselectie.</p>
                </div>
                <div className="case-full__outcome">
                  <h4>Het resultaat</h4>
                  <p>Sinds januari 2026: 294 aanvragen voor maximaal €26,80 per stuk, 30 showroomafspraken en 2 verkochte keukens. Goed voor minimaal €41.859 omzet excl. btw. Nog niet elke afspraak heeft een uitkomst, dus dit cijfer kan alleen nog stijgen.</p>
                </div>
              </div>
            </article>
          </ScrollReveal>

          {/* Case 3 en 4: Bakker en Grando, met funnel als visual */}
          {funnelCases.map((c, i) => (
            <ScrollReveal key={c.name}>
              <article className={`case-full${i % 2 === 0 ? "" : " case-full--reversed"}`}>
                <div className="case-full__split">
                  <div className="case-full__text">
                    <span className="case-full__num">{c.num}</span>
                    <h2>{c.name}</h2>
                    <p className="case-full__desc">{c.desc}</p>
                    <div className="case-full__results">
                      {c.results.map((r) => (
                        <div key={r.label} className="case-full__result">
                          <span className="case-full__result-number">{r.num}</span>
                          <span className="case-full__result-label">{r.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="case-full__visual">
                    <div className="case-funnel">
                      <div className={`case-funnel__logo${c.logoOnDark ? " case-funnel__logo--dark" : ""}`}>
                        <img src={c.logo} alt={c.name} loading="lazy" />
                      </div>
                      {c.funnel.map((f, j) => (
                        <div key={f.label} className="case-funnel__step" style={{ width: `${100 - j * 14}%` }}>
                          <span className="case-funnel__num">{f.num}</span>
                          <span className="case-funnel__label">{f.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="case-full__details">
                  <div className="case-full__challenge">
                    <h4>De uitdaging</h4>
                    <p>{c.challenge}</p>
                  </div>
                  <div className="case-full__solution">
                    <h4>Onze aanpak</h4>
                    <p>{c.approach}</p>
                  </div>
                  <div className="case-full__outcome">
                    <h4>Het resultaat</h4>
                    <p>{c.outcome}</p>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}

          {/* Case 5: Ter Haar — tekst links, slider rechts */}
          <ScrollReveal>
            <article className="case-full">
              <div className="case-full__split">
                <div className="case-full__text">
                  <span className="case-full__num">Case 05 · Website + Webshop</span>
                  <img src="/logos/ter-haar-new.svg" alt="Ter Haar Tegeltechniek" className="case-full__logo" />
                  <h2>Ter Haar Tegeltechniek</h2>
                  <p className="case-full__desc">Sanitair specialist met drie verouderde, extreem trage websites, waaronder een aparte webshop. De wens was om alles samen te voegen in één snelle, moderne omgeving.</p>
                  <div className="case-full__results">
                    <div className="case-full__result">
                      <span className="case-full__result-number">400+</span>
                      <span className="case-full__result-label">Producten online</span>
                    </div>
                    <div className="case-full__result">
                      <span className="case-full__result-number">3→1</span>
                      <span className="case-full__result-label">Sites samengevoegd</span>
                    </div>
                    <div className="case-full__result">
                      <span className="case-full__result-number">Sneller</span>
                      <span className="case-full__result-label">Laadtijd</span>
                    </div>
                  </div>
                </div>
                <div className="case-full__visual">
                  <BeforeAfterSlider
                    clientName="Ter Haar Tegeltechniek"
                    description=""
                    beforeSrc="/images/voor-na/ter-haar-oud.png"
                    afterSrc="/images/voor-na/ter-haar-nieuw.png"
                    websiteUrl="https://www.terhaarvakwerk.nl/"
                    websiteLabel="Bekijk de live website"
                  />
                </div>
              </div>
              <div className="case-full__details">
                <div className="case-full__challenge">
                  <h4>De uitdaging</h4>
                  <p>Ter Haar had drie losse websites die allemaal verouderd en extreem traag waren. Door de verspreide opzet was het beheer omslachtig en de gebruikerservaring ondermaats.</p>
                </div>
                <div className="case-full__solution">
                  <h4>Onze aanpak</h4>
                  <p>We ontwikkelden één moderne omgeving die website én webshop combineert. Snelle laadtijden, overzichtelijk beheer en naadloze koopervaring voor de bezoeker.</p>
                </div>
                <div className="case-full__outcome">
                  <h4>Het resultaat</h4>
                  <p>Drie trage verouderde sites vervangen door één razendsnelle webshop. Nu zijn meer dan 400 sanitairproducten direct online te bestellen.</p>
                </div>
              </div>
            </article>
          </ScrollReveal>

        </div>
      </section>

      {/* REVIEWS */}
      <ReviewsMarquee />

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-section__glow cta-section__glow--1" aria-hidden="true"></div>
        <div className="cta-section__glow cta-section__glow--2" aria-hidden="true"></div>
        <div className="container">
          <ScrollReveal>
            <div className="cta-inner">
              <span className="section-label section-label--blue">Jouw beurt</span>
              <h2 className="cta-title">Word de volgende case</h2>
              <p className="cta-subtitle">Plan een gratis adviesgesprek en ontdek wat Groeimaten voor jouw keuken- of sanitairbedrijf kan betekenen.</p>
              <Link href="/afspraak" className="btn btn--blue btn--xl">
                Plan je gratis gesprek
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
              <p className="cta-disclaimer">Geen verplichtingen. Wel eerlijk advies.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

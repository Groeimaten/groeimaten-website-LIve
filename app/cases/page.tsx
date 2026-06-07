import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"
import BeforeAfterSlider from "@/components/BeforeAfterSlider"
import ReviewsMarquee from "@/components/ReviewsMarquee"

export const metadata: Metadata = {
  title: "Cases | Groeimaten",
  description: "Bekijk onze resultaten. Concrete cases van keuken- en sanitairbedrijven die we hebben geholpen groeien.",
}

export default function CasesPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero page-hero--split">
        <div className="page-hero__glow page-hero__glow--1" aria-hidden="true"></div>
        <div className="page-hero__glow page-hero__glow--2" aria-hidden="true"></div>
        <div className="container">
          <div className="page-hero__inner">
            <ScrollReveal>
              <div className="page-hero__content">
                <span className="section-label">Ons werk</span>
                <h1 className="page-hero__title">Resultaten die<br /><em>voor zich spreken.</em></h1>
                <p className="page-hero__subtitle">Geen vage verhalen. Concrete resultaten van keuken- en sanitairbedrijven die met Groeimaten samenwerken.</p>
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
                <span className="cases-stats__number">€110.000</span>
                <span className="cases-stats__label">Extra omzet, één klant</span>
              </div>
              <div className="cases-stats__divider" aria-hidden="true"></div>
              <div className="cases-stats__item">
                <span className="cases-stats__number">100+</span>
                <span className="cases-stats__label">Afspraken gegenereerd</span>
              </div>
              <div className="cases-stats__divider" aria-hidden="true"></div>
              <div className="cases-stats__item">
                <span className="cases-stats__number">€25</span>
                <span className="cases-stats__label">Gem. kosten per lead</span>
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

          {/* Case 1: Stoop Keukens — tekst links, foto rechts */}
          <ScrollReveal>
            <article className="case-full">
              <div className="case-full__split">
                <div className="case-full__text">
                  <span className="case-full__num">Case 01 · Meta Ads</span>
                  <img src="/logos/stoop-keukens.png" alt="Stoop Keukens" className="case-full__logo" style={{ filter: "brightness(0) invert(1)", opacity: 0.9 }} />
                  <h2>Stoop Keukens</h2>
                  <p className="case-full__desc">Gevestigd keukenbedrijf met ambitie om meer kwalitatieve showroomafspraken te genereren. In 10 maanden uitgegroeid tot onze sterkste case, goed voor €110.000 extra omzet.</p>
                  <div className="case-full__results">
                    <div className="case-full__result">
                      <span className="case-full__result-number">€110.000</span>
                      <span className="case-full__result-label">Extra omzet excl. btw</span>
                    </div>
                    <div className="case-full__result">
                      <span className="case-full__result-number">49</span>
                      <span className="case-full__result-label">Afspraken in 10 mnd</span>
                    </div>
                    <div className="case-full__result">
                      <span className="case-full__result-number">€69</span>
                      <span className="case-full__result-label">Kosten p/afspraak</span>
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
                  <p>In de eerste 100 dagen: 27 afspraken bij slechts €1.850 adspend. In totaal 49 showroomafspraken en €110.000 extra omzet exclusief btw in 10 maanden.</p>
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
                      <span className="case-full__result-number">21</span>
                      <span className="case-full__result-label">Afspraken in 150 dagen</span>
                    </div>
                    <div className="case-full__result">
                      <span className="case-full__result-number">€31</span>
                      <span className="case-full__result-label">Kosten per lead</span>
                    </div>
                    <div className="case-full__result">
                      <span className="case-full__result-number">18+</span>
                      <span className="case-full__result-label">Maanden samenwerking</span>
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
                  <p>21 gekwalificeerde showroomafspraken in 150 dagen, bij kosten per lead van €31. Structurele instroom van serieuze kopers in het premium segment.</p>
                </div>
              </div>
            </article>
          </ScrollReveal>

          {/* Case 3: Ter Haar — tekst links, slider rechts */}
          <ScrollReveal>
            <article className="case-full">
              <div className="case-full__split">
                <div className="case-full__text">
                  <span className="case-full__num">Case 03 · Website + Webshop</span>
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

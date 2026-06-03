import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"
import BeforeAfterSlider from "@/components/BeforeAfterSlider"

export const metadata: Metadata = {
  title: "Cases | Groeimaten",
  description:
    "Bekijk onze resultaten. Concrete cases van keuken- en badkamerbedrijven die we hebben geholpen groeien.",
}

const arrowIcon = (
  <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

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
                <h1 className="page-hero__title">
                  Resultaten die
                  <br />
                  <em>voor zich spreken.</em>
                </h1>
                <p className="page-hero__subtitle">
                  Geen vage verhalen. Concrete resultaten van keuken- en badkamerbedrijven die met Groeimaten
                  samenwerken.
                </p>
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
                <span className="cases-stats__number">€90.804</span>
                <span className="cases-stats__label">Extra omzet in 10 maanden</span>
              </div>
              <div className="cases-stats__divider" aria-hidden="true"></div>
              <div className="cases-stats__item">
                <span className="cases-stats__number">49</span>
                <span className="cases-stats__label">Showroomafspraken in 10 mnd</span>
              </div>
              <div className="cases-stats__divider" aria-hidden="true"></div>
              <div className="cases-stats__item">
                <span className="cases-stats__number">€69</span>
                <span className="cases-stats__label">Laagste kosten per afspraak</span>
              </div>
              <div className="cases-stats__divider" aria-hidden="true"></div>
              <div className="cases-stats__item">
                <span className="cases-stats__number">100%</span>
                <span className="cases-stats__label">Keuken &amp; badkamer</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CASES */}
      <section className="cases-full-section">
        <div className="container">

          {/* Case 1: Stoop Keukens */}
          <ScrollReveal>
            <article className="case-full" style={{ marginBottom: "64px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "start" }}>
                {/* Links: foto */}
                <img
                  src="/images/cases/stoop-erika.jpg"
                  alt="Erika Stoop, eigenaresse van Stoop Keukens"
                  style={{ width: "100%", height: "480px", objectFit: "cover", objectPosition: "center 20%", borderRadius: "10px", display: "block" }}
                  loading="lazy"
                />
                {/* Rechts: tekst */}
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "12px" }}>
                    <img src="/logos/stoop-keukens.png" alt="Stoop Keukens" style={{ height: "28px", width: "auto", filter: "brightness(0) invert(1)", opacity: 0.9 }} />
                    <span className="case-card__tag">Meta Ads</span>
                  </div>
                  <h2 style={{ marginBottom: "12px" }}>Stoop Keukens</h2>
                  <p className="case-full__desc" style={{ marginBottom: "24px" }}>
                    Gevestigd keukenbedrijf met ambitie om meer kwalitatieve showroomafspraken te genereren. In
                    10 maanden uitgegroeid tot onze sterkste case — met €90.804 extra omzet als bewijs.
                  </p>
                  <div className="case-full__results" style={{ marginBottom: "28px" }}>
                    <div className="case-full__result">
                      <span className="case-full__result-number">€90.804</span>
                      <span className="case-full__result-label">Extra omzet excl. btw</span>
                    </div>
                    <div className="case-full__result">
                      <span className="case-full__result-number">49</span>
                      <span className="case-full__result-label">Afspraken in 10 maanden</span>
                    </div>
                    <div className="case-full__result">
                      <span className="case-full__result-number">€69</span>
                      <span className="case-full__result-label">Kosten per afspraak (eerste 100 d)</span>
                    </div>
                  </div>
                  <div className="case-full__details">
                    <div className="case-full__challenge">
                      <h4>De uitdaging</h4>
                      <p>Stoop Keukens had een sterke merknaam maar miste een structureel systeem voor nieuwe showroomafspraken. De instroom was onvoorspelbaar en afhankelijk van mond-tot-mondreclame.</p>
                    </div>
                    <div className="case-full__solution">
                      <h4>Onze aanpak</h4>
                      <p>We bouwden een gerichte Meta Ads funnel op het juiste klantsegment. Automatische lead-opvolging zorgde voor snelle reactietijd en een hogere opkomst bij afspraken.</p>
                    </div>
                    <div className="case-full__outcome">
                      <h4>Het resultaat</h4>
                      <p>In de eerste 100 dagen: 27 afspraken bij slechts €1.850 adspend — een CPA van €69. In totaal 49 showroomafspraken en €90.804 extra omzet exclusief btw in 10 maanden.</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </ScrollReveal>

          {/* Case 2: Marquardt Küchen */}
          <ScrollReveal>
            <article className="case-full" style={{ marginBottom: "64px" }}>
              <div className="case-full__header">
                <div className="case-full__info">
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "12px" }}>
                    <img src="/logos/marquardt.webp" alt="Marquardt Küchen" style={{ height: "24px", width: "auto" }} />
                    <span className="case-card__tag">Meta Ads</span>
                  </div>
                  <h2>Marquardt Küchen Amersfoort</h2>
                  <p className="case-full__desc">
                    Premium keukenmerk in het hoogsegment met showroom in Amersfoort. Doel: structureel meer
                    kwalitatieve leads van serieuze kopers aantrekken.
                  </p>
                </div>
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
                    <span className="case-full__result-number">5 mnd</span>
                    <span className="case-full__result-label">Actief</span>
                  </div>
                </div>
              </div>

              {/* Foto's */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", margin: "28px 0" }}>
                <img
                  src="/images/cases/marquardt-adviesgesprek.jpg"
                  alt="Adviesgesprek in de Marquardt showroom"
                  style={{ width: "100%", height: "280px", objectFit: "cover", objectPosition: "center 30%", borderRadius: "10px" }}
                  loading="lazy"
                />
                <img
                  src="/images/cases/marquardt-showroom.webp"
                  alt="Marquardt Küchen showroom"
                  style={{ width: "100%", height: "280px", objectFit: "cover", objectPosition: "center 30%", borderRadius: "10px" }}
                  loading="lazy"
                />
              </div>

              <div className="case-full__details">
                <div className="case-full__challenge">
                  <h4>De uitdaging</h4>
                  <p>
                    Marquardt Küchen had online te weinig bereik in hun doelgebied. Er was geen structureel
                    systeem om kwalitatieve leads aan te trekken voor het premium segment.
                  </p>
                </div>
                <div className="case-full__solution">
                  <h4>Onze aanpak</h4>
                  <p>
                    Gerichte Meta Ads campagnes op het premium kopersprofiel in de regio Amersfoort.
                    Focus op kwaliteit boven kwantiteit, met scherpe doelgroepselectie.
                  </p>
                </div>
                <div className="case-full__outcome">
                  <h4>Het resultaat</h4>
                  <p>
                    21 gekwalificeerde showroomafspraken in 150 dagen, bij een kosten per lead van €31.
                    Structurele instroom van serieuze kopers in het premium segment.
                  </p>
                </div>
              </div>
            </article>
          </ScrollReveal>

          {/* Case 3: Ter Haar Tegeltechniek */}
          <ScrollReveal>
            <article className="case-full">
              {/* Header — vol breed */}
              <div className="case-full__header">
                <div className="case-full__info">
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "12px" }}>
                    <img src="/logos/ter-haar-new.svg" alt="Ter Haar" style={{ height: "28px", width: "auto" }} />
                    <span className="case-card__tag">Website + Webshop</span>
                  </div>
                  <h2>Ter Haar Tegeltechniek</h2>
                  <p className="case-full__desc">
                    Sanitair specialist met drie verouderde, extreem trage websites — waaronder een aparte webshop. De
                    wens was om alles samen te voegen in één snelle, moderne omgeving.
                  </p>
                </div>
                <div className="case-full__results">
                  <div className="case-full__result">
                    <span className="case-full__result-number">400+</span>
                    <span className="case-full__result-label">Sanitairproducten online</span>
                  </div>
                  <div className="case-full__result">
                    <span className="case-full__result-number">3 → 1</span>
                    <span className="case-full__result-label">Websites samengevoegd</span>
                  </div>
                  <div className="case-full__result">
                    <span className="case-full__result-number">Veel sneller</span>
                    <span className="case-full__result-label">Laadtijd</span>
                  </div>
                </div>
              </div>

              {/* Slider links, 3 tekstblokken rechts */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "start", marginTop: "28px" }}>
                <BeforeAfterSlider
                  clientName="Ter Haar Tegeltechniek"
                  description=""
                  beforeSrc="/images/ter-haar-oud.png"
                  afterSrc="/images/ter-haar-nieuw.png"
                  websiteUrl="https://www.terhaarvakwerk.nl/"
                  websiteLabel="Bekijk de live website"
                />
                <div className="case-full__details">
                  <div className="case-full__challenge">
                    <h4>De uitdaging</h4>
                    <p>Ter Haar Tegeltechniek had drie losse websites die allemaal verouderd en extreem traag waren. Eén van de drie was een webshop, maar door de verspreide opzet was het beheer omslachtig en de gebruikerservaring ondermaats.</p>
                  </div>
                  <div className="case-full__solution">
                    <h4>Onze aanpak</h4>
                    <p>We ontwikkelden één moderne omgeving die website én webshop combineert. Snelle laadtijden, overzichtelijk beheer en een naadloze koopervaring voor de bezoeker.</p>
                  </div>
                  <div className="case-full__outcome">
                    <h4>Het resultaat</h4>
                    <p>Drie trage verouderde sites vervangen door één razendsnelle webshop. Nu zijn meer dan 400 sanitairproducten direct online te bestellen.</p>
                  </div>
                </div>
              </div>
            </article>
          </ScrollReveal>

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-label">Klantreacties</span>
              <h2 className="section-title section-title--white">Wat ze over ons zeggen</h2>
            </div>
          </ScrollReveal>
          <div className="testimonials-grid">
            <ScrollReveal delay={1}>
              <article className="testimonial-card">
                <div className="testimonial-card__stars">★★★★★</div>
                <blockquote>
                  &quot;Zeer tevreden over het contact, hoe de samenwerking wordt onderhouden en de transparantie.
                  Communicatie is erg fijn en er wordt snel geschakeld, hun manier van werken is innovatief en met
                  doorzettingsvermogen. Erg fijn!&quot;
                </blockquote>
                <div className="testimonial-card__author">
                  <img src="/images/kim-noach.png" alt="Kim Noach" className="author-avatar" width={44} height={44} loading="lazy" />
                  <div><strong>Kim Noach</strong><span>Google review</span></div>
                </div>
              </article>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <article className="testimonial-card">
                <div className="testimonial-card__stars">★★★★★</div>
                <blockquote>
                  &quot;Vanaf februari is onze nieuwe website echt goed vindbaar geworden. De leads worden steeds
                  kwalitatiever, we krijgen meer serieuze aanvragen en daar komen ook daadwerkelijk opdrachten uit
                  voort. We merken echt duidelijke groei.&quot;
                </blockquote>
                <div className="testimonial-card__author">
                  <img src="/images/stoop-keukens.png" alt="Martin Stoop" className="author-avatar" width={44} height={44} loading="lazy" />
                  <div><strong>Martin Stoop</strong><span>Stoop Keukens</span></div>
                </div>
              </article>
            </ScrollReveal>
            <ScrollReveal delay={3}>
              <article className="testimonial-card">
                <div className="testimonial-card__stars">★★★★★</div>
                <blockquote>
                  &quot;Deze jonge enthousiaste ondernemers hebben onze website van Tegro ontwikkeld. Het resultaat mag
                  er zijn. Het was een fijn traject waar op alle vlakken goed meegedacht werd. Ook het onderhoud van de
                  site wordt met veel enthousiasme verzorgd.&quot;
                </blockquote>
                <div className="testimonial-card__author">
                  <img src="/images/tegro-review.png" alt="Tegro BV" className="author-avatar" width={44} height={44} loading="lazy" />
                  <div><strong>Tegro BV</strong><span>Google review</span></div>
                </div>
              </article>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <article className="testimonial-card">
                <div className="testimonial-card__stars">★★★★★</div>
                <blockquote>
                  &quot;De samenwerking met Thomas en Jelle heb ik als heel prettig ervaren. Ze luisterden goed naar
                  mijn wensen en dachten actief mee. Het eindresultaat is een mooie, professionele website die
                  helemaal past bij wat ik voor ogen had.&quot;
                </blockquote>
                <div className="testimonial-card__author">
                  <img src="/images/mido-ibrahim.png" alt="Mido Ibrahim" className="author-avatar" width={44} height={44} loading="lazy" />
                  <div><strong>Mido Ibrahim</strong><span>Google review</span></div>
                </div>
              </article>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <article className="testimonial-card">
                <div className="testimonial-card__stars">★★★★★</div>
                <blockquote>
                  &quot;Thomas heeft mij geholpen om mijn website weer een beetje up-to-date te krijgen. De korte
                  lijntjes zijn erg prettig. De afspraken zijn netjes nagekomen. Al met al een goede ervaring.&quot;
                </blockquote>
                <div className="testimonial-card__author">
                  <img src="/images/richard-feenstra.png" alt="Richard Feenstra" className="author-avatar" width={44} height={44} loading="lazy" />
                  <div><strong>Richard Feenstra</strong><span>Google review</span></div>
                </div>
              </article>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-section__glow cta-section__glow--1" aria-hidden="true"></div>
        <div className="cta-section__glow cta-section__glow--2" aria-hidden="true"></div>
        <div className="container">
          <ScrollReveal>
            <div className="cta-inner">
              <span className="section-label section-label--blue">Jouw beurt</span>
              <h2 className="cta-title">Word de volgende case</h2>
              <p className="cta-subtitle">
                Plan een gratis adviesgesprek en ontdek wat Groeimaten voor jouw keuken- of badkamerbedrijf kan
                betekenen.
              </p>
              <Link href="/contact" className="btn btn--blue btn--xl">
                Plan je gratis gesprek
                {arrowIcon}
              </Link>
              <p className="cta-disclaimer">Geen verplichtingen. Wel eerlijk advies.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

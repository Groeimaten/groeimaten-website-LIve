import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"

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
                <img
                  src="/images/founders-light.webp"
                  alt="Jelle en Thomas van Groeimaten"
                  loading="eager"
                />
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
                <span className="cases-stats__number">35+</span>
                <span className="cases-stats__label">Merken geholpen</span>
              </div>
              <div className="cases-stats__divider" aria-hidden="true"></div>
              <div className="cases-stats__item">
                <span className="cases-stats__number">5,0 ★</span>
                <span className="cases-stats__label">Google beoordeling</span>
              </div>
              <div className="cases-stats__divider" aria-hidden="true"></div>
              <div className="cases-stats__item">
                <span className="cases-stats__number">100%</span>
                <span className="cases-stats__label">Sector specialist</span>
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

          {/* Case 1: Marquardt Küchen */}
          <ScrollReveal>
            <article className="case-full">
              <div className="case-full__header">
                <div className="case-full__info">
                  <span className="case-card__tag">Meta Ads</span>
                  <h2>Marquardt Küchen</h2>
                  <p className="case-full__desc">
                    Premium keukenmerk in het hoogsegment. Ze wilden hun online zichtbaarheid vergroten en meer
                    kwalitatieve showroomafspraken genereren via een sterke digitale aanwezigheid en gerichte
                    advertenties.
                  </p>
                </div>
                <div className="case-full__results">
                  <div className="case-full__result">
                    <span className="case-full__result-number">+300%</span>
                    <span className="case-full__result-label">Meer online aanvragen</span>
                  </div>
                  <div className="case-full__result">
                    <span className="case-full__result-number">80%+</span>
                    <span className="case-full__result-label">Show-up rate</span>
                  </div>
                  <div className="case-full__result">
                    <span className="case-full__result-number">3 weken</span>
                    <span className="case-full__result-label">Tot eerste resultaten</span>
                  </div>
                </div>
              </div>
              <div className="case-full__details">
                <div className="case-full__challenge">
                  <h4>De uitdaging</h4>
                  <p>
                    Marquardt Küchen had een sterke merknaam maar haalde online te weinig uit hun aanwezigheid. De
                    bestaande website converteerde slecht en er was geen structurele campagne om nieuwe klanten in de
                    showroom te krijgen.
                  </p>
                </div>
                <div className="case-full__solution">
                  <h4>Onze aanpak</h4>
                  <p>
                    We ontwikkelden een converterende landingspagina gecombineerd met gerichte Meta Ads campagnes op het
                    premium segment. Met een geautomatiseerde lead kwalificatie zorgen we dat alleen serieuze kopers de
                    agenda bereiken.
                  </p>
                </div>
                <div className="case-full__outcome">
                  <h4>Het resultaat</h4>
                  <p>
                    Een significante stijging in kwalitatieve showroomafspraken. De campagnes draaien inmiddels op
                    autopilot en leveren structureel nieuwe klanten op, zonder dat het team zelf achter leads aan hoeft
                    te bellen.
                  </p>
                </div>
              </div>
            </article>
          </ScrollReveal>

          {/* Case 2: Badkamer Evolutie */}
          <ScrollReveal>
            <article className="case-full">
              <div className="case-full__header">
                <div className="case-full__info">
                  <span className="case-card__tag">Meta Ads + Funnel</span>
                  <h2>Badkamer Evolutie</h2>
                  <p className="case-full__desc">
                    Design-gedreven badkamershowroom met een sterk merk op sociale media, maar moeite om volgers om te
                    zetten in showroombezoeken. Ze wilden een schaalbaar systeem dat kwaliteit boven kwantiteit stelt.
                  </p>
                </div>
                <div className="case-full__results">
                  <div className="case-full__result">
                    <span className="case-full__result-number">-40%</span>
                    <span className="case-full__result-label">Kosten per lead</span>
                  </div>
                  <div className="case-full__result">
                    <span className="case-full__result-number">78%</span>
                    <span className="case-full__result-label">Show-up rate</span>
                  </div>
                  <div className="case-full__result">
                    <span className="case-full__result-number">22</span>
                    <span className="case-full__result-label">Afspraken per maand</span>
                  </div>
                </div>
              </div>
              <div className="case-full__details">
                <div className="case-full__challenge">
                  <h4>De uitdaging</h4>
                  <p>
                    Badkamer Evolutie had een sterk merk op Instagram maar geen systeem om volgers om te zetten in
                    showroombezoeken. Hun vorige bureau leverde veel leads maar van lage kwaliteit, met een show-up rate
                    van slechts 52%.
                  </p>
                </div>
                <div className="case-full__solution">
                  <h4>Onze aanpak</h4>
                  <p>
                    We bouwden een complete funnel met lead kwalificatiestappen. Alleen consumenten met een concreet
                    renovatieplan kwamen door. Automatische opvolging via SMS en e-mail zorgde voor optimale
                    voorbereiding op het gesprek.
                  </p>
                </div>
                <div className="case-full__outcome">
                  <h4>Het resultaat</h4>
                  <p>
                    De kostprijs per afspraak daalde met 40%. De show-up rate steeg van 52% naar 78%. De klant hoeft
                    alleen nog te verkopen, de rest draait op autopilot.
                  </p>
                </div>
              </div>
            </article>
          </ScrollReveal>

          {/* Case 3: Stoop Keukens */}
          <ScrollReveal>
            <article className="case-full">
              <div className="case-full__header">
                <div className="case-full__info">
                  <span className="case-card__tag">Google &amp; AI Ranking + Website</span>
                  <h2>Stoop Keukens</h2>
                  <p className="case-full__desc">
                    Gerenommeerd keukenbedrijf dat online vrijwel onzichtbaar was. Ze wilden duurzame groei via
                    organisch verkeer en een website die hun kwaliteit en vakmanschap goed uitstraalt.
                  </p>
                </div>
                <div className="case-full__results">
                  <div className="case-full__result">
                    <span className="case-full__result-number">Top 3</span>
                    <span className="case-full__result-label">Google rankings</span>
                  </div>
                  <div className="case-full__result">
                    <span className="case-full__result-number">+210%</span>
                    <span className="case-full__result-label">Organisch verkeer</span>
                  </div>
                  <div className="case-full__result">
                    <span className="case-full__result-number">12</span>
                    <span className="case-full__result-label">Top 3 zoektermen</span>
                  </div>
                </div>
              </div>
              <div className="case-full__details">
                <div className="case-full__challenge">
                  <h4>De uitdaging</h4>
                  <p>
                    Stoop Keukens had een website zonder SEO-basis en stond nergens in Google terwijl concurrenten de
                    eerste pagina domineerden. Ze werden niet gevonden door potentiële klanten die actief zochten.
                  </p>
                </div>
                <div className="case-full__solution">
                  <h4>Onze aanpak</h4>
                  <p>
                    Complete website herbouw met technische SEO-basis, gevolgd door een contentstrategie gericht op
                    lokale en nationale zoektermen. Google Mijn Bedrijf optimalisatie, linkbuilding en
                    AI-zoekoptimalisatie.
                  </p>
                </div>
                <div className="case-full__outcome">
                  <h4>Het resultaat</h4>
                  <p>
                    Binnen 6 maanden top 3 posities voor 12 relevante zoektermen. Organisch verkeer steeg met 210%. De
                    website genereert nu structureel leads zonder advertentiekosten.
                  </p>
                </div>
              </div>
            </article>
          </ScrollReveal>

          {/* Case 4: Sanisale */}
          <ScrollReveal>
            <article className="case-full">
              <div className="case-full__header">
                <div className="case-full__info">
                  <span className="case-card__tag">Social Media Advertising</span>
                  <h2>Sanisale Amersfoort &amp; Den Bosch</h2>
                  <p className="case-full__desc">
                    Badkamerzaak met twee vestigingen die meer lokale bekendheid wilde opbouwen en meer showroomverkeer
                    wilde genereren vanuit beide regio&apos;s via gerichte social media campagnes.
                  </p>
                </div>
                <div className="case-full__results">
                  <div className="case-full__result">
                    <span className="case-full__result-number">2x</span>
                    <span className="case-full__result-label">Meer showroombezoeken</span>
                  </div>
                  <div className="case-full__result">
                    <span className="case-full__result-number">75%</span>
                    <span className="case-full__result-label">Show-up rate</span>
                  </div>
                  <div className="case-full__result">
                    <span className="case-full__result-number">2 locaties</span>
                    <span className="case-full__result-label">Tegelijk gegroeid</span>
                  </div>
                </div>
              </div>
              <div className="case-full__details">
                <div className="case-full__challenge">
                  <h4>De uitdaging</h4>
                  <p>
                    Sanisale had twee vestigingen maar miste een digitale strategie die beide locaties effectief
                    bediende. De advertentiebudgetten werden niet optimaal ingezet en er was weinig inzicht in welke
                    campagnes werkten.
                  </p>
                </div>
                <div className="case-full__solution">
                  <h4>Onze aanpak</h4>
                  <p>
                    We ontwikkelden locatiespecifieke Meta Ads campagnes voor Amersfoort en Den Bosch, met aparte
                    targeting en creatieve uitingen per regio. Wekelijkse optimalisatie op basis van concrete data.
                  </p>
                </div>
                <div className="case-full__outcome">
                  <h4>Het resultaat</h4>
                  <p>
                    Beide vestigingen zagen een significante toename in showroomafspraken. De campagnes werden
                    winstgevend en zijn inmiddels een vast onderdeel van hun marketingstrategie.
                  </p>
                </div>
              </div>
            </article>
          </ScrollReveal>

        </div>
      </section>

      {/* CLIENT WALL */}
      <section className="client-wall-section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-label">Onze klanten</span>
              <h2 className="section-title section-title--white">Bedrijven die ons vertrouwen</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="client-wall">
              <div className="client-wall__item">Marquardt Küchen</div>
              <div className="client-wall__item">Badkamer Evolutie</div>
              <div className="client-wall__item">Stoop Keukens</div>
              <div className="client-wall__item">Sanisale</div>
              <div className="client-wall__item">Feenstra Badkamers</div>
              <div className="client-wall__item">Van Maren Tegeltechniek</div>
              <div className="client-wall__item">Warmte &amp; Zo</div>
              <div className="client-wall__item">TEGRO</div>
            </div>
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
                  <img
                    src="/images/kim-noach.png"
                    alt="Kim Noach"
                    className="author-avatar"
                    width={44}
                    height={44}
                    loading="lazy"
                  />
                  <div>
                    <strong>Kim Noach</strong>
                    <span>Google review</span>
                  </div>
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
                  <img
                    src="/images/stoop-keukens.png"
                    alt="Martin Stoop"
                    className="author-avatar"
                    width={44}
                    height={44}
                    loading="lazy"
                  />
                  <div>
                    <strong>Martin Stoop</strong>
                    <span>Stoop Keukens</span>
                  </div>
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
                  <img
                    src="/images/tegro-review.png"
                    alt="Tegro BV"
                    className="author-avatar"
                    width={44}
                    height={44}
                    loading="lazy"
                  />
                  <div>
                    <strong>Tegro BV</strong>
                    <span>Google review</span>
                  </div>
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

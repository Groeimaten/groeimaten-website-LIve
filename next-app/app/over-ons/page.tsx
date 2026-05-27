import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Over ons | Groeimaten",
  description:
    "Leer Groeimaten kennen. Jong, ambitieus en 100% gespecialiseerd in marketing voor keuken- en badkamerbedrijven.",
}

const arrowIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function OverOnsPage() {
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
                <span className="section-label">Over Groeimaten</span>
                <h1 className="page-hero__title">
                  Jong, ambitieus en
                  <br />
                  <em>100% toegewijd.</em>
                </h1>
                <p className="page-hero__subtitle">
                  Wij zijn geen groot corporate bureau. Wij zijn een team van specialisten met één missie: keuken- en
                  badkamerbedrijven laten groeien.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <div className="page-hero__visual">
                <div className="about-photo-frame">
                  <div className="about-photo-frame__glow"></div>
                  <img
                    src="/images/founders-office.webp"
                    alt="Jelle en Thomas, founders van Groeimaten"
                    loading="eager"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="about-mission">
        <div className="container">
          <div className="about-mission__inner">
            <ScrollReveal>
              <div className="about-mission__content">
                <span className="section-label">Onze missie</span>
                <h2 className="section-title section-title--white">
                  Badkamer- en keukenbedrijven volledig ontzorgen van marketing
                </h2>
                <p>
                  Van onbekende consument tot showroomafspraak die daadwerkelijk opdaagt. Dat is waar we elke dag aan
                  werken. We geloven dat elk premium keuken- of badkamerbedrijf recht heeft op marketing die écht werkt.
                </p>
                <p>
                  We werken uitsluitend voor bedrijven in het midden- en hoogsegment. Projecten boven €20.000. Dat
                  betekent dat we jouw klant door en door kennen, weten welke triggers werken en welke boodschap
                  resoneert.
                </p>
                <div className="about-mission__numbers">
                  <div className="about-num">
                    <div className="about-num__row">
                      <span className="about-num__val" data-count="35">0</span>
                      <span className="about-num__plus">+</span>
                    </div>
                    <span className="about-num__label">Merken geholpen</span>
                  </div>
                  <div className="about-num">
                    <div className="about-num__row">
                      <span className="about-num__val" data-count="100">0</span>
                      <span className="about-num__plus">%</span>
                    </div>
                    <span className="about-num__label">Sector specialist</span>
                  </div>
                  <div className="about-num">
                    <div className="about-num__row">
                      <span className="about-num__val">5,0</span>
                      <span className="about-num__plus"> ★</span>
                    </div>
                    <span className="about-num__label">Google score</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <div className="about-photo-frame">
                <div className="about-photo-frame__glow"></div>
                <img
                  src="/images/founders-close.webp"
                  alt="Jelle en Thomas, de oprichters van Groeimaten"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* IN DE MEDIA */}
      <section className="media-mention-section" id="media" aria-labelledby="about-media-heading">
        <div className="container">
          <div className="media-mention__inner">
            <ScrollReveal>
              <div className="media-mention__visual">
                <div className="media-mention__frame">
                  <img
                    src="/images/magazine-article.webp"
                    alt="Groeimaten in K&D Magazine: Met AI en marketing naar meer afspraken"
                    loading="lazy"
                  />
                  <span className="media-mention__stamp">In de media</span>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <div className="media-mention__content">
                <div className="media-mention__eyebrow">Erkend door de branche</div>
                <h2 className="media-mention__title" id="about-media-heading">
                  Uitgelicht in
                  <br />
                  <em>K&amp;D Magazine</em>
                </h2>
                <p className="media-mention__text">
                  K&amp;D Magazine, hét vakblad voor de keuken- en badkamersector, schreef over de aanpak van
                  Groeimaten. Hoe wij als jonge specialist met AI en marketing keuken- en badkamerbedrijven helpen aan
                  meer showroomafspraken.
                </p>
                <blockquote className="media-mention__quote">
                  &quot;Met AI en marketing naar meer afspraken&quot;
                </blockquote>
                <div className="media-mention__publication">
                  <span>K&amp;D Magazine</span>
                  <span className="media-mention__pub-dot"></span>
                  <span>Keuken &amp; Bad vakblad</span>
                  <span className="media-mention__pub-dot"></span>
                  <span>Groeimaten als sectorspecialist</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FOUNDER: THOMAS */}
      <section className="founder-split">
        <div className="container">
          <div className="founder-split__inner">
            <ScrollReveal>
              <div className="founder-split__photo">
                <div className="about-photo-frame about-photo-frame--portrait">
                  <div className="about-photo-frame__glow"></div>
                  <img src="/images/thomas.webp" alt="Thomas Ghobadi, Co-founder Groeimaten" loading="lazy" />
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <div className="founder-split__content">
                <span className="section-label">Co-founder</span>
                <h2 className="section-title section-title--white">Thomas Ghobadi</h2>
                <p>
                  Thomas begon op zijn 14e met websites bouwen. Vandaag specialiseert hij zich in website development en
                  Google ranking voor keuken- en badkamerbedrijven, zodat jouw bedrijf niet alleen gevonden wordt, maar
                  ook gekozen wordt.
                </p>
                <p>
                  Leergierig, energiek en altijd bezig met de nieuwste technieken. Van technische SEO tot
                  AI-zoekoptimalisatie: Thomas bouwt aan tastbare resultaten.
                </p>
                <div className="founder-traits">
                  <span className="founder-trait">Website Development</span>
                  <span className="founder-trait">Google &amp; AI Ranking</span>
                  <span className="founder-trait">SEO</span>
                  <span className="founder-trait">Conversie-optimalisatie</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FOUNDER: JELLE */}
      <section className="founder-split founder-split--alt">
        <div className="container">
          <div className="founder-split__inner founder-split__inner--reversed">
            <ScrollReveal>
              <div className="founder-split__content">
                <span className="section-label">Co-founder</span>
                <h2 className="section-title section-title--white">Jelle Westerbroek</h2>
                <p>
                  Jelle begon op zijn 15e al met advertentiecampagnes voor keuken- en badkamerbedrijven. Specialist in
                  Facebook- en Instagram-advertenties en geautomatiseerde opvolgsystemen.
                </p>
                <p>
                  Direct, resultaatgericht en snel. Hij zorgt dat elke euro die je investeert in advertenties ook
                  daadwerkelijk terugkomt als kwalitatieve afspraken in jouw agenda.
                </p>
                <div className="founder-traits">
                  <span className="founder-trait">Meta Ads</span>
                  <span className="founder-trait">Funnel-strategie</span>
                  <span className="founder-trait">Lead-opvolging</span>
                  <span className="founder-trait">Campagne-optimalisatie</span>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <div className="founder-split__photo">
                <div className="about-photo-frame about-photo-frame--portrait">
                  <div className="about-photo-frame__glow"></div>
                  <img src="/images/jelle.webp" alt="Jelle Westerbroek, Co-founder Groeimaten" loading="lazy" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* BEHIND THE SCENES */}
      <section className="about-bts">
        <div className="container">
          <div className="about-bts__inner">
            <ScrollReveal>
              <div className="about-bts__photo">
                <div className="about-photo-frame">
                  <div className="about-photo-frame__glow"></div>
                  <img
                    src="/images/founders-hero.webp"
                    alt="Jelle en Thomas van Groeimaten aan het werk"
                    loading="lazy"
                  />
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <div className="about-bts__content">
                <span className="section-label">Achter de schermen</span>
                <h2 className="section-title section-title--white">Jong, hongerig en altijd bezig.</h2>
                <p>
                  Geen kantoortijden van negen tot vijf. We denken voortdurend na over hoe we jouw campagnes nóg beter
                  kunnen maken. Elke dag testen, analyseren en optimaliseren.
                </p>
                <p>
                  Dat jonge en energieke is precies ons voordeel. We kennen de nieuwste platforms, stappen snel mee met
                  algoritme-updates en zitten nooit vast in &quot;zo doen we het altijd&quot;.
                </p>
                <Link href="/contact" className="btn btn--blue">
                  Maak kennis met ons
                  {arrowIcon}
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="values-section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-label">Onze waarden</span>
              <h2 className="section-title section-title--white">Waar we voor staan</h2>
            </div>
          </ScrollReveal>

          <div className="values-grid">
            <ScrollReveal delay={1}>
              <div className="value-card">
                <div className="value-card__number" aria-hidden="true">01</div>
                <h3>Resultaatgericht</h3>
                <p>
                  Geen vage beloftes. We sturen op concrete cijfers: meer afspraken, hogere show-up rates, lagere kosten
                  per lead. Elke euro die je investeert moet renderen.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <div className="value-card">
                <div className="value-card__number" aria-hidden="true">02</div>
                <h3>Eerlijk &amp; transparant</h3>
                <p>
                  We vertellen je wat werkt en wat niet. Geen mooipraterij. Maandelijkse rapportages met alle data open
                  op tafel. Altijd.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={3}>
              <div className="value-card">
                <div className="value-card__number" aria-hidden="true">03</div>
                <h3>Innovatief</h3>
                <p>
                  We zijn jong en hongerig. Nieuwe platforms, technieken en trends passen we als eerste toe. Geen
                  verouderde aanpak, geen &quot;zo doen we het altijd&quot;.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={4}>
              <div className="value-card">
                <div className="value-card__number" aria-hidden="true">04</div>
                <h3>Persoonlijk</h3>
                <p>
                  Geen ticketsysteem of wachtlijst. Directe lijnen, snelle reacties en een team dat jouw bedrijf écht
                  kent. We zijn een partner, geen leverancier.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* WHY KITCHEN & BATH */}
      <section className="about-niche">
        <div className="container">
          <div className="about-niche__inner">
            <ScrollReveal>
              <div className="about-niche__content">
                <span className="section-label">Onze niche</span>
                <h2 className="section-title section-title--white">Waarom alleen keuken &amp; badkamer?</h2>
                <p>
                  Omdat specialisatie werkt. Een generiek bureau moet jouw sector eerst leren kennen. Dat kost tijd,
                  geld en slechte resultaten. Wij slaan die fase over.
                </p>
                <p>
                  We weten hoe de koper van een premium keuken denkt. We kennen de seizoenspatronen, de concurrenten,
                  de zoektermen en de sociale triggers. Die kennis zit ingebakken in alles wat we doen.
                </p>

                <div className="niche-points">
                  <div className="niche-point">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M20 6L9 17l-5-5"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>We kennen de DGA&apos;s in deze branche</span>
                  </div>
                  <div className="niche-point">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M20 6L9 17l-5-5"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>We weten welke ad creatives converteren</span>
                  </div>
                  <div className="niche-point">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M20 6L9 17l-5-5"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>We begrijpen het aankoopproces van premium badkamers en keukens</span>
                  </div>
                  <div className="niche-point">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M20 6L9 17l-5-5"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Onze aanpak is bewezen bij 35+ keuken- en badkamerbedrijven</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <div className="about-niche__visual">
                <div className="about-photo-frame">
                  <div className="about-photo-frame__glow"></div>
                  <img
                    src="/images/founders-strategy.webp"
                    alt="Jelle en Thomas bespreken een groeistrategie"
                    loading="lazy"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-header">
            <ScrollReveal>
              <h2 className="section-title section-title--white">Wat klanten zeggen</h2>
            </ScrollReveal>
            <a
              href="https://www.google.com/search?q=Groeimaten+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="google-badge"
              aria-label="Bekijk onze Google reviews: 5,0 sterren"
            >
              <svg className="google-badge__g" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              <div className="google-badge__info">
                <span className="google-badge__stars" aria-hidden="true">★★★★★</span>
                <span className="google-badge__text">5,0 · 5 reviews</span>
              </div>
            </a>
          </div>
          <div className="testimonials-grid">
            <ScrollReveal delay={1}>
              <article className="testimonial-card">
                <div className="testimonial-card__stars" aria-label="5 sterren beoordeling" aria-hidden="true">★★★★★</div>
                <blockquote>
                  Zeer tevreden over het contact, hoe de samenwerking wordt onderhouden en de transparantie.
                  Communicatie is erg fijn en er wordt snel geschakeld, hun manier van werken is innovatief en met
                  doorzettingsvermogen. Ze komen zelf met ideeën en houden daarmee de sfeer van de zaak in beeld. Erg
                  fijn!
                </blockquote>
                <div className="testimonial-card__author">
                  <img src="/images/kim-noach.png" alt="Kim Noach" className="author-avatar" width={44} height={44} />
                  <div>
                    <strong>Kim Noach</strong>
                    <span>een maand geleden</span>
                  </div>
                </div>
              </article>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <article className="testimonial-card">
                <div className="testimonial-card__stars" aria-label="5 sterren beoordeling" aria-hidden="true">★★★★★</div>
                <blockquote>
                  Vanaf februari is onze nieuwe website echt goed vindbaar geworden. We zien nog steeds elke maand
                  verbetering: de leads worden steeds kwalitatiever, we krijgen meer serieuze aanvragen en daar komen
                  ook daadwerkelijk opdrachten uit voort. We merken echt duidelijke groei. Wij kunnen jullie absoluut
                  aanbevelen.
                </blockquote>
                <div className="testimonial-card__author">
                  <img
                    src="/images/stoop-keukens.png"
                    alt="Martin Stoop"
                    className="author-avatar"
                    width={44}
                    height={44}
                  />
                  <div>
                    <strong>Martin Stoop</strong>
                    <span>Stoop Keukens · een maand geleden</span>
                  </div>
                </div>
              </article>
            </ScrollReveal>
            <ScrollReveal delay={3}>
              <article className="testimonial-card">
                <div className="testimonial-card__stars" aria-label="5 sterren beoordeling" aria-hidden="true">★★★★★</div>
                <blockquote>
                  Deze jonge enthousiaste ondernemers hebben onze website van Tegro ontwikkeld. Het resultaat mag er
                  zijn. Het was een fijn traject waar op alle vlakken goed meegedacht werd. Ook het onderhoud van de
                  site wordt met veel enthousiasme verzorgd. We zijn er zeer tevreden over.
                </blockquote>
                <div className="testimonial-card__author">
                  <img
                    src="/images/tegro-review.png"
                    alt="Tegro BV"
                    className="author-avatar"
                    width={44}
                    height={44}
                  />
                  <div>
                    <strong>Tegro BV</strong>
                    <span>een maand geleden</span>
                  </div>
                </div>
              </article>
            </ScrollReveal>
            <ScrollReveal delay={4}>
              <article className="testimonial-card">
                <div className="testimonial-card__stars" aria-label="5 sterren beoordeling" aria-hidden="true">★★★★★</div>
                <blockquote>
                  De samenwerking met Thomas en Jelle heb ik als heel prettig ervaren. De communicatie verliep soepel,
                  ze luisterden goed naar mijn wensen en dachten actief mee. Het eindresultaat is een mooie,
                  professionele website die helemaal past bij wat ik voor ogen had. Absoluut een aanrader.
                </blockquote>
                <div className="testimonial-card__author">
                  <img
                    src="/images/mido-ibrahim.png"
                    alt="Mido Ibrahim"
                    className="author-avatar"
                    width={44}
                    height={44}
                  />
                  <div>
                    <strong>Mido Ibrahim</strong>
                    <span>een maand geleden</span>
                  </div>
                </div>
              </article>
            </ScrollReveal>
            <ScrollReveal delay={5}>
              <article className="testimonial-card">
                <div className="testimonial-card__stars" aria-label="5 sterren beoordeling" aria-hidden="true">★★★★★</div>
                <div className="testimonial-card__author">
                  <img
                    src="/images/jan-van-maren.png"
                    alt="Jan Van Maren"
                    className="author-avatar"
                    width={44}
                    height={44}
                  />
                  <div>
                    <strong>Jan Van Maren</strong>
                    <span>Van Maren Tegeltechniek · een maand geleden</span>
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
              <span className="section-label section-label--blue">Kennismaken?</span>
              <h2 className="cta-title">Wij zijn benieuwd naar jouw verhaal</h2>
              <p className="cta-subtitle">
                Plan een vrijblijvend gesprek en ontdek of Groeimaten de juiste partner is voor jouw groeiambitie.
              </p>
              <Link href="/contact" className="btn btn--blue btn--xl">
                Plan je gratis gesprek
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <p className="cta-disclaimer">Geen verplichtingen. Wel eerlijk advies.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

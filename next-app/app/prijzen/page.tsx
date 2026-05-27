import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"
import FaqAccordion from "@/components/FaqAccordion"

export const metadata: Metadata = {
  title: "Investering | Groeimaten",
  description:
    "Geen vaste pakketten. Groeimaten werkt altijd op maat, gebaseerd op jouw bedrijf, jouw situatie en jouw groeidoelen.",
}

const faqItems = [
  {
    question: "Waarom werken jullie niet met vaste pakketten?",
    answer:
      "Omdat elk bedrijf anders is. Een showroom met 5 medewerkers in Groningen heeft andere behoeften dan een premium keukenspecialist in Amsterdam met drie vestigingen. Vaste pakketten leiden tot oplossingen die niet goed passen. Wij beginnen altijd met begrijpen, daarna volgt een voorstel op maat.",
  },
  {
    question: "Wat kost het globaal?",
    answer:
      "De investering hangt volledig af van wat er nodig is. Een indicatie: advertentiebeheer start vanaf €800 per maand en een nieuwe website vanaf €3.000 eenmalig. Wat het voor jou wordt, bespreken we in het kennismakingsgesprek, op basis van jouw situatie, niet een prijslijst.",
  },
  {
    question: "Hoe lang duurt het kennismakingsgesprek?",
    answer:
      "Reken op 30 tot 45 minuten. We stellen gerichte vragen over jouw bedrijf, doelen en huidige situatie. Je kunt vragen stellen, en wij geven direct eerlijke inzichten, ook als we denken dat iets anders beter voor je werkt.",
  },
  {
    question: "Wat als ik niet tevreden ben?",
    answer:
      "Je kunt altijd per maand opzeggen. We werken met duidelijke KPI's die we samen vaststellen. Als we die niet halen, gaan we in gesprek en passen de aanpak aan. Transparantie staat bij ons voorop. Slechte resultaten verstoppen heeft geen zin.",
  },
  {
    question: "Werken jullie ook met kleinere bedrijven?",
    answer:
      "We werken met keuken- en badkamerbedrijven die serieus willen groeien. Grootte is minder relevant dan ambitie. Wat we wel willen weten: ben jij de beslisser, heb je een realistisch budget en wil je echt iets veranderen? Dan kijken we wat we voor jou kunnen betekenen.",
  },
]

export default function PrijzenPage() {
  return (
    <>
      {/* WEBGL BACKGROUND */}
      <canvas id="shaderCanvas" aria-hidden="true"></canvas>

      {/* HERO / MAIN */}
      <main className="pricing-main">
        <ScrollReveal>
          <div className="pricing-header">
            <span className="section-label">Op maat gemaakt</span>
            <h1 className="pricing-title">
              Geen pakketten.
              <br />
              <em>Wel een plan dat past bij jou.</em>
            </h1>
            <p className="pricing-subtitle">
              Elk keuken- of badkamerbedrijf is anders. Daarom beginnen wij altijd met een eerlijk gesprek, zodat we
              precies begrijpen wat jij nodig hebt, en wat het realistisch kost.
            </p>
          </div>
        </ScrollReveal>

        {/* WHY CUSTOM */}
        <ScrollReveal>
          <div className="pricing-why">
            <div className="pricing-why__card">
              <div className="pricing-why__icon" aria-hidden="true">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3>Jouw bedrijf is uniek</h3>
              <p>
                Een showroom van 3 mensen heeft ander nodig dan een keten met vijf vestigingen. Vaste pakketten passen
                simpelweg niet.
              </p>
            </div>
            <div className="pricing-why__card">
              <div className="pricing-why__icon" aria-hidden="true">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4l3 3" />
                </svg>
              </div>
              <h3>We beginnen met begrip</h3>
              <p>
                Voor we iets aanbieden, willen we weten waar je nu staat, wat je droomsituatie is en welke obstakels je
                tegenkomt.
              </p>
            </div>
            <div className="pricing-why__card">
              <div className="pricing-why__icon" aria-hidden="true">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3>Transparant over kosten</h3>
              <p>
                Na ons gesprek weet je exact wat het kost, wat je terugkrijgt en wanneer je dat verwacht. Geen verborgen
                kosten, geen verrassingen.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* SERVICES OVERVIEW */}
        <ScrollReveal>
          <div className="pricing-services">
            <div className="pricing-services__header">
              <span className="section-label">Wat we doen</span>
              <h2 className="pricing-services__title">Drie gebieden. Eén specialist.</h2>
            </div>
            <div className="pricing-services__grid">

              <article className="pricing-service-card">
                <div className="pricing-service-card__num" aria-hidden="true">01</div>
                <div className="pricing-service-card__icon" aria-hidden="true">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>
                <h3>Meta Ads &amp; Funnels</h3>
                <p>
                  Gerichte campagnes die de juiste huiseigenaren bereiken op het moment dat ze nadenken over hun keuken
                  of badkamer. Van advertentie tot gekwalificeerde showroomafspraak.
                </p>
                <ul className="pricing-service-card__list" role="list">
                  <li>Strategie &amp; doelgroepanalyse</li>
                  <li>Campagne-opzet en creatieve uitingen</li>
                  <li>Volledige funnel inclusief leadopvolging</li>
                  <li>Show-up systeem voor hogere no-show preventie</li>
                </ul>
                <Link href="/diensten#meta-ads" className="pricing-service-card__link">
                  Meer over Meta Ads
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </article>

              <article className="pricing-service-card pricing-service-card--featured">
                <div className="pricing-service-card__num" aria-hidden="true">02</div>
                <div className="pricing-service-card__icon" aria-hidden="true">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>
                <h3>Website Development</h3>
                <p>
                  Een website die niet alleen mooi is, maar ook converteert. Gebouwd voor snelheid, vindbaarheid en het
                  overtuigen van de bezoeker die al warm is gemaakt door je advertenties.
                </p>
                <ul className="pricing-service-card__list" role="list">
                  <li>Strategie en wireframes op maat</li>
                  <li>Design gericht op conversie</li>
                  <li>Gebouwd voor Lighthouse-score &gt;90</li>
                  <li>Koppelingen met CRM en tracking</li>
                </ul>
                <Link href="/diensten#websites" className="pricing-service-card__link">
                  Meer over websites
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </article>

              <article className="pricing-service-card">
                <div className="pricing-service-card__num" aria-hidden="true">03</div>
                <div className="pricing-service-card__icon" aria-hidden="true">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </div>
                <h3>SEO &amp; Organische Groei</h3>
                <p>
                  Zorg dat jouw bedrijf wordt gevonden als mensen in jouw regio zoeken naar een nieuwe keuken of
                  badkamer. Langdurige zichtbaarheid die elke maand meer oplevert.
                </p>
                <ul className="pricing-service-card__list" role="list">
                  <li>Zoekwoordenonderzoek voor jouw regio</li>
                  <li>On-page en technische SEO</li>
                  <li>Content strategie en teksten</li>
                  <li>Lokale SEO en Google Maps optimalisatie</li>
                </ul>
                <Link href="/diensten#seo" className="pricing-service-card__link">
                  Meer over SEO
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </article>

            </div>
          </div>
        </ScrollReveal>

        {/* HOW IT WORKS */}
        <ScrollReveal>
          <div className="pricing-process">
            <div className="pricing-process__header">
              <span className="section-label">Hoe het werkt</span>
              <h2>Van gesprek naar samenwerking</h2>
            </div>
            <ol className="pricing-process__steps" role="list">
              <li className="pricing-process__step">
                <span className="pricing-process__num" aria-hidden="true">1</span>
                <div>
                  <h3>Gratis kennismakingsgesprek</h3>
                  <p>
                    We leren jouw bedrijf kennen. Wat zijn je doelen, wie is je klant, wat loopt er al goed en waar zit
                    de pijn? Geen verkooppraatje. Gewoon een eerlijk gesprek.
                  </p>
                </div>
              </li>
              <li className="pricing-process__step">
                <span className="pricing-process__num" aria-hidden="true">2</span>
                <div>
                  <h3>Persoonlijk voorstel</h3>
                  <p>
                    Op basis van jouw situatie maken we een concreet plan. Wat gaan we doen, waarom, en wat is de
                    investering? Transparant en to the point.
                  </p>
                </div>
              </li>
              <li className="pricing-process__step">
                <span className="pricing-process__num" aria-hidden="true">3</span>
                <div>
                  <h3>Jij beslist</h3>
                  <p>
                    Geen druk, geen verkooptrucjes. Je hebt alle informatie die je nodig hebt om een weloverwogen
                    beslissing te nemen. Wij werken alleen met bedrijven waarbij het echt klikt.
                  </p>
                </div>
              </li>
              <li className="pricing-process__step">
                <span className="pricing-process__num" aria-hidden="true">4</span>
                <div>
                  <h3>Samen aan de slag</h3>
                  <p>
                    Na akkoord gaan we snel van start. Binnen twee weken staan de eerste campagnes live of is de
                    website-strategie uitgewerkt.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </ScrollReveal>

        {/* GUARANTEE STRIP */}
        <ScrollReveal>
          <div className="pricing-guarantee">
            <div className="pricing-guarantee__item">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span>Geen langlopend contract</span>
            </div>
            <div className="pricing-guarantee__item">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4l3 3" />
              </svg>
              <span>Opzegbaar per maand</span>
            </div>
            <div className="pricing-guarantee__item">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <span>Resultaatgericht werken</span>
            </div>
            <div className="pricing-guarantee__item">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <span>Persoonlijk aanspreekpunt</span>
            </div>
          </div>
        </ScrollReveal>
      </main>

      {/* FAQ */}
      <section className="pricing-faq">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-label">Veelgestelde vragen</span>
              <h2 className="section-title section-title--white">Wat wil je weten?</h2>
            </div>
          </ScrollReveal>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-section__glow cta-section__glow--1" aria-hidden="true"></div>
        <div className="cta-section__glow cta-section__glow--2" aria-hidden="true"></div>
        <div className="container">
          <ScrollReveal>
            <div className="cta-inner">
              <span className="section-label section-label--blue">Klaar voor het gesprek?</span>
              <h2 className="cta-title">Plan een gratis kennismakingsgesprek</h2>
              <p className="cta-subtitle">
                30 minuten. Geen verplichtingen. Wel een eerlijk beeld van wat mogelijk is voor jouw bedrijf.
              </p>
              <Link href="/contact" className="btn btn--blue btn--xl">
                Gratis gesprek inplannen
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

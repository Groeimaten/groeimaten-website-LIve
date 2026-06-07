import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"
import FaqAccordion from "@/components/FaqAccordion"

export const metadata: Metadata = {
  title: "Plannen | Groeimaten",
  description:
    "Drie trajecten voor keuken- en sanitairbedrijven die willen groeien. Van adverteren tot complete marketing. Kies jouw startpunt.",
}

const faqItems = [
  {
    question: "Waarom staan er geen prijzen bij de plannen?",
    answer:
      "De investering hangt af van jouw situatie: je markt, het aantal vestigingen en welke resultaten je verwacht. In een gesprek geven we je een eerlijk beeld van wat het kost en wat je terugkrijgt. Geen verrassingen achteraf.",
  },
  {
    question: "Kan ik een plan aanpassen of combineren?",
    answer:
      "Absoluut. De drie trajecten zijn startpunten, geen rigide contracten. Als jij iets extra's nodig hebt of juist iets wil weglaten, kijken we hoe we het beste aansluiten bij jouw situatie.",
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
      "We werken met keuken- en sanitairbedrijven die serieus willen groeien. Grootte is minder relevant dan ambitie. Wat we wel willen weten: ben jij de beslisser, heb je een realistisch budget en wil je echt iets veranderen? Dan kijken we wat we voor jou kunnen betekenen.",
  },
]

function CheckIcon() {
  return (
    <svg className="plan-card__check" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="9" fill="currentColor" fillOpacity="0.15" />
      <path d="M5.5 9l2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function PlannenPage() {
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
                <span className="section-label">Wat wij doen</span>
                <h1 className="page-hero__title">
                  Kies jouw traject.
                  <br />
                  <em>Wij leveren de resultaten.</em>
                </h1>
                <p className="page-hero__subtitle">
                  Drie plannen, elk gebouwd voor een andere groeifase. Van puur adverteren tot complete marketing. De investering stemmen we af in een persoonlijk gesprek.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <div className="page-hero__visual">
                <Image
                  src="/images/jelle-thomas-portrait.jpg"
                  alt="Jelle en Thomas van Groeimaten"
                  width={600}
                  height={500}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%", borderRadius: "12px" }}
                  priority
                  quality={90}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <main className="pricing-main">

        {/* PLAN KAARTEN */}
        <ScrollReveal>
          <div className="plan-cards-section">
            <div className="plan-cards-grid">

              {/* Plan 1: Show-up Engine */}
              <article className="plan-card">
                <span className="plan-card__badge">Populair</span>
                <h3 className="plan-card__name">Show-up Engine</h3>
                <p className="plan-card__tagline">Wij leveren de afspraken. Jij sluit de deals.</p>
                <p className="plan-card__trajectory">3 maanden traject</p>
                <ul className="plan-card__features" role="list">
                  <li className="plan-card__feature"><CheckIcon />Meta Ads campagnebeheer</li>
                  <li className="plan-card__feature"><CheckIcon />Real-time opvolging (gebeld binnen 4 uur)</li>
                  <li className="plan-card__feature"><CheckIcon />Social media beheer</li>
                </ul>
                <Link href="/afspraak" className="plan-card__cta">Start de Show-up Engine</Link>
              </article>

              {/* Plan 2: Online Fundament */}
              <article className="plan-card">
                <h3 className="plan-card__name" style={{ marginTop: 0 }}>Online Fundament</h3>
                <p className="plan-card__tagline">Gevonden worden door klanten die al zoeken.</p>
                <p className="plan-card__trajectory">Minimaal 12 maanden</p>
                <ul className="plan-card__features" role="list">
                  <li className="plan-card__feature"><CheckIcon />Website ontwerp &amp; bouw</li>
                  <li className="plan-card__feature"><CheckIcon />Maandelijks websitebeheer</li>
                  <li className="plan-card__feature"><CheckIcon />SEO opzet &amp; maandelijks beheer</li>
                  <li className="plan-card__feature"><CheckIcon />Google profiel beheer (GMB)</li>
                </ul>
                <Link href="/afspraak" className="plan-card__cta">Bouw mijn Fundament</Link>
              </article>

              {/* Plan 3: Groeimaten Totaal */}
              <article className="plan-card plan-card--featured">
                <span className="plan-card__badge plan-card__badge--right plan-card__badge--featured">Meest compleet</span>
                <h3 className="plan-card__name">Groeimaten Totaal</h3>
                <p className="plan-card__tagline">Alles, van content tot conversie. Wij denken overal in mee.</p>
                <p className="plan-card__trajectory">Minimaal 12 maanden</p>
                <ul className="plan-card__features" role="list">
                  <li className="plan-card__feature"><CheckIcon />Alles uit Show-up Engine</li>
                  <li className="plan-card__feature"><CheckIcon />Alles uit Online Fundament</li>
                  <li className="plan-card__feature"><CheckIcon />Totale branding (logo, huisstijl, visuals)</li>
                </ul>
                <Link href="/afspraak" className="plan-card__cta plan-card__cta--featured">Haal het totaalpakket</Link>
              </article>

            </div>
          </div>
        </ScrollReveal>

        {/* HOW IT WORKS */}
        <ScrollReveal>
          <div className="pricing-process pricing-process--split">
            <div className="pricing-process__image">
              <Image
                src="/images/founders-working.webp"
                alt="Groeimaten team aan het werk"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
                sizes="50vw"
              />
            </div>
            <div className="pricing-process__steps-wrap">
              <div className="pricing-process__header">
                <span className="section-label">Hoe het werkt</span>
                <h2>Van gesprek naar samenwerking</h2>
              </div>
              <ol className="pricing-process__steps" role="list">
                <li className="pricing-process__step">
                  <span className="pricing-process__num" aria-hidden="true">1</span>
                  <div>
                    <h3>Gratis kennismakingsgesprek</h3>
                    <p>We leren jouw bedrijf kennen. Wat zijn je doelen, wie is je klant, wat loopt er al goed en waar zit de pijn? Geen verkooppraatje. Gewoon een eerlijk gesprek.</p>
                  </div>
                </li>
                <li className="pricing-process__step">
                  <span className="pricing-process__num" aria-hidden="true">2</span>
                  <div>
                    <h3>Persoonlijk voorstel</h3>
                    <p>Op basis van jouw situatie maken we een concreet plan. Welk traject past het best, wat passen we aan en wat is de investering? Transparant en to the point.</p>
                  </div>
                </li>
                <li className="pricing-process__step">
                  <span className="pricing-process__num" aria-hidden="true">3</span>
                  <div>
                    <h3>Jij beslist</h3>
                    <p>Geen druk, geen verkooptrucjes. Je hebt alle informatie die je nodig hebt om een weloverwogen beslissing te nemen. Wij werken alleen met bedrijven waarbij het echt klikt.</p>
                  </div>
                </li>
                <li className="pricing-process__step">
                  <span className="pricing-process__num" aria-hidden="true">4</span>
                  <div>
                    <h3>Samen aan de slag</h3>
                    <p>Na akkoord gaan we snel van start. Binnen twee weken staan de eerste campagnes live of is de website-strategie uitgewerkt.</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </ScrollReveal>

        {/* GUARANTEE STRIP */}
        <ScrollReveal>
          <div className="pricing-guarantee">
            <div className="pricing-guarantee__item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              <span>Geen langlopend contract</span>
            </div>
            <div className="pricing-guarantee__item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>
              <span>Opzegbaar per maand</span>
            </div>
            <div className="pricing-guarantee__item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
              <span>Resultaatgericht werken</span>
            </div>
            <div className="pricing-guarantee__item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
              <span>Persoonlijk aanspreekpunt</span>
            </div>
          </div>
        </ScrollReveal>
      </main>

      {/* CTA */}
      <section className="cta-split cta-split--dark" id="cta">
        <div className="cta-split__image" style={{ padding: "40px 0 40px 48px", background: "oklch(11% 0.006 60)" }}>
          <div style={{ position: "relative", height: "100%", minHeight: "420px", borderRadius: "12px", overflow: "hidden" }}>
            <Image
              src="/images/jelle-thomas-laptop-standing.jpg"
              alt="Jelle en Thomas van Groeimaten"
              fill
              style={{ objectFit: "cover", objectPosition: "center 20%" }}
              sizes="50vw"
              loading="lazy"
            />
          </div>
        </div>
        <div className="cta-split__content">
          <ScrollReveal>
            <span className="section-label section-label--blue">Klaar voor het gesprek?</span>
            <h2 className="cta-title">Plan een gratis kennismakingsgesprek</h2>
            <p className="cta-subtitle">30 minuten. Geen verplichtingen. Wel een eerlijk beeld van wat mogelijk is voor jouw bedrijf.</p>
            <Link href="/afspraak" className="btn btn--blue btn--xl">
              Gratis gesprek inplannen
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <p className="cta-disclaimer">Geen verplichtingen. Wel eerlijk advies.</p>
          </ScrollReveal>
        </div>
      </section>

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
    </>
  )
}

import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"
import ReviewsMarquee from "@/components/ReviewsMarquee"
import LogoStrip from "@/components/LogoStrip"
import FaqAccordion from "@/components/FaqAccordion"
import KigoTeaser from "@/components/KigoTeaser"
import { KIGO_LIVE } from "@/lib/features"
import { salesFaq } from "@/lib/faq"

const OFFER_DESCRIPTION =
  "15 echte showroomafspraken in 90 dagen, gegarandeerd. Halen we het niet, dan werken we gratis door. Meta Ads en Google Ads voor keuken- en badkamerbedrijven."

export const metadata: Metadata = {
  title: "Groeimaten | 15 showroomafspraken in 90 dagen, gegarandeerd",
  description: OFFER_DESCRIPTION,
  alternates: {
    canonical: "https://groeimaten.com",
  },
  openGraph: {
    title: "Groeimaten | 15 showroomafspraken in 90 dagen, gegarandeerd",
    description: OFFER_DESCRIPTION,
    url: "https://groeimaten.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Groeimaten | 15 showroomafspraken in 90 dagen, gegarandeerd",
    description: OFFER_DESCRIPTION,
  },
}

const pains = [
  {
    title: "Je verkoopteam kan meer aan",
    body: "Je sluit goed. Wat je groei begrenst, is het aantal serieuze klanten dat aan tafel komt.",
  },
  {
    title: "Pieken en dalen in de agenda",
    body: "Druk op zaterdag, stil doordeweeks. Geen vaste instroom, dus geen grip op je omzet.",
  },
  {
    title: "Verkopers kwijt aan rondkijkers",
    body: "Tijd die opgaat aan prijsjagers en mensen die alleen komen kijken.",
  },
]

const fitYes = [
  "Keuken-, badkamer- of tegelzaak in Nederland met een eigen showroom",
  "Je sluit al een groot deel van je afspraken",
  "Je hebt verkoopcapaciteit over",
  "Je wilt meer afspraken, gespreid over de week",
]

const fitNo = [
  "Je showroom is nog niet open",
  "Je bent een montage- of klusbedrijf dat werk zoekt",
  "Je montagecapaciteit zit vol: dan zijn meer afspraken niet je probleem",
]

const steps = [
  {
    n: "01",
    title: "Adverteren op het juiste kopersprofiel",
    body: "Meta Ads en Google Ads, alleen gericht op mensen in jouw regio die nu een keuken of badkamer zoeken.",
  },
  {
    n: "02",
    title: "Nabellen en filteren vóór de afspraak",
    body: "Ons eigen belteam belt elke aanvraag na en checkt wensen, budget en planning. Wie alleen komt rondkijken, plannen we niet in.",
  },
  {
    n: "03",
    title: "Bevestigde afspraak in je agenda",
    body: "Jij krijgt een bevestigde afspraak, geen lijst namen. Herinneringen zorgen dat de klant ook echt in je showroom staat.",
  },
]

const cases = [
  {
    name: "Stoop Keukens",
    result: "45 showroombezoeken",
    detail: "13 nieuwe klanten, bijna €280.000 omzet",
  },
  {
    name: "Marquardt Amersfoort",
    result: "30 showroomafspraken",
    detail: "Sinds januari 2026, voor minder dan €27 per aanvraag",
  },
]

const kigoFaq = {
  question: "Wat is Kigo?",
  answer: "Kigo is een AI-tool die Groeimaten zelf heeft ontwikkeld voor keuken- en badkamerbedrijven. Je klant beleeft zijn nieuwe keuken of badkamer al voordat hij in de showroom staat, en jij krijgt een aanvraag met wensen en stijl erbij.",
}

const faqItems = [...salesFaq, ...(KIGO_LIVE ? [kigoFaq] : [])]

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const Check = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const Cross = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M7 7l10 10M17 7L7 17" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
)

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO: donkere achtergrond voor leesbaarheid, showroomfoto ernaast */}
      <section className="hero hero--split" id="home">
        <div className="hero__glow hero__glow--1" aria-hidden="true" />
        <div className="hero__glow hero__glow--2" aria-hidden="true" />
        <div className="container hero__inner">
          <div className="hero__content">
            <span className="section-label hero-anim hero-anim--1">Voor keuken- en badkamerzaken met showroom</span>
            <h1 className="hero__title hero-anim hero-anim--1">
              15 showroom&shy;afspraken in 90 dagen.<br />
              <em>Gegarandeerd.</em>
            </h1>
            <p className="hero__subtitle hero-anim hero-anim--2">
              Meer serieuze klanten aan tafel voor je verkoopteam. Wij adverteren, bellen elke aanvraag na en zetten een bevestigde afspraak in je agenda. Halen we de 15 niet? Dan werken we gratis door.
            </p>
            <div className="hero__actions hero-anim hero-anim--3">
              <Link href="/afspraak" className="btn btn--blue btn--lg">
                Plan een gratis gesprek <ArrowRight />
              </Link>
              <a href="#resultaten" className="btn btn--ghost btn--lg">Bekijk resultaten</a>
            </div>
            <div className="hero__proof hero-anim hero-anim--4">
              <div className="hero__proof-item">
                <span className="hero__proof-number">5,0 <span style={{ color: "#c9a24c" }}>★</span></span>
                <span className="hero__proof-label">Google beoordeling</span>
              </div>
              <div className="hero__proof-divider" aria-hidden="true" />
              <div className="hero__proof-item">
                <span className="hero__proof-number">35+</span>
                <span className="hero__proof-label">merken geholpen</span>
              </div>
              <div className="hero__proof-divider" aria-hidden="true" />
              <Link href="/over-ons#media" className="hero__proof-item hero__proof-item--press">
                <Image
                  src="/images/magazine-article.webp"
                  alt=""
                  width={56}
                  height={38}
                  className="hero__press-thumb"
                />
                <span className="hero__proof-label">bekend van<br />K&amp;D Magazine</span>
              </Link>
            </div>
          </div>
          <figure className="hero__photo hero-anim hero-anim--2">
            <Image
              src="/images/hero-showrooms.webp"
              alt="Badkamershowroom en keukenshowroom naast elkaar"
              fill
              priority
              quality={90}
              sizes="(min-width: 1024px) 50vw, 100vw"
              style={{ objectFit: "cover" }}
            />
          </figure>
        </div>
      </section>

      {/* REVIEWS: hoog op de pagina */}
      <ReviewsMarquee />

      <div className="lean">
      <LogoStrip />

      {/* PIJNPUNTEN */}
      <section className="lean-section" id="probleem">
        <div className="container">
          <ScrollReveal className="lean-head">
            <h2 className="lean-title">Herken je dit?</h2>
          </ScrollReveal>
          <div className="lean-pains">
            {pains.map((p, i) => (
              <ScrollReveal key={p.title} className="lean-pain" delay={(i + 1) as 1 | 2 | 3}>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="lean-wish">
            <p>
              Wat je eigenlijk wilt: <strong>elke week meer serieuze klanten aan tafel, gespreid over de week.</strong>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* VOOR WIE */}
      <section className="lean-section lean-section--alt" id="voor-wie">
        <div className="container">
          <ScrollReveal className="lean-head">
            <h2 className="lean-title">Voor wie is dit?</h2>
          </ScrollReveal>
          <div className="lean-fit">
            <ScrollReveal className="lean-fit__col lean-fit__col--yes" delay={1}>
              <h3>Wel voor jou</h3>
              <ul>
                {fitYes.map((t) => (
                  <li key={t}><Check /> {t}</li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal className="lean-fit__col lean-fit__col--no" delay={2}>
              <h3>Niet voor jou</h3>
              <ul>
                {fitNo.map((t) => (
                  <li key={t}><Cross /> {t}</li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* MECHANISME */}
      <section className="lean-section lean-section--dark" id="werkwijze">
        <div className="container">
          <ScrollReveal className="lean-head">
            <span className="lean-label">Het Showroom-systeem</span>
            <h2 className="lean-title">Van advertentie tot klant in je showroom</h2>
          </ScrollReveal>
          <div className="lean-steps">
            {steps.map((s, i) => (
              <ScrollReveal key={s.n} className="lean-step" delay={(i + 1) as 1 | 2 | 3}>
                <span className="lean-step__num" aria-hidden="true">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* GARANTIE */}
      <section className="lean-section">
        <div className="container">
          <ScrollReveal className="lean-guarantee">
            <div>
              <span className="lean-label">Onze garantie</span>
              <h2 className="lean-title">15 afspraken in 90 dagen, of we werken gratis door</h2>
            </div>
            <ul className="lean-checks">
              <li><Check /> Alleen afspraken die echt in je showroom plaatsvinden</li>
              <li><Check /> Maandelijks inzicht in aanvragen, afspraken en kosten</li>
              <li><Check /> Geen account managers: je spreekt direct met ons</li>
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* RESULTATEN */}
      <section className="lean-section lean-section--alt" id="resultaten">
        <div className="container">
          <ScrollReveal className="lean-head">
            <span className="lean-label">Resultaten</span>
            <h2 className="lean-title">Wat het klanten oplevert</h2>
          </ScrollReveal>
          <div className="lean-cases">
            {cases.map((c, i) => (
              <ScrollReveal key={c.name} className="lean-case" delay={(i + 1) as 1 | 2}>
                <span className="lean-case__name">{c.name}</span>
                <span className="lean-case__result">{c.result}</span>
                <span className="lean-case__detail">{c.detail}</span>
              </ScrollReveal>
            ))}
          </div>
          <div className="lean-center">
            <Link href="/cases" className="lean-link">Bekijk alle cases <ArrowRight /></Link>
          </div>
        </div>
      </section>

      {KIGO_LIVE && <KigoTeaser />}

      {/* FAQ */}
      <section className="lean-section" id="faq">
        <div className="container">
          <ScrollReveal className="lean-head">
            <h2 className="lean-title">Veelgestelde vragen</h2>
          </ScrollReveal>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="lean-cta" id="cta">
        <div className="container lean-cta__inner">
          <h2>Klaar voor 15 extra showroomafspraken?</h2>
          <p>Plan een gratis gesprek van 30 minuten. We vertellen je eerlijk of het voor jouw bedrijf haalbaar is.</p>
          <Link href="/afspraak" className="btn lean-btn btn--xl">
            Plan een gratis gesprek <ArrowRight />
          </Link>
        </div>
      </section>
      </div>
    </>
  )
}

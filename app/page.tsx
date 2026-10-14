import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"
import LogoStrip from "@/components/LogoStrip"
import FaqAccordion from "@/components/FaqAccordion"
import KigoTeaser from "@/components/KigoTeaser"
import { KIGO_LIVE } from "@/lib/features"

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
    title: "Aanvragen die nooit komen opdagen",
    body: "Je belt na, plant in, en de showroom blijft leeg.",
  },
  {
    title: "De ene maand druk, de andere stil",
    body: "Geen vaste instroom, dus geen grip op je omzet.",
  },
  {
    title: "Uren kwijt aan prijsjagers",
    body: "Mensen die alleen een offerte willen om te vergelijken.",
  },
]

const steps = [
  {
    n: "01",
    title: "Adverteren op het juiste kopersprofiel",
    body: "Meta Ads en Google Ads, alleen gericht op mensen in jouw regio die nu een keuken of badkamer zoeken.",
  },
  {
    n: "02",
    title: "Filteren vóór de afspraak",
    body: "Onze funnel vraagt naar wensen, budget en planning. Wie niet past, haakt af voordat jij er tijd in steekt.",
  },
  {
    n: "03",
    title: "Opvolging tot in de showroom",
    body: "Automatische opvolging zorgt dat de aanvraag een afspraak wordt, en dat de klant ook echt komt.",
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

const reviews = [
  {
    name: "Martin Stoop",
    meta: "Stoop Keukens",
    img: "/images/stoop-keukens.png",
    text: "De leads worden steeds kwalitatiever, we krijgen meer serieuze aanvragen en daar komen ook daadwerkelijk opdrachten uit voort.",
  },
  {
    name: "Kim Noach",
    meta: "Google review",
    img: "/images/kim-noach.png",
    text: "Communicatie is erg fijn en er wordt snel geschakeld, hun manier van werken is innovatief en met doorzettingsvermogen.",
  },
]

const kigoFaq = {
  question: "Wat is Kigo?",
  answer: "Kigo is een AI-tool die Groeimaten zelf heeft ontwikkeld voor keuken- en badkamerbedrijven. Je klant beleeft zijn nieuwe keuken of badkamer al voordat hij in de showroom staat, en jij krijgt een aanvraag met wensen en stijl erbij.",
}

const faqItems = [
  {
    question: "Wat telt als showroomafspraak?",
    answer: "Alleen een afspraak waarbij de klant ook echt in je showroom staat. Aanvragen of no-shows tellen niet mee.",
  },
  {
    question: "Wat als jullie de 15 afspraken niet halen?",
    answer: "Dan werken we gratis door tot de 15 afspraken er zijn. Jij betaalt niets extra.",
  },
  {
    question: "Voor wie is dit?",
    answer: "Voor keuken-, badkamer- en sanitairbedrijven met een showroom die willen groeien. We werken uitsluitend in deze branche.",
  },
  {
    question: "Hoe snel zie ik resultaat?",
    answer: "Campagnes staan meestal binnen een week live. De eerste aanvragen komen vaak al in de eerste week binnen.",
  },
  ...(KIGO_LIVE ? [kigoFaq] : []),
]

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
    <div className="lean">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO: het offer */}
      <section className="lean-hero" id="home">
        <div className="container lean-hero__inner">
          <div className="lean-hero__content">
            <span className="lean-label hero-anim hero-anim--1">Voor keuken- en badkamerbedrijven</span>
            <h1 className="lean-hero__title hero-anim hero-anim--1">
              15 showroomafspraken in 90 dagen. <em>Gegarandeerd.</em>
            </h1>
            <p className="lean-hero__sub hero-anim hero-anim--2">
              Wij vullen je agenda met kopers die echt in je showroom komen. Halen we de 15 niet? Dan werken we gratis door tot het wel lukt.
            </p>
            <div className="lean-hero__actions hero-anim hero-anim--3">
              <Link href="/afspraak" className="btn lean-btn btn--lg">
                Plan een gratis gesprek <ArrowRight />
              </Link>
              <a href="#resultaten" className="lean-link">Bekijk resultaten</a>
            </div>
            <ul className="lean-hero__proof hero-anim hero-anim--4">
              <li><strong>5,0 <span className="lean-star">★</span></strong> op Google</li>
              <li><strong>35+</strong> merken geholpen</li>
              <li>Bekend van <strong>K&amp;D Magazine</strong></li>
            </ul>
          </div>
          <div className="lean-hero__visual hero-anim hero-anim--2">
            <Image
              src="/images/cases/marquardt-adviesgesprek.jpg"
              alt="Adviesgesprek in de showroom van Marquardt Amersfoort"
              fill
              priority
              quality={90}
              sizes="(min-width: 900px) 45vw, 100vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
        </div>
      </section>

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
              Wat je eigenlijk wilt: <strong>elke week een volle agenda met kopers die passen bij jouw showroom.</strong>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* MECHANISME */}
      <section className="lean-section lean-section--alt" id="werkwijze">
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
          <div className="lean-reviews">
            {reviews.map((r) => (
              <ScrollReveal key={r.name} as="figure" className="lean-review">
                <div className="lean-review__stars" aria-label="5 sterren">★★★★★</div>
                <blockquote>&ldquo;{r.text}&rdquo;</blockquote>
                <figcaption>
                  <img src={r.img} alt="" width={40} height={40} loading="lazy" />
                  <span><strong>{r.name}</strong>{r.meta}</span>
                </figcaption>
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
  )
}

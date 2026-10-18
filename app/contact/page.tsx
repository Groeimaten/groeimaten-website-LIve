import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"
import FaqAccordion from "@/components/FaqAccordion"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Contact | Groeimaten — gratis gesprek inplannen",
  description:
    "Neem contact op met Groeimaten. 15 showroomafspraken in 90 dagen, gegarandeerd. Plan een gratis gesprek voor jouw keuken- of badkamerbedrijf.",
  alternates: {
    canonical: "https://groeimaten.com/contact",
  },
  openGraph: {
    title: "Contact | Groeimaten — plan een gratis gesprek",
    description:
      "Neem contact op met Groeimaten. Plan een gratis gesprek voor jouw keuken- of badkamerbedrijf.",
    url: "https://groeimaten.com/contact",
  },
}

const faqItems = [
  {
    question: "Is het gesprek echt gratis?",
    answer:
      "Ja. We kijken samen naar jouw situatie en vertellen eerlijk of 15 showroomafspraken in 90 dagen haalbaar zijn. Geen verplichtingen.",
  },
  {
    question: "Hoe snel kan ik starten?",
    answer:
      "Na het gesprek kunnen we meestal binnen een week starten. Campagnes staan vaak binnen 48 uur live.",
  },
  {
    question: "Werken jullie in heel Nederland?",
    answer:
      "Ja. We werken landelijk met keuken- en badkamerbedrijven. Alles gaat digitaal, dus locatie is geen beperking.",
  },
]

export default function ContactPage() {
  return (
    <div className="lean">
      <section className="lean-section lean-contact">
        <div className="container">
          <div className="lean-contact__grid">
            <ScrollReveal className="lean-contact__intro">
              <span className="lean-label">Contact</span>
              <h1 className="lean-hero__title lean-contact__title">
                Laten we kennismaken.
              </h1>
              <p className="lean-hero__sub">
                15 showroomafspraken in 90 dagen, gegarandeerd. Benieuwd of dat voor jouw bedrijf haalbaar is? Plan direct een gesprek of stuur ons een bericht.
              </p>

              <div className="lean-contact__card">
                <h2>Liever direct een gesprek?</h2>
                <p>Kies zelf een moment. 30 minuten, geen verplichtingen.</p>
                <Link href="/afspraak" className="btn lean-btn btn--lg">
                  Plan een afspraak
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
              </div>

              <dl className="lean-contact__details">
                <div>
                  <dt>E-mail</dt>
                  <dd><a href="mailto:info@groeimaten.com">info@groeimaten.com</a></dd>
                </div>
                <div>
                  <dt>Telefoon</dt>
                  <dd><a href="tel:+31629193444">+31 6 29193444</a></dd>
                </div>
                <div>
                  <dt>Bereikbaar</dt>
                  <dd>Ma t/m zo, 09:00 - 17:00</dd>
                </div>
                <div>
                  <dt>Google</dt>
                  <dd>
                    <a href="https://www.google.com/maps?cid=390254304839502817" target="_blank" rel="noopener noreferrer">
                      <span className="lean-star">★★★★★</span> 5,0 · 6 reviews
                    </a>
                  </dd>
                </div>
              </dl>
            </ScrollReveal>

            <ScrollReveal delay={2} className="lean-contact__form">
              <h2>Stuur ons een bericht</h2>
              <p>We reageren binnen 24 uur.</p>
              <ContactForm />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="lean-section lean-section--alt">
        <div className="container">
          <ScrollReveal className="lean-head">
            <h2 className="lean-title">Veelgestelde vragen</h2>
          </ScrollReveal>
          <FaqAccordion items={faqItems} />
        </div>
      </section>
    </div>
  )
}

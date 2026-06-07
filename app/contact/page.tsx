import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"
import FaqAccordion from "@/components/FaqAccordion"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Contact | Groeimaten",
  description:
    "Neem contact op met Groeimaten. Plan een gratis adviesgesprek en ontdek wat wij voor jouw keuken- of sanitairbedrijf kunnen doen.",
}

const faqItems = [
  {
    question: "Is het adviesgesprek echt gratis?",
    answer:
      "Ja, 100%. We kijken samen naar jouw situatie, geven eerlijk advies en vertellen wat we voor je kunnen doen. Geen verkooptruc, geen verplichtingen.",
  },
  {
    question: "Hoe snel kan ik starten?",
    answer:
      "Na het adviesgesprek kunnen we meestal binnen een week starten. Campagnes zijn vaak binnen 48 uur live. Bij websites hangt de doorlooptijd af van de complexiteit.",
  },
  {
    question: "Werken jullie ook buiten de Randstad?",
    answer:
      "Absoluut. We werken landelijk met keuken- en sanitairbedrijven in heel Nederland. Alles gaat digitaal, dus locatie is geen beperking.",
  },
]

export default function ContactPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero page-hero--fullscreen page-hero--photo">
        <div className="page-hero__bg" aria-hidden="true">
          <Image
            src="/images/jelle-thomas-laptops.jpg"
            alt=""
            fill
            priority
            quality={100}
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center 30%" }}
          />
          <div className="page-hero__bg-overlay" />
        </div>
        <div className="container" style={{ position: "relative", zIndex: 3 }}>
          <ScrollReveal>
            <div className="page-hero__content">
              <span className="section-label">Contact</span>
              <h1 className="page-hero__title">
                Laten we
                <br />
                <em>kennismaken.</em>
              </h1>
              <p className="page-hero__subtitle">
                Benieuwd wat Groeimaten voor jouw keuken- of sanitairbedrijf kan betekenen? Plan een vrijblijvend
                adviesgesprek of stuur ons een bericht.
              </p>
              <div className="contact-hero-proof">
                <a href="https://www.google.com/search?q=Groeimaten+reviews" target="_blank" rel="noopener noreferrer" className="contact-hero-proof__google">
                  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                  <span className="contact-hero-proof__stars">★★★★★</span>
                  <span className="contact-hero-proof__score">5,0</span>
                  <span className="contact-hero-proof__count">· 6 reviews</span>
                </a>
                <div className="contact-hero-proof__divider" />
                <div className="contact-hero-proof__stat">
                  <span className="contact-hero-proof__num">35+</span>
                  <span className="contact-hero-proof__label">klanten geholpen</span>
                </div>
                <div className="contact-hero-proof__divider" />
                <div className="contact-hero-proof__stat">
                  <span className="contact-hero-proof__num">100%</span>
                  <span className="contact-hero-proof__label">keuken &amp; sanitair</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CONTACT SECTIE */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-widget-grid">

            {/* LINKS: Afspraak CTA + Thomas foto */}
            <div className="contact-widget-left">
              <span className="section-label">Afspraak inplannen</span>
              <h2 className="contact-widget-title">Plan direct een<br /><em>gratis gesprek</em></h2>
              <p className="contact-widget-sub">Kies een moment dat jou uitkomt. 30 minuten, geen verplichtingen. Thomas staat klaar om jouw situatie te bespreken.</p>
              <Link href="/afspraak" className="btn btn--blue btn--lg" style={{ marginTop: "8px", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                Plan een afspraak
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
              <div className="contact-thomas-photo">
                <Image
                  src="/images/thomas-portrait.webp"
                  alt="Thomas Ghobadi — Groeimaten"
                  width={800}
                  height={1200}
                  className="contact-thomas-photo__img"
                />
              </div>
            </div>

            {/* RECHTS: Direct contact + formulier */}
            <ScrollReveal delay={2}>
              <div className="contact-right-col">

                {/* Direct contact */}
                <div className="contact-info-card">
                  <h3>Direct contact</h3>
                  <div className="contact-info-item">
                    <div className="contact-info-item__icon" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.8" />
                        <path d="m22 6-10 7L2 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <h4>E-mail</h4>
                      <a href="mailto:info@groeimaten.com">info@groeimaten.com</a>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="contact-info-item__icon" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="1.8" />
                      </svg>
                    </div>
                    <div>
                      <h4>Telefoon</h4>
                      <a href="tel:+31629193444">+31 6 29193444</a>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="contact-info-item__icon" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" />
                        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div>
                      <h4>Openingstijden</h4>
                      <p>Maandag t/m zondag, 09:00 - 17:00</p>
                    </div>
                  </div>
                </div>

                {/* Formulier */}
                <div className="contact-form-wrapper">
                <h2 className="contact-form__title">Stuur ons een bericht</h2>
                <p className="contact-form__subtitle">
                  Vul onderstaand formulier in en we nemen binnen 24 uur contact met je op.
                </p>
                <ContactForm />
              </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-label">Veelgestelde vragen</span>
              <h2 className="section-title section-title--white">Voordat je contact opneemt</h2>
            </div>
          </ScrollReveal>
          <FaqAccordion items={faqItems} />
        </div>
      </section>
    </>
  )
}

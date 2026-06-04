import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"
import FaqAccordion from "@/components/FaqAccordion"

export const metadata: Metadata = {
  title: "Contact | Groeimaten",
  description:
    "Neem contact op met Groeimaten. Plan een gratis adviesgesprek en ontdek wat wij voor jouw keuken- of badkamerbedrijf kunnen doen.",
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
      "Absoluut. We werken landelijk met keuken- en badkamerbedrijven in heel Nederland. Alles gaat digitaal, dus locatie is geen beperking.",
  },
]

export default function ContactPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero page-hero--compact page-hero--photo">
        <div className="page-hero__bg" aria-hidden="true">
          <Image
            src="/images/founders-strategy.webp"
            alt=""
            fill
            priority
            quality={85}
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center 20%" }}
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
                Benieuwd wat Groeimaten voor jouw keuken- of badkamerbedrijf kan betekenen? Plan een vrijblijvend
                adviesgesprek of stuur ons een bericht.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-inner">
            {/* FORM */}
            <ScrollReveal>
              <div className="contact-form-wrapper">
                <h2 className="contact-form__title">Stuur ons een bericht</h2>
                <p className="contact-form__subtitle">
                  Vul onderstaand formulier in en we nemen binnen 24 uur contact met je op.
                </p>

                <form className="contact-form" id="contactForm" action="#" method="POST">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="naam">Naam *</label>
                      <input type="text" id="naam" name="naam" required placeholder="Jouw volledige naam" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="bedrijf">Bedrijfsnaam *</label>
                      <input type="text" id="bedrijf" name="bedrijf" required placeholder="Naam van je bedrijf" />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">E-mailadres *</label>
                      <input type="email" id="email" name="email" required placeholder="naam@bedrijf.nl" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="telefoon">Telefoonnummer</label>
                      <input type="tel" id="telefoon" name="telefoon" placeholder="06 - 12345678" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="dienst">Waar ben je in geïnteresseerd?</label>
                    <select id="dienst" name="dienst">
                      <option value="">Selecteer een optie</option>
                      <option value="meta-ads">Meta Ads &amp; Funnels</option>
                      <option value="website">Website Development</option>
                      <option value="seo">Google &amp; AI Ranking</option>
                      <option value="compleet">Compleet pakket</option>
                      <option value="anders">Anders</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="bericht">Bericht *</label>
                    <textarea
                      id="bericht"
                      name="bericht"
                      rows={5}
                      required
                      placeholder="Vertel ons kort over jouw bedrijf en wat je wilt bereiken..."
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn--blue btn--lg contact-form__submit">
                    Verstuur bericht
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </form>
              </div>
            </ScrollReveal>

            {/* SIDEBAR */}
            <ScrollReveal delay={2}>
              <div className="contact-sidebar">
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
                        <path
                          d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        />
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

                <div className="contact-info-card">
                  <h3>Liever direct een gesprek?</h3>
                  <p>
                    Plan direct een vrijblijvend adviesgesprek van 30 minuten. We kijken samen naar jouw situatie en
                    vertellen je eerlijk wat we voor je kunnen doen.
                  </p>
                  <a
                    href="mailto:info@groeimaten.com"
                    className="btn btn--blue btn--lg"
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    Plan een adviesgesprek
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>

                <div className="contact-info-card contact-info-card--dark">
                  <h3>Volg ons</h3>
                  <div className="footer__socials" style={{ marginTop: "16px" }}>
                    <a
                      href="https://www.linkedin.com/company/groeimaten/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/groeimaten/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    </a>
                    <a
                      href="https://www.facebook.com/groeimaten/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </a>
                  </div>
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

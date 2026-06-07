import type { Metadata } from "next"
import Image from "next/image"
import ScrollReveal from "@/components/ScrollReveal"
import BookingWidget from "@/components/BookingWidget"

export const metadata: Metadata = {
  title: "Afspraak inplannen | Groeimaten",
  description: "Plan een gratis kennismakingsgesprek met Thomas. 30 minuten, geen verplichtingen.",
}

export default function AfspraakPage() {
  return (
    <section className="booking-section">
      <div className="container">
        <div className="booking-inner">

          {/* Links: Thomas + intro */}
          <ScrollReveal className="booking-left">
            <span className="section-label">Persoonlijk gesprek</span>
            <h1 className="booking-title">
              Plan een gratis<br /><em>kennismakings&shy;gesprek</em>
            </h1>
            <p className="booking-sub">
              30 minuten, geen verplichtingen. Thomas staat klaar om jouw situatie te bespreken en eerlijk advies te geven over wat wij voor jouw bedrijf kunnen betekenen.
            </p>
            <ul className="booking-checklist">
              <li>Analyse van jouw huidige aanpak</li>
              <li>Concreet advies zonder verkooptruc</li>
              <li>Wij werken uitsluitend voor keuken &amp; sanitair</li>
            </ul>
            <div className="booking-thomas">
              <div className="booking-thomas__photo">
                <Image
                  src="/images/thomas-portrait.webp"
                  alt="Thomas Ghobadi — Groeimaten"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center 20%" }}
                  sizes="200px"
                  quality={90}
                />
              </div>
              <div className="booking-thomas__info">
                <strong>Thomas Ghobadi</strong>
                <span>CEO · Websites &amp; Klantcontact</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Rechts: Widget */}
          <ScrollReveal delay={2} className="booking-right">
            <BookingWidget />
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}

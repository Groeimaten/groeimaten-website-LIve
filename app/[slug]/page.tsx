import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import BookingWidget from "@/components/BookingWidget"
import TaartVideo from "@/components/TaartVideo"
import { TAART_BEDRIJVEN, getTaartBedrijf } from "@/lib/taartaanval"

// Persoonlijke taartaanval-pagina's (groeimaten.com/<slug>). Alleen de slugs uit
// lib/taartaanval.ts bestaan; al het andere geeft een 404. Niet indexeren.
export const dynamicParams = false

export function generateStaticParams() {
  return TAART_BEDRIJVEN.map((b) => ({ slug: b.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const b = getTaartBedrijf(slug)
  if (!b) return {}
  return {
    title: `Voor ${b.naam}`,
    description: `Een persoonlijke boodschap van Thomas voor ${b.naam}.`,
    robots: { index: false, follow: false },
  }
}

export default async function TaartPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const b = getTaartBedrijf(slug)
  if (!b) notFound()

  return (
    <>
      <section className="taart-hero">
        <div className="container taart-hero__inner">
          <span className="section-label">Voor het team van {b.naam}</span>
          <h1 className="taart-title">
            Smaakte de taart, <em>{b.kort}</em>?
          </h1>
          <p className="taart-haakje">{b.haakje}</p>
          <p className="taart-sub">
            Thomas heeft een korte video opgenomen, speciaal voor {b.naam}.
          </p>
          <TaartVideo slug={b.slug} naam={b.naam} video={b.video} />
        </div>
      </section>

      <section className="booking-section taart-booking" id="plannen">
        <div className="container">
          <div className="booking-inner">
            <div className="booking-left">
              <span className="section-label">Volgende stap</span>
              <h2 className="booking-title">
                Plan een gesprek<br /><em>met Thomas</em>
              </h2>
              <p className="booking-sub">
                30 minuten, geen verplichtingen. We kijken samen hoeveel extra showroomafspraken er voor {b.naam} in {b.plaats} en omgeving te halen zijn.
              </p>
              <ul className="booking-checklist">
                <li>15 showroomafspraken in 90 dagen, gegarandeerd</li>
                <li>Concreet advies voor jullie regio</li>
                <li>Wij werken uitsluitend voor keuken &amp; sanitair</li>
              </ul>
              <div className="booking-thomas">
                <div className="booking-thomas__photo">
                  <Image
                    src="/images/thomas-portrait.webp"
                    alt="Thomas Ghobadi, Groeimaten"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center 20%" }}
                    sizes="200px"
                    quality={90}
                  />
                </div>
                <div className="booking-thomas__info">
                  <strong>Thomas Ghobadi</strong>
                  <span>CEO · Groeimaten</span>
                </div>
              </div>
            </div>
            <div className="booking-right">
              <BookingWidget />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

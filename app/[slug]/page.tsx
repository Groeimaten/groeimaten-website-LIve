import type { Metadata } from "next"
import { notFound } from "next/navigation"
import ReviewsMarquee from "@/components/ReviewsMarquee"
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

      <ReviewsMarquee />
    </>
  )
}

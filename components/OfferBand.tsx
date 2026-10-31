"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

// Pagina's die de belofte al in hun eigen hero of CTA hebben.
const HIDDEN_PATHS = [
  "/",
  "/contact",
  "/afspraak",
  "/privacy",
  "/diensten",
  "/cases",
  "/plannen",
  "/over-ons",
  "/sitemap-overzicht",
  "/kigo",
]

export default function OfferBand() {
  const pathname = usePathname()
  if (HIDDEN_PATHS.includes(pathname)) return null

  return (
    <section className="offer-band" aria-label="Onze belofte">
      <div className="container offer-band__inner">
        <div>
          <span className="offer-band__label">Onze belofte</span>
          <p className="offer-band__title">
            15 showroomafspraken in 90 dagen. <em>Gegarandeerd.</em>
          </p>
          <p className="offer-band__sub">Halen we het niet, dan werken we gratis door tot het wel lukt.</p>
        </div>
        <Link href="/afspraak" className="btn btn--blue btn--lg">
          Plan een gratis gesprek
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </section>
  )
}

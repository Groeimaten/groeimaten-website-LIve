"use client"

import { useEffect, useRef, useState } from "react"
import Script from "next/script"

const BOOKING_URL = "https://link.growzy.io/widget/booking/fsskVvL2uoAh0tcbAXtj"

// Het iframe staat direct in de server-HTML, zodat zoekmachines en AI-crawlers
// zonder JavaScript zien dat hier een afspraak gepland kan worden.
export default function BookingWidget() {
  const ref = useRef<HTMLDivElement>(null)
  const [loaded, setLoaded] = useState(false)

  // Valt onLoad weg omdat het iframe al geladen was vóór hydratie, toon het dan toch.
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 2500)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
    <div ref={ref} style={{ minHeight: "700px", position: "relative" }}>
      {!loaded && (
        <div style={{
          position: "absolute", inset: 0,
          background: "rgba(255,255,255,0.03)",
          borderRadius: "8px",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "rgba(255,255,255,0.4)", fontSize: "0.9rem", gap: "10px"
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Agenda laden…
        </div>
      )}
      <>
          <Script src="https://link.growzy.io/js/form_embed.js" strategy="afterInteractive" />
          <iframe
            src={BOOKING_URL}
            style={{ width: "100%", border: "none", minHeight: "700px", borderRadius: "8px", opacity: loaded ? 1 : 0, transition: "opacity 0.3s", display: "block" }}
            id="fsskVvL2uoAh0tcbAXtj_1780588232352"
            title="Afspraak inplannen"
            onLoad={() => setLoaded(true)}
          />
      </>
    </div>
    <p style={{ marginTop: "12px", fontSize: "0.85rem", color: "rgba(255,255,255,0.5)" }}>
      Laadt de agenda niet? <a href={BOOKING_URL} target="_blank" rel="noopener" style={{ textDecoration: "underline" }}>Open de agenda in een nieuw venster</a> of <a href="/contact" style={{ textDecoration: "underline" }}>neem contact op</a>.
    </p>
    </>
  )
}

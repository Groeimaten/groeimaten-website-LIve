"use client"

import { useEffect, useRef, useState } from "react"
import Script from "next/script"

export default function BookingWidget() {
  const ref = useRef<HTMLDivElement>(null)
  const [loaded, setLoaded] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { rootMargin: "200px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
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
      {visible && (
        <>
          <Script src="https://link.growzy.io/js/form_embed.js" strategy="afterInteractive" />
          <iframe
            src="https://link.growzy.io/widget/booking/fsskVvL2uoAh0tcbAXtj"
            style={{ width: "100%", border: "none", minHeight: "700px", borderRadius: "8px", opacity: loaded ? 1 : 0, transition: "opacity 0.3s", display: "block" }}
            id="fsskVvL2uoAh0tcbAXtj_1780588232352"
            title="Afspraak inplannen"
            onLoad={() => setLoaded(true)}
          />
        </>
      )}
    </div>
  )
}

"use client"

import { useRef, useState } from "react"

// Touch: alleen pauzeren zolang je de slider ingedrukt houdt (kort tikken laat hem doorlopen).
// Muis: pauzeren bij hover blijft via CSS (@media (hover: hover)).
const HOLD_MS = 250

export default function ReviewsTrack({ children }: { children: React.ReactNode }) {
  const [held, setHeld] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  const release = () => {
    clearTimeout(timer.current)
    setHeld(false)
  }

  return (
    <div
      className="reviews-marquee__track"
      data-held={held ? "" : undefined}
      onPointerDown={(e) => {
        if (e.pointerType === "mouse") return
        clearTimeout(timer.current)
        timer.current = setTimeout(() => setHeld(true), HOLD_MS)
      }}
      onPointerUp={release}
      onPointerCancel={release}
      onPointerLeave={release}
      onContextMenu={(e) => { if (held) e.preventDefault() }}
    >
      {children}
    </div>
  )
}

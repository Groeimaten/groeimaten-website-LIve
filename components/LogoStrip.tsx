"use client"

import { useEffect, useRef } from "react"

const logos = [
  { src: "/logos/marquardt-slider.svg", alt: "Marquardt Küchen",   noFilter: true, h: 44 },
  { src: "/logos/stoop-slider.svg",     alt: "Stoop Keukens",      noFilter: true, h: 44 },
  { src: "/logos/tegro-slider.svg",     alt: "Tegro",               noFilter: true, h: 44 },
  { src: "/logos/grando-slider.svg",    alt: "Grando",              noFilter: true, h: 22 },
  { src: "/logos/sanisale-slider.svg",  alt: "Sanisale",            noFilter: true, h: 38 },
  { src: "/logos/ter-haar-new.svg",     alt: "Ter Haar",            noFilter: true, h: 36 },
  { src: "/logos/kort-slider.svg",      alt: "Kort Keukens",        noFilter: true, h: 44 },
]

function buildProgressiveBlur(container: HTMLElement, direction: "left" | "right") {
  const LAYERS = 8
  const BLUR_INTENSITY = 0.9
  const angle = direction === "left" ? 270 : 90
  const segSize = 1 / (LAYERS + 1)

  for (let i = 0; i < LAYERS; i++) {
    const positions = [i, i + 1, i + 2, i + 3].map((p) => p * segSize)
    const stops = positions
      .map((pos, idx) => `rgba(255,255,255,${idx === 1 || idx === 2 ? 1 : 0}) ${(pos * 100).toFixed(1)}%`)
      .join(", ")
    const gradient = `linear-gradient(${angle}deg, ${stops})`
    const blurPx = (i * BLUR_INTENSITY).toFixed(2) + "px"

    const div = document.createElement("div")
    div.className = "logo-blur-layer"
    div.style.cssText = `backdrop-filter:blur(${blurPx});-webkit-backdrop-filter:blur(${blurPx});mask-image:${gradient};-webkit-mask-image:${gradient}`
    container.appendChild(div)
  }
}

export default function LogoStrip() {
  const trackRef = useRef<HTMLDivElement>(null)
  const blurLeftRef = useRef<HTMLDivElement>(null)
  const blurRightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (blurLeftRef.current && !blurLeftRef.current.children.length) {
      buildProgressiveBlur(blurLeftRef.current, "left")
    }
    if (blurRightRef.current && !blurRightRef.current.children.length) {
      buildProgressiveBlur(blurRightRef.current, "right")
    }
  }, [])

  return (
    <section className="logo-strip-section" aria-label="Zij vertrouwen op Groeimaten">
      <p className="logo-strip-label">ZIJ VERTROUWEN OP GROEIMATEN</p>
      <div className="logo-strip">
        <div ref={blurLeftRef} className="logo-blur logo-blur--left" aria-hidden="true" />
        <div ref={trackRef} className="logo-track" id="logoTrack">
          {[...logos, ...logos].map((logo, i) => (
            <img
              key={i}
              src={logo.src}
              alt={logo.alt}
              className={logo.noFilter ? "logo-no-filter" : ""}
              style={{ height: `${logo.h}px` }}
            />
          ))}
        </div>
        <div ref={blurRightRef} className="logo-blur logo-blur--right" aria-hidden="true" />
      </div>
    </section>
  )
}

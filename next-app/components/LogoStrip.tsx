"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const logos = [
  { src: "/logos/marquardt.webp", alt: "Marquardt Küchen", noFilter: true },
  { src: "/logos/sanisale.png", alt: "Sanisale" },
  { src: "/logos/stoop-keukens.png", alt: "Stoop Keukens" },
  { src: "/logos/grando.svg", alt: "Grando" },
  { src: "/logos/ter-haar.png", alt: "Ter Haar" },
  { src: "/logos/Feenstra-Badkamers.svg", alt: "Feenstra Badkamers" },
  { src: "/logos/Ontwerp-zonder-titel-79.png", alt: "Kort Keukens" },
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

    const track = trackRef.current
    if (!track) return
    const onEnter = () => { track.style.animationDuration = "80s" }
    const onLeave = () => { track.style.animationDuration = "30s" }
    track.addEventListener("mouseenter", onEnter)
    track.addEventListener("mouseleave", onLeave)
    return () => {
      track.removeEventListener("mouseenter", onEnter)
      track.removeEventListener("mouseleave", onLeave)
    }
  }, [])

  return (
    <section className="logo-strip-section" aria-label="Zij vertrouwen op Groeimaten">
      <p className="logo-strip-label">ZIJ VERTROUWEN OP GROEIMATEN</p>
      <div className="logo-strip">
        <div ref={blurLeftRef} className="logo-blur logo-blur--left" aria-hidden="true" />
        <div ref={trackRef} className="logo-track" id="logoTrack">
          {[...logos, ...logos].map((logo, i) => (
            <img key={i} src={logo.src} alt={logo.alt} className={logo.noFilter ? "logo-no-filter" : ""} />
          ))}
        </div>
        <div ref={blurRightRef} className="logo-blur logo-blur--right" aria-hidden="true" />
      </div>
    </section>
  )
}

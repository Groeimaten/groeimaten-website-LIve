"use client"

import { useState } from "react"
import Image from "next/image"

const cases = [
  {
    tag: "Meta Ads",
    name: "Stoop Keukens",
    desc: "Gerichte Meta Ads funnel met automatische lead-opvolging. Van onvoorspelbare instroom naar 49 showroomafspraken en €110.000 extra omzet in 10 maanden.",
    stat1: { num: "€110.000", label: "Extra omzet" },
    stat2: { num: "49", label: "Afspraken in 10 mnd" },
    imgSrc: "/images/cases/stoop-erika.jpg",
    imgAlt: "Stoop Keukens",
    imgPreviewSrc: "/images/cases/marquardt-adviesgesprek.jpg",
    imgPreviewAlt: "Marquardt Amersfoort",
  },
  {
    tag: "Meta Ads",
    name: "Marquardt Amersfoort",
    desc: "Gerichte Meta Ads campagnes op het premium kopersprofiel in de regio Amersfoort. Focus op kwaliteit boven kwantiteit.",
    stat1: { num: "21", label: "Afspraken in 150 dagen" },
    stat2: { num: "€31", label: "Kosten per lead" },
    imgSrc: "/images/cases/marquardt-adviesgesprek.jpg",
    imgAlt: "Marquardt Amersfoort",
    imgPreviewSrc: "/images/cases/stoop-erika.jpg",
    imgPreviewAlt: "Stoop Keukens",
  },
  {
    tag: "Website + Webshop",
    name: "Ter Haar Tegeltechniek",
    desc: "Drie verouderde, trage websites samengevoegd tot één ultrasnelle moderne webshop. Nu meer dan 400 sanitairproducten direct online te bestellen.",
    stat1: { num: "400+", label: "Producten online" },
    stat2: { num: "3→1", label: "Sites samengevoegd" },
    imgSrc: "/images/voor-na/ter-haar-nieuw.png",
    imgAlt: "Ter Haar Tegeltechniek",
    imgPreviewSrc: "/images/cases/marquardt-showroom.webp",
    imgPreviewAlt: "Marquardt Amersfoort",
  },
]

export default function CasesSlider() {
  const [active, setActive] = useState(0)
  const [fading, setFading] = useState(false)

  function goTo(index: number) {
    setFading(true)
    setTimeout(() => {
      setActive(index)
      setFading(false)
    }, 180)
  }

  function prev() { goTo((active - 1 + cases.length) % cases.length) }
  function next() { goTo((active + 1) % cases.length) }

  const c = cases[active]

  return (
    <div className="cs-inner">
      <div className="cs-meta" style={{ opacity: fading ? 0 : 1, transition: "opacity 0.18s" }}>
        <span className="cs-tag">{c.tag}</span>
        <h3 className="cs-name">{c.name}</h3>
        <p className="cs-desc">{c.desc}</p>
        <div className="cs-stats">
          <div className="cs-stat">
            <span className="cs-stat__num">{c.stat1.num}</span>
            <span className="cs-stat__label">{c.stat1.label}</span>
          </div>
          <div className="cs-stat">
            <span className="cs-stat__num">{c.stat2.num}</span>
            <span className="cs-stat__label">{c.stat2.label}</span>
          </div>
        </div>
        <div className="cs-nav">
          <button className="cs-btn" onClick={prev} aria-label="Vorige case">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="cs-btn" onClick={next} aria-label="Volgende case">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        <div className="cs-dots">
          {cases.map((_, i) => (
            <button
              key={i}
              className={`cs-dot${active === i ? " cs-dot--active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Case ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="cs-images">
        <div className="cs-img cs-img--main">
          <Image src={c.imgSrc} alt={c.imgAlt} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 70vw" />
          <span className="cs-img-label">{c.imgAlt}</span>
        </div>
      </div>
    </div>
  )
}

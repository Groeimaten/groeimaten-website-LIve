"use client"

import { useState } from "react"
import Image from "next/image"

const cases = [
  {
    tag: "Website + Meta Ads",
    name: "Stoop Keukens",
    desc: "Complete website redesign en doorlopende Meta Ads campagne. Van incidentele aanvragen naar een stabiele stroom kwalitatieve showroomafspraken.",
    stat1: { num: "+500%", label: "Meer afspraken" },
    stat2: { num: "82%", label: "Show-up rate" },
    imgSrc: "/images/founders-strategy.webp",
    imgAlt: "Stoop Keukens: resultaten",
    imgPreviewSrc: "/images/founders-laptop.webp",
    imgPreviewAlt: "Tegro",
  },
  {
    tag: "SEO + Meta Ads",
    name: "Tegro",
    desc: "Lokale SEO en gerichte advertentiecampagnes voor een tegelbedrijf. Meer zichtbaarheid in de regio en kwalitatieve aanvragen.",
    stat1: { num: "+180%", label: "Meer aanvragen" },
    stat2: { num: "Top 3", label: "Google rankings" },
    imgSrc: "/images/founders-laptop.webp",
    imgAlt: "Tegro: campagne resultaten",
    imgPreviewSrc: "/images/founders-working.webp",
    imgPreviewAlt: "Marquardt",
  },
  {
    tag: "Website + SEO",
    name: "Marquardt Amersfoort",
    desc: "Nieuwe website en SEO-strategie voor een premium keukenshowroom. Hogere zichtbaarheid en meer showroombezoeken.",
    stat1: { num: "+210%", label: "Organisch verkeer" },
    stat2: { num: "+65%", label: "Showroombezoeken" },
    imgSrc: "/images/founders-working.webp",
    imgAlt: "Marquardt: website",
    imgPreviewSrc: "/images/founders-strategy.webp",
    imgPreviewAlt: "Stoop Keukens",
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
          <Image src={c.imgSrc} alt={c.imgAlt} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 55vw" />
          <span className="cs-img-label">{c.imgAlt}</span>
        </div>
        <div className="cs-img cs-img--preview">
          <Image src={c.imgPreviewSrc} alt={c.imgPreviewAlt} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 25vw" />
          <span className="cs-img-label">{c.imgPreviewAlt}</span>
        </div>
      </div>
    </div>
  )
}

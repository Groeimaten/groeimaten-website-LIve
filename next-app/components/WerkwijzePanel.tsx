"use client"

import { useState } from "react"

const steps = [
  {
    num: "1 ·",
    title: "Vrijblijvend gesprek",
    desc: "Een gesprek van 20–30 minuten. We stellen vragen over jouw visie, situatie en wat goed en niet goed gaat. Als we het volle vertrouwen hebben dat we jou kunnen helpen, maken we een plan. Hebben we dat niet? Dan vertellen we dat eerlijk in dit gesprek.",
    panelNum: "01",
    panelTitle: "Vrijblijvend gesprek",
    panelSub: "20–30 min · Eerlijk & zonder verplichtingen",
    img: "/images/founders-office.webp",
  },
  {
    num: "2 ·",
    title: "Plan van aanpak",
    desc: "Intern werken we jouw situatie uit en maken we een persoonlijk plan. Geen standaardpakket, maar een strategie op maat voor jouw bedrijf, doelgroep en ambities.",
    panelNum: "02",
    panelTitle: "Plan van aanpak",
    panelSub: "Op maat · Voor jouw situatie",
    img: "/images/founders-discuss.webp",
  },
  {
    num: "3 ·",
    title: "Plan bespreken",
    desc: "Geen drukkende sales call. We sturen je het voorstel op en bespreken het rustig samen. Jij hoeft in dit gesprek nog helemaal niets te beslissen. Neem de tijd die je nodig hebt.",
    panelNum: "03",
    panelTitle: "Plan bespreken",
    panelSub: "Geen druk · Jij beslist wanneer je er klaar voor bent",
    img: "/images/founders-handshake.webp",
  },
  {
    num: "4 ·",
    title: "Aan de slag",
    desc: "Zodra jij akkoord gaat, gaan wij volledig aan de slag. Van website tot campagne: wij regelen alles van A tot Z. Jij focust op je showroom en klanten. Wij zorgen voor de groei.",
    panelNum: "04",
    panelTitle: "Aan de slag",
    panelSub: "Wij regelen het · Jij groeit",
    img: "/images/founders-working.webp",
  },
]

export default function WerkwijzePanel() {
  const [active, setActive] = useState(0)

  return (
    <div className="ww2__body">
      <div className="ww2__steps" role="tablist">
        {steps.map((s, i) => (
          <button
            key={i}
            className={`ww2__step${active === i ? " ww2__step--active" : ""}`}
            role="tab"
            aria-selected={active === i}
            onClick={() => setActive(i)}
          >
            <span className="ww2__num">{s.num}</span>
            <div>
              <h3>{s.title}</h3>
              <div className="ww2__desc">{s.desc}</div>
            </div>
          </button>
        ))}
      </div>

      <div className="ww2__panels" aria-live="polite">
        {steps.map((s, i) => (
          <div
            key={i}
            className={`ww2__panel${active === i ? " ww2__panel--active" : ""}`}
            style={{ backgroundImage: `url('${s.img}')`, backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <div style={{ position: "absolute", inset: 0, background: "rgba(6,6,6,0.55)" }} />
            <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
              <div className="ww2__panel-num">{s.panelNum}</div>
              <p className="ww2__panel-title">{s.panelTitle}</p>
              <p className="ww2__panel-sub">{s.panelSub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

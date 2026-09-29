import ScrollReveal from "@/components/ScrollReveal"

// Gemiddelden over alle ads-klanten, stand 29 sep 2026 (bron: Groeimaten ads-dashboard)
const steps = [
  { num: "€19", label: "per aanvraag", sub: "Iemand laat zijn gegevens achter" },
  { num: "€36", label: "per afspraak", sub: "Er staat een afspraak in je agenda" },
  { num: "€68", label: "per showroombezoek", sub: "De klant staat in je showroom" },
  { num: "€456", label: "per nieuwe klant", sub: "Er wordt een keuken of badkamer verkocht" },
]

export default function CostLadder({ id = "kosten" }: { id?: string }) {
  return (
    <ScrollReveal className="cost-ladder">
      <div className="cost-ladder__head">
        <span className="section-label">Gemiddeld over al onze ads-klanten</span>
        <h3 className="cost-ladder__title" id={`${id}-heading`}>
          Van klik tot klant: <em>€456.</em>
        </h3>
        <p className="cost-ladder__intro">
          Zo veel advertentiebudget kost een nieuwe klant bij ons gemiddeld. Afgezet tegen de waarde van één
          keuken of badkamer is dat een fractie.
        </p>
      </div>
      <ol className="cost-ladder__steps">
        {steps.map((s, i) => (
          <li key={s.label} className={`cost-ladder__step${i === steps.length - 1 ? " cost-ladder__step--final" : ""}`}>
            <span className="cost-ladder__num">{s.num}</span>
            <span className="cost-ladder__label">{s.label}</span>
            <span className="cost-ladder__sub">{s.sub}</span>
          </li>
        ))}
      </ol>
    </ScrollReveal>
  )
}

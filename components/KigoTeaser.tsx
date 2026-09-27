import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"

const benefits = [
  { title: "Meer aanvragen uit hetzelfde budget", body: "Kigo maakt van een advertentieklik een ervaring. Bezoekers haken minder snel af en laten vaker hun gegevens achter." },
  { title: "Klanten die al weten wat ze willen", body: "Je krijgt geen kale naam en telefoonnummer, maar een aanvraag met wensen en stijl erbij. Het eerste gesprek begint een stap verder." },
  { title: "Opvallen in een volle markt", body: "Kigo is door ons ontwikkeld en zie je nergens anders. Daarmee val je op in de feed én aan de telefoon." },
]

const checkIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const lockIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="4" y="11" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.8" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
)

const arrowIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function KigoTeaser({ id = "kigo", showPageLink = true }: { id?: string; showPageLink?: boolean }) {
  return (
    <section className="kigo-teaser" id={id} aria-labelledby={`${id}-heading`}>
      <div className="container">
        <div className="kigo-teaser__inner">
          <ScrollReveal className="kigo-teaser__content">
            <div className="kigo-teaser__eyebrow">Nieuw · Alleen bij Groeimaten</div>
            <h2 className="kigo-teaser__title" id={`${id}-heading`}>
              Maak kennis met <em>Kigo.</em>
            </h2>
            <p className="kigo-teaser__text">
              Onze eigen AI-tool voor keuken- en badkamerbedrijven. Kigo laat je klant zijn droomkeuken of
              droombadkamer al beleven voordat hij een stap in je showroom zet. Wij zetten hem in onze campagnes in,
              en dat merk je aan de aanvragen.
            </p>
            <ul className="kigo-teaser__benefits">
              {benefits.map((b) => (
                <li key={b.title} className="kigo-teaser__benefit">
                  <span className="kigo-teaser__benefit-icon">{checkIcon}</span>
                  <div>
                    <h3>{b.title}</h3>
                    <p>{b.body}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="kigo-teaser__actions">
              <Link href="/afspraak" className="btn btn--blue btn--lg">
                Plan een gesprek over Kigo {arrowIcon}
              </Link>
              {showPageLink && (
                <Link href="/kigo" className="btn btn--ghost btn--lg">Meer over Kigo</Link>
              )}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={2} className="kigo-teaser__visual">
            <div className="kigo-card" aria-hidden="true">
              <div className="kigo-card__glow" />
              <div className="kigo-card__head">
                <span className="kigo-card__logo">Kigo<span>.</span></span>
                <span className="kigo-card__tag">AI</span>
              </div>
              <div className="kigo-card__variants">
                <span className="kigo-card__variant">Kigo Keuken</span>
                <span className="kigo-card__variant">Kigo Badkamer</span>
              </div>
              <div className="kigo-card__preview">
                <div className="kigo-card__blur">
                  <span /><span /><span /><span />
                </div>
                <div className="kigo-card__lock">
                  {lockIcon}
                  <span>Hoe het werkt, laten we je graag live zien</span>
                </div>
              </div>
              <div className="kigo-card__foot">
                <span>Al live bij klanten van Groeimaten</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

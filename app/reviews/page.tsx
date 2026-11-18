import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"
import { getAllGoogleReviews, getReviewSummary } from "@/lib/google-reviews"

const GOOGLE_URL = "https://www.google.com/maps?cid=390254304839502817"
const URL = "https://groeimaten.com/reviews"

export async function generateMetadata(): Promise<Metadata> {
  const { score, count } = await getReviewSummary()
  const description = `Groeimaten scoort ${score} uit 5 op basis van ${count} Google-reviews. Lees alle ervaringen van keuken- en badkamerbedrijven die met ons werken.`
  return {
    title: { absolute: "Groeimaten reviews en ervaringen" },
    description,
    alternates: { canonical: URL },
    openGraph: { title: "Groeimaten reviews en ervaringen", description, url: URL },
  }
}

function maandJaar(iso: string) {
  return new Date(iso).toLocaleDateString("nl-NL", { month: "long", year: "numeric", timeZone: "Europe/Amsterdam" })
}

function Sterren({ rating }: { rating: number }) {
  return (
    <div className="review-card__stars" role="img" aria-label={`${rating} van 5 sterren`}>
      {[...Array(5)].map((_, j) => (
        <svg key={j} className="review-card__star" viewBox="0 0 24 24" aria-hidden="true" style={j >= rating ? { opacity: 0.2 } : undefined}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor" />
        </svg>
      ))}
    </div>
  )
}

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://groeimaten.com/" },
    { "@type": "ListItem", position: 2, name: "Reviews", item: URL },
  ],
}

export default async function ReviewsPage() {
  const [reviews, { score, count }] = await Promise.all([getAllGoogleReviews(4), getReviewSummary()])
  const bijgewerkt = new Date().toLocaleDateString("nl-NL", { month: "long", year: "numeric", timeZone: "Europe/Amsterdam" })

  return (
    <div className="reviews-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <section className="reviews-page__hero">
        <div className="container">
          <ScrollReveal>
            <span className="section-label">Klantervaringen</span>
            <h1 className="reviews-page__title">Groeimaten reviews <em>en ervaringen</em></h1>
            <p className="reviews-page__intro">
              Groeimaten scoort {score} uit 5 op basis van {count} reviews op Google. Hieronder staan alle reviews
              van keuken- en badkamerbedrijven die met ons werken, letterlijk zoals ze op Google staan. Deze pagina
              werkt automatisch bij (laatst bijgewerkt: {bijgewerkt}).
            </p>
            <div className="reviews-page__actions">
              <a href={GOOGLE_URL} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
                Bekijk alle reviews op Google
              </a>
              <span className="reviews-page__score" aria-hidden="true">
                <span className="reviews-page__score-num">{score}</span> ★ · {count} reviews
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="reviews-page__list">
        <div className="container">
          {reviews.length ? (
            <div className="reviews-page__grid">
              {reviews.map((r, i) => (
                <article key={i} className="review-card reviews-page__card">
                  <Sterren rating={r.rating} />
                  <p className="review-card__text">&ldquo;{r.text}&rdquo;</p>
                  <div className="review-card__author">
                    {r.photoUrl ? (
                      <img src={r.photoUrl} alt={`Profielfoto van ${r.name}`} className="review-card__avatar" width={42} height={42} loading="lazy" referrerPolicy="no-referrer" />
                    ) : (
                      <span className="review-card__avatar review-card__avatar--initial" aria-hidden="true">{r.name.charAt(0)}</span>
                    )}
                    <div>
                      <span className="review-card__name">{r.name}</span>
                      <span className="review-card__meta">Google-review · {maandJaar(r.date)}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="reviews-page__intro">
              De reviews kunnen op dit moment niet geladen worden. <a href={GOOGLE_URL} target="_blank" rel="noopener noreferrer">Bekijk ze direct op Google</a>.
            </p>
          )}
        </div>
      </section>

      <section className="reviews-page__cta">
        <div className="container">
          <h2>Benieuwd wat wij voor jouw showroom kunnen doen?</h2>
          <p>15 showroomafspraken in 90 dagen, gegarandeerd. Plan een gratis gesprek van een uur.</p>
          <Link href="/afspraak" className="btn btn--blue btn--lg">Plan een gratis gesprek</Link>
        </div>
      </section>
    </div>
  )
}

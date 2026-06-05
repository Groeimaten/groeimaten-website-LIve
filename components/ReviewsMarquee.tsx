import ScrollReveal from "@/components/ScrollReveal"

const reviews = [
  { name: "Kim Noach", meta: "een maand geleden", img: "/images/kim-noach.png", text: '"Zeer tevreden over het contact, hoe de samenwerking wordt onderhouden en de transparantie. Communicatie is erg fijn en er wordt snel geschakeld, hun manier van werken is innovatief en met doorzettingsvermogen. Erg fijn!"' },
  { name: "Martin Stoop", meta: "Stoop Keukens · een maand geleden", img: "/images/stoop-keukens.png", text: '"Vanaf februari is onze nieuwe website echt goed vindbaar geworden. De leads worden steeds kwalitatiever, we krijgen meer serieuze aanvragen en daar komen ook daadwerkelijk opdrachten uit voort. We merken echt duidelijke groei."' },
  { name: "Tegro BV", meta: "een maand geleden", img: "/images/tegro-review.png", text: '"Deze jonge enthousiaste ondernemers hebben onze website van Tegro ontwikkeld. Het resultaat mag er zijn. Het was een fijn traject waar op alle vlakken goed meegedacht werd. Ook het onderhoud van de site wordt met veel enthousiasme verzorgd."' },
  { name: "Mido Ibrahim", meta: "een maand geleden", img: "/images/mido-ibrahim.png", text: '"De samenwerking met Thomas en Jelle heb ik als heel prettig ervaren. Ze luisterden goed naar mijn wensen en dachten actief mee. Het eindresultaat is een mooie, professionele website die helemaal past bij wat ik voor ogen had."' },
  { name: "Richard Feenstra", meta: "6 dagen geleden", img: "/images/richard-feenstra.png", text: '"Thomas heeft mij geholpen om mijn website weer een beetje up-to-date te krijgen. De korte lijntjes zijn erg prettig. De afspraken zijn netjes nagekomen. Al met al een goede ervaring."' },
]

function ReviewCard({ r, prefix }: { r: typeof reviews[0], prefix: string }) {
  return (
    <div className="review-card" aria-hidden={prefix === "b" ? "true" : undefined}>
      <svg className="review-card__quote" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
      </svg>
      <div className="review-card__stars" aria-label="5 sterren">
        {[...Array(5)].map((_, j) => (
          <svg key={j} className="review-card__star" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor" />
          </svg>
        ))}
      </div>
      <p className="review-card__text">{r.text}</p>
      <div className="review-card__author">
        <img src={r.img} alt={r.name} className="review-card__avatar" width={42} height={42} loading="lazy" />
        <div>
          <span className="review-card__name">{r.name}</span>
          <span className="review-card__meta">{r.meta}</span>
        </div>
      </div>
    </div>
  )
}

export default function ReviewsMarquee() {
  return (
    <section className="reviews-marquee" id="testimonials">
      <ScrollReveal className="container reviews-marquee__top">
        <div>
          <span className="section-label">Klantervaringen</span>
          <h2 className="reviews-marquee__title">Wat klanten<br /><em>over ons zeggen</em></h2>
        </div>
        <a href="https://www.google.com/search?q=Groeimaten+reviews" target="_blank" rel="noopener noreferrer" className="google-badge" aria-label="Bekijk onze Google reviews: 5,0 sterren">
          <svg className="google-badge__g" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
          <div className="google-badge__info">
            <span className="google-badge__stars" aria-hidden="true">★★★★★</span>
            <span className="google-badge__text">5,0 · 6 reviews</span>
          </div>
        </a>
      </ScrollReveal>
      <div className="reviews-marquee__track-wrap">
        <div className="reviews-marquee__track">
          {reviews.map((r, i) => <ReviewCard key={`a-${i}`} r={r} prefix="a" />)}
          {reviews.map((r, i) => <ReviewCard key={`b-${i}`} r={r} prefix="b" />)}
        </div>
      </div>
      <div className="reviews-marquee__cta-wrap">
        <a
          href="https://www.google.com/search?sca_esv=9c28518ba62c7aef&rlz=1C1UEAD_nlNL1208NL1209&sxsrf=ANbL-n598i6QdZO7w-GhmmZnyMkNHnhR9A:1780240047357&q=Groeimaten+Reviews&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIytjQwMjUxNjCxMLY0NTCyMDTfwMj4ilHIvSg_NTM3sSQ1TyEotSwztbx4ESsWQQA09Ek6QwAAAA&rldimm=390254304839502817&tbm=lcl&hl=nl-NL&sa=X&ved=2ahUKEwi42Yz95uOUAxVM-AIHHddxF8YQ9fQKegQIOhAG&biw=1280&bih=585&dpr=1.5#lkt=LocalPoiReviews"
          target="_blank"
          rel="noopener noreferrer"
          className="reviews-marquee__cta"
        >
          Bekijk onze reviews
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
      <ScrollReveal className="container reviews-marquee__stats">
        <div className="reviews-marquee__stat"><span className="reviews-marquee__stat-num">5,0</span><span className="reviews-marquee__stat-label">Google beoordeling</span></div>
        <div className="reviews-marquee__stat"><span className="reviews-marquee__stat-num">100k+</span><span className="reviews-marquee__stat-label">Extra omzet 1 klant</span></div>
        <div className="reviews-marquee__stat"><span className="reviews-marquee__stat-num">€69</span><span className="reviews-marquee__stat-label">Laagste CPA ooit</span></div>
        <div className="reviews-marquee__stat"><span className="reviews-marquee__stat-num">100%</span><span className="reviews-marquee__stat-label">Sectorspecialist</span></div>
      </ScrollReveal>
    </section>
  )
}

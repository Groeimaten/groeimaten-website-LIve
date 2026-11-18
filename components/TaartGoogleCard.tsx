import { getReviewSummary } from "@/lib/google-reviews"

const GOOGLE_URL = "https://www.google.com/maps?cid=390254304839502817"

export default async function TaartGoogleCard() {
  const { rating, score, count } = await getReviewSummary()

  return (
    <a href={GOOGLE_URL} target="_blank" rel="noopener noreferrer" className="taart-google" aria-label={`Bekijk onze ${count} Google-reviews, ${score} sterren`}>
      <div className="taart-google__head">
        <svg viewBox="0 0 24 24" width="34" height="34" aria-hidden="true">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
        </svg>
        <span className="taart-google__label">Google Reviews</span>
      </div>
      <div className="taart-google__score">
        <span className="taart-google__num">{score}</span>
        <span className="taart-google__stars" aria-hidden="true">
          {[...Array(5)].map((_, i) => {
            const fill = Math.max(0, Math.min(1, rating - i))
            return (
              <svg key={i} viewBox="0 0 24 24" width="24" height="24">
                <defs>
                  <linearGradient id={`taart-ster-${i}`}>
                    <stop offset={fill} stopColor="#FBBC05" />
                    <stop offset={fill} stopColor="rgba(255,255,255,0.18)" />
                  </linearGradient>
                </defs>
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill={`url(#taart-ster-${i})`} />
              </svg>
            )
          })}
        </span>
      </div>
      <p className="taart-google__count">Op basis van {count} reviews van klanten</p>
      <span className="taart-google__cta">
        Bekijk de reviews op Google
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </a>
  )
}

import { getReviewSummary } from "@/lib/google-reviews"

/** Live Google-score, bv. "5,0". Zelfde bron als de reviewslider. */
export async function GoogleScore() {
  const { score } = await getReviewSummary()
  return <>{score}</>
}

/** Live aantal Google-reviews, bv. "10". */
export async function GoogleReviewCount() {
  const { count } = await getReviewSummary()
  return <>{count}</>
}

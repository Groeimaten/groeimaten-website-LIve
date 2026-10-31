// Google-reviews uit het Groeimaten-dashboard (Supabase groeimaten-clients).
// De nachtelijke dashboard-sync haalt ze op via het Google Bedrijfsprofiel en zet ze
// in gbp_reviews; deze site leest ze via de publieke functies get_public_reviews en
// get_public_review_stats. Nieuwe reviews staan er dus binnen een dag vanzelf op.
// De sleutel hieronder is de publieke (publishable) sleutel: die mag alleen deze
// twee functies uitvoeren, de tabellen zelf kan hij niet lezen.

const SUPABASE_URL = "https://ianljhkqxodnufqtijqb.supabase.co"
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_qS9FLMNQwMXqMTdAYBevqQ_M99Sc-ps"
const CLIENT_ID = "8d61c06d-3c7f-4c92-988d-9f76064f2b0e"

/** Elk uur kijken is ruim genoeg; de data zelf ververst één keer per nacht. */
const REVALIDATE_SECONDS = 60 * 60
/** Max. tekens per review; houdt de kaarten ongeveer even hoog. */
const MAX_TEXT = 420

export type GoogleReview = {
  name: string
  photoUrl: string | null
  rating: number
  text: string
  date: string
}

export type GoogleReviewStats = { rating: number; count: number }

async function rpc<T>(fn: string, args: Record<string, unknown>): Promise<T | null> {
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/${fn}`, {
      method: "POST",
      headers: { apikey: SUPABASE_PUBLISHABLE_KEY, "Content-Type": "application/json" },
      body: JSON.stringify({ p_client_id: CLIENT_ID, ...args }),
      next: { revalidate: REVALIDATE_SECONDS, tags: ["google-reviews"] },
      signal: AbortSignal.timeout(5000),
    })
    if (!res.ok) {
      console.error(`[reviews] ${fn} ${res.status}`)
      return null
    }
    return (await res.json()) as T
  } catch (err) {
    console.error(`[reviews] ${fn} niet bereikbaar`, err)
    return null
  }
}

/** Nieuwste reviews van minimaal minRating sterren met tekst. Leeg bij een fout. */
export async function getGoogleReviews(limit = 12, minRating = 4): Promise<GoogleReview[]> {
  const rows = await rpc<
    { reviewer_name: string | null; reviewer_photo_url: string | null; star_rating: number; comment: string; create_time: string }[]
  >("get_public_reviews", { p_min_rating: minRating, p_limit: limit })
  return (rows ?? []).map((r) => {
    const text = r.comment.trim()
    return {
      name: r.reviewer_name?.trim() || "Google-gebruiker",
      photoUrl: r.reviewer_photo_url,
      rating: r.star_rating,
      text: text.length > MAX_TEXT ? `${text.slice(0, MAX_TEXT).replace(/\s+\S*$/, "")}…` : text,
      date: r.create_time,
    }
  })
}

/** Score en totaal aantal reviews uit de laatste nachtelijke meting; null bij een fout. */
export async function getGoogleReviewStats(): Promise<GoogleReviewStats | null> {
  const rows = await rpc<{ review_count: number; average_score: number | string }[]>(
    "get_public_review_stats",
    {},
  )
  const row = rows?.[0]
  if (!row) return null
  const rating = Number(row.average_score)
  const count = Number(row.review_count)
  if (!(rating >= 1 && rating <= 5) || !(count >= 1)) return null
  return { rating: Math.round(rating * 10) / 10, count }
}

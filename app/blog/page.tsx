import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Blog | Groeimaten",
  description:
    "Praktische marketing kennis voor keuken-, badkamer- en bouwbedrijven. Artikelen over SEO, Google Ads, leadgeneratie en online groeistrategie.",
  alternates: {
    canonical: "https://groeimaten.com/blog",
  },
  openGraph: {
    title: "Blog | Groeimaten",
    description:
      "Praktische marketing kennis voor keuken-, badkamer- en bouwbedrijven.",
    url: "https://groeimaten.com/blog",
  },
}

const blogPosts = [
  {
    slug: "seo-voor-keukenstudio",
    titel: "SEO voor keukenstudio's: zo word je gevonden door koopklare klanten",
    samenvatting:
      "Keukenstudio's die bovenaan Google staan trekken andere klanten aan dan studio's die op advertenties leunen. Hoe werkt dat precies en wat kun je eraan doen?",
    datum: "16 juni 2026",
    keyphrase: "SEO voor keukenstudio",
  },
  {
    slug: "leads-genereren-bouwsector",
    titel: "Leads genereren in de bouwsector: wat werkt en wat niet",
    samenvatting:
      "Mond-tot-mondreclame werkt, maar het is onvoorspelbaar. Hoe genereer je als bouwbedrijf structureel kwalitatieve aanvragen?",
    datum: "16 juni 2026",
    keyphrase: "Leads genereren bouwsector",
  },
  {
    slug: "meer-klanten-aannemer",
    titel: "Meer klanten als aannemer zonder cold calling",
    samenvatting:
      "Druk zijn is niet hetzelfde als groeien. Aannemers die de juiste klanten aantrekken, doen een paar dingen structureel anders.",
    datum: "16 juni 2026",
    keyphrase: "Meer klanten aannemer",
  },
  {
    slug: "google-ads-badkamerbedrijf",
    titel: "Google Ads voor je badkamerbedrijf: zo wordt elk euro goed besteed",
    samenvatting:
      "Google Ads is een van de meest directe manieren om klanten te bereiken die actief zoeken. Maar een slecht ingestelde campagne kost meer dan hij oplevert.",
    datum: "16 juni 2026",
    keyphrase: "Google Ads badkamerbedrijf",
  },
  {
    slug: "lokale-vindbaarheid-installateurs",
    titel: "Lokale vindbaarheid voor installateurs: van onzichtbaar naar pagina 1",
    samenvatting:
      "Als iemand een installateur zoekt in jouw regio en jij staat er niet bij, belt hij iemand anders. Hoe verbeter je je lokale zichtbaarheid?",
    datum: "16 juni 2026",
    keyphrase: "Lokale vindbaarheid installateurs",
  },
]

const arrowIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function BlogIndexPage() {
  return (
    <>
      <section className="page-hero page-hero--split">
        <div className="page-hero__glow page-hero__glow--1" aria-hidden="true" />
        <div className="page-hero__glow page-hero__glow--2" aria-hidden="true" />
        <div className="container">
          <div className="page-hero__inner">
            <ScrollReveal>
              <div className="page-hero__content">
                <span className="section-label">Kennisbank</span>
                <h1 className="page-hero__title">
                  Marketing inzichten voor
                  <br />
                  <em>keuken en sanitair.</em>
                </h1>
                <p className="page-hero__subtitle">
                  Praktische artikelen over SEO, Google Ads, leadgeneratie en online strategie, geschreven voor keuken-,
                  badkamer- en bouwbedrijven.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="service-detail" style={{ paddingTop: "60px", paddingBottom: "80px" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              gap: "32px",
              marginTop: "8px",
            }}
          >
            {blogPosts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={((i % 3) + 1) as 1 | 2 | 3 | 4}>
                <article
                  style={{
                    backgroundColor: "oklch(12% 0 0)",
                    borderRadius: "12px",
                    padding: "32px",
                    border: "1px solid oklch(20% 0 0)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    height: "100%",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.78rem",
                      color: "oklch(65% 0.09 75)",
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    {post.datum}
                  </span>
                  <h2
                    style={{
                      fontSize: "clamp(1.1rem, 2.5vw, 1.3rem)",
                      fontWeight: 700,
                      color: "oklch(95% 0 0)",
                      lineHeight: "1.35",
                      margin: 0,
                    }}
                  >
                    {post.titel}
                  </h2>
                  <p
                    style={{
                      color: "oklch(68% 0 0)",
                      fontSize: "0.95rem",
                      lineHeight: "1.65",
                      margin: 0,
                      flex: 1,
                    }}
                  >
                    {post.samenvatting}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      color: "oklch(65% 0.09 75)",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      textDecoration: "none",
                      marginTop: "auto",
                    }}
                  >
                    Lees meer {arrowIcon}
                  </Link>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-section__glow cta-section__glow--1" aria-hidden="true" />
        <div className="cta-section__glow cta-section__glow--2" aria-hidden="true" />
        <div className="container">
          <ScrollReveal>
            <div className="cta-inner">
              <span className="section-label section-label--blue">Klaar om te starten?</span>
              <h2 className="cta-title">Laten we kennismaken</h2>
              <p className="cta-subtitle">
                Plan een gratis strategiegesprek en ontdek wat Groeimaten voor jouw bedrijf kan betekenen.
              </p>
              <Link href="/afspraak" className="btn btn--blue btn--xl">
                Plan je gratis gesprek
                {arrowIcon}
              </Link>
              <p className="cta-disclaimer">Geen verplichtingen. Wel eerlijk advies.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

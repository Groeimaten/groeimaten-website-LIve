import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Meer klanten als aannemer zonder cold calling",
  description:
    "Druk zijn is niet hetzelfde als groeien. Aannemers die de juiste klanten aantrekken, doen een paar dingen structureel anders. Groeimaten legt uit wat werkt.",
  alternates: {
    canonical: "https://groeimaten.com/blog/meer-klanten-aannemer",
  },
  openGraph: {
    title: "Meer klanten als aannemer zonder cold calling",
    description:
      "Aannemers die de juiste klanten aantrekken doen een paar dingen structureel anders. Groeimaten legt uit wat werkt.",
    url: "https://groeimaten.com/blog/meer-klanten-aannemer",
  },
}

const arrowIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://groeimaten.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://groeimaten.com/blog" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Meer klanten als aannemer",
      item: "https://groeimaten.com/blog/meer-klanten-aannemer",
    },
  ],
}

export default function BlogMeerKlantenAannemerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="page-hero page-hero--split" style={{ paddingBottom: "48px" }}>
        <div className="page-hero__glow page-hero__glow--1" aria-hidden="true" />
        <div className="page-hero__glow page-hero__glow--2" aria-hidden="true" />
        <div className="container">
          <div style={{ maxWidth: "780px", paddingTop: "120px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
              <Link href="/blog" style={{ color: "oklch(65% 0.09 75)", textDecoration: "none", fontSize: "0.85rem" }}>
                Blog
              </Link>
              <span style={{ color: "oklch(45% 0 0)", fontSize: "0.85rem" }}>›</span>
              <span style={{ color: "oklch(55% 0 0)", fontSize: "0.85rem" }}>Meer klanten als aannemer</span>
            </div>
            <span className="section-label">Groei</span>
            <h1
              className="page-hero__title"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", lineHeight: "1.2", marginTop: "12px" }}
            >
              Meer klanten als aannemer zonder cold calling
            </h1>
            <p className="page-hero__subtitle" style={{ marginTop: "20px" }}>
              Druk zijn is niet hetzelfde als groeien. Veel aannemers hebben genoeg werk, maar niet het goede werk.
              Meer klanten als aannemer aantrekken betekent de juiste klanten aantrekken, op het juiste moment.
            </p>
            <p style={{ color: "oklch(55% 0 0)", fontSize: "0.88rem", marginTop: "12px" }}>
              Groeimaten · 16 juni 2026 · 5 min lezen
            </p>
          </div>
        </div>
      </section>

      <section className="service-detail" style={{ paddingTop: "20px", paddingBottom: "80px" }}>
        <div className="container">
          <article
            style={{
              maxWidth: "760px",
              color: "oklch(78% 0 0)",
              lineHeight: "1.85",
              fontSize: "1.05rem",
            }}
          >
            <p>
              Projecten die te klein zijn voor de marges die je nodig hebt. Klanten die eindeloos onderhandelen
              over de prijs. En ondertussen die ene grote opdracht gemist, omdat jij niet zichtbaar was op het
              moment dat hij beschikbaar was.
            </p>

            <h2
              style={{
                color: "oklch(95% 0 0)",
                fontSize: "clamp(1.3rem, 3vw, 1.75rem)",
                fontWeight: 700,
                marginTop: "52px",
                marginBottom: "20px",
                lineHeight: "1.3",
              }}
            >
              Waarom de meeste aannemers vasthouden aan dezelfde methoden
            </h2>
            <p>
              Aannemers zijn vakmannen. Ze bouwen, verbouwen en renoveren. Marketing is niet hun specialiteit
              en dat hoeft ook niet. Maar veel aannemers vertrouwen daardoor op methoden die twintig jaar geleden
              werkten maar nu minder effectief zijn.
            </p>
            <p>
              Een website die er verouderd uitziet. Geen aanwezigheid op Google. Geen systematische opvolging
              van aanvragen. Het gevolg: werk wordt minder voorspelbaar en je bent overgeleverd aan wat er
              toevallig binnenkomt. Voor de korte termijn is dat misschien te overzien. Voor groei is het een
              knelpunt.
            </p>

            <h2
              style={{
                color: "oklch(95% 0 0)",
                fontSize: "clamp(1.3rem, 3vw, 1.75rem)",
                fontWeight: 700,
                marginTop: "52px",
                marginBottom: "20px",
                lineHeight: "1.3",
              }}
            >
              Wat aannemers die structureel groeien anders doen
            </h2>
            <p>
              Aannemers die structureel groeien doen een paar dingen anders.
            </p>
            <p>
              Ze hebben een professionele online aanwezigheid. Dat begint met een website die vertrouwen wekt.
              Geen indruk van tien jaar geleden, maar een site die laat zien wie je bent, wat je gemaakt hebt en
              hoe je te bereiken bent. Foto&apos;s van je werk zijn daarin het meest overtuigende element. Een
              potentiële klant beslist in een paar seconden of hij wil doorklikken of niet.
            </p>
            <p>
              Ze investeren in vindbaarheid. Mensen die zoeken naar een aannemer in hun regio gebruiken Google.
              Als jij er niet bent, besta je niet voor die klant. Lokale SEO en Google Ads zijn de meest directe
              manieren om dat te veranderen. Geen leercurve, geen maanden wachten: een goed ingestelde campagne
              genereert aanvragen binnen dagen.
            </p>
            <p>
              Ze kwalificeren leads voordat ze een afspraak maken. Niet elke aanvraag is het waard om op te
              reageren. Een goed systeem filtert de mensen die echt serieus zijn, zodat je tijd gaat naar projecten
              die ook daadwerkelijk iets opleveren.
            </p>

            <h2
              style={{
                color: "oklch(95% 0 0)",
                fontSize: "clamp(1.3rem, 3vw, 1.75rem)",
                fontWeight: 700,
                marginTop: "52px",
                marginBottom: "20px",
                lineHeight: "1.3",
              }}
            >
              Kei Bouw: van druk naar groei
            </h2>
            <p>
              Kei Bouw, een van de bedrijven waarmee Groeimaten werkt, had een vergelijkbaar patroon. Voldoende
              werk, maar niet het werk dat bij hun ambitieniveau paste. Door een nieuwe website, een gerichte
              SEO-aanpak en Meta Ads-campagnes zijn ze nu zichtbaar voor de klanten die ze willen aantrekken.
              De aanvragen die binnenkomen zijn kwalitatief beter en sluiten aan bij het type project dat ze
              willen uitvoeren.
            </p>
            <p>
              Dat is het verschil dat een goede marketingstrategie maakt. Niet meer leads in het algemeen, maar
              de juiste leads op het juiste moment.
            </p>

            <h2
              style={{
                color: "oklch(95% 0 0)",
                fontSize: "clamp(1.3rem, 3vw, 1.75rem)",
                fontWeight: 700,
                marginTop: "52px",
                marginBottom: "20px",
                lineHeight: "1.3",
              }}
            >
              Meer klanten als aannemer: de samenvatting
            </h2>
            <p>
              Meer klanten aantrekken als aannemer is een combinatie van zichtbaarheid, vertrouwen en een goed
              systeem. Zichtbaarheid via Google en sociale media. Vertrouwen via een sterke website en referenties.
              Een systeem dat leads filtert en opvolgt.
            </p>
            <p>
              Dat is niet iets wat je in een week oplost. Maar het is ook niet zo complex als het klinkt als je
              samenwerkt met mensen die dit elke dag doen voor bedrijven in jouw sector.
            </p>

            <div
              style={{
                backgroundColor: "oklch(12% 0 0)",
                borderRadius: "12px",
                padding: "32px",
                border: "1px solid oklch(20% 0 0)",
                marginTop: "52px",
              }}
            >
              <p style={{ color: "oklch(90% 0 0)", fontWeight: 600, marginBottom: "12px", fontSize: "1.1rem" }}>
                Klaar om de juiste klanten aan te trekken?
              </p>
              <p style={{ marginBottom: "20px", color: "oklch(70% 0 0)" }}>
                Plan een gratis strategiegesprek. We kijken samen naar jouw situatie en vertellen je eerlijk
                wat er mogelijk is.
              </p>
              <Link href="/afspraak" className="btn btn--blue btn--lg">
                Plan een gratis gesprek {arrowIcon}
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}

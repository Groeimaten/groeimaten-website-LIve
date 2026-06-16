import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "SEO voor keukenstudio's: zo word je gevonden door koopklare klanten",
  description:
    "Keukenstudio's concurreren online om dezelfde koopklare klant. Hoe werkt SEO voor een keukenstudio en wat levert het op? Praktische uitleg van Groeimaten.",
  alternates: {
    canonical: "https://groeimaten.com/blog/seo-voor-keukenstudio",
  },
  openGraph: {
    title: "SEO voor keukenstudio's: zo word je gevonden door koopklare klanten",
    description:
      "Hoe werkt SEO voor een keukenstudio en wat levert het op? Praktische uitleg van Groeimaten.",
    url: "https://groeimaten.com/blog/seo-voor-keukenstudio",
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
      name: "SEO voor keukenstudio's",
      item: "https://groeimaten.com/blog/seo-voor-keukenstudio",
    },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "SEO voor keukenstudio's: zo word je gevonden door koopklare klanten",
  description:
    "Keukenstudio's die bovenaan Google staan trekken andere klanten aan. Hoe werkt SEO voor een keukenstudio en wat zijn de drie gebieden die direct verschil maken?",
  author: { "@type": "Organization", name: "Groeimaten" },
  publisher: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  datePublished: "2026-06-16",
  url: "https://groeimaten.com/blog/seo-voor-keukenstudio",
}

export default function BlogSeoKeukenstudioPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

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
              <span style={{ color: "oklch(55% 0 0)", fontSize: "0.85rem" }}>SEO voor keukenstudio</span>
            </div>
            <span className="section-label">SEO</span>
            <h1
              className="page-hero__title"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", lineHeight: "1.2", marginTop: "12px" }}
            >
              SEO voor keukenstudio&apos;s: zo word je gevonden door koopklare klanten
            </h1>
            <p className="page-hero__subtitle" style={{ marginTop: "20px" }}>
              Keukenstudio&apos;s concurreren in een markt waar de klant allang weet wat hij wil voordat hij zijn eerste
              bezoek aflegt. Als jouw studio niet bovenaan staat in Google, besta je niet voor die klant.
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
              Een groot deel van de oriëntatie vindt tegenwoordig online plaats. Iemand typt &ldquo;keukenstudio
              [stad]&rdquo; of &ldquo;maatwerk keuken laten plaatsen&rdquo; en bekijkt de eerste drie resultaten. Als
              jouw studio daar niet tussen staat, bestaat je voor die klant niet. SEO voor keukenstudio&apos;s draait
              daarom niet om technicalities, maar om zichtbaar zijn op het moment dat iemand er klaar voor is.
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
              Wie zoekt er naar jouw keukenstudio?
            </h2>
            <p>
              De mensen die actief zoeken op Google zijn geen mensen die nog aan het dromen zijn. Ze vergelijken merken,
              bekijken showroomfoto&apos;s en beoordelen jouw website in minder dan vijf seconden. Ze zijn concreet. Ze
              willen een afspraak plannen, een offerte opvragen of weten wat een project bij jou kost.
            </p>
            <p>
              Dat is een fundamenteel andere intentie dan iemand die een advertentie ziet op Facebook terwijl hij
              eigenlijk naar een video kijkt. Dit maakt SEO voor keukenstudio&apos;s waardevol: de bezoekers die je via
              Google aantrekt, zijn warmer dan gemiddeld. Ze hebben zelf gezocht. Dat is het verschil tussen een klant
              die binnenwandelt en een klant die je moet overtuigen.
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
              Wat SEO voor een keukenstudio anders maakt
            </h2>
            <p>
              De keukenbranche heeft een aantal kenmerken die directe gevolgen hebben voor hoe je SEO aanpakt.
            </p>
            <p>
              Lokale zoekopdrachten domineren. Mensen zoeken niet nationaal maar regionaal. &ldquo;Keukenstudio
              Utrecht&rdquo; levert andere resultaten op dan &ldquo;keukenstudio Amsterdam&rdquo;. Dit betekent dat je
              voor elke relevante stad of regio een sterke lokale aanwezigheid nodig hebt, niet alleen in de normale
              zoekresultaten maar ook in Google Maps.
            </p>
            <p>
              Het koopproces duurt lang. Een keukenaankoop kost gemiddeld 15.000 euro tot meer dan 50.000 euro. De
              klant neemt de tijd. Hij bezoekt meerdere showrooms en bekijkt meerdere websites. Dit betekent dat je
              niet alleen gevonden moet worden, maar dat je website ook vertrouwen moet wekken. Goede SEO en een
              overtuigende website gaan hand in hand.
            </p>
            <p>
              Foto&apos;s zijn cruciaal. Mensen beoordelen keukenstudio&apos;s op beelden. Alt-teksten,
              bestandsnamen en paginastructuur moeten dit weerspiegelen. Een pagina met tien foto&apos;s zonder
              alt-tekst laat een kans liggen.
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
              Drie gebieden die direct verschil maken
            </h2>
            <p>
              <strong style={{ color: "oklch(90% 0 0)" }}>Technische basis.</strong> Je website moet snel laden,
              goed werken op mobiel en correct zijn gestructureerd. Google beloont websites die gebruikers een goede
              ervaring geven. Laadtijden boven drie seconden kosten je rankings en klanten. Core Web Vitals, het
              meetraamwerk van Google, is de concrete maatstaf voor technische kwaliteit.
            </p>
            <p>
              <strong style={{ color: "oklch(90% 0 0)" }}>Lokale content.</strong> Maak specifieke pagina&apos;s
              voor de steden en regio&apos;s die je bedient. Beschrijf je showroom, je aanpak en je producten op een
              manier die aansluit bij hoe mensen zoeken. Generieke tekst over &ldquo;kwalitatieve keukens&rdquo; helpt
              niet. Concrete informatie over jouw werkgebied, jouw merken en jouw trajecten wel.
            </p>
            <p>
              <strong style={{ color: "oklch(90% 0 0)" }}>Google Mijn Bedrijf.</strong> Je
              Google Mijn Bedrijf-profiel is voor veel zoekopdrachten net zo belangrijk als je website. Actuele
              openingstijden, goede foto&apos;s en regelmatige updates geven Google het signaal dat je een actief en
              betrouwbaar bedrijf bent. Reviews van klanten versterken dit signaal verder.
            </p>
            <p>
              SEO voor een keukenstudio is geen kwestie van trucjes. Het is een investering die maanden vergt maar
              daarna structureel resultaat oplevert, zonder dat je elke maand advertentiebudget uitgeeft. Bedrijven
              die vroeg beginnen, bouwen een voorsprong op die moeilijk in te halen is.
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
                Wil je weten hoe jouw keukenstudio scoort op Google?
              </p>
              <p style={{ marginBottom: "20px", color: "oklch(70% 0 0)" }}>
                Plan een gratis strategiegesprek. We bekijken je huidige vindbaarheid en vertellen je precies wat er
                beter kan.
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

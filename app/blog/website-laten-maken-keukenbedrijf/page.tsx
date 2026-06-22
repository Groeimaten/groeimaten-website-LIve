import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Website laten maken als keukenbedrijf: wat werkt en wat je kunt overslaan",
  description:
    "Een website voor een keukenbedrijf is geen standaard project. Welke elementen maken echt het verschil en wat kun je veilig weglaten? Groeimaten legt het uit.",
  alternates: {
    canonical: "https://groeimaten.com/blog/website-laten-maken-keukenbedrijf",
  },
  openGraph: {
    title: "Website laten maken als keukenbedrijf: wat werkt en wat je kunt overslaan",
    description:
      "Welke elementen maken echt het verschil voor een keukenbedrijf website? Groeimaten legt het uit.",
    url: "https://groeimaten.com/blog/website-laten-maken-keukenbedrijf",
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
    { "@type": "ListItem", position: 3, name: "Website laten maken keukenbedrijf", item: "https://groeimaten.com/blog/website-laten-maken-keukenbedrijf" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Website laten maken als keukenbedrijf: wat werkt en wat je kunt overslaan",
  description:
    "Welke elementen maken echt het verschil voor een website van een keukenbedrijf?",
  author: { "@type": "Organization", name: "Groeimaten" },
  publisher: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  datePublished: "2026-06-22",
  url: "https://groeimaten.com/blog/website-laten-maken-keukenbedrijf",
}

export default function BlogWebsiteKeukenbedrijfPage() {
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
              <span style={{ color: "oklch(55% 0 0)", fontSize: "0.85rem" }}>Website laten maken keukenbedrijf</span>
            </div>
            <span className="section-label">Website</span>
            <h1
              className="page-hero__title"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", lineHeight: "1.2", marginTop: "12px" }}
            >
              Website laten maken als keukenbedrijf: wat werkt en wat je kunt overslaan
            </h1>
            <p className="page-hero__subtitle" style={{ marginTop: "20px" }}>
              Veel keukenbedrijven betalen voor een mooie website die toch geen afspraken genereert. Het verschil zit zelden in het design.
            </p>
            <p style={{ color: "oklch(55% 0 0)", fontSize: "0.88rem", marginTop: "12px" }}>
              Groeimaten · 22 juni 2026 · 5 min lezen
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
              Een website laten maken als keukenbedrijf is niet hetzelfde als een website laten maken voor een accountantskantoor of een webshop. De bezoeker van jouw website staat op een ander punt in zijn koopproces. Hij is aan het orienteren, vergelijkt stijlen en materialen en probeert een gevoel te krijgen bij jouw bedrijf. Dat bepaalt welke elementen op jouw website het verschil maken.
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
              Beeldkwaliteit is geen nice-to-have
            </h2>
            <p>
              De eerste beslissing die een bezoeker neemt op jouw website is emotioneel. Hij ziet een foto van een keuken en voelt direct of dit bij hem past. Slechte of generieke beelden kosten je potentiële klanten voordat ze ook maar een regel tekst hebben gelezen. Dit is geen esthetische kwestie maar een conversiekwestie.
            </p>
            <p>
              Stockfoto&apos;s van keukens die je niet zelf hebt geplaatst werken contraproductief. Ze wekken geen vertrouwen en onderscheiden je niet. Eigen fotografie van projecten die je hebt uitgevoerd, inclusief sfeerdetails, is de basis van een keukenbedrijf website die werkt. Zonder goede beelden kun je de rest van het budget beter ergens anders insteken.
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
              Snelheid bepaalt of Google je serieus neemt
            </h2>
            <p>
              Een prachtig ontworpen website die drie seconden laden kost verliest bezoekers én rankings. Google meet laadtijden via Core Web Vitals en straft langzame websites af in de zoekresultaten. Voor een keukenbedrijf dat organisch gevonden wil worden is dit geen technisch detail maar een commercieel probleem.
            </p>
            <p>
              Veel tradionele webdesign bureaus leveren websites op basis van WordPress met tientallen plugins. Die zijn gemakkelijk te bouwen maar leveren bijna altijd een technisch achterblijvende website op. Een goed gebouwde Next.js of moderne statische website scoort structureel beter op laadtijden en daardoor op rankings.
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
              Wat je kunt weglaten: de uitgebreide prijspagina
            </h2>
            <p>
              Keukenbedrijven die gedetailleerde prijzen op hun website zetten denken daarmee bezoekers te helpen. Het tegenovergestelde is vaak waar. Prijs zonder context leidt tot afhakers, niet tot gesprekken. Een keukenaankoop van 20.000 euro voelt anders na een showroombezoek waarbij iemand de kwaliteit heeft gezien dan als losse regel op een website.
            </p>
            <p>
              Wat beter werkt is het duidelijk maken van de prijsrange en daarna direct uitnodigen voor een gesprek of showroombezoek. Zo filter je bezoekers die serieus zijn en filter je mensen die alleen prijzen aan het vergelijken zijn zonder koopintentie.
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
              De CTA die echt werkt voor een keukenbedrijf
            </h2>
            <p>
              &ldquo;Neem contact op&rdquo; is een zwakke call-to-action voor een keukenbedrijf. Te vrijblijvend, te weinig concreet. Wat beter werkt is een uitnodiging die past bij de oriëntatiefase: showroombezoek inplannen, gratis inspiratiegesprek, of een afspraak voor een keukenmeting. Specifiek, laagdrempelig, concreet.
            </p>
            <p>
              De positie van die CTA op de pagina is net zo belangrijk als de tekst. Zichtbaar boven de vouw op mobiel, terug te vinden na elk inhoudsblok en aanwezig in de navigatie. Niet verstopt onderaan de pagina voor mensen die al klaar zijn met lezen.
            </p>
            <p>
              Een website laten maken als keukenbedrijf loont alleen als het resultaat ook daadwerkelijk afspraken genereert. Design en techniek zijn middelen, geen doel. Het doel is dat bezoekers contact opnemen, een afspraak plannen en uiteindelijk klant worden.
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
                Klaar voor een website die echt werkt voor jouw keukenbedrijf?
              </p>
              <p style={{ marginBottom: "20px", color: "oklch(70% 0 0)" }}>
                Groeimaten bouwt conversiegerichte websites specifiek voor keuken en sanitairbedrijven. Plan een gratis gesprek.
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

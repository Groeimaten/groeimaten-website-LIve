import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Meer aanvragen voor je keukenstudio: drie plekken waar je winst pakt",
  description:
    "Een keukenstudio die zijn conversiepercentage van 0,8 naar 1,6 procent brengt, verdubbelt zijn showroomafspraken zonder extra bezoekers. Waar zit die winst precies?",
  alternates: {
    canonical: "https://groeimaten.com/blog/meer-aanvragen-keukenstudio",
  },
  openGraph: {
    title: "Meer aanvragen voor je keukenstudio: drie plekken waar je winst pakt",
    description:
      "Waar keukenstudio's de meeste winst pakken als het gaat om meer aanvragen en showroomafspraken.",
    url: "https://groeimaten.com/blog/meer-aanvragen-keukenstudio",
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
      name: "Meer aanvragen keukenstudio",
      item: "https://groeimaten.com/blog/meer-aanvragen-keukenstudio",
    },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Meer aanvragen voor je keukenstudio: drie plekken waar je winst pakt",
  description:
    "Waar keukenstudio's de meeste winst pakken als het gaat om meer aanvragen en showroomafspraken.",
  author: { "@type": "Organization", name: "Groeimaten" },
  publisher: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  datePublished: "2026-08-10",
  url: "https://groeimaten.com/blog/meer-aanvragen-keukenstudio",
}

export default function BlogMeerAanvragenKeukenstudioPage() {
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
              <span style={{ color: "oklch(55% 0 0)", fontSize: "0.85rem" }}>Meer aanvragen keukenstudio</span>
            </div>
            <span className="section-label">Keukenmarketing</span>
            <h1
              className="page-hero__title"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", lineHeight: "1.2", marginTop: "12px" }}
            >
              Meer aanvragen voor je keukenstudio: drie plekken waar je winst pakt
            </h1>
            <p className="page-hero__subtitle" style={{ marginTop: "20px" }}>
              De meeste keukenstudio&apos;s kijken naar hun aantal bezoekers als er te weinig aanvragen binnenkomen. Maar bezoekers zijn niet het probleem. Het probleem zit in wat er met die bezoekers gebeurt nadat ze op de website zijn.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "0 0 80px" }}>
        <div className="container">
          <div style={{ maxWidth: "720px" }}>

            <ScrollReveal>
              <p style={{ lineHeight: "1.8", marginBottom: "20px", marginTop: "48px" }}>
                Een keukenstudio met 2.000 bezoekers per maand en een conversiepercentage van 0,8 procent ontvangt 16 aanvragen. Diezelfde studio met 1,6 procent conversie ontvangt er 32. Geen extra advertentiebudget, geen extra bezoekers. Alleen een betere website.
              </p>
              <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                Het verschil tussen 0,8 en 1,6 procent klinkt klein. Het is in de praktijk het verschil tussen een matig jaar en een sterk jaar.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "16px", marginTop: "48px" }}>
                Plek één: de kwaliteit van het binnenkomende verkeer
              </h2>
              <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                Niet elke bezoeker is gelijkwaardig. Iemand die zoekt op &ldquo;keuken inspiratie&rdquo; is anders dan iemand die zoekt op &ldquo;keuken laten plaatsen offerte&rdquo;. De eerste is aan het oriënteren. De tweede is klaar om te kopen.
              </p>
              <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                Als je advertentiebudget ruim terechtkomt bij mensen die op inspiratiezoektermen klikken, is de kans klein dat ze direct een afspraak inplannen. Het conversiepercentage daalt, terwijl het probleem niet bij je website ligt maar bij de zoekwoorden waarvoor je betaalt.
              </p>
              <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                Goede campagnes sturen op koopklare zoektermen. Dat vraagt om strakke negatieve zoekwoordenlijsten en regelmatige controle van wat mensen daadwerkelijk intypen voordat ze op jouw advertentie klikken. Het is een verschil dat maandelijks tientallen procenten scheelt in de kwaliteit van je aanvragen.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "16px", marginTop: "48px" }}>
                Plek twee: wat er op de website staat
              </h2>
              <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                Een bezoeker op een keukenstudiowebsite neemt binnen 8 seconden een beslissing over of hij blijft of vertrekt. Die 8 seconden bepaalt in hoge mate of hij ooit contact opneemt.
              </p>
              <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                Drie dingen die bijna altijd ontbreken op keukenstudiowebsites die te weinig aanvragen genereren. Ten eerste een duidelijke reden waarom iemand juist bij jou moet zijn. Niet &ldquo;al 20 jaar ervaring&rdquo; maar iets dat de bezoeker herkenbaar raakt: &ldquo;Je hebt een keuken voor de rest van je leven in de showroom gezien. Wij zorgen dat die keuken er precies zo uitziet in jouw woning.&rdquo;
              </p>
              <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                Ten tweede: sociaal bewijs. Echte recensies van bestaande klanten, bij voorkeur met een naam en eventueel een foto. Mensen kopen geen keuken op basis van de website alleen, maar recensies verlagen de drempel om contact op te nemen. Een studio met 60 Google-recensies en een gemiddelde van 4,8 wekt meer vertrouwen dan een studio met 8 beoordelingen, ongeacht de kwaliteit van de foto&apos;s.
              </p>
              <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                Ten derde: een concrete actie die laagdrempelig is. &ldquo;Vraag een offerte aan&rdquo; voelt als een verplichting. &ldquo;Plan een vrijblijvend gesprek van 20 minuten in&rdquo; of &ldquo;Kom langs voor een rondleiding door de showroom&rdquo; voelt als een eerstap.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "16px", marginTop: "48px" }}>
                Plek drie: wat er na de aanvraag gebeurt
              </h2>
              <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                Een aanvraag is het begin, geen afsluiting. Keukenstudio&apos;s die binnen een uur reageren op een online aanvraag sluiten beduidend vaker een afspraak in dan studio&apos;s die pas een dag later terugbellen. De klant heeft in die tussentijd mogelijk al bij een concurrent een reactie gekregen.
              </p>
              <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                Automatische bevestigingsmail direct na de aanvraag, gevolgd door een persoonlijk telefoontje binnen een uur: dat is de combinatie die werkt. Het laat zien dat je snel en professioneel reageert, wat in een branche waar mensen tienduizenden euro&apos;s uitgeven een relevante kwaliteitssignaal is.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "16px", marginTop: "48px" }}>
                Waar begin je?
              </h2>
              <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                De meeste keukenstudio&apos;s halen de grootste winst uit plek twee: de website zelf. Een betere website werkt voor elk kanaal tegelijk, of je nu via SEO, Google Ads of social media bezoekers binnenhaalt.
              </p>
              <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                Groeimaten werkt uitsluitend voor keukenstudio&apos;s, badkamerbedrijven en bedrijven in de bouw. We kennen de sector en weten precies wat wel en niet werkt. Plan een gesprek in, dan kijken we naar jouw situatie.
              </p>
              <div style={{ marginTop: "32px" }}>
                <Link
                  href="/afspraak"
                  className="btn btn--primary"
                  style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
                >
                  Plan een gratis gesprek {arrowIcon}
                </Link>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>
    </>
  )
}

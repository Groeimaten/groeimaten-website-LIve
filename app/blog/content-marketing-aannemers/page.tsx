import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Content marketing voor aannemers: vertrouwen opbouwen voor de eerste afspraak",
  description:
    "Content marketing voor aannemers werkt anders dan in andere sectoren. Hoe gebruik je blog, video en cases om vertrouwen op te bouwen bij mensen die nog niet weten wie je bent?",
  alternates: {
    canonical: "https://groeimaten.com/blog/content-marketing-aannemers",
  },
  openGraph: {
    title: "Content marketing voor aannemers: vertrouwen opbouwen voor de eerste afspraak",
    description:
      "Hoe bouw je als aannemer online vertrouwen op bij mensen die je nog niet kennen? Content marketing werkt, maar alleen als je het op de juiste manier aanpakt.",
    url: "https://groeimaten.com/blog/content-marketing-aannemers",
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
      name: "Content marketing voor aannemers",
      item: "https://groeimaten.com/blog/content-marketing-aannemers",
    },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Content marketing voor aannemers: vertrouwen opbouwen voor de eerste afspraak",
  description:
    "Hoe gebruik je content marketing als aannemer om online vertrouwen op te bouwen bij mensen die je nog niet kennen?",
  author: { "@type": "Organization", name: "Groeimaten" },
  publisher: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  datePublished: "2026-07-20",
  url: "https://groeimaten.com/blog/content-marketing-aannemers",
}

export default function BlogContentMarketingAannemersPage() {
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
              <span style={{ color: "oklch(55% 0 0)", fontSize: "0.85rem" }}>Content marketing voor aannemers</span>
            </div>
            <span className="section-label">Content strategie</span>
            <h1
              className="page-hero__title"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", lineHeight: "1.2", marginTop: "12px" }}
            >
              Content marketing voor aannemers: vertrouwen opbouwen voor de eerste afspraak
            </h1>
            <p className="page-hero__subtitle" style={{ marginTop: "20px" }}>
              Iemand die een aannemer zoekt voor een verbouwing, besteedt weken aan oriëntatie. Content marketing
              voor aannemers zorgt dat jij zichtbaar bent in die oriëntatiefase, zodat de keuze voor jou al voor
              de eerste afspraak min of meer gemaakt is.
            </p>
            <p style={{ color: "oklch(55% 0 0)", fontSize: "0.88rem", marginTop: "12px" }}>
              Groeimaten · 20 juli 2026 · 5 min lezen
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
              Een verbouwing van 50.000 euro beslis je niet op basis van één Google-advertentie. De meeste opdrachtgevers
              oriënteren zich weken of maanden voor ze contact opnemen. Ze lezen artikelen, kijken foto&apos;s van
              afgeronde projecten en vergelijken aannemers op basis van wat ze online kunnen vinden. Content marketing
              zorgt dat een aannemer in die fase gevonden wordt en een goede indruk achterlaat.
            </p>
            <p>
              Het principe is simpel: je publiceert nuttige, relevante content die de vragen beantwoordt die potentiële
              opdrachtgevers stellen tijdens hun oriëntatie. Daarmee bouw je zichtbaarheid op in Google en zichtbaarheid
              in de hoofden van mensen die nog niet actief op zoek zijn maar dat binnenkort wel zullen zijn.
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
              Wat voor content werkt voor aannemers?
            </h2>
            <p>
              De meest effectieve content voor aannemers is gebaseerd op vragen die opdrachtgevers echt stellen.
              &ldquo;Wat kost een uitbouw gemiddeld?&rdquo; &ldquo;Hoe lang duurt een complete badkamerrenovatie?&rdquo;
              &ldquo;Wat moet ik regelen voor de verbouwing begint?&rdquo; Dit zijn vragen die mensen intypen in
              Google of stellen aan ChatGPT. Een artikel dat die vraag goed beantwoordt, trekt precies de juiste
              bezoekers.
            </p>
            <p>
              Projectpresentaties zijn een tweede effectieve vorm. Een uitgebreide beschrijving van een recent project
              met foto&apos;s, uitleg over de aanpak en het resultaat doet meerdere dingen tegelijk: het toont vakmanschap,
              het geeft een beeld van je werkwijze en het bevat zoekwoorden die lokaal relevant zijn. &ldquo;Aanbouw
              laten bouwen in [stad]&rdquo; is als zoekterm waardevoller dan een generiek artikel over verbouwingen.
            </p>
            <p>
              Video is een derde vorm die steeds meer aandacht trekt. Een timelapse van een project, een korte rondleiding
              na oplevering of een uitleg van een vakterm: dat soort content presteert goed op sociale media en bouwt
              een persoonlijker beeld op van het bedrijf dan tekst alleen.
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
              Regelmaat boven perfectie
            </h2>
            <p>
              De meest gemaakte fout bij content marketing is afwachten tot er iets perfecte te publiceren valt.
              Een aannemer die eens per kwartaal een uitgebreid stuk plaatst, presteert slechter dan een aannemer
              die maandelijks een korter maar relevant stuk publiceert. Regelmaat signaleert aan Google dat de site
              actief is en bouwt geleidelijk autoriteit op.
            </p>
            <p>
              Dat betekent niet dat kwaliteit er niet toe doet. Dunne, generieke content die niets specifieks zegt
              heeft weinig waarde. De beste aanpak is content die specifiek genoeg is om nuttig te zijn, maar
              regelmatig genoeg gepubliceerd om zichtbaarheid op te bouwen.
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
              De verbinding met SEO en advertenties
            </h2>
            <p>
              Content marketing en SEO versterken elkaar direct. Elk artikel dat je publiceert is een extra pagina
              die in Google kan ranken. Hoe meer relevante pagina&apos;s je hebt, hoe groter het oppervlak waarmee
              je potentiële opdrachtgevers kunt bereiken.
            </p>
            <p>
              De verbinding met advertenties is ook waardevol. Iemand die via een advertentie op je site komt maar
              nog niet klaar is om contact op te nemen, kan via retargeting later opnieuw bereikt worden. Als die
              persoon in de tussentijd ook een blogartikel van je heeft gelezen, is de kans groter dat hij uiteindelijk
              kiest voor jou.
            </p>
            <p>
              Content marketing is geen snelle oplossing. Het is een investering die in de eerste maanden weinig
              direct opbrengt maar na zes tot twaalf maanden een constante stroom bezoekers oplevert die al
              vertrouwd zijn met je bedrijf. Aannemers die dat fundament leggen, zijn minder afhankelijk van
              advertentiebudget voor elke aanvraag.
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
                Wil je weten hoe content marketing voor jouw aannemersbedrijf kan werken?
              </p>
              <p style={{ marginBottom: "20px", color: "oklch(70% 0 0)" }}>
                Groeimaten begeleidt aannemers en bouwbedrijven bij het opzetten van een contentstrategie die
                past bij hun diensten, regio en doelgroep. Plan een gratis gesprek.
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

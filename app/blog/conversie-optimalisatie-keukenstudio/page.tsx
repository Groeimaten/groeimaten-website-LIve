import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Conversie optimalisatie keukenstudio: van bezoeker naar afspraak",
  description:
    "Veel keukenstudio's hebben genoeg websiteverkeer. Het probleem is dat bezoekers vertrekken zonder contact op te nemen. Waar liggen de oorzaken en wat werkt om het te verbeteren?",
  alternates: {
    canonical: "https://groeimaten.com/blog/conversie-optimalisatie-keukenstudio",
  },
  openGraph: {
    title: "Conversie optimalisatie keukenstudio: van bezoeker naar afspraak",
    description:
      "Waarom bezoekers van keukenstudiowebsites vertrekken zonder contact en wat je eraan kunt doen.",
    url: "https://groeimaten.com/blog/conversie-optimalisatie-keukenstudio",
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
      name: "Conversie optimalisatie keukenstudio",
      item: "https://groeimaten.com/blog/conversie-optimalisatie-keukenstudio",
    },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Conversie optimalisatie keukenstudio: van bezoeker naar afspraak",
  description:
    "Waarom bezoekers van keukenstudiowebsites vertrekken zonder contact en wat je eraan kunt doen.",
  author: { "@type": "Organization", name: "Groeimaten" },
  publisher: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  datePublished: "2026-08-10",
  url: "https://groeimaten.com/blog/conversie-optimalisatie-keukenstudio",
}

export default function BlogConversieOptimalisatieKeukenstudioPage() {
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
              <span style={{ color: "oklch(55% 0 0)", fontSize: "0.85rem" }}>Conversie optimalisatie keukenstudio</span>
            </div>
            <span className="section-label">Keukenmarketing</span>
            <h1
              className="page-hero__title"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", lineHeight: "1.2", marginTop: "12px" }}
            >
              Conversie optimalisatie voor een keukenstudio: van bezoeker naar showroomafspraak
            </h1>
            <p className="page-hero__subtitle" style={{ marginTop: "20px" }}>
              Negen van de tien bezoekers verlaten een keukenstudiowebsite zonder contact op te nemen. Dat is normaal. Maar er is een groot verschil tussen een studio die 8 procent converteert en een studio die 1 procent converteert. Die kloof zit bijna nooit in het verkeer, maar in de website zelf.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "0 0 80px" }}>
        <div className="container">
          <div style={{ maxWidth: "720px" }}>

            <ScrollReveal>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "16px", marginTop: "48px" }}>
                Laadtijd op mobiel
              </h2>
              <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                Meer dan 60 procent van de bezoekers op een keukenstudiowebsite komt via mobiel. Als een pagina op een telefoon langer dan drie seconden laadt, verlaat gemiddeld de helft van de bezoekers de pagina voordat die volledig is geladen. Ze zien nog niks, maar ze zijn al weg.
              </p>
              <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                Grote, niet-geoptimaliseerde afbeeldingen zijn veruit de meest voorkomende oorzaak van trage laadtijden. Een foto van 4 megabyte die als decoratie op de homepage staat kost bezoekers die jij nooit terugziet. Geoptimaliseerde afbeeldingen in het WebP-formaat met de juiste afmetingen lossen dit probleem volledig op zonder dat het zichtbaar is voor de bezoeker.
              </p>
              <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                Je kunt de laadtijd van je website gratis testen via Google PageSpeed Insights. Een score onder 70 op mobiel is een probleem dat direct aanpak vraagt.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "16px", marginTop: "48px" }}>
                Een onduidelijke reden om jou te kiezen
              </h2>
              <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                Een bezoeker op jouw website heeft in veel gevallen ook de websites van twee of drie concurrenten bekeken. Als de boodschap op jouw website niet direct duidelijk maakt waarom jij de betere keuze bent, maakt het voor hem weinig uit bij wie hij aanvraagt.
              </p>
              <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                Het probleem is niet dat keukenstudio&apos;s slecht zijn in hun vak. Het probleem is dat ze dat vak niet laten zien op een manier die de bezoeker raakt. Technische specificaties van leveranciers, een rij merknamen en een generieke omschrijving van &ldquo;maatwerk keukens&rdquo; zeggen een klant weinig als hij nog nooit jouw showroom heeft bezocht.
              </p>
              <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                Wat wél werkt: een heldere beschrijving van het type klant waarvoor je het beste resultaat levert, gecombineerd met concrete referentieprojecten. Een keukenstudio die laat zien &ldquo;wij plaatsen keuken 8 tot 30 duizend euro in het segment premiumkwaliteit voor gezinnen die écht willen investeren&rdquo; trekt precies de klanten aan die bij dat profiel passen.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "16px", marginTop: "48px" }}>
                Geen of te weinig sociaal bewijs
              </h2>
              <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                Een keuken kopen is voor de meeste mensen een grote beslissing met een groot prijskaartje. Ze willen zekerheid. Beoordelingen van echte klanten geven die zekerheid op een manier die geen advertentietekst kan evenaren.
              </p>
              <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                Een keukenstudio met minder dan tien Google-recensies staat online zwak, ook al zijn die tien reviews allemaal vijf sterren. Klanten zoeken bewijs dat je herhaaldelijk goed werk levert. Een studio met 80 beoordelingen en een gemiddelde van 4,7 geeft dat bewijs.
              </p>
              <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                Recensies verzamelen gaat niet vanzelf. De meeste tevreden klanten schrijven geen review tenzij ze er actief om gevraagd worden, bij voorkeur direct nadat ze blij zijn met de geplaatste keuken. Een kort bericht of kaartje met de directe link naar je Google-profiel heeft een conversiepercentage dat ver boven alles ligt wat je via andere middelen haalt.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "16px", marginTop: "48px" }}>
                Een call-to-action die te veel vraagt
              </h2>
              <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                &ldquo;Vraag een vrijblijvende offerte aan&rdquo; klinkt neutraal, maar voelt voor een bezoeker toch als een grote stap. Hij weet nog niet eens of hij wil kopen. Hij wil eerst weten of jullie showroom interessant genoeg is om te bezoeken.
              </p>
              <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                Een laagdrempelige eerste stap converteert beter. &ldquo;Maak een afspraak voor een rondleiding van 30 minuten&rdquo; vraagt minder commitment maar leidt uiteindelijk tot hetzelfde gesprek. De kans dat iemand na een showroombezoek terugkomt voor een offerte is groot. De kans dat hij dat doet zonder ooit langs te zijn geweest, is een stuk kleiner.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "16px", marginTop: "48px" }}>
                Wat het oplevert als je dit aanpakt
              </h2>
              <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                Conversie optimalisatie heeft geen directe advertentiekosten. Je investeert één keer in het verbeteren van je website en profiteert maand na maand van het hogere rendement op het verkeer dat toch al binnenkomt.
              </p>
              <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                Groeimaten heeft met meerdere keukenstudio&apos;s gewerkt aan precies dit soort verbeteringen. We weten wat werkt en wat niet in jouw sector. Plan een gesprek in als je wilt weten wat er voor jou mogelijk is.
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

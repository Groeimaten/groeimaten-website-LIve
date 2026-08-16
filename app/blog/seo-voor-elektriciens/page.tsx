import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "SEO voor elektriciens: gevonden worden terwijl je aan het werk bent",
  description:
    "Elektriciens die bovenaan Google staan in hun regio krijgen aanvragen zonder advertentiebudget. Hoe werkt lokale SEO voor een elektriciensbedrijf en wat levert het op?",
  alternates: {
    canonical: "https://groeimaten.com/blog/seo-voor-elektriciens",
  },
  openGraph: {
    title: "SEO voor elektriciens: gevonden worden terwijl je aan het werk bent",
    description:
      "Hoe elektriciens lokale SEO gebruiken om structureel aanvragen te genereren zonder afhankelijk te zijn van advertentiebudget.",
    url: "https://groeimaten.com/blog/seo-voor-elektriciens",
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
      name: "SEO voor elektriciens",
      item: "https://groeimaten.com/blog/seo-voor-elektriciens",
    },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "SEO voor elektriciens: gevonden worden terwijl je aan het werk bent",
  description:
    "Hoe elektriciens lokale SEO gebruiken om structureel aanvragen te genereren zonder afhankelijk te zijn van advertentiebudget.",
  author: { "@type": "Organization", name: "Groeimaten" },
  publisher: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  datePublished: "2026-08-10",
  url: "https://groeimaten.com/blog/seo-voor-elektriciens",
}

export default function BlogSeoVoorElectricienPage() {
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
              <span style={{ color: "oklch(55% 0 0)", fontSize: "0.85rem" }}>SEO voor elektriciens</span>
            </div>
            <span className="section-label">SEO</span>
            <h1
              className="page-hero__title"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", lineHeight: "1.2", marginTop: "12px" }}
            >
              SEO voor elektriciens: gevonden worden terwijl je aan het werk bent
            </h1>
            <p className="page-hero__subtitle" style={{ marginTop: "20px" }}>
              Als iemand zoekt naar een elektricien in jouw stad, heeft hij al besloten dat hij er een nodig heeft. De vraag is alleen nog welke. Wie bovenaan staat, krijgt het telefoontje. Wie dat niet is, bestaat niet voor die klant.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "0 0 80px" }}>
        <div className="container">
          <div style={{ maxWidth: "720px" }}>

            <ScrollReveal>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "16px", marginTop: "48px" }}>
                Wat SEO voor een elektricien betekent in de praktijk
              </h2>
              <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                SEO staat voor Search Engine Optimization, maar voor een elektricien betekent het concreet: zorgen dat jouw bedrijf verschijnt als mensen in jouw werkgebied zoeken naar een elektricien. Niet als vage merkbekendheid, maar als resultaat op zoektermen waarop mensen daadwerkelijk klikken.
              </p>
              <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                Lokale SEO voor elektriciens draait om drie lagen. De eerste is je Google Bedrijfsprofiel, het kaartresultaat dat mensen zien als ze zoeken op &ldquo;elektricien Utrecht&rdquo;. De tweede is je website, die moet aansluiten bij de specifieke diensten en locaties waarvoor je gevonden wilt worden. De derde is autoriteit: externe signalen die Google vertellen dat jij een betrouwbare speler bent in jouw markt.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "16px", marginTop: "48px" }}>
                Het Google Bedrijfsprofiel als startpunt
              </h2>
              <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                Het Google Bedrijfsprofiel is voor veel elektriciens het meest onderschatte onderdeel van hun online aanwezigheid. Een volledig en actief profiel zorgt voor zichtbaarheid in de kaartresultaten, nog vóórdat mensen doorklikken naar een website.
              </p>
              <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                Volledig betekent: alle categorieën correct ingevuld, openingstijden actueel, recente foto&apos;s van het team en van uitgevoerde projecten, en een beschrijving met de diensten en gebieden waar je actief bent. Actief betekent: regelmatig nieuwe Google-recensies ontvangen en beantwoorden. Bedrijven met meer recente recensies ranken hoger dan bedrijven met veel oude beoordelingen en geen nieuwe.
              </p>
              <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                Elektriciens die systematisch hun klanten vragen om een Google-recensie te schrijven, zien dit in de regel terug in hun vindbaarheid binnen drie tot zes maanden.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "16px", marginTop: "48px" }}>
                Een website die diensten en locaties dekt
              </h2>
              <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                Een homepage met &ldquo;Elektricien in de regio Amsterdam&rdquo; is te breed om goed te ranken. Google wil relevantie zien: specifieke pagina&apos;s voor specifieke zoekopdrachten.
              </p>
              <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                Dat betekent in de praktijk aparte pagina&apos;s voor je belangrijkste diensten, zoals groepenkastvervanging, zonnepaneelinstallatie, domotica of storingsdienst. En aparte pagina&apos;s voor de steden en wijken waar je werkt. Een elektricien die actief is in Haarlem, Heemstede en Bloemendaal heeft bij voorkeur een aparte pagina voor elk van die plaatsen.
              </p>
              <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                Die pagina&apos;s hoeven niet lang te zijn, maar ze moeten specifiek zijn. Bezoekers die zoeken op &ldquo;elektricien Bloemendaal&rdquo; en op jouw Bloemendaal-pagina landen, weten direct dat ze op het juiste adres zijn. Dat verlaagt je bouncepercentage en verhoogt je kans op een aanvraag.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "16px", marginTop: "48px" }}>
                Hoe lang duurt het voordat SEO resultaat geeft?
              </h2>
              <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                Dat is de vraag die elke elektricien stelt. Het eerlijke antwoord is: drie tot zes maanden voordat je eerste merkbare positieverbetering ziet, en zes tot twaalf maanden voordat SEO een structurele bijdrage levert aan je aanvragenvolume.
              </p>
              <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                In gebieden met weinig concurrentie gaat het sneller. In grote steden waar tientallen elektriciens actief zijn, duurt het langer. In beide gevallen geldt dat elk uur dat je wacht met beginnen, het moment dat je terugverdient verder wegschuift.
              </p>
              <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                Elektriciens die zowel SEO als Google Ads inzetten combineren het beste van twee werelden. Advertenties leveren direct aanvragen op terwijl SEO aan kracht wint. Op termijn neemt de afhankelijkheid van advertentiebudget af naarmate de organische positie sterker wordt.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "16px", marginTop: "48px" }}>
                Wat Groeimaten doet voor elektriciens
              </h2>
              <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                Groeimaten werkt voor bedrijven in de installatie, bouw en afbouw. We kennen de markt, de concurrentie en de zoekpatronen die in jouw sector relevant zijn. Geen generiek SEO-pakket dat voor bakkers net zo goed werkt als voor elektriciens.
              </p>
              <p style={{ lineHeight: "1.8", marginBottom: "20px" }}>
                Een gratis gesprek duurt een halfuur en levert altijd een concreet beeld op van wat er in jouw regio mogelijk is, wat het kost en wanneer je resultaat kunt verwachten. Geen vage beloftes.
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

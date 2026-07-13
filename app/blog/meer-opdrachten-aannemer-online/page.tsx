import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Meer opdrachten als aannemer via online kanalen: wat werkt en wat niet",
  description:
    "Meer opdrachten aannemer online genereren gaat verder dan een website hebben. Welke kanalen leveren structureel werk op en waarom werkt mond-tot-mond niet meer alleen?",
  alternates: {
    canonical: "https://groeimaten.com/blog/meer-opdrachten-aannemer-online",
  },
  openGraph: {
    title: "Meer opdrachten als aannemer via online kanalen: wat werkt en wat niet",
    description:
      "Welke online kanalen leveren aannemers structureel meer opdrachten op, en welke zijn tijdverspilling?",
    url: "https://groeimaten.com/blog/meer-opdrachten-aannemer-online",
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
      name: "Meer opdrachten aannemer online",
      item: "https://groeimaten.com/blog/meer-opdrachten-aannemer-online",
    },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Meer opdrachten als aannemer via online kanalen: wat werkt en wat niet",
  description:
    "Welke online kanalen leveren aannemers structureel meer opdrachten op, en welke zijn tijdverspilling.",
  author: { "@type": "Organization", name: "Groeimaten" },
  publisher: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  datePublished: "2026-07-13",
  url: "https://groeimaten.com/blog/meer-opdrachten-aannemer-online",
}

export default function BlogMeerOpdrachtenAannemerOnlinePage() {
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
              <span style={{ color: "oklch(55% 0 0)", fontSize: "0.85rem" }}>Meer opdrachten aannemer online</span>
            </div>
            <span className="section-label">Leadgeneratie</span>
            <h1
              className="page-hero__title"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", lineHeight: "1.2", marginTop: "12px" }}
            >
              Meer opdrachten als aannemer via online kanalen: wat werkt en wat niet
            </h1>
            <p className="page-hero__subtitle" style={{ marginTop: "20px" }}>
              Aannemers die uitsluitend op aanbevelingen vertrouwen, zijn afhankelijk van de activiteit
              van hun netwerk. Wie online zichtbaar is, heeft een extra instroom die onafhankelijk werkt.
              Maar welke kanalen leveren daadwerkelijk opdrachten op en welke kosten tijd zonder rendement?
            </p>
            <p style={{ color: "oklch(55% 0 0)", fontSize: "0.88rem", marginTop: "12px" }}>
              Groeimaten · 13 juli 2026 · 7 min lezen
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
              De meeste aannemers hebben meer werk dan ze aankunnen gedurende een deel van het jaar,
              en te weinig gedurende de rest. Dat ritme is vervelend om op te sturen. Online marketing
              doorbreekt dat patroon niet volledig, maar zorgt wel voor een stabielere instroom van
              aanvragen het hele jaar door.
            </p>
            <p>
              Het begint met een eerlijk beeld van wat online kanalen kunnen en wat ze niet kunnen.
              Een aannemer die verwacht dat een website of een paar advertenties dezelfde kwaliteit
              opdrachtgevers oplevert als zijn beste aanbeveling, zal teleurgesteld zijn. Online leads
              zijn gemiddeld minder warm. Maar ze zijn wel aanwezig, ook als het netwerk een rustige
              periode heeft.
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
              Google Ads: directe aanvragen voor aannemers
            </h2>
            <p>
              Google Ads is voor aannemers het kanaal met de kortste aanlooptijd. Een campagne kan
              binnen een paar dagen live zijn en aanvragen opleveren. Het werkt omdat mensen die zoeken
              op &ldquo;aannemer uitbouw Rotterdam&rdquo; of &ldquo;verbouwing badkamer Den Haag&rdquo;
              een concrete vraag hebben die ze willen beantwoorden.
            </p>
            <p>
              De uitdaging zit in het begrenzen van de campagne. Google Ads voor aannemers trekt ook
              aanvragen aan die niet passen bij het bedrijf: te klein, buiten het werkgebied of voor
              werkzaamheden die je niet doet. Goede campagnes worden scherp gericht op zoekwoorden
              die passen bij het type werk dat het meeste oplevert.
            </p>
            <p>
              Kosten per klik in de aannemerssector liggen doorgaans tussen de twee en acht euro,
              afhankelijk van de regio en het type werkzaamheden. Spoedklussen zijn duurder dan
              planmatige verbouwingen. De campagne is winstgevend als de klantwaarde voldoende is om
              de kosten per aanvraag te dragen, wat bij de meeste aannemers het geval is bij
              verbouwingen boven de 10.000 euro.
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
              SEO voor aannemers: langzaam maar structureel
            </h2>
            <p>
              SEO levert geen aanvragen op in de eerste maand. Het is een investering met een aanlooptijd
              van zes tot twaalf maanden. Maar een aannemer die drie jaar geleden met SEO is begonnen,
              heeft nu een positie die organisch aanvragen oplevert zonder doorlopend advertentiebudget.
            </p>
            <p>
              Voor aannemers is lokale SEO de meest relevante vorm. Gevonden worden voor
              &ldquo;aannemer [stad]&rdquo; of &ldquo;renovatiebedrijf [regio]&rdquo; levert aanvragen
              op van mensen die actief zoeken in jouw werkgebied. Die combinatie van lokale context en
              zoekintentie is waardevol.
            </p>
            <p>
              De basis is een website met duidelijke pagina&apos;s per dienst, een volledig Google
              Mijn Bedrijf-profiel en actieve reviews van eerdere opdrachtgevers. Aanvullend kan
              content over specifieke werkzaamheden of over projecten die zijn afgerond de positie
              versterken. Die content beantwoordt vragen die potentiële opdrachtgevers stellen voordat
              ze een aannemer bellen.
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
              Meta Ads voor aannemers: bereik dat buiten zoekgedrag gaat
            </h2>
            <p>
              Facebook en Instagram bereiken mensen die nog niet zoeken. Dat maakt Meta Ads anders van
              aard dan Google Ads. Een advertentie op Meta wordt getoond aan mensen die voldoen aan
              bepaalde kenmerken: huiseigenaren in een bepaalde regio, in een bepaalde leeftijdsgroep,
              met bepaald online gedrag.
            </p>
            <p>
              Voor aannemers die grotere verbouwingen doen, werken Meta Ads goed voor het ophalen van
              oriënterende aanvragen. De persoon die de advertentie ziet heeft misschien al langer
              het idee gehad om iets aan de woning te doen maar er nog niet actief naar gezocht. De
              advertentie haalt die latente behoefte naar boven.
            </p>
            <p>
              De opvolging van Meta Ads-leads vereist meer geduld dan bij Google Ads-leads. Ze zijn
              minder direct koopklaar. Een aannemerbedrijf dat snel reageert, een duidelijk beeld geeft
              van het proces en vertrouwen opbouwt, kan die oriënterende aanvraag omzetten in een
              serieus gesprek.
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
              Wat niet werkt: leadplatforms en klussensites
            </h2>
            <p>
              Platforms zoals Werkspot, Kluslink of vergelijkbare diensten verkopen aanvragen aan
              meerdere aannemers tegelijk. Dat betekent concurrentie op prijs. De aanvraag die binnenkomt
              is ook gestuurd naar twee of drie andere bedrijven, waarna de opdrachtgever de goedkoopste
              kiest of de eerste die belt.
            </p>
            <p>
              Die dynamiek maakt leads van klussensites gemiddeld minder winstgevend dan leads die
              direct via de eigen website of via Google Ads binnenkomen. Bij een directe aanvraag is er
              geen concurrent die dezelfde lead heeft. De opdrachtgever heeft jou gevonden en is geïnteresseerd
              in jou, niet in wie het goedkoopst is.
            </p>
            <p>
              Eigen aanvragen via eigen kanalen zijn kwalitatief beter en gunstiger geprijsd per gewonnen
              opdracht. Het vraagt een investering in het opbouwen van die kanalen, maar die investering
              betaalt zich terug.
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
                Klaar voor een stabielere aanvraagstroom?
              </p>
              <p style={{ marginBottom: "20px", color: "oklch(70% 0 0)" }}>
                Groeimaten helpt aannemers en bouwbedrijven met online marketing die aanvragen oplevert.
                Plan een gratis gesprek en we kijken samen welke aanpak het beste past bij jouw bedrijf.
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

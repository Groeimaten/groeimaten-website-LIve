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
  author: { "@type": "Person", name: "Thomas Ghobadi", sameAs: "https://www.linkedin.com/in/thomasghobadi/" },
  publisher: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  datePublished: "2026-06-22",
  dateModified: "2026-11-13",
  url: "https://groeimaten.com/blog/website-laten-maken-keukenbedrijf",
}

const faqItems = [
  {
    "q": "Wat moet er minimaal op de website van een keukenbedrijf staan?",
    "a": "Eigen projectfoto's, een showroompagina met adres en openingstijden, een duidelijke knop om een showroombezoek of adviesgesprek te plannen, reviews van echte klanten en antwoorden op de vragen die klanten in de showroom stellen. Alles wat daar niet aan bijdraagt kan later."
  },
  {
    "q": "Hoe snel moet een keukenwebsite laden?",
    "a": "Google noemt een Largest Contentful Paint van maximaal 2,5 seconde goed, een CLS van maximaal 0,1 en een INP van maximaal 200 milliseconden. De homepage van groeimaten.com zat in augustus 2026 op ruim 6 seconden en haalt sinds het verkleinen van de hoofdafbeelding ongeveer 1,1 seconde."
  },
  {
    "q": "Moet ik prijzen op mijn keukenwebsite zetten?",
    "a": "Een prijsindicatie of prijsrange helpt bezoekers inschatten of je bij hun budget past. Een volledige prijslijst zonder context leidt vaker tot afhakers dan tot afspraken. Zet de range neer en nodig daarna uit voor een showroombezoek."
  },
  {
    "q": "Is WordPress geschikt voor een keukenbedrijf?",
    "a": "Het kan, zolang het aantal plugins beperkt blijft en de afbeeldingen goed zijn geoptimaliseerd. Zware thema's en veel plugins zijn een veelvoorkomende oorzaak van een trage laadtijd. Een Next.js-site of een goed gebouwde statische site haalt die snelheid makkelijker."
  },
  {
    "q": "Hoe meet ik of mijn keukenwebsite afspraken oplevert?",
    "a": "Meet het aantal geplande showroombezoeken en adviesgesprekken per maand als conversie in Google Analytics 4, en koppel dat aan de pagina waar de bezoeker binnenkwam. Bezoekersaantallen alleen zeggen weinig: een website met minder bezoekers en meer afspraken doet het beter."
  }
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
}

const h2Style = {
  color: "oklch(95% 0 0)",
  fontSize: "clamp(1.3rem, 3vw, 1.75rem)",
  fontWeight: 700,
  marginTop: "52px",
  marginBottom: "20px",
  lineHeight: "1.3",
} as const

const linkStyle = { color: "oklch(65% 0.09 75)" } as const

export default function BlogWebsiteKeukenbedrijfPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

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
              Thomas Ghobadi · 22 juni 2026 · bijgewerkt 13 november 2026 · 8 min lezen
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
            <div
              style={{
                backgroundColor: "oklch(14% 0 0)",
                borderLeft: "3px solid oklch(65% 0.09 75)",
                borderRadius: "8px",
                padding: "20px 24px",
                marginBottom: "32px",
              }}
            >
              <p style={{ margin: 0 }}>
                <strong style={{ color: "oklch(92% 0 0)" }}>Kort antwoord:</strong> een website voor een keukenbedrijf of keukenwinkel moet vooral showroomafspraken opleveren. Dat lukt met eigen projectfoto&apos;s, een laadtijd onder de 2,5 seconde, een concrete afspraakknop op elke pagina en antwoorden op de vragen die klanten anders in de showroom stellen. Een uitgebreide prijslijst en generieke stockfoto&apos;s kun je overslaan.
              </p>
            </div>
            <p>
              Een website laten maken als keukenbedrijf is niet hetzelfde als een website laten maken voor een accountantskantoor of een webshop. De bezoeker van jouw website staat op een ander punt in zijn koopproces. Hij is aan het oriënteren, vergelijkt stijlen en materialen en probeert een gevoel te krijgen bij jouw bedrijf. Dat bepaalt welke elementen op jouw website het verschil maken.
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
              Veel traditionele webdesign bureaus leveren websites op basis van WordPress met tientallen plugins. Die zijn gemakkelijk te bouwen maar leveren bijna altijd een technisch achterblijvende website op. Een goed gebouwde Next.js of moderne statische website scoort structureel beter op laadtijden en daardoor op rankings.
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

            <h2 style={h2Style}>Eigen meting: van ruim 6 seconden naar 1,1 seconde</h2>
            <p>
              Wat we keukenbedrijven adviseren, meten we eerst op onze eigen site. In augustus 2026 laadde het grootste element op de homepage van groeimaten.com (de Largest Contentful Paint) vijf dagen achter elkaar in 6,2 tot 6,4 seconden, gemeten met PageSpeed Insights. Google noemt alles boven 4 seconden slecht. De oorzaak was geen ingewikkelde code, maar een hoofdfoto van 2,8 MB op 5328 bij 3552 pixels. De mobiele variant was zelfs 13 MB.
            </p>
            <p>
              Na het verkleinen naar 2560 pixels breed (150 KB) en een mobiele versie van 220 KB staat dezelfde homepage in de meting van 12 november 2026 op een LCP van ongeveer 1,1 seconde en een prestatiescore van 99 van de 100. Er is geen pagina opnieuw ontworpen. Voor een keukenbedrijf is dit precies het risico: hoe mooier en groter de projectfoto&apos;s, hoe trager de site, tenzij iemand ze bij het plaatsen verkleint en in een modern formaat als WebP aanbiedt.
            </p>
            <p>
              De drempels die Google zelf hanteert voor een goede ervaring staan op{" "}
              <a href="https://web.dev/articles/vitals" style={linkStyle} rel="noopener">
                web.dev
              </a>
              : een LCP van maximaal 2,5 seconde, een Cumulative Layout Shift van maximaal 0,1 en een Interaction to Next Paint van maximaal 200 milliseconden. Vraag je webbouwer om die drie waarden bij de oplevering, gemeten op mobiel.
            </p>

            <h2 style={h2Style}>Checklist: wat er op een keukenwebsite moet staan</h2>
            <p>
              Een keukenwinkel heeft geen tientallen pagina&apos;s nodig. Deze onderdelen maken in de praktijk het verschil tussen een visitekaartje en een website die afspraken oplevert:
            </p>
            <ul style={{ paddingLeft: "22px", margin: "16px 0 24px" }}>
              <li style={{ marginBottom: "10px" }}>
                <strong style={{ color: "oklch(90% 0 0)" }}>Projectpagina&apos;s met eigen foto&apos;s</strong>, per keuken een korte beschrijving van stijl, materialen en plaats. Zo vindt een bezoeker voorbeelden die op zijn eigen wensen lijken.
              </li>
              <li style={{ marginBottom: "10px" }}>
                <strong style={{ color: "oklch(90% 0 0)" }}>Een showroompagina</strong> met adres, openingstijden, parkeren en een route. Dezelfde gegevens als in je Google Bedrijfsprofiel, zodat Google ze aan elkaar koppelt.
              </li>
              <li style={{ marginBottom: "10px" }}>
                <strong style={{ color: "oklch(90% 0 0)" }}>Eén concrete afspraakknop</strong>, zoals &ldquo;Plan een showroombezoek&rdquo;, bovenaan elke pagina en na elk inhoudsblok.
              </li>
              <li style={{ marginBottom: "10px" }}>
                <strong style={{ color: "oklch(90% 0 0)" }}>Reviews van echte klanten</strong>, bij voorkeur gekoppeld aan het project waar ze over gaan.
              </li>
              <li style={{ marginBottom: "10px" }}>
                <strong style={{ color: "oklch(90% 0 0)" }}>Antwoorden op showroomvragen</strong>: levertijd, montage, inmeten, garantie en financiering. Wat klanten aan de balie vragen, zoeken ze eerst op Google en in AI-assistenten.
              </li>
              <li style={{ marginBottom: "10px" }}>
                <strong style={{ color: "oklch(90% 0 0)" }}>Gestructureerde gegevens</strong> (LocalBusiness- en FAQ-schema) in de HTML zelf, zodat zoekmachines je adres, openingstijden en antwoorden zonder JavaScript kunnen lezen.
              </li>
            </ul>
            <p>
              Wil je zien hoe wij dat voor keukenbedrijven inrichten, kijk dan bij{" "}
              <Link href="/keuken-website-bouwen" style={linkStyle}>
                keuken website bouwen
              </Link>
              . Hoe de website past in de rest van je marketing lees je in{" "}
              <Link href="/blog/online-marketing-keukenbranche" style={linkStyle}>
                online marketing voor de keukenbranche
              </Link>
              , en hoe je van bezoekers naar afspraken gaat op{" "}
              <Link href="/meer-showroomafspraken" style={linkStyle}>
                meer showroomafspraken
              </Link>
              .
            </p>

            <h2 style={h2Style}>Veelgestelde vragen over een website voor een keukenbedrijf</h2>
            {faqItems.map((item) => (
              <div key={item.q} style={{ marginBottom: "24px" }}>
                <h3 style={{ color: "oklch(92% 0 0)", fontSize: "1.15rem", fontWeight: 600, marginBottom: "8px" }}>
                  {item.q}
                </h3>
                <p>{item.a}</p>
              </div>
            ))}

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

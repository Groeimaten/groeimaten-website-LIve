import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Online marketing voor badkamer- en sanitairbedrijven",
  description:
    "Online marketing voor badkamerbedrijven en sanitairbedrijven: welke kanalen showroomafspraken opleveren, marktcijfers met bron en wat wij zelf meten in Search Console.",
  alternates: {
    canonical: "https://groeimaten.com/blog/online-marketing-badkamerbedrijf",
  },
  openGraph: {
    title: "Online marketing voor badkamer- en sanitairbedrijven",
    description:
      "Welke online marketing werkt echt voor een badkamer- of sanitairbedrijf? Kanalen, marktcijfers met bron en eigen metingen van Groeimaten.",
    url: "https://groeimaten.com/blog/online-marketing-badkamerbedrijf",
  },
}

const arrowIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const h2Style = {
  color: "oklch(95% 0 0)",
  fontSize: "clamp(1.3rem, 3vw, 1.75rem)",
  fontWeight: 700,
  marginTop: "52px",
  marginBottom: "20px",
  lineHeight: "1.3",
} as const

const linkStyle = { color: "oklch(65% 0.09 75)" } as const

const thStyle = {
  textAlign: "left",
  padding: "10px 12px",
  borderBottom: "1px solid oklch(30% 0 0)",
  color: "oklch(92% 0 0)",
  fontWeight: 600,
} as const

const tdStyle = {
  padding: "10px 12px",
  borderBottom: "1px solid oklch(22% 0 0)",
  verticalAlign: "top",
} as const

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://groeimaten.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://groeimaten.com/blog" },
    { "@type": "ListItem", position: 3, name: "Online marketing badkamerbedrijf", item: "https://groeimaten.com/blog/online-marketing-badkamerbedrijf" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Online marketing voor badkamer- en sanitairbedrijven: van zichtbaarheid naar showroomafspraken",
  description:
    "Welke online marketing werkt echt voor een badkamer- of sanitairbedrijf, met marktcijfers en eigen metingen.",
  author: { "@type": "Person", name: "Thomas Ghobadi", sameAs: "https://www.linkedin.com/in/thomasghobadi/" },
  publisher: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  datePublished: "2026-06-22",
  dateModified: "2026-11-20",
  url: "https://groeimaten.com/blog/online-marketing-badkamerbedrijf",
}

const faqItems = [
  {
    q: "Wat houdt online marketing voor sanitairbedrijven in?",
    a: "Online marketing voor sanitairbedrijven is het samenspel van Google Ads, Meta Ads, SEO en een website die bezoekers omzet in showroomafspraken of offerteaanvragen. Het verschil met algemene marketing zit in de klant: die oriënteert zich weken, vergelijkt meerdere showrooms en wil voorbeelden zien. Elk kanaal moet daarom naar een concrete afspraak leiden, niet alleen naar bezoekers.",
  },
  {
    q: "Wat doet een bureau voor online marketing voor badkamerspecialisten?",
    a: "Een bureau voor badkamerspecialisten richt de advertenties, de website en de vindbaarheid in rond de vragen die badkamerklanten stellen, en meet wat elk kanaal oplevert aan geplande gesprekken. Vraag bij elk bureau welke cijfers het maandelijks rapporteert. Alleen klikken en bereik zeggen weinig; aanvragen, afspraken en kosten per afspraak zeggen wel iets.",
  },
  {
    q: "Hoe kom je als badkamerbedrijf aan leads?",
    a: "De meeste badkamerbedrijven halen leads uit drie bronnen: Google Ads voor mensen die nu zoeken, Meta Ads voor mensen die zich oriënteren, en organische vindbaarheid via SEO en het Google Bedrijfsprofiel. Leadplatforms leveren ook aanvragen, maar die worden vaak aan meerdere bedrijven tegelijk verkocht, waardoor je vooral op prijs concurreert.",
  },
  {
    q: "Hoe genereer je badkamer leads zonder leadplatform?",
    a: "Zonder leadplatform genereer je badkamer leads door je eigen kanalen goed in te richten: een website met eigen projectfoto's en één duidelijke afspraakknop, Google Ads op zoekwoorden met koopintentie in je werkgebied, retargeting via Meta Ads en pagina's die letterlijk de vragen van badkamerklanten beantwoorden. De aanvragen zijn dan exclusief voor jou.",
  },
  {
    q: "Waarom levert een hoge positie in Google soms geen klikken op?",
    a: "Een hoge positie levert geen klikken op als de titel niet aansluit op wat iemand typt, of als Google de zoekopdracht anders uitlegt dan jij. Wij stonden in oktober 2026 gemiddeld op positie 5,3 voor 'online marketing sanitairbedrijven', met 252 vertoningen en 0 klikken (Google Search Console). Controleer daarom titel en zoekresultaten samen.",
  },
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

export default function BlogOnlineMarketingBadkamerbedrijfPage() {
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
              <span style={{ color: "oklch(55% 0 0)", fontSize: "0.85rem" }}>Online marketing badkamerbedrijf</span>
            </div>
            <span className="section-label">Marketing</span>
            <h1
              className="page-hero__title"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", lineHeight: "1.2", marginTop: "12px" }}
            >
              Online marketing voor badkamer- en sanitairbedrijven: van zichtbaarheid naar showroomafspraken
            </h1>
            <p className="page-hero__subtitle" style={{ marginTop: "20px" }}>
              Een badkamer is geen impulsaankoop. Je klant oriënteert zich weken lang en vergelijkt meerdere showrooms. Online marketing die aansluit bij dat proces levert betere leads op dan een campagne die gewoon bereik maximaliseert.
            </p>
            <p style={{ color: "oklch(55% 0 0)", fontSize: "0.88rem", marginTop: "12px" }}>
              Thomas Ghobadi · 22 juni 2026 · bijgewerkt 20 november 2026 · 9 min lezen
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
                marginBottom: "36px",
              }}
            >
              <p style={{ margin: 0, color: "oklch(88% 0 0)" }}>
                <strong>Kort antwoord:</strong> online marketing voor een badkamer- of sanitairbedrijf werkt het best als Google Ads, Meta Ads en SEO allemaal sturen op geplande showroomafspraken, niet op klikken. De markt is groot genoeg: keuken- en badkamerspeciaalzaken zetten in 2022 samen 3,22 miljard euro om (Retail Insiders, juli 2024).
              </p>
            </div>

            <p>
              Online marketing voor badkamerbedrijven werkt anders dan voor webshops of dienstverleners met een kort aankoopproces. Een nieuwe badkamer is voor de meeste huishoudens een grote, eenmalige uitgave. Klanten nemen de tijd, bezoeken meerdere showrooms en vragen meerdere offertes op. Marketing die dat aankoopproces begrijpt presteert structureel beter dan marketing die op kortetermijnconversie is gericht.
            </p>

            <h2 style={h2Style}>Hoe groot is de markt voor badkamer- en sanitairbedrijven?</h2>
            <p>
              De omzet van keuken- en badkamerspeciaalzaken is tussen 2015 en 2022 bijna verdubbeld, van 1,68 naar 3,22 miljard euro, volgens cijfers van Retail Insiders (gepubliceerd 26 juli 2024). Tegelijk is de installatiebranche, waar sanitair onder valt, sterk versnipperd: van de 46.420 bedrijven zijn er 38.120 zelfstandigen (Techniek Nederland, cijferjaar 2024).
            </p>
            <div style={{ overflowX: "auto", margin: "24px 0" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
                <caption style={{ textAlign: "left", color: "oklch(70% 0 0)", marginBottom: "8px", fontSize: "0.9rem" }}>
                  De markt van badkamer- en sanitairbedrijven in cijfers
                </caption>
                <thead>
                  <tr>
                    <th style={thStyle}>Cijfer</th>
                    <th style={thStyle}>Waarde</th>
                    <th style={thStyle}>Bron</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={tdStyle}>Omzet keuken- en badkamerspeciaalzaken 2015</td>
                    <td style={tdStyle}>1,68 miljard euro</td>
                    <td style={tdStyle}>Retail Insiders, juli 2024</td>
                  </tr>
                  <tr>
                    <td style={tdStyle}>Omzet keuken- en badkamerspeciaalzaken 2022</td>
                    <td style={tdStyle}>3,22 miljard euro</td>
                    <td style={tdStyle}>Retail Insiders, juli 2024</td>
                  </tr>
                  <tr>
                    <td style={tdStyle}>Groei 2015 tot 2022 (eigen berekening)</td>
                    <td style={tdStyle}>ruim 90 procent</td>
                    <td style={tdStyle}>berekend uit de twee regels hierboven</td>
                  </tr>
                  <tr>
                    <td style={tdStyle}>Bedrijven in de installatiebranche</td>
                    <td style={tdStyle}>46.420</td>
                    <td style={tdStyle}>Techniek Nederland, 2024</td>
                  </tr>
                  <tr>
                    <td style={tdStyle}>Waarvan zelfstandigen</td>
                    <td style={tdStyle}>38.120 (82 procent, eigen berekening)</td>
                    <td style={tdStyle}>Techniek Nederland, 2024</td>
                  </tr>
                  <tr>
                    <td style={tdStyle}>Middelgrote bedrijven</td>
                    <td style={tdStyle}>604</td>
                    <td style={tdStyle}>Techniek Nederland, 2024</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Wat dat voor je marketing betekent: een badkamerbedrijf met een showroom concurreert online niet alleen met andere showrooms, maar ook met duizenden zelfstandige installateurs die op dezelfde zoekwoorden en leadplatforms zitten. Op prijs win je dat niet. Je wint het met wat een zelfstandige zonder showroom niet kan laten zien: eigen projecten, advies in de showroom en een ontwerp dat de klant vooraf kan beleven. Dat moet in elke advertentie en op elke pagina terugkomen. Bronnen:{" "}
              <a href="https://ede.nieuws.nl/zakelijk/omzet-keuken-en-badkamerspeciaalzaken-in-zeven-jaar-tijd-nagenoeg-verdubbeld" style={linkStyle} rel="noopener">
                Retail Insiders via ede.nieuws.nl
              </a>{" "}
              en de{" "}
              <a href="https://www.technieknederland.nl/media/jwhn5cea/infographic-installatiebranche-2024.pdf" style={linkStyle} rel="noopener">
                infographic installatiebranche 2024 van Techniek Nederland
              </a>
              .
            </p>

            <h2 style={h2Style}>Google Ads: aanwezig op het moment van zoeken</h2>
            <p>
              Google Ads is voor badkamerbedrijven een van de meest directe marketingkanalen. Iemand die zoekt op &ldquo;badkamer verbouwen Den Haag&rdquo; of &ldquo;nieuwe badkamer laten plaatsen Utrecht&rdquo; is bezig met een concreet project. Die persoon heeft een behoefte en zoekt actief naar een oplossing. Op dat moment bovenaan staan met een goede advertentie levert kwalitatieve aanvragen op.
            </p>
            <p>
              Het verschil tussen een goed en een slecht ingericht Google Ads-account zit in de details: welke zoekwoorden je wel en niet target, hoe je negatieve zoekwoorden inricht om verkeer te filteren, welke advertentieteksten aansluiten bij de koopintentie en hoe je de landingspagina optimaliseert voor conversie. Dat is werk dat doorlopend aandacht nodig heeft, niet een campagne die je eenmalig opzet en vergeet. Wat een account kost en hoe je het inricht lees je in{" "}
              <Link href="/blog/google-ads-badkamerbedrijf" style={linkStyle}>
                Google Ads voor een badkamerbedrijf
              </Link>
              .
            </p>

            <h2 style={h2Style}>Meta Ads: de klant bereiken voor hij zoekt</h2>
            <p>
              Facebook en Instagram bereiken mensen die nog niet actief zoeken maar wel in de doelgroep zitten. Iemand die recent verhuisd is, een oudere woning heeft of in de leeftijdsgroep valt die badkamers renoveert. Meta-targeting maakt het mogelijk die persoon te bereiken met inspirerende beelden voor hij ooit een Google-zoekopdracht doet.
            </p>
            <p>
              Voor badkamerbedrijven werkt dit het beste met een funnelstrategie: brede bekendheidsadvertenties om het merk te introduceren, gevolgd door retargeting op mensen die je website al hebben bezocht. Wie jouw showroomfoto&apos;s heeft gezien en jouw website heeft bekeken maar nog geen contact heeft opgenomen, krijgt een herinnering op het moment dat hij klaar is om een stap te zetten. Meer hierover op{" "}
              <Link href="/meta-ads-badkamerbedrijven" style={linkStyle}>
                Meta Ads voor badkamerbedrijven
              </Link>
              .
            </p>

            <h2 style={h2Style}>SEO als langetermijninvestering</h2>
            <p>
              Betaalde advertenties stoppen met werken zodra je het budget stopzet. SEO bouwt een organische positie op die ook maanden later nog aanvragen genereert. Voor badkamerbedrijven die structureel willen groeien is SEO een aanvulling die op termijn het rendement van marketing verhoogt zonder de kosten per aanvraag te laten stijgen.
            </p>
            <p>
              De kern van SEO voor een badkamerbedrijf zijn goed opgezette dienstpagina&apos;s, lokale content voor de steden en regio&apos;s waar je actief bent, en een technisch gezonde website die Google snel en correct kan indexeren. Dat kost tijd om op te bouwen maar betaalt zich terug over jaren, niet over kwartalen. Zie ook{" "}
              <Link href="/badkamerbedrijf-seo" style={linkStyle}>
                SEO voor badkamerbedrijven
              </Link>
              .
            </p>

            <h2 style={h2Style}>Waarom levert een hoge positie in Google soms geen enkele klik op?</h2>
            <p>
              Een hoge positie levert geen klikken op als je titel niet aansluit op wat iemand letterlijk typt, of als Google de zoekopdracht anders uitlegt dan jij. Dat hebben we op onze eigen site gemeten, en het geldt net zo goed voor een badkamerbedrijf dat op &ldquo;badkamer laten plaatsen&rdquo; plus zijn plaatsnaam gevonden wil worden.
            </p>
            <p>
              In oktober 2026 stond groeimaten.com in Google Search Console gemiddeld op <strong>positie 5,3</strong> voor de zoekopdracht &ldquo;online marketing sanitairbedrijven&rdquo;. Die zoekopdracht kreeg 252 vertoningen en <strong>0 klikken</strong>. Toen we op 25 september 2026 de zoekresultaten zelf bekeken, hadden twee concurrerende bureaus een pagina waarvan de titel vrijwel letterlijk gelijk was aan de zoekopdracht. Geen enkele pagina op onze eigen site had &ldquo;online marketing&rdquo; en &ldquo;sanitairbedrijven&rdquo; samen in de titel. Wie zo zoekt, klikt op het resultaat dat zijn eigen woorden herhaalt. Daarom heet deze pagina sinds 20 november 2026 &ldquo;Online marketing voor badkamer- en sanitairbedrijven&rdquo;.
            </p>
            <p>
              Een tweede les kwam uit dezelfde controle. Voor &ldquo;online marketing badkamerspecialisten&rdquo; toonde Google op 25 september 2026 vooral badkamerbedrijven en verzamelsites als Werkspot en Sanidirect, nauwelijks marketingbureaus. Google las die zoekopdracht dus als een consument die een badkamerspecialist zoekt. Voor jouw badkamerbedrijf betekent dit: kijk eerst welk soort pagina Google bij een zoekwoord laat zien, en bouw pas daarna een pagina. Een blogartikel rankt zelden op een zoekwoord waar Google alleen showrooms en dienstpagina&apos;s toont.
            </p>

            <h2 style={h2Style}>Welke marketing past bij een formulevestiging zoals Baderie of Bad in Beeld?</h2>
            <p>
              Een vestiging van een formule zoals Baderie, Bad in Beeld of InstalCenter (alle drie onderdeel van{" "}
              <a href="https://igm.nl/" style={linkStyle} rel="noopener">
                IGM
              </a>
              ) heeft een landelijk merk achter zich, maar wint klanten in de eigen regio. IGM noemt zelf ondersteuning bij onder meer marketing; hoe het werk tussen formule en vestiging verdeeld is, verschilt per formule en per afspraak.
            </p>
            <p>
              In de praktijk komt dat neer op drie dingen die per vestiging verschillen: een volledig en actief Google Bedrijfsprofiel met eigen reviews, advertenties die alleen in het eigen werkgebied draaien, en eigen projectfoto&apos;s naast het formulebeeld. Leg vooraf vast wat de formule centraal regelt en wat je zelf mag doen, zodat je niet tegen je eigen hoofdkantoor op biedt in Google Ads.
            </p>

            <h2 style={h2Style}>Wat kun je als badkamerbedrijf beter overslaan?</h2>
            <p>
              Aanwezigheid op vergelijkingssites en leadplatforms lijkt aantrekkelijk maar levert voor badkamerbedrijven zelden kwalitatieve aanvragen op. Je concurreert er direct op prijs met andere bedrijven tegelijk. De leads die eruit komen zijn vaak mensen die de laagste prijs willen, niet de beste kwaliteit. Als jij je onderscheidt op vakmanschap en kwaliteit is dat het verkeerde publiek. Hoe je eigen aanvragen opbouwt lees je in{" "}
              <Link href="/blog/badkamer-leads-genereren" style={linkStyle}>
                badkamer leads genereren
              </Link>
              .
            </p>
            <p>
              Hetzelfde geldt voor generieke sociale media aanwezigheid zonder strategie. Een Instagram-profiel bijhouden kost tijd maar levert weinig op als er geen doordachte campagnestrategie achter zit. Beter focussen op de kanalen die aantoonbaar aanvragen genereren en die goed inrichten dan overal een beetje aanwezig zijn. Het doel blijft{" "}
              <Link href="/meer-showroomafspraken" style={linkStyle}>
                meer showroomafspraken
              </Link>
              , niet meer volgers.
            </p>

            <h2 style={h2Style}>Veelgestelde vragen over online marketing voor badkamer- en sanitairbedrijven</h2>
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
                Wil je een marketingstrategie die echt werkt voor jouw badkamerbedrijf?
              </p>
              <p style={{ marginBottom: "20px", color: "oklch(70% 0 0)" }}>
                Plan een gratis strategiegesprek en ontdek welke kanalen het beste passen bij jouw situatie.
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

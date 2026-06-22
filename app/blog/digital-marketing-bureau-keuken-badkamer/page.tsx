import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Digital marketing bureau voor keuken en badkamer: wat je echt nodig hebt",
  description:
    "Een generiek marketing bureau kent jouw klant niet. Wat maakt een digital marketing bureau gespecialiseerd in keuken en badkamer anders? Groeimaten legt het uit.",
  alternates: {
    canonical: "https://groeimaten.com/blog/digital-marketing-bureau-keuken-badkamer",
  },
  openGraph: {
    title: "Digital marketing bureau voor keuken en badkamer: wat je echt nodig hebt",
    description:
      "Wat maakt een digital marketing bureau gespecialiseerd in keuken en badkamer anders? Groeimaten legt het uit.",
    url: "https://groeimaten.com/blog/digital-marketing-bureau-keuken-badkamer",
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
    { "@type": "ListItem", position: 3, name: "Digital marketing bureau keuken badkamer", item: "https://groeimaten.com/blog/digital-marketing-bureau-keuken-badkamer" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Digital marketing bureau voor keuken en badkamer: wat je echt nodig hebt",
  description:
    "Wat maakt een digital marketing bureau gespecialiseerd in keuken en badkamer anders dan een generiek bureau?",
  author: { "@type": "Organization", name: "Groeimaten" },
  publisher: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  datePublished: "2026-06-22",
  url: "https://groeimaten.com/blog/digital-marketing-bureau-keuken-badkamer",
}

export default function BlogDigitalMarketingBureauPage() {
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
              <span style={{ color: "oklch(55% 0 0)", fontSize: "0.85rem" }}>Digital marketing bureau keuken badkamer</span>
            </div>
            <span className="section-label">Marketing</span>
            <h1
              className="page-hero__title"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", lineHeight: "1.2", marginTop: "12px" }}
            >
              Digital marketing bureau voor keuken en badkamer: wat je echt nodig hebt
            </h1>
            <p className="page-hero__subtitle" style={{ marginTop: "20px" }}>
              De meeste bureaus zeggen dat ze voor iedereen werken. Dat is precies het probleem als jij een keukenstudio of badkamerbedrijf bent.
            </p>
            <p style={{ color: "oklch(55% 0 0)", fontSize: "0.88rem", marginTop: "12px" }}>
              Groeimaten · 22 juni 2026 · 6 min lezen
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
              Stel je voor: je belt een marketing bureau. Ze hebben mooie cases met restaurants, een fitnesscentrum en een autogarage. Ze vertellen je dat ze &ldquo;ook voor keuken- en badkamerbedrijven werken.&rdquo; Maar als je vraagt naar de gemiddelde doorlooptijd van een keukenaankoop, weten ze het niet. Als je vraagt hoe je showroomafspraken kunt filteren op koopintentie, krijg je een vaag antwoord.
            </p>
            <p>
              Dat is het verschil tussen een generiek digital marketing bureau en een digital marketing bureau voor keuken en badkamer. Niet de tools die ze gebruiken. Niet de advertentieplatformen. Maar de branchekennis die bepaalt of die tools goed worden ingezet.
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
              De keuken en badkamersector is anders dan andere sectoren
            </h2>
            <p>
              Dat klinkt als een open deur, maar de implicaties ervan worden door de meeste bureaus niet begrepen. Een gemiddelde keukenaankoop kost 15.000 euro, een badkamerrenovatie al snel 8.000 tot 25.000 euro. De klant neemt weken tot maanden de tijd. Hij vergelijkt showrooms, vraagt meerdere offertes op en bezoekt meerdere vestigingen voor hij beslist.
            </p>
            <p>
              Dit heeft directe gevolgen voor hoe marketing werkt. Een impulsaankoop trigger via een Facebook-advertentie werkt hier niet. Je moet werken met meerdere contactmomenten, sterke herkenning en content die aansluit bij de oriëntatiefase van de klant. Een bureau dat gewend is aan e-commerce of dienstensectoren met korte salesprocessen denkt in andere patronen.
            </p>
            <p>
              Bovendien draait de keuken en badkamersector op beelden. Jouw klant wil zien wat hij koopt. Campagnebeelden die voor een ander product werken, werken hier niet. De kwaliteit van de foto, de sfeer, de ruimtewerking, dat alles bepaalt of iemand klikt of scrolt.
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
              Wat een gespecialiseerd bureau concreet anders doet
            </h2>
            <p>
              <strong style={{ color: "oklch(90% 0 0)" }}>Targeting op levensfasedata.</strong> Mensen die een keuken kopen zijn vaak recent verhuisd, net verbouwd of hebben een woning die oud begint te worden. Een bureau dat keuken en badkamersector begrijpt weet hoe dit te vertalen naar doelgroeptargeting op Meta en Google. Je bereikt mensen die nu in de markt zijn, niet de brede massa.
            </p>
            <p>
              <strong style={{ color: "oklch(90% 0 0)" }}>Kwalificatie voor de showroomafspraak.</strong> Een lead is geen lead in de keuken en badkamersector. Je wilt geen mensen die nieuwsgierig zijn naar prijzen maar toch niks gaan kopen. Een goede funnel kwalificeert de aanvrager voor hij bij jou in de agenda staat. Budget, planning, type project, dat soort informatie filters je er al uit voor de afspraak.
            </p>
            <p>
              <strong style={{ color: "oklch(90% 0 0)" }}>Niche content die vertrouwen bouwt.</strong> Content over &ldquo;de beste keukens van 2026&rdquo; trekt bezoekers maar geen klanten. Content die ingaat op specifieke twijfels, vergelijkingen en koopprocessen doet dat wel. Een bureau dat de sector kent schrijft andere content dan een bureau dat eerst moet leren wat een composiet aanrechtblad is.
            </p>
            <p>
              <strong style={{ color: "oklch(90% 0 0)" }}>Seizoenspatronen en campagneritme.</strong> De keuken en badkamermarkt heeft seizoenspieken: vroeg in het jaar voor verbouwplannen, na de zomer voor projecten vóór de feestdagen. Een bureau zonder branchekennis pakt dit niet proactief op. Een gespecialiseerd bureau past het campagnebudget aan op het moment dat jouw doelgroep actief is.
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
              Hoe je een bureau beoordeelt voordat je begint
            </h2>
            <p>
              Vraag naar concrete cases in de keuken en badkamersector. Niet naar omzetcijfers of impressies, maar naar showroomafspraken, offerteconversies en klantgedrag. Vraag hoe ze leadkwaliteit meten. Een bureau dat alleen praat over bereik en klikken werkt anders dan een bureau dat praat over opkomstpercentage bij showroomafspraken.
            </p>
            <p>
              Vraag ook hoe ze omgaan met het lange aankoopproces. Retargeting over meerdere weken en maanden vraagt een andere opzet dan een campagne voor een productlancering. Als een bureau hier geen duidelijk antwoord op heeft, is de kans groot dat ze jou behandelen als een generieke klant.
            </p>
            <p>
              Groeimaten werkt uitsluitend voor keuken en sanitairbedrijven. Dat is geen marketingpraatje maar een bewuste keuze die dag één merkbaar is in de aanpak. Er is geen leercurve. We weten al wat werkt voor jouw sector, welke campagnebeelden converteren en hoe een goed gekwalificeerde showroomafspraak eruit ziet. Die kennis bouw je niet op in een kwartaal. Dat kost jaren.
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
                Wil je weten wat een gespecialiseerde aanpak voor jouw bedrijf oplevert?
              </p>
              <p style={{ marginBottom: "20px", color: "oklch(70% 0 0)" }}>
                Plan een gratis strategiegesprek. We bekijken jouw huidige marketing en vertellen je eerlijk wat beter kan.
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

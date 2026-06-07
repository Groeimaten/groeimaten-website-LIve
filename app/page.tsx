import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"
import LogoStrip from "@/components/LogoStrip"
import WerkwijzePanel from "@/components/WerkwijzePanel"
import CasesSlider from "@/components/CasesSlider"
import FaqAccordion from "@/components/FaqAccordion"
import StatsCounter from "@/components/StatsCounter"
import BeforeAfterSlider from "@/components/BeforeAfterSlider"
import ReviewsMarquee from "@/components/ReviewsMarquee"

export const metadata: Metadata = {
  title: "Groeimaten | Marketing voor Keuken- en Sanitairbedrijven",
  description: "Groeimaten helpt keuken- en sanitairbedrijven groeien met bewezen strategie. Van advertentie tot kwalitatieve afspraak die ook écht opdaagt.",
}

const reviews = [
  { name: "Kim Noach", meta: "een maand geleden", img: "/images/kim-noach.png", text: '"Zeer tevreden over het contact, hoe de samenwerking wordt onderhouden en de transparantie. Communicatie is erg fijn en er wordt snel geschakeld, hun manier van werken is innovatief en met doorzettingsvermogen. Erg fijn!"' },
  { name: "Martin Stoop", meta: "Stoop Keukens · een maand geleden", img: "/images/stoop-keukens.png", text: '"Vanaf februari is onze nieuwe website echt goed vindbaar geworden. De leads worden steeds kwalitatiever, we krijgen meer serieuze aanvragen en daar komen ook daadwerkelijk opdrachten uit voort. We merken echt duidelijke groei."' },
  { name: "Tegro BV", meta: "een maand geleden", img: "/images/tegro-review.png", text: '"Deze jonge enthousiaste ondernemers hebben onze website van Tegro ontwikkeld. Het resultaat mag er zijn. Het was een fijn traject waar op alle vlakken goed meegedacht werd. Ook het onderhoud van de site wordt met veel enthousiasme verzorgd."' },
  { name: "Mido Ibrahim", meta: "een maand geleden", img: "/images/mido-ibrahim.png", text: '"De samenwerking met Thomas en Jelle heb ik als heel prettig ervaren. Ze luisterden goed naar mijn wensen en dachten actief mee. Het eindresultaat is een mooie, professionele website die helemaal past bij wat ik voor ogen had."' },
  { name: "Richard Feenstra", meta: "6 dagen geleden", img: "/images/richard-feenstra.png", text: '"Thomas heeft mij geholpen om mijn website weer een beetje up-to-date te krijgen. De korte lijntjes zijn erg prettig. De afspraken zijn netjes nagekomen. Al met al een goede ervaring."' },
]

function ReviewCard({ r, prefix }: { r: typeof reviews[0], prefix: string }) {
  return (
    <div className="review-card" aria-hidden={prefix === "b" ? "true" : undefined}>
      <svg className="review-card__quote" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
      </svg>
      <div className="review-card__stars" aria-label="5 sterren">
        {[...Array(5)].map((_, j) => (
          <svg key={j} className="review-card__star" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor" />
          </svg>
        ))}
      </div>
      <p className="review-card__text">{r.text}</p>
      <div className="review-card__author">
        <img src={r.img} alt={r.name} className="review-card__avatar" width={42} height={42} loading="lazy" />
        <div>
          <span className="review-card__name">{r.name}</span>
          <span className="review-card__meta">{r.meta}</span>
        </div>
      </div>
    </div>
  )
}

const faqItems = [
  {
    question: "Werken jullie ook voor andere sectoren dan keuken en sanitair?",
    answer: "Nee. Wij werken uitsluitend voor keuken- en sanitairbedrijven. Die focus is onze kracht: we kennen jouw klant, jouw sector en jouw uitdagingen als geen ander.",
  },
  {
    question: "Hoe snel zie ik resultaat?",
    answer: "Bij Meta Ads zijn de eerste leads er vaak al binnen de eerste week. Google &amp; AI Ranking duurt 3–6 maanden voor structurele groei. We zijn altijd eerlijk over wat je wanneer kunt verwachten.",
  },
  {
    question: "Wat kost het globaal?",
    answer: "Dat hangt af van jouw situatie. Advertentiebeheer start vanaf €800 per maand, een website vanaf €3.000 eenmalig. We bespreken dit altijd in een gratis gesprek, geen verrassingen achteraf.",
  },
  {
    question: "Werken jullie ook met kleinere showrooms?",
    answer: "Ja, zolang je de ambitie hebt om te groeien zijn wij de juiste partner. Grootte maakt niet uit. Focus en wil om te groeien wel.",
  },
  {
    question: "Wat maakt jullie anders dan een gewoon marketingbureau?",
    answer: "Wij kennen de keuken- en sanitairmarkt als geen ander. Geen leercurve, geen generieke aanpak. Dag 1 aan de slag. Een generiek bureau leert jouw markt misschien na maanden. Wij zijn er al.",
  },
]

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero hero--fullscreen" id="home">
        <div className="hero__bg">
          <Image
            className="hero__bg-img hero__bg-img--desktop"
            src="/images/hero.webp"
            alt="Groeimaten team aan het werk"
            fill
            priority
            quality={90}
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center 30%" }}
          />
          <Image
            className="hero__bg-img hero__bg-img--mobile"
            src="/images/jelle-thomas-sitting.jpg"
            alt="Jelle en Thomas van Groeimaten"
            fill
            priority
            quality={90}
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center top" }}
          />
          <div className="hero__bg-overlay" />
        </div>
        <div className="container hero__inner">
          <div className="hero__content">
            <h1 className="hero__title hero-anim hero-anim--1">
              Meer showroom&shy;afspraken.<br />
              <em>Elke maand.</em>
            </h1>
            <p className="hero__subtitle hero-anim hero-anim--2">
              Groeimaten helpt keuken- en sanitairbedrijven groeien met bewezen strategie. Van advertentie tot kwalitatieve afspraak die ook écht opdaagt.
            </p>
            <div className="hero__actions hero-anim hero-anim--3">
              <Link href="/afspraak" className="btn btn--blue btn--lg">
                Gratis strategiegesprek <ArrowRight />
              </Link>
              <Link href="/cases" className="btn btn--ghost btn--lg">Bekijk cases</Link>
            </div>
            <div className="hero__proof hero-anim hero-anim--4">
              <div className="hero__proof-item">
                <span className="hero__proof-number">35+</span>
                <span className="hero__proof-label">merken geholpen groeien</span>
              </div>
              <div className="hero__proof-divider" aria-hidden="true" />
              <div className="hero__proof-item">
                <span className="hero__proof-number">100%</span>
                <span className="hero__proof-label">keuken &amp; sanitair specialist</span>
              </div>
              <div className="hero__proof-divider" aria-hidden="true" />
              <div className="hero__proof-item">
                <span className="hero__proof-number">5,0 <span style={{color:"#c9a24c"}}>★</span></span>
                <span className="hero__proof-label">Google beoordeling</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOGO STRIP */}
      <LogoStrip />

      {/* SECTORSPECIALIST */}
      <section className="specialist-strip" aria-labelledby="specialist-heading">
        <div className="container">
          <div className="specialist-strip__inner">
            <div className="specialist-strip__eyebrow">Sector exclusief</div>
            <h2 className="specialist-strip__title" id="specialist-heading">
              Wij werken <em>uitsluitend</em> voor keuken- en sanitairbedrijven.
            </h2>
            <p className="specialist-strip__subtitle">
              Terwijl andere bureaus vandaag een bakkerij helpen en morgen een autogarage, doen wij maar één ding. Jouw branche. Elke dag. Dat is het verschil tussen een bureau dat jou begrijpt en één dat jou leert kennen.
            </p>
            <div className="specialist-strip__sectors">
              {[
                { icon: "home", label: "Keukenshowrooms" },
                { icon: "bath", label: "Sanitairzaken" },
                { icon: "grid", label: "Tegelbedrijven" },
                { icon: "star", label: "Premium segment" },
                { icon: "sun", label: "Midden- & hoogsegment" },
              ].map(({ label }) => (
                <div key={label} className="sector-pill">{label}</div>
              ))}
            </div>
            <div className="specialist-strip__no-list">
              {["Restaurants", "Kappers", "Autogarages", "Andere sectoren"].map((s) => (
                <div key={s} className="sector-pill sector-pill--no">
                  <span className="sector-pill__cross">✕</span> {s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* IN DE MEDIA */}
      <section className="media-mention-section" aria-labelledby="media-heading">
        <div className="container">
          <div className="media-mention__inner">
            <ScrollReveal className="media-mention__visual">
              <div className="media-mention__frame">
                <Image src="/images/magazine-article.webp" alt="Groeimaten in K&D Magazine" width={480} height={320} loading="lazy" />
                <span className="media-mention__stamp">In de media</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={2} className="media-mention__content">
              <div className="media-mention__eyebrow">Erkend door de branche</div>
              <h2 className="media-mention__title" id="media-heading">
                Uitgelicht in<br /><em>K&amp;D Magazine</em>
              </h2>
              <p className="media-mention__text">
                Groeimaten werd door K&amp;D Magazine uitgelicht als dé specialist voor marketing in de keuken- en sanitairsector. Een erkenning die bewijst dat onze aanpak werkt, niet alleen bij onze klanten, maar ook bij de sector zelf.
              </p>
              <blockquote className="media-mention__quote">"Met AI en marketing naar meer afspraken"</blockquote>
              <div className="media-mention__publication">
                <span>K&amp;D Magazine</span>
                <span className="media-mention__pub-dot" />
                <span>Keuken &amp; Bad vakblad</span>
                <span className="media-mention__pub-dot" />
                <Link href="/over-ons#media" style={{ color: "oklch(67% 0.09 75)", textDecoration: "none", fontWeight: 600 }}>
                  Lees het artikel →
                </Link>
                <span className="media-mention__pub-dot" />
                <a href="https://www.kd-nijmegen.nl/" target="_blank" rel="noopener noreferrer" style={{ color: "oklch(67% 0.09 75)", textDecoration: "none", fontWeight: 600 }}>
                  Bekijk de K&amp;D →
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="pain-section" id="probleem">
        <div className="container">
          <ScrollReveal className="pain-section__header">
            <h2 className="pain-section__title">Klinkt dit<br /><em>bekend?</em></h2>
            <p className="pain-section__intro">Veel keuken- en sanitairbedrijven lopen tegen dezelfde uitdagingen aan. De problemen zijn voorspelbaar. De oplossing niet.</p>
          </ScrollReveal>
          <div className="pain-grid">
            {[
              { n: "01", title: "Slechte leads die nooit komen opdagen", body: "Je krijgt aanvragen binnen, maar ze verschijnen nooit in de showroom. Tijdverspilling en frustratie, elke keer opnieuw." },
              { n: "02", title: "Onvoorspelbare instroom van klanten", body: "De ene maand druk, de andere maand stil. Geen structurele aanpak betekent geen structureel resultaat." },
              { n: "03", title: "Bureau dat jouw sector niet begrijpt", body: "Je werkt met een bureau dat ook bakkerijen en kappers bedient. Ze kennen jouw klant niet, en dat merk je aan de resultaten." },
              { n: "04", title: "Veel tijd kwijt aan slechte leads nabellen", body: "Uren per week aan de telefoon met mensen die toch niet komen. Tijd die je niet hebt en die je liever in je vak steekt." },
            ].map(({ n, title, body }, i) => (
              <ScrollReveal key={n} as="article" className="pain-card" delay={(i + 1) as 1 | 2 | 3 | 4}>
                <span className="pain-card__num" aria-hidden="true">{n}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="pain-cta">
            <Link href="/afspraak" className="btn btn--blue btn--lg">Plan een gratis strategiegesprek <ArrowRight /></Link>
          </ScrollReveal>
        </div>
      </section>

      {/* WERKWIJZE */}
      <section className="ww2" id="werkwijze">
        <div className="container">
          <ScrollReveal className="section-header">
            <span className="section-label">Onze werkwijze</span>
            <h2 className="section-title section-title--white">Van eerste gesprek<br /><em>tot meer klanten</em></h2>
            <p className="section-subtitle section-subtitle--light">Vier stappen. Eerlijk en transparant.</p>
          </ScrollReveal>
          <WerkwijzePanel />
          <ScrollReveal className="werkwijze-cta">
            <Link href="/afspraak" className="btn btn--blue btn--lg">Plan je gratis gesprek <ArrowRight /></Link>
          </ScrollReveal>
        </div>
      </section>

      {/* REVIEWS */}
      <ReviewsMarquee />

      {/* RESULTATEN */}
      <section className="resultaten-section" id="resultaten">
        <div className="resultaten-section__bg" aria-hidden="true" />
        <div className="container">
          <ScrollReveal className="resultaten-header">
            <span className="section-label">Bewezen track record</span>
            <h2 className="section-title resultaten-header__title">Cijfers die<br />voor ons spreken</h2>
            <p className="resultaten-header__sub">Geen bureau-praatjes. Gewoon meetbare resultaten bij klanten in jouw sector.</p>
          </ScrollReveal>
          <ScrollReveal delay={1} className="resultaten-bottom">
            <div className="werkwijze-photo werkwijze-photo--auto">
              <Image src="/images/founders-office.webp" alt="Jelle en Thomas van Groeimaten" fill style={{ objectFit: "cover", objectPosition: "center 50%" }} sizes="(min-width: 900px) 50vw, 100vw" quality={90} />
              <div className="werkwijze-photo__badge">
                <span className="werkwijze-photo__badge-num">35+</span>
                <span className="werkwijze-photo__badge-label">merken geholpen</span>
              </div>
            </div>
            <div className="resultaten-right">
              <p className="resultaten-right__intro">Wij zijn een van de weinige marketingbureaus in Nederland die <strong>uitsluitend</strong> voor de keuken- en sanitairsector werkt. Geen leercurve, dag één direct aan de slag.</p>
              <div className="commitments">
                <p className="commitments__item">Een van de weinige specialisten in Nederland voor keuken- &amp; sanitairbedrijven</p>
                <p className="commitments__item">Volledige ontzorging: van strategie tot afspraken in je agenda</p>
                <p className="commitments__item">Directe communicatie, geen account managers, geen wachtrijen</p>
                <p className="commitments__item">Maandelijkse rapportages met concrete cijfers</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* VOOR EN NA */}
      <section className="voor-na" id="voor-na">
        <div className="container">
          <ScrollReveal className="section-header">
            <span className="section-label">Transformaties</span>
            <h2 className="section-title section-title--white">Voor &amp; na.<br /><em>Zie het verschil.</em></h2>
            <p className="section-subtitle section-subtitle--light">Van verouderde websites naar conversiegerichte showroom-ervaringen. Sleep de lijn om te vergelijken.</p>
          </ScrollReveal>
          <div className="vn-grid">
            <ScrollReveal delay={1}>
              <BeforeAfterSlider
                clientName="Tile Stones"
                description="Van een rommelige structuur naar een doordachte gebruikerservaring, waarbij elk detail van het design de merkidentiteit versterkt."
                beforeSrc="/images/voor-na/tile-stones-oud.png"
                afterSrc="/images/voor-na/tile-stones-nieuw.png"
              />
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <BeforeAfterSlider
                clientName="Ter Haar Tegeltechniek"
                description="Van drie trage, drukke en goedkoop ogende websites naar één ultrasnelle, moderne website met een luxe uitstraling die vertrouwen wekt en resultaat oplevert."
                beforeSrc="/images/voor-na/ter-haar-oud.png"
                afterSrc="/images/voor-na/ter-haar-nieuw.png"
                websiteUrl="https://www.terhaarvakwerk.nl/"
                websiteLabel="Bekijk de website van Ter Haar"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="home-founders">
        <div className="container">
          <div className="home-founders__inner">
            <ScrollReveal className="home-founders__photo">
              <div className="home-founders__photo-stack">
                <div className="about-photo-frame">
                  <div className="about-photo-frame__glow" />
                  <Image src="/images/founders-hero.webp" alt="Jelle Westerbroek en Thomas Ghobadi van Groeimaten" width={600} height={500} loading="lazy" quality={90} style={{ objectFit: "cover", objectPosition: "center 40%" }} />
                </div>
                <div className="founders-duo">
                  <div className="founder-mini">
                    <Image src="/images/jelle-portrait.webp" alt="Jelle Westerbroek" fill style={{ objectFit: "cover", objectPosition: "center 30%" }} sizes="20vw" quality={90} />
                    <div className="founder-mini__label">
                      <span className="founder-mini__name">Jelle Westerbroek</span>
                      <span className="founder-mini__role">CEO · Ads &amp; Team</span>
                    </div>
                  </div>
                  <div className="founder-mini">
                    <Image src="/images/thomas-portrait.webp" alt="Thomas Ghobadi" fill style={{ objectFit: "cover", objectPosition: "center 30%" }} sizes="20vw" quality={90} />
                    <div className="founder-mini__label">
                      <span className="founder-mini__name">Thomas Ghobadi</span>
                      <span className="founder-mini__role">CEO · Websites &amp; Klantcontact</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={2} className="home-founders__content">
              <span className="section-label">Het team</span>
              <h2 className="section-title section-title--white">Twee founders.<br />Één focus.</h2>
              <p>Jelle en Thomas richten Groeimaten samen als VOF. Jelle stuurt de ads-afdeling en het team aan. Thomas beheert de website-afdeling en onderhoudt het klantcontact. Directe communicatie, snelle uitvoering, echte resultaten.</p>
              <p>Een van de weinige specialisten in Nederland die uitsluitend voor deze sector werkt. Meer dan 35 merken gingen al voor.</p>
              <Link href="/over-ons" className="btn btn--outline">
                Leer ons kennen <ArrowRight />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CASES SLIDER */}
      <section className="cases-slider" id="cases">
        <div className="container">
          <ScrollReveal className="section-header">
            <span className="section-label">Ons werk</span>
            <h2 className="section-title section-title--white">Uitgelichte<br /><em>cases</em></h2>
          </ScrollReveal>
          <CasesSlider />
          <ScrollReveal className="cases-cta">
            <Link href="/cases" className="btn btn--blue btn--lg">Bekijk alle cases <ArrowRight /></Link>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="page-hero page-hero--split" id="cta" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        <div className="page-hero__glow page-hero__glow--1" aria-hidden="true"></div>
        <div className="page-hero__glow page-hero__glow--2" aria-hidden="true"></div>
        <div className="container">
          <div className="page-hero__inner">
            <ScrollReveal>
              <div className="page-hero__content">
                <span className="section-label section-label--blue">Groei zonder grenzen</span>
                <h2 className="page-hero__title">Klaar om te<br /><em>groeien?</em></h2>
                <p className="page-hero__subtitle">Plan een gratis strategiegesprek. We kijken samen naar jouw situatie en vertellen je eerlijk wat we voor jou kunnen doen.</p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "8px" }}>
                  <Link href="/afspraak" className="btn btn--blue btn--xl">
                    Plan een gratis strategiegesprek
                    <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
                <p className="cta-disclaimer" style={{ marginTop: "12px" }}>Geen verplichtingen. Wel eerlijk advies.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <div className="page-hero__visual">
                <Image
                  src="/images/founders-discuss.webp"
                  alt="Jelle en Thomas van Groeimaten in gesprek"
                  width={600}
                  height={500}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 35%", borderRadius: "12px" }}
                  quality={90}
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section" id="faq">
        <div className="container">
          <ScrollReveal className="section-header">
            <span className="section-label">Veelgestelde vragen</span>
            <h2 className="section-title section-title--white">Alles wat je wil weten</h2>
          </ScrollReveal>
          <FaqAccordion items={faqItems} />
          <ScrollReveal className="faq-cta">
            <Link href="/contact" className="btn btn--blue btn--lg">Nog vragen? Neem contact op <ArrowRight /></Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

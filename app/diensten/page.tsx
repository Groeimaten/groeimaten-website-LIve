import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Diensten | Groeimaten",
  description:
    "Onze diensten: Meta Ads & Funnels, Website Development en SEO. Speciaal voor keuken- en sanitairbedrijven.",
}

const checkIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const arrowIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function DienstenPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero page-hero--split">
        <div className="page-hero__mobile-bg" aria-hidden="true">
          <img src="/images/founders-laptop.webp" alt="" style={{ objectPosition: "center 30%" }} />
        </div>
        <div className="page-hero__glow page-hero__glow--1" aria-hidden="true"></div>
        <div className="page-hero__glow page-hero__glow--2" aria-hidden="true"></div>
        <div className="container">
          <div className="page-hero__inner">
            <ScrollReveal>
              <div className="page-hero__content">
                <span className="section-label">Onze diensten</span>
                <h1 className="page-hero__title">
                  Alles wat je nodig hebt.
                  <br />
                  <em>Onder één dak.</em>
                </h1>
                <p className="page-hero__subtitle">
                  Van advertenties en funnels tot websites en SEO. Wij bieden een compleet pakket, specifiek ontwikkeld
                  voor keuken- en sanitairbedrijven.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <div className="page-hero__visual" aria-hidden="true">
                <img src="/images/founders-laptop.webp" alt="Jelle en Thomas van Groeimaten" loading="eager" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SERVICE: META ADS */}
      <section className="service-detail" id="meta-ads">
        <div className="container">
          <div className="service-detail__inner">
            <ScrollReveal>
              <div className="service-detail__content">
                <span className="section-label">Dienst 01</span>
                <h2 className="section-title section-title--white">Meta Ads &amp; Funnels</h2>
                <p>
                  Wij bouwen en beheren je campagnes op Facebook en Instagram. Niet zomaar advertenties, maar een
                  volledig systeem dat onbekende consumenten omzet in kwalitatieve showroomafspraken.
                </p>
                <p>
                  Onze funnels zijn specifiek ontworpen voor de keuken- en sanitairbranche. We weten welke beelden,
                  teksten en triggers werken bij jouw doelgroep.
                </p>

                <div className="service-features">
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Campagne strategie &amp; setup</h4>
                      <p>Targeting, budgetverdeling en campagnestructuur op maat van jouw segment.</p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Funnel architectuur</h4>
                      <p>Landingspagina&apos;s, formulieren en kwalificatiestappen die slechte leads filteren.</p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Lead kwalificatie &amp; opvolging</h4>
                      <p>
                        Geautomatiseerde opvolging via GoHighLevel. SMS, e-mail en herinneringen voor maximale show-up.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Doorlopende optimalisatie</h4>
                      <p>A/B-tests, creative rotatie en data-analyse voor steeds betere resultaten.</p>
                    </div>
                  </div>
                </div>

                <Link href="/afspraak" className="btn btn--blue btn--lg">
                  Meer weten over Meta Ads?
                  {arrowIcon}
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <div className="service-detail__visual" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", borderRadius: "12px", overflow: "hidden" }}>
                  <Image
                    src="/images/jelle-thomas-laptops.jpg"
                    alt="Jelle en Thomas van Groeimaten"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center 30%" }}
                    sizes="(max-width: 900px) 100vw, 45vw"
                    quality={80}
                    loading="lazy"
                  />
                </div>
                <div className="service-visual-card">
                  <div className="service-visual-card__glow"></div>
                  <div className="service-visual-card__stat">
                    <span className="service-visual-card__number">100+</span>
                    <span className="service-visual-card__label">Afspraken gegenereerd</span>
                  </div>
                  <div className="service-visual-card__bar">
                    <div className="bar" style={{ width: "94%" }}></div>
                  </div>
                  <div className="service-visual-card__stat">
                    <span className="service-visual-card__number">€69</span>
                    <span className="service-visual-card__label">Laagste kosten p/afspraak</span>
                  </div>
                  <div className="service-visual-card__bar bar--green">
                    <div className="bar" style={{ width: "100%" }}></div>
                  </div>
                  <div className="service-visual-card__stat">
                    <span className="service-visual-card__number">5,0 ★</span>
                    <span className="service-visual-card__label">Google review score</span>
                  </div>
                  <div className="service-visual-card__bar">
                    <div className="bar" style={{ width: "100%" }}></div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SERVICE: WEBSITE */}
      <section className="service-detail service-detail--alt" id="websites">
        <div className="container">
          <div className="service-detail__inner service-detail__inner--reversed">
            <ScrollReveal>
              <div className="service-detail__content">
                <span className="section-label">Dienst 02</span>
                <h2 className="section-title section-title--white">Website Development</h2>
                <p>
                  Jouw showroom is prachtig. Jouw website moet dat ook zijn. Wij ontwerpen en bouwen conversiegerichte
                  websites die jouw kwaliteit en vakmanschap laten zien aan de juiste doelgroep.
                </p>
                <p>
                  Snelheid, mobiele optimalisatie en leadgeneratie staan centraal. Elke pixel is ontworpen om bezoekers
                  om te zetten in afspraken.
                </p>

                <div className="service-features">
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Premium design op maat</h4>
                      <p>Uniek design dat de kwaliteit van jouw showroom weerspiegelt. Geen templates.</p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Razendsnel (Core Web Vitals)</h4>
                      <p>Lichtsnelle laadtijden die Google beloont en bezoekers niet laat wachten.</p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Conversie geoptimaliseerd</h4>
                      <p>
                        Strategische CTA-plaatsing, contactformulieren en heatmap-analyses voor maximale conversie.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Mobiel-first &amp; SEO-ready</h4>
                      <p>Responsive design met schone code en technische SEO-basis ingebakken.</p>
                    </div>
                  </div>
                </div>

                <div className="service-included-badge">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span><strong>Google &amp; AI Ranking inbegrepen:</strong> SEO, lokale vindbaarheid én zichtbaarheid in AI-zoekmachines zitten standaard in elk websitetraject.</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <div className="service-detail__visual" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <img
                  src="/images/websites-devices.png"
                  alt="Klantwebsites van Groeimaten op laptop, tablet en telefoon"
                  style={{ width: "100%", borderRadius: "12px", display: "block", marginTop: "-32px" }}
                  loading="lazy"
                />
                <Link href="/afspraak" className="btn btn--blue btn--lg" style={{ alignSelf: "flex-start" }}>
                  Website laten maken?
                  {arrowIcon}
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SERVICE: GOOGLE & AI RANKING */}
      <section className="service-detail" id="seo">
        <div className="container">
          <div className="service-detail__inner">
            <ScrollReveal>
              <div className="service-detail__content">
                <span className="section-label">Inbegrepen bij Website</span>
                <h2 className="section-title section-title--white">Google &amp; AI Ranking</h2>
                <p>
                  Wanneer iemand zoekt op &quot;badkamerwinkel in de buurt&quot; of &quot;nieuwe keuken laten
                  plaatsen&quot;, wil jij bovenaan staan. Niet alleen in Google, maar ook in AI-zoekmachines zoals
                  ChatGPT, Gemini en Copilot die steeds vaker gebruikt worden.
                </p>
                <p>
                  Wij combineren bewezen SEO-technieken met AI-zoekoptimalisatie speciaal voor de keuken- en
                  sanitairbranche. Lokale én nationale zichtbaarheid. Duurzame groei via organisch verkeer dat je niet
                  elke maand opnieuw hoeft te kopen.
                </p>

                <div className="service-features">
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Lokale &amp; nationale SEO</h4>
                      <p>Google Mijn Bedrijf, lokale zoektermen en landelijke rankings zodat jij gevonden wordt.</p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>AI-zoekoptimalisatie</h4>
                      <p>
                        Zichtbaar in ChatGPT, Gemini en Copilot. De toekomst van zoeken is nu, wij bereiden je voor.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Technische &amp; content optimalisatie</h4>
                      <p>
                        Site speed, structured data, sterke copywriting en relevante content die organisch verkeer
                        aantrekt.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature__icon" aria-hidden="true">{checkIcon}</div>
                    <div>
                      <h4>Maandelijkse rapportage</h4>
                      <p>
                        Transparante rapportages met rankings, verkeer en conversies. Altijd inzicht in wat je groei
                        drijft.
                      </p>
                    </div>
                  </div>
                </div>

                <Link href="/afspraak" className="btn btn--blue btn--lg">
                  Google &amp; AI Ranking bespreken?
                  {arrowIcon}
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <div className="service-detail__visual" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", borderRadius: "12px", overflow: "hidden" }}>
                  <Image
                    src="/images/jelle-thomas-sitting.jpg"
                    alt="Jelle en Thomas van Groeimaten"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center 30%" }}
                    sizes="(max-width: 900px) 100vw, 45vw"
                    quality={80}
                    loading="lazy"
                  />
                </div>
                <div className="service-visual-card">
                  <div className="service-visual-card__glow"></div>
                  <div className="seo-ranking">
                    <div className="seo-ranking__item seo-ranking__item--1">
                      <span className="seo-rank">#1</span>
                      <span className="seo-term">badkamerwinkel utrecht</span>
                      <span className="seo-trend seo-trend--up">↑ 12</span>
                    </div>
                    <div className="seo-ranking__item seo-ranking__item--2">
                      <span className="seo-rank">#2</span>
                      <span className="seo-term">nieuwe keuken laten plaatsen</span>
                      <span className="seo-trend seo-trend--up">↑ 8</span>
                    </div>
                    <div className="seo-ranking__item seo-ranking__item--3">
                      <span className="seo-rank">#3</span>
                      <span className="seo-term">premium keukens nederland</span>
                      <span className="seo-trend seo-trend--up">↑ 15</span>
                    </div>
                    <div className="seo-ranking__item">
                      <span className="seo-rank">#1</span>
                      <span className="seo-term">badkamer showroom den haag</span>
                      <span className="seo-trend seo-trend--up">↑ 22</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="werkwijze-section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-label">Onze werkwijze</span>
              <h2 className="section-title section-title--white">Zo pakken we het aan</h2>
              <p className="section-subtitle section-subtitle--light">
                Een helder proces. Geen verrassingen. Wel resultaat.
              </p>
            </div>
          </ScrollReveal>

          <div className="process-timeline">
            <ScrollReveal delay={1}>
              <div className="process-step">
                <div className="process-step__number">01</div>
                <div className="process-step__content">
                  <h3>Kennismaking</h3>
                  <p>We leren jouw bedrijf, doelgroep en ambities kennen in een vrijblijvend gesprek.</p>
                </div>
              </div>
            </ScrollReveal>
            <div className="process-connector" aria-hidden="true"></div>
            <ScrollReveal delay={2}>
              <div className="process-step">
                <div className="process-step__number">02</div>
                <div className="process-step__content">
                  <h3>Strategie op maat</h3>
                  <p>Op basis van jouw situatie stellen we een concrete strategie en planning op.</p>
                </div>
              </div>
            </ScrollReveal>
            <div className="process-connector" aria-hidden="true"></div>
            <ScrollReveal delay={3}>
              <div className="process-step">
                <div className="process-step__number">03</div>
                <div className="process-step__content">
                  <h3>Uitvoering</h3>
                  <p>We gaan aan de slag. Campagnes, website of SEO, alles wordt professioneel opgezet.</p>
                </div>
              </div>
            </ScrollReveal>
            <div className="process-connector" aria-hidden="true"></div>
            <ScrollReveal delay={4}>
              <div className="process-step">
                <div className="process-step__number">04</div>
                <div className="process-step__content">
                  <h3>Optimalisatie</h3>
                  <p>Doorlopende analyse en optimalisatie. Elke maand betere resultaten.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="werkwijze-cta">
              <Link href="/afspraak" className="btn btn--blue btn--lg">
                Start jouw groeitraject
                {arrowIcon}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-section__glow cta-section__glow--1" aria-hidden="true"></div>
        <div className="cta-section__glow cta-section__glow--2" aria-hidden="true"></div>
        <div className="container">
          <ScrollReveal>
            <div className="cta-inner">
              <span className="section-label section-label--blue">Klaar om te starten?</span>
              <h2 className="cta-title">Laten we kennismaken</h2>
              <p className="cta-subtitle">
                Plan een gratis adviesgesprek en ontdek wat Groeimaten voor jouw bedrijf kan betekenen.
              </p>
              <Link href="/afspraak" className="btn btn--blue btn--xl">
                Plan je gratis gesprek
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <p className="cta-disclaimer">Geen verplichtingen. Wel eerlijk advies.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

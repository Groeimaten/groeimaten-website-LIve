import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Online zichtbaarheid renovatiebedrijf: zo bouw je een constante instroom op",
  description:
    "Een renovatiebedrijf met sterke online zichtbaarheid hoeft niet te wachten op doorverwijzingen. Hoe bouw je een fundament dat maand na maand aanvragen oplevert?",
  alternates: {
    canonical: "https://groeimaten.com/blog/online-zichtbaarheid-renovatiebedrijf",
  },
  openGraph: {
    title: "Online zichtbaarheid renovatiebedrijf: zo bouw je een constante instroom op",
    description:
      "Hoe bouw je als renovatiebedrijf een online aanwezigheid die structureel aanvragen oplevert?",
    url: "https://groeimaten.com/blog/online-zichtbaarheid-renovatiebedrijf",
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
      name: "Online zichtbaarheid renovatiebedrijf",
      item: "https://groeimaten.com/blog/online-zichtbaarheid-renovatiebedrijf",
    },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Online zichtbaarheid renovatiebedrijf: zo bouw je een constante instroom op",
  description:
    "Hoe bouw je als renovatiebedrijf een online aanwezigheid die structureel aanvragen oplevert.",
  author: { "@type": "Organization", name: "Groeimaten" },
  publisher: { "@type": "Organization", name: "Groeimaten", url: "https://groeimaten.com" },
  datePublished: "2026-07-13",
  url: "https://groeimaten.com/blog/online-zichtbaarheid-renovatiebedrijf",
}

export default function BlogOnlineZichtbaarheidRenovatiebedrijfPage() {
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
              <span style={{ color: "oklch(55% 0 0)", fontSize: "0.85rem" }}>Online zichtbaarheid renovatiebedrijf</span>
            </div>
            <span className="section-label">Online marketing</span>
            <h1
              className="page-hero__title"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", lineHeight: "1.2", marginTop: "12px" }}
            >
              Online zichtbaarheid renovatiebedrijf: zo bouw je een constante instroom op
            </h1>
            <p className="page-hero__subtitle" style={{ marginTop: "20px" }}>
              Renovatiebedrijven die uitsluitend op aanbevelingen draaien, zijn kwetsbaar. Eén rustiger
              kwartaal in het netwerk en de agenda loopt leeg. Structurele online zichtbaarheid is het
              tegenwicht: aanvragen die binnenkomen ongeacht of jouw huidige klanten iemand kennen die
              ook wil verbouwen.
            </p>
            <p style={{ color: "oklch(55% 0 0)", fontSize: "0.88rem", marginTop: "12px" }}>
              Groeimaten · 13 juli 2026 · 6 min lezen
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
              Er zijn twee manieren waarop renovatiebedrijven groeien. De eerste is mond-tot-mondreclame:
              tevreden klanten die jouw naam doorgeven. De tweede is online zichtbaarheid: potentiële
              opdrachtgevers die zelf zoeken en jou vinden. De eerste werkt goed zolang het netwerk actief
              is. De tweede werkt ook als dat niet het geval is.
            </p>
            <p>
              Online zichtbaarheid voor een renovatiebedrijf gaat over gevonden worden op het moment dat
              iemand besluit zijn badkamer, keuken of woning te renoveren. Dat besluit rijpt langzaam.
              Mensen oriënteren zich weken of maanden voordat ze een bedrijf bellen. Wie op dat moment
              zichtbaar is, heeft een enorme voorsprong.
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
              Wat online zichtbaarheid voor een renovatiebedrijf betekent
            </h2>
            <p>
              Online zichtbaarheid bestaat uit meerdere lagen. De eerste is organische vindbaarheid via
              Google, ook wel SEO genoemd. De tweede is betaalde aanwezigheid via Google Ads of Meta Ads.
              De derde is je aanwezigheid in Google Mijn Bedrijf, het kaartresultaat dat verschijnt bij
              lokale zoekopdrachten.
            </p>
            <p>
              Een renovatiebedrijf heeft idealiter alle drie. SEO bouwt een positie die groeit naarmate
              de tijd verstrijkt en geen lopende advertentiekosten heeft. Google Ads geeft directe
              aanvragen terwijl de organische positie nog opgebouwd wordt. Google Mijn Bedrijf zorgt voor
              zichtbaarheid bij mensen die lokaal zoeken, op de telefoon, onderweg.
            </p>
            <p>
              De combinatie van deze drie elementen maakt dat een renovatiebedrijf meerdere momenten in
              de klantreis afgedekt heeft. Iemand die googelt op &ldquo;badkamer renoveren Amsterdam&rdquo;
              kan jou tegenkomen in het kaartresultaat, in de organische resultaten en in de advertenties.
              Drie kansen op dezelfde klik.
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
              De website als fundament
            </h2>
            <p>
              Alle online marketing verwijst uiteindelijk naar de website. Een advertentie die naar een
              zwakke website leidt, verspilt budget. SEO-inspanningen die resulteren in bezoekers die de
              site direct verlaten, leveren geen aanvragen op. De website is het fundament waarop alles
              rust.
            </p>
            <p>
              Voor een renovatiebedrijf betekent een goede website concreet: werk tonen dat je gedaan
              hebt, bij voorkeur met foto&apos;s. Duidelijk zijn over het werkgebied. Een
              contactmogelijkheid die laagdrempelig is. Reviews van eerdere opdrachtgevers die het werk
              van het bedrijf bevestigen. En een snelle, mobielvriendelijke pagina want de meeste
              bezoekers komen via de telefoon.
            </p>
            <p>
              Renovatieprojecten zijn grote aankopen. Een opdrachtgever die erover nadenkt om 20.000 euro
              uit te geven aan een badkamerrenovatie, doet grondig onderzoek. Die persoon bekijkt meerdere
              websites, vergelijkt en vormt een beeld van het bedrijf op basis van wat hij online
              aantreft. Een professionele, inhoudelijk sterke website is in die situatie geen luxe.
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
              Lokale SEO werkt voor de meeste renovatiebedrijven het snelst
            </h2>
            <p>
              Renovatiebedrijven werken doorgaans in een specifieke regio. Ze rijden niet door heel
              Nederland voor een badkamerrenovatie. Dat maakt lokale SEO bijzonder effectief: het richt
              zich op zoekopdrachten uit de regio waar jij ook daadwerkelijk werkt.
            </p>
            <p>
              De basis van lokale SEO is een volledig ingericht Google Mijn Bedrijf-profiel. Naam, adres,
              telefoonnummer, werkgebied, openingstijden en foto&apos;s van afgeronde projecten. Een
              profiel met actieve reviews scoort beter dan een profiel zonder. Tevreden klanten vragen
              om een review is de meest directe manier om de lokale positie te versterken.
            </p>
            <p>
              Naast het Google-profiel helpt het om op de website aparte pagina&apos;s te hebben per
              dienst en per regio. Een pagina &ldquo;badkamerrenovatie Utrecht&rdquo; scoort beter voor
              de relevante zoekopdracht dan een generieke &ldquo;diensten&rdquo; pagina. Die specifiekheid
              kost wat tijd om op te bouwen, maar levert gerichte aanvragen op van mensen die precies
              zoeken naar wat jij aanbiedt.
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
              Meta Ads voor renovatiebedrijven: zichtbaarheid bij mensen die nog niet zoeken
            </h2>
            <p>
              Google Ads bereikt mensen die actief zoeken. Meta Ads, via Facebook en Instagram, bereikt
              mensen die nog niet zoeken maar wél tot de doelgroep behoren. Huiseigenaren in een bepaalde
              regio, in een bepaalde levensfase, die waarschijnlijk geïnteresseerd zijn in renovatie.
            </p>
            <p>
              Meta Ads zijn voor renovatiebedrijven met name effectief voor het ophalen van leads. Een
              advertentie met een foto van een afgeronde renovatie, gecombineerd met een eenvoudig
              leadformulier, genereert aanvragen van mensen die nog niet actief zochten maar wél interesse
              hebben. De kwaliteit van die leads verschilt van Google Ads: ze zijn minder koopklaar op
              het moment van invullen, maar kunnen dat worden als je ze goed opvolgt.
            </p>
            <p>
              De combinatie van Google Ads voor mensen die nu zoeken en Meta Ads voor mensen die nog
              niet zoeken, geeft een renovatiebedrijf twee instroompunten. De totale aanvraagstroom wordt
              groter en minder afhankelijk van het zoekvolume op een specifieke term.
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
              Hoe lang duurt het voordat online marketing werkt?
            </h2>
            <p>
              SEO vraagt geduld: drie tot zes maanden voor de eerste merkbare resultaten, twaalf maanden
              voor een stabiele positie. Google Ads en Meta Ads kunnen al binnen de eerste week aanvragen
              opleveren. Wie nu begint met SEO, pleit over een jaar de vruchten. Wie pas over een jaar
              begint, is dan nog steeds aan het opbouwen.
            </p>
            <p>
              De meest effectieve aanpak voor renovatiebedrijven is betaalde advertising inzetten voor
              directe resultaten, terwijl SEO langzaam een organische basis legt. Naarmate de organische
              positie groeit, kan het advertentiebudget afgebouwd of preciezer ingezet worden op de
              meest rendabele zoektermen.
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
                Wil je weten hoe jouw renovatiebedrijf er online voor staat?
              </p>
              <p style={{ marginBottom: "20px", color: "oklch(70% 0 0)" }}>
                Plan een gratis gesprek met Groeimaten. We kijken naar je huidige online aanwezigheid
                en geven een eerlijk beeld van wat er beter kan en wat dat oplevert.
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

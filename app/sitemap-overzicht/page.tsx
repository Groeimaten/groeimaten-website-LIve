import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Sitemap | Groeimaten",
  description: "Overzicht van alle pagina's op groeimaten.com",
  robots: { index: false },
}

const SECTIONS = [
  {
    title: "Hoofdpagina's",
    links: [
      { href: "/", label: "Home" },
      { href: "/diensten", label: "Diensten" },
      { href: "/cases", label: "Cases" },
      { href: "/over-ons", label: "Over ons" },
      { href: "/prijzen", label: "Prijzen" },
      { href: "/contact", label: "Contact" },
      { href: "/afspraak", label: "Afspraak plannen" },
    ],
  },
  {
    title: "Blog",
    links: [
      { href: "/blog", label: "Blog overzicht" },
      { href: "/blog/seo-voor-keukenstudio", label: "SEO voor keukenstudio's" },
      { href: "/blog/leads-genereren-bouwsector", label: "Leads genereren bouwsector" },
      { href: "/blog/meer-klanten-aannemer", label: "Meer klanten als aannemer" },
      { href: "/blog/google-ads-badkamerbedrijf", label: "Google Ads badkamerbedrijf" },
      { href: "/blog/lokale-vindbaarheid-installateurs", label: "Lokale vindbaarheid installateurs" },
      { href: "/blog/digital-marketing-bureau-keuken-badkamer", label: "Digital marketing bureau keuken badkamer" },
      { href: "/blog/website-laten-maken-keukenbedrijf", label: "Website laten maken keukenbedrijf" },
      { href: "/blog/seo-voor-aannemers", label: "SEO voor aannemers" },
      { href: "/blog/online-marketing-badkamerbedrijf", label: "Online marketing badkamerbedrijf" },
      { href: "/blog/leadgeneratie-keukenbranche", label: "Leadgeneratie keukenbranche" },
    ],
  },
  {
    title: "Landingspagina's",
    links: [
      { href: "/keukenstudio-marketing", label: "Marketing keukenstudio" },
      { href: "/badkamerbedrijf-seo", label: "SEO badkamerbedrijf" },
      { href: "/aannemer-google-ads", label: "Google Ads aannemer" },
      { href: "/installateur-website", label: "Website installateur" },
      { href: "/leads-genereren-bouw", label: "Leads genereren bouw" },
      { href: "/marketingbureau-bouwsector", label: "Marketingbureau bouwsector" },
      { href: "/keukenbedrijf-google-ads", label: "Google Ads keukenbedrijf" },
      { href: "/meer-showroomafspraken", label: "Meer showroomafspraken" },
      { href: "/meta-ads-badkamerbedrijven", label: "Meta Ads badkamerbedrijven" },
      { href: "/tegelzettersbedrijf-marketing", label: "Marketing tegelzettersbedrijf" },
    ],
  },
  {
    title: "Overig",
    links: [
      { href: "/privacy", label: "Privacybeleid" },
    ],
  },
]

export default function SitemapPage() {
  return (
    <main style={{ paddingTop: "120px", paddingBottom: "80px", minHeight: "80vh" }}>
      <div className="container" style={{ maxWidth: "800px" }}>
        <p style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "oklch(67% 0.09 75)", marginBottom: "12px" }}>
          Overzicht
        </p>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 400, marginBottom: "48px" }}>
          Sitemap
        </h1>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "48px" }}>
          {SECTIONS.map((section) => (
            <div key={section.title}>
              <h2 style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "oklch(67% 0.09 75)", marginBottom: "16px", paddingBottom: "8px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                {section.title}
              </h2>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.75)", textDecoration: "none", transition: "color 0.2s" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

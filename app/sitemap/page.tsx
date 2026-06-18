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
                      onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(67% 0.09 75)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
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

"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { useCleanPathname } from "@/lib/use-clean-pathname"
import { KIGO_LIVE } from "@/lib/features"
import { TAART_BEDRIJVEN } from "@/lib/taartaanval"

// Taartaanval-pagina's: geen menu, alleen het logo (klikbaar naar home), gecentreerd.
const MINIMAL_NAV_PATHS = TAART_BEDRIJVEN.map((b) => `/${b.slug}`)

const allNavLinks = [
  { href: "/", label: "Home" },
  { href: "/diensten", label: "Diensten" },
  { href: "/kigo", label: "Kigo" },
  { href: "/cases", label: "Cases" },
  { href: "/over-ons", label: "Over ons" },
  { href: "/contact", label: "Contact" },
]

const navLinks = allNavLinks.filter((l) => KIGO_LIVE || l.href !== "/kigo")

// Pagina's met een lichte bovenkant: nav direct donker, anders valt witte tekst weg.
const SOLID_NAV_PATHS = ["/contact"]

export default function Nav() {
  const pathname = useCleanPathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  function toggleMenu() {
    setMenuOpen((o) => !o)
  }

  function closeMenu() {
    setMenuOpen(false)
  }

  if (MINIMAL_NAV_PATHS.includes(pathname)) {
    return (
      <header className="nav nav--minimal">
        <div className="container nav__inner nav__inner--center">
          <Link href="/" className="nav__logo" aria-label="Groeimaten homepage">
            <span className="logo-text">Groeimaten.</span>
          </Link>
        </div>
      </header>
    )
  }

  return (
    <nav
      ref={navRef}
      className={`nav${scrolled || SOLID_NAV_PATHS.includes(pathname) ? " scrolled" : ""}${menuOpen ? " menu-open" : ""}`}
      id="nav"
      role="navigation"
      aria-label="Hoofdnavigatie"
    >
      <div className="container nav__inner">
        <Link href="/" className="nav__logo" aria-label="Groeimaten homepage" onClick={closeMenu}>
          <span className="logo-text">Groeimaten.</span>
        </Link>

        <ul className={`nav__links${menuOpen ? " mobile-open" : ""}`} id="navLinks" role="list">
          <li className="nav__home-item">
            <Link href="/" className={pathname === "/" ? "active" : ""} onClick={closeMenu}>
              Home
            </Link>
          </li>
          {navLinks.slice(1).map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={pathname.startsWith(l.href) ? "active" : ""}
                onClick={closeMenu}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav__right">
          <Link href="/afspraak" className="btn nav__cta" onClick={closeMenu}>
            Gratis strategiegesprek
          </Link>
        </div>

        <button
          className={`nav__burger${menuOpen ? " open" : ""}`}
          id="navBurger"
          aria-label={menuOpen ? "Menu sluiten" : "Menu openen"}
          aria-expanded={menuOpen}
          aria-controls="navLinks"
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}

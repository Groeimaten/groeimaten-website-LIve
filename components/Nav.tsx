"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/diensten", label: "Diensten" },
  { href: "/cases", label: "Cases" },
  { href: "/plannen", label: "Plannen" },
  { href: "/over-ons", label: "Over ons" },
  { href: "/contact", label: "Contact" },
]

export default function Nav() {
  const pathname = usePathname()
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

  return (
    <nav
      ref={navRef}
      className={`nav${scrolled ? " scrolled" : ""}`}
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
          <Link href="/contact" className="btn nav__cta" onClick={closeMenu}>
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

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Link href="/" className="nav__logo footer__logo" aria-label="Groeimaten homepage">
            <span className="logo-text">Groeimaten.</span>
          </Link>
          <p className="footer__tagline">Groei zonder grenzen</p>
          <p className="footer__desc">De specialist in marketing voor keuken- en sanitairbedrijven in Nederland.</p>
        </div>
        <nav className="footer__nav" aria-label="Diensten navigatie">
          <h4>Diensten</h4>
          <ul>
            <li><Link href="/diensten#meta-ads">Meta Ads &amp; Funnels</Link></li>
            <li><Link href="/diensten#websites">Website Development</Link></li>
            <li><Link href="/diensten#seo">Google &amp; AI Ranking</Link></li>
          </ul>
        </nav>
        <nav className="footer__nav" aria-label="Bedrijf navigatie">
          <h4>Bedrijf</h4>
          <ul>
            <li><Link href="/over-ons">Over ons</Link></li>
            <li><Link href="/cases">Cases</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
        <div className="footer__contact">
          <h4>Contact</h4>
          <a href="mailto:info@groeimaten.com">info@groeimaten.com</a>
          <a href="tel:+31629193444" style={{ display: "block", marginTop: "6px", fontSize: "0.85rem", color: "rgba(255,255,255,0.5)" }}>
            +31 6 29193444
          </a>
          <div className="footer__socials">
            <a href="https://www.linkedin.com/company/groeimaten/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="https://www.instagram.com/groeimaten/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="https://www.facebook.com/groeimaten/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>&copy; 2025–2026 Groeimaten. KVK 42025801 · BTW NL869360309B01</p>
          <div className="footer__legal">
            <a href="/algemene-voorwaarden.pdf" target="_blank" rel="noopener noreferrer">Algemene voorwaarden</a>
            <a href="/privacy">Privacybeleid</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

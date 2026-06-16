import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import ScrollRevealInit from "@/components/ScrollRevealInit"

const playfair = localFont({
  src: [
    { path: "../fonts/playfair-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/playfair-400-italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-serif",
  display: "swap",
})

const dmSans = localFont({
  src: [
    { path: "../fonts/dm-sans-300-normal.woff2", weight: "300", style: "normal" },
    { path: "../fonts/dm-sans-300-italic.woff2", weight: "300", style: "italic" },
    { path: "../fonts/dm-sans-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/dm-sans-400-italic.woff2", weight: "400", style: "italic" },
    { path: "../fonts/dm-sans-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../fonts/dm-sans-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../fonts/dm-sans-700-normal.woff2", weight: "700", style: "normal" },
    { path: "../fonts/dm-sans-800-normal.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://groeimaten.com"),
  title: {
    default: "Groeimaten | Marketing voor Keuken- en Sanitairbedrijven",
    template: "%s | Groeimaten",
  },
  description:
    "Groeimaten helpt keuken- en sanitairbedrijven groeien met bewezen marketing. Van advertentie tot kwalitatieve showroomafspraak. Specialist in keuken & sanitair.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://groeimaten.com",
    siteName: "Groeimaten",
    title: "Groeimaten | Marketing voor Keuken- en Sanitairbedrijven",
    description:
      "Groeimaten helpt keuken- en sanitairbedrijven groeien met bewezen marketing. Van advertentie tot kwalitatieve showroomafspraak.",
    images: [
      {
        url: "/images/founders-hero.webp",
        width: 1200,
        height: 630,
        alt: "Groeimaten – digital marketing bureau voor keuken- en sanitairbedrijven",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Groeimaten | Marketing voor Keuken- en Sanitairbedrijven",
    description:
      "Groeimaten helpt keuken- en sanitairbedrijven groeien met bewezen marketing. Specialist in keuken & sanitair.",
    images: ["/images/founders-hero.webp"],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="nl"
      suppressHydrationWarning
      className={`${playfair.variable} ${dmSans.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://link.growzy.io" />
        <link rel="dns-prefetch" href="https://link.growzy.io" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Groeimaten",
              url: "https://groeimaten.com",
              description:
                "Groeimaten is een digital marketing bureau gespecialiseerd in keuken- en sanitairbedrijven. Wij helpen keukenstudio's, badkamerbedrijven en bouwbedrijven groeien via Meta Ads, Google Ads, SEO en website development.",
              foundingDate: "2023",
              founder: [
                { "@type": "Person", name: "Jelle Westerbroek" },
                { "@type": "Person", name: "Thomas Ghobadi" },
              ],
              areaServed: { "@type": "Country", name: "Nederland" },
              knowsAbout: [
                "SEO",
                "Google Ads",
                "Meta Ads",
                "Website development",
                "Lead generatie",
                "Keukenmarketing",
                "Sanitairmarketing",
                "Bouwsector marketing",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                url: "https://groeimaten.com/contact",
              },
              sameAs: ["https://groeimaten.com"],
            }),
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <Nav />
          {children}
          <Footer />
          <ScrollRevealInit />
        </ThemeProvider>
      </body>
    </html>
  )
}

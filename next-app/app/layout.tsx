import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"

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
  title: {
    default: "Groeimaten | Marketing voor Keuken- en Badkamerbedrijven",
    template: "%s | Groeimaten",
  },
  description:
    "Groeimaten helpt keuken- en badkamerbedrijven groeien met bewezen marketing. Van advertentie tot kwalitatieve showroomafspraak. Specialist in keuken & badkamer.",
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="nl"
      suppressHydrationWarning
      className={`${playfair.variable} ${dmSans.variable}`}
    >
      <body>
        <ThemeProvider>
          <Nav />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

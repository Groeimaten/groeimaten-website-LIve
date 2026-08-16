import { readFileSync } from "node:fs"
import { fileURLToPath } from "node:url"
import path from "node:path"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const redirectsConfig = JSON.parse(
  readFileSync(path.join(__dirname, "seo-sanering", "redirects.json"), "utf-8")
)

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    // Bron: seo-sanering/redirects.json. Bijgewerkt door de SEO/GEO-routine
    // (routines/seo-geo-groeimaten/ROUTINE.md blok B4). Zie seo-sanering/README.md.
    return redirectsConfig.map((entry) => ({
      source: entry.source,
      destination: entry.destination,
      permanent: true,
    }))
  },
  async rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: "https://eu-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/array/:path*",
        destination: "https://eu-assets.i.posthog.com/array/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://eu.i.posthog.com/:path*",
      },
    ]
  },
  skipTrailingSlashRedirect: true,
}

export default nextConfig

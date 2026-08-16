import { NextRequest, NextResponse } from "next/server"
import goneListRaw from "./seo-sanering/gone.json"

// Bron: seo-sanering/gone.json. Bijgewerkt door de SEO/GEO-routine
// (routines/seo-geo-groeimaten/ROUTINE.md blok B4). Zie seo-sanering/README.md.
const goneList: string[] = goneListRaw as string[]
const goneSet = new Set(goneList.map((p) => p.replace(/\/$/, "")))

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname.replace(/\/$/, "") || "/"

  if (goneSet.has(pathname)) {
    return new NextResponse("Gone", { status: 410 })
  }

  return NextResponse.next()
}

export const config = {
  // Sluit statische assets, afbeeldingen en API-routes uit. Alles onder
  // app/ (pagina's) loopt wel door de check.
  matcher: ["/((?!_next/static|_next/image|api/|favicon.ico|images/|fonts/).*)"],
}

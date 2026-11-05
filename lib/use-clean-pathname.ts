"use client"

import { usePathname } from "next/navigation"

// Op Vercel geeft usePathname() voor de geprerenderde homepage niet altijd "/"
// (bijv. "/index"). Daardoor stond de belofte-balk in de HTML van home en bleef
// hij na doorklikken bovenaan de volgende pagina hangen. Altijd via deze hook lezen.
export function useCleanPathname(): string {
  const raw = usePathname() ?? ""
  const p = raw.replace(/\/index$/, "").replace(/\/+$/, "")
  return p === "" ? "/" : p
}

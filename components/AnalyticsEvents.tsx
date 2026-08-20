"use client"

import { useEffect } from "react"

type Gtag = (command: "event", eventName: string, parameters?: Record<string, string>) => void

const track = (eventName: string, parameters: Record<string, string>) => {
  (window as Window & { gtag?: Gtag }).gtag?.("event", eventName, parameters)
}

export default function AnalyticsEvents() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>("a[href]") : null
      const href = target?.getAttribute("href") ?? ""
      if (!href) return

      if (href.startsWith("tel:")) {
        track("phone_call", { link_url: href })
      } else if (href.startsWith("mailto:")) {
        track("email_click", { link_url: href })
      } else if (href === "/afspraak" || href.startsWith("/afspraak?")) {
        track("appointment_start", { link_url: href })
      }
    }

    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [])

  return null
}

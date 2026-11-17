"use client"

import { useRef, useState } from "react"

type Gtag = (command: "event", eventName: string, parameters?: Record<string, string>) => void
const track = (eventName: string, bedrijf: string) => {
  (window as Window & { gtag?: Gtag }).gtag?.("event", eventName, { bedrijf, campagne: "taartaanval" })
}

type Props = {
  slug: string
  naam: string
  video: string
  poster: string
  tel: { href: string; label: string }
}

export default function TaartVideo({ slug, naam, video, poster, tel }: Props) {
  const ref = useRef<HTMLVideoElement>(null)
  const started = useRef(false)
  const done = useRef(false)
  const [ended, setEnded] = useState(false)

  const replay = () => {
    const v = ref.current
    if (!v) return
    setEnded(false)
    v.currentTime = 0
    v.play().catch(() => {})
    track("taart_video_replay", slug)
  }

  return (
    <div className="taart-video">
      <video
        ref={ref}
        src={video}
        poster={poster}
        controls={!ended}
        playsInline
        preload="metadata"
        aria-label={`Video van Thomas voor ${naam}`}
        onPlay={() => {
          setEnded(false)
          if (started.current) return
          started.current = true
          track("taart_video_play", slug)
        }}
        onTimeUpdate={(e) => {
          const v = e.currentTarget
          if (!done.current && v.duration && v.currentTime / v.duration >= 0.9) {
            done.current = true
            track("taart_video_complete", slug)
          }
        }}
        onEnded={() => setEnded(true)}
      />
      {ended && (
        <div className="taart-video__einde">
          <a href={tel.href} className="btn btn--blue taart-video__bel" onClick={() => track("taart_bel_thomas", slug)}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Bel Thomas: {tel.label}
          </a>
          <button type="button" className="taart-video__opnieuw" onClick={replay}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M3 12a9 9 0 1 0 3-6.7L3 8" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 3v5h5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Opnieuw afspelen
          </button>
        </div>
      )}
    </div>
  )
}

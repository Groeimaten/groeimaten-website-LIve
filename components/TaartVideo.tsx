"use client"

import Image from "next/image"
import { useRef } from "react"

type Gtag = (command: "event", eventName: string, parameters?: Record<string, string>) => void
const track = (eventName: string, bedrijf: string) => {
  (window as Window & { gtag?: Gtag }).gtag?.("event", eventName, { bedrijf, campagne: "taartaanval" })
}

function youtubeId(url: string) {
  const m = url.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/)
  return m?.[1]
}

export default function TaartVideo({ slug, naam, video }: { slug: string; naam: string; video?: string }) {
  const started = useRef(false)
  const done = useRef(false)

  if (!video) {
    return (
      <div className="taart-video taart-video--leeg">
        <Image
          src="/images/thomas-portrait.webp"
          alt="Thomas Ghobadi"
          fill
          sizes="(max-width: 900px) 100vw, 900px"
          style={{ objectFit: "cover", objectPosition: "center 25%" }}
        />
        <div className="taart-video__overlay">
          <span>Hier komt de persoonlijke video van Thomas voor {naam}.</span>
        </div>
      </div>
    )
  }

  const yt = youtubeId(video)
  if (yt) {
    return (
      <div className="taart-video">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${yt}?rel=0&modestbranding=1`}
          title={`Video van Thomas voor ${naam}`}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }

  return (
    <div className="taart-video">
      <video
        src={video}
        poster="/images/thomas-portrait.webp"
        controls
        playsInline
        preload="metadata"
        onPlay={() => {
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
      />
    </div>
  )
}

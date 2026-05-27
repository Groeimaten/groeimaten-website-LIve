"use client"

import { useEffect, useRef } from "react"

interface Props {
  clientName: string
  description: string
}

export default function BeforeAfterSlider({ clientName, description }: Props) {
  const cardRef = useRef<HTMLDivElement>(null)
  const beforeRef = useRef<HTMLDivElement>(null)
  const handleRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    function setPos(clientX: number) {
      const rect = card!.getBoundingClientRect()
      const pct = Math.max(5, Math.min(95, ((clientX - rect.left) / rect.width) * 100))
      if (beforeRef.current) beforeRef.current.style.clipPath = `inset(0 ${(100 - pct).toFixed(1)}% 0 0)`
      if (handleRef.current) handleRef.current.style.left = pct.toFixed(1) + "%"
    }

    const onMouseDown = (e: MouseEvent) => { dragging.current = true; setPos(e.clientX) }
    const onMouseMove = (e: MouseEvent) => { if (dragging.current) setPos(e.clientX) }
    const onMouseUp = () => { dragging.current = false }
    const onTouchStart = (e: TouchEvent) => { dragging.current = true; setPos(e.touches[0].clientX) }
    const onTouchMove = (e: TouchEvent) => { if (dragging.current) setPos(e.touches[0].clientX) }
    const onTouchEnd = () => { dragging.current = false }

    card.addEventListener("mousedown", onMouseDown)
    document.addEventListener("mousemove", onMouseMove)
    document.addEventListener("mouseup", onMouseUp)
    card.addEventListener("touchstart", onTouchStart, { passive: true })
    card.addEventListener("touchmove", onTouchMove, { passive: true })
    card.addEventListener("touchend", onTouchEnd)

    return () => {
      card.removeEventListener("mousedown", onMouseDown)
      document.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mouseup", onMouseUp)
      card.removeEventListener("touchstart", onTouchStart)
      card.removeEventListener("touchmove", onTouchMove)
      card.removeEventListener("touchend", onTouchEnd)
    }
  }, [])

  return (
    <div className="vn-card">
      <div ref={cardRef} className="vn-card__comparison">
        <div className="vn-card__after">
          <div className="vn-card__placeholder vn-card__placeholder--after">
            <CameraIcon />
            <span>Na: nieuwe website</span>
          </div>
        </div>
        <div ref={beforeRef} className="vn-card__before">
          <div className="vn-card__placeholder">
            <CameraIcon />
            <span>Voor: oude website</span>
          </div>
        </div>
        <div className="vn-card__label-voor">Voor</div>
        <div className="vn-card__label-na">Na</div>
        <div ref={handleRef} className="vn-card__handle">
          <div className="vn-card__handle-btn">⟨⟩</div>
        </div>
      </div>
      <div className="vn-card__info">
        <p className="vn-card__client">{clientName}</p>
        <p className="vn-card__vn-desc">{description}</p>
      </div>
    </div>
  )
}

function CameraIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="13" r="4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

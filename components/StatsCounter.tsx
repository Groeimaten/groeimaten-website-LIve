"use client"

import { useEffect, useRef, useState } from "react"

interface Props {
  target: number
  suffix?: string
  duration?: number
}

export default function StatsCounter({ target, suffix = "", duration = 1800 }: Props) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el || started.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return
        started.current = true

        const start = performance.now()
        function update(ts: number) {
          const elapsed = ts - start
          const progress = Math.min(elapsed / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setValue(Math.round(target * eased))
          if (progress < 1) requestAnimationFrame(update)
          else setValue(target)
        }
        requestAnimationFrame(update)
        observer.disconnect()
      },
      { threshold: 0.4 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return (
    <span ref={ref}>
      {value}{suffix}
    </span>
  )
}

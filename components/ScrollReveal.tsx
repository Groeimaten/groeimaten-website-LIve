"use client"

import { useEffect, useRef, ReactNode, CSSProperties, ElementType } from "react"

interface Props {
  children: ReactNode
  className?: string
  delay?: 1 | 2 | 3 | 4 | 5
  as?: ElementType
  style?: CSSProperties
  id?: string
}

export default function ScrollReveal({ children, className = "", delay, as: Tag = "div", style, id }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (!("IntersectionObserver" in window)) {
      el.classList.add("visible")
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const classes = ["reveal-up", delay ? `delay-${delay}` : "", className].filter(Boolean).join(" ")

  return (
    <Tag ref={ref} className={classes} style={style} id={id}>
      {children}
    </Tag>
  )
}

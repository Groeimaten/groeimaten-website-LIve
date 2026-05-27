"use client"

import { useState } from "react"

interface FaqItem {
  question: string
  answer: string
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="faq-list" role="list">
      {items.map((item, i) => (
        <div key={i} className="faq-item" role="listitem">
          <button
            className="faq-item__question"
            aria-expanded={open === i}
            aria-controls={`faq-answer-${i}`}
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span>{item.question}</span>
            <span className="faq-item__icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
          <div
            className={`faq-item__answer${open === i ? " open" : ""}`}
            id={`faq-answer-${i}`}
            role="region"
          >
            <p dangerouslySetInnerHTML={{ __html: item.answer }} />
          </div>
        </div>
      ))}
    </div>
  )
}

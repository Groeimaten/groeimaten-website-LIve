"use client"

import { useState, useRef } from "react"

interface FormState {
  naam: string
  bedrijf: string
  email: string
  telefoon: string
  dienst: string
  bericht: string
}

const INITIAL: FormState = {
  naam: "",
  bedrijf: "",
  email: "",
  telefoon: "",
  dienst: "",
  bericht: "",
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL)
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const update = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsLoading(true)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const json = await res.json()

      if (!res.ok) {
        setError(json.error ?? "Er is iets misgegaan. Probeer het opnieuw.")
      } else {
        setIsSubmitted(true)
        setForm(INITIAL)
      }
    } catch {
      setError("Verbinding mislukt. Controleer je internet en probeer opnieuw.")
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="contact-form-success">
        <div className="contact-form-success__icon" aria-hidden="true">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="1.5" />
            <path d="M12 20.5l6 6 10-12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3>Bericht verzonden</h3>
        <p>We nemen binnen 24 uur contact met je op. Check ook je spam-map voor de bevestigingsmail.</p>
        <button
          className="btn btn--outline btn--sm"
          onClick={() => setIsSubmitted(false)}
          style={{ marginTop: "16px" }}
        >
          Nieuw bericht sturen
        </button>
      </div>
    )
  }

  return (
    <form className="contact-form" ref={formRef} onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="naam">Naam *</label>
          <input
            type="text"
            id="naam"
            name="naam"
            required
            placeholder="Jouw volledige naam"
            value={form.naam}
            onChange={update("naam")}
            disabled={isLoading}
          />
        </div>
        <div className="form-group">
          <label htmlFor="bedrijf">Bedrijfsnaam *</label>
          <input
            type="text"
            id="bedrijf"
            name="bedrijf"
            required
            placeholder="Naam van je bedrijf"
            value={form.bedrijf}
            onChange={update("bedrijf")}
            disabled={isLoading}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="email">E-mailadres *</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="naam@bedrijf.nl"
            value={form.email}
            onChange={update("email")}
            disabled={isLoading}
          />
        </div>
        <div className="form-group">
          <label htmlFor="telefoon">Telefoonnummer</label>
          <input
            type="tel"
            id="telefoon"
            name="telefoon"
            placeholder="06 - 12345678"
            value={form.telefoon}
            onChange={update("telefoon")}
            disabled={isLoading}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="dienst">Waar ben je in geïnteresseerd?</label>
        <select
          id="dienst"
          name="dienst"
          value={form.dienst}
          onChange={update("dienst")}
          disabled={isLoading}
        >
          <option value="">Selecteer een optie</option>
          <option value="meta-ads">Meta Ads &amp; Funnels</option>
          <option value="website">Website Development</option>
          <option value="seo">Google &amp; AI Ranking</option>
          <option value="compleet">Compleet pakket</option>
          <option value="anders">Anders</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="bericht">Bericht *</label>
        <textarea
          id="bericht"
          name="bericht"
          rows={5}
          required
          placeholder="Vertel ons kort over jouw bedrijf en wat je wilt bereiken..."
          value={form.bericht}
          onChange={update("bericht")}
          disabled={isLoading}
        />
      </div>

      {error && (
        <div className="contact-form-error" role="alert">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.4" />
            <path d="M8 5v3.5M8 11h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          {error}
        </div>
      )}

      <button
        type="submit"
        className="btn btn--blue btn--lg contact-form__submit"
        disabled={isLoading}
        aria-busy={isLoading}
      >
        {isLoading ? (
          <>
            <span className="contact-form__spinner" aria-hidden="true" />
            Versturen...
          </>
        ) : (
          <>
            Verstuur bericht
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </>
        )}
      </button>
    </form>
  )
}

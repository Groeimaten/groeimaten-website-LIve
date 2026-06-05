import { NextRequest, NextResponse } from "next/server"
import { getLeadEmailHtml, getCustomerEmailHtml, type ContactFormData } from "./templates"

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY
  const fromEmail = process.env.RESEND_FROM_EMAIL ?? "Groeimaten <onboarding@resend.dev>"
  const leadRecipients = (process.env.LEAD_RECIPIENTS ?? "info@groeimaten.com")
    .split(",")
    .map((e) => e.trim())

  if (!apiKey || apiKey === "re_JOUW_API_SLEUTEL") {
    return NextResponse.json({ error: "Resend API key niet geconfigureerd." }, { status: 500 })
  }

  let body: Record<string, string>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Ongeldig verzoek." }, { status: 400 })
  }

  const { naam, bedrijf, email, telefoon, dienst, bericht } = body

  if (!naam?.trim() || !bedrijf?.trim() || !email?.trim() || !bericht?.trim()) {
    return NextResponse.json({ error: "Vul alle verplichte velden in." }, { status: 400 })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Ongeldig e-mailadres." }, { status: 400 })
  }

  const data: ContactFormData = { naam, bedrijf, email, telefoon, dienst, bericht }

  const sendEmail = (payload: object) =>
    fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })

  // Lead-mail is leidend — customer mail mag falen
  const [leadResult, customerResult] = await Promise.allSettled([
    sendEmail({
      from: fromEmail,
      to: leadRecipients,
      reply_to: email,
      subject: `Nieuwe aanvraag van ${naam} — ${bedrijf}`,
      html: getLeadEmailHtml(data),
    }),
    sendEmail({
      from: fromEmail,
      to: [email],
      subject: "We hebben je bericht ontvangen — Groeimaten",
      html: getCustomerEmailHtml(data),
    }),
  ])

  if (leadResult.status === "rejected" || !(await (leadResult.value as Response).ok)) {
    const err =
      leadResult.status === "rejected"
        ? leadResult.reason
        : await (leadResult.value as Response).text()
    console.error("[contact/route] Lead-mail mislukt:", err)
    return NextResponse.json({ error: "Verzenden mislukt. Probeer het opnieuw." }, { status: 500 })
  }

  if (customerResult.status === "rejected") {
    console.warn("[contact/route] Bevestigingsmail mislukt:", customerResult.reason)
  } else if (!(customerResult.value as Response).ok) {
    const err = await (customerResult.value as Response).text()
    console.warn("[contact/route] Bevestigingsmail mislukt:", err)
  }

  return NextResponse.json({ success: true })
}

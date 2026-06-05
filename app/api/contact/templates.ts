export interface ContactFormData {
  naam: string
  bedrijf: string
  email: string
  telefoon?: string
  dienst?: string
  bericht: string
}

const GOLD = "#b89a5a"
const GOLD_DARK = "#9a7d42"
const BG = "#f9f8f5"
const CARD_BG = "#ffffff"
const TEXT = "#1a1a1a"
const TEXT_MUTED = "#5a5a5a"
const BORDER = "#e8e4dc"

const dienstLabel: Record<string, string> = {
  "meta-ads": "Meta Ads & Funnels",
  website: "Website Development",
  seo: "Google & AI Ranking",
  compleet: "Compleet pakket",
  anders: "Anders",
}

const baseWrapper = (content: string) => `
<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Groeimaten</title>
</head>
<body style="margin:0;padding:0;background-color:${BG};font-family:'Georgia',serif;color:${TEXT};-webkit-font-smoothing:antialiased;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${BG};padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;">

          <!-- LOGO HEADER -->
          <tr>
            <td style="padding-bottom:32px;text-align:center;">
              <span style="font-family:'Georgia',serif;font-size:22px;font-weight:400;letter-spacing:0.08em;color:${TEXT};">
                GROEI<span style="color:${GOLD};">MATEN</span>
              </span>
            </td>
          </tr>

          <!-- CONTENT CARD -->
          <tr>
            <td style="background-color:${CARD_BG};border-radius:8px;border:1px solid ${BORDER};overflow:hidden;">
              ${content}
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="padding-top:32px;text-align:center;font-size:12px;color:${TEXT_MUTED};font-family:'Arial',sans-serif;line-height:1.6;">
              <p style="margin:0 0 4px;">Groeimaten · Keuken- &amp; sanitairmarketing</p>
              <p style="margin:0 0 4px;">
                <a href="mailto:info@groeimaten.com" style="color:${GOLD};text-decoration:none;">info@groeimaten.com</a>
                &nbsp;·&nbsp;
                <a href="tel:+31629193444" style="color:${GOLD};text-decoration:none;">+31 6 29193444</a>
              </p>
              <p style="margin:0;">
                <a href="https://groeimaten.com" style="color:${TEXT_MUTED};text-decoration:none;">groeimaten.com</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`

const dataRow = (label: string, value: string) => `
  <tr>
    <td style="padding:12px 0;border-bottom:1px solid ${BORDER};font-size:13px;font-family:'Arial',sans-serif;">
      <span style="color:${TEXT_MUTED};display:block;margin-bottom:2px;">${label}</span>
      <span style="color:${TEXT};font-weight:600;">${value}</span>
    </td>
  </tr>
`

export function getLeadEmailHtml(data: ContactFormData): string {
  const dienst = data.dienst ? (dienstLabel[data.dienst] ?? data.dienst) : "Niet opgegeven"

  const content = `
    <!-- TOP ACCENT -->
    <div style="height:4px;background:linear-gradient(90deg,${GOLD},${GOLD_DARK});"></div>

    <div style="padding:40px 40px 32px;">
      <p style="margin:0 0 6px;font-size:12px;font-family:'Arial',sans-serif;letter-spacing:0.12em;text-transform:uppercase;color:${GOLD};">Nieuwe aanvraag</p>
      <h1 style="margin:0 0 8px;font-family:'Georgia',serif;font-size:26px;font-weight:400;line-height:1.2;color:${TEXT};">
        Nieuwe lead binnengekregen
      </h1>
      <p style="margin:0;font-size:15px;font-family:'Arial',sans-serif;color:${TEXT_MUTED};line-height:1.6;">
        <strong style="color:${TEXT};">${data.naam}</strong> van <strong style="color:${TEXT};">${data.bedrijf}</strong> heeft het contactformulier ingevuld.
      </p>
    </div>

    <!-- DIVIDER -->
    <div style="height:1px;background:${BORDER};margin:0 40px;"></div>

    <!-- DATA TABLE -->
    <div style="padding:24px 40px 32px;">
      <p style="margin:0 0 16px;font-size:11px;font-family:'Arial',sans-serif;letter-spacing:0.1em;text-transform:uppercase;color:${TEXT_MUTED};">Ingevulde gegevens</p>
      <table width="100%" cellpadding="0" cellspacing="0" border="0">
        ${dataRow("Naam", data.naam)}
        ${dataRow("Bedrijf", data.bedrijf)}
        ${dataRow("E-mail", data.email)}
        ${dataRow("Telefoon", data.telefoon || "Niet opgegeven")}
        ${dataRow("Dienst interesse", dienst)}
      </table>

      <!-- BERICHT -->
      <div style="margin-top:24px;">
        <p style="margin:0 0 8px;font-size:11px;font-family:'Arial',sans-serif;letter-spacing:0.1em;text-transform:uppercase;color:${TEXT_MUTED};">Bericht</p>
        <div style="background:${BG};border-left:3px solid ${GOLD};padding:16px 20px;border-radius:0 4px 4px 0;">
          <p style="margin:0;font-size:15px;font-family:'Arial',sans-serif;line-height:1.7;color:${TEXT};">${data.bericht.replace(/\n/g, "<br />")}</p>
        </div>
      </div>
    </div>

    <!-- CTA / URGENTIE -->
    <div style="background:#fffbf2;border-top:1px solid #ede6d3;padding:24px 40px;border-radius:0 0 8px 8px;">
      <table width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td style="vertical-align:middle;padding-right:20px;">
            <p style="margin:0 0 4px;font-size:14px;font-family:'Arial',sans-serif;font-weight:700;color:${TEXT};">Opvolging binnen 24 uur</p>
            <p style="margin:0;font-size:13px;font-family:'Arial',sans-serif;color:${TEXT_MUTED};line-height:1.5;">
              Reply op deze e-mail om direct terug te schrijven naar ${data.naam}.
            </p>
          </td>
          <td style="vertical-align:middle;white-space:nowrap;">
            <a href="mailto:${data.email}" style="display:inline-block;background:${GOLD};color:#ffffff;text-decoration:none;font-size:13px;font-family:'Arial',sans-serif;font-weight:700;padding:10px 20px;border-radius:4px;letter-spacing:0.04em;">
              Reageer nu
            </a>
          </td>
        </tr>
      </table>
    </div>
  `

  return baseWrapper(content)
}

export function getCustomerEmailHtml(data: ContactFormData): string {
  const dienst = data.dienst ? (dienstLabel[data.dienst] ?? data.dienst) : null

  const content = `
    <!-- TOP ACCENT -->
    <div style="height:4px;background:linear-gradient(90deg,${GOLD},${GOLD_DARK});"></div>

    <div style="padding:40px 40px 32px;">
      <p style="margin:0 0 6px;font-size:12px;font-family:'Arial',sans-serif;letter-spacing:0.12em;text-transform:uppercase;color:${GOLD};">Ontvangstbevestiging</p>
      <h1 style="margin:0 0 16px;font-family:'Georgia',serif;font-size:26px;font-weight:400;line-height:1.2;color:${TEXT};">
        Goed ontvangen, ${data.naam.split(" ")[0]}.
      </h1>
      <p style="margin:0 0 12px;font-size:15px;font-family:'Arial',sans-serif;color:${TEXT_MUTED};line-height:1.7;">
        Bedankt voor je bericht. We hebben je aanvraag in goede orde ontvangen en nemen binnen <strong style="color:${TEXT};">24 uur</strong> contact met je op.
      </p>
      <p style="margin:0;font-size:15px;font-family:'Arial',sans-serif;color:${TEXT_MUTED};line-height:1.7;">
        In de tussentijd kun je alvast een kijkje nemen op onze website voor meer informatie over onze aanpak.
      </p>
    </div>

    <!-- DIVIDER -->
    <div style="height:1px;background:${BORDER};margin:0 40px;"></div>

    <!-- SAMENVATTING AANVRAAG -->
    <div style="padding:24px 40px 32px;">
      <p style="margin:0 0 16px;font-size:11px;font-family:'Arial',sans-serif;letter-spacing:0.1em;text-transform:uppercase;color:${TEXT_MUTED};">Jouw aanvraag</p>
      <table width="100%" cellpadding="0" cellspacing="0" border="0">
        ${dataRow("Naam", data.naam)}
        ${dataRow("Bedrijf", data.bedrijf)}
        ${dataRow("E-mail", data.email)}
        ${data.telefoon ? dataRow("Telefoon", data.telefoon) : ""}
        ${dienst ? dataRow("Interesse in", dienst) : ""}
      </table>
    </div>

    <!-- DIVIDER -->
    <div style="height:1px;background:${BORDER};margin:0 40px;"></div>

    <!-- DIRECT CONTACT -->
    <div style="padding:24px 40px 32px;">
      <p style="margin:0 0 16px;font-size:11px;font-family:'Arial',sans-serif;letter-spacing:0.1em;text-transform:uppercase;color:${TEXT_MUTED};">Liever direct contact?</p>
      <table width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td style="padding:0 24px 0 0;vertical-align:top;font-size:14px;font-family:'Arial',sans-serif;color:${TEXT_MUTED};line-height:1.8;">
            <strong style="display:block;color:${TEXT};margin-bottom:4px;">E-mail</strong>
            <a href="mailto:info@groeimaten.com" style="color:${GOLD};text-decoration:none;">info@groeimaten.com</a>
          </td>
          <td style="vertical-align:top;font-size:14px;font-family:'Arial',sans-serif;color:${TEXT_MUTED};line-height:1.8;">
            <strong style="display:block;color:${TEXT};margin-bottom:4px;">Telefoon</strong>
            <a href="tel:+31629193444" style="color:${GOLD};text-decoration:none;">+31 6 29193444</a>
          </td>
        </tr>
      </table>
    </div>

    <!-- CLOSING -->
    <div style="background:#fffbf2;border-top:1px solid #ede6d3;padding:24px 40px;border-radius:0 0 8px 8px;text-align:center;">
      <p style="margin:0 0 4px;font-size:14px;font-family:'Georgia',serif;color:${TEXT};font-style:italic;">
        "Meer afspraken. Betere klanten. Meetbare groei."
      </p>
      <p style="margin:12px 0 0;font-size:13px;font-family:'Arial',sans-serif;color:${TEXT_MUTED};">
        Met vriendelijke groet, het Groeimaten team
      </p>
    </div>
  `

  return baseWrapper(content)
}

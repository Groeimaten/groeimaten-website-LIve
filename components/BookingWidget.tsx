"use client"

import Script from "next/script"

export default function BookingWidget() {
  return (
    <>
      <Script
        src="https://link.growzy.io/js/form_embed.js"
        strategy="beforeInteractive"
      />
      <iframe
        src="https://link.growzy.io/widget/booking/fsskVvL2uoAh0tcbAXtj"
        style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "700px", borderRadius: "8px" }}
        scrolling="no"
        id="fsskVvL2uoAh0tcbAXtj_1780588232352"
        title="Afspraak inplannen"
      />
    </>
  )
}

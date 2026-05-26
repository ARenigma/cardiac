import { NextRequest, NextResponse } from "next/server"

// Newsletter signup — forwards subscriber email to admin@myshavi.com
// Requires env var: RESEND_API_KEY (free at resend.com — 3,000 emails/month)

export async function POST(req: NextRequest) {
  const { email } = await req.json()

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    // Env var not configured yet — log and return success so UX isn't broken
    console.warn("[newsletter] RESEND_API_KEY not set — signup not forwarded:", email)
    return NextResponse.json({ ok: true })
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Sierra Heart Website <onboarding@resend.dev>",
      to: ["admin@myshavi.com"],
      subject: "New Newsletter Signup — myshavi.com",
      html: `
        <p>A new visitor signed up for the newsletter on <strong>myshavi.com</strong>.</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><em>Sierra Heart &amp; Vascular Institute — automated notification</em></p>
      `,
    }),
  })

  if (!res.ok) {
    const err = await res.text()
    console.error("[newsletter] Resend error:", err)
    return NextResponse.json({ error: "Failed to send", detail: err }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}

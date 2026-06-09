import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { firstName, lastName, email, phone, city, message } = body

    const webhookUrl = process.env.DISCORD_WEBHOOK_URL

    if (!webhookUrl) {
      return NextResponse.json({ error: 'Webhook not configured' }, { status: 500 })
    }

    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        embeds: [{
          title: '🆕 New Recruiting Application',
          color: 0xC9A84C,
          fields: [
            { name: '👤 Name', value: `${firstName} ${lastName}`, inline: true },
            { name: '📧 Email', value: email, inline: true },
            { name: '📞 Phone', value: phone, inline: true },
            { name: '📍 City', value: city, inline: true },
            { name: '💬 Message', value: message || 'No message provided', inline: false },
          ],
          timestamp: new Date().toISOString(),
          footer: { text: 'Amoor Consulting Group — Recruiting' }
        }]
      })
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
import { NextRequest, NextResponse } from 'next/server'

const SYSTEM_PROMPT = `You are the Amoor Assistant, a friendly and knowledgeable AI agent for Amoor Consulting Group.

ABOUT AMOOR CONSULTING GROUP:
- A sales and leadership consulting firm
- Locations: Oklahoma City (HQ), Tulsa OK, Detroit MI, Dallas TX
- Contact: Careers@amoorconsulting.org | (405) 456-9061
- Website: amoorconsulting.org

SERVICES:
1. Free Government Phones (Amara Phones) - Lifeline program for qualifying low-income Americans. Partner: Entouch Wireless. Website: amara-phones.vercel.app
2. Business Internet - Compare fiber, wireless, VoIP for businesses. Website: business-internet-funnel.vercel.app

CAREERS:
- No experience required
- Performance-based pay, unlimited earning potential
- Full training from day one
- Direct mentorship from experienced leaders
- Growth path: representative to manager to leader
- Travel opportunities for top performers
- Apply at: amoorconsulting.org/careers

YOUR RULES:
- Be warm, energetic, and encouraging
- Give SPECIFIC relevant answers based on what the user asks
- Keep responses to 2-4 sentences unless more detail is needed
- Always end with a helpful next step or follow-up question
- If you don't know something say reach out to us at Careers@amoorconsulting.org or (405) 456-9061
- Never make up information`

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json()
    console.log('API Key exists:', !!process.env.ANTHROPIC_API_KEY)

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY!,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 1000,
        system: SYSTEM_PROMPT,
        messages: messages.slice(-10),
      }),
    })

    const data = await response.json()
console.log('Anthropic response:', JSON.stringify(data))
const reply = data.content[0].text

    return NextResponse.json({ reply })
  } catch (error) {
    return NextResponse.json({ reply: 'Sorry, having trouble connecting. Please contact us at Careers@amoorconsulting.org or call (405) 456-9061.' })
  }
}
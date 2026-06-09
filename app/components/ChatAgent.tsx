'use client'

import { useState, useRef, useEffect } from 'react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

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

const SUGGESTIONS = [
  { icon: '💼', text: 'I want to join the team' },
  { icon: '📱', text: 'Free government phone' },
  { icon: '🌐', text: 'Business internet' },
  { icon: '📍', text: 'What cities are you in?' },
  { icon: '💰', text: 'How much can I earn?' },
]

export default function ChatAgent() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [showDot, setShowDot] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open && messages.length === 0) {
      setTimeout(() => {
        setMessages([{
          role: 'assistant',
          content: "Hey! 👋 I'm the Amoor Assistant. I can help you join our sales team, learn about free government phones, or find business internet solutions. What can I help you with today?"
        }])
      }, 500)
    }
  }, [open])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  useEffect(() => {
    setTimeout(() => setShowDot(true), 3000)
  }, [])

  async function sendMessage(text?: string) {
    const userText = text || input.trim()
    if (!userText || loading) return
    setInput('')
    setShowDot(false)

    const newMessages: Message[] = [...messages, { role: 'user', content: userText }]
    setMessages(newMessages)
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages })
      })
      const data = await res.json()
      setMessages([...newMessages, { role: 'assistant', content: data.reply }])
    } catch {
      setMessages([...newMessages, {
        role: 'assistant',
        content: 'Sorry, having trouble connecting. Please contact us at Careers@amoorconsulting.org or call (405) 456-9061.'
      }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Chat Window */}
      {open && (
        <div style={{
          position: 'fixed', bottom: '90px', right: '24px',
          width: '360px', height: '500px',
          background: '#111', border: '1px solid #C9A84C',
          borderRadius: '12px', display: 'flex', flexDirection: 'column',
          zIndex: 999, boxShadow: '0 8px 40px rgba(0,0,0,0.6)',
          overflow: 'hidden',
        }}>
          {/* Header */}
          <div style={{
            background: '#0a0a0a', borderBottom: '1px solid #C9A84C',
            padding: '14px 16px', display: 'flex', alignItems: 'center', gap: '10px',
          }}>
            <div style={{
              width: '36px', height: '36px', borderRadius: '50%',
              background: '#C9A84C', display: 'flex', alignItems: 'center',
              justifyContent: 'center', fontSize: '18px', flexShrink: 0,
            }}>🤖</div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#fff' }}>Amoor Assistant</div>
              <div style={{ fontSize: '11px', color: '#4CAF50' }}>● Online — Ask me anything</div>
            </div>
            <button onClick={() => setOpen(false)} style={{
              marginLeft: 'auto', background: 'none', border: 'none',
              color: '#666', cursor: 'pointer', fontSize: '18px',
            }}>✕</button>
          </div>

          {/* Quick Suggestions */}
          {messages.length <= 1 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', padding: '8px 12px', borderBottom: '1px solid #1a1a1a' }}>
              {SUGGESTIONS.map((s) => (
                <button key={s.text} onClick={() => sendMessage(s.text)} style={{
                  background: '#1a1a1a', border: '1px solid #333',
                  borderRadius: '20px', padding: '5px 10px',
                  fontSize: '11px', color: '#C9A84C', cursor: 'pointer',
                }}>
                  {s.icon} {s.text}
                </button>
              ))}
            </div>
          )}

          {/* Messages */}
          <div style={{
            flex: 1, overflowY: 'auto', padding: '16px',
            display: 'flex', flexDirection: 'column', gap: '12px',
          }}>
            {messages.map((msg, i) => (
              <div key={i} style={{
                display: 'flex', gap: '8px', alignItems: 'flex-end',
                flexDirection: msg.role === 'user' ? 'row-reverse' : 'row',
              }}>
                <div style={{
                  width: '28px', height: '28px', borderRadius: '50%',
                    background: msg.role === 'assistant' ? '#C9A84C' : '#333',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '13px', flexShrink: 0,
                }}>
                  {msg.role === 'user' ? '👤' : '🤖'}
                </div>
                <div style={{
                  maxWidth: '75%', padding: '10px 14px', borderRadius: '12px',
                  fontSize: '13px', lineHeight: 1.6,
                  background: msg.role === 'user' ? '#C9A84C' : '#1a1a1a',
                  color: msg.role === 'user' ? '#0a0a0a' : '#ddd',
                  fontWeight: msg.role === 'user' ? 600 : 400,
                  borderBottomRightRadius: msg.role === 'user' ? '4px' : '12px',
                  borderBottomLeftRadius: msg.role === 'assistant' ? '4px' : '12px',
                }}>
                  {msg.content}
                </div>
              </div>
            ))}

            {loading && (
              <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-end' }}>
                <div style={{
                  width: '28px', height: '28px', borderRadius: '50%',
                  background: '#C9A84C', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', fontSize: '13px',
                }}>🤖</div>
                <div style={{
                  background: '#1a1a1a', padding: '12px 16px',
                  borderRadius: '12px', borderBottomLeftRadius: '4px',
                  display: 'flex', gap: '4px', alignItems: 'center',
                }}>
                  {[0, 1, 2].map(i => (
                    <div key={i} style={{
                      width: '7px', height: '7px', borderRadius: '50%',
                      background: '#666', animation: `bounce 1.2s infinite ${i * 0.2}s`,
                    }} />
                  ))}
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div style={{
            borderTop: '1px solid #1a1a1a', padding: '12px',
            display: 'flex', gap: '8px', background: '#0a0a0a',
          }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage()}
              placeholder="Ask me anything..."
              style={{
                flex: 1, background: '#1a1a1a', border: '1px solid #2a2a2a',
                borderRadius: '8px', padding: '10px 14px', color: '#fff',
                fontSize: '13px', outline: 'none', fontFamily: 'Arial, sans-serif',
              }}
            />
            <button onClick={() => sendMessage()} disabled={loading} style={{
              background: loading ? '#444' : '#C9A84C',
              border: 'none', borderRadius: '8px',
              width: '42px', height: '42px', cursor: loading ? 'not-allowed' : 'pointer',
              fontSize: '18px', flexShrink: 0,
            }}>➤</button>
          </div>
        </div>
      )}

      {/* Bubble Button */}
      <button onClick={() => setOpen(!open)} style={{
        position: 'fixed', bottom: '24px', right: '24px',
        width: '60px', height: '60px', borderRadius: '50%',
        background: '#C9A84C', border: 'none', cursor: 'pointer',
        fontSize: '26px', boxShadow: '0 4px 20px rgba(201,168,76,0.4)',
        zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {open ? '✕' : '💬'}
        {showDot && !open && (
          <div style={{
            position: 'absolute', top: 0, right: 0,
            width: '14px', height: '14px', background: '#ff4444',
            borderRadius: '50%', border: '2px solid #0a0a0a',
          }} />
        )}
      </button>

      <style>{`
        @keyframes bounce {
          0%, 60%, 100% { transform: translateY(0); background: #666; }
          30% { transform: translateY(-6px); background: #C9A84C; }
        }
      `}</style>
    </>
  )
}
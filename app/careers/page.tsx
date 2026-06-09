'use client'

import { useState } from 'react'

export default function Careers() {
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const form = e.currentTarget
    const data = {
      firstName: (form.elements.namedItem('firstName') as HTMLInputElement).value,
      lastName: (form.elements.namedItem('lastName') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      city: (form.elements.namedItem('city') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please try again.')
      }
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <main>
        <section style={{ background: '#0a0a0a', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '4rem 2rem' }}>
          <div>
            <div style={{ fontSize: '48px', marginBottom: '1rem' }}>🎉</div>
            <h1 style={{ fontSize: '32px', fontWeight: 800, color: '#C9A84C', marginBottom: '1rem' }}>Application Submitted!</h1>
            <p style={{ fontSize: '15px', color: '#888', lineHeight: 1.7, maxWidth: '480px', margin: '0 auto' }}>
              Thank you for applying to Amoor Consulting Group. Our team will reach out within 24 hours.
            </p>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main>

      {/* Hero */}
      <section style={{ background: '#0a0a0a', padding: '4rem 2rem', borderBottom: '1px solid #1a1a1a' }}>
        <div style={{ fontSize: '11px', color: '#C9A84C', letterSpacing: '2px', marginBottom: '0.75rem' }}>JOIN THE TEAM</div>
        <h1 style={{ fontSize: '38px', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>
          Start Your Journey.<br /><span style={{ color: '#C9A84C' }}>Build Your Future.</span>
        </h1>
        <p style={{ fontSize: '15px', color: '#888', lineHeight: 1.7, maxWidth: '600px' }}>
          No experience required. We provide full training, mentorship, and a performance-based income opportunity across 4 cities.
        </p>
      </section>

      {/* Benefits */}
      <section style={{ background: '#111', padding: '3rem 2rem', borderBottom: '1px solid #1a1a1a' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
          {[
            { icon: '💰', title: 'Performance Based Pay', desc: 'Your income is directly tied to your results. No cap on earnings.' },
            { icon: '🎓', title: 'Full Training Provided', desc: 'We train you from day one. No experience needed to get started.' },
            { icon: '🚀', title: 'Room to Grow', desc: 'Clear path from representative to manager to leader.' },
            { icon: '🤝', title: 'Mentorship', desc: 'Direct mentorship from experienced leaders every step of the way.' },
            { icon: '🌍', title: 'Travel Opportunities', desc: 'Top performers get travel and networking opportunities.' },
            { icon: '🏆', title: 'Recognition & Rewards', desc: 'Hard work is always recognized and rewarded here.' },
          ].map((item) => (
            <div key={item.title} style={{
              background: '#0d0d0d',
              border: '1px solid #222',
              borderRadius: '4px',
              padding: '1.25rem',
            }}>
              <div style={{ fontSize: '22px', marginBottom: '0.5rem' }}>{item.icon}</div>
              <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#fff', marginBottom: '6px' }}>{item.title}</h3>
              <p style={{ fontSize: '12px', color: '#666', lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Application Form */}
      <section style={{ background: '#0a0a0a', padding: '4rem 2rem', borderBottom: '1px solid #1a1a1a' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ fontSize: '11px', color: '#C9A84C', letterSpacing: '2px', marginBottom: '0.75rem' }}>APPLY NOW</div>
          <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#fff', marginBottom: '0.5rem' }}>Submit Your Application</h2>
          <p style={{ fontSize: '14px', color: '#777', marginBottom: '2rem' }}>Fill out the form below and our team will reach out within 24 hours.</p>

          <form onSubmit={handleSubmit}>
            {[
              { label: 'First Name', name: 'firstName', type: 'text' },
              { label: 'Last Name', name: 'lastName', type: 'text' },
              { label: 'Email Address', name: 'email', type: 'email' },
              { label: 'Phone Number', name: 'phone', type: 'tel' },
            ].map((field) => (
              <div key={field.name} style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '12px', color: '#888', marginBottom: '6px', letterSpacing: '0.5px' }}>
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  required
                  style={{
                    width: '100%',
                    background: '#111',
                    border: '1px solid #333',
                    borderRadius: '4px',
                    padding: '12px 16px',
                    color: '#fff',
                    fontSize: '14px',
                    outline: 'none',
                  }}
                />
              </div>
            ))}

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', fontSize: '12px', color: '#888', marginBottom: '6px', letterSpacing: '0.5px' }}>
                Which City Are You Applying For?
              </label>
              <select name="city" required style={{
                width: '100%',
                background: '#111',
                border: '1px solid #333',
                borderRadius: '4px',
                padding: '12px 16px',
                color: '#fff',
                fontSize: '14px',
                outline: 'none',
              }}>
                <option value="">Select a city...</option>
                <option value="Oklahoma City, OK">Oklahoma City, OK</option>
                <option value="Tulsa, OK">Tulsa, OK</option>
                <option value="Detroit, MI">Detroit, MI</option>
                <option value="Dallas, TX">Dallas, TX</option>
              </select>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', fontSize: '12px', color: '#888', marginBottom: '6px', letterSpacing: '0.5px' }}>
                Why Do You Want to Join Amoor? (Optional)
              </label>
              <textarea name="message" rows={4} style={{
                width: '100%',
                background: '#111',
                border: '1px solid #333',
                borderRadius: '4px',
                padding: '12px 16px',
                color: '#fff',
                fontSize: '14px',
                outline: 'none',
                resize: 'vertical',
              }} />
            </div>

            {error && (
              <p style={{ color: '#ff4444', fontSize: '13px', marginBottom: '1rem' }}>{error}</p>
            )}

            <button type="submit" disabled={loading} style={{
              width: '100%',
              background: loading ? '#888' : '#C9A84C',
              color: '#0a0a0a',
              padding: '14px',
              borderRadius: '4px',
              fontSize: '15px',
              fontWeight: 800,
              cursor: loading ? 'not-allowed' : 'pointer',
              border: 'none',
              letterSpacing: '0.5px',
            }}>
              {loading ? 'Submitting...' : 'Submit Application'}
            </button>
          </form>
        </div>
      </section>

    </main>
  )
}
export default function Locations() {
  const locations = [
    {
      city: 'Oklahoma City',
      state: 'Oklahoma',
      tag: 'HQ',
      description: 'Our headquarters and first market. OKC is where it all started.',
      href: 'https://amoor-okc.netlify.app',
    },
    {
      city: 'Tulsa',
      state: 'Oklahoma',
      tag: '',
      description: 'Growing fast in Tulsa with a strong team and community presence.',
      href: 'https://amoor-tulsa.netlify.app',
    },
    {
      city: 'Detroit',
      state: 'Michigan',
      tag: '',
      description: 'Expanding into the midwest with exciting opportunities in Detroit.',
      href: 'https://amoor-detroit.netlify.app',
    },
    {
      city: 'Dallas',
      state: 'Texas',
      tag: '',
      description: 'Our newest market — Dallas is growing and we are hiring now.',
      href: 'https://amoor-dallas.netlify.app',
    },
  ]

  return (
    <main>

      {/* Hero */}
      <section style={{ background: '#0a0a0a', padding: '4rem 2rem', borderBottom: '1px solid #1a1a1a' }}>
        <div style={{ fontSize: '11px', color: '#C9A84C', letterSpacing: '2px', marginBottom: '0.75rem' }}>OUR MARKETS</div>
        <h1 style={{ fontSize: '38px', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>
          Where We Operate.<br /><span style={{ color: '#C9A84C' }}>Where We're Growing.</span>
        </h1>
        <p style={{ fontSize: '15px', color: '#888', lineHeight: 1.7, maxWidth: '600px' }}>
          Amoor Consulting Group is actively expanding across four major US markets with more cities coming soon.
        </p>
      </section>

      {/* Locations Grid */}
      <section style={{ background: '#0d0d0d', padding: '4rem 2rem', borderBottom: '1px solid #1a1a1a' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
          {locations.map((loc) => (
            <div key={loc.city} style={{
              background: '#111',
              border: '1px solid #222',
              borderRadius: '4px',
              padding: '2rem',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.5rem' }}>
                <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#fff' }}>{loc.city}</h2>
                {loc.tag && (
                  <span style={{
                    background: '#1a1a1a',
                    color: '#C9A84C',
                    border: '1px solid #C9A84C',
                    padding: '2px 10px',
                    borderRadius: '2px',
                    fontSize: '10px',
                    letterSpacing: '1px',
                  }}>{loc.tag}</span>
                )}
              </div>
              <div style={{ fontSize: '12px', color: '#C9A84C', letterSpacing: '1px', marginBottom: '0.75rem' }}>{loc.state.toUpperCase()}</div>
              <p style={{ fontSize: '13px', color: '#777', lineHeight: 1.6, marginBottom: '1.5rem' }}>{loc.description}</p>
              <a href={loc.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <button style={{
                  background: '#C9A84C',
                  color: '#0a0a0a',
                  padding: '10px 24px',
                  borderRadius: '4px',
                  fontSize: '13px',
                  fontWeight: 800,
                  cursor: 'pointer',
                  border: 'none',
                  letterSpacing: '0.5px',
                }}>
                  View Opportunities →
                </button>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#C9A84C', padding: '4rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#0a0a0a', marginBottom: '0.75rem' }}>Don't See Your City?</h2>
        <p style={{ fontSize: '14px', color: '#5a4a1a', marginBottom: '1.75rem' }}>We are expanding fast. Apply now and we will reach out when we launch in your area.</p>
        <a href="/careers" style={{ textDecoration: 'none' }}>
          <button style={{
            background: '#0a0a0a',
            color: '#C9A84C',
            padding: '14px 36px',
            borderRadius: '4px',
            fontSize: '14px',
            fontWeight: 800,
            cursor: 'pointer',
            border: 'none',
            letterSpacing: '0.5px',
          }}>
            Apply Now
          </button>
        </a>
      </section>

    </main>
  )
}
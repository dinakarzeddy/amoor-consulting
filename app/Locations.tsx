export default function Locations() {
  const locations = [
    { city: 'Oklahoma City', state: 'OKLAHOMA', tag: 'HQ', href: 'https://amoor-okc.netlify.app' },
    { city: 'Tulsa', state: 'OKLAHOMA', tag: '', href: 'https://amoor-tulsa.netlify.app' },
    { city: 'Detroit', state: 'MICHIGAN', tag: '', href: 'https://amoor-detroit.netlify.app' },
    { city: 'Dallas', state: 'TEXAS', tag: '', href: 'https://amoor-dallas.netlify.app' },
  ]

  return (
    <section style={{ background: '#0a0a0a', padding: '4rem 2rem', borderTop: '1px solid #1a1a1a' }}>
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ fontSize: '11px', color: '#C9A84C', letterSpacing: '2px', marginBottom: '0.75rem' }}>OUR MARKETS</div>
        <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#fff', marginBottom: '0.5rem' }}>Where We Operate</h2>
        <p style={{ fontSize: '14px', color: '#777' }}>Actively growing in four major markets across the US.</p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '12px',
      }}>
        {locations.map((loc) => (
          <a
            key={loc.city}
            href={loc.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <div style={{
              background: '#111',
              border: '1px solid #222',
              borderRadius: '4px',
              padding: '1.25rem',
              cursor: 'pointer',
            }}>
              <div style={{ fontSize: '15px', fontWeight: 700, color: '#fff' }}>
                {loc.city} {loc.tag && <span style={{ fontSize: '11px', color: '#C9A84C', marginLeft: '6px' }}>— {loc.tag}</span>}
              </div>
              <div style={{ fontSize: '11px', color: '#C9A84C', letterSpacing: '1px', marginTop: '4px' }}>{loc.state}</div>
              <div style={{
                display: 'inline-block',
                marginTop: '10px',
                fontSize: '10px',
                color: '#C9A84C',
                border: '1px solid #C9A84C',
                padding: '2px 10px',
                borderRadius: '2px',
              }}>
                NOW HIRING
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
export default function Trust() {
  const items = [
    { icon: '🛡️', title: 'Verified Organization', desc: 'Licensed, registered, and operating transparently across all our markets.' },
    { icon: '📈', title: 'Performance Based', desc: 'Your income grows with your results. No hidden fees. No false promises.' },
    { icon: '🤝', title: 'Mentorship Driven', desc: 'Every team member gets direct mentorship from experienced leaders.' },
    { icon: '🏢', title: 'Real Offices', desc: 'Physical locations in OKC, Tulsa, Detroit, and Dallas. Come see us.' },
    { icon: '⭐', title: 'Proven Track Record', desc: 'Years of developing leaders across multiple states and industries.' },
    { icon: '📞', title: 'Always Reachable', desc: '(405) 456-9061 — real people answer. No bots, no runaround.' },
  ]

  return (
    <section style={{ background: '#0d0d0d', padding: '4rem 2rem', borderTop: '1px solid #1a1a1a' }}>
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ fontSize: '11px', color: '#C9A84C', letterSpacing: '2px', marginBottom: '0.75rem' }}>WHY TRUST US</div>
        <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#fff', marginBottom: '0.5rem' }}>Built on Transparency & Results</h2>
        <p style={{ fontSize: '14px', color: '#777' }}>We believe trust is earned. Here's what makes Amoor different.</p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '12px',
      }}>
        {items.map((item) => (
          <div key={item.title} style={{
            background: '#111',
            border: '1px solid #1a1a1a',
            borderRadius: '4px',
            padding: '1.25rem',
          }}>
            <div style={{ fontSize: '20px', marginBottom: '0.75rem' }}>{item.icon}</div>
            <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#fff', marginBottom: '6px' }}>{item.title}</h4>
            <p style={{ fontSize: '12px', color: '#666', lineHeight: 1.6 }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
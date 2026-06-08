export default function Services() {
  const services = [
    {
      icon: '🎯',
      title: 'Customer Acquisition',
      desc: 'Direct outreach and face-to-face engagement that connects brands with real customers.',
    },
    {
      icon: '🚀',
      title: 'Sales Development',
      desc: 'Training programs that build communication, confidence, and leadership from day one.',
    },
    {
      icon: '🤝',
      title: 'Community Engagement',
      desc: 'Local events and relationship-driven marketing that builds real brand presence.',
    },
    {
      icon: '🏆',
      title: 'Brand Representation',
      desc: 'Trained ambassadors who create trust and lasting customer loyalty.',
    },
  ]

  return (
    <section style={{ background: '#0d0d0d', padding: '4rem 2rem', borderTop: '1px solid #1a1a1a' }}>
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ fontSize: '11px', color: '#C9A84C', letterSpacing: '2px', marginBottom: '0.75rem' }}>WHAT WE DO</div>
        <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#fff', marginBottom: '0.5rem' }}>Services That Drive Real Results</h2>
        <p style={{ fontSize: '14px', color: '#777', lineHeight: 1.7 }}>We partner with nationally recognized brands to deliver face-to-face outreach and community engagement.</p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '1px',
        background: '#1a1a1a',
      }}>
        {services.map((s) => (
          <div key={s.title} style={{ background: '#0d0d0d', padding: '1.75rem' }}>
            <div style={{ fontSize: '24px', marginBottom: '0.75rem' }}>{s.icon}</div>
            <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#fff', marginBottom: '6px' }}>{s.title}</h3>
            <p style={{ fontSize: '13px', color: '#666', lineHeight: 1.6 }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
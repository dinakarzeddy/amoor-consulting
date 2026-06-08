export default function Stats() {
  const stats = [
    { number: '4', label: 'ACTIVE MARKETS' },
    { number: '100%', label: 'PERFORMANCE BASED' },
    { number: '0', label: 'EXPERIENCE REQUIRED' },
    { number: '∞', label: 'ROOM TO GROW' },
  ]

  return (
    <section style={{
      background: '#111',
      borderBottom: '1px solid #222',
      padding: '2rem',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '1rem',
      textAlign: 'center',
    }}>
      {stats.map((stat) => (
        <div key={stat.label}>
          <div style={{ fontSize: '28px', fontWeight: 800, color: '#C9A84C' }}>{stat.number}</div>
          <div style={{ fontSize: '11px', color: '#666', marginTop: '4px', letterSpacing: '0.5px' }}>{stat.label}</div>
        </div>
      ))}
    </section>
  )
}
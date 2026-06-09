export default function Services() {
  return (
    <main>

      {/* Hero */}
      <section style={{ background: '#0a0a0a', padding: '4rem 2rem', borderBottom: '1px solid #1a1a1a' }}>
        <div style={{ fontSize: '11px', color: '#C9A84C', letterSpacing: '2px', marginBottom: '0.75rem' }}>WHAT WE DO</div>
        <h1 style={{ fontSize: '38px', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>
          Services That Drive<br /><span style={{ color: '#C9A84C' }}>Real Results.</span>
        </h1>
        <p style={{ fontSize: '15px', color: '#888', lineHeight: 1.7, maxWidth: '600px' }}>
          We partner with nationally recognized brands to deliver face-to-face outreach, customer acquisition, and community engagement across multiple industries.
        </p>
      </section>

      {/* Core Services */}
      <section style={{ background: '#0d0d0d', padding: '4rem 2rem', borderBottom: '1px solid #1a1a1a' }}>
        <div style={{ fontSize: '11px', color: '#C9A84C', letterSpacing: '2px', marginBottom: '0.75rem' }}>CORE SERVICES</div>
        <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#fff', marginBottom: '2rem' }}>What We Offer</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1px', background: '#1a1a1a' }}>
          {[
            { icon: '🎯', title: 'Customer Acquisition', desc: 'We specialize in face-to-face customer acquisition on behalf of nationally recognized brands. Our trained representatives build real human connections that convert.' },
            { icon: '🚀', title: 'Sales Development', desc: 'We develop high-performance sales teams from the ground up. From first-time representatives to experienced closers, we build skills that last a lifetime.' },
            { icon: '🤝', title: 'Community Engagement', desc: 'We create genuine community impact through local outreach events, relationship-driven marketing, and authentic brand representation.' },
            { icon: '🏆', title: 'Brand Representation', desc: 'Our trained ambassadors represent your brand with professionalism and integrity, building lasting customer loyalty and brand trust.' },
            { icon: '📈', title: 'Leadership Development', desc: 'We develop the next generation of business leaders through hands-on training, mentorship, and real-world experience.' },
            { icon: '🌍', title: 'Market Expansion', desc: 'Currently operating in OKC, Tulsa, Detroit, and Dallas — we help brands expand into new markets with boots-on-the-ground teams.' },
          ].map((service) => (
            <div key={service.title} style={{ background: '#0d0d0d', padding: '2rem' }}>
              <div style={{ fontSize: '28px', marginBottom: '1rem' }}>{service.icon}</div>
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#fff', marginBottom: '0.75rem' }}>{service.title}</h3>
              <p style={{ fontSize: '13px', color: '#777', lineHeight: 1.7 }}>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partners */}
      <section style={{ background: '#0a0a0a', padding: '4rem 2rem', borderBottom: '1px solid #1a1a1a', textAlign: 'center' }}>
        <div style={{ fontSize: '11px', color: '#C9A84C', letterSpacing: '2px', marginBottom: '0.75rem' }}>OUR PARTNERS</div>
        <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#fff', marginBottom: '0.5rem' }}>Nationally Recognized Brands</h2>
        <p style={{ fontSize: '14px', color: '#777', marginBottom: '2rem' }}>We represent trusted brands that millions of Americans rely on every day.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          {['Entouch Wireless', 'Lifeline Program', 'Business Internet Providers'].map((brand) => (
            <div key={brand} style={{
              background: '#111',
              border: '1px solid #333',
              borderRadius: '4px',
              padding: '12px 28px',
              fontSize: '13px',
              color: '#C9A84C',
              letterSpacing: '1px',
              fontWeight: 700,
            }}>
              {brand}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#C9A84C', padding: '4rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#0a0a0a', marginBottom: '0.75rem' }}>Ready to Work With Us?</h2>
        <p style={{ fontSize: '14px', color: '#5a4a1a', marginBottom: '1.75rem' }}>Join our team or partner with us to grow your brand.</p>
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
            Join Our Team
          </button>
        </a>
      </section>

    </main>
  )
}
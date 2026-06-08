import Link from 'next/link'

export default function Hero() {
  return (
    <section style={{
      background: '#0a0a0a',
      minHeight: '500px',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      borderBottom: '1px solid #1a1a1a',
    }}>
      <div style={{
        position: 'relative',
        zIndex: 2,
        padding: '4rem 2rem',
        maxWidth: '580px',
      }}>
        <div style={{
          display: 'inline-block',
          background: '#1a1a1a',
          color: '#C9A84C',
          border: '1px solid #C9A84C',
          padding: '4px 16px',
          borderRadius: '2px',
          fontSize: '10px',
          letterSpacing: '2px',
          marginBottom: '1.5rem',
        }}>
          SALES & LEADERSHIP ORGANIZATION
        </div>

        <h1 style={{
          fontSize: '42px',
          fontWeight: 800,
          lineHeight: 1.15,
          color: '#fff',
          marginBottom: '1rem',
        }}>
          Build Your Future.<br />
          <span style={{ color: '#C9A84C' }}>Lead With Purpose.</span>
        </h1>

        <p style={{
          fontSize: '15px',
          color: '#999',
          lineHeight: 1.7,
          marginBottom: '2rem',
          maxWidth: '480px',
        }}>
          Amoor Consulting Group develops ambitious individuals into confident sales professionals and future leaders through mentorship, real income, and community impact.
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/careers">
            <button style={{
              background: '#C9A84C',
              color: '#0a0a0a',
              padding: '12px 28px',
              borderRadius: '4px',
              fontSize: '14px',
              fontWeight: 800,
              cursor: 'pointer',
              border: 'none',
              letterSpacing: '0.5px',
            }}>
              Join Our Team
            </button>
          </Link>
          <Link href="/about">
            <button style={{
              background: 'transparent',
              color: '#C9A84C',
              padding: '12px 28px',
              borderRadius: '4px',
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer',
              border: '1px solid #C9A84C',
              letterSpacing: '0.5px',
            }}>
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
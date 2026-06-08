import Link from 'next/link'

export default function CTA() {
  return (
    <>
      <section style={{
        background: '#C9A84C',
        padding: '4rem 2rem',
        textAlign: 'center',
      }}>
        <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#0a0a0a', marginBottom: '0.75rem' }}>
          Ready to Build Your Future?
        </h2>
        <p style={{ fontSize: '14px', color: '#5a4a1a', marginBottom: '1.75rem' }}>
          No experience required. Just ambition, drive, and a willingness to grow.
        </p>
        <Link href="/careers">
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
            Apply Now — It's Free
          </button>
        </Link>
      </section>

      <footer style={{
        background: '#050505',
        borderTop: '1px solid #1a1a1a',
        padding: '2rem',
        textAlign: 'center',
      }}>
        <p style={{ fontSize: '12px', color: '#444' }}>
          <span style={{ color: '#C9A84C' }}>AMOOR CONSULTING GROUP</span>
          &nbsp;|&nbsp; OKC · Tulsa · Detroit · Dallas
          &nbsp;|&nbsp; Careers@amoorconsulting.org
          &nbsp;|&nbsp; (405) 456-9061
        </p>
        <p style={{ fontSize: '11px', color: '#333', marginTop: '8px' }}>
          © {new Date().getFullYear()} Amoor Consulting Group. All rights reserved.
        </p>
      </footer>
    </>
  )
}
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav style={{
      background: '#0a0a0a',
      borderBottom: '1px solid #C9A84C',
      padding: '0 2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '70px',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Amoor Consulting Group"
          width={120}
          height={75}
          style={{ objectFit: 'contain' }}
        />
      </Link>

      <div style={{ display: 'flex', gap: '2rem' }}>
        {['About', 'Services', 'Locations', 'Careers', 'Blog'].map((item) => (
          <Link
            key={item}
            href={`/${item.toLowerCase()}`}
            style={{
              color: '#ccc',
              textDecoration: 'none',
              fontSize: '13px',
              letterSpacing: '0.5px',
            }}
          >
            {item}
          </Link>
        ))}
      </div>

      <Link href="/careers">
        <button style={{
          background: '#C9A84C',
          color: '#0a0a0a',
          padding: '10px 22px',
          borderRadius: '4px',
          fontSize: '13px',
          fontWeight: 800,
          cursor: 'pointer',
          border: 'none',
          letterSpacing: '0.5px',
        }}>
          Apply Now
        </button>
      </Link>
    </nav>
  )
}
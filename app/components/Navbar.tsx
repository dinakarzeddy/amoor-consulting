'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false)
let closeTimer: ReturnType<typeof setTimeout>

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
          loading="eager"
        />
      </Link>

      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <Link href="/about" style={{ color: '#ccc', textDecoration: 'none', fontSize: '13px', letterSpacing: '0.5px' }}>
          About
        </Link>

        {/* Services Dropdown */}
        <div
          style={{ position: 'relative' }}
          onMouseEnter={() => {
  clearTimeout(closeTimer)
  setServicesOpen(true)
}}
onMouseLeave={() => {
  closeTimer = setTimeout(() => setServicesOpen(false), 300)
}}
        >
          <span style={{
            color: '#ccc',
            fontSize: '13px',
            letterSpacing: '0.5px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
          }}>
            Services ▾
          </span>

          {servicesOpen && (
            <div style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              background: '#111',
              border: '1px solid #C9A84C',
              borderRadius: '4px',
              padding: '0.5rem 0',
              minWidth: '220px',
              zIndex: 200,
              marginTop: '8px',
            }}>
              <Link href="/services" style={{ textDecoration: 'none' }}>
                <div style={{
                  padding: '10px 16px',
                  fontSize: '13px',
                  color: '#ccc',
                  borderBottom: '1px solid #1a1a1a',
                  cursor: 'pointer',
                }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#C9A84C')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#ccc')}
                >
                  All Services
                </div>
              </Link>
              <a href="https://amara-phones.vercel.app" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <div style={{
                  padding: '10px 16px',
                  fontSize: '13px',
                  color: '#ccc',
                  borderBottom: '1px solid #1a1a1a',
                  cursor: 'pointer',
                }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#C9A84C')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#ccc')}
                >
                  📱 Free Government Phones
                </div>
              </a>
              <a href="https://business-internet-funnel.vercel.app" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <div style={{
                  padding: '10px 16px',
                  fontSize: '13px',
                  color: '#ccc',
                  cursor: 'pointer',
                }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#C9A84C')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#ccc')}
                >
                  🌐 Business Internet
                </div>
              </a>
            </div>
          )}
        </div>

        <Link href="/locations" style={{ color: '#ccc', textDecoration: 'none', fontSize: '13px', letterSpacing: '0.5px' }}>
          Locations
        </Link>

        <Link href="/careers" style={{ color: '#ccc', textDecoration: 'none', fontSize: '13px', letterSpacing: '0.5px' }}>
          Careers
        </Link>

        <Link href="/blog" style={{ color: '#ccc', textDecoration: 'none', fontSize: '13px', letterSpacing: '0.5px' }}>
          Blog
        </Link>
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
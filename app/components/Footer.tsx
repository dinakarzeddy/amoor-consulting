import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: '#050505', borderTop: '1px solid #1a1a1a' }}>

      {/* Main Footer */}
      <div style={{
        padding: '4rem 2rem',
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr 1fr',
        gap: '3rem',
      }}>

        {/* Company Info */}
        <div>
          <Image
            src="/logo.png"
            alt="Amoor Consulting Group"
            width={100}
            height={60}
            style={{ objectFit: 'contain', marginBottom: '1rem' }}
          />
          <p style={{ fontSize: '13px', color: '#666', lineHeight: 1.8, maxWidth: '280px', marginBottom: '1.5rem' }}>
            Amoor Consulting Group develops ambitious individuals into confident sales professionals and future leaders through mentorship, real income, and community impact.
          </p>
          <div style={{ display: 'flex', gap: '12px' }}>
            {[
              { label: 'FB', href: 'https://facebook.com' },
              { label: 'IG', href: 'https://instagram.com' },
              { label: 'LI', href: 'https://linkedin.com' },
            ].map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" style={{
                width: '36px', height: '36px', borderRadius: '50%',
                background: '#1a1a1a', border: '1px solid #2a2a2a',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '11px', color: '#666', textDecoration: 'none', fontWeight: 700,
              }}>
                {social.label}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ fontSize: '12px', color: '#C9A84C', letterSpacing: '2px', marginBottom: '1.25rem' }}>COMPANY</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              { label: 'Home', href: '/' },
              { label: 'About Us', href: '/about' },
              { label: 'Services', href: '/services' },
              { label: 'Careers', href: '/careers' },
              { label: 'Blog', href: '/blog' },
            ].map((link) => (
              <Link key={link.label} href={link.href} style={{
                fontSize: '13px', color: '#666', textDecoration: 'none',
              }}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 style={{ fontSize: '12px', color: '#C9A84C', letterSpacing: '2px', marginBottom: '1.25rem' }}>SERVICES</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              { label: 'All Services', href: '/services' },
              { label: 'Free Government Phones', href: 'https://amara-phones.vercel.app' },
              { label: 'Business Internet', href: 'https://business-internet-funnel.vercel.app' },
            ].map((link) => (
              <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer" style={{
                fontSize: '13px', color: '#666', textDecoration: 'none',
              }}>
                {link.label}
              </a>
            ))}
          </div>

          <h4 style={{ fontSize: '12px', color: '#C9A84C', letterSpacing: '2px', marginBottom: '1.25rem', marginTop: '2rem' }}>LOCATIONS</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              { label: 'Oklahoma City', href: 'https://amoor-okc.netlify.app' },
              { label: 'Tulsa', href: 'https://amoor-tulsa.netlify.app' },
              { label: 'Detroit', href: 'https://amoor-detroit.netlify.app' },
              { label: 'Dallas', href: 'https://amoor-dallas.netlify.app' },
            ].map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" style={{
                fontSize: '13px', color: '#666', textDecoration: 'none',
              }}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ fontSize: '12px', color: '#C9A84C', letterSpacing: '2px', marginBottom: '1.25rem' }}>CONTACT US</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <div style={{ fontSize: '11px', color: '#444', letterSpacing: '1px', marginBottom: '4px' }}>EMAIL</div>
              <a href="mailto:Careers@amoorconsulting.org" style={{ fontSize: '13px', color: '#666', textDecoration: 'none' }}>
                Careers@amoorconsulting.org
              </a>
            </div>
            <div>
              <div style={{ fontSize: '11px', color: '#444', letterSpacing: '1px', marginBottom: '4px' }}>PHONE</div>
              <a href="tel:4054569061" style={{ fontSize: '13px', color: '#666', textDecoration: 'none' }}>
                (405) 456-9061
              </a>
            </div>
            <div>
              <div style={{ fontSize: '11px', color: '#444', letterSpacing: '1px', marginBottom: '4px' }}>HEADQUARTERS</div>
              <div style={{ fontSize: '13px', color: '#666' }}>Oklahoma City, Oklahoma</div>
            </div>
            <Link href="/careers">
              <button style={{
                background: '#C9A84C', color: '#0a0a0a',
                padding: '10px 20px', borderRadius: '4px',
                fontSize: '12px', fontWeight: 800,
                cursor: 'pointer', border: 'none',
                letterSpacing: '0.5px', marginTop: '0.5rem',
                width: '100%',
              }}>
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{
        borderTop: '1px solid #1a1a1a',
        padding: '1.25rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <p style={{ fontSize: '12px', color: '#333' }}>
          © {new Date().getFullYear()} <span style={{ color: '#C9A84C' }}>Amoor Consulting Group</span>. All rights reserved.
        </p>
        <p style={{ fontSize: '12px', color: '#333' }}>
          OKC · Tulsa · Detroit · Dallas
        </p>
      </div>

    </footer>
  )
}
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <main>

      {/* Hero */}
      <section style={{ background: '#0a0a0a', padding: '4rem 2rem', borderBottom: '1px solid #1a1a1a' }}>
        <div style={{ fontSize: '11px', color: '#C9A84C', letterSpacing: '2px', marginBottom: '0.75rem' }}>WHO WE ARE</div>
        <h1 style={{ fontSize: '38px', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>
          Built on People.<br /><span style={{ color: '#C9A84C' }}>Driven by Purpose.</span>
        </h1>
        <p style={{ fontSize: '15px', color: '#888', lineHeight: 1.7, maxWidth: '600px' }}>
          Amoor Consulting Group is a leadership-driven marketing and customer acquisition organization focused on developing ambitious individuals into confident professionals and future leaders.
        </p>
      </section>

      {/* Mission */}
      <section style={{ background: '#0d0d0d', padding: '4rem 2rem', borderBottom: '1px solid #1a1a1a' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: '11px', color: '#C9A84C', letterSpacing: '2px', marginBottom: '0.75rem' }}>OUR MISSION</div>
            <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>Build People. Build Leaders. Build Futures.</h2>
            <p style={{ fontSize: '14px', color: '#888', lineHeight: 1.7, marginBottom: '1rem' }}>
              We partner with nationally recognized brands to provide face-to-face marketing, customer acquisition, and outreach services across multiple industries.
            </p>
            <p style={{ fontSize: '14px', color: '#888', lineHeight: 1.7 }}>
              Whether someone joins with years of experience or no experience at all, our goal is to provide the tools, mentorship, and environment necessary for growth.
            </p>
          </div>
          <div>
            <Image
              src="https://static.wixstatic.com/media/ffe5db_8ca453248f804f6dae3a04c812d93d96~mv2.png/v1/fill/w_508,h_570,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_0201_HEIC.png"
              alt="Amoor team"
              width={500}
              height={400}
              style={{ width: '100%', height: '350px', objectFit: 'cover', borderRadius: '4px', border: '1px solid #222' }}
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: '#0a0a0a', padding: '4rem 2rem', borderBottom: '1px solid #1a1a1a' }}>
        <div style={{ fontSize: '11px', color: '#C9A84C', letterSpacing: '2px', marginBottom: '0.75rem' }}>WHAT WE STAND FOR</div>
        <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#fff', marginBottom: '2rem' }}>Our Core Values</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
          {['Leadership', 'Personal Development', 'Financial Growth', 'Teamwork', 'Entrepreneurship', 'Community Impact'].map((value) => (
            <div key={value} style={{
              background: '#111',
              border: '1px solid #222',
              borderRadius: '4px',
              padding: '1.25rem',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#C9A84C' }}>{value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Culture */}
      <section style={{ background: '#0d0d0d', padding: '4rem 2rem', borderBottom: '1px solid #1a1a1a' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            {[
              'https://static.wixstatic.com/media/ffe5db_8ca453248f804f6dae3a04c812d93d96~mv2.png/v1/fill/w_508,h_570,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_0201_HEIC.png',
              'https://static.wixstatic.com/media/ffe5db_039274f99a5240bcb00cc2cfa131bb83~mv2.jpg/v1/fill/w_496,h_570,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_0372_edited.jpg',
              'https://static.wixstatic.com/media/ffe5db_9bffdd2f0bf9469d8f90d10eac60541c~mv2.png/v1/fill/w_470,h_626,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_6522_HEIC.png',
              'https://static.wixstatic.com/media/ffe5db_59b95333479b4ec98b83e4cb3c8e9b30~mv2.png/v1/fill/w_470,h_626,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_0209_HEIC.png',
            ].map((src, i) => (
              <Image key={i} src={src} alt="Amoor culture" width={250} height={200}
                style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '4px', border: '1px solid #222' }}
              />
            ))}
          </div>
          <div>
            <div style={{ fontSize: '11px', color: '#C9A84C', letterSpacing: '2px', marginBottom: '0.75rem' }}>OUR CULTURE</div>
            <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>A Culture Built on Growth.</h2>
            <p style={{ fontSize: '14px', color: '#888', lineHeight: 1.7, marginBottom: '1rem' }}>
              At Amoor Consulting Group, culture is everything. We believe success is built through accountability, consistency, mentorship, and positive competition.
            </p>
            <p style={{ fontSize: '14px', color: '#C9A84C', lineHeight: 1.7, fontStyle: 'italic' }}>
              This is not just about earning income. This is about building confidence, communication skills, and long-term vision.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#C9A84C', padding: '4rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#0a0a0a', marginBottom: '0.75rem' }}>Ready to Join the Team?</h2>
        <p style={{ fontSize: '14px', color: '#5a4a1a', marginBottom: '1.75rem' }}>No experience required. Just ambition and drive.</p>
        <Link href="/careers">
          <button style={{
            background: '#0a0a0a', color: '#C9A84C', padding: '14px 36px',
            borderRadius: '4px', fontSize: '14px', fontWeight: 800,
            cursor: 'pointer', border: 'none', letterSpacing: '0.5px',
          }}>
            Apply Now
          </button>
        </Link>
      </section>

    </main>
  )
}
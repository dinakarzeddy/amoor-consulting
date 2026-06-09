export default function Blog() {
  const posts = [
    {
      title: 'How to Build a Career in Sales With Zero Experience',
      date: 'June 5, 2026',
      category: 'Career Tips',
      excerpt: 'Think you need experience to start a sales career? Think again. Here is how Amoor Consulting helps complete beginners build a successful career from scratch.',
    },
    {
      title: 'What Is the Lifeline Program and Who Qualifies?',
      date: 'June 3, 2026',
      category: 'Community',
      excerpt: 'The Lifeline program provides free government phones to qualifying low-income Americans. Here is everything you need to know about eligibility and how to apply.',
    },
    {
      title: '5 Leadership Lessons We Teach Every New Team Member',
      date: 'May 28, 2026',
      category: 'Leadership',
      excerpt: 'Leadership is not a title — it is a skill. Here are the five core leadership lessons we teach every single person who joins the Amoor Consulting team.',
    },
    {
      title: 'Why Face-to-Face Marketing Still Wins in 2026',
      date: 'May 20, 2026',
      category: 'Industry',
      excerpt: 'In a world of digital ads and social media, face-to-face marketing remains the most powerful way to build real customer relationships and drive conversions.',
    },
    {
      title: 'From Zero to Team Leader: A Success Story',
      date: 'May 15, 2026',
      category: 'Success Stories',
      excerpt: 'One of our top performers started with no experience and no connections. Six months later they are leading a team of 12. Here is their story.',
    },
    {
      title: 'Amoor Consulting Expands to Dallas, Texas',
      date: 'May 10, 2026',
      category: 'Company News',
      excerpt: 'We are thrilled to announce our expansion into Dallas, Texas — our fourth market and a major milestone in the growth of Amoor Consulting Group.',
    },
  ]

  const categoryColors: Record<string, string> = {
    'Career Tips': '#C9A84C',
    'Community': '#4CAF50',
    'Leadership': '#2196F3',
    'Industry': '#9C27B0',
    'Success Stories': '#FF5722',
    'Company News': '#00BCD4',
  }

  return (
    <main>

      {/* Hero */}
      <section style={{ background: '#0a0a0a', padding: '4rem 2rem', borderBottom: '1px solid #1a1a1a' }}>
        <div style={{ fontSize: '11px', color: '#C9A84C', letterSpacing: '2px', marginBottom: '0.75rem' }}>INSIGHTS & UPDATES</div>
        <h1 style={{ fontSize: '38px', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>
          The Amoor Blog.<br /><span style={{ color: '#C9A84C' }}>Knowledge That Grows.</span>
        </h1>
        <p style={{ fontSize: '15px', color: '#888', lineHeight: 1.7, maxWidth: '600px' }}>
          Career tips, leadership insights, company news, and community stories from the Amoor Consulting Group team.
        </p>
      </section>

      {/* Blog Posts */}
      <section style={{ background: '#0d0d0d', padding: '4rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
          {posts.map((post) => (
            <div key={post.title} style={{
              background: '#111',
              border: '1px solid #222',
              borderRadius: '4px',
              padding: '1.75rem',
              cursor: 'pointer',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                <span style={{
                  background: '#1a1a1a',
                  color: categoryColors[post.category] || '#C9A84C',
                  border: `1px solid ${categoryColors[post.category] || '#C9A84C'}`,
                  padding: '2px 10px',
                  borderRadius: '2px',
                  fontSize: '10px',
                  letterSpacing: '1px',
                }}>
                  {post.category}
                </span>
                <span style={{ fontSize: '11px', color: '#555' }}>{post.date}</span>
              </div>
              <h2 style={{ fontSize: '16px', fontWeight: 700, color: '#fff', marginBottom: '0.75rem', lineHeight: 1.4 }}>{post.title}</h2>
              <p style={{ fontSize: '13px', color: '#777', lineHeight: 1.6, marginBottom: '1.25rem' }}>{post.excerpt}</p>
              <span style={{ fontSize: '12px', color: '#C9A84C', fontWeight: 700, letterSpacing: '0.5px' }}>Read More →</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#C9A84C', padding: '4rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#0a0a0a', marginBottom: '0.75rem' }}>Ready to Start Your Journey?</h2>
        <p style={{ fontSize: '14px', color: '#5a4a1a', marginBottom: '1.75rem' }}>Join the Amoor Consulting team today.</p>
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
            Apply Now
          </button>
        </a>
      </section>

    </main>
  )
}
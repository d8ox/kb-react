import Link from 'next/link'

export default function Sidebar({ articles }) {
  const categories = [...new Set(articles.map(a => a.category))]

  return (
    <aside style={{ width: 240, flexShrink: 0, paddingRight: 20 }}>
      <div style={{ fontWeight: 700, marginBottom: 12 }}>Categories</div>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {categories.map(cat => (
          <Link key={cat} href={`/articles?category=${encodeURIComponent(cat)}`}>
            <div
              style={{
                padding: '6px 8px',
                borderRadius: 8,
                cursor: 'pointer',
                background: 'var(--glass)',
              }}
            >
              {cat}
            </div>
          </Link>
        ))}
      </nav>
    </aside>
  )
}

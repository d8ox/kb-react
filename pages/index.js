import { useState } from 'react'
import { useRouter } from 'next/router'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Sidebar from '../../components/Sidebar'
import ArticleCard from '../../components/ArticleCard'
import articles from '../../data/articles.json'

export default function ArticlesList() {
  const [query, setQuery] = useState('')
  const router = useRouter()
  const category = router.query.category || null

  const filtered = articles.filter(
    a =>
      (category ? a.category === category : true) &&
      (a.title.toLowerCase().includes(query.toLowerCase()) ||
        a.excerpt.toLowerCase().includes(query.toLowerCase()))
  )

  return (
    <>
      <Header />
      <main className="container" style={{ display: 'flex', gap: 20 }}>
        <Sidebar articles={articles} />
        <div style={{ flex: 1 }}>
          <h1>Articles</h1>
          <input
            className="search"
            placeholder="Search articles..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            style={{ marginTop: 8, marginBottom: 12 }}
          />
          <div className="card-grid">
            {filtered.length > 0 ? (
              filtered.map(a => <ArticleCard key={a.slug} article={a} />)
            ) : (
              <div>No articles found.</div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

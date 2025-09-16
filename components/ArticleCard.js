import Link from 'next/link'
export default function ArticleCard({article}){
  return (
    <Link href={`/articles/${article.slug}`}>
      <div className="card" role="article">
        <div className="meta">{article.category} • {article.readTime} min read</div>
        <div className="title">{article.title}</div>
        <div className="excerpt">{article.excerpt}</div>
        <div className="tags">
          {article.tags.map(t=> <div className="tag" key={t}>{t}</div>)}
        </div>
      </div>
    </Link>
  )
}

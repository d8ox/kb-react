import Header from '../components/Header'
import Footer from '../components/Footer'
import ArticleCard from '../components/ArticleCard'
import articles from '../data/articles.json'
export default function Home(){
  const featured = articles.slice(0,6)
  return (
    <>
    <Header />
    <main className="container">
      <section className="hero">
        <div className="left">
          <div style={{fontSize:32,fontWeight:900}}>Help center & documentation</div>
          <div className="small" style={{marginTop:8}}>A clean knowledge base template — edit articles, structure, and styling to fit your brand.</div>
          <div style={{marginTop:16,display:'flex',gap:12}}>
            <input className="search" placeholder="Search articles, e.g. 'billing'"/>
            <button className="btn">Search</button>
          </div>
        </div>
        <div style={{width:300}}>
          <div className="card">
            <div style={{fontSize:14,fontWeight:700}}>Getting started</div>
            <div className="small" style={{marginTop:8}}>Quick links and setup</div>
          </div>
        </div>
      </section>
      <section>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <h2 style={{margin:0}}>Latest articles</h2>
          <div className="small">Updated regularly</div>
        </div>
        <div className="card-grid">
          {featured.map(a=> <ArticleCard key={a.slug} article={a} />)}
        </div>
      </section>
    </main>
    <Footer />
    </>
  )
}

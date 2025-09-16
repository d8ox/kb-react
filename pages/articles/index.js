import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ArticleCard from '../../components/ArticleCard'
import articles from '../../data/articles.json'
export default function List(){
  return (
    <>
    <Header />
    <main className="container">
      <h1>All Articles</h1>
      <div className="card-grid" style={{marginTop:18}}>
        {articles.map(a=> <ArticleCard key={a.slug} article={a} />)}
      </div>
    </main>
    <Footer />
    </>
  )
}

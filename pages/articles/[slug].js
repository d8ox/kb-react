import Header from '../../components/Header'
import Footer from '../../components/Footer'
import articles from '../../data/articles.json'
export default function Article({article}){
  if(!article) return <div>Article not found</div>
  return (
    <>
    <Header />
    <main className="container" style={{paddingTop:22}}>
      <div className="card article-body">
        <div className="small">{article.category} • {article.date} • {article.readTime} min read</div>
        <h1 style={{marginTop:6}}>{article.title}</h1>
        <div className="small" style={{marginTop:8}}>{article.excerpt}</div>
        <div style={{marginTop:18}} dangerouslySetInnerHTML={{__html:article.content}} />
      </div>
    </main>
    <Footer />
    </>
  )
}

export async function getStaticPaths(){
  const paths = articles.map(a=> ({params:{slug:a.slug}}))
  return {paths,fallback:false}
}

export async function getStaticProps({params}){
  const article = articles.find(a=> a.slug===params.slug) || null
  return {props:{article}}
}

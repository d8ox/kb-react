import Header from '../components/Header'
import Footer from '../components/Footer'
export default function About(){
  return (
    <>
    <Header />
    <main className="container">
      <h1>About this knowledge base</h1>
      <div className="card" style={{marginTop:12}}>
        <p>This template is built to be edited. Change copy, add your brand, or connect a CMS.</p>
        <p className="small">Tip: Edit <code>data/articles.json</code> to update articles.</p>
      </div>
    </main>
    <Footer />
    </>
  )
}

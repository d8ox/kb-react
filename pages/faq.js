import Header from '../components/Header'
import Footer from '../components/Footer'
export default function FAQ(){
  return (
    <>
      <Header />
      <main className="container">
        <h1>FAQ</h1>
        <div className="card" style={{marginTop:12}}>
          <h3>How do I use this site?</h3>
          <p>Edit <code>data/articles.json</code> and redeploy.</p>
          <h3>Can I use my own CMS?</h3>
          <p>Yes — integrate Contentful, Sanity, or Markdown.</p>
        </div>
      </main>
      <Footer />
    </>
  )
}

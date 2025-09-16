export default function Footer(){
  return (
    <footer>
      <div className="container">
        <div style={{opacity:0.9, marginBottom:8}}>© {new Date().getFullYear()} Knowledge Base — Built with Next.js</div>
        <div className="small">Made for editing: update content in <code>data/articles.json</code> and pages.</div>
      </div>
    </footer>
  )
}

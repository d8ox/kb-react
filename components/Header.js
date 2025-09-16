import Link from 'next/link'
export default function Header(){
  return (
    <header className="site container">
      <div className="brand">
        <div className="logo">KB</div>
        <div>
          <div style={{fontWeight:800,fontSize:18}}>Knowledge Base</div>
          <div className="small">Modern documentation & help center</div>
        </div>
      </div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/articles">Articles</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  )
}

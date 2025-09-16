import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Header(){
  const [dark, setDark] = useState(true)
  useEffect(()=>{
    document.body.classList.toggle('light-mode', !dark)
  }, [dark])

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
      </nav><button onClick={()=>setDark(!dark)} className='btn' style={{marginLeft:18}}>{dark ? 'Light' : 'Dark'} Mode</button>
    </header>
  )
}

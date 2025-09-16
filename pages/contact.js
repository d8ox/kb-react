import Header from '../components/Header'
import Footer from '../components/Footer'
export default function Contact(){
  return (
    <>
      <Header />
      <main className="container">
        <h1>Contact Us</h1>
        <div className="card" style={{marginTop:12}}>
          <p>For support, email: <a href="mailto:support@example.com">support@example.com</a></p>
          <p>Or use our contact form (coming soon).</p>
        </div>
      </main>
      <Footer />
    </>
  )
}

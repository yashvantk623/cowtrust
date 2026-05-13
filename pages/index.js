import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import Blog from '../components/Blog'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <Blog />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

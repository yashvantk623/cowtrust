import { WhatsappIcon } from './icons'
import { useEffect } from 'react'

export default function Header() {
  useEffect(()=>{
    function setActive(){
      const links = Array.from(document.querySelectorAll('.nav a'))
      const hash = window.location.hash || '#'
      links.forEach(l=>{
        try{ l.classList.remove('active') }catch(e){}
      })
      const match = links.find(a => a.getAttribute('href') === hash)
      if(match) match.classList.add('active')
    }
    setActive()
    window.addEventListener('hashchange', setActive)
    return ()=> window.removeEventListener('hashchange', setActive)
  },[])

  return (
    <header className="site-header fade-in">
      <div className="container header-inner">
        <div className="logo">
          <img src="/logo.jpeg" alt="SD Technologies" className="site-logo" />
        </div>
        <nav className="nav">
          <a href="mailto:Corporate@sdtechnologies.net.in" className="header-email">Corporate@sdtechnologies.net.in</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#blog">Blog</a>
          <a className="cta" href="#contact">Contact</a>
          <a className="whatsapp" href="https://wa.me/919311757497?text=Hello%20SD%20Technologies" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
            <WhatsappIcon />
          </a>
        </nav>
      </div>
    </header>
  )
}

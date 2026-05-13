import { useEffect, useRef, useState } from 'react'

export default function Hero() {
  const slides = [
    {
      id: 'seo',
      image: '/banner.png',
      // title: 'SEO 360° Strategy',
      // text: "Boost rankings with programmatic, technical and local SEO backed by AI-driven research."
    },
    {
      id: 'website',
      image: '/website.png',
      // title: 'Complete Website Development',
      // text: 'Modern, responsive and performance-first websites to convert and grow your business.'
    },
    {
      id: 'ai',
      image: '/aiautomation.png',
      // title: 'AI Automation & Content Systems',
      // text: 'Scale content with AI automation, GEO/AEO optimisation and analytics-driven workflows.'
    }
  ]

  // fallback to default banner if custom images are not present
  const fallback = '/banner.png'

  const [index, setIndex] = useState(0)
  const timer = useRef(null)

  useEffect(() => {
    timer.current = setInterval(() => setIndex(i => (i + 1) % slides.length), 5000)
    return () => clearInterval(timer.current)
  }, [])

  const goTo = (i) => {
    setIndex(i)
    clearInterval(timer.current)
    timer.current = setInterval(() => setIndex(s => (s + 1) % slides.length), 5000)
  }

  const prev = () => goTo((index - 1 + slides.length) % slides.length)
  const next = () => goTo((index + 1) % slides.length)

  return (
    <section className="hero">
      {slides.map((s, i) => (
        <img
          key={s.id}
          src={s.image}
          onError={(e) => { e.currentTarget.src = fallback }}
          alt={s.title}
          className={`hero-slide${i === index ? ' active' : ''}`}
        />
      ))}

      <div className="container hero-inner">
        <h1>{slides[index].title}</h1>
        <p className="lead">{slides[index].text}</p>
        <div className="hero-actions">
          <button className="btn-primary">LET'S TALK!</button>
          <div className="hero-controls">
            <button onClick={prev} aria-label="Previous">◀</button>
            <button onClick={next} aria-label="Next">▶</button>
          </div>
        </div>

        <div className="hero-indicators">
          {slides.map((_, i) => (
            <button key={i} className={i === index ? 'active' : ''} onClick={() => goTo(i)} aria-label={`Go to slide ${i + 1}`}></button>
          ))}
        </div>
      </div>
    </section>
  )
}

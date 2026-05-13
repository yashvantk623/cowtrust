export default function Portfolio(){
  const projects = [
    { title: 'E-commerce Platform for Retail' },
    { title: 'Custom CMS & Blog Implementation' },
    { title: 'Landing Page + Marketing Microsite' },
    { title: 'SaaS Dashboard & Admin Panel' }
  ]

  return (
    <section className="portfolio container">
      <h2 className="section-title">Portfolio</h2>
      <div className="blog-grid">
        {projects.map((p,i)=>(
          <article key={i} className={`post ${i===0? 'featured':''}`}>
            <div className="index-badge">{String(i+1).padStart(2,'0')}</div>
            <h4>{p.title}</h4>
            <a className="read">View Project</a>
          </article>
        ))}
      </div>
    </section>
  )
}

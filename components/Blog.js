export default function Blog() {
  const posts = [
    { title: 'The Crucial Role of Technical SEO' },
    { title: 'How to Use Quora to Find Keywords for SEO Projects?' },
    { title: 'All You Need to Know About Google Core Updates' }
  ]

  return (
    <section className="blog container">
      <h2 className="section-title">Blog</h2>
      <div className="blog-grid">
        {posts.map((p, i) => (
          <article key={i} className={`post ${i===1? 'featured':''}`}>
            <div className="index-badge">{String(i+1).padStart(2,'0')}</div>
            <h4>{p.title}</h4>
            <a className="read">Read More</a>
          </article>
        ))}
      </div>
    </section>
  )
}

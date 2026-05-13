import ContactForm from './ContactForm'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-left">
          <img src="/logo.jpeg" alt="logo" style={{height:44,marginBottom:18}} />

          <div className="office-block">
            <h4>India Office</h4>
            <p className="office-address">Signature Global, Sector 37D, Gurugram, Haryana, India</p>
            <div className="office-actions">
              <a className="btn-ghost" href="tel:+919311757497">+91-9311757497</a>
              <a className="btn-ghost" href="#">Direction</a>
            </div>
          </div>

          <div className="office-block">
            <h4>USA Office</h4>
            <p className="office-address">Remote</p>
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-form-panel">
            <h3>Send Me My Free Website Audit</h3>
            <ContactForm />
          </div>
        </div>
      </div>
      <div className="footer-divider" />
      <div className="footer-meta">
        <div className="footer-links">
          <a href="#">About</a>
          <span>|</span>
          <a href="#services">Services</a>
          <span>|</span>
          <a href="#blog">Blog</a>
          <span>|</span>
          <a href="#contact">Contact</a>
          <span>|</span>
          <a href="#">Sitemap</a>
          <span>|</span>
          <a href="#">SEO Glossary</a>
        </div>

        <div className="footer-social" aria-hidden>
          <a href="#" className="social fb">f</a>
          <a href="#" className="social ig">ig</a>
          <a href="#" className="social li">in</a>
        </div>

        <div className="copyright">© 2026 DT solution. All rights reserved</div>
        <div className="footer-credit">Developed by Yashvant Yadav — 8299882375</div>
      </div>
    </footer>
  )
}

import ContactForm from './ContactForm'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-left">
          <h3>DT solution</h3>
          <p>India Office<br/>Delhi-NCR, Gurugram</p>
        </div>
        <div className="footer-right">
          <h4>Send Me My Free Website Audit</h4>
          <ContactForm />
        </div>
      </div>
      <div className="copyright">© 2026 DT solution. All rights reserved</div>
    </footer>
  )
}

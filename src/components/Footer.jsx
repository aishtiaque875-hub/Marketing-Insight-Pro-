import { Link } from 'react-router-dom'
import logo from '../assets/logo-wide.png'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <button
            type="button"
            className="footer-logo-plate"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Scroll to top"
          >
            <img src={logo} alt="Marketing Insight Pro" />
          </button>
          <p className="footer-brand-tagline">
            Data-driven marketing for brands that want to be seen, trusted, and chosen.
          </p>
        </div>

        <div className="footer-col">
          <h4>Navigate</h4>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-col">
          <h4>Get in Touch</h4>
          <a href="mailto:marketinginsight11@gmail.com">marketinginsight11@gmail.com</a>
          <a href="https://wa.me/923266739989" target="_blank" rel="noopener noreferrer">
            WhatsApp: +92 326 6739989
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>&copy; {year} Marketing Insight Pro. All rights reserved.</p>
          <div className="footer-legal-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-conditions">Terms &amp; Conditions</Link>
            <Link to="/cookie-policy">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

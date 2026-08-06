import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Mail, Phone, MapPin, Send, CheckCircle2, Linkedin, Instagram, Facebook, Twitter } from 'lucide-react';
import logoWide from '../assets/logo-wide.png';
import './Footer.css';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrap">
      <div className="container">
        {/* Top Newsletter CTA Section */}
        <div className="footer-newsletter glass-card">
          <div className="newsletter-text">
            <span className="eyebrow">Enterprise Growth Digest</span>
            <h3>Join 5,000+ Founders & CMOs Receiving Our <span className="gold-gradient-text">ROAS Playbooks</span></h3>
            <p>Get exclusive case studies, Meta ad breakdowns, and high-rank SEO strategies delivered every Tuesday.</p>
          </div>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            {!subscribed ? (
              <>
                <input
                  type="email"
                  placeholder="Enter your work email..."
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" className="btn btn-gold">
                  Subscribe <Send size={16} />
                </button>
              </>
            ) : (
              <div className="subscribe-success">
                <CheckCircle2 size={20} className="gold-icon" /> Subscribed successfully! Check your inbox.
              </div>
            )}
          </form>
        </div>

        {/* Main Footer Columns */}
        <div className="footer-grid">
          <div className="footer-brand-col">
            <Link to="/">
              <img src={logoWide} alt="Marketing Insight Pro Logo" className="footer-logo" />
            </Link>
            <p className="brand-desc">
              Marketing Insight Pro is an enterprise digital growth agency specializing in high-ROAS Meta Ads, Technical SEO, High-Converting Video Editing, UI/UX Design, and Copywriting.
            </p>
            <div className="social-links">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18} /></a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={18} /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><Twitter size={18} /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Growth Services</h4>
            <ul>
              <li><Link to="/services">Meta Ads & Performance</Link></li>
              <li><Link to="/services">High-Rank SEO Optimization</Link></li>
              <li><Link to="/services">Video Editing & Content</Link></li>
              <li><Link to="/services">Social Media Management</Link></li>
              <li><Link to="/services">UI/UX Website Redesign</Link></li>
              <li><Link to="/services">Direct Response Copywriting</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Agency</h4>
            <ul>
              <li><Link to="/about">About Our Vision</Link></li>
              <li><Link to="/portfolio">Case Studies & ROI</Link></li>
              <li><Link to="/contact">Book Strategy Session</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
              <li><Link to="/cookie-policy">Cookie Policy</Link></li>
            </ul>
          </div>

          <div className="footer-col contact-col">
            <h4>Global Office</h4>
            <div className="contact-item">
              <Mail size={16} className="gold-icon" />
              <a href="mailto:marketinginsight11@gmail.com">marketinginsight11@gmail.com</a>
            </div>
            <div className="contact-item">
              <Phone size={16} className="gold-icon" />
              <a href="tel:+923266739989">+92 326 6739989</a>
            </div>
            <div className="contact-item">
              <MapPin size={16} className="gold-icon" />
              <span>Global Remote & Agency HQ</span>
            </div>
          </div>
        </div>

        {/* Signature Divider & Bottom Bar */}
        <div className="signature-divider">
          <div className="line"></div>
          <div className="diamond"></div>
          <div className="line"></div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Marketing Insight Pro. All Rights Reserved. Crafted for High-Growth Brands.</p>

          <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
            Back to top <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}

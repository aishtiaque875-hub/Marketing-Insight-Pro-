import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Mail, Phone, MapPin, Send, CheckCircle2, Linkedin, Instagram, Facebook, Twitter } from 'lucide-react';
import logoWide from '../assets/logo-wide.png';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrap">
      <div className="container">
        {/* Main Footer Columns */}
        <div className="footer-grid">
          <div className="footer-brand-col">
            <Link to="/" className="footer-logo-link">
              <div className="footer-logo-box">
                <img src={logoWide} alt="Marketing Insight Pro Logo" className="footer-logo" />
              </div>
            </Link>
            <p className="brand-desc">
              Marketing Insight Pro is a digital growth agency specializing in Meta Ads, SEO,
              Content Writing, Video Editing, Social Media Post Design and Social Media Managing.
            </p>
            <div className="social-links">
              <a href="https://www.facebook.com/MarketingInsightPro" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={18} /></a>
              <a href="https://www.instagram.com/marketinginsightpro/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18} /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Growth Services</h4>
            <ul>
              <li><Link to="/services">Meta Ads</Link></li>
              <li><Link to="/services">SEO</Link></li>
              <li><Link to="/services">Content Writing</Link></li>
              <li><Link to="/services">Video Editing</Link></li>
              <li><Link to="/services">Social Media Post Design</Link></li>
              <li><Link to="/services">Social Media Managing</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Agency</h4>
            <ul>
              <li><Link to="/about">About Our Vision</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contact">Book Strategy Session</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
              <li><Link to="/cookie-policy">Cookie Policy</Link></li>
            </ul>
          </div>

          <div className="footer-col contact-col">
            <h4>Agency Office</h4>
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
              <span>Pakistan, Hyderabad</span>
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

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
              Marketing Insight Pro is an enterprise digital growth agency specializing in high-ROAS Meta Ads, Technical SEO, High-Converting Video Editing, Social Media Post Design, Social Media Management, and Copywriting.
            </p>
            <div className="social-links">
              <a href="https://www.facebook.com/MarketingInsightPro" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={18} /></a>
              <a href="https://www.instagram.com/marketinginsightpro/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18} /></a>
              <a href="https://api.whatsapp.com/send/?phone=923266739989&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Growth Services</h4>
            <ul>
              <li><Link to="/services">Meta Ads & Performance</Link></li>
              <li><Link to="/services">High-Rank SEO Optimization</Link></li>
              <li><Link to="/services">Video Editing & Content</Link></li>
              <li><Link to="/services">Social Media Post Design</Link></li>
              <li><Link to="/services">Social Media Management</Link></li>
              <li><Link to="/services">Direct Response Copywriting</Link></li>
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
              <a href="mailto:contactmarketinginsightpro@gmail.com">contactmarketinginsightpro@gmail.com</a>
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

import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Calendar, Sparkles } from 'lucide-react';
import logoWide from '../assets/logo-wide.png';
import logoPng from '../assets/logo.png';
import CalendlyModal from './CalendlyModal';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          <Link to="/" className="navbar-brand">
            <img src={logoWide} alt="Marketing Insight Pro" className="brand-logo" />
          </Link>

          <nav className="nav-links">
            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Home
            </NavLink>
            <NavLink to="/services" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Services
            </NavLink>
            <NavLink to="/portfolio" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Portfolio & ROI
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              About Us
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Contact
            </NavLink>
          </nav>

          <div className="navbar-actions">
            <button className="btn btn-gold navbar-cta" onClick={() => setModalOpen(true)}>
              <Calendar size={15} /> Book Strategy Call <ArrowRight size={15} />
            </button>

            <button
              className="mobile-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle Navigation"
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileOpen && (
          <div className="mobile-drawer">
            <div className="mobile-nav-links">
              <NavLink to="/" className="mobile-link">Home</NavLink>
              <NavLink to="/services" className="mobile-link">Services</NavLink>
              <NavLink to="/portfolio" className="mobile-link">Portfolio & ROI</NavLink>
              <NavLink to="/about" className="mobile-link">About Us</NavLink>
              <NavLink to="/contact" className="mobile-link">Contact</NavLink>
            </div>
            <button className="btn btn-gold mobile-drawer-cta" onClick={() => { setMobileOpen(false); setModalOpen(true); }}>
              <Sparkles size={16} /> Book Strategy Call
            </button>
          </div>
        )}
      </header>

      <CalendlyModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

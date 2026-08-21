import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { services } from '../data/services.js';
import { servicesDetailImages } from '../data/servicesDetailImages.js';
import Reveal from '../components/Reveal.jsx';
import CalendlyModal from '../components/CalendlyModal.jsx';
import { CheckCircle2, ArrowRight, Sparkles, Calendar, ShieldCheck, Zap } from 'lucide-react';
import './Services.css';

export default function Services() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* PAGE HEADER */}
      <section className="page-header">
        <div className="container page-header-inner">
          <div className="hero-badge" style={{ margin: '0 auto 16px', color: '#FFFFFF' }}>
            <Sparkles size={14} className="gold-icon" /> Core Capabilities
          </div>
          <h1>Services Configured For <span className="gold-gradient-text">Sustainable Growth</span></h1>
          <p>Six specialized marketing disciplines under one roof — executed with direct focus, transparency, and a commitment to real business outcomes.</p>
        </div>
      </section>

      {/* SERVICES CATALOG GRID */}
      <section className="section section-dark">
        <div className="container">
          <div className="services-catalog-grid">
            {services.map((s, index) => {
              const Icon = Icons[s.icon];
              return (
                <Reveal key={s.slug} delay={index * 90}>
                  <div className={`service-detail-card service-detail-card-${s.slug} glass-card`}>
                    <div className="service-detail-image-wrap">
                      <img src={servicesDetailImages[s.slug]} alt={s.title} loading="lazy" />
                      <div className="roi-tag">
                        <Zap size={13} className="gold-icon" /> Expected Outcome: {s.targetRoi}
                      </div>
                    </div>

                    <div className="service-detail-body">
                      <div className="service-header">
                        <div className="service-icon-box">
                          {Icon && <Icon size={24} className="gold-icon" />}
                        </div>
                        <h2>{s.title}</h2>
                      </div>

                      <p className="service-short-desc">{s.short}</p>
                      <p className="service-full-desc">{s.detail}</p>

                      <div className="deliverables-box">
                        <h4>Key Deliverables & Scope:</h4>
                        <ul>
                          {s.deliverables.map((item, i) => (
                            <li key={i}>
                              <CheckCircle2 size={15} className="gold-icon" /> {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button className="btn btn-gold btn-full-card" onClick={() => setModalOpen(true)}>
                        <Calendar size={16} /> Book Strategy for {s.title.split('&')[0]} <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CalendlyModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

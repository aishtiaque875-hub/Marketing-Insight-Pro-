import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { services } from '../data/services.js';
import { serviceImages } from '../data/serviceImages.js';
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
          <div className="hero-badge" style={{ margin: '0 auto 16px' }}>
            <Sparkles size={14} className="gold-icon" /> Core Capabilities
          </div>
          <h1>Enterprise Growth Services Designed For <span className="gold-gradient-text">Aggressive Scale</span></h1>
          <p>Six specialized growth disciplines under one roof — executed by senior specialists dedicated to maximizing your return on investment.</p>
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
                  <div className="service-detail-card glass-card">
                    <div className="service-detail-image-wrap">
                      <img src={serviceImages[s.slug]} alt={s.title} loading="lazy" />
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

      {/* SERVICE GUARANTEE BANNER */}
      <section className="section section-surface service-guarantee">
        <div className="container">
          <div className="guarantee-box glass-card">
            <div className="guarantee-icon">
              <ShieldCheck size={48} className="gold-icon" />
            </div>
            <div className="guarantee-text">
              <h2>The Marketing Insight Pro <span className="gold-gradient-text">Performance Promise</span></h2>
              <p>We do not lock clients into rigid 12-month agency traps. We earn your business month-over-month through clear reporting, transparent ad accounts, and verifiable revenue milestones.</p>
              <div className="guarantee-perks">
                <span>✓ 100% Client-Owned Ad Accounts</span>
                <span>✓ Weekly Video Updates</span>
                <span>✓ Direct Slack / WhatsApp Channel</span>
              </div>
            </div>
            <button className="btn btn-gold" onClick={() => setModalOpen(true)}>
              Schedule Growth Consultation
            </button>
          </div>
        </div>
      </section>

      <CalendlyModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

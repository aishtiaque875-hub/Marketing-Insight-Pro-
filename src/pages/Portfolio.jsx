import React, { useState } from 'react';
import { caseStudies } from '../data/caseStudies.js';
import Reveal from '../components/Reveal.jsx';
import CalendlyModal from '../components/CalendlyModal.jsx';
import { TrendingUp, ArrowRight, Sparkles, CheckCircle2, Award } from 'lucide-react';
import './Portfolio.css';


export default function Portfolio() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* PAGE HEADER */}
      <section className="page-header">
        <div className="container page-header-inner">
          <div className="hero-badge" style={{ margin: '0 auto 16px' }}>
            <Sparkles size={14} className="gold-icon" /> Validated Case Studies
          </div>
          <h1>Proven <span className="gold-gradient-text">Client Success Stories</span></h1>
          <p>Explore real campaigns where our data-driven growth strategies delivered exponential revenue growth and market authority.</p>
        </div>
      </section>

      {/* PORTFOLIO GRID SECTION */}
      <section className="section section-dark">
        <div className="container">
          <div className="portfolio-grid">
            {caseStudies.map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <div className="portfolio-card glass-card">
                  <div className="portfolio-image-wrap">
                    <img src={item.image} alt={item.title} loading="lazy" />
                  </div>

                  <div className="portfolio-content">
                    <div className="portfolio-meta">
                      <span className="portfolio-cat-tag">{item.category}</span>
                      <span className="portfolio-client">{item.client}</span>
                    </div>

                    <h3>{item.title}</h3>

                    {/* BEFORE / AFTER METRICS BOX */}
                    <div className="before-after-box">
                      <div className="ba-row before">
                        <span className="ba-label">Before:</span> {item.beforeAfter.before}
                      </div>
                      <div className="ba-row after">
                        <span className="ba-label gold-gradient-text">After:</span> {item.beforeAfter.after}
                      </div>
                    </div>

                    <p className="portfolio-goal"><strong>Challenge:</strong> {item.goal}</p>
                    <p className="portfolio-solution"><strong>Strategy:</strong> {item.solution}</p>

                    <div className="portfolio-tools-wrap">
                      {item.tools.map((t) => (
                        <span key={t} className="tool-badge">{t}</span>
                      ))}
                    </div>

                    <button className="btn btn-gold btn-full" style={{ marginTop: '20px' }} onClick={() => setModalOpen(true)}>
                      Book a Free Strategy Call <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CalendlyModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

import React, { useState } from 'react';
import { caseStudies } from '../data/caseStudies.js';
import Reveal from '../components/Reveal.jsx';
import CalendlyModal from '../components/CalendlyModal.jsx';
import { TrendingUp, ArrowRight, Sparkles, Filter, CheckCircle2, Award } from 'lucide-react';
import './Portfolio.css';

const categories = ['All', 'Meta Ads', 'SEO', 'Video Editing', 'Social Media', 'UI/UX Design', 'Content Writing'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [modalOpen, setModalOpen] = useState(false);

  const filteredStudies = activeCategory === 'All'
    ? caseStudies
    : caseStudies.filter((item) => item.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <>
      {/* PAGE HEADER */}
      <section className="page-header">
        <div className="container page-header-inner">
          <div className="hero-badge" style={{ margin: '0 auto 16px' }}>
            <Sparkles size={14} className="gold-icon" /> Validated Case Studies
          </div>
          <h1>Proven ROI & <span className="gold-gradient-text">Client Success Stories</span></h1>
          <p>Explore real campaigns where our data-driven growth strategies delivered exponential revenue growth and market authority.</p>
        </div>
      </section>

      {/* PORTFOLIO MASONRY SECTION */}
      <section className="section section-dark">
        <div className="container">
          {/* CATEGORY FILTER TABS */}
          <div className="portfolio-filter-tabs">
            <span className="filter-title"><Filter size={15} className="gold-icon" /> Filter Category:</span>
            <div className="filter-chips-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`filter-chip ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* MASONRY GRID */}
          <div className="portfolio-grid">
            {filteredStudies.map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <div className="portfolio-card glass-card">
                  <div className="portfolio-image-wrap">
                    <img src={item.image} alt={item.title} loading="lazy" />
                    <div className="portfolio-roi-badge">
                      <TrendingUp size={14} className="gold-icon" /> {item.roiStat}
                    </div>
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
                      Get Similar ROI Results <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="section section-surface portfolio-cta">
        <div className="container">
          <div className="portfolio-cta-box glass-card text-center">
            <Award size={40} className="gold-icon" style={{ margin: '0 auto 16px' }} />
            <h2>Want Your Brand To Be Our Next <span className="gold-gradient-text">Case Study?</span></h2>
            <p>Book a strategy session with our senior growth architects. We'll outline an exact 90-day scaling roadmap for your business.</p>
            <button className="btn btn-gold" onClick={() => setModalOpen(true)}>
              Schedule Free Growth Session
            </button>
          </div>
        </div>
      </section>

      <CalendlyModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

import React from 'react';
import { caseStudies } from '../data/caseStudies.js';
import Reveal from '../components/Reveal.jsx';
import { ArrowRight, Sparkles, Wrench } from 'lucide-react';
import './Portfolio.css';

export default function Portfolio() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="page-header">
        <div className="container page-header-inner">
          <div className="hero-badge" style={{ margin: '0 auto 16px', color: '#FFFFFF' }}>
            <Sparkles size={14} className="gold-icon" /> Our Work
          </div>
          <h1><span className="gold-gradient-text">Portfolio</span></h1>
          <p>Explore our real work across Meta Ads, SEO, Content Writing, Video Editing, Social Media Design, and Social Media Management.</p>
        </div>
      </section>

      {/* PORTFOLIO GRID SECTION */}
      <section className="section section-dark">
        <div className="container">
          {/* Section intro with reduced gap to cards */}
          <div className="portfolio-section-head">
            <h2 className="portfolio-section-title">Performance Case Studies</h2>
            <p className="portfolio-section-sub">
              A snapshot of the campaigns, audits, and creative projects we have delivered — and the measurable outcomes that followed.
            </p>
          </div>

          <div className="portfolio-grid">
            {caseStudies.map((item, index) => (
              <Reveal key={item.slug} delay={index * 80}>
                <div className="portfolio-card glass-card">
                  <div className="portfolio-image-wrap">
                    <img src={item.image} alt={item.title} loading="lazy" />
                  </div>

                  <div className="portfolio-content">
                    <div className="portfolio-meta">
                      <span className="portfolio-cat-tag">{item.category}</span>
                    </div>

                    <h3>{item.title}</h3>

                    <p className="portfolio-goal"><strong>Overview:</strong> {item.goal}</p>
                    <p className="portfolio-solution"><strong>Work Done:</strong> {item.solution}</p>

                    <div className="portfolio-tools-wrap">
                      <span className="tools-label"><Wrench size={13} /> Tools:</span>
                      {item.tools.map((t) => (
                        <span key={t} className="tool-badge">{t}</span>
                      ))}
                    </div>

                    <p className="portfolio-result"><strong>Outcome:</strong> {item.result}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

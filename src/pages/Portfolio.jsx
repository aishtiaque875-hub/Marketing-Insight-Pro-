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
          <div className="hero-badge" style={{ margin: '0 auto 16px' }}>
            <Sparkles size={14} className="gold-icon" /> Our Work
          </div>
          <h1>Our Work Speaks In <span className="gold-gradient-text">Results</span></h1>
          <p>Real client engagements across Meta Ads, SEO, Content Writing, Video Editing, Social Media Design, and Social Media Management â€” each briefed, executed, and delivered by senior specialists.</p>
        </div>
      </section>

      {/* PORTFOLIO INTRO */}
      <section className="section section-dark portfolio-intro">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>
              Selected Engagements
            </span>
            <h2>Performance <span className="gold-gradient-text">Case Studies</span></h2>
            <p>A snapshot of the campaigns, audits, and creative projects we have delivered â€” and the measurable outcomes that followed.</p>
          </div>
        </div>
      </section>

      {/* PORTFOLIO GRID SECTION */}
      <section className="section section-dark portfolio-margin-reset">
        <div className="container">
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

                    <p className="portfolio-goal"><strong>Objective:</strong> {item.goal}</p>
                    <p className="portfolio-solution"><strong>Execution:</strong> {item.solution}</p>

                    <div className="portfolio-tools-wrap">
                      <span className="tools-label"><Wrench size={13} /> Tools:</span>
                      {item.tools.map((t) => (
                        <span key={t} className="tool-badge">{t}</span>
                      ))}
                    </div>

                    <p className="portfolio-result"><strong>Results:</strong> {item.result}</p>
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

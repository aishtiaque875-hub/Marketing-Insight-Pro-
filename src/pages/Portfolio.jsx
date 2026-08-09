import React from 'react';
import { portfolioItems } from '../data/portfolio.js';
import Reveal from '../components/Reveal.jsx';
import { Check } from 'lucide-react';
import './Portfolio.css';

export default function Portfolio() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="page-header">
        <div className="container page-header-inner">
          <h1 className="anim-load">Portfolio</h1>
          <p className="anim-load" style={{ '--d': '120ms' }}>
            A look at the work we deliver across Meta Ads, SEO, Content Writing, Video Editing,
            Social Media Post Design and Social Media Managing.
          </p>
        </div>
      </section>

      {/* PORTFOLIO GRID */}
      <section className="section section-dark">
        <div className="container">
          <div className="portfolio-grid">
            {portfolioItems.map((item, index) => (
              <Reveal key={item.slug} delay={index * 80}>
                <article className="portfolio-card glass-card">
                  <div className="portfolio-image-wrap">
                    <img src={item.image} alt={`${item.category} work by Marketing Insight Pro`} loading="lazy" />
                    <span className="portfolio-cat-tag">{item.category}</span>
                  </div>

                  <div className="portfolio-content">
                    <h3>{item.title}</h3>
                    <p className="portfolio-desc">{item.description}</p>

                    <ul className="portfolio-highlights">
                      {item.highlights.map((h) => (
                        <li key={h}>
                          <Check size={15} className="gold-icon" /> <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="portfolio-tools-wrap">
                      {item.tools.map((t) => (
                        <span key={t} className="tool-badge">{t}</span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

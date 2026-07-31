import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { X } from 'lucide-react'
import { caseStudies } from '../data/caseStudies.js'
import Reveal from '../components/Reveal.jsx'
import './Portfolio.css'

export default function Portfolio() {
  const [active, setActive] = useState(null)

  useEffect(() => {
    if (!active) return
    const onKey = (e) => e.key === 'Escape' && setActive(null)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active])

  return (
    <>
      <section className="page-header">
        <div className="container page-header-inner">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            Portfolio
          </span>
          <h1>A Sample of the Work We Do</h1>
          <p>Case studies across each of our six services — tap any project for the full story.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="portfolio-grid">
            {caseStudies.map((c, i) => (
              <Reveal key={c.slug} delay={(i % 3) * 90}>
                <button
                  type="button"
                  className="card portfolio-card"
                  onClick={() => setActive(c)}
                >
                  <div className="portfolio-thumb">
                    <img src={c.image} alt={c.title} loading="lazy" />
                    <span className="portfolio-thumb-overlay" />
                  </div>
                  <div className="portfolio-card-body">
                    <span className="portfolio-tag">{c.category}</span>
                    <h3>{c.title}</h3>
                    <p>{c.result}</p>
                    <span className="portfolio-view-link">View Case Study &rarr;</span>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-banner-inner">
          <h2>Want Results Like These?</h2>
          <p>Let's talk about what's possible for your brand.</p>
          <Link to="/contact" className="btn btn-primary">
            Book a Free Consultation
          </Link>
        </div>
      </section>

      {active && (
        <div className="case-modal-backdrop" onClick={() => setActive(null)}>
          <div
            className="case-modal"
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="case-modal-close"
              onClick={() => setActive(null)}
              aria-label="Close"
            >
              <X size={20} />
            </button>
            <div className="case-modal-image">
              <img src={active.image} alt={active.title} />
            </div>
            <div className="case-modal-body">
              <span className="portfolio-tag">{active.category}</span>
              <h2>{active.title}</h2>

              <div className="case-modal-block">
                <h4>Client Goal</h4>
                <p>{active.goal}</p>
              </div>
              <div className="case-modal-block">
                <h4>Our Solution</h4>
                <p>{active.solution}</p>
              </div>
              <div className="case-modal-block">
                <h4>Tools Used</h4>
                <div className="case-modal-tools">
                  {active.tools.map((t) => (
                    <span key={t} className="case-modal-tool">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="case-modal-block case-modal-result">
                <h4>Result</h4>
                <p>{active.result}</p>
              </div>

              <Link to="/contact" className="btn btn-primary" onClick={() => setActive(null)}>
                Start a Project Like This
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

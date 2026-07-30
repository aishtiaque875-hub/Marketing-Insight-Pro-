import { portfolioImages } from '../data/portfolioImages.js'
import Reveal from '../components/Reveal.jsx'
import './Portfolio.css'

const categories = [
  {
    slug: 'meta-ads',
    label: 'Meta Ads Campaign',
    tag: 'Paid Ads',
    desc: 'Campaign dashboard showing reach, results, and cost efficiency across active ad sets.',
  },
  {
    slug: 'seo',
    label: 'Local SEO Growth',
    tag: 'SEO',
    desc: 'Google Maps visibility and local search ranking improvements for a service business.',
  },
  {
    slug: 'video-editing',
    label: 'Reels & Short-Form Edit',
    tag: 'Video',
    desc: 'Fast-paced short-form edit built for Reels, Shorts, and TikTok.',
  },
  {
    slug: 'social-media-managing',
    label: 'Monthly Social Calendar',
    tag: 'Social Media',
    desc: 'A full month of themed content planned in advance for consistent posting.',
  },
  {
    slug: 'ui-ux-designing',
    label: 'Landing Page Redesign',
    tag: 'UI/UX',
    desc: 'Homepage redesign focused on clarity, trust signals, and conversion.',
  },
  {
    slug: 'content-writing',
    label: 'Website Copy & Blog',
    tag: 'Content',
    desc: 'Blog and content layout written to build authority and drive organic traffic.',
  },
]

export default function Portfolio() {
  return (
    <>
      <section className="page-header">
        <div className="container page-header-inner">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            Portfolio
          </span>
          <h1>A Sample of the Work We Do</h1>
          <p>Case studies across each of our six services.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="portfolio-grid">
            {categories.map((c, i) => (
              <Reveal key={c.label} delay={(i % 3) * 90}>
                <div className="card portfolio-card">
                  <div className="portfolio-thumb">
                    <img src={portfolioImages[c.slug]} alt={c.label} loading="lazy" />
                    <span className="portfolio-thumb-overlay" />
                  </div>
                  <div className="portfolio-card-body">
                    <span className="portfolio-tag">{c.tag}</span>
                    <h3>{c.label}</h3>
                    <p>{c.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

import ServiceArt from '../components/ServiceArt.jsx'
import Reveal from '../components/Reveal.jsx'
import './Portfolio.css'

const categories = [
  { slug: 'meta-ads', label: 'Meta Ads Campaign', tag: 'Paid Ads' },
  { slug: 'seo', label: 'Local SEO Growth', tag: 'SEO' },
  { slug: 'video-editing', label: 'Reels & Short-Form Edit', tag: 'Video' },
  { slug: 'social-media-managing', label: 'Monthly Social Calendar', tag: 'Social Media' },
  { slug: 'ui-ux-designing', label: 'Landing Page Redesign', tag: 'UI/UX' },
  { slug: 'content-writing', label: 'Website Copy & Blog', tag: 'Content' },
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
          <p>
            Case studies for each of our six services — replace these placeholders with your
            real project screenshots and results as you complete them.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="portfolio-grid">
            {categories.map((c, i) => (
              <Reveal key={c.label} delay={(i % 3) * 90}>
                <div className="card portfolio-card">
                  <div className="portfolio-thumb">
                    <div className="portfolio-thumb-dots">
                      <span /><span /><span />
                    </div>
                    <ServiceArt slug={c.slug} className="portfolio-art" />
                  </div>
                  <div className="portfolio-card-body">
                    <span className="portfolio-tag">{c.tag}</span>
                    <h3>{c.label}</h3>
                    <p>Replace this with a real screenshot and result summary once available.</p>
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

import * as Icons from 'lucide-react'
import './Portfolio.css'

const categories = [
  { icon: 'Target', label: 'Meta Ads Campaign', tag: 'Paid Ads' },
  { icon: 'TrendingUp', label: 'Local SEO Growth', tag: 'SEO' },
  { icon: 'Clapperboard', label: 'Reels & Short-Form Edit', tag: 'Video' },
  { icon: 'MessagesSquare', label: 'Monthly Social Calendar', tag: 'Social Media' },
  { icon: 'PenTool', label: 'Landing Page Redesign', tag: 'UI/UX' },
  { icon: 'PenLine', label: 'Website Copy & Blog', tag: 'Content' },
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
            {categories.map((c) => {
              const Icon = Icons[c.icon]
              return (
                <div key={c.label} className="card portfolio-card">
                  <div className="portfolio-thumb">
                    {Icon && <Icon size={40} strokeWidth={1.4} />}
                  </div>
                  <div className="portfolio-card-body">
                    <span className="portfolio-tag">{c.tag}</span>
                    <h3>{c.label}</h3>
                    <p>Add a short result summary here, e.g. specific metrics or outcomes.</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

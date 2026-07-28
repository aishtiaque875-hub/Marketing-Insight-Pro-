import './About.css'

const values = [
  {
    title: 'Insight First',
    text: 'Every campaign starts with understanding your customer, not copying a generic playbook.',
  },
  {
    title: 'Straight Talk',
    text: "If something isn't working, we tell you — and fix it — instead of hiding it in a report.",
  },
  {
    title: 'One Accountable Team',
    text: 'Strategy, design, and execution stay under one roof, so nothing gets lost between vendors.',
  },
]

export default function About() {
  return (
    <>
      <section className="page-header">
        <div className="container page-header-inner">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            About Us
          </span>
          <h1>Marketing Insight Pro</h1>
          <p>A digital marketing team built around one idea: insight before spend.</p>
        </div>
      </section>

      <section className="section about-story">
        <div className="container about-story-inner">
          <div>
            <span className="eyebrow">Our Story</span>
            <h2>Marketing Should Be Measured, Not Guessed At</h2>
            <p>
              Marketing Insight Pro was started to fix a common problem: businesses spending on
              ads, content, and design without a clear view of what's actually working. We bring
              Meta Ads, SEO, video, social media, design, and content writing under one roof, so
              your brand's message stays consistent everywhere — and every rupee spent is
              something we can explain and defend.
            </p>
            <p>
              Add your own founding story, timeline, and photos here to make this page fully
              yours.
            </p>
          </div>
          <div className="signature-divider" style={{ maxWidth: 260, margin: '0 auto' }}>
            <span className="line" />
            <span className="diamond" />
            <span className="line" />
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>
              What We Stand For
            </span>
            <h2>How We Work</h2>
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <div key={v.title} className="card value-card">
                <span className="value-number">0{i + 1}</span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-banner-inner">
          <h2>Let's Talk About Your Brand</h2>
          <p>Message us directly — no forms, no waiting on hold.</p>
          <a
            href="https://wa.me/923266739989"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </>
  )
}

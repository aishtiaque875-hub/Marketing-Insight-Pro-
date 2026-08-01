import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import CountUp from '../components/CountUp.jsx'
import './About.css'

const aboutStats = [
  { value: 40, suffix: '+', label: 'Projects Delivered' },
  { value: 25, suffix: '+', label: 'Happy Clients' },
  { value: 3, suffix: '+', label: 'Years Experience' },
  { value: 95, suffix: '%', label: 'Client Satisfaction' },
]

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
        <Reveal>
        <div className="container about-story-inner">
          <div className="about-story-copy">
            <h2>Who We Are</h2>
            <p>
              Marketing Insight Pro is a digital marketing team built around one idea: insight
              before spend. We bring Meta Ads, SEO, video, social media, design, and content
              writing under one roof, so your brand's message stays consistent everywhere.
            </p>
            <p>
              Add your own founding story here — when the business started, and what led you to
              start it.
            </p>

            <h2>Our Approach</h2>
            <p>
              We don't believe in one-size-fits-all. Every project starts with understanding
              your customers, your goals, and what "success" actually looks like for your
              business — then we build a plan around that.
            </p>
          </div>

          <div className="about-stats-grid">
            {aboutStats.map((s, i) => (
              <Reveal key={s.label} delay={i * 90}>
                <div className="card about-stat-card">
                  <strong>
                    <CountUp value={s.value} suffix={s.suffix} />
                  </strong>
                  <span>{s.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        </Reveal>
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
              <Reveal key={v.title} delay={i * 100}>
                <div className="card value-card">
                  <span className="value-number">0{i + 1}</span>
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-banner-inner">
          <h2>Let's Talk About Your Brand</h2>
          <p>Message us on WhatsApp, or send details through our contact form.</p>
          <div className="cta-banner-actions">
            <a
              href="https://wa.me/923266739989"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Chat on WhatsApp
            </a>
            <Link to="/contact" className="btn btn-secondary">
              Contact Form
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

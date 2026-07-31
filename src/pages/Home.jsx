import { Link } from 'react-router-dom'
import * as Icons from 'lucide-react'
import { services } from '../data/services.js'
import { testimonials } from '../data/testimonials.js'
import { serviceImages } from '../data/serviceImages.js'
import Reveal from '../components/Reveal.jsx'
import CountUp from '../components/CountUp.jsx'
import FaqItem from '../components/FaqItem.jsx'
import './Home.css'

const stats = [
  { value: 40, suffix: '+', label: 'Brands Served' },
  { value: 6, suffix: '', label: 'Core Services' },
  { value: 24, suffix: 'h', label: 'Avg. Reply Time' },
]

const processSteps = [
  {
    step: '01',
    title: 'Discovery Call',
    text: 'We learn about your business, customers, and what "success" actually looks like for you.',
  },
  {
    step: '02',
    title: 'Strategy & Plan',
    text: "We map out which services fit, set clear goals, and agree on how we'll measure results.",
  },
  {
    step: '03',
    title: 'Execution',
    text: 'Campaigns, content, and design go live — built and managed by one accountable team.',
  },
  {
    step: '04',
    title: 'Report & Improve',
    text: 'You get plain-language updates on what worked, and we keep optimizing from there.',
  },
]

const faqs = [
  {
    q: 'How soon will I see results?',
    a: "It depends on the service — paid ads can show early signals within the first couple of weeks, while SEO and content typically build momentum over 2-3 months. We'll be upfront about realistic timelines for your situation.",
  },
  {
    q: 'Do I have to commit to all six services?',
    a: 'No — start with whichever service fits your immediate need. Many clients begin with one service and add others once they see it working.',
  },
  {
    q: 'How do you report on progress?',
    a: "You'll get regular, plain-language updates — not just dashboards full of jargon — so you always know what's working and what we're changing.",
  },
  {
    q: 'Is the first consultation really free?',
    a: 'Yes. Message us on WhatsApp or use the contact form, and we\'ll go over your goals before you commit to anything.',
  },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container hero-inner">
          <span className="eyebrow">Marketing Insight Pro</span>
          <h1 className="hero-title">
            Marketing That Turns <span className="gold-text">Attention</span> Into Revenue
          </h1>
          <p className="hero-sub">
            Meta Ads, SEO, video, social media, design, and content — run by one team that
            actually reports back in numbers you understand.
          </p>
          <div className="hero-actions">
            <Link to="/services" className="btn btn-primary">
              Explore Services
            </Link>
            <a
              href="https://wa.me/923266739989"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Get in Touch
            </a>
          </div>

          <div className="hero-stats">
            {stats.map((s) => (
              <div key={s.label} className="hero-stat">
                <strong>
                  <CountUp value={s.value} suffix={s.suffix} />
                </strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="section services-preview">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>
              What We Do
            </span>
            <h2>Everything Your Brand's Marketing Needs</h2>
            <p>Six services, one accountable team — no handing you off between vendors.</p>
          </div>

          <div className="services-grid">
            {services.map((s, i) => {
              const Icon = Icons[s.icon]
              return (
                <Reveal key={s.slug} delay={i * 80}>
                  <div className="card service-card">
                    <div className="service-card-art">
                      <img src={serviceImages[s.slug]} alt={s.title} loading="lazy" />
                      <span className="service-card-art-overlay" />
                    </div>
                    <div className="service-icon">{Icon && <Icon size={20} strokeWidth={1.8} />}</div>
                    <h3>{s.title}</h3>
                    <p>{s.short}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>

          <div className="services-preview-cta">
            <Link to="/services" className="btn btn-secondary">
              See Full Service Details
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section process-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>
              How We Work
            </span>
            <h2>Our Process</h2>
            <p>A simple, transparent path from first message to measurable results.</p>
          </div>
          <div className="process-grid">
            {processSteps.map((p, i) => (
              <Reveal key={p.step} delay={i * 90}>
                <div className="process-step">
                  <span className="process-step-number">{p.step}</span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section why-us">
        <Reveal>
        <div className="container why-inner">
          <div className="why-copy">
            <span className="eyebrow">Why Marketing Insight Pro</span>
            <h2>We Treat Your Budget Like It's Ours</h2>
            <p>
              Every campaign is built around one question: what actually brings you paying
              customers. No filler reports, no vague "brand awareness" excuses when a campaign
              underperforms.
            </p>
            <ul className="why-list">
              <li>One team for strategy, design, and execution — nothing gets lost in handoffs</li>
              <li>Plain-language reporting, not dashboards full of jargon</li>
              <li>Direct WhatsApp access to your account manager</li>
            </ul>
          </div>
          <div className="why-visual" aria-hidden="true">
            <div className="signature-divider" style={{ maxWidth: 'none', marginBottom: 24 }}>
              <span className="line" />
              <span className="diamond" />
              <span className="line" />
            </div>
            <p className="why-visual-quote">
              "Insight before spend — every campaign starts with understanding your customer,
              not our media plan."
            </p>
          </div>
        </div>
        </Reveal>
      </section>

      {/* TESTIMONIALS */}
      <section className="section testimonials">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>
              Client Reviews
            </span>
            <h2>What Our Clients Say</h2>
            <p>Real feedback from businesses we've worked with.</p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 90}>
                <div className="card testimonial-card">
                <div className="testimonial-stars" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Icons.Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
                <div className="testimonial-person">
                  <span className="testimonial-avatar">{t.initials}</span>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section faq-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>
              Questions
            </span>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="cta-banner">
        <div className="container cta-banner-inner">
          <h2>Ready to Make Your Marketing Actually Work?</h2>
          <p>Tell us about your business on WhatsApp — replies within a day.</p>
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

import { Link } from 'react-router-dom'
import {
  BarChart3, MessageCircle, Target, Zap, SlidersHorizontal, Users,
  FolderCheck, Smile, Megaphone, Award, Clock,
} from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import CountUp from '../components/CountUp.jsx'
import TestimonialCarousel from '../components/TestimonialCarousel.jsx'
import { testimonials } from '../data/testimonials.js'
import './About.css'

const aboutStats = [
  { value: 150, suffix: '+', label: 'Projects Completed', icon: FolderCheck },
  { value: 100, suffix: '+', label: 'Happy Clients', icon: Smile },
  { value: 250, suffix: '+', label: 'Campaigns Managed', icon: Megaphone },
  { value: 98, suffix: '%', label: 'Client Satisfaction', icon: Award },
  { value: 24, suffix: 'hrs', label: 'Response Time', icon: Clock },
]

const whyChooseUs = [
  { icon: BarChart3, title: 'Data-Driven Strategy', text: 'Every decision is backed by numbers, not guesswork.' },
  { icon: MessageCircle, title: 'Transparent Communication', text: 'Plain-language updates — no jargon, no hiding behind dashboards.' },
  { icon: Target, title: 'ROI Focused Marketing', text: 'We optimize for what actually grows your business, not vanity metrics.' },
  { icon: Zap, title: 'Fast Support', text: 'Quick replies on WhatsApp — you are never left waiting.' },
  { icon: SlidersHorizontal, title: 'Custom Marketing Plans', text: 'No templates. Every plan is built around your specific goals.' },
  { icon: Users, title: 'Long-Term Partnership', text: "We aim to grow with your business, not just complete a project." },
]

const founders = [
  { name: 'Hyder Shaikh', role: 'Founder & CEO', initials: 'HS' },
  { name: 'Ayesha Malik', role: 'Digital Marketing Manager', initials: 'AM' },
  { name: 'Bilal Ahmed', role: 'SEO Specialist', initials: 'BA' },
  { name: 'Hassan Raza', role: 'Video Editor', initials: 'HR' },
  { name: 'Rafay Shaikh', role: 'UI/UX Designer', initials: 'RS' },
  { name: 'Sara Khan', role: 'Content Strategist / Social Media Manager', initials: 'SK' },
]

const processSteps = [
  { step: '01', title: 'Discovery Call', text: 'We learn about your business, customers, and goals.' },
  { step: '02', title: 'Research & Analysis', text: 'We study your market, competitors, and current performance.' },
  { step: '03', title: 'Strategy & Planning', text: 'We build a plan tailored to your specific business.' },
  { step: '04', title: 'Execution', text: 'Campaigns, content, and design go live, managed by one team.' },
  { step: '05', title: 'Monitoring & Optimization', text: 'We track what\'s working and adjust in real time.' },
  { step: '06', title: 'Reporting & Growth', text: 'You get plain-language updates and a plan for what\'s next.' },
]

export default function About() {
  return (
    <>
      {/* HERO */}
      <section className="about-hero">
        <div className="container about-hero-inner">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>About Us</span>
          <h1>Marketing Insight Pro</h1>
          <p>A digital marketing team built around one idea: insight before spend.</p>
        </div>
      </section>

      {/* STORY */}
      <section className="section about-story">
        <div className="container about-story-grid">
          <Reveal className="about-story-block">
            <h3>Why We Started</h3>
            <p>
              We started Marketing Insight Pro to fix a common problem: businesses spending on
              ads, content, and design without a clear view of what's actually working.
            </p>
          </Reveal>
          <Reveal delay={100} className="about-story-block">
            <h3>Our Mission</h3>
            <p>
              Bring every core marketing service under one accountable team, so your brand's
              message stays consistent everywhere — and every rupee spent is something we can
              explain and defend.
            </p>
          </Reveal>
          <Reveal delay={200} className="about-story-block">
            <h3>Who We Serve</h3>
            <p>
              Small and growing businesses who want a marketing partner that reports in plain
              language, not one more vendor to chase for updates.
            </p>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="section about-stats-section">
        <div className="container">
          <div className="about-stats-grid-5">
            {aboutStats.map((s, i) => (
              <Reveal key={s.label} delay={i * 90}>
                <div className="card about-stat-card-big">
                  <div className="about-stat-icon">
                    <s.icon size={22} strokeWidth={1.8} />
                  </div>
                  <strong>
                    <CountUp value={s.value} suffix={s.suffix} />
                  </strong>
                  <span>{s.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section why-choose-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>Why Choose Us</span>
            <h2>What Makes Us Different</h2>
          </div>
          <div className="why-choose-grid">
            {whyChooseUs.map((w, i) => (
              <Reveal key={w.title} delay={(i % 3) * 90}>
                <div className="card why-choose-card">
                  <div className="why-choose-icon">
                    <w.icon size={22} strokeWidth={1.8} />
                  </div>
                  <h3>{w.title}</h3>
                  <p>{w.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="section founders-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>Our Team</span>
            <h2>Meet Our Team</h2>
            <p>Add real names, roles, and photos here to introduce your team.</p>
          </div>
          <div className="founders-grid">
            {founders.map((f, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="card founder-card">
                  <div className="founder-avatar">{f.initials}</div>
                  <h3>{f.name}</h3>
                  <span>{f.role}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section process-section-about">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>How We Work</span>
            <h2>Our Working Process</h2>
          </div>
          <div className="process-timeline">
            {processSteps.map((p, i) => (
              <Reveal key={p.step} delay={i * 70}>
                <div className="process-timeline-step">
                  <span className="process-step-number">{p.step}</span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS CAROUSEL */}
      <section className="section testimonials-carousel-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>Client Reviews</span>
            <h2>What Our Clients Say</h2>
          </div>
          <TestimonialCarousel items={testimonials} />
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container cta-banner-inner">
          <h2>Let's Talk About Your Brand</h2>
          <p>Message us on WhatsApp, or send details through our contact form.</p>
          <div className="cta-banner-actions">
            <a href="https://wa.me/923266739989" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Chat on WhatsApp
            </a>
            <Link to="/contact" className="btn btn-secondary">Contact Form</Link>
          </div>
        </div>
      </section>
    </>
  )
}

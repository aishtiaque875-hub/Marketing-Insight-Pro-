import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { services } from '../data/services.js';
import { serviceImages } from '../data/serviceImages.js';
import heroDashboard from '../assets/hero-dashboard.webp';
import Reveal from '../components/Reveal.jsx';
import CountUp from '../components/CountUp.jsx';
import FaqItem from '../components/FaqItem.jsx';
import TestimonialCarousel from '../components/TestimonialCarousel.jsx';
import CalendlyModal from '../components/CalendlyModal.jsx';
import { 
  TrendingUp, 
  Target, 
  Award, 
  Zap, 
  ArrowRight, 
  Calendar, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles,
  BarChart3,
  Users,
  Clock
} from 'lucide-react';
import './Home.css';

const stats = [
  { value: 12, suffix: 'M+', label: 'Client Revenue Generated ($)' },
  { value: 340, suffix: '%', label: 'Average ROAS Increase' },
  { value: 98, suffix: '%', label: 'Client Retention Rate' },
  { value: 4, suffix: '.9/5', label: 'Client Satisfaction Rating' },
];

const processSteps = [
  {
    step: '01',
    title: 'Audit & Funnel Discovery',
    text: 'We analyze your ad account, SEO metrics, brand visuals, and target audience to expose hidden growth bottlenecks.',
    icon: Target
  },
  {
    step: '02',
    title: 'Custom High-ROAS Strategy',
    text: 'We construct a bulletproof growth blueprint targeting high-LTV buyers with custom creative copy and funnel architecture.',
    icon: TrendingUp
  },
  {
    step: '03',
    title: 'Agile Execution & Scaling',
    text: 'High-converting Meta Ads, SEO optimization, and luxury creative edits go live — managed by senior growth engineers.',
    icon: Zap
  },
  {
    step: '04',
    title: 'ROI Optimization & Scaling',
    text: 'We continuously test ad variations, optimize bid strategies, and scale winning campaigns to double revenue predictability.',
    icon: Award
  },
];

const faqs = [
  {
    q: 'How fast can we expect measurable ROI on Meta Ads?',
    a: 'Early data signals and lead flow typically begin within the first 7-14 days. Full funnel calibration and scaling to 3x-5x ROAS occurs within the first 30-45 days.',
  },
  {
    q: 'Why choose Marketing Insight Pro over standard marketing agencies?',
    a: 'Most agencies charge high retainers without accountability. We focus 100% on unit economics, profit margins, and verifiable revenue growth — giving you direct access to senior strategists.',
  },
  {
    q: 'Do I need to sign long-term contract locks?',
    a: 'No. We believe in earning your business every single month through performance. We offer flexible growth agreements focused on performance milestones.',
  },
  {
    q: 'What is included in the initial 1-on-1 Growth Consultation?',
    a: 'During your 30-minute call with our Chief Growth Officer, we audit your current marketing funnel, reveal your highest-leverage growth opportunities, and provide an actionable scaling roadmap.',
  },
];

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-glow-bg"></div>
        <div className="container hero-inner">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="hero-badge">
                <Sparkles size={14} className="gold-icon" /> Premier Growth Marketing Agency
              </div>

              <h1 className="hero-title">
                Scale Your Revenue With <span className="gold-gradient-text">High-ROAS Meta Ads</span> & Precision Growth Engine
              </h1>

              <p className="hero-sub">
                We engineer enterprise-level Meta Ads, High-Rank SEO, Luxury UI/UX, and Direct-Response Video Creatives that transform clicks into predictable profit.
              </p>

              <div className="hero-actions">
                <button className="btn btn-gold btn-glow" onClick={() => setModalOpen(true)}>
                  <Calendar size={18} /> Book Strategy Session <ArrowRight size={18} />
                </button>
                <Link to="/portfolio" className="btn btn-outline-gold">
                  Explore Case Studies
                </Link>
              </div>

              <div className="hero-trust-bar">
                <div className="trust-item"><ShieldCheck size={16} className="gold-icon" /> 100% Data-Driven</div>
                <div className="trust-item"><CheckCircle2 size={16} className="gold-icon" /> Verifiable ROAS</div>
                <div className="trust-item"><Clock size={16} className="gold-icon" /> 24h Response SLA</div>
              </div>
            </div>

            <Reveal direction="right" className="hero-visual-wrap">
              <div className="hero-mockup glass-card">
                {/* Floating ROAS Badges */}
                <div className="floating-badge badge-roas">
                  <TrendingUp size={16} className="gold-icon" />
                  <div>
                    <strong>+340% ROAS</strong>
                    <span>Validated Scale</span>
                  </div>
                </div>

                <div className="floating-badge badge-reach">
                  <Users size={16} className="gold-icon" />
                  <div>
                    <strong>10M+ Reach</strong>
                    <span>Targeted Buyers</span>
                  </div>
                </div>

                <div className="mockup-header">
                  <div className="mockup-dots">
                    <span /><span /><span />
                  </div>
                  <span className="mockup-title">Live Analytics Dashboard</span>
                </div>
                <img src={heroDashboard} alt="Marketing Performance Analytics Dashboard" className="hero-dashboard-img" loading="eager" />
              </div>
            </Reveal>
          </div>

          {/* STATS BAR */}
          <div className="hero-stats-wrap glass-card">
            {stats.map((s) => (
              <div key={s.label} className="hero-stat-card">
                <strong className="stat-number">
                  <CountUp value={s.value} suffix={s.suffix} />
                </strong>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="section section-surface services-preview">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>
              Full-Funnel Capabilities
            </span>
            <h2>Enterprise Services Designed For <span className="gold-gradient-text">Aggressive Scale</span></h2>
            <p>Every service is executed by senior specialists committed to max ROI — eliminate vendor disconnects.</p>
          </div>

          <div className="services-grid">
            {services.map((s, i) => {
              const Icon = Icons[s.icon];
              return (
                <Reveal key={s.slug} delay={i * 80}>
                  <div className="glass-card service-card">
                    <div className="service-card-art">
                      <img src={serviceImages[s.slug]} alt={s.title} loading="lazy" />
                      <span className="service-card-art-overlay" />
                    </div>
                    <div className="service-icon-wrap">
                      {Icon && <Icon size={22} className="gold-icon" />}
                    </div>
                    <h3>{s.title}</h3>
                    <p>{s.short}</p>
                    <Link to="/services" className="service-link">
                      Explore Capabilities <ArrowRight size={14} />
                    </Link>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <div className="services-preview-cta">
            <Link to="/services" className="btn btn-outline-gold">
              View Complete Service Catalog &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* INTERACTIVE PROCESS */}
      <section className="section section-dark process-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>
              The Growth Blueprint
            </span>
            <h2>Our 4-Step <span className="gold-gradient-text">Scalability Framework</span></h2>
            <p>A proven, systematic methodology that consistently transforms ad spend into profitable enterprise growth.</p>
          </div>

          <div className="process-timeline">
            {processSteps.map((p, i) => {
              const StepIcon = p.icon;
              return (
                <Reveal key={p.step} delay={i * 90}>
                  <div className="process-card glass-card">
                    <div className="process-top">
                      <span className="process-number">{p.step}</span>
                      <div className="process-icon">
                        <StepIcon size={22} className="gold-icon" />
                      </div>
                    </div>
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY US / ROI PROFILES */}
      <section className="section section-surface why-us">
        <div className="container why-inner">
          <Reveal direction="left">
            <div className="why-copy">
              <span className="eyebrow">The Agency Difference</span>
              <h2>We Don't Sell Likes — We Deliver <span className="gold-gradient-text">Verifiable Profit</span></h2>
              <p>
                Most agencies hide behind vanity metrics like impressions and clicks. At Marketing Insight Pro, every campaign is measured by net revenue gain, customer acquisition cost (CAC), and customer lifetime value (LTV).
              </p>

              <div className="why-features-grid">
                <div className="why-feature-item">
                  <div className="feature-check"><CheckCircle2 size={18} className="gold-icon" /></div>
                  <div>
                    <strong>Direct Executive Oversight</strong>
                    <p>Your account is managed directly by senior growth strategists, not junior interns.</p>
                  </div>
                </div>

                <div className="why-feature-item">
                  <div className="feature-check"><CheckCircle2 size={18} className="gold-icon" /></div>
                  <div>
                    <strong>Custom Creative Production</strong>
                    <p>High-converting video ads and high-converting copy built specifically for your niche.</p>
                  </div>
                </div>

                <div className="why-feature-item">
                  <div className="feature-check"><CheckCircle2 size={18} className="gold-icon" /></div>
                  <div>
                    <strong>Full-Funnel Optimization</strong>
                    <p>From initial ad click to final checkout page — we optimize every touchpoint.</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className="why-card glass-card">
              <div className="why-card-badge">
                <BarChart3 size={16} className="gold-icon" /> Enterprise Case Highlight
              </div>
              <h3 className="why-card-title">How We Scaled E-Commerce Revenue by <span className="gold-gradient-text">+480%</span></h3>
              <p className="why-card-text">
                By pairing targeted Meta Ads retargeting with technical SEO and a redesigned checkout UX, our client generated $1.4M in incremental sales within 90 days.
              </p>

              <div className="why-metrics-grid">
                <div className="metric-box">
                  <strong>4.8x</strong>
                  <span>Average ROAS</span>
                </div>
                <div className="metric-box">
                  <strong>-32%</strong>
                  <span>CAC Reduction</span>
                </div>
              </div>

              <button className="btn btn-gold btn-full" onClick={() => setModalOpen(true)}>
                Get Similar Growth Audit
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* REVIEWS & TESTIMONIALS */}
      <section className="section section-dark testimonials-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>
              Validated Success
            </span>
            <h2>Client Case Studies & <span className="gold-gradient-text">Testimonials</span></h2>
            <p>Discover how we help brands break growth plateaus and achieve market leadership.</p>
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="section section-surface faq-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>
              Got Questions?
            </span>
            <h2>Frequently Asked <span className="gold-gradient-text">Questions</span></h2>
            <p>Everything you need to know about working with Marketing Insight Pro.</p>
          </div>
          <div className="faq-list">
            {faqs.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA BANNER */}
      <section className="cta-banner">
        <div className="container cta-banner-inner glass-card">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>Take The Next Step</span>
          <h2>Ready To Accelerate Your Brand's Revenue Growth?</h2>
          <p>Book a confidential 1-on-1 strategy call. We'll analyze your funnel and present a custom 90-day scaling roadmap.</p>
          <div className="cta-banner-actions">
            <button className="btn btn-gold" onClick={() => setModalOpen(true)}>
              <Calendar size={18} /> Schedule Strategy Session
            </button>
            <a
              href="https://wa.me/923266739989"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-gold"
            >
              Instant WhatsApp Inquiry
            </a>
          </div>
        </div>
      </section>

      <CalendlyModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

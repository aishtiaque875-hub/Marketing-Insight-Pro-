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
    title: 'Continuous Optimization & Scaling',
    text: 'We continuously test ad variations, optimize bid strategies, and scale winning campaigns to double revenue predictability.',
    icon: Award
  },
];

const faqs = [
  {
    q: 'What performance metrics and ROAS targets does Marketing Insight Pro deliver for Meta Ads?',
    a: 'We focus strictly on net profitable revenue gain, target ROAS (typically 3.5x–6.0x+ based on unit economics), Customer Acquisition Cost (CAC) reduction, and Customer Lifetime Value (LTV). You receive real-time dashboard access and transparent weekly reporting.',
  },
  {
    q: 'How quickly will our SEO and digital content campaigns generate qualified organic leads?',
    a: 'Technical SEO fixes and commercial keyword optimization show rank improvements within 14–30 days. Full authority compounding and sustained lead acquisition accelerate significantly over 60–90 days.',
  },
  {
    q: 'Why partner with Marketing Insight Pro over traditional marketing agencies?',
    a: 'Traditional agencies hide behind vanity metrics like impressions and pass accounts to junior interns. Marketing Insight Pro provides direct executive oversight by senior specialists, 100% client-owned ad accounts, and direct revenue accountability.',
  },
  {
    q: 'Are long-term contracts or locked-in retainers required?',
    a: 'No rigid long-term locks. We believe in earning your partnership every single month through validated results, clear deliverables, and scalable growth milestones.',
  },
  {
    q: 'What is included in the initial Growth Strategy Audit?',
    a: 'In your strategic consultation, our senior growth architects audit your ad funnels, SEO footprint, and landing page UX to deliver a customized 90-day execution roadmap tailored specifically to your revenue goals.',
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
              <div className="hero-badge anim-load">
                <Sparkles size={14} className="gold-icon" /> Premier Growth Marketing Agency
              </div>

              <h1 className="hero-title anim-load" style={{ '--d': '90ms' }}>
                Scale Your Revenue With <span className="gold-gradient-text">High-ROAS Meta Ads</span> & Precision Growth Engine
              </h1>

              <p className="hero-sub anim-load" style={{ '--d': '180ms' }}>
                We engineer enterprise-level Meta Ads, High-Rank SEO, Direct-Response Video Creatives, Social Media Design, and Content Writing that transform clicks into predictable profit.
              </p>

              <div className="hero-actions anim-load" style={{ '--d': '270ms' }}>
                <button className="btn btn-gold btn-glow" onClick={() => setModalOpen(true)}>
                  <Calendar size={18} /> Book Strategy Session <ArrowRight size={18} />
                </button>
                <Link to="/portfolio" className="btn btn-outline-gold">
                  View Portfolio
                </Link>
              </div>

              <div className="hero-trust-bar anim-load" style={{ '--d': '360ms' }}>
                <div className="trust-item"><ShieldCheck size={16} className="gold-icon" /> 100% Data-Driven</div>
                <div className="trust-item"><CheckCircle2 size={16} className="gold-icon" /> Verifiable ROAS</div>
                <div className="trust-item"><Clock size={16} className="gold-icon" /> 24h Response SLA</div>
              </div>
            </div>

            <div className="hero-visual-wrap anim-load-image" style={{ '--d': '260ms' }}>
              <div className="hero-mockup glass-card">
                {/* Floating Performance Badges */}
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
            </div>
          </div>

          {/* STATS BAR */}
          <Reveal delay={80}>
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
          </Reveal>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="section section-surface services-preview">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow" style={{ justifyContent: 'center' }}>
                Core Specialized Services
              </span>
              <h2>Services Designed For <span className="gold-gradient-text">Aggressive Scale</span></h2>
              <p>Six core growth disciplines executed by senior specialists committed to measurable results.</p>
            </div>
          </Reveal>

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
          <Reveal>
            <div className="section-head">
              <span className="eyebrow" style={{ justifyContent: 'center' }}>
                The Growth Blueprint
              </span>
              <h2>Our 4-Step <span className="gold-gradient-text">Scalability Framework</span></h2>
              <p>A proven, systematic methodology that consistently transforms ad spend into profitable enterprise growth.</p>
            </div>
          </Reveal>

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

      {/* REVIEWS & TESTIMONIALS */}
      <section className="section section-dark testimonials-section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow" style={{ justifyContent: 'center' }}>
                Validated Success
              </span>
              <h2>Client Reviews & <span className="gold-gradient-text">Testimonials</span></h2>
              <p>Discover how we help brands break growth plateaus and achieve market leadership.</p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <TestimonialCarousel />
          </Reveal>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="section section-surface faq-section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow" style={{ justifyContent: 'center' }}>
                Got Questions?
              </span>
              <h2>Frequently Asked <span className="gold-gradient-text">Questions</span></h2>
              <p>Everything you need to know about working with Marketing Insight Pro.</p>
            </div>
          </Reveal>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 60}>
                <FaqItem q={f.q} a={f.a} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>



      <CalendlyModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

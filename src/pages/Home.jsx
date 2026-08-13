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
  Sparkles,
  Users
} from 'lucide-react';
import './Home.css';

const stats = [
  { prefix: '$', value: 12, suffix: 'M+', label: 'Client Revenue Generated' },
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
    q: 'What real results have you delivered across your Meta Ads campaigns?',
    a: 'From our client portfolio, Meta Ads engagements have produced outcomes like +340% WhatsApp sales inquiries in 30 days and a 4.8x ROAS within two months. Every campaign is engineered for sales objectives — not impressions — and scaled only when the cost per acquisition supports profitable growth.',
  },
  {
    q: 'How does your SEO process work and how long until rankings improve?',
    a: 'Our SEO framework combines technical audits, keyword intent mapping, on-page and schema optimization, and high-authority link building — the same methodology behind our documented audits for PEPVIAL and PLANETCERT. Technical fixes deliver quick wins in 14–30 days, while compounding authority and organic lead flow strengthen over 60–90 days.',
  },
  {
    q: 'What types of content and copywriting do you deliver?',
    a: 'Our copywriters produce psychology-backed landing pages, Meta and Google ad angle variations, email nurture flows, and SEO long-form articles. Copy is written to eliminate objections and drive action, with tone-of-voice guidelines so every piece stays consistent with your brand across all channels.',
  },
  {
    q: 'What kind of video content do you edit and what results does it drive?',
    a: 'We edit retention-first short-form video — product demos, painting reels, and client review reels, as featured in our portfolio — with 2-second hooks, kinetic captions, color grading, and audio design. These projects have generated 12M+ combined reel views, delivered in 9:16 and 16:9 formats for Instagram, TikTok, and YouTube Shorts.',
  },
  {
    q: 'Do you design social media posts and manage accounts end-to-end?',
    a: 'Both. We create branded post designs, carousels, and infographics for Instagram, LinkedIn, and Facebook, and we manage the full account lifecycle — 30-day content calendars, caption and hashtag optimization, DM and comment engagement, plus cross-platform scheduling through Meta Business Suite.',
  },
  {
    q: 'Will I own my ad accounts and get complete transparency?',
    a: 'Yes. Your ad accounts, pixels, and creative assets remain 100% client-owned. You receive real-time dashboard access and regular reporting covering ROAS, customer acquisition cost, and creative performance — so you always know exactly where your budget is working.',
  },
  {
    q: 'How is your agency different from other marketing agencies?',
    a: 'We are a revenue-accountability partner, not a task agency. Every service — Meta Ads, SEO, content, video editing, and social management — is delivered by senior specialists with direct executive oversight, transparent reporting, and month-to-month flexibility instead of locked-in retainers.',
  },
  {
    q: 'Are there long-term contracts or minimum commitments?',
    a: 'No. We operate on a monthly partnership and earn your business every month through validated ROI and clearly defined deliverables. If we are not growing your revenue, you are free to leave without any lock-in.',
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
            <Reveal direction="left" className="hero-copy">
              <div className="hero-badge">
                <Sparkles size={14} className="gold-icon" /> Premier Growth Marketing Agency
              </div>

              <h1 className="hero-title">
                Scale Your Revenue With <span className="gold-gradient-text">High-ROAS Meta Ads</span> & Precision Growth Engine
              </h1>

              <p className="hero-sub">
                We engineer enterprise-level Meta Ads, High-Rank SEO, Direct-Response Video Creatives, Social Media Design, and Content Writing that transform clicks into predictable profit.
              </p>

              <div className="hero-actions">
                <button className="btn btn-gold btn-glow" onClick={() => setModalOpen(true)}>
                  <Calendar size={18} /> Book Strategy Session <ArrowRight size={18} />
                </button>
                <Link to="/portfolio" className="btn btn-outline-gold">
                  Explore Case Studies
                </Link>
              </div>
            </Reveal>

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
          <Reveal>
            <div className="hero-stats-wrap glass-card">
              {stats.map((s) => (
                <div key={s.label} className="hero-stat-card">
                  <strong className="stat-number">
                    <CountUp prefix={s.prefix || ''} value={s.value} suffix={s.suffix} />
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
          <div className="section-head">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>
              Core Specialized Services
            </span>
            <h2>Services Designed For <span className="gold-gradient-text">Aggressive Scale</span></h2>
            <p>Six core growth disciplines executed by senior specialists committed to max ROI.</p>
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
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 80}>
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

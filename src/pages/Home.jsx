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
  { value: 50, suffix: '+', label: 'Campaigns Structured' },
  { value: 100, suffix: '%', label: 'Account Ownership & Transparency' },
  { value: 24, suffix: 'h', label: 'Response Time SLA' },
  { value: 4, suffix: '.9/5', label: 'Client Feedback Rating' },
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
    q: 'What does your Meta Ads service include?',
    a: 'We handle end-to-end Meta Ads campaign setup on Meta Ads Manager — from defining campaign objectives and target audience to creating high-converting ad creatives designed for sales. We also manage and monitor the campaigns using Meta Business Suite.',
  },
  {
    q: 'What is included in your SEO audit service?',
    a: 'Our SEO service covers comprehensive keyword research, technical on-page SEO analysis, off-page structure review, and backlink research. We deliver a detailed, actionable PDF SEO report that outlines exactly what needs to be improved for better search visibility.',
  },
  {
    q: 'What kind of content do you write?',
    a: 'We write social media post captions, website blog articles, and advertising copy. We use professional writing assistants and grammar tools like Grammarly and QuillBot to ensure all content is polished, readable, and aligned with your brand voice.',
  },
  {
    q: 'What video editing services do you offer?',
    a: 'We edit short-form social media videos including painting reels and review reels. We apply clean cuts, engaging captions/subtitles, smooth transitions, and audio sync using CapCut and Adobe Premiere Pro.',
  },
  {
    q: 'What does your social media management service cover?',
    a: 'We plan, schedule, and post content consistently on your Facebook and Instagram pages. We manage your page activity through Meta Business Suite and ensure a professional and consistent brand presence across platforms.',
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
                Professional <span className="gold-gradient-text">Digital Marketer</span> Specializing in Meta Ads & Creative Growth
              </h1>

              <p className="hero-sub">
                From structured Meta Ads campaigns and technical SEO audits to short-form video editing, social media designs, and content writing — everything you need to grow your brand online.
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
                {/* Floating Badges */}
                <div className="floating-badge badge-roas">
                  <TrendingUp size={16} className="gold-icon" />
                  <div>
                    <strong>Sales Focus</strong>
                    <span>Campaign Setup</span>
                  </div>
                </div>

                <div className="floating-badge badge-reach">
                  <Users size={16} className="gold-icon" />
                  <div>
                    <strong>Targeted Ads</strong>
                    <span>SEO Audits</span>
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
                  <div className={`glass-card service-card service-card-${s.slug}`}>
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
            {faqs.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>



      <CalendlyModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

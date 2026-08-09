import React, { useState } from 'react';
import Reveal from '../components/Reveal.jsx';
import CountUp from '../components/CountUp.jsx';
import CalendlyModal from '../components/CalendlyModal.jsx';
import { Target, Users, ShieldCheck, Award, Sparkles, ArrowRight, CheckCircle2, MapPin, Briefcase } from 'lucide-react';
import './About.css';

const teamMembers = [
  {
    name: 'Hyder Shaikh',
    role: 'Founder & Meta Ads Expert',
  },
  {
    name: 'Sara Khan',
    role: 'SEO Specialist',
  },
  {
    name: 'Hassan Shaikh',
    role: 'Content Writer',
  },
  {
    name: 'Ali Shaikh',
    role: 'Video Editor',
  },
  {
    name: 'Hafsa Shah',
    role: 'Social Media Post Designer',
  },
  {
    name: 'Ahmad Shaikh',
    role: 'Social Media Manager',
  },
];

const values = [
  {
    title: 'ROAS Over Vanity Metrics',
    desc: 'We never celebrate impressions or clicks. We only judge success by verifiable profit and customer acquisition.',
    icon: Target
  },
  {
    title: 'Direct Executive Access',
    desc: 'You work directly with senior growth architects who own your results — no junior intern pass-offs.',
    icon: Users
  },
  {
    title: 'Absolute Transparency',
    desc: '100% owned ad accounts, real-time dashboards, and plain-language video updates every week.',
    icon: ShieldCheck
  },
  {
    title: 'Continuous Innovation',
    desc: 'We constantly test new ad formats, AI bidding models, and conversion hacks before your competitors do.',
    icon: Award
  },
];

export default function About() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* PAGE HEADER */}
      <section className="page-header">
        <div className="container page-header-inner">
          <div className="hero-badge anim-load" style={{ margin: '0 auto 16px' }}>
            <Sparkles size={14} className="gold-icon" /> Agency Identity
          </div>
          <h1 className="anim-load" style={{ '--d': '90ms' }}>Built To Scale Brands Through <span className="gold-gradient-text">Uncompromising Data & Design</span></h1>
          <p className="anim-load" style={{ '--d': '180ms' }}>We are a specialized team of performance marketers, media buyers, designers, and copywriters obsessed with business growth.</p>
        </div>
      </section>

      {/* MISSION STORY SECTION */}
      <section className="section section-dark story-section">
        <div className="container story-grid">
          <Reveal direction="left">
            <div className="story-copy">
              <span className="eyebrow">Our Philosophy</span>
              <h2>Why We Built <span className="gold-gradient-text">Marketing Insight Pro</span></h2>
              <p>
                The traditional digital agency model is broken. Most agencies lock clients into long-term retainers, delegate work to inexperienced junior staff, and hide behind vague brand awareness reports.
              </p>
              <p>
                We founded Marketing Insight Pro to provide ambitious founders with an elite, accountable growth partner based in <strong>Pakistan, Hyderabad</strong> serving clients worldwide.
              </p>
              <div className="story-highlights">
                <div className="sh-item"><CheckCircle2 size={18} className="gold-icon" /> 100% Data-Driven Decision Making</div>
                <div className="sh-item"><CheckCircle2 size={18} className="gold-icon" /> Tailored Funnel Architectures</div>
                <div className="sh-item"><CheckCircle2 size={18} className="gold-icon" /> Rapid Agile Creative Testing</div>
                <div className="sh-item"><MapPin size={18} className="gold-icon" /> Location: Pakistan, Hyderabad</div>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className="about-stats-card glass-card">
              <h3 className="gold-gradient-text">Our Track Record</h3>
              <div className="about-stat-row">
                <strong><CountUp prefix="$" value={12} suffix="M+" /></strong>
                <span>Client Revenue Generated</span>
              </div>
              <div className="about-stat-row">
                <strong><CountUp value={150} suffix="+" /></strong>
                <span>High-Scale Campaigns</span>
              </div>
              <div className="about-stat-row">
                <strong><CountUp value={98} suffix="%" /></strong>
                <span>Client Retention Rate</span>
              </div>
              <button className="btn btn-gold btn-full" style={{ marginTop: '20px' }} onClick={() => setModalOpen(true)}>
                Partner With Us <ArrowRight size={16} />
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BRAND VALUES GRID - CORE PRINCIPLES */}
      <section className="section section-surface values-section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow" style={{ justifyContent: 'center' }}>
                Core Principles
              </span>
              <h2>Our Non-Negotiable <span className="gold-gradient-text">Agency Values</span></h2>
              <p>The core standards that guide every campaign, strategy, and client partnership.</p>
            </div>
          </Reveal>

          <div className="values-grid">
            {values.map((v, i) => {
              const VIcon = v.icon;
              return (
                <Reveal key={v.title} delay={i * 80}>
                  <div className="value-card glass-card">
                    <div className="value-icon">
                      <VIcon size={24} className="gold-icon" />
                    </div>
                    <h3>{v.title}</h3>
                    <p>{v.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* LEADERSHIP TEAM */}
      <section className="section section-dark team-section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow" style={{ justifyContent: 'center' }}>
                Growth Leadership
              </span>
              <h2>Meet The <span className="gold-gradient-text">Senior Architects</span></h2>
              <p>Dedicated specialists bringing expertise to every campaign.</p>
            </div>
          </Reveal>

          <div className="team-text-grid">
            {teamMembers.map((m, i) => (
              <Reveal key={m.name} delay={i * 80}>
                <div className="team-text-card glass-card">
                  <div className="team-text-icon">
                    <Briefcase size={22} className="gold-icon" />
                  </div>
                  <div className="team-text-info">
                    <h3>{m.name}</h3>
                    <span className="team-text-role">{m.role}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CalendlyModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

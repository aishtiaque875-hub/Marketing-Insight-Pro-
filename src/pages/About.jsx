import React, { useState } from 'react';
import Reveal from '../components/Reveal.jsx';
import CalendlyModal from '../components/CalendlyModal.jsx';
import { Target, Users, ShieldCheck, Award, Linkedin, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import './About.css';

const teamMembers = [
  {
    name: 'Ishtiaque Ahmad',
    role: 'Founder & Chief Growth Officer',
    exp: '8+ Yrs Exp',
    bio: 'Pioneered performance marketing strategies generating over $12M+ in client revenue across Meta Ads and SEO.',
    linkedin: 'https://linkedin.com',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80'
  },
  {
    name: 'David Vance',
    role: 'Head of Paid Media & Meta Ads',
    exp: '6+ Yrs Exp',
    bio: 'Specialized in scaling direct-to-consumer e-commerce ad accounts from $5k/mo to $100k+/mo ad spend.',
    linkedin: 'https://linkedin.com',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80'
  },
  {
    name: 'Elena Rostova',
    role: 'Lead UI/UX Architect',
    exp: '7+ Yrs Exp',
    bio: 'Crafts luxury visual systems and high-converting web interfaces for high-growth global brands.',
    linkedin: 'https://linkedin.com',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80'
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
          <div className="hero-badge" style={{ margin: '0 auto 16px' }}>
            <Sparkles size={14} className="gold-icon" /> Agency Identity
          </div>
          <h1>Built To Scale Brands Through <span className="gold-gradient-text">Uncompromising Data & Design</span></h1>
          <p>We are a specialized team of performance marketers, media buyers, UX designers, and copywriters obsessed with business growth.</p>
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
                We founded Marketing Insight Pro to provide ambitious founders with an elite, accountable growth partner. Every campaign starts with unit economics, customer psychology, and rigorous A/B testing.
              </p>
              <div className="story-highlights">
                <div className="sh-item"><CheckCircle2 size={18} className="gold-icon" /> 100% Data-Driven Decision Making</div>
                <div className="sh-item"><CheckCircle2 size={18} className="gold-icon" /> Tailored Funnel Architectures</div>
                <div className="sh-item"><CheckCircle2 size={18} className="gold-icon" /> Rapid Agile Creative Testing</div>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className="about-stats-card glass-card">
              <h3 className="gold-gradient-text">Our Track Record</h3>
              <div className="about-stat-row">
                <strong>$12M+</strong>
                <span>Client Revenue Generated</span>
              </div>
              <div className="about-stat-row">
                <strong>150+</strong>
                <span>High-Scale Campaigns</span>
              </div>
              <div className="about-stat-row">
                <strong>98%</strong>
                <span>Client Retention Rate</span>
              </div>
              <button className="btn btn-gold btn-full" style={{ marginTop: '20px' }} onClick={() => setModalOpen(true)}>
                Partner With Us <ArrowRight size={16} />
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BRAND VALUES GRID */}
      <section className="section section-surface values-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>
              Core Principles
            </span>
            <h2>Our Non-Negotiable <span className="gold-gradient-text">Agency Values</span></h2>
            <p>The core standards that guide every campaign, strategy, and client partnership.</p>
          </div>

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
          <div className="section-head">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>
              Growth Leadership
            </span>
            <h2>Meet The <span className="gold-gradient-text">Senior Architects</span></h2>
            <p>Direct executive oversight for every brand we scale.</p>
          </div>

          <div className="team-grid">
            {teamMembers.map((m, i) => (
              <Reveal key={m.name} delay={i * 90}>
                <div className="team-card glass-card">
                  <div className="team-avatar-wrap">
                    <img src={m.avatar} alt={m.name} loading="lazy" />
                    <span className="exp-badge">{m.exp}</span>
                  </div>

                  <div className="team-body">
                    <h3>{m.name}</h3>
                    <div className="team-role">{m.role}</div>
                    <p>{m.bio}</p>
                    <a href={m.linkedin} target="_blank" rel="noreferrer" className="team-linkedin-btn">
                      <Linkedin size={16} /> Connect on LinkedIn
                    </a>
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

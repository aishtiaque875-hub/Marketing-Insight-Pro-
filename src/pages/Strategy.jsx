import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';
import { submitLead } from '../utils/submitLead.js';
import { CheckCircle2, Send, ShieldCheck, Sparkles, ArrowRight, Clock, Calendar, Target, Users, Award } from 'lucide-react';
import './Strategy.css';

const timeSlots = ['10:00 AM', '11:30 AM', '1:00 PM', '2:30 PM', '4:00 PM', '5:30 PM'];

const perks = [
  { icon: Target, title: 'Funnel & ROAS Audit', desc: 'We analyze your current ad spend, conversion funnels, and identify immediate revenue leaks.' },
  { icon: Users, title: 'Growth Roadmap', desc: 'Receive a clear, actionable scaling plan tailored to your brand and market.' },
  { icon: Award, title: 'Zero Obligation', desc: 'Free 30-minute call — no pressure, no commitment, just pure strategic value.' },
];

export default function Strategy() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [slot, setSlot] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', goals: '' });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setError('');
    try {
      await submitLead({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.goals,
        preferredTime: slot,
      }, 'strategy');
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setError(err.message);
    }
  };

  return (
    <>
      {/* PAGE HEADER */}
      <section className="page-header">
        <div className="container page-header-inner">
          <div className="hero-badge" style={{ margin: '0 auto 16px' }}>
            <Sparkles size={14} className="gold-icon" /> Free Growth Consultation
          </div>
          <h1>Book Your Free <span className="gold-gradient-text">Strategy Call</span></h1>
          <p>Speak directly with our senior growth specialists. 30 minutes to audit your funnel and map out your revenue growth roadmap.</p>
        </div>
      </section>

      {/* MAIN SECTION */}
      <section className="section section-dark">
        <div className="container strategy-grid">
          {/* LEFT — FORM */}
          <Reveal direction="left">
            <div className="strategy-form-card glass-card">
              {status !== 'success' ? (
                <>
                  <div className="strategy-step-indicator">
                    <span className={`step-dot${step === 1 ? ' active' : ''}`}>1</span>
                    <span className="step-line"></span>
                    <span className={`step-dot${step === 2 ? ' active' : ''}`}>2</span>
                  </div>

                  {step === 1 ? (
                    <div className="strategy-step">
                      <div className="step-title"><Clock size={18} className="gold-icon" /> Choose Your Preferred Call Time</div>
                      <div className="time-grid">
                        {timeSlots.map((t) => (
                          <button
                            type="button"
                            key={t}
                            className={`time-chip${slot === t ? ' active' : ''}`}
                            onClick={() => setSlot(t)}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                      <button
                        type="button"
                        className="btn btn-gold btn-full"
                        disabled={!slot}
                        onClick={() => setStep(2)}
                      >
                        Continue to Your Details <ArrowRight size={16} />
                      </button>
                    </div>
                  ) : (
                    <div className="strategy-step">
                      <div className="selected-slot-banner">
                        <span><strong>Preferred Time:</strong> {slot}</span>
                        <button type="button" className="change-btn" onClick={() => setStep(1)}>Change</button>
                      </div>

                      <form onSubmit={handleSubmit} className="strategy-form">
                        <div className="form-row">
                          <div className="form-group">
                            <label>Full Name *</label>
                            <input
                              type="text"
                              required
                              placeholder="John Doe"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                          </div>
                          <div className="form-group">
                            <label>Work Email *</label>
                            <input
                              type="email"
                              required
                              placeholder="john@company.com"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <label>Phone / WhatsApp Number *</label>
                          <input
                            type="tel"
                            required
                            placeholder="+1 (555) 000-0000"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          />
                        </div>

                        <div className="form-group">
                          <label>Your Brand & Growth Goals</label>
                          <textarea
                            rows={4}
                            placeholder="Share your current funnel, target market, and scaling goals..."
                            value={formData.goals}
                            onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                          ></textarea>
                        </div>

                        {status === 'error' && <p className="form-error">{error}</p>}

                        <button type="submit" className="btn btn-gold btn-full" disabled={status === 'sending'}>
                          {status === 'sending' ? 'Booking Your Call...' : <>Request Strategy Call <Send size={16} /></>}
                        </button>
                        <div className="privacy-note">
                          <ShieldCheck size={14} /> 100% Secure & Confidential. We respect your privacy.
                        </div>
                      </form>
                    </div>
                  )}
                </>
              ) : (
                <div className="strategy-success">
                  <div className="success-icon-wrap">
                    <CheckCircle2 size={64} className="gold-icon" />
                  </div>
                  <h2>Your Call is <span className="gold-gradient-text">Booked!</span></h2>
                  <p>Thank you <strong>{formData.name}</strong>. Your strategy call is confirmed for <strong>{slot}</strong>. A confirmation has been sent to <strong>{formData.email}</strong>.</p>
                  <p className="sub-note">Our lead strategist is reviewing your brand details right now to prepare your growth audit.</p>
                  <button className="btn btn-gold" onClick={() => navigate('/')}>
                    Return to Home
                  </button>
                </div>
              )}
            </div>
          </Reveal>

          {/* RIGHT — PERKS */}
          <Reveal direction="right">
            <div className="strategy-perks-wrap">
              <span className="eyebrow">What You Get</span>
              <h2>Your Free <span className="gold-gradient-text">Growth Audit</span></h2>
              <p className="strategy-perks-desc">Every consultation is led by a senior growth architect — not a junior rep. Here is what you will receive:</p>

              <div className="perks-list">
                {perks.map((p, i) => {
                  const PIcon = p.icon;
                  return (
                    <div className="perk-card glass-card" key={i}>
                      <div className="perk-icon"><PIcon size={24} className="gold-icon" /></div>
                      <div>
                        <h4>{p.title}</h4>
                        <p>{p.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="strategy-trust-bar glass-card">
                <Calendar size={20} className="gold-icon" />
                <div>
                  <strong>Response within 24 hours</strong>
                  <span>Our strategists review every inquiry personally before the call.</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

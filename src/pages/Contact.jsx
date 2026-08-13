import React, { useState } from 'react';
import Reveal from '../components/Reveal.jsx';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Sparkles, ShieldCheck } from 'lucide-react';
import { submitLead } from '../utils/submitLead.js';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Meta Ads',
    message: ''
  });
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
        service: formData.service,
        message: formData.message,
      }, 'contact');
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
            <Sparkles size={14} className="gold-icon" /> Direct Growth Consultation
          </div>
          <h1>Let's Scale Your Brand To <span className="gold-gradient-text">New Heights</span></h1>
          <p>Book a confidential consultation or send us a message. Our growth strategists respond within 24 hours.</p>
        </div>
      </section>

      {/* CONTACT MAIN SECTION */}
      <section className="section section-dark">
        <div className="container contact-grid">
          {/* CONTACT INFO SIDEBAR */}
          <Reveal direction="left">
            <div className="contact-info-wrap">
              <span className="eyebrow">Direct Contact</span>
              <h2>Get In Touch With Our <span className="gold-gradient-text">Growth Team</span></h2>
              <p className="contact-lead-desc">
                Have questions about scaling your Meta Ads, boosting your Google SEO rankings, or redesigning your website? We are ready to audit your funnel.
              </p>

              <div className="contact-cards-list">
                <div className="contact-card glass-card">
                  <div className="c-icon-wrap"><Mail size={22} className="gold-icon" /></div>
                  <div>
                    <strong>Email Consultation</strong>
                    <a href="mailto:marketinginsight11@gmail.com">marketinginsight11@gmail.com</a>
                  </div>
                </div>

                <div className="contact-card glass-card">
                  <div className="c-icon-wrap"><Phone size={22} className="gold-icon" /></div>
                  <div>
                    <strong>Phone & Direct WhatsApp</strong>
                    <a href="https://wa.me/923266739989" target="_blank" rel="noreferrer">+92 326 6739989</a>
                  </div>
                </div>

                <div className="contact-card glass-card">
                  <div className="c-icon-wrap"><MapPin size={22} className="gold-icon" /></div>
                  <div>
                    <strong>Office Location</strong>
                    <span>Pakistan, Hyderabad</span>
                  </div>
                </div>
              </div>

              {/* WHATSAPP INSTANT CTA */}
              <div className="whatsapp-callout glass-card">
                <MessageSquare size={28} className="gold-icon" />
                <div>
                  <h4>Need an Instant Reply?</h4>
                  <p>Chat directly with our lead growth engineer on WhatsApp right now.</p>
                  <a
                    href="https://wa.me/923266739989"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-gold btn-sm"
                    style={{ marginTop: '10px' }}
                  >
                    Open WhatsApp Chat &rarr;
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* CONTACT FORM */}
          <Reveal direction="right">
            <div className="contact-form-card glass-card">
              {status !== 'success' ? (
                <form onSubmit={handleSubmit}>
                  <div className="form-head">
                    <h2>Submit Growth Inquiry</h2>
                    <p>Fill out the details below to receive your customized marketing audit.</p>
                  </div>

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

                  <div className="form-row">
                    <div className="form-group">
                      <label>Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label>Primary Service Needed</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      >
                        <option>Meta Ads</option>
                        <option>SEO</option>
                        <option>Content Writing</option>
                        <option>Video Editing</option>
                        <option>Social Media Post Design</option>
                        <option>Social Media Managing</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Tell Us About Your Brand & Goals</label>
                    <textarea
                      rows={4}
                      placeholder="Share your current website link, monthly sales targets, and main scaling challenges..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  {status === 'error' && <p className="form-error">{error}</p>}

                  <button type="submit" className="btn btn-gold btn-full" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Sending Your Inquiry...' : <>Send Inquiry & Request Audit <Send size={16} /></>}
                  </button>

                  <div className="form-privacy-note">
                    <ShieldCheck size={14} /> 100% Confidential. We respect your business privacy.
                  </div>
                </form>
              ) : (
                <div className="contact-success-state text-center">
                  <CheckCircle2 size={64} className="gold-icon" style={{ margin: '0 auto 16px' }} />
                  <h2>Message Received <span className="gold-gradient-text">Successfully!</span></h2>
                  <p>Thank you <strong>{formData.name}</strong>. Our senior growth officer is reviewing your inquiry and will contact you at <strong>{formData.email}</strong> within 24 hours.</p>
                  <button className="btn btn-gold" onClick={() => { setStatus('idle'); setFormData({ name: '', email: '', phone: '', service: 'Meta Ads', message: '' }); }} style={{ marginTop: '20px' }}>
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>


    </>
  );
}

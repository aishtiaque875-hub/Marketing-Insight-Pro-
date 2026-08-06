import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, Send, ShieldCheck } from 'lucide-react';
import './CalendlyModal.css';

export default function CalendlyModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState('Tomorrow, 3:00 PM');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    budget: '$5k - $10k/mo',
    goals: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const dates = [
    'Tomorrow, 2:00 PM',
    'Tomorrow, 4:30 PM',
    'Thursday, 11:00 AM',
    'Friday, 3:00 PM',
    'Next Monday, 10:00 AM'
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {!submitted ? (
          <>
            <div className="modal-header">
              <div className="modal-badge">
                <Calendar size={14} /> 1-on-1 Strategy Session
              </div>
              <h2>Book Your Free <span className="gold-gradient-text">Growth Consultation</span></h2>
              <p>Speak directly with our Chief Growth Officer. 30 minutes to audit your funnel & map out your $100k+ ROAS roadmap.</p>
            </div>

            {step === 1 ? (
              <div className="modal-step-1">
                <p className="step-title"><Clock size={16} /> Select a Time Slot (30 Mins):</p>
                <div className="time-grid">
                  {dates.map((d) => (
                    <button
                      key={d}
                      type="button"
                      className={`time-chip ${selectedDate === d ? 'active' : ''}`}
                      onClick={() => setSelectedDate(d)}
                    >
                      {d}
                    </button>
                  ))}
                </div>

                <div className="modal-perks">
                  <div className="perk-item"><CheckCircle2 size={16} className="gold-icon" /> Free Funnel & Ad Audit</div>
                  <div className="perk-item"><CheckCircle2 size={16} className="gold-icon" /> Custom Scaling Strategy</div>
                  <div className="perk-item"><CheckCircle2 size={16} className="gold-icon" /> Zero Sales Pressure</div>
                </div>

                <button className="btn btn-gold modal-next-btn" onClick={() => setStep(2)}>
                  Continue to Details &rarr;
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="modal-form">
                <div className="selected-slot-banner">
                  <Clock size={15} /> Selected: <strong>{selectedDate}</strong>
                  <button type="button" className="change-btn" onClick={() => setStep(1)}>Change</button>
                </div>

                <div className="form-grid">
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
                    <label>Monthly Ad Spend Budget</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    >
                      <option>$3,000 - $5,000 / mo</option>
                      <option>$5,000 - $10,000 / mo</option>
                      <option>$10,000 - $25,000 / mo</option>
                      <option>$25,000+ / mo</option>
                    </select>
                  </div>
                </div>

                <div className="form-group full-width">
                  <label>Current Website / Store Link</label>
                  <input
                    type="url"
                    placeholder="https://yourbrand.com"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn btn-gold modal-submit-btn">
                  Confirm Strategy Call <Send size={16} />
                </button>
                <div className="privacy-note">
                  <ShieldCheck size={14} /> 100% Secure & Confidential. We respect your privacy.
                </div>
              </form>
            )}
          </>
        ) : (
          <div className="modal-success">
            <div className="success-icon-wrap">
              <CheckCircle2 size={54} className="gold-icon" />
            </div>
            <h2>Strategy Call <span className="gold-gradient-text">Confirmed!</span></h2>
            <p>Thank you <strong>{formData.name}</strong>. A calendar invite has been sent to <strong>{formData.email}</strong> for <strong>{selectedDate}</strong>.</p>
            <p className="sub-note">Our lead strategist is reviewing your brand details right now to prepare your growth audit.</p>
            <button className="btn btn-gold" onClick={onClose}>
              Done & Return to Site
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

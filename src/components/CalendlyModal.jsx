import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Send, ShieldCheck, Sparkles, ArrowRight, Clock } from 'lucide-react';
import { submitLead, confirmationEmail } from '../utils/submitLead.js';
import './CalendlyModal.css';

const timeSlots = ['10:00 AM', '11:30 AM', '1:00 PM', '2:30 PM', '4:00 PM', '5:30 PM'];

const perks = [
  'Free 30-minute funnel & brand audit',
  'Actionable growth roadmap with clear next steps',
  'Zero obligation — no pressure, no spam',
];

export default function CalendlyModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [slot, setSlot] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', goals: '' });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const [wasOpen, setWasOpen] = useState(false);

  useEffect(() => {
    if (isOpen && !wasOpen) {
      setStep(1);
      setSlot('');
      setFormData({ name: '', email: '', phone: '', goals: '' });
      setStatus('idle');
      setError('');
    }
    setWasOpen(isOpen);
  }, [isOpen, wasOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setError('');
    try {
      await submitLead({
        subject: 'New Strategy Call Request — Marketing Insight Pro',
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        preferred_call_time: slot,
        goals: formData.goals,
        from_name: formData.name,
        autoresponse: confirmationEmail(formData.name, 'strategy'),
      });
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setError(err.message);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {status !== 'success' ? (
          <>
            <span className="modal-badge"><Sparkles size={12} /> Free 30-Min Strategy Audit</span>
            <div className="modal-header">
              <h2>Book Your Free <span className="gold-gradient-text">Growth Consultation</span></h2>
              <p>Step {step} of 2 — {step === 1 ? 'choose your preferred call time.' : 'add your details and request your call.'}</p>
            </div>

            {step === 1 ? (
              <>
                <div className="step-title"><Clock size={16} /> Select a Time Slot</div>
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

                <div className="modal-perks">
                  {perks.map((perk) => (
                    <div className="perk-item" key={perk}>
                      <CheckCircle2 size={15} className="gold-icon" /> {perk}
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  className="btn btn-gold modal-next-btn"
                  disabled={!slot}
                  onClick={() => setStep(2)}
                >
                  Continue to Your Details <ArrowRight size={16} />
                </button>
              </>
            ) : (
              <>
                <div className="selected-slot-banner">
                  <span><strong>Preferred Time:</strong> {slot}</span>
                  <button type="button" className="change-btn" onClick={() => setStep(1)}>Change</button>
                </div>

                <form onSubmit={handleSubmit} className="modal-form">
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
                    <div className="form-group full-width">
                      <label>Phone / WhatsApp Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div className="form-group full-width">
                      <label>Your Brand & Growth Goals</label>
                      <textarea
                        rows={3}
                        placeholder="Share your current funnel, target market, and scaling goals..."
                        value={formData.goals}
                        onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                      ></textarea>
                    </div>
                  </div>

                  {status === 'error' && <p className="form-error">{error}</p>}

                  <button type="submit" className="btn btn-gold modal-submit-btn" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Booking Your Call...' : <>Request Strategy Call <Send size={16} /></>}
                  </button>
                  <div className="privacy-note">
                    <ShieldCheck size={14} /> 100% Secure & Confidential. We respect your privacy.
                  </div>
                </form>
              </>
            )}
          </>
        ) : (
          <div className="modal-success">
            <div className="success-icon-wrap">
              <CheckCircle2 size={54} className="gold-icon" />
            </div>
            <h2>Your Call is <span className="gold-gradient-text">Booked!</span></h2>
            <p>Thank you <strong>{formData.name}</strong>. Your strategy call is confirmed for <strong>{slot}</strong>. A confirmation has been sent to <strong>{formData.email}</strong>.</p>
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

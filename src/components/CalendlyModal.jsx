import React, { useState } from 'react';
import { X, CheckCircle2, Send, ShieldCheck } from 'lucide-react';
import './CalendlyModal.css';

export default function CalendlyModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    goals: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {!submitted ? (
          <>
            <div className="modal-header">
              <h2>Book Your Free <span className="gold-gradient-text">Growth Consultation</span></h2>
              <p>Speak directly with our senior growth specialists. 30 minutes to audit your funnel and map out your revenue growth roadmap.</p>
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

              <div className="form-group full-width">
                <label>Your Brand & Growth Goals</label>
                <textarea
                  rows={3}
                  placeholder="Share your current funnel, target market, and scaling goals..."
                  value={formData.goals}
                  onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-gold modal-submit-btn">
                Request Strategy Call <Send size={16} />
              </button>
              <div className="privacy-note">
                <ShieldCheck size={14} /> 100% Secure & Confidential. We respect your privacy.
              </div>
            </form>
          </>
        ) : (
          <div className="modal-success">
            <div className="success-icon-wrap">
              <CheckCircle2 size={54} className="gold-icon" />
            </div>
            <h2>Request <span className="gold-gradient-text">Received!</span></h2>
            <p>Thank you <strong>{formData.name}</strong>. Our senior growth officer will reach out to you at <strong>{formData.email}</strong> shortly.</p>
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
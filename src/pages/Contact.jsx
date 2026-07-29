import { useState } from 'react'
import './Contact.css'

const initialForm = { name: '', phone: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formsubmit.co/ajax/marketinginsight11@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          message: form.message,
          _subject: `New website inquiry from ${form.name}`,
        }),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      setForm(initialForm)
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <>
      <section className="page-header">
        <div className="container page-header-inner">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            Contact Us
          </span>
          <h1>Let's Talk About Your Brand</h1>
          <p>Send your details and we'll get back to you — usually within a day.</p>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container contact-inner">
          <div className="contact-info">
            <span className="eyebrow">Get in Touch</span>
            <h2>Prefer a Quicker Reply?</h2>
            <p>
              Message us directly on WhatsApp or email, or use the form and we'll follow up on
              whichever contact detail you provide.
            </p>

            <div className="contact-info-list">
              <a href="https://wa.me/923266739989" target="_blank" rel="noopener noreferrer">
                <strong>WhatsApp</strong>
                <span>+92 326 6739989</span>
              </a>
              <a href="mailto:marketinginsight11@gmail.com">
                <strong>Email</strong>
                <span>marketinginsight11@gmail.com</span>
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={onSubmit}>
            <div className="form-row">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={onChange}
                placeholder="Your full name"
              />
            </div>

            <div className="form-row-group">
              <div className="form-row">
                <label htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={onChange}
                  placeholder="03XX XXXXXXX"
                />
              </div>
              <div className="form-row">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={onChange}
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={onChange}
                placeholder="Tell us about your business and what you need help with"
              />
            </div>

            <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="form-note form-note-success">
                Thanks — your message has been sent. We'll be in touch soon.
              </p>
            )}
            {status === 'error' && (
              <p className="form-note form-note-error">
                Something went wrong. Please try again, or message us directly on WhatsApp.
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  )
}

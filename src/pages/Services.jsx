import * as Icons from 'lucide-react'
import { services } from '../data/services.js'
import ServiceArt from '../components/ServiceArt.jsx'
import Reveal from '../components/Reveal.jsx'
import './Services.css'

export default function Services() {
  return (
    <>
      <section className="page-header">
        <div className="container page-header-inner">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            Services
          </span>
          <h1>Six Services. One Team. No Handoffs.</h1>
          <p>
            Pick one service or combine a few — everything is planned and delivered by the same
            team, so your brand stays consistent everywhere it shows up.
          </p>
        </div>
      </section>

      <section className="section services-detail">
        <div className="container">
          <div className="services-detail-grid">
            {services.map((s, i) => {
              const Icon = Icons[s.icon]
              return (
                <Reveal key={s.slug} delay={(i % 2) * 100}>
                  <div className="card service-detail-card">
                    <div className="service-detail-art">
                      <ServiceArt slug={s.slug} />
                    </div>
                    <div className="service-detail-body">
                      <div className="service-detail-head">
                        <span className="service-row-number">0{i + 1}</span>
                        <div className="service-detail-icon">
                          {Icon && <Icon size={18} strokeWidth={1.8} />}
                        </div>
                      </div>
                      <h2>{s.title}</h2>
                      <p>{s.detail}</p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-banner-inner">
          <h2>Not Sure Which Service Fits?</h2>
          <p>Tell us about your business on WhatsApp and we'll suggest where to start.</p>
          <a
            href="https://wa.me/923266739989"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </>
  )
}

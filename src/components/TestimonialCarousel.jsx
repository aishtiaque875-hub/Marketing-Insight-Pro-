import { useEffect, useRef, useState } from 'react'
import { Star } from 'lucide-react'

export default function TestimonialCarousel({ items }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced || paused) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % items.length)
    }, 4500)
    return () => clearInterval(id)
  }, [paused, items.length])

  const t = items[index]

  return (
    <div
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="carousel-track" key={index}>
        <div className="testimonial-stars" aria-label="5 out of 5 stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
          ))}
        </div>
        <p className="carousel-quote">&ldquo;{t.quote}&rdquo;</p>
        <div className="testimonial-person">
          <span className="testimonial-avatar">{t.initials}</span>
          <div>
            <strong>{t.name}</strong>
            <span>{t.role}</span>
          </div>
        </div>
      </div>

      <div className="carousel-dots">
        {items.map((item, i) => (
          <button
            key={item.name}
            type="button"
            className={`carousel-dot ${i === index ? 'is-active' : ''}`}
            aria-label={`Show testimonial ${i + 1}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  )
}

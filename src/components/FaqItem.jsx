import { useState, useRef } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  const bodyRef = useRef(null)

  return (
    <div className={`faq-item ${open ? 'is-open' : ''}`}>
      <button type="button" className="faq-question" onClick={() => setOpen((v) => !v)}>
        <span>{q}</span>
        <span className="faq-chevron-wrap">
          <ChevronDown size={18} className="faq-chevron" />
        </span>
      </button>
      <div
        ref={bodyRef}
        className="faq-body"
        style={{
          maxHeight: open ? (bodyRef.current ? bodyRef.current.scrollHeight + 'px' : '500px') : '0px',
        }}
      >
        <p className="faq-answer">{a}</p>
      </div>
    </div>
  )
}


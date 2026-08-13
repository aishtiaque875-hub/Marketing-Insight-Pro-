import { useEffect, useRef, useState } from 'react'

export default function Reveal({ children, delay = 0, direction = 'up', className = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), 50)
          obs.unobserve(el)
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px'
      }
    )

    const timer = setTimeout(() => obs.observe(el), 100)

    return () => {
      clearTimeout(timer)
      obs.disconnect()
    }
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal reveal-${direction} ${visible ? 'reveal-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

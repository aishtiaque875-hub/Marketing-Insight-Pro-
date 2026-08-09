import { useEffect, useRef, useState } from 'react'

/**
 * Subtle, professional scroll reveal.
 * direction: 'up' | 'left' | 'right' | 'scale' | 'fade'
 * Automatically disabled for users who prefer reduced motion.
 */
export default function Reveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  threshold = 0.15,
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduceMotion || typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.unobserve(el)
        }
      },
      { threshold, rootMargin: '0px 0px -60px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

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

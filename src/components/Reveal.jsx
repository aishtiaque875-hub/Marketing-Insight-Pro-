import { useEffect, useRef, useState } from 'react'

export default function Reveal({ children, delay = 0, direction = 'up', className = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Fallback timer: force visibility if IntersectionObserver doesn't fire
    const fallbackTimer = setTimeout(() => {
      setVisible(true)
    }, 1200 + delay)

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          clearTimeout(fallbackTimer)
          obs.unobserve(el)
        }
      },
      { 
        threshold: 0.01,
        rootMargin: '0px 0px -20px 0px'
      }
    )
    obs.observe(el)
    return () => {
      obs.disconnect()
      clearTimeout(fallbackTimer)
    }
  }, [delay])

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

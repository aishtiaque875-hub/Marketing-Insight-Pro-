import { useEffect, useRef, useState } from 'react'

export default function CountUp({ value, prefix = '', suffix = '', duration = 1800 }) {
  const ref = useRef(null)
  const [display, setDisplay] = useState(0)
  const frameRef = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const animate = () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
      const start = performance.now()
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 4)
        setDisplay(Math.round(value * eased))
        if (progress < 1) frameRef.current = requestAnimationFrame(tick)
      }
      frameRef.current = requestAnimationFrame(tick)
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate()
        }
      },
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => {
      obs.disconnect()
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [value, duration])

  return (
    <span ref={ref}>
      {prefix}{display}{suffix}
    </span>
  )
}

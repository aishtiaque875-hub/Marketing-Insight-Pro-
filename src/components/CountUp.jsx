import { useEffect, useRef, useState } from 'react'

export default function CountUp({ value, suffix = '', duration = 1400 }) {
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
        const eased = 1 - Math.pow(1 - progress, 3)
        setDisplay(Math.round(value * eased))
        if (progress < 1) frameRef.current = requestAnimationFrame(tick)
      }
      frameRef.current = requestAnimationFrame(tick)
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate()
        } else {
          if (frameRef.current) cancelAnimationFrame(frameRef.current)
          setDisplay(0)
        }
      },
      { threshold: 0.4 }
    )
    obs.observe(el)
    return () => {
      obs.disconnect()
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [value, duration])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}

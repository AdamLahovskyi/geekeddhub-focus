"use client"
import { useEffect, useState } from "react"

function CountUp({ to, duration = 2 }: { to: number; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)

      setCount(Math.floor(progress * to))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [to, duration])

  return <span>{count.toLocaleString()}</span>
}

export function Stats() {
  return (
    <section className="py-16 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold mb-2">
              <CountUp to={50} duration={2} />
              K+
            </div>
            <p className="text-muted-foreground">Active Users</p>
          </div>

          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold mb-2">
              <CountUp to={100000} duration={2} />
              +
            </div>
            <p className="text-muted-foreground">Goals Achieved</p>
          </div>

          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold mb-2">
              <CountUp to={98} duration={2} />%
            </div>
            <p className="text-muted-foreground">Satisfaction Rate</p>
          </div>

          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold mb-2">
              <CountUp to={24} duration={2} />
              /7
            </div>
            <p className="text-muted-foreground">Support Available</p>
          </div>
        </div>
      </div>
    </section>
  )
}

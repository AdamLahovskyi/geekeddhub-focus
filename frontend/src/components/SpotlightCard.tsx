"use client"

import type React from "react"
import { useRef } from "react"

interface SpotlightCardProps extends React.PropsWithChildren {
  className?: string
  spotlightColor?: `rgba(${number}, ${number}, ${number}, ${number})`
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = "",
  spotlightColor = "rgba(255, 255, 255, 0.25)",
}) => {
  const divRef = useRef<HTMLDivElement>(null)

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!divRef.current) return

    const rect = divRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    divRef.current.style.setProperty("--mouse-x", `${x}px`)
    divRef.current.style.setProperty("--mouse-y", `${y}px`)
    divRef.current.style.setProperty("--spotlight-color", spotlightColor)
  }

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={`group relative rounded-3xl border border-border bg-card overflow-hidden ${className}`}
      style={{
        // @ts-ignore - CSS custom properties
        "--mouse-x": "50%",
        "--mouse-y": "50%",
        "--spotlight-color": spotlightColor,
      }}
    >
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none group-hover:opacity-60"
        style={{
          background:
            "radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 80%)",
        }}
      />
      {children}
    </div>
  )
}

export default SpotlightCard

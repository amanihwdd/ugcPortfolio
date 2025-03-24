"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

interface HolographicElementProps {
  className?: string
}

export function HolographicElement({ className }: HolographicElementProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = element.getBoundingClientRect()
      const x = (e.clientX - left) / width - 0.5
      const y = (e.clientY - top) / height - 0.5

      element.style.transform = `rotate3d(${y}, ${-x}, 0, 20deg)`
    }

    const handleMouseLeave = () => {
      element.style.transform = "rotate3d(0, 0, 0, 0deg)"
    }

    element.addEventListener("mousemove", handleMouseMove)
    element.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      element.removeEventListener("mousemove", handleMouseMove)
      element.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <div ref={elementRef} className={`holographic transition-transform duration-200 ${className}`}>
      <Image
        src="/holographicone.png"
        alt="Holographic decoration"
        width={200}
        height={100}
        className="w-full h-auto animate-float"
        style={{
          filter: "drop-shadow(0 0 5px rgba(255, 255, 255, 0.7)) drop-shadow(0 0 10px rgba(218, 165, 32, 0.3))",
        }}
      />
    </div>
  )
}


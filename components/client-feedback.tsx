"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export function ClientFeedback() {
  const oliviaTextRef = useRef<HTMLDivElement>(null)
  const heleneTextRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Function to create curved text
    const createCurvedText = (element: HTMLElement | null, text: string, radius: number, startAngle: number) => {
      if (!element) return

      element.innerHTML = ""
      const characters = text.split("")

      const angleStep = 120 / characters.length

      characters.forEach((char, i) => {
        const span = document.createElement("span")
        const angle = startAngle + i * angleStep
        const x = radius * Math.cos((angle * Math.PI) / 180)
        const y = radius * Math.sin((angle * Math.PI) / 180)

        span.innerHTML = char
        span.style.position = "absolute"
        span.style.transform = `translate(${x}px, ${y}px) rotate(${angle + 90}deg)`
        span.style.transformOrigin = "0 0"
        span.style.color = "#6e89c8 !important";
        span.style.fontSize = "0.875rem"
        span.style.fontWeight = "500"
        span.style.textShadow = "0 0 3px rgba(110, 137, 200, 0.8)"

        element.appendChild(span)
      })
    }

    createCurvedText(oliviaTextRef.current, "OLIVIA WILSON     RIMBERTO", 80, 210)
    createCurvedText(heleneTextRef.current, "HELENE PAQUET     BORCELLE", 80, 210)

    // Handle window resize
    const handleResize = () => {
      createCurvedText(oliviaTextRef.current, "OLIVIA WILSON     RIMBERTO", 80, 210)
      createCurvedText(heleneTextRef.current, "HELENE PAQUET     BORCELLE", 80, 210)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section id="clients" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Holographic elements */}
      <div className="absolute top-[-1%] right-[5%] w-[600px] h-[300px] z-10">
        <Image src="/holographicone.png" alt="Holographic decoration" fill className="object-contain animate-float" />
      </div>
      <div className="absolute bottom-[20%] left-[1%] w-[600px] h-[300px] z-10">
        <Image
          src="/holographictt.png"
          alt="Holographic decoration"
          fill
          className="object-contain animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 z-20">
        {/* Mobile layout */}
        <div className="md:hidden space-y-12">
          <div className="text-center mb-8">
            <h1 className="text-6xl neon-text tracking-tight">CLIENT</h1>
            <h2 className="text-4xl script-text -mt-2 text-[#6e89c8]">feedback</h2>
          </div>

          <div className="space-y-12">
            <div className="space-y-4">
              <div className="relative">
                <div className="polaroid mx-auto max-w-[250px]">
                  <Image
                    src="/clientfeed.jpg"
                    alt="Client Testimonial 1"
                    width={250}
                    height={250}
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -top-6 left-0 right-0 h-12 flex justify-center">
                  <p className="text-[#6e89c8] text-sm font-medium">OLIVIA WILSON • RIMBERTO</p>
                </div>
              </div>
              <p className="text-[#6e89c8] text-sm max-w-md mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra in lorem at laoreet. Donec
                hendrerit libero eget est tempor, quis tempus arcu elementum. In elementum.
              </p>
            </div>

            <div className="space-y-4">
              <div className="relative">
                <div className="polaroid mx-auto max-w-[250px]">
                  <Image
                    src="/clientfeedba.jpg"
                    alt="Client Testimonial 2"
                    width={250}
                    height={250}
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -top-6 left-0 right-0 h-12 flex justify-center">
                  <p className="text-[#6e89c8] text-sm font-medium">HELENE PAQUET • BORCELLE</p>
                </div>
              </div>
              <p className="text-[#6e89c8] text-sm max-w-md mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra in lorem at laoreet. Donec
                hendrerit libero eget est tempor.
              </p>
            </div>
          </div>
        </div>

        {/* Desktop layout - exactly like the reference */}
        <div className="hidden md:flex md:flex-row md:items-center">
          {/* Left side - heading */}
          <div className="w-1/2 pr-8 ml-7">
            <div className="space-y-0">
              <h1 className="text-8xl md:text-9xl neon-text tracking-tight leading-none">CLIENT</h1>
              <h2 className="text-6xl md:text-7xl script-text -mt-4 text-[#6e89c8]">feedback</h2>
            </div>

          </div>

          {/* Vertical divider */}
          {/* <div className="h-[500px] w-px bg-white/30 mx-4"></div> */}

          {/* Right side - testimonials */}
          <div className="w-1/2 pl-8 space-y-16 relative">
            {/* First testimonial */}
            <div className="relative">
              {/* Curved client name */}
              {/* Polaroid and testimonial */}
              <div className="flex items-start space-x-4">
                <div className="polaroid w-1/3">
                  <Image
                    src="/clientfeed.jpg"
                    alt="Client Testimonial 1"
                    width={200}
                    height={200}
                    className="w-full h-auto"
                  />
                  
                </div>
                <div className="w-2/3">
                <p className="text-[#6e89c8] text-sm font-medium my-4">OLIVIA WILSON • RIMBERTO</p>
                  <p className="text-[#6e89c8] text-xs">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra in lorem at laoreet. Donec
                    hendrerit libero eget est tempor, quis tempus arcu elementum. In elementum.
                  </p>
                </div>
              </div>
            </div>

            {/* Second testimonial */}
            <div className="relative ml-auto">
              {/* Curved client name */}
              {/* Polaroid and testimonial */}
              <div className="flex items-start space-x-4">
                <div className="polaroid w-1/3">
                  <Image
                    src="/clientfeedba.jpg"
                    alt="Client Testimonial 2"
                    width={200}
                    height={200}
                    className="w-full h-auto"
                  />
                </div>
                <div className="w-2/3">
                <p className="text-[#6e89c8] text-sm font-medium my-4">OLIVIA WILSON • RIMBERTO</p>

                  <p className="text-[#6e89c8] text-xs">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra in lorem at laoreet. Donec
                    hendrerit libero eget est tempor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.3,
    },
  },
}

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
        span.style.color = "#6e89c8 !important"
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
      <motion.div
        className="absolute top-[-1%] right-[5%] w-[600px] h-[300px] z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Image
          src="/holographicone.png"
          alt="Holographic decoration"
          fill
          className="object-contain animate-float"
        />
      </motion.div>
      <motion.div
        className="absolute bottom-[20%] left-[1%] w-[600px] h-[300px] z-10"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <Image
          src="/holographict.png"
          alt="Holographic decoration"
          fill
          className="object-contain animate-float"
          style={{ animationDelay: "1s" }}
        />
      </motion.div>

      <div className="container mx-auto px-4 py-20 z-20">
        {/* Mobile layout */}
        <motion.div
          className="md:hidden space-y-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-8" variants={fadeInUp}>
            <h1 className="text-6xl neon-text tracking-tight">CLIENT</h1>
            <h2 className="text-4xl script-text -mt-2 text-[#6e89c8]">feedback</h2>
          </motion.div>

          <div className="space-y-12">
            <motion.div className="space-y-4" variants={fadeInUp}>
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
            </motion.div>

            <motion.div className="space-y-4" variants={fadeInUp}>
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
            </motion.div>
          </div>
        </motion.div>

        {/* Desktop layout */}
        <div className="hidden md:flex md:flex-row md:items-center">
          {/* Left side - heading */}
          <motion.div
            className="w-1/2 pr-8 ml-7"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-0">
              <h1 className="text-8xl md:text-9xl neon-text tracking-tight leading-none">CLIENT</h1>
              <h2 className="text-6xl md:text-7xl script-text -mt-4 text-[#6e89c8]">feedback</h2>
            </div>
          </motion.div>

          {/* Right side - testimonials */}
          <motion.div
            className="w-1/2 pl-8 space-y-16 relative"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* First testimonial */}
            <motion.div className="relative" variants={fadeInUp}>
              <div className="flex items-start space-x-4">
                <div className="polaroid w-1/3">
                  <Image
                    src="/clientfeedba.jpg"
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
            </motion.div>

            {/* Second testimonial */}
            <motion.div className="relative ml-auto" variants={fadeInUp}>
              <div className="flex items-start space-x-4">
                <div className="polaroid w-1/3">
                  <Image
                    src="/clientfeed.jpg"
                    alt="Client Testimonial 2"
                    width={200}
                    height={200}
                    className="w-full h-auto"
                  />
                </div>
                <div className="w-2/3">
                  <p className="text-[#6e89c8] text-sm font-medium my-4">HELENE PAQUET • BORCELLE</p>
                  <p className="text-[#6e89c8] text-xs">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra in lorem at laoreet. Donec
                    hendrerit libero eget est tempor.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

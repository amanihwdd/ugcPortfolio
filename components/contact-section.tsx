"use client"

import Image from "next/image"

export function ContactSection() {
  return (
    <section id="contact" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background image */}

      {/* Holographic elements */}
      <div className="absolute top-[10%] left-[-5%] w-[500px] h-[250px] pointer-events-none z-10">
        <Image src="/holographicone.png" alt="Holographic decoration" fill className="object-contain animate-float" />
      </div>
      <div className="absolute bottom-[30%] right-[15%] w-[500px] h-[300px] pointer-events-none z-10">
        <Image
          src="/holographict.png"
          alt="Holographic decoration"
          fill
          className="object-contain animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-4 z-20">
        {/* Mobile layout */}
        <div className="md:hidden space-y-12">
          <div className="text-center mb-8">
            <h1 className="text-6xl neon-text tracking-tight">LET'S WORK</h1>
            <h2 className="text-4xl script-text -mt-2">together</h2>
          </div>

          

          <div className="text-center space-y-2">
            <p className="text-white text-lg">123-456-7890</p>
            <p className="text-white text-lg">hello@reallygreatsite.com</p>
            <p className="text-white text-lg">www.reallygreatsite.com</p>
          </div>
          <div className="flex justify-center mb-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8205f459c3b4d73839c2e5f4b1277bf3-UcwKIRrGNMWLQ7wH2U3pI0GatrSjAD.png"
              alt="Avery Davis"
              width={300}
              height={400}
              className="w-full max-w-[250px] h-auto"
            />
          </div>
          <div className="mt-40 text-center">
              <p className="text-white text-sm">© 2025</p>
            </div>
        </div>

        {/* Desktop layout - exactly like the reference */}
        <div className="hidden md:flex items-center justify-between relative">
          {/* Left side - Image 1 */}
          <div className="w-1/4 z-20 -ml-4">
            <Image
              src="left.png"
              alt="Avery Davis"
              width={400}
              height={600}
              className="w-full h-auto"
            />
          </div>

          {/* Center - Heading and contact info */}
          <div className="w-2/4 text-center z-20">
            <div className="mb-8">
              <h1 className="text-7xl md:text-9xl neon-text tracking-tight leading-none">LET'S WORK</h1>
              <h2 className="text-5xl md:text-7xl script-text -mt-4">together</h2>
            </div>

            <div className="space-y-2 mt-16">
              <p className="text-white text-xl">123-456-7890</p>
              <p className="text-white text-xl">hello@reallygreatsite.com</p>
              <p className="text-white text-xl">www.reallygreatsite.com</p>
            </div>

            <div className="mt-40">
              <p className="text-white text-sm">© 2025</p>
            </div>
          </div>

          {/* Right side - Image 2 */}
          <div className="w-1/4 z-20">
            <Image
              src="right.png"
              alt="Avery Davis"
              width={400}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}


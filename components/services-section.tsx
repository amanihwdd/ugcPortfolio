"use client"

import Image from "next/image"

export function ServicesSection() {
  return (
    <section id="services" className="min-h-screen flex items-center relative overflow-hidden mt-24">
      {/* Background image */}
      {/* <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Image src="/cloud-bg.jpg" alt="Cloud Background" fill className="object-cover" priority />
      </div> */}

      {/* Holographic elements */}
      <div className="absolute top-[10%] left-[1%] w-[600px] h-[400px] pointer-events-none z-10">
        <Image src="/holographict.png" alt="Holographic decoration" fill className="object-contain animate-float" />
      </div>
      <div className="absolute bottom-[-15%] md:bottom-[1%] left-[-90%] md:left-[-5%] w-[600px] h-[300px] pointer-events-none z-10">
        <Image
          src="/holographicone.png"
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
            <h1 className="text-6xl neon-text tracking-tight">SERVICES &</h1>
            <h2 className="text-4xl script-text -mt-2">pricing</h2>
          </div>

          <div className="space-y-8 text-center ">
            <div className="space-y-2">
              <h3 className="text-white font-bold text-xl">BASIC UGC PACKAGE</h3>
              <p className="text-white text-3xl font-light">$150</p>
              <p className="text-white text-sm">Includes one UGC video or image post.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-white font-bold text-xl">PLATFORM OPTIMIZATION</h3>
              <p className="text-white text-3xl font-light">$500</p>
              <p className="text-white text-sm">Tailoring content for specific platforms.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-white font-bold text-xl">PROFESSIONAL EDITING</h3>
              <p className="text-white text-3xl font-light">$450</p>
              <p className="text-white text-sm">Editing services for existing UGC content.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-white font-bold text-xl">CONTENT STRATEGY CONSULTING</h3>
              <p className="text-white text-3xl font-light">$900</p>
              <p className="text-white text-sm">Expert guidance on integrating UGC into your marketing strategy.</p>
            </div>
          </div>
          <div className="flex justify-center mb-8 -mr-28">
            <Image
              src="rv.png"
              alt="KylieSkin Product"
              width={400}
              height={300}
              className="w-full max-w-[300px] h-auto"
            />
          </div>
        </div>

        {/* Desktop layout - exactly like the reference */}
        <div className="hidden md:block relative ml-7">
          <div className="flex justify-between items-start mb-20">
            {/* Left side - Heading */}
            <div className="z-20">
              <h1 className="text-7xl md:text-8xl neon-text tracking-tight leading-none">SERVICES &</h1>
              <h2 className="text-6xl md:text-8xl script-text -mt-9 ml-10">pricing</h2>
              <div className="grid grid-cols-2 gap-y-16 gap-x-8 mt-4">
            {/* Service 1 */}
            <div className="relative pr-8 border-r border-white/30 ">
              <h3 className="text-white font-mono uppercase text-sm mb-1">BASIC UGC PACKAGE</h3>
              <p className="text-white text-2xl font-light mb-2">$150</p>
              <p className="text-white text-xs font-light">Includes one UGC video or image post.</p>
            </div>

            {/* Service 2 */}
            <div className="relative pl-8">
              <h3 className="text-white font-mono uppercase text-sm mb-1">PLATFORM OPTIMIZATION</h3>
              <p className="text-white text-2xl font-light mb-2">$500</p>
              <p className="text-white text-xs font-light">Tailoring content for specific platforms.</p>
            </div>

            {/* Service 3 */}
            <div className="relative pr-8 border-r border-white/30">
              <h3 className="text-white font-mono uppercase text-sm mb-1">PROFESSIONAL EDITING</h3>
              <p className="text-white text-2xl font-light mb-2">$450</p>
              <p className="text-white text-xs font-light">Editing services for existing UGC content.</p>
            </div>

            {/* Service 4 */}
            <div className="relative pl-8">
              <h3 className="text-white font-mono uppercase text-sm mb-1">CONTENT STRATEGY CONSULTING</h3>
              <p className="text-white text-2xl font-light mb-2">$900</p>
              <p className="text-white text-xs font-light">
                Expert guidance on integrating UGC into your marketing strategy.
              </p>
            </div>
          </div>
            </div> 
            {/* Right side - Product image */}
            <div className="z-20">
              <Image
                src="rv.png"
                alt="KylieSkin Product"
                width={500}
                height={400}
                className="w-auto h-auto"
              />
            </div>
          </div>          
        </div>
      </div>
    </section>
  )
}


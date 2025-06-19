"use client"

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
      staggerChildren: 0.2,
    },
  },
}

export function ServicesSection() {
  return (
    <section id="services" className="min-h-screen flex items-center relative overflow-hidden mt-24">
      {/* Holographic elements */}
      <motion.div
        className="absolute top-[10%] left-[1%] w-[600px] h-[400px] pointer-events-none z-10"
        initial={{ opacity: 0, rotate: 10 }}
        whileInView={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Image
          src="/holographict.png"
          alt="Holographic decoration"
          fill
          className="object-contain animate-float"
        />
      </motion.div>
      <motion.div
        className="absolute bottom-[-15%] md:bottom-[1%] left-[-90%] md:left-[-5%] w-[600px] h-[300px] pointer-events-none z-10"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <Image
          src="/holographictt.png"
          alt="Holographic decoration"
          fill
          className="object-contain animate-float"
          style={{ animationDelay: "1s" }}
        />
      </motion.div>

      <div className="container mx-auto px-4 z-20">
        {/* Mobile layout */}
        <motion.div
          className="md:hidden space-y-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-8" variants={fadeInUp}>
            <h1 className="text-6xl neon-text tracking-tight">SERVICES &</h1>
            <h2 className="text-4xl script-text -mt-2 text-[#6e89c8]">pricing</h2>
          </motion.div>

          <motion.div className="space-y-8 text-center" variants={staggerContainer}>
            <motion.div className="space-y-2" variants={fadeInUp}>
              <h3 className="text-[#6e89c8] font-bold text-xl">BASIC UGC PACKAGE</h3>
              <p className="text-[#6e89c8] text-3xl font-light">$150</p>
              <p className="text-[#6e89c8] text-sm">Includes one UGC video or image post.</p>
            </motion.div>

            <motion.div className="space-y-2" variants={fadeInUp}>
              <h3 className="text-[#6e89c8] font-bold text-xl">PLATFORM OPTIMIZATION</h3>
              <p className="text-[#6e89c8] text-3xl font-light">$500</p>
              <p className="text-[#6e89c8] text-sm">Tailoring content for specific platforms.</p>
            </motion.div>

            <motion.div className="space-y-2" variants={fadeInUp}>
              <h3 className="text-[#6e89c8] font-bold text-xl">PROFESSIONAL EDITING</h3>
              <p className="text-[#6e89c8] text-3xl font-light">$450</p>
              <p className="text-[#6e89c8] text-sm">Editing services for existing UGC content.</p>
            </motion.div>

            <motion.div className="space-y-2" variants={fadeInUp}>
              <h3 className="text-[#6e89c8] font-bold text-xl">CONTENT STRATEGY CONSULTING</h3>
              <p className="text-[#6e89c8] text-3xl font-light">$900</p>
              <p className="text-[#6e89c8] text-sm">Expert guidance on integrating UGC into your marketing strategy.</p>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center mb-8 -mr-28"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/rv.png"
              alt="KylieSkin Product"
              width={400}
              height={300}
              className="w-full max-w-[300px] h-auto"
            />
          </motion.div>
        </motion.div>

        {/* Desktop layout */}
        <div className="hidden md:block relative ml-7">
          <div className="flex justify-between items-start mb-20">
            {/* Left side - Heading */}
            <motion.div
              className="z-20"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h1 className="text-7xl md:text-8xl neon-text tracking-tight leading-none">SERVICES &</h1>
              <h2 className="text-6xl md:text-8xl script-text -mt-9 ml-10 text-[#6e89c8]">pricing</h2>

              <motion.div
                className="grid grid-cols-2 gap-y-16 gap-x-8 mt-4"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {/* Service 1 */}
                <motion.div className="relative pr-8 border-r border-white/30" variants={fadeInUp}>
                  <h3 className="text-[#6e89c8] font-mono uppercase text-sm mb-1">BASIC UGC PACKAGE</h3>
                  <p className="text-[#6e89c8] text-2xl font-light mb-2">$150</p>
                  <p className="text-[#6e89c8] text-xs font-light">Includes one UGC video or image post.</p>
                </motion.div>

                {/* Service 2 */}
                <motion.div className="relative pl-8" variants={fadeInUp}>
                  <h3 className="text-[#6e89c8] font-mono uppercase text-sm mb-1">PLATFORM OPTIMIZATION</h3>
                  <p className="text-[#6e89c8] text-2xl font-light mb-2">$500</p>
                  <p className="text-[#6e89c8] text-xs font-light">Tailoring content for specific platforms.</p>
                </motion.div>

                {/* Service 3 */}
                <motion.div className="relative pr-8 border-r border-white/30" variants={fadeInUp}>
                  <h3 className="text-[#6e89c8] font-mono uppercase text-sm mb-1">PROFESSIONAL EDITING</h3>
                  <p className="text-[#6e89c8] text-2xl font-light mb-2">$450</p>
                  <p className="text-[#6e89c8] text-xs font-light">Editing services for existing UGC content.</p>
                </motion.div>

                {/* Service 4 */}
                <motion.div className="relative pl-8" variants={fadeInUp}>
                  <h3 className="text-[#6e89c8] font-mono uppercase text-sm mb-1">CONTENT STRATEGY CONSULTING</h3>
                  <p className="text-[#6e89c8] text-2xl font-light mb-2">$900</p>
                  <p className="text-[#6e89c8] text-xs font-light">
                    Expert guidance on integrating UGC into your marketing strategy.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right side - Product image */}
            <motion.div
              className="z-20"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Image
                src="/rv.png"
                alt="KylieSkin Product"
                width={500}
                height={400}
                className="w-auto h-auto"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

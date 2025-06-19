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

export function ContactSection() {
  return (
    <section id="contact" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Holographic elements */}
      <motion.div
        className="absolute top-[10%] left-[-5%] w-[500px] h-[250px] pointer-events-none z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Image
          src="/holographictt.png"
          alt="Holographic decoration"
          fill
          className="object-contain animate-float"
        />
      </motion.div>
      <motion.div
        className="absolute bottom-[30%] right-[15%] w-[500px] h-[300px] pointer-events-none z-10"
        initial={{ opacity: 0, rotate: 15 }}
        whileInView={{ opacity: 1, rotate: 0 }}
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
            <h1 className="text-6xl neon-text tracking-tight">LET'S WORK</h1>
            <h2 className="text-4xl script-text -mt-2 text-[#6e89c8]">together</h2>
          </motion.div>

          <motion.div className="flex justify-center mb-8" variants={fadeInUp}>
            <Image
              src="/right.png"
              alt="Avery Davis"
              width={300}
              height={400}
              className="w-full max-w-[250px] h-auto"
            />
          </motion.div>

          <motion.div className="text-center space-y-2" variants={fadeInUp}>
            <p className="text-[#6e89c8] text-lg">123-456-7890</p>
            <p className="text-[#6e89c8] text-lg">hello@ugcname.com</p>
            <p className="text-[#6e89c8] text-lg">www.ugcsite.com</p>
          </motion.div>

          <motion.div className="mt-40 text-center" variants={fadeInUp}>
            <p className="text-[#6e89c8] text-sm">© 2025</p>
          </motion.div>
        </motion.div>

        {/* Desktop layout */}
        <div className="hidden md:flex items-center justify-between relative">
          {/* Left side - Image 1 */}
          <motion.div
            className="w-1/4 z-20 -ml-4"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/right.png"
              alt="Avery Davis"
              width={400}
              height={600}
              className="w-full h-auto"
            />
          </motion.div>

          {/* Center - Heading and contact info */}
          <motion.div
            className="w-2/4 text-center z-20"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div className="mb-8" variants={fadeInUp}>
              <h1 className="text-7xl md:text-9xl neon-text tracking-tight leading-none">LET'S WORK</h1>
              <h2 className="text-5xl md:text-7xl script-text -mt-4 text-[#6e89c8]">together</h2>
            </motion.div>

            <motion.div className="space-y-2 mt-16" variants={fadeInUp}>
              <p className="text-[#6e89c8] text-xl">123-456-7890</p>
              <p className="text-[#6e89c8] text-xl">hello@ugc.com</p>
              <p className="text-[#6e89c8] text-xl">www.ugcport.com</p>
            </motion.div>

            <motion.div className="mt-40" variants={fadeInUp}>
              <p className="text-[#6e89c8] text-sm">© 2025</p>
            </motion.div>
          </motion.div>

          {/* Right side - Image 2 */}
          <motion.div
            className="w-1/4 z-20"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src="/left.png"
              alt="Avery Davis"
              width={400}
              height={600}
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

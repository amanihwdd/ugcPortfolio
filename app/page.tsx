"use client"

import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { ClientFeedback } from "@/components/client-feedback"
import { ServicesSection } from "@/components/services-section"
import { ContactSection } from "@/components/contact-section"
import Link from "next/link"
import { motion } from "framer-motion"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
}

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
}

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="h-screen flex items-center relative overflow-hidden">
        {/* Holographic elements with parallax */}
        <motion.div 
          className="absolute top-[-50%] right-[1%] md:top-[-125%] md:right-[5%] w-[500px] h-[1000px] md:w-[1000px] md:h-[2000px] pointer-events-none z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <Image src="/holographicone.png" alt="Holographic decoration" fill className="object-contain animate-float" />
        </motion.div>
        
        <motion.div 
 className="absolute bottom-[-6%] left-[-100%] md:left-[-10%] w-[1000px] h-[500px] pointer-events-none z-10"          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <Image
            src="/holographict.png"
            alt="Holographic decoration"
            fill
            className="object-contain animate-float"
            style={{ animationDelay: "1s" }}
          />
        </motion.div>
        
        {/* <motion.div 
className="absolute top-[1%] left-[-50%] md:left-[-10%] w-[1000px] h-[500px] pointer-events-none z-10"          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Image
            src="/holographictt.png"
            alt="Holographic decoration"
            fill
            className="object-contain animate-float"
            style={{ animationDelay: "2s" }}
          />
        </motion.div> */}

        <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-around z-20">
          <motion.div 
            className="md:w-1/2 space-y-6 ml-0 md:ml-7 mb-8 md:mb-0 text-center md:text-left"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div className="space-y-4 mb-8" variants={fadeInUp}>
              <p className="text-[#6e89c8] max-w-md">
                I enjoy crafting content that ignites inspiration within my audience.
              </p>
            </motion.div>

            <motion.div className="space-y-2" variants={staggerContainer}>
              <motion.h1 
                className="text-6xl sm:text-7xl md:text-9xl neon-text tracking-tight leading-none"
                variants={fadeInLeft}
              >
                UGC
              </motion.h1>
              <motion.h1 
                className="text-6xl sm:text-7xl md:text-9xl neon-text tracking-tight leading-none"
                variants={fadeInLeft}
                transition={{ delay: 0.2 }}
              >
                CREATOR
              </motion.h1>
              <motion.h2 
                className="text-4xl sm:text-5xl md:text-7xl script-text text-[#6e89c8] -mt-4"
                variants={fadeInLeft}
                transition={{ delay: 0.4 }}
              >
                portfolio
              </motion.h2>
            </motion.div>
          </motion.div>

          <motion.div 
            className="hidden md:block md:w-1/2 z-20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Image
              src="/homee.png"
              alt="Avery Davis - UGC Creator"
              width={600}
              height={600}
              className="w-full h-auto"
              priority
            />
          </motion.div>
        </div>
      </section>

      <section id="about" className="min-h-screen flex items-center relative overflow-hidden">
        <motion.div 
          className="absolute z-11 bottom-[-5%] left-[-100%] md:bottom-[10px] md:left-[30%] w-[1000px] h-[500px] pointer-events-none"
          initial={{ opacity: 0, rotate: -10 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 1 }}
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

        <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 order-2 md:order-1"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/aboutw.png"
              alt="Hello, I'm Avery"
              width={600}
              height={600}
              className="w-full h-auto"
            />
          </motion.div>

          <motion.div 
            className="md:w-1/2 space-y-6 z-10 order-1 md:order-2 mb-10 md:mb-0 text-center md:text-left"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div className="space-y-2" variants={fadeInRight}>
              <h1 className="text-6xl md:text-8xl neon-text tracking-tight">HELLO, I'M</h1>
              <h2 className="text-5xl md:text-7xl script-text text-[#6e89c8] -mt-4">Avery</h2>
            </motion.div>

            <motion.div className="max-w-md" variants={fadeInRight}>
              <p className="text-[#6e89c8]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra in lorem at laoreet. Donec
                hendrerit libero eget est tempor, quis tempus arcu elementum. In elementum elit at dui tristique
                feugiat.
              </p>
            </motion.div>

            <motion.div 
              className="md:hidden flex items-center space-x-2 text-[#6e89c8] justify-around"
              variants={fadeInRight}
            >
              <span className="text-2xl script-text text-[#6e89c8]">Avery Davis</span>
              <span className="px-2">•</span>
              <span className="text-[#6e89c8]">UGC CREATOR</span>
            </motion.div>
            <motion.div 
              className="hidden md:flex items-center space-x-2 text-[#6e89c8]"
              variants={fadeInRight}
            >
              <span className="text-2xl script-text text-[#6e89c8]">Avery Davis</span>
              <span className="px-2">•</span>
              <span className="text-[#6e89c8]">UGC CREATOR</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="portfolio" className="min-h-screen flex items-center relative overflow-hidden">
        <div className="container mx-auto px-4 py-20">
          <motion.div 
            className="text-center mb-16 z-10 relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-6xl md:text-8xl neon-text tracking-tight">PORTFOLIO</h1>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-10 z-10 relative"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div className="space-y-4" variants={fadeInLeft}>
              <div className="polaroid">
                <Image
                  src="/portfolio.png"
                  alt="Portfolio Item 1"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <div className="space-y-1">
                <p className="text-sm text-[#6e89c8]">Client: Olivia Wilson</p>
                <p className="text-sm text-[#6e89c8]">Brief: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <Link href="#" className="text-sm text-primary">LINK TO VIDEO</Link>
              </div>
            </motion.div>

            <motion.div className="space-y-4" variants={fadeInRight}>
              <div className="polaroid">
                <Image
                  src="/portfolioone.png"
                  alt="Portfolio Item 2"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <div className="space-y-1">
                <p className="text-sm text-[#6e89c8]">Client: Olivia Wilson</p>
                <p className="text-sm text-[#6e89c8]">Brief: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <Link href="#" className="text-sm text-primary">LINK TO VIDEO</Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="clients">
        <ClientFeedback />
      </section>

      <section id="services">
        <ServicesSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>

      <motion.footer 
        className="py-6 bg-white/5 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center text-[#6e89c8]">
          <p>Avery Davis • UGC Creator</p>
        </div>
      </motion.footer>
    </main>
  )
}

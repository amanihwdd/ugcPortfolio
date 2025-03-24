import Image from "next/image"
import { Navigation } from "@/components/navigation"
import  {ClientFeedback} from "@/components/client-feedback"
import { ServicesSection } from "@/components/services-section"
import { ContactSection } from "@/components/contact-section"
export default function Home() {
  
  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="h-screen flex items-center relative overflow-hidden">
        {/* Background image */}
        {/* <div className="absolute top-0 left-0 w-full h-full">
          <Image src="/cloud-bg.jpg" alt="Cloud Background" fill className="object-cover" priority />
        </div> */}
        

        {/* Holographic elements - positioned to not overlap content */}
        <div className="absolute top-[-50%] right-[1%] md:top-[-125%] md:right-[5%] w-[500px] h-[1000px] md:w-[1000px] md:h-[2000px] pointer-events-none z-10">
          <Image src="/holographicone.png" alt="Holographic decoration" fill className="object-contain animate-float" />
        </div>
        <div className="absolute bottom-[-6%] left-[-100%] md:left-[-10%] w-[1000px] h-[500px] pointer-events-none z-10">
          <Image
            src="/holographictt.png"
            alt="Holographic decoration"
            fill
            className="object-contain animate-float"
            style={{ animationDelay: "1s" }}
          />
        </div>
        <div className="absolute top-[1%] left-[-50%] md:left-[-10%] w-[1000px] h-[500px] pointer-events-none z-10">
          <Image
            src="/holographict.png"
            alt="Holographic decoration"
            fill
            className="object-contain animate-float"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-around z-20">
          <div className="md:w-1/2 space-y-6 ml-0 md:ml-7 mb-8 md:mb-0 text-center md:text-left">
            <div className="space-y-4 mb-8">
              <p className="text-white max-w-md">
                I enjoy crafting content that ignites inspiration within my audience.
              </p>
            </div>

            <div className="space-y-2">
              <h1 className="text-6xl sm:text-7xl md:text-9xl neon-text tracking-tight leading-none">UGC</h1>
              <h1 className="text-6xl sm:text-7xl md:text-9xl neon-text tracking-tight leading-none">CREATOR</h1>
              <h2 className="text-4xl sm:text-5xl md:text-7xl script-text -mt-4">portfolio</h2>
            </div>
          </div>

          <div className="hidden md:block md:w-1/2 z-20">
            <Image
              src="homee.png"
              alt="Avery Davis - UGC Creator"
              width={600}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen flex items-center relative overflow-hidden">
        
        
        {/* <div className="absolute bottom-[10px]  right-[-80px]  w-[1000px] h-[500px] pointer-events-none z-10">
          <Image
            src="/holographictt.png"
            alt="Holographic decoration"
            fill
            className="object-contain animate-float"
            style={{ animationDelay: "1s" }}
          />
        </div> */}
        <div className="absolute z-11 bottom-[-5%] left-[-100%] md:bottom-[10px]  md:left-[30%] w-[1000px] h-[500px] pointer-events-none ">
          <Image
            src="/holographictt.png"
            alt="Holographic decoration"
            fill
            className="object-contain animate-float"
            style={{ animationDelay: "1s" }}
          />
        </div>
        

        <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2  order-2 md:order-1">
            <Image
              src="aboutw.png"
              alt="Hello, I'm Avery"
              width={600}
              height={600}
              className="w-full h-auto"
            />
          </div>

          <div className="md:w-1/2 space-y-6 z-10 order-1 md:order-2 mb-10 md:mb-0">
            <div className="space-y-2">
              <h1 className="text-6xl md:text-8xl neon-text tracking-tight">HELLO, I'M</h1>
              <h2 className="text-5xl md:text-7xl script-text -mt-4">Avery</h2>
            </div>

            <div className="max-w-md">
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra in lorem at laoreet. Donec
                hendrerit libero eget est tempor, quis tempus arcu elementum. In elementum elit at dui tristique
                feugiat.
              </p>
            </div>

            <div className="flex items-center space-x-2 text-white">
              <span className="text-2xl script-text">Avery Davis</span>
              <span className="px-2">•</span>
              <span>UGC CREATOR</span>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="min-h-screen flex items-center relative overflow-hidden">
        {/* <HolographicElement className="top-20 left-10" />
        <HolographicElement className="bottom-20 right-10" /> */}

        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16 z-10 relative">
            <h1 className="text-6xl md:text-8xl neon-text tracking-tight">PORTFOLIO</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 z-10 relative">
            <div className="space-y-4">
              <div className="polaroid">
                <Image
                  src="portfolio.png"
                  alt="Portfolio Item 1"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <div className="space-y-1">
                <p className="text-sm text-white">Client: Olivia Wilson</p>
                <p className="text-sm text-white">Brief: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="text-sm text-primary">LINK TO VIDEO</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="polaroid">
                <Image
                  src="portfolioone.png"
                  alt="Portfolio Item 2"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <div className="space-y-1">
                <p className="text-sm text-white">Client: Olivia Wilson</p>
                <p className="text-sm text-white">Brief: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="text-sm text-primary">LINK TO VIDEO</p>
              </div>
            </div>
          </div>
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


      <footer className="py-6 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center text-white">
          <p> Avery Davis • UGC Creator</p>
        </div>
      </footer>
    </main>
  )
}


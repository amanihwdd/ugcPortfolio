"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#services", label: "Services" },
  { href: "#clients", label: "Clients" },
  { href: "#contact", label: "Contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-primary font-bold text-3xl script-text ">
          Avery Davis
        </Link>

        <div className="hidden md:flex space-x-6 text-3xl">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className=" script-text text-primary hover:text-[#6e89c8] transition-colors">
              {link.label}
            </Link>
          ))}
        </div>

        <button className="md:hidden text-[#6e89c8] p-2 rounded-full bg-[#ff85c2] hover:bg-primary/30 transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/10 backdrop-blur-md h-screen flex flex-col justify-center items-center">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#ff85c2] script-text text-5xl py-3 px-4 rounded-lg flex items-center justify-center"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}


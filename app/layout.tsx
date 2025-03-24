import type React from "react"
import type { Metadata } from "next"
import { Inter, Great_Vibes } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
})

export const metadata: Metadata = {
  title: "UGC Creator Portfolio",
  description: "Portfolio website for a UGC creator specializing in beauty and lifestyle content",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${greatVibes.variable} font-sans`}>{children}</body>
    </html>
  )
}



import './globals.css'
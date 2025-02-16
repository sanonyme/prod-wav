import "./globals.css"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import type React from "react"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "wav - Premium Beats",
  description: "Discover and purchase unique beats crafted by wav",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  )
}



import './globals.css'
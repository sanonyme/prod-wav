import "./globals.css"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import type React from "react"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "wav - Premium Beats",
  description: "Discover and purchase unique beats crafted by wav",
  generator: 'v0.dev',
  icons: {
    icon: [
      { url: '/favicon.jpg', type: 'image/jpeg' },
    ],
    apple: [
      { url: '/favicon.jpg', sizes: '180x180', type: 'image/jpeg' },
    ],
    other: [
      { rel: 'apple-touch-icon', url: '/favicon.jpg' },
    ],
  }
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
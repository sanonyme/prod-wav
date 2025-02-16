"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { AudioWaveformIcon as Waveform, Sliders, Mic2, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useIsMobile } from "@/hooks/use-mobile"

const services = [
  {
    icon: <Waveform className="w-8 h-8" />,
    title: "Professional Mixing",
    description: "Get your tracks mixed to industry standards, enhancing clarity and balance.",
    price: "$99",
  },
  {
    icon: <Sliders className="w-8 h-8" />,
    title: "Precision Leveling",
    description: "Achieve the perfect volume balance across all elements of your track.",
    price: "$79",
  },
  {
    icon: <Mic2 className="w-8 h-8" />,
    title: "Vocal Tuning",
    description: "Fine-tune your vocals for a polished, professional sound.",
    price: "$69",
  },
  {
    icon: <Headphones className="w-8 h-8" />,
    title: "Mastering",
    description: "Give your track that final polish for a radio-ready sound.",
    price: "$129",
  },
]

export default function MixingLevelingSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const isMobile = useIsMobile()

  return (
    <section id="mixing-leveling" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/20 to-black"></div>
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Mixing & Leveling Services</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Take your tracks to the next level with our professional mixing and leveling services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <Card
                className={`h-full ${
                  isMobile 
                    ? "border-pink-300" 
                    : hoveredCard === index 
                      ? "scale-105 border-pink-300" 
                      : "scale-100 border-white/10"
                } transition-all duration-300`}
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-zinc-400 mb-4 flex-grow">{service.description}</p>
                  <div className="text-2xl font-bold mb-4">{service.price}</div>
                  <Button asChild className="w-full bg-white text-black hover:bg-zinc-200 transition-colors">
                    <a href="https://www.beatstars.com/prodwav" target="_blank" rel="noopener noreferrer">
                      Get Started
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


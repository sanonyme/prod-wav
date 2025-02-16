"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Play, Disc3, Music2, AudioWaveformIcon as Waveform } from "lucide-react"

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const [isHovered, setIsHovered] = useState(false)

  const stats = [
    { icon: <Play className="w-6 h-6" />, label: "Beats", value: "200+" },
    { icon: <Disc3 className="w-6 h-6" />, label: "Community", value: "1.3K+" },
    { icon: <Music2 className="w-6 h-6" />, label: "Drumkits", value: "3+" },
    { icon: <Waveform className="w-6 h-6" />, label: "Genres", value: "5+" },
  ]

  return (
    <motion.section 
      ref={containerRef} 
      className="min-h-screen relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-black"></div>
      </div>

      <motion.div 
        style={{ y, opacity }} 
        className="relative pt-32 pb-16 px-4"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-7xl md:text-9xl font-bold mb-6 tracking-tight relative">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block animate-text-gradient bg-gradient-to-r from-white via-pink-300 to-white 
                bg-[size:200%] bg-clip-text text-transparent"
                style={{
                  animation: "textGradient 6s linear infinite",
                }}
              >
                wav
              </motion.span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-zinc-400 max-w-3xl mx-auto">
              Unique beats crafting, elevated drumkit selection, transcending sample packs, and a community of like-minded artists.
            </p>
            <div className="relative inline-block">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative z-10">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-zinc-200 text-lg px-8 py-6 rounded-full transition-colors relative overflow-hidden group"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  asChild
                >
                  <a href="https://youtube.com/@wav" target="_blank" rel="noopener noreferrer">
                    <span className="relative z-10">Visit YouTube</span>
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-zinc-200 to-white"
                      initial={{ x: "100%" }}
                      animate={{ x: isHovered ? "0%" : "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.span
                      animate={{ x: isHovered ? 5 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="ml-2 relative z-10"
                    >
                      →
                    </motion.span>
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-zinc-900/50 rounded-xl p-6 backdrop-blur-lg border border-white/10 transition-colors hover:border-white/20"
                >
                  <div className="mb-2 text-white/70 flex justify-center">{stat.icon}</div>
                  <motion.div
                    className="text-3xl font-bold mb-1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-zinc-400">{stat.label}</div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}


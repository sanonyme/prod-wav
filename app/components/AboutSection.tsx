"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { Headphones, Music, Mic2, Eye } from "lucide-react"

const achievements = [
  { icon: <Headphones className="w-6 h-6" />, label: "Years of Experience", value: "6+" },
  { icon: <Music className="w-6 h-6" />, label: "Tracks Produced", value: "400+" },
  { icon: <Mic2 className="w-6 h-6" />, label: "Artists Collaborated", value: "30+" },
  { icon: <Eye className="w-6 h-6" />, label: "Total Views", value: "180K+" },
]

export default function AboutSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 1, 1, 0])

  return (
    <section ref={ref} id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div className="grid md:grid-cols-2 gap-12 items-center" style={{ y, opacity }}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/0 rounded-3xl transform -rotate-6"></div>
            <Image
              src="/wavphoto.jpg"
              alt="wav"
              width={600}
              height={600}
              className="rounded-3xl relative z-10"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About{" "}
              <a 
                href="https://youtube.com/@wav" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-pink-300 hover:text-pink-400 transition-colors"
              >
                @wav
              </a>
            </h2>
            <p className="text-lg mb-6 text-zinc-300">
              Started the journey in 2018, making beats for fun and to express my creativity. Took it seriously ever since and started my youtube channel where I upload my beats, drum kits, and sample packs.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              With various collaborations with other artists, the vision got clearer, and I found my own sound and unique style. Wouldn't be possible without{" "}
              <a 
                href="https://youtube.com/@KnowItAllBeats" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-pink-300 hover:text-pink-400 transition-colors"
              >
                @Knowitall
              </a>
              {" "}and{" "}
              <a 
                href="https://youtube.com/@yz416" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-pink-300 hover:text-pink-400 transition-colors"
              >
                @yz
              </a>
              {" "}on youtube.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  className="bg-zinc-900/50 rounded-lg p-4 border border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-2">
                    <div className="mr-2 text-white">{achievement.icon}</div>
                    <div className="text-2xl font-bold">{achievement.value}</div>
                  </div>
                  <div className="text-sm text-zinc-400">{achievement.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


"use client"

import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, Send, CheckCircle } from "lucide-react"
import emailjs from '@emailjs/browser';

// Add these constants at the top of the file
const EMAILJS_SERVICE_ID = "service_gc4w9us"
const EMAILJS_TEMPLATE_ID = "template_5cagjpe"
const EMAILJS_PUBLIC_KEY = "lGPEXSis5IZP_R7xd"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          to_email: 'prod.wav44@gmail.com',
        }
      )
      
      setIsSubmitted(true)
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      console.error('Failed to send message:', error)
      alert('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <section id="contact" ref={ref} className="py-20 bg-zinc-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="container mx-auto px-4 relative z-10"
      >
        <motion.h2 variants={itemVariants} className="text-5xl font-bold mb-10 text-center text-zinc-200">
          Get in Touch
        </motion.h2>
        <motion.div
          variants={itemVariants}
          className="max-w-md mx-auto bg-black/50 backdrop-blur-lg rounded-lg p-8 shadow-2xl border border-white/10"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full bg-zinc-900 border border-white/10 focus:border-pink-300 rounded-lg p-4 outline-none transition-colors"
              disabled={isSubmitting || isSubmitted}
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full bg-zinc-900 border border-white/10 focus:border-pink-300 rounded-lg p-4 outline-none transition-colors"
              disabled={isSubmitting || isSubmitted}
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={6}
              required
              className="w-full bg-zinc-900 border border-white/10 focus:border-pink-300 rounded-lg p-4 outline-none transition-colors"
              disabled={isSubmitting || isSubmitted}
            />
            <Button
              type="submit"
              className="w-full bg-white text-black hover:bg-zinc-200 transition-colors relative overflow-hidden group"
              disabled={isSubmitting || isSubmitted}
            >
              <span className="relative z-10 flex items-center justify-center">
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin mr-2" size={18} />
                    Sending...
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="mr-2" size={18} />
                    Sent!
                  </>
                ) : (
                  <>
                    <Send className="mr-2" size={18} />
                    Send Message
                  </>
                )}
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-zinc-200 to-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  )
}


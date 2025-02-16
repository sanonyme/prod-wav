"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-black" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center">
          <div className="w-32">
            <Link href="/" className="text-3xl font-bold tracking-tighter">
              wav
            </Link>
          </div>
          <nav className="hidden md:block flex-1">
            <ul className="flex justify-center space-x-12">
              <li>
                <Link href="#beats" className="hover:text-pink-300 transition-colors">
                  Beats
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-pink-300 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-pink-300 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="w-32 flex justify-end items-center ml-auto">
            <AnimatePresence>
              {isMenuOpen && (
                <motion.nav
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute md:hidden top-full right-0 w-full bg-black"
                >
                  <ul className="flex flex-col space-y-4 p-4">
                    <li>
                      <Link href="#beats" className="hover:text-pink-300 transition-colors" onClick={() => setIsMenuOpen(false)}>
                        Beats
                      </Link>
                    </li>
                    <li>
                      <Link href="#about" className="hover:text-pink-300 transition-colors" onClick={() => setIsMenuOpen(false)}>
                        About
                      </Link>
                    </li>
                    <li>
                      <Link href="#contact" className="hover:text-pink-300 transition-colors" onClick={() => setIsMenuOpen(false)}>
                        Contact
                      </Link>
                    </li>
                  </ul>
                </motion.nav>
              )}
            </AnimatePresence>
            <div className="md:hidden">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative w-10 h-10 flex items-center justify-center"
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0, rotate: 90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}


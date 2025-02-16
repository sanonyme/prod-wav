"use client"
import { useEffect } from "react"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import LicenseOptionsSection from "./components/LicenseOptionsSection"
import AboutSection from "./components/AboutSection"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"
import MixingLevelingSection from "./components/MixingLevelingSection"
import NoiseOverlay from "./components/NoiseOverlay"

export default function Home() {
  // const [beats, setBeats] = useState([])

  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0)
  }, [])

  // useEffect(() => {
  //   // In a real scenario, you'd fetch this data from the BeatStars API
  //   // For this example, we'll use mock data
  //   setBeats([
  //     { id: "1", name: "Urban Groove", audio: "/placeholder.mp3" },
  //     { id: "2", name: "Chill Vibes", audio: "/placeholder.mp3" },
  //     { id: "3", name: "Trap Fusion", audio: "/placeholder.mp3" },
  //   ])
  // }, [])

  return (
    <div className="min-h-screen text-white relative">
      <NoiseOverlay />
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-4">
          <HeroSection />
          <LicenseOptionsSection />
          <MixingLevelingSection />
          <AboutSection />
          <ContactSection />
        </main>
        <Footer />
        {/* <FloatingPlayer beats={beats} /> */}
      </div>
    </div>
  )
}


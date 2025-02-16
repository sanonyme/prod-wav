import { Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black py-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-400 mb-4 md:mb-0">&copy; 2025 wav. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/samychemaly/" className="text-zinc-400 hover:text-white transition-colors">
              <Instagram />
            </a>
            <a href="https://youtube.com/@wav" className="text-zinc-400 hover:text-white transition-colors">
              <Youtube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
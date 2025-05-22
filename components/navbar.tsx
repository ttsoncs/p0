"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: offsetTop - 80, // Adjust for navbar height
        behavior: "smooth",
      })
    }
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/80 backdrop-blur-md border-b border-gray-800" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex-shrink-0">
              <Link href="/" className="text-white font-bold text-lg md:text-xl">
                Julius Gehrig
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("experience")}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Experience
                </button>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Skills
                </button>
                <button
                  onClick={() => scrollToSection("education")}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Education
                </button>
                <Link
                  href="#"
                  className="px-4 py-2 bg-black border border-gray-800 rounded-full hover:bg-gray-900 transition-colors text-sm"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-300 hover:text-white focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 pt-16 md:hidden">
          <div className="px-4 py-6 space-y-6">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-gray-300 hover:text-white transition-colors py-2 text-lg"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="block w-full text-left text-gray-300 hover:text-white transition-colors py-2 text-lg"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="block w-full text-left text-gray-300 hover:text-white transition-colors py-2 text-lg"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className="block w-full text-left text-gray-300 hover:text-white transition-colors py-2 text-lg"
            >
              Education
            </button>
            <Link
              href="#"
              className="block w-full text-center px-4 py-2 bg-black border border-gray-800 rounded-full hover:bg-gray-900 transition-colors text-lg"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

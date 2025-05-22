"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function FloatingMenu() {
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const handleScroll = () => {
      // Determine active section based on scroll position
      const scrollPosition = window.scrollY + window.innerHeight / 2

      // Get all sections and their positions
      const aboutSection = document.getElementById("about")
      const experienceSection = document.getElementById("experience")
      const skillsSection = document.getElementById("skills")

      if (aboutSection && experienceSection && skillsSection) {
        const aboutTop = aboutSection.offsetTop
        const experienceTop = experienceSection.offsetTop
        const skillsTop = skillsSection.offsetTop
        const skillsBottom = skillsSection.offsetTop + skillsSection.offsetHeight

        // Set active section based on scroll position
        if (scrollPosition < experienceTop) {
          setActiveSection("about")
        } else if (scrollPosition >= experienceTop && scrollPosition < skillsTop) {
          setActiveSection("experience")
        } else if (scrollPosition >= skillsTop && scrollPosition <= skillsBottom) {
          setActiveSection("skills")
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    // Initial check
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: offsetTop - 20,
        behavior: "smooth",
      })
      setActiveSection(id)
    }
  }

  return (
    <div className="fixed left-1/2 bottom-6 z-50 transform -translate-x-1/2">
      <motion.div
        className="bg-black/80 backdrop-blur-md border border-gray-800 shadow-lg overflow-hidden rounded-[30px]"
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        <div className="flex items-center px-5 sm:px-7 py-3 gap-4">
          <motion.button
            initial={false}
            onClick={(e) => {
              e.stopPropagation()
              scrollToSection("about")
            }}
            className={`transition-colors px-1 py-1 font-medium ${
              activeSection === "about" ? "text-white" : "text-gray-500"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-sm">About</span>
          </motion.button>

          <motion.button
            initial={false}
            onClick={(e) => {
              e.stopPropagation()
              scrollToSection("experience")
            }}
            className={`transition-colors px-1 py-1 font-medium ${
              activeSection === "experience" ? "text-white" : "text-gray-500"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-sm">Work</span>
          </motion.button>

          <motion.button
            initial={false}
            onClick={(e) => {
              e.stopPropagation()
              scrollToSection("skills")
            }}
            className={`transition-colors px-1 py-1 font-medium ${
              activeSection === "skills" ? "text-white" : "text-gray-500"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-sm">Skills</span>
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}

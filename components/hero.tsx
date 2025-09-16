"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    setIsLoaded(true)

    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToSection = (sectionId: string) => {
    console.log("[v0] Hero: Attempting to scroll to section:", sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      const navHeight = 80 // Account for fixed navigation height
      const elementPosition = element.offsetTop - navHeight

      console.log("[v0] Hero: Element found, scrolling to position:", elementPosition)

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    } else {
      console.log("[v0] Hero: Element not found:", sectionId)
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-animated animate-gradient relative overflow-hidden pt-20"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-80 h-80 bg-accent/15 animate-morphing-blob"
          style={{
            transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.03}px)`,
          }}
        ></div>
        <div
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-accent/8 animate-morphing-blob animate-delay-300"
          style={{
            transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * 0.04}px)`,
          }}
        ></div>
        <div
          className="absolute top-1/2 left-3/4 w-60 h-60 bg-accent/12 animate-morphing-blob animate-delay-600"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * -0.02}px)`,
          }}
        ></div>

        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-3 h-3 bg-accent/30 animate-particle-float animate-delay-${(i + 1) * 100}`}
            style={{
              left: `${10 + i * 8}%`,
              top: `${20 + (i % 3) * 25}%`,
              transform: `translate(${mousePosition.x * (0.01 + i * 0.002)}px, ${mousePosition.y * (0.01 + i * 0.003)}px)`,
              borderRadius: i % 3 === 0 ? "50%" : i % 3 === 1 ? "0%" : "25%",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1
            className={`text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance animate-text-glow ${isLoaded ? "animate-slide-reveal" : "opacity-0"}`}
            style={{
              transform: `perspective(1000px) rotateX(${mousePosition.y * 0.01}deg) rotateY(${mousePosition.x * 0.01}deg)`,
            }}
          >
            Vinayak Arya
          </h1>
          <p
            className={`text-xl md:text-2xl text-muted-foreground mb-8 text-balance ${isLoaded ? "animate-bounce-in animate-delay-200" : "opacity-0"}`}
          >
            Full Stack Developer & AI Enthusiast
          </p>
          <p
            className={`text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty ${isLoaded ? "animate-slide-reveal animate-delay-300" : "opacity-0"}`}
          >
            Passionate about building innovative web applications and AI-powered solutions. Specializing in React,
            Next.js, Python, and modern development practices.
          </p>

          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 ${isLoaded ? "animate-bounce-in animate-delay-400" : "opacity-0"}`}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground hover-lift-extreme transform transition-all duration-500 hover:shadow-2xl"
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="glass-morphism hover-lift-extreme transform transition-all duration-500"
            >
              Get In Touch
            </Button>
          </div>

          <div
            className={`flex items-center justify-center gap-6 mb-12 ${isLoaded ? "animate-bounce-in animate-delay-500" : "opacity-0"}`}
          >
            <a
              href="https://github.com/vinayakarya02"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-all duration-500 hover:scale-125 transform hover:rotate-12 hover-glow"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:aryavinayak275@gmail.com?subject=Hello%20Vinayak&body=Hi%20Vinayak,%0A%0AI%20would%20like%20to%20get%20in%20touch%20with%20you."
              onClick={() => {
                console.log("[v0] Hero: Mail button clicked")
                // Fallback for systems without default mail client
                if (!window.location.href.includes("mailto:")) {
                  console.log("[v0] Hero: Opening mailto link")
                }
              }}
              className="text-muted-foreground hover:text-accent transition-all duration-500 hover:scale-125 transform hover:rotate-[-12deg] hover-glow"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://linkedin.com/in/vinayakarya02"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-all duration-500 hover:scale-125 transform hover:rotate-12 hover-glow"
            >
              <Linkedin size={24} />
            </a>
          </div>

          <div className="animate-bounce">
            <button
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-accent transition-all duration-500 hover:scale-110 transform hover-glow"
              aria-label="Scroll to about section"
            >
              <ChevronDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

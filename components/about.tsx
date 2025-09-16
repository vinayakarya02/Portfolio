"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-animated animate-gradient relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-10 left-10 w-32 h-32 border-2 border-accent/20 animate-morphing-blob"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.03}px)`,
          }}
        ></div>
        <div
          className="absolute top-40 right-20 w-24 h-24 border-2 border-accent/30 animate-morphing-blob animate-delay-400"
          style={{
            transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * 0.02}px)`,
          }}
        ></div>
        <div
          className="absolute bottom-20 left-1/4 w-20 h-20 border-2 border-accent/25 animate-morphing-blob animate-delay-700"
          style={{
            transform: `translate(${mousePosition.x * 0.04}px, ${mousePosition.y * -0.02}px)`,
          }}
        ></div>

        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-accent/20 animate-particle-float animate-delay-${(i + 1) * 150}`}
            style={{
              left: `${15 + i * 12}%`,
              top: `${25 + (i % 4) * 20}%`,
              transform: `translate(${mousePosition.x * (0.01 + i * 0.003)}px, ${mousePosition.y * (0.01 + i * 0.002)}px)`,
              borderRadius: i % 2 === 0 ? "50%" : "0%",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2
            className={`text-3xl md:text-4xl font-bold text-center mb-12 text-balance animate-text-glow transition-all duration-1000 ${
              isVisible ? "animate-slide-reveal" : "opacity-0 translate-x-[-100px]"
            }`}
          >
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className={`transition-all duration-1000 ${isVisible ? "animate-bounce-in" : "opacity-0 scale-50"}`}>
              <Card
                className="hover-lift-extreme hover-glow glass-morphism transition-all duration-700 parallax-element"
                style={{
                  transform: `perspective(1000px) rotateX(${mousePosition.y * 0.02}deg) rotateY(${mousePosition.x * 0.02}deg)`,
                }}
              >
                <CardContent className="p-8">
                  <div className="w-32 h-32 bg-gradient-to-br from-accent/30 to-accent/10 animate-morphing-blob mx-auto mb-6 flex items-center justify-center relative overflow-hidden group">
                    <span className="text-4xl font-bold text-accent transition-all duration-500 group-hover:scale-125 transform animate-text-glow">
                      VA
                    </span>
                    <div className="absolute inset-0 bg-accent/5 blur-xl group-hover:bg-accent/20 transition-all duration-500 animate-particle-float"></div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div
              className={`space-y-6 transition-all duration-1000 ${
                isVisible ? "animate-slide-reveal animate-delay-300" : "opacity-0 translate-x-[100px]"
              }`}
            >
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed hover:text-foreground/90 transition-colors duration-300">
                I'm a passionate full-stack developer with a strong focus on creating innovative web applications and
                AI-powered solutions. My journey in technology spans across modern web development, machine learning,
                and intelligent system design.
              </p>

              <p className="text-lg text-muted-foreground text-pretty leading-relaxed hover:text-foreground/90 transition-colors duration-300">
                With expertise in React, Next.js, TypeScript, Python, and various AI frameworks, I enjoy tackling
                complex problems and building solutions that make a real impact. I'm particularly interested in the
                intersection of web development and artificial intelligence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

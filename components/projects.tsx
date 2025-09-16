"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Play } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const projects = [
  {
    title: "Xeno CRM Platform",
    description:
      "A modern Customer Relationship Management platform with AI-powered customer segmentation, personalized campaign delivery, and intelligent insights. Built for the Xeno SDE Internship Assignment 2025.",
    tech: ["Next.js", "TypeScript", "React", "AI Integration", "CRM"],
    github: "https://github.com/vinayakarya02/Xeno",
    live: "#", // Placeholder for live demo
    featured: true,
  },
  {
    title: "AI Voice Agent",
    description:
      "A conversational AI agent that understands Hindi voice input and responds intelligently like ChatGPT/Gemini, with conversation memory and bilingual support.",
    tech: ["Python", "AI/ML", "Voice Recognition", "Google Gemini"],
    github: "https://github.com/vinayakarya02/AI-Agent",
    live: "#", // Placeholder for live demo
    featured: true,
  },
  {
    title: "Market Analysis Platform",
    description:
      "A Multi-Agent workflow that researches industries/companies, proposes AI/GenAI use cases, gathers datasets/resources, and generates comprehensive proposals.",
    tech: ["Python", "Streamlit", "AI Agents", "Market Research"],
    github: "https://github.com/vinayakarya02/Market-Analysis",
    live: "#", // Placeholder for live demo
    featured: true,
  },
  {
    title: "Travel Planner",
    description:
      "A comprehensive travel planning application built with React and modern web technologies, helping users organize and plan their trips efficiently.",
    tech: ["React", "JavaScript", "CSS", "Travel Planning"],
    github: "#", // Placeholder for GitHub link
    live: "#", // Placeholder for live demo
    featured: false,
  },
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with user authentication, product catalog, shopping cart, payment integration, and admin dashboard for inventory management.",
    tech: ["Node.js", "Express", "MongoDB", "React", "Stripe API"],
    github: "#", // Placeholder for GitHub link
    live: "#", // Placeholder for live demo
    featured: false,
  },
  {
    title: "Task Management System",
    description:
      "A collaborative task management application with real-time updates, team collaboration features, deadline tracking, and progress visualization.",
    tech: ["Vue.js", "Firebase", "Real-time DB", "PWA"],
    github: "#", // Placeholder for GitHub link
    live: "#", // Placeholder for live demo
    featured: false,
  },
  {
    title: "Weather Analytics Dashboard",
    description:
      "Interactive weather dashboard with data visualization, historical weather patterns, forecasting, and location-based weather alerts using external APIs.",
    tech: ["React", "D3.js", "Weather API", "Chart.js"],
    github: "#", // Placeholder for GitHub link
    live: "#", // Placeholder for live demo
    featured: false,
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio website showcasing projects, skills, and experience with modern design, smooth animations, and responsive layout.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "#", // Placeholder for GitHub link
    live: "#", // Placeholder for live demo
    featured: false,
  },
]

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleCards, setVisibleCards] = useState<number[]>([])
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
          projects.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards((prev) => [...prev, index])
            }, index * 200)
          })
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-animated animate-gradient relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 right-1/4 w-60 h-60 bg-accent/10 animate-morphing-blob"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        ></div>
        <div
          className="absolute bottom-20 left-1/4 w-80 h-80 bg-accent/5 animate-morphing-blob animate-delay-500"
          style={{
            transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * 0.01}px)`,
          }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-40 h-40 bg-accent/8 animate-particle-float"
          style={{
            transform: `translate(-50%, -50%) translate(${mousePosition.x * 0.01}px, ${mousePosition.y * -0.02}px)`,
          }}
        ></div>

        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-4 h-4 bg-accent/20 animate-particle-float animate-delay-${(i + 1) * 100}`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              transform: `translate(${mousePosition.x * (0.01 + i * 0.005)}px, ${mousePosition.y * (0.01 + i * 0.003)}px)`,
              borderRadius: i % 2 === 0 ? "50%" : "0%",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2
            className={`text-3xl md:text-4xl font-bold text-center mb-12 text-balance transition-all duration-1000 animate-text-glow ${
              isVisible ? "animate-slide-reveal" : "opacity-0 translate-x-[-100px]"
            }`}
          >
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`group hover-lift-extreme hover-glow parallax-element glass-morphism transition-all duration-700 ${
                  project.featured ? "md:col-span-2 lg:col-span-1" : ""
                } ${visibleCards.includes(index) ? "animate-bounce-in opacity-100" : "opacity-0 scale-50"}`}
                style={{
                  animationDelay: `${index * 200}ms`,
                  transform: `perspective(1000px) rotateX(${mousePosition.y * 0.01}deg) rotateY(${mousePosition.x * 0.01}deg)`,
                }}
              >
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-accent transition-all duration-500 group-hover:scale-110 transform-gpu animate-text-glow">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-pretty leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        className={`badge-enhanced hover:scale-110 transform-gpu animate-bounce-in animate-delay-${techIndex * 100} transition-all duration-300 cursor-default`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      asChild
                      className="flex-1 button-enhanced hover:scale-110 transform-gpu hover:rotate-1 transition-all duration-500"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    </Button>

                    <Button
                      size="sm"
                      asChild
                      className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-500 hover:scale-110 transform-gpu hover:rotate-[-1deg] hover:shadow-2xl"
                    >
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Play size={16} />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

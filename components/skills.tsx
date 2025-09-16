"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useEffect, useRef, useState } from "react"
import { Code, Database, Brain, Globe, Server, Smartphone } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Globe className="w-6 h-6" />,
    color: "bg-blue-500/10 text-blue-600 border-blue-200",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS", "Responsive Design"],
  },
  {
    title: "Backend Development",
    icon: <Server className="w-6 h-6" />,
    color: "bg-green-500/10 text-green-600 border-green-200",
    skills: ["Python", "Node.js", "API Development", "Database Design", "Authentication", "RESTful APIs"],
  },
  {
    title: "AI & Machine Learning",
    icon: <Brain className="w-6 h-6" />,
    color: "bg-purple-500/10 text-purple-600 border-purple-200",
    skills: ["Machine Learning", "AI Integration", "Data Analysis", "Python Libraries", "Model Training"],
  },
  {
    title: "Development Tools",
    icon: <Code className="w-6 h-6" />,
    color: "bg-orange-500/10 text-orange-600 border-orange-200",
    skills: ["Git/GitHub", "Vercel", "Deployment", "CI/CD", "Testing", "Code Review"],
  },
  {
    title: "Databases",
    icon: <Database className="w-6 h-6" />,
    color: "bg-cyan-500/10 text-cyan-600 border-cyan-200",
    skills: ["SQL", "NoSQL", "Database Optimization", "Data Modeling", "Query Design"],
  },
  {
    title: "Frameworks & Libraries",
    icon: <Smartphone className="w-6 h-6" />,
    color: "bg-pink-500/10 text-pink-600 border-pink-200",
    skills: ["Streamlit", "FastAPI", "Express.js", "React Native", "Material-UI", "Chakra UI"],
  },
]

export function Skills() {
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
    <section ref={sectionRef} id="skills" className="py-20 bg-animated animate-gradient relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-4 h-4 bg-accent/20 animate-particle-float animate-delay-${(i + 1) * 200}`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
              transform: `translate(${mousePosition.x * (0.02 + i * 0.005)}px, ${mousePosition.y * (0.01 + i * 0.003)}px)`,
              borderRadius: i % 3 === 0 ? "50%" : i % 3 === 1 ? "0%" : "25%",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2
            className={`text-3xl md:text-4xl font-bold text-center mb-4 text-balance animate-text-glow transition-all duration-1000 ${
              isVisible ? "animate-slide-reveal" : "opacity-0 translate-y-[50px]"
            }`}
          >
            Skills & Expertise
          </h2>

          <p
            className={`text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto transition-all duration-1000 ${
              isVisible ? "animate-bounce-in animate-delay-200" : "opacity-0 scale-50"
            }`}
          >
            A comprehensive toolkit for building modern, scalable applications
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className={`hover-lift-extreme hover-glow glass-morphism transition-all duration-700 parallax-element ${
                  isVisible ? `animate-bounce-in animate-delay-${(index + 1) * 100}` : "opacity-0 scale-50"
                }`}
                style={{
                  transform: `perspective(1000px) rotateX(${mousePosition.y * 0.01}deg) rotateY(${mousePosition.x * 0.01}deg)`,
                }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg ${category.color}`}>{category.icon}</div>
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="hover:scale-105 transition-transform duration-200 cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
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

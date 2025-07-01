"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Download, Mail, ExternalLink, Github, Linkedin } from "lucide-react"
import { name, roles, socialLinks } from "@/lib/personal-data"

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0)
  const [isRoleVisible, setIsRoleVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsRoleVisible(false)
      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length)
        setIsRoleVisible(true)
      }, 500) // Fade-out duration
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 text-center animate-fade-in-up">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
              {name}
            </span>
          </h1>

          <div className="h-16 flex items-center justify-center">
            <h2
              className={`text-2xl md:text-3xl text-muted-foreground font-medium transition-opacity duration-500 ${
                isRoleVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              {roles[currentRole]}
            </h2>
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            I build real-world web & desktop applications using{" "}
            <span className="text-primary font-semibold">Laravel</span>,{" "}
            <span className="text-primary font-semibold">Next JS</span>,{" "}
            <span className="text-primary font-semibold">Go</span>, and modern web tools.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            asChild
            size="lg"
            className="modern-card bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700"
          >
            <a href="#projects">
              <ExternalLink className="mr-2 h-5 w-5" />
              View Projects
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="modern-card">
            <a href="#resume">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            className="modern-card bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
          >
            <a href="#contact">
              <Mail className="mr-2 h-5 w-5" />
              Hire Me
            </a>
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          <a
            href={socialLinks.github}
            className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all duration-300 modern-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href={socialLinks.linkedin}
            className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all duration-300 modern-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href={socialLinks.email}
            className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all duration-300 modern-card"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <a href="#about">
            <ArrowDown className="h-8 w-8 text-muted-foreground mx-auto" />
          </a>
        </div>
      </div>
    </section>
  )
}

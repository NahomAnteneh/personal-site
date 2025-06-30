"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-muted/50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Nahom Anteneh
            </h3>
            <p className="text-muted-foreground mb-4">
              Full-Stack Developer passionate about building practical solutions with modern web technologies.
            </p>
            <Button onClick={scrollToTop} variant="outline" size="sm">
              <ArrowUp className="mr-2 h-4 w-4" />
              Back to Top
            </Button>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("resume")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Resume
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </li>
              <li>
                <Link
                  href="/MyCV.pdf"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/NahomAnteneh"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Profile
                </Link>
              </li>
              <li>
                <Link
                  href="https://linkedin.com/in/nah0m"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn Profile
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <Link
                href="https://github.com/NahomAnteneh"
                className="text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/in/nah0m"
                className="text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:nahom.anteneh.ti@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">Available for freelance work</p>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Nahom Anteneh. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm mt-2 md:mt-0">Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}

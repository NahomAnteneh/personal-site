"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { useScrollSpy } from "@/hooks/use-scroll-spy"

const navigation = [
  { name: "Home", href: "home" },
  { name: "About", href: "about" },
  { name: "Projects", href: "projects" },
  { name: "Resume", href: "resume" },
  { name: "Contact", href: "contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const pathname = usePathname()
  const sectionIds = navigation.map((item) => item.href)
  const activeSection = useScrollSpy(sectionIds, 100) // Offset for better accuracy

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setScrollProgress(progress)
    }

    if (pathname === "/") {
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [pathname])

  const handleNavClick = (href: string) => {
    const element = document.getElementById(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setIsOpen(false)
  }

  const isHomePage = pathname === "/"

  return (
    <>
      {isHomePage && <div className="scroll-indicator" style={{ transform: `scaleX(${scrollProgress / 100})` }} />}

      <nav className="fixed top-0 w-full z-50 glass backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={() => handleNavClick("home")}
              className="font-bold text-xl bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent hover:from-emerald-600 hover:to-teal-700 transition-all duration-300"
            >
              Nahom Anteneh
            </button>

            <div className="hidden md:flex items-center space-x-1">
              {navigation.map((item) => {
                const isActive = isHomePage && activeSection === item.href

                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-lg scale-105"
                        : "text-muted-foreground hover:text-primary hover:bg-muted hover:scale-105"
                    }`}
                  >
                    {item.name}
                  </button>
                )
              })}
              <div className="ml-4 pl-4 border-l border-border">
                <ThemeToggle />
              </div>
            </div>

            <div className="md:hidden flex items-center space-x-3">
              <ThemeToggle />
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="w-9 h-9">
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {isOpen && (
            <div className="md:hidden glass backdrop-blur-md rounded-lg m-4 p-4 border border-border/50 shadow-lg">
              <div className="space-y-2">
                {navigation.map((item) => {
                  const isActive = isHomePage && activeSection === item.href

                  return (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item.href)}
                      className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                        isActive
                          ? "bg-primary text-primary-foreground shadow-md"
                          : "text-muted-foreground hover:text-primary hover:bg-muted"
                      }`}
                    >
                      {item.name}
                    </button>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}
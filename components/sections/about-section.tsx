"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code, Heart, Globe, Lightbulb, Target, Users, ArrowRight, Download } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate developer from Ethiopia with a love for creating practical solutions that make a difference
          </p>
        </div>

        {/* Photo and Personal Story */}
        <div className="mb-16 animate-fade-in-up">
          <Card className="modern-card glass">
            <CardContent className="p-8 md:p-12">
              <div className="max-w-5xl mx-auto">
                <div className="grid lg:grid-cols-3 gap-12 items-center">
                  {/* Photo Section */}
                  <div className="lg:col-span-1 flex justify-center">
                    <div className="relative">
                      {/* Decorative background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl transform rotate-6"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl transform -rotate-3"></div>

                      {/* Main photo container */}
                      <div className="relative w-64 h-80 rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                        <Image
                          src="nahom.png"
                          alt="Nahom Anteneh - Full Stack Developer"
                          fill
                          className="object-cover"
                          priority
                        />
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>

                      {/* Floating elements */}
                      <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-float"></div>
                      <div
                        className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-float"
                        style={{ animationDelay: "1s" }}
                      ></div>
                      <div
                        className="absolute top-1/2 -left-6 w-4 h-4 bg-pink-500 rounded-full animate-float"
                        style={{ animationDelay: "2s" }}
                      ></div>
                    </div>
                  </div>

                  {/* Story Section */}
                  <div className="lg:col-span-2">
                    <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
                      My Story
                    </h3>
                    <div className="text-lg leading-relaxed space-y-6">
                      <p>
                        Hi! I'm Nahom, a passionate full-stack developer who believes technology should
                        solve real problems and make life better for people. My journey into programming started during
                        my Computer Science studies at Bahir Dar University, where I discovered the power of code to
                        transform ideas into reality.
                      </p>
                      <p>
                        What drives me is the intersection of technology and social impact. As a{" "}
                        <span className="font-semibold text-primary">Hult Prize 2025 finalist</span>, I've learned to
                        think beyond just writing code – I focus on building solutions that address real-world
                        challenges, especially in emerging markets like Ethiopia.
                      </p>
                      <p>
                        When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source
                        projects, or mentoring fellow developers. I believe in continuous learning and sharing knowledge
                        with the community.
                      </p>
                    </div>
                    <div className="mt-8 flex gap-4">
                      <Button onClick={() => scrollToSection("resume")}>
                        <Download className="mr-2 h-4 w-4" />
                        View Resume
                      </Button>
                      <Button variant="outline" onClick={() => scrollToSection("projects")}>
                        View Projects
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* What I Do */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="animate-fade-in-left">
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Code className="h-6 w-6 mr-3 text-blue-500" />
              What I Do
            </h3>
            <div className="space-y-6">
              <Card className="modern-card glass">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="p-3 rounded-full gradient-bg-1 mr-4 mt-1">
                      <Globe className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Web Development</h4>
                      <p className="text-muted-foreground">
                        Building modern, responsive web applications using Laravel, Vue.js, React, and Next.js. I focus
                        on creating user-friendly interfaces with robust backend systems.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="modern-card glass">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="p-3 rounded-full gradient-bg-2 mr-4 mt-1">
                      <Target className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Desktop Applications</h4>
                      <p className="text-muted-foreground">
                        Creating desktop solutions for specific business needs, like the appointment scheduling system I
                        built for Felegehiwot General Hospital's psychiatry ward.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="modern-card glass">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="p-3 rounded-full gradient-bg-3 mr-4 mt-1">
                      <Lightbulb className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">System Architecture</h4>
                      <p className="text-muted-foreground">
                        Designing scalable system architectures and APIs that can grow with your business needs. I love
                        solving complex technical challenges with elegant solutions.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Values & Approach */}
          <div className="animate-fade-in-right">
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Heart className="h-6 w-6 mr-3 text-red-500" />
              My Values & Approach
            </h3>
            <div className="space-y-6">
              <Card className="modern-card glass">
                <CardContent className="p-6">
                  <h4 className="font-bold text-lg mb-3 text-green-600">Problem-First Thinking</h4>
                  <p className="text-muted-foreground">
                    I don't just write code – I solve problems. Every project starts with understanding the real need
                    and crafting the most effective solution.
                  </p>
                </CardContent>
              </Card>

              <Card className="modern-card glass">
                <CardContent className="p-6">
                  <h4 className="font-bold text-lg mb-3 text-blue-600">Clean & Maintainable Code</h4>
                  <p className="text-muted-foreground">
                    I believe in writing code that's not just functional, but also clean, well-documented, and easy for
                    other developers to understand and maintain.
                  </p>
                </CardContent>
              </Card>

              <Card className="modern-card glass">
                <CardContent className="p-6">
                  <h4 className="font-bold text-lg mb-3 text-purple-600">Continuous Learning</h4>
                  <p className="text-muted-foreground">
                    Technology evolves rapidly, and so do I. I'm always exploring new tools, frameworks, and best
                    practices to deliver better solutions.
                  </p>
                </CardContent>
              </Card>

              <Card className="modern-card glass">
                <CardContent className="p-6">
                  <h4 className="font-bold text-lg mb-3 text-orange-600">Community Impact</h4>
                  <p className="text-muted-foreground">
                    I'm passionate about using technology to create positive change, especially in developing
                    communities like Ethiopia.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Current Focus */}
        <div className="mb-16 animate-fade-in-up">
          <Card className="modern-card glass border-blue-200 dark:border-blue-800">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center justify-center">
                  <Users className="h-6 w-6 mr-3 text-blue-500" />
                  Currently Focused On
                </h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full gradient-bg-1 mx-auto mb-4 flex items-center justify-center">
                    <Code className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-bold mb-2">Open Source</h4>
                  <p className="text-sm text-muted-foreground">
                    Contributing to open-source projects and building tools for the developer community
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full gradient-bg-2 mx-auto mb-4 flex items-center justify-center">
                    <Lightbulb className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-bold mb-2">Innovation</h4>
                  <p className="text-sm text-muted-foreground">
                    Exploring AI integration and modern web technologies to build next-gen applications
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full gradient-bg-3 mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                    <h4 className="font-bold mb-2">Working with Friends</h4>
                    <p className="text-sm text-muted-foreground">
                    Collaborating with friends and peers to build impactful projects together
                    </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tech Stack with CTA */}
        <Card className="modern-card glass animate-fade-in-up">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
              Technologies I Love Working With
            </h3>

            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div className="text-center">
                <h4 className="text-lg font-semibold mb-4 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full gradient-bg-1 mr-3"></div>
                  Backend
                </h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {["Laravel", "PHP", "Go", "MySQL"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="modern-card">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <h4 className="text-lg font-semibold mb-4 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full gradient-bg-2 mr-3"></div>
                  Frontend
                </h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {["Vue.js", "React", "Next.js", "Tailwind"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="modern-card">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <h4 className="text-lg font-semibold mb-4 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full gradient-bg-3 mr-3"></div>
                  Tools
                </h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {["Git", "Docker", "Linux", "AWS"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="modern-card">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <h4 className="text-lg font-semibold mb-4 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full gradient-bg-4 mr-3"></div>
                  Learning
                </h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {["Rust", "AI/ML", "Blockchain", "Mobile"].map((skill) => (
                    <Badge key={skill} variant="outline" className="modern-card">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-teal-600"
              >
                Let's Work Together
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Calendar, MapPin, Award, Briefcase, GraduationCap, ArrowRight, Mail } from "lucide-react"

export function ResumeSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="resume" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Resume</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            My professional journey, education, and achievements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700"
            >
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                Download PDF Resume
              </a>
            </Button>
            <Button variant="outline" size="lg" onClick={() => scrollToSection("contact")}>
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Experience */}
          <div className="animate-fade-in-left">
            <Card className="modern-card glass">
              <CardContent className="p-8">
                <div className="flex items-center mb-8">
                  <div className="p-3 rounded-full gradient-bg-2 mr-4">
                    <Briefcase className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Experience</h3>
                </div>

                <div className="relative pl-8 border-l-2 border-green-200 dark:border-green-800">
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-green-500"></div>
                    <h4 className="text-lg font-bold">Freelance Developer</h4>
                    <p className="text-primary font-semibold">Self-Employed</p>
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>2024 - Present</span>
                    </div>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Built custom web applications for local businesses</li>
                      <li>• Developed desktop applications for healthcare sector</li>
                      <li>• Provided technical consulting and system architecture</li>
                    </ul>
                  </div>

                {/* <div className="space-y-8">
                  <div className="relative pl-8 border-l-2 border-blue-200 dark:border-blue-800">
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                    <h4 className="text-lg font-bold">Software Development Intern</h4>
                    <p className="text-primary font-semibold">Awash Bank</p>
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="mr-4">2024</span>
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>Addis Ababa, Ethiopia</span>
                    </div>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Developed internal banking systems using modern web technologies</li>
                      <li>• Collaborated with senior developers on critical financial applications</li>
                      <li>• Gained experience in enterprise software development practices</li>
                      <li>• Worked with secure coding practices for financial systems</li>
                    </ul>
                  </div>
                </div> */}

                <Button variant="ghost" onClick={() => scrollToSection("projects")} className="mt-6 w-full">
                  View My Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Education & Awards */}
          <div className="space-y-8 animate-fade-in-right">
            <Card className="modern-card glass">
              <CardContent className="p-8">
                <div className="flex items-center mb-8">
                  <div className="p-3 rounded-full gradient-bg-1 mr-4">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Education</h3>
                </div>

                <div className="relative pl-8 border-l-2 border-purple-200 dark:border-purple-800">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-purple-500"></div>
                  <h4 className="text-lg font-bold">Bachelor of Science in Computer Science</h4>
                  <p className="text-primary font-semibold">Bahir Dar University</p>
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-4">2021 - 2025</span>
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>Bahir Dar, Ethiopia</span>
                  </div>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Strong foundation in software engineering, algorithms and Artificial Intelligene</li>
                    <li>• Completed projects in web development and mobile applications</li>
                    <li>• Studied system design, database management, and computer networks</li>
                    <li>• Participated in coding competitions and hackathons</li>
                  </ul>
                </div>

                <Button variant="ghost" onClick={() => scrollToSection("about")} className="mt-6 w-full">
                  Learn More About Me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="modern-card glass">
              <CardContent className="p-8">
                <div className="flex items-center mb-8">
                  <div className="p-3 rounded-full gradient-bg-3 mr-4">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Awards & Recognition</h3>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      title: "Hult Prize 2025 Finalist",
                      description: "Global social entrepreneurship competition",
                      color: "bg-yellow-500",
                    },
                  ].map((award, index) => (
                    <div key={index} className="flex items-center">
                      <div className={`w-3 h-3 rounded-full ${award.color} mr-4`}></div>
                      <div>
                        <h4 className="font-semibold">{award.title}</h4>
                        <p className="text-sm text-muted-foreground">{award.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <Card className="modern-card glass border-green-200 dark:border-green-800 animate-fade-in-up">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-3 h-3 rounded-full bg-green-500 mr-3 animate-pulse"></div>
              <h3 className="text-2xl font-bold text-green-600 dark:text-green-400">Available for Work</h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm currently open to freelance projects and full-time opportunities. Whether you need a web application,
              desktop software, or technical consulting, I'd love to discuss how we can work together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-teal-600"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollToSection("projects")}>
                <ArrowRight className="mr-2 h-5 w-5" />
                View My Work
              </Button>
            </div>
            <div className="mt-4 text-sm text-muted-foreground">
              <p>Response time: 24-48 hours</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

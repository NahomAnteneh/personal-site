"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Calendar, MapPin, Award, Briefcase, GraduationCap, ArrowRight, Mail } from "lucide-react"
import { experience, education, awards } from "@/lib/resume-data"

export function ResumeSection() {
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
              <a href="/MyCV.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                Download PDF Resume
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </a>
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

                <div className="space-y-8">
                  {experience.map((item, index) => (
                    <div key={index} className="relative pl-8 border-l-2 border-green-200 dark:border-green-800">
                      <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-green-500"></div>
                      <h4 className="text-lg font-bold">{item.title}</h4>
                      <p className="text-primary font-semibold">{item.company}</p>
                      <div className="flex items-center text-sm text-muted-foreground mb-3">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{item.date}</span>
                      </div>
                      <ul className="text-muted-foreground space-y-1">
                        {item.description.map((point, i) => (
                          <li key={i}>• {point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <Button asChild variant="ghost" className="mt-6 w-full">
                  <a href="#projects">
                    View My Projects
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
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

                {education.map((item, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-purple-200 dark:border-purple-800">
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-purple-500"></div>
                    <h4 className="text-lg font-bold">{item.degree}</h4>
                    <p className="text-primary font-semibold">{item.institution}</p>
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="mr-4">{item.date}</span>
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{item.location}</span>
                    </div>
                    <ul className="text-muted-foreground space-y-1">
                      {item.description.map((point, i) => (
                        <li key={i}>• {point}</li>
                      ))}
                    </ul>
                  </div>
                ))}

                <Button asChild variant="ghost" className="mt-6 w-full">
                  <a href="#about">
                    Learn More About Me
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
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
                  {awards.map((award, index) => (
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
                asChild
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-teal-600"
              >
                <a href="#contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#projects">
                  <ArrowRight className="mr-2 h-5 w-5" />
                  View My Work
                </a>
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

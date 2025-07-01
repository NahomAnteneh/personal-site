"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Star, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { projects } from "@/lib/projects-data"

export function ProjectsSection() {
  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of applications and tools I've built to solve real-world problems
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <Star className="h-6 w-6 mr-2 text-yellow-500" />
            Featured Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card
                key={project.id}
                className={`modern-card glass h-full flex flex-col animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="p-0">
                  <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                    <Image
                      src={project.image || "/placeholder.jpg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-green-500 text-white">Featured</Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="flex-1 p-6 flex flex-col">
                  <h4 className="text-xl font-bold mb-3">{project.title}</h4>
                  <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 mt-auto">
                    {project.githubUrl && (
                      <Button variant="outline" size="sm" asChild className="flex-1">
                        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="modern-card glass inline-block">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4">Interested in Working Together?</h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                I'm always excited to take on new challenges and build innovative solutions. Let's discuss your project!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  className="bg-gradient-to-r from-emerald-500 to-teal-600"
                >
                  <a href="#contact">
                    Start a Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href="#resume">
                    View Resume
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

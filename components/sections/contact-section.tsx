"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle, PhoneCallIcon } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to work together? I'd love to hear about your project and discuss how I can help bring your ideas to
            life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="modern-card glass animate-fade-in-left">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
                Send a Message
              </h3>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-green-600 mb-2">Message Sent!</h4>
                  <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you soon!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name *
                      </label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="modern-card"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="modern-card"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <Input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="modern-card"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="modern-card"
                      placeholder="Tell me about your project or how I can help..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in-right">
            <Card className="modern-card glass">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
                  Let's Connect
                </h3>
                <p className="text-muted-foreground mb-8 text-lg">
                  I'm always interested in new opportunities, whether it's a freelance project, full-time position, or
                  just a chat about technology and development.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="p-3 rounded-full gradient-bg-1 mr-4">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <Link href="mailto:nahom.anteneh.ti@gmail.com" className="text-primary hover:underline">
                        nahom.anteneh.ti@gmail.com
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="p-3 rounded-full gradient-bg-2 mr-4">
                      <PhoneCallIcon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <p className="text-muted-foreground">+251963560385</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="p-3 rounded-full gradient-bg-2 mr-4">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Location</h4>
                      <p className="text-muted-foreground">Addis Ababa, Ethiopia</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="modern-card glass">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6">Social Links</h3>
                <div className="space-y-4">
                  <Link
                    href="https://github.com/NahomAnteneh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 rounded-lg glass hover:bg-muted/50 transition-colors modern-card"
                  >
                    <Github className="h-6 w-6 mr-4" />
                    <div>
                      <h4 className="font-semibold">GitHub</h4>
                      <p className="text-sm text-muted-foreground">@NahomAnteneh</p>
                    </div>
                  </Link>

                  <Link
                    href="https://linkedin.com/in/nah0m"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 rounded-lg glass hover:bg-muted/50 transition-colors modern-card"
                  >
                    <Linkedin className="h-6 w-6 mr-4" />
                    <div>
                      <h4 className="font-semibold">LinkedIn</h4>
                      <p className="text-sm text-muted-foreground">@nah0m</p>
                    </div>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="modern-card glass border-green-200 dark:border-green-800">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-3 animate-pulse"></div>
                  <h3 className="text-xl font-bold text-green-600 dark:text-green-400">Available for Work</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  I'm currently open to freelance projects and full-time opportunities. Let's discuss how we can work
                  together!
                </p>
                <div className="text-sm text-muted-foreground">
                  <p>Response time: 24-48 hours</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

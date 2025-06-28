export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  image: string
  githubUrl?: string
  liveUrl?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: "prp-web",
    title: "PRP - Project Repository Platform",
    description:
      "A comprehensive project repository platform designed for students and staff to manage, share, and collaborate on academic projects.",
    technologies: ["Next JS", "React", "Postgresql", "Tailwind CSS", "TypeScript", "Prisma"],
    image: "prp.png",
    githubUrl: "https://github.com/NahomAnteneh/prp-web",
    featured: true,
  },
  {
    id: "desktop-appointment",
    title: "Appona - Desktop Appointment Scheduler",
    description:
      "A desktop application used at Felegehiwot General Hospital's psychiatry ward for managing patient appointments and schedules.",
    technologies: ["Typescript", "Electron", "Desktop App"],
    image: "patientapp.png",
    githubUrl: "https://github.com/NahomAnteneh/patient-appointment",
    featured: true,
  },
  {
    id: "vec",
    title: "Vec - Version Control System",
    description:
      "A lightweight version control system written in Go, implementing core Git-like functionality for learning and educational purposes.",
    technologies: ["Go", "CLI", "File System", "Algorithms"],
    image: "/placeholder.svg?height=300&width=400",
    githubUrl: "https://github.com/NahomAnteneh/vec",
    featured: true,
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "This responsive portfolio website built with Next.js, showcasing projects and skills with modern design principles.",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    image: "/placeholder.svg?height=300&width=400",
    githubUrl: "https://github.com/nahom-anteneh/portfolio",
    liveUrl: "https://nahomanteneh.dev",
    featured: false,
  },
  {
    id: "api-wrapper",
    title: "REST API Wrapper Library",
    description:
      "A PHP library that simplifies API integrations with built-in caching, rate limiting, and error handling.",
    technologies: ["PHP", "Composer", "REST API", "Testing"],
    image: "/placeholder.svg?height=300&width=400",
    githubUrl: "https://github.com/nahom-anteneh/api-wrapper",
    featured: false,
  },
  {
    id: "task-manager",
    title: "Task Management System",
    description:
      "A collaborative task management application with real-time updates, team collaboration, and project tracking.",
    technologies: ["Laravel", "WebSockets", "Redis", "Vue.js"],
    image: "/placeholder.svg?height=300&width=400",
    githubUrl: "https://github.com/nahom-anteneh/task-manager",
    liveUrl: "https://task-demo.com",
    featured: false,
  },
]

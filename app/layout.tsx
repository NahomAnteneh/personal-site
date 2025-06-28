import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Nahom Anteneh - Full-Stack Developer",
    template: "%s | Nahom Anteneh",
  },
  description:
    "Full-Stack Developer & Computer Science Graduate from Ethiopia. I build real-world web & desktop applications using Laravel, Go, and modern web tools.",
  keywords: ["Full-Stack Developer", "Laravel", "Go", "React", "Vue", "Ethiopia", "Computer Science"],
  authors: [{ name: "Nahom Anteneh" }],
  creator: "Nahom Anteneh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nahomanteneh.dev",
    title: "Nahom Anteneh - Full-Stack Developer",
    description: "Full-Stack Developer & Computer Science Graduate from Ethiopia",
    siteName: "Nahom Anteneh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nahom Anteneh - Full-Stack Developer",
    description: "Full-Stack Developer & Computer Science Graduate from Ethiopia",
  },
  generator: 'v0.dev'
}

export const viewport = {
  colorScheme: "dark light"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
          storageKey="nahom-portfolio-theme"
        >
          <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
            <Navigation />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

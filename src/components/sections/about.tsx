"use client"

import type React from "react"
import { useRef } from "react"
import { Code, Database, Globe } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { useScrollAnimations, useHoverAnimations } from "@/hooks/useGSAPAnimations"

const aboutItems = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "Creating responsive and interactive user interfaces",
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Building robust APIs and server-side applications",
  },
  {
    icon: Globe,
    title: "Full Stack Solutions",
    description: "End-to-end application development and deployment",
  },
]

export const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { handleMouseEnter, handleMouseLeave } = useHoverAnimations()

  useScrollAnimations(sectionRef as React.RefObject<HTMLHeadingElement>, {
    title: "h3",
    cards: ".about-card",
    items: ".about-icon",
  })

  return (
    <section ref={sectionRef} id="about" className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12">About Me</h3>
        <div className="max-w-4xl mx-auto">
          <Card className="about-card animated-card">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed mb-6">
                I'm a passionate full stack developer with over 5 years of experience building web applications that
                solve real-world problems. I love working with modern technologies and am always eager to learn new
                tools and frameworks.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                My expertise spans across frontend and backend development, with a strong focus on creating scalable,
                maintainable, and user-friendly applications. I enjoy collaborating with teams.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {aboutItems.map((item, index) => (
                  <div
                    key={index}
                    className="text-center about-icon animated-item"
                    onMouseEnter={(e) => handleMouseEnter(e, { scale: 1.05 })}
                    onMouseLeave={handleMouseLeave}
                  >
                    <item.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

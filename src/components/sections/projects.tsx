"use client"

import type React from "react"
import { RefObject, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedButton } from "@/components/ui/animated-button"
import { useScrollAnimations, useHoverAnimations } from "@/hooks/useGSAPAnimations"
import { projects } from "@/constants/data"

export const ProjectsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { handleMouseEnter, handleMouseLeave } = useHoverAnimations()

  useScrollAnimations(sectionRef as RefObject<HTMLElement>, {
    title: "h3",
    cards: ".project-card",
    items: ".project-tech",
  })

  return (
    <section ref={sectionRef} id="projects" className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12">Featured Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols- gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="project-card animated-card overflow-hidden hover:shadow-lg transition-shadow flex flex-col min-h-[450px]"
              onMouseEnter={(e) => handleMouseEnter(e, { y: -10, scale: 1.02 })}
              onMouseLeave={handleMouseLeave}
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs project-tech animated-item">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2 mt-auto pt-4">
                  {project.github && (
                    <AnimatedButton size="sm" variant="outline" asChild>
                      <Link href={project.github} target="_blank">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </AnimatedButton>
                  )}
                  {project.live && (
                    <AnimatedButton size="sm" asChild>
                      <Link href={project.live} target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Link>
                    </AnimatedButton>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

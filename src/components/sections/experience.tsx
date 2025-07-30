"use client"

import type React from "react"
import { useRef } from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useScrollAnimations, useHoverAnimations } from "@/hooks/useGSAPAnimations"
import { experience } from "@/constants/data"

export const ExperienceSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { handleMouseEnter, handleMouseLeave } = useHoverAnimations()

  useScrollAnimations(sectionRef as React.RefObject<HTMLHeadingElement>, {
    title: "h3",
    cards: ".experience-card",
    items: ".timeline-dot",
  })

  return (
    <section ref={sectionRef} id="experience" className="py-16 px-4">
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12">Work Experience</h3>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

            {experience.map((job, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                {/* Timeline dot */}
                <div className="timeline-dot animated-item absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>

                {/* Content */}
                <div className="ml-20">
                  <Card
                    className="experience-card animated-card hover:shadow-xl transition-all duration-300"
                    onMouseEnter={(e) => handleMouseEnter(e, { scale: 1.05 })}
                    onMouseLeave={handleMouseLeave}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                        <div>
                          <CardTitle className="text-xl">{job.title}</CardTitle>
                          <CardDescription className="text-lg font-semibold text-primary flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            {job.company}
                          </CardDescription>
                        </div>
                        <Badge variant="outline" className="font-medium">
                          {job.period}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{job.description}</p>

                      <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span>{job.location}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

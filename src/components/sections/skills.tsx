"use client"

import type React from "react"
import { RefObject, useRef } from "react"
import { Smartphone, Database, Code } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useScrollAnimations, useHoverAnimations } from "@/hooks/useGSAPAnimations"
import { skills } from "@/constants/data"

const skillCategories = [
  {
    title: "Frontend",
    icon: Smartphone,
    skills: skills.frontend,
  },
  {
    title: "Backend",
    icon: Database,
    skills: skills.backend,
  },
  {
    title: "Tools & Others",
    icon: Code,
    skills: skills.tools,
  },
]

export const SkillsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { handleMouseEnter, handleMouseLeave } = useHoverAnimations()

  useScrollAnimations(sectionRef as RefObject<HTMLElement>, {
    title: "h3",
    cards: ".skill-card",
    items: ".skill-badge",
  })

  return (
    <section ref={sectionRef} id="skills" className="py-16 px-4">
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h3>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="skill-card animated-card hover:shadow-lg transition-shadow"
              onMouseEnter={(e) => handleMouseEnter(e, { y: -5 })}
              onMouseLeave={handleMouseLeave}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <category.icon className="h-5 w-5" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="skill-badge animated-item hover:scale-110 transition-transform cursor-pointer"
                      onMouseEnter={(e) => handleMouseEnter(e, { rotation: 5, duration: 0.2 })}
                      onMouseLeave={handleMouseLeave}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

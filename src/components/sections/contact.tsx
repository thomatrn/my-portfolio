"use client"

import type React from "react"
import { useRef } from "react"
import Link from "next/link"
import { Mail, Linkedin } from "lucide-react"

import { AnimatedButton } from "@/components/ui/animated-button"
import { useScrollAnimations } from "@/hooks/useGSAPAnimations"

export const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useScrollAnimations(sectionRef as React.RefObject<HTMLHeadingElement>, {
    title: "h3",
    cards: ".contact-content",
    items: ".contact-button",
  })

  return (
    <section ref={sectionRef} id="contact" className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold mb-8">Let's Work Together</h3>
        <div className="contact-content animated-card">
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your ideas
            to life.
          </p>
          <div className="flex justify-center gap-4">
            <AnimatedButton size="lg" className="contact-button animated-item" asChild>
              <Link href="mailto:alex@example.com">
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </Link>
            </AnimatedButton>
            <AnimatedButton size="lg" variant="outline" className="contact-button animated-item" asChild>
              <Link href="https://linkedin.com" target="_blank">
                <Linkedin className="mr-2 h-5 w-5" />
                Connect on LinkedIn
              </Link>
            </AnimatedButton>
          </div>
        </div>
      </div>
    </section>
  )
}

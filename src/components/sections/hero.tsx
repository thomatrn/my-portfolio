"use client"

import type React from "react"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Play, Mail, Download, Zap, ArrowDown } from "lucide-react"

import { AnimatedButton } from "@/components/ui/animated-button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useHeroAnimations, useHoverAnimations } from "@/hooks/useGSAPAnimations"
import { stats, socialLinks, currentTech } from "@/constants/data"

export const HeroSection: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const profileCardRef = useRef<HTMLDivElement>(null)
  const floatingElementsRef = useRef<HTMLDivElement>(null)

  const { handleMouseEnter, handleMouseLeave } = useHoverAnimations()

  useHeroAnimations({
    titleRef: titleRef as React.RefObject<HTMLHeadingElement>,
    subtitleRef: subtitleRef as React.RefObject<HTMLHeadingElement>,
    descriptionRef: descriptionRef as React.RefObject<HTMLParagraphElement>,
    buttonsRef: buttonsRef as React.RefObject<HTMLDivElement>,
    profileCardRef: profileCardRef as React.RefObject<HTMLDivElement>,
    floatingElementsRef: floatingElementsRef as React.RefObject<HTMLHeadingElement>,
  })

  const handleSmoothScroll = (targetId: string) => {
    const targetElement = document.getElementById(targetId)
    
    if (targetElement) {
      const header = document.querySelector('header')
      const headerHeight = header ? header.offsetHeight : 80
      
      const targetPosition = targetElement.offsetTop - headerHeight - 20
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
  }

  const handleContactClick = () => {
    handleSmoothScroll('contact')
  }

  const handleProjectsClick = () => {
    handleSmoothScroll('projects')
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Floating background elements */}
      <div ref={floatingElementsRef} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 border border-border rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-border rounded-full"></div>
        <div className="absolute bottom-32 left-32 w-20 h-20 border border-border rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 border border-border rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-border rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-12 h-12 border border-border rounded-full"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <h1 ref={titleRef} className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight">
                Thomas
                <br />
                <span className="text-muted-foreground">TRAN</span>
              </h1>

              <h2
                ref={subtitleRef}
                className="text-2xl md:text-3xl font-light text-muted-foreground flex items-center justify-center lg:justify-start gap-3"
              >
                <Zap className="h-8 w-8 text-primary" />
                Full Stack Engineer
              </h2>

              <p ref={descriptionRef} className="text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
                I build exceptional digital experiences that combine beautiful design with powerful functionality.
                Specializing in modern web technologies and scalable solutions.
              </p>
            </div>

            {/* Action Buttons */}
            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <AnimatedButton 
                size="lg" 
                className="group relative overflow-hidden"
                onClick={handleProjectsClick}
              >
                <span className="relative z-10 flex items-center">
                  <Play className="mr-2 h-4 w-4" />
                  View My Work
                </span>
              </AnimatedButton>

              <AnimatedButton 
                size="lg" 
                variant="outline" 
                className="group bg-transparent"
                onClick={handleContactClick}
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </AnimatedButton>

              <AnimatedButton size="lg" variant="ghost" className="group">
                <Download className="mr-2 h-4 w-4" />
                Resume
              </AnimatedButton>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 justify-center lg:justify-start">
              <span className="text-sm text-muted-foreground">Follow me</span>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <AnimatedButton
                    key={index}
                    variant="ghost"
                    size="icon"
                    className="hover:scale-110 transition-transform"
                    hoverConfig={{ rotation: 360, duration: 0.5 }}
                    asChild
                  >
                    <Link href={social.href} target="_blank">
                      <social.icon className="h-5 w-5" />
                    </Link>
                  </AnimatedButton>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Interactive Profile Card */}
          <div className="relative flex justify-center lg:justify-end">
            <div
              ref={profileCardRef}
              className="relative"
              onMouseEnter={(e) => handleMouseEnter(e, { y: -10 })}
              onMouseLeave={handleMouseLeave}
            >
              <Card className="w-80 p-8 backdrop-blur-sm bg-background/90 border-2 shadow-2xl">
                <div className="space-y-6">
                  {/* Profile Header */}
                  <div className="text-center space-y-4">
                    <div className="relative inline-block">
                      <Image
                        src="/thomas.jpeg"
                        alt="Alex Johnson"
                        width={120}
                        height={120}
                        className="rounded-full border-4 border-primary/20 shadow-lg"
                      />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-background flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Thomas TRAN</h3>
                      <p className="text-muted-foreground">Full Stack & DevOPS Engineer</p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">{stats.years}</div>
                      <div className="text-xs text-muted-foreground">Years</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">{stats.projects}</div>
                      <div className="text-xs text-muted-foreground">Projects</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">{stats.clients}</div>
                      <div className="text-xs text-muted-foreground">Clients</div>
                    </div>
                  </div>

                  {/* Current Tech Stack */}
                  <div>
                    <h4 className="font-semibold mb-3 text-center">Current Stack</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {currentTech.map((tech: string) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="hover:scale-110 transition-transform cursor-pointer"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Status */}
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium">Available for work</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Decorative elements around the card */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-primary rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 border-2 border-primary rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <div className="scroll-indicator flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-sm">Scroll to explore</span>
          <ArrowDown className="h-5 w-5" />
        </div>
      </div>
    </section>
  )
}

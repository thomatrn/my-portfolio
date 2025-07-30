"use client"

import type React from "react"
import Link from "next/link"
import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"

interface HeaderProps {
  theme: string
  toggleTheme: () => void
}

const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
]

export const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const targetElement = document.getElementById(targetId)
    
    if (targetElement) {
      // Calculer la hauteur du header de manière dynamique
      const header = document.querySelector('header')
      const headerHeight = header ? header.offsetHeight : 80
      
      const targetPosition = targetElement.offsetTop - headerHeight - 20 // 20px de marge supplémentaire
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
  }

  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" onClick={handleScrollToTop}>
          <h1 className="text-2xl font-bold hover:text-primary transition-colors cursor-pointer">Thomas TRAN</h1>
        </a>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="hover:text-primary transition-colors cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </header>
  )
}

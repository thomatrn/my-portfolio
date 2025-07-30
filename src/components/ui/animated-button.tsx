"use client"

import type React from "react"
import { Button, type ButtonProps } from "@/components/ui/button"
import { useHoverAnimations } from "@/hooks/useGSAPAnimations"

interface AnimatedButtonProps extends ButtonProps {
  hoverConfig?: {
    scale?: number
    y?: number
    rotation?: number
    duration?: number
  }
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({ children, hoverConfig, ...props }) => {
  const { handleMouseEnter, handleMouseLeave } = useHoverAnimations()

  return (
    <Button {...props} onMouseEnter={(e) => handleMouseEnter(e, hoverConfig)} onMouseLeave={handleMouseLeave}>
      {children}
    </Button>
  )
}

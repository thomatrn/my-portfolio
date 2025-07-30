"use client"

import type React from "react"

import { useEffect, type RefObject } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export const useHeroAnimations = (refs: {
  titleRef: RefObject<HTMLHeadingElement>
  subtitleRef: RefObject<HTMLHeadingElement>
  descriptionRef: RefObject<HTMLParagraphElement>
  buttonsRef: RefObject<HTMLDivElement>
  profileCardRef: RefObject<HTMLDivElement>
  floatingElementsRef: RefObject<HTMLDivElement>
}) => {
  useEffect(() => {
    if (typeof window === "undefined") return

    const { titleRef, subtitleRef, descriptionRef, buttonsRef, profileCardRef, floatingElementsRef } = refs

    const tl = gsap.timeline({ delay: 0.5 })

    // Animate title
    if (titleRef.current) {
      gsap.set(titleRef.current, { opacity: 0 })
      tl.to(titleRef.current, {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      })
    }

    // Animate subtitle
    if (subtitleRef.current) {
      gsap.set(subtitleRef.current, { opacity: 0, y: 30 })
      tl.to(
        subtitleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.4",
      )
    }

    // Animate description
    if (descriptionRef.current) {
      gsap.set(descriptionRef.current, { opacity: 0, y: 30 })
      tl.to(
        descriptionRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.4",
      )
    }

    // Animate buttons
    if (buttonsRef.current) {
      const buttons = buttonsRef.current.children
      gsap.set(buttons, { opacity: 0, y: 30 })
      tl.to(
        buttons,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.2",
      )
    }

    // Animate profile card
    if (profileCardRef.current) {
      gsap.set(profileCardRef.current, { opacity: 0, x: 50, scale: 0.9 })
      tl.to(
        profileCardRef.current,
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.8",
      )
    }

    // Floating elements animation
    if (floatingElementsRef.current) {
      const elements = floatingElementsRef.current.children
      gsap.set(elements, { opacity: 0, scale: 0 })
      tl.to(
        elements,
        {
          opacity: 0.1,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
        },
        "-=0.5",
      )

      // Continuous floating animation
      gsap.to(elements, {
        y: "random(-20, 20)",
        x: "random(-10, 10)",
        rotation: "random(-5, 5)",
        duration: "random(3, 5)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          amount: 2,
          from: "random",
        },
      })
    }

    // Scroll indicator animation
    gsap.to(".scroll-indicator", {
      y: 10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    })

    return () => {
      tl.kill()
    }
  }, [refs])
}

export const useScrollAnimations = (
  sectionRef: RefObject<HTMLElement>,
  animationConfig: {
    title?: string
    cards?: string
    items?: string
    stagger?: boolean
  },
) => {
  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return

    const { title = "h3", cards = ".animated-card", items = ".animated-item", stagger = true } = animationConfig

    const titleEl = sectionRef.current.querySelector(title)
    const cardEls = sectionRef.current.querySelectorAll(cards)
    const itemEls = sectionRef.current.querySelectorAll(items)

    if (titleEl) gsap.set(titleEl, { opacity: 0, y: 50 })
    if (cardEls.length) gsap.set(cardEls, { opacity: 0, y: 50, scale: 0.9 })
    if (itemEls.length) gsap.set(itemEls, { opacity: 0, scale: 0 })

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 80%",
      onEnter: () => {
        const tl = gsap.timeline()

        if (titleEl) {
          tl.to(titleEl, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" })
        }

        if (cardEls.length) {
          tl.to(
            cardEls,
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              stagger: stagger ? 0.2 : 0,
              ease: "power2.out",
            },
            "-=0.4",
          )
        }

        if (itemEls.length) {
          tl.to(
            itemEls,
            {
              opacity: 1,
              scale: 1,
              duration: 0.6,
              stagger: stagger ? 0.05 : 0,
              ease: "back.out(1.7)",
            },
            "-=0.4",
          )
        }
      },
    })

    return () => {
      trigger.kill()
    }
  }, [sectionRef, animationConfig])
}

export const useHoverAnimations = () => {
  const handleMouseEnter = (
    e: React.MouseEvent<HTMLElement>,
    config: {
      scale?: number
      y?: number
      rotation?: number
      duration?: number
    } = {},
  ) => {
    const { scale = 1.05, y = 0, rotation = 0, duration = 0.3 } = config
    gsap.to(e.currentTarget, { scale, y, rotation, duration })
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    gsap.to(e.currentTarget, { scale: 1, y: 0, rotation: 0, duration: 0.3 })
  }

  return { handleMouseEnter, handleMouseLeave }
}

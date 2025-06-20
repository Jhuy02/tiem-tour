'use client'
import {useEffect, useRef} from 'react'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useFaqAnimation = () => {
  const faqItemsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    // Handle desktop FAQ items with scrollable descriptions
    faqItemsRef.current.forEach((item) => {
      if (!item) return

      const description = item.querySelector(
        '.faq__right-item-description',
      ) as HTMLElement
      const overlays = item.querySelectorAll('.overlay')

      if (description && overlays.length > 0) {
        // Function to update overlay visibility
        const updateOverlayVisibility = () => {
          const isAtEnd =
            description.scrollTop + description.clientHeight >=
            description.scrollHeight - 1

          if (isAtEnd) {
            gsap.to(overlays, {autoAlpha: 0, duration: 0.5})
          } else {
            gsap.to(overlays, {autoAlpha: 1, duration: 0.5})
          }
        }

        // Add scroll event listener
        description.addEventListener('scroll', updateOverlayVisibility)

        // Initialize initial state
        const isAtEnd =
          description.scrollTop + description.clientHeight >=
          description.scrollHeight - 1

        if (isAtEnd) {
          gsap.set(overlays, {autoAlpha: 0})
        } else {
          gsap.set(overlays, {autoAlpha: 1})
        }

        // Cleanup function
        return () => {
          description.removeEventListener('scroll', updateOverlayVisibility)
        }
      }
    })
  }, [])

  return {faqItemsRef}
}

'use client'

import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {useEffect, useRef} from 'react'

// Đăng ký plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

export const useMysteriousAnimation = () => {
  const animationRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = animationRef.current

    if (!element) return

    // Tạo animation với ScrollTrigger
    const animation = gsap.from(element, {
      duration: 1,
      scrollTrigger: {
        trigger: element,
        start: 'top 95%',
        toggleClass: 'active',
        once: true, // Chỉ chạy hiệu ứng một lần
      },
    })

    // Cleanup function
    return () => {
      if (animation) {
        animation.kill()
      }
      // Kill ScrollTrigger để tránh memory leak
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === element) {
          trigger.kill()
        }
      })
    }
  }, [])

  return animationRef
}

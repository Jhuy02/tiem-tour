'use client'
import {useEffect, useRef} from 'react'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export const useGSAPAnimation = <T extends HTMLElement>(
  animationType:
    | 'fadeUp'
    | 'fadeIn'
    | 'slideLeft'
    | 'slideRight'
    | 'image-zoom-out'
    | 'image-clip-right'
    | 'image-clip-left'
    | 'image-clip-top'
    | 'image-clip-bottom' = 'fadeUp',
) => {
  const ref = useRef<T>(null)

  useEffect(() => {
    if (!ref.current) return

    const element = ref.current
    let animation: gsap.core.Tween | gsap.core.Timeline

    switch (animationType) {
      case 'fadeUp':
        animation = gsap.fromTo(
          element,
          {opacity: 0, y: 50},
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          },
        )
        break

      case 'image-zoom-out':
        animation = gsap.fromTo(
          element,
          {opacity: 0, scale: 0.8, y: 50},
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          },
        )
        break

      case 'image-clip-right':
        animation = gsap.fromTo(
          element,
          {
            clipPath: 'inset(0% 100% 0% 0%)', // Ẩn từ right
            transformOrigin: 'center center',
          },
          {
            clipPath: 'inset(0% 0% 0% 0%)', // Hiện đầy đủ
            duration: 2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 85%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse',
            },
          },
        )
        break

      case 'image-clip-left':
        animation = gsap.fromTo(
          element,
          {
            clipPath: 'inset(0% 0% 0% 100%)', // Ẩn từ left
            transformOrigin: 'center center',
          },
          {
            clipPath: 'inset(0% 0% 0% 0%)', // Hiện đầy đủ
            duration: 2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 85%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse',
            },
          },
        )
        break

      case 'image-clip-top':
        animation = gsap.fromTo(
          element,
          {
            clipPath: 'inset(100% 0% 0% 0%)', // Ẩn từ top
            transformOrigin: 'center center',
          },
          {
            clipPath: 'inset(0% 0% 0% 0%)', // Hiện đầy đủ
            duration: 2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 85%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse',
            },
          },
        )
        break

      case 'image-clip-bottom':
        animation = gsap.fromTo(
          element,
          {
            clipPath: 'inset(0% 0% 100% 0%)', // Ẩn từ bottom
            transformOrigin: 'center center',
          },
          {
            clipPath: 'inset(0% 0% 0% 0%)', // Hiện đầy đủ
            duration: 2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 85%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse',
            },
          },
        )
        break

      default:
        // Fallback cho fadeUp
        animation = gsap.fromTo(
          element,
          {opacity: 0, y: 50},
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          },
        )
        break
    }

    // Cleanup function
    return () => {
      if (animation) {
        animation.kill()
      }
      // Chỉ kill ScrollTrigger của element này
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === element) {
          trigger.kill()
        }
      })
    }
  }, [animationType])

  return ref
}

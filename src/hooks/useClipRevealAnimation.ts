'use client'

import {useEffect} from 'react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useClipRevealAnimation(
  svgRef: React.RefObject<SVGSVGElement>,
  triggerSelector: string,
) {
  useEffect(() => {
    if (!svgRef.current) return
    const rects = svgRef.current.querySelectorAll('rect')
    if (!rects.length) return

    gsap.set(rects, {scaleY: 0, transformOrigin: '50% 100%'})

    const animation = gsap.to(rects, {
      scaleY: 1,
      stagger: {
        each: 0.03,
        from: 'end',
      },
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: triggerSelector,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    })

    return () => {
      animation.kill()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [svgRef, triggerSelector])
}

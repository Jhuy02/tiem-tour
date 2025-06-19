'use client'
import gsap from 'gsap'
import {SplitText} from 'gsap/SplitText'

gsap.registerPlugin(SplitText)

export function animateTitle(element: HTMLElement | null) {
  if (!element) return

  element.innerHTML = element.textContent || ''

  const split = new SplitText(element, {
    type: 'chars, words',
  })

  gsap.from(split.chars, {
    y: 100,
    autoAlpha: 0,
    duration: 0.75,
    stagger: {
      amount: 1.1,
      from: 'random',
    },
  })

  return () => split.revert()
}

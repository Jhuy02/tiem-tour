/* eslint-disable @typescript-eslint/no-explicit-any */
import { clsx, type ClassValue } from "clsx"
import { gsap } from "gsap"
import { twMerge } from "tailwind-merge"


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function convertRemToPx(rem: number) {
  if (typeof window === 'undefined' || !document?.documentElement) {
    return
  }

  const rootFontSize = parseFloat(
    getComputedStyle(document.documentElement).fontSize,
  ) // Giá trị này sẽ là 1vw
  return rem * rootFontSize
}
export const scrollToElement = (id: string, top: number = 0): void => {
  const element = document.getElementById(id)

  if (!element) {
    console.error(`Element with ID "${id}" not found.`)
    return
  }

  const elementOffset =
    element.getBoundingClientRect().top + window.scrollY - top

  gsap.to(window, {
    duration: 1, // Thời gian scroll (giây)
    scrollTo: elementOffset,
    ease: 'power2.out', // Hiệu ứng mượt
  })
}

export function delay(ms: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Resolved after ${ms / 1000} seconds`)
    }, ms)
  })
}


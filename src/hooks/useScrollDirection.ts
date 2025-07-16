'use client'

import {useIsClient} from '@/hooks/useIsClient'
import {useEffect, useState} from 'react'

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(
    null,
  )
  const [lastScrollY, setLastScrollY] = useState(0)
  const isClient = useIsClient()

  useEffect(() => {
    if (!isClient) return

    const updateScrollDirection = () => {
      const scrollY = window.scrollY
      const direction = scrollY > lastScrollY ? 'down' : 'up'

      if (
        direction !== scrollDirection &&
        Math.abs(scrollY - lastScrollY) > 10
      ) {
        setScrollDirection(direction)
      }
      setLastScrollY(scrollY > 0 ? scrollY : 0)
    }

    window.addEventListener('scroll', updateScrollDirection)
    return () => window.removeEventListener('scroll', updateScrollDirection)
  }, [scrollDirection, lastScrollY, isClient])

  return scrollDirection
}

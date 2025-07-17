'use client'

import {Button} from '@/components/ui/button'
import scrollToElement from '@/hooks/scrollToElement'
import {useScrollDirection} from '@/hooks/useScrollDirection'
import {useState, useEffect, useMemo, useRef} from 'react'

const tabs = [
  {label: 'Overview', id: 'overview'},
  {label: 'Landscape', id: 'landscape'},
  {label: 'FAQ', id: 'faq'},
]

export const Tab = () => {
  const [active, setActive] = useState(0)
  const [isStickyVisible, setIsStickyVisible] = useState(true)
  const stickyTabRef = useRef<HTMLDivElement>(null)
  const scrollDirection = useScrollDirection()

  useEffect(() => {
    if (scrollDirection === 'up' && stickyTabRef.current) {
      setIsStickyVisible(false)
    } else if (scrollDirection === 'down' && stickyTabRef.current) {
      setIsStickyVisible(true)
    }
  }, [scrollDirection])

  useEffect(() => {
    const handleScroll = () => {
      let closestIdx = 0
      let minDistance = Infinity
      tabs.forEach((tab, idx) => {
        const el = document.getElementById(tab.id)
        if (el) {
          const rect = el.getBoundingClientRect()
          const distance = Math.abs(rect.top - 80)
          if (
            rect.top < window.innerHeight &&
            distance < minDistance &&
            rect.bottom > 80
          ) {
            minDistance = distance
            closestIdx = idx
          }
        }
      })
      setActive(closestIdx)
    }
    window.addEventListener('scroll', handleScroll, {passive: true})
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const stickyClassName = useMemo(
    () =>
      `sticky z-50 transition-all duration-300 ${
        isStickyVisible ? 'top-0 xsm:top-0' : 'top-[-5rem]'
      }`,
    [isStickyVisible],
  )

  return (
    <section
      className={`xsm:hidden ${stickyClassName} h-[4.875rem] bg-white shadow-[0px_16px_16px_0px_rgba(0,0,0,0.04)]`}
      ref={stickyTabRef}
    >
      <div className='mx-auto flex h-full max-w-[87.5rem] items-center justify-between'>
        <div className='flex h-full w-[51.1875rem] items-center'>
          {tabs.map((tab, idx) => (
            <div
              key={tab.label}
              className={`after:content-["" ] relative flex h-full w-[12.65rem] cursor-pointer items-center justify-center after:absolute after:bottom-0 after:left-0 after:h-[0.125rem] after:w-full after:origin-left after:bg-[#25ACAB] after:transition-transform after:duration-300 ${
                active === idx ? 'after:scale-x-100' : 'after:scale-x-0'
              }`}
              onClick={() => {
                setActive(idx)
                scrollToElement(null, tabs[idx].id, 1, 6)
              }}
            >
              <p className='leading-[1.25rem] font-medium tracking-[0.0025rem] text-[#303030]'>
                {tab.label}
              </p>
            </div>
          ))}
        </div>
        <div className='flex items-center space-x-[0.6875rem]'>
          <p className='leading-[1.6rem] tracking-[0.0025rem] text-[#303030]'>
            From{' '}
            <strong className='font-dvn-luckiest-guy text-[1.25rem] leading-[1.875rem] tracking-[0.00313rem] text-[#19C2C2]'>
              1.100.000
            </strong>
          </p>
          <Button
            red
            icon
            className='cursor-pointer'
          >
            Book now
          </Button>
        </div>
      </div>
    </section>
  )
}

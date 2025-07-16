'use client'

import {Button} from '@/components/ui/button'
import scrollToElement from '@/hooks/scrollToElement'
import {useState, useEffect} from 'react'

const tabs = [
  {label: 'Overview', id: 'overview'},
  {label: 'Landscape', id: 'landscape'},
  {label: 'FAQ', id: 'faq'},
]

export const Tab = () => {
  const [active, setActive] = useState(0)

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

  return (
    <section className='h-[4.875rem] shadow-[0px_16px_16px_0px_rgba(0,0,0,0.04)] xsm:hidden sticky top-0 z-[1] bg-white'>
      <div className='max-w-[87.5rem] mx-auto flex items-center justify-between h-full'>
        <div className='w-[51.1875rem] flex items-center h-full'>
          {tabs.map((tab, idx) => (
            <div
              key={tab.label}
              className={`flex items-center justify-center relative w-[12.65rem] h-full cursor-pointer after:content-["" ] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[0.125rem] after:bg-[#25ACAB] after:origin-left after:transition-transform after:duration-300 ${
                active === idx ? 'after:scale-x-100' : 'after:scale-x-0'
              }`}
              onClick={() => {
                setActive(idx)
                scrollToElement(null, tabs[idx].id, 1, 6)
              }}
            >
              <p className='text-[#303030] font-medium leading-[1.25rem] tracking-[0.0025rem]'>
                {tab.label}
              </p>
            </div>
          ))}
        </div>
        <div className='flex items-center space-x-[0.6875rem]'>
          <p className='text-[#303030] leading-[1.6rem] tracking-[0.0025rem]'>
            From{' '}
            <strong className='text-[#19C2C2] text-[1.25rem] leading-[1.875rem] tracking-[0.00313rem] font-dvn-luckiest-guy'>
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

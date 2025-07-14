import {cn} from '@/lib/utils'
import React from 'react'

interface TypographyProps {
  align?: 'left' | 'right' | 'center'
  content?: string
  className?: string
}
export default function Typography({
  align = 'left',
  content,
  className,
}: TypographyProps) {
  return (
    <div
      className={cn(
        'font-trip-sans xsm:bg-[#F9F4EB] xsm:bg-cover xsm:bg-no-repeat xsm:bg-center xsm:bg-[url("/common/common-background-pc.webp")]',
        className,
      )}
    >
      <p
        className={cn(
          'xsm:text-[0.875rem] xsm:tracking-[0.00219rem] xsm:leading-[130%] w-full text-[1rem] leading-[150%] font-normal tracking-[0.0025rem] text-[#3B3943] uppercase',
          align === 'left' && 'text-left',
          align === 'right' && 'text-right',
          align === 'center' && 'text-center',
        )}
      >
        {content}
      </p>
    </div>
  )
}

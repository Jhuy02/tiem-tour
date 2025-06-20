import React from 'react'

export default function IconCloseFilterChip(
  props: React.SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width={20}
      height={20}
      viewBox='0 0 20 20'
      fill='none'
    >
      <circle
        cx={10}
        cy={10}
        r='7.5'
        fill='#C0BEBA'
      />
      <path
        d='M13.3346 6.66797L6.66797 13.3346'
        stroke='#3B3943'
        strokeLinecap='square'
        strokeLinejoin='round'
      />
      <path
        d='M6.66536 6.66797L13.332 13.3346'
        stroke='#3B3943'
        strokeLinecap='square'
        strokeLinejoin='round'
      />
    </svg>
  )
}

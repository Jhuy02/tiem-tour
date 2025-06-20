import React from 'react'

export default function IconTickOption(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={21}
      height={13}
      viewBox='0 0 21 13'
      fill='none'
      {...props}
    >
      <circle
        cx='12.5'
        cy='0.5'
        r='12.5'
        fill='#FFBB00'
      />
      <path
        d='M8.20117 6.50167L9.73409 8.03458L12.8053 4.96875'
        stroke='white'
        strokeWidth='0.8125'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

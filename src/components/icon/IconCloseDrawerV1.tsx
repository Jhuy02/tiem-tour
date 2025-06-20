import React from 'react'

export default function IconCloseDrawerV1(
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
      <path
        d='M15 5L5 15M5 5L15 15'
        stroke='white'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

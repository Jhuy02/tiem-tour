import React from 'react'

export default function IconCloseDialogV1(
  props: React.SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={25}
      height={25}
      viewBox='0 0 25 25'
      fill='none'
      {...props}
    >
      <path
        d='M21.8749 21.8749L12.5 12.5M12.5 12.5L3.125 3.125M12.5 12.5L21.8751 3.125M12.5 12.5L3.125 21.8751'
        stroke='#767676'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

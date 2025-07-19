import Image from 'next/image'
import React, {ReactNode} from 'react'

interface TriggerDialogButtonProps {
  children: ReactNode
}

export default function TriggerDialogButton({
  children,
}: TriggerDialogButtonProps) {
  return (
    <div className='xsm:justify-center font-trip-sans flex cursor-pointer items-center space-x-[0.5rem] rounded-[0.75rem] border border-solid border-[#ECECEC] px-[1rem] py-[0.5rem]'>
      <span className='text-[0.875rem] leading-[120%] font-medium tracking-[0.00219rem] text-[#303030]'>
        {children}
      </span>
      <Image
        alt=''
        width={20}
        height={20}
        src={'/icons/chevron-right-double.svg'}
        className='h-auto w-[1.25rem] shrink-0'
      />
    </div>
  )
}

import Image from 'next/image'
import React from 'react'

interface CautionProps {
  content: string
}

export default function Caution({content}: CautionProps) {
  return (
    <div className='relative flex items-center space-x-[0.375rem] rounded-[0.75rem] bg-[#F5F5F5] p-[0.75rem]'>
      <Image
        alt=''
        width={24}
        height={24}
        src={'/icons/caution.svg'}
        className='h-auto w-[1.5rem] shrink-0'
      />
      <p
        dangerouslySetInnerHTML={{__html: content ?? ''}}
        className='flex-1 text-[0.75rem] leading-[130%] tracking-[0.00188rem] text-[rgba(48,48,48,0.80)]'
      ></p>
    </div>
  )
}

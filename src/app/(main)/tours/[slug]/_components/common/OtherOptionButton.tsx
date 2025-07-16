import Image from 'next/image'
import React from 'react'

export default function OtherOptionButton() {
  return (
    <div className='flex cursor-pointer items-center space-x-[0.25rem]'>
      <Image
        alt=''
        style={{
          filter:
            'brightness(0) saturate(100%) invert(51%) sepia(19%) saturate(1542%) hue-rotate(131deg) brightness(108%) contrast(89%)',
        }}
        width={18}
        height={18}
        src={'/icons/add_plus.svg'}
        className='h-auto w-[1.125rem] shrink-0'
      />
      <p className='text-[1rem] leading-[120%] font-medium tracking-[0.0025rem] text-[#25ACAB]'>
        Other option
      </p>
    </div>
  )
}

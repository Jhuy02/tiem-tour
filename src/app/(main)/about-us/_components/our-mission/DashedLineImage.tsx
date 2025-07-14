import Image from 'next/image'
import React from 'react'

export default function DashedLineImage() {
  return (
    <>
      <Image
        alt=''
        width={1600}
        height={185}
        src={'/about-us/section-mission/image-dashed-line-pc.png'}
        className='xsm:hidden absolute top-[40.44rem] left-0 z-0 h-auto w-full'
      />
      <Image
        alt=''
        width={375}
        height={105}
        src={'/about-us/section-mission/image-dashed-line-mb.png'}
        className='absolute bottom-[4.5rem] left-0 z-0 h-auto w-full sm:hidden'
      />
    </>
  )
}

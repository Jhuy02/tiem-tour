import Image from 'next/image'
import React from 'react'

export default function DividerImage() {
  return (
    <>
      <Image
        alt=''
        width={1600}
        height={461}
        src={'/about-us/section-mission/image-divider.png'}
        className='xsm:hidden absolute top-[-20.75rem] left-0 h-auto w-full'
      />
      <Image
        alt=''
        width={1600}
        height={461}
        src={'/about-us/section-mission/image-divider-mb.png'}
        className='absolute top-[-4rem] left-0 h-auto w-full sm:hidden'
      />
    </>
  )
}

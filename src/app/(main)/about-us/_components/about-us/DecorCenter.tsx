import Image from 'next/image'
import React from 'react'

export default function DecorCenter() {
  return (
    <div className='xsm:relative xsm:flex xsm:flex-col xsm:items-center xsm:justify-center'>
      <p className='text-decor-v1 xsm:static xsm:text-[2rem] xsm:mb-0 absolute top-[31.5rem] left-[37.5rem] z-1 h-auto w-[21.8125rem] rotate-[-2.013deg] text-center text-[2.3125rem] text-[#19C2C2]'>
        TiemtourHaGiang
      </p>
      <div className='xsm:w-full xsm:relative'>
        <Image
          alt='Decor Vietnam Women'
          width={614.5709}
          height={406.8871}
          className='xsm:static xsm:w-full absolute top-[35.73rem] left-[29.63rem] h-auto w-[38.41069rem]'
          src={'/about-us/section-intro/decor-vietnam-women.webp'}
        />
      </div>
    </div>
  )
}

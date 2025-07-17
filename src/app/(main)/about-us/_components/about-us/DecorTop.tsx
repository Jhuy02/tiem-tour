import {IMedia} from '@/types/media.interface'
import Image from 'next/image'
import React from 'react'

interface DecorTopProps {
  title: string
  description: string
  mainImageDecor: IMedia
}

export default function DecorTop({
  title,
  description,
  mainImageDecor,
}: DecorTopProps) {
  return (
    <>
      <div className='xsm:top-[-10.09rem] xsm:w-[10.63106rem] xsm:pb-[0.66rem] xsm:pt-[0.26rem] xsm:px-[0.22rem] xsm:space-y-[0.48rem] absolute top-[-12.44rem] left-1/2 z-2 flex w-[22.0625rem] -translate-x-1/2 flex-col items-center space-y-[1.57rem] bg-white px-[0.45rem] pt-[0.54rem] pb-[1.06rem]'>
        <div className='xsm:h-[10.06238rem] h-[20.88219rem] w-full shrink-0'>
          {mainImageDecor?.url && (
            <Image
              alt=''
              width={338.4732}
              height={334.1152}
              src={mainImageDecor?.url}
              className='h-full w-full object-cover'
            />
          )}
        </div>
        <div className='xsm:w-[9.6875rem] xsm:space-y-[0.125rem] flex w-[17.6875rem] flex-col items-center space-y-[0.6875rem]'>
          <h1 className='font-dvn-luckiest-guy xsm:text-[1.125rem] xsm:tracking-[0.0075rem] text-center text-[2.25rem] leading-[120%] font-normal tracking-[0.01563rem] text-[#25ACAB] uppercase'>
            {title}
          </h1>
          <p className='xsm:text-[0.5rem] text-center text-[0.875rem] leading-[140%] font-normal tracking-[0.00219rem] text-[#3B3943]'>
            {description}
          </p>
        </div>
      </div>
      {/* Giỏ hoa */}
      <Image
        alt=''
        width={226.345}
        height={272.2134}
        src={'/about-us/section-intro/decor-flower-basket.webp'}
        className='xsm:top-[-2.1rem] xsm:left-[0.31rem] xsm:h-[10.7715rem] absolute top-[-2rem] left-[20.12rem] z-1 h-[22.35388rem] w-auto'
      />
      {/* Trẻ vùng cao */}
      <Image
        alt=''
        width={261.9925}
        height={342.1942}
        src={'/about-us/section-intro/decor-child.webp'}
        className='xsm:left-[1.1rem] xsm:w-[7.89025rem] xsm:top-[-6.19rem] absolute top-[-7.625rem] left-[26.9375em] z-0 h-auto w-[16.3745rem] rotate-[-13.573deg]'
      />
      {/* Phanxipang */}
      <Image
        alt=''
        width={327.9492}
        height={556.9702}
        src={'/about-us/section-intro/decor-fanxipang.webp'}
        className='xsm:top-[-18rem] xsm:left-[14rem] xsm:h-[18.5rem] absolute top-[-27.32rem] left-[53.41rem] z-1 h-[34.8106rem] w-auto rotate-[-1.043deg]'
      />
      {/* Phanxipang */}
      <Image
        alt=''
        width={327.9492}
        height={556.9702}
        src={'/about-us/section-intro/decor-fanxipang.webp'}
        style={{clipPath: 'inset(0 0 25% 0)'}}
        className='xsm:top-[-18rem] xsm:left-[14rem] xsm:h-[18.5rem] absolute top-[-27.32rem] left-[53.41rem] z-2 h-[34.8106rem] w-auto rotate-[-1.043deg]'
      />
      {/* Đồng xu */}
      <Image
        alt=''
        width={145.0086}
        height={145.0086}
        src={'/about-us/section-intro/decor-coin.webp'}
        className='xsm:left-[18.13rem] xsm:top-[-2.59rem] xsm:w-[4.36713rem] absolute top-[5.19rem] left-[58.56rem] z-3 h-auto w-[9.06306rem] rotate-[18.153deg]'
      />
      {/* Northeast Vietnam */}
      <p className='font-nvn-motherland-signature xsm:w-[4.4375rem] xsm:text-[0.875rem] xsm:leading-[132%] xsm:left-[17.95rem] xsm:top-[1.33rem] absolute top-[9.33rem] left-[65.96rem] z-4 h-[1.4375rem] rotate-[4.661deg] text-[2rem] leading-normal font-normal text-[#C83E21]'>
        Northeast Vietnam
      </p>
      {/* Giấy */}
      <Image
        alt=''
        width={390.5078}
        height={190.3159}
        src={'/about-us/section-intro/decor-paper.webp'}
        className='xsm:hidden absolute top-[-3.36rem] left-[48.27rem] z-0 h-auto w-[24.40675rem] rotate-[-163.61deg]'
      />
    </>
  )
}

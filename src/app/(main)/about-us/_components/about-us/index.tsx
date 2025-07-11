import DecorCenter from '@/app/(main)/about-us/_components/about-us/DecorCenter'
import DecorSvgLineMb from '@/app/(main)/about-us/_components/about-us/DecorSvgLineMb'
import DecorSvgLinePc from '@/app/(main)/about-us/_components/about-us/DecorSvgLinePc'
import DecorTop from '@/app/(main)/about-us/_components/about-us/DecorTop'
import Typography from '@/app/(main)/about-us/_components/about-us/Typography'
import {AboutUsContent} from '@/types/about-us.interface'
import Image from 'next/image'
import React from 'react'

interface AboutUsProps {
  data: AboutUsContent
}

export default function AboutUs({data}: AboutUsProps) {
  return (
    <section className='font-trip-sans xsm:pt-[14.78rem] xsm:h-auto relative z-5 h-[72.75rem] bg-[#F9F4EB] bg-[url("/common/common-background-pc.webp")] bg-cover bg-center bg-no-repeat'>
      <DecorTop
        title={data?.title}
        description={data?.first_desc}
        mainImageDecor={data?.image}
      />

      <DecorSvgLinePc />
      <DecorSvgLineMb />
      <Typography
        align='left'
        className='xsm:py-[0.625rem] xsm:pr-[0.625rem] xsm:ml-[1.31rem] xsm:relative xsm:top-0 xsm:left-0 xsm:mb-[8.81rem] xsm:w-[19.375rem] absolute top-[27.13rem] left-[6.25rem] z-2 w-[20.75rem]'
        content={data?.second_desc}
      />
      <Typography
        align='right'
        content={data?.third_desc}
        className='xsm:relative xsm:py-[0.625rem] xsm:min-h-[12.375rem] xsm:top-0 xsm:left-0 xsm:ml-[4.06rem] xsm:mb-[12rem] xsm:w-[18.375rem] xsm:flex xsm:items-center absolute top-[52.94rem] left-[71.5rem] z-2 w-[22.25rem]'
      />
      <DecorCenter />
      <Image
        alt=''
        width={354}
        height={481.3}
        src={'/about-us/section-intro/decor-flower-left.webp'}
        className='xsm:left-[-0.2rem] xsm:w-[7.1183rem] xsm:rotate-[13.075deg] xsm:top-[22.66rem] absolute top-[44.56rem] left-[-6.8125rem] z-5 h-auto w-[22.125rem]'
      />
      <Image
        alt=''
        width={113.8932}
        height={215.5012}
        src={'/about-us/section-intro/decor-flower-right.webp'}
        className='xsm:right-[-0.2rem] xsm:h-[10.6771rem] xsm:rotate-[-93.922deg] xsm:top-[4.48rem] absolute top-[19.64rem] right-[-1.5rem] z-5 h-[19.26263rem] w-auto'
      />
    </section>
  )
}

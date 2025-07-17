'use client'

import DecorBottom from '@/app/(main)/about-us/_components/our-mission/DecorBottom'
import TextSpinner from '@/app/(main)/about-us/_components/our-mission/TextSpinner'
import Image from 'next/image'
import React, {useRef, useEffect} from 'react'
import {OurMission as IOurMission} from '@/types/about-us.interface'
import DividerImage from '@/app/(main)/about-us/_components/our-mission/DividerImage'
import DashedLineImage from '@/app/(main)/about-us/_components/our-mission/DashedLineImage'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {useClipRevealAnimation} from '@/hooks/useClipRevealAnimation'
import ClipMarkRender from '@/components/clip-mark-render'

gsap.registerPlugin(ScrollTrigger)

interface OurMissionProps {
  data: IOurMission
}
export default function OurMission({data}: OurMissionProps) {
  const svgRef = useRef<SVGSVGElement>(null!)
  useClipRevealAnimation(svgRef, '.clip-container')

  return (
    <section className='font-trip-sans relative z-5'>
      <Image
        alt=''
        width={413}
        height={465}
        src={'/about-us/section-mission/decor-leaf.webp'}
        className='xsm:top-[8.87rem] xsm:left-[-5.56rem] xsm:w-[13.1875rem] absolute top-[9.5rem] left-[-2rem] h-auto w-[25.8125rem]'
      />
      <div className='xsm:pt-[4rem] xsm:pb-[6.36rem] bg-[#F9F4EB] bg-[url("/common/common-background-pc.webp")] bg-cover bg-center bg-no-repeat pt-[3.4375rem] pb-[19.8125rem]'>
        <div className='xsm:px-[0.8125rem] xsm:space-y-[0.5rem] xsm:mb-[3rem] mx-auto mb-[3.5rem] flex max-w-[69.125rem] flex-col items-center space-y-[2.3125rem]'>
          <h3
            dangerouslySetInnerHTML={{__html: data?.sub_title ?? ''}}
            className='font-dvn-luckiest-guy xsm:text-[1.375rem] xsm:leading-[130%] xsm:max-w-[19.8125rem] text-center text-[2.25rem] leading-[120%] font-normal tracking-[0.01563rem] text-[#3B3943] uppercase'
          ></h3>
          <TextSpinner />
        </div>
        <div className='xsm:px-[0.8125rem] xsm:flex-col xsm:space-x-0 xsm:space-y-[2rem] mx-auto flex max-w-[87.5rem] items-center justify-center space-x-[6.25rem]'>
          <div className='xsm:space-y-[1.25rem] xsm:w-full flex w-[39.60263rem] shrink-0 flex-col space-y-[2.25rem]'>
            <h2 className='font-dvn-luckiest-guy xsm:text-[1.375rem] xsm:leading-[130%] text-[4.75rem] leading-[87%] font-normal tracking-[0.095rem] text-[#3B3943]'>
              {data?.title}
            </h2>
            <p className='text-[1rem] leading-[160%] tracking-[0.0025rem] text-[#3B3943]'>
              {data?.desc}
            </p>
            <p className='text-decor-v1 xsm:text-[1.25rem] xsm:font-normal text-[1.5rem] text-[#25ACAB]'>
              TiemtourHaGiang
            </p>
          </div>
          <div className='xsm:w-full w-[29.8125rem] shrink-0'>
            {data?.certification_image?.url && (
              <>
                <ClipMarkRender
                  id='clip-mask'
                  svgRef={svgRef}
                />
                <div
                  className='clip-container'
                  style={{clipPath: 'url(#clip-mask)'}}
                >
                  <Image
                    width={477}
                    height={655}
                    alt={data?.certification_image?.alt ?? ''}
                    src={data?.certification_image?.url}
                    className='h-auto w-full'
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className='xsm:h-auto xsm:pt-[6.94rem] xsm:pb-[34.5rem] relative h-[66.5625rem] bg-[url("/common/common-background-green-pc.webp")] bg-cover bg-center bg-no-repeat'>
        <DividerImage />
        {data?.team_image?.url && (
          <Image
            alt=''
            width={1600}
            height={461}
            src={data?.team_image?.url}
            className='xsm:left-[0.5rem] xsm:w-[22rem] xsm:bottom-[7.79rem] xsm:top-[unset] absolute top-[19.7rem] left-[43.45rem] z-2 h-auto w-[27.65819rem]'
          />
        )}
        <p className='text-decor-v1 xsm:text-[1.375rem] xsm:leading-[140%] xsm:top-[6.94rem] xsm:left-[1.68rem] xsm:w-[20.3885rem] xsm:static xsm:ml-[1.68rem] absolute top-[16.75rem] left-[6.5rem] w-[30.72075rem] rotate-[-2.013deg] text-[1.875rem] leading-[150%] font-normal text-white'>
          {data?.second_desc}
        </p>
        <Image
          alt=''
          width={311.8928}
          height={260.1013}
          src={'/about-us/section-mission/decor-flower-basket.webp'}
          className='xsm:left-[1.125rem] xsm:top-[unset] xsm:bottom-[7rem] xsm:w-[14.5rem] xsm:right-[unset] absolute top-[32.08rem] right-[0.11rem] z-5 h-auto w-[19.49331rem]'
        />
        <Image
          alt=''
          width={518.4287}
          height={696.2322}
          src={'/about-us/section-mission/decor-spider-web.webp'}
          className='xsm:left-[4.25rem] xsm:w-[18.53406rem] xsm:top-[unset] xsm:bottom-[10.52rem] absolute top-[6.05rem] left-[64.33rem] z-1 h-auto w-[32.40181rem] rotate-[3.661deg]'
        />
        <DashedLineImage />
        <Image
          alt=''
          width={375}
          height={105}
          src={'/about-us/section-mission/decor-footer.png'}
          className='absolute bottom-0 left-0 z-0 h-auto w-full sm:hidden'
        />
      </div>
      <DecorBottom />
    </section>
  )
}

'use client'

import useIsMobile from '@/hooks/useIsMobile'
import Image from 'next/image'
import styles from './banner-v2.module.css'
import clsx from 'clsx'
import ImageFallback from '@/components/image/ImageFallback'
import IconScrollDown from '@/components/icon/IconScrollDown'
import React, {useRef} from 'react'
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react'

// Import Swiper styles
import 'swiper/css'

interface IBannerImage {
  image_pc: {url: string; alt?: string}
  image_mobile: {url: string; alt?: string}
}

interface IBannerV2 {
  data: {
    title: string
    banner_image: IBannerImage[]
  }
}

export default function BannerV2({data}: IBannerV2) {
  console.log(data)
  const isMobile = useIsMobile()
  const bannerRef = useRef<HTMLDivElement>(null)
  const handleScrollDown = () => {
    if (!bannerRef.current) return
    const bannerHeight = bannerRef.current.offsetHeight
    window.scrollTo({
      top: bannerRef.current.offsetTop + bannerHeight,
      behavior: 'smooth',
    })
  }
  return (
    <section
      ref={bannerRef}
      className='relative h-[37rem] overflow-hidden max-sm:h-[28.125rem]'
    >
      <div className='absolute top-0 left-0 w-full h-[13.4375rem] opacity-40 bg-[linear-gradient(180deg,#131f31_0%,rgba(19,31,49,0)_100%)] z-[1]'></div>
      <div className='absolute bottom-0 left-0 h-[41.625rem] w-full bg-[linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),linear-gradient(180deg,rgba(0,0,0,0.00)_58.09%,rgba(0,0,0,0.35)_82.98%)] z-[1]'></div>

      {!isMobile ? (
        <Image
          alt=''
          width={2000}
          height={1000}
          src='/banner/bg-cloud.webp'
          className='absolute bottom-[-0.25rem] left-0 w-full h-auto z-5 pointer-events-none'
        />
      ) : (
        <React.Fragment>
          <Image
            alt=''
            width={2000}
            height={1000}
            src='/banner/bg-cloud-mb.webp'
            className='absolute left-0 w-full h-auto z-5 pointer-events-none bottom-[-0.5rem]'
          />
        </React.Fragment>
      )}

      <div className='max-sm:hidden absolute left-1/2 -translate-x-1/2 top-[27.8125rem] w-[12.5rem] z-[2] flex flex-col items-center'>
        <p className='text-[#fff] text-center font-trip-sans text-[0.875rem] font-medium leading-[120%] tracking-[0.00219rem] mb-[0.5rem] self-stretch pb-[0.625rem]'>
          Scroll down
        </p>
        <button
          onClick={handleScrollDown}
          className='cursor-pointer bg-transparent'
        >
          <IconScrollDown className='h-[3.125rem] w-auto' />
        </button>
      </div>

      <div className='absolute top-[9.5625rem] max-sm:top-[8.0875rem] max-sm:min-h-[10.5rem] max-sm:justify-end max-sm:w-[19.79144rem] left-1/2 -translate-x-1/2 flex flex-col items-center z-[2]'>
        <Image
          alt=''
          width={300}
          height={150}
          src='/banner/bg-title.png'
          className='w-[19.79156rem] h-auto pointer-events-none max-sm:absolute max-sm:left-1/2 max-sm:-translate-x-1/2 max-sm:bottom-[0.5rem]'
        />
        <h1
          className={clsx(
            'relative z-[1] w-full top-[-3rem] max-sm:top-0',
            styles.bannerTitle,
          )}
          dangerouslySetInnerHTML={{__html: data?.title ?? ''}}
        ></h1>
      </div>

      <Swiper className='absolute top-0 left-0 w-full h-full z-0!'>
        {data?.banner_image?.map(({image_pc, image_mobile}, index) => {
          const imageUrl = isMobile ? image_mobile.url : image_pc.url
          const altText = isMobile ? image_mobile.alt : image_pc.alt
          return (
            <SwiperSlide
              className='w-full h-full'
              key={index}
            >
              <ImageFallback
                width={2000}
                height={1000}
                alt={altText ?? ''}
                src={imageUrl ?? '/images/fallback-image.webp'}
                className='w-full h-full object-cover '
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

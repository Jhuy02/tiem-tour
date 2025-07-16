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
import 'swiper/css/effect-fade'
import {Autoplay, EffectFade} from 'swiper/modules'

export interface IBannerImage {
  image_pc: {url: string; alt?: string}
  image_mobile: {url: string; alt?: string}
}

export interface IBannerV2 {
  data: {
    title: string
    banner_image: IBannerImage[]
  }
  variant?: 'primary' | 'secondary'
}

export default function BannerV2({data, variant = 'primary'}: IBannerV2) {
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
      className={clsx(
        'relative h-[37rem] overflow-hidden max-sm:h-[28.125rem]',
        {
          [styles.bannerPrimary]: variant === 'primary',
          [styles.bannerSecondary]: variant === 'secondary',
        },
      )}
    >
      <div className='pointer-events-none absolute top-0 left-0 z-[1] h-[13.4375rem] w-full bg-[linear-gradient(180deg,#131f31_0%,rgba(19,31,49,0)_100%)] opacity-40'></div>
      <div className='pointer-events-none absolute bottom-0 left-0 z-[1] h-[41.625rem] w-full bg-[linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),linear-gradient(180deg,rgba(0,0,0,0.00)_58.09%,rgba(0,0,0,0.35)_82.98%)]'></div>

      {!isMobile ? (
        <Image
          alt=''
          width={2000}
          height={1000}
          src='/banner/bg-cloud.webp'
          className='pointer-events-none absolute bottom-[-0.25rem] left-0 z-5 h-auto w-full'
        />
      ) : (
        <React.Fragment>
          <Image
            alt=''
            width={2000}
            height={1000}
            src='/banner/bg-cloud-mb.webp'
            className='pointer-events-none absolute bottom-[-0.5rem] left-0 z-5 h-auto w-full'
          />
        </React.Fragment>
      )}

      {data?.title && (
        <>
          <div className='absolute top-[27.8125rem] left-1/2 z-[2] flex w-[12.5rem] -translate-x-1/2 flex-col items-center max-sm:hidden'>
            <p className='font-trip-sans mb-[0.5rem] self-stretch pb-[0.625rem] text-center text-[0.875rem] leading-[120%] font-medium tracking-[0.00219rem] text-[#fff]'>
              Scroll down
            </p>
            <button
              onClick={handleScrollDown}
              className='cursor-pointer bg-transparent'
            >
              <IconScrollDown className='h-[3.125rem] w-auto' />
            </button>
          </div>
          <div className='absolute top-[9.5625rem] left-1/2 z-[2] flex -translate-x-1/2 flex-col items-center max-sm:top-[8.0875rem] max-sm:min-h-[10.5rem] max-sm:w-[19.79144rem] max-sm:justify-end'>
            <Image
              alt=''
              width={300}
              height={150}
              src='/banner/bg-title.png'
              className='pointer-events-none h-auto w-[19.79156rem] max-sm:absolute max-sm:bottom-[0.5rem] max-sm:left-1/2 max-sm:-translate-x-1/2'
            />
            <h1
              className={clsx(
                'relative top-[-3rem] z-[1] w-full max-sm:top-0',
                styles.bannerTitle,
              )}
              dangerouslySetInnerHTML={{__html: data?.title ?? ''}}
            ></h1>
          </div>
        </>
      )}

      <Swiper
        className='swiper-fade absolute top-0 left-0 z-0! h-full w-full'
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade]}
        speed={1000}
        slidesPerView={1}
        spaceBetween={0}
        effect='fade'
        fadeEffect={{
          crossFade: true,
        }}
      >
        {Array.isArray(data?.banner_image) &&
          data?.banner_image?.map(({image_pc, image_mobile}, index) => {
            const imageUrl = isMobile ? image_mobile.url : image_pc.url
            const altText = isMobile ? image_mobile.alt : image_pc.alt
            return (
              <SwiperSlide
                className='h-full w-full'
                key={index}
              >
                <ImageFallback
                  width={2000}
                  height={1000}
                  alt={altText ?? ''}
                  src={imageUrl ?? '/images/fallback-image.webp'}
                  className='h-full w-full object-cover'
                />
              </SwiperSlide>
            )
          })}
      </Swiper>
    </section>
  )
}

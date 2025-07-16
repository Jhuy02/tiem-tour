'use client'

import dynamic from 'next/dynamic'
import {useEffect, useRef, useState} from 'react'
import {FreeMode, Navigation, Thumbs} from 'swiper/modules'
import type {Swiper as SwiperType} from 'swiper'
import {SwiperSlide} from 'swiper/react'
import ImageFallback from '@/components/image/ImageFallback'
import {convertRemToPx} from '@/lib/utils'
import useIsMobile from '@/hooks/useIsMobile'
import {useZoomImageWheel} from '@zoom-image/react'

import 'swiper/css'
import 'swiper/css/thumbs'

const Swiper = dynamic(() => import('swiper/react').then((mod) => mod.Swiper), {
  ssr: false,
})

const DAY_LENGTH = 6

export const TripadvisorTab = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)
  const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null)
  const isMobile = useIsMobile()
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])

  const {createZoomImage: createZoomImageWheel} = useZoomImageWheel()

  useEffect(() => {
    if (!mainSwiper) return

    const attachZoomToActiveSlide = () => {
      const activeIndex = mainSwiper.activeIndex
      const activeEl = imageRefs.current[activeIndex]
      if (activeEl) {
        createZoomImageWheel(activeEl)
      }
    }

    attachZoomToActiveSlide()
    mainSwiper.on('slideChangeTransitionEnd', attachZoomToActiveSlide)

    return () => {
      mainSwiper.off('slideChangeTransitionEnd', attachZoomToActiveSlide)
    }
  }, [mainSwiper, createZoomImageWheel])

  return (
    <div className='mt-4'>
      <h3 className='text-[#303030] font-dvn-luckiest-guy text-[1.125rem] leading-[1.35rem] tracking-[0.0125rem] uppercase'>
        HaGiang loop map
      </h3>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={convertRemToPx(0.5)}
        slidesPerView={isMobile ? 3.3 : 4.4}
        freeMode
        watchSlidesProgress
        modules={[FreeMode, Navigation, Thumbs]}
        className='tripadvisor-tab-swiper mt-[0.75rem]'
        speed={700}
        grabCursor
      >
        {Array.from({length: DAY_LENGTH}).map((_, index) => (
          <SwiperSlide
            key={index}
            className='px-[1.5rem] py-[0.5rem] rounded-[1.25rem] bg-[#EBEBEB]! border-none cursor-pointer'
          >
            <p className='text-[#303030] font-medium leading-[1.2rem] tracking-[0.0025rem] whitespace-nowrap'>
              Day {index + 1}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setMainSwiper}
        thumbs={{swiper: thumbsSwiper}}
        modules={[FreeMode, Navigation, Thumbs]}
        className='w-full h-full mt-[1.8125rem]'
        speed={700}
        grabCursor={false}
        allowTouchMove={false}
      >
        {Array.from({length: DAY_LENGTH}).map((_, index) => (
          <SwiperSlide
            key={index}
            className='rounded-[0.75rem]'
          >
            <div
              className='relative w-full h-full mx-auto rounded-[0.75rem]'
              ref={(el) => {
                imageRefs.current[index] = el
              }}
            >
              <ImageFallback
                src={`/tour-detail/d-map-${index + 1}.webp`}
                alt={`day-${index + 1}`}
                width={580}
                height={490}
                className='object-cover w-full h-full'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

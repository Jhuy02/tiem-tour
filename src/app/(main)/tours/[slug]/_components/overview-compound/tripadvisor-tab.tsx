'use client'

import dynamic from 'next/dynamic'
import {useEffect, useRef, useState} from 'react'
import {FreeMode, Navigation, Thumbs} from 'swiper/modules'
import type {Swiper as SwiperType} from 'swiper'
import {SwiperSlide} from 'swiper/react'
import ImageFallback from '@/components/image/ImageFallback'
import {convertRemToPx} from '@/lib/utils'
import useIsMobile from '@/hooks/useIsMobile'
import {TransformWrapper, TransformComponent} from 'react-zoom-pan-pinch'

import 'swiper/css'
import 'swiper/css/thumbs'
import {TourDetailContent} from '@/types/tours.interface'
import {ZoomInIcon, ZoomOutIcon} from 'lucide-react'

const Swiper = dynamic(() => import('swiper/react').then((mod) => mod.Swiper), {
  ssr: false,
})

export const TripadvisorTab = ({
  data,
  map,
}: {
  data: TourDetailContent['acf_fields']['tripadvisor']
  map: string
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)
  const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null)
  const isMobile = useIsMobile()
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])
  const [currentScale, setCurrentScale] = useState(1)

  return (
    <div className='mt-4'>
      <h3 className='font-dvn-luckiest-guy text-[1.125rem] leading-[1.35rem] tracking-[0.0125rem] text-[#303030] uppercase'>
        {map} loop map
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
        {data.map.map((_, index) => (
          <SwiperSlide
            key={index}
            className='cursor-pointer rounded-[1.25rem] border-none bg-[#EBEBEB]! px-[1.5rem] py-[0.5rem]'
          >
            <p className='leading-[1.2rem] font-medium tracking-[0.0025rem] whitespace-nowrap text-[#303030]'>
              Day {index + 1}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setMainSwiper}
        thumbs={{swiper: thumbsSwiper}}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mt-[1.8125rem] h-full w-full'
        speed={700}
        grabCursor={false}
        allowTouchMove={false}
      >
        {data.map.map((item, index) => (
          <SwiperSlide
            key={index}
            className='rounded-[0.75rem]'
          >
            <div
              className='relative mx-auto flex h-full w-full flex-col items-center rounded-[0.75rem]'
              ref={(el) => {
                imageRefs.current[index] = el
              }}
            >
              <TransformWrapper
                initialScale={1}
                minScale={1}
                maxScale={4}
                wheel={{disabled: isMobile}}
                pinch={{disabled: isMobile}}
                panning={{disabled: isMobile && currentScale === 1}}
                onTransformed={({state}) => setCurrentScale(state.scale)}
              >
                {({zoomIn, zoomOut, resetTransform, ...rest}) => (
                  <>
                    {isMobile && (
                      <div className='absolute right-2 bottom-2 z-10 flex w-full justify-end gap-2'>
                        <button onClick={() => zoomIn()}>
                          <ZoomInIcon className='size-4' />
                        </button>
                        <button onClick={() => zoomOut()}>
                          <ZoomOutIcon className='size-4' />
                        </button>
                      </div>
                    )}
                    <TransformComponent>
                      <ImageFallback
                        src={item.url}
                        alt={item.alt}
                        width={item.width}
                        height={item.height}
                        className='h-full w-full object-cover'
                      />
                    </TransformComponent>
                  </>
                )}
              </TransformWrapper>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

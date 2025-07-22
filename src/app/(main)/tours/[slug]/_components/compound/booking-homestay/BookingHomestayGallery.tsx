'use client'
import useIsMobile from '@/hooks/useIsMobile'
import {IMedia} from '@/types/media.interface'
import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {convertRemToPx} from '@/lib/utils'
import 'swiper/css'
import Image from 'next/image'

interface BookingHomestayGalleryProps {
  images: IMedia[]
}
export default function BookingHomestayGallery({
  images,
}: BookingHomestayGalleryProps) {
  const isMobile = useIsMobile()
  return (
    <>
      {!isMobile && (
        <div className=''>
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={convertRemToPx(0.5)}
            modules={[]}
            className='rounded-[0.5rem]'
          >
            {Array.isArray(images) &&
              images?.map((item, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    className='h-[8.73331rem] w-[12.95088rem]! shrink-0 overflow-hidden rounded-[0.75rem]'
                  >
                    <Image
                      width={207.2137}
                      height={139.7329}
                      alt={item?.alt ?? ''}
                      src={item?.url}
                      className='h-full w-full object-cover'
                    />
                  </SwiperSlide>
                )
              })}
          </Swiper>
        </div>
      )}
      {isMobile && (
        <div className='hidden_scroll xsm:flex hidden items-start space-x-[0.5rem] overflow-x-auto'>
          {Array.isArray(images) &&
            images?.map((item, index) => {
              return (
                <div
                  key={index}
                  className='h-[8.73331rem] w-[12.95088rem]! shrink-0 overflow-hidden rounded-[0.75rem]'
                >
                  <Image
                    width={207.2137}
                    height={139.7329}
                    alt={item?.alt ?? ''}
                    src={item?.url}
                    className='h-full w-full object-cover'
                  />
                </div>
              )
            })}
        </div>
      )}
    </>
  )
}

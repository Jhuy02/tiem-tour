'use client'
import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import Image from 'next/image'

export default function Banner({data}: any) {
  return (
    <section className='relative w-full h-[37rem] overflow-hidden'>
      <div className='absolute top-[9.5625rem] left-1/2 -translate-x-1/2 flex flex-col items-center z-[2]'>
        <Image
          width={300}
          height={150}
          alt=''
          src='/images/background-heading'
        />
        <h1 className=''></h1>
      </div>
      <Swiper className='w-full h-full'>
        <SwiperSlide className='w-full h-full'>Slide 1</SwiperSlide>
        <SwiperSlide className='w-full h-full'>Slide 1</SwiperSlide>
        <SwiperSlide className='w-full h-full'>Slide 1</SwiperSlide>
        <SwiperSlide className='w-full h-full'>Slide 1</SwiperSlide>
        <SwiperSlide className='w-full h-full'>Slide 1</SwiperSlide>
      </Swiper>
    </section>
  )
}

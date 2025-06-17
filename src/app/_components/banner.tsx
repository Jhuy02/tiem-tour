'use client'
import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'

export default function Banner() {
  return (
    <section className='relative w-full h-[41.625rem]'>
      <Swiper className='w-full h-full'>
        <SwiperSlide className='w-full h-full'>Slide 1</SwiperSlide>
        <SwiperSlide className='w-full h-full'>Slide 2</SwiperSlide>
        <SwiperSlide className='w-full h-full'>Slide 3</SwiperSlide>
        <SwiperSlide className='w-full h-full'>Slide 4</SwiperSlide>
        <SwiperSlide className='w-full h-full'>Slide 5</SwiperSlide>
        <SwiperSlide className='w-full h-full'>Slide 6</SwiperSlide>
        <SwiperSlide className='w-full h-full'>Slide 7</SwiperSlide>
        <SwiperSlide className='w-full h-full'>Slide 8</SwiperSlide>
        <SwiperSlide className='w-full h-full'>Slide 9</SwiperSlide>
      </Swiper>
    </section>
  )
}

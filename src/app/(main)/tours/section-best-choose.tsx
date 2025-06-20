'use client'
import ButtonNavNext from '@/app/_components/button-nav-next'
import ButtonNavPrev from '@/app/_components/button-nav-prev'
import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'

import './section-best-choose.css'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import TourCard from '@/app/(main)/tours/_components/tour-card'
import useIsMobile from '@/hooks/useIsMobile'
import {convertRemToPx} from '@/lib/utils'
import Link from 'next/link'
import {Navigation, Pagination} from 'swiper/modules'
import {TourItemResponse} from '@/types/tours.interface'

interface IBestChooseTour {
  title: string
  tour_list: TourItemResponse[]
}

export default function SectionBestChoose({title, tour_list}: IBestChooseTour) {
  const isMobile = useIsMobile()
  return (
    <section className='relative best-choose'>
      <div className='max-w-[87.5rem] mx-auto max-sm:py-[2rem] pt-[1.875rem]'>
        <div className='flex items-center justify-between w-full pb-[2.5rem] max-sm:pb-0 mb-[2rem] max-sm:mb-[0.75rem] max-sm:px-[1rem]'>
          <h2 className='text-[#3b3943] font-dvn-luckiest-guy text-[3rem] font-normal leading-[130%] max-sm:text-[1.5625rem]'>
            {title ?? ''}
          </h2>
          <div className='flex items-center space-x-[1rem] max-sm:hidden'>
            <ButtonNavPrev className='best-choose-btn-prev' />
            <ButtonNavNext className='best-choose-btn-next' />
          </div>
        </div>

        {isMobile ? (
          <div className='flex overflow-x-auto scrollbar-hidden'>
            {tour_list?.map((tour, index) => {
              return (
                <Link
                  href={tour.link}
                  className='w-[19.625rem] ml-[1rem] last:mr-[1rem] block shrink-0'
                  key={index}
                >
                  <TourCard
                    title={tour.title}
                    price={tour.price}
                    image={tour.image}
                    location={tour.location}
                    duration={tour.duration}
                  />
                </Link>
              )
            })}
          </div>
        ) : (
          <React.Fragment>
            <Swiper
              modules={[Pagination, Navigation]}
              slidesPerView={4}
              spaceBetween={convertRemToPx(1.25)}
              navigation={{
                prevEl: '.best-choose-btn-prev',
                nextEl: '.best-choose-btn-next',
              }}
              pagination={{
                el: '.best-choose-pagination',
                clickable: true,
              }}
              className='best-choose-swiper'
            >
              {tour_list.map((tour, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Link
                      href={tour.link}
                      className='shrink-0'
                    >
                      <TourCard
                        title={tour.title}
                        price={tour.price}
                        image={tour.image}
                        location={tour.location}
                        duration={tour.duration}
                      />
                    </Link>
                  </SwiperSlide>
                )
              })}
            </Swiper>
            <div className='best-choose-pagination'></div>
          </React.Fragment>
        )}
      </div>
    </section>
  )
}

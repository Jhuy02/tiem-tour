'use client'
import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {TourItemResponse} from '@/types/tours.interface'
import useIsMobile from '@/hooks/useIsMobile'
import Link from 'next/link'
import TourCard from '@/app/(main)/tours/_components/common/TourCard'
import {Navigation, Pagination} from 'swiper/modules'
import {convertRemToPx} from '@/lib/utils'
import ButtonNavNext from '@/app/_components/button-nav-next'
import ButtonNavPrev from '@/app/_components/button-nav-prev'

import 'swiper/css'
import 'swiper/css/pagination'
import './styles.css'

interface TourBestChooseType {
  title: string
  tour_list: TourItemResponse[]
}

export default function TourBestChoose({title, tour_list}: TourBestChooseType) {
  const isMobile = useIsMobile()

  return (
    <section className='best-choose relative'>
      <div className='mx-auto max-w-[87.5rem] pt-[1.875rem] max-sm:py-[2rem]'>
        <div className='mb-[2rem] flex w-full items-center justify-between pb-[2.5rem] max-sm:mb-[0.75rem] max-sm:px-[1rem] max-sm:pb-0'>
          <h2 className='font-dvn-luckiest-guy text-[3rem] leading-[130%] font-normal text-[#3b3943] max-sm:text-[1.5625rem]'>
            {title ?? ''}
          </h2>
          <div className='flex items-center space-x-[1rem] max-sm:hidden'>
            <ButtonNavPrev className='best-choose-btn-prev' />
            <ButtonNavNext className='best-choose-btn-next' />
          </div>
        </div>

        {isMobile ? (
          <div className='scrollbar-hidden flex overflow-x-auto'>
            {tour_list?.map((tour, index) => {
              return (
                <Link
                  key={index}
                  href={`/tours/${tour.slug}`}
                  className='ml-[1rem] block w-[19.625rem] shrink-0 last:mr-[1rem]'
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
                      href={`/tours/${tour.slug}`}
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

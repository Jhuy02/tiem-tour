'use client'

import {Skeleton} from '@/components/ui/skeleton'
import {convertRemToPx} from '@/lib/utils'
import {IDiscoverTour} from '@/types/discover.interface'
import type {Swiper as SwiperType} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'
import TourCard from './tour-card'

import 'swiper/css'

interface DesktopTourSwiperProps {
  tours: IDiscoverTour[]
  toursData: {data: IDiscoverTour[]} | null
  isLoading: boolean
  onSwiper: (swiper: SwiperType) => void
}

const DesktopTourSwiper = ({
  tours,
  toursData,
  isLoading,
  onSwiper,
}: DesktopTourSwiperProps) => {
  return (
    <div className='discover__content xsm:hidden'>
      <Swiper
        spaceBetween={convertRemToPx(1.875)}
        slidesPerView={3.675}
        className='px-[6.25rem]!'
        grabCursor={true}
        onSwiper={onSwiper}
        speed={800}
        effect='slide'
      >
        {isLoading ? (
          <div className='flex items-center justify-center space-x-[2rem]'>
            {Array.from({length: 4}).map((_, index) => (
              <Skeleton
                key={index}
                className='h-[34.75rem] w-[22.1875rem] animate-pulse overflow-hidden rounded-lg'
              />
            ))}
          </div>
        ) : tours && !toursData ? (
          tours.map((tour) => (
            <SwiperSlide key={tour.link}>
              <TourCard tour={tour} />
            </SwiperSlide>
          ))
        ) : toursData ? (
          toursData?.data?.map((tour: IDiscoverTour) => (
            <SwiperSlide
              key={tour.link}
              className='test'
            >
              <TourCard tour={tour} />
            </SwiperSlide>
          ))
        ) : (
          <div>No tours found</div>
        )}
      </Swiper>
    </div>
  )
}

export default DesktopTourSwiper

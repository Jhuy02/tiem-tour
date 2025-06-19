'use client'

import {IDiscoverTour} from '@/types/discover.interface'
import {Skeleton} from '@/components/ui/skeleton'
import {Swiper, SwiperSlide} from 'swiper/react'
import type {Swiper as SwiperType} from 'swiper'
import {convertRemToPx} from '@/lib/utils'
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
                className='w-[22.1875rem] h-[34.75rem] rounded-lg overflow-hidden animate-pulse'
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
            <SwiperSlide key={tour.link}>
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

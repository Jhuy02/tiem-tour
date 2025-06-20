import TourCard from '@/app/(main)/tours/_components/tour-card'
import {Skeleton} from '@/components/ui/skeleton'
import {TourItemResponse} from '@/types/tours.interface'
import Link from 'next/link'
import React from 'react'

interface TourListProps {
  isLoading: boolean
  data: TourItemResponse[]
}
export default function TourList({isLoading, data}: TourListProps) {
  if (isLoading) {
    return (
      <div className='grid grid-cols-12 gap-[1rem] sm:gap-[1.25rem]'>
        {[...Array(12)].map((_, index) => (
          <Skeleton
            key={index}
            className='h-[25.8125rem] rounded-none col-span-3 bg-[#fff] max-sm:col-span-full'
          />
        ))}
      </div>
    )
  }
  if (!data?.length) {
    return (
      <p className='mt-[0.5rem] text-center text-[1.5rem] font-semibold leading-[160%] uppercase tracking-[-0.01563rem] font-trip-sans text-[#FF7A00]'>
        No suitable tour found. Please try again!
      </p>
    )
  }
  return (
    <div className='grid grid-cols-12 gap-[1rem] sm:gap-[1.25rem]'>
      {data.map((item) => {
        return (
          <Link
            key={item.link}
            href={item.link}
            className='relative col-span-3 max-sm:col-span-full'
          >
            <TourCard
              title={item.title}
              price={item.price}
              image={item.image}
              location={item.location}
              duration={item.duration}
            />
          </Link>
        )
      })}
    </div>
  )
}

import {Skeleton} from '@/components/ui/skeleton'
import TourCard from '@/layout/header/header-pc/TourCard'
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
      <div className='grid grid-cols-1 gap-[0.875rem]'>
        {[...Array(3)].map((_, index) => (
          <Skeleton
            key={index}
            className='h-[9rem] w-full rounded-none bg-[#fff] shadow-[0px_2px_16px_0px_rgba(0,0,0,0.08)]'
          />
        ))}
      </div>
    )
  }
  if (!data?.length) {
    return (
      <p className='font-trip-sans mt-[0.5rem] text-center text-[1.5rem] leading-[160%] font-semibold tracking-[-0.01563rem] text-[#FF7A00] uppercase'>
        No suitable tour found.
      </p>
    )
  }
  return (
    <div className='grid grid-cols-1 gap-[0.875rem]'>
      {data.map((item) => {
        return (
          <Link
            key={item.slug}
            href={`/tours/${item.slug}`}
            className='relative'
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

'use client'
import FilterSelectOption from '@/app/(main)/tours/_components/tour-select'
import {
  DiscoveryTourContext,
  IDiscoveryTourContext,
} from '@/app/(main)/tours/section-discovery'
import {TourFilterProps} from '@/types/tours.interface'
import React, {useContext} from 'react'

export default function TourFilter({
  tourDuration,
  tourLocation,
  tourBudget,
}: TourFilterProps) {
  const context = useContext(DiscoveryTourContext)
  if (!context) {
    throw new Error(
      'TourFilter must be used within DiscoveryTourContext.Provider',
    )
  }
  const {handleFilterChange, filters}: IDiscoveryTourContext = context

  return (
    <div className='flex h-[5.1875rem] p-[0.5rem] items-end self-stretch bg-white'>
      <FilterSelectOption
        keyParam='location'
        icon='./tours/compass.svg'
        label='Location of interest'
        select='multiple'
        value={filters.location}
        options={tourLocation}
        className='flex-1 h-[4.1875rem]'
        onChange={handleFilterChange}
      />
      <FilterSelectOption
        keyParam='duration'
        icon='./tours/calendar.svg'
        label='Duration'
        select='multiple'
        value={filters.duration}
        options={tourDuration}
        className='flex-1 h-[4.1875rem]'
        onChange={handleFilterChange}
      />
      <FilterSelectOption
        keyParam='orderby'
        icon='./tours/budget.svg'
        label='Proposed budget'
        select='single'
        value={filters.orderby}
        options={tourBudget}
        className='flex-1 h-[4.1875rem]'
        onChange={handleFilterChange}
      />
    </div>
  )
}

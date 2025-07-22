'use client'
import {
  TourDiscoveryTripContext,
  TourDiscoveryTripType,
} from '@/app/(main)/tours/_components/tour-discovery-trip'
import FilterSelectOption from '@/app/(main)/tours/_components/tour-discovery-trip/TourSelect'

import {TourFilterProps} from '@/types/tours.interface'
import React, {useContext} from 'react'

export default function TourFilter({
  tourDuration,
  tourLocation,
  tourBudget,
}: TourFilterProps) {
  const context = useContext(TourDiscoveryTripContext)
  if (!context) {
    throw new Error(
      'TourFilter must be used within TourDiscoveryTripContext.Provider',
    )
  }
  const {handleFilterChange, filters}: TourDiscoveryTripType = context

  return (
    <div className='flex items-end self-stretch bg-white px-[0.5rem]'>
      <FilterSelectOption
        keyParam='location'
        icon='./tours/compass.svg'
        label='Location of interest'
        select='multiple'
        value={filters.location}
        options={tourLocation}
        className='flex-1'
        onChange={handleFilterChange}
      />
      <FilterSelectOption
        keyParam='duration'
        icon='./tours/calendar.svg'
        label='Duration'
        select='multiple'
        value={filters.duration}
        options={tourDuration}
        className='flex-1'
        onChange={handleFilterChange}
      />
      <FilterSelectOption
        keyParam='orderby'
        icon='./tours/budget.svg'
        label='Proposed budget'
        select='single'
        value={filters.orderby}
        options={tourBudget}
        className='flex-1'
        onChange={handleFilterChange}
      />
    </div>
  )
}

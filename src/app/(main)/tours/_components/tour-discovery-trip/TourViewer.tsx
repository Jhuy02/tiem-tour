'use client'
import React, {useContext} from 'react'
import IconCloseFilterChip from '@/components/icon/IconCloseFilterChip'
import {
  TourDiscoveryTripContext,
  TourDiscoveryTripType,
} from '@/app/(main)/tours/_components/tour-discovery-trip'

interface TourViewerItemProps {
  keyParam: 'location' | 'duration' | 'orderby'
  label: string
  slug: string
  name: string
  onRemove: (
    key: 'location' | 'duration' | 'orderby',
    value: {slug: string},
  ) => void
}
function TourViewerItem({
  keyParam,
  label,
  slug,
  name,
  onRemove,
}: TourViewerItemProps) {
  return (
    <div
      data-slug={slug}
      data-key-param={keyParam}
      className='inline-flex h-[2rem] max-w-fit items-center justify-center space-x-[0.75rem] bg-[rgba(170,170,170,0.32)] px-[0.75rem]'
    >
      <div className='font-trip-sans flex items-center space-x-[0.25rem] text-[1rem] leading-[160%] tracking-[0.0025rem]'>
        <p className='text-[rgba(48,48,48,0.40)]'>{label}:</p>
        <span className='text-[#303030]'>{name}</span>
      </div>
      <button
        onClick={() => onRemove(keyParam, {slug})}
        className='h-[1.25rem] w-[1.25rem] cursor-pointer rounded-full'
      >
        <IconCloseFilterChip className='h-auto w-full rounded-full' />
      </button>
    </div>
  )
}

export default function TourViewer() {
  const context = useContext(TourDiscoveryTripContext)
  if (!context) {
    throw new Error(
      'TourFilter must be used within DiscoveryTourContext.Provider',
    )
  }
  const {filters, setFilters, handleFilterChange}: TourDiscoveryTripType =
    context
  const handleRemoveChip = (key: string, value: {slug: string}) => {
    // Lọc lại danh sách filters với key tương ứng để loại bỏ item có slug bị xóa
    const filterKey = key as keyof typeof filters
    const updatedFilter =
      filters[filterKey]?.filter((item) => item.slug !== value.slug) || []

    // Cập nhật state filters
    setFilters((prev) => ({
      ...prev,
      [key]: updatedFilter,
    }))
    // Cập nhật URL (xoá param tương ứng)
    handleFilterChange(key, updatedFilter)
  }
  return (
    <div className='mt-[0.8125rem] flex flex-wrap space-y-[0.75rem] space-x-[0.75rem]'>
      {filters.location.map((item) => (
        <TourViewerItem
          key={item.id}
          name={item.name}
          slug={item.slug}
          keyParam='location'
          label='Location of interest'
          onRemove={handleRemoveChip}
        />
      ))}
      {filters.duration.map((item) => (
        <TourViewerItem
          key={item.id}
          name={item.name}
          slug={item.slug}
          keyParam='duration'
          label='Duration'
          onRemove={handleRemoveChip}
        />
      ))}
      {filters.orderby.map((item) => (
        <TourViewerItem
          key={item.id}
          name={item.name}
          slug={item.slug}
          keyParam='orderby'
          label='Budget'
          onRemove={handleRemoveChip}
        />
      ))}
    </div>
  )
}

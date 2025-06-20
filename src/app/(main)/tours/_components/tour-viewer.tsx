'use client'
import {
  DiscoveryTourContext,
  IDiscoveryTourContext,
} from '@/app/(main)/tours/section-discovery'
import IconCloseFilterChip from '@/components/icon/IconCloseFilterChip'
import React, {useContext} from 'react'

interface ChipFilterProps {
  keyParam: 'location' | 'duration' | 'orderby'
  label: string
  slug: string
  name: string
  onRemove: (
    key: 'location' | 'duration' | 'orderby',
    value: {slug: string},
  ) => void
}
function ChipFilter({keyParam, label, slug, name, onRemove}: ChipFilterProps) {
  return (
    <div
      data-slug={slug}
      data-key-param={keyParam}
      className='inline-flex items-center justify-center space-x-[0.75rem] max-w-fit h-[2rem] px-[0.75rem] bg-[rgba(170,170,170,0.32)]'
    >
      <div className='font-trip-sans flex items-center space-x-[0.25rem] text-[1rem] leading-[160%] tracking-[0.0025rem]'>
        <p className='text-[rgba(48,48,48,0.40)]'>{label}:</p>
        <span className='text-[#303030]'>{name}</span>
      </div>
      <button
        onClick={() => onRemove(keyParam, {slug})}
        className='w-[1.25rem] h-[1.25rem] rounded-full cursor-pointer'
      >
        <IconCloseFilterChip className='w-full h-auto rounded-full' />
      </button>
    </div>
  )
}

export default function TourViewer() {
  const context = useContext(DiscoveryTourContext)
  if (!context) {
    throw new Error(
      'TourFilter must be used within DiscoveryTourContext.Provider',
    )
  }
  const {filters, setFilters, handleFilterChange}: IDiscoveryTourContext =
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
    <div className='flex flex-wrap space-x-[0.75rem] space-y-[0.75rem]'>
      {filters.location.map((item) => (
        <ChipFilter
          key={item.id}
          name={item.name}
          slug={item.slug}
          keyParam='location'
          label='Location of interest'
          onRemove={handleRemoveChip}
        />
      ))}
      {filters.duration.map((item) => (
        <ChipFilter
          key={item.id}
          name={item.name}
          slug={item.slug}
          keyParam='duration'
          label='Duration'
          onRemove={handleRemoveChip}
        />
      ))}
      {filters.orderby.map((item) => (
        <ChipFilter
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

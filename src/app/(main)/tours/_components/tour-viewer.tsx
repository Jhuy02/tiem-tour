'use client'
import TourViewerItem from '@/app/(main)/tours/_components/tour-viewer-item'
import {
  DiscoveryTourContext,
  IDiscoveryTourContext,
} from '@/app/(main)/tours/section-discovery'
import React, {useContext} from 'react'

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

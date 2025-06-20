'use client'
import TourFilter from '@/app/(main)/tours/_components/tour-filter'
import TourFilterMobile from '@/app/(main)/tours/_components/tour-filter-mobile'
import TourList from '@/app/(main)/tours/_components/tour-list'
import TourViewer from '@/app/(main)/tours/_components/tour-viewer'
import {getSelectedOptionsFromParams} from '@/app/(main)/tours/helper'
import PaginationV2 from '@/components/pagination/PaginationV2'
import useIsMobile from '@/hooks/useIsMobile'
import {fetcherCMS} from '@/lib/swr'
import {DiscoveryTourProps, TourTaxonomy} from '@/types/tours.interface'
import {useRouter, useSearchParams} from 'next/navigation'
import React, {createContext, useRef, useState} from 'react'
import useSWR from 'swr'

const TOUR_BUDGET_TAX = [
  {
    id: 1,
    name: '<1000$',
    slug: 'less',
  },
  {
    id: 2,
    name: '1000$ → 2000$',
    slug: 'to',
  },
  {
    id: 3,
    name: '> 2000$',
    slug: 'over',
  },
]
export interface IDiscoveryTourContext {
  handleFilterChange: (key: string, value: {slug: string}[]) => void
  handleFilterOnMobile: () => void
  filters: {
    location: TourTaxonomy[]
    duration: TourTaxonomy[]
    orderby: TourTaxonomy[]
  }
  setFilters: React.Dispatch<
    React.SetStateAction<{
      location: TourTaxonomy[]
      duration: TourTaxonomy[]
      orderby: TourTaxonomy[]
    }>
  >
}

export const DiscoveryTourContext = createContext<IDiscoveryTourContext | null>(
  null,
)

export default function DiscoveryTour({
  page = 1,
  initialTours,
  tourLocationTax,
  tourDurationTax,
}: DiscoveryTourProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const isMobile = useIsMobile()
  const [currentPage, setCurrentPage] = useState<number>(page)
  const [filters, setFilters] = useState(() => {
    const params = getSelectedOptionsFromParams({
      searchParams,
      tourLocationTax,
      tourDurationTax,
      tourBudgetTax: TOUR_BUDGET_TAX,
    })
    return {
      location: params.selectedLocations,
      duration: params.selectedDurations,
      orderby: params.selectedBudgets,
    }
  })
  const containerRef = useRef<HTMLDivElement>(null)

  const {data: tours, isLoading} = useSWR(
    `wp-json/api/v1/get-all/tour?limit=12&tax=location,duration&order=DESC&${searchParams.toString()}`,
    fetcherCMS,
    {fallbackData: initialTours},
  )

  const handlePageChange = (value: number | ((prev: number) => number)) => {
    setCurrentPage(value)
    if (containerRef.current) {
      containerRef.current.scrollIntoView({behavior: 'smooth'})
    }
  }

  const handleFilterChange = (key: string, value: {slug: string}[]) => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({behavior: 'smooth'})
    }

    const current = new URLSearchParams(searchParams.toString())

    // Cập nhật hoặc xoá filter
    if (value.length === 0) {
      current.delete(key)
    } else {
      current.set(key, value.map((v) => v.slug).join(','))
    }

    // Reset page về 1
    current.set('page', '1')
    setCurrentPage(1) // Cập nhật state cho Pagination

    // Cập nhật URL
    router.push(`?${current.toString()}`, {scroll: false})
  }

  const handleFilterOnMobile = () => {
    const query: {[key: string]: string} = {}

    Object.entries(filters).forEach(([key, value]) => {
      if (value.length > 0) {
        query[key] = value.map((v) => v.slug).join(',')
      }
    })

    query['page'] = '1'

    router.push(`?${new URLSearchParams(query).toString()}`, {scroll: false})
    setCurrentPage(1)
    if (containerRef.current) {
      containerRef.current.scrollIntoView({behavior: 'smooth'})
    }
  }

  return (
    <DiscoveryTourContext.Provider
      value={{
        handleFilterChange,
        filters,
        setFilters,
        handleFilterOnMobile,
      }}
    >
      <section
        ref={containerRef}
        className='relative max-sm:px-[1rem] max-sm:py-[2rem] pt-[2.5rem] pb-[6.25rem]'
      >
        <div className='flex flex-col sm:space-y-[3rem] max-w-[87.5rem] mx-auto'>
          <div className='self-stretch w-full mb-[0.75rem] max-sm:flex max-sm:justify-between max-sm:items-center'>
            <h2 className='text-[#3B3943] font-dvn-luckiest-guy text-[3rem] max-sm:text-[1.5625rem] font-normal leading-[130%]'>
              Discovery your trip
            </h2>
            {isMobile && (
              <TourFilterMobile
                tourLocation={tourLocationTax}
                tourDuration={tourDurationTax}
                tourBudget={TOUR_BUDGET_TAX}
              />
            )}
          </div>
          {!isMobile && (
            <div className='hidden self-stretch w-full sm:flex flex-col'>
              <TourFilter
                tourLocation={tourLocationTax}
                tourDuration={tourDurationTax}
                tourBudget={TOUR_BUDGET_TAX}
              />
              <TourViewer />
            </div>
          )}
          <div>
            <div>
              <TourList
                data={tours.data}
                isLoading={isLoading}
              />
              {tours && tours?.totalPages > 1 && (
                <PaginationV2
                  pageCurrent={currentPage ?? 1}
                  setCurrentPage={handlePageChange}
                  pageCount={tours ? tours?.totalPages : 0}
                  ref={containerRef}
                  className='mt-[2.5rem] xsm:mt-[1.5rem]'
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </DiscoveryTourContext.Provider>
  )
}

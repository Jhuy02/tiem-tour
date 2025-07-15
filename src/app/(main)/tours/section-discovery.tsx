'use client'
import TourFilter from '@/app/(main)/tours/_components/tour-filter'
import TourFilterMobile from '@/app/(main)/tours/_components/tour-filter-mobile'
import TourList from '@/app/(main)/tours/_components/tour-list'
import TourViewer from '@/app/(main)/tours/_components/tour-viewer'
import PaginationV3 from '@/components/pagination/PaginationV3'
import {TAXONOMY} from '@/constants/taxonomy'
import {useDiscoveryTour} from '@/hooks/useDiscoveryTour'
import useIsMobile from '@/hooks/useIsMobile'
import {DiscoveryTourProps, TourTaxonomy} from '@/types/tours.interface'
import React, {createContext} from 'react'

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
  initialQueryParams,
  initialTours,
  initialPage = 1,
  initialTotalPages = 1,
  tourLocationTax,
  tourDurationTax,
}: DiscoveryTourProps) {
  const isMobile = useIsMobile()

  const {
    containerRef,
    filters,
    setFilters,
    handleFilterChange,
    handleFilterOnMobile,
    handlePageChange,
    latestData,
    isLoading,
    pagination,
  } = useDiscoveryTour({
    initialQueryParams,
    initialPage,
    initialTotalPages,
    initialTours,
    tourLocationTax,
    tourDurationTax,
  })

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
        className='relative pt-[2.5rem] pb-[6.25rem] max-sm:px-[1rem] max-sm:py-[2rem]'
      >
        <div className='mx-auto flex max-w-[87.5rem] flex-col sm:space-y-[3rem]'>
          <div className='mb-[0.75rem] w-full self-stretch max-sm:flex max-sm:items-center max-sm:justify-between'>
            <h2 className='font-dvn-luckiest-guy text-[3rem] leading-[130%] font-normal text-[#3B3943] max-sm:text-[1.5625rem]'>
              Discovery your trip
            </h2>
            {isMobile && (
              <TourFilterMobile
                tourLocation={tourLocationTax}
                tourDuration={tourDurationTax}
                tourBudget={TAXONOMY.budget}
              />
            )}
          </div>
          {!isMobile && (
            <div className='hidden w-full flex-col self-stretch sm:flex'>
              <TourFilter
                tourLocation={tourLocationTax}
                tourDuration={tourDurationTax}
                tourBudget={TAXONOMY.budget}
              />
              <TourViewer />
            </div>
          )}
          <div>
            <div>
              <TourList
                data={latestData}
                isLoading={isLoading}
              />
              {Array.isArray(latestData) && pagination.totalPages > 1 && (
                <PaginationV3
                  pageCurrent={pagination.page}
                  onPageChange={handlePageChange}
                  pageCount={pagination.totalPages}
                  className='xsm:mt-[1.5rem] mt-[2.5rem]'
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </DiscoveryTourContext.Provider>
  )
}

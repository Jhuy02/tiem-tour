'use client'

import {usePathname, useSearchParams} from 'next/navigation'
import {useEffect, useMemo, useRef, useState} from 'react'
import useSWR from 'swr'
import {fetcher} from '@/utils/swr'
import endpoints from '@/utils/endpoints'
import {TAXONOMY} from '@/constants/taxonomy'
import {
  TourItemResponse,
  TourListDataResponse,
  TourTaxonomy,
} from '@/types/tours.interface'
import {getSelectedOptionsFromParams} from '@/lib/helper'
import useIsMobile from '@/hooks/useIsMobile'
import gsap from 'gsap'

export function useDiscoveryTour({
  initialQueryParams,
  initialTours,
  initialPage,
  initialTotalPages,
  tourLocationTax,
  tourDurationTax,
}: {
  initialQueryParams: string
  initialTours: TourItemResponse[]
  initialPage: number
  initialTotalPages: number
  tourLocationTax: TourTaxonomy[]
  tourDurationTax: TourTaxonomy[]
}) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const containerRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()

  const [pagination, setPagination] = useState({
    page: initialPage,
    totalPages: initialTotalPages,
  })

  const [filters, setFilters] = useState(() => {
    const params = getSelectedOptionsFromParams({
      searchParams,
      tourLocationTax,
      tourDurationTax,
      tourBudgetTax: TAXONOMY.budget,
    })
    return {
      location: params.selectedLocations,
      duration: params.selectedDurations,
      orderby: params.selectedBudgets,
    }
  })

  const query = useMemo(() => {
    if (initialQueryParams === searchParams.toString()) return null
    // if (!searchParams?.size) return null
    const params = new URLSearchParams(searchParams.toString())
    params.set('page', String(pagination.page) || '1')
    params.set('limit', '12')
    params.set('tax', 'location,duration')
    params.set('order', 'DESC')

    return `api/v1${endpoints.news.list}?${params.toString()}`
  }, [searchParams, pagination.page, initialQueryParams])

  const {data: tourListData, isLoading} = useSWR<TourListDataResponse>(
    query,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnReconnect: false,
    },
  )

  const latestData = useMemo(() => {
    return Array.isArray(tourListData?.data) ? tourListData?.data : initialTours
  }, [tourListData, initialTours])

  const scrollToTop = () => {
    const container = containerRef.current
    if (!container) return
    gsap.to(window, {
      duration: isMobile ? 1 : 0.5,
      scrollTo: {y: container.offsetTop - 80},
      ease: 'power2.out',
    })
  }

  const updateURLWithoutRender = (params: URLSearchParams) => {
    if (params.get('page') === '1') {
      params.delete('page')
    }
    window.history.pushState({}, '', `${pathname}?${params.toString()}`)
  }

  const handlePageChange = (page: number) => {
    if (page === pagination.page) return
    const params = new URLSearchParams(searchParams.toString())
    params.set('page', String(page))
    setPagination((prev) => ({...prev, page}))
    updateURLWithoutRender(params)
    scrollToTop()
  }

  const handleFilterChange = (key: string, filter: {slug: string}[]) => {
    scrollToTop()
    const params = new URLSearchParams(searchParams.toString())
    if (filter.length > 0) {
      params.set(key, filter.map((v) => v.slug).join(','))
    } else {
      params.delete(key)
    }
    console.log(params)
    params.set('page', '1')
    setPagination((prev) => ({...prev, page: 1}))
    updateURLWithoutRender(params)
  }

  const handleFilterOnMobile = () => {
    scrollToTop()
    const params = new URLSearchParams(searchParams.toString())
    Object.entries(filters).forEach(([key, value]) => {
      if (value.length > 0) {
        params.set(key, value.map((v) => v.slug).join(','))
      } else {
        params.delete(key)
      }
    })
    params.set('page', '1')
    setPagination((prev) => ({...prev, page: 1}))
    updateURLWithoutRender(params)
  }

  useEffect(() => {
    if (tourListData && searchParams?.size) {
      setPagination((prev) => ({
        ...prev,
        totalPages: tourListData.totalPages,
      }))
    } else if (query === null) {
      setPagination((prev) => ({
        ...prev,
        totalPages: initialTotalPages,
      }))
    }
  }, [tourListData, searchParams?.size, query, initialTotalPages])

  return {
    containerRef,
    filters,
    setFilters,
    handleFilterChange,
    handleFilterOnMobile,
    handlePageChange,
    latestData,
    isLoading,
    pagination,
  }
}

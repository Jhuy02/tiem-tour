import {fetcherCMS} from '@/lib/swr'
import {useSearchParams} from 'next/navigation'
import {useMemo, useState, useEffect} from 'react'
import useSWR from 'swr'

export const useNewsQuery = () => {
  const [page, setPage] = useState<number>(1)
  const searchParams = useSearchParams()
  const slugCategory = searchParams ? searchParams.get('category') : 'all'
  const slugPage = searchParams ? searchParams.get('page') : '1'

  // Handle page state based on URL params and category changes
  useEffect(() => {
    if (searchParams?.get('page')) {
      setPage(Number(searchParams.get('page')))
    } else {
      // Reset to page 1 if no page param in URL (e.g., when category changes)
      setPage(1)
    }
  }, [searchParams, slugCategory])

  const query = useMemo(() => {
    if (!searchParams?.size)
      return `/wp-json/api/v1/get-all/post?page=${page}&limit=12&tax=category&category=${
        slugCategory === '' || slugCategory === null ? '' : slugCategory
      }`
    return `/wp-json/api/v1/get-all/post?page=${
      slugPage ? slugPage : page
    }&limit=12&tax=category&category=${
      slugCategory === '' || slugCategory === null ? '' : slugCategory
    }`
  }, [searchParams, slugPage, slugCategory, page])

  const {data, isLoading} = useSWR(query, fetcherCMS, {
    revalidateIfStale: false,
    revalidateOnReconnect: false,
  })

  return {
    data,
    isLoading,
    page,
    setPage,
    slugCategory,
  }
}

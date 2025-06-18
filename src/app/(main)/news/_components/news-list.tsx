'use client'
import PaginationV2 from '@/components/pagination/PaginationV2'
import {Categories, type NewsList} from '@/types/news.interface'
import {useRef} from 'react'
import NewsCategoryTabs from './news-category-tabs'
import NewsGrid from './news-grid'
import {useNewsQuery} from './use-news-query'
import {useRandomColors} from './use-random-colors'

const NewsList = ({
  news,
  categories,
}: {
  news: NewsList[]
  categories: Categories[]
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const {data, isLoading, page, setPage} = useNewsQuery()
  const randomColors = useRandomColors(news.length)

  const handlePageChange = (value: number | ((prev: number) => number)) => {
    setPage(value)
    if (containerRef.current) {
      containerRef.current.scrollIntoView({behavior: 'smooth'})
    }
  }

  return (
    <div ref={containerRef}>
      <NewsCategoryTabs categories={categories} />
      <NewsGrid
        randomColors={randomColors}
        isLoading={isLoading}
        data={data}
      />
      {data && data?.totalPages > 1 && (
        <PaginationV2
          pageCurrent={page}
          setCurrentPage={handlePageChange}
          pageCount={data ? data?.totalPages : 0}
          ref={containerRef}
          className='mt-[2.5rem] xsm:mt-[1.5rem]'
        />
      )}
    </div>
  )
}

export default NewsList

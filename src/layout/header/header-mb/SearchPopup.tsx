'use client'
import IconArrow from '@/components/icon/IconArrow'
import fetchData from '@/fetches/fetchData'
import TourCard from '@/layout/header/header-pc/TourCard'
import {DataSearch} from '@/types/options.interface'
import {TourItemResponse} from '@/types/tours.interface'
import Image from 'next/image'
import Link from 'next/link'
import {useEffect, useState} from 'react'

export default function SearchPopup({dataSearch}: {dataSearch: DataSearch}) {
  const [query, setQuery] = useState('')
  const [data, setData] = useState<TourItemResponse[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [showResults, setShowResults] = useState(false)

  useEffect(() => {
    if (query.trim().length === 0) {
      setShowResults(false)
      return
    }

    const searchTour = async () => {
      setIsLoading(true)
      try {
        const response = await fetchData({
          api: `api/v1/get-all/tour?limit=5&s=${query}`,
        })
        setData(response.data || [])
        setShowResults(true)
      } catch (error) {
        console.error('Search error:', error)
        setData([])
      } finally {
        setIsLoading(false)
      }
    }

    const debounceTimer = setTimeout(searchTour, 500)
    return () => clearTimeout(debounceTimer)
  }, [query])

  return (
    <div className='search-popup size-full'>
      <div className='search-popup__container flex size-full flex-col justify-between'>
        <div>
          <div className='search-popup__input-wrapper'>
            <Image
              src={'/header/search-normal.svg'}
              alt=''
              width={40}
              height={40}
              className='size-5'
            />
            <input
              type='text'
              className='search-popup__input'
              placeholder='Enter search keyword'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          {/* Search Results */}
          {showResults && query.trim() && (
            <div className='mt-4'>
              {isLoading ? (
                <div className='flex justify-center p-4'>
                  <div className='h-8 w-8 animate-spin rounded-full border-b-2 border-[#19C2C2]'></div>
                </div>
              ) : data.length > 0 ? (
                <div className='flex space-x-3 overflow-auto'>
                  {data.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/tours/${item.slug}`}
                      className='relative flex-shrink-0'
                    >
                      <TourCard
                        title={item.title}
                        price={item.price}
                        image={item.image}
                        location={item.location}
                        duration={item.duration}
                      />
                    </Link>
                  ))}
                </div>
              ) : (
                <div className='p-4 text-center'>
                  <p className='text-sm font-semibold text-[#FF7A00]'>
                    No suitable tour found.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Hot search keywords - only show when not searching */}
          {!query.trim() && Array.isArray(dataSearch?.hot_search?.key) && (
            <div className='search-popup__hot-search'>
              <p>{dataSearch?.hot_search?.title}</p>
              <div className='search-popup__hot-search-list'>
                {dataSearch?.hot_search?.key?.map(
                  (item: {key_text: string}, index: number) => {
                    return (
                      <div
                        key={index}
                        className='search-popup__hot-search-item cursor-pointer'
                        onClick={() => setQuery(item.key_text)}
                      >
                        <p>{item?.key_text}</p>
                      </div>
                    )
                  },
                )}
              </div>
            </div>
          )}

          {/* <div className='search-popup__history'>
            <p>{dataSearch?.history}</p>
            <div className='search-popup__history-list'>
              <div className='search-popup__history-item'>
                <p className='search-popup__history-item-title'>
                  <Image
                    src={'/header/clock.svg'}
                    alt=''
                    width={40}
                    height={40}
                  />
                  HaGiang
                </p>
                <Image
                  className='history__close'
                  src={'/header/add.svg'}
                  alt=''
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </div> */}
        </div>
        <button
          className='search-popup__btn'
          onClick={() => {
            window.location.href = `/tours?s=${encodeURIComponent(query)}`
          }}
        >
          <p>{dataSearch?.button}</p>
          <IconArrow />
        </button>
      </div>
    </div>
  )
}

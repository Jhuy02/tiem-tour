'use client'

import fetchData from '@/fetches/fetchData'
import TourList from '@/layout/header/header-pc/TourList'
import {cn} from '@/lib/utils'
import {TourItemResponse} from '@/types/tours.interface'
import {useEffect, useRef, useState} from 'react'

type HeaderPcProps = {
  query: string
  isOpen: boolean
  setIsOpen?: (isOpen: boolean) => void
}

const SearchPopup = ({query, isOpen, setIsOpen}: HeaderPcProps) => {
  const popupRef = useRef<HTMLDivElement>(null)
  const [data, setData] = useState<TourItemResponse[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        // Only call setIsOpen if provided
        if (typeof setIsOpen === 'function') {
          setIsOpen(false)
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, setIsOpen])

  useEffect(() => {
    const searchTour = async () => {
      setIsLoading(true)
      const response = await fetchData({
        api: `api/v1/get-all/tour?limit=3&s=${query}`,
      })
      setData(response.data)
      setIsLoading(false)
    }
    searchTour()
  }, [query])

  return (
    <div
      ref={popupRef}
      className={cn(
        'absolute bottom-0 left-0 z-50 flex justify-center',
        'transition-all duration-300 ease-in-out',
        isOpen
          ? 'translate-y-[calc(100%+2rem)] opacity-100'
          : 'pointer-events-none translate-y-[calc(100%+3rem)] opacity-0',
      )}
    >
      {isOpen && (
        <div className='w-[32.4375rem] rounded-lg bg-white p-3 shadow-lg'>
          <TourList
            data={data}
            isLoading={isLoading}
          />
        </div>
      )}
    </div>
  )
}
export default SearchPopup

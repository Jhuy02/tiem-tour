'use client'

import {
  IDiscover,
  IDiscoverLocation,
  IDiscoverTour,
} from '@/types/discover.interface'
import Image from 'next/image'
import type {Swiper as SwiperType} from 'swiper'
import './styles/style.css'

import useIsMobile from '@/hooks/useIsMobile'
import {fetcherCMS} from '@/lib/swr'
import {useEffect, useMemo, useRef, useState} from 'react'
import useSWR from 'swr'
import DesktopTourSwiper from './_components/desktop-tour-swiper'
import DiscoverButton from './_components/discover-button'
import DiscoverHeader from './_components/discover-header'
import MobileTourList from './_components/mobile-tour-list'

const Discover = ({
  data,
  tours,
  location,
}: {
  data: IDiscover
  tours: IDiscoverTour[]
  location: IDiscoverLocation[]
}) => {
  const [activeLocation, setActiveLocation] = useState('')
  const swiperRef = useRef<SwiperType | null>(null)
  const isMobile = useIsMobile()

  useEffect(() => {
    if (swiperRef.current && activeLocation) {
      swiperRef.current.slideTo(0)
    }
  }, [activeLocation])

  const query = useMemo(() => {
    if (!activeLocation) return null
    return `/wp-json/api/v1/get-all/tour?page=1&limit=6&tax=location&location=${activeLocation}&order=DESC&orderby=date`
  }, [activeLocation])

  const {data: toursData, isLoading} = useSWR(query, fetcherCMS, {
    revalidateIfStale: false,
    revalidateOnReconnect: false,
  })

  const handleLocationChange = (slug: string) => {
    setActiveLocation(slug)
  }

  const handleSwiper = (swiper: SwiperType) => {
    swiperRef.current = swiper
  }

  return (
    <section id='discover'>
      <Image
        src={'/home/discover/discover-top.svg'}
        alt='discover-top'
        width={1000}
        height={1000}
        className='discover__image-top'
      />

      <div className='discover__container'>
        <DiscoverHeader
          data={data}
          location={location}
          activeLocation={activeLocation}
          onLocationChange={handleLocationChange}
        />

        {isMobile ? (
          <MobileTourList
            tours={tours}
            toursData={toursData}
            isLoading={isLoading}
            activeLocation={activeLocation}
          />
        ) : (
          <DesktopTourSwiper
            tours={tours}
            toursData={toursData}
            isLoading={isLoading}
            onSwiper={handleSwiper}
          />
        )}

        <DiscoverButton button={data.button} />
      </div>
    </section>
  )
}

export default Discover

'use client'

import {
  IDiscover,
  IDiscoverLocation,
  IDiscoverTour,
} from '@/types/discover.interface'
import Image from 'next/image'
import './styles/style.css'
import type {Swiper as SwiperType} from 'swiper'

import {useMemo, useState, useEffect, useRef} from 'react'
import useSWR from 'swr'
import {fetcherCMS} from '@/lib/swr'
import useIsMobile from '@/hooks/useIsMobile'
import DiscoverHeader from './_components/discover-header'
import MobileTourList from './_components/mobile-tour-list'
import DesktopTourSwiper from './_components/desktop-tour-swiper'
import DiscoverButton from './_components/discover-button'

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
    if (location && location.length > 0 && !activeLocation) {
      setActiveLocation(location[0].slug)
    }
  }, [location, activeLocation])

  useEffect(() => {
    if (swiperRef.current && activeLocation) {
      swiperRef.current.slideTo(0)
    }
  }, [activeLocation])

  const query = useMemo(() => {
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

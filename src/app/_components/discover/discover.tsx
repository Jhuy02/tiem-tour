'use client'

import {
  IDiscover,
  IDiscoverLocation,
  IDiscoverPackage,
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
  package: packageData,
}: {
  data: IDiscover
  tours: IDiscoverTour[]
  location: IDiscoverLocation[]
  package: IDiscoverPackage[]
}) => {
  const [activeLocation, setActiveLocation] = useState('')
  const [activePackage, setActivePackage] = useState('saving')
  const swiperRef = useRef<SwiperType | null>(null)
  const isMobile = useIsMobile()

  useEffect(() => {
    if (swiperRef.current && activeLocation) {
      swiperRef.current.slideTo(0)
    }
  }, [activeLocation])

  const query = useMemo(() => {
    return `/wp-json/api/v1/tours?limit=8&page=1&location=${activeLocation}&package=${activePackage}&order=DESC&orderby=date`
  }, [activeLocation, activePackage])

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

  const handlePackageChange = (slug: string) => {
    setActivePackage(slug)
  }

  console.log(toursData)

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
          packageData={packageData}
          data={data}
          location={location}
          activeLocation={activeLocation}
          onLocationChange={handleLocationChange}
          activePackage={activePackage}
          onPackageChange={handlePackageChange}
        />
        {toursData?.data?.length === 0 && (
          <div className='mt-[7rem] flex flex-col items-center justify-center'>
            <h2 className='text-2xl font-bold text-white'>No tours found</h2>
            <p className='text-white'>
              We couldn't find any tours matching your criteria.
            </p>
          </div>
        )}
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

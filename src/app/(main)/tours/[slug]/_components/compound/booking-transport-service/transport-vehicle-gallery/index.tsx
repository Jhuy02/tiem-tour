'use client'
import {convertRemToPx} from '@/lib/utils'
import Image from 'next/image'
import React, {useContext, useMemo} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import useIsMobile from '@/hooks/useIsMobile'
import {PageContext} from '@/app/(main)/tours/[slug]/context/PageProvider'
import {TourDetailApiResType} from '@/types/tours.interface'

export default function TransportVehicleGallery() {
  const pageContext = useContext(PageContext)
  if (!pageContext) throw new Error('Page context is missing')
  const {data: apiData}: {data: TourDetailApiResType} = pageContext

  const transportVehicleGalleryList = useMemo(() => {
    if (!apiData?.package_tour?.main_car_pick_up_data) return []
    return apiData?.package_tour?.main_car_pick_up_data?.map((item) => {
      return {
        name: item?.title,
        slug: item?.id,
        price: item?.fields?.price_car_pax,
        maximum: item?.fields?.max_number_pax,
        images: item?.fields?.images_review_car,
      }
    })
  }, [apiData?.package_tour?.main_car_pick_up_data])

  const isMobile = useIsMobile()
  return (
    <div className='font-trip-sans flex flex-col space-y-[1rem]'>
      {Array.isArray(transportVehicleGalleryList) &&
        transportVehicleGalleryList.map((transportVehicle, index) => {
          return (
            <div
              key={index}
              className='flex flex-col space-y-[1rem]'
            >
              <div className='flex items-center justify-between space-x-[1.875rem] rounded-[0.75rem] bg-[rgba(235,229,226,0.32)] px-[1rem] py-[0.5rem]'>
                <div className='xsm:flex xsm:flex-col xsm:space-y-[0.25rem] py-[0.625rem] pr-[0.75rem]'>
                  <p className='text-[1rem] leading-[130%] font-extrabold tracking-[0.0025rem] text-[#303030]'>
                    {transportVehicle?.name}
                  </p>
                  <p className='xsm:block hidden text-[0.875rem] leading-[120%] font-extrabold tracking-[0.01563rem] text-[rgba(48,48,48,0.40)] uppercase'>
                    <span className='tracking-[0.01563rem] text-[#C83E21]'>
                      {Number(transportVehicle?.price)?.toLocaleString('en-US')}{' '}
                      USD/
                    </span>
                    PAX
                  </p>
                </div>
                <div className='xsm:space-x-0 flex items-center space-x-[0.5rem]'>
                  <p className='xsm:hidden text-[0.875rem] leading-[120%] font-extrabold tracking-[0.01563rem] text-[rgba(48,48,48,0.40)] uppercase'>
                    <span className='tracking-[0.01563rem] text-[#C83E21]'>
                      {Number(transportVehicle?.price)?.toLocaleString('en-US')}{' '}
                      USD/
                    </span>
                    PAX
                  </p>
                  <p className='xsm:max-w-[4.625rem] xsm:min-w-auto xsm:h-auto xsm:justify-center xsm:text-center xsm:px-[0.75rem] xsm:py-[0.5rem] xsm:rounded-[0.5rem] flex h-[1rem] min-w-[6.5rem] items-center justify-center rounded-[1.875rem] bg-[#115A46]/60 bg-[url("/common/common-background-green-pc.webp")] bg-cover bg-center bg-no-repeat px-[0.5rem] py-[0.125rem] text-[0.75rem] leading-[120%] font-extrabold text-white uppercase'>
                    Maximum {transportVehicle?.maximum} pax
                  </p>
                </div>
              </div>
              {!isMobile && (
                <div className='xsm:hidden'>
                  <Swiper
                    slidesPerView={'auto'}
                    spaceBetween={convertRemToPx(0.5)}
                    modules={[]}
                    className='rounded-[0.5rem]'
                  >
                    {Array.isArray(transportVehicle?.images) &&
                      transportVehicle?.images?.map(
                        (transportVehicleImage, index) => {
                          return (
                            <SwiperSlide
                              key={index}
                              className='h-[8.73331rem] w-[12.95088rem]! shrink-0 overflow-hidden rounded-[0.75rem]'
                            >
                              <Image
                                width={207.2137}
                                height={139.7329}
                                alt={transportVehicleImage?.alt ?? ''}
                                src={transportVehicleImage?.url}
                                className='h-full w-full object-cover'
                              />
                            </SwiperSlide>
                          )
                        },
                      )}
                  </Swiper>
                </div>
              )}
              {isMobile && (
                <div className='hidden_scroll flex items-start space-x-[0.5rem] overflow-x-auto sm:hidden'>
                  {Array.isArray(transportVehicle?.images) &&
                    transportVehicle?.images?.map(
                      (transportVehicleImage, index) => {
                        return (
                          <div
                            key={index}
                            className='h-[8.73331rem] w-[12.95088rem]! shrink-0 overflow-hidden rounded-[0.75rem]'
                          >
                            <Image
                              width={207.2137}
                              height={139.7329}
                              alt={transportVehicleImage?.alt ?? ''}
                              src={transportVehicleImage?.url}
                              className='h-full w-full object-cover'
                            />
                          </div>
                        )
                      },
                    )}
                </div>
              )}
            </div>
          )
        })}
    </div>
  )
}

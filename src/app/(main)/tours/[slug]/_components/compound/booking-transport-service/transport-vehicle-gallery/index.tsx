import {convertRemToPx} from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'

const TransportVehicleGalleryList = [
  {
    name: 'Limousine bus',
    slug: 'limousine_bus',
    price: '350000',
    maximum: '7',
    images: [...Array(4)].map(() => ({alt: '', url: '/tours/d_image1.png'})),
  },
  {
    name: 'VIP Cabin bus',
    slug: 'vip_cabin_bus',
    price: '350000',
    maximum: '7',
    images: [...Array(4)].map(() => ({alt: '', url: '/tours/d_image2.png'})),
  },
  {
    name: 'Luxury bus',
    slug: 'luxury_bus',
    price: '350000',
    maximum: '7',
    images: [...Array(4)].map(() => ({alt: '', url: '/tours/d_image3.png'})),
  },
  {
    name: 'Regular sleeping bus',
    slug: 'regular_sleeping_bus',
    price: '350000',
    maximum: '7',
    images: [...Array(4)].map(() => ({alt: '', url: '/tours/d_image1.png'})),
  },
]

export default function TransportVehicleGallery() {
  return (
    <div className='font-trip-sans flex flex-col space-y-[1rem]'>
      {Array.isArray(TransportVehicleGalleryList) &&
        TransportVehicleGalleryList.map((transportVehicle, index) => {
          return (
            <div
              key={index}
              className='flex flex-col space-y-[1rem]'
            >
              <div className='flex items-center justify-between space-x-[1.875rem] rounded-[0.75rem] bg-[rgba(235,229,226,0.32)] px-[1rem] py-[0.5rem]'>
                <p className='py-[0.625rem] pr-[0.75rem] text-[1rem] leading-[130%] font-extrabold tracking-[0.0025rem] text-[#303030]'>
                  {transportVehicle?.name}
                </p>
                <div className='flex items-center space-x-[0.5rem]'>
                  <p className='text-[0.875rem] leading-[120%] font-extrabold tracking-[0.01563rem] text-[rgba(48,48,48,0.40)] uppercase'>
                    <span className='tracking-[0.01563rem] text-[#C83E21]'>
                      {transportVehicle?.price?.toLocaleString('vi-VN')}/
                    </span>
                    PAX
                  </p>
                  <p className='flex items-center justify-center rounded-[1.875rem] bg-[#115A46]/60 px-[0.5rem] py-[0.125rem]'>
                    <span className='inline-flex h-[1rem] min-w-[6.5rem] items-center justify-center text-[0.75rem] leading-[120%] font-extrabold text-white uppercase'>
                      Maximum {transportVehicle?.maximum} pax
                    </span>
                  </p>
                </div>
              </div>
              <div>
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
            </div>
          )
        })}
    </div>
  )
}

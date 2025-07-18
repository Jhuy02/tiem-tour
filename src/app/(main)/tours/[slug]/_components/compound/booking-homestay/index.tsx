'use client'
import {useFormContext, useWatch} from 'react-hook-form'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Tabs, TabsContent} from '@/components/ui/tabs'
import {TourPackageList} from '@/constants/mockApi'
import {convertRemToPx} from '@/lib/utils'
import {BookingFormValues} from '@/schemas/booking.schema'
import Image from 'next/image'
import Caution from '@/app/(main)/tours/[slug]/_components/common/Caution'
import 'swiper/css'
import useIsMobile from '@/hooks/useIsMobile'
import {useContext, useMemo} from 'react'
import {PageContext} from '@/app/(main)/tours/[slug]/context/PageProvider'
import {TourDetailApiResType} from '@/types/tours.interface'
import {IMedia} from '@/types/media.interface'

export default function BookingHomestay() {
  const isMobile = useIsMobile()
  const pageContext = useContext(PageContext)
  if (!pageContext) throw new Error('Page context is missing')
  const {data: apiData}: {data: TourDetailApiResType} = pageContext
  const {control} = useFormContext<BookingFormValues>()
  const tourType = useWatch({
    control,
    name: 'tour_type',
  })
  const tourPackage = useWatch({
    control,
    name: 'package',
  })
  const safeTourPackage = tourPackage || TourPackageList[0].slug
  const homestayImageList = useMemo(() => {
    let images: IMedia[] = []
    if (!(tourType && tourPackage)) {
      apiData?.package_tour?.motorbike_package?.saving?.forEach((item) => {
        images = [...images, ...item.images]
      })
      return images
    }

    if (tourType === 'motorbike_tour') {
      if (tourPackage === 'saving') {
        apiData?.package_tour?.motorbike_package?.saving?.forEach((item) => {
          images = [...images, ...item.images]
        })
      } else if (tourPackage === 'budget') {
        apiData?.package_tour?.motorbike_package?.budget?.forEach((item) => {
          images = [...images, ...item.images]
        })
      } else if (tourPackage === 'premium') {
        apiData?.package_tour?.motorbike_package?.premium?.forEach((item) => {
          images = [...images, ...item.images]
        })
      }
    } else if (tourType === 'car_tour') {
      if (tourPackage === 'saving') {
        apiData?.package_tour?.car_package?.saving?.forEach((item) => {
          images = [...images, ...item.images]
        })
      } else if (tourPackage === 'budget') {
        apiData?.package_tour?.car_package?.budget?.forEach((item) => {
          images = [...images, ...item.images]
        })
      } else if (tourPackage === 'premium') {
        apiData?.package_tour?.car_package?.premium?.forEach((item) => {
          images = [...images, ...item.images]
        })
      }
    }

    return images
  }, [tourType, tourPackage])

  console.log('homestayImageList', homestayImageList)
  return (
    <div className='xsm:border-none font-trip-sans xsm:rounded-0 xsm:py-[1rem] xsm:px-[0.75rem] relative rounded-[1.5rem] border border-solid border-[#EDEDED] bg-white px-[1.75rem] py-[1.875rem]'>
      <Tabs
        value={safeTourPackage}
        className='w-full'
      >
        {Array.isArray(TourPackageList) &&
          TourPackageList?.map((item, index) => {
            return (
              <TabsContent
                key={index}
                value={item.slug}
                className='w-full'
              >
                <div className='xsm:space-y-[0.75rem] flex flex-col space-y-[1.5rem]'>
                  <div className='flex items-center justify-between'>
                    <p className='flex-1 text-[1.125rem] leading-[130%] font-black tracking-[0.00281rem] text-[#303030]'>
                      Homestay
                    </p>
                    <span className='xsm:text-[0.875rem] text-[1rem] leading-[120%] font-medium tracking-[0.0025rem] text-[rgba(48,48,48,0.40)]'>
                      {item.name}
                    </span>
                  </div>
                  {!isMobile && (
                    <div className=''>
                      <Swiper
                        slidesPerView={'auto'}
                        spaceBetween={convertRemToPx(0.5)}
                        modules={[]}
                        className='rounded-[0.5rem]'
                      >
                        {Array.isArray(item?.images) &&
                          item?.images?.map((item, index) => {
                            return (
                              <SwiperSlide
                                key={index}
                                className='h-[8.73331rem] w-[12.95088rem]! shrink-0 overflow-hidden rounded-[0.75rem]'
                              >
                                <Image
                                  width={207.2137}
                                  height={139.7329}
                                  alt={item?.alt ?? ''}
                                  src={item?.url}
                                  className='h-full w-full object-cover'
                                />
                              </SwiperSlide>
                            )
                          })}
                      </Swiper>
                    </div>
                  )}
                  {isMobile && (
                    <div className='hidden_scroll xsm:flex hidden items-start space-x-[0.5rem] overflow-x-auto'>
                      {Array.isArray(item?.images) &&
                        item?.images?.map((item, index) => {
                          return (
                            <div
                              key={index}
                              className='h-[8.73331rem] w-[12.95088rem]! shrink-0 overflow-hidden rounded-[0.75rem]'
                            >
                              <Image
                                width={207.2137}
                                height={139.7329}
                                alt={item?.alt ?? ''}
                                src={item?.url}
                                className='h-full w-full object-cover'
                              />
                            </div>
                          )
                        })}
                    </div>
                  )}
                  <Caution content='NOTE: Homestay offers one free night in the DORM only the day before the tour begins, and you can check in after 2 pm. Our reception is open 24/7. If you want private room before the tour starts, please contact us via WhatsApp' />
                </div>
              </TabsContent>
            )
          })}
      </Tabs>
    </div>
  )
}

'use client'
import {useFormContext, useWatch} from 'react-hook-form'
import {BookingFormValues} from '@/schemas/booking.schema'
import Caution from '@/app/(main)/tours/[slug]/_components/common/Caution'
import {useContext, useMemo} from 'react'
import {PageContext} from '@/app/(main)/tours/[slug]/context/PageProvider'
import {TourDetailApiResType} from '@/types/tours.interface'
import {IMedia} from '@/types/media.interface'
import BookingHomestayGallery from './BookingHomestayGallery'
import {BOOKING_TOUR_PACKAGE} from '@/constants/booking'

const getHomestayImages = (
  apiData: TourDetailApiResType,
  tourType?: string,
  tourPackage?: string,
): IMedia[] => {
  const mapping = {
    motorbike_tour: apiData?.package_tour?.motorbike_package,
    car_tour: apiData?.package_tour?.car_package,
  } as const

  const packageData = mapping[tourType as keyof typeof mapping]

  if (!packageData || !tourPackage) {
    return (
      apiData?.package_tour?.motorbike_package?.saving?.flatMap(
        (item) => item.images || [],
      ) || []
    )
  }

  return (
    packageData?.[tourPackage as keyof typeof packageData]?.flatMap(
      (item) => item.images || [],
    ) || []
  )
}

export default function BookingHomestay() {
  const pageContext = useContext(PageContext)
  if (!pageContext) throw new Error('Page context is missing')
  const {data: apiData}: {data: TourDetailApiResType} = pageContext

  const {control} = useFormContext<BookingFormValues>()
  const tourType = useWatch({control, name: 'tour_type'})
  const tourPackage = useWatch({control, name: 'package'})

  const homestayImageList = useMemo(
    () => getHomestayImages(apiData, tourType, tourPackage),
    [apiData, tourType, tourPackage],
  )

  const shouldRender =
    !tourType || !tourPackage || BOOKING_TOUR_PACKAGE[tourPackage]
  if (!shouldRender) return null

  return (
    <div className='xsm:border-none font-trip-sans xsm:rounded-0 xsm:py-[1rem] xsm:px-[0.75rem] relative rounded-[1.5rem] border border-solid border-[#EDEDED] bg-white px-[1.75rem] py-[1.875rem]'>
      <div className='xsm:space-y-[0.75rem] flex flex-col space-y-[1.5rem]'>
        <div className='flex items-center justify-between'>
          <p className='flex-1 text-[1.125rem] leading-[130%] font-black tracking-[0.00281rem] text-[#303030]'>
            Homestay
          </p>
          <span className='xsm:text-[0.875rem] text-[1rem] leading-[120%] font-medium tracking-[0.0025rem] text-[rgba(48,48,48,0.40)]'>
            {BOOKING_TOUR_PACKAGE[tourPackage || 'saving']?.name}
          </span>
        </div>
        <BookingHomestayGallery images={homestayImageList} />
        <Caution content='NOTE: Homestay offers one free night in the DORM only the day before the tour begins, and you can check in after 2 pm. Our reception is open 24/7. If you want private room before the tour starts, please contact us via WhatsApp' />
      </div>
    </div>
  )
}

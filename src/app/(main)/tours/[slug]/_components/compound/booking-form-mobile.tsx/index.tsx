'use client'
import BookingHomestay from '@/app/(main)/tours/[slug]/_components/compound/booking-homestay'
import BookingOverview from '@/app/(main)/tours/[slug]/_components/compound/booking-overview'
import BookingTransportService from '@/app/(main)/tours/[slug]/_components/compound/booking-transport-service'
import ContactInformation from '@/app/(main)/tours/[slug]/_components/contact'
import Gift from '@/app/(main)/tours/[slug]/_components/gift'
import RentMotorcycles from '@/app/(main)/tours/[slug]/_components/rent-motorcycles'
import ICArrowLeft from '@/components/icon/ICArrowLeft'
import {Form} from '@/components/ui/form'
import useIsMobile from '@/hooks/useIsMobile'
import bookingSchema, {BookingFormValues} from '@/schemas/booking.schema'
import {TourDetailPackage} from '@/types/tours.interface'
import {zodResolver} from '@hookform/resolvers/zod'
import clsx from 'clsx'
import {useEffect, useState} from 'react'
import {useForm} from 'react-hook-form'

interface BookTourNowProps {
  data: TourDetailPackage
}

export default function BookingFormMobile({data}: BookTourNowProps) {
  const isMobile = useIsMobile()
  const [showFormBooking, setShowFormBooking] = useState<boolean>(false)
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      adults: 1,
      children: 1,
      infants: 1,
      tour_type: '',
      package: '',
      easy_rider: 0,
      ride_by_yourself: 0,
      seat_behind: 0,

      motorcycles: data?.motorbike_rents?.motorbike_rent_list?.map((motor) => ({
        name: motor?.title,
        id: motor?.id,
        price: motor?.price,
        quantity: 0,
      })),
      gifts: '',
      yourName: '',
      yourPhone: '',
      yourEmail: '',
      yourMessage: '',
    },
  })
  // function handleCloseBookingForm() {
  //   setShowFormBooking(false)
  // }
  function handleOpenBookingForm() {
    setShowFormBooking(true)
  }
  function onSubmit(values: BookingFormValues) {
    console.log('Form', values)
  }

  useEffect(() => {
    if (showFormBooking) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [showFormBooking])

  return (
    isMobile && (
      <>
        <div className='font-trip-sans fixed bottom-0 left-0 z-50 w-full'>
          <div className='xsm:flex hidden flex-col space-y-[0.625rem] bg-white px-[1.25rem] py-[0.75rem] shadow-[0px_-4px_24px_0px_rgba(0,0,0,0.08)]'>
            <div className='flex items-start justify-between'>
              <div className='flex flex-1 flex-col items-start'>
                <p className='text-[1rem] leading-[120%] font-medium tracking-[0.0025rem] text-[#303030]'>
                  From 27 Dec - 29 Dec
                </p>
                <span className='text-[0.75rem] leading-[130%] font-normal tracking-[0.00188rem] text-[rgba(48,48,48,0.80)]'>
                  Price for 2 night
                </span>
              </div>
              <div className='flex flex-1 flex-col items-end'>
                <p className='text-[1rem] leading-[120%] font-medium tracking-[0.0025rem] text-[#303030]'>
                  1.100.000 VNĐ
                </p>
                <span className='text-[0.75rem] leading-[130%] font-normal tracking-[0.00188rem] text-[rgba(48,48,48,0.80)]'>
                  per adult
                </span>
              </div>
            </div>
            <div
              onClick={handleOpenBookingForm}
              className='inline-flex h-[3.125rem] w-full items-center justify-center space-x-[0.625rem] rounded-[3.125rem] bg-[#C83E21]'
            >
              <span className='font-dvn-luckiest-guy h-[0.8125rem] text-[1.125rem] leading-[120%] text-white'>
                Book now
              </span>
              <ICArrowLeft className='h-[1.5rem] w-[1.575rem] shrink-0' />
            </div>
          </div>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className={clsx(
              'hidden_scroll rounded-0 fixed inset-0 z-100 overflow-y-auto bg-white transition-all duration-300 ease-in-out',
              {
                'translate-x-0': showFormBooking,
                'translate-x-full': !showFormBooking,
              },
            )}
          >
            <div className='flex w-full shrink-0 flex-col space-y-[0.5rem]'>
              <BookingOverview />
              <BookingHomestay />
              <BookingTransportService />
              <RentMotorcycles motorcycles={data?.motorbike_rents} />
              <Gift gifts={data?.gift} />
              <ContactInformation />
            </div>
          </form>
        </Form>
      </>
    )
  )
}

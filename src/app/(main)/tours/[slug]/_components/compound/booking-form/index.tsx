'use client'
import BookingCheckout from '@/app/(main)/tours/[slug]/_components/compound/booking-checkout'
import BookingHomestay from '@/app/(main)/tours/[slug]/_components/compound/booking-homestay'
import BookingOverview from '@/app/(main)/tours/[slug]/_components/compound/booking-overview'
import BookingTransportService from '@/app/(main)/tours/[slug]/_components/compound/booking-transport-service'
import {PageContext} from '@/app/(main)/tours/[slug]/context/PageProvider'
import ICArrowLeft from '@/components/icon/ICArrowLeft'
import {Form} from '@/components/ui/form'
import bookingSchema, {BookingFormValues} from '@/schemas/booking.schema'
import {zodResolver} from '@hookform/resolvers/zod'
import clsx from 'clsx'
import React, {useContext} from 'react'
import {useForm} from 'react-hook-form'

export default function BookingForm() {
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      adultQuantity: 1,
      childQuantity: 1,
      infantQuantity: 1,
      tourType: '',
      tourPackage: '',
      easyRiderQuantity: 0,
      rideByYourselfQuantity: 0,
      seatBehindYourFriendQuantity: 0,
    },
  })
  const context = useContext(PageContext)
  if (!context) throw new Error('PageContext not found')
  const {showBookingFormMobile, setShowBookingFormMobile} = context

  function onSubmit(values: BookingFormValues) {
    console.log(values)
  }

  return (
    <>
      <section
        className={clsx(
          'xsm:fixed xsm:inset-0 xsm:z-150 xsm:transition-transform xsm:duration-300 xsm:ease-in-out mx-auto flex max-w-[87.5rem] flex-col space-y-[1.5rem] px-0 py-[3.125rem]',
          {
            'xsm:translate-x-0': showBookingFormMobile,
            'xsm:translate-x-full': !showBookingFormMobile,
          },
        )}
      >
        <h2 className='font-dvn-luckiest-guy text-[3.125rem] leading-[130%] font-black text-[#3B3943]'>
          BookTourNow
        </h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className='relative flex justify-between'>
              <div className='flex w-[54.6875rem] shrink-0 flex-col space-y-[1.5rem]'>
                <BookingOverview />
                <BookingHomestay />
                <BookingTransportService />
              </div>
              <div className='w-[28.6875rem] shrink-0'>
                <BookingCheckout />
              </div>
            </div>
          </form>
        </Form>
      </section>
      <div className='font-trip-sans xsm:block fixed bottom-0 left-0 z-100 hidden w-full'>
        <div className='flex flex-col space-y-[0.625rem] bg-white px-[1.25rem] py-[0.75rem] shadow-[0px_-4px_24px_0px_rgba(0,0,0,0.08)]'>
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
          <button
            type='button'
            onClick={() => setShowBookingFormMobile(true)}
            className='inline-flex h-[3.125rem] items-center justify-center space-x-[0.625rem] rounded-[3.125rem] bg-[#C83E21]'
          >
            <span className='font-dvn-luckiest-guy h-[0.8125rem] text-[1.125rem] leading-[120%] text-white'>
              Book now
            </span>
            <ICArrowLeft className='h-[1.5rem] w-[1.575rem] shrink-0' />
          </button>
        </div>
      </div>
    </>
  )
}

'use client'
import BookingCheckout from '@/app/(main)/tours/[slug]/_components/compound/booking-checkout'
import BookingHomestay from '@/app/(main)/tours/[slug]/_components/compound/booking-homestay'
import BookingOverview from '@/app/(main)/tours/[slug]/_components/compound/booking-overview'
import BookingTransportService from '@/app/(main)/tours/[slug]/_components/compound/booking-transport-service'
import ContactInformation from '@/app/(main)/tours/[slug]/_components/contact'
import Policy from '@/app/(main)/tours/[slug]/_components/policy'
import RentMotorcycles from '@/app/(main)/tours/[slug]/_components/rent-motorcycles'
import { Form } from '@/components/ui/form'
import useIsMobile from '@/hooks/useIsMobile'
import bookingSchema, { BookingFormValues } from '@/schemas/booking.schema'
import { TourDetailPackage } from '@/types/tours.interface'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import { useForm } from 'react-hook-form'

interface BookTourNowProps {
  data: TourDetailPackage
}

export default function BookingForm({data}: BookTourNowProps) {
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      // Data customer
      adults: 1,
      children: 1,
      infants: 1,
      // Data tour
      tour_type: '',
      package: '',
      // Data rider
      easy_rider: 0,
      ride_by_yourself: 0,
      seat_behind: 0,
      // Data pickup trip
      outbound_trip_pickup_location: '',
      outbound_trip_pickup_vehicle: '',
      outbound_trip_pickup_address:
        'Pick up at 94 Tran nhat duat street, BaDinh',
      outbound_trip_arrival_time: '22:00',
      outbound_trip_arrival_location: 'Hagiang',
      // Data return trip
      return_trip_pickup_location: 'Hagiang',
      return_trip_pickup_vehicle: '',
      return_trip_pickup_address: 'Pick up at TiemTours Office 92i Nguyen Trai',
      return_trip_arrival_location: '',
      return_trip_arrival_time: '23:00',

      // Deposit and Agree
      deposit: '',

      motorcycles: data?.motorbike_rents?.map((motor) => ({
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
  const isMobile = useIsMobile()

  function onSubmit(values: BookingFormValues) {
    console.log(values)
  }
  console.log(form.formState.errors)

  return (
    !isMobile && (
      <section
        className={clsx(
          'xsm:fixed xsm:inset-0 xsm:z-150 xsm:transition-transform xsm:duration-300 xsm:ease-in-out xsm:bg-white xsm:hidden mx-auto flex max-w-[87.5rem] flex-col space-y-[1.5rem] px-0 py-[3.125rem]',
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
                <RentMotorcycles motorcycles={data?.motorbike_rents} />
                {/* <Gift gifts={gifts} /> */}
                <ContactInformation />
                <Policy />
              </div>
              <div className='w-[28.6875rem] shrink-0'>
                <BookingCheckout />
              </div>
            </div>
          </form>
        </Form>
      </section>
    )
  )
}

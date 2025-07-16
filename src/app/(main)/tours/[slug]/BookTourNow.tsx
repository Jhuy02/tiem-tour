'use client'
import ContactInformation from '@/app/(main)/tours/[slug]/_components/contact'
import Gift from '@/app/(main)/tours/[slug]/_components/gift'
import Policy from '@/app/(main)/tours/[slug]/_components/policy'
import RentMotorcycles from '@/app/(main)/tours/[slug]/_components/rent-motorcycles'
import Homestay from '@/app/(main)/tours/[slug]/Homestay'
import OverviewForm from '@/app/(main)/tours/[slug]/OverViewForm'
import Subtotal from '@/app/(main)/tours/[slug]/Subtotal'
import TransportService from '@/app/(main)/tours/[slug]/TransportService'
import { Form } from '@/components/ui/form'
import bookingSchema, { BookingFormValues } from '@/schemas/booking.schema'
import { InterGift, InterMotorcycle } from '@/types/tours.interface'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

interface BookTourNowProps {
  motorcycles: InterMotorcycle[]
  gifts: InterGift[]
}

export default function BookTourNow({motorcycles, gifts}: BookTourNowProps) {
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
      motorcycles: motorcycles.map((motor) => ({
        name: motor.name,
        quantity: 0,
      })),
      gifts: '',
      yourName: '',
      yourPhone: '',
      yourEmail: '',
      yourMessage: '',
    },
  })

  function onSubmit(values: z.infer<typeof bookingSchema>) {
    console.log(values)
  }
  return (
    <section className='mx-auto flex max-w-[87.5rem] flex-col space-y-[1.5rem] px-0 py-[3.125rem]'>
      <h2 className='font-dvn-luckiest-guy text-[3.125rem] leading-[130%] font-black text-[#3B3943]'>
        BookTourNow
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className='relative flex justify-between'>
            <div className='flex w-[54.6875rem] shrink-0 flex-col space-y-[1.5rem]'>
              <OverviewForm />
              <Homestay />
              <TransportService />
              <RentMotorcycles motorcycles={motorcycles} />
              <Gift gifts={gifts} />
              <ContactInformation />
              <Policy />
            </div>
            <div className='w-[28.6875rem] shrink-0'>
              <Subtotal />
            </div>
          </div>
        </form>
      </Form>
    </section>
  )
}

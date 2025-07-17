import BookingForm from '@/app/(main)/tours/[slug]/_components/compound/booking-form'
import BookingFormMobile from '@/app/(main)/tours/[slug]/_components/compound/booking-form-mobile.tsx'
import React from 'react'

export default function TourDetailPage() {
  return (
    <main className='mt-[100vh] bg-[linear-gradient(180deg,#FFF_19.92%,#F3F3F0_87.57%)]'>
      <BookingForm />
      <BookingFormMobile />
    </main>
  )
}

import BookingForm from '@/app/(main)/tours/[slug]/_components/compound/booking-form'
import PageProvider from '@/app/(main)/tours/[slug]/context/PageProvider'
import React from 'react'

export default function TourDetailPage() {
  return (
    <PageProvider>
      <main className='my-[50vh] h-screen bg-[linear-gradient(180deg,#FFF_19.92%,#F3F3F0_87.57%)]'>
        <BookingForm />
      </main>
    </PageProvider>
  )
}

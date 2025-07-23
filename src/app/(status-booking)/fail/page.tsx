import ButtonEffectBackgroundColor from '@/app/(status-booking)/_components/button/ButtonEffectBackgroundColor'
import {ROUTES} from '@/constants/routes'
import Link from 'next/link'
import React from 'react'

export default function FailPage() {
  return (
    <main className='xsm:bg-["/common/common-background-mb.webp"] relative h-screen overflow-hidden bg-[#F9F4EB] bg-[url("/common/common-background-pc.webp")]'>
      <div className='xsm:w-full xsm:px-[1rem] absolute top-1/2 left-1/2 flex w-[42.25rem] -translate-1/2 flex-col items-center'>
        <h1 className='xsm:text-[1.5625rem] font-dvn-luckiest-guy xsm:whitespace-nowrap mb-[0.25rem] text-center text-[3rem] leading-[130%] font-normal text-[#C83E21]'>
          Payment failed
        </h1>
        <p className='font-trip-sans xsm:leading-[130%] xsm:text-[0.75rem] mb-[2.5rem] text-center text-[0.875rem] leading-[150%] font-normal tracking-[0.00219rem] text-[rgba(46,46,46,0.75)]'>
          Your payment has not been processed successfully. Please try again in
          a few minutes to complete the transaction. Thank you for your
          patience.
        </p>
        <div className='flex items-center justify-center gap-[1rem] self-stretch'>
          <Link
            href={ROUTES.HOME}
            className='block flex-1 cursor-pointer self-stretch'
          >
            <ButtonEffectBackgroundColor>Try again</ButtonEffectBackgroundColor>
          </Link>
        </div>
      </div>
    </main>
  )
}

import ButtonEffectBackgroundColor from '@/app/(status-booking)/_components/button/ButtonEffectBackgroundColor'
import IconArrowRightV1 from '@/components/icon/IconArrowRightV1'
import {ROUTES} from '@/constants/routes'
import Link from 'next/link'
import React from 'react'

export default function ThankyouPage() {
  return (
    <main className='xsm:bg-["/common/common-background-mb.webp"] relative h-screen overflow-hidden bg-[#F9F4EB] bg-[url("/common/common-background-pc.webp")]'>
      <div className='xsm:w-full xsm:px-[1rem] absolute top-1/2 left-1/2 flex w-[42.25rem] -translate-1/2 flex-col items-center'>
        <h1 className='xsm:text-[1.5625rem] font-dvn-luckiest-guy xsm:whitespace-nowrap mb-[0.25rem] text-center text-[3rem] leading-[130%] font-normal text-[#25ACAB]'>
          Thank you for your booking!
        </h1>
        <p className='font-trip-sans xsm:leading-[130%] xsm:text-[0.75rem] mb-[2.5rem] text-center text-[0.875rem] leading-[150%] font-normal tracking-[0.00219rem] text-[rgba(46,46,46,0.75)]'>
          We have received your booking information. Our team will contact you
          as soon as possible to confirm and support the next steps. Thank you
          for trusting and choosing our service.
        </p>
        <div className='xsm:gap-[0.75rem] xsm:flex-col-reverse flex items-center justify-center gap-[1rem] self-stretch'>
          <Link
            href={ROUTES.HOME}
            className='block flex-1 cursor-pointer self-stretch'
          >
            <ButtonEffectBackgroundColor>
              Back to homepage
            </ButtonEffectBackgroundColor>
          </Link>
          <Link
            href={ROUTES.TOUR_LIST}
            className='block flex-1 cursor-pointer self-stretch'
          >
            <div className='flex h-[4rem] items-center justify-center gap-[0.625rem] rounded-[3.125rem] bg-[#C83E21] transition-all duration-300 ease-out lg:hover:bg-[#EA6A44]'>
              <p className='font-dvn-luckiest-guy h-[0.8125rem] text-[1.125rem] leading-[120%] font-normal text-white'>
                Explore other tour
              </p>
              <IconArrowRightV1 className='h-[1.5rem] w-[1.575rem] shrink-0' />
            </div>
          </Link>
        </div>
      </div>
    </main>
  )
}

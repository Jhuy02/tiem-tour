import IconArrowRightV1 from '@/components/icon/IconArrowRightV1'
import {ROUTES} from '@/constants/routes'
import Link from 'next/link'

export default async function NotFoundPage() {
  return (
    <main className='xsm:bg-["/common/common-background-mb.webp"] relative h-screen overflow-hidden bg-[#F9F4EB] bg-[url("/common/common-background-pc.webp")]'>
      <div className='xsm:w-full xsm:px-[1rem] absolute top-1/2 left-1/2 flex w-[42.25rem] -translate-1/2 flex-col gap-[2.5rem]'>
        <div className='flex flex-col items-center justify-center gap-[0.25rem] text-center'>
          <h1 className='font-trip-sans text-[1rem] leading-[120%] font-bold tracking-[0.0025rem] text-[rgba(46,46,46,0.75)]'>
            Error
          </h1>
          <h2 className='font-dvn-luckiest-guy text-[4.5rem] leading-[130%] font-normal text-[#25ACAB]'>
            404
          </h2>
          <p className='font-dvn-luckiest-guy xsm:text-[1.25rem] xsm:whitespace-nowrap text-[2.25rem] leading-[120%] font-normal tracking-[0.01563rem] text-[text-[rgba(46,46,46,0.80)] uppercase'>
            Oops! Something went wrong
          </p>
          <p className='font-trip-sans xsm:w-[15.0625rem] text-[0.875rem] leading-[150%] tracking-[0.00219rem] text-[rgba(46,46,46,0.75)]'>
            Try adjusting your search to find what you&apos;re looking for.
          </p>
        </div>
        <Link
          href={ROUTES.HOME}
          className='block flex-1 cursor-pointer self-stretch'
        >
          <div className='flex h-[4rem] items-center justify-center gap-[0.625rem] rounded-[3.125rem] bg-[#C83E21] transition-all duration-300 ease-out lg:hover:bg-[#EA6A44]'>
            <p className='font-dvn-luckiest-guy h-[0.8125rem] text-[1.125rem] leading-[120%] font-normal text-white'>
              Back to homepage
            </p>
            <IconArrowRightV1 className='h-[1.5rem] w-[1.575rem] shrink-0' />
          </div>
        </Link>
      </div>
    </main>
  )
}

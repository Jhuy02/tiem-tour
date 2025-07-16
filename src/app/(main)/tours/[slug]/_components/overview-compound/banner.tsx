import { ArrowRight, Circle, Compass, Star } from '@/app/(main)/tours/[slug]/_components/icon'
import ImageFallback from '@/components/image/ImageFallback'
import {BreadcrumbDynamic} from '@/components/ui/breadcrumb-dynamic'
import {Button} from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const Banner = () => {
  return (
    <section className='w-full h-[100vh] relative  xsm:h-auto'>
      <BreadcrumbDynamic
        breadcrumbs={[
          {label: 'Home', href: '/'},
          {label: 'Tours', href: '/tours'},
          {
            label: 'HaGiang tour Culture 2 days 1 night by Motobike Experience',
            href: '/tours/tour-detail',
          },
        ]}
        className='xsm:[&_svg]:text-[#303030]/40 xsm:block hidden last'
      />
      <ImageFallback
        src={'/tour-detail/d-banner.webp'}
        alt='tour-detail-banner'
        width={1920}
        height={512}
        className='w-full h-[100vh] object-cover object-center xsm:h-[12.785rem]'
      />
      <Image
        src='/tour-detail/bottom.webp'
        alt='tour-detail-banner-mobile'
        width={1920}
        height={130}
        className='w-full h-[6rem] absolute bottom-[-0.125rem] left-0 z-[1] xsm:hidden'
      />
      <div
        className='w-full h-[13.4375rem] opacity-40 absolute top-0 left-0 z-[1] xsm:hidden'
        style={{
          background:
            'linear-gradient(180deg, #131F31 0%, rgba(19, 31, 49, 0.00) 100%)',
        }}
      />
      <BreadcrumbDynamic
        breadcrumbs={[
          {label: 'Home', href: '/'},
          {label: 'Tours', href: '/tours'},
          {
            label: 'HaGiang tour Culture 2 days 1 night by Motobike Experience',
            href: '/tours/tour-detail',
          },
          {label: 'Book tour now', href: '/tours/tour-detail'},
        ]}
        className='absolute top-[6.575rem] left-[6.25rem] z-10 xsm:hidden'
      />
      <article className='w-[52.3125rem] xsm:w-full xsm:px-[1rem] xsm:py-[0.8375rem] p-[1.125rem] absolute bottom-[7.3125rem] left-[6.25rem] xsm:static'>
        <h1 className='text-[3rem] leading-[3.9rem] text-white font-dvn-luckiest-guy xsm:text-[#3B3943] xsm:text-[1.25rem] xsm:leading-[1.625rem]'>
          HaGiang tour Cult 3 days 2 nights by MOtobike Experience
        </h1>
        <div className='mt-[0.5rem] flex items-center space-x-[0.5rem]'>
          <Compass className='size-[1.6rem] xsm:[&_path]:fill-[#FB0] xsm:size-[1.5rem]' />
          <p className='text-[#FCFF49] text-[2.25rem] font-extrabold leading-[2.7rem] tracking-[0.01563rem] uppercase xsm:text-[#FB0] xsm:text-[1.375rem] xsm:leading-[1.7875rem] xsm:font-dvn-luckiest-guy'>
            8686 USD
          </p>
          <span className='text-[#FCFF49] xsm:text-[#FB0]'>•</span>
          <span className='text-white leading-[1.6rem] tracking-[0.0025rem] xsm:text-[0.875rem] xsm:leading-[1.3125rem] xsm:tracking-[0.00219rem] xsm:text-[#3B3943]'>
            2 days / 1 nights
          </span>
        </div>
      </article>

      <div className='grid grid-cols-[min-content_1fr] grid-rows-[min-content_min-content] w-[27.3125rem] h-[18.5rem] px-[1rem] py-[0.9375rem] gap-[0.625rem] bg-[#636363]/36 absolute top-[10.0875rem] right-[6.25rem] z-[1] xsm:hidden'>
        <div
          className='w-[14.1875rem] h-[16.5625rem] rounded-[1.5rem] row-span-2 flex flex-col justify-between'
          style={{
            background: 'linear-gradient(180deg, #F4F5E6 0%, #B2DFDC 100%)',
          }}
        >
          <div className='flex flex-col justify-between h-full'>
            <div className='mt-[1.275rem] ml-[1.275rem] flex justify-center items-center w-fit h-fit flex-col'>
              <div className='size-[4rem] bg-[#FBFFE987] rounded-[1rem] flex items-center justify-center'>
                <Image
                  src='/tour-detail/weather.webp'
                  alt='weather'
                  width={64}
                  height={64}
                  className='size-[2.8125rem] object-cover'
                />
              </div>
              <p className='text-[#25ACAB] text-[2.96rem] font-[900] leading-[3.26169rem] tracking-[0.14825rem] relative'>
                32
                <Circle className='absolute top-[0.5rem] right-[-0.5rem] size-[0.6rem]' />
              </p>
            </div>

            <div className='flex ml-[1.125rem]'>
              <Link
                href={'/'}
                className='flex items-center mr-[0.6875rem]'
              >
                Gallery <ArrowUpRight className='size-[1rem] ml-[0.25rem]' />
              </Link>
              <div className='flex w-[7.48556rem] h-[4.80488rem]'>
                <Image
                  src={'/tour-detail/d-image-1.webp'}
                  alt='d-image-1'
                  width={100}
                  height={100}
                  className='size-[3.74881rem] object-cover rounded-[1.24963rem] border-[0.188rem] border-[#EDEDED] rotate-[-9.899deg] mr-[-2.5rem]'
                />
                <Image
                  src={'/tour-detail/d-image-2.webp'}
                  alt='d-image-1'
                  width={100}
                  height={100}
                  className='size-[3.74881rem] object-cover rounded-[1.24963rem] border-[0.188rem] border-[#EDEDED] rotate-[4.763deg] z-[5]'
                />
                <Image
                  src={'/tour-detail/d-image-2.webp'}
                  alt='d-image-1'
                  width={100}
                  height={100}
                  className='size-[3.74881rem] object-cover rounded-[1.24963rem] border-[0.188rem] border-[#EDEDED] rotate-[20deg] ml-[-2.25rem]'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='p-[1.1875rem_2.625rem_1.1875rem_1.125rem] size-[10.375rem] bg-[#F3F9F9] rounded-[1.5rem] flex-col justify-between flex'>
          <article className='space-y-[0.25rem]'>
            <p className='text-[#5F6161] text-[0.875rem] font-medium leading-[1.05rem] tracking-[0.00219rem]'>
              Best
            </p>
            <p className='text-[#092F1A] font-dvn-luckiest-guy text-[1.125rem] leading-[1.35rem] tracking-[0.0125rem] uppercase'>
              Tripavisor
            </p>
            <div className='flex space-x-[0.1875rem]'>
              {Array.from({length: 4}).map((_, index) => (
                <Star
                  key={index}
                  className='size-[1.125rem]'
                />
              ))}
            </div>
          </article>
          <p className='text-[#006CE4] text-[0.875rem] font-medium leading-[1.05rem] tracking-[0.00219rem]'>
            (123 review)
          </p>
        </div>
        <Button className='bg-[#25ACAB] w-[10.375rem] h-[5.5rem] rounded-[1.5rem] p-[1.1875rem_1.625rem_1.25rem_1.5625rem] flex-col items-center justify-center text-white col-start-2 hover:bg-[#25ACAB]/80 transition-colors duration-300'>
          <ArrowRight className='w-[1.575rem] h-[1.5rem]' />
          <span className='text-white font-dvn-luckiest-guy leading-[1.2rem] uppercase'>
            Book now
          </span>
        </Button>
      </div>
    </section>
  )
}

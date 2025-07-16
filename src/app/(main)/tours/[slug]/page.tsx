import ImageFallback from '@/components/image/ImageFallback'
import {BreadcrumbDynamic} from '@/components/ui/breadcrumb-dynamic'
import {Button} from '@/components/ui/button'
import Image from 'next/image'

const TourDetail = () => {
  return (
    <section className='w-full h-[100vh] relative mb-[20rem]'>
      <ImageFallback
        src={'/tour-detail/d-banner.webp'}
        alt='tour-detail-banner'
        width={1920}
        height={512}
        className='w-full h-full object-cover object-center'
      />
      <Image
        src='/tour-detail/bottom.webp'
        alt='tour-detail-banner-mobile'
        width={1920}
        height={130}
        className='w-full h-[6rem] absolute bottom-[-0.125rem] left-0 z-[1]'
      />
      <div
        className='w-full h-[13.4375rem] opacity-40 absolute top-0 left-0 z-[1]'
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
        className='absolute top-[6.575rem] left-[6.25rem] z-10'
      />
      <article className='w-[52.3125rem] p-[1.125rem] absolute bottom-[7.3125rem] left-[6.25rem]'>
        <h1 className='text-[3rem] leading-[3.9rem] text-white font-dvn-luckiest-guy'>
          HaGiang tour Cult 3 days 2 nights by MOtobike Experience
        </h1>
        <div className='mt-[0.5rem] flex items-center space-x-[0.5rem]'>
          <Image
            src='/tour-detail/icon.svg'
            alt='icon'
            width={16}
            height={16}
            className='size-[1.6rem] object-cover'
          />
          <p className='text-[#FCFF49] text-[2.25rem] font-extrabold leading-[2.7rem] tracking-[0.01563rem] uppercase'>
            8686 USD
          </p>
          <span className='text-[#FCFF49]'>•</span>
          <span className='text-white leading-[1.6rem] tracking-[0.0025rem]'>
            2 days / 1 nights
          </span>
        </div>
      </article>

      <div className='grid grid-cols-[min-content_1fr] grid-rows-[min-content_min-content] w-[27.3125rem] h-[18.5rem] px-[1rem] py-[0.9375rem] gap-[0.625rem] bg-[#636363]/36 absolute top-[10.0875rem] right-[6.25rem] z-[1]'>
        <div
          className='w-[14.1875rem] h-[16.5625rem] rounded-[1.5rem] row-span-2 flex flex-col justify-between'
          style={{
            background: 'linear-gradient(180deg, #F4F5E6 0%, #B2DFDC 100%)',
          }}
        >
          <div className='size-[4rem] bg-[#FBFFE987] rounded-[1rem]'></div>
        </div>
        <div className='p-[1.1875rem_2.625rem_1.1875rem_1.125rem] size-[10.375rem] bg-[#F3F9F9] rounded-[1.5rem]'></div>
        <Button className='bg-[#25ACAB] w-[10.375rem] h-[5.5rem] rounded-[1.5rem] p-[1.1875rem_1.625rem_1.25rem_1.5625rem] text-white col-start-2'>
          Book now
        </Button>
      </div>
    </section>
  )
}

export default TourDetail

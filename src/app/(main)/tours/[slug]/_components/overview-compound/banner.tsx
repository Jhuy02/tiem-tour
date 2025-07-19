import {
  ArrowRight,
  Circle,
  Compass,
  Star,
} from '@/app/(main)/tours/[slug]/_components/icon'
import ImageFallback from '@/components/image/ImageFallback'
import { BreadcrumbDynamic } from '@/components/ui/breadcrumb-dynamic'
import { Button } from '@/components/ui/button'
import { WEATHER_API_KEY } from '@/config-global.env'
import { cn } from '@/lib/utils'
import { TourDetailContent } from '@/types/tours.interface'
import he from 'he'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const Banner = async ({data}: {data: TourDetailContent}) => {
  const galleryRandom = data?.acf_fields?.tripadvisor?.gallery?.sort(
    () => Math.random() - 0.5,
  )
  const galleryRandom3 = galleryRandom?.slice(0, 3)

  const weather = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${data?.taxonomies?.location[0]?.name}&units=metric&appid=${WEATHER_API_KEY}`,
  )
  const {main} = await weather.json()
  return (
    <section className='xsm:h-auto relative h-[100vh] w-full'>
      <BreadcrumbDynamic
        breadcrumbs={[
          {label: 'Home', href: '/'},
          {label: 'Tours', href: '/tours'},
          {
            label: data.title,
            href: '',
          },
        ]}
        className='xsm:[&_svg]:text-[#303030]/40 xsm:block last hidden'
      />
      <ImageFallback
        src={data.thumbnail?.url}
        alt={data.thumbnail?.alt}
        width={1920}
        height={512}
        className='xsm:h-[12.785rem] h-[100vh] w-full object-cover object-center'
      />
      <Image
        src='/tour-detail/bottom.webp'
        alt='tour-detail-banner-mobile'
        width={1920}
        height={130}
        className='xsm:hidden absolute bottom-[-0.125rem] left-0 z-[1] h-[6rem] w-full'
      />
      <div
        className='xsm:hidden absolute top-0 left-0 z-[1] h-[13.4375rem] w-full opacity-40'
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
            label: data.title,
            href: '/tours/tour-detail',
          },
          {label: 'Book tour now', href: '/tours/tour-detail'},
        ]}
        className='xsm:hidden absolute top-[6.575rem] left-[6.25rem] z-10'
      />
      <article className='xsm:w-full xsm:px-[1rem] xsm:py-[0.8375rem] xsm:static absolute bottom-[7.3125rem] left-[6.25rem] w-[52.3125rem] p-[1.125rem]'>
        <h1 className='font-dvn-luckiest-guy xsm:text-[#3B3943] xsm:text-[1.25rem] xsm:leading-[1.625rem] line-clamp-3 text-[3rem] leading-[3.9rem] text-white'>
          {he.decode(data?.title)}
        </h1>
        <div className='mt-[0.5rem] flex items-center space-x-[0.5rem]'>
          <Compass className='xsm:[&_path]:fill-[#FB0] xsm:size-[1.5rem] size-[1.6rem]' />
          <p className='xsm:text-[#FB0] xsm:text-[1.375rem] xsm:leading-[1.7875rem] xsm:font-dvn-luckiest-guy text-[2.25rem] leading-[2.7rem] font-extrabold tracking-[0.01563rem] text-[#FCFF49] uppercase'>
            {data?.acf_fields?.price} USD
          </p>
          <span className='xsm:text-[#FB0] text-[#FCFF49]'>•</span>
          <span className='xsm:text-[0.875rem] xsm:leading-[1.3125rem] xsm:tracking-[0.00219rem] xsm:text-[#3B3943] leading-[1.6rem] tracking-[0.0025rem] text-white'>
            {data.taxonomies?.duration?.[0]?.name || 'Duration not available'}
          </span>
        </div>
      </article>

      <div className='xsm:hidden absolute top-[10.0875rem] right-[6.25rem] z-[1] grid h-[18.5rem] w-[27.3125rem] grid-cols-[min-content_1fr] grid-rows-[min-content_min-content] gap-[0.625rem] bg-[#636363]/36 px-[1rem] py-[0.9375rem]'>
        <div
          className='row-span-2 flex h-[16.5625rem] w-[14.1875rem] flex-col justify-between rounded-[1.5rem]'
          style={{
            background: 'linear-gradient(180deg, #F4F5E6 0%, #B2DFDC 100%)',
          }}
        >
          <div className='flex h-full flex-col justify-between'>
            <div className='mt-[1.275rem] ml-[1.275rem] flex h-fit w-fit flex-col items-center justify-center'>
              <div className='flex size-[4rem] items-center justify-center rounded-[1rem] bg-[#FBFFE987]'>
                <Image
                  src='/tour-detail/weather.webp'
                  alt='weather'
                  width={64}
                  height={64}
                  className='size-[2.8125rem] object-cover'
                />
              </div>
              <p className='relative text-[2.96rem] leading-[3.26169rem] font-[900] tracking-[0.14825rem] text-[#25ACAB]'>
                {Math.round(main?.temp) || 32}
                <Circle className='absolute top-[0.5rem] right-[-0.5rem] size-[0.6rem]' />
              </p>
            </div>

            <div className='ml-[1.125rem] flex'>
              <Link
                href={'/'}
                className='mr-[0.6875rem] flex items-center'
              >
                Gallery <ArrowUpRight className='ml-[0.25rem] size-[1rem]' />
              </Link>
              <div className='flex h-[4.80488rem] w-[7.48556rem]'>
                {galleryRandom3.map((item, index) => (
                  <Image
                    key={index}
                    src={item.url}
                    alt={item.alt}
                    width={100}
                    height={100}
                    className={cn(
                      'size-[3.74881rem] rounded-[1.24963rem] border-[0.188rem] border-[#EDEDED] object-cover',
                      index === 0 && 'mr-[-2.5rem] rotate-[-9.899deg]',
                      index === 1 && 'z-[5] rotate-[4.763deg]',
                      index === 2 && 'ml-[-2.25rem] rotate-[20deg]',
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='flex size-[10.375rem] flex-col justify-between rounded-[1.5rem] bg-[#F3F9F9] p-[1.1875rem_2.625rem_1.1875rem_1.125rem]'>
          <article className='space-y-[0.25rem]'>
            <p className='text-[0.875rem] leading-[1.05rem] font-medium tracking-[0.00219rem] text-[#5F6161]'>
              Best
            </p>
            <p className='font-dvn-luckiest-guy text-[1.125rem] leading-[1.35rem] tracking-[0.0125rem] text-[#092F1A] uppercase'>
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
          <p className='text-[0.875rem] leading-[1.05rem] font-medium tracking-[0.00219rem] text-[#006CE4]'>
            ({data.acf_fields.tripadvisor.number_of_reviews || 121} review)
          </p>
        </div>
        <Button className='col-start-2 h-[5.5rem] w-[10.375rem] flex-col items-center justify-center rounded-[1.5rem] bg-[#25ACAB] p-[1.1875rem_1.625rem_1.25rem_1.5625rem] text-white transition-colors duration-300 hover:bg-[#25ACAB]/80'>
          <ArrowRight className='h-[1.5rem] w-[1.575rem]' />
          <span className='font-dvn-luckiest-guy leading-[1.2rem] text-white uppercase'>
            Book now
          </span>
        </Button>
      </div>
    </section>
  )
}

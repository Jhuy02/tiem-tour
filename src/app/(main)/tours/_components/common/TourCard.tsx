import IconArrowRightV1 from '@/components/icon/IconArrowRightV1'
import IconClockV1 from '@/components/icon/IconClockV1'
import IconLocationV1 from '@/components/icon/IconLocationV1'
import ImageFallback from '@/components/image/ImageFallback'
import {TourImage, TourTaxonomy} from '@/types/tours.interface'
import Image from 'next/image'
import React from 'react'

interface TourCardProps {
  title: string
  image?: TourImage
  price: string
  location: TourTaxonomy[]
  duration: TourTaxonomy[]
}

export default function TourCard({
  title,
  image,
  price,
  location,
  duration,
}: TourCardProps) {
  return (
    <article className='group relative h-[25.8125rem] w-full cursor-pointer overflow-hidden bg-[#fff] max-sm:h-auto'>
      <div className='relative h-[15.8125rem] overflow-hidden transition-all duration-500 max-sm:h-[14.8125rem] max-sm:shadow-[0px_15px_16.5px_0px_rgba(0,0,0,0.18)_inset] min-lg:group-hover:h-[17.3125rem]'>
        {image?.url ? (
          <>
            <ImageFallback
              alt={image.alt}
              src={image.url}
              width={335}
              height={250}
              className='h-full w-full object-cover transition-all duration-300 ease-in-out min-lg:group-hover:scale-105'
            />
            <ImageFallback
              alt={image?.alt}
              src={image?.url}
              width={335}
              height={250}
              className='absolute top-[1.69rem] right-[2.4rem] left-[2.4rem] z-[2] h-[19.755rem] w-[calc(100%-4.8rem)] scale-110 rounded-[10.86781rem] object-cover opacity-0 shadow-[0px_18.448px_20.293px_0px_rgba(0,0,0,0.18)_inset] transition-all duration-500 min-lg:group-hover:scale-100 min-lg:group-hover:opacity-100'
            />
          </>
        ) : (
          <>
            <Image
              alt=''
              src='/images/fallback-image.webp'
              width={335}
              height={250}
              className='h-full w-full object-cover transition-all duration-300 ease-in-out min-lg:group-hover:scale-105'
            />
            <Image
              alt=''
              src='/images/fallback-image.webp'
              width={335}
              height={250}
              className='absolute top-[1.69rem] right-[2.4rem] left-[2.4rem] z-[2] h-[19.755rem] w-[calc(100%-4.8rem)] scale-110 rounded-[10.86781rem] object-cover opacity-0 shadow-[0px_18.448px_20.293px_0px_rgba(0,0,0,0.18)_inset] transition-all duration-500 min-lg:group-hover:scale-100 min-lg:group-hover:opacity-100'
            />
          </>
        )}

        <div className='absolute top-0 left-0 h-full w-full bg-[rgba(0,0,0,0.38)] opacity-0 backdrop-blur-[0.15000000596046448px] transition-all duration-500 min-lg:group-hover:opacity-100'></div>
      </div>
      <div className='relative px-[0.75rem] py-[1rem]'>
        <h3
          dangerouslySetInnerHTML={{__html: title}}
          className='font-dvn-luckiest-guy mb-[0.75rem] line-clamp-2 h-[2.75rem] text-[1.125rem] leading-[120%] font-normal tracking-[0.0125rem] text-[#3b3943] uppercase max-sm:mb-[0.5rem] max-sm:text-[1rem]'
        ></h3>

        <div className='transition-all duration-500 min-lg:group-hover:translate-y-[6rem] min-lg:group-hover:opacity-0'>
          <div className='mb-[0.375rem] flex items-center'>
            <IconLocationV1 className='mr-[0.5rem] h-auto w-[1rem] shrink-0' />
            <p className='font-trip-sans text-[0.75rem] leading-[120%] font-bold tracking-[0.00188rem] text-[rgba(48,48,48,0.80)]'>
              {location?.map((i) => i.name).join(', ')}
            </p>
          </div>
          <div className='mb-[0.75rem] flex items-center'>
            <IconClockV1 className='mr-[0.5rem] h-auto w-[1rem] shrink-0' />
            <p className='font-trip-sans text-[0.75rem] leading-[120%] font-bold tracking-[0.00188rem] text-[rgba(48,48,48,0.80)]'>
              {duration?.length > 0 && duration[0].name}
            </p>
          </div>
          <p className='font-trip-sans text-[1.375rem] leading-[120%] font-extrabold tracking-[0.01563rem] text-[#19C2C2] uppercase'>
            <span>{price}</span> USD
          </p>
        </div>
        <button className='pointer-events-none absolute top-[1rem] right-[1rem] left-[1rem] flex items-center justify-center rounded-[3.125rem] bg-[#25acab] px-[1.5rem] py-[0.75rem] opacity-0 transition-all duration-500 min-lg:group-hover:pointer-events-auto min-lg:group-hover:translate-y-[3.5rem] min-lg:group-hover:opacity-100'>
          <span className='font-dvn-luckiest-guy h-[0.6875rem] text-[1rem] leading-[120%] font-normal text-[#fff]'>
            Book Now
          </span>
          <IconArrowRightV1 className='ml-[0.625rem] h-auto w-[1.575rem]' />
        </button>
      </div>
    </article>
  )
}

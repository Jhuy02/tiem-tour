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
    <article className='relative group w-full h-[25.8125rem] overflow-hidden bg-[#fff] max-sm:h-auto cursor-pointer'>
      <div className='overflow-hidden h-[15.8125rem] transition-all duration-500 relative min-lg:group-hover:h-[17.3125rem] max-sm:h-[14.8125rem] max-sm:shadow-[0px_15px_16.5px_0px_rgba(0,0,0,0.18)_inset]'>
        {image?.url ? (
          <>
            <ImageFallback
              alt={image.alt}
              src={image.url}
              width={335}
              height={250}
              className='w-full h-full object-cover transition-all ease-in-out duration-300 min-lg:group-hover:scale-105'
            />
            <ImageFallback
              alt={image?.alt}
              src={image?.url}
              width={335}
              height={250}
              className='absolute top-[1.69rem] left-[2.4rem] right-[2.4rem] w-[calc(100%-4.8rem)] h-[19.755rem] object-cover rounded-[10.86781rem] shadow-[0px_18.448px_20.293px_0px_rgba(0,0,0,0.18)_inset] opacity-0 transition-all duration-500 scale-110 z-[2] min-lg:group-hover:scale-100 min-lg:group-hover:opacity-100'
            />
          </>
        ) : (
          <>
            <Image
              alt=''
              src='/images/fallback-image.webp'
              width={335}
              height={250}
              className='w-full h-full object-cover transition-all ease-in-out duration-300 min-lg:group-hover:scale-105'
            />
            <Image
              alt=''
              src='/images/fallback-image.webp'
              width={335}
              height={250}
              className='absolute top-[1.69rem] left-[2.4rem] right-[2.4rem] w-[calc(100%-4.8rem)] h-[19.755rem] object-cover rounded-[10.86781rem] shadow-[0px_18.448px_20.293px_0px_rgba(0,0,0,0.18)_inset] opacity-0 transition-all duration-500 scale-110 z-[2] min-lg:group-hover:scale-100 min-lg:group-hover:opacity-100'
            />
          </>
        )}

        <div className='absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.38)] opacity-0 transition-all duration-500 backdrop-blur-[0.15000000596046448px] min-lg:group-hover:opacity-100'></div>
      </div>
      <div className='relative py-[1rem] px-[0.75rem]'>
        <h3
          dangerouslySetInnerHTML={{__html: title}}
          className='text-[#3b3943] font-dvn-luckiest-guy text-[1.125rem] font-normal leading-[120%] tracking-[0.0125rem] uppercase h-[2.75rem] line-clamp-2 mb-[0.75rem] max-sm:text-[1rem] max-sm:mb-[0.5rem]'
        ></h3>

        <div className='min-lg:group-hover:translate-y-[6rem] min-lg:group-hover:opacity-0 transition-all duration-500'>
          <div className='flex items-center mb-[0.375rem]'>
            <IconLocationV1 className='w-[1rem] h-auto shrink-0 mr-[0.5rem]' />
            <p className='text-[rgba(48,48,48,0.80)] font-trip-sans text-[0.75rem] font-bold leading-[120%] tracking-[0.00188rem]'>
              {location?.map((i) => i.name).join(', ')}
            </p>
          </div>
          <div className='flex items-center mb-[0.75rem]'>
            <IconClockV1 className='w-[1rem] h-auto shrink-0 mr-[0.5rem]' />
            <p className='text-[rgba(48,48,48,0.80)] font-trip-sans text-[0.75rem] font-bold leading-[120%] tracking-[0.00188rem]'>
              {duration?.length > 0 && duration[0].name}
            </p>
          </div>
          <p className='text-[#19C2C2] text-[1.375rem] font-trip-sans font-extrabold leading-[120%] tracking-[0.01563rem] uppercase'>
            <span>{price}</span> USD
          </p>
        </div>
        <button className='absolute left-[1rem] right-[1rem] top-[1rem] opacity-0 pointer-events-none transition-all duration-500 flex justify-center items-center px-[1.5rem] py-[0.75rem] rounded-[3.125rem] bg-[#25acab] min-lg:group-hover:opacity-100 min-lg:group-hover:pointer-events-auto min-lg:group-hover:translate-y-[3.5rem]'>
          <span className='text-[#fff] font-dvn-luckiest-guy text-[1rem] font-normal leading-[120%] h-[0.6875rem]'>
            Book Now
          </span>
          <IconArrowRightV1 className='w-[1.575rem] h-auto ml-[0.625rem]' />
        </button>
      </div>
    </article>
  )
}

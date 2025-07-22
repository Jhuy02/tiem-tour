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
    <article className='group xsm:w-[19.625rem] xsm:h-auto xsm:flex-col xsm:shadow-none relative flex h-[9rem] w-full cursor-pointer overflow-hidden bg-[#fff] shadow-[0px_2px_16px_0px_rgba(0,0,0,0.08)]'>
      <div className='xsm:w-full xsm:h-[14.8125rem] xsm:mr-0 relative mr-3 h-[9rem] w-[12.3125rem]'>
        {image?.url ? (
          <ImageFallback
            alt={image.alt}
            src={image.url}
            width={335}
            height={250}
            className='h-full w-full object-cover'
          />
        ) : (
          <Image
            alt=''
            src='/images/fallback-image.webp'
            width={335}
            height={250}
            className='h-full w-full object-cover'
          />
        )}
      </div>
      <div className='xsm:p-4 relative flex-1 p-2'>
        <h3
          dangerouslySetInnerHTML={{__html: title}}
          className='font-dvn-luckiest-guy mb-[0.75rem] line-clamp-2 text-[1.125rem] leading-[120%] font-normal tracking-[0.0125rem] text-[#3b3943] uppercase'
        ></h3>
        <div className=''>
          <div className='mb-[0.375rem] flex items-center'>
            <IconLocationV1 className='mr-[0.5rem] !size-4 shrink-0' />
            <p className='font-trip-sans text-[0.75rem] leading-[120%] font-bold tracking-[0.00188rem] text-[rgba(48,48,48,0.80)]'>
              {location?.map((i) => i.name).join(', ')}
            </p>
          </div>
          <div className='mb-[0.75rem] flex items-center'>
            <IconClockV1 className='mr-[0.5rem] !size-4 shrink-0' />
            <p className='font-trip-sans text-[0.75rem] leading-[120%] font-bold tracking-[0.00188rem] text-[rgba(48,48,48,0.80)]'>
              {duration?.length > 0 && duration[0].name}
            </p>
          </div>
          <p className='font-trip-sans text-[1.375rem] leading-[120%] font-extrabold tracking-[0.01563rem] text-[#19C2C2] uppercase'>
            <span>{price}</span> USD
          </p>
        </div>
      </div>
    </article>
  )
}

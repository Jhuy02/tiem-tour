'use client'
import ImageFallback from '@/components/image/ImageFallback'
import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface NewsCardProps extends React.ComponentPropsWithoutRef<'article'> {
  category: string
  date: string
  title: string
  thumbSrc: StaticImageData | string
}

export default function NewsCard({
  category,
  date,
  title,
  thumbSrc,
  ...rest
}: NewsCardProps) {
  return (
    <article {...rest}>
      <div className='group xsm:h-[24rem] relative flex h-[27.3125rem] w-full cursor-pointer flex-col items-center'>
        <Image
          alt='blog-card-bg'
          width={335}
          height={437.2285}
          src='/images/blog-card-bg.webp'
          className='absolute top-0 left-0 z-0 h-full w-full'
        />
        <div className='xsm:py-[1.5rem] xsm:px-[1.25rem] xsm:mb-0 relative z-[1] mb-[1.8125rem] flex h-[11.1875rem] w-full shrink-0 flex-col items-start self-stretch px-[1.5rem] py-[1.75rem]'>
          <div className='font-trip-sans mb-[1rem] flex items-center'>
            <p className='text-[0.75rem] leading-[120%] font-extrabold tracking-[0.00188rem] text-[#FCFF49] uppercase'>
              {category}
            </p>
            <span className='inline-block w-[0.25rem] h-[0.25rem] bg-[#fff] rounded-full mx-[0.75rem]'></span>
            <p className='text-white group-hover:text-[#303030] transition-all text-[0.75rem] font-normal leading-[120%] tracking-[0.00188rem] opacity-60'>
              {date}
            </p>
          </div>
          <h3
            dangerouslySetInnerHTML={{__html: title}}
            className='font-dvn-luckiest-guy line-clamp-3 text-[1.625rem] leading-[120%] font-normal tracking-[0.01563rem] text-white/80 uppercase min-sm:opacity-80'
          ></h3>
        </div>
        <div className='relative z-[1] flex shrink-0 items-center justify-center self-stretch px-[0.9063rem] min-sm:px-[0.66rem]'>
          <div className='xsm:h-[11.125rem] h-[12.0625rem] w-full overflow-hidden rounded-[8.0625rem]'>
            <ImageFallback
              alt='blog-card-thumb'
              width={300}
              height={200}
              fallbackImage='/images/fallback-image.webp'
              src={thumbSrc}
              className='h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0,-0.03,0,0.68)] lg:group-hover:scale-[1.1]'
            />
          </div>
        </div>
      </div>
    </article>
  )
}

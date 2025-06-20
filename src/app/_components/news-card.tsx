'use client'
import ImageFallback from '@/components/image/ImageFallback'
import Image, {StaticImageData} from 'next/image'
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
      <div className='group relative flex flex-col items-center w-full h-[27.3125rem] cursor-pointer'>
        <Image
          alt=''
          width={335}
          height={437.2285}
          src='/images/blog-card-bg.webp'
          className='absolute z-0 top-0 left-0 w-full h-full'
        />
        <div className='self-stretch relative flex flex-col items-start mb-[1.8125rem] h-[11.1875rem] w-full px-[1.5rem] py-[1.75rem] shrink-0 z-[1]'>
          <div className='font-trip-sans flex items-center mb-[1rem]'>
            <p className='text-[#FCFF49] text-[0.75rem] font-extrabold leading-[120%] tracking-[0.00188rem] uppercase'>
              {category}
            </p>
            <span className='inline-block w-[0.25rem] h-[0.25rem] bg-[#fff] rounded-full mx-[0.75rem]'></span>
            <p className='text-[#303030] text-[0.75rem] font-normal leading-[120%] tracking-[0.00188rem] opacity-60'>
              {date}
            </p>
          </div>
          <h3
            dangerouslySetInnerHTML={{__html: title}}
            className='min-sm:opacity-80 font-dvn-luckiest-guy text-[rgba(255, 255, 255, 0.80)] text-[1.625rem] font-normal leading-[120%] tracking-[0.01563rem] uppercase line-clamp-3'
          >
            {title}
          </h3>
        </div>
        <div className='self-stretch relative px-[0.9063rem] min-sm:px-[0.66rem] flex items-center justify-center shrink-0 z-[1]'>
          <div className='w-full h-[12.0625rem] overflow-hidden rounded-[8.0625rem]'>
            <ImageFallback
              alt=''
              width={300}
              height={200}
              fallbackImage='/images/fallback-image.webp'
              src={thumbSrc}
              className='w-full h-full object-cover lg:group-hover:scale-[1.1] transition-transform duration-500 ease-[cubic-bezier(0,-0.03,0,0.68)]'
            />
          </div>
        </div>
      </div>
    </article>
  )
}

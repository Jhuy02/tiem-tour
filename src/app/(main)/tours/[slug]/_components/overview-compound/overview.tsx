'use client'

import {useState} from 'react'
import Link from 'next/link'
import ImageFallback from '@/components/image/ImageFallback'
import scrollToElement from '@/hooks/scrollToElement'
import {
  Itinerary,
  Pickup,
  Suitable,
} from '@/app/(main)/tours/[slug]/_components/icon'
import {TourDetailContent} from '@/types/tours.interface'
import he from 'he'

export const Overview = ({
  data,
}: {
  data: TourDetailContent['acf_fields']['overview']
}) => {
  const [expanded, setExpanded] = useState(false)
  const fullText = data.desc
  const splitIndex = 160
  const summary = fullText.slice(0, splitIndex)
  const details = fullText.slice(splitIndex)

  return (
    <div className='flex flex-col space-y-4'>
      <p className='leading-[1.6rem] tracking-[0.0025rem] text-[#303030]'>
        {summary}
        {!expanded && details && '...'}
        <span
          className={`transition-opacity duration-500 ease-in-out ${
            expanded ? 'opacity-100' : 'opacity-0'
          } ${expanded ? 'inline' : 'absolute h-0 w-0 overflow-hidden'}`}
          style={{transition: 'opacity 0.5s', verticalAlign: 'baseline'}}
        >
          {details}
        </span>
        {details && (
          <span className='inline'>
            <button
              className='ml-2 inline cursor-pointer text-[#006CE4]'
              onClick={() => setExpanded((prev) => !prev)}
              type='button'
            >
              {expanded ? 'show less' : 'read more'}
            </button>
          </span>
        )}
      </p>

      <article
        className='leading-[1.2rem] tracking-[0.0025rem] text-[#303030] [&_strong]:font-medium [&_ul]:mt-[0.5rem] [&_ul]:list-inside [&_ul]:list-disc [&_ul]:space-y-[0.375rem] [&_ul]:text-[0.875rem] [&_ul]:leading-[1.3125rem] [&_ul]:tracking-[0.00219rem] [&_ul]:text-[#303030]'
        dangerouslySetInnerHTML={{
          __html: he.decode(data.editor),
        }}
      ></article>

      <div className='flex flex-col rounded-[1.5rem] bg-[#F8F7F6] p-4'>
        <p className='text-[0.875rem] leading-[1.05rem] font-extrabold tracking-[0.01563rem] text-[#303030] uppercase'>
          At a glance
        </p>
        <ul className='mt-[0.75rem] space-y-[0.75rem]'>
          <li className='flex items-center space-x-[0.5rem]'>
            <Pickup className='size-[1.0625rem]' />
            <p className='leading-[1.3rem] tracking-[0.0025rem] text-[#303030]'>
              <strong className='font-extrabold'>Depart from: {''}</strong>
              <span className='font-medium'>{data.glance.depart_from}</span>
            </p>
          </li>
          <li className='flex w-full items-center space-x-[0.5rem]'>
            <Itinerary className='size-[1.0625rem]' />
            <p className='flex items-center leading-[1.3rem] tracking-[0.0025rem] text-[#303030]'>
              <strong className='flex items-center font-extrabold'>
                Itinerary:{' '}
                <span
                  className='ml-1 font-medium [&_svg]:mx-[0.5rem]'
                  dangerouslySetInnerHTML={{
                    __html: data.glance.itinerary,
                  }}
                ></span>
              </strong>
            </p>
          </li>
          <li className='flex items-center space-x-[0.5rem]'>
            <Suitable className='size-[1.0625rem]' />
            <p className='leading-[1.3rem] tracking-[0.0025rem] text-[#303030]'>
              <strong className='font-extrabold'>Time: {''}</strong>
              <span className='font-medium'>{data.glance.time}</span>
            </p>
          </li>
        </ul>
      </div>

      <div className='flex w-full justify-center space-x-[0.75rem]'>
        <div
          className='flex-1 cursor-pointer'
          onClick={() => {
            scrollToElement(null, 'faq', 1, 6)
          }}
        >
          <ImageFallback
            src={data.different.image.url}
            alt={data.different.image.alt}
            width={data.different.image.width}
            height={data.different.image.height}
            className='xsm:size-[4.5rem] xsm:mx-auto h-[6.85619rem] w-full rounded-[1.5rem] object-cover'
          />
          <p className='mt-[0.375rem] text-center leading-[1.2rem] font-medium tracking-[0.0025rem] text-[#303030]'>
            {data.different.text}
          </p>
        </div>
        <Link
          href={data.gallery.link.url}
          className='flex-1 cursor-pointer'
          target='_blank'
        >
          <ImageFallback
            src={data.gallery.image.url}
            alt={data.gallery.image.alt}
            width={data.gallery.image.width}
            height={data.gallery.image.height}
            className='xsm:size-[4.5rem] xsm:mx-auto h-[6.85619rem] w-full rounded-[1.5rem] object-cover'
          />
          <p className='mt-[0.375rem] text-center leading-[1.2rem] font-medium tracking-[0.0025rem] text-[#303030]'>
            {data.gallery.text}
          </p>
        </Link>
      </div>
    </div>
  )
}

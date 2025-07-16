'use client'

import {useState} from 'react'
import Link from 'next/link'
import ImageFallback from '@/components/image/ImageFallback'
import scrollToElement from '@/hooks/scrollToElement'
import { Itinerary, Pickup, Suitable } from '@/app/(main)/tours/[slug]/_components/icon'

export const Overview = () => {
  const [expanded, setExpanded] = useState(false)
  const fullText =
    'Offers unforgettable tour to explore the region’s stunning landscapes and local cultures. Perfect for those seeking comfort, quality and personalized experiences. Enjoy exclusive access to hidden gems, expert guides, and seamless travel arrangements that ensure a memorable journey from start to finish.'
  const splitIndex = 160
  const summary = fullText.slice(0, splitIndex)
  const details = fullText.slice(splitIndex)

  return (
    <div className='flex flex-col space-y-4'>
      <p className='text-[#303030] leading-[1.6rem] tracking-[0.0025rem]'>
        {summary}
        {!expanded && details && '...'}
        <span
          className={`transition-opacity duration-500 ease-in-out ${
            expanded ? 'opacity-100' : 'opacity-0'
          } ${expanded ? 'inline' : 'absolute w-0 h-0 overflow-hidden'}`}
          style={{transition: 'opacity 0.5s', verticalAlign: 'baseline'}}
        >
          {details}
        </span>
        {details && (
          <span className='inline'>
            <button
              className='text-[#006CE4] ml-2 inline cursor-pointer'
              onClick={() => setExpanded((prev) => !prev)}
              type='button'
            >
              {expanded ? 'show less' : 'read more'}
            </button>
          </span>
        )}
      </p>

      <article>
        <p className='text-[#303030] font-medium leading-[1.2rem] tracking-[0.0025rem]'>
          What's different in our tour ?
        </p>
        <ul className='space-y-[0.375rem] mt-[0.5rem] list-disc list-inside *:text-[#303030] *:leading-[1.3125rem] *:tracking-[0.00219rem] *:text-[0.875rem]'>
          <li>
            Small group (maximum 8 people) should be much more flexible and
            safer
          </li>
          <li>Going to the roads that the large tour group does not come </li>
          <li>Perfect timing: avoid large tour group</li>
          <li>Personalized experiences</li>
          <li>Beautiful homestay, cozy rooms</li>
          <li>
            The best and special local food (Hot pot, grill). Especially sharing
            meals with our guides ! Time to exchange culture, have fun together
            (drink some happy water and karaoke)
          </li>
        </ul>
      </article>

      <div className='flex flex-col p-4 rounded-[1.5rem] bg-[#F8F7F6]'>
        <p className='text-[#303030] text-[0.875rem] font-extrabold leading-[1.05rem] tracking-[0.01563rem] uppercase'>
          At a glance
        </p>
        <ul className='mt-[0.75rem] space-y-[0.75rem]'>
          <li className='flex items-center space-x-[0.5rem]'>
            <Pickup className='size-[1.0625rem]' />
            <p className='text-[#303030] leading-[1.3rem] tracking-[0.0025rem]'>
              <strong className='font-extrabold'>Depart from: {''}</strong>
              <span className='font-medium'>Hanoi</span>
            </p>
          </li>
          <li className='flex items-center space-x-[0.5rem] w-full'>
            <Itinerary className='size-[1.0625rem]' />
            <p className='text-[#303030] leading-[1.3rem] tracking-[0.0025rem] flex items-center'>
              <strong className='font-extrabold'>
                Itinerary: {''}{' '}
                <span className='font-medium [&_svg]:mx-[0.5rem] ml-1'>
                  Hanoi <span className='text-[#C83E21]'>⭢</span> Hanoi{' '}
                  <span className='text-[#C83E21]'>⭢</span> Hanoi{' '}
                  <span className='text-[#C83E21]'>⭢</span> Hanoi
                </span>
              </strong>
            </p>
          </li>
          <li className='flex items-center space-x-[0.5rem]'>
            <Suitable className='size-[1.0625rem]' />
            <p className='text-[#303030] leading-[1.3rem] tracking-[0.0025rem]'>
              <strong className='font-extrabold'>Depart from: {''}</strong>
              <span className='font-medium'>Hanoi</span>
            </p>
          </li>
        </ul>
      </div>

      <div className='flex justify-center w-full space-x-[0.75rem]'>
        <div
          className='flex-1 cursor-pointer'
          onClick={() => {
            scrollToElement(null, 'faq', 1, 6)
          }}
        >
          <ImageFallback
            src={'/tour-detail/d-image-1.webp'}
            alt='tour-detail'
            width={387.5}
            height={110}
            className='object-cover h-[6.85619rem] rounded-[1.5rem] w-full xsm:size-[4.5rem] xsm:mx-auto'
          />
          <p className='text-center mt-[0.375rem] font-medium text-[#303030] leading-[1.2rem] tracking-[0.0025rem]'>
            The different between 3 days and 4 days
          </p>
        </div>
        <Link
          href={'/'}
          className='flex-1 cursor-pointer'
        >
          <ImageFallback
            src={'/tour-detail/d-image-2.webp'}
            alt='tour-detail'
            width={387.5}
            height={110}
            className='object-cover h-[6.85619rem] rounded-[1.5rem] w-full xsm:size-[4.5rem] xsm:mx-auto'
          />
          <p className='text-center mt-[0.375rem] font-medium text-[#303030] leading-[1.2rem] tracking-[0.0025rem]'>
            Gallery
          </p>
        </Link>
      </div>
    </div>
  )
}

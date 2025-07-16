'use client'

import dynamic from 'next/dynamic'

const Swiper = dynamic(() => import('swiper/react').then((mod) => mod.Swiper), {
  ssr: false,
})
import {SwiperSlide} from 'swiper/react'
import 'swiper/css'
import ImageFallback from '@/components/image/ImageFallback'
import {convertRemToPx} from '@/lib/utils'
import Link from 'next/link'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import Image from 'next/image'
import { TripadvisorReviews } from '@/app/(main)/tours/[slug]/_components/icon'

export const Tripadvisor = () => {
  return (
    <Accordion
      type='single'
      collapsible
      defaultValue='tripadvisor'
      className='p-[1rem] rounded-[1rem]'
      style={{
        background:
          'linear-gradient(180deg, rgba(244, 245, 230, 0.40) 0%, rgba(178, 223, 220, 0.40) 100%)',
      }}
    >
      <AccordionItem value='tripadvisor'>
        <AccordionTrigger className='text-[#2E2E2E] text-[1.125rem] font-extrabold leading-[1.4625rem] tracking-[0.00281rem] p-0 cursor-pointer'>
          <div className='space-y-[0.5rem] w-full'>
            <div className='flex items-center'>
              <Image
                src={'/tour-detail/trip.svg'}
                alt='tripadvisor'
                width={60}
                height={60}
                className='object-cover size-[1.42869rem] mr-[0.5rem]'
              />
              <p>Tripadvisor</p>
            </div>
            <div className='flex items-center justify-between'>
              <p className='text-[0.875rem] font-bold leading-[1.05rem] tracking-[0.01563rem] uppercase text-[#092F1A]'>
                Tiemtourhagiang
              </p>
              <div className='flex items-center mr-[-2rem] space-x-[0.375rem] xsm:flex-col xsm:items-center xsm:space-x-0'>
                <div className='space-x-[0.125rem] flex items-center'>
                  {Array.from({length: 5}).map((_, index) => (
                    <TripadvisorReviews
                      key={index}
                      className='size-[0.75rem]'
                    />
                  ))}
                </div>
                <p className='text-[#303030] text-[0.875rem] font-medium leading-[1.05rem] tracking-[0.00219rem]'>
                  407 REVIEWS
                </p>
              </div>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className='p-0'>
          <div className='mt-[0.5rem]'>
            <Swiper
              slidesPerView={5.5}
              spaceBetween={convertRemToPx(0.5)}
              speed={700}
              grabCursor={true}
            >
              {Array.from({length: 10}).map((_, index) => (
                <SwiperSlide
                  className={`size-[4rem]! xsm:size-[4.125rem]! rounded-[1.5rem] overflow-hidden ${
                    index === 9 ? 'relative cursor-pointer' : ''
                  }`}
                  key={index}
                >
                  <ImageFallback
                    src={'/tour-detail/d-image-1.webp'}
                    alt='tripadvisor'
                    width={100}
                    height={100}
                    className='size-[4rem] object-cover rounded-[1.5rem] border border-[#EDEDED] bg-cover bg-center bg-no-repeat transition-all duration-300'
                  />
                  {index === 9 && (
                    <Link
                      href={'/'}
                      className='absolute inset-0 flex items-center justify-center'
                      style={{
                        backgroundImage:
                          'linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)',
                      }}
                    >
                      <p className='text-white text-[0.875rem] font-medium leading-[1.05rem] tracking-[0.00219rem]'>
                        More
                      </p>
                    </Link>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>

            <article className='space-y-[0.5rem] my-[0.5rem] text-[#303030] text-[0.875rem] leading-[1.05rem] tracking-[0.00219rem]'>
              <p>
                Everything about this tour was amazing. Our easy riders were so
                safe and Everything about this tour was amazing. Our easy riders
                we Our easy riders were so safe and ... more
              </p>
              <p>
                Everything about this tour was amazing. Our easy riders were so
                safe and Everything about this to Our easy riders we Our easy
                riders weur was amazing. Our easy riders were so safe and ...
                more
              </p>
              <p>
                Everything about this tour was amazing. Our easy riders were so
                safe and ... more
              </p>
            </article>
            <Link
              href={'/'}
              className='text-[#006CE4] text-[0.875rem] underline leading-[1.05rem] tracking-[0.00219rem]'
            >
              Read more reviews
            </Link>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

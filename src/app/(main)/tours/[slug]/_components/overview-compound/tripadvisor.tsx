'use client'

import {TripadvisorReviews} from '@/app/(main)/tours/[slug]/_components/icon'
import ImageFallback from '@/components/image/ImageFallback'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {convertRemToPx} from '@/lib/utils'
import {Tripadvisor as TripadvisorType} from '@/types/tours.interface'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import 'swiper/css'
import {SwiperSlide} from 'swiper/react'

const Swiper = dynamic(() => import('swiper/react').then((mod) => mod.Swiper), {
  ssr: false,
})

export const Tripadvisor = ({
  data,
  link,
}: {
  data: TripadvisorType
  link: string
}) => {
  return (
    <Accordion
      type='single'
      collapsible
      defaultValue='tripadvisor'
      className='rounded-[1rem] p-[1rem]'
      style={{
        background:
          'linear-gradient(180deg, rgba(244, 245, 230, 0.40) 0%, rgba(178, 223, 220, 0.40) 100%)',
      }}
    >
      <AccordionItem
        value='tripadvisor'
        className='border-none'
      >
        <AccordionTrigger className='cursor-pointer border-none p-0 text-[1.125rem] leading-[1.4625rem] font-extrabold tracking-[0.00281rem] text-[#2E2E2E]'>
          <div className='w-full space-y-[0.5rem]'>
            <div className='flex items-center'>
              <Image
                src={'/tour-detail/trip.svg'}
                alt='tripadvisor'
                width={60}
                height={60}
                className='mr-[0.5rem] size-[1.42869rem] object-cover'
              />
              <Link
                href={link}
                target='_blank'
              >
                Tripadvisor
              </Link>
            </div>
            <div className='flex items-center justify-between'>
              <Link
                href={link}
                target='_blank'
                className='text-[0.875rem] leading-[1.05rem] font-bold tracking-[0.01563rem] text-[#092F1A] uppercase'
              >
                {data.title}
              </Link>
              <div className='xsm:flex-col xsm:items-center xsm:space-x-0 mr-[-2rem] flex items-center space-x-[0.375rem]'>
                <div className='flex items-center space-x-[0.125rem]'>
                  {Array.from({length: 5}).map((_, index) => (
                    <TripadvisorReviews
                      key={index}
                      className='size-[0.75rem]'
                    />
                  ))}
                </div>
                <Link
                  href={link}
                  target='_blank'
                  className='text-[0.875rem] leading-[1.05rem] font-medium tracking-[0.00219rem] text-[#303030]'
                >
                  {data.number_of_reviews} REVIEWS
                </Link>
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
              {data.gallery.map((item, index) => (
                <SwiperSlide
                  className={`xsm:size-[4.125rem]! size-[4rem]! overflow-hidden rounded-[1.5rem] ${
                    index === data.gallery.length - 1
                      ? 'relative cursor-pointer'
                      : ''
                  }`}
                  key={item.url}
                >
                  <ImageFallback
                    src={item.url}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    className='size-[4rem] rounded-[1.5rem] border border-[#EDEDED] bg-cover bg-center bg-no-repeat object-cover transition-all duration-300'
                  />
                  {index === data.gallery.length - 1 && (
                    <Link
                      href={link || ''}
                      target='_blank'
                      className='absolute inset-0 flex items-center justify-center'
                      style={{
                        backgroundImage:
                          'linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)',
                      }}
                    >
                      <p className='text-[0.875rem] leading-[1.05rem] font-medium tracking-[0.00219rem] text-white'>
                        More
                      </p>
                    </Link>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>

            <article
              className='my-[0.5rem] space-y-[0.5rem] text-[0.875rem] leading-[1.05rem] tracking-[0.00219rem] text-[#303030]'
              dangerouslySetInnerHTML={{
                __html: data.desc,
              }}
            ></article>
            <Link
              href={link}
              className='text-[0.875rem] leading-[1.05rem] tracking-[0.00219rem] text-[#006CE4] underline'
              target='_blank'
            >
              Read more reviews
            </Link>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

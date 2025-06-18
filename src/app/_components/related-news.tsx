'use client'
import React from 'react'
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
// import required modules
import {Navigation, Pagination} from 'swiper/modules'
import Link from 'next/link'
import NewsCard from '@/app/_components/news-card'
import IconNavigationPrevV1 from '@/components/icon/IconNavigationPrevV1'
import IconNavigationNextV1 from '@/components/icon/IconNavigationNextV1'

interface RelatedNewsItem {
  category: string
  date: string
  image: {url: string; alt?: string}
  link: string
  title: string
}
interface RelatedNewsList {
  data: RelatedNewsItem[]
}

export default function RelatedNewsList({data}: RelatedNewsList) {
  const BACKGROUND_CARD_BY_INDEX = [
    '#115A46',
    '#3F0839',
    '#006162',
    '#906811',
    '#800',
  ]

  return (
    <section className='relative w-full overflow-hidden py-[2rem] sm:py-[6.25rem]'>
      <div className='relative max-w-[87.5rem] mx-auto'>
        <div className='flex items-center justify-between mb-[0.75rem] sm:mb-[1.75rem] px-[1rem]'>
          <h2 className='text-[#3b3943] font-dvn-luckiest-guy text-[1.5625rem] sm:text-[3rem] font-normal leading-[130%] flex-1 mr-[1.5rem]'>
            Related Blog
          </h2>
          <div className='hidden sm:flex items-center shrink-0'>
            <button className='related-swiper-prev-btn group flex items-center justify-center size-[4rem] rounded-full border-[4px] border-solid cursor-pointer transition-all duration-300 ease-out last:ml-[1rem] hover:bg-[#25acab] hover:border-[#25acab] disabled:cursor-not-allowed disabled:pointer-events-none border-[rgba(0,0,0,0.12)]'>
              <IconNavigationPrevV1 className='w-[1.625rem] h-auto shrink-0 group-hover:fill-[#fff] fill-[#3b3943] group-disabled:opacity-[0.25]' />
            </button>
            <button className='related-swiper-next-btn group flex items-center justify-center size-[4rem] rounded-full border-[4px] border-solid cursor-pointer transition-all duration-300 ease-out last:ml-[1rem] hover:bg-[#25acab] hover:border-[#25acab] disabled:cursor-not-allowed disabled:pointer-events-none border-[rgba(0,0,0,0.12)]'>
              <IconNavigationNextV1 className='w-[1.625rem] h-auto shrink-0 group-hover:fill-[#fff] fill-[#3b3943] group-disabled:opacity-[0.25]' />
            </button>
          </div>
        </div>
        <div className='hidden sm:block'>
          <Swiper
            speed={750}
            freeMode={true}
            grabCursor={true}
            slidesPerView={4}
            spaceBetween={30}
            navigation={{
              prevEl: '.related-swiper-prev-btn',
              nextEl: '.related-swiper-next-btn',
            }}
            modules={[Pagination, Navigation]}
            className='related-blogs overflow-visible!'
          >
            {data?.map((blog, index) => {
              const backgroundColor = BACKGROUND_CARD_BY_INDEX[index % 5]
              return (
                <SwiperSlide key={index}>
                  <Link
                    href={blog.link}
                    className='w-[20.9375rem] shrink-0'
                  >
                    <NewsCard
                      style={{backgroundColor}}
                      className='w-full'
                      category={blog.category}
                      date={blog.date}
                      title={blog.title}
                      thumbSrc={blog.image?.url ?? null}
                    />
                  </Link>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
        <div className='sm:hidden flex w-full overflow-x-auto scrollbar-hidden'>
          {data?.map((blog, index) => {
            const backgroundColor = BACKGROUND_CARD_BY_INDEX[index % 5]
            return (
              <Link
                key={index}
                href={blog.link}
                className='w-[19.625rem] shrink-0 last:mr-[1rem] first:ml-[1rem] not-first:ml-[0.75rem]'
              >
                <NewsCard
                  style={{backgroundColor}}
                  className='w-full'
                  category={blog.category}
                  date={blog.date}
                  title={blog.title}
                  thumbSrc={blog.image?.url ?? null}
                />
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

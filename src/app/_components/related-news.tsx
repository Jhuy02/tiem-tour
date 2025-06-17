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
              <svg
                className='w-[1.625rem] h-auto shrink-0 group-hover:fill-[#fff] fill-[#3b3943] group-disabled:opacity-[0.25]'
                xmlns='http://www.w3.org/2000/svg'
                width='26'
                height='26'
                viewBox='0 0 26 26'
                fill='none'
              >
                <path
                  d='M9.16796 7.13344C10.1384 6.07103 11.17 4.7229 11.8966 3.46427C12.218 2.90761 12.4508 2.27953 12.7573 1.73765C12.7957 1.67032 12.7346 1.60054 12.8913 1.63338L16.1436 5.36823C14.0044 7.60963 11.4349 9.38469 8.67256 10.6786L6.34682 11.5662C12.3983 11.6466 18.4968 11.2172 24.375 9.67862L24.375 16.3289C23.1098 15.9997 21.8345 15.6885 20.5489 15.4513C15.8716 14.5884 11.0947 14.3757 6.34682 14.4414L8.46013 15.223C10.8799 16.3486 13.2229 17.806 15.2053 19.6525C15.5102 19.9365 15.7697 20.3659 16.1444 20.517L12.7753 24.375C10.6808 19.659 6.53574 15.4619 1.81999 13.7214C1.48057 13.5284 1.6977 12.6975 1.65067 12.3141C4.0689 11.5826 6.39464 9.89784 8.22732 8.11867C8.57693 7.90192 8.98062 7.53492 9.16796 7.13344Z'
                  fill=''
                />
              </svg>
            </button>
            <button className='related-swiper-next-btn group flex items-center justify-center size-[4rem] rounded-full border-[4px] border-solid cursor-pointer transition-all duration-300 ease-out last:ml-[1rem] hover:bg-[#25acab] hover:border-[#25acab] disabled:cursor-not-allowed disabled:pointer-events-none border-[rgba(0,0,0,0.12)]'>
              <svg
                className='w-[1.625rem] h-auto shrink-0 group-hover:fill-[#fff] fill-[#3b3943] group-disabled:opacity-[0.25]'
                xmlns='http://www.w3.org/2000/svg'
                width='26'
                height='26'
                viewBox='0 0 26 26'
                fill='none'
              >
                <path
                  d='M16.832 7.13344C15.8616 6.07103 14.83 4.7229 14.1034 3.46427C13.782 2.90761 13.5492 2.27953 13.2427 1.73765C13.2043 1.67032 13.2654 1.60054 13.1087 1.63338L9.8564 5.36823C11.9956 7.60963 14.5651 9.38469 17.3274 10.6786L19.6532 11.5662C13.6017 11.6466 7.50323 11.2172 1.625 9.67862L1.625 16.3289C2.89016 15.9997 4.16552 15.6885 5.45106 15.4513C10.1284 14.5884 14.9053 14.3757 19.6532 14.4414L17.5399 15.223C15.1201 16.3486 12.7771 17.806 10.7947 19.6525C10.4898 19.9365 10.2303 20.3659 9.85561 20.517L13.2247 24.375C15.3192 19.659 19.4643 15.4619 24.18 13.7214C24.5194 13.5284 24.3023 12.6975 24.3493 12.3141C21.9311 11.5826 19.6054 9.89784 17.7727 8.11867C17.4231 7.90192 17.0194 7.53492 16.832 7.13344Z'
                  fill=''
                />
              </svg>
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

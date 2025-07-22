'use client'

import Image from 'next/image'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay, Parallax, Pagination} from 'swiper/modules'
import {BlueButton} from '@/components/blue-button'
import {News} from '@/types/news.interface'
import {useState, useRef, useEffect} from 'react'
import gsap from 'gsap'

import 'swiper/css'
import 'swiper/css/parallax'
import 'swiper/css/pagination'
import ImageFallback from '@/components/image/ImageFallback'
import Link from 'next/link'

const Featured = ({featured}: {featured: News[]}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayIndex, setDisplayIndex] = useState(0)
  const articleRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (displayIndex === currentIndex) return
    if (!articleRef.current) {
      setDisplayIndex(currentIndex)
      return
    }
    gsap.to(articleRef.current, {
      opacity: 0,
      x: 60,
      filter: 'blur(5px)',
      duration: 0.3,
      ease: 'power2.out',
      onComplete: () => {
        setDisplayIndex(currentIndex)
      },
    })
  }, [currentIndex, displayIndex])

  useEffect(() => {
    if (!articleRef.current) return
    gsap.fromTo(
      articleRef.current,
      {opacity: 0, x: -60, filter: 'blur(5px)'},
      {
        opacity: 1,
        x: 0,
        filter: 'blur(0px)',
        duration: 0.5,
        ease: 'power2.out',
      },
    )
  }, [displayIndex])

  return (
    <>
      <div className='xsm:w-full xsm:my-[0.75rem] xsm:static relative'>
        <div className='xsm:w-full xsm:p-[0.89638rem_1.92094rem_0.84525rem_1.92094rem] relative w-[52.3125rem] p-[2.1875rem_4.6875rem_3.875rem_4.6875rem]'>
          <Image
            src='/news/featured-bg.webp'
            alt='featured'
            className='h-full w-full object-cover'
            quality={100}
            fill
          />
          <Swiper
            modules={[Parallax, Autoplay, Pagination]}
            parallax={true}
            slidesPerView={1}
            loop={true}
            speed={1500}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className='featured xsm:h-[11.70481rem] relative h-[28.5625rem] w-full rounded-[62.5rem]'
            onSlideChange={(swiper) => {
              setCurrentIndex(swiper.realIndex)
            }}
            pagination={{
              el: '.featured-pagination',
              clickable: true,
              type: 'bullets',
            }}
            grabCursor={true}
          >
            {featured.map((item, index) => (
              <SwiperSlide
                key={index}
                className='relative flex items-center justify-center overflow-hidden'
              >
                <div
                  className='absolute top-0 left-0 h-full w-full overflow-hidden will-change-transform'
                  data-swiper-parallax='50%'
                >
                  <ImageFallback
                    src={item.thumbnail}
                    alt='featured'
                    className='xsm:w-[17.55725rem] xsm:h-[11.70481rem] h-[28.5625rem] w-[42.98375rem] object-cover'
                    width={685.5}
                    height={457}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className='featured-pagination'></div>
      </div>
      {featured[displayIndex] && (
        <article
          ref={articleRef}
          className='xsm:p-0 flex h-[32.875rem] flex-1 flex-col p-[1.75rem_0rem_1.75rem_2.5rem]'
          style={{opacity: 1}}
        >
          <p className='space-x-[0.75rem]'>
            <span className='text-[0.75rem] leading-[0.9rem] font-extrabold tracking-[0.00188rem] text-[#19C2C2] uppercase'>
              {featured[displayIndex].categories?.[0]?.name || 'News'}
            </span>
            <span>•</span>
            <span className='text-[0.75rem] leading-[0.9rem] tracking-[0.00188rem] text-black/60'>
              {featured[displayIndex].date || ''}
            </span>
          </p>
          <Link href={`/news/${featured[displayIndex].slug}`}>
            <h2
              ref={titleRef}
              className='font-dvn-luckiest-guy xsm:text-[1.375rem] xsm:leading-[1.7875rem] xsm:mt-[0.5rem] mt-[1.5rem] mb-[1rem] line-clamp-4 text-[2.25rem] leading-[2.7rem] tracking-[0.01563rem] text-[#3B3943] uppercase'
            >
              {featured[displayIndex].title}
            </h2>
          </Link>
          <p
            ref={descRef}
            className='xsm:leading-[1.5rem] line-clamp-6 leading-[1.6rem] tracking-[0.0025rem] text-[#303030CC]'
          >
            {featured[displayIndex].summary}
          </p>
          <div className='xsm:hidden flex items-start justify-start'>
            <BlueButton
              href={`/news/${featured[displayIndex].slug}`}
              textColor='#3B3943'
              arrowColor='#3B3943'
              borderColor='rgba(0, 0,0, 0.12)'
              className='mt-[2.5rem] border-4 px-[2.5rem] py-[1.25rem] shadow-[7px_10px_34.3px_0px_rgba(0,0,0,0.12)] hover:border-0'
            >
              Send Information
            </BlueButton>
          </div>
        </article>
      )}
    </>
  )
}

export default Featured

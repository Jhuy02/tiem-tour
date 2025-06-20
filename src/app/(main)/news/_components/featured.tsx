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
      <div className='relative xsm:w-full xsm:my-[0.75rem] xsm:static'>
        <div className='w-[52.3125rem] p-[2.1875rem_4.6875rem_3.875rem_4.6875rem] xsm:w-full xsm:p-[0.89638rem_1.92094rem_0.84525rem_1.92094rem] relative'>
          <Image
            src='/news/featured-bg.webp'
            alt='featured'
            className='w-full h-full object-cover'
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
            className='h-[28.5625rem] rounded-[62.5rem] w-full relative featured xsm:h-[11.70481rem] '
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
                className='flex items-center justify-center overflow-hidden relative'
              >
                <div
                  className='w-full h-full overflow-hidden absolute top-0 left-0 will-change-transform'
                  data-swiper-parallax='50%'
                >
                  <ImageFallback
                    src={item.thumbnail}
                    alt='featured'
                    className='w-[42.98375rem] h-[28.5625rem] object-cover xsm:w-[17.55725rem] xsm:h-[11.70481rem]'
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
          className='flex flex-1 flex-col p-[1.75rem_0rem_1.75rem_2.5rem] h-[32.875rem] xsm:p-0'
          style={{opacity: 1}}
        >
          <p className='space-x-[0.75rem]'>
            <span className='text-[0.75rem] text-[#19C2C2] font-extrabold leading-[0.9rem] tracking-[0.00188rem] uppercase'>
              {featured[displayIndex].categories?.[0]?.name || 'News'}
            </span>
            <span>•</span>
            <span className='text-black/60 text-[0.75rem] leading-[0.9rem] tracking-[0.00188rem]'>
              {featured[displayIndex].date || ''}
            </span>
          </p>
          <Link href={`/${featured[displayIndex].slug}`}>
            <h2
              ref={titleRef}
              className='text-[#3B3943] text-[2.25rem] leading-[2.7rem] tracking-[0.01563rem] uppercase font-dvn-luckiest-guy line-clamp-4 mt-[1.5rem] mb-[1rem] xsm:text-[1.375rem] xsm:leading-[1.7875rem] xsm:mt-[0.5rem]'
            >
              {featured[displayIndex].title}
            </h2>
          </Link>
          <p
            ref={descRef}
            className='text-[#303030CC] leading-[1.6rem] tracking-[0.0025rem] xsm:leading-[1.5rem]'
          >
            {featured[displayIndex].summary}
          </p>
          <div className='flex items-start justify-start xsm:hidden'>
            <BlueButton
              href={featured[displayIndex].permalink}
              textColor='#3B3943'
              arrowColor='#3B3943'
              borderColor='rgba(0, 0,0, 0.12)'
              className='py-[1.25rem] px-[2.5rem] border-4 shadow-[7px_10px_34.3px_0px_rgba(0,0,0,0.12)] mt-[2.5rem]'
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

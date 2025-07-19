'use client'

import ImageFallback from '@/components/image/ImageFallback'
import {animateTitle} from '@/hooks/useAnimateTitle'
import {getPathFromUrl} from '@/hooks/useGetPathFromUrl'
import {TypeOurTour, TypeOurTourList} from '@/types/home.interface'
import Image from 'next/image'
import Link from 'next/link'
import {useRef, useState} from 'react'
import type {Swiper as SwiperType} from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/parallax'
import {Autoplay, Pagination, Parallax} from 'swiper/modules'
import {Swiper, SwiperRef, SwiperSlide} from 'swiper/react'

export default function OurTourPC({
  data,
  dataOurTour,
  total,
}: {
  data: TypeOurTour
  dataOurTour: TypeOurTourList[]
  total: string
}) {
  const swiperRef = useRef<SwiperType | null>(null)
  const swiperRef2 = useRef<SwiperType | null>(null)
  const swiperRef3 = useRef<SwiperType | null>(null)
  const swiperRef4 = useRef<SwiperType | null>(null)
  const warperRef = useRef<HTMLDivElement | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  // Xử lý slide change
  const handleSlideChange = (swiper: SwiperType) => {
    const realIndex = swiper?.realIndex

    // Cập nhật active index
    setActiveIndex(realIndex)

    if (warperRef?.current) {
      const list__item = warperRef?.current?.querySelectorAll(
        '.ourTour-list__item_animation',
      )
      list__item?.forEach((item) => {
        const activeItem = item?.querySelectorAll('.item-infor')
        if (activeItem) {
          const splitTextEls =
            activeItem[realIndex]?.querySelectorAll('.SplitText')
          splitTextEls?.forEach((el) => {
            animateTitle(el as HTMLElement)
          })
        }
      })
    }

    if (swiperRef2?.current) {
      swiperRef2?.current?.slideTo(realIndex)
    }
    if (swiperRef3?.current) {
      swiperRef3?.current?.slideTo(realIndex)
    }
    if (swiperRef4?.current) {
      swiperRef4?.current?.slideTo(realIndex)
    }
  }

  return (
    <div
      ref={warperRef}
      className='ourTour-list pb-[30rem]!'
    >
      <div className='ourTour-list__item ourTour__item1 ourTour-list__item_animation'>
        <Swiper
          ref={swiperRef as unknown as React.RefObject<SwiperRef>}
          direction='vertical'
          speed={2000}
          parallax={true}
          allowTouchMove={false}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination-ourTour__item',
          }}
          modules={[Autoplay, Parallax, Pagination]}
          className='swiper-ourTour__item1 swiper-ourTour__item'
          onSlideChange={handleSlideChange}
        >
          {Array.isArray(dataOurTour) &&
            dataOurTour?.map((item, index) => (
              <SwiperSlide key={index}>
                <Link
                  href={'/tours/' + item?.tour_1.link}
                  className=''
                >
                  <div
                    className='ourTour__item'
                    data-swiper-parallax='90%'
                  >
                    <ImageFallback
                      src={item?.img_tour_1?.url}
                      alt={item?.img_tour_1?.alt}
                      width={424}
                      height={594}
                      className='ourTour-item__img'
                    />
                  </div>
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>
        <div className='ourTour__item-overlay'></div>
        <div className='ourTour__item-infor'>
          {Array.isArray(dataOurTour) &&
            dataOurTour?.map((item, index) => (
              <div
                key={index}
                className={`item-infor ${
                  index === activeIndex ? 'active' : ''
                }`}
              >
                <p className='item-infor__title SplitText'>
                  {item?.tour_1.title}
                </p>
                <div className='item-infor__warpper'>
                  <Image
                    src={'/home/our-tour/location.svg'}
                    alt=''
                    width={424}
                    height={594}
                    className='ourTour-item__img'
                  />
                  <p className='item-infor__price SplitText'>
                    {item?.tour_1.price} USD
                  </p>
                  <div className='item-infor__dots'></div>
                  <p className='item-infor__term SplitText'>
                    {item?.tour_1.duration[0]}
                  </p>
                </div>
                <div className='ourTour-item__btn'>
                  <p>Detail tour</p>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='19'
                    height='19'
                    viewBox='0 0 19 19'
                    fill='none'
                  >
                    <path
                      d='M7.35156 4.16992L12.6016 9.41992L7.35156 14.6699'
                      stroke='white'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className='ourTour-list__item ourTour__item2 ourTour-list__item_animation'>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef2.current = swiper
          }}
          direction='vertical'
          speed={2000}
          parallax={true}
          allowTouchMove={false}
          modules={[Parallax]}
          className='swiper-ourTour__item2 swiper-ourTour__item'
        >
          {Array.isArray(dataOurTour) &&
            dataOurTour?.map((item, index) => (
              <SwiperSlide key={index}>
                <Link
                  href={'/tours/' + item?.tour_2.link}
                  className=''
                >
                  <div
                    className='ourTour__item'
                    data-swiper-parallax='90%'
                  >
                    <ImageFallback
                      src={item?.img_tour_2?.url}
                      alt={item?.img_tour_2?.alt}
                      width={610}
                      height={230}
                      className='ourTour-item__img'
                    />
                  </div>
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>
        <div className='ourTour__item-overlay'></div>
        <div className='ourTour__item-infor'>
          {Array.isArray(dataOurTour) &&
            dataOurTour?.map((item, index) => (
              <div
                key={index}
                className={`item-infor ${
                  index === activeIndex ? 'active' : ''
                }`}
              >
                <p className='item-infor__title SplitText'>
                  {item?.tour_2.title}
                </p>
                <div className='item-infor__warpper'>
                  <Image
                    src={'/home/our-tour/location.svg'}
                    alt=''
                    width={40}
                    height={40}
                    className='ourTour-item__img'
                  />
                  <p className='item-infor__price SplitText'>
                    {item?.tour_2.price} USD
                  </p>
                  <div className='item-infor__dots'></div>
                  <p className='item-infor__term SplitText'>
                    {item?.tour_2.duration[0]}
                  </p>
                </div>
                <div className='ourTour-item__btn'>
                  <p>Detail tour</p>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='19'
                    height='19'
                    viewBox='0 0 19 19'
                    fill='none'
                  >
                    <path
                      d='M7.35156 4.16992L12.6016 9.41992L7.35156 14.6699'
                      stroke='white'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className='ourTour-list__item ourTour__item3 ourTour-list__item_animation'>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef3.current = swiper
          }}
          direction='vertical'
          speed={2000}
          parallax={true}
          allowTouchMove={false}
          modules={[Parallax]}
          className='swiper-ourTour__item3 swiper-ourTour__item'
        >
          {Array.isArray(dataOurTour) &&
            dataOurTour?.map((item, index) => (
              <SwiperSlide key={index}>
                <Link
                  href={'/tours/' + item?.tour_3.link}
                  className=''
                >
                  <div
                    className='ourTour__item'
                    data-swiper-parallax='90%'
                  >
                    <ImageFallback
                      src={item?.img_tour_3?.url}
                      alt={item?.img_tour_3?.alt}
                      width={610}
                      height={350}
                      className='ourTour-item__img'
                    />
                  </div>
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>
        <div className='ourTour__item-overlay'></div>
        <div className='ourTour__item-infor'>
          {Array.isArray(dataOurTour) &&
            dataOurTour?.map((item, index) => (
              <div
                key={index}
                className={`item-infor ${
                  index === activeIndex ? 'active' : ''
                }`}
              >
                <p className='item-infor__title SplitText'>
                  {item?.tour_3.title}
                </p>
                <div className='item-infor__warpper'>
                  <Image
                    src={'/home/our-tour/location.svg'}
                    alt=''
                    width={40}
                    height={40}
                    className='ourTour-item__img'
                  />
                  <p className='item-infor__price SplitText'>
                    {item?.tour_3.price} USD
                  </p>
                  <div className='item-infor__dots'></div>
                  <p className='item-infor__term SplitText'>
                    {item?.tour_3.duration[0]}
                  </p>
                </div>
                <div className='ourTour-item__btn'>
                  <p>Detail tour</p>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='19'
                    height='19'
                    viewBox='0 0 19 19'
                    fill='none'
                  >
                    <path
                      d='M7.35156 4.16992L12.6016 9.41992L7.35156 14.6699'
                      stroke='white'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
              </div>
            ))}
        </div>
      </div>
      <Link
        href={getPathFromUrl(data?.discover_our_tours?.link?.url)}
        target={data?.discover_our_tours?.link?.target}
        className='ourTour-list__item ourTour__item4'
      >
        <Swiper
          onSwiper={(swiper) => {
            swiperRef4.current = swiper
          }}
          direction='vertical'
          speed={2000}
          parallax={true}
          allowTouchMove={false}
          modules={[Parallax]}
          className='swiper-ourTour__item4 swiper-ourTour__item'
        >
          {Array.isArray(dataOurTour) &&
            dataOurTour?.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className='ourTour__item'
                  data-swiper-parallax='90%'
                >
                  <ImageFallback
                    src={item?.imgae_discover_our_tours?.url}
                    alt={item?.imgae_discover_our_tours?.alt}
                    width={250}
                    height={310}
                    className='ourTour-item__img'
                  />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
        <div className='discoverourtours'>
          <p className='discoverourtours__title'>
            {data?.discover_our_tours?.title}
          </p>
          <p className='discoverourtours__total'>{total} + tour for you</p>
        </div>
      </Link>
      <div className='ourTour-deco2'>
        <Image
          src={'/home/our-tour/khan.webp'}
          alt=''
          width={155}
          height={120}
        />
      </div>
      <div className='swiper-pagination-ourTour__item'></div>
    </div>
  )
}

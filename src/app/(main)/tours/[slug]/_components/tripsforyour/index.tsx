'use client'
import TourCard from '@/app/(main)/tours/_components/common/TourCard'
import ButtonNavNext from '@/app/_components/button-nav-next'
import ButtonNavPrev from '@/app/_components/button-nav-prev'
import IconArrowRightV2 from '@/components/icon/IconArrowRightV2'
import {convertRemToPx} from '@/lib/utils'
import {IMedia} from '@/types/media.interface'
import {TourTaxonomy} from '@/types/tours.interface'
import clsx from 'clsx'
import Link from 'next/link'
import 'swiper/css'
import {Navigation} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'
import './tripsforyou.css'
import {ROUTES} from '@/constants/routes'
interface IndataTripsForYour {
  title: string
  slug: string
  thumbnail: IMedia
  duration_term: TourTaxonomy[]
  location_term: TourTaxonomy[]
  price: string
}

export default function TripsForYour({
  dataTripsForYour,
}: {
  dataTripsForYour: IndataTripsForYour[]
}) {
  return (
    <section className='xsm:hidden pt-[5rem] pb-[13.79rem]'>
      <div className='mb-[3rem] flex items-center justify-between px-[6.25rem]'>
        <div className='font-dvn-luckiest-guy text-[3rem] leading-[1.3] text-[#3B3943]'>
          TRIPS FOR YOU
        </div>
        <Link
          href={ROUTES.CONTACT}
          className='xsm:w-full btn__learn-more xsm:self-stretch relative mt-[1.375rem] w-fit cursor-pointer overflow-hidden rounded-[3.125rem]'
        >
          <div className='xsm:py-[1.125rem] xsm:h-[3.375rem] xsm:border-[3px] flex h-[4rem] items-center justify-center rounded-[3.125rem] border-[4px] border-solid border-[rgba(0,0,0,0.12)] px-[2.5rem] py-[1.25rem] hover:border-transparent'>
            <span className='btn__learn-more__content-text'>
              Send information
            </span>
            <IconArrowRightV2
              className={clsx(
                'btn__learn-more__content-icon h-auto w-[1.575rem] shrink-0',
              )}
            />
          </div>
        </Link>
      </div>
      <div className='flex items-center space-x-[1.44rem] px-[1.81rem]'>
        <ButtonNavPrev className='best-choose-btn-prev relation size-[3rem] shrink-0 border-none bg-[#F3F9F9] [&_svg]:size-[1.5rem]' />
        <Swiper
          modules={[Navigation]}
          slidesPerView={4}
          spaceBetween={convertRemToPx(1.25)}
          navigation={{
            prevEl: '.best-choose-btn-prev',
            nextEl: '.best-choose-btn-next',
          }}
          className='best-choose-swiper !mr-[1.44rem]'
        >
          {Array.isArray(dataTripsForYour) &&
            dataTripsForYour?.length > 0 &&
            dataTripsForYour?.map((tour, index) => {
              return (
                <SwiperSlide key={index}>
                  <Link
                    href={`/tours/${tour?.slug}`}
                    className='shrink-0'
                  >
                    <TourCard
                      title={tour.title}
                      price={tour.price}
                      image={tour.thumbnail}
                      location={tour.location_term}
                      duration={tour.duration_term}
                    />
                  </Link>
                </SwiperSlide>
              )
            })}
        </Swiper>
        <ButtonNavNext className='best-choose-btn-next relation size-[3rem] shrink-0 border-none bg-[#F3F9F9] [&_svg]:size-[1.5rem]' />
      </div>
    </section>
  )
}

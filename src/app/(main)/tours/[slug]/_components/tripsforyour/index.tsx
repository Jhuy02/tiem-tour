'use client'
import TourCard from '@/app/(main)/tours/_components/common/TourCard';
import ButtonNavNext from '@/app/_components/button-nav-next';
import ButtonNavPrev from '@/app/_components/button-nav-prev';
import { BlueButton } from "@/components/blue-button";
import { convertRemToPx } from "@/lib/utils";
import { TourImage, TourTaxonomy } from '@/types/tours.interface';
import Link from "next/link";
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface IndataTripsForYour {
    title: string
    slug: string
    thumbnail: TourImage
    duration_term: TourTaxonomy[]
    location_term: TourTaxonomy[]
    price: string
}

export default function TripsForYour({dataTripsForYour}: {dataTripsForYour: IndataTripsForYour[]}) {
    return (
        <section className="xsm:hidden pt-[5rem] pb-[13.79rem]">
            <div className="flex justify-between items-center px-[6.25rem] mb-[3rem]">
                <div className="text-[#3B3943] font-dvn-luckiest-guy text-[3rem] leading-[1.3]">TRIPS FOR YOU</div>
                <BlueButton
                    href={'/'}
                    textColor='#3b3943'
                    borderColor='rgba(0,0,0, 0.12)'
                    arrowColor='#3b3943'
                    className='p-[1.25rem_2.5rem]'
                >
                    Learn more
                </BlueButton>
            </div>
            <div className='flex items-center px-[1.81rem] space-x-[1.44rem]'>
                <ButtonNavPrev className='best-choose-btn-prev relation size-[3rem] shrink-0 [&_svg]:size-[1.5rem] border-none bg-[#F3F9F9]' />
                <Swiper
                    modules={[ Navigation]}
                    slidesPerView={4}
                    spaceBetween={convertRemToPx(1.25)}
                    navigation={{
                        prevEl: '.best-choose-btn-prev',
                        nextEl: '.best-choose-btn-next',
                    }}
                    className='best-choose-swiper !mr-[1.44rem]'
                >
                {Array.isArray(dataTripsForYour) && dataTripsForYour?.length > 0 && dataTripsForYour?.map((tour, index) => {
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
                <ButtonNavNext className='best-choose-btn-next relation size-[3rem] shrink-0 [&_svg]:size-[1.5rem] border-none bg-[#F3F9F9]' />
            </div>
        </section>
    )
}
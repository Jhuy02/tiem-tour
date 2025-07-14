import ImageAnimation from '@/app/(main)/about-us/_components/our-team/ImageAnimation'
import ICArrowLeft from '@/components/icon/ICArrowLeft'
import {MeetOurTeam} from '@/types/about-us.interface'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface OurTeamProps {
  data: MeetOurTeam
}

export default function OurTeam({data}: OurTeamProps) {
  return (
    <section className='xsm:pt-[4.03rem] relative z-5 bg-[#F9F4EB] bg-[url("/common/common-background-pc.webp")] bg-cover bg-center bg-no-repeat'>
      <div className='xsm:mb-[2rem] mx-auto mb-[0.875rem] flex max-w-[87.5125rem] items-center justify-between'>
        <div className='flex w-[35.95688rem] flex-col space-y-[0.4365rem]'>
          <div className='xsm:flex-col xsm:items-start xsm:space-y-[1rem] xsm:space-x-0 xsm:px-[0.75rem] inline-flex items-center space-x-[0.84rem]'>
            <Image
              alt=''
              width={64}
              height={64}
              src={'/text-decor/tiemtour-hagiang-black-circle-inner.svg'}
              className='xsm:w-[2.5rem] h-auto w-[4rem] shrink-0'
            />
            <h2 className='text-decor-red xsm:hidden xsm:invisible text-[2.25rem] text-[#f76942] text-shadow-[0px_0px_6.4px_#FE1F1F]'>
              {data?.title_pc}
            </h2>
            <h2 className='font-dvn-luckiest-guy text-[1.5625rem] leading-[130%] text-[#3B3943] sm:invisible sm:hidden'>
              {data?.title_mobile}
            </h2>
          </div>
          <h3 className='font-dvn-luckiest-guy xsm:hidden text-[3rem] leading-[130%] text-[#3B3943]'>
            {data?.subtitle}
          </h3>
        </div>
        <Link
          href={data?.booking_link?.url ?? '#'}
          target={data?.booking_link?.target ?? '_self'}
          className='xsm:hidden inline-flex h-[4rem] items-center space-x-[0.625rem] rounded-[3.125rem] bg-[#C83E21] px-[2.5rem] transition-colors duration-300 ease-out lg:hover:bg-[#EA6A44]'
        >
          <span className='font-dvn-luckiest-guy inline-block h-[0.8125rem] text-[1.125rem] leading-[120%] text-white'>
            {data?.booking_link?.title ?? 'Booking now'}
          </span>
          <ICArrowLeft className='h-[1.5rem] w-[1.575rem] shrink-0' />
        </Link>
      </div>
      <div className='xsm:flex xsm:items-start xsm:overflow-x-auto hidden_scroll gap-y-[0.71rem]h xsm:mb-[0.74rem] mx-auto mb-[7.44rem] grid max-w-[87.5rem] grid-cols-5 gap-x-[1.49rem]'>
        {Array.isArray(data?.team) &&
          data?.team?.map((member, index) => (
            <div
              className='xsm:flex-shrink-0 xsm:w-[16.34394rem] xsm:px-[1.1rem] xsm:pb-[0.89rem] col-span-1'
              key={index}
            >
              <Image
                alt={member?.image?.alt ?? ''}
                width={260.8937}
                height={368.0973}
                src={member?.image?.url}
                className='h-auto w-full'
              />
              <div className='font-trip-sans flex flex-col items-center'>
                <h4 className='text-center text-[1.03044rem] leading-[150%] text-[#3B3943]'>
                  {member?.name}
                </h4>
                <p className='text-[0.96556rem] leading-[150%] text-[rgba(48,48,48,0.40)]'>
                  {member?.position}
                </p>
              </div>
            </div>
          ))}
      </div>
      <div className='xsm:block mb-[0.63rem] hidden w-full px-[1rem]'>
        <Link
          href={data?.booking_link?.url ?? '#'}
          target={data?.booking_link?.target ?? '_self'}
          className='inline-flex h-[3.375rem] w-full items-center justify-center space-x-[0.625rem] rounded-[3.125rem] bg-[#C83E21] px-[2.5rem]'
        >
          <span className='font-dvn-luckiest-guy inline-block h-[0.6875rem] text-[1rem] leading-[120%] text-white'>
            {data?.booking_link?.title ?? 'Booking now'}
          </span>
          <ICArrowLeft className='h-[1.125rem] w-[1.125rem] shrink-0' />
        </Link>
      </div>
      <ImageAnimation image={data?.image} />
    </section>
  )
}

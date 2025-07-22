'use client'
import {v4 as uuidv4} from 'uuid'
import {PageContext} from '@/app/(main)/tours/[slug]/context/PageProvider'
import {TourDetailApiResType} from '@/types/tours.interface'
import Link from 'next/link'
import React, {useContext} from 'react'
import useIsMobile from '@/hooks/useIsMobile'
import Image from 'next/image'

interface PickupAndDropOffPrivateServiceProps {
  onCloseMb?: () => void
}

export default function PickupAndDropOffPrivateService({
  onCloseMb,
}: PickupAndDropOffPrivateServiceProps) {
  const pageContext = useContext(PageContext)
  if (!pageContext) throw new Error('Page context is missing')
  const {data: apiData}: {data: TourDetailApiResType} = pageContext
  const isMobile = useIsMobile()
  const schedulePrivate = apiData.package_tour?.schedule_private_hanoi_hagiang
  const handleClickCloseMb = () => {
    if (onCloseMb) {
      onCloseMb()
    }
  }
  return (
    <div className='font-trip-sans xsm:gap-0 xsm:justify-start xsm:px-[1rem] xsm:pb-[1rem] xsm:pt-0 xsm:rounded-b-none flex w-fit max-w-full flex-col gap-[1.5rem] rounded-[1.5rem] bg-white p-[3.75rem] sm:w-[78.25rem]'>
      <div className='xsm:justify-between xsm:sticky xsm:top-0 xsm:py-[1rem] z-10 flex items-center justify-center bg-white'>
        <p className='font-dvn-luckiest-guy xsm:text-[1rem] xsm:font-trip-sans xsm:font-medium xsm:text-left xsm:normal-case text-center text-[1.625rem] leading-[150%] tracking-[0.01563rem] text-[#303030] uppercase'>
          {isMobile
            ? 'Private transport service'
            : 'Pick up and drop off Private transport service'}
        </p>
        <button
          type='button'
          onClick={handleClickCloseMb}
          className='sm:hidden'
        >
          <Image
            alt=''
            width={20}
            height={20}
            src={'/icons/x-close.svg'}
            className='h-auto w-[1.25rem]'
          />
        </button>
      </div>

      <div className='hidden_scroll xsm:mb-[1rem] relative self-stretch overflow-x-auto'>
        <table className='xsm:table-fixed xsm:w-full border border-solid border-[#EDEDED]'>
          <thead className='border border-solid border-[#EDEDED] text-[0.875rem] leading-[120%] font-bold tracking-[0.00219rem] text-[#303030]'>
            <tr>
              <th
                rowSpan={2}
                className='h-[5.0625rem] w-[9.75rem] border border-solid border-[#EDEDED] pl-[0.75rem]'
              >
                Route
              </th>
              <th
                rowSpan={2}
                className='w-[13.5625rem] border border-solid border-[#EDEDED] text-center'
              >
                Vehicle type
              </th>
              <th
                rowSpan={2}
                className='w-[7.25rem] border border-solid border-[#EDEDED] pl-[0.375rem]'
              >
                Departure time
              </th>
              <th
                rowSpan={2}
                className='w-[7.25rem] border border-solid border-[#EDEDED] pl-[0.375rem]'
              >
                Arrival time
              </th>
              <th
                colSpan={2}
                className='w-[32.9375rem] border border-b border-solid border-[#EDEDED]'
              >
                Pickup / drop-off point
              </th>
            </tr>
            <tr>
              <th className='w-[16.46875rem] border border-solid border-[#EDEDED]'>
                Noi Bai airport
              </th>
              <th className='w-[16.46875rem]'>Hanoi</th>
            </tr>
          </thead>
          <tbody className='border border-solid border-[#EDEDED]'>
            {Array.isArray(schedulePrivate?.items) &&
              schedulePrivate?.items?.map((item, index) => {
                return (
                  <tr
                    key={uuidv4()}
                    className='border border-solid border-[#EDEDED]'
                  >
                    {index === 0 && (
                      <td
                        rowSpan={schedulePrivate?.items?.length}
                        className='border border-solid border-[#EDEDED] p-[0.75rem] text-[0.875rem] leading-[120%] font-medium tracking-[0.00219rem] text-[#006CE4]'
                      >
                        {schedulePrivate?.route_name}
                      </td>
                    )}
                    <td
                      className='border border-solid border-[#EDEDED] p-[0.75rem] text-[0.875rem] leading-[150%] tracking-[0.00219rem] text-[#303030]'
                      align='center'
                    >
                      <div className='inline-flex min-h-[6.75rem] w-[9rem] items-center justify-center text-center'>
                        {item?.vehicle_type}
                      </div>
                    </td>
                    <td className='border border-solid border-[#EDEDED] p-[0.75rem] text-[0.875rem] leading-[150%] tracking-[0.00219rem] text-[#303030]'>
                      {item?.depart_time}
                    </td>
                    <td className='border border-solid border-[#EDEDED] p-[0.75rem] text-[0.875rem] leading-[150%] tracking-[0.00219rem] text-[#303030]'>
                      {item?.arrival_time}
                    </td>
                    <td
                      align='center'
                      className='border border-solid border-[#EDEDED] p-[0.75rem] text-[0.875rem] leading-[120%] font-bold tracking-[0.00219rem] text-[#C83E21]'
                    >
                      <span>
                        {Number(item.price_noi_bai_airport_).toLocaleString(
                          'en-US',
                        )}{' '}
                        USD
                      </span>
                    </td>
                    <td
                      align='center'
                      className='border border-solid border-[#EDEDED] p-[0.75rem] text-[0.875rem] leading-[120%] font-bold tracking-[0.00219rem] text-[#C83E21]'
                    >
                      <span>
                        {Number(item.hanoi_price).toLocaleString('en-US')} USD
                      </span>
                    </td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
      <div className='relative'>
        <div className='xsm:flex-col xsm:items-end relative flex items-center justify-between gap-[0.375rem] rounded-[0.75rem] bg-[#F5F5F5] p-[0.75rem]'>
          <div className='flex items-center gap-[0.375rem]'>
            <Image
              alt=''
              width={24}
              height={24}
              src={'/icons/caution.svg'}
              className='h-auto w-[1.5rem] shrink-0'
            />
            <p
              dangerouslySetInnerHTML={{__html: schedulePrivate.note ?? ''}}
              className='xsm:w-auto w-[25rem] flex-1 text-[0.75rem] leading-[130%] tracking-[0.00188rem] text-[rgba(48,48,48,0.80)]'
            ></p>
          </div>
          <Link
            href={schedulePrivate?.contact?.url ?? '#'}
            className='text-[0.875rem] leading-[120%] font-medium tracking-[0.00219rem] text-[#006CE4] underline'
          >
            {schedulePrivate?.contact?.title}
          </Link>
        </div>
      </div>
    </div>
  )
}

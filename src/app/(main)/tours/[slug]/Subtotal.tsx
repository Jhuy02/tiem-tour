'use client'
import {BookingFormValues} from '@/schemas/booking.schema'
import {differenceInCalendarDays, format, isValid} from 'date-fns'
import Image from 'next/image'
import React from 'react'
import {useFormContext} from 'react-hook-form'

export default function Subtotal() {
  const {watch} = useFormContext<BookingFormValues>()

  // Lấy dữ liệu từ form
  const startDay: Date | null = watch('startDay')
  const endDay: Date | null = watch('endDay')
  const adultQuantity = watch('adultQuantity')
  const childQuantity = watch('childQuantity')
  const infantQuantity = watch('infantQuantity')

  // Tính duration
  const duration =
    startDay && endDay && isValid(startDay) && isValid(endDay)
      ? differenceInCalendarDays(endDay, startDay) + 1
      : null

  return (
    <div className='font-trip-sans sticky top-[2rem] h-fit rounded-[1.5rem] border border-solid border-[#EDEDED] bg-white p-[1.25rem]'>
      <h3 className='mb-[1.25rem] border-b border-solid border-[#EDEDED] pb-[0.75rem] text-[1.125rem] leading-[130%] font-black tracking-[0.0025rem] text-[#303030]'>
        Subtotal
      </h3>
      <p className='mb-[0.5rem] text-[1rem] leading-[130%] font-extrabold tracking-[0.0025rem] text-[#3B3943]'>
        HaGiang tour Culture 3 days 2 nights by Motobike Experience
      </p>
      <div className='flex flex-col space-y-[0.5rem]'>
        <div className='flex items-center space-x-[0.375rem] rounded-[1rem] bg-[#F5F5F5] p-[0.75rem]'>
          <div className='flex w-[8.0625rem] shrink-0 flex-col space-y-[0.375rem] leading-[120%] font-medium'>
            <p className='text-[1rem] tracking-[0.0025rem] text-[#3B3943]'>
              Duration
            </p>
            <span className='text-[0.875rem] font-medium text-[#006CE4]'>
              {duration ? `${duration} Days ${duration - 1} Nights` : '---'}
            </span>
          </div>
          <div className='flex flex-1 flex-col space-y-[0.375rem] pl-[1.25rem] leading-[120%] font-medium'>
            <p className='text-[1rem] tracking-[0.0025rem] text-[#3B3943]'>
              Schedule
            </p>
            <span className='inline-flex w-full items-center space-x-[0.25rem] text-[0.875rem] text-[#006CE4]'>
              <span>{startDay ? format(startDay, 'MMM d, yyyy') : '---'}</span>
              <Image
                alt=''
                width={16}
                height={16}
                src={'/icons/arrow-right.svg'}
                className='h-auto w-[1rem] shrink-0'
              />
              <span>{endDay ? format(endDay, 'MMM d, yyyy') : '---'}</span>
            </span>
          </div>
        </div>
        <div className='flex flex-col space-y-[0.375rem] rounded-[1rem] bg-[#F5F5F5] p-[0.75rem]'>
          <div className=''>
            {/* Adult Quantity */}
            <div className='flex items-center space-x-[0.375rem]'>
              <div className='flex-1'>
                <p className='text-left text-[0.875rem] leading-[150%] tracking-[0.00219rem] text-[rgba(48,48,48,0.80)]'>
                  <span className='font-extrabold tracking-[0.01563rem]'>
                    {adultQuantity?.toString()?.padStart(2, '0')}
                  </span>{' '}
                  Adults
                </p>
              </div>
              <div className='flex-1'>
                <p className='text-right text-[0.875rem] leading-[150%] font-medium tracking-[0.00219rem] text-[#303030]'>
                  <span className=''>0</span> đ
                </p>
              </div>
            </div>
            {/* Child Quantity */}
            <div className='flex items-center space-x-[0.375rem]'>
              <div className='flex-1'>
                <p className='text-left text-[0.875rem] leading-[150%] tracking-[0.00219rem] text-[rgba(48,48,48,0.80)]'>
                  <span className='font-extrabold tracking-[0.01563rem]'>
                    {childQuantity?.toString()?.padStart(2, '0')}
                  </span>{' '}
                  Child
                </p>
              </div>
              <div className='flex-1'>
                <p className='text-right text-[0.875rem] leading-[150%] font-medium tracking-[0.00219rem] text-[#303030]'>
                  <span className=''>0</span> đ
                </p>
              </div>
            </div>
            {/* Infant Quantity */}
            <div className='flex items-center space-x-[0.375rem]'>
              <div className='flex-1'>
                <p className='text-left text-[0.875rem] leading-[150%] tracking-[0.00219rem] text-[rgba(48,48,48,0.80)]'>
                  <span className='font-extrabold tracking-[0.01563rem]'>
                    {infantQuantity?.toString()?.padStart(2, '0')}
                  </span>{' '}
                  Infant
                </p>
              </div>
              <div className='flex-1'>
                <p className='text-right text-[0.875rem] leading-[150%] font-medium tracking-[0.00219rem] text-[#303030]'>
                  <span className=''>0</span> đ
                </p>
              </div>
            </div>
          </div>
          <div className='h-[1px] w-full bg-[#EDEDED]'></div>
        </div>
      </div>
      <button type='submit'>Submit button</button>
    </div>
  )
}

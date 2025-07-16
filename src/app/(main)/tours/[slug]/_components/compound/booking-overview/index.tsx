'use client'

import Caution from '@/app/(main)/tours/[slug]/_components/common/Caution'
import DatePickerField from '@/app/(main)/tours/[slug]/_components/form-controls/DatePickerField'
import SelectRiderField from '@/app/(main)/tours/[slug]/_components/form-controls/SelectRiderField'
import SelectTravelerField from '@/app/(main)/tours/[slug]/_components/form-controls/SelectTravelerField'
import {FormField, FormItem, FormMessage} from '@/components/ui/form'
import {Label} from '@/components/ui/label'
import {RadioGroup, RadioGroupItem} from '@/components/ui/radio-group'
import {TourPackageList, TourTypeList} from '@/constants/mockApi'
import {BookingFormValues} from '@/schemas/booking.schema'
import clsx from 'clsx'
import Image from 'next/image'
import {useFormContext, useWatch} from 'react-hook-form'
import styles from './styles.module.css'
import PolicyTourDialog from '@/app/(main)/tours/[slug]/_components/compound/booking-overview/PolicyTourDialog'
import {useEffect} from 'react'
import {addDays} from 'date-fns'

export default function BookingOverview() {
  const {control, setValue} = useFormContext<BookingFormValues>()
  const duration = 3
  const startDay = useWatch({
    control,
    name: 'startDay',
  })
  const tourType = useWatch({
    control,
    name: 'tourType',
  })

  useEffect(() => {
    if (startDay) {
      const newEndDay = addDays(new Date(startDay), duration)
      setValue('endDay', newEndDay)
    }
  }, [startDay, duration, setValue])

  return (
    <div className='rounded-[1.5rem] border border-solid border-[#ededed] bg-white p-[1.5rem]'>
      <div className='mb-[1rem] flex items-center justify-between border-b border-solid border-[#EDEDED] pb-[0.625rem]'>
        <h3 className='font-dvn-luckiest-guy mr-[1rem] text-[1.125rem] leading-[120%] tracking-[0.0125rem] uppercase'>
          HaGiang tour Culture 3 days 2 night by Motobike Experience
        </h3>
        <PolicyTourDialog />
      </div>
      <div className='font-trip-sans flex flex-col space-y-[1rem]'>
        {/* Date Picker */}
        <div className='flex items-start space-x-[1rem]'>
          <div className='flex-1'>
            <FormField
              control={control}
              name='startDay'
              render={({field}) => (
                <FormItem>
                  <DatePickerField
                    label='Start day'
                    required
                    {...field}
                  />
                  <FormMessage className='font-trip-sans pl-[0.125rem] text-[0.75rem] leading-[120%] font-bold tracking-[0.00188rem] text-[#EA3434]' />
                </FormItem>
              )}
            />
          </div>
          <div className='flex-1'>
            <FormField
              control={control}
              name='endDay'
              render={({field}) => (
                <FormItem>
                  <DatePickerField
                    label='End day'
                    required
                    disabled
                    {...field}
                  />
                  <FormMessage className='font-trip-sans pl-[0.125rem] text-[0.75rem] leading-[120%] font-bold tracking-[0.00188rem] text-[#EA3434]' />
                </FormItem>
              )}
            />
          </div>
        </div>
        {/* Select Travelers */}
        <div className=''>
          <p className='mb-[0.75rem] text-[0.875rem] leading-[120%] font-medium tracking-[0.00219rem] text-[#2E2E2E]'>
            Select Travelers
          </p>
          <div className='grid grid-cols-2 gap-[0.75rem]'>
            <div className='col-span-1'>
              <FormField
                control={control}
                name='adultQuantity'
                render={({field}) => (
                  <FormItem>
                    <SelectTravelerField
                      label='Adults +12 ages (100% price)'
                      {...field}
                    />
                    <FormMessage className='font-trip-sans pl-[0.125rem] text-[0.75rem] leading-[120%] font-bold tracking-[0.00188rem] text-[#EA3434]' />
                  </FormItem>
                )}
              />
            </div>
            <div className='col-span-1'>
              <FormField
                control={control}
                name='childQuantity'
                render={({field}) => (
                  <FormItem>
                    <SelectTravelerField
                      label='Children 5-8 ages (75% Price)'
                      {...field}
                    />
                    <FormMessage className='font-trip-sans pl-[0.125rem] text-[0.75rem] leading-[120%] font-bold tracking-[0.00188rem] text-[#EA3434]' />
                  </FormItem>
                )}
              />
            </div>
            <div className='col-span-full'>
              <FormField
                control={control}
                name='infantQuantity'
                render={({field}) => (
                  <FormItem>
                    <SelectTravelerField
                      label='Children under 4 ages (Free)'
                      {...field}
                    />
                    <FormMessage className='font-trip-sans pl-[0.125rem] text-[0.75rem] leading-[120%] font-bold tracking-[0.00188rem] text-[#EA3434]' />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>
        {/* Select Tour Type */}
        <div className='rounded-[1.5rem] border border-solid border-[#EDEDED] bg-white p-[1.5rem]'>
          <p className='mb-[1rem] border-b border-solid border-[#EDEDED] pb-[1rem] text-[1rem] leading-[130%] font-extrabold tracking-[0.0025rem] text-[#2E2E2E]'>
            Select tour type
          </p>
          {/* Tour Type */}
          <div className='mb-[1rem]'>
            <FormField
              control={control}
              name='tourType'
              render={({field}) => (
                <FormItem>
                  <RadioGroup
                    className='flex items-center gap-0 space-x-[0.75rem]'
                    value={field.value}
                    onValueChange={field.onChange}
                    name={field.name}
                  >
                    {Array.isArray(TourTypeList) &&
                      TourTypeList?.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className='flex h-[3.375rem] flex-1 items-center justify-between rounded-[0.75rem] bg-[#F6F6F6] px-[0.75rem] py-[1rem]'
                          >
                            <Label className='inline-flex h-[3.375rem] w-full cursor-pointer items-center justify-between px-[0.75rem] py-[1rem]'>
                              <p className='inline-flex items-center text-[0.875rem] leading-[120%] font-medium tracking-[0.00219rem] text-[#3B3943]'>
                                {item?.name}
                                {item?.popular && (
                                  <span className='ml-[0.5rem] inline-block rounded-full border-[0.8px] border-solid border-[#25ACAB] bg-[#F3F9F9] px-[0.5rem] py-[0.25rem] text-[0.75rem] tracking-[0.00188rem] text-[#19C2C2]'>
                                    Popular
                                  </span>
                                )}
                              </p>
                              <RadioGroupItem
                                value={item?.slug}
                                className='peer sr-only'
                              />
                              <Image
                                alt=''
                                width={22}
                                height={22}
                                src={'/icons/check_default.svg'}
                                className='hidden! h-auto w-[1.375rem] peer-data-[state="unchecked"]:block!'
                              />
                              <Image
                                alt=''
                                width={22}
                                height={22}
                                src={'/icons/check_active-v1.svg'}
                                className='hidden! h-auto w-[1.375rem] peer-data-[state="checked"]:block!'
                              />
                            </Label>
                          </div>
                        )
                      })}
                  </RadioGroup>
                  <FormMessage className='font-trip-sans pl-[0.125rem] text-[0.75rem] leading-[120%] font-bold tracking-[0.00188rem] text-[#EA3434]' />
                </FormItem>
              )}
            />
          </div>
          {/* Tour Package */}
          <div
            className={clsx('rounded-[0.75rem] bg-[#F3F9F9] p-[1rem]', {
              'pointer-events-none opacity-40': !tourType,
              'pointer-events-auto opacity-100': tourType,
            })}
          >
            <FormField
              control={control}
              name='tourPackage'
              render={({field}) => (
                <FormItem>
                  <RadioGroup
                    className='flex items-center gap-0 space-x-[0.75rem]'
                    value={field.value}
                    onValueChange={field.onChange}
                    name={field.name}
                  >
                    {Array.isArray(TourPackageList) &&
                      TourPackageList?.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className='flex h-[3.375rem] flex-1 items-center justify-between rounded-[0.75rem] bg-[#F6F6F6] px-[0.75rem] py-[1rem]'
                          >
                            <Label className='inline-flex h-[2.875rem] w-full cursor-pointer items-center space-x-[0.5rem] p-[0.75rem]'>
                              <RadioGroupItem
                                value={item?.slug}
                                className='peer sr-only'
                              />
                              <Image
                                alt=''
                                width={22}
                                height={22}
                                src={'/icons/check_default.svg'}
                                className='hidden! h-auto w-[1.375rem] peer-data-[state="unchecked"]:block!'
                              />
                              <Image
                                alt=''
                                width={22}
                                height={22}
                                src={'/icons/check_active-v1.svg'}
                                className='hidden! h-auto w-[1.375rem] peer-data-[state="checked"]:block!'
                              />
                              <p className='inline-flex items-center text-[0.875rem] leading-[120%] font-medium tracking-[0.00219rem] text-[#3B3943]'>
                                {item?.name}
                              </p>
                            </Label>
                          </div>
                        )
                      })}
                  </RadioGroup>
                  <FormMessage className='font-trip-sans pl-[0.125rem] text-[0.75rem] leading-[120%] font-bold tracking-[0.00188rem] text-[#EA3434]' />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className='flex flex-col space-y-[0.75rem]'>
          {/* Info Rider */}
          <div className='grid grid-cols-3 items-center gap-[2rem] rounded-[0.5rem] bg-[rgba(235,229,226,0.32)] p-[1.25rem]'>
            {[...Array(3)].map((_, index) => {
              return (
                <div
                  key={index}
                  className='col-span-1 flex flex-col space-y-[1.25rem]'
                >
                  <div className='flex flex-col space-y-[0.25rem]'>
                    <p className='text-[0.875rem] leading-[120%] font-extrabold tracking-[0.01563rem] text-[#303030] uppercase'>
                      Easyrider
                    </p>
                    <span className='text-[1.25rem] leading-[120%] font-extrabold tracking-[-0.025rem] text-[#C83E21] uppercase'>
                      <span>5.350.000</span>Đ
                    </span>
                    <div className='flex items-center space-x-[0.25rem]'>
                      <span className='text-[0.875rem] leading-[150%] tracking-[0.00219rem] text-[#303030]/80 line-through'>
                        5.050.000
                      </span>
                      <span className='inline-block h-[1.25rem] rounded-[1rem] bg-[#115A46]/60 px-[0.375rem] py-[0.1875rem] text-[0.75rem] leading-[120%] font-bold text-white'>
                        -27%
                      </span>
                    </div>
                  </div>
                  <p className='text-[0.875rem] leading-[150%] tracking-[0.00219rem] text-[#303030]/80'>
                    Note: Highly Recommended
                  </p>
                </div>
              )
            })}
          </div>
          {/* Tour Includes and Tour Excludes */}
          <div className='flex items-start space-x-[1rem]'>
            {/* Tour Includes */}
            <div className='flex-1 self-stretch rounded-[0.75rem] bg-[#F1F8F8] p-[1rem]'>
              <p className='mb-[0.75rem] border-b border-solid border-[#EDEDED] pb-[0.75rem] text-[0.875rem] leading-[120%] font-extrabold tracking-[0.01563rem] text-[#303030] uppercase'>
                Tour included:
              </p>
              <div
                className={clsx(
                  'text-[0.875rem] leading-[150%] tracking-[0.00219rem] text-[#303030]',
                  styles.tourIncludedContent,
                )}
              >
                <ul>
                  <li>
                    Accommodations :{' '}
                    <strong>luxurious private homestay rooms</strong>, included
                    one dormitory on arrival night (can be upraded with small
                    fee)
                  </li>
                  <li>
                    Accommodations :{' '}
                    <strong>luxurious private homestay rooms</strong>, included
                    one dormitory on arrival night (can be upraded with small
                    fee)
                  </li>
                  <li>
                    Accommodations :{' '}
                    <strong>luxurious private homestay rooms</strong>, included
                    one dormitory on arrival night (can be upraded with small
                    fee)
                  </li>
                  <li>
                    Accommodations :{' '}
                    <strong>luxurious private homestay rooms</strong>, included
                    one dormitory on arrival night (can be upraded with small
                    fee)
                  </li>
                  <li>
                    Accommodations :{' '}
                    <strong>luxurious private homestay rooms</strong>, included
                    one dormitory on arrival night (can be upraded with small
                    fee)
                  </li>
                </ul>
              </div>
            </div>

            {/* Tour Exclude */}
            <div className='flex-1 self-stretch rounded-[0.75rem] bg-[rgba(235,229,226,0.32)] p-[1rem]'>
              <p className='mb-[0.75rem] border-b border-solid border-[#EDEDED] pb-[0.75rem] text-[0.875rem] leading-[120%] font-extrabold tracking-[0.01563rem] text-[#303030] uppercase'>
                Tour excludes:
              </p>
              <div
                className={clsx(
                  'text-[0.875rem] leading-[150%] tracking-[0.00219rem] text-[#303030]',
                  styles.tourExcludesContent,
                )}
              >
                <ul>
                  <li>
                    Accommodations :{' '}
                    <strong>luxurious private homestay rooms</strong>, included
                    one dormitory on arrival night (can be upraded with small
                    fee)
                  </li>
                  <li>
                    Accommodations :{' '}
                    <strong>luxurious private homestay rooms</strong>, included
                    one dormitory on arrival night (can be upraded with small
                    fee)
                  </li>
                  <li>
                    Accommodations :{' '}
                    <strong>luxurious private homestay rooms</strong>, included
                    one dormitory on arrival night (can be upraded with small
                    fee)
                  </li>
                  <li>
                    Accommodations :{' '}
                    <strong>luxurious private homestay rooms</strong>, included
                    one dormitory on arrival night (can be upraded with small
                    fee)
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Select Rider */}
          <div className='flex flex-col space-y-[1rem]'>
            <div className='not-last:border-b not-last:border-solid not-last:border-[#EDEDED] not-last:pb-[1rem]'>
              <FormField
                control={control}
                name='easyRiderQuantity'
                render={({field}) => (
                  <FormItem>
                    <SelectRiderField
                      label='Easyrider'
                      unitPrice={5350000}
                      {...field}
                    />
                    <FormMessage className='font-trip-sans pl-[0.125rem] text-[0.75rem] leading-[120%] font-bold tracking-[0.00188rem] text-[#EA3434]' />
                  </FormItem>
                )}
              />
            </div>
            <div className='not-last:border-b not-last:border-solid not-last:border-[#EDEDED] not-last:pb-[1rem]'>
              <FormField
                control={control}
                name='rideByYourselfQuantity'
                render={({field}) => (
                  <FormItem>
                    <SelectRiderField
                      label='Ride by yourself'
                      unitPrice={5350000}
                      {...field}
                    />
                    <FormMessage className='font-trip-sans pl-[0.125rem] text-[0.75rem] leading-[120%] font-bold tracking-[0.00188rem] text-[#EA3434]' />
                  </FormItem>
                )}
              />
            </div>
            <div className='not-last:border-b not-last:border-solid not-last:border-[#EDEDED] not-last:pb-[1rem]'>
              <FormField
                control={control}
                name='seatBehindYourFriendQuantity'
                render={({field}) => (
                  <FormItem>
                    <SelectRiderField
                      label='Seat behind your friend'
                      unitPrice={5350000}
                      {...field}
                    />
                    <FormMessage className='font-trip-sans pl-[0.125rem] text-[0.75rem] leading-[120%] font-bold tracking-[0.00188rem] text-[#EA3434]' />
                  </FormItem>
                )}
              />
            </div>
          </div>
          {/* Caution */}
          <Caution content='NOTE: if you’re traveling alone, you have to pay 200K extra to get your own room' />
        </div>
      </div>
    </div>
  )
}

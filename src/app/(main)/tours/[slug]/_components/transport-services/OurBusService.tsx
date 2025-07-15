'use client'
import Caution from '@/app/(main)/tours/[slug]/_components/common/Caution'
import DatePickerField from '@/app/(main)/tours/[slug]/_components/form-controls/DatePickerField'
import SelectOptionField from '@/app/(main)/tours/[slug]/_components/form-controls/SelectOptionField'
import {FormField, FormItem, FormMessage} from '@/components/ui/form'
import {Label} from '@/components/ui/label'
import {RadioGroup, RadioGroupItem} from '@/components/ui/radio-group'
import {TransportVehicleList} from '@/constants/mockApi'
import {BookingFormValues} from '@/schemas/booking.schema'
import clsx from 'clsx'
import Image from 'next/image'
import React, {useState} from 'react'
import {useFormContext} from 'react-hook-form'

const CITY_LIST = [
  {id: 1, name: 'Hanoi', slug: 'hanoi'},
  {id: 2, name: 'Danang', slug: 'danang'},
  {id: 3, name: 'Haiphong', slug: 'haiphong'},
]

export default function OurBusService() {
  const [showPickupVehiclePopup, setShowPickupVehiclePopup] =
    useState<boolean>(false)
  const {control} = useFormContext<BookingFormValues>()
  return (
    <>
      <div className='font-trip-sans flex flex-col space-y-[1rem]'>
        <Caution content='NOTE: <strong>Bus service</strong> and <strong>Private transport</strong> are our services of picking up and dropping off passengers. In addition, customers can also use personal vehicles to travel.' />
        <div className='flex flex-col space-y-[0.75rem]'>
          <p className='text-[0.875rem] leading-[120%] font-medium tracking-[0.00219rem] text-[#2E2E2E]'>
            Pick up at
          </p>
          <div className='flex items-start space-x-[0.75rem]'>
            <FormField
              control={control}
              name='pickUpLocation'
              render={({field}) => (
                <FormItem className='flex-1'>
                  <SelectOptionField
                    placeholder='Select pickup location'
                    options={CITY_LIST}
                    {...field}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name='startDay'
              render={({field}) => (
                <FormItem className='flex-1'>
                  <DatePickerField
                    disabled
                    {...field}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className='flex flex-col items-end space-y-[0.75rem]'>
            <FormField
              control={control}
              name='pickUpVehicle'
              render={({field}) => (
                <FormItem className='self-stretch'>
                  <RadioGroup
                    className='grid grid-cols-2 gap-[0.75rem]'
                    value={field.value}
                    onValueChange={field.onChange}
                    name={field.name}
                  >
                    {Array.isArray(TransportVehicleList) &&
                      TransportVehicleList?.slice(0, 2)?.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className='col-span-1 flex items-center justify-between rounded-[0.75rem] bg-[#F6F6F6] p-[0.75rem]'
                          >
                            <Label className='inline-flex w-full cursor-pointer items-center gap-0'>
                              <RadioGroupItem
                                value={item?.slug}
                                className='peer sr-only'
                              />
                              <Image
                                alt=''
                                width={22}
                                height={22}
                                src={'/icons/check_default.svg'}
                                className='hidden! h-auto w-[1.25rem] peer-data-[state="unchecked"]:block!'
                              />
                              <Image
                                alt=''
                                width={22}
                                height={22}
                                src={'/icons/check_active-v1.svg'}
                                className='hidden! h-auto w-[1.25rem] peer-data-[state="checked"]:block!'
                              />
                              <div className='flex flex-1 flex-col space-y-[0.5rem] pl-[0.5rem]'>
                                <p className='inline-flex items-center text-[0.875rem] leading-[120%] font-medium tracking-[0.00219rem] text-[#3B3943]'>
                                  {item?.name}
                                </p>
                                <span className='text-[0.875rem] leading-[120%] font-medium tracking-[0.00219rem] text-[rgba(48,48,48,0.40)]'>
                                  Start:{' '}
                                  <span className='text-[#3B3943]'>
                                    {item?.startTime}
                                  </span>
                                </span>
                              </div>
                              <p className='text-[0.875rem] leading-[120%] font-extrabold tracking-[0.01563rem] text-[#C83E21] uppercase'>
                                <span>
                                  {item?.price?.toLocaleString('vi-VN')}
                                </span>
                                /PAX
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
            <button
              type='button'
              onClick={() => setShowPickupVehiclePopup(true)}
              className='flex cursor-pointer items-center space-x-[0.25rem]'
            >
              <Image
                alt=''
                style={{
                  filter:
                    'brightness(0) saturate(100%) invert(51%) sepia(19%) saturate(1542%) hue-rotate(131deg) brightness(108%) contrast(89%)',
                }}
                width={18}
                height={18}
                src={'/icons/add_plus.svg'}
                className='h-auto w-[1.125rem] shrink-0'
              />
              <p className='text-[1rem] leading-[120%] font-medium tracking-[0.0025rem] text-[#25ACAB]'>
                Other option
              </p>
            </button>
          </div>
        </div>
      </div>
      <div
        className={clsx(
          'fixed inset-0 z-100 flex items-center justify-center transition-all duration-800 ease-out',
          {
            'invisible opacity-0': !showPickupVehiclePopup,
            'visible opacity-100': showPickupVehiclePopup,
          },
        )}
      >
        <div
          className='absolute top-0 left-0 z-1 h-full w-full bg-black/25'
          onClick={() => setShowPickupVehiclePopup(false)}
        ></div>
        <div className='relative z-2 h-[42.75rem] max-h-[80vh] w-[56.0625rem] max-w-[80vw] overflow-hidden rounded-[1.5rem] bg-[#FAFAFA]'>
          <div className='absolute bottom-0 left-0 z-2 h-[4.125rem] w-full bg-[linear-gradient(180deg,rgba(255,255,255,0.00)_0%,_#FFF_100%)]'></div>
          <div className='relative z-1 max-h-full overflow-y-auto px-[1.5rem]'>
            <button
              type='button'
              onClick={() => setShowPickupVehiclePopup(false)}
              className='absolute top-[1.5rem] right-[1.5rem] cursor-pointer'
            >
              <Image
                alt=''
                width={20}
                height={20}
                src={'/icons/x-close.svg'}
                className='h-auto w-[1.25rem] shrink-0'
              />
            </button>
            <h3 className='font-trip-sans mb-[1.5rem] border-b border-solid border-[#EDEDED] pt-[1.875rem] pb-[1rem] text-left text-[1.125rem] leading-[130%] font-extrabold tracking-[0.00281rem] text-[#2E2E2E]'>
              Other option
            </h3>
            <div className=''>
              <FormField
                control={control}
                name='pickUpVehicle'
                render={({field}) => (
                  <FormItem className=''>
                    <RadioGroup
                      className='grid grid-cols-2 gap-[0.75rem]'
                      value={field.value}
                      onValueChange={field.onChange}
                      name={field.name}
                    >
                      {Array.isArray(TransportVehicleList) &&
                        TransportVehicleList?.map((item, index) => {
                          return (
                            <div
                              key={index}
                              className='col-span-1 flex items-center justify-between rounded-[0.75rem] bg-[#F6F6F6] p-[0.75rem]'
                            >
                              <Label className='inline-flex w-full cursor-pointer items-center gap-0'>
                                <RadioGroupItem
                                  value={item?.slug}
                                  className='peer sr-only'
                                />
                                <Image
                                  alt=''
                                  width={22}
                                  height={22}
                                  src={'/icons/check_default.svg'}
                                  className='hidden! h-auto w-[1.25rem] peer-data-[state="unchecked"]:block!'
                                />
                                <Image
                                  alt=''
                                  width={22}
                                  height={22}
                                  src={'/icons/check_active-v1.svg'}
                                  className='hidden! h-auto w-[1.25rem] peer-data-[state="checked"]:block!'
                                />
                                <div className='flex flex-1 flex-col space-y-[0.5rem] pl-[0.5rem]'>
                                  <p className='inline-flex items-center text-[0.875rem] leading-[120%] font-medium tracking-[0.00219rem] text-[#3B3943]'>
                                    {item?.name}
                                  </p>
                                  <span className='text-[0.875rem] leading-[120%] font-medium tracking-[0.00219rem] text-[rgba(48,48,48,0.40)]'>
                                    Start:{' '}
                                    <span className='text-[#3B3943]'>
                                      {item?.startTime}
                                    </span>
                                  </span>
                                </div>
                                <p className='text-[0.875rem] leading-[120%] font-extrabold tracking-[0.01563rem] text-[#C83E21] uppercase'>
                                  <span>
                                    {item?.price?.toLocaleString('vi-VN')}
                                  </span>
                                  /PAX
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
        </div>
      </div>
    </>
  )
}

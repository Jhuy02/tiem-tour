'use client'

import Caution from '@/app/(main)/tours/[slug]/_components/common/Caution'
import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import Image from 'next/image'
import {useFormContext} from 'react-hook-form'
import {BookingFormValues} from '@/schemas/booking.schema'
import {PrivatePickupLocation, TransportVehicleList} from '@/constants/mockApi'
import {FormField, FormItem, FormMessage} from '@/components/ui/form'
import {RadioGroup, RadioGroupItem} from '@/components/ui/radio-group'
import PickupAndDropOffPrivateService from '@/app/(main)/tours/[slug]/_components/compound/booking-transport-service/_components/PickupAndDropOffPrivateService'
import DatePickerField from '@/app/(main)/tours/[slug]/_components/form-controls/DatePickerField'
import {Label} from '@/components/ui/label'
import Link from 'next/link'
import SelectOptionField from '@/app/(main)/tours/[slug]/_components/form-controls/SelectOptionField'

export default function ServiceOutboundTripWithPrivateTransport() {
  const {control} = useFormContext<BookingFormValues>()

  return (
    <>
      <div className='xsm:hidden absolute top-0 right-0'>
        <Dialog>
          <DialogTrigger asChild>
            <button
              type='button'
              className='flex cursor-pointer items-center space-x-[0.5rem] rounded-[0.75rem] border border-solid border-[#ECECEC] px-[1rem] py-[0.5rem]'
            >
              <span className='text-[0.875rem] leading-[120%] font-medium tracking-[0.00219rem] text-[#303030]'>
                Private schedule
              </span>
              <Image
                alt=''
                width={20}
                height={20}
                src={'/icons/chevron-right-double.svg'}
                className='h-auto w-[1.25rem] shrink-0'
              />
            </button>
          </DialogTrigger>
          <DialogContent className='z-150 max-h-[95vh]! max-w-fit! rounded-none! border-none! bg-transparent! p-0! duration-500'>
            <DialogHeader className='hidden'>
              <DialogTitle>Other Option</DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader>
            <PickupAndDropOffPrivateService />
          </DialogContent>
        </Dialog>
      </div>
      <div className='font-trip-sans flex flex-col'>
        <div className='mb-[1rem]'>
          <Caution content='NOTE: <strong>Bus service</strong> and <strong>Private transport</strong> are our services of picking up and dropping off passengers. In addition, customers can also use personal vehicles to travel.' />
        </div>
        <div className='mb-[1rem] flex flex-col space-y-[0.75rem]'>
          <p className='text-[0.875rem] leading-[120%] font-medium tracking-[0.00219rem] text-[#2E2E2E]'>
            Select vehicle type
          </p>
          <FormField
            control={control}
            name='outbound_trip_pickup_vehicle'
            render={({field}) => (
              <FormItem className='self-stretch'>
                <RadioGroup
                  className='grid grid-cols-2 gap-[0.75rem]'
                  name={field.name}
                  value={field.value}
                  onValueChange={field.onChange}
                >
                  {Array.isArray(TransportVehicleList) &&
                    TransportVehicleList?.slice(0, 2)?.map((item, index) => {
                      return (
                        <Label
                          key={index}
                          className='inline-flex w-full flex-1 cursor-pointer items-center gap-0 rounded-[0.75rem] border border-solid border-[#EDEDED] p-[0.75rem]'
                        >
                          <RadioGroupItem
                            value={item.slug}
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
                          <div className='flex flex-col space-y-[0.5rem] pl-[0.5rem]'>
                            <p className='text-[1rem] leading-[120%] font-medium tracking-[0.0025rem] text-[#303030]'>
                              {item.name}
                            </p>
                            <span className='text-[0.875rem] leading-[120%] font-medium tracking-[0.01563rem] text-[rgba(48,48,48,0.40)]'>
                              Maximum {item.maximum} Person
                            </span>
                          </div>
                        </Label>
                      )
                    })}

                  <FormMessage className='font-trip-sans col-span-1 pl-[0.125rem] text-[0.75rem] leading-[120%] font-bold tracking-[0.00188rem] text-[#EA3434]' />
                </RadioGroup>
              </FormItem>
            )}
          />
        </div>
        {/* Pickup */}
        <div className='mb-[1rem] flex flex-col space-y-[0.75rem]'>
          <p className='text-[0.875rem] leading-[120%] font-medium tracking-[0.00219rem] text-[#2E2E2E]'>
            Pick up time
          </p>
          {/* Schedule start */}
          <div>
            <FormField
              control={control}
              name={'schedule_start'}
              render={({field}) => (
                <FormItem className='xsm:basis-full flex-1'>
                  <DatePickerField
                    disabled
                    {...field}
                  />
                  <FormMessage className='font-trip-sans pl-[0.125rem] text-[0.75rem] leading-[120%] font-bold tracking-[0.00188rem] text-[#EA3434]' />
                </FormItem>
              )}
            />
          </div>
          {/* Pick up location */}
          <div className=''>
            <FormField
              control={control}
              name='outbound_trip_pickup_location'
              render={({field}) => (
                <FormItem className=''>
                  <RadioGroup
                    className='flex items-start gap-0 space-x-[0.75rem]'
                    onValueChange={field.onChange}
                    name={field.name}
                  >
                    {Array.isArray(PrivatePickupLocation) &&
                      PrivatePickupLocation.map((item, index) => {
                        return (
                          <Label
                            key={index}
                            className='inline-flex w-full flex-1 cursor-pointer items-center gap-0 rounded-[0.75rem] border border-solid border-[#EDEDED] p-[0.75rem]'
                          >
                            <RadioGroupItem
                              value={item.slug}
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
                            <div className='flex flex-col space-y-[0.5rem] pl-[0.5rem]'>
                              <p className='text-[1rem] leading-[120%] font-medium tracking-[0.0025rem] text-[#303030]'>
                                {item.name}
                              </p>
                              <span className='text-[0.875rem] leading-[120%] font-bold tracking-[0.01563rem] text-[#C83E21] uppercase'>
                                <span>{item.price}</span>
                                <span>USD/car</span>
                              </span>
                            </div>
                          </Label>
                        )
                      })}

                    <FormMessage className='font-trip-sans col-span-1 pl-[0.125rem] text-[0.75rem] leading-[120%] font-bold tracking-[0.00188rem] text-[#EA3434]' />
                  </RadioGroup>
                </FormItem>
              )}
            />
          </div>
          {/* Note: Pickup address */}
          <div className='rounded-[0.75rem] border border-solid border-[#EDEDED] px-[1rem] py-[0.875rem]'>
            <p className='text-[0.875rem] leading-[120%] font-medium tracking-[0.00219rem] text-[#2E2E2E]'>
              Pick up at 165 Truong Trinh Ha Noi at 8:00
            </p>
          </div>
        </div>
        {/* Arrival */}
        <div className='mb-[1.5rem] flex flex-col space-y-[0.75rem]'>
          <p className='text-[0.875rem] leading-[120%] font-medium tracking-[0.00219rem] text-[#2E2E2E]'>
            Arrival time
          </p>
          <div className='xsm:space-y-[0.75rem] xsm:space-x-0 xsm:flex-wrap flex items-start space-x-[0.75rem]'>
            <FormField
              control={control}
              // name='outboundTripArrivalLocation'
              name='outbound_trip_arrival_location'
              render={({field}) => (
                <FormItem className='xsm:basis-full flex-1'>
                  <SelectOptionField
                    label='Arrival location'
                    placeholder='Hagiang'
                    options={[]}
                    disabled
                    {...field}
                  />
                  <FormMessage className='font-trip-sans pl-[0.125rem] text-[0.75rem] leading-[120%] font-bold tracking-[0.00188rem] text-[#EA3434]' />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name='outbound_trip_arrival_time'
              render={({field}) => (
                <FormItem className='xsm:basis-full flex-1'>
                  <SelectOptionField
                    label='Arrival time'
                    placeholder='Any time'
                    options={[]}
                    disabled
                    {...field}
                  />
                  <FormMessage className='font-trip-sans pl-[0.125rem] text-[0.75rem] leading-[120%] font-bold tracking-[0.00188rem] text-[#EA3434]' />
                </FormItem>
              )}
            />
          </div>
        </div>
        {/* Caution */}
        <div className='relative flex items-center space-x-[0.375rem] rounded-[0.75rem] bg-[#F5F5F5] p-[0.75rem]'>
          <Image
            alt=''
            width={24}
            height={24}
            src={'/icons/caution.svg'}
            className='h-auto w-[1.5rem] shrink-0'
          />
          <p className='flex-1 text-[0.75rem] leading-[130%] tracking-[0.00188rem] text-[rgba(48,48,48,0.80)]'>
            NOTE: If you want to use this service to travel to other locations
            such as <br /> SaPa, NinhBinh, CaoBang, BaBe. Please contact us
          </p>
          <Link
            href={'#'}
            className='text-[0.875rem] leading-[120%] font-medium tracking-[0.00219rem] text-[#006CE4] underline'
          >
            Contact us
          </Link>
        </div>
      </div>
    </>
  )
}

'use client'

import Caution from '@/app/(main)/tours/[slug]/_components/common/Caution'
import React, {useMemo, useState} from 'react'
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
import {TransportVehicleList} from '@/constants/mockApi'
import {FormField, FormItem, FormMessage} from '@/components/ui/form'
import {RadioGroup, RadioGroupItem} from '@/components/ui/radio-group'
import SelectTransportVehicle from '@/app/(main)/tours/[slug]/_components/form-controls/SelectTransportVehicle'
import OtherTransportVehicle from '@/app/(main)/tours/[slug]/_components/compound/booking-transport-service/_components/OtherTransportVehicle'
import PickupAndDropOffPrivateService from '@/app/(main)/tours/[slug]/_components/compound/booking-transport-service/_components/PickupAndDropOffPrivateService'
import DatePickerField from '@/app/(main)/tours/[slug]/_components/form-controls/DatePickerField'
import {Label} from '@/components/ui/label'

export default function ServiceOutboundTripWithPrivateTransport() {
  const {control} = useFormContext<BookingFormValues>()
  const [addedOptionSlug, setAddedOptionSlug] = useState<string | null>(null)

  const addedOtherOptionItem = useMemo(() => {
    if (!addedOptionSlug) return null

    const item = TransportVehicleList.find((i) => i.slug === addedOptionSlug)
    if (!item) return null

    const isInTop2 = TransportVehicleList.slice(0, 2).some(
      (i) => i.slug === item.slug,
    )
    return isInTop2 ? null : item
  }, [addedOptionSlug])
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
      <div className='font-trip-sans flex flex-col space-y-[1rem]'>
        <Caution content='NOTE: <strong>Bus service</strong> and <strong>Private transport</strong> are our services of picking up and dropping off passengers. In addition, customers can also use personal vehicles to travel.' />
        <div className='flex flex-col space-y-[0.75rem]'>
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
                        <div
                          key={index}
                          className='xsm:col-span-full xsm:border xsm:border-solid xsm:border-[#EDEDED] xsm:bg-white col-span-1 flex items-center justify-between rounded-[0.75rem] bg-[#F6F6F6] p-[0.75rem]'
                        >
                          <SelectTransportVehicle
                            title={item?.name}
                            value={item?.slug}
                            startTime={item?.startTime}
                            price={item?.price}
                          />
                        </div>
                      )
                    })}

                  {addedOtherOptionItem && (
                    <div className='xsm:col-span-full xsm:border xsm:border-solid xsm:border-[#EDEDED] xsm:bg-white col-span-1 flex items-center justify-between rounded-[0.75rem] bg-[#F6F6F6] p-[0.75rem]'>
                      <SelectTransportVehicle
                        title={addedOtherOptionItem?.name}
                        value={addedOtherOptionItem?.slug}
                        startTime={addedOtherOptionItem?.startTime}
                        price={addedOtherOptionItem?.price}
                      />
                    </div>
                  )}
                  <FormMessage className='font-trip-sans col-span-1 pl-[0.125rem] text-[0.75rem] leading-[120%] font-bold tracking-[0.00188rem] text-[#EA3434]' />

                  <div className='col-span-1 col-start-2 flex items-center justify-end'>
                    <OtherTransportVehicle
                      keySchema='outbound_trip_pickup_vehicle'
                      optionList={TransportVehicleList}
                      onAddOption={(slug) => setAddedOptionSlug(slug)}
                    />
                  </div>
                </RadioGroup>
              </FormItem>
            )}
          />
        </div>
        <div className='flex flex-col space-y-[0.75rem]'>
          <p>Pick up time</p>
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
          <div className='flex items-start space-x-[0.75rem]'>
            <FormField
              control={control}
              name='deposit'
              render={({field}) => (
                <FormItem className='flex-1 rounded-[0.75rem] border border-solid border-[#EDEDED] p-[0.75rem]'>
                  <RadioGroup
                    className=''
                    value={'deposit'}
                    onValueChange={field.onChange}
                    name={field.name}
                  >
                    <Label className='inline-flex w-full cursor-pointer items-center gap-0'>
                      <RadioGroupItem
                        value={'deposit'}
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
                        <p>Noi Bai Airport</p>
                        <span>
                          <span>3.000.000</span>
                          <span>USD/car</span>
                        </span>
                      </div>
                    </Label>

                    <FormMessage className='font-trip-sans col-span-1 pl-[0.125rem] text-[0.75rem] leading-[120%] font-bold tracking-[0.00188rem] text-[#EA3434]' />
                  </RadioGroup>
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name='deposit'
              render={({field}) => (
                <FormItem className='flex-1 rounded-[0.75rem] border border-solid border-[#EDEDED] p-[0.75rem]'>
                  <RadioGroup
                    className=''
                    value={'deposit'}
                    onValueChange={field.onChange}
                    name={field.name}
                  >
                    <Label className='inline-flex w-full cursor-pointer items-center gap-0'>
                      <RadioGroupItem
                        value={'deposit'}
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
                        <p>Noi Bai Airport</p>
                        <span>
                          <span>3.000.000</span>
                          <span>USD/car</span>
                        </span>
                      </div>
                    </Label>

                    <FormMessage className='font-trip-sans col-span-1 pl-[0.125rem] text-[0.75rem] leading-[120%] font-bold tracking-[0.00188rem] text-[#EA3434]' />
                  </RadioGroup>
                </FormItem>
              )}
            />
          </div>
          <div></div>
        </div>
      </div>
    </>
  )
}

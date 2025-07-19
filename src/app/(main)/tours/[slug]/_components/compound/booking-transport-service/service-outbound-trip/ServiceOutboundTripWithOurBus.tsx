'use client'

import Caution from '@/app/(main)/tours/[slug]/_components/common/Caution'
import OtherTransportVehicle from '@/app/(main)/tours/[slug]/_components/compound/booking-transport-service/_components/OtherTransportVehicle'
import PickupAndDropOffBusService from '@/app/(main)/tours/[slug]/_components/compound/booking-transport-service/_components/PickupAndDropOffBusService'

import DatePickerField from '@/app/(main)/tours/[slug]/_components/form-controls/DatePickerField'
import SelectOptionField from '@/app/(main)/tours/[slug]/_components/form-controls/SelectOptionField'
import SelectTransportVehicle from '@/app/(main)/tours/[slug]/_components/form-controls/SelectTransportVehicle'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {FormField, FormItem, FormMessage} from '@/components/ui/form'
import {RadioGroup} from '@/components/ui/radio-group'
import {CITY_LIST, TransportVehicleList} from '@/constants/mockApi'
import {BookingFormValues} from '@/schemas/booking.schema'
import Image from 'next/image'
import {useMemo, useState} from 'react'
import {useFormContext} from 'react-hook-form'

export default function ServiceOutboundTripWithOurBus() {
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
                Bus schedule
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
            <PickupAndDropOffBusService />
          </DialogContent>
        </Dialog>
      </div>
      <div className='font-trip-sans flex flex-col space-y-[1rem]'>
        <Caution content='NOTE: <strong>Bus service</strong> and <strong>Private transport</strong> are our services of picking up and dropping off passengers. In addition, customers can also use personal vehicles to travel.' />
        <div className='flex flex-col space-y-[0.75rem]'>
          <p className='text-[0.875rem] leading-[120%] font-medium tracking-[0.00219rem] text-[#2E2E2E]'>
            Pick up at
          </p>
          <div className='xsm:flex-wrap xsm:space-x-0 xsm:space-y-[0.75rem] flex items-start space-x-[0.75rem]'>
            <FormField
              control={control}
              name='outbound_trip_pickup_location'
              render={({field}) => (
                <FormItem className='xsm:basis-full flex-1'>
                  <SelectOptionField
                    label='Pick up at'
                    placeholder='Select pickup location'
                    options={CITY_LIST}
                    {...field}
                  />
                  <FormMessage className='font-trip-sans pl-[0.125rem] text-[0.75rem] leading-[120%] font-bold tracking-[0.00188rem] text-[#EA3434]' />
                </FormItem>
              )}
            />
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
          <div className='flex flex-col items-end space-y-[0.75rem]'>
            <FormField
              control={control}
              name='outbound_trip_pickup_vehicle'
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
                            className='xsm:col-span-full col-span-1 flex items-center justify-between rounded-[0.75rem] border border-solid border-[#EDEDED] bg-white p-[0.75rem]'
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

          <div className='flex flex-col space-y-[0.625rem]'>
            <div className='flex items-center space-x-[0.375rem] rounded-[0.75rem] border border-solid border-[#ECECEC] bg-[#f6f6f6] px-[1rem] py-[0.875rem]'>
              <Image
                alt=''
                width={20}
                height={20}
                src={'/icons/marker-pin.svg'}
                className='h-auto w-[1.25rem]'
              />
              <p className='text-[0.875rem] leading-[120%] font-medium tracking-[0.00219rem] text-[rgba(48,48,48,0.40)]'>
                Pick up at 94 Tran nhat duat street, BaDinh
              </p>
            </div>
            <p className='text-[0.875rem] leading-[120%] font-medium tracking-[0.00219rem] text-[rgba(48,48,48,0.40)]'>
              Please be at the pick up point 30 minutes in advance
            </p>
          </div>
        </div>
        <div className='flex flex-col space-y-[0.75rem]'>
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
                    placeholder='Select arrival location'
                    options={CITY_LIST}
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
                    placeholder='Select arrival time'
                    options={CITY_LIST}
                    disabled
                    {...field}
                  />
                  <FormMessage className='font-trip-sans pl-[0.125rem] text-[0.75rem] leading-[120%] font-bold tracking-[0.00188rem] text-[#EA3434]' />
                </FormItem>
              )}
            />
          </div>
          <div className='flex items-start space-x-[1rem] rounded-[0.75rem] border border-solid border-[#ECECEC] bg-[#F6F6F6] px-[1rem] py-[0.875rem]'>
            <Image
              alt=''
              width={20}
              height={20}
              src={'/icons/marker-pin.svg'}
              className='h-auto w-[1.25rem] shrink-0'
            />
            <div className='text-[0.875rem] leading-[120%] font-medium tracking-[0.00219rem] text-[rgba(48,48,48,0.40)]'>
              <p>Stop at</p>
              <p>1. TiemTours Office 92i Nguyen Trai</p>
              <p>2. Ha Giang Bus Station </p>
              <p>3. Homestays, hostels, and hotels in downtown Ha Giang</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

'use client'

import Caution from '@/app/(main)/tours/[slug]/_components/common/Caution'
import OtherTransportVehicle from '@/app/(main)/tours/[slug]/_components/compound/booking-transport-service/_components/OtherTransportVehicle'
import PickupAndDropOffBusService from '@/app/(main)/tours/[slug]/_components/compound/booking-transport-service/_components/PickupAndDropOffBusService'

import DatePickerField from '@/app/(main)/tours/[slug]/_components/form-controls/DatePickerField'
import SelectOptionField from '@/app/(main)/tours/[slug]/_components/form-controls/SelectOptionField'
import SelectTransportVehicle from '@/app/(main)/tours/[slug]/_components/form-controls/SelectTransportVehicle'
import {PageContext} from '@/app/(main)/tours/[slug]/context/PageProvider'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog-v2'
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import {RadioGroup} from '@/components/ui/radio-group'
import {BookingFormValues} from '@/schemas/booking.schema'
import {TourDetailApiResType} from '@/types/tours.interface'
import clsx from 'clsx'
import Image from 'next/image'
import {useContext, useEffect, useMemo, useState} from 'react'
import {useFormContext, useWatch} from 'react-hook-form'

export default function ServiceOutboundTripWithOurBus() {
  const pageContext = useContext(PageContext)
  if (!pageContext) throw new Error('Page context is missing')
  const {data: apiData}: {data: TourDetailApiResType} = pageContext

  const {control, setValue} = useFormContext<BookingFormValues>()
  const [addedOptionSlug, setAddedOptionSlug] = useState<string | null>(null)
  const pickupLocation = useWatch({
    control,
    name: 'outboundTrip.data.pickUpLocation',
  })
  const pickupAddress = useWatch({
    control,
    name: 'outboundTrip.data.pickUpAddress',
  })

  const pickupVehicleList = useMemo(() => {
    const vehicles = apiData?.package_tour?.main_car_pick_up_data.map(
      (item) => {
        return {
          id: item.id,
          name: item.title,
          slug: item.id.toString(),
          startTime: item.fields.start_time,
          price: Number(item.fields.price_car_pax),
          maximum: Number(item.fields.max_number_pax),
        }
      },
    )
    return vehicles || []
  }, [apiData?.package_tour?.main_car_pick_up_data])

  const addedOtherOptionItem = useMemo(() => {
    if (!addedOptionSlug) return null

    const item = pickupVehicleList.find((i) => i.slug === addedOptionSlug)
    if (!item) return null

    const isInTop2 = pickupVehicleList
      .slice(0, 2)
      .some((i) => i.slug === item.slug)
    return isInTop2 ? null : item
  }, [addedOptionSlug, pickupVehicleList])

  const pickupLocationList = useMemo(() => {
    const locations = apiData?.package_tour?.pick_up_location?.map((item) => {
      return {
        name: item.location,
        slug: item.location,
      }
    })
    return locations || []
  }, [apiData?.package_tour?.pick_up_location])

  useEffect(() => {
    const pickupInfo = apiData?.package_tour?.pick_up_location?.find(
      (item) => item.location === pickupLocation,
    )
    if (pickupInfo) {
      setValue('outboundTrip.data.pickUpAddress', pickupInfo.detail_location)
    }
  }, [apiData?.package_tour?.pick_up_location, pickupLocation, setValue])

  return (
    <>
      <div className='xsm:hidden absolute top-0 right-0'>
        <Dialog>
          <DialogTrigger asChild>
            <div className='flex cursor-pointer items-center space-x-[0.5rem] rounded-[0.75rem] border border-solid border-[#ECECEC] px-[1rem] py-[0.5rem]'>
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
            </div>
          </DialogTrigger>
          <DialogContent className='xsm:rounded-b-none hidden_scroll max-h-[95vh]! overflow-y-auto! rounded-[1.5rem] border-none! bg-transparent! p-0! duration-500'>
            <DialogHeader className='hidden'>
              <DialogTitle>Schedule Bus Service</DialogTitle>
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
              name='outboundTrip.data.pickUpLocation'
              render={({field}) => (
                <FormItem className='xsm:basis-full flex-1'>
                  <FormControl>
                    <SelectOptionField
                      label='Pick up at'
                      placeholder='Select pickup location'
                      options={pickupLocationList}
                      {...field}
                    />
                  </FormControl>
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
              name='outboundTrip.data.pickUpVehicle'
              render={({field}) => (
                <FormItem className='self-stretch'>
                  <RadioGroup
                    className='grid grid-cols-2 gap-[0.75rem]'
                    value={field.value.toString()}
                    onValueChange={field.onChange}
                    name={field.name}
                  >
                    {Array.isArray(pickupVehicleList) &&
                      pickupVehicleList?.slice(0, 2)?.map((item, index) => {
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
                      <div className='xsm:col-span-full col-span-1 flex items-center justify-between rounded-[0.75rem] border border-solid border-[#EDEDED] bg-white p-[0.75rem]'>
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
                        keySchema='outboundTrip.data.pickUpVehicle'
                        optionList={pickupVehicleList}
                        onAddOption={(slug) => {
                          const isInTop2 = pickupVehicleList
                            .slice(0, 2)
                            .some((i) => i.slug === slug)
                          if (!isInTop2) {
                            setAddedOptionSlug(slug)
                          }
                        }}
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
                {pickupAddress ?? 'Please select pick up location'}
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
            <div className='xsm:basis-full flex-1'>
              <div
                className={clsx(
                  'font-trip-sans pointer-events-none relative h-[3rem] cursor-not-allowed rounded-[0.75rem] border border-solid border-[#EDEDED] bg-[#F6F6F6]',
                )}
              >
                <div className='flex h-full w-full cursor-pointer items-center justify-between space-x-[1rem] px-[1rem] py-[0.875rem]'>
                  <p
                    className={clsx(
                      'text-[0.875rem] leading-[120%] font-medium tracking-[0.00219rem] text-[rgba(48,48,48,0.40)]',
                    )}
                  >
                    {
                      apiData?.acf_fields?.transport_service?.outbound_trip
                        ?.use_our_bus_service?.arrival_location
                    }
                  </p>
                  <Image
                    alt=''
                    width={20}
                    height={20}
                    src='/icons/arrow-down.svg'
                    className={clsx(
                      'h-auto w-[1.25rem] shrink-0 transition-transform duration-300',
                    )}
                  />
                </div>
              </div>
            </div>
            <div className='xsm:basis-full flex-1'>
              <div
                className={clsx(
                  'font-trip-sans pointer-events-none relative h-[3rem] cursor-not-allowed rounded-[0.75rem] border border-solid border-[#EDEDED] bg-[#F6F6F6]',
                )}
              >
                <div className='flex h-full w-full cursor-pointer items-center justify-between space-x-[1rem] px-[1rem] py-[0.875rem]'>
                  <p
                    className={clsx(
                      'text-[0.875rem] leading-[120%] font-medium tracking-[0.00219rem] text-[rgba(48,48,48,0.40)]',
                    )}
                  >
                    {
                      apiData?.acf_fields?.transport_service?.outbound_trip
                        ?.use_our_bus_service?.arrival_time
                    }
                  </p>
                  <Image
                    alt=''
                    width={20}
                    height={20}
                    src='/icons/arrow-down.svg'
                    className={clsx(
                      'h-auto w-[1.25rem] shrink-0 transition-transform duration-300',
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='flex items-start space-x-[1rem] rounded-[0.75rem] border border-solid border-[#ECECEC] bg-[#F6F6F6] px-[1rem] py-[0.875rem]'>
            <Image
              alt=''
              width={20}
              height={20}
              src={'/icons/marker-pin.svg'}
              className='h-auto w-[1.25rem] shrink-0'
            />
            <div
              dangerouslySetInnerHTML={{
                __html:
                  apiData?.acf_fields?.transport_service?.outbound_trip
                    ?.use_our_bus_service?.arrival_address ?? '',
              }}
              className='text-[0.875rem] leading-[120%] font-medium tracking-[0.00219rem] text-[rgba(48,48,48,0.40)]'
            ></div>
          </div>
        </div>
      </div>
    </>
  )
}

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

export default function ServiceReturnTripWithOurBus() {
  const pageContext = useContext(PageContext)
  if (!pageContext) throw new Error('Page context is missing')
  const {data: apiData}: {data: TourDetailApiResType} = pageContext

  const {control, setValue} = useFormContext<BookingFormValues>()
  const [addedOptionSlug, setAddedOptionSlug] = useState<string | null>(null)

  const returnTripPickupLocation = useWatch({
    control,
    name: 'returnTrip.data.pickUpLocation',
  })
  const returnTripPickupAddress = useWatch({
    control,
    name: 'returnTrip.data.pickUpAddress',
  })
  const returnTripArrivalLocation = useWatch({
    control,
    name: 'returnTrip.data.arrivalLocation',
  })
  const returnTripArrivalAddress = useWatch({
    control,
    name: 'returnTrip.data.arrivalAddress',
  })
  const returnTripArrivalTime = useWatch({
    control,
    name: 'returnTrip.data.arrivalTime',
  })

  const arrivalLocation = apiData?.package_tour?.arrival_use_bus?.map(
    ({arrival_city}) => ({name: arrival_city, slug: arrival_city}),
  )

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

  useEffect(() => {
    const arrivalInfo = apiData?.package_tour?.arrival_use_bus?.find(
      (item) => item.arrival_city === returnTripArrivalLocation,
    )
    if (arrivalInfo) {
      setValue('returnTrip.data.arrivalAddress', arrivalInfo.arrival_address_)
      setValue('returnTrip.data.arrivalTime', arrivalInfo.arrival_time)
    }
  }, [
    apiData?.package_tour?.arrival_use_bus,
    returnTripArrivalLocation,
    setValue,
  ])

  return (
    <>
      <div className='xsm:hidden absolute top-0 right-0'>
        <Dialog>
          <DialogTrigger>
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
          <DialogContent className='max-h-[95vh]! max-w-fit! rounded-none! border-none! bg-transparent! p-0! duration-500'>
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
          <div className='xsm:space-x-0 xsm:flex-wrap xsm:space-y-[0.75rem] flex items-start space-x-[0.75rem]'>
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
                    {returnTripPickupLocation}
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
            <FormField
              control={control}
              name={'schedule_end'}
              render={({field}) => (
                <FormItem className='flex-1'>
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
              name='returnTrip.data.pickUpVehicle'
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
                        keySchema='returnTrip.data.pickUpVehicle'
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
                {returnTripPickupAddress}
              </p>
            </div>
            <p className='text-[0.875rem] leading-[120%] font-medium tracking-[0.00219rem] text-[rgba(48,48,48,0.40)]'>
              Please be at the pick up point 30 minutes in advance
            </p>
          </div>
        </div>
        <div className='flex flex-col space-y-[0.75rem]'>
          <p className='text-[0.875rem] leading-[120%] font-medium tracking-[0.00219rem] text-[#2E2E2E]'>
            Arrival
          </p>
          <div className='xsm:space-y-[0.75rem] xsm:space-x-0 xsm:flex-wrap flex items-start space-x-[0.75rem]'>
            <FormField
              control={control}
              name='returnTrip.data.arrivalLocation'
              render={({field}) => (
                <FormItem className='xsm:basis-full flex-1'>
                  <FormControl>
                    <SelectOptionField
                      label='Arrival location'
                      placeholder='Select arrival location'
                      options={arrivalLocation}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className='font-trip-sans pl-[0.125rem] text-[0.75rem] leading-[120%] font-bold tracking-[0.00188rem] text-[#EA3434]' />
                </FormItem>
              )}
            />

            <div className='flex-1'>
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
                    {returnTripArrivalTime}
                  </p>
                  <Image
                    alt=''
                    width={20}
                    height={20}
                    src='/icons/arrow-down.svg'
                    className={clsx(
                      'h-auto w-[1.25rem] shrink-0 opacity-40 transition-transform duration-300',
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
            <p className='text-[0.875rem] leading-[120%] font-medium tracking-[0.00219rem] text-[rgba(48,48,48,0.40)]'>
              {returnTripArrivalAddress}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

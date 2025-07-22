'use client'
import React, {useContext, useState} from 'react'
import ServiceReturnTripWithOurBus from '@/app/(main)/tours/[slug]/_components/compound/booking-transport-service/service-return-trip/ServiceReturnTripWithOurBus'
import ServiceReturnTripWithPrivateTransport from '@/app/(main)/tours/[slug]/_components/compound/booking-transport-service/service-return-trip/ServiceReturnTripWithPrivateTransport'
import ServiceReturnTripWithPersonalVehicle from '@/app/(main)/tours/[slug]/_components/compound/booking-transport-service/service-return-trip/ServiceReturnTripWithPersonalVehicle'
import Caution from '@/app/(main)/tours/[slug]/_components/common/Caution'
import TransportVehicleGallery from '@/app/(main)/tours/[slug]/_components/compound/booking-transport-service/transport-vehicle-gallery'
import ServiceOutboundTripWithOurBus from '@/app/(main)/tours/[slug]/_components/compound/booking-transport-service/service-outbound-trip/ServiceOutboundTripWithOurBus'
import ServiceOutboundTripWithPrivateTransport from '@/app/(main)/tours/[slug]/_components/compound/booking-transport-service/service-outbound-trip/ServiceOutboundTripWithPrivateTransport'
import ServiceOutboundTripWithPersonalVehicle from '@/app/(main)/tours/[slug]/_components/compound/booking-transport-service/service-outbound-trip/ServiceOutboundTripWithPersonalVehicle'
import {FormField, FormItem} from '@/components/ui/form'
import {useFormContext, useWatch} from 'react-hook-form'
import {BookingFormValues} from '@/schemas/booking.schema'
import {RadioGroup, RadioGroupItem} from '@/components/ui/radio-group'
import {TRANSPORT_TOUR_SERVICE} from '@/constants/booking'
import {PageContext} from '@/app/(main)/tours/[slug]/context/PageProvider'
import {TourDetailApiResType} from '@/types/tours.interface'
import clsx from 'clsx'
import Image from 'next/image'
import PickupAndDropOffBusService from '@/app/(main)/tours/[slug]/_components/compound/booking-transport-service/_components/PickupAndDropOffBusService'
import PickupAndDropOffPrivateService from '@/app/(main)/tours/[slug]/_components/compound/booking-transport-service/_components/PickupAndDropOffPrivateService'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer-v2'

export default function BookingTransportService() {
  const pageContext = useContext(PageContext)
  if (!pageContext) throw new Error('Page context is missing')
  const {data: apiData}: {data: TourDetailApiResType} = pageContext
  const [openOutboundTripDrawer, setOpenOutboundTripDrawer] =
    useState<boolean>(false)
  const [openReturnTripDrawer, setOpenReturnTripDrawer] =
    useState<boolean>(false)

  const {control, setValue, clearErrors} = useFormContext<BookingFormValues>()
  const outboundType = useWatch({name: 'outboundTrip.type', control})
  const returnType = useWatch({name: 'returnTrip.type', control})

  const handleOutboundTripChange = (val: string) => {
    clearErrors('outboundTrip.data')
    const outboundTrip = apiData?.acf_fields?.transport_service?.outbound_trip

    if (val === 'use_our_bus') {
      const defaultVehicle =
        apiData?.package_tour?.main_car_pick_up_data?.[0]?.id?.toString()
      const defaultPickup = apiData?.package_tour?.pick_up_location[0]
      const defaultArrival = outboundTrip?.use_our_bus_service
      setValue('outboundTrip.data', {
        pickUpAddress: defaultPickup?.detail_location,
        pickUpLocation: defaultPickup?.location,
        pickUpVehicle: defaultVehicle,
        arrivalLocation: defaultArrival?.arrival_location,
        arrivalTime: defaultArrival?.arrival_time,
        arrivalAddress: '',
      })
    } else if (val === 'private_transport') {
      const defaultVehicle =
        apiData?.package_tour?.private_transport?.[0]?.id?.toString()
      const defaultPickupLocation =
        apiData?.package_tour?.private_transport?.[0]?.pick_up_location?.[0]?.id?.toString()
      setValue('outboundTrip.data', {
        arrivalAddress:
          apiData?.acf_fields?.transport_service?.outbound_trip
            ?.private_transport?.arrival_location,
        pickUpAddress: '',
        pickUpLocation: defaultPickupLocation,
        pickUpVehicle: defaultVehicle,
        arrivalLocation: outboundTrip?.private_transport?.arrival_location,
        arrivalTime: outboundTrip?.private_transport?.arrival_time,
      })
    } else {
      setValue('outboundTrip.data', {}) // personal_vehicle
    }
  }
  const handleReturnTripChange = (val: string) => {
    clearErrors('returnTrip.data')
    const returnTrip = apiData?.acf_fields?.transport_service?.return_trip
    if (val === 'use_our_bus') {
      const vehicleType =
        apiData?.package_tour?.main_car_pick_up_data?.[0]?.id?.toString()
      const returnTripArrivalData = apiData?.package_tour?.arrival_use_bus?.[0]
      setValue('returnTrip.data', {
        pickUpVehicle: vehicleType,
        pickUpAddress: returnTrip.use_our_bus_service.pickup_address,
        pickUpLocation: returnTrip.use_our_bus_service.pickup_location,
        arrivalAddress: returnTripArrivalData?.arrival_address_,
        arrivalTime: returnTripArrivalData?.arrival_time,
        arrivalLocation: returnTripArrivalData?.arrival_city,
      })
    } else if (val === 'private_transport') {
      const vehicleType =
        apiData?.package_tour?.private_transport?.[0]?.id?.toString()
      const pickupLocation =
        apiData?.package_tour?.private_transport?.[0]?.pick_up_location?.[0]?.id?.toString()
      setValue('returnTrip.data', {
        pickUpAddress: '',
        pickUpLocation: pickupLocation,
        pickUpVehicle: vehicleType,
        arrivalLocation: 'Hanoi',
        arrivalTime: 'Any time',
        arrivalAddress: '',
      })
    } else {
      setValue('returnTrip.data', {}) // personal_vehicle
    }
  }

  return (
    <div className='font-trip-sans xsm:rounded-0 xsm:border-none xsm:px-[0.75rem] xsm:py-[1rem] xsm:space-y-[1rem] flex flex-col space-y-[1.5rem] rounded-[1.5rem] border border-solid border-[#EDEDED] bg-white px-[1.75rem] py-[1.875rem]'>
      <div className='xsm:border-none xsm:pb-0 border-b border-solid border-[#EDEDED] pb-[1.5rem]'>
        <p className='text-[1.125rem] leading-[130%] font-black tracking-[0.00281rem] text-[#303030]'>
          Transport service
        </p>
      </div>

      <div className='flex flex-col space-y-[1rem]'>
        <div className='xsm:flex xsm:self-stretch xsm:items-center xsm:justify-between rounded-[0.75rem] bg-[rgba(235,229,226,0.32)] px-[1rem] py-[0.5rem]'>
          <p className='xsm:text-[0.875rem] xsm:leading-[120%] xsm:tracking-[0.00875rem] py-[0.625rem] text-[1rem] leading-[130%] font-extrabold tracking-[0.0025rem] text-[#303030]'>
            Outbound trip
          </p>
          {outboundType !== 'personal_vehicle' && (
            <Drawer
              open={openOutboundTripDrawer}
              onOpenChange={setOpenOutboundTripDrawer}
            >
              <DrawerTrigger className='xsm:flex hidden cursor-pointer items-center space-x-[0.5rem] rounded-[0.5rem] border border-solid border-[#ECECEC] bg-white px-[0.75rem] py-[0.375rem]'>
                <span className='text-[0.875rem] leading-[120%] font-medium tracking-[0.00219rem] text-[#303030]'>
                  {outboundType === 'use_our_bus' && 'Bus schedule'}
                  {outboundType === 'private_transport' && 'Private schedule'}
                </span>
                <Image
                  alt=''
                  width={20}
                  height={20}
                  src={'/icons/chevron-right-double.svg'}
                  className='h-auto w-[1.25rem] shrink-0'
                />
              </DrawerTrigger>
              <DrawerContent className='w-full transition-all duration-400 ease-out'>
                <DrawerHeader className='hidden'>
                  <DrawerTitle></DrawerTitle>
                  <DrawerDescription></DrawerDescription>
                </DrawerHeader>
                <div className='hidden_scroll max-h-full overflow-y-auto rounded-t-[1.5rem]'>
                  {outboundType === 'use_our_bus' && (
                    <PickupAndDropOffBusService
                      onCloseMb={() => setOpenOutboundTripDrawer(false)}
                    />
                  )}
                  {outboundType === 'private_transport' && (
                    <PickupAndDropOffPrivateService
                      onCloseMb={() => setOpenOutboundTripDrawer(false)}
                    />
                  )}
                </div>
              </DrawerContent>
            </Drawer>
          )}
        </div>
        <div className='relative mb-0 flex w-full flex-col gap-0 space-y-[0.75rem]'>
          <div className='border-none bg-transparent p-0'>
            <FormField
              control={control}
              name='outboundTrip.type'
              render={({field}) => (
                <FormItem className='block'>
                  <RadioGroup
                    className='xsm:w-full xsm:flex-nowrap xsm:overflow-x-auto hidden_scroll flex max-w-[40rem] flex-wrap gap-0 space-x-[0.5rem]'
                    onValueChange={(val) => {
                      field.onChange(val)
                      handleOutboundTripChange(val)
                    }}
                    value={field.value}
                    name={field.name}
                  >
                    {Array.isArray(TRANSPORT_TOUR_SERVICE) &&
                      TRANSPORT_TOUR_SERVICE?.map(({name, slug}, index) => {
                        return (
                          <label
                            key={index}
                            className={clsx(
                              'relative flex h-auto shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-[1.25rem] bg-[#EBEBEB] px-[1.5rem] py-[0.5rem] shadow-none! before:absolute before:inset-0 before:z-0 before:rounded-[1.25rem] before:bg-[linear-gradient(180deg,#F4F5E6_0%,#B2DFDC_100%)] before:opacity-0',
                              {
                                'before:opacity-100': field.value === slug,
                              },
                            )}
                          >
                            <RadioGroupItem
                              value={slug}
                              className='peer sr-only'
                            />
                            <span className='xsm:text-[0.75rem] xsm:leading-[130%] relative z-1 text-[1rem] leading-[120%] font-medium tracking-[0.0025rem] text-[#303030]'>
                              {name}
                            </span>
                          </label>
                        )
                      })}
                  </RadioGroup>
                </FormItem>
              )}
            ></FormField>
          </div>
          {outboundType === 'use_our_bus' && <ServiceOutboundTripWithOurBus />}
          {outboundType === 'private_transport' && (
            <ServiceOutboundTripWithPrivateTransport />
          )}
          {outboundType === 'personal_vehicle' && (
            <ServiceOutboundTripWithPersonalVehicle />
          )}
        </div>
      </div>
      <div className='flex flex-col space-y-[1rem]'>
        <div className='flex items-center justify-between rounded-[0.75rem] bg-[rgba(235,229,226,0.32)] px-[1rem] py-[0.5rem]'>
          <p className='xsm:font-extrabold xsm:text-[0.875rem] xsm:leading-[120%] xsm:tracking-[0.00875rem] py-[0.625rem] text-[1rem] leading-[130%] font-extrabold tracking-[0.0025rem] text-[#303030]'>
            Return trip
          </p>
          {returnType !== 'personal_vehicle' && (
            <Drawer
              open={openReturnTripDrawer}
              onOpenChange={setOpenReturnTripDrawer}
            >
              <DrawerTrigger className='xsm:flex hidden cursor-pointer items-center space-x-[0.5rem] rounded-[0.5rem] border border-solid border-[#ECECEC] bg-white px-[0.75rem] py-[0.375rem]'>
                <span className='text-[0.875rem] leading-[120%] font-medium tracking-[0.00219rem] text-[#303030]'>
                  {returnType === 'use_our_bus' && 'Bus schedule'}
                  {returnType === 'private_transport' && 'Private schedule'}
                </span>
                <Image
                  alt=''
                  width={20}
                  height={20}
                  src={'/icons/chevron-right-double.svg'}
                  className='h-auto w-[1.25rem] shrink-0'
                />
              </DrawerTrigger>
              <DrawerContent className='w-full transition-all duration-400 ease-out'>
                <DrawerHeader className='hidden'>
                  <DrawerTitle></DrawerTitle>
                  <DrawerDescription></DrawerDescription>
                </DrawerHeader>
                <div className='hidden_scroll max-h-full overflow-y-auto rounded-t-[1.5rem]'>
                  {returnType === 'use_our_bus' && (
                    <PickupAndDropOffBusService
                      onCloseMb={() => setOpenReturnTripDrawer(false)}
                    />
                  )}
                  {returnType === 'private_transport' && (
                    <PickupAndDropOffPrivateService
                      onCloseMb={() => setOpenReturnTripDrawer(false)}
                    />
                  )}
                </div>
              </DrawerContent>
            </Drawer>
          )}
        </div>
        <div className='relative mb-0 flex w-full flex-col gap-0 space-y-[0.75rem]'>
          <div className='border-none bg-transparent p-0'>
            <FormField
              control={control}
              name='returnTrip.type'
              render={({field}) => (
                <FormItem className='block'>
                  <RadioGroup
                    className='xsm:w-full xsm:flex-nowrap xsm:overflow-x-auto hidden_scroll flex max-w-[40rem] flex-wrap gap-0 space-x-[0.5rem]'
                    onValueChange={(val) => {
                      field.onChange(val)
                      handleReturnTripChange(val)
                    }}
                    value={field.value}
                    name={field.name}
                  >
                    {Array.isArray(TRANSPORT_TOUR_SERVICE) &&
                      TRANSPORT_TOUR_SERVICE?.map(({name, slug}, index) => {
                        return (
                          <label
                            key={index}
                            className={clsx(
                              'relative flex h-auto shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-[1.25rem] bg-[#EBEBEB] px-[1.5rem] py-[0.5rem] shadow-none! before:absolute before:inset-0 before:z-0 before:rounded-[1.25rem] before:bg-[linear-gradient(180deg,#F4F5E6_0%,#B2DFDC_100%)] before:opacity-0',
                              {
                                'before:opacity-100': field.value === slug,
                              },
                            )}
                          >
                            <RadioGroupItem
                              value={slug}
                              className='peer sr-only'
                            />
                            <span className='xsm:text-[0.75rem] xsm:leading-[130%] relative z-1 text-[1rem] leading-[120%] font-medium tracking-[0.0025rem] text-[#303030]'>
                              {name}
                            </span>
                          </label>
                        )
                      })}
                  </RadioGroup>
                </FormItem>
              )}
            ></FormField>
          </div>
          {returnType === 'use_our_bus' && <ServiceReturnTripWithOurBus />}
          {returnType === 'private_transport' && (
            <ServiceReturnTripWithPrivateTransport />
          )}
          {returnType === 'personal_vehicle' && (
            <ServiceReturnTripWithPersonalVehicle />
          )}
        </div>
      </div>
      <div className='xsm:hidden'>
        <Caution content='We will call you back to confirm the pickup date and location.' />
      </div>
      <TransportVehicleGallery />
    </div>
  )
}

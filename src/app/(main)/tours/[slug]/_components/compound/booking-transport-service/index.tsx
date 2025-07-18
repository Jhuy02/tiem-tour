'use client'
import React from 'react'
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'
import {TransportServiceList} from '@/constants/mockApi'
import ServiceReturnTripWithOurBus from '@/app/(main)/tours/[slug]/_components/compound/booking-transport-service/service-return-trip/ServiceReturnTripWithOurBus'
import ServiceReturnTripWithPrivateTransport from '@/app/(main)/tours/[slug]/_components/compound/booking-transport-service/service-return-trip/ServiceReturnTripWithPrivateTransport'
import ServiceReturnTripWithPersonalVehicle from '@/app/(main)/tours/[slug]/_components/compound/booking-transport-service/service-return-trip/ServiceReturnTripWithPersonalVehicle'
import Caution from '@/app/(main)/tours/[slug]/_components/common/Caution'
import TransportVehicleGallery from '@/app/(main)/tours/[slug]/_components/compound/booking-transport-service/transport-vehicle-gallery'
import ServiceOutboundTripWithOurBus from '@/app/(main)/tours/[slug]/_components/compound/booking-transport-service/service-outbound-trip/ServiceOutboundTripWithOurBus'
import ServiceOutboundTripWithPrivateTransport from '@/app/(main)/tours/[slug]/_components/compound/booking-transport-service/service-outbound-trip/ServiceOutboundTripWithPrivateTransport'
import ServiceOutboundTripWithPersonalVehicle from '@/app/(main)/tours/[slug]/_components/compound/booking-transport-service/service-outbound-trip/ServiceOutboundTripWithPersonalVehicle'
import {FormField, FormItem} from '@/components/ui/form'
import {useFormContext} from 'react-hook-form'
import {BookingFormValues} from '@/schemas/booking.schema'
import {RadioGroup, RadioGroupItem} from '@/components/ui/radio-group'
import {Label} from '@/components/ui/label'

export default function BookingTransportService() {
  const {control} = useFormContext<BookingFormValues>()
  return (
    <div className='font-trip-sans xsm:rounded-0 xsm:border-none xsm:px-[0.75rem] xsm:py-[1rem] xsm:space-y-[1rem] flex flex-col space-y-[1.5rem] rounded-[1.5rem] border border-solid border-[#EDEDED] bg-white px-[1.75rem] py-[1.875rem]'>
      {/* Header */}
      <div className='xsm:border-none xsm:pb-0 border-b border-solid border-[#EDEDED] pb-[1.5rem]'>
        <p className='text-[1.125rem] leading-[130%] font-black tracking-[0.00281rem] text-[#303030]'>
          Transport service
        </p>
      </div>
      {/* Outbound trip */}
      <div className='flex flex-col space-y-[1rem]'>
        <div className='rounded-[0.75rem] bg-[rgba(235,229,226,0.32)] px-[1rem] py-[0.5rem]'>
          <p className='py-[0.625rem] text-[1rem] leading-[130%] font-extrabold tracking-[0.0025rem] text-[#303030]'>
            Outbound trip
          </p>
        </div>
        <Tabs
          defaultValue={TransportServiceList[0]?.slug}
          className='relative mb-0 flex w-full flex-col gap-0 space-y-[0.75rem]'
        >
          <TabsList className='border-none bg-transparent p-0'>
            <FormField
              control={control}
              name='outbound_trip_transport'
              defaultValue=''
              render={({field}) => (
                <FormItem className=''>
                  <RadioGroup
                    className='xsm:w-full xsm:flex-nowrap xsm:overflow-x-auto hidden_scroll flex max-w-[40rem] flex-wrap gap-0 space-x-[0.5rem]'
                    onValueChange={field.onChange}
                    name={field.name}
                  >
                    {Array.isArray(TransportServiceList) &&
                      TransportServiceList?.map((item, index) => {
                        return (
                          <TabsTrigger
                            key={index}
                            value={item?.slug}
                            className='relative h-fit w-fit flex-initial cursor-pointer rounded-[1.25rem] bg-[#EBEBEB] p-0! shadow-none! before:absolute before:inset-0 before:z-0 before:rounded-[1.25rem] before:bg-[linear-gradient(180deg,#F4F5E6_0%,#B2DFDC_100%)] before:opacity-0 data-[state=active]:before:opacity-100'
                          >
                            <Label className='relative inline-flex cursor-pointer items-center justify-center overflow-hidden px-[1.5rem] py-[0.5rem]'>
                              <RadioGroupItem
                                value={item?.slug}
                                className='peer sr-only'
                              />
                              <span className='xsm:text-[0.75rem] xsm:leading-[130%] relative z-1 text-[1rem] leading-[120%] font-medium tracking-[0.0025rem] text-[#303030]'>
                                {item?.name}
                              </span>
                            </Label>
                          </TabsTrigger>
                        )
                      })}
                  </RadioGroup>
                </FormItem>
              )}
            ></FormField>
          </TabsList>
          <TabsContent
            value='use_our_bus_service'
            className='mb-0'
          >
            <ServiceOutboundTripWithOurBus />
          </TabsContent>
          <TabsContent
            value='private_transport'
            className='mb-0'
          >
            <ServiceOutboundTripWithPrivateTransport />
          </TabsContent>
          <TabsContent
            value='use_personal_vehicle'
            className='mb-0'
          >
            <ServiceOutboundTripWithPersonalVehicle />
          </TabsContent>
        </Tabs>
      </div>
      {/* Return trip */}
      <div className='flex flex-col space-y-[1rem]'>
        <div className='rounded-[0.75rem] bg-[rgba(235,229,226,0.32)] px-[1rem] py-[0.5rem]'>
          <p className='xsm:font-extrabold xsm:text-[0.875rem] xsm:leading-[120%] xsm:tracking-[0.00875rem] py-[0.625rem] text-[1rem] leading-[130%] font-extrabold tracking-[0.0025rem] text-[#303030]'>
            Return trip
          </p>
        </div>
        <Tabs
          defaultValue={TransportServiceList[0]?.slug}
          className='relative mb-0 flex w-full flex-col gap-0 space-y-[0.75rem]'
        >
          <TabsList className='border-none bg-transparent p-0'>
            <FormField
              control={control}
              name='return_trip_transport'
              defaultValue=''
              render={({field}) => (
                <FormItem className=''>
                  <RadioGroup
                    className='xsm:w-full xsm:flex-nowrap xsm:overflow-x-auto hidden_scroll flex max-w-[40rem] flex-wrap gap-0 space-x-[0.5rem]'
                    onValueChange={field.onChange}
                    name={field.name}
                  >
                    {Array.isArray(TransportServiceList) &&
                      TransportServiceList?.map((item, index) => {
                        return (
                          <TabsTrigger
                            key={index}
                            value={item?.slug}
                            className='relative h-fit w-fit flex-initial cursor-pointer rounded-[1.25rem] bg-[#EBEBEB] p-0! shadow-none! before:absolute before:inset-0 before:z-0 before:rounded-[1.25rem] before:bg-[linear-gradient(180deg,#F4F5E6_0%,#B2DFDC_100%)] before:opacity-0 data-[state=active]:before:opacity-100'
                          >
                            <Label className='relative inline-flex cursor-pointer items-center justify-center overflow-hidden px-[1.5rem] py-[0.5rem]'>
                              <RadioGroupItem
                                value={item?.slug}
                                className='peer sr-only'
                              />
                              <span className='xsm:text-[0.75rem] xsm:leading-[130%] relative z-1 text-[1rem] leading-[120%] font-medium tracking-[0.0025rem] text-[#303030]'>
                                {item?.name}
                              </span>
                            </Label>
                          </TabsTrigger>
                        )
                      })}
                  </RadioGroup>
                </FormItem>
              )}
            ></FormField>
          </TabsList>
          <TabsContent
            value='use_our_bus_service'
            className='mb-0'
          >
            <ServiceReturnTripWithOurBus />
          </TabsContent>
          <TabsContent
            value='private_transport'
            className='mb-0'
          >
            <ServiceReturnTripWithPrivateTransport />
          </TabsContent>
          <TabsContent
            value='use_personal_vehicle'
            className='mb-0'
          >
            <ServiceReturnTripWithPersonalVehicle />
          </TabsContent>
        </Tabs>
      </div>
      {/* Caution */}
      <div className='xsm:hidden'>
        <Caution content='We will call you back to confirm the pickup date and location.' />
      </div>
      {/* Transport vehicle gallery */}
      <TransportVehicleGallery />
    </div>
  )
}

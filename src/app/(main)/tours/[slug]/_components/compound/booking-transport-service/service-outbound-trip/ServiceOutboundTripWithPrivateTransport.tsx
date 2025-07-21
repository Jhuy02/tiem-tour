'use client'
import {v4 as uuidv4} from 'uuid'
import Caution from '@/app/(main)/tours/[slug]/_components/common/Caution'
import React, {useContext, useMemo} from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import Image from 'next/image'
import {useFormContext, useWatch} from 'react-hook-form'
import {BookingFormValues} from '@/schemas/booking.schema'
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import {RadioGroup, RadioGroupItem} from '@/components/ui/radio-group'
import PickupAndDropOffPrivateService from '@/app/(main)/tours/[slug]/_components/compound/booking-transport-service/_components/PickupAndDropOffPrivateService'
import DatePickerField from '@/app/(main)/tours/[slug]/_components/form-controls/DatePickerField'
import {Label} from '@/components/ui/label'
import Link from 'next/link'
import {TourDetailApiResType} from '@/types/tours.interface'
import {PageContext} from '@/app/(main)/tours/[slug]/context/PageProvider'
import clsx from 'clsx'
import {Input} from '@/components/ui/input'

export default function ServiceOutboundTripWithPrivateTransport() {
  const pageContext = useContext(PageContext)

  if (!pageContext) throw new Error('Page context is missing')
  const {data: apiData}: {data: TourDetailApiResType} = pageContext
  const {control, setValue} = useFormContext<BookingFormValues>()

  const pickupVehicle = useWatch({
    control,
    name: 'outboundTrip.data.pickUpVehicle',
  })
  const pickupLocation = useWatch({
    control,
    name: 'outboundTrip.data.pickUpLocation',
  })

  const pickupLocations = useMemo(() => {
    if (typeof pickupVehicle === 'undefined') return
    const locations = apiData?.package_tour?.private_transport?.find(
      (item) => item.id === Number(pickupVehicle),
    )
    return locations?.pick_up_location
  }, [apiData?.package_tour?.private_transport, pickupVehicle])

  return (
    <>
      <div className='xsm:hidden absolute top-0 right-0'>
        <Dialog>
          <DialogTrigger asChild>
            <div className='flex cursor-pointer items-center space-x-[0.5rem] rounded-[0.75rem] border border-solid border-[#ECECEC] px-[1rem] py-[0.5rem]'>
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
            </div>
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
            name='outboundTrip.data.pickUpVehicle'
            render={({field}) => (
              <FormItem className='self-stretch'>
                <RadioGroup
                  className='grid grid-cols-2 gap-[0.75rem]'
                  name={field.name}
                  onValueChange={(val) => {
                    field.onChange(val)
                    const locationId = apiData?.package_tour?.private_transport
                      ?.find(({id}) => id === Number(val))
                      ?.pick_up_location?.[0]?.id?.toString()
                    if (locationId) {
                      setValue('outboundTrip.data.pickUpLocation', locationId)
                    }
                  }}
                >
                  {Array.isArray(apiData?.package_tour?.private_transport) &&
                    apiData?.package_tour?.private_transport?.map((item) => {
                      return (
                        <Label
                          key={uuidv4()}
                          className='xsm:col-span-full col-span-1 inline-flex w-full cursor-pointer items-center gap-0 rounded-[0.75rem] border border-solid border-[#EDEDED] p-[0.75rem]'
                        >
                          <RadioGroupItem
                            value={item?.id?.toString()}
                            className='peer sr-only'
                            checked={pickupVehicle === item.id.toString()}
                          />
                          <Image
                            alt=''
                            width={22}
                            height={22}
                            src={'/icons/radio-unchecked.svg'}
                            className='hidden! h-auto w-[1.25rem] peer-data-[state="unchecked"]:block!'
                          />
                          <Image
                            alt=''
                            width={22}
                            height={22}
                            src={'/icons/radio-checked.svg'}
                            className='hidden! h-auto w-[1.25rem] peer-data-[state="checked"]:block!'
                          />
                          <div className='flex flex-col space-y-[0.5rem] pl-[0.5rem]'>
                            <p className='text-[1rem] leading-[120%] font-medium tracking-[0.0025rem] text-[#303030]'>
                              {item?.name}
                            </p>
                            <span className='text-[0.875rem] leading-[120%] font-medium tracking-[0.01563rem] text-[rgba(48,48,48,0.40)]'>
                              Maximum {item?.maximum_person} Person
                            </span>
                          </div>
                        </Label>
                      )
                    })}

                  <FormMessage className='font-trip-sans col-span-full pl-[0.125rem] text-[0.75rem] leading-[120%] font-bold tracking-[0.00188rem] text-[#EA3434]' />
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
              name='outboundTrip.data.pickUpLocation'
              render={({field}) => (
                <FormItem className=''>
                  <RadioGroup
                    className='grid grid-cols-2 gap-[0.75rem]'
                    onValueChange={field.onChange}
                    name={field.name}
                  >
                    {Array.isArray(pickupLocations) &&
                      pickupLocations.map((item) => {
                        return (
                          <Label
                            key={uuidv4()}
                            className='xsm:col-span-full col-span-1 inline-flex cursor-pointer items-center gap-0 rounded-[0.75rem] border border-solid border-[#EDEDED] p-[0.75rem]'
                          >
                            <RadioGroupItem
                              value={item.id.toString()}
                              className='peer sr-only'
                              checked={pickupLocation === item.id.toString()}
                            />
                            <Image
                              alt=''
                              width={22}
                              height={22}
                              src={'/icons/radio-unchecked.svg'}
                              className='hidden! h-auto w-[1.25rem] peer-data-[state="unchecked"]:block!'
                            />
                            <Image
                              alt=''
                              width={22}
                              height={22}
                              src={'/icons/radio-checked.svg'}
                              className='hidden! h-auto w-[1.25rem] peer-data-[state="checked"]:block!'
                            />
                            <div className='flex flex-col space-y-[0.5rem] pl-[0.5rem]'>
                              <p className='text-[1rem] leading-[120%] font-medium tracking-[0.0025rem] text-[#303030]'>
                                {item.title}
                              </p>
                              <span className='text-[0.875rem] leading-[120%] font-bold tracking-[0.01563rem] text-[#C83E21] uppercase'>
                                {Number(item.price).toLocaleString('en-US')}{' '}
                                USD/car
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
          <div>
            <FormField
              control={control}
              name='outboundTrip.data.pickUpAddress'
              render={({field}) => (
                <FormItem className=''>
                  <FormControl>
                    <Input
                      className='h-auto rounded-[0.75rem] border border-solid border-[#EDEDED] bg-white px-[1rem] py-[0.875rem] text-[0.875rem] leading-[120%] font-medium tracking-[0.00219rem] text-[#2E2E2E] shadow-none ring-0! outline-0! placeholder:text-[rgba(48,48,48,0.40)] focus-visible:border-[#25ACAB]'
                      placeholder='Enter your pick up point information or you can notify the driver during the trip.'
                      {...field}
                    />
                  </FormControl>

                  <FormMessage className='font-trip-sans col-span-1 pl-[0.125rem] text-[0.75rem] leading-[120%] font-bold tracking-[0.00188rem] text-[#EA3434]' />
                </FormItem>
              )}
            />
          </div>
        </div>
        {/* Arrival */}
        <div className='mb-[1.5rem] flex flex-col space-y-[0.75rem]'>
          <p className='text-[0.875rem] leading-[120%] font-medium tracking-[0.00219rem] text-[#2E2E2E]'>
            Arrival time
          </p>
          <div className='xsm:space-y-[0.75rem] xsm:space-x-0 xsm:flex-wrap flex items-start space-x-[0.75rem]'>
            {/* <FormField
              control={control}
              name='outboundTrip.data.arrivalLocation'
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
              // name='outbound_trip_arrival_time'
              name='outboundTrip.data.arrivalTime'
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
            /> */}
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
                        ?.private_transport?.arrival_location
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
                        ?.private_transport?.arrival_time
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
            href={'/contact'}
            className='text-[0.875rem] leading-[120%] font-medium tracking-[0.00219rem] text-[#006CE4] underline'
          >
            Contact us
          </Link>
        </div>
      </div>
    </>
  )
}

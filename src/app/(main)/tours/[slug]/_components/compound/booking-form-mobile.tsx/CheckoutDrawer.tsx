'use client'
import React, {useContext, useEffect, useMemo} from 'react'
import {PageContext} from '@/app/(main)/tours/[slug]/context/PageProvider'
import {TourDetailApiResType} from '@/types/tours.interface'
import {useFormContext, useWatch} from 'react-hook-form'
import {BookingFormValues} from '@/schemas/booking.schema'
import {format} from 'date-fns'
import Image from 'next/image'
import {FormField, FormItem, FormMessage} from '@/components/ui/form'
import {RadioGroup, RadioGroupItem} from '@/components/ui/radio-group'
import {Label} from '@/components/ui/label'

interface CheckoutDrawerProps {
  onCloseCheckoutDrawer: () => void
  onOpenConfirmDrawer: () => void
  onUpdateTotalPayment: (price: number) => void
}

export default function CheckoutDrawer({
  onUpdateTotalPayment,
  onCloseCheckoutDrawer,
  onOpenConfirmDrawer,
}: CheckoutDrawerProps) {
  const pageContext = useContext(PageContext)
  if (!pageContext) throw new Error('Page context is missing')
  const {data: apiData}: {data: TourDetailApiResType} = pageContext
  const {control} = useFormContext<BookingFormValues>()

  const tourSalePercent = Number(apiData.acf_fields.tour_sale_percent) / 100
  // Lấy dữ liệu từ form
  const scheduleStart: Date | null = useWatch({control, name: 'schedule_start'})
  const scheduleEnd: Date | null = useWatch({control, name: 'schedule_end'})

  const adults = useWatch({control, name: 'adults'})
  const children = useWatch({control, name: 'children'})
  const infants = useWatch({control, name: 'infants'})

  const tourType = useWatch({control, name: 'tour_type'})
  const tourPackage = useWatch({control, name: 'package'})

  const easyRider = useWatch({control, name: 'riders.0.quantity'})
  const rideByYourself = useWatch({control, name: 'riders.1.quantity'})
  const seatBehind = useWatch({control, name: 'riders.2.quantity'})

  const outboundTripTransportType = useWatch({
    control,
    name: 'outboundTrip.type',
  })
  const outboundTripTransportPickupLocation = useWatch({
    control,
    name: 'outboundTrip.data.pickUpLocation',
  })
  const outboundTripTransportPickupVehicle = useWatch({
    control,
    name: 'outboundTrip.data.pickUpVehicle',
  })

  const returnTripTransportType = useWatch({
    control,
    name: 'returnTrip.type',
  })
  const returnTripTransportPickupLocation = useWatch({
    control,
    name: 'returnTrip.data.pickUpLocation',
  })
  const returnTripTransportPickupVehicle = useWatch({
    control,
    name: 'returnTrip.data.pickUpVehicle',
  })

  const rentMotorcycleList = useWatch({control, name: 'motorcycles'})

  const packageInfo = useMemo(() => {
    if (tourType === 'motorbike_tour' && tourPackage) {
      return apiData.package_tour.motorbike_package[tourPackage]
    } else if (tourType === 'car_tour' && tourPackage) {
      return apiData.package_tour.car_package[tourPackage]
    } else {
      return apiData.package_tour.motorbike_package.saving
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tourType, tourPackage])

  const totalRiderPrice = useMemo(() => {
    const easyRiderPrice = Number(packageInfo[0].price) * Number(easyRider) || 0
    const rideByYourselfPrice =
      Number(packageInfo[1].price) * Number(rideByYourself) || 0
    const seatBehindPrice =
      Number(packageInfo[2].price) * Number(seatBehind) || 0
    return easyRiderPrice + rideByYourselfPrice + seatBehindPrice
  }, [packageInfo, easyRider, rideByYourself, seatBehind])

  const transportVehicle = useMemo(() => {
    let outboundTripVehicle = null
    let returnTripVehicle = null

    const outboundTripVehicleId = outboundTripTransportPickupVehicle
    const returnTripVehicleId = returnTripTransportPickupVehicle
    if (outboundTripVehicleId) {
      if (outboundTripTransportType === 'use_our_bus') {
        const vehicle = apiData.package_tour.main_car_pick_up_data.find(
          ({id}) => id === Number(outboundTripVehicleId),
        )
        outboundTripVehicle = {
          name: vehicle?.title,
          price: Number(vehicle?.fields?.price_car_pax),
        }
      } else if (outboundTripTransportType === 'private_transport') {
        const vehicle = apiData.package_tour.private_transport.find(
          ({id}) => id === Number(outboundTripVehicleId),
        )
        const vehicleName = vehicle?.name
        const vehiclePrice = vehicle?.pick_up_location?.find(
          (item) => item.id === Number(outboundTripTransportPickupLocation),
        )?.price
        outboundTripVehicle = {
          name: vehicleName,
          price: Number(vehiclePrice),
        }
      } else if (outboundTripTransportType === 'personal_vehicle') {
        outboundTripVehicle = null
      }
    }
    if (returnTripVehicleId) {
      if (returnTripTransportType === 'use_our_bus') {
        const vehicle = apiData.package_tour.main_car_pick_up_data.find(
          ({id}) => id === Number(returnTripVehicleId),
        )
        returnTripVehicle = {
          name: vehicle?.title,
          price: Number(vehicle?.fields?.price_car_pax),
        }
      } else if (returnTripTransportType === 'private_transport') {
        const vehicle = apiData.package_tour.private_transport.find(
          ({id}) => id === Number(returnTripVehicleId),
        )
        const vehicleName = vehicle?.name
        const vehiclePrice = vehicle?.pick_up_location?.find(
          (item) => item.id === Number(returnTripTransportPickupLocation),
        )?.price
        returnTripVehicle = {
          name: vehicleName,
          price: Number(vehiclePrice),
        }
      } else if (returnTripTransportType === 'personal_vehicle') {
        returnTripVehicle = null
      }
    }
    return {
      outboundTripVehicle,
      returnTripVehicle,
    }
  }, [
    apiData.package_tour.main_car_pick_up_data,
    apiData.package_tour.private_transport,
    outboundTripTransportPickupLocation,
    outboundTripTransportPickupVehicle,
    outboundTripTransportType,
    returnTripTransportPickupLocation,
    returnTripTransportPickupVehicle,
    returnTripTransportType,
  ])

  const totalPaymentPrice = useMemo(() => {
    const outboundTripTransportPrice =
      outboundTripTransportType === 'personal_vehicle'
        ? 0
        : Number(transportVehicle.outboundTripVehicle?.price)
    const returnTripTransportPrice =
      returnTripTransportType === 'personal_vehicle'
        ? 0
        : Number(transportVehicle.returnTripVehicle?.price)
    const totalRentMotorbikePrice = rentMotorcycleList.reduce(
      (total, {price, quantity}) => {
        return total + Number(price) * Number(quantity)
      },
      0,
    )
    return (
      totalRiderPrice +
      totalRentMotorbikePrice +
      outboundTripTransportPrice +
      returnTripTransportPrice
    )
  }, [
    outboundTripTransportType,
    rentMotorcycleList,
    returnTripTransportType,
    totalRiderPrice,
    transportVehicle.outboundTripVehicle?.price,
    transportVehicle.returnTripVehicle?.price,
  ])

  useEffect(() => {
    onUpdateTotalPayment(totalPaymentPrice)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalPaymentPrice])

  return (
    <div className='font-trip-sans relative rounded-t-[1.5rem] bg-white px-[1rem] pt-[1rem]'>
      <div className='flex items-center justify-between border-b border-solid border-[#EDEDED] pb-[0.75rem]'>
        <p className='text-[1rem] leading-[130%] font-black tracking-[0.0025rem] text-[#303030]'>
          Subtotal
        </p>
        <button onClick={onCloseCheckoutDrawer}>
          <Image
            alt=''
            width={20}
            height={20}
            className='h-auto w-[1.25rem]'
            src={'/icons/x-close.svg'}
          />
        </button>
      </div>
      <div className='hidden_scroll flex max-h-[65vh] flex-col space-y-[1rem] overflow-y-auto pt-[0.75rem] pb-[1rem]'>
        <div className='flex flex-col space-y-[0.5rem]'>
          {apiData?.title && (
            <p
              dangerouslySetInnerHTML={{__html: apiData?.title}}
              className='text-[0.875rem] leading-[120%] font-bold tracking-[0.00875rem] text-[#3B3943]'
            ></p>
          )}
          <div className='flex items-center rounded-[1rem] bg-[#F5F5F5] p-[0.75rem]'>
            <div className='flex shrink-0 flex-col space-y-[0.375rem] self-stretch'>
              <p className='text-[0.875rem] leading-[150%] font-medium tracking-[-0.00438rem] text-[#3B3943]'>
                Duration
              </p>
              <span className='text-[0.875rem] leading-[150%] font-medium tracking-[-0.00438rem] text-[#006CE4]'>
                {apiData?.taxonomies?.duration?.[0]?.name}
              </span>
            </div>
            <div className='ml-[0.75rem] flex flex-1 flex-col space-y-[0.375rem] self-stretch border-l border-solid border-[#C0C0C0] pl-[0.75rem]'>
              <p className='text-[0.875rem] leading-[150%] font-medium tracking-[-0.00438rem] text-[#3B3943]'>
                Schedule
              </p>
              <span className='text-[0.875rem] leading-[150%] font-medium tracking-[-0.00438rem] text-[#006CE4]'>
                {scheduleStart && format(scheduleStart, 'MMMM d, yyyy')}{' '}
                <Image
                  alt=''
                  width={16}
                  height={16}
                  className='inline-block h-auto w-[1rem]'
                  src={'/icons/arrow-right.svg'}
                />
                {scheduleEnd && format(scheduleEnd, 'MMMM d, yyyy')}{' '}
              </span>
            </div>
          </div>
          <div className='flex flex-col space-y-[0.375rem] rounded-[1rem] bg-[#F5F5F5] p-[0.75rem]'>
            <div className=''>
              <div className='flex items-center space-x-[0.375rem]'>
                <div className='flex-1'>
                  <p className='text-left text-[0.875rem] leading-[150%] tracking-[0.00219rem] text-[rgba(48,48,48,0.80)]'>
                    <span className='font-extrabold tracking-[0.01563rem]'>
                      {adults?.toString()?.padStart(2, '0')}
                    </span>{' '}
                    Adults
                  </p>
                </div>
                <div className='flex-1'>
                  <p className='text-right text-[0.875rem] leading-[150%] font-medium tracking-[0.00219rem] text-[#303030]'>
                    <span className=''>
                      {totalRiderPrice.toLocaleString('en-US')}
                    </span>{' '}
                    USD
                  </p>
                </div>
              </div>
              <div className='flex items-center space-x-[0.375rem]'>
                <div className='flex-1'>
                  <p className='text-left text-[0.875rem] leading-[150%] tracking-[0.00219rem] text-[rgba(48,48,48,0.80)]'>
                    <span className='font-extrabold tracking-[0.01563rem]'>
                      {children?.toString()?.padStart(2, '0')}
                    </span>{' '}
                    Child
                  </p>
                </div>
              </div>
              <div className='flex items-center space-x-[0.375rem]'>
                <div className='flex-1'>
                  <p className='text-left text-[0.875rem] leading-[150%] tracking-[0.00219rem] text-[rgba(48,48,48,0.80)]'>
                    <span className='font-extrabold tracking-[0.01563rem]'>
                      {infants?.toString()?.padStart(2, '0')}
                    </span>{' '}
                    Infant
                  </p>
                </div>
              </div>
            </div>
            <div className='h-[1px] w-full bg-[#EDEDED]'></div>
            <div className=''>
              {packageInfo.map((item, index) => {
                return (
                  <FormField
                    key={index}
                    control={control}
                    name={`riders.${index}.quantity`}
                    render={({field}) => (
                      <FormItem>
                        <div className='flex items-start space-x-[0.375rem]'>
                          <div className='flex-1'>
                            <p className='text-left text-[0.875rem] leading-[150%] tracking-[0.00219rem] text-[rgba(48,48,48,0.80)]'>
                              <span className='font-extrabold tracking-[0.01563rem]'>
                                {field.value?.toString()?.padStart(2, '0')}{' '}
                              </span>
                              {item.title}
                            </p>
                          </div>
                          <div className='flex-1'>
                            <p className='text-right text-[0.875rem] leading-[150%] font-medium tracking-[0.00219rem] text-[#303030]'>
                              <span className=''>
                                {(
                                  Number(item.price) * Number(field.value)
                                ).toLocaleString('en-US')}{' '}
                                USD
                              </span>
                            </p>
                          </div>
                        </div>
                      </FormItem>
                    )}
                  />
                )
              })}
            </div>
          </div>
          <div className='flex flex-col space-y-[0.375rem] pt-[0.5rem]'>
            <div className='flex flex-col space-y-[0.25rem]'>
              <p className='text-[1rem] leading-[120%] font-bold tracking-[0.0025rem] text-[#3B3943]'>
                Transport service
              </p>
              <div className='flex items-center justify-between'>
                <p className='flex items-center space-x-[0.25rem] text-[0.875rem] leading-[120%] tracking-[0.01563rem] text-[rgba(48,48,48,0.80)]'>
                  <span className='font-extrabold'>Outbound trip</span>
                  <span>-</span>
                  <span className='font-normal'>
                    {outboundTripTransportType === 'personal_vehicle'
                      ? 'Use personal vehicle'
                      : transportVehicle?.outboundTripVehicle?.name}
                  </span>
                </p>
                {transportVehicle.outboundTripVehicle && (
                  <p className='flex items-center space-x-[0.25rem] text-right text-[0.875rem] leading-[150%] font-bold tracking-[0.00219rem] text-[#303030]'>
                    {Number(
                      transportVehicle.outboundTripVehicle?.price,
                    ).toLocaleString('en-US')}{' '}
                    USD
                  </p>
                )}
              </div>
              <div className='flex items-center justify-between'>
                <p className='flex items-center space-x-[0.25rem] text-[0.875rem] leading-[120%] tracking-[0.01563rem] text-[rgba(48,48,48,0.80)]'>
                  <span className='font-extrabold'>Return trip</span>
                  <span>-</span>
                  <span className='font-normal'>
                    {returnTripTransportType === 'personal_vehicle'
                      ? 'Use personal vehicle'
                      : transportVehicle.returnTripVehicle?.name}
                  </span>
                </p>
                {transportVehicle.returnTripVehicle && (
                  <p className='flex items-center space-x-[0.25rem] text-right text-[0.875rem] leading-[150%] font-bold tracking-[0.00219rem] text-[#303030]'>
                    {Number(
                      transportVehicle.returnTripVehicle?.price,
                    ).toLocaleString('en-US')}{' '}
                    USD
                  </p>
                )}
              </div>
            </div>
            <div className='flex flex-col space-y-[0.25rem]'>
              <p className='text-[1rem] leading-[120%] font-bold tracking-[0.0025rem] text-[#3B3943]'>
                Rent motorcycles
              </p>
              <div className='flex items-center justify-between'>
                <p className='flex items-center space-x-[0.25rem] text-[0.875rem] leading-[120%] tracking-[0.01563rem] text-[rgba(48,48,48,0.80)]'>
                  <span className='font-extrabold'>01</span>
                  <span className='font-normal'>
                    Honda 110cc - Semi automatic
                  </span>
                </p>
                <p className='flex items-center space-x-[0.25rem] text-right text-[0.875rem] leading-[150%] font-bold tracking-[0.00219rem] text-[#303030]'>
                  <span>300.000</span>
                  <span>USD</span>
                </p>
              </div>
            </div>
            {tourPackage && (
              <div className='flex flex-col space-y-[0.25rem]'>
                <p className='text-[1rem] leading-[120%] font-bold tracking-[0.0025rem] text-[#3B3943]'>
                  Homestay
                </p>
                <div className='flex items-center justify-between'>
                  <p className='flex items-center space-x-[0.25rem] text-[0.875rem] leading-[120%] tracking-[0.01563rem] text-[rgba(48,48,48,0.80)]'>
                    <span className='font-normal'>{tourPackage} x</span>
                    <span className='font-extrabold'>No Fee</span>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className=''>
          <FormField
            control={control}
            name='deposit'
            render={({field}) => (
              <FormItem>
                <RadioGroup
                  className=''
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
                    <div className='flex flex-1 flex-col space-y-[0.5rem] pl-[0.5rem]'>
                      <p className='inline-flex items-center space-x-[0.5rem] tracking-[0.00219rem] text-[#303030]'>
                        <span className='inline-block h-[1.1875rem] text-[1rem] leading-[120%] font-medium'>
                          Deposit
                        </span>
                        <span className='inline-block h-[1rem] text-[0.75rem] leading-[150%] font-normal'>
                          (<span className='text-[#F64722]'>*</span>
                          Non-refundable in case of cancellation)
                        </span>
                      </p>
                    </div>
                  </Label>
                  <FormMessage className='font-trip-sans col-span-1 pl-[0.125rem] text-[0.75rem] leading-[120%] font-bold tracking-[0.00188rem] text-[#EA3434]' />
                </RadioGroup>
              </FormItem>
            )}
          />
        </div>
        <div className="mb-[0.5rem] flex items-center justify-between rounded-[1rem] bg-[url('/common/common-background-pc.webp')] bg-cover bg-center bg-no-repeat p-[0.75rem]">
          <div className='flex flex-col space-y-[0.25rem] px-[0.75rem]'>
            {!tourSalePercent ? (
              <p className='text-[1.125rem] font-extrabold tracking-[0.00281rem] text-[#303030]'>
                {totalPaymentPrice.toLocaleString('en-US')} USD
              </p>
            ) : (
              <>
                <p className='text-[1.125rem] font-extrabold tracking-[0.00281rem] text-[#303030]'>
                  {(
                    Number(totalPaymentPrice) *
                    (1 - tourSalePercent)
                  ).toLocaleString('en-US')}{' '}
                  USD
                </p>
                <p className='flex items-center space-x-[0.25rem]'>
                  <span className='text-[0.875rem] leading-[150%] font-normal tracking-[0.00219rem] text-[rgba(48,48,48,0.80)] line-through'>
                    {Number(totalPaymentPrice).toLocaleString('en-US')} USD
                  </span>
                  <span className='flex h-[1.25rem] w-fit items-center justify-center rounded-[1rem] bg-[#115A46]/60 px-[0.375rem] py-[0.1875rem] text-[0.75rem] font-bold text-white'>
                    -{tourSalePercent * 100}%
                  </span>
                </p>
              </>
            )}
          </div>

          <button
            type='button'
            onClick={onOpenConfirmDrawer}
            className='flex h-[4.375rem] w-[10.40625rem] cursor-pointer flex-col items-center justify-center rounded-[0.75rem] bg-[#C83E21] text-white duration-300 ease-out hover:bg-[#EA6A44]'
          >
            <span className='text-[1.125rem] leading-[120%] font-extrabold tracking-[-0.0025rem] uppercase'>
              Check out
            </span>
            {tourSalePercent && (
              <span className='text-[0.75rem] leading-[130%] tracking-[0.00188rem]'>
                Save{' '}
                {Number(totalPaymentPrice * tourSalePercent).toLocaleString(
                  'en-US',
                )}{' '}
                USD
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

'use client'
import {v4 as uuidv4} from 'uuid'
import Caution from '@/app/(main)/tours/[slug]/_components/common/Caution'
import {PageContext} from '@/app/(main)/tours/[slug]/context/PageProvider'
import {Button} from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog-v2'
import {FormField, FormItem} from '@/components/ui/form'
import {Label} from '@/components/ui/label'
import {BookingFormValues} from '@/schemas/booking.schema'
import {TourDetailApiResType} from '@/types/tours.interface'
import {format} from 'date-fns'
import Image from 'next/image'
import {useContext, useMemo, useState} from 'react'
import {useFormContext, useWatch} from 'react-hook-form'
import ICArrowLeft from '@/components/icon/ICArrowLeft'
import clsx from 'clsx'
import PolicyTourDialog from '@/app/(main)/tours/[slug]/_components/compound/booking-overview/PolicyTourDialog'
import {Checkbox} from '@/components/ui/checkbox'

import styles from './styles.module.css'

export default function BookingCheckout() {
  const pageContext = useContext(PageContext)
  if (!pageContext) throw new Error('Page context is missing')
  const {data: apiData}: {data: TourDetailApiResType} = pageContext
  const {watch, control, trigger} = useFormContext<BookingFormValues>()
  const [agreePolicyStatus, setAgreePolicyStatus] = useState<boolean>(false)
  const [openConfirmPayment, setOpenConfirmPayment] = useState<boolean>(false)
  const tourSalePercent = Number(apiData.acf_fields.tour_sale_percent) / 100
  const dayCount = Number(apiData?.package_tour?.duration_number)
  // Lấy dữ liệu từ form
  const scheduleStart: Date | null = watch('schedule_start')
  const scheduleEnd: Date | null = watch('schedule_end')

  const adults = useWatch({control, name: 'adults'})
  const children = useWatch({control, name: 'children'})
  const infants = useWatch({control, name: 'infants'})

  const tourType = useWatch({control, name: 'tour_type'})
  const tourPackage = useWatch({control, name: 'package'})

  const easyRider = useWatch({control, name: 'riders.0.quantity'})
  const rideByYourself = useWatch({control, name: 'riders.1.quantity'})
  const seatBehind = useWatch({control, name: 'riders.2.quantity'})

  const packageType = useWatch({control, name: 'package'})

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
          price: Number(vehicle?.fields?.price_car_pax) * Number(adults),
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
          price: Number(vehiclePrice) * Number(adults),
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
          price: Number(vehicle?.fields?.price_car_pax) * Number(adults),
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
          price: Number(vehiclePrice) * Number(adults),
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
    adults,
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
        return total + Number(price) * Number(quantity) * dayCount
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
    dayCount,
    outboundTripTransportType,
    rentMotorcycleList,
    returnTripTransportType,
    totalRiderPrice,
    transportVehicle.outboundTripVehicle?.price,
    transportVehicle.returnTripVehicle?.price,
  ])

  const handleClickCheckout = async () => {
    const isValid = await trigger() // validate toàn bộ form
    if (isValid) {
      setOpenConfirmPayment(true)
    }
  }

  return (
    <>
      <div className='font-trip-sans sticky top-[0.5rem] h-fit max-h-[100vh] overflow-y-auto rounded-[1.5rem] border border-solid border-[#EDEDED] bg-white p-[1.25rem]'>
        <h3 className='mb-[1.25rem] border-b border-solid border-[#EDEDED] pb-[0.75rem] text-[1.125rem] leading-[130%] font-black tracking-[0.0025rem] text-[#303030]'>
          Subtotal
        </h3>
        {apiData?.title && (
          <p
            dangerouslySetInnerHTML={{__html: apiData?.title}}
            className='mb-[0.5rem] text-[1rem] leading-[130%] font-extrabold tracking-[0.0025rem] text-[#3B3943]'
          ></p>
        )}

        <div className='mb-[1rem] flex flex-col space-y-[0.5rem]'>
          <div className='flex items-center space-x-[0.375rem] rounded-[1rem] bg-[#F5F5F5] p-[0.75rem]'>
            <div className='flex w-[8.0625rem] shrink-0 flex-col space-y-[0.375rem] leading-[120%] font-medium'>
              <p className='text-[1rem] tracking-[0.0025rem] text-[#3B3943]'>
                Duration
              </p>
              <span className='text-[0.875rem] font-medium text-[#006CE4]'>
                {apiData?.taxonomies?.duration[0]?.name}
              </span>
            </div>
            <div className='flex flex-1 flex-col space-y-[0.375rem] pl-[1.25rem] leading-[120%] font-medium'>
              <p className='text-[1rem] tracking-[0.0025rem] text-[#3B3943]'>
                Schedule
              </p>
              <span className='inline-flex w-full items-center space-x-[0.25rem] text-[0.875rem] text-[#006CE4]'>
                <span>
                  {scheduleStart ? format(scheduleStart, 'MMM d, yyyy') : '---'}
                </span>
                <Image
                  alt=''
                  width={16}
                  height={16}
                  src={'/icons/arrow-right.svg'}
                  className='h-auto w-[1rem] shrink-0'
                />
                <span>
                  {scheduleEnd ? format(scheduleEnd, 'MMM d, yyyy') : '---'}
                </span>
              </span>
            </div>
          </div>
          <div className='flex flex-col space-y-[0.375rem] rounded-[1rem] bg-[#F5F5F5] p-[0.75rem]'>
            <div className=''>
              {/* Adult Quantity */}
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
              {/* Child Quantity */}
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
              {/* Infant Quantity */}
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
                        <div className='flex items-center space-x-[0.375rem]'>
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
          <div className='flex flex-col space-y-[0.625rem] pt-[0.5rem]'>
            {/* Transport Service */}
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
            {/* Rent motorcycles */}
            <div className='flex flex-col space-y-[0.25rem]'>
              <p className='text-[1rem] leading-[120%] font-bold tracking-[0.0025rem] text-[#3B3943]'>
                Rent motorcycles
              </p>
              {Array.isArray(rentMotorcycleList) &&
                rentMotorcycleList.map(({name, quantity, price}) => {
                  const subtotal = Number(price) * Number(quantity) * dayCount
                  return (
                    <div
                      key={uuidv4()}
                      className='flex items-center justify-between'
                    >
                      <p className='flex items-center space-x-[0.25rem] text-[0.875rem] leading-[120%] tracking-[0.01563rem] text-[rgba(48,48,48,0.80)]'>
                        <span className='font-extrabold'>
                          {quantity?.toString()?.padStart(2, '0')}
                        </span>
                        <span
                          className='font-normal'
                          dangerouslySetInnerHTML={{__html: name ?? ''}}
                        ></span>
                      </p>
                      <p className='flex items-center space-x-[0.25rem] text-right text-[0.875rem] leading-[150%] font-bold tracking-[0.00219rem] text-[#303030]'>
                        {subtotal.toLocaleString('en-US')} USD
                      </p>
                    </div>
                  )
                })}
            </div>
            {/* Homestay */}
            {packageType && (
              <div className='flex flex-col space-y-[0.25rem]'>
                <p className='text-[1rem] leading-[120%] font-bold tracking-[0.0025rem] text-[#3B3943]'>
                  Homestay
                </p>
                <div className='flex items-center justify-between'>
                  <p className='flex items-center space-x-[0.25rem] text-[0.875rem] leading-[120%] tracking-[0.01563rem] text-[rgba(48,48,48,0.80)]'>
                    <span>
                      {packageType === 'saving' && 'Saving Package'}
                      {packageType === 'budget' && 'Budget Package'}
                      {packageType === 'premium' && 'Premium Package'} x
                    </span>
                    <span className='font-extrabold'>No Fee</span>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className='mb-[1rem]'>
          <div className='inline-flex w-full cursor-pointer items-center gap-0'>
            <Image
              alt=''
              width={22}
              height={22}
              src={'/icons/radio-checked.svg'}
              className='hidden! h-auto w-[1.25rem]'
            />
            <div className='flex flex-1 flex-col space-y-[0.5rem] pl-[0.5rem]'>
              <p className='inline-flex items-center space-x-[0.5rem] text-[0.875rem] tracking-[0.00219rem] text-[#303030]'>
                <span className='leading-[120%] font-medium'>Deposit</span>
                <span className='leading-[150%] font-normal'>
                  (<span className='text-[#F64722]'>*</span>
                  Non-refundable in case of cancellation)
                </span>
              </p>
            </div>
          </div>
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
          <Button
            type='button'
            onClick={handleClickCheckout}
            className='flex h-[4.375rem] w-[10.40625rem] cursor-pointer flex-col items-center justify-center rounded-[0.75rem] bg-[#C83E21] text-white duration-300 ease-out hover:bg-[#EA6A44]'
          >
            <span className='text-[1.125rem] leading-[120%] font-extrabold tracking-[-0.0025rem] uppercase'>
              Check out
            </span>
            {tourSalePercent > 0 && (
              <span className='text-[0.75rem] leading-[130%] tracking-[0.00188rem]'>
                Save{' '}
                {Number(totalPaymentPrice * tourSalePercent).toLocaleString(
                  'en-US',
                )}{' '}
                USD
              </span>
            )}
          </Button>
        </div>
        <div>
          <Caution content='(Price does not include tax and booking fee)' />
        </div>
      </div>
      <div
        className={clsx(
          'fixed inset-0 z-500 flex items-center justify-center transition-all duration-700 ease-out',
          {visible: openConfirmPayment, invisible: !openConfirmPayment},
        )}
      >
        <div
          onClick={() => setOpenConfirmPayment(false)}
          className={clsx(
            'absolute inset-0 z-1 bg-black/25 transition-all duration-700 ease-out',
            {
              'visible opacity-100': openConfirmPayment,
              'invisible opacity-0': !openConfirmPayment,
            },
          )}
        ></div>
        <div
          className={clsx(
            'relative z-2 w-[54.6875rem] transition-all duration-700 ease-out',
            {
              'visible opacity-100': openConfirmPayment,
              'invisible opacity-0': !openConfirmPayment,
            },
          )}
        >
          <div className='xsm:p-[1rem] xsm:rounded-b-none rounded-[1.5rem] border border-solid border-[#EDEDED] bg-white p-[1.5rem] transition-all duration-400 ease-out'>
            <button
              type='button'
              onClick={() => setOpenConfirmPayment(false)}
              className='absolute top-[1.5rem] right-[1.5rem] cursor-pointer'
            >
              <Image
                alt=''
                width={20}
                height={20}
                src={'/icons/x-close.svg'}
                className='h-auto w-[1.25rem]'
              />
            </button>
            <div className='xsm:space-y-[1rem] flex flex-col items-start space-y-[1.25rem]'>
              <p className='self-stretch border-b border-solid border-[#EDEDED] pb-[1rem] text-[1.125rem] leading-[130%] font-extrabold tracking-[0.00281rem] text-[#2E2E2E]'>
                Policy
              </p>
              <div className='xsm:gap-[0.75rem] grid grid-cols-2 gap-[1rem]'>
                <div className='xsm:col-span-full col-span-1 flex flex-col space-y-[0.75rem] self-stretch rounded-[0.75rem] bg-[#F1F8F8] p-[1rem]'>
                  <p className='text-[0.875rem] leading-[120%] font-extrabold tracking-[0.01563rem] uppercase'>
                    {apiData?.package_tour?.policy?.deposit_policy?.title}
                  </p>
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        apiData?.package_tour?.policy?.deposit_policy?.content,
                    }}
                    className={clsx(
                      'text-[0.875rem] leading-[150%] tracking-[0.00219rem] text-[#303030]',
                      styles.depositPolicyContent,
                    )}
                  ></div>
                </div>
                <div className='xsm:col-span-full col-span-1 flex flex-col space-y-[0.75rem] self-stretch rounded-[0.75rem] bg-[rgba(235,229,226,0.32)] p-[1rem]'>
                  <p className='text-[0.875rem] leading-[120%] font-extrabold tracking-[0.01563rem] uppercase'>
                    {apiData?.package_tour?.policy?.no_refund_policy?.title}
                  </p>
                  <div
                    className={clsx(
                      'text-[0.875rem] leading-[150%] tracking-[0.00219rem] text-[#303030]',
                      styles.noRefundPolicyContent,
                    )}
                    dangerouslySetInnerHTML={{
                      __html:
                        apiData?.package_tour?.policy?.no_refund_policy
                          ?.content,
                    }}
                  ></div>
                </div>
              </div>
              <div className='max-h-[5rem] overflow-hidden'>
                <div
                  className='flex flex-col space-y-[0.5rem]'
                  dangerouslySetInnerHTML={{
                    __html: apiData?.package_tour?.policy?.policy_content,
                  }}
                ></div>
              </div>

              <Dialog>
                <DialogTrigger asChild>
                  <div className='cursor-pointer text-[1rem] leading-[130%] font-extrabold tracking-[0.0025rem] text-[#006CE4]'>
                    Policy more
                  </div>
                </DialogTrigger>
                <DialogContent className='xsm:w-full z-999999! w-[56.0625rem]! overflow-hidden rounded-[1.5rem]! border-none! bg-transparent p-0!'>
                  <DialogHeader className='hidden'>
                    <DialogTitle>Checkout Policy Detail</DialogTitle>
                    <DialogDescription></DialogDescription>
                  </DialogHeader>
                  <PolicyTourDialog policy={apiData?.package_tour?.policy} />
                </DialogContent>
              </Dialog>
              <Label className='flex cursor-pointer items-center'>
                <Checkbox
                  className='size-[1.125rem] border-[#25ACAB] data-[state=checked]:border-[#25ACAB] data-[state=checked]:bg-transparent data-[state=checked]:text-[#25ACAB] dark:data-[state=checked]:border-[#25ACAB] dark:data-[state=checked]:bg-transparent'
                  checked={agreePolicyStatus}
                  onCheckedChange={(checked) => {
                    if (typeof checked === 'boolean') {
                      setAgreePolicyStatus(checked)
                    }
                  }}
                />
                <p className='text-[0.875rem] leading-[150%] font-normal tracking-[0.00219rem] text-black'>
                  I agree to the privacy policy and terms of use of Tiem Tour
                </p>
              </Label>

              <Button
                type='submit'
                disabled={!agreePolicyStatus}
                className={clsx(
                  'xsm:h-[3.5rem] flex h-auto cursor-pointer items-center justify-center space-x-[0.625rem] self-stretch rounded-[3.125rem] bg-[#C83E21] px-[2.5rem] py-[1.25rem] transition-colors duration-300 ease-out disabled:bg-[rgba(48,48,48,0.40)] lg:not-disabled:hover:bg-[#EA6A44]',
                )}
              >
                <span className='font-dvn-luckiest-guy h-[0.8125rem] text-[1.125rem] leading-[120%] font-normal text-white'>
                  Deposit payment with onepay
                </span>
                <ICArrowLeft className='h-[1.5rem] w-[1.575rem] shrink-0' />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

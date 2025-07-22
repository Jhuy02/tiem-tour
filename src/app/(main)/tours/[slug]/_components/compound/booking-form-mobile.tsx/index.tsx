'use client'
import LoadingSpinner from '@/app/(main)/tours/[slug]/_components/common/LoadingSpinner'
import CheckoutDrawer from '@/app/(main)/tours/[slug]/_components/compound/booking-form-mobile.tsx/CheckoutDrawer'
import ConfirmDrawer from '@/app/(main)/tours/[slug]/_components/compound/booking-form-mobile.tsx/ConfirmDrawer'
import BookingHomestay from '@/app/(main)/tours/[slug]/_components/compound/booking-homestay'
import BookingOverview from '@/app/(main)/tours/[slug]/_components/compound/booking-overview'
import BookingTransportService from '@/app/(main)/tours/[slug]/_components/compound/booking-transport-service'
import ContactInformation from '@/app/(main)/tours/[slug]/_components/contact'
import Gift from '@/app/(main)/tours/[slug]/_components/gift'
import RentMotorcycles from '@/app/(main)/tours/[slug]/_components/rent-motorcycles'
import {PageContext} from '@/app/(main)/tours/[slug]/context/PageProvider'
import ICArrowLeft from '@/components/icon/ICArrowLeft'
import ICArrowLeftV2 from '@/components/icon/ICArrowLeftV2'
import IconArrowRightV1 from '@/components/icon/IconArrowRightV1'
import {BreadcrumbDynamic} from '@/components/ui/breadcrumb-dynamic'
import {Form} from '@/components/ui/form'
import fetchData from '@/fetches/fetchData'
import useIsMobile from '@/hooks/useIsMobile'
import bookingSchema, {BookingFormValues} from '@/schemas/booking.schema'
import {TourDetailApiResType, TourDetailPackage} from '@/types/tours.interface'
import {zodResolver} from '@hookform/resolvers/zod'
import clsx from 'clsx'
import {format} from 'date-fns'
import {useContext, useEffect, useState, useTransition} from 'react'
import {useForm, useWatch} from 'react-hook-form'

interface BookTourNowProps {
  data: TourDetailPackage
}

export default function BookingFormMobile({data}: BookTourNowProps) {
  const pageContext = useContext(PageContext)
  if (!pageContext) throw new Error('Page context is missing')
  const {data: apiData}: {data: TourDetailApiResType} = pageContext
  const [isPending, setTransition] = useTransition()
  const isMobile = useIsMobile()
  const [showFormBooking, setShowFormBooking] = useState<boolean>(false)
  const [openCheckout, setOpenCheckout] = useState<boolean>(false)
  const [openConfirm, setOpenConfirm] = useState<boolean>(false)
  const [totalPayment, setTotalPayment] = useState<number>(0)

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      schedule_start: new Date(),
      // Data customer
      adults: 0,
      children: 0,
      infants: 0,
      // Data tour
      // Deposit and Agree
      riders: data?.motorbike_package.saving?.map((item) => ({
        name: item?.title,
        price: Number(item?.price),
        quantity: 0,
      })),
      motorcycles: data?.motorbike_rents?.motorbike_rent_list?.map((motor) => ({
        name: motor?.title,
        id: motor?.id,
        price: motor?.price,
        quantity: 0,
      })),
      gifts: '',
      yourName: '',
      yourPhone: '',
      yourEmail: '',
      yourMessage: '',
      outboundTrip: {
        type: 'use_our_bus',
        data: {
          pickUpLocation: apiData?.package_tour?.pick_up_location[0]?.location,
          pickUpVehicle:
            apiData?.package_tour?.main_car_pick_up_data[0]?.id?.toString(),
          pickUpAddress:
            apiData?.package_tour?.pick_up_location[0]?.detail_location,
          arrivalLocation:
            apiData?.acf_fields?.transport_service?.outbound_trip
              ?.use_our_bus_service?.arrival_location,
          arrivalTime:
            apiData?.acf_fields?.transport_service?.outbound_trip
              ?.use_our_bus_service?.arrival_time,
          arrivalAddress: '',
        },
      },
      returnTrip: {
        type: 'use_our_bus',
        data: {
          pickUpLocation:
            apiData?.acf_fields?.transport_service?.return_trip
              ?.use_our_bus_service?.pickup_location,
          pickUpVehicle:
            apiData?.package_tour?.main_car_pick_up_data[0]?.id?.toString(),
          pickUpAddress:
            apiData?.acf_fields?.transport_service?.return_trip
              ?.use_our_bus_service?.pickup_address,
          arrivalLocation: apiData.package_tour.arrival_use_bus[0].arrival_city,
          arrivalTime: apiData.package_tour.arrival_use_bus[0].arrival_time,
          arrivalAddress:
            apiData.package_tour.arrival_use_bus[0].arrival_address_,
        },
      },
    },
  })
  function handleOpenBookingForm() {
    setShowFormBooking(true)
  }
  const onSubmit = async (values: BookingFormValues) => {
    const formData = {
      tour_id: apiData?.id,
      tour_type: values?.tour_type === 'motorbike_tour' ? 'motorbike' : 'car',
      package: values?.package,
      riders: [
        {
          type: 'easy_rider',
          quantity: Number(values?.riders[0].quantity),
        },
        {
          type: 'ride_by_yourself',
          quantity: Number(values?.riders[1].quantity),
        },
        {
          type: 'behind_after',
          quantity: Number(values?.riders[2].quantity),
        },
      ],
      adults: values?.adults,
      children: values?.children,
      infants: values?.infants,
      homestay_package: values?.package,
      outbound_trip:
        values?.outboundTrip?.data &&
        'pickUpVehicle' in values.outboundTrip.data
          ? Number(
              (values.outboundTrip.data as {pickUpVehicle: string})
                .pickUpVehicle,
            )
          : undefined,
      return_trip:
        values?.returnTrip?.data && 'pickUpVehicle' in values.returnTrip.data
          ? Number(
              (values.returnTrip.data as {pickUpVehicle: string}).pickUpVehicle,
            )
          : undefined,
      rent_motorcycles: values.motorcycles.map(({id, quantity}) => ({
        motorcycle_id: id,
        quantity: quantity,
      })),
      deposit: values?.deposit === 'deposit',
      schedule_start: format(values.schedule_start, 'yyyy-MM-dd'),
      schedule_end: format(values.schedule_end, 'yyyy-MM-dd'),
      duration: apiData?.taxonomies?.duration[0]?.name,
      email: values?.yourEmail,
      customer_name: values?.yourName,
      phone: values?.yourPhone,
      note: values?.yourMessage,
    }

    setTransition(async () => {
      const response = await fetchData({
        method: 'POST',
        api: 'custom/v1/create-order',
        option: {
          body: JSON.stringify(formData),
        },
      })
      if (response?.redirect_url) {
        window.location.href = response.redirect_url
      } else {
        console.error('Không nhận được đường dẫn thanh toán từ server')
      }
    })
  }

  console.log('ERRORS: ', form.formState.errors)

  const scheduleStart = useWatch({
    control: form.control,
    name: 'schedule_start',
  })
  const scheduleEnd = useWatch({
    control: form.control,
    name: 'schedule_end',
  })

  const handleUpdateTotalPayment = (total: number) => {
    setTotalPayment(total)
  }

  const handleClickCheckout = async () => {
    const isValid = await form.trigger() // validate toàn bộ form
    if (isValid) {
      setOpenConfirm(true)
    }
  }

  useEffect(() => {
    if (showFormBooking) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [showFormBooking])

  return (
    isMobile && (
      <>
        <LoadingSpinner loading={isPending} />
        <div className='font-trip-sans fixed bottom-0 left-0 z-50 w-full'>
          <div className='xsm:flex hidden flex-col space-y-[0.625rem] bg-white px-[1.25rem] py-[0.75rem] shadow-[0px_-4px_24px_0px_rgba(0,0,0,0.08)]'>
            <div className='flex items-start justify-between'>
              <div className='flex flex-1 flex-col items-start'>
                <p className='text-[1rem] leading-[120%] font-medium tracking-[0.0025rem] text-[#303030]'>
                  From {scheduleStart && format(scheduleStart, 'dd MMM')} -{' '}
                  {scheduleEnd && format(scheduleEnd, 'dd MMM')}
                </p>
                <span className='text-[0.75rem] leading-[130%] font-normal tracking-[0.00188rem] text-[rgba(48,48,48,0.80)]'>
                  Price for {Number(apiData?.package_tour?.duration_number)}{' '}
                  night
                </span>
              </div>
              <div className='flex flex-1 flex-col items-end'>
                <p className='text-[1rem] leading-[120%] font-medium tracking-[0.0025rem] text-[#303030]'>
                  {totalPayment.toLocaleString('en-US')} USD
                </p>
                <span className='text-[0.75rem] leading-[130%] font-normal tracking-[0.00188rem] text-[rgba(48,48,48,0.80)]'>
                  per adult
                </span>
              </div>
            </div>
            <div
              onClick={handleOpenBookingForm}
              className='inline-flex h-[3.125rem] w-full items-center justify-center space-x-[0.625rem] rounded-[3.125rem] bg-[#C83E21]'
            >
              <span className='font-dvn-luckiest-guy h-[0.8125rem] text-[1.125rem] leading-[120%] text-white'>
                Book now
              </span>
              <ICArrowLeft className='h-[1.5rem] w-[1.575rem] shrink-0' />
            </div>
          </div>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className={clsx(
              'rounded-0 fixed inset-0 z-100 bg-white transition-all duration-300 ease-in-out',
              {
                'translate-x-0': showFormBooking,
                'translate-x-full': !showFormBooking,
              },
            )}
          >
            <div className='hidden_scroll h-full overflow-y-auto'>
              <div className='relative mb-[0.9375rem]! flex h-[3.125rem] shrink-0 items-center justify-center border-b border-solid bg-white shadow-[2px_6px_12px_0px_rgba(0,0,0,0.08)]'>
                <button
                  type='button'
                  onClick={() => setShowFormBooking(false)}
                  className='absolute top-1/2 left-[1.25rem]! translate-x-0! -translate-y-1/2'
                >
                  <ICArrowLeftV2 className='h-[1.5rem] w-[1.5rem]' />
                </button>
                <p className='text-[1rem] leading-[120%] font-medium tracking-[0.0025rem] text-[#2E2E2E]'>
                  Book tour now
                </p>
              </div>
              <BreadcrumbDynamic
                breadcrumbs={[
                  {label: 'Home', href: '/'},
                  {label: 'Tours', href: '/tours'},
                  {
                    label: apiData.title,
                    href: '',
                  },
                ]}
                className='xsm:[&_svg]:text-[#303030]/40 xsm:block last hidden'
              />
              <div className='flex w-full shrink-0 flex-col space-y-[0.5rem]'>
                <BookingOverview />
                <BookingHomestay />
                <BookingTransportService />
                <RentMotorcycles motorcycles={data?.motorbike_rents} />
                <Gift gifts={data?.gift} />
                <ContactInformation />
              </div>
              <div className='mt-[0.75rem] p-[1rem]'>
                <button
                  type='button'
                  onClick={handleClickCheckout}
                  className='flex h-[3.125rem] w-full items-center justify-center gap-[0.625rem] rounded-[3.125rem] bg-[#C83E21] px-[2.5rem] py-[1.5rem] hover:bg-[#C83E21]'
                >
                  <p className='font-dvn-luckiest-guy h-[0.8125rem] text-[1.125rem] leading-[120%] text-white'>
                    Confirm your booking
                  </p>
                  <IconArrowRightV1 />
                </button>
              </div>
            </div>
            <div
              onClick={() => setOpenCheckout(false)}
              className={clsx(
                'fixed inset-0 z-9998 bg-black/25 transition-all duration-400 ease-out',
                {
                  'invisible opacity-0': !openCheckout,
                  'visible opacity-100': openCheckout,
                },
              )}
            ></div>
            <div
              className={clsx(
                'fixed bottom-0 left-0 z-9999 w-full transition-all duration-400 ease-out',
                {
                  'invisible translate-y-full': !openCheckout,
                  'visible translate-y-0': openCheckout,
                },
              )}
            >
              <CheckoutDrawer
                onUpdateTotalPayment={handleUpdateTotalPayment}
                onOpenConfirmDrawer={() => setOpenConfirm(true)}
                onCloseCheckoutDrawer={() => setOpenCheckout(false)}
              />
            </div>
            <div
              onClick={() => setOpenConfirm(false)}
              className={clsx(
                'fixed inset-0 z-99998 bg-black/25 transition-all duration-400 ease-out',
                {
                  'invisible opacity-0': !openConfirm,
                  'visible opacity-100': openConfirm,
                },
              )}
            ></div>
            <div
              className={clsx(
                'fixed bottom-0 left-0 z-99999 w-full transition-all duration-400 ease-out',
                {
                  'invisible translate-y-full': !openConfirm,
                  'visible translate-y-0': openConfirm,
                },
              )}
            >
              <ConfirmDrawer
                onCloseConfirmDrawer={() => setOpenConfirm(false)}
              />
            </div>
          </form>
        </Form>
      </>
    )
  )
}

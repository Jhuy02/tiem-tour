'use client'
import LoadingSpinner from '@/app/(main)/tours/[slug]/_components/common/LoadingSpinner'
import BookingCheckout from '@/app/(main)/tours/[slug]/_components/compound/booking-checkout'
import BookingHomestay from '@/app/(main)/tours/[slug]/_components/compound/booking-homestay'
import BookingOverview from '@/app/(main)/tours/[slug]/_components/compound/booking-overview'
import BookingTransportService from '@/app/(main)/tours/[slug]/_components/compound/booking-transport-service'
import ContactInformation from '@/app/(main)/tours/[slug]/_components/contact'
import Gift from '@/app/(main)/tours/[slug]/_components/gift'
import Policy from '@/app/(main)/tours/[slug]/_components/policy'
import RentMotorcycles from '@/app/(main)/tours/[slug]/_components/rent-motorcycles'
import {PageContext} from '@/app/(main)/tours/[slug]/context/PageProvider'
import {Form} from '@/components/ui/form'
import fetchData from '@/fetches/fetchData'
import useIsMobile from '@/hooks/useIsMobile'
import bookingSchema, {BookingFormValues} from '@/schemas/booking.schema'
import {TourDetailApiResType, TourDetailPackage} from '@/types/tours.interface'
import {zodResolver} from '@hookform/resolvers/zod'
import clsx from 'clsx'
import {format} from 'date-fns'
import {useContext, useTransition} from 'react'
import {useForm} from 'react-hook-form'

interface BookTourNowProps {
  data: TourDetailPackage
}

export default function BookingForm({data}: BookTourNowProps) {
  const pageContext = useContext(PageContext)
  if (!pageContext) throw new Error('Page context is missing')
  const {data: apiData}: {data: TourDetailApiResType} = pageContext
  const [isPending, setTransition] = useTransition()
  const isMobile = useIsMobile()
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      schedule_start: new Date(),
      adults: 0,
      children: 0,
      infants: 0,
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
    mode: 'onChange',
  })

  const onSubmit = async (values: BookingFormValues) => {
    console.log('Gọi hàm onsubmit')
    // const createTourDataForm = {
    //   tour_id: apiData?.id,
    //   tour_type: values?.tour_type,
    //   package: values?.package,
    //   riders: [
    //     {
    //       type: 'easy_rider',
    //       quantity: Number(values?.riders[0].quantity),
    //     },
    //     {
    //       type: 'ride_by_yourself',
    //       quantity: Number(values?.riders[1].quantity),
    //     },
    //     {
    //       type: 'behind_after',
    //       quantity: Number(values?.riders[2].quantity),
    //     },
    //   ],
    //   adults: values.adults,
    //   children: values.children,
    //   infants: values.infants,
    //   homestay_package: values?.package,
    //   rent_motorcycles: values?.motorcycles,
    //   deposit: values.deposit === 'deposit',
    //   schedule_start: format(values.schedule_start, 'yyyy-MM-dd'),
    //   schedule_end: format(values.schedule_end, 'yyyy-MM-dd'),
    //   duration: apiData.taxonomies.duration[0].name,
    //   email: values.yourEmail,
    //   customer_name: values?.yourName,
    //   phone: values.yourPhone,
    //   note: values.yourMessage,
    //   outboundTrip: {
    //     type: values.outboundTrip.type,
    //     data: {
    //       ...values.outboundTrip.data,
    //       pickUpVehicle: Number(values?.outboundTrip?.data?.pickUpVehicle),
    //     },
    //   },
    //   returnTrip: {
    //     type: values.returnTrip.type,
    //     data: {
    //       ...values.returnTrip.data,
    //       pickUpVehicle: Number(values?.returnTrip?.data?.pickUpVehicle),
    //     },
    //   },
    // }
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
          type: 'seat_behind_friend',
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
      deposit: true,
      schedule_start: format(values.schedule_start, 'yyyy-MM-dd'),
      schedule_end: format(values.schedule_end, 'yyyy-MM-dd'),
      duration: apiData?.taxonomies?.duration[0]?.name,
      email: values?.yourEmail,
      customer_name: values?.yourName,
      phone: values?.yourPhone,
      note: values?.yourMessage,
    }
    console.log('Form data: ', formData)
    // setTransition(async () => {
    //   const response = await fetchData({
    //     method: 'POST',
    //     api: 'custom/v1/create-order',
    //     option: {
    //       body: JSON.stringify(formData),
    //     },
    //   })
    //   if (response?.redirect_url) {
    //     window.location.href = response.redirect_url
    //   } else {
    //     console.error('Không nhận được đường dẫn thanh toán từ server')
    //   }
    // })
  }

  return !isMobile ? (
    <>
      <LoadingSpinner loading={isPending} />
      <section
        className={clsx(
          'xsm:fixed xsm:inset-0 xsm:z-150 xsm:transition-transform xsm:duration-300 xsm:ease-in-out xsm:bg-white xsm:hidden mx-auto flex max-w-[87.5rem] flex-col space-y-[1.5rem] px-0 py-[3.125rem]',
        )}
      >
        <h2 className='font-dvn-luckiest-guy text-[3.125rem] leading-[130%] font-black text-[#3B3943]'>
          BookTourNow
        </h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className='relative flex justify-between'>
              <div className='flex w-[54.6875rem] shrink-0 flex-col space-y-[1.5rem]'>
                <BookingOverview />
                <BookingHomestay />
                <BookingTransportService />
                <RentMotorcycles motorcycles={data?.motorbike_rents} />
                <Gift gifts={data?.gift} />
                <ContactInformation />
                <Policy policy={data?.policy} />
              </div>
              <div className='w-[28.6875rem] shrink-0'>
                <BookingCheckout />
              </div>
            </div>
          </form>
        </Form>
      </section>
    </>
  ) : (
    <></>
  )
}

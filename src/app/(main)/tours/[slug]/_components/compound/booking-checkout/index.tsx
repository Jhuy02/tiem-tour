'use client'

import Caution from '@/app/(main)/tours/[slug]/_components/common/Caution'
import {PageContext} from '@/app/(main)/tours/[slug]/context/PageProvider'
import {FormField, FormItem, FormMessage} from '@/components/ui/form'
import {Label} from '@/components/ui/label'
import {RadioGroup, RadioGroupItem} from '@/components/ui/radio-group'
import {BookingFormValues} from '@/schemas/booking.schema'
import {TourDetailApiResType} from '@/types/tours.interface'
import {format} from 'date-fns'
import Image from 'next/image'
import {useContext, useMemo} from 'react'
import {useFormContext, useWatch} from 'react-hook-form'

export default function BookingCheckout() {
  const pageContext = useContext(PageContext)
  if (!pageContext) throw new Error('Page context is missing')
  const {data: apiData}: {data: TourDetailApiResType} = pageContext
  const {watch, control} = useFormContext<BookingFormValues>()

  // Lấy dữ liệu từ form
  const scheduleStart: Date | null = watch('schedule_start')
  const scheduleEnd: Date | null = watch('schedule_end')

  const adults = useWatch({control, name: 'adults'})
  const children = useWatch({control, name: 'children'})
  const infants = useWatch({control, name: 'infants'})

  const tourType = useWatch({control, name: 'tour_type'})
  const tourPackage = useWatch({control, name: 'package'})

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

  return (
    <div className='font-trip-sans sticky top-[0.5rem] h-fit rounded-[1.5rem] border border-solid border-[#EDEDED] bg-white p-[1.25rem]'>
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
                  <span className=''>0</span> USD
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
                <span className='font-extrabold'>Outbond trip</span>
                <span>-</span>
                <span className='font-normal'>Limousine bus</span>
              </p>
              <p className='flex items-center space-x-[0.25rem] text-right text-[0.875rem] leading-[150%] font-bold tracking-[0.00219rem] text-[#303030]'>
                <span>300.000</span>
                <span>USD</span>
              </p>
            </div>
            <div className='flex items-center justify-between'>
              <p className='flex items-center space-x-[0.25rem] text-[0.875rem] leading-[120%] tracking-[0.01563rem] text-[rgba(48,48,48,0.80)]'>
                <span className='font-extrabold'>Return trip</span>
                <span>-</span>
                <span className='font-normal'>Limousine bus</span>
              </p>
              <p className='flex items-center space-x-[0.25rem] text-right text-[0.875rem] leading-[150%] font-bold tracking-[0.00219rem] text-[#303030]'>
                <span>300.000</span>
                <span>USD</span>
              </p>
            </div>
          </div>
          {/* Rent motorcycles */}
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
          {/* Homestay */}
          <div className='flex flex-col space-y-[0.25rem]'>
            <p className='text-[1rem] leading-[120%] font-bold tracking-[0.0025rem] text-[#3B3943]'>
              Rent motorcycles
            </p>
            <div className='flex items-center justify-between'>
              <p className='flex items-center space-x-[0.25rem] text-[0.875rem] leading-[120%] tracking-[0.01563rem] text-[rgba(48,48,48,0.80)]'>
                <span className='font-normal'>Saving Package x</span>
                <span className='font-extrabold'>No Fee</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='mb-[1rem]'>
        <FormField
          control={control}
          name='deposit'
          render={({field}) => (
            <FormItem>
              <RadioGroup
                className=''
                value={'deposit'}
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
                    src={'/icons/check_default.svg'}
                    className='hidden! h-auto w-[1.25rem] peer-data-[state="unchecked"]:block!'
                  />
                  <Image
                    alt=''
                    width={22}
                    height={22}
                    src={'/icons/check_active-v1.svg'}
                    className='hidden! h-auto w-[1.25rem] peer-data-[state="checked"]:block!'
                  />
                  <div className='flex flex-1 flex-col space-y-[0.5rem] pl-[0.5rem]'>
                    <p className='inline-flex items-center space-x-[0.5rem] text-[0.875rem] tracking-[0.00219rem] text-[#303030]'>
                      <span className='leading-[120%] font-medium'>
                        Deposit
                      </span>
                      <span className='leading-[150%] font-normal'>
                        (<span className='text-[#F64722]'>*</span>Non-refundable
                        in case of cancellation)
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
          <p className='text-[1.125rem] font-extrabold tracking-[0.00281rem] text-[#303030]'>
            21.316.000
          </p>
          <p className='flex items-center space-x-[0.25rem]'>
            <span className='text-[0.875rem] leading-[150%] font-normal tracking-[0.00219rem] text-[rgba(48,48,48,0.80)] line-through'>
              29.200.000
            </span>
            <span className='flex h-[1.25rem] w-fit items-center justify-center rounded-[1rem] bg-[#115A46]/60 px-[0.375rem] py-[0.1875rem] text-[0.75rem] font-bold text-white'>
              -27%
            </span>
          </p>
        </div>
        <button>Submit</button>
        {/* <Dialog
          open={isDialogOpen}
          onOpenChange={setDialogOpen}
        >
          <DialogTrigger>
            <button
              type='button'
              className='flex h-[4.375rem] w-[10.40625rem] cursor-pointer flex-col items-center justify-center rounded-[0.75rem] bg-[#C83E21] text-white'
            >
              <span className='text-[1.125rem] leading-[120%] font-extrabold tracking-[-0.0025rem] uppercase'>
                Check out
              </span>
              <span className='text-[0.75rem] leading-[130%] tracking-[0.00188rem]'>
                Save 3.078.000 USD
              </span>
            </button>
          </DialogTrigger>
          <DialogContent className='z-100 max-w-[54.6875rem]! rounded-[0.75rem]! border-none! bg-transparent p-0! shadow-none!'>
            <DialogHeader className='hidden'>
              <DialogTitle>Checkout Policy</DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader>
            <CheckoutPolicy />
          </DialogContent>
        </Dialog> */}
      </div>
      <div>
        <Caution content='(Price does not include tax and booking fee)' />
      </div>
    </div>
  )
}

'use client'

import Caution from '@/app/(main)/tours/[slug]/_components/common/Caution'
import DatePickerField from '@/app/(main)/tours/[slug]/_components/form-controls/DatePickerField'
import SelectRiderField from '@/app/(main)/tours/[slug]/_components/form-controls/SelectRiderField'
import SelectTravelerField from '@/app/(main)/tours/[slug]/_components/form-controls/SelectTravelerField'
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import {Label} from '@/components/ui/label'
import {RadioGroup, RadioGroupItem} from '@/components/ui/radio-group'
import {PackageTypeList, TourTypeList} from '@/constants/mockApi'
import {BookingFormValues} from '@/schemas/booking.schema'
import clsx from 'clsx'
import Image from 'next/image'
import {useFormContext, useFormState, useWatch} from 'react-hook-form'
import styles from './styles.module.css'
import {useContext, useEffect, useMemo} from 'react'
import {addDays} from 'date-fns'
import {PageContext} from '@/app/(main)/tours/[slug]/context/PageProvider'
import {TourDetailApiResType} from '@/types/tours.interface'
import TourPackageInfo from '@/app/(main)/tours/[slug]/_components/compound/booking-overview/TourPackageInfo'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import OpenPolicyTourBtn from '@/app/(main)/tours/[slug]/_components/compound/booking-overview/OpenPolicyTourBtn'

export default function BookingOverview() {
  const pageContext = useContext(PageContext)
  if (!pageContext) throw new Error('Page context is missing')
  const {data: apiData}: {data: TourDetailApiResType} = pageContext

  const {control, trigger, setValue} = useFormContext<BookingFormValues>()
  const {errors} = useFormState<BookingFormValues>()
  const scheduleStart = useWatch({control, name: 'schedule_start'})
  const tourType = useWatch({control, name: 'tour_type'})
  const tourPackage = useWatch({control, name: 'package'})

  const watchedRiders = useWatch({
    control,
    name: 'riders',
  })

  const packageInfo = useMemo(() => {
    const pkg = apiData.package_tour
    if (tourType && tourPackage) {
      return (
        pkg[`${tourType === 'car_tour' ? 'car' : 'motorbike'}_package`]?.[
          tourPackage
        ] || []
      )
    }
    return pkg.motorbike_package.saving || []
  }, [apiData.package_tour, tourType, tourPackage])

  useEffect(() => {
    if (scheduleStart) {
      const duration = Number(apiData.package_tour.duration_number)
      const scheduleEnd = addDays(new Date(scheduleStart), duration)
      setValue('schedule_end', scheduleEnd)
    }
  }, [apiData.package_tour.duration_number, scheduleStart, setValue])

  useEffect(() => {
    if (tourPackage && tourType) {
    } else {
    }
  }, [tourPackage, tourType])

  useEffect(() => {
    trigger('riders') // ép validate lại refine
  }, [watchedRiders, trigger])

  return (
    <div className='xsm:border-none xsm:rounded-0 xsm:p-[0.75rem] rounded-[1.5rem] border border-solid border-[#ededed] bg-white p-[1.5rem]'>
      <div className='xsm:flex-col xsm:py-[1rem] xsm:gap-[0.625rem] mb-[1rem] flex items-center justify-between border-b border-solid border-[#EDEDED] pb-[0.625rem]'>
        {apiData?.title && (
          <h3
            dangerouslySetInnerHTML={{__html: apiData?.title}}
            className='font-dvn-luckiest-guy xsm:mr-0 mr-[1rem] text-[1.125rem] leading-[120%] tracking-[0.0125rem] uppercase'
          ></h3>
        )}

        <OpenPolicyTourBtn />
      </div>
      <div className='font-trip-sans flex flex-col space-y-[1rem]'>
        {/* Date Picker */}
        <div className='xsm:flex-wrap xsm:space-x-0 xsm:space-y-[0.75rem] flex items-start space-x-[1rem]'>
          <div className='xsm:w-full xsm:basis-full flex-1'>
            <FormField
              control={control}
              name='schedule_start'
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <DatePickerField
                      label='Start day'
                      required
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className='font-trip-sans pl-[0.125rem] text-[0.75rem] leading-[120%] font-bold tracking-[0.00188rem] text-[#EA3434]' />
                </FormItem>
              )}
            />
          </div>
          <div className='xsm:w-full xsm:basis-full flex-1'>
            <FormField
              control={control}
              name='schedule_end'
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <DatePickerField
                      label='End day'
                      required
                      disabled
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className='font-trip-sans pl-[0.125rem] text-[0.75rem] leading-[120%] font-bold tracking-[0.00188rem] text-[#EA3434]' />
                </FormItem>
              )}
            />
          </div>
        </div>
        {/* Select Travelers */}
        <div className=''>
          <p className='mb-[0.75rem] text-[0.875rem] leading-[120%] font-medium tracking-[0.00219rem] text-[#2E2E2E]'>
            Select Travelers
          </p>
          <div className='xsm:gap-[0.25rem] xsm:p-[0.25rem] xsm:rounded-[1rem] xsm:bg-[rgba(205,205,205,0.32)] grid grid-cols-2 gap-[0.75rem]'>
            <div className='xsm:col-span-full col-span-1'>
              <FormField
                control={control}
                name='adults'
                render={({field}) => (
                  <FormItem>
                    <SelectTravelerField
                      label='Adults +12 ages (100% price)'
                      {...field}
                    />
                    <FormMessage className='font-trip-sans pl-[0.125rem] text-[0.75rem] leading-[120%] font-bold tracking-[0.00188rem] text-[#EA3434]' />
                  </FormItem>
                )}
              />
            </div>
            <div className='xsm:col-span-full col-span-1'>
              <FormField
                control={control}
                name='children'
                render={({field}) => (
                  <FormItem>
                    <SelectTravelerField
                      label='Children 5-8 ages (75% Price)'
                      {...field}
                    />
                    <FormMessage className='font-trip-sans pl-[0.125rem] text-[0.75rem] leading-[120%] font-bold tracking-[0.00188rem] text-[#EA3434]' />
                  </FormItem>
                )}
              />
            </div>
            <div className='col-span-full'>
              <FormField
                control={control}
                name='infants'
                render={({field}) => (
                  <FormItem>
                    <SelectTravelerField
                      label='Children under 4 ages (Free)'
                      {...field}
                    />
                    <FormMessage className='font-trip-sans pl-[0.125rem] text-[0.75rem] leading-[120%] font-bold tracking-[0.00188rem] text-[#EA3434]' />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>
        <Accordion
          defaultValue='item-1'
          type='single'
          collapsible
          className='xsm:p-[1rem] rounded-[1.5rem] border border-solid border-[#EDEDED] bg-white p-[1.5rem]'
        >
          <AccordionItem
            value='item-1'
            className='w-full border-none'
          >
            <AccordionTrigger className='mb-[1rem] w-full cursor-pointer rounded-none border-b border-solid border-[#EDEDED] pb-[1rem] hover:no-underline'>
              <p className='w-full text-[1rem] leading-[130%] font-extrabold tracking-[0.0025rem] text-[#2E2E2E]'>
                Select tour type
              </p>
            </AccordionTrigger>
            <AccordionContent className='border-none p-0'>
              <div className='mb-[1rem]'>
                <FormField
                  control={control}
                  name='tour_type'
                  render={({field}) => (
                    <FormItem>
                      <RadioGroup
                        className=''
                        value={field.value}
                        onValueChange={field.onChange}
                        name={field.name}
                      >
                        <div className='xsm:flex-wrap flex h-auto w-full items-center gap-[0.75rem] bg-transparent shadow-none!'>
                          {TourTypeList.map((item, index) => {
                            return (
                              <div
                                key={index}
                                className='xsm:basis-full flex h-[3.375rem] flex-1 items-center justify-between rounded-[0.75rem] bg-[#F6F6F6]! shadow-none!'
                              >
                                <Label className='inline-flex h-full w-full cursor-pointer items-center justify-between px-[0.75rem] py-[1rem]'>
                                  <p className='inline-flex items-center text-[0.875rem] leading-[120%] font-medium tracking-[0.00219rem] text-[#3B3943]'>
                                    <span>{item.name}</span>
                                    {item.popular && (
                                      <span className='ml-[0.5rem] inline-block rounded-full border-[0.8px] border-solid border-[#25ACAB] bg-[#F3F9F9] px-[0.5rem] py-[0.25rem] text-[0.75rem] tracking-[0.00188rem] text-[#19C2C2]'>
                                        Popular
                                      </span>
                                    )}
                                  </p>
                                  <RadioGroupItem
                                    value={item.slug}
                                    className='peer sr-only'
                                  />
                                  <Image
                                    alt=''
                                    width={22}
                                    height={22}
                                    src={'/icons/radio-unchecked.svg'}
                                    className='xsm:w-[1.125rem] hidden! h-auto w-[1.375rem] peer-data-[state="unchecked"]:block!'
                                  />
                                  <Image
                                    alt=''
                                    width={22}
                                    height={22}
                                    src={'/icons/radio-checked.svg'}
                                    className='xsm:w-[1.125rem] hidden! h-auto w-[1.375rem] peer-data-[state="checked"]:block!'
                                  />
                                </Label>
                              </div>
                            )
                          })}
                        </div>
                      </RadioGroup>
                      <FormMessage className='font-trip-sans pl-[0.125rem] text-[0.75rem] leading-[120%] font-bold tracking-[0.00188rem] text-[#EA3434]' />
                    </FormItem>
                  )}
                />
              </div>
              <div
                className={clsx(
                  'xsm:p-[0.75rem] rounded-[0.75rem] bg-[#F3F9F9] p-[1rem]',
                  {
                    'pointer-events-none opacity-40': !tourType,
                    'pointer-events-auto opacity-100': tourType,
                  },
                )}
              >
                <FormField
                  control={control}
                  name='package'
                  render={({field}) => (
                    <FormItem>
                      <RadioGroup
                        className='xsm:space-x-0 xsm:space-y-[1.125rem] xsm:flex-wrap flex items-center gap-0 space-x-[0.75rem]'
                        value={field.value}
                        onValueChange={field.onChange}
                        name={field.name}
                      >
                        {Array.isArray(PackageTypeList) &&
                          PackageTypeList?.map((item, index) => {
                            return (
                              <div
                                key={index}
                                className='xsm:basis-full xsm:p-0 xsm:h-auto flex h-[3.375rem] flex-1 items-center justify-between rounded-[0.75rem] bg-transparent px-[0.75rem] py-[1rem]'
                              >
                                <Label className='xsm:h-auto xsm:p-0 inline-flex h-[2.875rem] w-full cursor-pointer items-center space-x-[0.5rem] p-[0.75rem]'>
                                  <RadioGroupItem
                                    value={item?.slug}
                                    className='peer sr-only'
                                  />
                                  <Image
                                    alt=''
                                    width={22}
                                    height={22}
                                    src={'/icons/radio-unchecked.svg'}
                                    className='xsm:w-[1.125rem] hidden! h-auto w-[1.375rem] peer-data-[state="unchecked"]:block!'
                                  />
                                  <Image
                                    alt=''
                                    width={22}
                                    height={22}
                                    src={'/icons/radio-checked.svg'}
                                    className='xsm:w-[1.125rem] hidden! h-auto w-[1.375rem] peer-data-[state="checked"]:block!'
                                  />
                                  <p className='inline-flex items-center text-[0.875rem] leading-[120%] font-medium tracking-[0.00219rem] text-[#3B3943]'>
                                    {item?.name}
                                  </p>
                                </Label>
                              </div>
                            )
                          })}
                      </RadioGroup>
                      <FormMessage className='font-trip-sans pl-[0.125rem] text-[0.75rem] leading-[120%] font-bold tracking-[0.00188rem] text-[#EA3434]' />
                    </FormItem>
                  )}
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className='flex flex-col gap-[0.75rem]'>
          {/* Info Rider */}
          <div className='xsm:p-0 xsm:bg-transparent xsm:gap-[0.75rem] grid grid-cols-3 items-start gap-[2rem] rounded-[0.5rem] bg-[rgba(235,229,226,0.32)] p-[1.25rem]'>
            {!(tourType && tourPackage) &&
              apiData?.package_tour?.motorbike_package?.saving?.map(
                (item, index) => {
                  return (
                    <TourPackageInfo
                      key={index}
                      title={item.title}
                      price={Number(item.price)}
                      note={item.note}
                    />
                  )
                },
              )}
            {tourType === 'motorbike_tour' &&
              tourPackage &&
              apiData?.package_tour?.motorbike_package?.[tourPackage]?.map(
                (item, index) => {
                  return (
                    <TourPackageInfo
                      key={index}
                      title={item.title}
                      price={Number(item.price)}
                      note={item.note}
                    />
                  )
                },
              )}
            {tourType === 'car_tour' &&
              tourPackage &&
              apiData?.package_tour?.car_package?.[tourPackage]?.map(
                (item, index) => {
                  return (
                    <TourPackageInfo
                      key={index}
                      title={item.title}
                      price={Number(item.price)}
                      note={item.note}
                    />
                  )
                },
              )}
          </div>
          {/* Tour Includes and Tour Excludes */}
          <div className='xsm:space-x-0 xsm:flex-0 xsm:flex-wrap xsm:space-y-[0.75rem] flex items-start space-x-[1rem]'>
            {/* Tour Includes */}
            <div className='xsm:basis-full flex-1 self-stretch rounded-[0.75rem] bg-[#F1F8F8] p-[1rem]'>
              <p className='mb-[0.75rem] border-b border-solid border-[#EDEDED] pb-[0.75rem] text-[0.875rem] leading-[120%] font-extrabold tracking-[0.01563rem] text-[#303030] uppercase'>
                Tour included:
              </p>
              <div
                dangerouslySetInnerHTML={{
                  __html: apiData?.acf_fields?.note_tour?.tour_included ?? '',
                }}
                className={clsx(
                  'text-[0.875rem] leading-[150%] tracking-[0.00219rem] text-[#303030]',
                  styles.tourIncludedContent,
                )}
              ></div>
            </div>

            {/* Tour Exclude */}
            <div className='xsm:basis-full flex-1 self-stretch rounded-[0.75rem] bg-[rgba(235,229,226,0.32)] p-[1rem]'>
              <p className='mb-[0.75rem] border-b border-solid border-[#EDEDED] pb-[0.75rem] text-[0.875rem] leading-[120%] font-extrabold tracking-[0.01563rem] text-[#303030] uppercase'>
                Tour excludes:
              </p>
              <div
                dangerouslySetInnerHTML={{
                  __html: apiData?.acf_fields?.note_tour?.tour_excludes ?? '',
                }}
                className={clsx(
                  'text-[0.875rem] leading-[150%] tracking-[0.00219rem] text-[#303030]',
                  styles.tourExcludesContent,
                )}
              ></div>
            </div>
          </div>
          {/* Select Rider */}
          <div className='xsm:space-y-[0.25rem] xsm:p-[0.25rem] xsm:rounded-[1rem] xsm:bg-[rgba(205,205,205,0.32)] flex flex-col space-y-[1rem]'>
            {packageInfo.map((item, index) => {
              return (
                <div
                  key={index}
                  className='xsm:not-last:pb-0 not-last:border-b not-last:border-solid not-last:border-[#EDEDED] not-last:pb-[1rem]'
                >
                  <FormField
                    control={control}
                    name={`riders.${index}.quantity`}
                    render={({field}) => (
                      <FormItem>
                        <SelectRiderField
                          label={item?.title}
                          unitPrice={Number(item?.price)}
                          {...field}
                        />
                        <FormMessage className='font-trip-sans pl-[0.125rem] text-[0.75rem] leading-[120%] font-bold tracking-[0.00188rem] text-[#EA3434]' />
                      </FormItem>
                    )}
                  />
                </div>
              )
            })}
            {errors.riders?.message && (
              <p className='font-trip-sans pl-[0.125rem] text-[0.75rem] leading-[120%] font-bold tracking-[0.00188rem] text-[#EA3434]'>
                {errors.riders?.message}
              </p>
            )}
          </div>
          {/* Caution */}
          <div className='xsm:hidden'>
            <Caution content='NOTE: if you’re traveling alone, you have to pay 200K extra to get your own room' />
          </div>
        </div>
      </div>
    </div>
  )
}

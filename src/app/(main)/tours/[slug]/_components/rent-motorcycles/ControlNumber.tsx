'use client'
import SelectTravelerField from '@/app/(main)/tours/[slug]/_components/form-controls/SelectTravelerField'
import {FormField, FormItem, FormMessage} from '@/components/ui/form'
import {BookingFormValues} from '@/schemas/booking.schema'
import {InMotorbikeRents} from '@/types/tours.interface'
import {Fragment} from 'react'
import {useFormContext} from 'react-hook-form'

interface ControlNumberProps {
  motorcycles: InMotorbikeRents
}

export default function ControlNumber({motorcycles}: ControlNumberProps) {
  const {control} = useFormContext<BookingFormValues>()
  return (
    <div className='xsm:space-y-[0.25rem] xsm:p-[0.25rem] xsm:rounded-[1rem] xsm:bg-[rgba(205,205,205,0.32)] mt-[2rem] rounded-[1.5rem] bg-[#F3F9F9] p-[1rem]'>
      {Array.isArray(motorcycles?.motorbike_rent_list) &&
        motorcycles?.motorbike_rent_list?.length > 0 &&
        motorcycles?.motorbike_rent_list?.map((motor, index) => (
          <Fragment key={index}>
            <div className='xsm:p-[0.69rem_0.5rem_0.69rem_1rem] xsm:rounded-[0.75rem] xsm:bg-white flex w-full items-center justify-between'>
              <p
                className='xsm:text-[0.875rem] xsm:font-medium xsm:leading-[1.5] xsm:tracking-[-0.00438rem] font-trip-sans text-[1rem] leading-[1.2] font-semibold tracking-[0.0025rem] text-[#303030]'
                dangerouslySetInnerHTML={{__html: motor?.title}}
              ></p>
              <FormField
                control={control}
                name={`motorcycles.${index}.quantity`}
                render={({field}) => (
                  <FormItem>
                    <SelectTravelerField
                      className='xsm:bg-[#F5F5F5] [&_button]:xsm:bg-[#ECECEC] xsm:[&_inline_text]:bg-[rgba(255,255,255,0.00)] h-[2.25rem] border-none bg-transparent p-0 [&_button]:bg-white [&>div]:bg-transparent'
                      {...field}
                    />
                    <FormMessage className='font-trip-sans pl-[0.125rem] text-[0.75rem] leading-[120%] font-bold tracking-[0.00188rem] text-[#EA3434]' />
                  </FormItem>
                )}
              />
            </div>
            {motorcycles?.motorbike_rent_list?.length !== index + 1 && (
              <div className='xsm:hidden my-[0.75rem] h-[0.0625rem] w-full bg-[#EDEDED]'></div>
            )}
          </Fragment>
        ))}
    </div>
  )
}

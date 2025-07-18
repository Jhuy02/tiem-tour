'use client'
import SelectTravelerField from '@/app/(main)/tours/[slug]/_components/form-controls/SelectTravelerField'
import { FormField, FormItem, FormMessage } from '@/components/ui/form'
import { BookingFormValues } from '@/schemas/booking.schema'
import { InMotorbikeRents } from '@/types/tours.interface'
import { Fragment } from 'react'
import { useFormContext } from 'react-hook-form'

interface ControlNumberProps {
  motorcycles: InMotorbikeRents[]
}

export default function ControlNumber({ motorcycles }: ControlNumberProps) {
  const { control } = useFormContext<BookingFormValues>()
    return (
      <div className="mt-[2rem] p-[1rem] xsm:space-y-[0.25rem] xsm:p-[0.25rem] rounded-[1.5rem] xsm:rounded-[1rem] bg-[#F3F9F9] xsm:bg-[rgba(205,205,205,0.32)]">
        {Array.isArray(motorcycles) && motorcycles?.length > 0 && motorcycles.map((motor, index) => (
          <Fragment key={index}>
            <div className="flex justify-between items-center w-full xsm:p-[0.31rem_0.5rem_0.31rem_1rem] xsm:rounded-[0.75rem] xsm:bg-white">
              <p className="text-[1rem] xsm:text-[0.875rem] xsm:font-medium xsm:leading-[1.5] xsm:tracking-[-0.00438rem] font-trip-sans font-semibold leading-[1.2] tracking-[0.0025rem] text-[#303030]">
                {motor?.title}
              </p>
              <FormField
                control={control}
                name={`motorcycles.${index}.quantity`}
                render={({field}) => (
                  <FormItem>
                    <SelectTravelerField
                      className='xsm:bg-[#F5F5F5] p-0 bg-transparent border-none h-[2.25rem] [&_button]:bg-white [&_button]:xsm:bg-[#ECECEC] [&>div]:bg-transparent xsm:[&_inline_text]:bg-[rgba(255,255,255,0.00)]'
                      {...field}
                    />
                    <FormMessage className='font-trip-sans pl-[0.125rem] text-[0.75rem] leading-[120%] font-bold tracking-[0.00188rem] text-[#EA3434]' />
                  </FormItem>
                )}
              />
            </div>
            {motorcycles?.length !== index + 1 && (
              <div className="xsm:hidden h-[0.0625rem] w-full bg-[#EDEDED] my-[0.75rem]"></div>
            )}
          </Fragment>
        ))}
      </div>
    )
}
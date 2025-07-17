'use client'
import React from 'react'
import Image from 'next/image'
import ICArrowLeft from '@/components/icon/ICArrowLeft'
import {Label} from '@/components/ui/label'
import {Checkbox} from '@/components/ui/checkbox'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import clsx from 'clsx'
import {FormControl, FormField, FormItem} from '@/components/ui/form'
import {useFormContext, useWatch} from 'react-hook-form'
import {BookingFormValues} from '@/schemas/booking.schema'
import PolicyTourDialog from '@/app/(main)/tours/[slug]/_components/compound/booking-overview/PolicyTourDialog'

export default function CheckoutPolicy() {
  const {control} = useFormContext<BookingFormValues>()
  const agreePolicyStatus = useWatch({
    control,
    name: 'agree_policy',
  })
  console.log(agreePolicyStatus)
  return (
    <div className='relative rounded-[1.5rem] border border-solid border-[#EDEDED] bg-white p-[1.5rem]'>
      <div className='flex flex-col items-start space-y-[1.25rem]'>
        <p className='border-b border-solid border-[#EDEDED] pb-[1rem] text-[1.125rem] leading-[130%] font-extrabold tracking-[0.00281rem] text-[#2E2E2E]'>
          Policy
        </p>
        <div className='flex items-start space-x-[1rem]'>
          <div className='flex flex-1 flex-col space-y-[0.75rem] self-stretch rounded-[0.75rem] bg-[#F1F8F8] p-[1rem]'>
            <p className='text-[0.875rem] leading-[120%] font-extrabold tracking-[0.01563rem] uppercase'>
              Deposit Policy:
            </p>
            <div className='flex flex-col space-y-[0.75rem]'>
              <div className='flex items-start space-x-[0.5rem]'>
                <Image
                  alt=''
                  width={24}
                  height={24}
                  src={'/icons/privacy_policy.svg'}
                  className='h-auto w-[1.5rem] shrink-0'
                />
                <p className='text-[0.875rem] leading-[150%] tracking-[0.00219rem] text-[#303030]'>
                  We require a deposit of 1.000.000VND per person (not including
                  3% transfer fee). The deposit is only to guarantee the tour.
                  Any request might change due to the availability of each day.
                </p>
              </div>
            </div>
          </div>
          <div className='flex flex-1 flex-col space-y-[0.75rem] self-stretch rounded-[0.75rem] bg-[rgba(235,229,226,0.32)] p-[1rem]'>
            <p className='text-[0.875rem] leading-[120%] font-extrabold tracking-[0.01563rem] uppercase'>
              No-Refund Policy:
            </p>
            <div className='flex flex-col space-y-[0.75rem]'>
              <div className='flex items-start space-x-[0.5rem]'>
                <Image
                  alt=''
                  width={24}
                  height={24}
                  src={'/icons/danger.svg'}
                  className='h-auto w-[1.5rem] shrink-0'
                />
                <p className='text-[0.875rem] leading-[150%] tracking-[0.00219rem] text-[#303030]'>
                  In the event of cancellation, no refunds will be issued for
                  the deposit or full payment tour regardless of the reason for
                  cancellation
                </p>
              </div>
              <div className='flex items-start space-x-[0.5rem]'>
                <Image
                  alt=''
                  width={24}
                  height={24}
                  src={'/icons/danger.svg'}
                  className='h-auto w-[1.5rem] shrink-0'
                />
                <p className='text-[0.875rem] leading-[150%] tracking-[0.00219rem] text-[#303030]'>
                  In the event of cancellation, no refunds will be issued for
                  the deposit or full payment tour regardless of the reason for
                  cancellation
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='flex flex-col space-y-[0.5rem]'>
            <p className='text-[1rem] leading-[130%] font-extrabold tracking-[0.0025rem] text-[#303030]'>
              Reservation and Cancellation:
            </p>
            <ul className='list-disc pl-[1.25rem] text-[0.875rem] leading-[150%] font-normal tracking-[0.00219rem] text-[#303030]'>
              <li>
                The deposit secures the reservation for the specified date
              </li>
              <li>
                During the trip, if you decide to cancel, there will be no
                refund for any reason.
              </li>
            </ul>
          </div>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <button
              type='button'
              className='cursor-pointer text-[1rem] leading-[130%] font-extrabold tracking-[0.0025rem] text-[#006CE4]'
            >
              Policy more
            </button>
          </DialogTrigger>
          <DialogContent className='z-150 w-[56.0625rem] max-w-[80vw]! overflow-hidden rounded-[1.5rem]! border-none! bg-transparent p-0!'>
            <DialogHeader className='hidden'>
              <DialogTitle>Checkout Policy Detail</DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader>
            <PolicyTourDialog />
          </DialogContent>
        </Dialog>
        <FormField
          control={control}
          name='agree_policy'
          render={({field}) => (
            <FormItem>
              <FormControl>
                <Label className='flex cursor-pointer items-center'>
                  <Checkbox
                    className='size-[1.125rem] border-[#25ACAB] data-[state=checked]:border-[#25ACAB] data-[state=checked]:bg-transparent data-[state=checked]:text-[#25ACAB] dark:data-[state=checked]:border-[#25ACAB] dark:data-[state=checked]:bg-transparent'
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                  <p className='text-[0.875rem] leading-[150%] font-normal tracking-[0.00219rem] text-black'>
                    I agree to the privacy policy and terms of use of Tiem Tour
                  </p>
                </Label>
              </FormControl>
            </FormItem>
          )}
        />

        <button
          type='submit'
          disabled={!agreePolicyStatus}
          className={clsx(
            'flex cursor-pointer items-center justify-center space-x-[0.625rem] self-stretch rounded-[3.125rem] bg-[#C83E21] px-[2.5rem] py-[1.25rem] transition-colors duration-300 ease-out disabled:bg-[rgba(48,48,48,0.40)] lg:not-disabled:hover:bg-[#EA6A44]',
          )}
        >
          <span className='font-dvn-luckiest-guy h-[0.8125rem] text-[1.125rem] leading-[120%] font-normal text-white'>
            Deposit payment with onepay
          </span>
          <ICArrowLeft className='h-[1.5rem] w-[1.575rem] shrink-0' />
        </button>
      </div>
    </div>
  )
}

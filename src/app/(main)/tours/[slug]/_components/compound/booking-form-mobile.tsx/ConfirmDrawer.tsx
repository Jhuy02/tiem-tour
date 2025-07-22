'use client'
import {PageContext} from '@/app/(main)/tours/[slug]/context/PageProvider'
import ICArrowLeft from '@/components/icon/ICArrowLeft'
import {TourDetailApiResType} from '@/types/tours.interface'
import clsx from 'clsx'
import Image from 'next/image'
import {useContext, useState} from 'react'
import styles from './styles.module.css'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog-v2'
import PolicyTourDialog from '@/app/(main)/tours/[slug]/_components/compound/booking-overview/PolicyTourDialog'
import {Label} from '@/components/ui/label'
import {Checkbox} from '@/components/ui/checkbox'
import {Button} from '@/components/ui/button'
import {useFormContext} from 'react-hook-form'
import {BookingFormValues} from '@/schemas/booking.schema'

interface ConfirmDrawerProps {
  onCloseConfirmDrawer?: () => void
}

export default function ConfirmDrawer({
  onCloseConfirmDrawer,
}: ConfirmDrawerProps) {
  const pageContext = useContext(PageContext)
  if (!pageContext) throw new Error('Page context is missing')
  const {data: apiData}: {data: TourDetailApiResType} = pageContext
  const {trigger} = useFormContext<BookingFormValues>()
  const [agreePolicyStatus, setAgreePolicyStatus] = useState<boolean>(false)
  const handleClickConfirm = async () => {
    await trigger()
  }
  return (
    <div className='xsm:rounded-b-none hidden_scroll max-h-[80vh] overflow-y-auto rounded-[1.5rem] border border-solid border-[#EDEDED] bg-white px-[1rem] pb-[1rem] transition-all duration-400 ease-out'>
      <button
        type='button'
        onClick={onCloseConfirmDrawer}
        className='absolute top-[1.5rem] right-[1.5rem] z-6 cursor-pointer'
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
        <p className='sticky top-0 z-5 self-stretch border-b border-solid border-[#EDEDED] bg-white pt-[1rem] pb-[1rem] text-[1.125rem] leading-[130%] font-extrabold tracking-[0.00281rem] text-[#2E2E2E]'>
          Policy
        </p>
        <div className='xsm:gap-[0.75rem] grid grid-cols-2 gap-[1rem]'>
          <div className='xsm:col-span-full col-span-1 flex flex-col space-y-[0.75rem] self-stretch rounded-[0.75rem] bg-[#F1F8F8] p-[1rem]'>
            <p className='text-[0.875rem] leading-[120%] font-extrabold tracking-[0.01563rem] uppercase'>
              {apiData?.package_tour?.policy?.deposit_policy?.title}
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: apiData?.package_tour?.policy?.deposit_policy?.content,
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
                  apiData?.package_tour?.policy?.no_refund_policy?.content,
              }}
            ></div>
          </div>
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
          onClick={handleClickConfirm}
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
  )
}

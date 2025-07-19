'use client'
import Image from 'next/image'
import React from 'react'
import {DialogClose} from '@/components/ui/dialog'
import styles from './styles.module.css'
import clsx from 'clsx'

type PolicyTourDialogProps = {
  policy: {
    deposit_policy: {
      title: string
      content: string
    }
    no_refund_policy: {
      title: string
      content: string
    }
    policy_content: string
  }
}

export default function PolicyTourDialog({policy}: PolicyTourDialogProps) {
  return (
    <div className='relative z-2 h-[42.75rem] max-h-[80vh] overflow-hidden bg-[#FAFAFA]'>
      <DialogClose className='absolute top-[1.5rem] right-[1.5rem] z-5'>
        <div className='cursor-pointer'>
          <Image
            alt=''
            width={20}
            height={20}
            src={'/icons/x-close.svg'}
            className='h-auto w-[1.25rem] shrink-0'
          />
        </div>
      </DialogClose>
      <div className='absolute bottom-0 left-0 z-2 h-[4.125rem] w-full bg-[linear-gradient(180deg,rgba(255,255,255,0.00)_0%,_#FFF_100%)]'></div>
      <div className='relative z-1 max-h-full overflow-y-auto px-[1.5rem] pt-[1.5rem]'>
        <p className='font-dvn-luckiest-guy mb-[0.75rem] pt-[0.75rem] pb-[1.25rem] text-center text-[1.625rem] leading-[150%] font-normal tracking-[0.01563rem] text-[#303030] uppercase'>
          TIEM TOURS HA GIANG TERMS AND CONDITIONS
        </p>
        <div className='flex space-x-[1rem]'>
          {/* Deposit Policy */}
          <div className='flex-1 rounded-[1.5rem] bg-[#F1F8F8] p-[1rem]'>
            <p className='mb-[0.75rem] text-[0.875rem] font-extrabold tracking-[0.01563rem] text-[#303030] uppercase'>
              {policy?.deposit_policy?.title}
            </p>
            {policy?.deposit_policy?.content && (
              <div
                dangerouslySetInnerHTML={{
                  __html: policy?.deposit_policy?.content,
                }}
                className={clsx(
                  styles.depositPolicyContent,
                  'text-[0.875rem] leading-[150%] font-normal tracking-[0.00219rem] text-[#303030]',
                )}
              ></div>
            )}
          </div>
          {/* No-Refund Policy: */}
          <div className='flex-1 rounded-[1.5rem] bg-[#F1F8F8] p-[1rem]'>
            <p className='mb-[0.75rem] text-[0.875rem] font-extrabold tracking-[0.01563rem] text-[#303030] uppercase'>
              {policy?.no_refund_policy?.title}
            </p>
            {policy?.no_refund_policy?.content && (
              <div
                dangerouslySetInnerHTML={{
                  __html: policy?.no_refund_policy?.content,
                }}
                className={clsx(
                  styles.noRefundPolicyContent,
                  'text-[0.875rem] leading-[150%] font-normal tracking-[0.00219rem] text-[#303030]',
                )}
              ></div>
            )}
          </div>
        </div>
        {policy?.policy_content && (
          <div
            dangerouslySetInnerHTML={{__html: policy?.policy_content}}
            className={clsx('mt-[0.75rem] pb-[1.5rem]', styles.policyContent)}
          ></div>
        )}
      </div>
    </div>
  )
}

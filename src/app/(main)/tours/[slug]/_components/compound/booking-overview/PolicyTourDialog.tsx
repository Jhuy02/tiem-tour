'use client'
import Image from 'next/image'
import React from 'react'
import {DialogClose} from '@/components/ui/dialog'

export default function PolicyTourDialog() {
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
              Deposit Policy:
            </p>
            <div className='flex flex-col space-y-[0.75rem]'>
              {[...Array(4)].map((_, index) => {
                return (
                  <div
                    key={index}
                    className='flex items-start space-x-[0.5rem]'
                  >
                    <Image
                      alt=''
                      width={24}
                      height={24}
                      src={'/icons/privacy_policy.svg'}
                      className='h-auto w-[1.5rem] shrink-0'
                    />
                    <p className='text-[0.875rem] leading-[150%] tracking-[0.00219rem] text-[#303030]'>
                      We require a deposit of 1.000.000VND per person (not
                      including 3% transfer fee). The deposit is only to
                      guarantee the tour. Any request might change due to the
                      availability of each day.
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
          {/* No-Refund Policy: */}
          <div className='flex-1 rounded-[1.5rem] bg-[#F1F8F8] p-[1rem]'>
            <p className='mb-[0.75rem] text-[0.875rem] font-extrabold tracking-[0.01563rem] text-[#303030] uppercase'>
              Deposit Policy:
            </p>
            <div className='flex flex-col space-y-[0.75rem]'>
              {[...Array(4)].map((_, index) => {
                return (
                  <div
                    key={index}
                    className='flex items-start space-x-[0.5rem]'
                  >
                    <Image
                      alt=''
                      width={24}
                      height={24}
                      src={'/icons/danger.svg'}
                      className='h-auto w-[1.5rem] shrink-0'
                    />
                    <p className='text-[0.875rem] leading-[150%] tracking-[0.00219rem] text-[#303030]'>
                      In the event of cancellation, no refunds will be issued
                      for the deposit or full payment tour regardless of the
                      reason for cancellation
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className='pb-[1.5rem]'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae,
          deserunt consequatur? Animi quo dolorum ullam dignissimos modi at,
          autem debitis consequatur explicabo sapiente culpa nobis, voluptatibus
          consectetur amet aperiam eveniet? Quo illo earum consectetur corrupti
          dolorem rerum voluptate, hic tempore fugit perferendis amet distinctio
          quisquam exercitationem magni accusamus aut nulla repudiandae cum ex
          beatae deserunt dolores! Alias aspernatur ex quibusdam. Rem est ipsa
          necessitatibus ipsam labore eum possimus, blanditiis architecto
          aperiam recusandae natus, magnam, itaque deserunt totam sit inventore.
          Dignissimos rerum explicabo possimus aliquam! Ut tempora nam voluptate
          expedita commodi. Assumenda deleniti error necessitatibus,
          voluptatibus dolorem quisquam. Veritatis libero inventore soluta
          tenetur delectus atque in magnam. Tempore quidem
        </div>
      </div>
    </div>
  )
}

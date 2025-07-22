'use client'
import PolicyTourDialog from '@/app/(main)/tours/[slug]/_components/compound/booking-overview/PolicyTourDialog'
import {PageContext} from '@/app/(main)/tours/[slug]/context/PageProvider'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog-v2'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer-v2'
import useIsMobile from '@/hooks/useIsMobile'
import {TourDetailApiResType} from '@/types/tours.interface'
import Image from 'next/image'
import React, {useContext} from 'react'

export default function OpenPolicyTourBtn() {
  const pageContext = useContext(PageContext)
  if (!pageContext) throw new Error('Page context is missing')
  const {data: apiData}: {data: TourDetailApiResType} = pageContext
  const isMobile = useIsMobile()

  return (
    <>
      {!isMobile && (
        <Dialog>
          <DialogTrigger className='xsm:w-full'>
            <div className='xsm:justify-center font-trip-sans flex cursor-pointer items-center space-x-[0.5rem] rounded-[0.75rem] border border-solid border-[#ECECEC] px-[1rem] py-[0.5rem]'>
              <span className='text-[0.875rem] leading-[120%] font-medium tracking-[0.00219rem] text-[#303030]'>
                Policy tour
              </span>
              <Image
                alt=''
                width={20}
                height={20}
                src={'/icons/chevron-right-double.svg'}
                className='h-auto w-[1.25rem] shrink-0'
              />
            </div>
          </DialogTrigger>
          <DialogContent className='xsm:rounded-b-none w-[56.0625rem] overflow-hidden rounded-[1.5rem] bg-transparent p-0!'>
            <DialogHeader className='hidden'>
              <DialogTitle>
                TIEM TOURS HA GIANG TERMS AND CONDITIONS
              </DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader>
            <PolicyTourDialog policy={apiData?.package_tour?.policy} />
          </DialogContent>
        </Dialog>
      )}

      {isMobile && (
        <Drawer>
          <DrawerTrigger className='w-full'>
            <div className='xsm:justify-center font-trip-sans flex cursor-pointer items-center space-x-[0.5rem] rounded-[0.75rem] border border-solid border-[#ECECEC] px-[1rem] py-[0.5rem]'>
              <span className='text-[0.875rem] leading-[120%] font-medium tracking-[0.00219rem] text-[#303030]'>
                Policy tour
              </span>
              <Image
                alt=''
                width={20}
                height={20}
                src={'/icons/chevron-right-double.svg'}
                className='h-auto w-[1.25rem] shrink-0'
              />
            </div>
          </DrawerTrigger>
          <DrawerContent className='overflow-hidden rounded-[1.5rem] rounded-b-none bg-transparent p-0!'>
            <DrawerHeader className='hidden'>
              <DrawerTitle>
                TIEM TOURS HA GIANG TERMS AND CONDITIONS
              </DrawerTitle>
              <DrawerDescription></DrawerDescription>
            </DrawerHeader>
            <PolicyTourDialog policy={apiData?.package_tour?.policy} />
          </DrawerContent>
        </Drawer>
      )}
    </>
  )
}

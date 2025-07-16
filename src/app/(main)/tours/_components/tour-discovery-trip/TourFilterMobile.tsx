'use client'
import IconMenuV1 from '@/components/icon/IconMenuV1'
import React, {useContext} from 'react'

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer-v2'
import IconArrowRightV1 from '@/components/icon/IconArrowRightV1'
import IconCloseDrawerV1 from '@/components/icon/IconCloseDrawerV1'
import {TourFilterProps, TourTaxonomy} from '@/types/tours.interface'
import IconTickOption from '@/components/icon/IconTickOption'
import clsx from 'clsx'
import Image from 'next/image'
import {
  TourDiscoveryTripContext,
  TourDiscoveryTripType,
} from '@/app/(main)/tours/_components/tour-discovery-trip'

type FilterKey = 'location' | 'duration' | 'orderby'
type FilterType = 'single' | 'multiple'

export default function TourFilterMobile({
  tourLocation,
  tourDuration,
  tourBudget,
}: TourFilterProps) {
  const context = useContext(TourDiscoveryTripContext)
  if (!context) {
    throw new Error(
      'TourFilter must be used within DiscoveryTourContext.Provider',
    )
  }
  const {filters, setFilters, handleFilterOnMobile}: TourDiscoveryTripType =
    context

  const getSelectedStatus = (key: FilterKey, slug: string) => {
    const filter = filters[key] || []
    const selected = filter.find((item) => item.slug === slug)
    return !!selected
  }

  const handleSelectFilterOption = (
    key: FilterKey,
    option: TourTaxonomy,
    type: FilterType,
  ) => {
    const currentFilter = filters[key] || []
    const isSelected = currentFilter.some((item) => item.slug === option.slug)
    let updatedFilter = null

    if (type === 'multiple') {
      updatedFilter = isSelected
        ? currentFilter.filter((item) => item.slug !== option.slug)
        : [...currentFilter, option]
    } else {
      // single
      updatedFilter = isSelected ? [] : [option]
    }

    setFilters({
      ...filters,
      [key]: updatedFilter,
    })
  }

  const handleSearchForTour = () => {
    if (handleFilterOnMobile) {
      handleFilterOnMobile()
    }
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button className='flex size-[3rem] items-center justify-center bg-white p-[0.75rem] sm:hidden'>
          <IconMenuV1 className='h-auto w-full' />
        </button>
      </DrawerTrigger>
      <DrawerContent className='rounded-t-[1.5rem]'>
        <DrawerHeader className='hidden'>
          <div></div>
          <DrawerTitle></DrawerTitle>
          <DrawerDescription></DrawerDescription>
        </DrawerHeader>
        <div className='relative rounded-t-[1.5rem] bg-white'>
          <div className='relative flex w-full flex-col items-center rounded-t-[1.5rem] bg-[#25ACAB] px-[1rem] pt-[0.5rem] pb-[0.75rem] shadow-[2px_6px_12px_0px_rgba(0,0,0,0.08)]'>
            <div className='mb-[1rem] h-[3px] w-[3rem] rounded-full bg-[rgba(255,255,255,0.36)]'></div>
            <div className='font-trip-sans text-center text-[0.875rem] leading-[120%] font-bold tracking-[0.00875rem] text-white'>
              Filter
            </div>
            <DrawerClose asChild>
              <button className='absolute right-[1rem] bottom-[0.625rem] h-[1.25rem] w-[1.25rem]'>
                <IconCloseDrawerV1 />
              </button>
            </DrawerClose>
          </div>
          <div className='max-h-[50vh]! overflow-y-auto px-[1.25rem] pt-[1.5rem]'>
            <div className='py-[0.5rem]'>
              <p className='mb-[0.5rem] p-[0.25rem] text-[1rem] leading-[120%] font-bold tracking-[0.0025rem] text-[#303030]'>
                Location
              </p>
              <ul className='flex flex-wrap space-y-[0.5rem] space-x-[0.5rem]'>
                {tourLocation?.map((item) => {
                  const selectedStatus = getSelectedStatus(
                    'location',
                    item.slug,
                  )
                  return (
                    <li
                      key={item.id}
                      data-slug={item.slug}
                      className='shrink-0'
                      onClick={() =>
                        handleSelectFilterOption('location', item, 'multiple')
                      }
                    >
                      <p
                        className={clsx(
                          'relative overflow-hidden rounded-[1.5rem] border-[1.5px] border-solid border-transparent bg-white px-[1rem] py-[0.5rem] shadow-[0px_-24px_75.4px_3px_rgba(251,251,251,0.25)]',
                          {
                            'border-[#25ACAB]!': selectedStatus,
                          },
                        )}
                      >
                        <span
                          className={clsx(
                            'font-trip-sans relative z-[2] text-[1rem] leading-[125%] font-normal text-[#303030]',
                            {
                              'font-bold!': selectedStatus,
                            },
                          )}
                        >
                          {item.name}
                        </span>
                        <span
                          className={clsx(
                            'invisible absolute top-0 left-0 z-[1] h-full w-full bg-[linear-gradient(180deg,#F4F5E6_0%,#B2DFDC_100%)] opacity-0',
                            {
                              'visible! opacity-100!': selectedStatus,
                            },
                          )}
                        ></span>
                        {selectedStatus && (
                          <IconTickOption className='absolute top-0 right-[0.125rem] z-[5] h-auto w-[1.1875rem]' />
                        )}
                      </p>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className='my-[1.25rem] h-[1px] w-full bg-[#EDEDED]'></div>
            <div className=''>
              <p className='mb-[0.5rem] p-[0.25rem] text-[1rem] leading-[120%] font-bold tracking-[0.0025rem] text-[#303030]'>
                Duration
              </p>
              <ul>
                {tourDuration.map((item) => {
                  const selected = getSelectedStatus('duration', item.slug)
                  return (
                    <li
                      onClick={() =>
                        handleSelectFilterOption('duration', item, 'multiple')
                      }
                      key={item.id}
                      data-slug={item.slug}
                      className='w-full self-stretch'
                    >
                      <p className='flex cursor-pointer items-center'>
                        <span
                          className={clsx(
                            'inline-flex size-[2.5rem] items-center justify-center p-[0.5rem]',
                          )}
                        >
                          <Image
                            alt=''
                            width={20}
                            height={20}
                            src={
                              selected
                                ? '/tours/checkbox-multiple-active.svg'
                                : '/tours/checkbox-multiple-default.svg'
                            }
                            className='h-auto w-full shrink-0'
                          />
                        </span>
                        <span className='font-trip-sans line-clamp-1 text-[1rem] leading-[120%] font-medium tracking-[0.0025rem]'>
                          {item.name}
                        </span>
                      </p>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className='my-[1.25rem] h-[1px] w-full bg-[#EDEDED]'></div>
            <div className=''>
              <p className='mb-[0.5rem] p-[0.25rem] text-[1rem] leading-[120%] font-bold tracking-[0.0025rem] text-[#303030]'>
                Duration
              </p>
              <ul>
                {tourBudget.map((item) => {
                  const selected = getSelectedStatus('orderby', item.slug)
                  return (
                    <li
                      onClick={() =>
                        handleSelectFilterOption('orderby', item, 'single')
                      }
                      key={item.id}
                      data-slug={item.slug}
                      className='w-full self-stretch'
                    >
                      <p className='flex cursor-pointer items-center'>
                        <span
                          className={clsx(
                            'inline-flex size-[2.5rem] items-center justify-center p-[0.5rem]',
                          )}
                        >
                          <Image
                            alt=''
                            width={20}
                            height={20}
                            src={
                              selected
                                ? '/tours/checkbox-single-active.svg'
                                : '/tours/checkbox-single-default.svg'
                            }
                            className='h-auto w-full shrink-0'
                          />
                        </span>
                        <span className='font-trip-sans line-clamp-1 text-[1rem] leading-[120%] font-medium tracking-[0.0025rem]'>
                          {item.name}
                        </span>
                      </p>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <button
              onClick={handleSearchForTour}
              className='flex h-auto items-center justify-center gap-0 space-x-[0.625rem] rounded-[3.125rem] bg-[#C83E21] px-[2.5rem] py-[1.125rem] shadow-[7px_10px_34.3px_0px_rgba(0,0,0,0.12)]'
            >
              <span className='font-dvn-luckiest-guy inline-block h-[0.6875rem] text-center text-[1rem] leading-[120%] font-normal text-white'>
                Search for a tour
              </span>
              <IconArrowRightV1 className='h-auto w-[1.125rem] shrink-0' />
            </button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

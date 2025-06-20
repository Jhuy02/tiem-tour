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
  DiscoveryTourContext,
  IDiscoveryTourContext,
} from '@/app/(main)/tours/section-discovery'

type FilterKey = 'location' | 'duration' | 'orderby'
type FilterType = 'single' | 'multiple'

export default function TourFilterMobile({
  tourLocation,
  tourDuration,
  tourBudget,
}: TourFilterProps) {
  const context = useContext(DiscoveryTourContext)
  if (!context) {
    throw new Error(
      'TourFilter must be used within DiscoveryTourContext.Provider',
    )
  }
  const {filters, setFilters, handleFilterOnMobile}: IDiscoveryTourContext =
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
        <button className='flex sm:hidden size-[3rem] items-center justify-center p-[0.75rem] bg-white'>
          <IconMenuV1 className='w-full h-auto' />
        </button>
      </DrawerTrigger>
      <DrawerContent className='rounded-t-[1.5rem]'>
        <DrawerHeader className='hidden'>
          <div></div>
          <DrawerTitle></DrawerTitle>
          <DrawerDescription></DrawerDescription>
        </DrawerHeader>
        <div className='relative bg-white rounded-t-[1.5rem]'>
          <div className='relative w-full rounded-t-[1.5rem] px-[1rem] pt-[0.5rem] pb-[0.75rem] flex flex-col items-center bg-[#25ACAB] shadow-[2px_6px_12px_0px_rgba(0,0,0,0.08)]'>
            <div className='w-[3rem] h-[3px] bg-[rgba(255,255,255,0.36)] rounded-full mb-[1rem]'></div>
            <div className='text-white text-center font-trip-sans text-[0.875rem] font-bold leading-[120%] tracking-[0.00875rem]'>
              Filter
            </div>
            <DrawerClose asChild>
              <button className='absolute w-[1.25rem] h-[1.25rem] right-[1rem] bottom-[0.625rem]'>
                <IconCloseDrawerV1 />
              </button>
            </DrawerClose>
          </div>
          <div className='pt-[1.5rem] px-[1.25rem] overflow-y-auto max-h-[50vh]!'>
            <div className='py-[0.5rem]'>
              <p className='p-[0.25rem] font-bold text-[1rem] text-[#303030] leading-[120%] tracking-[0.0025rem] mb-[0.5rem]'>
                Location
              </p>
              <ul className='flex flex-wrap space-x-[0.5rem] space-y-[0.5rem]'>
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
                          'relative overflow-hidden px-[1rem] py-[0.5rem] rounded-[1.5rem] bg-white shadow-[0px_-24px_75.4px_3px_rgba(251,251,251,0.25)] border-[1.5px] border-transparent border-solid',
                          {
                            'border-[#25ACAB]!': selectedStatus,
                          },
                        )}
                      >
                        <span
                          className={clsx(
                            'z-[2] relative text-[#303030] font-trip-sans font-normal text-[1rem] leading-[125%]',
                            {
                              'font-bold!': selectedStatus,
                            },
                          )}
                        >
                          {item.name}
                        </span>
                        <span
                          className={clsx(
                            'opacity-0 invisible z-[1] absolute top-0 left-0 w-full h-full bg-[linear-gradient(180deg,#F4F5E6_0%,#B2DFDC_100%)]',
                            {
                              'opacity-100! visible!': selectedStatus,
                            },
                          )}
                        ></span>
                        {selectedStatus && (
                          <IconTickOption className='absolute z-[5] top-0 right-[0.125rem] w-[1.1875rem] h-auto' />
                        )}
                      </p>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className='w-full h-[1px] bg-[#EDEDED] my-[1.25rem]'></div>
            <div className=''>
              <p className='p-[0.25rem] font-bold text-[1rem] text-[#303030] leading-[120%] tracking-[0.0025rem] mb-[0.5rem]'>
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
                      className='self-stretch w-full'
                    >
                      <p className='flex items-center cursor-pointer'>
                        <span
                          className={clsx(
                            'p-[0.5rem] inline-flex items-center justify-center size-[2.5rem]',
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
                            className='w-full h-auto shrink-0'
                          />
                        </span>
                        <span className='line-clamp-1 font-trip-sans text-[1rem] font-medium leading-[120%] tracking-[0.0025rem]'>
                          {item.name}
                        </span>
                      </p>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className='w-full h-[1px] bg-[#EDEDED] my-[1.25rem]'></div>
            <div className=''>
              <p className='p-[0.25rem] font-bold text-[1rem] text-[#303030] leading-[120%] tracking-[0.0025rem] mb-[0.5rem]'>
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
                      className='self-stretch w-full'
                    >
                      <p className='flex items-center cursor-pointer'>
                        <span
                          className={clsx(
                            'p-[0.5rem] inline-flex items-center justify-center size-[2.5rem]',
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
                            className='w-full h-auto shrink-0'
                          />
                        </span>
                        <span className='line-clamp-1 font-trip-sans text-[1rem] font-medium leading-[120%] tracking-[0.0025rem]'>
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
              className='rounded-[3.125rem] bg-[#C83E21] shadow-[7px_10px_34.3px_0px_rgba(0,0,0,0.12)] flex px-[2.5rem] py-[1.125rem] justify-center items-center space-x-[0.625rem] gap-0 h-auto'
            >
              <span className='inline-block h-[0.6875rem] text-white text-center font-dvn-luckiest-guy text-[1rem] font-normal leading-[120%]'>
                Search for a tour
              </span>
              <IconArrowRightV1 className='w-[1.125rem] h-auto shrink-0' />
            </button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

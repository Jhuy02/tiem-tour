'use client'
import {TourDiscoveryTripContext} from '@/app/(main)/tours/_components/tour-discovery-trip'
import IconArrowDownV1 from '@/components/icon/IconArrowDownV1'
import {FilterSelectOptionProps} from '@/types/tours.interface'
import clsx from 'clsx'
import Image from 'next/image'
import {useContext, useEffect, useRef, useState} from 'react'

interface SelectedOption {
  id: number
  name: string
  slug: string
  hot?: boolean | null
}

export default function FilterSelectOption({
  icon,
  label,
  keyParam,
  select,
  options,
  value = [],
  className,
  onChange,
}: FilterSelectOptionProps) {
  const context = useContext(TourDiscoveryTripContext)
  if (!context) {
    throw new Error(
      'FilterSelectOption must be used within DiscoveryTourContext.Provider',
    )
  }
  const {setFilters} = context
  const [openPopover, setOpenPopover] = useState<boolean>(false)
  const popoverRef = useRef<HTMLDivElement>(null)
  const handleTogglePopover = () => {
    setOpenPopover(!openPopover)
  }

  const isSelected = (option: SelectedOption) => {
    return value.some((o) => o.slug === option.slug)
  }

  const handleSelectOption = (option: SelectedOption) => {
    let newValue = null
    if (select === 'single') {
      const current = value[0]
      if (current && current.slug === option.slug) return // giống nhau => không làm gì
      newValue = [option]
    } else {
      // multiple
      const exists = value.some((o) => o.slug === option.slug)
      newValue = exists
        ? value.filter((o) => o.slug !== option.slug)
        : [...value, option]
    }
    setFilters((prev) => ({
      ...prev,
      [keyParam]: newValue,
    }))
    onChange(keyParam, newValue)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        setOpenPopover(false)
      }
    }
    if (openPopover) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    // Cleanup khi unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [openPopover])

  return (
    <div
      ref={popoverRef}
      onClick={handleTogglePopover}
      className={clsx('relative! z-[5]', className)}
    >
      <div className='flex cursor-pointer items-center space-x-[0.75rem] px-[1rem] py-[0.75rem]'>
        <div className='flex size-[2.5rem] shrink-0 items-center justify-center rounded-[0.5rem] bg-[#F0F0F0]'>
          {icon && (
            <Image
              alt=''
              src={icon}
              width={20}
              height={20}
              className='h-auto w-[1.25rem]'
            />
          )}
        </div>
        <div className='flex-1'>
          <p className='font-trip-sans mb-[0.5rem] text-[0.75rem] leading-[120%] font-normal tracking-[0.00188rem] text-[#303030] opacity-50'>
            {label}
          </p>
          <div className='flex items-center justify-between'>
            <span className='font-trip-sans line-clamp-1 flex-1 text-[1rem] leading-[120%] font-bold tracking-[0.0025rem] text-[#303030]'>
              {value.length
                ? value.map((o) => o.name).join(', ')
                : 'Click to select'}
            </span>
            <IconArrowDownV1 className='h-[1.125rem] w-[1.125rem] shrink-0' />
          </div>
        </div>
      </div>
      <div
        className={clsx(
          'invisible absolute top-0 left-0 w-full opacity-0 transition-all duration-500 ease-[cubic-bezier(0.45,-0.01,0.01,0.98)]',
          {
            'visible top-[calc(100%+1rem)] opacity-100': openPopover,
          },
        )}
      >
        <ul className='flex flex-col space-y-[0.75rem] rounded-[0.5rem] bg-white p-[0.75rem] shadow-[7px_10px_34.3px_0px_rgba(0,0,0,0.12)]'>
          {Array.isArray(options) &&
            options.map((option) => {
              const selected = isSelected(option)
              return (
                <li
                  key={option.id}
                  data-slug={option.slug}
                  className='w-full self-stretch'
                >
                  <p
                    onClick={() => handleSelectOption(option)}
                    className='flex cursor-pointer items-center rounded-[0.25rem] transition-all duration-300 hover:bg-gray-100'
                  >
                    <span
                      className={clsx(
                        'inline-flex items-center justify-center p-[0.5rem]',
                        {
                          'size-[2.375rem]': select === 'single',
                          'size-[2.5rem]': select === 'multiple',
                        },
                      )}
                    >
                      {select === 'single' && (
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
                      )}
                      {select === 'multiple' && (
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
                      )}
                    </span>
                    <span className='font-trip-sans relative line-clamp-1 text-[1rem] leading-[120%] font-medium tracking-[0.0025rem]'>
                      {option.name}
                    </span>
                    {option.hot && (
                      <span className='font-trip-sans ml-[1rem] inline-block rounded-[2rem] bg-[#C83E21] px-[0.75rem] py-[0.25rem] text-[0.75rem] leading-[120%] font-medium tracking-[0.00188rem] text-white'>
                        Hot
                      </span>
                    )}
                  </p>
                </li>
              )
            })}
        </ul>
      </div>
    </div>
  )
}

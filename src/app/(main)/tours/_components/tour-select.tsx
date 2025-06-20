'use client'
import {DiscoveryTourContext} from '@/app/(main)/tours/section-discovery'
import IconArrowDownV1 from '@/components/icon/IconArrowDownV1'
import {FilterSelectOptionProps} from '@/types/tours.interface'
import clsx from 'clsx'
import Image from 'next/image'
import {useContext, useEffect, useRef, useState} from 'react'

interface SelectedOption {
  id: number
  name: string
  slug: string
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
  const context = useContext(DiscoveryTourContext)
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
      className={clsx('relative!  z-[5]', className)}
    >
      <div className='flex items-center space-x-[0.75rem] px-[1rem] py-[0.75rem] cursor-pointer'>
        <div className='flex items-center justify-center shrink-0 size-[2.5rem] rounded-[0.5rem] bg-[#F0F0F0]'>
          {icon && (
            <Image
              alt=''
              src={icon}
              width={20}
              height={20}
              className='w-[1.25rem] h-auto'
            />
          )}
        </div>
        <div className='flex-1'>
          <p className='text-[0.75rem] text-[#303030] leading-[120%] tracking-[0.00188rem] font-normal font-trip-sans opacity-50 mb-[0.5rem]'>
            {label}
          </p>
          <div className='flex items-center justify-between'>
            <span className='flex-1 line-clamp-1 text-[#303030] font-trip-sans text-[1rem] font-bold leading-[120%] tracking-[0.0025rem]'>
              {value.length
                ? value.map((o) => o.name).join(', ')
                : 'Click to select'}
            </span>
            <IconArrowDownV1 className='w-[1.125rem] h-[1.125rem] shrink-0' />
          </div>
        </div>
      </div>
      <div
        className={clsx(
          'absolute top-0 left-0 w-full invisible opacity-0 transition-all duration-500 ease-[cubic-bezier(0.45,-0.01,0.01,0.98)]',
          {
            'visible opacity-100 top-[calc(100%+1rem)]': openPopover,
          },
        )}
      >
        <ul className='flex flex-col space-y-[0.75rem] bg-white rounded-[0.5rem] shadow-[7px_10px_34.3px_0px_rgba(0,0,0,0.12)] p-[0.75rem]'>
          {Array.isArray(options) &&
            options.map((option) => {
              const selected = isSelected(option)
              return (
                <li
                  key={option.id}
                  data-slug={option.slug}
                  className='self-stretch w-full'
                >
                  <p
                    onClick={() => handleSelectOption(option)}
                    className='flex items-center cursor-pointer'
                  >
                    <span
                      className={clsx(
                        'p-[0.5rem] inline-flex items-center justify-center',
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
                          className='w-full h-auto shrink-0'
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
                          className='w-full h-auto shrink-0'
                        />
                      )}
                    </span>
                    <span className='line-clamp-1 font-trip-sans text-[1rem] font-medium leading-[120%] tracking-[0.0025rem]'>
                      {option.name}
                    </span>
                  </p>
                </li>
              )
            })}
        </ul>
      </div>
    </div>
  )
}

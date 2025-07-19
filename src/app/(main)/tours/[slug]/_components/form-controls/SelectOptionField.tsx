'use client'
import React, {useState} from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover-v2'
import useIsMobile from '@/hooks/useIsMobile'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from '@/components/ui/drawer-v2'
import ICArrowLeft from '@/components/icon/ICArrowLeft'
import {RadioGroup, RadioGroupItem} from '@/components/ui/radio-group'
import {Label} from '@/components/ui/label'

interface Option {
  name: string
  slug: string
}

interface SelectOptionFieldProps {
  label: string
  placeholder?: string
  options: Option[]
  value?: string
  disabled?: boolean
  onChange?: (value: string) => void
  onBlur?: () => void
  name?: string
}

export default function SelectOptionField({
  label,
  placeholder = 'Chọn một mục',
  options,
  value,
  disabled,
  name,
  onChange,
}: SelectOptionFieldProps) {
  const isMobile = useIsMobile()
  const [isOpen, setIsOpen] = useState(false)
  const selected = options.find((opt) => opt.slug === value)

  return (
    <>
      {!isMobile && (
        <Popover
          open={isOpen}
          onOpenChange={(open) => {
            if (!disabled) setIsOpen(open)
          }}
        >
          <PopoverTrigger asChild>
            <div
              className={clsx(
                'font-trip-sans relative h-[3rem] rounded-[0.75rem] border border-solid border-[#EDEDED]',
                {
                  'cursor-pointer bg-white': !disabled,
                  'pointer-events-none cursor-not-allowed bg-[#F6F6F6]':
                    disabled,
                },
              )}
            >
              <div className='flex h-full w-full cursor-pointer items-center justify-between space-x-[1rem] px-[1rem] py-[0.875rem]'>
                <p
                  className={clsx(
                    'text-[0.875rem] leading-[120%] font-medium tracking-[0.00219rem]',
                    {
                      'text-[rgba(48,48,48,0.40)]': disabled,
                      'text-[#2E2E2E]': !disabled,
                    },
                  )}
                >
                  {selected?.name || placeholder}
                </p>
                <Image
                  alt=''
                  width={20}
                  height={20}
                  src='/icons/arrow-down.svg'
                  className={clsx(
                    'h-auto w-[1.25rem] shrink-0 transition-transform duration-300',
                    {
                      'rotate-0': !isOpen,
                      'rotate-180': isOpen,
                      'opacity-40': disabled,
                      'opacity-100': !disabled,
                    },
                  )}
                />
              </div>
            </div>
          </PopoverTrigger>
          <PopoverContent
            align='start'
            className='overflow-hidden rounded-[0.75rem] border border-solid border-[#EDEDED] bg-white p-[0.5rem]'
          >
            <RadioGroup
              className='flex flex-col gap-0 space-y-[0.25rem]'
              value={value}
              onValueChange={onChange}
              name={name}
            >
              {Array.isArray(options) &&
                options?.map((item, index) => {
                  return (
                    <Label
                      key={index}
                      className='flex h-[2.8125rem] items-center space-x-[0.5rem] px-[0.75rem]'
                    >
                      <RadioGroupItem
                        value={item?.slug}
                        className='peer sr-only'
                      />
                      <Image
                        alt=''
                        width={22}
                        height={22}
                        src={'/icons/check_default.svg'}
                        className='hidden! h-auto w-[1.25rem] peer-data-[state="unchecked"]:block!'
                      />
                      <Image
                        alt=''
                        width={22}
                        height={22}
                        src={'/icons/check_active-v1.svg'}
                        className='hidden! h-auto w-[1.25rem] peer-data-[state="checked"]:block!'
                      />
                      <p className='line-clamp-1 text-[1rem] leading-[120%] font-medium tracking-[0.0025rem] text-[#303030]'>
                        {item.name}
                      </p>
                    </Label>
                  )
                })}
            </RadioGroup>
          </PopoverContent>
        </Popover>
      )}

      {isMobile && (
        <Drawer>
          <DrawerTrigger asChild>
            <div
              className={clsx(
                'font-trip-sans relative h-[3rem] rounded-[0.75rem] border border-solid border-[#EDEDED]',
                {
                  'cursor-pointer bg-white': !disabled,
                  'pointer-events-none cursor-not-allowed bg-[#F6F6F6]':
                    disabled,
                },
              )}
            >
              <div className='flex h-full w-full cursor-pointer items-center justify-between space-x-[1rem] px-[1rem] py-[0.875rem]'>
                <p
                  className={clsx(
                    'text-[0.875rem] leading-[120%] font-medium tracking-[0.00219rem]',
                    {
                      'text-[rgba(48,48,48,0.40)]': disabled,
                      'text-[#2E2E2E]': !disabled,
                    },
                  )}
                >
                  {selected?.name || placeholder}
                </p>
                <Image
                  alt=''
                  width={20}
                  height={20}
                  src='/icons/arrow-down.svg'
                  className={clsx(
                    'h-auto w-[1.25rem] shrink-0 transition-transform duration-300',
                    {
                      'rotate-0': !isOpen,
                      'rotate-180': isOpen,
                      'opacity-40': disabled,
                      'opacity-100': !disabled,
                    },
                  )}
                />
              </div>
            </div>
          </DrawerTrigger>
          <DrawerContent className='xsm:rounded-b-none overflow-hidden rounded-t-[1rem] border-[0.6px] border-solid border-[#EDEDED] bg-white p-[1rem] shadow-[0px_1.906px_25.412px_0.635px_rgba(214,214,221,0.40)]'>
            <p className='text-[1rem] leading-[150%] font-bold tracking-[-0.01rem] text-[#1A1A1A]'>
              {label}
            </p>
            <div className='flex flex-col space-y-[0.75rem]'>
              <RadioGroup
                className='flex flex-col gap-0 space-y-[0.5rem]'
                value={value}
                onValueChange={onChange}
                name={name}
              >
                {Array.isArray(options) &&
                  options?.map((item, index) => {
                    return (
                      <Label
                        key={index}
                        className='inline-flex h-[2.8125rem] w-full cursor-pointer items-center space-x-[0.5rem] px-[0.75rem]'
                      >
                        <RadioGroupItem
                          value={item?.slug}
                          className='peer sr-only'
                        />
                        <Image
                          alt=''
                          width={22}
                          height={22}
                          src={'/icons/check_default.svg'}
                          className='hidden! h-auto w-[1.25rem] peer-data-[state="unchecked"]:block!'
                        />
                        <Image
                          alt=''
                          width={22}
                          height={22}
                          src={'/icons/check_active-v1.svg'}
                          className='hidden! h-auto w-[1.25rem] peer-data-[state="checked"]:block!'
                        />
                        <p className='line-clamp-1 text-[1rem] leading-[120%] font-medium tracking-[0.0025rem] text-[#303030]'>
                          {item.name}
                        </p>
                      </Label>
                    )
                  })}
              </RadioGroup>
              <DrawerClose asChild>
                <button
                  type='button'
                  disabled={!value}
                  className='flex h-[3.125rem] items-center justify-center space-x-[0.625rem] rounded-full bg-[#C83E21] disabled:bg-[rgba(48,48,48,0.40)]'
                >
                  <span className='font-dvn-luckiest-guy inline-block h-[0.8125rem] text-[1.125rem] leading-[120%] font-normal text-white'>
                    Apply
                  </span>
                  <ICArrowLeft className='h-[1.5rem] w-[1.575rem] shrink-0' />
                </button>
              </DrawerClose>
            </div>
          </DrawerContent>
        </Drawer>
      )}
    </>
  )
}

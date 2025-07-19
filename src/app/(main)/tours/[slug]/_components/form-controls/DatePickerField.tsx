'use client'
import {Calendar} from '@/components/ui/calendar-v2'
import Image from 'next/image'
import {format} from 'date-fns'
import {useState} from 'react'
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
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer-v2'
import ICArrowLeft from '@/components/icon/ICArrowLeft'

interface DatePickerFieldProps {
  label?: string
  required?: boolean
  disabled?: boolean
  value?: Date
  minDate?: Date
  onChange?: (date: Date | undefined) => void
  name?: string
  onBlur?: () => void
}

export default function DatePickerField({
  label,
  required,
  disabled,
  value,
  onChange,
  minDate,
}: DatePickerFieldProps) {
  const isMobile = useIsMobile()
  const [openCalendar, setOpenCalendar] = useState<boolean>()
  const handleDateSelect = (selectedDate?: Date) => {
    if (disabled) return
    onChange?.(selectedDate) // trigger RHF onChange
  }

  return (
    <>
      {!isMobile && (
        <Popover
          open={openCalendar}
          onOpenChange={(open) => {
            if (!disabled) setOpenCalendar(open)
          }}
        >
          <PopoverTrigger
            onClick={(e) => {
              if (disabled) {
                e.preventDefault()
                e.stopPropagation()
                return
              }
            }}
            asChild
          >
            <div className='relative flex flex-col'>
              {label && (
                <label
                  className={clsx(
                    'mb-[0.375rem] inline-block pl-[0.125rem] text-[0.875rem] leading-[120%] font-medium tracking-[0.00219rem] text-[#2E2E2E]',
                    {
                      'opacity-30': disabled,
                      'opacity-100': !disabled,
                    },
                  )}
                >
                  {label}{' '}
                  {required && <span className='text-[#EA3434]'>*</span>}
                </label>
              )}
              <div
                className={clsx(
                  'relative h-[3rem] rounded-[0.75rem] border border-solid border-[#EDEDED] px-[1rem] py-[0.875rem]',
                  {
                    'pointer-none cursor-not-allowed bg-[#F6F6F6]': disabled,
                    'cursor-pointer bg-white': !disabled,
                  },
                )}
              >
                <div className='flex items-center justify-between space-x-[1rem]'>
                  <div className='flex items-center space-x-[0.5rem]'>
                    <Image
                      alt=''
                      width={20}
                      height={20}
                      src={'/icons/calendar.svg'}
                      className='h-auto w-[1.25rem] shrink-0'
                    />
                    <span className='text-[0.875rem] leading-[100%] font-medium tracking-[0.00219rem] text-[#2E2E2E]'>
                      {value ? format(value, 'dd MMM yyyy') : 'Select a date'}
                    </span>
                  </div>
                  <Image
                    alt=''
                    width={20}
                    height={20}
                    src={'/icons/arrow-down.svg'}
                    className={clsx(
                      'h-auto w-[1.25rem] shrink-0 transition-transform duration-300',
                      {
                        'rotate-0': !openCalendar,
                        'rotate-180': openCalendar,
                      },
                    )}
                  />
                </div>
              </div>
            </div>
          </PopoverTrigger>
          <PopoverContent
            className='w-auto overflow-hidden border-0 p-0'
            align='start'
          >
            <Calendar
              mode='single'
              selected={value}
              onSelect={handleDateSelect}
              disabled={
                minDate
                  ? {before: new Date(minDate.setHours(0, 0, 0, 0))}
                  : {before: new Date(new Date().setHours(0, 0, 0, 0))}
              }
              className='xsm:border-none w-full rounded-lg border bg-white shadow-md'
            />
          </PopoverContent>
        </Popover>
      )}
      {isMobile && (
        <Drawer>
          <DrawerTrigger
            asChild
            onClick={(e) => {
              if (disabled) {
                e.preventDefault()
                e.stopPropagation()
                return
              }
            }}
          >
            <div className='relative flex flex-col'>
              {label && (
                <label
                  className={clsx(
                    'mb-[0.375rem] inline-block pl-[0.125rem] text-[0.875rem] leading-[120%] font-medium tracking-[0.00219rem] text-[#2E2E2E]',
                    {
                      'opacity-30': disabled,
                      'opacity-100': !disabled,
                    },
                  )}
                >
                  {label}{' '}
                  {required && <span className='text-[#EA3434]'>*</span>}
                </label>
              )}
              <div
                className={clsx(
                  'relative h-[3rem] rounded-[0.75rem] border border-solid border-[#EDEDED] px-[1rem] py-[0.875rem]',
                  {
                    'pointer-none cursor-not-allowed bg-[#F6F6F6]': disabled,
                    'cursor-pointer bg-white': !disabled,
                  },
                )}
              >
                <div className='flex items-center justify-between space-x-[1rem]'>
                  <div className='flex items-center space-x-[0.5rem]'>
                    <Image
                      alt=''
                      width={20}
                      height={20}
                      src={'/icons/calendar.svg'}
                      className='h-auto w-[1.25rem] shrink-0'
                    />
                    <span className='text-[0.875rem] leading-[100%] font-medium tracking-[0.00219rem] text-[#2E2E2E]'>
                      {value ? format(value, 'dd MMM yyyy') : 'Select a date'}
                    </span>
                  </div>
                  <Image
                    alt=''
                    width={20}
                    height={20}
                    src={'/icons/arrow-down.svg'}
                    className={clsx(
                      'h-auto w-[1.25rem] shrink-0 transition-transform duration-300',
                      {
                        'rotate-0': !openCalendar,
                        'rotate-180': openCalendar,
                      },
                    )}
                  />
                </div>
              </div>
            </div>
          </DrawerTrigger>
          <DrawerContent className='z-1000 w-auto overflow-hidden rounded-t-[1rem] border-[0.6px] border-solid border-[rgba(0,0,0,0.15)] p-[1rem] shadow-[0px_1.906px_25.412px_0.635px_rgba(214,214,221,0.40)]'>
            <DrawerHeader className='hidden'>
              <DrawerTitle>{label}</DrawerTitle>
              <DrawerDescription></DrawerDescription>
            </DrawerHeader>
            <div className='flex flex-col space-y-[0.75rem]'>
              <div className='flex items-center justify-between'>
                <p className='leading-[150%] font-bold tracking-[-0.01rem] text-[#1A1A1A]'>
                  {label}
                </p>
                <DrawerClose asChild>
                  <button type='button'>
                    <Image
                      alt='Close drawer'
                      width={24}
                      height={24}
                      src={'/icons/x-close.svg'}
                      className='h-auto w-[1.5rem]'
                    />
                  </button>
                </DrawerClose>
              </div>
              <Calendar
                mode='single'
                selected={value}
                onSelect={handleDateSelect}
                disabled={
                  minDate
                    ? {before: new Date(minDate.setHours(0, 0, 0, 0))}
                    : {before: new Date(new Date().setHours(0, 0, 0, 0))}
                }
                className='w-full border border-none bg-white p-0'
              />
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

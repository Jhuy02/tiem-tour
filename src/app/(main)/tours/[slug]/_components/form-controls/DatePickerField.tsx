'use client'
import {Calendar} from '@/components/ui/calendar'
import Image from 'next/image'
import {format} from 'date-fns'
import {useEffect, useRef, useState} from 'react'
import clsx from 'clsx'

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
  const [showCalendar, setShowCalendar] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  const handleDateSelect = (selectedDate?: Date) => {
    if (disabled) return
    onChange?.(selectedDate) // trigger RHF onChange
    setShowCalendar(false) // Ẩn calendar sau khi chọn
  }

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setShowCalendar(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div
      ref={wrapperRef}
      className='relative flex flex-col'
    >
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
          {label} {required && <span className='text-[#EA3434]'>*</span>}
        </label>
      )}
      <div
        onClick={() => {
          if (disabled) return
          setShowCalendar(!showCalendar)
        }}
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
                'rotate-0': !showCalendar,
                'rotate-180': showCalendar,
              },
            )}
          />
        </div>

        <div
          className={clsx(
            'absolute bottom-[calc(100%+0.5rem)] left-0 z-50 transition-all duration-300',
            {
              'visible opacity-100': showCalendar,
              'invisible opacity-0': !showCalendar,
            },
          )}
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
            className='rounded-lg border bg-white shadow-md'
          />
        </div>
      </div>
    </div>
  )
}

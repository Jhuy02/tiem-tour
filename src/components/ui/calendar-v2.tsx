'use client'

import * as React from 'react'
import {ChevronLeft, ChevronRight} from 'lucide-react'
import {DayPicker} from 'react-day-picker'

import {cn} from '@/lib/utils'
import {buttonVariants} from '@/components/ui/button'

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('p-3', className)}
      classNames={{
        months: 'flex flex-col sm:flex-row gap-2',
        month: 'flex flex-col gap-4',
        caption: 'flex justify-center pt-1 relative items-center w-full',
        caption_label: 'text-sm font-medium',
        nav: 'flex items-center gap-1',
        nav_button: cn(
          buttonVariants({variant: 'outline'}),
          'size-7 bg-transparent p-0 opacity-50 hover:opacity-100',
        ),
        nav_button_previous: 'absolute left-1',
        nav_button_next: 'absolute right-1',
        table: 'w-full border-collapse space-x-1',
        head_row: 'flex',
        head_cell:
          'text-muted-foreground rounded-md flex-1 font-normal text-[0.75rem] text-[rgba(48,48,48,0.40)] font-bold tracking-[0.0025rem]',
        row: 'flex w-full mt-2',
        cell: cn(
          'relative p-0 text-center flex-1 text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-range-end)]:rounded-r-md bg-transparent!',
          props.mode === 'range'
            ? '[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md'
            : '[&:has([aria-selected])]:rounded-md',
        ),
        day: cn(
          buttonVariants({variant: 'ghost'}),
          'size-full py-[0.45rem] font-normal aria-selected:opacity-100 rounded-full text-[0.875rem] text-[#3B3943] font-medium leading-[150%]',
        ),
        day_range_start:
          'day-range-start aria-selected:bg-[#25ACAB] aria-selected:text-primary-foreground',
        day_range_end:
          'day-range-end aria-selected:bg-[#25ACAB] aria-selected:text-primary-foreground',
        day_selected:
          ' text-primary-foreground hover:bg-[#25ACAB]! hover:text-primary-foreground focus:bg-[#25ACAB] focus:text-primary-foreground bg-[#25ACAB] text-white',
        day_today: '',
        day_outside:
          'day-outside text-muted-foreground aria-selected:text-white text-[rgba(48,48,48,0.40)] font-medium',
        day_disabled: 'text-muted-foreground opacity-50',
        day_range_middle:
          'aria-selected:bg-accent aria-selected:text-white text-[rgba(48,48,48,0.40)] font-medium',
        day_hidden: 'invisible',
        ...classNames,
      }}
      components={{
        IconLeft: ({className, ...props}) => (
          <ChevronLeft
            className={cn('size-4', className)}
            {...props}
          />
        ),
        IconRight: ({className, ...props}) => (
          <ChevronRight
            className={cn('size-4', className)}
            {...props}
          />
        ),
      }}
      {...props}
    />
  )
}

export {Calendar}

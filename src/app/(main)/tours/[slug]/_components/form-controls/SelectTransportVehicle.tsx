import {Label} from '@/components/ui/label'
import {RadioGroupItem} from '@/components/ui/radio-group'
import Image from 'next/image'
import React from 'react'

interface SelectTransportVehicleProps {
  title?: string
  price: number
  value: string
  startTime: string
}

export default function SelectTransportVehicle({
  title,
  value,
  startTime,
  price,
}: SelectTransportVehicleProps) {
  return (
    <Label className='inline-flex w-full cursor-pointer items-center gap-0'>
      <RadioGroupItem
        value={value}
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
      <div className='flex flex-1 flex-col space-y-[0.5rem] pl-[0.5rem]'>
        <p className='inline-flex items-center text-[0.875rem] leading-[120%] font-medium tracking-[0.00219rem] text-[#3B3943]'>
          {title}
        </p>
        <span className='text-[0.875rem] leading-[120%] font-medium tracking-[0.00219rem] text-[rgba(48,48,48,0.40)]'>
          Start: <span className='text-[#3B3943]'>{startTime}</span>
        </span>
      </div>
      <p className='text-[0.875rem] leading-[120%] font-extrabold tracking-[0.01563rem] text-[#C83E21] uppercase'>
        <span>{price?.toLocaleString('vi-VN')}</span>
        /PAX
      </p>
    </Label>
  )
}

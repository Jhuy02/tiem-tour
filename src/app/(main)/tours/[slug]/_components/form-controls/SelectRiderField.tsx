import Image from 'next/image'
import React from 'react'

interface SelectRiderFieldProps {
  label?: string
  unitPrice: number
  value: number
  onChange: (value: number) => void
  name?: string
}

export default function SelectRiderField({
  label,
  unitPrice,
  value,
  onChange,
  name,
}: SelectRiderFieldProps) {
  const handleIncrease = () => {
    if (value < 99) {
      onChange(value + 1)
    }
  }
  const handleDecrease = () => {
    if (value > 0) onChange(value - 1)
  }
  return (
    <div className='xsm:bg-white xsm:rounded-[0.75rem] xsm:px-[1rem] xsm:h-[3.25rem] flex h-[2.25rem] items-center justify-between space-x-[1.5rem]'>
      <p className='flex-1 text-[1rem] leading-[120%] font-medium tracking-[0.0025rem] text-[#303030]'>
        {label}
      </p>
      <div className='flex items-center space-x-[1.5rem]'>
        <span className='xsm:hidden text-[0.875rem] leading-[120%] font-extrabold tracking-[0.01563rem] text-[#C83E21] uppercase'>
          <span className=''>{unitPrice.toLocaleString('vi-VN')}</span>đ
        </span>
        <span className='xsm:hidden text-[0.875rem] leading-[140%] font-bold text-[#2E2E2E]'>
          x
        </span>
        <div className='xsm:bg-[#F5F5F5] xsm:border-[#F5F5F5] flex items-center overflow-hidden rounded-[0.5rem] border border-solid border-[#EDEDED]'>
          <button
            type='button'
            onClick={handleDecrease}
            className='xsm:bg-[#ECECEC] xsm:rounded-[0.5rem] inline-flex size-[2.25rem] cursor-pointer items-center justify-center'
          >
            <Image
              alt=''
              width={18}
              height={18}
              src={'/icons/remove_minus.svg'}
              className='h-auto w-[1.125rem]'
            />
          </button>
          <div className='flex size-[2.25rem] items-center justify-center'>
            <span className='text-[0.875rem] leading-[140%] font-bold text-[#2E2E2E]'>
              {value?.toString().padStart(2, '0') ?? '00'}
            </span>
            <input
              hidden
              name={name}
            />
          </div>
          <button
            type='button'
            onClick={handleIncrease}
            className='xsm:bg-[#ECECEC] xsm:rounded-[0.5rem] inline-flex size-[2.25rem] cursor-pointer items-center justify-center'
          >
            <Image
              alt=''
              width={18}
              height={18}
              src={'/icons/add_plus.svg'}
              className='h-auto w-[1.125rem]'
            />
          </button>
        </div>
      </div>
    </div>
  )
}

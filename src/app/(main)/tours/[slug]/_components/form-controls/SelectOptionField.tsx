'use client'
import React, {useEffect, useRef, useState} from 'react'
import Image from 'next/image'

interface Option {
  name: string
  slug: string
}

interface SelectOptionFieldProps {
  placeholder?: string
  options: Option[]
  value?: string
  onChange?: (value: string) => void
  onBlur?: () => void
  name?: string
}

export default function SelectOptionField({
  placeholder = 'Chọn một mục',
  options,
  value,
  onChange,
  onBlur,
}: SelectOptionFieldProps) {
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const selected = options.find((opt) => opt.slug === value)

  const handleSelect = (slug: string) => {
    onChange?.(slug)
    setIsOpen(false)
  }

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
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
      className='font-trip-sans relative h-[3rem] rounded-[0.75rem] border border-solid border-[#EDEDED] bg-white'
      onBlur={onBlur}
    >
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className='flex h-full w-full cursor-pointer items-center justify-between space-x-[1rem] px-[1rem] py-[0.875rem]'
      >
        <p className='text-[0.875rem] leading-[120%] font-medium tracking-[0.00219rem] text-[#2E2E2E]'>
          {selected?.name || placeholder}
        </p>
        <Image
          alt=''
          width={20}
          height={20}
          src='/icons/arrow-down.svg'
          className={`h-auto w-[1.25rem] shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </div>

      {isOpen && (
        <div className='absolute top-[calc(100%+0.5rem)] left-0 z-10 w-full'>
          <ul className='flex max-h-[15rem] flex-col space-y-[0.25rem] overflow-auto rounded-[0.75rem] border border-solid border-[#EDEDED] bg-white p-[0.5rem] shadow-md'>
            {options.map((item) => (
              <li
                key={item.slug}
                onClick={() => handleSelect(item.slug)}
                className={`flex h-[2.8125rem] cursor-pointer items-center rounded-[0.5rem] px-[0.75rem] py-[1rem] hover:bg-[#EDEDED]/50 ${
                  value === item.slug ? 'bg-[#EDEDED]/70' : ''
                }`}
              >
                <p className='text-[0.875rem] leading-[120%] font-medium tracking-[0.0025rem] text-[#2E2E2E]'>
                  {item.name}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

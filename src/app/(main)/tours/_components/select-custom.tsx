'use client'
import IconArrowDownV1 from '@/components/icon/IconArrowDownV1'
import clsx from 'clsx'
import Image from 'next/image'
import React, {useState} from 'react'

interface SelectCustomProps {
  iconUrl?: string
  label: string
  selectedValues?: {id: number; name: string; slug: string}[]
  options: {id: number; name: string; slug: string}[]
  className?: string
  type?: 'checkbox' | 'radio'
}
export default function SelectCustom({
  iconUrl,
  label,
  selectedValues = [],
  options = [],
  className = '',
  type = 'checkbox',
}: SelectCustomProps) {
  const [openSelect, setOpenSelect] = useState<boolean>(false)

  const handleOpenSelect = () => {
    setOpenSelect(!openSelect)
  }
  return (
    <div
      onClick={handleOpenSelect}
      className={clsx('relative', className)}
    >
      <div className='w-full flex py-[0.75rem] pl-[1rem] pr-[0.75rem] rounded-[0.5rem] bg-white cursor-pointer'>
        {iconUrl && (
          <div className='size-[2.5rem] shrink-0 rounded-[0.5rem] p-[0.625rem] mr-[0.75rem] bg-[#F0F0F0]'>
            <Image
              alt=''
              width={20}
              height={20}
              src={iconUrl}
              className='w-full h-auto'
            />
          </div>
        )}
        <div className='flex flex-col space-y-[0.5rem] flex-1'>
          <p className='self-stretch text-[#303030] font-trip-sans text-[0.75rem] font-normal leading-[120%] tracking-[0.00188rem] opacity-50'>
            {label ?? ''}
          </p>
          <div className='flex justify-between self-stretch flex-1'>
            <span className='line-clamp-1 text-[#303030] font-trip-sans text-[1rem] font-bold leading-[120%] tracking-[0.0025rem]'>
              {selectedValues.length > 0 ? (
                <> {selectedValues?.map((i) => i.name).join(', ')} </>
              ) : (
                'Click to select'
              )}
            </span>
            <IconArrowDownV1
              className={clsx(
                'w-[1.125rem] h-[1.125rem] object-contain transition-all duration-500 ease-[cubic-bezier(0.45,-0.01,0.01,0.98)]',
                {
                  'rotate-180': openSelect,
                },
              )}
            />
          </div>
        </div>
      </div>
      <div
        className={clsx(
          'absolute top-0 w-full opacity-0 invisible transition-all duration-500 ease-[cubic-bezier(0.45,-0.01,0.01,0.98)]',
          {'opacity-100 visible top-[calc(100%+1rem)]': openSelect},
        )}
      >
        <ul className='pl-[0.75rem] py-[0.75rem] pr-[1rem] flex flex-col space-y-[0.75rem] rounded-[0.5rem] bg-white shadow-[7px_10px_34.3px_0px_rgba(0,0,0,0.12)]'>
          <li className='self-stretch flex items-center'>
            <label>
              <input
                type={type}
                name=''
              />
              <span></span>
            </label>
          </li>
        </ul>
      </div>
    </div>
  )
}

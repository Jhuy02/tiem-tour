import React from 'react'
interface TourPackageInfoProps {
  title: string
  price: number
  note: string
}
export default function TourPackageInfo({
  title,
  price,
  note,
}: TourPackageInfoProps) {
  return (
    <div className='xsm:col-span-full xsm:bg-[rgba(235,229,226,0.32)] xsm:px-[0.75rem] xsm:py-[1.25rem] xsm:rounded-[0.75rem] xsm:space-y-[0.75rem] col-span-1 flex flex-col space-y-[1.25rem]'>
      <div className='flex flex-col space-y-[0.25rem]'>
        <p className='text-[0.875rem] leading-[120%] font-extrabold tracking-[0.01563rem] text-[#303030] uppercase'>
          {title}
        </p>
        <div className='xsm:flex-row xsm:items-center xsm:space-y-0 xsm:space-x-[0.25rem] flex flex-col space-y-[0.25rem]'>
          <p className='text-[1.25rem] leading-[120%] font-extrabold tracking-[-0.025rem] text-[#C83E21] uppercase'>
            <span>{price.toLocaleString('en-US')} USD</span>
          </p>
        </div>
      </div>
      <p className='text-[0.875rem] leading-[150%] tracking-[0.00219rem] text-[#303030]/80'>
        {note}
      </p>
    </div>
  )
}

'use client'

import Link from 'next/link'

interface BlueButtonProps {
  href?: string
  children?: React.ReactNode
  textColor?: string
  borderColor?: string
  imageFilter?: string
  arrowColor?: string
}

export function BlueButton({
  href = '#',
  children,
  textColor = '#19c2c2',
  borderColor = 'rgba(255, 255, 255, 0.12)',
  arrowColor = '#19c2c2',
}: BlueButtonProps) {
  return (
    <Link
      href={href}
      className='flex px-10 py-5 justify-center items-center gap-2.5 rounded-[3.125rem] border-4 shadow-[7px_10px_34.3px_0px_rgba(0,0,0,0.12)] w-fit mx-auto mt-14 relative overflow-hidden transition-all duration-700 ease-in-out z-10 bg-transparent no-underline group'
      style={{borderColor}}
    >
      <p
        className={`text-center font-dvn-luckiest-guy font-normal leading-[120%] mb-0 transition-colors duration-500 ease-in-out group-hover:text-white! sm:text-lg text-[1.125rem]`}
        style={{color: textColor}}
      >
        {children}
      </p>

      <div className='group-hover:[&>svg>path]:fill-white transition-all duration-500 ease-in-out'>
        <Arrow color={arrowColor} />
      </div>

      {/* Hover effect background circle */}
      <div className='absolute inset-0 bg-[#19c2c2] w-[18.41494rem] h-[10.85244rem] rounded-full scale-0 translate-y-full -translate-x-[32%] transition-all duration-500 ease-in-out -z-10 group-hover:scale-100 group-hover:-translate-y-[20%] group-hover:-translate-x-[5%]' />
    </Link>
  )
}

export function Arrow({color}: {color: string}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='27'
      height='25'
      viewBox='0 0 27 25'
      fill='none'
      className='w-[1.575rem] h-6 ease-in-out sm:w-[1.575rem] sm:h-6 transition-all duration-500'
    >
      <path
        d='M17.941 7.24727C16.9173 6.17984 15.829 4.82535 15.0625 3.56076C14.7234 3.00148 14.4778 2.37042 14.1545 1.82599C14.114 1.75834 14.1785 1.68823 14.0131 1.72122L10.5821 5.47372C12.8388 7.72572 15.5495 9.50917 18.4637 10.8092L20.9172 11.7009C14.5332 11.7818 8.09964 11.3504 1.89844 9.80448L1.89844 16.4862C3.23312 16.1554 4.57854 15.8428 5.93472 15.6044C10.8691 14.7374 15.9084 14.5238 20.9172 14.5898L18.6878 15.3751C16.135 16.506 13.6633 17.9702 11.572 19.8255C11.2503 20.1109 10.9766 20.5423 10.5813 20.6941L14.1355 24.5703C16.345 19.8321 20.7179 15.6151 25.6927 13.8663C26.0508 13.6725 25.8217 12.8377 25.8714 12.4524C23.3203 11.7174 20.8667 10.0247 18.9334 8.23716C18.5645 8.01939 18.1387 7.65065 17.941 7.24727Z'
        fill={color}
        className='transition-all duration-500'
      />
    </svg>
  )
}

import IconNavigationPrevV1 from '@/components/icon/IconNavigationPrevV1'
import clsx from 'clsx'
import React from 'react'

export default function ButtonNavPrev(props: React.ComponentProps<'button'>) {
  return (
    <button
      {...props}
      className={clsx(
        'group flex items-center justify-center size-[4rem] rounded-full border-[4px] border-solid cursor-pointer transition-all duration-300 ease-out hover:bg-[#25acab] hover:border-[#25acab] disabled:cursor-not-allowed disabled:pointer-events-none border-[rgba(0,0,0,0.12)]',
        props.className,
      )}
    >
      <IconNavigationPrevV1 className='w-[1.625rem] h-auto shrink-0 group-hover:fill-[#fff] fill-[#3b3943] group-disabled:opacity-[0.25]' />
    </button>
  )
}

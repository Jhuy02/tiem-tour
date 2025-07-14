import IconNavigationNextV1 from '@/components/icon/IconNavigationNextV1'
import clsx from 'clsx'
import React from 'react'

export default function ButtonNavNext(props: React.ComponentProps<'button'>) {
  return (
    <button
      {...props}
      className={clsx(
        'group flex size-[4rem] cursor-pointer items-center justify-center rounded-full border-[4px] border-solid border-[rgba(0,0,0,0.12)] transition-all duration-300 ease-out disabled:pointer-events-none disabled:cursor-not-allowed min-lg:hover:border-[#25acab] min-lg:hover:bg-[#25acab]',
        props.className,
      )}
    >
      <IconNavigationNextV1 className='h-auto w-[1.625rem] shrink-0 fill-[#3b3943] group-disabled:opacity-[0.25] lg:group-hover:fill-[#fff]' />
    </button>
  )
}

import React, {ReactNode} from 'react'
import IconArrowRightV2 from '@/components/icon/IconArrowRightV2'
import clsx from 'clsx'
import './ButtonEffectBackgroundColor.css'

interface ButtonEffectBackgroundColorProps {
  children: ReactNode
}

export default function ButtonEffectBackgroundColor({
  children,
}: ButtonEffectBackgroundColorProps) {
  return (
    <div className='btn__learn-more xsm:self-stretch relative cursor-pointer overflow-hidden rounded-[3.125rem]'>
      <div className='xsm:py-[1.125rem] flex h-[4rem] items-center justify-center rounded-[3.125rem] border-[4px] border-solid border-[rgba(0,0,0,0.12)] px-[2.5rem] py-[1.25rem] hover:border-transparent'>
        <p className='btn__learn-more__content-text'>{children}</p>
        <IconArrowRightV2
          className={clsx(
            'btn__learn-more__content-icon h-[1.5rem] w-[1.575rem] shrink-0',
          )}
        />
      </div>
    </div>
  )
}

import Image from 'next/image'
import React from 'react'
interface TextSpinnerProps {
  className?: string
}
export default function TextSpinner({className}: TextSpinnerProps) {
  return (
    <div className={className}>
      <div className='relative flex size-[10rem] items-center justify-center'>
        <Image
          alt=''
          width={179.7276}
          height={179.7276}
          src={'/text-decor/tiemtour-hagiang-black-circle.svg'}
          className='animate-spin-reverse absolute top-1/2 left-1/2 h-auto w-[11.233rem] -translate-1/2'
        />
        <Image
          alt=''
          width={75.3574}
          height={75.3574}
          src={'/text-decor/tiemtour-hagiang-black-circle-inner.svg'}
          className='h-auto w-[4.70981rem] shrink-0'
        />
      </div>
    </div>
  )
}

import { cn } from '@/lib/utils'
import Image from 'next/image'

interface CautionProps {
  content: string
  className?: string
}

export default function Caution({content, className}: CautionProps) { 
  return (
    <div className={cn('relative flex items-center space-x-[0.375rem] rounded-[0.75rem] bg-[#F5F5F5] p-[0.75rem]', className)}>
      <Image
        alt=''
        width={24}
        height={24}
        src={'/icons/caution.svg'}
        className='h-auto w-[1.5rem] shrink-0'
      />
      <p
        dangerouslySetInnerHTML={{__html: content ?? ''}}
        className='flex-1 text-[0.75rem] leading-[130%] tracking-[0.00188rem] text-[rgba(48,48,48,0.80)]'
      ></p>
    </div>
  )
}

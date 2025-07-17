import { cn } from '@/lib/utils'
import clsx from 'clsx'
import Image from 'next/image'

interface SelectTravelerFieldProps {
  label?: string
  value?: number
  onChange?: (value: number) => void
  onBlur?: () => void
  name?: string
  className?: string
}

export default function SelectTravelerField({
  label,
  value = 0,
  name,
  onChange,
  className,
}: SelectTravelerFieldProps) {
  const handleDecrease = () => {
    if (value > 0) {
      onChange?.(value - 1)
    }
  }

  const handleIncrease = () => {
    onChange?.(value + 1)
  }

  return (
    <div className={cn('relative flex h-[3.25rem] items-center justify-between space-x-[0.5rem] rounded-[0.75rem] border border-solid border-[#EDEDED] bg-white py-[0.6875rem] pr-[0.5rem] pl-[1rem]', className)}>
      {label && (
        <p className='text-[0.875rem] leading-[120%] font-medium tracking-[0.00219rem] text-[#2E2E2E]'>
          {label}
        </p>
      )}
      <div className='flex shrink-0 items-center rounded-[0.5rem] bg-[#F5F5F5]'>
        <button
          type='button'
          disabled={value <= 0}
          onClick={handleDecrease}
          className={clsx(
            'flex size-[2.25rem] cursor-pointer items-center justify-center rounded-[0.5rem] bg-[#ECECEC]',
            {
              'pointer-events-none cursor-not-allowed opacity-50':
                Number(value) <= 0,
              'cursor-pointer opacity-100': Number(value) > 0,
            },
          )}
        >
          <Image
            alt='decrease'
            width={18}
            height={18}
            src={'/icons/remove_minus.svg'}
            className='h-auto w-[1.125rem] shrink-0 select-none'
          />
        </button>
        <div className='inline_text inline-flex size-[2.25rem] items-center justify-center'>
          <span className='text-[0.875rem] leading-[140%] font-bold text-[#2E2E2E]'>
            {value.toString().padStart(2, '0')}
          </span>
          <input
            name={name}
            hidden
          />
        </div>
        <button
          type='button'
          onClick={handleIncrease}
          disabled={value >= 99}
          className={clsx(
            'flex size-[2.25rem] items-center justify-center rounded-[0.5rem] bg-[#ECECEC]',
            {
              'pointer-events-none cursor-not-allowed opacity-50':
                Number(value) >= 99,
              'cursor-pointer opacity-100': Number(value) < 99,
            },
          )}
        >
          <Image
            alt='increase'
            width={18}
            height={18}
            src={'/icons/add_plus.svg'}
            className='h-auto w-[1.125rem] shrink-0 select-none'
          />
        </button>
      </div>
    </div>
  )
}

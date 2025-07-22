'use client'

import {ArrowRight} from '@/app/(main)/tours/[slug]/_components/icon'
import {Button} from '@/components/ui/button'
import scrollToElement from '@/hooks/scrollToElement'

const BookNow = () => {
  return (
    <Button
      className='col-start-2 h-[5.5rem] w-[10.375rem] flex-col items-center justify-center rounded-[1.5rem] bg-[#25ACAB] p-[1.1875rem_1.625rem_1.25rem_1.5625rem] text-white transition-colors duration-300 hover:bg-[#25ACAB]/80'
      onClick={() => scrollToElement(null, 'book-tour-now', 1, 6)}
    >
      <ArrowRight className='h-[1.5rem] w-[1.575rem]' />
      <span className='font-dvn-luckiest-guy leading-[1.2rem] text-white uppercase'>
        Book now
      </span>
    </Button>
  )
}

export default BookNow

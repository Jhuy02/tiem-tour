import {Button} from '@/components/ui/button'
import Link from 'next/link'

const DeliversHeader = () => {
  return (
    <article className='font-dvn-luckiest-guy absolute top-[11.8125rem] left-[6.25rem] w-[67.95rem] text-[2.75rem] leading-[3.575rem] text-[#092F1A]'>
      <h3>
        Tiềm Tours delivers exciting trips while promoting local culture,
        ensuring unforgettable experiences for travelers.
      </h3>
      <Link href={'/about-us'}>
        <Button
          className='mt-[2.5rem] px-[2.5rem] py-[1.25rem] text-[1.125rem] leading-[1.35rem] text-white'
          icon
          red
        >
          About Tiềm
        </Button>
      </Link>
    </article>
  )
}

export default DeliversHeader

import Image from 'next/image'
import Link from 'next/link'
import {cn} from '@/lib/utils'
import {ArrowRight} from '@/app/_components/delivers/_components/icons'

interface MobileLocationCardProps {
  location: {
    name: string
    slug: string
    img: {url: string}
    tourTitle: string
    count: number
  }
  selectedProvince: 'hagiang' | 'caobang' | 'backan'
}

const MobileLocationCard = ({
  location,
  selectedProvince,
}: MobileLocationCardProps) => {
  return (
    <div className='size-[22.2375rem] shrink-0 rounded-[0.75rem] bg-black/18 p-[0.625rem_0.625rem_0.75rem_0.625rem]'>
      <Link href={`/tours?location=${selectedProvince}`}>
        <div className='relative h-[17.44213rem] w-[20.925rem] rounded-[0.65rem]'>
          <div
            className='absolute top-0 left-0 z-[1] h-[7.56406rem] w-[20.925rem] rounded-[0.625rem] opacity-40'
            style={{
              background:
                'linear-gradient(180deg, #000 33.34%, rgba(0, 0, 0, 0.00) 78.45%)',
            }}
          />
          <p className='absolute top-[0.875rem] left-[0.75rem] z-[2] text-[0.875rem] leading-[1.05rem] font-extrabold tracking-[0.00875rem] text-white'>
            {location.name}
          </p>
          <Image
            src={location.img.url || 'card-default.webp'}
            alt='card-default'
            fill
            className='rounded-[0.65rem] object-cover'
          />
        </div>
      </Link>

      <div
        className={cn(
          'flex items-center justify-between',
          location.count === 0 ? 'mt-[1.25rem]' : 'mt-[0.75rem]',
        )}
      >
        <article className='space-y-[0.175rem]'>
          <h4 className='leading-[1.5rem] font-extrabold text-white uppercase'>
            {location.name}
          </h4>
          <p
            className={cn(
              'text-[0.75rem] leading-[1.125rem] text-white',
              location.count === 0 && 'hidden',
            )}
          >
            {location.count} tours for you
          </p>
        </article>
        <Link
          href={`/tours?location=${selectedProvince}`}
          className='rounded-full bg-[#C83E21] p-[0.5rem] transition-opacity duration-300 hover:opacity-80'
        >
          <ArrowRight className='size-[1.10781rem]' />
        </Link>
      </div>
    </div>
  )
}

export default MobileLocationCard

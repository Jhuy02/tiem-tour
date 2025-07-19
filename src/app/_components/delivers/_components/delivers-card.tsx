import {cn} from '@/lib/utils'
import {ILocations} from '@/types/delivers.interface'
import Image from 'next/image'
import Link from 'next/link'
import {ArrowRight} from './icons'

interface DeliversCardProps {
  province: ILocations | undefined
  tour: ILocations | undefined
  currentImage: string
  isImageChanging: boolean
}

const DeliversCard = ({
  province,
  tour,
  currentImage,
  isImageChanging,
}: DeliversCardProps) => {
  return (
    <div className='absolute bottom-[28rem] left-[6.25rem] size-[19.29456rem] rounded-[0.75rem] bg-black/18 p-[0.75rem]'>
      <Link href={`/tours?location=${province?.slug}`}>
        <div className='group relative h-[14.25463rem] w-[17.8175rem] overflow-hidden rounded-[0.65rem]'>
          <div
            className='absolute top-0 left-0 z-[1] h-[4.37656rem] w-full rounded-[0.65rem] opacity-40'
            style={{
              background:
                'linear-gradient(180deg, #000 33.34%, rgba(0, 0, 0, 0.00) 78.45%)',
            }}
          />
          <Image
            src={currentImage || '/card-default.webp'}
            alt='card-default'
            fill
            className={cn(
              'rounded-[0.65rem] object-cover object-center transition-all duration-500 group-hover:scale-110',
              isImageChanging ? 'opacity-10' : 'opacity-100',
            )}
          />
          <p
            className={cn(
              'absolute top-[0.875rem] left-[1rem] z-[2] text-[0.875rem] leading-[1.3125rem] font-extrabold text-white transition-all duration-500',
              isImageChanging ? 'opacity-10' : 'opacity-100',
            )}
          >
            {tour?.name || province?.name}
          </p>
        </div>
      </Link>

      <div className='mt-[0.75rem] flex items-center justify-between'>
        <article className='space-y-[0.175rem]'>
          <h4 className='leading-[1.5rem] font-extrabold text-white uppercase'>
            {province?.name} tours
          </h4>
          <p className='text-[0.75rem] leading-[1.125rem] text-white'>
            {province?.count} tours for you
          </p>
        </article>
        <Link
          href={`/tours?location=${province?.slug}`}
          className='rounded-full bg-[#C83E21] p-[0.5rem] transition-opacity duration-300 hover:opacity-80'
        >
          <ArrowRight className='size-[1.10781rem]' />
        </Link>
      </div>
    </div>
  )
}

export default DeliversCard

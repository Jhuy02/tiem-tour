import ImageFallback from '@/components/image/ImageFallback'
import {type NewsList} from '@/types/news.interface'
import Image from 'next/image'
import Link from 'next/link'

interface NewsCardProps {
  item: NewsList
  backgroundColor: string
}

const NewsCard = ({item, backgroundColor}: NewsCardProps) => {
  return (
    <Link href={`/news/${item.slug}`}>
      <div className='group relative h-[27.3125rem] w-[21.4375rem]'>
        <Image
          src={'/news/card-bg.webp'}
          alt='card-bg'
          className='h-full w-full object-cover'
          fill
          quality={100}
        />
        <div
          className='absolute inset-0 opacity-50'
          style={{backgroundColor}}
        ></div>
        <div className='relative h-[11.875rem] w-full p-[1.75rem_1.5rem]'>
          <p className='font-trip-sans space-x-[0.75rem]'>
            <span className='text-[0.75rem] leading-[0.9rem] font-extrabold tracking-[0.0018rem] text-[#FCFF49] uppercase'>
              {item.category}
            </span>
            <span className='text-white'>•</span>
            <span className='text-[0.75rem] leading-[0.9rem] tracking-[0.0018rem] text-white/60 uppercase transition-all duration-300 group-hover:text-[#303030]'>
              {item.date}
            </span>
          </p>
          <h3 className='font-dvn-luckiest-guy mt-[1rem] line-clamp-3 text-[1.625rem] leading-[1.95rem] tracking-[0.01563rem] text-white/80 uppercase'>
            {item.title}
          </h3>
        </div>
        <div className='relative mx-auto h-[12.0625rem] w-[19.625rem] overflow-hidden rounded-[8.0625rem] transition-transform duration-300'>
          <ImageFallback
            src={item.image !== null ? item.image.url : '/card-default.webp'}
            alt={item.image !== null ? item.image.alt : 'card-default'}
            className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-110'
            width={314}
            height={209.333}
          />
        </div>
      </div>
    </Link>
  )
}

export default NewsCard

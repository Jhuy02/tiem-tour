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
    <Link href={`/${item.slug}`}>
      <div className='relative w-[21.4375rem] h-[27.3125rem] group'>
        <Image
          src={'/news/card-bg.webp'}
          alt='card-bg'
          className='w-full h-full object-cover'
          fill
          quality={100}
        />
        <div
          className='absolute inset-0 opacity-50'
          style={{backgroundColor}}
        ></div>
        <div className='p-[1.75rem_1.5rem] w-full relative h-[11.875rem]'>
          <p className='space-x-[0.75rem] font-trip-sans'>
            <span className='text-[#FCFF49] text-[0.75rem] font-extrabold leading-[0.9rem] tracking-[0.0018rem] uppercase'>
              {item.category}
            </span>
            <span className='text-white'>•</span>
            <span className='text-white/60 text-[0.75rem] leading-[0.9rem] tracking-[0.0018rem] uppercase'>
              {item.date}
            </span>
          </p>
          <h3 className='mt-[1rem] font-dvn-luckiest-guy text-white/80 text-[1.625rem] leading-[1.95rem] tracking-[0.01563rem] uppercase line-clamp-3'>
            {item.title}
          </h3>
        </div>
        <div className='relative w-[19.625rem] h-[12.0625rem] rounded-[8.0625rem] overflow-hidden mx-auto transition-transform duration-300'>
          <ImageFallback
            src={item.image !== null ? item.image.url : '/card-default.webp'}
            alt={item.image !== null ? item.image.alt : 'card-default'}
            className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
            width={314}
            height={209.333}
          />
        </div>
      </div>
    </Link>
  )
}

export default NewsCard

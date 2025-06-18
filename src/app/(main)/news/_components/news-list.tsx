'use client'
import {type NewsList} from '@/types/news.interface'
import Image from 'next/image'
import {useState} from 'react'

const categories = [
  'All News',
  'Category 1',
  'Category 2',
  'Category 3',
  'Category 4',
]

const NewsList = ({news}: {news: NewsList[]}) => {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <>
      <div className='flex justify-between items-center'>
        <h2 className='text-[3rem] leading-[3.9rem] text-[#3B3943] font-dvn-luckiest-guy'>
          News List
        </h2>
        <ul className='flex items-center *:flex *:items-center *:justify-center *:p-[0.8125rem_1.25rem] *:font-trip-sans *:text-[1.125rem] *:leading-[1.4625rem] *:tracking-[0.00281rem] *:font-[900] *:relative'>
          {categories.map((cat, idx) => (
            <li
              key={cat}
              onClick={() => setActiveIndex(idx)}
              className={
                'relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[0.313rem] after:bg-[#25ACAB] after:origin-left after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out' +
                (activeIndex === idx
                  ? ' opacity-100 text-[#303030] cursor-default after:scale-x-100'
                  : ' opacity-40 text-[#303030]/40 cursor-pointer') +
                ' transition-opacity duration-300'
              }
            >
              {cat}
            </li>
          ))}
        </ul>
      </div>
      <div className='grid grid-cols-4 gap-[1.25rem] mt-[1.75rem]'>
        {news.map((item) => (
          <div
            key={item.link}
            className='relative w-[21.4375rem] h-[27.3125rem]'
          >
            <Image
              src={'/news/card-bg.webp'}
              alt='card-bg'
              className='w-full h-full object-cover'
              fill
              quality={100}
            />
            <div className='p-[1.75rem_1.5rem] w-full relative'>
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
            <div className='relative w-[19.625rem] h-[12.0625rem] rounded-[8.0625rem]'>
              <Image
                src={item.image.url}
                alt={item.image.alt}
                className='w-full h-full object-cover'
                quality={100}
                width={19.625}
                height={12.0625}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default NewsList

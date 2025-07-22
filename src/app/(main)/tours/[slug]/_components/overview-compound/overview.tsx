'use client'

import {useState} from 'react'
import Link from 'next/link'
import ImageFallback from '@/components/image/ImageFallback'
import scrollToElement from '@/hooks/scrollToElement'
import {
  Itinerary,
  Pickup,
  Suitable,
} from '@/app/(main)/tours/[slug]/_components/icon'
import {TourDetailContent} from '@/types/tours.interface'
import he from 'he'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import useIsMobile from '@/hooks/useIsMobile'
import {cn} from '@/lib/utils'
import {X} from 'lucide-react'

export const Overview = ({
  data,
  different,
}: {
  data: TourDetailContent['acf_fields']['overview']
  different: TourDetailContent['acf_fields']['faq']
}) => {
  const [expanded, setExpanded] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const fullText = data.desc
  const splitIndex = 160
  const summary = fullText.slice(0, splitIndex)
  const details = fullText.slice(splitIndex)

  const isMobile = useIsMobile()

  return (
    <div className='flex flex-col space-y-4'>
      <p className='leading-[1.6rem] tracking-[0.0025rem] text-[#303030]'>
        {summary}
        {!expanded && details && '...'}
        <span
          className={`transition-opacity duration-500 ease-in-out ${
            expanded ? 'opacity-100' : 'opacity-0'
          } ${expanded ? 'inline' : 'absolute h-0 w-0 overflow-hidden'}`}
          style={{transition: 'opacity 0.5s', verticalAlign: 'baseline'}}
        >
          {details}
        </span>
        {details && (
          <span className='inline'>
            <button
              className='ml-2 inline cursor-pointer text-[#006CE4]'
              onClick={() => setExpanded((prev) => !prev)}
              type='button'
            >
              {expanded ? 'show less' : 'read more'}
            </button>
          </span>
        )}
      </p>

      <article
        className='leading-[1.2rem] tracking-[0.0025rem] text-[#303030] marker:mr-[-0.5rem] [&_strong]:font-medium [&_ul]:mt-[0.5rem] [&_ul]:ml-[0.5rem] [&_ul]:list-inside [&_ul]:list-disc [&_ul]:space-y-[0.375rem] [&_ul]:text-[0.875rem] [&_ul]:leading-[1.3125rem] [&_ul]:tracking-[0.00219rem] [&_ul]:text-[#303030]'
        dangerouslySetInnerHTML={{
          __html: he.decode(data.editor),
        }}
      ></article>

      <div className='flex flex-col rounded-[1.5rem] bg-[#F8F7F6] p-4'>
        <p className='text-[0.875rem] leading-[1.05rem] font-extrabold tracking-[0.01563rem] text-[#303030] uppercase'>
          At a glance
        </p>
        <ul className='mt-[0.75rem] space-y-[0.75rem]'>
          <li className='flex items-center space-x-[0.5rem]'>
            <Pickup className='size-[1.25rem]' />
            <p className='leading-[1.3rem] tracking-[0.0025rem] text-[#303030]'>
              <strong className='font-extrabold'>Depart from: {''}</strong>
              <span className='font-medium'>{data.glance.depart_from}</span>
            </p>
          </li>
          <li className='flex w-full items-center space-x-[0.5rem]'>
            <Itinerary className='size-[1.25rem]' />
            <p className='flex items-center leading-[1.3rem] tracking-[0.0025rem] text-[#303030]'>
              <strong className='flex items-center font-extrabold'>
                Itinerary:{' '}
                <span
                  className='ml-1 font-medium [&_svg]:mx-[0.5rem]'
                  dangerouslySetInnerHTML={{
                    __html: data.glance.itinerary,
                  }}
                ></span>
              </strong>
            </p>
          </li>
          <li className='flex items-center space-x-[0.5rem]'>
            <Suitable className='size-[1.25rem]' />
            <p className='leading-[1.3rem] tracking-[0.0025rem] text-[#303030]'>
              <strong className='font-extrabold'>Time: {''}</strong>
              <span className='font-medium'>{data.glance.time}</span>
            </p>
          </li>
        </ul>
      </div>

      <div className='hidden_scroll flex w-full justify-center space-x-[0.75rem] overflow-x-auto'>
        {isMobile ? (
          <Drawer
            open={isOpen}
            onOpenChange={setIsOpen}
          >
            <DrawerTrigger asChild>
              <div className='xsm:shrink-0 xsm:flex-auto flex-1 cursor-pointer'>
                <ImageFallback
                  src={data.different.image.url}
                  alt={data.different.image.alt}
                  width={data.different.image.width}
                  height={data.different.image.height}
                  className='xsm:size-[4.5rem] xsm:mx-auto h-[6.85619rem] w-full rounded-[1.5rem] object-cover'
                />
                <p className='xsm:w-[9.71875rem] mx-auto mt-[0.375rem] text-center leading-[1.2rem] font-medium tracking-[0.0025rem] text-[#303030]'>
                  {data.different.text}
                </p>
              </div>
            </DrawerTrigger>
            <DrawerContent className='p-[1rem]'>
              <DrawerHeader className='flex flex-row items-start justify-between p-0'>
                <DrawerTitle className='w-[15.5625rem] leading-[1.5rem] font-bold tracking-[-0.01rem] text-[#1A1A1A]'>
                  {data.different.text}
                </DrawerTitle>
                <X
                  onClick={() => setIsOpen(false)}
                  className='size-[1.5rem]'
                />
              </DrawerHeader>
              <article
                className={cn(
                  'xsm:overflow-auto text-[0.875rem] leading-[1.3125rem] tracking-[0.00219rem] text-[#303030]/80',
                  different[0].desc.includes('table') &&
                    'xsm:[&_table]:w-[48rem]! hidden_scroll rounded-[1.5rem] [&_tr]:bg-[#F3F9F9] [&_tr]:text-[#303030] [&_tr:first-child]:bg-white [&_tr:first-child]:py-[0.625rem] [&_tr:first-child]:text-[0.875rem] [&_tr:first-child]:leading-[1.05rem] [&_tr:first-child]:font-medium [&_tr:first-child]:tracking-[0.00219rem] [&_tr:first-child]:text-[#19C2C2] [&_tr:first-child>td]:py-[0.625rem] [&_tr:last-child>td:first-child]:rounded-bl-[0.5rem] [&_tr:last-child>td:last-child]:rounded-br-[0.5rem] [&_tr:nth-child(2)>td]:pt-[1.625rem] [&_tr:nth-child(2)>td]:pb-[0.625rem] [&_tr:nth-child(2)>td:first-child]:rounded-tl-[0.5rem] [&_tr:nth-child(2)>td:last-child]:rounded-tr-[0.5rem] [&_tr>td]:py-[0.625rem] [&_tr>td:first-child]:pl-[1rem]',
                )}
                dangerouslySetInnerHTML={{
                  __html: different[0].desc,
                }}
              ></article>
            </DrawerContent>
          </Drawer>
        ) : (
          <div
            className='xsm:shrink-0 xsm:flex-auto xsm:hidden flex-1 cursor-pointer'
            onClick={() => {
              scrollToElement(null, 'faq', 1, 6)
            }}
          >
            <ImageFallback
              src={data.different.image.url}
              alt={data.different.image.alt}
              width={data.different.image.width}
              height={data.different.image.height}
              className='xsm:size-[4.5rem] xsm:mx-auto h-[6.85619rem] w-full rounded-[1.5rem] object-cover'
            />
            <p className='xsm:w-[9.71875rem] mx-auto mt-[0.375rem] text-center leading-[1.2rem] font-medium tracking-[0.0025rem] text-[#303030]'>
              {data.different.text}
            </p>
          </div>
        )}

        <Link
          href={data.gallery.link.url}
          className='xsm:shrink-0 xsm:flex-auto flex-1 cursor-pointer'
          target='_blank'
        >
          <ImageFallback
            src={data.gallery.image.url}
            alt={data.gallery.image.alt}
            width={data.gallery.image.width}
            height={data.gallery.image.height}
            className='xsm:size-[4.5rem] xsm:mx-auto h-[6.85619rem] w-full rounded-[1.5rem] object-cover'
          />
          <p className='mt-[0.375rem] text-center leading-[1.2rem] font-medium tracking-[0.0025rem] text-[#303030]'>
            {data.gallery.text}
          </p>
        </Link>
      </div>
    </div>
  )
}

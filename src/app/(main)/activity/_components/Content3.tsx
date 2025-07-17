'use client'

import ContentText from '@/app/(main)/activity/_components/ContentText'
import TitleContentText from '@/app/(main)/activity/_components/TitleContentText'
import {IMedia} from '@/types/media.interface'
import Image from 'next/image'
import {useEffect, useRef} from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type Content3Props = {
  data?: {
    title: string
    content_left: string
    content_right: string
    image_1: IMedia
    image_2: IMedia
    image_3: IMedia
  }
}

const Content3 = ({data}: Content3Props) => {
  const imageRef1 = useRef<HTMLDivElement>(null)
  const imageRef2 = useRef<HTMLDivElement>(null)
  const imageRef3 = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const animateReveal = (
      container: HTMLDivElement | null,
      direction: 'left' | 'right' = 'left',
    ) => {
      if (!container) return
      const image = container.querySelector('img')

      const fromX = direction === 'left' ? -100 : 100
      const imageFromX = direction === 'left' ? 0 : -100

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          toggleActions: 'play none none none',
        },
      })

      tl.set(container, {autoAlpha: 1})
      tl.from(container, {
        duration: 1.5,
        xPercent: fromX,
        ease: 'power2.out',
      })
      tl.from(image, {
        duration: 1.5,
        scale: 1.3,
        delay: -1.5,
        ease: 'power2.out',
      })
    }

    animateReveal(imageRef1.current, 'left')
    animateReveal(imageRef2.current, 'right')
    animateReveal(imageRef3.current, 'right')
  }, [])

  return (
    <section className='overflow-hidden'>
      <div className='xsm:p-[2.25rem_0.75rem] p-[3.125rem_24.6875rem]'>
        <TitleContentText>{data?.title}</TitleContentText>
        <div className='xsm:mt-[0.625rem] xsm:grid-cols-1 xsm:gap-4 mt-[1.5625rem] grid grid-cols-2 gap-[2.3125rem]'>
          <ContentText>{data?.content_left}</ContentText>
          <ContentText>{data?.content_right}</ContentText>
        </div>
      </div>

      <div className='xsm:p-[1.625rem_0.75rem] xsm:h-[22.3125rem] grid h-[49.1875rem] grid-cols-2 grid-rows-2 gap-[0.3125rem] p-[4.8125rem_19.4375rem]'>
        <div
          ref={imageRef1}
          className='reveal row-span-2 h-full w-full overflow-hidden'
        >
          <Image
            alt=''
            width={500}
            height={500}
            className='h-full w-full object-cover'
            src={data?.image_1?.url || ''}
          />
        </div>
        <div
          ref={imageRef2}
          className='reveal h-full w-full overflow-hidden'
        >
          <Image
            alt=''
            width={500}
            height={500}
            className='h-full w-full object-cover'
            src={data?.image_2?.url || ''}
          />
        </div>
        <div
          ref={imageRef3}
          className='reveal h-full w-full overflow-hidden'
        >
          <Image
            alt=''
            width={500}
            height={500}
            className='h-full w-full object-cover'
            src={data?.image_3?.url || ''}
          />
        </div>
      </div>
    </section>
  )
}

export default Content3

'use client'
import {IMedia} from '@/types/media.interface'
import gsap from 'gsap'
import Image from 'next/image'
import React, {useLayoutEffect, useRef} from 'react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ImageAnimation({image}: {image: IMedia}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          {scale: 1},
          {
            scale: 1.25,
            duration: 10,
            ease: 'cubic-bezier(0.74, 0.01, 0.23, 0.59)',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 80%', // khi top của container chạm 80% viewport
              toggleActions: 'play none none reverse', // play khi vào, reverse khi rời
            },
          },
        )
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={containerRef}
      className='xsm:h-[14.9375rem] relative h-[43.1095rem] w-full overflow-hidden'
    >
      <Image
        alt=''
        width={1600}
        height={200}
        src={'/about-us/section-team/frame-top-img-animation.webp'}
        className='xsm:top-[-1px] absolute top-0 left-0 z-1 h-auto w-full'
      />
      <Image
        alt=''
        width={1600}
        height={200}
        src={'/about-us/section-team/frame-bottom-img-animation.webp'}
        className='xsm:bottom-[-1px] absolute bottom-0 left-0 z-1 h-auto w-full'
      />
      <Image
        ref={imageRef}
        alt={image?.alt ?? ''}
        width={1600}
        height={689.752}
        src={image?.url}
        className='absolute top-0 left-0 h-full w-full object-cover'
      />
    </div>
  )
}

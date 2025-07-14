'use client'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/all'
import React, {useEffect, useRef} from 'react'

gsap.registerPlugin(ScrollTrigger)

export default function DecorSvgLineMb() {
  const pathRef = useRef<SVGPathElement>(null)
  useEffect(() => {
    const path = pathRef.current
    if (!path) return

    const pathLength = path.getTotalLength()

    // Reset stroke styles for animation
    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    })

    // Animate when in viewport
    gsap.to(path, {
      strokeDashoffset: 0,
      duration: 5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: path,
        start: 'top 50%',
        toggleActions: 'play none none none', // chỉ chạy 1 lần
      },
    })
  }, [])
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={43}
      height={787}
      viewBox='0 0 43 787'
      fill='none'
      className='absolute top-[4.49rem] left-[11.09rem] h-[50rem] w-auto object-cover sm:hidden'
    >
      <path
        ref={pathRef}
        d='M27.8511 0.667969L26.7436 39.4551L16.7699 52.7532C16.4008 52.0144 15.2194 52.5315 13.4462 60.5106C11.6731 68.4896 10.4901 77.1336 10.1202 80.4582C10.1202 82.6745 10.1203 88.6588 10.1203 94.8647C10.1203 102.622 9.01213 107.055 11.2285 115.921C13.4449 124.786 25.6356 123.678 33.393 135.868C44.475 156.924 43.3668 168.006 40.0422 192.386C36.7176 216.767 35.6094 206.793 33.393 227.849C21.2028 293.233 18.9864 314.288 17.8782 319.829C18.9864 339.777 18.9864 344.21 20.0946 349.751C21.2028 355.292 20.0946 357.508 21.2028 367.482C22.311 377.456 22.311 379.672 23.4192 390.754C23.4192 433.309 22.6804 454.291 22.311 459.463V468.328L25.0772 525.68L1.375 586.121L16 624.044V641.821C17.0507 639.056 19.8632 636.132 22.7075 646.561C25.5517 656.99 27.0529 665.918 27.4479 669.078C27.8429 673.424 28.633 683.537 28.633 689.225C28.633 696.336 27.9995 700.5 29.3976 710.282C29.5612 711.427 29.8883 714.208 29.8883 716.171C29.8883 718.625 30.8698 725.986 30.8698 728.44C30.8698 730.894 19.0917 747.089 19.0917 749.542C19.0917 751.505 23.0177 754.941 24.9808 756.413C25.1444 756.086 25.766 756.217 26.9438 759.357C28.1216 767.995 31.0334 776.37 32.3421 779.478L24.9808 786.349'
        stroke='black'
      />
    </svg>
  )
}

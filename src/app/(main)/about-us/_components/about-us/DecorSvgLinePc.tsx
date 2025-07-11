'use client'

import React, {useEffect, useRef} from 'react'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function DecorSvgLinePc() {
  const path1Ref = useRef<SVGPathElement>(null)
  const path2Ref = useRef<SVGPathElement>(null)

  useEffect(() => {
    const path1 = path1Ref.current
    const path2 = path2Ref.current
    if (!path1 || !path2) return

    const path1Length = path1.getTotalLength()
    const path2Length = path2.getTotalLength()

    // Set initial strokeDash
    gsap.set(path1, {
      strokeDasharray: path1Length,
      strokeDashoffset: path1Length,
    })
    gsap.set(path2, {
      strokeDasharray: path2Length,
      strokeDashoffset: path2Length,
    })

    // Timeline để chạy tuần tự
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: path1,
        start: 'top 80%',
        once: true,
      },
    })

    tl.to(path1, {
      strokeDashoffset: 0,
      duration: 3,
      ease: 'power2.out',
    }).to(path2, {
      strokeDashoffset: 0,
      duration: 1.5,
      ease: 'power2.out',
    })
  }, [])

  return (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={364}
        height={508}
        viewBox='0 0 364 508'
        fill='none'
        className='xsm:hidden absolute top-[18.5rem] left-[29.26rem] z-0 h-[31.60638rem] w-[22.64369rem]'
      >
        <path
          ref={path1Ref}
          d='M346.766 1.32812C357.296 20.5328 365.636 50.5305 363.005 73.898C362.109 81.8531 358.655 89.2613 355.998 96.5017C353.883 102.265 350.383 111.776 345.941 115.811C335.14 125.622 342.758 122.899 329.203 124.78C318.171 126.311 307.488 129.439 296.394 131.003C281.582 133.091 270.498 138.5 255.498 146C242.998 149.5 227.498 154 201.733 158.929C181.143 162.885 160.167 162.884 139.412 165.518C120.287 167.944 101.34 165.454 82.6971 172.107C74.1327 175.163 65.0397 176.402 56.3179 178.695C50.0289 180.349 40.961 176.34 35.7092 181.441C26.585 190.304 16.9803 200.695 11.1436 213.653C5.55851 226.054 3.3629 240.559 1.49875 254.011C-0.919446 271.46 11.6815 289.675 19.2222 303.428C24.1952 312.497 25.4264 325.083 32.9064 332.254C42.9713 341.904 53.2925 352.248 63.9019 361.081C92.7834 385.128 112.998 402 137.498 424C161.998 441 154.998 441.5 168.498 452.5C178.998 465.5 187.682 470.799 200.499 479.416C210.994 486.472 191.029 501.296 202.006 507.03'
          stroke='black'
          strokeLinecap='round'
        />
      </svg>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={13}
        height={164}
        viewBox='0 0 13 164'
        fill='none'
        className='xsm:hidden absolute top-[62.5rem] left-[48.9rem] z-0 h-[10.75rem] w-[0.66156rem]'
      >
        <path
          ref={path2Ref}
          d='M8.47185 1C8.99805 9 7.99805 8 7.99805 13C9.26432 20.5976 4.93927 26.9702 3.99805 34.5C2.97164 42.7113 11.0555 44.3218 8.49978 52.5C5.6579 61.594 -2.94246 80.517 3.99927 88.5C7.72554 92.7852 3.81861 114.368 4.49993 120.5C5.31408 127.827 13.967 166.116 11.4992 173'
          stroke='black'
          strokeLinecap='round'
        />
      </svg>
    </>
  )
}

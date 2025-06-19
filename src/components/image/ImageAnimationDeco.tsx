'use client'
import {useMysteriousAnimation} from '@/hooks/useMysteriousAnimation'
import Image from 'next/image'

export default function ImageAnimationDeco() {
  const animationRef = useMysteriousAnimation()

  return (
    <div
      ref={animationRef}
      className='mysterious-animation__top'
    >
      <Image
        src={'/images/path-line2.svg'}
        alt='path1'
        width={1600}
        height={40}
        className='mysterious-animation__path1'
        draggable={false}
      />
      <Image
        src={'/images/path-line3.svg'}
        alt='path2'
        width={1600}
        height={40}
        className='mysterious-animation__path2'
        draggable={false}
      />
      <Image
        src={'/images/path-line1.svg'}
        alt='path3'
        width={1600}
        height={40}
        className='mysterious-animation__path3'
        draggable={false}
      />
      <Image
        src={'/images/path-line4.svg'}
        alt='path4'
        width={1600}
        height={40}
        className='mysterious-animation__path4'
        draggable={false}
      />
      <Image
        src={'/images/path-line5.svg'}
        alt='path5'
        width={1600}
        height={40}
        className='mysterious-animation__path5'
        draggable={false}
      />
      <Image
        src={'/images/path-line6.svg'}
        alt='path6'
        width={1600}
        height={40}
        className='mysterious-animation__path6'
        draggable={false}
      />
    </div>
  )
}

'use client'
import {useMysteriousAnimation} from '@/hooks/useMysteriousAnimation'
import Image from 'next/image'

const ImageAnimationFooter = () => {
  const animationRef = useMysteriousAnimation()
  return (
    <div
      ref={animationRef}
      className='footer-animation__top'
    >
      <Image
        src={'/footer/line-1.webp'}
        alt='path1'
        width={1600}
        height={40}
        className='footer-animation__path1'
        draggable={false}
      />
      <Image
        src={'/footer/line-2.webp'}
        alt='path2'
        width={1600}
        height={40}
        className='footer-animation__path2'
      />
      <Image
        src={'/footer/line-3.webp'}
        alt='path3'
        width={1600}
        height={40}
        className='footer-animation__path3'
        draggable={false}
      />
      <Image
        src={'/footer/line-4.webp'}
        alt='path4'
        width={1600}
        height={40}
        className='footer-animation__path4'
        draggable={false}
      />
      <Image
        src={'/footer/line-5.webp'}
        alt='path5'
        width={1600}
        height={40}
        className='footer-animation__path5'
        draggable={false}
      />
      <Image
        src={'/footer/line-6.webp'}
        alt='path6'
        width={1600}
        height={40}
        className='footer-animation__path6'
        draggable={false}
      />
    </div>
  )
}

export default ImageAnimationFooter

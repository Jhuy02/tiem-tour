'use client'
import {useMysteriousAnimation} from '@/hooks/useMysteriousAnimation'
import Image from 'next/image'
import {usePathname} from 'next/navigation'

const IMAGE_LENGTH = 6

const ImageAnimationFooter = () => {
  const animationRef = useMysteriousAnimation()
  const pathName = usePathname()
  const isDifferent = pathName === '/about-us' || pathName.startsWith('/tours/')

  return (
    <div
      ref={animationRef}
      className='footer-animation__top'
    >
      {Array.from({length: IMAGE_LENGTH}).map((_, index) => (
        <Image
          key={index}
          src={
            isDifferent
              ? `/footer/l-${index + 1}.webp`
              : `/footer/line-${index + 1}.webp`
          }
          alt={`path-${index + 1}`}
          width={1600}
          height={40}
          className={`footer-animation__path${index + 1}`}
          draggable={false}
        />
      ))}
    </div>
  )
}

export default ImageAnimationFooter

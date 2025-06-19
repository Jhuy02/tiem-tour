import Image from 'next/image'
import {ForwardedRef} from 'react'

type Props = {
  desc: string
  descRef: ForwardedRef<HTMLParagraphElement>
}

const ExploreContentItem = ({desc, descRef}: Props) => (
  <div className='explore__content-item'>
    <div className='explore__content-circle'>
      <Image
        src={'/home/explore/circle-text.webp'}
        alt='explore-content-circle-text'
        width={1920}
        height={1080}
        className='explore__content-circle-text'
      />
      <Image
        src={'/pattern.svg'}
        alt='explore-content-circle-pattern'
        width={1920}
        height={1080}
        className='explore__content-circle-pattern'
      />
    </div>
    <p
      className='explore__content-desc'
      ref={descRef}
    >
      {desc}
    </p>
  </div>
)

export default ExploreContentItem

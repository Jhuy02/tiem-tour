import Image from 'next/image'
import {ICustomize} from '@/types/customize.interface'
import ImageFallback from '@/components/image/ImageFallback'

interface CustomizeDecorationsProps {
  data: ICustomize
}

const CustomizeDecorations = ({data}: CustomizeDecorationsProps) => {
  return (
    <>
      <ImageFallback
        src={'/home/customize/rock.webp'}
        alt='rock'
        width={332}
        height={332}
        className='customize__image-rock'
      />
      <ImageFallback
        src={data.image_decor_1.url}
        alt={data.image_decor_1.alt}
        width={data.image_decor_1.width}
        height={data.image_decor_1.height}
        className='customize__image-flower'
      />
      <ImageFallback
        src={data.image_decor_2.url}
        alt={data.image_decor_2.alt}
        width={data.image_decor_2.width}
        height={data.image_decor_2.height}
        className='customize__image-pho'
      />
      <Image
        src={'/images/round.svg'}
        alt='circle'
        width={334}
        height={334}
        className='customize__image-circle'
      />
      <Image
        src={'/images/round-1.svg'}
        alt='circle'
        width={347}
        height={347}
        className='customize__image-circle-mobile'
      />
      <Image
        src={'/images/man.svg'}
        alt='man'
        width={343}
        height={343}
        className='customize__image-objects'
      />
    </>
  )
}

export default CustomizeDecorations

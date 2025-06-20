import {ICustomize} from '@/types/customize.interface'
import ImageFallback from '@/components/image/ImageFallback'

interface CustomizeBackgroundProps {
  data: ICustomize
}

const CustomizeBackground = ({data}: CustomizeBackgroundProps) => {
  return (
    <>
      <ImageFallback
        src={data.background_pc.url}
        alt={data.background_pc.alt}
        width={data.background_pc.width}
        height={data.background_pc.height}
        className='customize__image-bg relative'
      />
      <ImageFallback
        src={data.background_mb.url}
        alt={data.background_mb.alt}
        width={data.background_mb.width}
        height={data.background_mb.height}
        className='customize__image-mobile'
      />
    </>
  )
}

export default CustomizeBackground

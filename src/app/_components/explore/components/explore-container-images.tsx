import Image from 'next/image'

const ExploreContainerImages = () => (
  <>
    <Image
      src={'/background.webp'}
      alt='explore-container-img'
      width={1920}
      height={1080}
      className='explore__container-img'
    />
    <Image
      src={'/home/explore/flower.webp'}
      alt='explore-container-flower'
      width={259.513}
      height={259.513}
      className='explore__container-flower'
    />
    <Image
      src={'/home/explore/river.webp'}
      alt='explore-container-river'
      width={1920}
      height={1080}
      className='xsm:hidden explore__container-river'
    />
    <Image
      src={'/home/explore/river-mb.webp'}
      alt='explore-container-river-mb'
      width={1920}
      height={1080}
      className='xsm:hidden explore__container-river-mb'
    />
    <Image
      src={'/home/explore/river-2.webp'}
      alt='explore-container-river-2'
      width={1920}
      height={1080}
      className='xsm:hidden explore__container-river-2'
    />
    <Image
      src={'/home/explore/fanxipang.webp'}
      alt='explore-container-fanxipang'
      width={1920}
      height={1080}
      className='xsm:hidden explore__container-fanxipang'
    />
    <Image
      src={'/home/explore/fanxipang-2.webp'}
      alt='explore-container-fanxipang-2'
      width={1920}
      height={1080}
      className='xsm:hidden explore__container-fanxipang-2'
    />
    <Image
      src={'/home/explore/coin.webp'}
      alt='explore-container-remove-bg'
      width={1920}
      height={1080}
      className='xsm:hidden explore__container-remove-bg'
    />
    <Image
      src={'/home/explore/bg-mb.webp'}
      alt=''
      width={1920}
      height={1080}
      className='absolute bottom-0 left-0 z-[2] h-[17.23538rem] w-[45.875rem] max-w-none sm:hidden'
    />
    <p className='explore__container-text'>Nhoque River</p>
  </>
)

export default ExploreContainerImages

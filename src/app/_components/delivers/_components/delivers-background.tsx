import Image from 'next/image'

const DeliversBackground = () => {
  return (
    <>
      <Image
        src={'/home/delivers/background.webp'}
        width={2000}
        height={1000}
        alt='background'
        quality={100}
        className='h-[75rem] w-[125rem] object-cover'
      />
      <Image
        src={'/home/delivers/decor-1.webp'}
        alt='decor-1'
        width={1000}
        height={1000}
        className='absolute bottom-0 left-0 z-[1] h-[25.62656rem] w-[100rem] object-cover'
      />
      <Image
        src={'/home/delivers/decor-2.webp'}
        alt='decor-2'
        width={1000}
        height={1000}
        className='absolute right-0 bottom-0 h-[27.3125rem] w-[78.67725rem] object-cover'
      />
      <Image
        src={'/home/delivers/location.svg'}
        alt='location'
        width={136}
        height={162}
        className='absolute top-[16rem] right-[5rem] h-[10.52406rem] w-[9.49819rem] object-cover'
      />
    </>
  )
}

export default DeliversBackground

import Image from 'next/image'

const MobileBackground = () => {
  return (
    <>
      <Image
        src={'/home/delivers/bg-mobile.webp'}
        alt='bg-mobile'
        width={375}
        height={1200}
        className='h-[72.6875rem] w-full object-cover'
      />
      <Image
        src={'/home/delivers/decor-mb-1.webp'}
        alt='decor-mb-1'
        width={557}
        height={162}
        className='absolute bottom-0 left-0 z-[2] h-[10.11563rem] w-[34.8125rem] object-cover'
      />
      <Image
        src={'/home/delivers/decor-mb-2.webp'}
        alt='decor-mb-1'
        width={557}
        height={162}
        className='absolute right-0 bottom-0 z-[1] h-[8.54038rem] w-[24.60175rem] object-cover'
      />
      <Image
        src={'/home/delivers/location.svg'}
        alt='location'
        width={136}
        height={162}
        className='absolute top-[2.0625rem] right-[2rem] h-[3.98081rem] w-[3.34156rem] object-cover'
      />
    </>
  )
}

export default MobileBackground

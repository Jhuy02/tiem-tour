import Image from 'next/image'

type ActivityExploreProps = {
  data?: {
    title_top: string
    title_bottom: string
  }
}

const ActivityExplore = ({data}: ActivityExploreProps) => {
  return (
    <section className='w-full h-[53.625rem] xsm:h-[43.3125rem] relative'>
      <Image
        alt=''
        width={2000}
        height={1000}
        src='/activity/blend-pc.webp'
        className='xsm:hidden w-full h-full object-cover'
      />
      <Image
        alt=''
        width={500}
        height={800}
        src='/activity/blend-mb.webp'
        className='sm:hidden w-full h-full object-cover'
      />
      <h2 className='flex flex-col absolute bottom-[1.81rem] left-[36.63rem] xsm:left-8 xsm:bottom-[unset] xsm:top-6'>
        <span className='sub-title-activity font-dvn-luckiest-guy'>
          {data?.title_top}
        </span>
        <span className='title-activity font-dvn-luckiest-guy'>
          {data?.title_bottom}
        </span>
      </h2>
    </section>
  )
}
export default ActivityExplore

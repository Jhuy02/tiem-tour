'use client'
import {useGSAPAnimation} from '@/hooks/useGSAPAnimation'
import Image from 'next/image'

type ActivityExploreProps = {
  data?: {
    title_top: string
    title_bottom: string
  }
}

const ActivityExplore = ({data}: ActivityExploreProps) => {
  const titleRef = useGSAPAnimation<HTMLHeadingElement>('fadeUp')

  return (
    <section className='xsm:h-[43.3125rem] relative h-[53.625rem] w-full'>
      <Image
        alt=''
        width={2000}
        height={1000}
        src='/activity/blend-pc.webp'
        className='xsm:hidden h-full w-full object-cover'
      />
      <Image
        alt=''
        width={500}
        height={800}
        src='/activity/blend-mb.webp'
        className='h-full w-full object-cover sm:hidden'
      />
      <h2
        ref={titleRef}
        className='xsm:left-8 xsm:bottom-[unset] xsm:top-6 absolute bottom-[1.81rem] left-[36.63rem] flex flex-col'
      >
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

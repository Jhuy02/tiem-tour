'use client'
import {useGSAPAnimation} from '@/hooks/useGSAPAnimation'
import {IMedia} from '@/types/media.interface'
import Image from 'next/image'

type CulinaryExperience1Props = {
  data?: {
    sub_title: string
    title: string
    content: string
    image_1: IMedia
    image_2: IMedia
  }
}

const CulinaryExperience1 = ({data}: CulinaryExperience1Props) => {
  const img1Ref = useGSAPAnimation<HTMLImageElement>('image-clip-bottom')
  const img2Ref = useGSAPAnimation<HTMLImageElement>('image-clip-top')
  return (
    <section>
      <div className='xsm:p-[1.5rem_0] xsm:h-[31.625rem] xsm:grid-cols-1 xsm:grid-rows-2 relative grid h-[48.12rem] w-full grid-cols-2'>
        <Image
          ref={img1Ref}
          alt=''
          width={1000}
          height={1000}
          src={data?.image_1?.url || ''}
          className='xsm:[object-position:0rem_-7rem] size-full object-cover'
        />
        <Image
          ref={img2Ref}
          alt=''
          width={1000}
          height={1000}
          src={data?.image_2?.url || ''}
          className='size-full object-cover'
        />
        <div className='xsm:top-1/2 xsm:-translate-y-1/2 xsm:w-[16.9415rem] xsm:h-[5.22925rem] absolute top-[4rem] left-1/2 z-10 h-[14.94675rem] w-[48.42394rem] -translate-x-1/2 rotate-[3.207deg] bg-[#BB7402] shadow-[0px_4px_43px_0px_rgba(0,0,0,0.12)]' />
        <div className='xsm:top-1/2 xsm:-translate-y-1/2 xsm:w-[16.9415rem] xsm:h-[5.22925rem] xsm:p-[1.15rem_0.675rem] absolute top-[4rem] left-1/2 z-10 flex h-[14.94675rem] w-[48.42394rem] -translate-x-1/2 -rotate-[3.207deg] flex-col justify-between bg-[#FF9D00] p-[1.75rem_3.25rem] shadow-[0px_4px_43px_0px_rgba(0,0,0,0.12)]'>
          <p className='xsm:text-[0.60031rem] font-trip-sans text-[1.71581rem] leading-[1.2] font-normal tracking-[0.00431rem] text-white uppercase'>
            {data?.sub_title}
          </p>
          <h2 className='xsm:text-[0.91838rem] font-dvn-luckiest-guy max-w-[33.125rem] text-[2.625rem] leading-[1.3] font-normal text-white'>
            {data?.title}
          </h2>
        </div>
      </div>
      <div
        dangerouslySetInnerHTML={{__html: data?.content || ''}}
        className='xsm:p-[2.25rem_0.75rem] [&_h3,&_h4]:font-dvn-luckiest-guy [&_p]:font-trip-sans content-culinary-experience-1 w-full p-[3.75rem_24.6875rem_1.875rem_24.6875rem]'
      />
    </section>
  )
}
export default CulinaryExperience1

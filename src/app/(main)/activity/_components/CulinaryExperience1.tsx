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
  return (
    <section>
      <div className='w-full h-[48.12rem] grid grid-cols-2 relative xsm:p-[1.5rem_0] xsm:h-[31.625rem] xsm:grid-cols-1 xsm:grid-rows-2'>
        <Image
          alt=''
          width={1000}
          height={1000}
          src={data?.image_1?.url || ''}
          className='size-full object-cover xsm:[object-position:0rem_-7rem]'
        />
        <Image
          alt=''
          width={1000}
          height={1000}
          src={data?.image_2?.url || ''}
          className='size-full object-cover'
        />
        <div className='absolute top-[4rem] xsm:top-1/2 xsm:-translate-y-1/2 left-1/2 -translate-x-1/2 z-10 w-[48.42394rem] h-[14.94675rem] rotate-[3.207deg] bg-[#BB7402] shadow-[0px_4px_43px_0px_rgba(0,0,0,0.12)] xsm:w-[16.9415rem] xsm:h-[5.22925rem]' />
        <div className='absolute top-[4rem] xsm:top-1/2 xsm:-translate-y-1/2 left-1/2 -translate-x-1/2 z-10 w-[48.42394rem] h-[14.94675rem] -rotate-[3.207deg] bg-[#FF9D00] shadow-[0px_4px_43px_0px_rgba(0,0,0,0.12)] p-[1.75rem_3.25rem] flex flex-col justify-between xsm:w-[16.9415rem] xsm:h-[5.22925rem] xsm:p-[1.15rem_0.675rem]'>
          <p className='text-[1.71581rem] xsm:text-[0.60031rem] font-normal font-trip-sans leading-[1.2] uppercase tracking-[0.00431rem] text-white'>
            {data?.sub_title}
          </p>
          <h2 className='text-[2.625rem] xsm:text-[0.91838rem] max-w-[33.125rem] font-normal font-dvn-luckiest-guy leading-[1.3] text-white'>
            {data?.title}
          </h2>
        </div>
      </div>
      <div
        dangerouslySetInnerHTML={{__html: data?.content || ''}}
        className='xsm:p-[2.25rem_0.75rem] w-full p-[3.75rem_24.6875rem_1.875rem_24.6875rem] [&_h3,&_h4]:font-dvn-luckiest-guy [&_p]:font-trip-sans content-culinary-experience-1'
      />
    </section>
  )
}
export default CulinaryExperience1

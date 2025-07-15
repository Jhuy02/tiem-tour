import {IMedia} from '@/types/media.interface'
import Image from 'next/image'

type CulinaryExperience2Props = {
  data?: {
    sub_title: string
    title: string
    content: string
    image_1: IMedia
    image_2: IMedia
    image_3: IMedia
    image_4: IMedia
  }
}

const CulinaryExperience2 = ({data}: CulinaryExperience2Props) => {
  return (
    <section className='p-[3.75rem_0] flex-center xsm:p-[34rem_0_32.75rem]'>
      <div className='w-[30.375rem] xsm:w-full xsm:min-h-min min-h-[57.75rem] relative'>
        <div className='w-full p-[1rem_2.5rem] xsm:p-[1.5rem_0.75rem] bg-[#F57711]'>
          <p className='text-[1.08325rem] font-normal font-trip-sans leading-[1.2] uppercase tracking-[0.00269rem] text-white'>
            {data?.sub_title}
          </p>
          <h2 className='mt-[0.875rem] text-[2.25rem] font-normal font-dvn-luckiest-guy leading-[1.3] text-white'>
            {data?.title}
          </h2>
        </div>
        <div
          dangerouslySetInnerHTML={{__html: data?.content || ''}}
          className='p-[1.69rem_2.8rem] xsm:p-[2.25rem_0.75rem] content-culinary-experience-2 [&_p]:font-trip-sans'
        />
        <Image
          alt=''
          width={1000}
          height={1000}
          src={data?.image_1?.url || ''}
          className='xsm:h-[15.30556rem] xsm:w-full xsm:translate-x-0 xsm:-top-[34rem] h-[32.375rem] w-[23.3125rem] object-cover top-0 left-0 -translate-x-full absolute'
        />
        <div className='xsm:size-[14.46rem] xsm:rounded-br-[14.46rem] xsm:translate-x-0 xsm:left-0 xsm:-top-[18.7rem] size-[16rem] rounded-br-[16rem] bg-[#F57711] top-[32.375rem] -left-[7.3125rem] -translate-x-full absolute' />
        <Image
          alt=''
          width={1000}
          height={1000}
          src={data?.image_2?.url || ''}
          className='xsm:w-[28.94494rem] xsm:h-[17.03344rem] xsm:left-1/2 xsm:-translate-x-1/2 xsm:-top-[15.75rem] h-[18.6875rem] w-[31.75569rem] object-cover top-[36rem] left-10 -translate-x-full absolute'
        />
        <Image
          alt=''
          width={1000}
          height={1000}
          src={data?.image_3?.url || ''}
          className='xsm:hidden h-[25rem] w-[28.875rem] object-cover -top-[0.875rem] right-0 translate-x-full absolute'
        />
        <Image
          alt=''
          width={1000}
          height={1000}
          src={data?.image_4?.url || ''}
          className='xsm:h-[32.75rem] xsm:translate-x-0 xsm:top-auto xsm:bottom-0 xsm:translate-y-full h-[32.75rem] w-[24.6875rem] object-cover top-[24.125rem] right-0 translate-x-full absolute'
        />
      </div>
    </section>
  )
}
export default CulinaryExperience2

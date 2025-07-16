'use client'
import {useGSAPAnimation} from '@/hooks/useGSAPAnimation'
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
  const img1Ref = useGSAPAnimation<HTMLImageElement>('image-clip-bottom')
  const img2Ref = useGSAPAnimation<HTMLImageElement>('image-zoom-out')
  const img3Ref = useGSAPAnimation<HTMLImageElement>('image-zoom-out')
  const img4Ref = useGSAPAnimation<HTMLImageElement>('image-clip-top')

  return (
    <section className='flex-center xsm:p-[34rem_0_32.75rem] p-[3.75rem_0]'>
      <div className='xsm:w-full xsm:min-h-min relative min-h-[57.75rem] w-[30.375rem]'>
        <div className='xsm:p-[1.5rem_0.75rem] w-full bg-[#F57711] p-[1rem_2.5rem]'>
          <p className='font-trip-sans text-[1.08325rem] leading-[1.2] font-normal tracking-[0.00269rem] text-white uppercase'>
            {data?.sub_title}
          </p>
          <h2 className='font-dvn-luckiest-guy mt-[0.875rem] text-[2.25rem] leading-[1.3] font-normal text-white'>
            {data?.title}
          </h2>
        </div>
        <div
          dangerouslySetInnerHTML={{__html: data?.content || ''}}
          className='xsm:p-[2.25rem_0.75rem] content-culinary-experience-2 [&_p]:font-trip-sans p-[1.69rem_2.8rem]'
        />
        <Image
          ref={img1Ref}
          alt=''
          width={1000}
          height={1000}
          src={data?.image_1?.url || ''}
          className='xsm:h-[15.30556rem] xsm:w-full xsm:translate-x-0 xsm:-top-[34rem] absolute top-0 left-0 h-[32.375rem] w-[23.3125rem] -translate-x-full object-cover'
        />
        <div className='xsm:size-[14.46rem] xsm:rounded-br-[14.46rem] xsm:translate-x-0 xsm:left-0 xsm:-top-[18.7rem] absolute top-[32.375rem] -left-[7.3125rem] size-[16rem] -translate-x-full rounded-br-[16rem] bg-[#F57711]' />
        <Image
          ref={img2Ref}
          alt=''
          width={1000}
          height={1000}
          src={data?.image_2?.url || ''}
          className='xsm:w-[28.94494rem] xsm:h-[17.03344rem] xsm:left-1/2 xsm:-translate-x-1/2 xsm:-top-[15.75rem] absolute top-[36rem] left-10 h-[18.6875rem] w-[31.75569rem] -translate-x-full object-cover'
        />
        <Image
          ref={img3Ref}
          alt=''
          width={1000}
          height={1000}
          src={data?.image_3?.url || ''}
          className='xsm:hidden absolute -top-[0.875rem] right-0 h-[25rem] w-[28.875rem] translate-x-full object-cover'
        />
        <Image
          ref={img4Ref}
          alt=''
          width={1000}
          height={1000}
          src={data?.image_4?.url || ''}
          className='xsm:h-[32.75rem] xsm:translate-x-0 xsm:top-auto xsm:bottom-0 xsm:translate-y-full absolute top-[24.125rem] right-0 h-[32.75rem] w-[24.6875rem] translate-x-full object-cover'
        />
      </div>
    </section>
  )
}
export default CulinaryExperience2

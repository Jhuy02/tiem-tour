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
    <section className='flex-center xsm:w-full mx-auto h-fit max-w-[78.375rem]'>
      <div className='xsm:w-full xsm:min-h-min xsm:flex-col relative flex'>
        <div className='relative h-fit'>
          <div className='xsm:w-full relative h-full w-[23.3125rem]'>
            <Image
              ref={img1Ref}
              alt=''
              width={1000}
              height={1000}
              src={data?.image_1?.url || ''}
              className='xsm:h-[15.30556rem] xsm:w-full h-[32.375rem] w-[23.3125rem] object-cover'
            />
          </div>
          <div className='xsm:bg-white xsm:h-[18.4375rem] xsm:w-full xsm:border-none relative h-[22.5275rem] w-[23.3125rem] border'>
            <div className='xsm:size-[14rem] absolute size-[16rem] rounded-br-[16rem] bg-[#F57711]' />
            <Image
              ref={img2Ref}
              alt=''
              width={1000}
              height={1000}
              src={data?.image_2?.url || ''}
              className='xsm:block absolute z-10 mt-[3rem] hidden h-[17.03344rem] w-[28.94494rem] object-cover'
            />
          </div>
        </div>
        <Image
          ref={img3Ref}
          alt=''
          width={1000}
          height={1000}
          src={data?.image_2?.url || ''}
          className='xsm:hidden absolute bottom-[4.125rem] left-[-6.5rem] z-10 h-[18.6875rem] w-[31.75569rem] object-cover'
        />
        <div className='xsm:border-none xsm:w-full h-fit w-[30.3125rem] border'>
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
            className='xsm:p-[2.25rem_0.75rem] content-culinary-experience-2 [&_p]:font-trip-sans p-[1rem_2.8rem]'
          />
        </div>
        <div className='xsm:h-[32.75rem] xsm:w-full h-[57.75rem] w-[24.6875rem]'>
          <div className='xsm:hidden h-[24.125rem] w-[24.6875rem] border'></div>
          <Image
            ref={img4Ref}
            alt=''
            width={1000}
            height={1000}
            src={data?.image_4?.url || ''}
            className='xsm:block hidden h-[32.75rem] w-full object-cover'
          />
        </div>
        <Image
          ref={img2Ref}
          alt=''
          width={1000}
          height={1000}
          src={data?.image_3?.url || ''}
          className='xsm:hidden absolute top-[-1rem] right-[-4.2rem] h-[25rem] w-[28.875rem] object-cover'
        />
        <Image
          ref={img3Ref}
          alt=''
          width={1000}
          height={1000}
          src={data?.image_4?.url || ''}
          className='xsm:hidden absolute right-0 bottom-[3rem] h-[30.75rem] w-[24.6875rem] object-cover'
        />
      </div>
    </section>
  )
}
export default CulinaryExperience2

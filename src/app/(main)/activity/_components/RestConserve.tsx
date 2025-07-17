'use client'
import {useGSAPAnimation} from '@/hooks/useGSAPAnimation'
import {IMedia} from '@/types/media.interface'
import Image from 'next/image'

type RestConserveProps = {
  data?: {
    sub_title: string
    title: string
    content: string
    image_top: IMedia
    image_top_mb: IMedia
    image_bottom: IMedia
  }
}

const RestConserve = ({data}: RestConserveProps) => {
  const bgRef = useGSAPAnimation<HTMLImageElement>('image-clip-bottom')
  const bgMbRef = useGSAPAnimation<HTMLImageElement>('image-clip-bottom')
  return (
    <section>
      <Image
        ref={bgRef}
        alt=''
        width={2000}
        height={1000}
        src={data?.image_top?.url || ''}
        className='xsm:hidden h-auto w-full object-cover'
      />

      <Image
        ref={bgMbRef}
        alt=''
        width={2000}
        height={1000}
        src={data?.image_top_mb?.url || ''}
        className='h-auto w-full object-cover sm:hidden'
      />

      <div className='xsm:p-0 xsm:pb-[5rem] relative w-full p-[5rem_17.11rem_6.76rem_14.4375rem]'>
        <div className='relative'>
          <div className='xsm:flex-col xsm:border-none flex border'>
            <div className='xsm:w-full xsm:px-3 xsm:min-h-auto flex min-h-[21.47713rem] w-[22.45838rem] flex-col justify-between bg-[#48327B] p-[1.625rem]'>
              <p className='xsm:text-[1.08325rem] xsm:font-normal xsm:mb-[0.875rem] font-trip-sans text-[1.625rem] leading-[1.2] font-bold tracking-[0.01563rem] text-white uppercase'>
                {data?.sub_title}
              </p>
              <h2 className='xsm:text-[2.25rem] xsm:w-auto xsm:leading-[1.2] font-dvn-luckiest-guy w-[18.31831rem] text-[1.625rem] leading-[1.5] font-normal tracking-[0.01563rem] text-white uppercase'>
                {data?.title}
              </h2>
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: data?.content || '',
              }}
              className='xsm:p-[2.25rem_0.75rem] content-rest-conserve [&_p]:font-trip-sans [&_h3]:font-dvn-luckiest-guy flex-1 p-[1.34rem_4.47rem_1.34rem_1.67rem]'
            />
          </div>
          <div className='xsm:hidden h-[20.76rem] w-full border border-t-0'></div>
          <Image
            alt=''
            width={1000}
            height={600}
            src={data?.image_bottom?.url || ''}
            className='xsm:hidden absolute bottom-[0rem] left-1/2 h-[29.209rem] w-[61.09688rem] -translate-x-1/2 object-cover'
          />
        </div>

        <div className='relative w-full sm:hidden'>
          <div className='h-[9.8125rem] w-full bg-[#F57711]' />
          <div className='h-[6.8175rem] w-full bg-[#fff]' />
          <Image
            alt=''
            width={1000}
            height={600}
            src={data?.image_bottom?.url || ''}
            className='absolute bottom-12 h-[13.93344rem] w-[29.14475rem] object-cover'
          />
        </div>
      </div>
    </section>
  )
}
export default RestConserve

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
  return (
    <section>
      <Image
        alt=''
        width={2000}
        height={1000}
        src={data?.image_top?.url || ''}
        className='w-full h-auto xsm:hidden object-cover'
      />

      <Image
        alt=''
        width={2000}
        height={1000}
        src={data?.image_top_mb?.url || ''}
        className='w-full h-auto sm:hidden object-cover'
      />

      <div className='p-[5rem_17.11rem_25.76rem_14.4375rem] xsm:p-0 w-full relative'>
        <div className='flex xsm:flex-col'>
          <div className='xsm:w-full xsm:px-3 xsm:min-h-auto w-[22.45838rem] p-[1.625rem] min-h-[21.47713rem] bg-[#48327B] flex flex-col justify-between'>
            <p className='xsm:text-[1.08325rem] xsm:font-normal xsm:mb-[0.875rem] text-[1.625rem] font-trip-sans font-bold leading-[1.2] uppercase tracking-[0.01563rem] text-white'>
              {data?.sub_title}
            </p>
            <h2 className='xsm:text-[2.25rem] xsm:w-auto xsm:leading-[1.2] text-[1.625rem] w-[18.31831rem] font-dvn-luckiest-guy font-normal leading-[1.5] uppercase tracking-[0.01563rem] text-white'>
              {data?.title}
            </h2>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: data?.content || '',
            }}
            className='flex-1 p-[1.34rem_4.47rem_1.34rem_1.67rem] xsm:p-[2.25rem_0.75rem] content-rest-conserve [&_p]:font-trip-sans [&_h3]:font-dvn-luckiest-guy'
          />
        </div>

        <Image
          alt=''
          width={1000}
          height={600}
          src={data?.image_bottom?.url || ''}
          className='xsm:hidden w-[61.09688rem] h-[29.209rem] object-cover absolute bottom-[5rem] left-1/2 -translate-x-1/2'
        />

        <div className='sm:hidden w-full relative'>
          <div className='w-full h-[9.8125rem] bg-[#F57711]' />
          <div className='w-full h-[6.8175rem] bg-[#fff]' />
          <Image
            alt=''
            width={1000}
            height={600}
            src={data?.image_bottom?.url || ''}
            className=' w-[29.14475rem] h-[13.93344rem] absolute bottom-12 object-cover'
          />
        </div>
      </div>
    </section>
  )
}
export default RestConserve

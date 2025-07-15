import ContentText from '@/app/(main)/activity/_components/ContentText'
import TitleContentText from '@/app/(main)/activity/_components/TitleContentText'
import {IMedia} from '@/types/media.interface'
import Image from 'next/image'

type Content3Props = {
  data?: {
    title: string
    content_left: string
    content_right: string
    image_1: IMedia
    image_2: IMedia
    image_3: IMedia
  }
}

const Content3 = ({data}: Content3Props) => {
  return (
    <section>
      <div className='p-[3.125rem_24.6875rem] xsm:p-[2.25rem_0.75rem]'>
        <TitleContentText>{data?.title}</TitleContentText>
        <div className='grid grid-cols-2 gap-[2.3125rem] mt-[1.5625rem] xsm:mt-[0.625rem] xsm:grid-cols-1 xsm:gap-4'>
          <ContentText className=''>{data?.content_left}</ContentText>
          <ContentText className=''>{data?.content_right}</ContentText>
        </div>
      </div>
      <div className='p-[4.8125rem_19.4375rem] h-[49.1875rem] grid grid-cols-2 grid-rows-2 gap-[0.3125rem] xsm:p-[1.625rem_0.75rem] xsm:h-[22.3125rem]'>
        <Image
          alt=''
          width={500}
          height={500}
          className='w-full h-full object-cover row-span-2'
          src={data?.image_1?.url || ''}
        />
        <Image
          alt=''
          width={500}
          height={500}
          className='w-full h-full object-cover'
          src={data?.image_2?.url || ''}
        />
        <Image
          alt=''
          width={500}
          height={500}
          className='w-full h-full object-cover'
          src={data?.image_3?.url || ''}
        />
      </div>
    </section>
  )
}
export default Content3

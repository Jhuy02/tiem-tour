import ContentText from '@/app/(main)/activity/_components/ContentText'
import TitleContentText from '@/app/(main)/activity/_components/TitleContentText'
import {IMedia} from '@/types/media.interface'
import Image from 'next/image'

type Content1Props = {
  data?: {
    desc: string
    title: string
    content_left: string
    content_right: string
    image_content: IMedia
  }
}

const Content1 = ({data}: Content1Props) => {
  return (
    <section>
      <div className='p-[3.125rem_24.6875rem_0rem_24.6875rem] xsm:p-[2.5rem_0.75rem]'>
        <ContentText className='mb-[1.5625rem] xsm:mb-[4.5rem]'>
          {data?.desc}
        </ContentText>
        <TitleContentText>{data?.title}</TitleContentText>
        <div className='grid grid-cols-2 gap-[2.3125rem] mt-[1.5625rem] xsm:mt-[0.625rem] xsm:grid-cols-1 xsm:gap-4'>
          <ContentText className=''>{data?.content_left}</ContentText>
          <ContentText className=''>{data?.content_right}</ContentText>
        </div>
      </div>
      <Image
        alt=''
        width={2000}
        height={1000}
        src={data?.image_content?.url || ''}
        className='w-full h-auto object-cover'
      />
    </section>
  )
}
export default Content1

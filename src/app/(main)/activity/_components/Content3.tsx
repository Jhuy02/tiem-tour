'use client'
import ContentText from '@/app/(main)/activity/_components/ContentText'
import TitleContentText from '@/app/(main)/activity/_components/TitleContentText'
import {useGSAPAnimation} from '@/hooks/useGSAPAnimation'
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
  const img1Ref = useGSAPAnimation<HTMLImageElement>('image-clip-right')
  const img2Ref = useGSAPAnimation<HTMLImageElement>('image-clip-left')
  const img3Ref = useGSAPAnimation<HTMLImageElement>('image-clip-left')

  return (
    <section>
      <div className='xsm:p-[2.25rem_0.75rem] p-[3.125rem_24.6875rem]'>
        <TitleContentText>{data?.title}</TitleContentText>
        <div className='xsm:mt-[0.625rem] xsm:grid-cols-1 xsm:gap-4 mt-[1.5625rem] grid grid-cols-2 gap-[2.3125rem]'>
          <ContentText className=''>{data?.content_left}</ContentText>
          <ContentText className=''>{data?.content_right}</ContentText>
        </div>
      </div>
      <div className='xsm:p-[1.625rem_0.75rem] xsm:h-[22.3125rem] grid h-[49.1875rem] grid-cols-2 grid-rows-2 gap-[0.3125rem] p-[4.8125rem_19.4375rem]'>
        <Image
          ref={img1Ref}
          alt=''
          width={500}
          height={500}
          className='row-span-2 h-full w-full object-cover'
          src={data?.image_1?.url || ''}
        />
        <Image
          ref={img2Ref}
          alt=''
          width={500}
          height={500}
          className='h-full w-full object-cover'
          src={data?.image_2?.url || ''}
        />
        <Image
          ref={img3Ref}
          alt=''
          width={500}
          height={500}
          className='h-full w-full object-cover'
          src={data?.image_3?.url || ''}
        />
      </div>
    </section>
  )
}
export default Content3

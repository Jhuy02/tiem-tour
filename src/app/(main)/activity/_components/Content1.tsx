'use client'
import ContentText from '@/app/(main)/activity/_components/ContentText'
import TitleContentText from '@/app/(main)/activity/_components/TitleContentText'
import ClipMarkRender from '@/components/clip-mark-render'
import {useClipRevealAnimation} from '@/hooks/useClipRevealAnimation'
import {IMedia} from '@/types/media.interface'
import Image from 'next/image'
import {useRef} from 'react'

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
  const svgRef = useRef<SVGSVGElement>(null!)
  useClipRevealAnimation(svgRef, '.clip-container', 'up', 1.5)

  return (
    <section>
      <div className='xsm:p-[2.5rem_0.75rem] p-[3.125rem_24.6875rem_0rem_24.6875rem]'>
        <ContentText className='xsm:mb-[4.5rem] mb-[1.5625rem]'>
          {data?.desc}
        </ContentText>
        <TitleContentText>{data?.title}</TitleContentText>
        <div className='xsm:mt-[0.625rem] xsm:grid-cols-1 xsm:gap-4 mt-[1.5625rem] grid grid-cols-2 gap-[2.3125rem]'>
          <ContentText className=''>{data?.content_left}</ContentText>
          <ContentText className=''>{data?.content_right}</ContentText>
        </div>
      </div>
      <ClipMarkRender
        id='clip-mask'
        svgRef={svgRef}
      />
      <div
        className='clip-container'
        style={{clipPath: 'url(#clip-mask)'}}
      >
        <Image
          alt=''
          width={2000}
          height={1000}
          src={data?.image_content?.url || ''}
          className='h-auto w-full object-cover'
        />
      </div>
    </section>
  )
}
export default Content1

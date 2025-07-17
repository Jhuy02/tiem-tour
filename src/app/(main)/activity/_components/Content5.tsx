'use client'
import ContentText from '@/app/(main)/activity/_components/ContentText'
import TitleContentText from '@/app/(main)/activity/_components/TitleContentText'
import ClipMarkRender from '@/components/clip-mark-render'
import {useClipRevealAnimation} from '@/hooks/useClipRevealAnimation'
import {IMedia} from '@/types/media.interface'
import Image from 'next/image'
import {useRef} from 'react'

type Content5Props = {
  data?: {
    title: string
    content_left: string
    content_right: string
    image_1: IMedia
    image_2: IMedia
    image_3: IMedia
  }
}

const Content5 = ({data}: Content5Props) => {
  const svgRef1 = useRef<SVGSVGElement>(null!)
  const svgRef2 = useRef<SVGSVGElement>(null!)
  const svgRef3 = useRef<SVGSVGElement>(null!)

  useClipRevealAnimation(svgRef1, '.clip-container-1', 'down', 2)
  useClipRevealAnimation(svgRef2, '.clip-container-2', 'up', 1)
  useClipRevealAnimation(svgRef3, '.clip-container-3', 'down', 2)

  return (
    <section>
      <div className='xsm:p-[2.5rem_0.75rem] p-[3.125rem_24.6875rem]'>
        <TitleContentText>{data?.title}</TitleContentText>
        <div className='xsm:mt-[0.625rem] xsm:grid-cols-1 xsm:gap-4 mt-[1.5625rem] grid grid-cols-2 gap-[2.3125rem]'>
          <ContentText className=''>{data?.content_left}</ContentText>
          <ContentText className=''>{data?.content_right}</ContentText>
        </div>
      </div>
      <div className='xsm:p-[1.625rem_0.75rem] xsm:h-[22.3125rem] xsm:grid-cols-2 xsm:grid-rows-2 grid h-[36.4rem] grid-cols-3 gap-[0.3125rem] p-[4.8125rem_19.4375rem]'>
        <ClipMarkRender
          id='clip-mask-1'
          svgRef={svgRef1}
        />
        <div
          className='clip-container-1'
          style={{clipPath: 'url(#clip-mask-1)'}}
        >
          <Image
            alt='image-1'
            width={500}
            height={500}
            className='h-full w-full object-cover'
            src={data?.image_1?.url || ''}
          />
        </div>
        <ClipMarkRender
          id='clip-mask-2'
          svgRef={svgRef2}
        />
        <div
          className='clip-container-2'
          style={{clipPath: 'url(#clip-mask-2)'}}
        >
          <Image
            alt='image-1'
            width={500}
            height={500}
            className='h-full w-full object-cover'
            src={data?.image_2?.url || ''}
          />
        </div>
        <ClipMarkRender
          id='clip-mask-3'
          svgRef={svgRef3}
        />
        <div
          className='clip-container-3'
          style={{clipPath: 'url(#clip-mask-3)'}}
        >
          <Image
            alt='image-1'
            width={500}
            height={500}
            className='h-full w-full object-cover'
            src={data?.image_3?.url || ''}
          />
        </div>
      </div>
    </section>
  )
}
export default Content5

import ContentText from '@/app/(main)/activity/_components/ContentText'
import TitleContentText from '@/app/(main)/activity/_components/TitleContentText'

type Content4Props = {
  data?: {
    title: string
    content_left: string
    content_right: string
  }
}

const Content4 = ({data}: Content4Props) => {
  return (
    <section className='p-[3.125rem_24.6875rem] xsm:p-[2.25rem_0.75rem]'>
      <TitleContentText>{data?.title}</TitleContentText>
      <div className='grid grid-cols-2 gap-[2.3125rem] mt-[1.5625rem] xsm:mt-[0.625rem] xsm:grid-cols-1 xsm:gap-4'>
        <ContentText className=''>{data?.content_left}</ContentText>
        <ContentText className=''>{data?.content_right}</ContentText>
      </div>
    </section>
  )
}
export default Content4

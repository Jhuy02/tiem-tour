import {IMedia} from '@/types/media.interface'
import Image from 'next/image'

type ActivityMediaProps = {
  data?: {
    title_top: string
    title_bottom: string
    background_pc: IMedia
    background_mb: IMedia
  }
}

const ActivityMedia = ({data}: ActivityMediaProps) => {
  return (
    <section className='w-full h-[49.1875rem] xsm:h-[18rem] xsm:pb-[1.15869rem] relative'>
      <Image
        alt=''
        width={2000}
        height={1000}
        src={data?.background_pc?.url || '/activity/media-pc.webp'}
        className='xsm:hidden w-full h-full object-cover'
      />
      <Image
        alt=''
        width={600}
        height={800}
        src={data?.background_mb?.url || '/activity/media-mb.webp'}
        className='sm:hidden w-full h-full object-cover'
      />

      <div className='absolute top-16 left-[55%] xsm:top-0 transform -translate-x-1/2'>
        <Image
          alt=''
          width={300}
          height={300}
          src={'/images/round.svg'}
          className='size-[32.7rem] xsm:size-[11.7rem] object-cover'
        />
        <Image
          alt=''
          width={300}
          height={300}
          src={'/images/man.svg'}
          className='xsm:top-[2.65rem] xsm:left-12 xsm:w-[4.42956rem] xsm:h-[4.7975rem] w-[12.38563rem] h-[13.41444rem] object-cover absolute top-[7rem] left-[10rem]'
        />
        <h2 className='xsm:top-[6rem] xsm:left-[2rem] flex w-[20rem] xsm:w-[7rem] flex-col absolute top-[17rem] left-[7rem]'>
          <span className='title-activity-media-top font-dvn-luckiest-guy'>
            {data?.title_top}
          </span>
          <span className='-mt-1 xsm:mt-0 title-activity-media-bottom font-dvn-luckiest-guy'>
            {data?.title_bottom}
          </span>
        </h2>

        <div className='size-16 xsm:size-10 xsm:top-[8rem] xsm:left-[3.85rem] rounded-full bg-[#25ACAB] absolute top-[22rem] left-[14.25rem] flex items-center justify-center cursor-pointer'>
          <IconArrow />
        </div>
      </div>
    </section>
  )
}
export default ActivityMedia

const IconArrow = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='27'
    height='26'
    viewBox='0 0 27 26'
    fill='none'
  >
    <path
      d='M19.1595 16.832C20.2219 15.8616 21.5701 14.83 22.8287 14.1034C23.3854 13.782 24.0134 13.5492 24.5553 13.2427C24.6226 13.2043 24.6924 13.2654 24.6596 13.1087L20.9247 9.8564C18.6833 11.9956 16.9083 14.5651 15.6143 17.3274L14.7268 19.6532C14.6463 13.6017 15.0757 7.50323 16.6144 1.625L9.96403 1.625C10.2933 2.89016 10.6044 4.16552 10.8417 5.45106C11.7046 10.1284 11.9173 14.9053 11.8516 19.6532L11.07 17.5399C9.94433 15.1201 8.487 12.7771 6.64051 10.7947C6.35644 10.4898 5.92704 10.2303 5.77597 9.85561L1.91797 13.2247C6.63394 15.3192 10.831 19.4643 12.5716 24.18C12.7645 24.5194 13.5954 24.3023 13.9788 24.3493C14.7104 21.9311 16.3951 19.6054 18.1743 17.7727C18.3911 17.4231 18.758 17.0194 19.1595 16.832Z'
      fill='white'
    />
  </svg>
)

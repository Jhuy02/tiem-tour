import {IGuild} from '@/types/guild.interface'
import Image from 'next/image'

const GuildHeader = ({data}: {data: IGuild}) => (
  <article className='guild__top-header'>
    <div className='guild__top-header-left'>
      <h2 className='guild__top-header-title'>
        <Image
          src={'/pattern.svg'}
          alt='pattern'
          width={64}
          height={64}
        />
        <span>{data.title}</span>
      </h2>
      <p>{data.sub_title}</p>
    </div>
    <p className='guild__top-header-right'>{data.desc}</p>
  </article>
)

export default GuildHeader

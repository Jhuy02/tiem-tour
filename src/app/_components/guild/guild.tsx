'use client'

import {IGuild, IGuildNews} from '@/types/guild.interface'
import Image from 'next/image'
import './styles/styles.css'
import GuildHeader from './_components/guild-header'
import GuildNewsList from './_components/guild-news-list'
import GuildButton from './_components/guild-button'
import useIsMobile from '@/hooks/useIsMobile'

const Guild = ({data, guild}: {data: IGuild; guild: IGuildNews[]}) => {
  const isMobile = useIsMobile()

  return (
    <section id='guild'>
      <Image
        src='/background.webp'
        alt='background'
        width={1920}
        height={1080}
        className='guild__bg-mobile'
      />
      <Image
        src='/home/customer/top.webp'
        alt='top'
        width={1920}
        height={1080}
        className='guild__top'
      />

      <div className='guild__overlay-mobile'></div>
      <div className='guild__overlay-pc'></div>
      <GuildHeader data={data} />
      <GuildNewsList
        guild={guild}
        isMobile={isMobile}
      />
      <GuildButton button={data.button} />
    </section>
  )
}

export default Guild

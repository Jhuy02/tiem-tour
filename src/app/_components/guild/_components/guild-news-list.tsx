import {IGuildNews} from '@/types/guild.interface'
import NewsCard from '../../news-card'
import {Fragment} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {convertRemToPx} from '@/lib/utils'
import 'swiper/css'

const BACKGROUND_CARD_BY_INDEX = [
  '#115A46',
  '#3F0839',
  '#006162',
  '#906811',
  '#800',
]

const GuildNewsList = ({
  guild,
  isMobile,
}: {
  guild: IGuildNews[]
  isMobile: boolean
}) => {
  if (isMobile) {
    return (
      <div className='flex items-center overflow-x-auto scrollbar-hidden relative z-10 space-x-[0.75rem] px-[0.75rem] mt-[1.875rem]'>
        {guild.map((item, index) => {
          const backgroundColor = BACKGROUND_CARD_BY_INDEX[index % 5]
          return (
            <Fragment key={item.permalink}>
              <NewsCard
                style={{backgroundColor}}
                category={item.categories[0].name}
                date={item.date}
                title={item.title}
                thumbSrc={item.thumbnail}
                className='w-[18.625rem] h-[24rem] shrink-0'
              />
            </Fragment>
          )
        })}
      </div>
    )
  }
  return (
    <Swiper
      spaceBetween={convertRemToPx(1.25)}
      slidesPerView={4}
      className='px-[6.25rem]! mt-[4rem] xsm:hidden'
      speed={600}
      effect='slide'
    >
      {guild.map((item, index) => {
        const backgroundColor = BACKGROUND_CARD_BY_INDEX[index % 5]
        return (
          <SwiperSlide key={item.permalink}>
            <NewsCard
              style={{backgroundColor}}
              category={item.categories[0].name}
              date={item.date}
              title={item.title}
              thumbSrc={item.thumbnail}
              className='w-[20.9375rem] h-[27.3125rem]'
            />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default GuildNewsList

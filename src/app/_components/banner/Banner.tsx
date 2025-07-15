'use client'

import ImageFallback from '@/components/image/ImageFallback'
import useIsMobile from '@/hooks/useIsMobile'
import {useSwiperBanner} from '@/hooks/useSwiperBanner'
import {DataBanner} from '@/types/home.interface'
import {TaxonomyResponse} from '@/types/taxonomies.interface'
import {Autoplay, EffectFade} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'
import BannerNav from './BannerNav'
import './Banner.css'
import 'swiper/css'

export default function Banner({
  dataBanner,
  dataTaxonomies,
}: {
  dataBanner: DataBanner[]
  dataTaxonomies: TaxonomyResponse
}) {
  const isMobile = useIsMobile()
  const {initializeSwiper} = useSwiperBanner()

  return (
    <section className='banner'>
      <div className='banner-wapper'>
        <Swiper
          className='swiper-banner_home'
          effect='fade'
          allowTouchMove={false}
          modules={[EffectFade, Autoplay]}
          onSwiper={initializeSwiper}
        >
          {Array.isArray(dataBanner) &&
            dataBanner.map((item: DataBanner, index: number) => {
              if (item?.select === 'upload' && item?.upload_video?.url) {
                return (
                  <SwiperSlide key={index}>
                    <video
                      className='video_banner_upload'
                      src={item.upload_video.url}
                      muted
                      playsInline
                      // autoPlay
                      loop={false}
                    >
                      <p>Your browser does not support the video tag.</p>
                    </video>
                  </SwiperSlide>
                )
              } else if (item?.select === 'video' && item?.link_video_youtube) {
                const videoId = item.link_video_youtube
                  .replace('https://youtu.be/', '')
                  .split('?si=')[0]

                return (
                  <SwiperSlide key={index}>
                    <div
                      className='youtube-video-banner video-banner'
                      data-video-id={videoId}
                    ></div>
                  </SwiperSlide>
                )
              } else if (
                item?.select === 'img' &&
                item?.img_pc?.url &&
                item?.img_mb?.url
              ) {
                return (
                  <SwiperSlide key={index}>
                    <ImageFallback
                      src={isMobile ? item.img_mb.url : item.img_pc.url}
                      alt={isMobile ? item.img_mb.alt : item.img_pc.alt}
                      width={1600}
                      height={1000}
                      className='slider_home_img'
                    />
                  </SwiperSlide>
                )
              }
              return null
            })}
        </Swiper>
        <div className='banner-wapper__overlay'></div>
        <div className='banner-wapper__overlay2'></div>

        <BannerNav dataTaxonomies={dataTaxonomies} />
      </div>
    </section>
  )
}

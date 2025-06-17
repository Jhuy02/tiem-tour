'use client'
import ImageFallback from '@/components/image/ImageFallback'
import useIsMobile from '@/hooks/useIsMobile'
import {DataBanner} from '@/types/home.interface'
import {Swiper, SwiperSlide} from 'swiper/react'
// Import Swiper styles
import 'swiper/css'

export default function Banner({dataBanner}: {dataBanner: DataBanner[]}) {
  const isMobile = useIsMobile()
  return (
    <section className='banner'>
      <div className='banner-wapper'>
        <Swiper className='swiper-banner_home'>
          {Array.isArray(dataBanner) &&
            dataBanner?.map((item: DataBanner, index: number) => {
              if (
                item &&
                item?.select === 'upload' &&
                item?.upload_video?.url
              ) {
                return (
                  <SwiperSlide
                    key={index}
                    className=''
                  >
                    <video
                      className='video_banner_upload'
                      src={item?.upload_video?.url}
                      muted
                      playsInline
                    >
                      <p>Your browser does not support the video tag.</p>
                    </video>
                  </SwiperSlide>
                )
              } else if (
                item &&
                item?.select === 'video' &&
                item?.link_video_youtube
              ) {
                return (
                  <SwiperSlide
                    key={index}
                    className=''
                  >
                    <div
                      className='youtube-video-banner video-banner'
                      video-id={item?.link_video_youtube}
                    ></div>
                  </SwiperSlide>
                )
              } else if (
                item &&
                item?.select === 'img' &&
                item?.img_pc?.url &&
                item?.img_mb?.url
              ) {
                return (
                  <SwiperSlide
                    key={index}
                    className=''
                  >
                    <ImageFallback
                      src={isMobile ? item?.img_mb?.url : item?.img_pc?.url}
                      alt={isMobile ? item?.img_mb?.alt : item?.img_pc?.alt}
                      width={1600}
                      height={1000}
                    />
                  </SwiperSlide>
                )
              }
            })}
        </Swiper>
        <div className='banner-wapper__overlay'></div>
        <div className='banner-wapper__overlay2'></div>
      </div>
    </section>
  )
}

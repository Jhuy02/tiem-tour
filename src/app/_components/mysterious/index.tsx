'use client'

import ImageAnimationDeco from '@/components/image/ImageAnimationDeco'
import ImageFallback from '@/components/image/ImageFallback'
import useIsMobile from '@/hooks/useIsMobile'
import {TypeMysterious} from '@/types/home.interface'
import Image from 'next/image'
import {useEffect, useRef} from 'react'
import './mysterious.css'

export default function Mysterious({data}: {data: TypeMysterious}) {
  const isMobile = useIsMobile()
  const currentVideoIndexRef = useRef<number>(0)

  // Function để gửi message đến iframe
  const sendMessageToIframe = (iframeWindow: Window | null, action: string) => {
    if (iframeWindow) {
      iframeWindow.postMessage({action}, '*')
    }
  }

  useEffect(() => {
    if (isMobile) {
      // Mobile popup video logic
      const mysteriousContentMb = document.querySelector(
        '.mysterious-contentMb',
      )
      const mysteriousmbItem =
        mysteriousContentMb?.querySelectorAll('.mysteriousmb-item')
      const mysteriousmbPopupvideo = document.querySelector(
        '.mysteriousmb-popupvideo',
      )
      const mysteriousmbPopupvideo__item =
        mysteriousmbPopupvideo?.querySelectorAll(
          '.mysteriousmb-popupvideo__item',
        )
      const mysteriousmbPopupvideo__overlay = document.querySelector(
        '.mysteriousmb-popupvideo__overlay',
      )
      const close = mysteriousmbPopupvideo?.querySelector(
        '.mysteriousmb-popupvideo__close',
      )

      if (
        !mysteriousContentMb ||
        !mysteriousmbItem ||
        !mysteriousmbPopupvideo ||
        !mysteriousmbPopupvideo__item ||
        !mysteriousmbPopupvideo__overlay ||
        !close
      ) {
        return
      }

      const handleItemClick = (index: number) => {
        currentVideoIndexRef.current = index
        let iframe = mysteriousmbPopupvideo__item[index].querySelector(
          '.tiktokPlayer',
        ) as HTMLIFrameElement

        if (iframe) {
          sendMessageToIframe(iframe.contentWindow, 'play')
        } else {
          const idTiktok =
            mysteriousmbPopupvideo__item[index].getAttribute('data-id')
          iframe = document.createElement('iframe')
          iframe.classList.add('tiktokPlayer')
          iframe.setAttribute(
            'src',
            `https://www.tiktok.com/player/v1/${idTiktok}?music_info=0&description=0&controls=0&progress_bar=0&play_button=0&volume_control=0&fullscreen_button=0&timestamp=0&loop=1&autoplay=1&rel=0&native_context_menu=0&closed_caption=0`,
          )
          iframe.setAttribute('frameborder', '0')
          iframe.setAttribute('allow', 'autoplay; fullscreen')
          iframe.style.width = '100%'
          iframe.style.height = '100%'
          mysteriousmbPopupvideo__item[index].appendChild(iframe)

          iframe.onload = () => {
            sendMessageToIframe(iframe.contentWindow, 'play')
          }
        }

        mysteriousmbPopupvideo__overlay.classList.add('active')
        close.classList.add('active')
        mysteriousmbPopupvideo__item.forEach((e) => {
          e.classList.remove('active')
        })
        mysteriousmbPopupvideo__item[index].classList.add('active')
        document.querySelector('body')!.style.overflow = 'hidden'
      }

      const handleOverlayClick = () => {
        const iframe = mysteriousmbPopupvideo__item[
          currentVideoIndexRef.current
        ].querySelector('.tiktokPlayer') as HTMLIFrameElement
        if (iframe) {
          sendMessageToIframe(iframe.contentWindow, 'pause')
        }

        close.classList.remove('active')
        mysteriousmbPopupvideo__item[
          currentVideoIndexRef.current
        ].classList.remove('active')
        mysteriousmbPopupvideo__overlay.classList.remove('active')
        document.querySelector('body')!.style.overflow = 'auto'
      }

      // Add event listeners
      mysteriousmbItem.forEach((item, index) => {
        item.addEventListener('click', () => handleItemClick(index))
      })

      mysteriousmbPopupvideo__overlay.addEventListener(
        'click',
        handleOverlayClick,
      )
      close.addEventListener('click', handleOverlayClick)

      // Cleanup function
      return () => {
        mysteriousmbItem.forEach((item, index) => {
          item.removeEventListener('click', () => handleItemClick(index))
        })
        mysteriousmbPopupvideo__overlay.removeEventListener(
          'click',
          handleOverlayClick,
        )
        close.removeEventListener('click', handleOverlayClick)
      }
    } else {
      // Desktop hover logic
      const handleMouseEnter = (elItem: Element) => {
        const visaAbroadImageEl = elItem.querySelector(
          '.mysterious-item__img',
        ) as HTMLElement
        const idTiktok = elItem.getAttribute('data-id')

        if (visaAbroadImageEl) {
          visaAbroadImageEl.style.opacity = '0'
          visaAbroadImageEl.style.visibility = 'hidden'
        }

        let iframe = elItem.querySelector('.tiktokPlayer') as HTMLIFrameElement
        if (!iframe) {
          iframe = document.createElement('iframe')
          iframe.classList.add('tiktokPlayer')
          iframe.setAttribute(
            'src',
            `https://www.tiktok.com/player/v1/${idTiktok}?music_info=0&description=0&controls=0&progress_bar=0&play_button=0&volume_control=0&fullscreen_button=0&timestamp=0&loop=1&autoplay=1&rel=0&native_context_menu=0&closed_caption=0`,
          )
          iframe.setAttribute('frameborder', '0')
          iframe.setAttribute('allow', 'autoplay; fullscreen')
          iframe.style.width = '100%'
          iframe.style.height = '100%'
          elItem.appendChild(iframe)

          iframe.onload = () => {
            sendMessageToIframe(iframe.contentWindow, 'play')
          }
        } else {
          sendMessageToIframe(iframe.contentWindow, 'play')
        }
      }

      const handleMouseLeave = (elItem: Element) => {
        const visaAbroadImageEl = elItem.querySelector(
          '.mysterious-item__img',
        ) as HTMLElement
        if (visaAbroadImageEl) {
          visaAbroadImageEl.style.opacity = ''
          visaAbroadImageEl.style.visibility = ''
        }

        const iframe = elItem.querySelector(
          '.tiktokPlayer',
        ) as HTMLIFrameElement
        if (iframe) {
          sendMessageToIframe(iframe.contentWindow, 'pause')
        }
      }

      // Xử lý sự kiện hover cho các phần tử
      const tiktokItems = document.querySelectorAll('.item-tiktokvideo')
      tiktokItems.forEach((elItem) => {
        elItem.addEventListener('mouseenter', () => handleMouseEnter(elItem))
        elItem.addEventListener('mouseleave', () => handleMouseLeave(elItem))
      })

      // Cleanup function
      return () => {
        tiktokItems.forEach((elItem) => {
          elItem.removeEventListener('mouseenter', () =>
            handleMouseEnter(elItem),
          )
          elItem.removeEventListener('mouseleave', () =>
            handleMouseLeave(elItem),
          )
        })
      }
    }
  }, [isMobile])

  return (
    <section className='mysterious'>
      <ImageAnimationDeco />
      <div className='mysterious-heading'>
        <Image
          className='mysterious-heading__icon'
          src={'/pattern.svg'}
          alt=''
          width={40}
          height={40}
        />
        <h2 className='mysterious-heading__title'>{data?.title}</h2>
      </div>
      {!isMobile && (
        <>
          <div className='mysterious-content pc'>
            <ImageFallback
              src={data?.img_deco1?.url}
              alt={data?.img_deco1?.alt}
              width={150}
              height={126}
              className='mysterious-content__imgdeco1'
            />
            <ImageFallback
              src={data?.img_deco2?.url}
              alt={data?.img_deco2?.alt}
              width={212}
              height={212}
              className='mysterious-content__imgdeco2'
            />
            <div className='mysterious-content__main'>
              <div className='mysterious-main__title'>
                <ImageFallback
                  src={data?.more?.title?.url}
                  alt='Tiềm tour Hagiang'
                  width={236}
                  height={125}
                  className=''
                />
              </div>
              <p className='mysterious-main__desc'>{data?.more?.desc}</p>
              <a
                href={data?.more?.link?.url}
                target={data?.more?.link?.target}
                className='mysterious-main__btn'
              >
                <p>{data?.more?.link?.title}</p>
                <Image
                  src={'/home/mysterious/arrow-right.svg'}
                  alt='arrow-right'
                  width={40}
                  height={40}
                  className=''
                />
              </a>
              <Image
                src={'/home/mysterious/line.svg'}
                alt='line'
                width={449.391}
                height={699.191}
                className='mysterious-img__line'
              />
              <div className='mysterious-img__bgline'></div>
            </div>
            <div
              data-id={data?.checkin?.id_tiktok}
              className='mysterious-content__item item-tiktokvideo'
            >
              <ImageFallback
                src={data?.checkin?.thumnail?.url}
                alt={data?.checkin?.thumnail?.alt}
                width={224.512}
                height={431.987}
                className='mysterious-item__img'
              />

              <p>{data?.checkin?.title}</p>
            </div>
            <div
              data-id={data?.transpot?.id_tiktok}
              className='mysterious-content__item item-tiktokvideo'
            >
              <ImageFallback
                src={data?.transpot?.thumnail?.url}
                alt={data?.transpot?.thumnail?.alt}
                width={224.512}
                height={431.987}
                className='mysterious-item__img'
              />

              <p>{data?.transpot?.title}</p>
            </div>
            <div className='mysterious-content__item mysterious-content__item-transparent'></div>
            <div
              data-id={data?.food?.id_tiktok}
              className='mysterious-content__item item-tiktokvideo'
            >
              <ImageFallback
                src={data?.food?.thumnail?.url}
                alt={data?.food?.thumnail?.alt}
                width={224.512}
                height={431.987}
                className='mysterious-item__img'
              />

              <p>{data?.food?.title}</p>
            </div>
            <div
              data-id={data?.homestay?.id_tiktok}
              className='mysterious-content__item item-tiktokvideo'
            >
              <ImageFallback
                src={data?.homestay?.thumnail?.url}
                alt={data?.homestay?.thumnail?.alt}
                width={224.512}
                height={431.987}
                className='mysterious-item__img'
              />

              <p>{data?.homestay?.title}</p>
            </div>
            <ImageFallback
              src={data?.img_deco3?.url}
              alt={data?.img_deco3?.alt}
              width={434}
              height={190}
              className='mysterious-content__imgdeco3'
            />
          </div>
          <article
            dangerouslySetInnerHTML={{__html: data?.desc}}
            className='customize__desc'
          />
        </>
      )}
      {isMobile && (
        <div className='mysterious-contentMb'>
          <div className='mysteriousmb-main'>
            <ImageFallback
              src={data?.img_deco1?.url}
              alt={data?.img_deco1?.alt}
              width={150}
              height={126}
              className='mysteriousmb-content__imgdeco1'
            />
            <ImageFallback
              src={data?.img_deco3?.url}
              alt={data?.img_deco3?.alt}
              width={434}
              height={190}
              className='mysteriousmb-content__imgdeco3'
            />
            <div className='mysteriousmb-main__title'>
              <ImageFallback
                src={data?.more?.title?.url}
                alt='Tiềm tour Hagiang'
                width={236}
                height={125}
                className=''
              />
            </div>
            <p className='mysteriousmb-main__desc'>{data?.more?.desc}</p>
            <Image
              src={'/home/mysterious/line.svg'}
              alt='line'
              width={449.391}
              height={699.191}
              className='mysteriousmb-img__line'
            />
            <div className='mysteriousmb__linebottom'></div>
          </div>
          <div className='mysteriousmb-item'>
            <ImageFallback
              src={data?.checkin?.thumnail_mb?.url}
              alt={data?.checkin?.thumnail_mb?.alt}
              width={172}
              height={335}
              className='mysteriousmb-item__img'
            />
            <p>{data?.checkin?.title}</p>
          </div>
          <div className='mysteriousmb-item'>
            <ImageFallback
              src={data?.transpot?.thumnail_mb?.url}
              alt={data?.transpot?.thumnail_mb?.alt}
              width={172}
              height={335}
              className='mysteriousmb-item__img'
            />
            <p>{data?.transpot?.title}</p>
          </div>
          <div className='mysteriousmb-item'>
            <ImageFallback
              src={data?.food?.thumnail_mb?.url}
              alt={data?.food?.thumnail_mb?.alt}
              width={172}
              height={335}
              className='mysteriousmb-item__img'
            />
            <p>{data?.food?.title}</p>
          </div>
          <div className='mysteriousmb-item'>
            <ImageFallback
              src={data?.homestay?.thumnail_mb?.url}
              alt={data?.homestay?.thumnail_mb?.alt}
              width={172}
              height={335}
              className='mysteriousmb-item__img'
            />
            <p>{data?.homestay?.title}</p>
          </div>

          <ImageFallback
            src={data?.img_deco2?.url}
            alt={data?.img_deco2?.alt}
            width={212}
            height={212}
            className='mysteriousmb-content__imgdeco2'
          />

          <a
            href={data?.more?.link?.url}
            target={data?.more?.link?.target}
            className='mysteriousmb-btn'
          >
            <p>{data?.more?.link?.title}</p>
            <svg
              className='svgarrow'
              xmlns='http://www.w3.org/2000/svg'
              width='19'
              height='19'
              viewBox='0 0 19 19'
              fill='none'
            >
              <path
                d='M12.1529 5.84088C11.4811 5.10536 10.767 4.17205 10.2639 3.30068C10.0414 2.91531 9.88022 2.48048 9.66803 2.10533C9.64144 2.05872 9.68377 2.01041 9.57523 2.03314L7.32366 4.61881C8.80463 6.17055 10.5835 7.39944 12.4959 8.29524L14.106 8.90969C9.91657 8.96539 5.69454 8.66811 1.625 7.60293L1.625 12.207C2.50088 11.9791 3.38382 11.7636 4.27381 11.5994C7.51197 11.002 10.819 10.8548 14.106 10.9002L12.643 11.4414C10.9677 12.2206 9.34568 13.2296 7.97324 14.5079C7.76214 14.7046 7.58252 15.0018 7.32312 15.1064L9.65554 17.7773C11.1056 14.5124 13.9753 11.6068 17.24 10.4017C17.475 10.2682 17.3247 9.69295 17.3572 9.4275C15.6831 8.92106 14.0729 7.75469 12.8042 6.52296C12.5621 6.3729 12.2826 6.11883 12.1529 5.84088Z'
                fill='white'
              />
            </svg>
            <svg
              className='svg_dashed'
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              width='323'
              height='3'
              viewBox='0 0 323 3'
              fill='none'
            >
              <g clipPath='url(#clip0_1725_19659)'>
                <rect
                  width='323'
                  height='3'
                  fill='#25ACAB'
                />
                <line
                  x1='1.50057'
                  y1='1.50058'
                  x2='337.501'
                  y2='1.62936'
                  stroke='#F9F4EB'
                  strokeWidth='3'
                  strokeLinecap='round'
                  strokeDasharray='8 8'
                />
                <line
                  x1='1.50057'
                  y1='1.50058'
                  x2='337.501'
                  y2='1.62936'
                  stroke='url(#pattern0_1725_19659)'
                  strokeWidth='3'
                  strokeLinecap='round'
                  strokeDasharray='8 8'
                />
              </g>
              <defs>
                <pattern
                  id='pattern0_1725_19659'
                  patternContentUnits='objectBoundingBox'
                  width='0.874129'
                >
                  <use
                    href='#image0_1725_19659'
                    transform='matrix(0.00149169 0 0 0 0 0)'
                  />
                </pattern>
                <clipPath id='clip0_1725_19659'>
                  <rect
                    width='323'
                    height='3'
                    fill='white'
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
          <article
            dangerouslySetInnerHTML={{__html: data?.desc}}
            className='customize__desc'
          />

          <div className='mysteriousmb-popupvideo'>
            <ImageFallback
              src='/home/mysterious/close.svg'
              alt=''
              width={212}
              height={212}
              className='mysteriousmb-popupvideo__close'
            />

            <div
              data-id={data?.checkin?.id_tiktok}
              className='mysteriousmb-popupvideo__item'
            ></div>
            <div
              data-id={data?.transpot?.id_tiktok}
              className='mysteriousmb-popupvideo__item'
            ></div>
            <div
              data-id={data?.food?.id_tiktok}
              className='mysteriousmb-popupvideo__item'
            ></div>
            <div
              data-id={data?.homestay?.id_tiktok}
              className='mysteriousmb-popupvideo__item'
            ></div>
          </div>
          <div className='mysteriousmb-popupvideo__overlay'></div>
        </div>
      )}
    </section>
  )
}

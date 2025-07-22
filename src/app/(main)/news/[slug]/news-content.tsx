'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, {useEffect, useRef, useState} from 'react'
import './news-content.css'
import clsx from 'clsx'
// Interface cho dữ liệu bài viết
export interface NewsData {
  link: string
  title: string
  date: string
  image: {url: string; alt?: string}
  category: string
  content: string
  author: string
}
// Interface cho props component
export interface NewsContentProps {
  data: NewsData
}
export default function NewsContent({data}: NewsContentProps) {
  const SHARE_ITEMS = [
    {
      icon: '/images/facebook.svg',
      href: `https://www.facebook.com/sharer/sharer.php?u=${data.link}`,
    },
    {
      icon: '/images/instagram.svg',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${data.link}`,
    },
    {
      icon: '/images/twitter.svg',
      href: `https://twitter.com/intent/tweet?url=${data.link}`,
    },
  ]
  const MAX_VISIBLE_SUMMARY_ITEMS = 4
  const [expandedSummary, setExpandedSummary] = useState<boolean>(false)
  const [headingCount, setHeadingCount] = useState<number>(0)
  const [isSharing, setIsSharing] = useState<boolean>(false)

  const newsDetailContentRef = useRef<HTMLDivElement>(null)
  const summaryContentRef = useRef<HTMLUListElement>(null)

  // const handleCopyUrl = (e: MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault()
  //   const currentUrl = window.location.href

  //   navigator.clipboard
  //     .writeText(currentUrl)
  //     .then(() => {
  //       // Có thể hiện thông báo đã sao chép thành công
  //       alert('Đã sao chép liên kết!')
  //     })
  //     .catch((err) => {
  //       console.error('Không thể sao chép liên kết: ', err)
  //     })
  // }

  const handleClickShare = async () => {
    if (typeof window === 'undefined' || !navigator.share || isSharing) return
    setIsSharing(true)
    const shareData = {
      title: 'Tiemtour',
      text: 'Tiemtour',
      url: window.location.origin,
    }
    try {
      await navigator.share(shareData)
    } catch (error) {
      console.error(error)
    } finally {
      setIsSharing(false)
    }
  }

  const handleToggleSummaryContent = () => {
    if (!summaryContentRef.current) return
    const headings = summaryContentRef.current.querySelectorAll('li')
    headings.forEach((item, index) => {
      item.style.display =
        !expandedSummary || index < MAX_VISIBLE_SUMMARY_ITEMS ? 'block' : 'none'
    })
    setExpandedSummary(!expandedSummary)
  }

  const generateSummaryContent = () => {
    const containerEl = newsDetailContentRef.current
    const summaryEl = summaryContentRef.current
    if (!containerEl || !summaryEl) return
    const headings = containerEl.querySelectorAll('h1, h2, h3, h4, h5, h6')
    setHeadingCount(headings.length)
    summaryEl.innerHTML = ''

    headings.forEach((heading, index) => {
      const text = heading.textContent?.trim()
      if (!text) return

      const li = document.createElement('li')
      li.textContent = text
      li.style.display = index < MAX_VISIBLE_SUMMARY_ITEMS ? 'block' : 'none'
      li.classList.add('cursor-pointer')

      li.addEventListener('click', () => {
        const offset = 50
        const targetY =
          heading.getBoundingClientRect().top + window.pageYOffset - offset
        window.scrollTo({top: targetY, behavior: 'smooth'})
      })

      summaryEl.appendChild(li)
    })
  }

  const setAllLinksTargetBlank = () => {
    newsDetailContentRef.current?.querySelectorAll('a')?.forEach((link) => {
      link.setAttribute('target', '_blank')
    })
  }

  const wrapAllTables = () => {
    const container = newsDetailContentRef.current
    console.log(container)
    if (!container) return
    container.querySelectorAll('table').forEach((table) => {
      const wrapper = document.createElement('div')
      wrapper.classList.add('table-responsive')
      table.parentNode?.insertBefore(wrapper, table)
      wrapper.appendChild(table)
    })
  }

  useEffect(() => {
    generateSummaryContent()
    setAllLinksTargetBlank()
    setTimeout(() => {
      wrapAllTables()
    }, 0)
  }, [])

  return (
    <section className='relative max-sm:px-[1rem] max-sm:pt-[4.375rem]'>
      <div className='xsm:max-w-full xsm:py-[2rem] xsm:gap-[1.125rem] xsm:flex-col-reverse ml-auto flex max-w-[95.5625rem]'>
        <div className='xsm:static xsm:h-fit xsm:w-full xsm:pb-0 sticky top-0 flex h-[100vh] w-[8.125rem] flex-col justify-end pb-[4rem]'>
          <div className='xsm:items-start flex flex-col items-center'>
            <p className='font-trip-sans xsm:border-none xsm:py-0 mb-[1rem] border-b-[1px] border-solid border-[#202020] py-[0.5rem] text-[1rem] leading-[130%] font-extrabold tracking-[0.0025rem] text-[#303030]'>
              Share
            </p>
            <ul className='xsm:flex-row flex flex-col items-center gap-[0.75rem]'>
              <li className='flex size-[3.125rem] shrink-0 items-center justify-center'>
                <button
                  // onClick={handleCopyUrl}
                  onClick={handleClickShare}
                  className='flex size-full cursor-pointer items-center justify-center rounded-full'
                >
                  <Image
                    alt=''
                    width={50}
                    height={50}
                    src='/images/copy.svg'
                    className='h-auto w-full'
                  />
                </button>
              </li>
              {SHARE_ITEMS.map((item, index) => {
                return (
                  <li
                    key={index}
                    className='flex size-[3.125rem] shrink-0 items-center justify-center'
                  >
                    <Link
                      href={item.href}
                      target='_blank'
                      className='flex size-full cursor-pointer items-center justify-center rounded-full'
                    >
                      <Image
                        alt=''
                        width={50}
                        height={50}
                        src={item.icon}
                        className='h-auto w-full'
                      />
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div className='max-w-[100%] flex-1 sm:ml-[8.44rem] sm:max-w-[75rem] sm:pt-[12.1875rem] lg:max-w-[60rem]'>
          <h1
            dangerouslySetInnerHTML={{__html: data.title}}
            className='font-dvn-luckiest-guy mb-[1.5rem] text-[1.375rem] leading-[130%] font-normal tracking-[0.01563rem] text-[#3B3943] uppercase sm:mb-[2.5rem] sm:text-[2.25rem] sm:leading-[120%]'
          ></h1>
          <div className='mb-[1.5rem] bg-[rgba(72,48,13,0.20)] p-[1rem] sm:mb-[2.5rem] sm:p-[1.875rem]'>
            <p className='font-trip-sans mb-[1rem] text-[1.125rem] leading-[130%] font-bold tracking-[0.00281rem] text-[#303030] sm:font-extrabold'>
              Summary of content
            </p>
            <ul
              ref={summaryContentRef}
              className={clsx('summary-list')}
            ></ul>
            {headingCount > MAX_VISIBLE_SUMMARY_ITEMS && (
              <button
                onClick={handleToggleSummaryContent}
                className='font-trip-sans mt-[0.5rem] cursor-pointer bg-transparent text-[1rem] leading-[150%] font-normal tracking-[0.0025rem] text-[#006CE4] sm:leading-[160%]'
              >
                {expandedSummary ? 'Less' : 'More'}
              </button>
            )}
          </div>
          <div
            ref={newsDetailContentRef}
            className={clsx('news-content')}
            dangerouslySetInnerHTML={{__html: data.content}}
          ></div>
          <div className='font-trip-sans flex items-center text-[1rem] leading-[160%] font-normal tracking-[0.0025rem] text-[#303030]'>
            Published by:{' '}
            <span className='ml-[0.3125rem] inline-block text-[0.875rem] leading-[120%] font-bold tracking-[0.01563rem] uppercase'>
              {data.author}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

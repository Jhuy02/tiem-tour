'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, {MouseEvent, useEffect, useRef, useState} from 'react'
import styles from './news-content.module.css'
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
      href: `https://www.instagram.com/?url=${data.link}`,
    },
    {
      icon: '/images/twitter.svg',
      href: `https://twitter.com/intent/tweet?url=${data.link}`,
    },
  ]
  const MAX_VISIBLE_SUMMARY_ITEMS = 4
  const [expandedSummary, setExpandedSummary] = useState<boolean>(false)
  const [headingCount, setHeadingCount] = useState<number>(0)

  const newsDetailContentRef = useRef<HTMLDivElement>(null)
  const summaryContentRef = useRef<HTMLUListElement>(null)

  const handleCopyUrl = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const currentUrl = window.location.href

    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        // Có thể hiện thông báo đã sao chép thành công
        alert('Đã sao chép liên kết!')
      })
      .catch((err) => {
        console.error('Không thể sao chép liên kết: ', err)
      })
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
    if (!container) return

    container.querySelectorAll('table').forEach((table) => {
      const wrapper = document.createElement('div')
      wrapper.classList.add(styles.tableResponsive)
      table.parentNode?.insertBefore(wrapper, table)
      wrapper.appendChild(table)
    })
  }

  useEffect(() => {
    generateSummaryContent()
    setAllLinksTargetBlank()
    wrapAllTables()
  }, [newsDetailContentRef.current])

  return (
    <section className='relative max-sm:px-[1rem] max-sm:pt-[4.375rem]'>
      <div className='flex max-w-[95.5625rem] ml-auto'>
        <div className='hidden sticky top-0 w-[8.125rem] h-[100vh] sm:flex flex-col justify-end pb-[4rem]'>
          <div className='flex flex-col items-center'>
            <p className='text-[#303030] font-trip-sans text-[1rem] font-extrabold leading-[130%] tracking-[0.0025rem] py-[0.5rem] border-b-[1px] border-solid border-[#202020] mb-[1rem]'>
              Share
            </p>
            <ul className='flex flex-col items-center'>
              <li className='flex shrink-0 items-center justify-center size-[3.125rem] not-last:mb-[0.75rem]'>
                <button
                  onClick={handleCopyUrl}
                  className='flex items-center justify-center cursor-pointer size-full rounded-full'
                >
                  <Image
                    alt=''
                    width={50}
                    height={50}
                    src='/images/copy.svg'
                    className='w-full h-auto'
                  />
                </button>
              </li>
              {SHARE_ITEMS.map((item, index) => {
                return (
                  <li
                    key={index}
                    className='flex shrink-0 items-center justify-center size-[3.125rem] not-last:mb-[0.75rem]'
                  >
                    <Link
                      href={item.href}
                      target='_blank'
                      className='flex items-center justify-center cursor-pointer size-full rounded-full'
                    >
                      <Image
                        alt=''
                        width={50}
                        height={50}
                        src={item.icon}
                        className='w-full h-auto'
                      />
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div className='max-w-[100%] sm:max-w-[75rem] lg:max-w-[60rem] flex-1 py-[2rem] sm:pt-[12.1875rem] sm:ml-[8.44rem]'>
          <h1
            dangerouslySetInnerHTML={{__html: data.title}}
            className='text-[#3B3943] font-dvn-luckiest-guy text-[1.375rem] sm:text-[2.25rem] font-normal leading-[130%] sm:leading-[120%] tracking-[0.01563rem] uppercase mb-[1.5rem] sm:mb-[2.5rem]'
          ></h1>
          <div className='p-[1rem] sm:p-[1.875rem] bg-[rgba(72,48,13,0.20)] mb-[1.5rem] sm:mb-[2.5rem]'>
            <p className='text-[#303030] font-trip-sans text-[1.125rem] font-bold sm:font-extrabold leading-[130%] tracking-[0.00281rem] mb-[1rem]'>
              Summary of content
            </p>
            <ul
              ref={summaryContentRef}
              className={clsx(styles.summaryList)}
            ></ul>
            {headingCount > MAX_VISIBLE_SUMMARY_ITEMS && (
              <button
                onClick={handleToggleSummaryContent}
                className='font-trip-sans text-[#006CE4] text-[1rem] font-normal leading-[150%] sm:leading-[160%] tracking-[0.0025rem] cursor-pointer bg-transparent mt-[0.5rem]'
              >
                {expandedSummary ? 'Less' : 'More'}
              </button>
            )}
          </div>
          <div
            ref={newsDetailContentRef}
            className={clsx(styles.newsContent)}
            dangerouslySetInnerHTML={{__html: data.content}}
          ></div>
          <div className=' text-[#303030] font-trip-sans text-[1rem] font-normal leading-[160%] tracking-[0.0025rem] flex items-center'>
            Published by:{' '}
            <span className='inline-block ml-[0.3125rem] text-[0.875rem] font-bold leading-[120%] tracking-[0.01563rem] uppercase'>
              {data.author}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

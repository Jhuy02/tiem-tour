'use client'

import {getPathFromUrl} from '@/hooks/useGetPathFromUrl'
import {useHeaderScroll} from '@/hooks/useHeaderScroll'
import IconArrowHeader from '@/layout/header/header-pc/IconArrowHeader'
import IconLocation from '@/layout/header/header-pc/IconLocation'
import IconSearch from '@/layout/header/header-pc/IconSearch'
import SvgBacKan from '@/layout/header/header-pc/SvgBacKan'
import SvgCaoBang from '@/layout/header/header-pc/SvgCaoBang'
import SvgHaGiang from '@/layout/header/header-pc/SvgHaGiang'
import {DataLocation, HeaderOption, PageLink} from '@/types/options.interface'
import he from 'he'
import Image from 'next/image'
import Link from 'next/link'
import './Header-pc.css'
import {useRouter} from 'next/navigation'
import SearchPopup from '@/layout/header/header-pc/SearchPopup'
import {useState, useEffect} from 'react'

export default function HeaderPc({
  HeaderOption,
  ImgLocation,
}: {
  HeaderOption: HeaderOption
  ImgLocation: DataLocation
}) {
  const {isHeaderHidden, isToursActive, setIsToursActive} = useHeaderScroll()
  const [isShowSearchPopup, setIsShowSearchPopup] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchQueryDebounced, setSearchQueryDebounced] = useState('')
  const router = useRouter()

  // Debounce logic
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchQueryDebounced(searchQuery)
    }, 500) // 500ms delay

    return () => clearTimeout(timer)
  }, [searchQuery])

  return (
    <header
      id='header'
      className={`header__wrapper xsm:hidden! ${isHeaderHidden ? 'hidden' : ''}`}
    >
      <div className='header__container'>
        <nav className='header__left-nav'>
          <ul>
            <li>
              <Link href='/'>
                <Image
                  className='header__logo'
                  alt={HeaderOption.logo.alt}
                  src={HeaderOption.logo.url}
                  width={150}
                  height={40}
                />
              </Link>
            </li>
            {Array.isArray(HeaderOption?.page_list) &&
              HeaderOption?.page_list?.map(
                (item: {page: PageLink}, index: number) => {
                  if (item?.page?.url === '/tours') {
                    return (
                      <li
                        key={index}
                        className={`header__left-nav-tour ${
                          isToursActive ? 'active' : ''
                        }`}
                        onMouseEnter={() => setIsToursActive(true)}
                        onMouseLeave={() => setIsToursActive(false)}
                      >
                        <div className='header__left-nav-tour-icon'>
                          <IconLocation />
                          <Image
                            src={'/header/de.svg'}
                            alt=''
                            width={40}
                            height={40}
                          />
                        </div>
                        <Link
                          href={item?.page?.url}
                          className='tours-trigger'
                        >
                          {he.decode(item?.page?.title)}
                        </Link>
                        <IconArrowHeader />
                        <div className='tours-dropdown'>
                          <ul>
                            <li className='tours-dropdown-first-item'>
                              <Link
                                href={`/tours?location=${ImgLocation?.ha_giang?.slug}`}
                              >
                                <Image
                                  className='tours-dropdown-item-bg'
                                  src={'/header/menu_item_cb.webp'}
                                  alt=''
                                  width={40}
                                  height={40}
                                />
                                <div className='minimap-svg__wapper'>
                                  <SvgHaGiang
                                    src={ImgLocation?.ha_giang?.img?.url}
                                  />
                                </div>
                                <p>{ImgLocation?.ha_giang?.name}</p>
                              </Link>
                            </li>
                            <li className='tours-dropdown-first-item tours-dropdown-first-item2'>
                              <Link
                                href={`/tours?location=${ImgLocation?.cao_bang?.slug}`}
                              >
                                <Image
                                  className='tours-dropdown-item-bg'
                                  src={'/header/menu_item_cb.webp'}
                                  alt=''
                                  width={40}
                                  height={40}
                                />

                                <SvgCaoBang
                                  src={ImgLocation?.cao_bang?.img?.url}
                                />
                                <p>{ImgLocation?.cao_bang?.name}</p>
                              </Link>
                            </li>
                            <li className='tours-dropdown-first-item'>
                              <Link
                                href={`/tours?location=${ImgLocation?.bac_kan?.slug}`}
                              >
                                <Image
                                  className='tours-dropdown-item-bg'
                                  src={'/header/menu_item_cb.webp'}
                                  alt=''
                                  width={40}
                                  height={40}
                                />
                                <div className='minimap-svg__wapper'>
                                  <SvgBacKan
                                    src={ImgLocation?.bac_kan?.img?.url}
                                  />
                                </div>
                                <p>{ImgLocation?.bac_kan?.name}</p>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                    )
                  } else {
                    return (
                      <li key={index}>
                        <Link
                          target={item?.page?.target}
                          href={getPathFromUrl(item?.page?.url)}
                        >
                          {he.decode(item?.page?.title)}
                        </Link>
                      </li>
                    )
                  }
                },
              )}
          </ul>
        </nav>
      </div>
      <div className='header__right'>
        <div
          className='header__right-search relative'
          onClick={() => setIsShowSearchPopup(true)}
        >
          <input
            type='text'
            placeholder='Search'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <IconSearch
            className='cursor-pointer'
            onClick={() => router.push(`/tours?s=${searchQuery}`)}
          />
          <SearchPopup
            query={searchQueryDebounced}
            isOpen={isShowSearchPopup}
            setIsOpen={setIsShowSearchPopup}
          />
        </div>
        <div className='header__right-hotline'>
          <Link
            href={`tel:${HeaderOption?.let_your_trip?.hotline}`}
            target='__blank'
          >
            <p>{HeaderOption?.let_your_trip?.title}</p>
            <Image
              src={HeaderOption?.let_your_trip?.hotline_image?.url}
              alt={HeaderOption?.let_your_trip?.hotline_image?.alt}
              width={40}
              height={40}
            />
          </Link>
        </div>
      </div>
    </header>
  )
}

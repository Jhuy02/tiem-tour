import IconArrow from '@/components/icon/IconArrow'
import ImageFallback from '@/components/image/ImageFallback'
import {getPathFromUrl} from '@/hooks/useGetPathFromUrl'
import IconArrowHeader from '@/layout/header/header-pc/IconArrowHeader'
import {
  DataLocation,
  HeaderMobile,
  PageLink,
  SocialLink,
} from '@/types/options.interface'
import Image from 'next/image'
import Link from 'next/link'

// Utility function to decode HTML entities
const decodeHtmlEntities = (text: string): string => {
  if (typeof text !== 'string') return text
  const textarea = document.createElement('textarea')
  textarea.innerHTML = text
  return textarea.value
}

export default function MenuPopup({
  page_link,
  Location,
  HeaderMobile,
}: {
  page_link: {page: PageLink}[]
  Location: DataLocation
  HeaderMobile: HeaderMobile
}) {
  return (
    <div className='mobile-menu-popup active'>
      <div className='mobile-menu-popup__header'>
        <h2 className='mobile-menu-popup__header-title'>
          <Image
            className='header__logo'
            src={HeaderMobile?.logo?.url}
            alt={HeaderMobile?.logo?.alt}
            width={135}
            height={50}
            style={{
              filter:
                'brightness(0) saturate(100%) invert(8%) sepia(100%) saturate(7492%) hue-rotate(230deg) brightness(97%) contrast(101%)',
            }}
          />
        </h2>
      </div>
      <div className='mobile-menu-popup__content'>
        <nav>
          <ul className='mobile-menu-popup__nav'>
            {Array.isArray(page_link) &&
              page_link.map((item: {page: PageLink}, index: number) => {
                if (item?.page?.url === '#') {
                  return (
                    <li key={index}>
                      <p>
                        {decodeHtmlEntities(item?.page?.title)}
                        <IconArrowHeader />
                      </p>
                      <ul className='mobile-menu-popup__sub-nav'>
                        <li>
                          <Link
                            href={`/tours?location=${Location?.ha_giang?.slug}`}
                          >
                            {Location?.ha_giang?.name}
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={`/tours?location=${Location?.cao_bang?.slug}`}
                          >
                            {Location?.cao_bang?.name}
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={`/tours?location=${Location?.bac_kan?.slug}`}
                          >
                            {Location?.bac_kan?.name}
                          </Link>
                        </li>
                      </ul>
                    </li>
                  )
                } else {
                  return (
                    <li key={index}>
                      <Link
                        target={item?.page?.target}
                        href={getPathFromUrl(item?.page?.url)}
                      >
                        {decodeHtmlEntities(item?.page?.title)}
                      </Link>
                    </li>
                  )
                }
              })}
          </ul>
        </nav>
        <div className='mobile-menu-popup__footer'>
          <Link
            target={HeaderMobile?.button_link?.target || ''}
            href={HeaderMobile?.button_link?.url || '/'}
          >
            <button className='mobile-menu-popup__btn'>
              <p>{HeaderMobile?.button_link?.title}</p>
              <IconArrow />
            </button>
          </Link>

          <p className='mobile-menu-popup__hotline'>
            <span>Hotline:</span>
            <Link
              target='__blank'
              href={`tel:${HeaderMobile?.hotline_1}`}
            >
              {HeaderMobile?.hotline_1}
            </Link>
            <span>-</span>
            <Link
              target='__blank'
              href={`tel:${HeaderMobile?.hotline_2}`}
            >
              {HeaderMobile?.hotline_2}
            </Link>
          </p>

          <div className='mobile-menu__social'>
            {Array.isArray(HeaderMobile?.social) &&
              HeaderMobile?.social?.map((item: SocialLink, index: number) => {
                return (
                  <Link
                    key={index}
                    href={item?.link?.url || '/'}
                    target={item?.link?.target}
                  >
                    <ImageFallback
                      src={item?.icon?.url}
                      alt={item?.icon?.alt}
                      width={40}
                      height={40}
                    />
                  </Link>
                )
              })}
          </div>
        </div>
      </div>
    </div>
  )
}

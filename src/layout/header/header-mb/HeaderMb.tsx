'use client'
import ImageFallback from '@/components/image/ImageFallback'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import IconMenu from '@/layout/header/header-mb/IconMenu'
import IconSearch from '@/layout/header/header-mb/IconSearch'
import MenuPopup from '@/layout/header/header-mb/MenuPopup'
import SearchPopup from '@/layout/header/header-mb/SearchPopup'
import {DataLocation, HeaderMobile} from '@/types/options.interface'
import Link from 'next/link'
import './Header-mb.css'

export default function HeaderMb({
  HeaderMobile,
  Location,
}: {
  HeaderMobile: HeaderMobile
  Location: DataLocation
}) {
  return (
    <>
      <header
        id='header-mobile'
        className='header__wrapper'
      >
        <div className='header-mobile__container'>
          <div className='header-mobile__left'>
            <Link href='/'>
              <ImageFallback
                className='header__logo'
                src={HeaderMobile?.logo?.url}
                alt={HeaderMobile?.logo?.alt}
                width={102}
                height={40}
              />
            </Link>
          </div>

          <div className='header-mobile__right'>
            <Sheet>
              <SheetTrigger className='header-mobile__search'>
                <IconSearch />
              </SheetTrigger>
              <SheetContent
                side='bottom'
                className='z-[100] w-full bg-white [&>button]:top-[0.5rem] [&>button]:right-[1rem] [&>button]:border-none [&>button]:bg-white [&>button]:p-[0.6875rem_1rem_0.6875rem_0.75rem] [&>button]:opacity-[1] [&>button]:focus:ring-0 [&>button]:focus:ring-offset-0 [&>button]:focus-visible:ring-0 [&>button]:focus-visible:ring-offset-0 [&>button>svg]:size-[1rem]'
              >
                <SheetHeader className='hidden'>
                  <SheetTitle>Search</SheetTitle>
                </SheetHeader>
                <SearchPopup dataSearch={HeaderMobile?.search} />
              </SheetContent>
            </Sheet>

            <Sheet>
              <SheetTrigger className='flex cursor-pointer items-center gap-[0.5rem] rounded-[0rem_0.5rem_0.5rem_0rem] border-none bg-[rgba(255,255,255,0.2)] p-[0.6875rem_1rem_0.6875rem_0.75rem] text-[0.75rem] leading-[150%] font-medium text-white backdrop-blur-[5px]'>
                <IconMenu />
                <p>Menu</p>
              </SheetTrigger>
              <SheetContent className='z-[100] w-full bg-white [&>button]:top-[0.5rem] [&>button]:right-[1rem] [&>button]:border-none [&>button]:bg-white [&>button]:p-[0.6875rem_1rem_0.6875rem_0.75rem] [&>button]:opacity-[1] [&>button]:focus:ring-0 [&>button]:focus:ring-offset-0 [&>button]:focus-visible:ring-0 [&>button]:focus-visible:ring-offset-0 [&>button>svg]:size-[1rem]'>
                <SheetHeader className='hidden'>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <MenuPopup
                  page_link={HeaderMobile?.page_list}
                  Location={Location}
                  HeaderMobile={HeaderMobile}
                />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  )
}

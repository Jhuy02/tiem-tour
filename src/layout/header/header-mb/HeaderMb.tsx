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
                className='bg-white z-[100] w-full [&>button]:focus:ring-offset-0 [&>button]:focus:ring-0 [&>button]:focus-visible:ring-offset-0 [&>button]:focus-visible:ring-0 [&>button]:p-[0.6875rem_1rem_0.6875rem_0.75rem] [&>button]:bg-white [&>button]:top-[0.5rem] [&>button]:opacity-[1] [&>button]:right-[1rem] [&>button>svg]:size-[1rem] [&>button]:border-none'
              >
                <SheetHeader className='hidden'>
                  <SheetTitle>Search</SheetTitle>
                </SheetHeader>
                <SearchPopup dataSearch={HeaderMobile?.search} />
              </SheetContent>
            </Sheet>

            <Sheet>
              <SheetTrigger className='flex p-[0.6875rem_1rem_0.6875rem_0.75rem] items-center gap-[0.5rem] rounded-[0rem_0.5rem_0.5rem_0rem] bg-[rgba(255,255,255,0.2)] backdrop-blur-[5px] text-white text-[0.75rem] font-medium leading-[150%] cursor-pointer border-none'>
                <IconMenu />
                <p>Menu</p>
              </SheetTrigger>
              <SheetContent className='bg-white z-[100] w-full [&>button]:focus:ring-offset-0 [&>button]:focus:ring-0 [&>button]:focus-visible:ring-offset-0 [&>button]:focus-visible:ring-0 [&>button]:p-[0.6875rem_1rem_0.6875rem_0.75rem] [&>button]:bg-white [&>button]:top-[0.5rem] [&>button]:opacity-[1] [&>button]:right-[1rem] [&>button>svg]:size-[1rem] [&>button]:border-none'>
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

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import useIsMobile from '@/hooks/useIsMobile'
import {cn} from '@/lib/utils'
import {gsap} from 'gsap'
import {usePathname, useRouter, useSearchParams} from 'next/navigation'
import {forwardRef, useEffect} from 'react'
import ReactPaginate from 'react-paginate'

import ScrollToPlugin from 'gsap/ScrollToPlugin'
import EaselPlugin from 'gsap/EaselPlugin'

gsap.registerPlugin(ScrollToPlugin, EaselPlugin)

type TProps = {
  pageCurrent: number
  pageCount: number
  className?: string
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

const PaginationV2 = forwardRef(
  (
    {pageCurrent, pageCount = 10, className, setCurrentPage}: TProps,
    ref?: any,
  ) => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const pathName = usePathname()

    const isMobile = useIsMobile()

    useEffect(() => {
      if (searchParams?.get('page')) {
        setCurrentPage(Number(searchParams.get('page')))
      }
    }, [searchParams])

    function handleChangePage(page: number) {
      if (typeof window === 'undefined') return
      if (page === pageCurrent) return
      const paramNew = new URLSearchParams(searchParams ?? '')

      if (page <= 1) {
        paramNew.delete('page')
        setCurrentPage(1)
      } else {
        paramNew.set('page', String(page))
        setCurrentPage(Number(page))
      }
      router.push(pathName + '?' + paramNew.toString(), {
        scroll: false,
      })
      if (ref && ref.current) {
        gsap.to(window, {
          duration: isMobile ? 1 : 0.5,
          scrollTo: {y: ref.current.offsetTop - 80},
          ease: 'power2.out',
        })
      }
    }

    return (
      <ReactPaginate
        activeClassName='!bg-[#25ACAB] text-white lg:hover:bg-[#25ACAB] border-none cursor-pointer'
        pageClassName='size-[2.5rem] xsm:size-[2rem] rounded-full flex-center text-[#303030]/80 text-[0.875rem] leading-[2.5rem] bg-transparent [&>a]:size-full [&>a]:flex-center select-none lg:hover:bg-[#25ACAB] xsm:text-[0.7rem] lg:hover:text-white border-black/12 border cursor-pointer'
        previousLabel={
          <button className='group size-[2rem] rounded-full flex-center xsm:size-[2rem] cursor-pointer'>
            <ICArrowPagination className='ease-pagination-bezier size-[1.5rem] transition-all duration-300 lg:group-hover:scale-[1.2]' />
          </button>
        }
        nextLabel={
          <button className='group size-[2rem] rounded-full flex-center xsm:size-[2rem] cursor-pointer'>
            <ICArrowPagination className='ease-pagination-bezier size-[1.5rem] rotate-180 transition-all duration-300 lg:group-hover:scale-[1.2]' />
          </button>
        }
        breakClassName='w-fit xsm:size-[2rem] rounded-[0.75rem] flex-center select-none'
        breakLabel={
          <div className='flex items-center space-x-[0.33rem]'>
            <ICBreakPagination className='size-[0.25rem]' />
            <ICBreakPagination className='size-[0.25rem]' />
            <ICBreakPagination className='size-[0.25rem]' />
          </div>
        }
        onPageChange={(e) => {
          handleChangePage(Number(e?.selected) + 1)
        }}
        pageRangeDisplayed={1}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        marginPagesDisplayed={isMobile ? 1 : 3}
        forcePage={pageCurrent - 1}
        className={cn(
          'mx-auto flex w-fit items-center space-x-[0.62rem] font-lens *:font-lens',
          className,
        )}
      />
    )
  },
)

PaginationV2.displayName = 'PaginationV2'
export default PaginationV2

const ICArrowPagination = ({className}: {className?: string}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      className={className}
    >
      <path
        d='M18 17L13 12L18 7M11 17L6 12L11 7'
        stroke='#303030'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

const ICBreakPagination = ({className}: {className?: string}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      className={className}
    >
      <path
        d='M6 17L11 12L6 7M13 17L18 12L13 7'
        stroke='#303030'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

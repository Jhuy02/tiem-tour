'use client'
import { ItemTourSuggested } from '@/components/itemTour/ItemTourSuggess'
import PaginationV2 from '@/components/pagination/PaginationV2'
import { fetcher } from '@/lib/swr'
import { cn } from '@/lib/utils'
import { ICategoriNews, IPost } from '@/types/news.interface'
import { useTranslations } from 'next-intl'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useMemo, useRef, useState } from 'react'
import useSWR from 'swr'

interface Itext {
  subDiscover: string
  title: string
  latestnews: string
}
export default function AutresGuides({
  text,
  dataCategori,
  lang,
}: {
  text: Itext
  dataCategori: ICategoriNews[]
  lang: string
}) {
  const t = useTranslations('blog')
  const sectionRef = useRef<HTMLElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [page, setPage] = useState<number>(1)
  const router = useRouter()
  const pathName = usePathname()
  const searchParams = useSearchParams()
  const slugCategory = searchParams ? searchParams.get('category') : 'all'
  const slugpage = searchParams ? searchParams.get('page') : '1'
  const query = useMemo(() => {
    if (!searchParams?.size)
      return `/posts?lang=${lang}${slugCategory === 'all' || slugCategory === null ? '' : '&category=' + slugCategory}&page=${page}&per_page=9`
    return `/posts?lang=${lang}${slugCategory === 'all' || slugCategory === null ? '' : '&category=' + slugCategory}&page=${slugpage ? slugpage : page}&per_page=9`
  }, [searchParams, slugpage, lang, slugCategory, page])
  const {data, isLoading} = useSWR(query, fetcher, {
    revalidateIfStale: false,
    revalidateOnReconnect: false,
  })
  const handleSelectSortOption = (sortOption: ICategoriNews) => {
    const paramNew = new URLSearchParams(searchParams ?? '')
    if (sortOption?.slug !== 'all') {
      paramNew.set('category', sortOption.slug)
      paramNew.delete('page')
    } else {
      paramNew.set('category', 'all')
      paramNew.delete('page')
    }
    router.push(pathName + paramNew.toString() && '?' + paramNew.toString(), {
      scroll: false,
    })
    if (sectionRef.current instanceof HTMLElement) {
      sectionRef.current.scrollIntoView({behavior: 'smooth'})
    }
  }
  return (
    <section className='px-[5rem] xsm:px-[0rem] xsm:mt-[2.5rem]'>
      <div className='flex xsm:flex-col sm:justify-between sm:items-center mb-[2.5rem] xsm:mb-[1.13rem]'>
        <div className='xsm:px-[1rem] relative h-[5.4375rem] xsm:h-[3.8125rem] flex items-end'>
          <p className='absolute left-[1.31rem] top-[-1rem] xsm:top-0 xsm:left-[0.71rem] text-linear h2-subtitle xsm:text-[1rem] xsm:font-normal font-nvn !leading-[2] pl-[0.5rem]'>
            {text?.subDiscover}
          </p>
          <h2 className='text-textDark font-lens xsm:!text-[1.6875rem] xsm:!font-bold xsm:!leading-[1.1] xsm:!tracking-[-0.0675rem]'>
            {text?.title}
          </h2>
        </div>
        <div
          ref={containerRef}
          className='xsm:px-[1rem] flex sm:flex-wrap sm:space-x-[1.9375rem] xsm:overflow-hidden xsm:overflow-x-auto scrollbar-hidden'
        >
          <div
            onClick={() => {
              handleSelectSortOption({
                name: '',
                slug: 'all',
              })
            }}
            className={cn(
              (slugCategory === 'all' || slugCategory === null) && 'active',
              'group p-[0.5rem_0rem] xsm:p-[0.5rem_1.375rem_0.4375rem_1.375rem] [&.active]:border-b-[3px] border-solid border-[#064C26]',
            )}
          >
            <p
              className={cn(
                (slugCategory === 'all' || slugCategory === null) && 'active',
                'xsm:w-max cursor-pointer pc-16-s text-linear !bg-[linear-gradient(180deg,#292929cc_0%,#292929cc_100%)] [&.active]:!bg-[linear-gradient(180deg,#064C26_0%,#146036_100%)] group-hover:!bg-[linear-gradient(180deg,#064C26_0%,#146036_100%)]',
              )}
            >
              {text?.latestnews}
            </p>
          </div>
          {Array.isArray(dataCategori) &&
            dataCategori?.map((item: ICategoriNews, index: number) => (
              <div
                key={index}
                onClick={() => handleSelectSortOption(item)}
                className={cn(
                  slugCategory === item?.slug && 'active',
                  'group p-[0.5rem_0rem] xsm:p-[0.5rem_1.375rem_0.4375rem_1.375rem] [&.active]:border-b-[3px] border-solid border-[#064C26]',
                )}
              >
                <p
                  className={cn(
                    slugCategory === item?.slug && 'active',
                    'xsm:w-max cursor-pointer pc-16-s text-linear !bg-[linear-gradient(180deg,#292929cc_0%,#292929cc_100%)] [&.active]:!bg-[linear-gradient(180deg,#064C26_0%,#146036_100%)] group-hover:!bg-[linear-gradient(180deg,#064C26_0%,#146036_100%)]',
                  )}
                >
                  {item?.name}
                </p>
              </div>
            ))}
        </div>
      </div>
      <div className='xsm:px-[1rem] grid grid-cols-3 xsm:grid-cols-1 gap-[1rem] xsm:gap-[2rem]'>
        {isLoading
          ? Array(6)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className='animate-pulse bg-white h-[18.125rem] xsm:h-[11.57938rem] rounded-[0.5rem] p-[1rem]'
                >
                  <div className='w-full bg-gray-300 rounded-md' />{' '}
                  {/* Skeleton image */}
                  <div className='h-4 bg-gray-300 rounded w-3/4 my-2' />{' '}
                  {/* Skeleton title */}
                  <div className='h-3 bg-gray-200 rounded w-1/2' />{' '}
                  {/* Skeleton category */}
                </div>
              ))
          : !data ?
            <div>{t('dontDataPost')}</div>
          : data?.posts?.map((item: IPost, index: number) => (
            <ItemTourSuggested
              key={index}
              category={item?.categories[0]}
              slug={item?.slug}
              date={{
                month: item?.date?.month,
                day: item?.date?.day,
              }}
              imageUrl={item?.featured_image}
              title={item?.title}
              lang={lang}
              className="xsm:h-[15.125rem]"
            />
          ))
        }
      </div>
      <div className='pt-[3rem] sm:pb-[8rem] xsm:pb-[3.38rem]'>
        {data && data?.pagination?.total_pages > 1 && (
          <PaginationV2
            pageCurrent={page}
            setCurrentPage={setPage}
            pageCount={data ? data?.pagination?.total_pages : 0}
            ref={containerRef}
            className='mt-[2rem]'
          />
        )}
      </div>
    </section>
  )
}

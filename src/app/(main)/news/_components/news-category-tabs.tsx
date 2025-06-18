'use client'
import {Categories} from '@/types/news.interface'
import {usePathname, useRouter, useSearchParams} from 'next/navigation'
import {Suspense, useRef} from 'react'

interface NewsCategoryTabsProps {
  categories: Categories[]
  onTabChange?: () => void
}

const NewsCategoryTabs = ({categories, onTabChange}: NewsCategoryTabsProps) => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const pathName = usePathname()
  const searchParams = useSearchParams()
  const slugCategory = searchParams ? searchParams.get('category') : 'all'

  const handleSelectSortOption = (sortOption: Categories) => {
    const paramNew = new URLSearchParams(searchParams ?? '')
    if (sortOption?.slug !== '') {
      paramNew.set('category', sortOption.slug)
      paramNew.delete('page')
    } else {
      paramNew.set('category', '')
      paramNew.delete('page')
    }
    router.push(pathName + paramNew.toString() && '?' + paramNew.toString(), {
      scroll: false,
    })
    if (sectionRef.current instanceof HTMLElement) {
      sectionRef.current.scrollIntoView({behavior: 'smooth'})
    }
    onTabChange?.()
  }

  return (
    <div
      ref={sectionRef}
      className='flex justify-between items-center xsm:flex-col xsm:items-start xsm:mt-[4rem]'
    >
      <h2 className='text-[3rem] leading-[3.9rem] text-[#3B3943] font-dvn-luckiest-guy xsm:text-[1.5625rem] xsm:leading-[2.03125rem]'>
        News List
      </h2>
      <Suspense>
        <ul className='flex items-center *:flex *:items-center *:justify-center *:p-[0.8125rem_1.25rem] *:font-trip-sans *:text-[1.125rem] *:leading-[1.4625rem] *:tracking-[0.00281rem] *:font-[900] *:relative *:uppercase *:cursor-pointer xsm:*:'>
          <li
            onClick={() =>
              handleSelectSortOption({
                name: '',
                slug: '',
              })
            }
            className={
              'relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[0.313rem] after:bg-[#25ACAB] after:origin-left after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out' +
              (slugCategory === '' || slugCategory === null
                ? ' opacity-100 text-[#303030] cursor-default after:scale-x-100'
                : ' opacity-40 text-[#303030]/40 cursor-pointer') +
              ' transition-opacity duration-300'
            }
          >
            All News
          </li>
          {categories.map((cat) => (
            <li
              key={cat.slug}
              onClick={() => handleSelectSortOption(cat)}
              className={
                'relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[0.313rem] after:bg-[#25ACAB] after:origin-left after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out' +
                (slugCategory === cat.slug
                  ? ' opacity-100 text-[#303030] cursor-default after:scale-x-100'
                  : ' opacity-40 text-[#303030]/40 cursor-pointer') +
                ' transition-opacity duration-300'
              }
            >
              {cat.name}
            </li>
          ))}
        </ul>
      </Suspense>
    </div>
  )
}

export default NewsCategoryTabs

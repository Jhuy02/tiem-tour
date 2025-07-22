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
      paramNew.delete('category')
      paramNew.delete('page')
    }
    router.push(pathName + paramNew.toString() && '?' + paramNew.toString(), {
      scroll: false,
    })
    if (sectionRef.current instanceof HTMLElement) {
      const topOffset = 80
      const sectionTop =
        sectionRef.current.getBoundingClientRect().top +
        window.scrollY -
        topOffset
      window.scrollTo({top: sectionTop, behavior: 'smooth'})
    }
    onTabChange?.()
  }

  return (
    <div
      ref={sectionRef}
      className='xsm:flex-col xsm:items-start xsm:mt-[5rem] flex items-center justify-between'
    >
      <h2 className='font-dvn-luckiest-guy xsm:text-[1.5625rem] xsm:leading-[2.03125rem] text-[3rem] leading-[3.9rem] text-[#3B3943]'>
        News List
      </h2>
      <Suspense>
        <ul className='*:font-trip-sans xsm:*: flex items-center *:relative *:flex *:cursor-pointer *:items-center *:justify-center *:p-[0.8125rem_1.25rem] *:text-[1.125rem] *:leading-[1.4625rem] *:font-[900] *:tracking-[0.00281rem] *:uppercase'>
          <li
            onClick={() =>
              handleSelectSortOption({
                name: '',
                slug: '',
              })
            }
            className={
              'relative after:absolute after:bottom-0 after:left-0 after:h-[0.313rem] after:w-full after:origin-left after:scale-x-0 after:bg-[#25ACAB] after:transition-transform after:duration-300 after:ease-in-out after:content-[""]' +
              (slugCategory === '' || slugCategory === null
                ? ' cursor-default text-[#303030] opacity-100 after:scale-x-100'
                : ' cursor-pointer text-[#303030]/40 opacity-40') +
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
                'relative after:absolute after:bottom-0 after:left-0 after:h-[0.313rem] after:w-full after:origin-left after:scale-x-0 after:bg-[#25ACAB] after:transition-transform after:duration-300 after:ease-in-out after:content-[""]' +
                (slugCategory === cat.slug
                  ? ' cursor-default text-[#303030] opacity-100 after:scale-x-100'
                  : ' cursor-pointer text-[#303030]/40 opacity-40') +
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

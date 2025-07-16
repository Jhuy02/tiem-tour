
import { Banner } from '@/app/(main)/tours/[slug]/_components/overview-compound/banner'
import { Content } from '@/app/(main)/tours/[slug]/_components/overview-compound/content'
import { Tab } from '@/app/(main)/tours/[slug]/_components/overview-compound/tab'
import { Tripadvisor } from '@/app/(main)/tours/[slug]/_components/overview-compound/tripadvisor'
import { TripadvisorTab } from '@/app/(main)/tours/[slug]/_components/overview-compound/tripadvisor-tab'

import BookTourNow from '@/app/(main)/tours/[slug]/BookTourNow'
import NotFound from '@/components/NotFound'
import fetchData from '@/fetches/fetchData'


export default async function TourDetail ({
  params,
}: {
  params: Promise<{slug: string}>
}) {

  const {slug} = await params
  const {data} = await fetchData({
    api: `custom/v1/tour-detail/${slug}`,
    option: {
      next: {
        revalidate: 60,
      },
    },
  })


  if (!data || slug === 'undefined') {
    return <NotFound />
  }
  
  return (
    <main className='h-[1000rem]'>
      <Banner />
      <div className='relative h-auto'>
        <Tab />
        <div
          id='tour-detail'
          className='max-w-[87.5rem] mx-auto flex xsm:px-[1rem] xsm:mt-[0.5rem] xsm:flex-col space-x-[3.75rem] xsm:space-x-0 mt-[2rem] h-auto relative'
        >
          <div>
            <Content />
          </div>

          <div className='w-[29rem] p-[1.25rem] rounded-[1.5rem] border border-[#EDEDED] bg-white h-fit sticky top-[6.5rem] xsm:hidden'>
            <Tripadvisor />
            <TripadvisorTab />
          </div>
        </div>
      </div>

      <BookTourNow />
    </main>
  )
}

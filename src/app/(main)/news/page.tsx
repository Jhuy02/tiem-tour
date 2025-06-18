import fetchData from '@/fetches/fetchData'
import Featured from './_components/featured'
import NewsList from './_components/news-list'
import BannerV2 from '@/app/_components/banner-v2'
import {Suspense} from 'react'

// Simple loading component for Suspense fallback
const NewsLoading = () => (
  <div className='flex items-center justify-center py-8'>
    <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600'></div>
    <span className='ml-3 text-gray-600'>Loading news...</span>
  </div>
)

const NewsPage = async () => {
  const [{acf}, featured, {data: news}, categories] = await Promise.all([
    fetchData({
      api: 'wp/v2/pages/29?_fields=acf&acf_format=standard',
    }),
    fetchData({
      api: 'custom/v1/outstanding-news',
    }),
    fetchData({
      api: 'api/v1/get-all/post?page=1&limit=12',
    }),
    fetchData({
      api: 'custom/v1/all-categories',
    }),
  ])

  return (
    <>
      <BannerV2 data={acf.compound_banner} />
      <div className='bg-[url("/background.webp")] bg-contain pt-[6.25rem] xsm:pt-0'>
        <section className='max-w-[87.375rem] mx-auto font-trip-sans xsm:w-full xsm:overflow-hidden xsm:pt-[2rem] xsm:pb-[2.75rem] xsm:px-[1rem] xsm:flex xsm:flex-col'>
          <h2 className='xsm:block hidden text-[1.5625rem] leading-[2.03125rem] text-[#3B3943] uppercase font-dvn-luckiest-guy float-left'>
            The best choose
          </h2>
          <div className='flex items-center xsm:flex-col xsm:relative xsm:my-0 my-[6.25rem]'>
            <Featured featured={featured} />
          </div>
          <Suspense fallback={<NewsLoading />}>
            <NewsList
              news={news}
              categories={categories}
            />
          </Suspense>
        </section>
      </div>
    </>
  )
}

export default NewsPage

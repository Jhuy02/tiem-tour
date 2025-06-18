import fetchData from '@/fetches/fetchData'
import Featured from './_components/featured'
import NewsList from './_components/news-list'

const NewsPage = async () => {
  const [{acf}, featured, {data: news}] = await Promise.all([
    fetchData({
      api: 'wp/v2/pages/29?_fields=acf&acf_format=standard',
    }),
    fetchData({
      api: 'custom/v1/outstanding-news',
    }),
    fetchData({
      api: 'api/v1/get-all/post?page=1&limit=12',
    }),
  ])

  return (
    <section className='max-w-[87.375rem] mx-auto font-trip-sans xsm:w-full xsm:overflow-hidden xsm:pt-[2rem] xsm:pb-[2.75rem] xsm:px-[1rem] xsm:flex xsm:flex-col'>
      <h2 className='xsm:block hidden text-[1.5625rem] leading-[2.03125rem] text-[#3B3943] uppercase font-dvn-luckiest-guy float-left'>
        The best choose
      </h2>
      <div className='flex items-center xsm:flex-col xsm:relative my-[6.25rem] xsm:my-0'>
        <Featured featured={featured} />
      </div>
      <NewsList news={news} />
    </section>
  )
}

export default NewsPage

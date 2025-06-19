import Banner from '@/app/_components/banner/Banner'
import Customer from '@/app/_components/customer/customer'
import Customize from '@/app/_components/customize/customize'
import Discover from '@/app/_components/discover/discover'
import Explore from '@/app/_components/explore/explore'
import Guild from '@/app/_components/guild/guild'
import Mysterious from '@/app/_components/mysterious'
import OurTour from '@/app/_components/our-tour'
import fetchData from '@/fetches/fetchData'

export default async function Page() {
  const [dataHome, dataTaxonomies, dataPostOurTour, dataGuildNews] =
    await Promise.all([
      fetchData({api: `wp/v2/pages/19?_fields=acf&acf_format=standard`}),
      fetchData({api: `api/v1/taxonomies?taxonomies=location,duration`}),
      fetchData({api: `api/v1/home-our-tour`}),
      fetchData({api: `api/v1/guild-news`}),
    ])

  const {data: discoverTours} = await fetchData({
    api: `api/v1/get-all/tour?page=1&limit=6&tax=location&location=${dataTaxonomies?.location[0].slug}&order=DESC&orderby=date`,
  })

  return (
    <>
      <Banner
        dataBanner={dataHome?.acf?.banner_home}
        dataTaxonomies={dataTaxonomies}
      />
      <Explore data={dataHome?.acf?.explore} />
      <OurTour
        data={dataHome?.acf?.our_tour}
        dataPostOurTour={dataPostOurTour?.our_tour}
        total={dataPostOurTour?.total}
      />
      <Discover
        data={dataHome?.acf?.discover}
        tours={discoverTours}
        location={dataTaxonomies?.location}
      />
      <Mysterious data={dataHome?.acf?.mysterious_beauty} />
      <Customize data={dataHome?.acf?.customize} />
      <Customer data={dataHome?.acf?.customer} />
      <Guild
        data={dataHome?.acf?.guild_travel}
        guild={dataGuildNews}
      />
    </>
  )
}

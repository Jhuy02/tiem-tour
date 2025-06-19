import Banner from '@/app/_components/banner/Banner'
import Explore from '@/app/_components/explore/explore'
import Mysterious from '@/app/_components/mysterious'
import fetchData from '@/fetches/fetchData'
import Discover from '@/app/_components/discover/discover'
import Customize from '@/app/_components/customize/customize'

export default async function Page() {
  const [dataHome, dataTaxonomies] = await Promise.all([
    fetchData({api: `wp/v2/pages/19?_fields=acf&acf_format=standard`}),
    fetchData({api: `api/v1/taxonomies?taxonomies=location,duration`}),
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
      <Discover
        data={dataHome?.acf?.discover}
        tours={discoverTours}
        location={dataTaxonomies?.location}
      />
      <Mysterious data={dataHome?.acf?.mysterious_beauty} />
      <Customize data={dataHome?.acf?.customize} />
    </>
  )
}

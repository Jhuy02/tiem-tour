import Banner from '@/app/_components/Banner'
import fetchData from '@/fetches/fetchData'
import Explore from '@/app/_components/explore/explore'
import Discover from '../_components/discover/discover'

export default async function Page() {
  const [dataHome, {location}] = await Promise.all([
    fetchData({api: `wp/v2/pages/19?_fields=acf&acf_format=standard`}),
    fetchData({api: `api/v1/taxonomies?taxonomies=location`}),
  ])

  const {data: discoverTours} = await fetchData({
    api: `api/v1/get-all/tour?page=1&limit=6&tax=location&location=${location[0].slug}&order=DESC&orderby=date`,
  })

  return (
    <>
      <Banner dataBanner={dataHome?.acf?.banner_home} />
      <Explore data={dataHome?.acf?.explore} />
      <Discover
        data={dataHome?.acf?.discover}
        tours={discoverTours}
        location={location}
      />
    </>
  )
}

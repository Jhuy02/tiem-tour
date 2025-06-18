import Banner from '@/app/_components/Banner'
import fetchData from '@/fetches/fetchData'
import Explore from '@/app/_components/explore/explore'

export default async function Page() {
  const [dataHome] = await Promise.all([
    fetchData({api: `wp/v2/pages/19?_fields=acf&acf_format=standard`}),
  ])
  return (
    <>
      <Banner dataBanner={dataHome?.acf?.banner_home} />
      <Explore data={dataHome?.acf?.explore} />
    </>
  )
}

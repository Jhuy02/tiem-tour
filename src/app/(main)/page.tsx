import Banner from '@/app/_components/banner/Banner'
import Mysterious from '@/app/_components/mysterious'
import fetchData from '@/fetches/fetchData'

export default async function Page() {
  const [dataHome, dataTaxonomies] = await Promise.all([
    fetchData({api: `wp/v2/pages/19?_fields=acf&acf_format=standard`}),
    fetchData({api: `api/v1/taxonomies?taxonomies=location,duration`}),
  ])
  return (
    <>
      <Banner
        dataBanner={dataHome?.acf?.banner_home}
        dataTaxonomies={dataTaxonomies}
      />
      <Mysterious data={dataHome?.acf?.mysterious_beauty} />
    </>
  )
}

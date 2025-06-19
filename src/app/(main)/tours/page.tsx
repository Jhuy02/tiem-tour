import SectionBestChoose from '@/app/(main)/tours/section-best-choose'
import SectionDiscovery from '@/app/(main)/tours/section-discovery'
import BannerV2 from '@/app/_components/banner-v2'
import fetchData from '@/fetches/fetchData'
import React from 'react'

export default async function TourListPage() {
  const {
    acf: {compound_banner, tour_hots},
  } = await fetchData({
    api: `wp/v2/pages/31?_fields=acf&acf_format=standard`,
  })
  const {title: best_choose_title, list_of_featured_tours: best_choose_list} =
    tour_hots
  const bestChooseTourList = await Promise.all(
    best_choose_list.map((id: number) =>
      fetchData({
        method: 'GET',
        api: `api/v2/tour-detail/${id}`,
      }),
    ),
  )
  return (
    <main className="bg-center bg-no-repeat bg-cover bg-[url('/images/background-page-mobile.webp')] sm:bg-[url('/images/background-page-pc.webp')]">
      <BannerV2
        data={compound_banner}
        variant='secondary'
      />
      <SectionBestChoose
        title={best_choose_title}
        tour_list={bestChooseTourList}
      />
      <SectionDiscovery />
    </main>
  )
}

import TourBestChoose from '@/app/(main)/tours/_components/tour-best-choose'
import TourDiscoveryTrip from '@/app/(main)/tours/_components/tour-discovery-trip'
import BannerV2 from '@/app/_components/banner-v2'
import fetchData from '@/fetches/fetchData'
import queryString from 'query-string'

type Props = {
  searchParams: Promise<{[key: string]: string | string[] | undefined}>
}

export default async function TourListPage({searchParams}: Props) {
  const currSearchParams = await searchParams
  // Tạo query string từ searchParams
  const queryStr = queryString.stringify(currSearchParams, {
    arrayFormat: 'comma', // hoặc 'bracket' nếu backend yêu cầu
    skipNull: true,
    skipEmptyString: true,
  })
  const [acfRes, discoveryTourRes, tourTaxonomyRes, bestChooseTourRes] =
    await Promise.all([
      fetchData({
        api: `wp/v2/pages/31?_fields=acf&acf_format=standard`,
      }),
      fetchData({
        api: `api/v1/get-all/tour?limit=12&tax=location,duration&order=DESC&${queryStr}`,
      }),
      fetchData({
        api: `api/v1/tour-taxonomies`,
      }),
      fetchData({
        api: `api/v2/hot-tours`,
      }),
    ])
  const {compound_banner, tour_hots} = acfRes.acf

  return (
    <main className="xsm:pb-[5rem] bg-[url('/images/background-page-mobile.webp')] bg-cover bg-center bg-no-repeat pb-[12rem] max-sm:pb-0 sm:bg-[url('/images/background-page-pc.webp')]">
      <BannerV2
        data={compound_banner}
        variant='secondary'
      />
      <TourBestChoose
        title={tour_hots.title}
        tour_list={bestChooseTourRes}
      />
      <TourDiscoveryTrip
        initialQueryParams={queryStr}
        initialPage={discoveryTourRes.page}
        initialTotalPages={discoveryTourRes.totalPages}
        initialTours={discoveryTourRes.data}
        tourLocationTax={tourTaxonomyRes.location}
        tourDurationTax={tourTaxonomyRes.duration}
      />
    </main>
  )
}

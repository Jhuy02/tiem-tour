import BookingForm from '@/app/(main)/tours/[slug]/_components/compound/booking-form'
import BookingFormMobile from '@/app/(main)/tours/[slug]/_components/compound/booking-form-mobile.tsx'
import { Banner } from '@/app/(main)/tours/[slug]/_components/overview-compound/banner'
import { Content } from '@/app/(main)/tours/[slug]/_components/overview-compound/content'
import { Tab } from '@/app/(main)/tours/[slug]/_components/overview-compound/tab'
import { Tripadvisor } from '@/app/(main)/tours/[slug]/_components/overview-compound/tripadvisor'
import { TripadvisorTab } from '@/app/(main)/tours/[slug]/_components/overview-compound/tripadvisor-tab'
import TripsForYour from '@/app/(main)/tours/[slug]/_components/tripsforyour'
import PageProvider from '@/app/(main)/tours/[slug]/context/PageProvider'

import NotFound from '@/components/NotFound'
import fetchData from '@/fetches/fetchData'

export default async function TourDetail({
  params,
}: {
  params: Promise<{slug: string}>
}) {
  const {slug} = await params
  const [data, dataTripsForYour] =  await Promise.all([
    fetchData({
      api: `custom/v1/tour-detail/${slug}`,
      option: {
        next: {
          revalidate: 10,
        },
      },
    }),
    fetchData({
      api: `api/v1/related-tour/${slug}?limit=10`,
      option: {
        next: {
          revalidate: 10,
        },
      },
    }),
  ])

  if (!data || slug === 'undefined') {
    return <NotFound />
  }
  // console.log(data)

  return (
    <PageProvider data={data}>
      <main>
        <Banner data={data} />
        <div className='relative h-auto'>
          <Tab />
          <div
            id='tour-detail'
            className='xsm:px-[1rem] xsm:mt-[0.5rem] xsm:flex-col xsm:space-x-0 relative mx-auto mt-[2rem] flex h-auto max-w-[87.5rem] space-x-[3.75rem]'
          >
            <div>
              <Content data={data} />
            </div>

            <div className='xsm:hidden sticky top-[6.5rem] h-fit w-[29rem] rounded-[1.5rem] border border-[#EDEDED] bg-white p-[1.25rem]'>
              <Tripadvisor
                data={data?.acf_fields?.tripadvisor}
                link={data?.acf_fields?.overview.gallery.link.url}
              />
              <TripadvisorTab
                data={data?.acf_fields?.tripadvisor}
                map={data?.taxonomies?.location[0]?.name}
              />
            </div>
          </div>
        </div>

        <BookingForm data={data?.package_tour} />
        <BookingFormMobile data={data?.package_tour} />
        
        <TripsForYour dataTripsForYour={dataTripsForYour?.data} />
      </main>
    </PageProvider>
  )
}

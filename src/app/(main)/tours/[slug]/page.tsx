import BookingForm from '@/app/(main)/tours/[slug]/_components/compound/booking-form'
import BookingFormMobile from '@/app/(main)/tours/[slug]/_components/compound/booking-form-mobile.tsx'
import {Banner} from '@/app/(main)/tours/[slug]/_components/overview-compound/banner'
import {Content} from '@/app/(main)/tours/[slug]/_components/overview-compound/content'
import {Tab} from '@/app/(main)/tours/[slug]/_components/overview-compound/tab'
import {Tripadvisor} from '@/app/(main)/tours/[slug]/_components/overview-compound/tripadvisor'
import {TripadvisorTab} from '@/app/(main)/tours/[slug]/_components/overview-compound/tripadvisor-tab'
import PageProvider from '@/app/(main)/tours/[slug]/context/PageProvider'

import NotFound from '@/components/NotFound'
import fetchData from '@/fetches/fetchData'
import {
  InterGift,
  InterMotorcycle,
  TourDetailApiResType,
} from '@/types/tours.interface'

const MockMotorcycles: InterMotorcycle[] = [
  {name: 'Honda 110cc - Semi automatic', price: 250000},
  {name: 'Honda 111cc - Semi automatic', price: 260000},
  {name: 'Honda 112cc - Semi automatic', price: 270000},
  {name: 'Honda 1133cc - Semi automatic', price: 2880000},
]

const MockGifts: InterGift[] = [
  {name: 'Ha Giang Loop T-shirt', price: 100000},
  {name: 'Ha Giang Loop handbag', price: 200000},
  {name: 'Ha Giang Loop handbag', price: 200000},
]

export default async function TourDetail({
  params,
}: {
  params: Promise<{slug: string}>
}) {
  const {slug} = await params
  const data: TourDetailApiResType = await fetchData({
    api: `custom/v1/tour-detail/${slug}`,
    option: {
      next: {
        revalidate: 60,
      },
    },
  })

  if (!data || slug === 'undefined') {
    return <NotFound />
  }
  console.log(data)

  return (
    <PageProvider data={data}>
      <main className='h-[1000rem]'>
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

        <BookingForm
          motorcycles={MockMotorcycles}
          gifts={MockGifts}
        />
        <BookingFormMobile />
      </main>
    </PageProvider>
  )
}
